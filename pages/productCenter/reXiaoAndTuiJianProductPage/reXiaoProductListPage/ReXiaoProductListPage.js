var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by wangxinlu on 2016/7/12.
 */
///<reference path="../../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../../scripts/bns/btop.bui.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var PageManager = btop.hui.PageManager;
        var WidgetManager = btop.hui.WidgetManager;
        var ReXiaoProductListPage = (function (_super) {
            __extends(ReXiaoProductListPage, _super);
            function ReXiaoProductListPage() {
                _super.apply(this, arguments);
            }
            ReXiaoProductListPage.prototype.initView = function () {
                var productList = this.data["productList"];
                var title = this.data["title"];
                this.show(title, productList);
            };
            ReXiaoProductListPage.prototype.show = function (title, data) {
                var _this = this;
                $(this.nodeTypeMap.get('stackTitle')).html();
                $('#stack-content').html("");
                $(this.nodeTypeMap.get('stackTitle')).html(title);
                var receiveData = data;
                var vue = new Vue({
                    el: "#productListStack",
                    data: {
                        productList: receiveData
                    }
                });
                $("#productListStack").click(function (event) {
                    event.stopPropagation();
                    var successCallBack = function (productRecommendInfo) {
                        switch (productRecommendInfo.PRODUCT_LAYOUT) {
                            case "1":
                                PageManager.to("btop.bui.ReXiaoTextPage", { productRecommendInfo: productRecommendInfo, fromPage: 2 });
                                break;
                            case "2":
                                PageManager.to("btop.bui.ReXiaoTextAndImgPage", { productRecommendInfo: productRecommendInfo, fromPage: 2 });
                                break;
                            case "3":
                                PageManager.to("btop.bui.ReXiaoImgPage", { productRecommendInfo: productRecommendInfo, fromPage: 2 });
                                break;
                            case "4":
                                PageManager.to("btop.bui.ReXiaoTextAndVideoPage", { productRecommendInfo: productRecommendInfo, fromPage: 2 });
                                break;
                            case "5":
                                PageManager.to("btop.bui.ReXiaoVedioPage", { productRecommendInfo: productRecommendInfo, fromPage: 2 });
                                break;
                            default:
                                break;
                        }
                    };
                    if (event.target.innerText === "查看详情") {
                        _this.findProductByProductCode($(event.target).attr("name"), successCallBack);
                        return;
                    }
                    var pageCode = $(event.target["parentNode"]["parentNode"]).find(".query-info").attr("name");
                    if (pageCode) {
                        _this.findProductByProductCode(pageCode, successCallBack);
                        return;
                    }
                });
            };
            /**
             * @description 根据productCode请求网络来获取产品详情
             * @param productCode
             */
            ReXiaoProductListPage.prototype.findProductByProductCode = function (productCode, success) {
                var reqMsg = new bui.ReqMsg();
                reqMsg.body =
                    {
                        PRODUCTCODE: productCode
                    };
                bui.HttpUtils.bipHttp("product_recommendInfo", reqMsg).then(function (data) {
                    if (data.header.rc == "0000") {
                        success(data.body);
                    }
                    else {
                        bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                    }
                });
            };
            ReXiaoProductListPage.prototype.destroy = function () {
                if (WidgetManager.byId("btop.bui.ReXiaoTextPage"))
                    WidgetManager.byId("btop.bui.ReXiaoTextPage").destroy();
                if (WidgetManager.byId("btop.bui.ReXiaoTextAndImgPage"))
                    WidgetManager.byId("btop.bui.ReXiaoTextAndImgPage").destroy();
                if (WidgetManager.byId("btop.bui.ReXiaoImgPage"))
                    WidgetManager.byId("btop.bui.ReXiaoImgPage").destroy();
                if (WidgetManager.byId("btop.bui.ReXiaoTextAndVideoPage"))
                    WidgetManager.byId("btop.bui.ReXiaoTextAndVideoPage").destroy();
                if (WidgetManager.byId("btop.bui.ReXiaoVedioPage"))
                    WidgetManager.byId("btop.bui.ReXiaoVedioPage").destroy();
                _super.prototype.destroy.call(this);
            };
            return ReXiaoProductListPage;
        })(Page);
        bui.ReXiaoProductListPage = ReXiaoProductListPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ReXiaoProductListPage.js.map