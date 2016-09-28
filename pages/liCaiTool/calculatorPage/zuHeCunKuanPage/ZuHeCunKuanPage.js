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
        var ZuHeCunKuanPage = (function (_super) {
            __extends(ZuHeCunKuanPage, _super);
            function ZuHeCunKuanPage() {
                _super.apply(this, arguments);
            }
            ZuHeCunKuanPage.prototype.initView = function () {
                $(this.nodeTypeMap.get('openZuHeCunKuanPage')).click(function () {
                    PageManager.to('btop.bui.ZuHeCunKuanPage');
                });
                $(this.nodeTypeMap.get('openCalculatorMainPage')).click(function () {
                    PageManager.to('btop.bui.CalculatorMainPage');
                });
                var _this = this;
                var validatorUtils = new bui.ValidatorUtils();
                validatorUtils.validate($("#zuHeCunKuanPage")[0]);
                //取出存款工具表
                //1 首先取出缓存数据
                bui.DbManager.sessionGet("ToolDeposits", true).then(function (data) {
                    if (data != null) {
                        _this.toolDeposits = data;
                    }
                    else {
                        bui.HttpUtils.bipHttp("tool_deposit", true).then(function (data) {
                            bui.DbManager.sessionPut("ToolDeposits", data, true, true).then(function (data) {
                                _this.toolDeposits = data;
                            });
                        });
                    }
                });
                var opt1 = {
                    data: [
                        { "01": "存本取息+零存整取" },
                        { "02": "存本取息+整存整取" }
                    ]
                };
                var zuhecunkunSelect = WidgetManager.byId("zuhecunkunSelect");
                zuhecunkunSelect.initData(opt1);
                zuhecunkunSelect.setSelectedItem('01');
                zuhecunkunSelect.on('change', function (data) {
                    //Object {attrValue: "04", htmlValue: "apple"}
                    $('#No1').html(data[0].htmlValue);
                });
                var opt2 = {
                    data: [
                        { "01": "人民币" },
                        { "02": " 美元" },
                        { "03": "英镑" },
                        { "04": "港币" },
                        { "05": "欧元" },
                        { "06": "日元" },
                        { "07": "澳元" },
                        { "08": "加元" }
                    ]
                };
                var bizhongSelect = WidgetManager.byId("bizhongSelect");
                bizhongSelect.initData(opt2);
                bizhongSelect.setSelectedItem('01');
                /**
                 * @description DatePicker
                 */
                //var datepicker:DatePicker = <DatePicker>WidgetManager.byId("datepicker1");
                //datepicker.Date = { year: 2013, month: 1, date: 13 };
                //$('#'+datepicker.id).find("input").addClass('input-control');
                //console.info(datepicker.Date);
                //console.info(datepicker.getDateString());
                //var datepicker2:DatePicker = <DatePicker>WidgetManager.byId("datepicker2");
                //datepicker2.Date = { year: 2013, month: 1, date: 13 };
                //$('#'+datepicker2.id).find("input").addClass('input-control');
                //console.info(datepicker2.Date);
                //console.info(datepicker2.getDateString());
                var opt3 = {
                    data: [
                        { "08": "一年" },
                        { "09": "三年" },
                        { "10": "五年" }
                    ]
                };
                var cunqiSelect = WidgetManager.byId("cunqiSelect");
                cunqiSelect.initData(opt3);
                cunqiSelect.setSelectedItem('08');
                var benjinValue = WidgetManager.byId("benjin");
                benjinValue.setAmount(String(100000));
                $('#' + benjinValue.id).find("input").addClass('input-control');
                /**
                 * @description 金额输入厂封装，支持页面生名式
                 * setAmount: 设置金额
                 * getAmount: 获得金额的字符串
                 * getFloatAmt: 获得浮点型的金额值
                 */
                var dpstType = cunqiSelect.getAttrValue();
                var inst = _this.findInrtByTypes("2", dpstType);
                $("#liLv1").val(inst);
                $("#liLv2").val(inst);
                $("#zidonghuoquBTN").click(function () {
                    var dpstType = cunqiSelect.getAttrValue();
                    var inst = _this.findInrtByTypes("2", dpstType);
                    console.info(inst);
                    $("#liLv1").val(inst);
                    $("#liLv2").val(inst);
                });
                cunqiSelect.on('change', function (data) {
                    var dpstType = cunqiSelect.getAttrValue();
                    var inst = _this.findInrtByTypes("2", dpstType);
                    $("#liLv1").val(inst);
                    $("#liLv2").val(inst);
                });
                $("#compute").click(function (e) {
                    if (!validatorUtils.submitValidate()) {
                        bui.EventUtils.preventDefault(e);
                        return false;
                    }
                    if (zuhecunkunSelect.getHTMLValue() == "--请选择--") {
                        var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '请输入存款种类' });
                        buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                            console.info(e);
                        });
                        buiAlert.setTheme(bui.AlertTheme.Red);
                        return;
                    }
                    if (bizhongSelect.getHTMLValue() == "--请选择--") {
                        var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '请选择币种' });
                        buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                            console.info(e);
                        });
                        buiAlert.setTheme(bui.AlertTheme.Red);
                        return;
                    }
                    if (cunqiSelect.getHTMLValue() == "--请选择--") {
                        var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '请选择存期' });
                        buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                            console.info(e);
                        });
                        buiAlert.setTheme(bui.AlertTheme.Red);
                        return;
                    }
                    var benJin = benjinValue.getFloatAmt();
                    var lilv1 = $("#liLv1").val();
                    var lilv2 = $("#liLv2").val();
                    var zhongLei = zuhecunkunSelect.getAttrValue();
                    var cunqi = cunqiSelect.getAttrValue();
                    var sort = parseInt(zhongLei);
                    var cunQi = parseInt(cunqi);
                    if (sort == 1) {
                        //存本取息
                        var liLv1 = lilv1 / 12 / 100;
                        var liXi1 = benJin * liLv1 * cunQi;
                        var heJi1 = benJin + liXi1;
                        //整存零取
                        var liLv2 = lilv2 / 12 / 100;
                        var zhiqujine = benJin / cunQi;
                        var liXi2 = (benJin + zhiqujine) / 2 * liLv2 * cunQi;
                        var heJi2 = benJin + liXi2;
                        var param = "<div class='col l3 push-l2'>" +
                            "<span>存本取息</span>" + "</div>" + "<div class='col l3 push-l3'>" +
                            "<span>整存零取</span>" + "</div>";
                        $("#sort").html(param);
                    }
                    else if (sort == 2) {
                        var liLv1 = lilv1 / 12 / 100;
                        var liXi1 = benJin * liLv1 * cunQi;
                        var heJi1 = benJin + liXi1;
                        //整存整取
                        var liLv2 = lilv2 / 12 / 100;
                        var liXi2 = benJin * liLv2 * cunQi;
                        var heJi2 = benJin + liXi2;
                        var param = "<div class='col l3 push-l2'>" +
                            "<span>存本取息</span>" + "</div>" + "<div class='col l3 push-l3'>" +
                            "<span>整存整取</span>" + "</div>";
                        $("#sort").html(param);
                    }
                    else if (sort == 3) {
                        var liLv1 = lilv1 / 12 / 100;
                        var liXi1 = benJin * liLv1 * cunQi;
                        var heJi1 = benJin + liXi1;
                        var liLv2 = lilv2 / 12 / 100;
                        var liXi2 = benJin * liLv2 * cunQi;
                        var heJi2 = benJin + liXi2;
                        var param = "<div class='col l3 push-l3'>" +
                            "<span>整存整取</span>" + "</div>" + "<div class='col l3 push-l4'>" +
                            "<span>定活两便</span>" + "</div>";
                        $("#sort").html(param);
                    }
                    $("#liXi1").val(liXi1.toFixed(4) + "");
                    $("#heJi1").val(heJi1.toFixed(4) + "");
                    $("#liXi2").val(liXi2.toFixed(4) + "");
                    $("#heJi2").val(heJi2.toFixed(4) + "");
                });
                $("#recount").click(function () {
                    benjinValue.setAmount(String(0));
                    $("#liLv1").val("");
                    $("#heJi1").val("");
                    $("#liLv2").val("");
                    $("#heJi2").val("");
                    liXi1;
                    $("#liXi1").val("");
                    $("#liXi2").val("");
                });
                var dpstType = cunqiSelect.getAttrValue();
                var inst = _this.findInrtByTypes("2", dpstType);
                $("#liLv1").val(inst);
                $("#liLv2").val(inst);
                $("#zidonghuoquBTN").click(function () {
                    var dpstType = cunqiSelect.getAttrValue();
                    var inst = _this.findInrtByTypes("2", dpstType);
                    $("#liLv1").val(inst);
                    $("#liLv2").val(inst);
                });
                cunqiSelect.on('change', function (data) {
                    var dpstType = cunqiSelect.getAttrValue();
                    var inst = _this.findInrtByTypes("2", dpstType);
                    $("#liLv1").val(inst);
                    $("#liLv2").val(inst);
                });
            };
            ZuHeCunKuanPage.prototype.findInrtByTypes = function (dataMode, dpstType) {
                if (this.toolDeposits != null) {
                    for (var i in this.toolDeposits) {
                        if (this.toolDeposits[i].DPST_MODE == dataMode && this.toolDeposits[i].DPST_TYPE == dpstType) {
                            return this.toolDeposits[i].INRT;
                        }
                    }
                }
            };
            return ZuHeCunKuanPage;
        })(Page);
        bui.ZuHeCunKuanPage = ZuHeCunKuanPage;
        var ToolDeposit = (function () {
            function ToolDeposit() {
            }
            return ToolDeposit;
        })();
        bui.ToolDeposit = ToolDeposit;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ZuHeCunKuanPage.js.map