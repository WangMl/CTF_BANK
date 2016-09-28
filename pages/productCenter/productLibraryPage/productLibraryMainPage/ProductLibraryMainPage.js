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
        var ProductLibraryMainPage = (function (_super) {
            __extends(ProductLibraryMainPage, _super);
            function ProductLibraryMainPage() {
                _super.apply(this, arguments);
            }
            ProductLibraryMainPage.prototype.initView = function () {
                $(this.nodeTypeMap.get('openBankGeRenQuDaoPage')).click(function () {
                    PageManager.to('btop.bui.ProductThirdMenusPage', { menuId: '0301', menuName: '电子银行渠道-个人渠道' });
                });
                $(this.nodeTypeMap.get('openBankQiYeQuDaoPage')).click(function () {
                    PageManager.to('btop.bui.ProductThirdMenusPage', { menuId: '0302', menuName: '电子银行渠道-企业渠道' });
                });
                $(this.nodeTypeMap.get('openShangWuGeRenQuDaoPage')).click(function () {
                    PageManager.to('btop.bui.ProductThirdMenusPage', { menuId: '0303', menuName: '电子商务渠道-个人渠道' });
                });
                $(this.nodeTypeMap.get('openShangWuInternetQuDaoPage')).click(function () {
                    PageManager.to('btop.bui.ProductThirdMenusPage', { menuId: '0304', menuName: '电子商务渠道-互联网金融渠道' });
                });
                //
                $(this.nodeTypeMap.get('openPerZiChanBusinessPage')).click(function () {
                    PageManager.to('btop.bui.ProductMenusPage', { menuId: '0101', menuName: '个人业务-资产业务' });
                });
                $(this.nodeTypeMap.get('openPerFuZhaiBusinessPage')).click(function () {
                    PageManager.to('btop.bui.ProductMenusPage', { menuId: '0102', menuName: '个人业务-负债业务' });
                });
                $(this.nodeTypeMap.get('openPerZhongJianBusinessPage')).click(function () {
                    PageManager.to('btop.bui.ProductMenusPage', { menuId: '0103', menuName: '个人业务-中间业务' });
                });
                $(this.nodeTypeMap.get('openPubZiChanBusinessPage')).click(function () {
                    PageManager.to('btop.bui.ProductMenusPage', { menuId: '0201', menuName: '对公业务-资产业务' });
                });
                $(this.nodeTypeMap.get('openPubFuZhaiBusinessPage')).click(function () {
                    PageManager.to('btop.bui.ProductMenusPage', { menuId: '0202', menuName: '对公业务-负债业务' });
                });
                $(this.nodeTypeMap.get('openPubZhongJianBusinessPage')).click(function () {
                    PageManager.to('btop.bui.ProductMenusPage', { menuId: '0203', menuName: '对公业务-中间业务' });
                });
                $(this.nodeTypeMap.get('openPubGuoMaoBusinessPage')).click(function () {
                    PageManager.to('btop.bui.ProductMenusPage', { menuId: '0204', menuName: '对公业务-国际贸易融资业务' });
                });
                $(this.nodeTypeMap.get('openPubFinacingBankBusinessPage')).click(function () {
                    PageManager.to('btop.bui.ProductMenusPage', { menuId: '0205', menuName: '对公业务-投资银行业务' });
                });
                $(this.nodeTypeMap.get('openPubTongYeBusinessPage')).click(function () {
                    PageManager.to('btop.bui.ProductMenusPage', { menuId: '0206', menuName: '对公业务-同行业务' });
                });
                $(this.nodeTypeMap.get('openWangDianQuDaoPage')).click(function () {
                    PageManager.to('btop.bui.ProductThirdMenusPage', { menuId: '0401', menuName: '网点渠道' });
                });
                $(this.nodeTypeMap.get('openNongCunJinRongQuDaoPage')).click(function () {
                    PageManager.to('btop.bui.ProductThirdMenusPage', { menuId: '0402', menuName: '农村基本金融服务渠道' });
                });
            };
            ProductLibraryMainPage.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            return ProductLibraryMainPage;
        })(Page);
        bui.ProductLibraryMainPage = ProductLibraryMainPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ProductLibraryMainPage.js.map