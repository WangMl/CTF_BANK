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
        var TiQianHuanDaiPage = (function (_super) {
            __extends(TiQianHuanDaiPage, _super);
            function TiQianHuanDaiPage() {
                _super.apply(this, arguments);
            }
            TiQianHuanDaiPage.prototype.initView = function () {
                $(this.nodeTypeMap.get('openTiQianHuanDaiPage')).click(function () {
                    PageManager.to('btop.bui.TiQianHuanDaiPage');
                });
                $(this.nodeTypeMap.get('openCalculatorMainPage')).click(function () {
                    PageManager.to('btop.bui.CalculatorMainPage');
                });
                var _this = this;
                var validatorUtils = new bui.ValidatorUtils();
                validatorUtils.validate($("#tiQianHuanDaiPage")[0]);
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
                        { "01": "一次全部付清" },
                        { "02": "部分提前还款" }
                    ]
                };
                var tiqianfangshiSelect = WidgetManager.byId("tiqianfangshiSelect");
                tiqianfangshiSelect.initData(opt4);
                tiqianfangshiSelect.setSelectedItem('01');
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
                /**
                 * @description DatePicker
                 */
                var datepicker = WidgetManager.byId("datepicker1");
                datepicker.Date = { year: 2013, month: 1, date: 13 };
                $('#' + datepicker.id).find("input").addClass('input-control');
                var datepicker2 = WidgetManager.byId("datepicker2");
                datepicker2.Date = { year: 2016, month: 1, date: 13 };
                $('#' + datepicker2.id).find("input").addClass('input-control');
                console.info(datepicker2.Date);
                console.info(datepicker2.getDateString());
                var benjinValue = WidgetManager.byId("benjin");
                benjinValue.setAmount(String(100000));
                $('#' + benjinValue.id).find("input").addClass('input-control');
                var benjin1Value = WidgetManager.byId("benjin1");
                benjin1Value.setAmount(String(1000));
                $('#' + benjin1Value.id).find("input").addClass('input-control');
                $("#qixianSelect").val(100);
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
                    if (tiqianfangshiSelect.getHTMLValue() == "--请选择--") {
                        var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '请输入提前还款方式' });
                        buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                            console.info(e);
                        });
                        buiAlert.setTheme(bui.AlertTheme.Red);
                        return;
                    }
                    if (bufenhuankuanhouSelect.getHTMLValue() == "--请选择--") {
                        var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '请输入部分还款方式' });
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
                    var qidaidate = datepicker.getDateString();
                    var huandaidate = datepicker2.getDateString();
                    var qixian = $("#qixianSelect").val();
                    var huangKuanFangShi = fangshiSelect.getAttrValue();
                    var tiqianhuankuanfangshi = tiqianfangshiSelect.getAttrValue();
                    var bufenhuankuanhou = bufenhuankuanhouSelect.getAttrValue();
                    var tiQian = benjin1Value.getFloatAmt(); //提前还款金额
                    var lilv = liLv / 12 / 100;
                    var jinE = benjinValue.getFloatAmt(); //贷款金额
                    var qiShu = parseInt(qixian); //贷款期限
                    var date1 = qidaidate.split("-"); //起贷日期
                    var date2 = huandaidate.split("-"); //提前还贷日期
                    var tiQianHuanKuanFangShi = parseInt(tiqianhuankuanfangshi); //提前还款方式
                    var huankuanfangshi = parseInt(huangKuanFangShi); //还款方式
                    var buFenHuanKuanHou = parseInt(bufenhuankuanhou); //还款后的还款方式
                    var moons = (parseInt(date2[0]) - parseInt(date1[0])) * 12 + parseInt(date2[1]) - parseInt(date1[1]); //已还期数
                    if (huankuanfangshi == 1) {
                        var first = jinE * lilv * Math.pow(1 + lilv, qiShu) / (Math.pow(1 + lilv, qiShu) - 1);
                        var shengYu = jinE * (Math.pow((1 + lilv), qiShu) - Math.pow(1 + lilv, moons)) / (Math.pow(1 + lilv, qiShu) - 1) - tiQian;
                        var lixi;
                        var total;
                        if (tiQianHuanKuanFangShi == 1) {
                            total = first * moons + jinE;
                            lixi = total - jinE;
                        }
                        else {
                            if (buFenHuanKuanHou == 1) {
                                total = first * moons + tiQian + shengYu * lilv * (qiShu - moons) * Math.pow(1 + lilv, qiShu - moons) / (Math.pow(1 + lilv, qiShu - moons) - 1);
                                lixi = total - jinE;
                            }
                            else {
                                total = first * moons + tiQian + first * Math.log(first / (first - shengYu * lilv)) / Math.log(1 + lilv);
                                lixi = total - jinE;
                            }
                        }
                    }
                    else {
                        var first = jinE / qiShu + jinE * lilv;
                        var shengYu = jinE * (1 - moons / qiShu) - tiQian;
                        if (tiQianHuanKuanFangShi == 1) {
                            total = moons / qiShu * jinE + (moons - (moons - 1) * moons / (2 * qiShu)) * jinE * lilv + tiQian;
                            lixi = total - jinE;
                        }
                        else {
                            if (buFenHuanKuanHou == 1) {
                                total = moons / qiShu * jinE + (moons - (moons - 1) * moons / (2 * qiShu)) * jinE * lilv + tiQian + shengYu * lilv * (qiShu - moons) * Math.pow(1 + lilv, qiShu - moons) / (Math.pow(1 + lilv, qiShu - moons) - 1);
                                lixi = total - jinE;
                            }
                            else {
                                total = moons / qiShu * jinE + (moons - (moons - 1) * moons / (2 * qiShu)) * jinE * lilv + tiQian + first * Math.log(first / (first - shengYu * lilv)) / Math.log(1 + lilv);
                                lixi = total - jinE;
                            }
                        }
                    }
                    $("#shou-qi-jin-e").val(first.toFixed(4) + "");
                    $("#lei-ji-fu-xi").val(lixi.toFixed(4) + "");
                    $("#lei-ji-huan-kuan").val(total.toFixed(4) + "");
                });
                $("#recount").click(function () {
                    $("#shou-qi-jin-e").val("");
                    $("#lei-ji-fu-xi").val("");
                    $("#lei-ji-huan-kuan").val("");
                    $("#qixianSelect").val(10);
                    $("#lixilv").val("");
                    benjinValue.setAmount(String(0));
                    benjin1Value.setAmount(String(0));
                });
            };
            TiQianHuanDaiPage.prototype.findInrtByTypes = function (dataMode) {
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
            return TiQianHuanDaiPage;
        })(Page);
        bui.TiQianHuanDaiPage = TiQianHuanDaiPage;
        var ToolLoan = (function () {
            function ToolLoan() {
            }
            return ToolLoan;
        })();
        bui.ToolLoan = ToolLoan;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=TiQianHuanDaiPage.js.map