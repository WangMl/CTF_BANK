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
        var ZhengCunLingQuPage = (function (_super) {
            __extends(ZhengCunLingQuPage, _super);
            function ZhengCunLingQuPage() {
                _super.apply(this, arguments);
            }
            ZhengCunLingQuPage.prototype.initView = function () {
                var validatorUtils = new bui.ValidatorUtils();
                validatorUtils.validate($("#zhengCunLingQuPage")[0]);
                $(this.nodeTypeMap.get('openZhengCunLingQuPage')).click(function () {
                    PageManager.to('btop.bui.ZhengCunLingQuPage');
                });
                $(this.nodeTypeMap.get('openCalculatorMainPage')).click(function () {
                    PageManager.to('btop.bui.CalculatorMainPage');
                });
                $('#benjin').val("100000.00");
                var _this = this;
                //取出存款工具表
                //1 首先取出缓存数据
                var reqMsg = new bui.ReqMsg();
                reqMsg.body =
                    {};
                bui.DbManager.sessionGet("ToolDeposits", true).then(function (data) {
                    if (data != null) {
                        _this.toolDeposits = data;
                    }
                    else {
                        bui.HttpUtils.bipHttp("tool_deposit", reqMsg).then(function (data) {
                            bui.DbManager.sessionPut("ToolDeposits", data.body.DEPOSITLIST, true, true).then(function (data) {
                                _this.toolDeposits = data;
                                bizhong = bizhongSelect.getHTMLValue();
                                cunqi = cunqiSelect.getHTMLValue();
                                lilv = _this.findLilv(bizhong, cunqi, 1);
                                $("#lixilv").val(lilv);
                            });
                        });
                    }
                });
                bui.DbManager.sessionGet("ToolForexDeposit", true).then(function (data) {
                    if (data != null) {
                        _this.toolWaihui = data;
                    }
                    else {
                        bui.HttpUtils.bipHttp("tool_forexDeposit", reqMsg).then(function (data) {
                            bui.DbManager.sessionPut("ToolForexDeposit", data.body.FXDEPOSITLIST, true, true).then(function (data) {
                                _this.toolWaihui = data;
                            });
                        });
                    }
                });
                var _this = this;
                var opt1 = {
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
                var opt2 = {
                    data: [
                        { "12": "一年" },
                        { "36": "三年" },
                        { "60": "五年" }
                    ]
                };
                var opt3 = {
                    data: [
                        { "1": "一个月" },
                        { "3": " 三个月" },
                        { "6": "六个月" },
                        { "12": "一年" },
                        { "24": "二年" }
                    ]
                };
                var opt4 = {
                    data: [
                        { "01": "月" },
                        { "02": " 季" }
                    ]
                };
                var cunqiSelect = WidgetManager.byId("cunqiSelect");
                cunqiSelect.initData(opt2);
                cunqiSelect.setSelectedItem('12');
                var bizhongSelect = WidgetManager.byId("bizhongSelect");
                bizhongSelect.initData(opt1);
                bizhongSelect.setSelectedItem('01');
                var zhiQuZhouQiSelect = WidgetManager.byId("zhiQuZhouQi");
                zhiQuZhouQiSelect.initData(opt4);
                zhiQuZhouQiSelect.setSelectedItem('01');
                //var datepicker:DatePicker = <DatePicker>WidgetManager.byId("datepicker1");
                //datepicker.Date = {year: 2016, month: 8, date: 1};
                //$('#' + datepicker.id).find("input").addClass('input-control');
                var benjinValue = WidgetManager.byId("benjin");
                benjinValue.setAmount(String(100000));
                $('#' + benjinValue.id).find("input").addClass('input-control');
                var bizhong = null;
                var cunqi = null;
                var lilv = null;
                bizhong = bizhongSelect.getHTMLValue();
                cunqi = cunqiSelect.getHTMLValue();
                lilv = _this.findLilv(bizhong, cunqi, 1);
                $("#lixilv").val(lilv);
                bizhongSelect.on('change', function (data) {
                    if (bizhongSelect.getAttrValue() == "01") {
                        cunqiSelect.initData(opt2);
                        cunqiSelect.setSelectedItem('12');
                        bizhong = bizhongSelect.getHTMLValue();
                        cunqi = cunqiSelect.getHTMLValue();
                        lilv = _this.findLilv(bizhong, cunqi);
                    }
                    else {
                        cunqiSelect.initData(opt3);
                        cunqiSelect.setSelectedItem('1');
                        bizhong = bizhongSelect.getHTMLValue();
                        cunqi = cunqiSelect.getHTMLValue();
                        lilv = _this.findLilv(bizhong, cunqi);
                    }
                });
                cunqiSelect.on('change', function (data) {
                    if (bizhongSelect.getAttrValue() == "01") {
                        bizhong = bizhongSelect.getHTMLValue();
                        cunqi = cunqiSelect.getHTMLValue();
                        lilv = _this.findLilv(bizhong, cunqi, 1);
                        $("#lixilv").val(lilv);
                    }
                    else {
                        bizhong = bizhongSelect.getHTMLValue();
                        cunqi = cunqiSelect.getHTMLValue();
                        lilv = _this.findLilv(bizhong, cunqi, 2);
                        $("#lixilv").val(lilv);
                    }
                });
                $('#zidonghuoquBTN').click(function (e) {
                    bizhong = bizhongSelect.getHTMLValue();
                    cunqi = cunqiSelect.getHTMLValue();
                    if (bizhongSelect.getAttrValue() == "01") {
                        lilv = _this.findLilv(bizhong, cunqi, 1);
                    }
                    else {
                        lilv = _this.findLilv(bizhong, cunqi, 2);
                    }
                    $("#lixilv").val(lilv);
                });
                $("#compute").click(function (e) {
                    if (!validatorUtils.submitValidate()) {
                        bui.EventUtils.preventDefault(e);
                        return false;
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
                    if (zhiQuZhouQiSelect.getHTMLValue() == "--请选择--") {
                        var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '请选择支取周期' });
                        buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                            console.info(e);
                        });
                        buiAlert.setTheme(bui.AlertTheme.Red);
                        return;
                    }
                    var benjin = benjinValue.getFloatAmt();
                    var cunQi = cunqiSelect.getAttrValue();
                    var liLv = $("#lixilv").val();
                    var cunqi = parseFloat(cunQi);
                    var lilv = liLv / 12 / 100;
                    var jiange;
                    if (zhiQuZhouQiSelect == "月") {
                        jiange = 1;
                    }
                    else {
                        jiange = 3;
                    }
                    var zhiqujine = (benjin / cunqi) * jiange;
                    var lixi = (benjin + zhiqujine) / 2 * lilv;
                    var heji = benjin + lixi;
                    $("#zhiqu").val(zhiqujine.toFixed(4) + "");
                    $("#lixi").val(lixi.toFixed(4) + "");
                    $("#heji").val(heji.toFixed(4) + "");
                });
                $("#recount").click(function () {
                    benjinValue.setAmount(String(0));
                    $("#lixilv").val("");
                    $("#heji").val("");
                    $("#zhiqu").val("");
                    $("#lixi").val("");
                });
            };
            //查找利率
            ZhengCunLingQuPage.prototype.findLilv = function (bizhong, cunqi, type) {
                var typ = { "美元": "14", "欧元": "38", "英镑": "12", "港币": "13", "日元": "27", "澳元": "29", "加元": "28" };
                var ty = { "一年": "08", "三年": "09", "五年": "10" };
                var tt = { "一个月": "ONEMONTH", "三个月": "THREEMONTH", "六个月": "SIXMONTH", "一年": "ONEYEAR", "二年": "TWOYEAR" };
                if (type == 1) {
                    if (this.toolDeposits != null) {
                        cunqi = ty[cunqi];
                        for (var i in this.toolDeposits) {
                            if (this.toolDeposits[i].DPST_TYPE == cunqi && this.toolDeposits[i].DPST_MODE == 2) {
                                return this.toolDeposits[i].INRT;
                            }
                        }
                    }
                }
                else {
                    if (this.toolWaihui != null) {
                        cunqi = tt[cunqi];
                        bizhong = typ[bizhong];
                        for (var i in this.toolWaihui) {
                            if (this.toolWaihui[i].CURTYPE == bizhong || typ[this.toolWaihui[i].CURTYPE] == bizhong) {
                                return this.toolWaihui[i][cunqi];
                            }
                        }
                    }
                }
            };
            /**
             * @description 根据类型来获取利率
             * @param dataDt 存款方式
             * @param dataMode 存款类型
             * @returns {string}
             */
            ZhengCunLingQuPage.prototype.findInrtByTypes = function (dataMode, dpstType) {
                if (this.toolDeposits != null) {
                    for (var i in this.toolDeposits.body.DEPOSITLIST) {
                        if (this.toolDeposits.body.DEPOSITLIST[i].DPST_MODE == dataMode && this.toolDeposits.body.DEPOSITLIST[i].DPST_TYPE == dpstType) {
                            return this.toolDeposits.body.DEPOSITLIST[i].INRT;
                        }
                    }
                }
            };
            return ZhengCunLingQuPage;
        })(Page);
        bui.ZhengCunLingQuPage = ZhengCunLingQuPage;
        var ToolDeposit = (function () {
            function ToolDeposit() {
            }
            return ToolDeposit;
        })();
        bui.ToolDeposit = ToolDeposit;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ZhengCunLingQuPage.js.map