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
///<reference path="../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../scripts/bns/btop.bui.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var PageManager = btop.hui.PageManager;
        var StackPage = (function (_super) {
            __extends(StackPage, _super);
            function StackPage() {
                _super.apply(this, arguments);
            }
            StackPage.prototype.initView = function () {
                var productMenus = this.data["productMenus"];
                var title = this.data["title"];
                this.show(title, productMenus);
            };
            StackPage.prototype.show = function (title, data) {
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
                        PageManager.to("btop.bui.XiangQingPage", { id: pageCode, secondMenu: _this.data["secondMenu"] });
                        return;
                    }
                    pageCode = $(event.target["parentNode"]["parentNode"]).find(".query-info").attr("name");
                    if (pageCode) {
                        PageManager.to("btop.bui.XiangQingPage", { id: pageCode, secondMenu: _this.data["secondMenu"] });
                        return;
                    }
                });
            };
            return StackPage;
        })(Page);
        bui.StackPage = StackPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=StackPage.js.map