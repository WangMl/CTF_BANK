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
        var CunKuanLiLvPage = (function (_super) {
            __extends(CunKuanLiLvPage, _super);
            function CunKuanLiLvPage() {
                _super.apply(this, arguments);
                this.toolDeposits = new ToolDeposit();
            }
            CunKuanLiLvPage.prototype.initView = function () {
                var _this = this;
                var reqMsg = new bui.ReqMsg();
                reqMsg.body =
                    {};
                bui.DbManager.sessionGet("ToolDeposits", true).then(function (toolDeposits) {
                    if (toolDeposits) {
                        _this.toolDeposits = toolDeposits;
                    }
                    else {
                        bui.HttpUtils.bipHttp('tool_deposit', reqMsg).then(function (data) {
                            if (data.header.rc == "0000") {
                                //_this.executeVue(data.body.DEPOSITLIST);
                                bui.DbManager.sessionPut("ToolDeposits", data.body['DEPOSITLIST'], true, true).then(function (toolDeposits2) {
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
            CunKuanLiLvPage.prototype.findINRTByPosition = function (dpstMode, dpstType) {
                var flag = false;
                var data = new Array();
                for (var i in this.toolDeposits) {
                    if (this.toolDeposits[i].DPST_MODE == dpstMode && this.toolDeposits[i].DPST_TYPE == dpstType) {
                        flag = true;
                        data.push(this.toolDeposits[i].LAST_INRT);
                        data.push(this.toolDeposits[i].INRT);
                        return data;
                    }
                }
                if (data.length == 0) {
                    data.push("");
                    data.push("");
                }
                return data;
            };
            CunKuanLiLvPage.prototype.generateTemp = function () {
                $("#ckll").html("");
                var temp = "\n            <div hui-layout-type=\"RowLayout\" class=\"cunkuanll\">\n                <div class=\"xm\">\n                    <div class=\"col l3 xm shangti\" id=\"xiangmu\">\u9879\u76EE(%)</div>\n                    <div class=\"col l9 cunkuanll sanhang\" hui-layout-type=\"RowLayout\">\n                        <div>\n                            <div class=\"col l12 noline xm shangti\">\u8C03\u6574\u65F6\u95F4</div>\n                        </div>\n                        <div>\n                            <div class=\"col l6 noline xm shangti\">\u4E0A\u6B21\u5229\u7387\u8C03\u6574\u65E5\u671F</div>\n                            <div class=\"col l6 xm shangti\">\u6700\u8FD1\u4E00\u6B21\u5229\u7387\u8C03\u6574\u65E5\u671F</div>\n                        </div>\n                        <div>\n                            <div class=\"col l3 noline xm shangti\">\u5BF9\u516C\u5B58\u6B3E</div>\n                            <div class=\"col l3 xm shangti\">\u50A8\u84C4\u5B58\u6B3E</div>\n                            <div class=\"col l3 xm shangti\">\u5BF9\u516C\u5B58\u6B3E</div>\n                            <div class=\"col l3 xm shangti\">\u50A8\u84C4\u5B58\u6B3E</div>\n                        </div>\n                    </div>\n                </div>\n                <div style=\"height: 90px;\">\n                    <div style=\"height:570px\" hui-layout-type=\"RowLayout\" class=\"col l12\">\n                        <div id=\"cxjmck\">\n                            <div class=\"col l12 biaoti yijibiaoti\">\u00A0\u4E00\u3001\u57CE\u4E61\u5C45\u6C11\u548C\u5355\u4F4D\u5B58\u6B3E</div>\n                        </div>\n                        <div>\n                            <div class=\"col l3 biaoti erjibiaoti\">\uFF08\u4E00\uFF09\u6D3B\u671F\u5B58\u6B3E</div>\n                            <div hui-layout-type=\"RowLayou\" class=\"col l9 cunkuanll\">\n                                <div>\n                                    <div class=\"col l3 noline shujuyanse\">" + this.findINRTByPosition("1", "01")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "01")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("1", "01")[1] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "01")[1] + "</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div>\n                            <div class=\"col l12 biaoti erjibiaoti\">\uFF08\u4E8C\uFF09\u6574\u5B58\u6574\u53D6\u5B9A\u671F\u5B58\u6B3E</div>\n                        </div>\n                        <div>\n                            <div class=\"col l3 zuoti\">\u4E09\u4E2A\u6708</div>\n                            <div hui-layout-type=\"RowLayou\" class=\"col l9 cunkuanll\">\n                                <div>\n                                    <div class=\"col l3 noline shujuyanse\">" + this.findINRTByPosition("1", "02")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "02")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("1", "02")[1] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "02")[1] + "</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div>\n                            <div class=\"col l3 zuoti\">\u534A\u5E74</div>\n                            <div hui-layout-type=\"RowLayou\" class=\"col l9 cunkuanll\">\n                                <div>\n                                    <div class=\"col l3 noline shujuyanse\">" + this.findINRTByPosition("1", "03")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "03")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("1", "03")[1] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "03")[1] + "</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div>\n                            <div class=\"col l3 zuoti\">\u4E00\u5E74</div>\n                            <div hui-layout-type=\"RowLayou\" class=\"col l9 cunkuanll\">\n                                <div>\n                                    <div class=\"col l3 noline shujuyanse\">" + this.findINRTByPosition("1", "04")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "04")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("1", "04")[1] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "04")[1] + "</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div>\n                            <div class=\"col l3 zuoti\">\u4E8C\u5E74</div>\n                            <div hui-layout-type=\"RowLayou\" class=\"col l9 cunkuanll\">\n                                <div>\n                                    <div class=\"col l3 noline shujuyanse\">" + this.findINRTByPosition("1", "05")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "05")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("1", "05")[1] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "05")[1] + "</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div>\n                            <div class=\"col l3 zuoti\">\u4E09\u5E74</div>\n                            <div hui-layout-type=\"RowLayou\" class=\"col l9 cunkuanll\">\n                                <div>\n                                    <div class=\"col l3 noline shujuyanse\">" + this.findINRTByPosition("1", "06")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "06")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("1", "06")[1] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "06")[1] + "</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div>\n                            <div class=\"col l3 zuoti\">\u4E94\u5E74</div>\n                            <div hui-layout-type=\"RowLayou\" class=\"col l9 cunkuanll\">\n                                <div>\n                                    <div class=\"col l3 noline shujuyanse\">" + this.findINRTByPosition("1", "07")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "07")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("1", "07")[1] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "07")[1] + "</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div>\n                            <div class=\"col l12 biaoti erjibiaoti\">\uFF08\u4E09\uFF09\u96F6\u5B58\u6574\u53D6\u3001\u6574\u5B58\u96F6\u53D6\u3001\u5B58\u672C\u53D6\u606F</div>\n                        </div>\n                        <div>\n                            <div class=\"col l3 zuoti\">\u4E00\u5E74</div>\n                            <div hui-layout-type=\"RowLayou\" class=\"col l9 cunkuanll nobottom\">\n                                <div>\n                                    <div class=\"col l3 noline shujuyanse\">" + this.findINRTByPosition("1", "08")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "08")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("1", "08")[1] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "08")[1] + "</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div>\n                            <div class=\"col l3 zuoti\">\u4E09\u5E74</div>\n                            <div hui-layout-type=\"RowLayou\" class=\"col l9 cunkuanll\">\n                                <div>\n                                    <div class=\"col l3 noline shujuyanse\">" + this.findINRTByPosition("1", "09")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "09")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("1", "09")[1] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "09")[1] + "</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div>\n                            <div class=\"col l3 zuoti\">\u4E94\u5E74</div>\n                            <div hui-layout-type=\"RowLayou\" class=\"col l9 cunkuanll\">\n                                <div>\n                                    <div class=\"col l3 noline shujuyanse\">" + this.findINRTByPosition("1", "10")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "10")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("1", "10")[1] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "10")[1] + "</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div>\n                            <div class=\"col l12 biaoti erjibiaoti\">\uFF08\u56DB\uFF09\u5B9A\u6D3B\u4E24\u4FBF</div>\n                        </div>\n                        <div>\n                            <div class=\"col l3 zuoti\">\u4E09\u4E2A\u6708</div>\n                            <div hui-layout-type=\"RowLayou\" class=\"col l9 cunkuanll nobottom\">\n                                <div>\n                                    <div class=\"col l3 noline shujuyanse\">" + this.findINRTByPosition("1", "11")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "11")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("1", "11")[1] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "11")[1] + "</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div>\n                            <div class=\"col l3 zuoti\">\u516D\u4E2A\u6708</div>\n                            <div hui-layout-type=\"RowLayou\" class=\"col l9 cunkuanll\">\n                                <div>\n                                    <div class=\"col l3 noline shujuyanse\">" + this.findINRTByPosition("1", "12")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "12")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("1", "12")[1] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "12")[1] + "</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div>\n                            <div class=\"col l3 zuoti\">\u4E00\u5E74</div>\n                            <div hui-layout-type=\"RowLayou\" class=\"col l9 cunkuanll\">\n                                <div>\n                                    <div class=\"col l3 noline shujuyanse\">" + this.findINRTByPosition("1", "13")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "13")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("1", "13")[1] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "13")[1] + "</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div id=\"xdck\">\n                            <div class=\"col l12 biaoti yijibiaoti\">\u4E8C\u3001\u534F\u5B9A\u5B58\u6B3E</div>\n\n\n                             <div class=\"col l3 zuoti\"></div>\n                            <div hui-layout-type=\"RowLayou\" class=\"col l9 cunkuanll\">\n                                <div>\n                                    <div class=\"col l3 noline shujuyanse\">" + this.findINRTByPosition("1", "16")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "16")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("1", "16")[1] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "16")[1] + "</div>\n                                </div>\n                            </div>\n                        </div>\n\n\n\n                        </div>\n                        <div>\n                            <div class=\"col l12 biaoti yijibiaoti\">\u4E09\u3001\u901A\u77E5\u5B58\u6B3E </div>\n                        </div>\n                        <div>\n                            <div class=\"col l3  zuoti\">\u4E00\u5929</div>\n                            <div hui-layout-type=\"RowLayou\" class=\"col l9 cunkuanll\">\n                                <div>\n                                    <div class=\"col l3 noline shujuyanse\">" + this.findINRTByPosition("1", "14")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "14")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("1", "14")[1] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "14")[1] + "</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div style=\"margin-bottom: 35px!important;\">\n                            <div class=\"col l3  zuoti\">\u4E03\u5929</div>\n                            <div hui-layout-type=\"RowLayou\" class=\"col l9 cunkuanll\">\n                                <div>\n                                    <div class=\"col l3 noline shujuyanse\">" + this.findINRTByPosition("1", "15")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "15")[0] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("1", "15")[1] + "</div>\n                                    <div class=\"col l3 shujuyanse\">" + this.findINRTByPosition("2", "15")[1] + "</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                 </div>\n            </div>";
                $(temp).appendTo($("#ckll"));
            };
            return CunKuanLiLvPage;
        })(btop.hui.Page);
        bui.CunKuanLiLvPage = CunKuanLiLvPage;
        var ToolDeposit = (function () {
            function ToolDeposit() {
            }
            return ToolDeposit;
        })();
        bui.ToolDeposit = ToolDeposit;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=CunKuanLiLvPage.js.map