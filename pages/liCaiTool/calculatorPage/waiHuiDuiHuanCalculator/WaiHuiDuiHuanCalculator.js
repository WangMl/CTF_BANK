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
        var WaiHuiDuiHuanCalculator = (function (_super) {
            __extends(WaiHuiDuiHuanCalculator, _super);
            function WaiHuiDuiHuanCalculator() {
                _super.apply(this, arguments);
            }
            WaiHuiDuiHuanCalculator.prototype.initView = function () {
                var _this = this;
                var validatorUtils = new bui.ValidatorUtils();
                validatorUtils.validate($("#waiHuiDuiHuanCalculator")[0]);
                $(this.nodeTypeMap.get('openWaiHuiDuiHuanCalculator')).click(function () {
                    PageManager.to('btop.bui.WaiHuiDuiHuanCalculator');
                });
                $(this.nodeTypeMap.get('openCalculatorMainPage')).click(function () {
                    PageManager.to('btop.bui.CalculatorMainPage');
                });
                var opt1 = {
                    data: [
                        { "10": "人民币" }
                    ]
                };
                var yuanshiSelect = WidgetManager.byId("yuanshiSelect");
                yuanshiSelect.initData(opt1);
                yuanshiSelect.setSelectedItem('10');
                var opt2 = {
                    data: [
                        { "USD": "美元" },
                        { "CAD": "加拿大币" },
                        { "EUR": "欧元" },
                        { "AUD": "澳大利亚元" },
                        { "GBP": "英镑" },
                        { "HKD": "港币" },
                        { "JPY": "日元" },
                    ]
                };
                var mubiaoSelect = WidgetManager.byId("mubiaoSelect");
                mubiaoSelect.initData(opt2);
                mubiaoSelect.setSelectedItem('USD');
                var lilv;
                bui.DbManager.sessionGet("toolForexPrices", true).then(function (data) {
                    if (data != null) {
                        _this.toolForexPrices = data;
                        var duihuan = _this.findLilv("USD") / 100;
                        lilv = 1 / duihuan;
                        $("#lixilv").val(lilv.toFixed(3));
                    }
                    else {
                        var reqMsg = new bui.ReqMsg();
                        reqMsg.body =
                            {};
                        bui.HttpUtils.bipHttp("tool_forexPrice", reqMsg).then(function (data) {
                            bui.DbManager.sessionPut("toolForexPrices", data.body.CurList, true, true).then(function (data) {
                                _this.toolForexPrices = data;
                                var duihuan = _this.findLilv("USD") / 100;
                                lilv = 1 / duihuan;
                                $("#lixilv").val(lilv.toFixed(3));
                            });
                        });
                    }
                });
                var duihuanjine = WidgetManager.byId("duihuanjine");
                duihuanjine.setAmount(String(1));
                $('#' + duihuanjine.id).find("input").addClass('input-control');
                mubiaoSelect.on('change', function (data) {
                    //dangqianhuilv.setAmount(String(data[0].attrValue));// 获取目标货币的value
                    if (mubiaoSelect.getAttrValue() == "USD") {
                        var duihuan = _this.findLilv("USD") / 100;
                        if (!duihuan) {
                            lilv = $("#lixilv").val();
                        }
                        else {
                            lilv = 1 / duihuan;
                            $("#lixilv").val(lilv.toFixed(3));
                        }
                    }
                    else if (mubiaoSelect.getAttrValue() == "CAD") {
                        var duihuan = _this.findLilv("CAD") / 100;
                        if (!duihuan) {
                            lilv = $("#lixilv").val();
                        }
                        else {
                            lilv = 1 / duihuan;
                            $("#lixilv").val(lilv.toFixed(3));
                        }
                    }
                    else if (mubiaoSelect.getAttrValue() == "EUR") {
                        var duihuan = _this.findLilv("EUR") / 100;
                        if (!duihuan) {
                            lilv = $("#lixilv").val();
                        }
                        else {
                            lilv = 1 / duihuan;
                            $("#lixilv").val(lilv.toFixed(3));
                        }
                    }
                    else if (mubiaoSelect.getAttrValue() == "AUD") {
                        var duihuan = _this.findLilv("AUD") / 100;
                        if (!duihuan) {
                            lilv = $("#lixilv").val();
                        }
                        else {
                            lilv = 1 / duihuan;
                            $("#lixilv").val(lilv.toFixed(3));
                        }
                    }
                    else if (mubiaoSelect.getAttrValue() == "GBP") {
                        var duihuan = _this.findLilv("GBP") / 100;
                        if (!duihuan) {
                            lilv = $("#lixilv").val();
                        }
                        else {
                            lilv = 1 / duihuan;
                            $("#lixilv").val(lilv.toFixed(3));
                        }
                    }
                    else if (mubiaoSelect.getAttrValue() == "HKD") {
                        var duihuan = _this.findLilv("HKD") / 100;
                        if (!duihuan) {
                            lilv = $("#lixilv").val();
                        }
                        else {
                            lilv = 1 / duihuan;
                            $("#lixilv").val(lilv.toFixed(3));
                        }
                    }
                    else if (mubiaoSelect.getAttrValue() == "JPY") {
                        var duihuan = _this.findLilv("JPY") / 100;
                        if (!duihuan) {
                            lilv = $("#lixilv").val();
                        }
                        else {
                            lilv = 1 / duihuan;
                            $("#lixilv").val(lilv.toFixed(3));
                        }
                    }
                    $("#start").html("");
                });
                $("#compute").click(function (e) {
                    if (!validatorUtils.submitValidate()) {
                        bui.EventUtils.preventDefault(e);
                        return false;
                    }
                    if (mubiaoSelect.getAttrValue() == "USD") {
                        var duihuan_1 = _this.findLilv("USD") / 100;
                        if (!duihuan_1) {
                            lilv = $("#lixilv").val();
                        }
                        else {
                            lilv = 1 / duihuan_1;
                            $("#lixilv").val(lilv.toFixed(3));
                        }
                    }
                    else if (mubiaoSelect.getAttrValue() == "CAD") {
                        var duihuan_2 = _this.findLilv("CAD") / 100;
                        if (!duihuan_2) {
                            lilv = $("#lixilv").val();
                        }
                        else {
                            lilv = 1 / duihuan_2;
                            $("#lixilv").val(lilv.toFixed(3));
                        }
                    }
                    else if (mubiaoSelect.getAttrValue() == "EUR") {
                        var duihuan_3 = _this.findLilv("EUR") / 100;
                        if (!duihuan_3) {
                            lilv = $("#lixilv").val();
                        }
                        else {
                            lilv = 1 / duihuan_3;
                            $("#lixilv").val(lilv.toFixed(3));
                        }
                    }
                    else if (mubiaoSelect.getAttrValue() == "AUD") {
                        var duihuan_4 = _this.findLilv("AUD") / 100;
                        if (!duihuan_4) {
                            lilv = $("#lixilv").val();
                        }
                        else {
                            lilv = 1 / duihuan_4;
                            $("#lixilv").val(lilv.toFixed(3));
                        }
                    }
                    else if (mubiaoSelect.getAttrValue() == "GBP") {
                        var duihuan_5 = _this.findLilv("GBP") / 100;
                        if (!duihuan_5) {
                            lilv = $("#lixilv").val();
                        }
                        else {
                            lilv = 1 / duihuan_5;
                            $("#lixilv").val(lilv.toFixed(3));
                        }
                    }
                    else if (mubiaoSelect.getAttrValue() == "HKD") {
                        var duihuan_6 = _this.findLilv("HKD") / 100;
                        if (!duihuan_6) {
                            lilv = $("#lixilv").val();
                        }
                        else {
                            lilv = 1 / duihuan_6;
                            $("#lixilv").val(lilv.toFixed(3));
                        }
                    }
                    else if (mubiaoSelect.getAttrValue() == "JPY") {
                        var duihuan_7 = _this.findLilv("JPY") / 100;
                        if (!duihuan_7) {
                            lilv = $("#lixilv").val();
                        }
                        else {
                            lilv = 1 / duihuan_7;
                            $("#lixilv").val(lilv.toFixed(3));
                        }
                    }
                    var duihuanValue = duihuanjine.getFloatAmt();
                    var lixilvValue = lilv; //////
                    var mubiaoName = mubiaoSelect.getHTMLValue();
                    var jinE = duihuanValue;
                    var duihuan = jinE * lixilvValue;
                    var param = "<div class='col l11 push-l1'>" +
                        "<div style='display: inline-block;text-align: left;color:red;font-size:30px'>" + jinE.toFixed(4) + "</div>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div style='display: inline-block;text-align: left;'>" + "<div style='display: inline-block;text-align: left;color:black;font-size:30px'>" + "人民币" + "</div>" + "</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                        "<div style='display: inline-block;text-align: left;color:black;font-size:30px'>" +
                        "=" + "</div>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div style='display: inline-block;text-align: left;color:red;font-size:30px'>" + duihuan.toFixed(3) + "</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div style='display: inline-block;text-align: left;'>"
                        + "<div style='display: inline-block;text-align: left;color:black;font-size:30px'>" + mubiaoName + "</div>" +
                        "</div>";
                    //$("#lixilv").val(lixilvValue.toFixed(3) + "");
                    $("#start").html(param);
                });
                $("#recount").click(function () {
                    var duihuanValue = duihuanjine.getFloatAmt();
                    if (mubiaoSelect.getAttrValue() == "USD") {
                        var duihuan_8 = _this.findLilv("USD") / 100;
                        if (!duihuan_8) {
                            var inputValue = $("#lixilv").val();
                            lilv = 1 / inputValue;
                        }
                        else {
                            lilv = duihuan_8;
                            $("#lixilv").val(lilv.toFixed(3));
                        }
                    }
                    else if (mubiaoSelect.getAttrValue() == "CAD") {
                        var duihuan_9 = _this.findLilv("CAD") / 100;
                        if (!duihuan_9) {
                            var inputValue = $("#lixilv").val();
                            lilv = 1 / inputValue;
                        }
                        else {
                            lilv = duihuan_9;
                            $("#lixilv").val(lilv.toFixed(3));
                        }
                    }
                    else if (mubiaoSelect.getAttrValue() == "EUR") {
                        var duihuan_10 = _this.findLilv("EUR") / 100;
                        if (!duihuan_10) {
                            var inputValue = $("#lixilv").val();
                            lilv = 1 / inputValue;
                        }
                        else {
                            lilv = duihuan_10;
                            $("#lixilv").val(lilv.toFixed(3));
                        }
                    }
                    else if (mubiaoSelect.getAttrValue() == "AUD") {
                        var duihuan_11 = _this.findLilv("AUD") / 100;
                        if (!duihuan_11) {
                            var inputValue = $("#lixilv").val();
                            lilv = 1 / inputValue;
                        }
                        else {
                            lilv = duihuan_11;
                            $("#lixilv").val(lilv.toFixed(3));
                        }
                    }
                    else if (mubiaoSelect.getAttrValue() == "GBP") {
                        var duihuan_12 = _this.findLilv("GBP") / 100;
                        if (!duihuan_12) {
                            var inputValue = $("#lixilv").val();
                            lilv = 1 / inputValue;
                        }
                        else {
                            lilv = duihuan_12;
                            $("#lixilv").val(lilv.toFixed(3));
                        }
                    }
                    else if (mubiaoSelect.getAttrValue() == "HKD") {
                        var duihuan_13 = _this.findLilv("HKD") / 100;
                        if (!duihuan_13) {
                            var inputValue = $("#lixilv").val();
                            lilv = 1 / inputValue;
                        }
                        else {
                            lilv = duihuan_13;
                            $("#lixilv").val(lilv.toFixed(3));
                        }
                    }
                    else if (mubiaoSelect.getAttrValue() == "JPY") {
                        var duihuan_14 = _this.findLilv("JPY") / 100;
                        if (!duihuan_14) {
                            var inputValue = $("#lixilv").val();
                            lilv = 1 / inputValue;
                        }
                        else {
                            lilv = duihuan_14;
                            $("#lixilv").val(lilv.toFixed(3));
                        }
                    }
                    var lixilvValue = lilv; ////////////////////////
                    var mubiaoName = mubiaoSelect.getHTMLValue();
                    var jinE = duihuanValue;
                    var duihuan = jinE * lixilvValue;
                    var param = "<div class='col l11 push-l1'>" +
                        "<div style='display: inline-block;text-align: left;color:red;font-size:30px'>"
                        + jinE.toFixed(4) + "</div>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div style='display: inline-block;text-align: left;'>" +
                        "<div style='display: inline-block;text-align: left;color:black;font-size:30px'>" +
                        mubiaoName + "</div>" +
                        "</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                        "<div style='display: inline-block;text-align: left;color:black;font-size:30px'>" +
                        "=" + "</div>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div style='display: inline-block;text-align: left;color:red;font-size:30px'>" +
                        duihuan.toFixed(3) + "</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div style='display: inline-block;text-align: left;'>"
                        + "<div style='display: inline-block;text-align: left;color:black;font-size:30px'>" +
                        "人民币" + "</div>" +
                        "</div>";
                    $("#lixilv").val(lixilvValue.toFixed(3) + "");
                    $("#start").html(param);
                    $("#jinE").val(jinE + "");
                });
            };
            WaiHuiDuiHuanCalculator.prototype.findLilv = function (bizhong) {
                if (this.toolForexPrices != null) {
                    for (var i in this.toolForexPrices) {
                        if (this.toolForexPrices[i].CURTYPE == bizhong) {
                            return this.toolForexPrices[i].HUPUPRICE;
                        }
                    }
                }
            };
            return WaiHuiDuiHuanCalculator;
        })(Page);
        bui.WaiHuiDuiHuanCalculator = WaiHuiDuiHuanCalculator;
        var toolForexPrice = (function () {
            function toolForexPrice() {
            }
            return toolForexPrice;
        })();
        bui.toolForexPrice = toolForexPrice;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=WaiHuiDuiHuanCalculator.js.map