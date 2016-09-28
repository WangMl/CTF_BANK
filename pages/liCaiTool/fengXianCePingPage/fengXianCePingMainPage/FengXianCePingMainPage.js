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
        var FengXianCePingMainPage = (function (_super) {
            __extends(FengXianCePingMainPage, _super);
            function FengXianCePingMainPage() {
                _super.apply(this, arguments);
            }
            FengXianCePingMainPage.prototype.initView = function () {
                $(this.nodeTypeMap.get('openLiCaiToolMainPage')).click(function () {
                    PageManager.to("btop.bui.LiCaiToolMainPage");
                });
                $(this.nodeTypeMap.get('openJiJinFengXianCePingMainPage')).click(function () {
                    PageManager.to("btop.bui.JiJinFengXianCePingMainPage");
                });
                $(this.nodeTypeMap.get('openLiCaiFengXianCePingMainPage')).click(function () {
                    PageManager.to("btop.bui.LiCaiFengXianCePingMainPage");
                });
            };
            return FengXianCePingMainPage;
        })(btop.hui.Page);
        bui.FengXianCePingMainPage = FengXianCePingMainPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=FengXianCePingMainPage.js.map