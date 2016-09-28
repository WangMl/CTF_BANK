/**
 * Created by Administrator on 2016/5/3.
 */
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
        var PageManager = btop.hui.PageManager;
        var XiangQingPage = (function (_super) {
            __extends(XiangQingPage, _super);
            function XiangQingPage() {
                _super.apply(this, arguments);
                this.isleftFull = false;
            }
            XiangQingPage.prototype.initView = function () {
                var _this = this;
                this.menuId = this.data["id"];
                this.fromPage = this.data["from"];
                //$(".content-left").html("");
                //$(".content-right").html("");
                $(this.nodeTypeMap.get("productMenusNode")).click(function () {
                    PageManager.to("" + _this.fromPage, { menuId: _this.data["secondMenu"]["id"], menuName: _this.data["secondMenu"]["name"], transferData: _this.data["transferData"] });
                });
                var tit = { "PRODUCTCODE": "产品代码", "PRODUCTNAME": "产品名称", "PRODUCT_TYPE": "所属产品类别", "PRODUCT_FUNCTION": "产品功能", "CUSTOMERS": "使用客户", "SALES_CHANNELS": "销售渠道", "PRICING_STANDARD": "定价标准", "RISK_POINT": "风险点", "SERVICE_ACCESS": "业务准入办法", "ACCESS_STATUS": "准入状况", "PRODUCT_DATE": "产品年份" };
                var reqMsg = new bui.ReqMsg();
                reqMsg.body = {
                    PRODUCTCODE: this.menuId
                };
                bui.HttpUtils.bipHttp("product_info", reqMsg).then(function (data) {
                    $('#biaoti').html(data.body.PRODUCTNAME);
                    if (data.header.rc == "0000") {
                        var data1 = data.body;
                        for (i in tit) {
                            _this.generateTempright(tit[i], data1[i]);
                        }
                    }
                    else {
                        bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                    }
                }, function () {
                    bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                });
            };
            XiangQingPage.prototype.generateTempleft = function (i, data) {
                var temp = "<div style=\"font-size: 20px;\">\n                                    <div class=\"col l1\" style=\"text-align: right;margin-top: 10px;\"><div class=\"TextAndTextBox\" style=\"display: inline-block;\"></div></div>\n                                    <div class=\"col l11\" style=\"margin-top: 10px;\"><span style=\"font-weight:bold;\">" + i + "</span></br>\n                                    <span>" + data + "</span></br></div>\n                                </div>";
                $(temp).appendTo($('.content-left'));
                if ($('.content-left').height() > (this.hideheight / 2)) {
                    this.isleftFull = true;
                }
            };
            XiangQingPage.prototype.generateTempright = function (i, data) {
                var temp = "<div style=\"font-size: 20px;\">\n                                    <div class=\"col l1\" style=\"text-align: right;margin-top: 10px;\"><div class=\"TextAndTextBox\" style=\"display: inline-block;\"></div></div>\n                                    <div class=\"col l11\" style=\"margin-top: 10px;\"><span style=\"font-weight:bold;\">" + i + "</span></br>\n                                    <span>" + data + "</span></br></div>\n                                </div>";
                $(temp).appendTo($(".content-right"));
            };
            return XiangQingPage;
        })(btop.hui.Page);
        bui.XiangQingPage = XiangQingPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=XiangQingPage.js.map