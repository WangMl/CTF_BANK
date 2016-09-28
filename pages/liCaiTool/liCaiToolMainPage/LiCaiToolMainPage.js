var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/************************************************************************
 * 类名  :  FuZhuToolMainPage
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/3/18
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../scripts/bns/btop.bui.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var PageManager = btop.hui.PageManager;
        var LiCaiToolMainPage = (function (_super) {
            __extends(LiCaiToolMainPage, _super);
            function LiCaiToolMainPage() {
                _super.apply(this, arguments);
            }
            LiCaiToolMainPage.prototype.initView = function () {
                var _this = this;
                $(this.nodeTypeMap.get('backHome')).click(function () {
                    PageManager.to("btop.bui.MainPage");
                });
                $(this.nodeTypeMap.get('openCaculatorMainPage')).click(function () {
                    PageManager.to("btop.bui.CalculatorMainPage");
                });
                $(this.nodeTypeMap.get('openLiLvMainPage')).click(function () {
                    PageManager.to("btop.bui.LiLvMainPage");
                });
                $(this.nodeTypeMap.get('openFengXianCePingMainPage')).click(function () {
                    PageManager.to("btop.bui.FengXianCePingMainPage");
                });
                $(this.nodeTypeMap.get('openJiJinJingZhiMainPage')).click(function () {
                    PageManager.to("btop.bui.JiJinJingZhiMainPage");
                });
                $(this.nodeTypeMap.get('openLiCaiChanPinBiJiaoQiMainPage')).click(function () {
                    //PageManager.to("btop.bui.LiCaiChanPinBiJiaoQiMainPage");
                    var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '暂不支持此功能' });
                    buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                        console.info(e);
                    });
                    buiAlert.setTheme(bui.AlertTheme.Red);
                });
                $(this.nodeTypeMap.get("openliCaiAlert")).click(function () {
                    var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '暂不支持此功能' });
                    buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                        console.info(e);
                    });
                    buiAlert.setTheme(bui.AlertTheme.Red);
                });
            };
            return LiCaiToolMainPage;
        })(btop.hui.Page);
        bui.LiCaiToolMainPage = LiCaiToolMainPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=LiCaiToolMainPage.js.map