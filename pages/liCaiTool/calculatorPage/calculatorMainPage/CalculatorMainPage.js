var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/************************************************************************
 * 类名  :  ProductLibraryMainPage
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/14
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../../scripts/libs/jQuery.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var PageManager = btop.hui.PageManager;
        var CalculatorMainPage = (function (_super) {
            __extends(CalculatorMainPage, _super);
            function CalculatorMainPage() {
                _super.apply(this, arguments);
            }
            CalculatorMainPage.prototype.initView = function () {
                $(this.nodeTypeMap.get('openCalculatorMainPage')).click(function () {
                    PageManager.to('btop.bui.CalculatorMainPage');
                });
                $(this.nodeTypeMap.get('openHuoQiCunKuanPage')).click(function () {
                    PageManager.to('btop.bui.HuoQiCunKuanPage');
                });
                $(this.nodeTypeMap.get('openLiCaiToolMainPage')).click(function () {
                    PageManager.to('btop.bui.LiCaiToolMainPage');
                });
                $(this.nodeTypeMap.get('openCommonCalculatorPage')).click(function () {
                    PageManager.to('btop.bui.CommonCalculatorPage');
                });
                $(this.nodeTypeMap.get('openCunBenQuXiPage')).click(function () {
                    PageManager.to('btop.bui.CunBenQuXiPage');
                });
                $(this.nodeTypeMap.get('openDaiKuanCalculatorPage')).click(function () {
                    PageManager.to('btop.bui.DaiKuanCalculatorPage');
                });
                $(this.nodeTypeMap.get('openDaiKuanJinEPage')).click(function () {
                    PageManager.to('btop.bui.DaiKuanJinEPage');
                });
                $(this.nodeTypeMap.get('openDaiKuanQiXianPage')).click(function () {
                    PageManager.to('btop.bui.DaiKuanQiXianPage');
                });
                $(this.nodeTypeMap.get('openDingHuoLiangBianPage')).click(function () {
                    PageManager.to('btop.bui.DingHuoLiangBianPage');
                });
                $(this.nodeTypeMap.get('openHuoBiShiJianJiaZhiCalculator')).click(function () {
                    PageManager.to('btop.bui.HuoBiShiJianJiaZhiCalculator');
                });
                $(this.nodeTypeMap.get('openJiaoYuChuXuPage')).click(function () {
                    PageManager.to('btop.bui.JiaoYuChuXuPage');
                });
                //零存整取
                $(this.nodeTypeMap.get('openLingCunZhengQuPage')).click(function () {
                    PageManager.to('btop.bui.LingCunZhengQuPage');
                });
                $(this.nodeTypeMap.get('openTiQianHuanDaiPage')).click(function () {
                    PageManager.to('btop.bui.TiQianHuanDaiPage');
                });
                $(this.nodeTypeMap.get('openWaiHuiDuiHuanCalculator')).click(function () {
                    PageManager.to('btop.bui.WaiHuiDuiHuanCalculator');
                });
                //整存零取
                $(this.nodeTypeMap.get('openZhengCunLingQuPage')).click(function () {
                    PageManager.to('btop.bui.ZhengCunLingQuPage');
                });
                $(this.nodeTypeMap.get('openZhengCunZhengQuPage')).click(function () {
                    PageManager.to('btop.bui.ZhengCunZhengQuPage');
                });
                $(this.nodeTypeMap.get('openZhengCunZhengQuZiDongZhuanCunPage')).click(function () {
                    PageManager.to('btop.bui.ZhengCunZhengQuZiDongZhuanCunPage');
                });
                $(this.nodeTypeMap.get('openZhuFangZuHePage')).click(function () {
                    PageManager.to('btop.bui.ZhuFangZuHePage');
                });
                $(this.nodeTypeMap.get('openZuHeCunKuanPage')).click(function () {
                    PageManager.to('btop.bui.ZuHeCunKuanPage');
                });
                $(this.nodeTypeMap.get('openZuHeDaiKuanTiQianHuanDaiPage')).click(function () {
                    PageManager.to('btop.bui.ZuHeDaiKuanTiQianHuanDaiPage');
                });
            };
            return CalculatorMainPage;
        })(Page);
        bui.CalculatorMainPage = CalculatorMainPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=CalculatorMainPage.js.map