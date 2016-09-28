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
        var HuoBiShiJianJiaZhiCalculator = (function (_super) {
            __extends(HuoBiShiJianJiaZhiCalculator, _super);
            function HuoBiShiJianJiaZhiCalculator() {
                _super.apply(this, arguments);
            }
            HuoBiShiJianJiaZhiCalculator.prototype.initView = function () {
                $(this.nodeTypeMap.get('openHuoBiShiJianJiaZhiCalculator')).click(function () {
                    PageManager.to('btop.bui.HuoBiShiJianJiaZhiCalculator');
                });
                $(this.nodeTypeMap.get('openCalculatorMainPage')).click(function () {
                    PageManager.to('btop.bui.CalculatorMainPage');
                });
                var _this = this;
                var validatorUtils = new bui.ValidatorUtils();
                validatorUtils.validate($("#huoBiShiJianJiaZhiCalculator")[0]);
                var inst = _this.findInrtByTypes("2", "01");
                $("#lixilv").val(inst);
                $("#zidonghuoquBTN").click(function () {
                    var inst = _this.findInrtByTypes("2", "01");
                    $("#lixilv").val(inst);
                });
                //取出存款工具表
                //1 首先取出缓存数据
                bui.DbManager.sessionGet("ToolDeposits", true).then(function (data) {
                    if (data != null) {
                        _this.toolDeposits = data;
                        inst = _this.findInrtByTypes("2", "01");
                        $("#lixilv").val(inst);
                    }
                    else {
                        bui.HttpUtils.bipHttp("tool_deposit", true).then(function (data) {
                            bui.DbManager.sessionPut("ToolDeposits", data, true, true).then(function (data) {
                                _this.toolDeposits = data;
                                inst = _this.findInrtByTypes("2", "01");
                                $("#lixilv").val(inst);
                            });
                        });
                    }
                });
                var opt1 = {
                    data: [
                        { "01": "求复利终值" },
                    ]
                };
                var jiaoyifangshiSelect = WidgetManager.byId("jiaoyifangshiSelect");
                jiaoyifangshiSelect.initData(opt1);
                jiaoyifangshiSelect.setSelectedItem('01');
                var opt2 = {
                    data: [
                        { "1": "先收付" },
                        { "2": "后收付" }
                    ]
                };
                var shoufufangshiSelect = WidgetManager.byId("shoufufangshiSelect");
                shoufufangshiSelect.initData(opt2);
                shoufufangshiSelect.setSelectedItem('1');
                var xianzhi = WidgetManager.byId("xianzhi");
                xianzhi.setAmount(String(10000));
                $('#' + xianzhi.id).find("input").addClass('input-control');
                var qishu = WidgetManager.byId("qishu");
                qishu.setAmount(String(10));
                $('#' + qishu.id).find("input").addClass('input-control');
                jiaoyifangshiSelect.on('change', function (data) {
                    var inst = _this.findInrtByTypes("2", "01");
                    $("#lixilv").val(inst);
                    if (sort == 1) {
                        $(".shou-fu-fang-shi").css("display", "none");
                        $("#info1").html("现值");
                        $("#info2").html("期数");
                        $("#info3").html("利息率");
                        $(".answer2").css("display", "none");
                        $(".output1").html("终值");
                    }
                    else if (sort == 2) {
                        $(".shou-fu-fang-shi").css("display", "none");
                        $("#info1").html("终值");
                        $("#info2").html("期数");
                        $("#info3").html("利息率");
                        $(".answer2").css("display", "none");
                        $(".output1").html("现值");
                    }
                    else if (sort == 3) {
                        $(".shou-fu-fang-shi").css("display", "none");
                        $("#info1").html("现值");
                        $("#info2").html("终值");
                        $("#info3").html("利息率");
                        $(".answer2").css("display", "none");
                        $(".output1").html("期数");
                    }
                    else if (sort == 4) {
                        $(".shou-fu-fang-shi").css("display", "none");
                        $("#info1").html("现值");
                        $("#info2").html("终值");
                        $("#info3").html("期数");
                        $(".answer2").css("display", "none");
                        $(".output1").html("利息率");
                    }
                    else if (sort == 5) {
                        $(".shou-fu-fang-shi").css("display", "block");
                        $("#info1").html("年金");
                        $("#info2").html("期数");
                        $("#info3").html("利息率");
                        $(".answer2").css("display", "block");
                        $(".output1").html("现值");
                        $(".output2").html("终值");
                    }
                    else if (sort == 6) {
                        $(".shou-fu-fang-shi").css("display", "block");
                        $("#info1").html("现值");
                        $("#info2").html("期数");
                        $("#info3").html("利息率");
                        $(".answer2").css("display", "none");
                        $(".output1").html("年金");
                    }
                    else if (sort == 7) {
                        $(".shou-fu-fang-shi").css("display", "block");
                        $("#info1").html("终值");
                        $("#info2").html("期数");
                        $("#info3").html("利息率");
                        $(".answer2").css("display", "none");
                        $(".output1").html("年金");
                    }
                    else if (sort == 8) {
                        $(".shou-fu-fang-shi").css("display", "none");
                        $("#info1").html("现值");
                        $("#info2").html("年金");
                        $("#info3").html("期数");
                        $(".answer2").css("display", "none");
                        $(".output1").html("利息率");
                    }
                    else {
                        $(".shou-fu-fang-shi").css("display", "block");
                        $("#info1").html("现值");
                        $("#info2").html("年金");
                        $("#info3").html("利息率");
                        $(".answer2").css("display", "none");
                        $(".output1").html("期数");
                    }
                });
                $("#compute").click(function (e) {
                    if (!validatorUtils.submitValidate()) {
                        bui.EventUtils.preventDefault(e);
                        return false;
                    }
                    if (jiaoyifangshiSelect.getHTMLValue() == "--请选择--") {
                        var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '请选择交易方式' });
                        buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                            console.info(e);
                        });
                        buiAlert.setTheme(bui.AlertTheme.Red);
                        return;
                    }
                    if (shoufufangshiSelect.getHTMLValue() == "--请选择--") {
                        var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '请选择收付方式' });
                        buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                            console.info(e);
                        });
                        buiAlert.setTheme(bui.AlertTheme.Red);
                        return;
                    }
                    var input3 = $("#lixilv").val(); //利率
                    var input1 = xianzhi.getFloatAmt();
                    var input2 = qishu.getFloatAmt();
                    var jiaoyifangshi = jiaoyifangshiSelect.getAttrValue();
                    var shoufufangshi = shoufufangshiSelect.getAttrValue();
                    var sort = parseInt(jiaoyifangshi);
                    var type = parseInt(shoufufangshi);
                    if (sort == 1) {
                        var xianZhi = input1;
                        var qiShu = input2;
                        var lilv = input3 / 100;
                        var zhongZhi = xianZhi * Math.pow(1 + lilv, qiShu);
                        $(".jie-guo1").val(zhongZhi.toFixed(4) + "");
                    }
                    else if (sort == 2) {
                        var xianZhi = input1;
                        var qiShu = input2;
                        var lilv = input3 / 100;
                        var zhongZhi = xianZhi * Math.pow(1 + lilv, qiShu);
                        $(".jie-guo1").val(xianZhi.toFixed(4) + "");
                    }
                    else if (sort == 3) {
                        var xianZhi = input1;
                        var lilv = input3 / 100;
                        var zhongZhi = input2;
                        var qiShu = Math.log(zhongZhi / xianZhi) / Math.log(1 + lilv);
                        $(".jie-guo1").val((Math.ceil(qiShu)).toFixed(4) + "");
                    }
                    else if (sort == 4) {
                        var xianZhi = input1;
                        var zhongZhi = input2;
                        var qiShu = input3;
                        var lilv = Math.pow(zhongZhi / xianZhi, 1 / qiShu) - 1;
                        $(".jie-guo1").val((lilv * 100).toFixed(4) + "");
                    }
                    else if (sort == 5) {
                        var nianJin = input1;
                        var qiShu = input2;
                        var lilv = input3 / 100;
                        if (type == 1) {
                            var zhongZhi = nianJin * (Math.pow((1 + lilv), qiShu) - 1) / lilv;
                            var xianZhi = nianJin * (1 / lilv) * (1 - (1 / Math.pow(1 + lilv, qiShu)));
                        }
                        else {
                            var zhongZhi = nianJin * (Math.pow((1 + lilv), qiShu) - 1) / lilv * (1 + lilv);
                            var xianZhi = nianJin * (1 / lilv) * (1 - (1 / Math.pow(1 + lilv, qiShu))) * (1 + lilv);
                        }
                        $(".jie-guo1").val(xianZhi.toFixed(4) + "");
                        $(".jie-guo2").val(zhongZhi.toFixed(4) + "");
                    }
                    else if (sort == 6) {
                        var xianZhi = input1;
                        var qiShu = input2;
                        var lilv = input3 / 100;
                        if (type == 2) {
                            var nianJin = xianZhi / ((1 / lilv) * (1 - (1 / Math.pow(1 + lilv, qiShu))));
                        }
                        else {
                            var nianJin = xianZhi / ((1 / lilv) * (1 - (1 / Math.pow(1 + lilv, qiShu))) * (1 + lilv));
                        }
                        $(".jie-guo1").val(nianJin.toFixed(4) + "");
                    }
                    else if (sort == 7) {
                        var zhongZhi = input1;
                        var qiShu = input2;
                        var lilv = input3 / 100;
                        if (type == 2) {
                            var aa = (Math.pow((1 + lilv), qiShu) - 1) / lilv;
                            var nianJin = zhongZhi / aa;
                        }
                        else {
                            var bb = zhongZhi * (Math.pow((1 + lilv), qiShu) - 1) / lilv * (1 + lilv);
                            var nianJin = zhongZhi / bb;
                        }
                        $(".jie-guo1").val(nianJin.toFixed(4) + "");
                    }
                    else if (sort == 8) {
                        var xianZhi = input1;
                        var nianJin = input2;
                        var qiShu = input3;
                        var lilv = (xianZhi / nianJin / qiShu * 2 - 1) * 10;
                        $(".jie-guo1").val(lilv.toFixed(4) + "");
                    }
                    else {
                        var xianZhi = input1;
                        var nianJin = input2;
                        var lilv = input3 / 100;
                        if (type == 2) {
                            //var a = Math.log(1/(1-xianZhi*lilv/nianJin));
                            //var b = Math.log(1+lilv);
                            var qiShu = Math.log(1 / (1 - xianZhi * lilv / nianJin)) / Math.log(1 + lilv);
                        }
                        else {
                            var qiShu = Math.log(1 / (1 - xianZhi * lilv / nianJin / (1 + lilv))) / Math.log(1 + lilv);
                        }
                        $(".jie-guo1").val((Math.ceil(qiShu)).toFixed(4) + "");
                    }
                });
                $("#recount").click(function () {
                    //$("input").val("");
                    $(".jie-guo1").val("");
                    $(".jie-guo2").val("");
                });
            };
            HuoBiShiJianJiaZhiCalculator.prototype.findInrtByTypes = function (dataMode, dpstType) {
                if (this.toolDeposits != null) {
                    for (var i in this.toolDeposits) {
                        if (this.toolDeposits[i].DPST_MODE == dataMode && this.toolDeposits[i].DPST_TYPE == dpstType) {
                            return this.toolDeposits[i].INRT;
                        }
                    }
                }
            };
            return HuoBiShiJianJiaZhiCalculator;
        })(Page);
        bui.HuoBiShiJianJiaZhiCalculator = HuoBiShiJianJiaZhiCalculator;
        var ToolDeposit = (function () {
            function ToolDeposit() {
            }
            return ToolDeposit;
        })();
        bui.ToolDeposit = ToolDeposit;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=HuoBiShiJianJiaZhiCalculator.js.map