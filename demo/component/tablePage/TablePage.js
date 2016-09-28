var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/************************************************************************
 * 类名  :  TablePage
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/29
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
/************************************************************************
 * 类名  :  input
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/12
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
        var TablePage = (function (_super) {
            __extends(TablePage, _super);
            function TablePage() {
                _super.apply(this, arguments);
            }
            TablePage.prototype.initView = function () {
                $(this.nodeTypeMap.get('openComponentMainPage')).click(function () {
                    PageManager.to('btop.bui.ComponentMainPage');
                });
            };
            return TablePage;
        })(Page);
        bui.TablePage = TablePage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=TablePage.js.map