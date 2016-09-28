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
        var DaECunDanXiangQingProductPage = (function (_super) {
            __extends(DaECunDanXiangQingProductPage, _super);
            function DaECunDanXiangQingProductPage() {
                _super.apply(this, arguments);
            }
            DaECunDanXiangQingProductPage.prototype.initView = function () {
                var decdtype = this.data.decdtype;
                var decddata = this.data.data.body;
                if (decdtype == 1) {
                    $('.decdxiangqing').show();
                    $('.decdedu').hide();
                    this.decdVue = new Vue({
                        el: '#daecundanxq',
                        data: {
                            lobbyManagerLog: null
                        },
                        methods: {}
                    });
                    this.decdVue._data.lobbyManagerLog = decddata;
                }
                else if (decdtype == 2) {
                    $('.decdxiangqing').hide();
                    $('.decdedu').show();
                    this.cdedVue = new Vue({
                        el: '#daecundaned',
                        data: {
                            lobbyManagerLog: null
                        },
                        methods: {}
                    });
                    this.cdedVue._data.lobbyManagerLog = decddata;
                }
                //确定
                $(this.nodeTypeMap.get('tuichuxaingqing')).click(function (e) {
                    var pageAlert = bui.BGlobal.PageAlert.getInstance();
                    var event = new bui.BEvent(e, { data: "confirm" });
                    pageAlert.confirmBtn.trigger('click', event);
                    pageAlert.hide();
                });
                //$(this.nodeTypeMap.get('tuichuxaingqing')).val()
            };
            return DaECunDanXiangQingProductPage;
        })(Page);
        bui.DaECunDanXiangQingProductPage = DaECunDanXiangQingProductPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=DaECunDanXiangQingProductPage.js.map