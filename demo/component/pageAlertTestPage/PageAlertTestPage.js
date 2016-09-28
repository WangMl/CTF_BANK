var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by wangxinlu on 2016/7/1.
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
        var PageAlertTestPage = (function (_super) {
            __extends(PageAlertTestPage, _super);
            function PageAlertTestPage() {
                _super.apply(this, arguments);
            }
            PageAlertTestPage.prototype.initView = function () {
                var _this = this;
                //回到主页
                $(this.nodeTypeMap.get('openMainPage')).click(function () {
                    PageManager.to('btop.bui.MainPage');
                });
                //确定
                $(this.nodeTypeMap.get('confirmBtnNode')).click(function (e) {
                    var pageAlert = bui.BGlobal.PageAlert.getInstance();
                    var event = new bui.BEvent(e, { data: "confirm" });
                    pageAlert.confirmBtn.trigger('click', event);
                    pageAlert.hide();
                });
                //取消
                $(this.nodeTypeMap.get('cancelBtnNode')).click(function (e) {
                    var pageAlert = bui.BGlobal.PageAlert.getInstance();
                    var event = new bui.BEvent(e, { data: "cancel" });
                    pageAlert.cancelBtn.trigger('click', event);
                    pageAlert.hide();
                });
            };
            return PageAlertTestPage;
        })(Page);
        bui.PageAlertTestPage = PageAlertTestPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=PageAlertTestPage.js.map