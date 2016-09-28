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
        var DaiKuanCalculatorPage = (function (_super) {
            __extends(DaiKuanCalculatorPage, _super);
            function DaiKuanCalculatorPage() {
                _super.apply(this, arguments);
            }
            DaiKuanCalculatorPage.prototype.initView = function () {
                $(this.nodeTypeMap.get('openDaiKuanCalculatorPage')).click(function () {
                    PageManager.to('btop.bui.DaiKuanCalculatorPage');
                });
                $(this.nodeTypeMap.get('openCalculatorMainPage')).click(function () {
                    PageManager.to('btop.bui.CalculatorMainPage');
                });
                var _this = this;
                var lilv;
                var validatorUtils = new bui.ValidatorUtils();
                validatorUtils.validate($("#daiKuanCalculatorPage")[0]);
                bui.DbManager.sessionGet("toolLoans", true).then(function (data) {
                    if (data != null) {
                        _this.toolLoans = data;
                        lilv = _this.findInrtByTypes("0");
                        $("#lixilv").val(lilv);
                    }
                    else {
                        var reqMsg = new bui.ReqMsg();
                        bui.HttpUtils.bipHttp("tool_loan", reqMsg).then(function (data) {
                            //if (data.header.rc == "0000"){
                            //
                            //} else {
                            //    BGlobal.Alert.show({title: "提示", content: resMsg.header.rm})
                            //}
                            if (data.header.rc === "0000") {
                            }
                            else {
                                data = '{"header":{"rc":"0000","rm":""},"body":{"LOANLIST":[{"ADJUSTDT":"2015-10-24 00:00:00.0","DATA_DT":"2016-06-21 00:00:00.0","LESSFIVE":"4.750","LESSONE":"4.350","MOREFIVE":"4.900"},{"ADJUSTDT":"2015-08-26 00:00:00.0","DATA_DT":"2016-06-21 00:00:00.0","LESSFIVE":"5.000","LESSONE":"4.600","MOREFIVE":"5.150"}]}}';
                                data = JSON.parse(data);
                            }
                            bui.DbManager.sessionPut("toolLoans", data, true, true).then(function (data) {
                                _this.toolLoans = data;
                                lilv = _this.findInrtByTypes("2");
                                $("#lixilv").val(lilv);
                            });
                        }, function (error) {
                            bui.BGlobal.Alert.show({ title: '提示', content: "网络请求异常" });
                        });
                    }
                });
                //还款方式
                var opt4 = {
                    data: [
                        { "2": "等额本息还款" },
                        { "3": "等额本金还款" }
                    ]
                };
                var huankuanSelect = WidgetManager.byId("huankuanSelect");
                huankuanSelect.initData(opt4);
                huankuanSelect.setSelectedItem('2');
                var benjinValue = WidgetManager.byId("benjin");
                benjinValue.setAmount(String(100000));
                $('#' + benjinValue.id).find("input").addClass('input-control');
                var dpstType;
                $("#zidonghuoquBTN").click(function () {
                    var inst = _this.findInrtByTypes("0");
                    $("#lixilv").val(inst);
                });
                $("#daikuanqixianSelect").blur(function () {
                    var qixian = parseInt($("#daikuanqixianSelect").val());
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
                var liLvZheKou;
                $("#liLvZheKou").blur(function () {
                    var zheKou = parseFloat($("#liLvZheKou").val());
                    if (0 < zheKou && zheKou <= 1) {
                        liLvZheKou = parseInt($("#liLvZheKou").val());
                    }
                    else {
                        $("#liLvZheKou").val(1.0);
                    }
                });
                $("#liLvZheKou").val(1.0);
                $("#daikuanqixianSelect").val(12);
                $("#compute").click(function () {
                    if (!validatorUtils.submitValidate()) {
                        bui.EventUtils.preventDefault(e);
                        return false;
                    }
                    if (huankuanSelect.getHTMLValue() == "--请选择--") {
                        var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '请选择还款种类' });
                        buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                            console.info(e);
                        });
                        buiAlert.setTheme(bui.AlertTheme.Red);
                        return;
                    }
                    var liLv = $("#lixilv").val() * parseFloat($("#liLvZheKou").val());
                    var fangshi = huankuanSelect.getAttrValue();
                    var benjinvalue = benjinValue.getFloatAmt();
                    $(".ming-xi-biao").css("display", "block");
                    $(".data").css("display", "block");
                    var lilv = liLv / 12 / 100;
                    var qiXian = parseInt($("#daikuanqixianSelect").val()); //期数
                    var jinE = benjinvalue; //贷款总额
                    var fangShi = parseInt(fangshi); //还款方式
                    //等额本息还款
                    var fn = Math.pow((1 + lilv), qiXian) / (Math.pow((1 + lilv), qiXian) - 1);
                    var perDate = jinE * lilv * fn; //每期还款额
                    var yuE = 0; //剩余本金
                    //等额本金还款
                    var html = "";
                    if (fangShi == 2) {
                        for (var i = 1; i <= qiXian; i++) {
                            var perBenJin = jinE * ((Math.pow((1 + lilv), i) - Math.pow((1 + lilv), (i - 1))) / (Math.pow((1 + lilv), qiXian) - 1)); //每期还本金
                            var perLiXi = perDate - perBenJin; //每期还利息
                            if (i == 1) {
                                yuE = jinE - perBenJin;
                            }
                            else {
                                yuE = yuE - perBenJin;
                            }
                            if ((i % 2) == 1) {
                                var param = "<div >" +
                                    "<div class='col l11 push-l1'style='margin-top: 10px !important;background-color: lightgrey !important;'>" +
                                    "<div style='display: inline-block;width: 19%;padding-left:5px;text-align: left'>" + i + "</div>" +
                                    "<div style='display: inline-block;width: 19%;text-align: center'>" + perLiXi.toFixed(4) + "</div>" +
                                    "<div style='display: inline-block;width: 19%;text-align: center'>" + perBenJin.toFixed(4) + "</div>" +
                                    "<div style='display: inline-block;width: 19%;text-align: center'>" + perDate.toFixed(4) + "</div>" +
                                    "<div style='display: inline-block;width: 19%;text-align: center'>" + yuE.toFixed(4) + "</div>" +
                                    "</div>" +
                                    "</div>";
                            }
                            else {
                                var param = "<div>" +
                                    "<div class='col l11 push-l1'style='margin-top: 10px !important;'>" +
                                    "<div style='display: inline-block;width: 19%;padding-left:5px;text-align: left'>" + i + "</div>" +
                                    "<div style='display: inline-block;width: 19%;text-align: center'>" + perLiXi.toFixed(4) + "</div>" +
                                    "<div style='display: inline-block;width: 19%;text-align: center'>" + perBenJin.toFixed(4) + "</div>" +
                                    "<div style='display: inline-block;width: 19%;text-align: center'>" + perDate.toFixed(4) + "</div>" +
                                    "<div style='display: inline-block;width: 19%;text-align: center'>" + yuE.toFixed(4) + "</div>" +
                                    "</div>" +
                                    "</div>";
                            }
                            html = html + param;
                        }
                        $(".data").html(html);
                        var total = perDate * qiXian;
                        var totalLiXi = total - jinE;
                        $("#lei-ji-fu-xi").val(totalLiXi.toFixed(4) + "");
                        $("#lei-ji-huan-kuan").val(total.toFixed(4) + "");
                    }
                    else if (fangShi == 3) {
                        for (var k = 1; k <= qiXian; k++) {
                            var perBenJin = jinE / qiXian; //每期还本金
                            var huanxi = (1 - ((k - 1) / qiXian)) * jinE * lilv; //k期还息额  2
                            var KhuankuanE = jinE / qiXian + (1 - (k - 1) / qiXian) * jinE * lilv; //k期还款额 4
                            var yuE = (1 - (k / qiXian)) * jinE; //贷款余额  5
                            if ((k % 2) == 1) {
                                var param = "<div style='background-color: pink'>" +
                                    "<div class='col l11 push-l1'style='margin-top: 10px !important;background-color: lightgrey !important;'>" +
                                    "<div style='display: inline-block;width: 19% ;padding-left:5px;text-align: left'>" + k + "</div>" +
                                    "<div style='display: inline-block;width: 19%;text-align: center'>" + huanxi.toFixed(4) + "</div>" +
                                    "<div style='display: inline-block;width: 19%;text-align: center'>" + perBenJin.toFixed(4) + "</div>" +
                                    "<div style='display: inline-block;width: 19%;text-align: center'>" + KhuankuanE.toFixed(4) + "</div>" +
                                    "<div style='display: inline-block;width: 19%;text-align: center'>" + yuE.toFixed(4) + "</div>" +
                                    "</div>" +
                                    "</div>";
                            }
                            else {
                                var param = "<div >" +
                                    "<div class='col l11 push-l1'style='margin-top: 10px !important;'>" +
                                    "<div style='display: inline-block;width: 19%; padding-left:5px;text-align: left'>" + k + "</div>" +
                                    "<div style='display: inline-block;width: 19%;text-align: center'>" + huanxi.toFixed(4) + "</div>" +
                                    "<div style='display: inline-block;width: 19%;text-align: center'>" + perBenJin.toFixed(4) + "</div>" +
                                    "<div style='display: inline-block;width: 19%;text-align: center'>" + KhuankuanE.toFixed(4) + "</div>" +
                                    "<div style='display: inline-block;width: 19%;text-align: center'>" + yuE.toFixed(4) + "</div>" +
                                    "</div>" +
                                    "</div>";
                            }
                            html = html + param;
                        }
                        $(".data").html(html);
                        var total = jinE + (qiXian - (qiXian - 1) / 2) * jinE * lilv;
                        var totalLiXi = (qiXian - (qiXian - 1) / 2) * jinE * lilv;
                        $("#lei-ji-fu-xi").val(totalLiXi.toFixed(4) + "");
                        $("#lei-ji-huan-kuan").val(total.toFixed(4) + "");
                    }
                    else {
                        var huanxi = jinE * lilv * qiXian; //k期还息额
                        var KhuankuanE = jinE * lilv * qiXian + jinE; //k期还款额
                        var yuE = 0; //贷款余额
                        var param = "<div>" +
                            "<div class='col l11 push-l1'style='margin-top: 10px !important;'>" +
                            "<div style='display: inline-block;width: 19%;text-align: left'>" + 1 + "</div>" +
                            "<div style='display: inline-block;width: 19%;text-align: left'>" + huanxi.toFixed(4) + "</div>" +
                            "<div style='display: inline-block;width: 19%;text-align: left'>" + jinE.toFixed(4) + "</div>" +
                            "<div style='display: inline-block;width: 19%;text-align: left'>" + KhuankuanE.toFixed(4) + "</div>" +
                            "<div style='display: inline-block;width: 19%;text-align: left'>" + yuE.toFixed(4) + "</div>" +
                            "</div>" +
                            "</div>";
                        html = html + param;
                        $(".data").html(html);
                        var total = jinE * lilv * qiXian + jinE;
                        var totalLiXi = jinE * lilv * qiXian;
                        $("#lei-ji-fu-xi").val(totalLiXi.toFixed(4) + "");
                        $("#lei-ji-huan-kuan").val(total.toFixed(4) + "");
                    }
                });
                $("#recount").click(function () {
                    benjinValue.setAmount(String(0));
                    $(".qi-dai-ri-qi").val("");
                    $(".huan-dai-ri").val("");
                    $(".qi-xian").val("");
                    $(".jin-e").val("");
                    $(".li-lv").val("");
                    $("#lei-ji-fu-xi").val("");
                    $("#lei-ji-huan-kuan").val("");
                    $("#lixilv").val("");
                    $("#daikuanqixianSelect").val(10);
                    $(".ming-xi-biao").css("display", "none");
                    $(".data").css("display", "none");
                });
            };
            DaiKuanCalculatorPage.prototype.findInrtByTypes = function (dataMode) {
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
            return DaiKuanCalculatorPage;
        })(Page);
        bui.DaiKuanCalculatorPage = DaiKuanCalculatorPage;
        var ToolLoan = (function () {
            function ToolLoan() {
            }
            return ToolLoan;
        })();
        bui.ToolLoan = ToolLoan;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=DaiKuanCalculatorPage.js.map