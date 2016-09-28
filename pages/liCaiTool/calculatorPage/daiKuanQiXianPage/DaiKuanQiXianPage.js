var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/************************************************************************
 * 类名  :  ProductLibraryMainPage
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/14
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../../scripts/bns/btop.bui.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var WidgetManager = btop.hui.WidgetManager;
        var PageManager = btop.hui.PageManager;
        var DaiKuanQiXianPage = (function (_super) {
            __extends(DaiKuanQiXianPage, _super);
            function DaiKuanQiXianPage() {
                _super.apply(this, arguments);
            }
            DaiKuanQiXianPage.prototype.initView = function () {
                $(this.nodeTypeMap.get('openDaiKuanQiXianPage')).click(function () {
                    PageManager.to('btop.bui.DaiKuanQiXianPage');
                });
                $(this.nodeTypeMap.get('openCalculatorMainPage')).click(function () {
                    PageManager.to('btop.bui.CalculatorMainPage');
                });
                var _this = this;
                var lilv;
                var validatorUtils = new bui.ValidatorUtils();
                validatorUtils.validate($("#daiKuanQiXianPage")[0]);
                bui.DbManager.sessionGet("toolLoans", true).then(function (data) {
                    if (data != null) {
                        _this.toolLoans = data;
                    }
                    else {
                        bui.HttpUtils.bipHttp("tool_loan", true).then(function (data) {
                            bui.DbManager.sessionPut("toolLoans", data, true, true).then(function (data) {
                                _this.toolLoans = data;
                                lilv = _this.findInrtByTypes("1");
                                $("#lixilv").val(lilv);
                            });
                        });
                    }
                });
                var opt1 = {
                    data: [
                        { "01": "住房商业贷款" },
                        { "02": "住房公积金贷款" },
                        { "03": "个人消费贷款" }
                    ]
                };
                var daikuanzhongleiSelect = WidgetManager.byId("daikuanzhongleiSelect");
                daikuanzhongleiSelect.initData(opt1);
                daikuanzhongleiSelect.setSelectedItem('01');
                var opt3 = {
                    data: [
                        { "01": "等额本息还款" },
                        { "02": "等额本金还款" },
                    ]
                };
                var fangshiSelect = WidgetManager.byId("fangshiSelect");
                fangshiSelect.initData(opt3);
                fangshiSelect.setSelectedItem('01');
                var opt7 = {
                    data: [
                        { "1": "月" },
                        { "2": "季" },
                        { "3": "半年" },
                        { "4": "年" }
                    ]
                };
                var zhouQiValue = WidgetManager.byId("zhouQiSelect");
                zhouQiValue.initData(opt7);
                zhouQiValue.setSelectedItem('4');
                var datepicker = WidgetManager.byId("datepicker1");
                datepicker.Date = { year: 2013, month: 1, date: 13 };
                $('#' + datepicker.id).find("input").addClass('input-control');
                var benjinValue = WidgetManager.byId("benjin");
                benjinValue.setAmount(String(100000));
                $('#' + benjinValue.id).find("input").addClass('input-control');
                var benjin1Value = WidgetManager.byId("benjin1");
                benjin1Value.setAmount(String(1000));
                $('#' + benjin1Value.id).find("input").addClass('input-control');
                $("#compute").click(function (e) {
                    if (!validatorUtils.submitValidate()) {
                        bui.EventUtils.preventDefault(e);
                        return false;
                    }
                    if (daikuanzhongleiSelect.getHTMLValue() == "--请选择--") {
                        var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '请输入还款种类' });
                        buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                            console.info(e);
                        });
                        buiAlert.setTheme(bui.AlertTheme.Red);
                        return;
                    }
                    if (fangshiSelect.getHTMLValue() == "--请选择--") {
                        var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '请输入还款方式' });
                        buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                            console.info(e);
                        });
                        buiAlert.setTheme(bui.AlertTheme.Red);
                        return;
                    }
                    if (zhouQiValue.getHTMLValue() == "--请选择--") {
                        var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '请输入还款周期' });
                        buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                            console.info(e);
                        });
                        buiAlert.setTheme(bui.AlertTheme.Red);
                        return;
                    }
                    var liLv = $("#lixilv").val();
                    var kaikuanjineValue = benjinValue.getFloatAmt();
                    var jiBenEValue = benjin1Value.getFloatAmt();
                    var fangshi = fangshiSelect.getAttrValue();
                    var jinE = kaikuanjineValue;
                    var jiBenE = jiBenEValue;
                    var lilv = liLv / 12 / 100;
                    var fangShi = parseInt(fangshi);
                    if (fangShi == 1) {
                        var qiXian = Math.log(jiBenE / (jiBenE - jinE * lilv)) / Math.log(1 + lilv);
                        $("#qixian").val(Math.ceil(qiXian) + "");
                    }
                    else {
                        var qiXian = jinE / (jiBenE - jinE * lilv);
                        $("#qixian").val(Math.ceil(qiXian) + "");
                    }
                });
                $("#recount").click(function () {
                    benjin1Value.setAmount(String(0));
                    benjinValue.setAmount(String(0));
                    $("#qixian").val("");
                    $("#lixilv").val("");
                });
                //let dpstType;
                //let inst:string = _this.findInrtByTypes("0");
                //$("#lixilv").val(inst);
                //
                //$("#zidonghuoquBTN").click(function(){
                //    let inst:string = _this.findInrtByTypes("0");
                //    $("#lixilv").val(inst);
                //});
                //
                var inst = _this.findInrtByTypes("1");
                $("#lixilv").val(inst);
                $("#zidonghuoquBTN").click(function () {
                    var inst = _this.findInrtByTypes("2");
                    $("#lixilv").val(inst);
                });
            };
            DaiKuanQiXianPage.prototype.findInrtByTypes = function (dataMode) {
                if (this.toolLoans.body.LOANLIST != null) {
                    for (var i in this.toolLoans.body.LOANLIST) {
                        if (0 == dataMode) {
                            return this.toolLoans.body.LOANLIST[0].LESSONE;
                        }
                        else if (1 == dataMode) {
                            return this.toolLoans.body.LOANLIST[0].LESSFIVE;
                        }
                        else if (2 == dataMode) {
                            return this.toolLoans.body.LOANLIST[0].MOREFIVE;
                        }
                    }
                }
            };
            return DaiKuanQiXianPage;
        })(Page);
        bui.DaiKuanQiXianPage = DaiKuanQiXianPage;
        var ToolLoan = (function () {
            function ToolLoan() {
            }
            return ToolLoan;
        })();
        bui.ToolLoan = ToolLoan;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=DaiKuanQiXianPage.js.map