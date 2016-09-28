/**
 * Created by Administrator on 2016/4/19.
 */
/**
 * @user wxl
 * @date 2016/3/3
 **/
///<reference path="../../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../../scripts/bns/btop.bui.d.ts"/>
///<reference path="../../../common/stackPage/StackPage.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var JieShouHuiPaiJiaPage = (function (_super) {
            __extends(JieShouHuiPaiJiaPage, _super);
            function JieShouHuiPaiJiaPage() {
                _super.apply(this, arguments);
            }
            JieShouHuiPaiJiaPage.prototype.initView = function () {
                var _this = this;
                var reqMsg = new bui.ReqMsg();
                reqMsg.body =
                    {};
                bui.DbManager.sessionGet("ToolForexPrice", true).then(function (toolDeposits) {
                    if (toolDeposits) {
                        _this.executeVue(toolDeposits);
                    }
                    else {
                        bui.HttpUtils.bipHttp('tool_forexPrice', reqMsg).then(function (data) {
                            var shijian = null;
                            if (data.header.rc == "0000") {
                                var type = { "USD": "美元", "EUR": "欧元", "GBP": "英镑", "HKD": "港币", "JPY": "日元", "AUD": "澳元", "CAD": "加元" };
                                var resMsg = data.body.CurList;
                                for (var i in resMsg) {
                                    resMsg[i].CURTYPE = type[resMsg[i].CURTYPE];
                                    shijian = resMsg[i].RELEASETIME;
                                    resMsg[i].RELEASETIME = resMsg[i].DATA_DT.substring(0, 10) + " " + shijian.substring(0, 2) + ":" + shijian.substring(2, 4) + ":" + shijian.substring(4, 6);
                                }
                                bui.DbManager.sessionPut("ToolForexPrice", resMsg, true, true).then(function (toolDeposits2) {
                                    _this.executeVue(toolDeposits2);
                                });
                            }
                            else {
                                bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                            }
                        }, function () {
                            bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                        });
                    }
                });
                //由guiJinShuTab父容器来委托所有元素事件，建议使用禁止事件冒泡
                $('#appjieshou').click(function (event) {
                    event.stopPropagation();
                    if (event.target.innerText === "查看历史") {
                        var CURTYPE = $(event.target).attr("name").split("+")[0];
                        var typ = { "美元": "USD", "欧元": "EUR", "英镑": "GBP", "港币": "HKD", "日元": "JPY", "澳元": "AUD", "加元": "CAD" };
                        CURTYPE = typ[CURTYPE];
                        var DATA_DT = $(event.target).attr("name").split("+")[1];
                        DATA_DT = DATA_DT.substr(0, 10);
                        if (CURTYPE) {
                            var reqMsg_1 = new bui.ReqMsg();
                            reqMsg_1.body =
                                {
                                    CURTYPE: CURTYPE,
                                    DATA_DT: DATA_DT
                                };
                            bui.HttpUtils.bipHttp("tool_forexPriceHistory", reqMsg_1).then(function (data) {
                                var resmsg = data.body.CurList;
                                if (data.header.rc == "0000") {
                                    var sj;
                                    for (var i in resmsg) {
                                        sj = resmsg[i].DATA_DT;
                                        resmsg[i].DATA_DT = sj.substring(0, 4) + "年" + sj.substring(5, 7) + "月" + sj.substring(8, 10) + "日";
                                    }
                                    //pageAlert 产品详情及额度查询
                                    var option = {
                                        opacity: 1
                                    };
                                    var pageAlert = bui.BGlobal.PageAlert.show("btop.bui.JieShouHuiPaiJiaLiShiPage", resmsg, option);
                                    pageAlert.confirmBtn.unbind("click").on("click", function (data) {
                                        console.info(data);
                                    });
                                    pageAlert.cancelBtn.unbind("click").on("click", function (data) {
                                        console.info(data);
                                    });
                                }
                                else {
                                    bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                }
                            }, function () {
                                bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                            });
                        }
                        else {
                            return false;
                        }
                    }
                });
            };
            JieShouHuiPaiJiaPage.prototype.formatDate = function (date) {
                return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
            };
            JieShouHuiPaiJiaPage.prototype.executeVue = function (data) {
                new Vue({
                    el: '#appjieshou',
                    data: {
                        items: data
                    }
                });
            };
            return JieShouHuiPaiJiaPage;
        })(btop.hui.Page);
        bui.JieShouHuiPaiJiaPage = JieShouHuiPaiJiaPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=JieShouHuiPaiJiaPage.js.map