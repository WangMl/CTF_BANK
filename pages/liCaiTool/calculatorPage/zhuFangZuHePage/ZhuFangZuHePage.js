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
        var ZhuFangZuHePage = (function (_super) {
            __extends(ZhuFangZuHePage, _super);
            function ZhuFangZuHePage() {
                _super.apply(this, arguments);
            }
            ZhuFangZuHePage.prototype.initView = function () {
                var validatorUtils = new bui.ValidatorUtils();
                validatorUtils.validate($("#ZhuFangZuHePage")[0]);
                $(this.nodeTypeMap.get('openZhuFangZuHePage')).click(function () {
                    PageManager.to('btop.bui.ZhuFangZuHePage');
                });
                $(this.nodeTypeMap.get('openCalculatorMainPage')).click(function () {
                    PageManager.to('btop.bui.CalculatorMainPage');
                });
                var _this = this;
                var lilv;
                bui.DbManager.sessionGet("toolLoans", true).then(function (data) {
                    if (data != null) {
                        _this.toolLoans = data;
                    }
                    else {
                        bui.HttpUtils.bipHttp("tool_loan", true).then(function (data) {
                            bui.DbManager.sessionPut("toolLoans", data, true, true).then(function (data) {
                                _this.toolLoans = data;
                                lilv = _this.findInrtByTypes("1");
                                $("#lixilv1").val(lilv);
                                $("#lixilv2").val(lilv);
                            });
                        });
                    }
                });
                //起贷日期
                var datepicker = WidgetManager.byId("datepicker1");
                datepicker.Date = { year: 2013, month: 1, date: 13 };
                $('#' + datepicker.id).find("input").addClass('input-control');
                console.info(datepicker.Date);
                console.info(datepicker.getDateString());
                var opt3 = {
                    data: [
                        { "01": "等额本息还款" },
                        { "02": "等额本金还款" },
                        { "03": "一次还清" }
                    ]
                };
                var fangshiSelect = WidgetManager.byId("fangshiSelect");
                fangshiSelect.initData(opt3);
                fangshiSelect.setSelectedItem('01');
                var dpstType;
                var inst = _this.findInrtByTypes("0");
                $("#lixilv2").val(inst);
                $("#lixilv1").val(inst);
                $("#zidonghuoquBTN").click(function () {
                    var inst = _this.findInrtByTypes("0");
                    $("#lixilv1").val(inst);
                    $("#lixilv2").val(inst);
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
                    $("#lixilv1").val(inst);
                    $("#lixilv2").val(inst);
                });
                var benjinValue = WidgetManager.byId("benjin");
                benjinValue.setAmount(String(100000));
                $('#' + benjinValue.id).find("input").addClass('input-control');
                var benjin1Value = WidgetManager.byId("benjin1");
                benjin1Value.setAmount(String(10000));
                $('#' + benjin1Value.id).find("input").addClass('input-control');
                $("#qixianSelect").val(10);
                $("#compute").click(function (e) {
                    if (!validatorUtils.submitValidate()) {
                        bui.EventUtils.preventDefault(e);
                        return false;
                    }
                    if (fangshiSelect.getHTMLValue() == "--请选择--") {
                        var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '请输入还款方式' });
                        buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                            console.info(e);
                        });
                        buiAlert.setTheme(bui.AlertTheme.Red);
                        return;
                    }
                    var lilv1Value = $("#lixilv1").val();
                    var lilv2Value = $("#lixilv2").val();
                    //var aaa = parseFloat($('#benjin1').val());
                    //var shangyedaikuanjineValue = aaa;
                    //var bbb = parseFloat($('#benjin').val());
                    //var zhufanggongjijinValue = bbb;
                    var qixian = $("#qixianSelect").val();
                    var fangshi = fangshiSelect.getAttrValue();
                    var fangShi = parseInt(fangshi);
                    var jinE1 = benjin1Value.getFloatAmt();
                    var qiXian = parseFloat(qixian);
                    var liLv1 = lilv1Value / 12 / 100;
                    var jinE2 = benjinValue.getFloatAmt();
                    var liLv2 = lilv2Value / 12 / 100;
                    var jinE = jinE1 + jinE2;
                    $("#daikuanheji").val(jinE + "");
                    //等额本息还款
                    var fn = Math.pow((1 + liLv1), qiXian) / (Math.pow((1 + liLv1), qiXian) - 1);
                    var fn1 = Math.pow((1 + liLv2), qiXian) / (Math.pow((1 + liLv2), qiXian) - 1);
                    var perDate = jinE1 * liLv1 * fn; //每期还款额
                    var perDate1 = jinE2 * liLv2 * fn1; //每期还款额
                    var total = 0;
                    var totalLiXi = 0;
                    var total1 = 0;
                    var totalLiXi1 = 0;
                    if (fangShi == 1) {
                        total = perDate * qiXian;
                        totalLiXi = total - jinE1;
                        total1 = perDate1 * qiXian;
                        totalLiXi1 = total1 - jinE2;
                        $("#leijifuxi1").val(totalLiXi.toFixed(4)); //累计还息
                        $("#leijihuankuan1").val(total.toFixed(4)); //累计还款
                        $("#huankuanjine1").val(perDate.toFixed(4)); //每期还贷
                        $("#leijifuxi2").val(totalLiXi1.toFixed(4)); //累计还息
                        $("#leijihuankuan2").val(total1.toFixed(4)); //累计还款
                        $("#huankuanjine2").val(perDate1.toFixed(4)); //每期还贷
                        $("#leijifuxiheji").val((totalLiXi + totalLiXi1).toFixed(4) + ""); //累计还款
                        $("#leijihuankuanheji").val((total + total1).toFixed(4) + ""); //每期还贷
                        $("#huankuanjineheji").val((perDate + perDate1).toFixed(4) + ""); //每期还贷
                    }
                    else if (fangShi == 2) {
                        $("#xianShi").css("display", "none");
                        total = jinE1 + (qiXian - (qiXian - 1) / 2) * jinE1 * liLv1;
                        totalLiXi = (qiXian - (qiXian - 1) / 2) * jinE1 * liLv1;
                        total1 = jinE2 + (qiXian - (qiXian - 1) / 2) * jinE2 * liLv2;
                        totalLiXi1 = (qiXian - (qiXian - 1) / 2) * jinE2 * liLv2;
                        $("#leijifuxi1").val(totalLiXi.toFixed(4)); //累计还息
                        $("#leijihuankuan1").val(total.toFixed(4)); //累计还款
                        $("#huankuanjine1").val(perDate.toFixed(4)); //每期还贷
                        $("#leijifuxi2").val(totalLiXi1.toFixed(4)); //累计还息
                        $("#leijihuankuan2").val(total1.toFixed(4)); //累计还款
                        $("#huankuanjine2").val(perDate1.toFixed(4)); //每期还贷
                        $("#leijifuxi3").val((total + total1) + ""); //累计还款
                        $("#leijihuankuan3").val((perDate + perDate1) + ""); //每期还贷
                        $("#huankuanjine3").val((totalLiXi + totalLiXi1) + ""); //每期还贷
                    }
                    else {
                        $("#xianShi").css("display", "none");
                        total = jinE1 * liLv1 * qiXian + jinE1;
                        totalLiXi = jinE1 * liLv1 * qiXian;
                        total1 = jinE2 * liLv2 * qiXian + jinE2;
                        totalLiXi1 = jinE2 * liLv2 * qiXian;
                        $("#leijifuxi1").val(totalLiXi.toFixed(4)); //累计还息
                        $("#leijihuankuan1").val(total.toFixed(4)); //累计还款
                        $("#huankuanjine1").val(perDate.toFixed(4)); //每期还贷
                        $("#leijifuxi2").val(totalLiXi1.toFixed(4)); //累计还息
                        $("#leijihuankuan2").val(total1.toFixed(4)); //累计还款
                        $("#huankuanjine2").val(perDate1.toFixed(4)); //每期还贷
                        $("#leijifuxiheji").val((totalLiXi + totalLiXi1) + ""); //累计还款
                        $("#leijihuankuanheji").val((total + total1) + ""); //每期还贷
                        $("#huankuanjineheji").val((perDate + perDate1) + ""); //每期还贷
                    }
                });
                $("#recount").click(function () {
                    //$("input").val("");
                    $("#huankuanjine1").val("");
                    $("#huankuanjine2").val("");
                    $("#huankuanjineheji").val("");
                    $("#leijifuxi1").val("");
                    $("#leijifuxi2").val("");
                    $("#leijifuxiheji").val("");
                    $("#leijihuankuan1").val("");
                    $("#leijihuankuan2").val("");
                    $("#leijihuankuanheji").val("");
                    $("#daikuanheji").val("");
                    $("#lixilv2").val("");
                    $("#lixilv1").val("");
                    $("#qixianSelect").val(10);
                    benjin1Value.setAmount(String(0));
                    benjinValue.setAmount(String(0));
                });
            };
            ZhuFangZuHePage.prototype.findInrtByTypes = function (dataMode) {
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
            return ZhuFangZuHePage;
        })(Page);
        bui.ZhuFangZuHePage = ZhuFangZuHePage;
        var ToolDeposit = (function () {
            function ToolDeposit() {
            }
            return ToolDeposit;
        })();
        bui.ToolDeposit = ToolDeposit;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ZhuFangZuHePage.js.map