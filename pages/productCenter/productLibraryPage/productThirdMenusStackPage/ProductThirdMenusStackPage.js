var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/************************************************************************
 * 类名  :  StackPage
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/19
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../../scripts/bns/btop.bui.d.ts"/>
///<reference path="../../../common/stackPage/StackPage.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var PageManager = btop.hui.PageManager;
        var ProductThirdMenusStackPage = (function (_super) {
            __extends(ProductThirdMenusStackPage, _super);
            function ProductThirdMenusStackPage() {
                _super.apply(this, arguments);
            }
            ProductThirdMenusStackPage.prototype.initView = function () {
                var productMenus = this.data["productMenus"];
                var title = this.data["title"];
                if (title == null) {
                    $(this.nodeTypeMap.get("stackTitleContainerNode")).hide();
                }
                this.show(title, productMenus);
            };
            ProductThirdMenusStackPage.prototype.show = function (title, data) {
                var _this = this;
                $(this.nodeTypeMap.get('stackTitle')).html();
                $('#stack-content').html("");
                $(this.nodeTypeMap.get('stackTitle')).html(title);
                var receiveData = data;
                var vue = new Vue({
                    el: "#stackcontent",
                    data: {
                        productMenus: receiveData
                    }
                });
                $("#stackcontent").click(function (event) {
                    event.stopPropagation();
                    var pageCode = $(event.target).attr("name");
                    if (event.target.innerText === "查看详情") {
                        PageManager.to("btop.bui.XiangQingPage", { id: pageCode, secondMenu: _this.data["secondMenu"], from: 'btop.bui.ProductThirdMenusPage' });
                        return;
                    }
                    pageCode = $(event.target["parentNode"]["parentNode"]).find(".query-info").attr("name");
                    if (pageCode) {
                        PageManager.to("btop.bui.XiangQingPage", { id: pageCode, secondMenu: _this.data["secondMenu"], from: 'btop.bui.ProductThirdMenusPage' });
                        return;
                    }
                });
            };
            return ProductThirdMenusStackPage;
        })(Page);
        bui.ProductThirdMenusStackPage = ProductThirdMenusStackPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ProductThirdMenusStackPage.js.map