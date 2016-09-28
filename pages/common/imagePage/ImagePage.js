var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Administrator on 2016/5/24.
 */
///<reference path="../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../scripts/bns/btop.bui.d.ts"/>
///<reference path="../../../scripts/libs/jQuery.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var PageManager = btop.hui.PageManager;
        var ImagePage = (function (_super) {
            __extends(ImagePage, _super);
            function ImagePage() {
                _super.apply(this, arguments);
            }
            ImagePage.prototype.initView = function () {
                //返回销售主页
                $(this.nodeTypeMap.get('openProductCenterMainPage')).click(function () {
                    var currentPage = 1;
                    PageManager.to('btop.bui.ProductCenterMainPage', { currentPage: currentPage });
                });
            };
            return ImagePage;
        })(Page);
        bui.ImagePage = ImagePage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ImagePage.js.map