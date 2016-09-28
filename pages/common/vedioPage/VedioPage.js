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
        var VedioPage = (function (_super) {
            __extends(VedioPage, _super);
            function VedioPage() {
                _super.apply(this, arguments);
            }
            VedioPage.prototype.initView = function () {
                var _this = this;
                this.videoPath = this.data["videoPath"];
                //返回销售主页
                $(this.nodeTypeMap.get('openPeiZhiPage1Page')).click(function () {
                    PageManager.to('btop.bui.VideoListPage');
                });
                new Vue({
                    el: '#VideoDetail',
                    data: {
                        videoPath: _this.videoPath
                    }
                });
            };
            return VedioPage;
        })(Page);
        bui.VedioPage = VedioPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=VedioPage.js.map