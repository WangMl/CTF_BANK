/************************************************************************
 * 类名  :  home.info.ts
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/3/15
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../btop/btop.hui.d.ts"/>
;
(function () {
    btop.hui.ResourceManager.access({
        pageCode: "BH001",
        description: "挂载页",
        id: "btop.bui.MountPage",
        path: {
            html: "pages/home/mountPage/mountPage.html",
            js: "pages/home/mountPage/MountPage.js",
            css: []
        }
    });
    btop.hui.ResourceManager.access({
        pageCode: "B002",
        description: "主页",
        id: "btop.bui.MainPage",
        path: {
            html: "pages/home/mainPage/mainPage.html",
            js: "pages/home/mainPage/MainPage.js",
            css: ["pages/home/mainPage/mainPage.css"]
        }
    });
})();
//# sourceMappingURL=home.resource.js.map