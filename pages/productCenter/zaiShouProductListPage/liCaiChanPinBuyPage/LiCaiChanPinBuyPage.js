var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by John on 2016/7/21.
 */
///<reference path="../../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../../scripts/bns/btop.bui.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var LiCaiChanPinBuyPage = (function (_super) {
            __extends(LiCaiChanPinBuyPage, _super);
            function LiCaiChanPinBuyPage() {
                _super.apply(this, arguments);
            }
            LiCaiChanPinBuyPage.prototype.initView = function () {
                var _this = this;
                var liCaiBuy = document.createElement("iframe");
                liCaiBuy.src = "https://193.156.33.72/financing/padBuyFinancing.jhtml?prodCode=wsyyt-xzl1";
                liCaiBuy.height = "727px";
                liCaiBuy.width = "100%";
                liCaiBuy.style.border = "0";
                $("#liCaiProductBuy")[0].appendChild(liCaiBuy);
            };
            return LiCaiChanPinBuyPage;
        })(Page);
        bui.LiCaiChanPinBuyPage = LiCaiChanPinBuyPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=LiCaiChanPinBuyPage.js.map