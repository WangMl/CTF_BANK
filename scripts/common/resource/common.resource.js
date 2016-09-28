/************************************************************************
 * 类名  :  common.resource
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/11
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../btop/btop.hui.d.ts"/>
;
(function () {
    //1 页面首部
    btop.hui.ResourceManager.access({
        pageCode: "BC001",
        description: "",
        id: "btop.bui.HeaderPage",
        path: {
            html: "pages/common/headerPage/headerPage.html",
            js: "pages/common/headerPage/HeaderPage.js",
            css: ["pages/common/headerPage/headerPage.css"]
        }
    });
    //2 页面底部
    btop.hui.ResourceManager.access({
        pageCode: "BC001",
        description: "",
        id: "btop.bui.FooterPage",
        path: {
            html: "pages/common/footerPage/footerPage.html",
            js: "pages/common/footerPage/FooterPage.js",
            css: ["pages/common/footerPage/footerPage.css"]
        }
    });
    // 3 存储桟区信息页面
    btop.hui.ResourceManager.access({
        pageCode: "BC001",
        description: "",
        id: "btop.bui.StackPage",
        path: {
            html: "pages/common/stackPage/stackPage.html",
            js: "pages/common/stackPage/StackPage.js",
            css: ["pages/common/stackPage/stackPage.css"]
        }
    });
    // 4 产品展示页面
    btop.hui.ResourceManager.access({
        pageCode: "BC001",
        description: "",
        id: "btop.bui.ProductListPage",
        path: {
            html: "pages/common/productListPage/productListPage.html",
            js: "pages/common/productListPage/ProductListPage.js",
            css: ["pages/common/productListPage/productListPage.css"]
        }
    });
    // 5 图片展示页面imagePage
    btop.hui.ResourceManager.access({
        pageCode: "BC001",
        description: "",
        id: "btop.bui.ImagePage",
        path: {
            html: "pages/common/imagePage/imagePage.html",
            js: "pages/common/imagePage/ImagePage.js",
            css: ["pages/common/imagePage/imagePage.css"]
        }
    });
    //6 视频展示页面vedioPage
    btop.hui.ResourceManager.access({
        pageCode: "BC001",
        description: "",
        id: "btop.bui.VedioPage",
        path: {
            html: "pages/common/vedioPage/vedioPage.html",
            js: "pages/common/vedioPage/VedioPage.js",
            css: ["pages/common/vedioPage/vedioPage.css"]
        }
    });
    //7 视频列表页面
    btop.hui.ResourceManager.access({
        pageCode: "BC001",
        description: "",
        id: "btop.bui.VideoListPage",
        path: {
            html: "pages/common/videoListPage/videoListPage.html",
            js: "pages/common/videoListPage/VideoListPage.js",
            css: ["pages/common/videoListPage/videoListPage.css"]
        }
    });
    //7 音频展示页面vedioPage
    btop.hui.ResourceManager.access({
        pageCode: "BC001",
        description: "",
        id: "btop.bui.AudioPage",
        path: {
            html: "pages/common/audioPage/audioPage.html",
            js: "pages/common/audioPage/AudioPage.js",
            css: ["pages/common/audioPage/audioPage.css"]
        }
    });
    //9 页面中转
    btop.hui.ResourceManager.access({
        pageCode: "BC001",
        description: "",
        id: "btop.bui.TransferPage",
        path: {
            html: "pages/common/transferPage/transferPage.html",
            js: "pages/common/transferPage/TransferPage.js",
            css: ["pages/common/transferPage/transferPage.css"]
        }
    });
    //9 PDF浏览
    btop.hui.ResourceManager.access({
        pageCode: "BC001",
        description: "",
        id: "btop.bui.PdfBrowse",
        path: {
            html: "pages/common/pdfBrowse/pdfBrowse.html",
            js: "pages/common/pdfBrowse/PdfBrowse.js",
            css: ["pages/common/pdfBrowse/pdfBrowse.css"]
        }
    });
})();
//# sourceMappingURL=common.resource.js.map