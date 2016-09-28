/************************************************************************
 * 类名  :  GlobalPage
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/12
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../scripts/libs/jQuery.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var Global = btop.hui.Global;
        var PageManager = btop.hui.PageManager;
        var GlobalPage = (function (_super) {
            __extends(GlobalPage, _super);
            function GlobalPage() {
                _super.apply(this, arguments);
            }
            GlobalPage.prototype.initView = function () {
                $(this.nodeTypeMap.get('openComponentMainPage')).click(function () {
                    PageManager.to('btop.bui.ComponentMainPage');
                });
                /**
                 * @description Alert展示
                 */
                $('#Alert').click(function () {
                    Global.Alert.show({
                        title: "提示",
                        content: "我是弹出框",
                        buttons: ["确定", "取消"]
                    });
                });
            };
            return GlobalPage;
        })(Page);
        bui.GlobalPage = GlobalPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=GlobalPage.js.map