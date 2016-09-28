var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/************************************************************************
 * 类名  :  ButtonPage
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/29
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../scripts/libs/jQuery.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var PageManager = btop.hui.PageManager;
        var ButtonPage = (function (_super) {
            __extends(ButtonPage, _super);
            function ButtonPage() {
                _super.apply(this, arguments);
            }
            ButtonPage.prototype.initView = function () {
                $(this.nodeTypeMap.get('openComponentMainPage')).click(function () {
                    PageManager.to('btop.bui.ComponentMainPage');
                });
            };
            return ButtonPage;
        })(Page);
        bui.ButtonPage = ButtonPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ButtonPage.js.map