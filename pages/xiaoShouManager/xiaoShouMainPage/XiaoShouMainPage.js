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
        var XiaoShouMainPage = (function (_super) {
            __extends(XiaoShouMainPage, _super);
            function XiaoShouMainPage() {
                _super.apply(this, arguments);
                this.currentSaleCluesPosition = 0;
            }
            XiaoShouMainPage.prototype.initView = function () {
                var _this = this;
                bui.DbManager.sessionGet("DeviceInfo").then(function (device) {
                    _this.deviceInfo = device;
                });
                bui.DbManager.sessionGet("UserInfo").then(function (data) {
                    _this.userInfo = data;
                    if (data.UserRole == "2") {
                        $(_this.nodeTypeMap.get('zhuanJieForMe')).show();
                    }
                    else {
                        $(_this.nodeTypeMap.get('zhuanJieForMe')).hide();
                    }
                });
                if (this.data['fromQueue']) {
                    this.currentSaleCluesPosition = this.data['fromQueue'];
                }
                //返回主页
                $(this.nodeTypeMap.get('openMainPage')).click(function () {
                    PageManager.to('btop.bui.MainPage');
                });
                //进入转介给我的
                $(this.nodeTypeMap.get('zhuanJieForMe')).click(function () {
                    PageManager.to('btop.bui.XiaoShouReferMainPage');
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
            XiaoShouMainPage.prototype.refreshData = function () {
                var _this = this;
                if (_this.saleClues) {
                    _this.currentSaleCluesPosition = _this.saleClues.getCurrentPosition();
                }
                //创建人查询销售线索（列表）
                var reqMsg12 = new bui.ReqMsg();
                reqMsg12.body = {
                    CEMPCODE: _this.userInfo.UserId
                };
                bui.HttpUtils.bipHttp('saleLeads_teller', reqMsg12).then(function (data) {
                    var resMsg = data;
                    if (resMsg.header.rc == "0000") {
                        if (!!resMsg.body) {
                            bui.DbManager.sessionPut("SaleClues", resMsg.body.SaleList, true, true).then(function () {
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
            XiaoShouMainPage.prototype.loadUI = function () {
                var _this = this;
                //首先判断缓存中是否有销售线索数据
                bui.DbManager.sessionGet("SaleClues", true).then(function (data) {
                    if (data != null) {
                        var saleList = data;
                        _this.saleClues = WidgetManager.byId('saleClueQueue');
                        _this.saleClues.initData(saleList, 0);
                        _this.saleClues.checkedByIndex(_this.currentSaleCluesPosition);
                        _this.saleClues.unbind('refresh').on('refresh', function (bEvent) {
                            console.info(bEvent);
                        });
                        _this.saleClues.unbind('click').on('click', function (bEvent) {
                            bui.Constant.CHANNEL = "main";
                            PageManager.to("btop.bui.XiaoShouXianSuoCreatePage", { saleClue: bEvent[0]["data"]["saleClue"], fromQueue: bEvent[0]["data"]["fromQueue"], data1: 'main' });
                        });
                    }
                    else {
                        //创建人查询销售线索（列表）
                        var reqMsg12 = new bui.ReqMsg();
                        reqMsg12.body = {
                            CEMPCODE: _this.userInfo.UserId
                        };
                        bui.HttpUtils.bipHttp('saleLeads_teller', reqMsg12).then(function (data) {
                            var resMsg = data;
                            if (resMsg.header.rc == "0000") {
                                if (!!resMsg.body) {
                                    bui.DbManager.sessionPut("SaleClues", resMsg.body.SaleList, true, false).then(function (data) {
                                        var saleList = data;
                                        _this.saleClues = WidgetManager.byId('saleClueQueue');
                                        if (_this.currentSaleCluesPosition < 3) {
                                            _this.saleClues.checkedByIndex(_this.currentSaleCluesPosition);
                                        }
                                        _this.saleClues.initData(saleList, 0);
                                        _this.saleClues.unbind('click').on('click', function (bEvent) {
                                            bui.Constant.CHANNEL = "main";
                                            PageManager.to("btop.bui.XiaoShouXianSuoCreatePage", { saleClue: bEvent[0]["data"]["saleClue"], fromQueue: bEvent[0]["data"]["fromQueue"], data1: 'main' });
                                        });
                                    });
                                }
                            }
                            else {
                                bui.BGlobal.Alert.show({ title: "提示", content: resMsg.header.rm });
                            }
                        }, function (error) {
                            bui.BGlobal.Alert.show({ title: '提示', content: "网络请求异常" });
                        });
                    }
                });
            };
            XiaoShouMainPage.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
                if (this.saleClues) {
                    this.saleClues.destroy();
                }
            };
            return XiaoShouMainPage;
        })(Page);
        bui.XiaoShouMainPage = XiaoShouMainPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=XiaoShouMainPage.js.map