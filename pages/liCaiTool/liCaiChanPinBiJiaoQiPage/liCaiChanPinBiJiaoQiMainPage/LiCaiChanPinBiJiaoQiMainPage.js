/**
 * Created by Administrator on 2016/5/3.
 */
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
        var PageManager = btop.hui.PageManager;
        var LiCaiChanPinBiJiaoQiMainPage = (function (_super) {
            __extends(LiCaiChanPinBiJiaoQiMainPage, _super);
            function LiCaiChanPinBiJiaoQiMainPage() {
                _super.apply(this, arguments);
            }
            LiCaiChanPinBiJiaoQiMainPage.prototype.initView = function () {
                $(this.nodeTypeMap.get('openLiCaiToolMainPage')).click(function () {
                    if (titleName == "A" || titleName1 == "B" || titleName2 == "C") {
                        PageManager.to("btop.bui.ProductCenterMainPage");
                    }
                    else {
                        PageManager.to("btop.bui.LiCaiToolMainPage");
                    }
                });
                var titleName = this.data[0].title;
                var titleName1 = this.data[1].title;
                var titleName2 = this.data[2].title;
                console.log(this.data[1].title);
                if (titleName != "A") {
                    document.getElementById('chanPin1').hidden = true;
                }
                if (titleName1 != "B") {
                    document.getElementById('chanPin2').hidden = true;
                }
                if (titleName2 != "C") {
                    document.getElementById('chanPin3').hidden = true;
                }
            };
            return LiCaiChanPinBiJiaoQiMainPage;
        })(btop.hui.Page);
        bui.LiCaiChanPinBiJiaoQiMainPage = LiCaiChanPinBiJiaoQiMainPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=LiCaiChanPinBiJiaoQiMainPage.js.map