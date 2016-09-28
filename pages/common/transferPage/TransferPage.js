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
        var TransferPage = (function (_super) {
            __extends(TransferPage, _super);
            function TransferPage() {
                _super.apply(this, arguments);
            }
            TransferPage.prototype.initView = function () {
                this.transferData = this.data;
                $(this.nodeTypeMap.get('transferPageTitleNode')).html(this.transferData['title']);
                PageManager.to(this.transferData['pageId'], this.transferData['data']);
            };
            return TransferPage;
        })(Page);
        bui.TransferPage = TransferPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=TransferPage.js.map