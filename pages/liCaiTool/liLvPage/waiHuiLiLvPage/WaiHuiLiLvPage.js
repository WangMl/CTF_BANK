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
        var WaiHuiLiLvPage = (function (_super) {
            __extends(WaiHuiLiLvPage, _super);
            function WaiHuiLiLvPage() {
                _super.apply(this, arguments);
            }
            WaiHuiLiLvPage.prototype.initView = function () {
                var _this = this;
                var reqMsg = new bui.ReqMsg();
                reqMsg.body =
                    {};
                bui.DbManager.sessionGet("ToolForexDeposit", true).then(function (toolDeposits) {
                    if (toolDeposits) {
                        _this.executeVue(toolDeposits);
                    }
                    else {
                        bui.HttpUtils.bipHttp('tool_forexDeposit', reqMsg).then(function (data) {
                            var type = { "14": "美元", "12": "英镑", "13": "港币", "38": "欧元", "27": "日元", "29": "澳元", "28": "加元" };
                            if (data.header.rc == "0000") {
                                var resMsg = data.body.FXDEPOSITLIST;
                                for (var i in resMsg) {
                                    resMsg[i].CURTYPE = type[resMsg[i].CURTYPE];
                                }
                                _this.executeVue(resMsg);
                                bui.DbManager.sessionPut("ToolForexDeposit", resMsg, true, true).then(function (toolDeposits2) {
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
            };
            WaiHuiLiLvPage.prototype.formatDate = function (date) {
                return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
            };
            WaiHuiLiLvPage.prototype.executeVue = function (data) {
                new Vue({
                    el: '#app1',
                    data: {
                        items: data
                    }
                });
            };
            return WaiHuiLiLvPage;
        })(btop.hui.Page);
        bui.WaiHuiLiLvPage = WaiHuiLiLvPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=WaiHuiLiLvPage.js.map