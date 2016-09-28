var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/************************************************************************
 * 类名  :  ProductCenterMainPage
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/14
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../scripts/bns/btop.bui.d.ts"/>
///<reference path="../../../scripts/libs/jQuery.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var PageManager = btop.hui.PageManager;
        var WidgetManager = btop.hui.WidgetManager;
        var XiaoShouReferMainPage = (function (_super) {
            __extends(XiaoShouReferMainPage, _super);
            function XiaoShouReferMainPage() {
                _super.apply(this, arguments);
                this.currentSaleCluesPosition = 0;
            }
            XiaoShouReferMainPage.prototype.initView = function () {
                var _this = this;
                bui.DbManager.sessionGet("DeviceInfo").then(function (device) {
                    _this.deviceInfo = device;
                });
                bui.DbManager.sessionGet("UserInfo").then(function (data) {
                    _this.userInfo = data;
                });
                if (this.data['fromQueue']) {
                    this.currentSaleCluesPosition = this.data['fromQueue'];
                }
                //返回主页
                $(this.nodeTypeMap.get('openMainPage')).click(function () {
                    PageManager.to('btop.bui.XiaoShouMainPage');
                });
                //销售线索创建
                $(this.nodeTypeMap.get('chuangJianXiaoShou')).click(function () {
                    PageManager.to('btop.bui.ChuangjianxiaoshouxiansuoPage');
                });
                //返回客户信息
                $(this.nodeTypeMap.get('openClientInforMainPage')).click(function () {
                    PageManager.to('btop.bui.ClientInforMainPage');
                });
                $(this.nodeTypeMap.get('refreshDataNode')).click(function () {
                    _this.refreshData();
                });
                this.loadUI();
            };
            /**
             * @description 刷新数据
             */
            XiaoShouReferMainPage.prototype.refreshData = function () {
                var _this = this;
                if (_this.saleClues) {
                    _this.currentSaleCluesPosition = _this.saleClues.getCurrentPosition();
                }
                //被转介人查询销售线索（列表）
                var reqMsg13 = new bui.ReqMsg();
                reqMsg13.body = {
                    ZJEMPCODE: _this.userInfo.UserId
                };
                bui.HttpUtils.bipHttp('saleLeads_referTeller', reqMsg13).then(function (data) {
                    var resMsg = data;
                    if (resMsg.header.rc == "0000") {
                        if (!!resMsg.body) {
                            bui.DbManager.sessionPut("ReferSaleClues", resMsg.body.SaleList, true, true).then(function () {
                                _this.loadUI();
                            });
                        }
                    }
                    else {
                        bui.BGlobal.Alert.show({ title: "提示", content: resMsg.header.rm });
                    }
                }, function (error) {
                    bui.BGlobal.Alert.show({ title: '提示', content: "网络请求异常" });
                });
            };
            /**
             * @description 加载销售队列数据，并渲染UI界面
             */
            XiaoShouReferMainPage.prototype.loadUI = function () {
                var _this = this;
                //首先判断缓存中是否有销售线索数据
                bui.DbManager.sessionGet("ReferSaleClues", true).then(function (data) {
                    if (data != null) {
                        var saleList = data;
                        _this.saleClues = WidgetManager.byId('saleClueQueue1');
                        _this.saleClues.initData(saleList, 1);
                        _this.saleClues.checkedByIndex(_this.currentSaleCluesPosition ? _this.currentSaleCluesPosition : 1);
                        _this.saleClues.unbind('click').on('click', function (bEvent) {
                            bui.Constant.CHANNEL = "refermain";
                            PageManager.to("btop.bui.XiaoShouXianSuoCreatePage", { saleClue: bEvent[0]["data"]["saleClue"], fromQueue: bEvent[0]["data"]["fromQueue"], data1: 'referMain' });
                        });
                        _this.saleClues.unbind('change').on('change', function (bEvent) {
                            var saleClue = (bEvent[0]['data']['saleClue']);
                            var currentPosition = bEvent[0]['data']['currentPosition'];
                            var updateView = bEvent[0]['data']['notifyUpdateView'];
                            var scope = bEvent[0]['data']['scope'];
                            if (saleClue.STATUS == "有效") {
                                var reqMsg = new bui.ReqMsg();
                                reqMsg.body = {
                                    SERIALNO: saleClue.SERIALNO,
                                    STATUS: saleClue.STATUS,
                                    BRANCH_NO: _this.userInfo.BranchNo,
                                    CEMPCODE: saleClue.CEMPCODE,
                                    ZJEMPCODE: saleClue.ZJEMPCODE,
                                    CUSTNAME: saleClue.CUSTNAME
                                };
                                bui.HttpUtils.bipHttp('saleLeads_status', reqMsg).then(function (resMsg) {
                                    //1.成功后需要更新本地缓存数据，如果失败，请反馈信息给Alert
                                    if (resMsg.header.rc == "0000") {
                                        //saleList[currentPosition] = saleClue;
                                        _this.updateSaleClueBySerialNo(saleClue);
                                        updateView.apply(scope);
                                        _this.loadUI();
                                    }
                                    else {
                                        bui.BGlobal.Alert.show({ title: "提示", content: resMsg.header.rm });
                                    }
                                });
                                return;
                            }
                            else {
                                var pageAlert = bui.BGlobal.PageAlert.show("btop.bui.XiaoShouXianSuoUnvaluablePage", null, {
                                    width: '60%', height: '400px', top: '15%', left: '20%', backgroundcolor: 'white', opacity: '1' });
                                pageAlert.confirmBtn.unbind("click").on("click", function (bevent) {
                                    var reqMsg = new bui.ReqMsg();
                                    reqMsg.body = {
                                        SERIALNO: saleClue.SERIALNO,
                                        STATUS: saleClue.STATUS,
                                        AFFVIEW: bevent[0]["data"],
                                        BRANCH_NO: _this.userInfo.BranchNo,
                                        CEMPCODE: saleClue.CEMPCODE,
                                        ZJEMPCODE: saleClue.ZJEMPCODE,
                                        CUSTNAME: saleClue.CUSTNAME
                                    };
                                    bui.HttpUtils.bipHttp('saleLeads_status', reqMsg).then(function (resMsg) {
                                        //1.成功后需要更新本地缓存数据，如果失败，请反馈信息给Alert
                                        if (resMsg.header.rc == "0000") {
                                            /*saleList[currentPosition] = saleClue;
                                            saleList.splice(currentPosition, 1);*/
                                            _this.updateSaleClueBySerialNo(saleClue);
                                            updateView.apply(scope);
                                            bui.BGlobal.Alert.show({ title: '提示', content: '无效操作成功！' });
                                            _this.loadUI();
                                        }
                                        else {
                                            bui.BGlobal.Alert.show({
                                                title: '提示',
                                                content: resMsg.header.rm
                                            }).setTheme(bui.AlertTheme.Red);
                                        }
                                    }, function (error) {
                                        bui.BGlobal.Alert.show({ title: '提示', content: "网络请求异常" });
                                    });
                                });
                                pageAlert.cancelBtn.unbind("click").on("click", function (bevent) {
                                    console.info(bevent);
                                });
                                return;
                            }
                        });
                    }
                    else {
                        //被转介人查询销售线索（列表）
                        var reqMsg13 = new bui.ReqMsg();
                        reqMsg13.body = {
                            ZJEMPCODE: _this.userInfo.UserId
                        };
                        bui.HttpUtils.bipHttp('saleLeads_referTeller', reqMsg13).then(function (data) {
                            var resMsg = data;
                            if (resMsg.header.rc == "0000") {
                                if (!!resMsg.body) {
                                    bui.DbManager.sessionPut("ReferSaleClues", resMsg.body.SaleList, true, false).then(function (data) {
                                        var saleList = data;
                                        _this.saleClues = WidgetManager.byId('saleClueQueue1');
                                        _this.saleClues.initData(saleList, 1);
                                        /*if (_this.currentSaleCluesPosition >= 3) {
                                            _this.saleClues.checkedByIndex(_this.currentSaleCluesPosition?_this.currentSaleCluesPosition:1);
                                        }*/
                                        _this.saleClues.checkedByIndex(_this.currentSaleCluesPosition ? _this.currentSaleCluesPosition : 1);
                                        _this.saleClues.unbind('click').on('click', function (bEvent) {
                                            bui.Constant.CHANNEL = "refermain";
                                            PageManager.to("btop.bui.XiaoShouXianSuoCreatePage", { saleClue: bEvent[0]["data"]["saleClue"], fromQueue: bEvent[0]["data"]["fromQueue"], data1: 'referMain' });
                                        });
                                        _this.saleClues.unbind('change').on('change', function (bEvent) {
                                            var saleClue = (bEvent[0]['data']['saleClue']);
                                            var currentPosition = bEvent[0]['data']['currentPosition'];
                                            var updateView = bEvent[0]['data']['notifyUpdateView'];
                                            var scope = bEvent[0]['data']['scope'];
                                            var reqMsg = new bui.ReqMsg();
                                            if (saleClue.STATUS == "有效") {
                                                var reqMsg_1 = new bui.ReqMsg();
                                                reqMsg_1.body = {
                                                    SERIALNO: saleClue.SERIALNO,
                                                    STATUS: saleClue.STATUS,
                                                    BRANCH_NO: _this.userInfo.BranchNo,
                                                    CEMPCODE: saleClue.CEMPCODE,
                                                    ZJEMPCODE: saleClue.ZJEMPCODE,
                                                    CUSTNAME: saleClue.CUSTNAME
                                                };
                                                bui.HttpUtils.bipHttp('saleLeads_status', reqMsg_1).then(function (resMsg) {
                                                    //@todo 对接服务器需完善
                                                    //1.成功后需要更新本地缓存数据，如果失败，请反馈信息给Alert
                                                    if (resMsg.header.rc == "0000") {
                                                        //saleList[currentPosition] = saleClue;
                                                        //saleList.splice(currentPosition,1,saleClue);
                                                        _this.updateSaleClueBySerialNo(saleClue);
                                                        //2.更新缓存后，需要及时更新界面
                                                        updateView.apply(scope);
                                                        _this.loadUI();
                                                    }
                                                    else {
                                                        bui.BGlobal.Alert.show({ title: '提示', content: resMsg.header.rm });
                                                    }
                                                }, function (error) {
                                                    bui.BGlobal.Alert.show({ title: "提示", content: resMsg.header.rm });
                                                });
                                            }
                                            else {
                                                var pageAlert = bui.BGlobal.PageAlert.show("btop.bui.XiaoShouXianSuoUnvaluablePage", null, {
                                                    width: '60%', height: '400px', top: '15%', left: '20%', backgroundcolor: 'white', opacity: '1' });
                                                pageAlert.confirmBtn.unbind("click").on("click", function (bevent) {
                                                    var reqMsg = new bui.ReqMsg();
                                                    reqMsg.body = {
                                                        SERIALNO: saleClue.SERIALNO,
                                                        STATUS: saleClue.STATUS,
                                                        AFFVIEW: bevent[0]["data"],
                                                        BRANCH_NO: _this.userInfo.BranchNo,
                                                        CEMPCODE: saleClue.CEMPCODE,
                                                        ZJEMPCODE: saleClue.ZJEMPCODE,
                                                        CUSTNAME: saleClue.CUSTNAME
                                                    };
                                                    bui.HttpUtils.bipHttp('saleLeads_status', reqMsg).then(function (resMsg) {
                                                        //@todo 对接服务器需完善
                                                        //1.成功后需要更新本地缓存数据，如果失败，请反馈信息给Alert
                                                        if (resMsg.header.rc == "0000") {
                                                            /*saleList[currentPosition] = saleClue;
                                                             saleList.splice(currentPosition, 1);*/
                                                            _this.updateSaleClueBySerialNo(saleClue);
                                                            //2.更新缓存后，需要及时更新界面
                                                            updateView.apply(scope);
                                                            bui.BGlobal.Alert.show({ title: '提示', content: '无效操作成功！' });
                                                            _this.loadUI();
                                                        }
                                                        else {
                                                            bui.BGlobal.Alert.show({ title: '提示', content: resMsg.header.rm });
                                                        }
                                                    }, function (error) {
                                                        bui.BGlobal.Alert.show({ title: "提示", content: resMsg.header.rm });
                                                    });
                                                });
                                                pageAlert.cancelBtn.unbind("click").on("click", function (bevent) {
                                                    console.info(bevent);
                                                });
                                            }
                                        });
                                    });
                                }
                            }
                            else {
                                bui.BGlobal.Alert.show({ title: "提示", content: resMsg.header.rm }); ////////////////交易处理异常
                            }
                        });
                    }
                });
            };
            XiaoShouReferMainPage.prototype.updateSaleClueBySerialNo = function (saleClue) {
                bui.DbManager.sessionGet("ReferSaleClues", true).then(function (saleList) {
                    for (var i = 0; i < saleList.length; i++) {
                        if (saleList[i].SERIALNO == saleClue.SERIALNO) {
                            saleList.splice(i, 1, saleClue);
                            bui.DbManager.sessionPut("ReferSaleClues", saleList, true, true);
                        }
                    }
                });
            };
            XiaoShouReferMainPage.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
                if (this.saleClues) {
                    this.saleClues.destroy();
                }
            };
            return XiaoShouReferMainPage;
        })(Page);
        bui.XiaoShouReferMainPage = XiaoShouReferMainPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=XiaoShouReferMainPage.js.map