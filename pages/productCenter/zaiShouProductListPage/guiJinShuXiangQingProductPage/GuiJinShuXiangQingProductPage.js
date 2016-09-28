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
        var GuiJinShuXiangQingProductPage = (function (_super) {
            __extends(GuiJinShuXiangQingProductPage, _super);
            function GuiJinShuXiangQingProductPage() {
                _super.apply(this, arguments);
            }
            GuiJinShuXiangQingProductPage.prototype.initView = function () {
                var xqdata = this.data.body;
                var UNIT = { "1": "克", "2": "盎司", "3": "套装（克）", "4": "套装（盎司）" };
                xqdata.UNIT = UNIT[xqdata.UNIT];
                this.gjsVue = new Vue({
                    el: '#guijinshuxq',
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
            return GuiJinShuXiangQingProductPage;
        })(Page);
        bui.GuiJinShuXiangQingProductPage = GuiJinShuXiangQingProductPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=GuiJinShuXiangQingProductPage.js.map