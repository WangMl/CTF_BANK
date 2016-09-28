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
        var DaiKuanLiLvPage = (function (_super) {
            __extends(DaiKuanLiLvPage, _super);
            function DaiKuanLiLvPage() {
                _super.apply(this, arguments);
                this.toolDeposits = new ToolDeposit();
                this.date = {};
            }
            DaiKuanLiLvPage.prototype.initView = function () {
                var _this = this;
                var reqMsg = new bui.ReqMsg();
                reqMsg.body =
                    {};
                bui.DbManager.sessionGet("ToolLoan", true).then(function (toolDeposits) {
                    if (toolDeposits) {
                        date = { d1: _this.formatDate(new Date(toolDeposits[0].ADJUSTDT)), d2: _this.formatDate(new Date(toolDeposits[1].ADJUSTDT)) };
                        _this.toolDeposits = toolDeposits;
                    }
                    else {
                        bui.HttpUtils.bipHttp('tool_loan', reqMsg).then(function (data) {
                            if (data.header.rc == "0000") {
                                date = { d1: _this.formatDate(new Date(data.body.LOANLIST[0].ADJUSTDT)), d2: _this.formatDate(new Date(data.body.LOANLIST[1].ADJUSTDT)) };
                                bui.DbManager.sessionPut("ToolLoan", data.body['LOANLIST'], true, true).then(function (toolDeposits2) {
                                    _this.toolDeposits = toolDeposits2;
                                    _this.generateTemp();
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
                this.generateTemp();
            };
            DaiKuanLiLvPage.prototype.formatDate = function (date) {
                return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
            };
            DaiKuanLiLvPage.prototype.findINRTByPosition = function (date1) {
                var flag = false;
                var data = new Array();
                for (var i in this.toolDeposits) {
                    if (this.formatDate(new Date(this.toolDeposits[i].ADJUSTDT)) == date1) {
                        flag = true;
                        data.push(this.toolDeposits[i].LESSONE);
                        data.push(this.toolDeposits[i].LESSFIVE);
                        data.push(this.toolDeposits[i].MOREFIVE);
                        return data;
                    }
                }
                if (data.length == 0) {
                    data.push("");
                    data.push("");
                }
                return data;
            };
            DaiKuanLiLvPage.prototype.generateTemp = function () {
                $("#dkll").html("");
                var temp = "<div hui-layout-type=\"RowLayout\" class=\"whckll\">\n        <div class=\"fline\">\n            <div class=\"col l4 shangti\" id=\"xiangmu\">\u9879\u76EE(%)</div>\n            <div class=\"col l8\" hui-layout-type=\"RowLayout\" class=\"whckll\" id=\"biaoti2\">\n                <div>\n                    <div class=\"col l12 noline shangti\">\u8C03\u6574\u65F6\u95F4</div>\n                </div>\n                <div>\n                    <div class=\"col l6 noline shangti\">" + date.d1 + "</div>\n                    <div class=\"col l6 shangti\">" + date.d2 + "</div>\n                </div>\n            </div>\n        </div>\n        <div id=\"dqdk\" class=\"bgcolor\">\n            <div class=\"col l12 biaoti yijibiaoti\">\u4E00\u3001\u77ED\u671F\u8D37\u6B3E</div>\n\n        </div>\n        <div  class=\"bgcolor\">\n            <div class=\"col l4 zuoti\">\u4E00\u5E74\u4EE5\u5185\uFF08\u542B\u4E00\u5E74\uFF09</div>\n            <div class=\"col l4 shujuyanse\">" + this.findINRTByPosition(date.d1)[0] + "</div>\n            <div class=\"col l4 shujuyanse\">" + this.findINRTByPosition(date.d2)[0] + "</div>\n        </div>\n        <div  class=\"bgcolor\">\n            <div class=\"col l12 biaoti yijibiaoti\">\u4E8C\u3001\u4E2D\u957F\u671F\u8D37\u6B3E</div>\n\n        </div>\n        <div  class=\"bgcolor\">\n            <div class=\"col l4 zuoti\">\u4E00\u81F3\u4E94\u5E74\uFF08\u542B\u4E94\u5E74\uFF09</div>\n            <div class=\"col l4 shujuyanse\">" + this.findINRTByPosition(date.d1)[1] + "</div>\n            <div class=\"col l4 shujuyanse\">" + this.findINRTByPosition(date.d2)[1] + "</div>\n        </div>\n        <div  class=\"bgcolor\">\n            <div class=\"col l4 zuoti\">\u4E94\u5E74\u4EE5\u4E0A</div>\n            <div class=\"col l4 shujuyanse\">" + this.findINRTByPosition(date.d1)[2] + "</div>\n            <div class=\"col l4 shujuyanse\">" + this.findINRTByPosition(date.d2)[2] + "</div>\n        </div>\n    </div>";
                $(temp).appendTo($("#dkll"));
            };
            return DaiKuanLiLvPage;
        })(btop.hui.Page);
        bui.DaiKuanLiLvPage = DaiKuanLiLvPage;
        var ToolDeposit = (function () {
            function ToolDeposit() {
            }
            return ToolDeposit;
        })();
        bui.ToolDeposit = ToolDeposit;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=DaiKuanLiLvPage.js.map