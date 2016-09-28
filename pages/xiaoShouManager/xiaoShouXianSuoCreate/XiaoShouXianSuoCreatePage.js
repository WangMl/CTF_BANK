var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by wangxinlu on 2016/6/27.
 */
///<reference path="../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../scripts/bns/btop.bui.d.ts"/>
///<reference path="../../../scripts/libs/vue.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var PageManager = btop.hui.PageManager;
        var XiaoShouXianSuoCreatePage = (function (_super) {
            __extends(XiaoShouXianSuoCreatePage, _super);
            function XiaoShouXianSuoCreatePage() {
                _super.apply(this, arguments);
            }
            XiaoShouXianSuoCreatePage.prototype.initView = function () {
                var saleClue = (this.data['saleClue']);
                var fromQueue = this.data['fromQueue'];
                var _this = this;
                //返回主页
                this.vm = new Vue({
                    el: '#xiaoShouXianSuoCreatePage',
                    data: {
                        accountManagerLog: new bui.SaleClue()
                    },
                    methods: {}
                });
                $(_this.nodeTypeMap.get('backXiaoShouMainPage')).click(function () {
                    if (_this.data.data1 == "DangRixiaoShouXianSuoChaXun") {
                        PageManager.to('btop.bui.XiaoShouXianSuoChaXun', _this.data.data2);
                    }
                    else if (_this.data.data1 == "fanHui") {
                        PageManager.to('btop.bui.XiaoShouMainPage');
                    }
                    else if (_this.data.data1 == "KeHuxiaoShouXianSuoChaXun") {
                        PageManager.to('btop.bui.XiaoShouXianSuoChaXun', _this.data.data2);
                    }
                    else if (_this.data.data1 == "backData") {
                        PageManager.to('btop.bui.XiaoShouMainPage');
                    }
                    else if (_this.data.data1 == "fanHui") {
                        PageManager.to('btop.bui.XiaoShouMainPage');
                    }
                    else if (_this.data.data1 == "xiuGai") {
                        PageManager.to('btop.bui.XiaoShouMainPage');
                    }
                    else {
                        if (bui.Constant.CHANNEL == "refermain") {
                            PageManager.to('btop.bui.XiaoShouReferMainPage', { fromQueue: fromQueue });
                        }
                        else if (bui.Constant.CHANNEL == "main") {
                            PageManager.to('btop.bui.XiaoShouMainPage', { fromQueue: fromQueue });
                        }
                    }
                });
                if (_this.data.data1 == "DangRixiaoShouXianSuoChaXun") {
                    document.getElementById('shanChuXiaoShouXianSuo').hidden = true;
                    document.getElementById('xiuGaiXiaoShouXianSuo').hidden = true;
                    var dangRiLaiKeXiuGai = this.data.data;
                    //进入销售线索修改界面
                    $(this.nodeTypeMap.get('openXiaoShouXianSuoXiuGaiPage')).click(function () {
                        PageManager.to('btop.bui.XiaoShouXianSuoXiuGaiPage', { data: dangRiLaiKeXiuGai });
                    });
                    //销售线索删除
                    $(this.nodeTypeMap.get('deleteSERIALNO')).click(function () {
                        var buiConfirm = bui.BGlobal.Confirm.show({ title: '提示', content: '确认删除' });
                        buiConfirm.confirmBtn.unbind('click').on('click', function (e) {
                            var SERIALNO = xiaoShouXinXi.SERIALNO;
                            //销售线索删除
                            var reqMsg9 = new bui.ReqMsg();
                            reqMsg9.body = {
                                SERIALNO: SERIALNO
                            };
                            bui.HttpUtils.bipHttp('saleLeads_delete', reqMsg9).then(function (data) {
                                if (data.header.rc == "0000") {
                                    this.deleteSaleClue();
                                }
                                else {
                                    bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                }
                            }, function (error) {
                                bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                            });
                        });
                        buiConfirm.cancelBtn.unbind('click').on('click', function (e) {
                            console.info(e);
                        });
                        buiConfirm.setTheme(bui.ConfirmTheme.Red);
                    });
                    _this.vm._data.accountManagerLog = dangRiLaiKeXiuGai;
                    var xiaoShouXinXi = this.data.data;
                }
                else if (this.data.data1 == "KeHuxiaoShouXianSuoChaXun") {
                    document.getElementById('shanChuXiaoShouXianSuo').hidden = true;
                    document.getElementById('xiuGaiXiaoShouXianSuo').hidden = true;
                    var xiaoShouXinXi = this.data.data;
                    //进入销售线索修改界面
                    $(this.nodeTypeMap.get('openXiaoShouXianSuoXiuGaiPage')).click(function () {
                        PageManager.to('btop.bui.XiaoShouXianSuoXiuGaiPage', { data: xiaoShouXinXi });
                    });
                    //销售线索删除
                    $(this.nodeTypeMap.get('deleteSERIALNO')).click(function () {
                        var buiConfirm = bui.BGlobal.Confirm.show({ title: '提示', content: '确认删除' });
                        buiConfirm.confirmBtn.unbind('click').on('click', function (e) {
                            var SERIALNO = xiaoShouXinXi.SERIALNO;
                            //销售线索删除
                            var reqMsg9 = new bui.ReqMsg();
                            reqMsg9.body = {
                                SERIALNO: SERIALNO
                            };
                            bui.HttpUtils.bipHttp('saleLeads_delete', reqMsg9).then(function (data) {
                                if (data.header.rc == "0000") {
                                    _this.deleteSaleClue(SERIALNO);
                                    PageManager.to('btop.bui.XiaoShouMainPage');
                                }
                                else {
                                    bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                }
                            }, function (error) {
                                bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                            });
                        });
                        buiConfirm.cancelBtn.unbind('click').on('click', function (e) {
                            console.info(e);
                        });
                        buiConfirm.setTheme(bui.ConfirmTheme.Red);
                    });
                    _this.vm._data.accountManagerLog = xiaoShouXinXi;
                }
                else if (this.data.data1 == "backData") {
                    var cEMPCODE = this.data.data;
                    var reqMsg9 = new bui.ReqMsg();
                    reqMsg9.body = {
                        SERIALNO: cEMPCODE
                    };
                    bui.HttpUtils.bipHttp('saleLeads_info', reqMsg9).then(function (data) {
                        console.info(data);
                        if (data.header.rc == "0000") {
                            var backxiaoShouXinXi = data.body;
                            console.info(backxiaoShouXinXi);
                            //进入销售线索修改界面
                            $('#xiuGaiXiaoShouXianSuo').click(function (e) {
                                PageManager.to('btop.bui.XiaoShouXianSuoXiuGaiPage', { data: backxiaoShouXinXi });
                            });
                            //销售线索删除
                            $('#shanChuXiaoShouXianSuo').click(function (e) {
                                var buiConfirm = bui.BGlobal.Confirm.show({ title: '提示', content: '确认删除' });
                                buiConfirm.confirmBtn.unbind('click').on('click', function (e) {
                                    var SERIALNO = backxiaoShouXinXi.SERIALNO;
                                    //销售线索删除
                                    var reqMsg9 = new bui.ReqMsg();
                                    reqMsg9.body = {
                                        SERIALNO: SERIALNO
                                    };
                                    bui.HttpUtils.bipHttp('saleLeads_delete', reqMsg9).then(function (data) {
                                        if (data.header.rc == "0000") {
                                            _this.deleteSaleClue(SERIALNO);
                                            PageManager.to('btop.bui.XiaoShouMainPage');
                                        }
                                        else {
                                            bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                        }
                                    }, function (error) {
                                        bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                                    });
                                });
                                buiConfirm.cancelBtn.unbind('click').on('click', function (e) {
                                    console.info(e);
                                });
                                buiConfirm.setTheme(bui.ConfirmTheme.Red);
                            });
                            _this.vm._data.accountManagerLog = backxiaoShouXinXi;
                        }
                        else {
                            bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                        }
                    }, function (error) {
                        bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                    });
                }
                else if (this.data.data1 == "fanHui") {
                    var SERIALNO = this.data.data;
                    var reqMsg9 = new bui.ReqMsg();
                    reqMsg9.body = {
                        SERIALNO: SERIALNO
                    };
                    bui.HttpUtils.bipHttp('saleLeads_info', reqMsg9).then(function (data) {
                        if (data.header.rc == "0000") {
                            var backxiaoShouXinXi = data.body;
                            //销售线索查询
                            _this.vm._data.accountManagerLog = backxiaoShouXinXi;
                            document.getElementById('xiuGaiXiaoShouXianSuo').hidden = true;
                            document.getElementById('shanChuXiaoShouXianSuo').hidden = true;
                            //进行创建缓存存储
                            _this.createSaleClue(backxiaoShouXinXi);
                        }
                        else {
                            bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                        }
                    }, function (error) {
                        bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                    });
                }
                else if (this.data.data1 == "xiuGai") {
                    var SERIALNO = this.data.data;
                    var reqMsg9 = new bui.ReqMsg();
                    reqMsg9.body = {
                        SERIALNO: SERIALNO
                    };
                    bui.HttpUtils.bipHttp('saleLeads_info', reqMsg9).then(function (data) {
                        if (data.header.rc == "0000") {
                            var backxiaoShouXinXi = data.body;
                            //销售线索删除
                            _this.vm._data.accountManagerLog = backxiaoShouXinXi;
                            document.getElementById('xiuGaiXiaoShouXianSuo').hidden = true;
                            document.getElementById('shanChuXiaoShouXianSuo').hidden = true;
                            _this.updateSaleClue(backxiaoShouXinXi);
                        }
                        else {
                            bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                        }
                    }, function (error) {
                        bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                    });
                }
                else {
                    var saleClues = saleClue;
                    var xiaoShou;
                    //if(saleClues.STATUS="无效"){
                    //    $("#wuXiaoTitle").show();
                    //    $("#wuXiao").show();
                    //}else {
                    //    $("#wuXiaoTitle").hide();
                    //    $("#wuXiao").hide();
                    //}
                    var reqMsg9 = new bui.ReqMsg();
                    reqMsg9.body = {
                        SERIALNO: saleClues.SERIALNO
                    };
                    bui.HttpUtils.bipHttp('saleLeads_info', reqMsg9).then(function (data) {
                        if (data.header.rc == "0000") {
                            xiaoShou = data.body;
                            _this.vm._data.accountManagerLog = xiaoShou;
                        }
                        else {
                            bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                        }
                    }, function (error) {
                        bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                    });
                    //进入销售线索修改界面
                    $(this.nodeTypeMap.get('openXiaoShouXianSuoXiuGaiPage')).click(function () {
                        PageManager.to('btop.bui.XiaoShouXianSuoXiuGaiPage', { data: xiaoShou });
                    });
                    //销售线索删除
                    $(this.nodeTypeMap.get('deleteSERIALNO')).click(function () {
                        var buiConfirm = bui.BGlobal.Confirm.show({ title: '提示', content: '确认删除' });
                        buiConfirm.confirmBtn.unbind('click').on('click', function (e) {
                            //console.info(e);
                            var SERIALNO = saleClue.SERIALNO;
                            //销售线索删除
                            var reqMsg9 = new bui.ReqMsg();
                            reqMsg9.body = {
                                SERIALNO: SERIALNO
                            };
                            bui.HttpUtils.bipHttp('saleLeads_delete', reqMsg9).then(function (data) {
                                if (data.header.rc == "0000") {
                                    _this.deleteSaleClue(SERIALNO);
                                    PageManager.to('btop.bui.XiaoShouMainPage');
                                }
                                else {
                                    bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                }
                            }, function (error) {
                                bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                            });
                        });
                        buiConfirm.cancelBtn.unbind('click').on('click', function (e) {
                            console.info(e);
                        });
                        buiConfirm.setTheme(bui.ConfirmTheme.Red);
                    });
                    _this.statue(saleClues.STATUS);
                }
            };
            /**
             * @description 销售线索删除
             * @param SERIALNO
             */
            XiaoShouXianSuoCreatePage.prototype.deleteSaleClue = function (SERIALNO) {
                bui.DbManager.sessionGet('SaleClues', true).then(function (saleClues) {
                    for (var i = 0; i < saleClues.length; i++) {
                        if (saleClues[i].SERIALNO === SERIALNO) {
                            saleClues.splice(i, 1);
                            bui.DbManager.sessionPut('SaleClues', saleClues, true, true).then(function () {
                                bui.BGlobal.Alert.show({ title: '提示', content: '销售线索删除成功！' });
                            });
                        }
                    }
                });
            };
            /**
             * @description 销售线索创建
             * @param saleClue
             */
            XiaoShouXianSuoCreatePage.prototype.createSaleClue = function (saleClue) {
                bui.DbManager.sessionGet('SaleClues', true).then(function (saleClues) {
                    if (saleClues != null) {
                        saleClues.push(saleClue);
                        bui.DbManager.sessionPut('SaleClues', saleClues, true, true);
                    }
                    else {
                        var saleCluesNew = new Array();
                        saleCluesNew.push(saleClue);
                        bui.DbManager.sessionPut('SaleClues', saleCluesNew, true, true);
                    }
                });
            };
            /**
             * @description 销售线索更新
             * @param saleClue
             */
            XiaoShouXianSuoCreatePage.prototype.updateSaleClue = function (saleClue) {
                bui.DbManager.sessionGet('SaleClues', true).then(function (saleClues) {
                    for (var i = 0; i < saleClues.length; i++) {
                        if (saleClues[i].SERIALNO === saleClue.SERIALNO) {
                            saleClues.splice(i, 1, saleClue);
                            bui.DbManager.sessionPut('SaleClues', saleClues, true, true);
                        }
                    }
                });
            };
            XiaoShouXianSuoCreatePage.prototype.statue = function (STATUS) {
                if (STATUS == "未转介") {
                    document.getElementById('shanChuXiaoShouXianSuo').hidden = false;
                    document.getElementById('xiuGaiXiaoShouXianSuo').hidden = false;
                }
                else if (STATUS == "有效") {
                    document.getElementById('shanChuXiaoShouXianSuo').hidden = true;
                    document.getElementById('xiuGaiXiaoShouXianSuo').hidden = true;
                }
                else if (STATUS == "无效") {
                    document.getElementById('shanChuXiaoShouXianSuo').hidden = true;
                    document.getElementById('xiuGaiXiaoShouXianSuo').hidden = true;
                }
                else if (STATUS == "已转介") {
                    document.getElementById('xiuGaiXiaoShouXianSuo').hidden = true;
                    document.getElementById('shanChuXiaoShouXianSuo').hidden = true;
                }
                ;
            };
            return XiaoShouXianSuoCreatePage;
        })(Page);
        bui.XiaoShouXianSuoCreatePage = XiaoShouXianSuoCreatePage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=XiaoShouXianSuoCreatePage.js.map