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
        var ZuHeDaiKuanTiQianHuanDaiPage = (function (_super) {
            __extends(ZuHeDaiKuanTiQianHuanDaiPage, _super);
            function ZuHeDaiKuanTiQianHuanDaiPage() {
                _super.apply(this, arguments);
            }
            ZuHeDaiKuanTiQianHuanDaiPage.prototype.initView = function () {
                $(this.nodeTypeMap.get('openZuHeDaiKuanTiQianHuanDaiPage')).click(function () {
                    PageManager.to('btop.bui.ZuHeDaiKuanTiQianHuanDaiPage');
                });
                $(this.nodeTypeMap.get('openCalculatorMainPage')).click(function () {
                    PageManager.to('btop.bui.CalculatorMainPage');
                });
                var _this = this;
                var validatorUtils = new bui.ValidatorUtils();
                validatorUtils.validate($("#zuHeDaiKuanTiQianHuanDaiPage")[0]);
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
                var benjinValue = WidgetManager.byId("shangyedaikuan");
                benjinValue.setAmount(String(100000));
                $('#' + benjinValue.id).find("input").addClass('input-control');
                var benjin1Value = WidgetManager.byId("gongjijindaikuan");
                benjin1Value.setAmount(String(100000));
                $('#' + benjin1Value.id).find("input").addClass('input-control');
                var benjin2Value = WidgetManager.byId("shangdaitiqianhuan");
                benjin2Value.setAmount(String(1000));
                $('#' + benjin2Value.id).find("input").addClass('input-control');
                var benjin3Value = WidgetManager.byId("gongjijintiqianhuan");
                benjin3Value.setAmount(String(1000));
                $('#' + benjin3Value.id).find("input").addClass('input-control');
                /**
                 * @description DatePicker
                 */
                var datepicker1 = WidgetManager.byId("datepicker1");
                datepicker1.Date = { year: 2013, month: 1, date: 13 };
                $('#' + datepicker1.id).find("input").addClass('input-control');
                console.info(datepicker1.Date);
                console.info(datepicker1.getDateString());
                var datepicker2 = WidgetManager.byId("datepicker2");
                datepicker2.Date = { year: 2017, month: 1, date: 13 };
                $('#' + datepicker2.id).find("input").addClass('input-control');
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
                        { "01": "一次全部付清" },
                        { "02": "部分提前还款" }
                    ]
                };
                var tiqianfangshiSelect = WidgetManager.byId("tiqianfangshiSelect");
                tiqianfangshiSelect.initData(opt4);
                tiqianfangshiSelect.setSelectedItem('01');
                var opt6 = {
                    data: [
                        { "1": "月" },
                        { "2": "季" },
                        { "3": "半年" },
                        { "4": "年" }
                    ]
                };
                var zhouQiValue = WidgetManager.byId("zhouQiSelect");
                zhouQiValue.initData(opt6);
                zhouQiValue.setSelectedItem('1');
                var opt5 = {
                    position: 'top',
                    data: [
                        { "01": "贷款期限不变" },
                        { "02": "还款金额不变" }
                    ]
                };
                var bufenhuankuanhouSelect = WidgetManager.byId("bufenhuankuanhouSelect");
                bufenhuankuanhouSelect.initData(opt5);
                bufenhuankuanhouSelect.setSelectedItem('01');
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
                $("#qixianSelect").val(100);
                $("#compute").click(function () {
                    if (!validatorUtils.submitValidate()) {
                        bui.EventUtils.preventDefault(e);
                        return false;
                    }
                    if (tiqianfangshiSelect.getHTMLValue() == "--请选择--") {
                        var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '请输入提前还款方式' });
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
                        var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '请选择还款周期' });
                        buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                            console.info(e);
                        });
                        buiAlert.setTheme(bui.AlertTheme.Red);
                        return;
                    }
                    if (bufenhuankuanhouSelect.getHTMLValue() == "--请选择--") {
                        var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '请选择部分还款后' });
                        buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                            console.info(e);
                        });
                        buiAlert.setTheme(bui.AlertTheme.Red);
                        return;
                    }
                    var lilv1Value = $("#lixilv1").val();
                    var lilv2Value = $("#lixilv2").val();
                    var qixian = $("#qixianSelect").val();
                    var fangshi = fangshiSelect.getAttrValue();
                    var tiqianfangshi = tiqianfangshiSelect.getAttrValue();
                    var qidaidate = datepicker1.getDateString();
                    var huandaidate = datepicker2.getDateString();
                    var bufenhuankuan = bufenhuankuanhouSelect.getAttrValue();
                    var fangShi = parseInt(fangshi);
                    var jinE1 = benjinValue.getFloatAmt(); //商业贷款金额
                    var qiShu = parseFloat(qixian); //贷款期限
                    var lilv1 = lilv1Value / 12 / 100; //商业贷款利率
                    var jinE2 = benjin1Value.getFloatAmt(); //公积金贷款金额
                    var lilv2 = lilv2Value / 12 / 100; //公积金贷款利率
                    var jinE = jinE1 + jinE2;
                    $("#daikuanheji").val(jinE + "");
                    var tiQian1 = benjin2Value.getFloatAmt(); //商业提前还款额
                    var tiQian2 = benjin3Value.getFloatAmt(); //公积金提前还款额
                    var date1 = qidaidate.split("-"); //起贷日期
                    var date2 = huandaidate.split("-"); //提前还贷日期
                    var moons = (parseInt(date2[0]) - parseInt(date1[0])) * 12 + parseInt(date2[1]) - parseInt(date1[1]); //已还期数
                    var tiQianFangShi = parseInt(tiqianfangshi); //提前还款方式
                    var buFenHuanKuan = parseInt(bufenhuankuan); //还款后的还款方式
                    if (fangShi == 1) {
                        $("#xianShi").css("display", "block");
                        var first1 = jinE1 * lilv1 * Math.pow(1 + lilv1, qiShu) / (Math.pow(1 + lilv1, qiShu) - 1);
                        var shengYu1 = jinE1 * (Math.pow((1 + lilv1), qiShu) - Math.pow(1 + lilv1, moons)) / (Math.pow(1 + lilv1, qiShu) - 1) - tiQian1;
                        var first2 = jinE2 * lilv2 * Math.pow(1 + lilv2, qiShu) / (Math.pow(1 + lilv2, qiShu) - 1);
                        var shengYu2 = jinE2 * (Math.pow((1 + lilv2), qiShu) - Math.pow(1 + lilv2, moons)) / (Math.pow(1 + lilv2, qiShu) - 1) - tiQian2;
                        if (tiQianFangShi == 1) {
                            var total1 = first1 * moons + jinE1;
                            var lixi1 = total1 - jinE1;
                            var total2 = first2 * moons + jinE2;
                            var lixi2 = total2 - jinE2;
                        }
                        else {
                            if (buFenHuanKuan == 1) {
                                var total1 = first1 * moons + tiQian1 + shengYu1 * lilv1 * (qiShu - moons) * Math.pow(1 + lilv1, qiShu - moons) / (Math.pow(1 + lilv1, qiShu - moons) - 1);
                                var lixi1 = total1 - jinE1;
                                var total2 = first2 * moons + tiQian2 + shengYu1 * lilv2 * (qiShu - moons) * Math.pow(1 + lilv2, qiShu - moons) / (Math.pow(1 + lilv2, qiShu - moons) - 1);
                                var lixi2 = total2 - jinE2;
                            }
                            else {
                                var total1 = first1 * moons + tiQian1 + first1 * Math.log(first1 / (first1 - shengYu1 * lilv1)) / Math.log(1 + lilv1);
                                var lixi1 = total1 - jinE1;
                                var total2 = first2 * moons + tiQian2 + first2 * Math.log(first2 / (first2 - shengYu2 * lilv2)) / Math.log(1 + lilv2);
                                var lixi2 = total2 - jinE2;
                            }
                        }
                        $("#huankuanjine1").val(first1.toFixed(4) + "");
                        $("#huankuanjine2").val(first2.toFixed(4) + "");
                        $("#huankuanjineheji").val((first1 + first2).toFixed(4) + "");
                        $("#leijifuxi1").val(lixi1.toFixed(4) + "");
                        $("#leijifuxi2").val(lixi2.toFixed(4) + "");
                        $("#leijifuxiheji").val((lixi1 + lixi2).toFixed(4) + "");
                        $("#leijihuankuan1").val(total1.toFixed(4) + "");
                        $("#leijihuankuan2").val(total2.toFixed(4) + "");
                        $("#leijihuankuanheji").val((total1 + total2).toFixed(4) + "");
                    }
                    else {
                        $("#xianShi").css("display", "none");
                        var first1 = jinE1 / qiShu + jinE1 * lilv1;
                        var shengYu1 = jinE1 * (1 - moons / qiShu) - tiQian1;
                        var first2 = jinE2 / qiShu + jinE2 * lilv2;
                        var shengYu2 = jinE2 * (1 - moons / qiShu) - tiQian2;
                        if (tiQianFangShi == 1) {
                            var total1 = moons / qiShu * jinE1 + (moons - (moons - 1) * moons / (2 * qiShu)) * jinE1 * lilv1 + tiQian1;
                            var lixi1 = total1 - jinE1;
                            var total2 = moons / qiShu * jinE2 + (moons - (moons - 1) * moons / (2 * qiShu)) * jinE2 * lilv2 + tiQian2;
                            var lixi2 = total2 - jinE2;
                        }
                        else {
                            if (buFenHuanKuan == 1) {
                                var total1 = moons / qiShu * jinE1 + (moons - (moons - 1) * moons / (2 * qiShu)) * jinE1 * lilv1 + tiQian1 + shengYu1 * lilv1 * (qiShu - moons) * Math.pow(1 + lilv1, qiShu - moons) / (Math.pow(1 + lilv1, qiShu - moons) - 1);
                                var lixi1 = total1 - jinE1;
                                var total2 = moons / qiShu * jinE2 + (moons - (moons - 1) * moons / (2 * qiShu)) * jinE2 * lilv2 + tiQian2 + shengYu2 * lilv2 * (qiShu - moons) * Math.pow(1 + lilv2, qiShu - moons) / (Math.pow(1 + lilv2, qiShu - moons) - 1);
                                var lixi2 = total2 - jinE2;
                            }
                            else {
                                var total1 = moons / qiShu * jinE1 + (moons - (moons - 1) * moons / (2 * qiShu)) * jinE1 * lilv1 + tiQian1 + first1 * Math.log(first1 / (first1 - shengYu1 * lilv1));
                                var lixi1 = total1 - jinE1;
                                var total2 = moons / qiShu * jinE2 + (moons - (moons - 1) * moons / (2 * qiShu)) * jinE2 * lilv2 + tiQian2 + first2 * Math.log(first2 / (first2 - shengYu2 * lilv2));
                                var lixi2 = total2 - jinE2;
                            }
                        }
                        $("#huankuanjine1").val(first1.toFixed(4) + "");
                        $("#huankuanjine2").val(first2.toFixed(4) + "");
                        $("#huankuanjineheji").val((first1 + first2).toFixed(4) + "");
                        $("#leijifuxi1").val(lixi1.toFixed(4) + "");
                        $("#leijifuxi2").val(lixi2.toFixed(4) + "");
                        $("#leijifuxiheji").val((lixi1 + lixi2).toFixed(4) + "");
                        $("#leijihuankuan1").val(total1.toFixed(4) + "");
                        $("#leijihuankuan2").val(total2.toFixed(4) + "");
                        $("#leijihuankuanheji").val((total1 + total2).toFixed(4) + "");
                    }
                });
                $("#recount").click(function () {
                    $("#huankuanjine1").val("");
                    $("#huankuanjine2").val("");
                    $("#huankuanjineheji").val("");
                    $("#leijifuxi1").val("");
                    $("#leijifuxi2").val("");
                    $("#leijifuxiheji").val("");
                    $("#leijihuankuan1").val("");
                    $("#leijihuankuan2").val("");
                    $("#leijihuankuanheji").val("");
                    $("#lixilv1").val("");
                    $("#lixilv2").val("");
                    $("#qixianSelect").val(10);
                    benjinValue.setAmount(String(0));
                    benjin1Value.setAmount(String(0));
                    benjin2Value.setAmount(String(0));
                    benjin3Value.setAmount(String(0));
                });
            };
            ZuHeDaiKuanTiQianHuanDaiPage.prototype.findInrtByTypes = function (dataMode) {
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
            return ZuHeDaiKuanTiQianHuanDaiPage;
        })(Page);
        bui.ZuHeDaiKuanTiQianHuanDaiPage = ZuHeDaiKuanTiQianHuanDaiPage;
        var ToolLoan = (function () {
            function ToolLoan() {
            }
            return ToolLoan;
        })();
        bui.ToolLoan = ToolLoan;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ZuHeDaiKuanTiQianHuanDaiPage.js.map