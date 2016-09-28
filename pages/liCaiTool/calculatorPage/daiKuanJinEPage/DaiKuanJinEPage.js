var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        var DaiKuanJinEPage = (function (_super) {
            __extends(DaiKuanJinEPage, _super);
            function DaiKuanJinEPage() {
                _super.apply(this, arguments);
            }
            DaiKuanJinEPage.prototype.initView = function () {
                $(this.nodeTypeMap.get('openDaiKuanJinEPage')).click(function () {
                    PageManager.to('btop.bui.DaiKuanJinEPage');
                });
                $(this.nodeTypeMap.get('openCalculatorMainPage')).click(function () {
                    PageManager.to('btop.bui.CalculatorMainPage');
                });
                var _this = this;
                var lilv;
                var validatorUtils = new bui.ValidatorUtils();
                validatorUtils.validate($("#daiKuanJinEPage")[0]);
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
                        { "02": "等额本金还款" }
                    ]
                };
                var fangshiSelect = WidgetManager.byId("fangshiSelect");
                fangshiSelect.initData(opt3);
                fangshiSelect.setSelectedItem('01');
                var opt4 = {
                    data: [
                        { "1": "月" },
                        { "2": "季" },
                        { "3": "半年" },
                        { "4": "年" }
                    ]
                };
                var zhouqiSelect = WidgetManager.byId("zhouqiSelect");
                zhouqiSelect.initData(opt4);
                zhouqiSelect.setSelectedItem('4');
                var datepicker = WidgetManager.byId("datepicker1");
                datepicker.Date = { year: 2013, month: 1, date: 13 };
                $('#' + datepicker.id).find("input").addClass('input-control');
                console.info(datepicker.Date);
                console.info(datepicker.getDateString());
                var benjinValue = WidgetManager.byId("benjin");
                benjinValue.setAmount(String(100000));
                $('#' + benjinValue.id).find("input").addClass('input-control');
                $("#qixianSelect").val(10);
                $("#compute").click(function (e) {
                    if (!validatorUtils.submitValidate()) {
                        bui.EventUtils.preventDefault(e);
                        return false;
                    }
                    if (daikuanzhongleiSelect.getHTMLValue() == "--请选择--") {
                        var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '请输入贷款种类' });
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
                    if (zhouqiSelect.getHTMLValue() == "--请选择--") {
                        var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '请输入还款周期' });
                        buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                            console.info(e);
                        });
                        buiAlert.setTheme(bui.AlertTheme.Red);
                        return;
                    }
                    var lilv = $("#lixilv").val();
                    var qixian = $("#qixianSelect").val();
                    var fangshi = fangshiSelect.getAttrValue();
                    var zhouqi = zhouqiSelect.getAttrValue(); //统一按月还
                    var daiKuan;
                    var fangShi = parseInt(fangshi);
                    var qiXian = parseFloat(qixian);
                    var jinE = benjinValue.getFloatAmt();
                    var liLv = lilv / 12 / 100;
                    var fn = Math.pow((1 + liLv), qiXian);
                    if (zhouqi == 1) {
                        if (fangShi == 1) {
                            daiKuan = jinE * (fn - 1) / (fn * liLv);
                        }
                        else {
                            daiKuan = qiXian * jinE / (1 + qiXian * liLv);
                        }
                    }
                    else if (zhouqi == 2) {
                        if (fangShi == 1) {
                            daiKuan = jinE * (fn - 1) / (fn * liLv) / 3;
                        }
                        else {
                            daiKuan = qiXian * jinE / (1 + qiXian * liLv) / 3;
                        }
                    }
                    else if (zhouqi == 3) {
                        if (fangShi == 1) {
                            daiKuan = jinE * (fn - 1) / (fn * liLv) / 6;
                        }
                        else {
                            daiKuan = qiXian * jinE / (1 + qiXian * liLv) / 6;
                        }
                    }
                    else if (zhouqi == 4) {
                        if (fangShi == 1) {
                            daiKuan = jinE * (fn - 1) / (fn * liLv) / 12;
                        }
                        else {
                            daiKuan = qiXian * jinE / (1 + qiXian * liLv) / 12;
                        }
                    }
                    $("#daiKuan").val(daiKuan.toFixed(4) + "");
                });
                $("#recount").click(function () {
                    benjinValue.setAmount(String(0));
                    $("#qixianSelect").val(10);
                    $("#jinE").val("");
                    $("#lixilv").val("");
                    $("#daiKuan").val("");
                });
                var dpstType;
                var inst = _this.findInrtByTypes("0");
                $("#lixilv").val(inst);
                $("#zidonghuoquBTN").click(function () {
                    var inst = _this.findInrtByTypes("0");
                    $("#lixilv").val(inst);
                });
                $("#qixianSelect").blur(function () {
                    var qixian = parseInt($("#qixianSelect").val());
                    if (0 < qixian && qixian <= 12) {
                        dpstType = "0";
                    }
                    else if (12 < qixian && qixian <= 60) {
                        dpstType = "1";
                    }
                    else {
                        dpstType = "2";
                    }
                    var inst = _this.findInrtByTypes(dpstType);
                    $("#lixilv").val(inst);
                });
            };
            DaiKuanJinEPage.prototype.findInrtByTypes = function (dataMode) {
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
            return DaiKuanJinEPage;
        })(Page);
        bui.DaiKuanJinEPage = DaiKuanJinEPage;
        var ToolLoan = (function () {
            function ToolLoan() {
            }
            return ToolLoan;
        })();
        bui.ToolLoan = ToolLoan;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=DaiKuanJinEPage.js.map