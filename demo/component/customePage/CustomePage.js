var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/************************************************************************
 * 类名  :  CustomePage
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/13
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
        var PageManager = btop.hui.PageManager;
        var Page = btop.hui.Page;
        var WidgetManager = btop.hui.WidgetManager;
        var CustomePage = (function (_super) {
            __extends(CustomePage, _super);
            function CustomePage() {
                _super.apply(this, arguments);
            }
            CustomePage.prototype.initView = function () {
                $(this.nodeTypeMap.get('openComponentMainPage')).click(function () {
                    PageManager.to('btop.bui.ComponentMainPage');
                });
                var login = WidgetManager.byId('login');
                $('#loginBtn').click(function () {
                    login.show();
                });
                $('#logoutBtn').click(function () {
                    login.hide();
                });
            };
            return CustomePage;
        })(Page);
        bui.CustomePage = CustomePage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=CustomePage.js.map