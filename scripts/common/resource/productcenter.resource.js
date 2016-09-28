/************************************************************************
 * 类名  :  productcenter.resource.ts
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/14
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../btop/btop.hui.d.ts"/>
;
(function () {
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.ProductCenterMainPage",
        path: {
            html: "pages/productCenter/productCenterMainPage/productCenterMainPage.html",
            js: "pages/productCenter/productCenterMainPage/ProductCenterMainPage.js",
            css: ["pages/productCenter/productCenterMainPage/productCenterMainPage.css"]
        }
    });
    /**
     * @description 1 产品知识库
     */
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.ProductLibraryMainPage",
        path: {
            html: "pages/productCenter/productLibraryPage/productLibraryMainPage/productLibraryMainPage.html",
            js: "pages/productCenter/productLibraryPage/productLibraryMainPage/ProductLibraryMainPage.js",
            css: ["pages/productCenter/productLibraryPage/productLibraryMainPage/productLibraryMainPage.css"]
        }
    });
    //二三级菜单显示通道
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.ProductMenusPage",
        path: {
            html: "pages/productCenter/productLibraryPage/productMenusPage/productMenusPage.html",
            js: "pages/productCenter/productLibraryPage/productMenusPage/ProductMenusPage.js",
            css: ["pages/productCenter/productLibraryPage/productMenusPage/productMenusPage.css"]
        }
    });
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.ProductMenusStackPage",
        path: {
            html: "pages/productCenter/productLibraryPage/productMenusStackPage/productMenusStackPage.html",
            js: "pages/productCenter/productLibraryPage/productMenusStackPage/ProductMenusStackPage.js",
            css: ["pages/productCenter/productLibraryPage/productMenusStackPage/productMenusStackPage.css"]
        }
    });
    //三级菜单通道
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.ProductThirdMenusPage",
        path: {
            html: "pages/productCenter/productLibraryPage/productThirdMenusPage/productThirdMenusPage.html",
            js: "pages/productCenter/productLibraryPage/productThirdMenusPage/ProductThirdMenusPage.js",
            css: ["pages/productCenter/productLibraryPage/productThirdMenusPage/productThirdMenusPage.css"]
        }
    });
    //三级菜单列表战区
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.ProductThirdMenusStackPage",
        path: {
            html: "pages/productCenter/productLibraryPage/productThirdMenusStackPage/productThirdMenusStackPage.html",
            js: "pages/productCenter/productLibraryPage/productThirdMenusStackPage/ProductThirdMenusStackPage.js",
            css: ["pages/productCenter/productLibraryPage/productThirdMenusStackPage/productThirdMenusStackPage.css"]
        }
    });
    // 1.1 个人业务
    // 1.1.1 个人业务-个人--资产业务
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.PerZiChanBusinessPage",
        path: {
            html: "pages/productCenter/productLibraryPage/personalBusinessPage/perZiChanBusinessPage/perZiChanBusinessPage.html",
            js: "pages/productCenter/productLibraryPage/personalBusinessPage/perZiChanBusinessPage/PerZiChanBusinessPage.js",
            css: ["pages/productCenter/productLibraryPage/personalBusinessPage/perZiChanBusinessPage/perZiChanBusinessPage.css"]
        }
    });
    // 1.1.2 个人业务-个人--中间业务
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.PerZhongJianBusinessPage",
        path: {
            html: "pages/productCenter/productLibraryPage/personalBusinessPage/perZhongJianBusinessPage/perZhongJianBusinessPage.html",
            js: "pages/productCenter/productLibraryPage/personalBusinessPage/perZhongJianBusinessPage/PerZhongJianBusinessPage.js",
            css: ["pages/productCenter/productLibraryPage/personalBusinessPage/perZhongJianBusinessPage/perZhongJianBusinessPage.css"]
        }
    });
    // 1.1.3 个人业务-个人--负债业务
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.PerFuZhaiBusinessPage",
        path: {
            html: "pages/productCenter/productLibraryPage/personalBusinessPage/perFuZhaiBusinessPage/perFuZhaiBusinessPage.html",
            js: "pages/productCenter/productLibraryPage/personalBusinessPage/perFuZhaiBusinessPage/PerFuZhaiBusinessPage.js",
            css: ["pages/productCenter/productLibraryPage/personalBusinessPage/perFuZhaiBusinessPage/perFuZhaiBusinessPage.css"]
        }
    });
    //1.2 对公业务
    //1.2.1对公业务-资产业务
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.PubZiChanBusinessPage",
        path: {
            html: "pages/productCenter/productLibraryPage/publicBusinessPage/pubZiChanBusinessPage/pubZiChanBusinessPage.html",
            js: "pages/productCenter/productLibraryPage/publicBusinessPage/pubZiChanBusinessPage/PubZiChanBusinessPage.js",
            css: ["pages/productCenter/productLibraryPage/publicBusinessPage/pubZiChanBusinessPage/pubZiChanBusinessPage.css"]
        }
    });
    //1.2.2对公业务-负债业务
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.PubFuZhaiBusinessPage",
        path: {
            html: "pages/productCenter/productLibraryPage/publicBusinessPage/pubFuZhaiBusinessPage/pubFuZhaiBusinessPage.html",
            js: "pages/productCenter/productLibraryPage/publicBusinessPage/pubFuZhaiBusinessPage/PubFuZhaiBusinessPage.js",
            css: ["pages/productCenter/productLibraryPage/publicBusinessPage/pubFuZhaiBusinessPage/pubFuZhaiBusinessPage.css"]
        }
    });
    //1.2.3对公业务-中间业务
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.PubZhongJianBusinessPage",
        path: {
            html: "pages/productCenter/productLibraryPage/publicBusinessPage/pubZhongJianBusinessPage/pubZhongJianBusinessPage.html",
            js: "pages/productCenter/productLibraryPage/publicBusinessPage/pubZhongJianBusinessPage/PubZhongJianBusinessPage.js",
            css: ["pages/productCenter/productLibraryPage/publicBusinessPage/pubZhongJianBusinessPage/pubZhongJianBusinessPage.css"]
        }
    });
    //1.2.4对公业务-国际贸易融资业务
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.PubGuoMaoBusinessPage",
        path: {
            html: "pages/productCenter/productLibraryPage/publicBusinessPage/pubGuoMaoBusinessPage/pubGuoMaoBusinessPage.html",
            js: "pages/productCenter/productLibraryPage/publicBusinessPage/pubGuoMaoBusinessPage/PubGuoMaoBusinessPage.js",
            css: ["pages/productCenter/productLibraryPage/publicBusinessPage/pubGuoMaoBusinessPage/pubGuoMaoBusinessPage.css"]
        }
    });
    //1.2.5对公业务-投资银行业
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.PubFinacingBankBusinessPage",
        path: {
            html: "pages/productCenter/productLibraryPage/publicBusinessPage/pubFinacingBankBusinessPage/pubFinacingBankBusinessPage.html",
            js: "pages/productCenter/productLibraryPage/publicBusinessPage/pubFinacingBankBusinessPage/PubFinacingBankBusinessPage.js",
            css: ["pages/productCenter/productLibraryPage/publicBusinessPage/pubFinacingBankBusinessPage/pubFinacingBankBusinessPage.css"]
        }
    });
    //1.2.6对公业务-同业业务
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.PubTongYeBusinessPage",
        path: {
            html: "pages/productCenter/productLibraryPage/publicBusinessPage/pubTongYeBusinessPage/pubTongYeBusinessPage.html",
            js: "pages/productCenter/productLibraryPage/publicBusinessPage/pubTongYeBusinessPage/PubTongYeBusinessPage.js",
            css: ["pages/productCenter/productLibraryPage/publicBusinessPage/pubTongYeBusinessPage/pubTongYeBusinessPage.css"]
        }
    });
    //1.3 电子渠道
    // 1.3.1 电子渠道-电子银行渠道-个人渠道
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.BankGeRenQuDaoPage",
        path: {
            html: "pages/productCenter/productLibraryPage/dianZiQuDaoPage/bankGeRenQuDaoPage/bankGeRenQuDaoPage.html",
            js: "pages/productCenter/productLibraryPage/dianZiQuDaoPage/bankGeRenQuDaoPage/BankGeRenQuDaoPage.js",
            css: ["pages/productCenter/productLibraryPage/dianZiQuDaoPage/bankGeRenQuDaoPage/bankGeRenQuDaoPage.css"]
        }
    });
    // 1.3.2 电子银行渠道-企业渠道
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.BankQiYeQuDaoPage",
        path: {
            html: "pages/productCenter/productLibraryPage/dianZiQuDaoPage/bankQiYeQuDaoPage/bankQiYeQuDaoPage.html",
            js: "pages/productCenter/productLibraryPage/dianZiQuDaoPage/bankQiYeQuDaoPage/BankQiYeQuDaoPage.js",
            css: ["pages/productCenter/productLibraryPage/dianZiQuDaoPage/bankQiYeQuDaoPage/bankQiYeQuDaoPage.css"]
        }
    });
    // 1.3.3 电子商务渠道-个人渠道
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.ShangWuGeRenQuDaoPage",
        path: {
            html: "pages/productCenter/productLibraryPage/dianZiQuDaoPage/shangWuGeRenQuDaoPage/shangWuGeRenQuDaoPage.html",
            js: "pages/productCenter/productLibraryPage/dianZiQuDaoPage/shangWuGeRenQuDaoPage/ShangWuGeRenQuDaoPage.js",
            css: ["pages/productCenter/productLibraryPage/dianZiQuDaoPage/shangWuGeRenQuDaoPage/shangWuGeRenQuDaoPage.css"]
        }
    });
    // 1.3.4 电子商务渠道互联网金融渠道
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.ShangWuInternetQuDaoPage",
        path: {
            html: "pages/productCenter/productLibraryPage/dianZiQuDaoPage/shangWuInternetQuDaoPage/shangWuInternetQuDaoPage.html",
            js: "pages/productCenter/productLibraryPage/dianZiQuDaoPage/shangWuInternetQuDaoPage/ShangWuInternetQuDaoPage.js",
            css: ["pages/productCenter/productLibraryPage/dianZiQuDaoPage/shangWuInternetQuDaoPage/shangWuInternetQuDaoPage.css"]
        }
    });
    //1.4 网点渠道
    //1.4.1 网点渠道-网点渠道
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.WangDianQuDaoPage",
        path: {
            html: "pages/productCenter/productLibraryPage/wangDianQuDaoPage/wangDianQuDaoPage/wangDianQuDaoPage.html",
            js: "pages/productCenter/productLibraryPage/wangDianQuDaoPage/wangDianQuDaoPage/WangDianQuDaoPage.js",
            css: ["pages/productCenter/productLibraryPage/wangDianQuDaoPage/wangDianQuDaoPage/wangDianQuDaoPage.css"]
        }
    });
    //1.4.2网点渠道-农村基本金融服务渠道
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.NongCunJinRongQuDaoPage",
        path: {
            html: "pages/productCenter/productLibraryPage/wangDianQuDaoPage/nongCunJinRongQuDaoPage/nongCunJinRongQuDaoPage.html",
            js: "pages/productCenter/productLibraryPage/wangDianQuDaoPage/nongCunJinRongQuDaoPage/NongCunJinRongQuDaoPage.js",
            css: ["pages/productCenter/productLibraryPage/wangDianQuDaoPage/nongCunJinRongQuDaoPage/nongCunJinRongQuDaoPage.css"]
        }
    });
    // 2 热销及推荐产品
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.ReXiaoAndTuiJianProductMainPage",
        path: {
            html: "pages/productCenter/reXiaoAndTuiJianProductPage/reXiaoAndTuiJianProductMainPage/reXiaoAndTuiJianProductMainPage.html",
            js: "pages/productCenter/reXiaoAndTuiJianProductPage/reXiaoAndTuiJianProductMainPage/ReXiaoAndTuiJianProductMainPage.js",
            css: ["pages/productCenter/reXiaoAndTuiJianProductPage/reXiaoAndTuiJianProductMainPage/reXiaoAndTuiJianProductMainPage.css"]
        }
    });
    //产品列表
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.ReXiaoProductListPage",
        path: {
            html: "pages/productCenter/reXiaoAndTuiJianProductPage/reXiaoProductListPage/reXiaoProductListPage.html",
            js: "pages/productCenter/reXiaoAndTuiJianProductPage/reXiaoProductListPage/ReXiaoProductListPage.js",
            css: ["pages/productCenter/reXiaoAndTuiJianProductPage/reXiaoProductListPage/reXiaoProductListPage.css"]
        }
    });
    //几种产品展示
    //图片
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.ReXiaoImgPage",
        path: {
            html: "pages/productCenter/reXiaoAndTuiJianProductPage/reXiaoImgPage/reXiaoImgPage.html",
            js: "pages/productCenter/reXiaoAndTuiJianProductPage/reXiaoImgPage/ReXiaoImgPage.js",
            css: ["pages/productCenter/reXiaoAndTuiJianProductPage/reXiaoImgPage/reXiaoImgPage.css"]
        }
    });
    //图文
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.ReXiaoTextAndImgPage",
        path: {
            html: "pages/productCenter/reXiaoAndTuiJianProductPage/reXiaoTextAndImgPage/reXiaoTextAndImgPage.html",
            js: "pages/productCenter/reXiaoAndTuiJianProductPage/reXiaoTextAndImgPage/ReXiaoTextAndImgPage.js",
            css: ["pages/productCenter/reXiaoAndTuiJianProductPage/reXiaoTextAndImgPage/reXiaoTextAndImgPage.css"]
        }
    });
    //文本视频
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.ReXiaoTextAndVideoPage",
        path: {
            html: "pages/productCenter/reXiaoAndTuiJianProductPage/reXiaoTextAndVideoPage/reXiaoTextAndVideoPage.html",
            js: "pages/productCenter/reXiaoAndTuiJianProductPage/reXiaoTextAndVideoPage/ReXiaoTextAndVideoPage.js",
            css: ["pages/productCenter/reXiaoAndTuiJianProductPage/reXiaoTextAndVideoPage/reXiaoTextAndVideoPage.css"]
        }
    });
    //文本
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.ReXiaoTextPage",
        path: {
            html: "pages/productCenter/reXiaoAndTuiJianProductPage/reXiaoTextPage/reXiaoTextPage.html",
            js: "pages/productCenter/reXiaoAndTuiJianProductPage/reXiaoTextPage/ReXiaoTextPage.js",
            css: ["pages/productCenter/reXiaoAndTuiJianProductPage/reXiaoTextPage/reXiaoTextPage.css"]
        }
    });
    //视频
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.ReXiaoVedioPage",
        path: {
            html: "pages/productCenter/reXiaoAndTuiJianProductPage/reXiaoVedioPage/reXiaoVedioPage.html",
            js: "pages/productCenter/reXiaoAndTuiJianProductPage/reXiaoVedioPage/ReXiaoVedioPage.js",
            css: ["pages/productCenter/reXiaoAndTuiJianProductPage/reXiaoVedioPage/reXiaoVedioPage.css"]
        }
    });
    // 3 在售产品列表
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.ZaiShouProductListMainPage",
        path: {
            html: "pages/productCenter/zaiShouProductListPage/zaiShouProductListMainPage/zaiShouProductListMainPage.html",
            js: "pages/productCenter/zaiShouProductListPage/zaiShouProductListMainPage/ZaiShouProductListMainPage.js",
            css: ["pages/productCenter/zaiShouProductListPage/zaiShouProductListMainPage/zaiShouProductListMainPage.css"]
        }
    });
    // 3.1 在售产品列表-理财产品
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.LiCaiChanPinPage",
        path: {
            html: "pages/productCenter/zaiShouProductListPage/liCaiChanPinPage/liCaiChanPinPage.html",
            js: "pages/productCenter/zaiShouProductListPage/liCaiChanPinPage/LiCaiChanPinPage.js",
            css: ["pages/productCenter/zaiShouProductListPage/liCaiChanPinPage/liCaiChanPinPage.css"]
        }
    });
    // 3.1.1 理财产品
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.LiCaiChanPinBuyPage",
        path: {
            html: "pages/productCenter/zaiShouProductListPage/liCaiChanPinBuyPage/liCaiChanPinBuyPage.html",
            js: "pages/productCenter/zaiShouProductListPage/liCaiChanPinBuyPage/LiCaiChanPinBuyPage.js",
            css: [""]
        }
    });
    // 3.2 在售产品列表-保险产品
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.BaoXianChanPinPage",
        path: {
            html: "pages/productCenter/zaiShouProductListPage/baoXianChanPinPage/baoXianChanPinPage.html",
            js: "pages/productCenter/zaiShouProductListPage/baoXianChanPinPage/BaoXianChanPinPage.js",
            css: ["pages/productCenter/zaiShouProductListPage/baoXianChanPinPage/baoXianChanPinPage.css"]
        }
    });
    // 3.3 在售产品列表-国债产品
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.GuoZhaiChanPinPage",
        path: {
            html: "pages/productCenter/zaiShouProductListPage/guoZhaiChanPinPage/guoZhaiChanPinPage.html",
            js: "pages/productCenter/zaiShouProductListPage/guoZhaiChanPinPage/GuoZhaiChanPinPage.js",
            css: ["pages/productCenter/zaiShouProductListPage/guoZhaiChanPinPage/guoZhaiChanPinPage.css"]
        }
    });
    // 3.4 在售产品列表-基金产品
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.JiJinChanPinPage",
        path: {
            html: "pages/productCenter/zaiShouProductListPage/jiJinChanPinPage/jiJinChanPinPage.html",
            js: "pages/productCenter/zaiShouProductListPage/jiJinChanPinPage/JiJinChanPinPage.js",
            css: ["pages/productCenter/zaiShouProductListPage/jiJinChanPinPage/jiJinChanPinPage.css"]
        }
    });
    // 3.4.1 在售产品列表-基金产品-详情
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.JiJinChanPinXiangQingPage",
        path: {
            html: "pages/productCenter/zaiShouProductListPage/jiJinChanPinXiangQingPage/jiJinChanPinXiangQingPage.html",
            js: "pages/productCenter/zaiShouProductListPage/jiJinChanPinXiangQingPage/JiJinChanPinXiangQingPage.js",
            css: ["pages/productCenter/zaiShouProductListPage/jiJinChanPinXiangQingPage/jiJinChanPinXiangQingPage.css"]
        }
    });
    // 3.4.1 在售产品列表-理财产品-详情
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.LiCaiChanPinXiangQingPage",
        path: {
            html: "pages/productCenter/zaiShouProductListPage/liCaiChanPinXiangQingPage/liCaiChanPinXiangQingPage.html",
            js: "pages/productCenter/zaiShouProductListPage/liCaiChanPinXiangQingPage/LiCaiChanPinXiangQingPage.js",
            css: ["pages/productCenter/zaiShouProductListPage/liCaiChanPinXiangQingPage/liCaiChanPinXiangQingPage.css"]
        }
    });
    // 3.4.1 在售产品列表-保险产品-详情
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.BaoXianChanPinXiangQingPage",
        path: {
            html: "pages/productCenter/zaiShouProductListPage/baoXianChanPinXiangQingPage/baoXianChanPinXiangQingPage.html",
            js: "pages/productCenter/zaiShouProductListPage/baoXianChanPinXiangQingPage/BaoXianChanPinXiangQingPage.js",
            css: ["pages/productCenter/zaiShouProductListPage/baoXianChanPinXiangQingPage/baoXianChanPinXiangQingPage.css"]
        }
    });
    // 3.4.1 在售产品列表-国债产品-详情
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.GuoZhaiChanPinXiangQingPage",
        path: {
            html: "pages/productCenter/zaiShouProductListPage/guoZhaiChanPinXiangQingPage/guoZhaiChanPinXiangQingPage.html",
            js: "pages/productCenter/zaiShouProductListPage/guoZhaiChanPinXiangQingPage/GuoZhaiChanPinXiangQingPage.js",
            css: ["pages/productCenter/zaiShouProductListPage/guoZhaiChanPinXiangQingPage/guoZhaiChanPinXiangQingPage.css"]
        }
    });
    // 3.4.1 在售产品列表-信托产品
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.XinTuoChanPinPage",
        path: {
            html: "pages/productCenter/zaiShouProductListPage/xinTuoChanPinPage/xinTuoChanPinPage.html",
            js: "pages/productCenter/zaiShouProductListPage/xinTuoChanPinPage/XinTuoChanPinPage.js",
            css: ["pages/productCenter/zaiShouProductListPage/xinTuoChanPinPage/xinTuoChanPinPage.css"]
        }
    });
    // 3.4.1 在售产品列表-信托产品-详情
    btop.hui.ResourceManager.access({
        pageCode: "BPC001",
        description: "",
        id: "btop.bui.XinTuoChanPinXiangQingPage",
        path: {
            html: "pages/productCenter/zaiShouProductListPage/xinTuoChanPinXiangQingPage/xinTuoChanPinXiangQingPage.html",
            js: "pages/productCenter/zaiShouProductListPage/xinTuoChanPinXiangQingPage/XinTuoChanPinXiangQingPage.js",
            css: ["pages/productCenter/zaiShouProductListPage/xinTuoChanPinXiangQingPage/xinTuoChanPinXiangQingPage.css"]
        }
    });
    //信托产品
    btop.hui.ResourceManager.access({
        pageCode: "BC001",
        description: "",
        id: "btop.bui.XinTuoProductPage",
        path: {
            html: "pages/productCenter/zaiShouProductListPage/xinTuoProductPage/xinTuoProductPage.html",
            js: "pages/productCenter/zaiShouProductListPage/xinTuoProductPage/XinTuoProductPage.js",
            css: ["pages/productCenter/zaiShouProductListPage/xinTuoProductPage/xinTuoProductPage.css"]
        }
    });
    //信托产品详情
    btop.hui.ResourceManager.access({
        pageCode: "BC001",
        description: "",
        id: "btop.bui.XinTuoXiangQingProductPage",
        path: {
            html: "pages/productCenter/zaiShouProductListPage/xinTuoXiangQingProductPage/xinTuoXiangQingProductPage.html",
            js: "pages/productCenter/zaiShouProductListPage/xinTuoXiangQingProductPage/XinTuoXiangQingProductPage.js",
            css: ["pages/productCenter/zaiShouProductListPage/xinTuoXiangQingProductPage/xinTuoXiangQingProductPage.css"]
        }
    });
    // 8 产品中心-热销产品及推荐产品-----  textAndVideoPage
    //贵金属
    btop.hui.ResourceManager.access({
        pageCode: "BC001",
        description: "",
        id: "btop.bui.GuiJinShuProductPage",
        path: {
            html: "pages/productCenter/zaiShouProductListPage/guiJinShuProductPage/guiJinShuProductPage.html",
            js: "pages/productCenter/zaiShouProductListPage/guiJinShuProductPage/GuiJinShuProductPage.js",
            css: ["pages/productCenter/zaiShouProductListPage/guiJinShuProductPage/guiJinShuProductPage.css"]
        }
    });
    //贵金属详情
    btop.hui.ResourceManager.access({
        pageCode: "BC001",
        description: "",
        id: "btop.bui.GuiJinShuXiangQingProductPage",
        path: {
            html: "pages/productCenter/zaiShouProductListPage/guiJinShuXiangQingProductPage/guiJinShuXiangQingProductPage.html",
            js: "pages/productCenter/zaiShouProductListPage/guiJinShuXiangQingProductPage/GuiJinShuXiangQingProductPage.js",
            css: ["pages/productCenter/zaiShouProductListPage/guiJinShuXiangQingProductPage/guiJinShuXiangQingProductPage.css"]
        }
    });
    //大额存单
    btop.hui.ResourceManager.access({
        pageCode: "BC001",
        description: "",
        id: "btop.bui.DaECunDanProductPage",
        path: {
            html: "pages/productCenter/zaiShouProductListPage/daECunDanProductPage/daECunDanProductPage.html",
            js: "pages/productCenter/zaiShouProductListPage/daECunDanProductPage/DaECunDanProductPage.js",
            css: ["pages/productCenter/zaiShouProductListPage/daECunDanProductPage/daECunDanProductPage.css"]
        }
    });
    //大额存单详情
    btop.hui.ResourceManager.access({
        pageCode: "BC001",
        description: "",
        id: "btop.bui.DaECunDanXiangQingProductPage",
        path: {
            html: "pages/productCenter/zaiShouProductListPage/daECunDanXiangQingProductPage/daECunDanXiangQingProductPage.html",
            js: "pages/productCenter/zaiShouProductListPage/daECunDanXiangQingProductPage/DaECunDanXiangQingProductPage.js",
            css: ["pages/productCenter/zaiShouProductListPage/daECunDanXiangQingProductPage/daECunDanXiangQingProductPage.css"]
        }
    });
    //4 详情
    btop.hui.ResourceManager.access({
        pageCode: "BC001",
        description: "",
        id: "btop.bui.XiangQingPage",
        path: {
            html: "pages/productCenter/productLibraryPage/xiangQingPage/xiangQingPage.html",
            js: "pages/productCenter/productLibraryPage/xiangQingPage/XiangQingPage.js",
            css: ["pages/productCenter/productLibraryPage/xiangQingPage/xiangQingPage.css"]
        }
    });
})();
//# sourceMappingURL=productcenter.resource.js.map