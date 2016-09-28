var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/************************************************************************
 * 类名  :  MountPage
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/18
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
        var MountPage = (function (_super) {
            __extends(MountPage, _super);
            function MountPage() {
                _super.apply(this, arguments);
            }
            MountPage.prototype.initView = function () {
                var _this = this;
                PageManager.embedTo("btop.bui.HeaderPage", "header");
                PageManager.embedTo("btop.bui.FooterPage", "footer");
                PageManager.currPage = null;
                $('#_view_root_').attr('id', '_parent_view_root_');
                //初始化屏幕最小高度，防止软键盘挤压
                $('#_parent_view_root_').css('min-height', document.body.clientHeight);
                if (PageManager.currPage == null) {
                    window.location.hash = "#!btop.bui.MainPage";
                }
            };
            return MountPage;
        })(btop.hui.Page);
        bui.MountPage = MountPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=MountPage.js.map