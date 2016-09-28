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
        var Page = btop.hui.Page;
        var PageManager = btop.hui.PageManager;
        var CommonCalculatorPage = (function (_super) {
            __extends(CommonCalculatorPage, _super);
            function CommonCalculatorPage() {
                _super.apply(this, arguments);
            }
            CommonCalculatorPage.prototype.initView = function () {
                $(this.nodeTypeMap.get('openCommonCalculatorPage')).click(function () {
                    PageManager.to('btop.bui.CommonCalculatorPage');
                });
                $(this.nodeTypeMap.get('openCalculatorMainPage')).click(function () {
                    PageManager.to('btop.bui.CalculatorMainPage');
                });
            };
            return CommonCalculatorPage;
        })(Page);
        bui.CommonCalculatorPage = CommonCalculatorPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=CommonCalculatorPage.js.map