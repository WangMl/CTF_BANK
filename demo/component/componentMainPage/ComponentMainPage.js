var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/************************************************************************
 * 类名  :  ComponentMainPage
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
        var ComponentMainPage = (function (_super) {
            __extends(ComponentMainPage, _super);
            function ComponentMainPage() {
                _super.apply(this, arguments);
            }
            ComponentMainPage.prototype.initView = function () {
                //返回主页面
                $(this.nodeTypeMap.get('openMainPage')).click(function () {
                    PageManager.to('btop.bui.MainPage');
                });
                //进入输入厂页面
                $(this.nodeTypeMap.get('openInputPage')).click(function () {
                    PageManager.to('btop.bui.InputPage');
                });
                //进入表格页面
                $(this.nodeTypeMap.get('openTablePage')).click(function () {
                    PageManager.to('btop.bui.TablePage');
                });
                //进入按钮页面
                $(this.nodeTypeMap.get('openButtonPage')).click(function () {
                    PageManager.to('btop.bui.ButtonPage');
                });
                //进入全局页面
                $(this.nodeTypeMap.get('openGlobalPage')).click(function () {
                    PageManager.to('btop.bui.GlobalPage');
                });
                //进入全局页面
                $(this.nodeTypeMap.get('openCustomePage')).click(function () {
                    PageManager.to('btop.bui.CustomePage');
                });
            };
            return ComponentMainPage;
        })(Page);
        bui.ComponentMainPage = ComponentMainPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ComponentMainPage.js.map