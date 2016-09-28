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
        var XinTuoXiangQingProductPage = (function (_super) {
            __extends(XinTuoXiangQingProductPage, _super);
            function XinTuoXiangQingProductPage() {
                _super.apply(this, arguments);
            }
            XinTuoXiangQingProductPage.prototype.initView = function () {
                var xqdata = this.data.body;
                this.gjsVue = new Vue({
                    el: '#xintuoxq',
                    data: {
                        lobbyManagerLog: null
                    },
                    methods: {}
                });
                this.gjsVue._data.lobbyManagerLog = xqdata;
                //确定
                $(this.nodeTypeMap.get('tuichuxaingqing')).click(function (e) {
                    var pageAlert = bui.BGlobal.PageAlert.getInstance();
                    var event = new bui.BEvent(e, { data: "confirm" });
                    pageAlert.confirmBtn.trigger('click', event);
                    pageAlert.hide();
                });
                $(this.nodeTypeMap.get('tuichuxaingqing')).val();
            };
            return XinTuoXiangQingProductPage;
        })(Page);
        bui.XinTuoXiangQingProductPage = XinTuoXiangQingProductPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=XinTuoXiangQingProductPage.js.map