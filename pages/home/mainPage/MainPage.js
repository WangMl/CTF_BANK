var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @user wxl
 * @date 2016/3/3
 **/
///<reference path="../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../scripts/bns/btop.bui.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var PageManager = btop.hui.PageManager;
        var MainPage = (function (_super) {
            __extends(MainPage, _super);
            function MainPage() {
                _super.apply(this, arguments);
            }
            MainPage.prototype.initView = function () {
                var _this = this;
                $(this.nodeTypeMap.get("openXiaoShou")).click(function () {
                    var userInfo;
                    bui.DbManager.sessionGet("UserInfo", true).then(function (data) {
                        userInfo = data;
                    });
                    if (userInfo == null) {
                        var alert_1 = bui.BGlobal.Alert.show({ title: '提示', content: '用户未登录，请登录！' });
                    }
                    else {
                        PageManager.to("btop.bui.XiaoShouMainPage");
                    }
                });
                $(this.nodeTypeMap.get("openPeiZhiPage")).click(function () {
                    PageManager.to("btop.bui.PeiZhiPage1");
                });
                $(this.nodeTypeMap.get('openProductCenterMainPage')).click(function () {
                    var userInfo;
                    bui.DbManager.sessionGet("UserInfo", true).then(function (data) {
                        userInfo = data;
                    });
                    if (userInfo == null) {
                        var alert_2 = bui.BGlobal.Alert.show({ title: '提示', content: '用户未登录，请登录！' });
                        alert_2.setTheme(bui.AlertTheme.Red);
                    }
                    else {
                        PageManager.to("btop.bui.ProductCenterMainPage");
                    }
                });
                //理财产品
                $(this.nodeTypeMap.get('openLiCaiToolPage')).click(function () {
                    var userInfo;
                    bui.DbManager.sessionGet("UserInfo", true).then(function (data) {
                        userInfo = data;
                    });
                    if (userInfo == null) {
                        var alert_3 = bui.BGlobal.Alert.show({ title: '提示', content: '用户未登录，请登录！' });
                        alert_3.setTheme(bui.AlertTheme.Red);
                    }
                    else {
                        PageManager.to("btop.bui.LiCaiToolMainPage", "liChanPing");
                    }
                });
                //银行卡业务
                $(this.nodeTypeMap.get('openCustome')).click(function () {
                    var userInfo;
                    bui.DbManager.sessionGet("UserInfo", true).then(function (data) {
                        userInfo = data;
                    });
                    if (userInfo == null) {
                        var alert_4 = bui.BGlobal.Alert.show({ title: '提示', content: '用户未登录，请登录！' });
                        alert_4.setTheme(bui.AlertTheme.Red);
                    }
                    else {
                        var alert_5 = bui.BGlobal.Alert.show({ title: '提示', content: '暂不支持此业务！' });
                        alert_5.setTheme(bui.AlertTheme.Red);
                    }
                });
                $(this.nodeTypeMap.get('LiCaiChanPinPage')).click(function () {
                    var userInfo;
                    bui.DbManager.sessionGet("UserInfo", true).then(function (data) {
                        userInfo = data;
                    });
                    if (userInfo == null) {
                        var alert_6 = bui.BGlobal.Alert.show({ title: '提示', content: '用户未登录，请登录！' });
                        alert_6.setTheme(bui.AlertTheme.Red);
                    }
                    else {
                        PageManager.to("btop.bui.LiCaiChanPinPage", { data: "", data1: "MainPage" });
                    }
                });
                $(this.nodeTypeMap.get("openFuZhuToolMainPage")).click(function () {
                    var userInfo;
                    bui.DbManager.sessionGet("UserInfo", true).then(function (data) {
                        userInfo = data;
                    });
                    if (userInfo == null) {
                        var alert_7 = bui.BGlobal.Alert.show({ title: '提示', content: '用户未登录，请登录！' });
                        alert_7.setTheme(bui.AlertTheme.Red);
                    }
                    else {
                        PageManager.to("btop.bui.FuZhuToolMainPage");
                    }
                });
                $(this.nodeTypeMap.get("openTingTangMainPage")).click(function () {
                    var userInfo;
                    bui.DbManager.sessionGet("UserInfo", true).then(function (data) {
                        userInfo = data;
                    });
                    if (userInfo == null) {
                        var alert_8 = bui.BGlobal.Alert.show({ title: '提示', content: '用户未登录，请登录！' });
                        alert_8.setTheme(bui.AlertTheme.Red);
                    }
                    else {
                        PageManager.to("btop.bui.TingTangMainPage");
                    }
                });
                $(this.nodeTypeMap.get("openRiZhiMainpage")).click(function () {
                    var userInfo;
                    bui.DbManager.sessionGet("UserInfo", true).then(function (data) {
                        userInfo = data;
                    });
                    if (userInfo == null) {
                        var alert_9 = bui.BGlobal.Alert.show({ title: '提示', content: '用户未登录，请登录！' });
                        alert_9.setTheme(bui.AlertTheme.Red);
                    }
                    else if (userInfo.UserRole != 1 && userInfo.UserRole != 2) {
                        var alert_10 = bui.BGlobal.Alert.show({ title: '提示', content: '无权限！' });
                        alert_10.setTheme(bui.AlertTheme.Red);
                    }
                    else {
                        PageManager.to("btop.bui.RiZhiMainPage");
                    }
                });
                //切入测试页面
                $(this.nodeTypeMap.get("openComponentMainPage")).click(function () {
                    PageManager.to("btop.bui.ComponentMainPage");
                });
            };
            return MainPage;
        })(btop.hui.Page);
        bui.MainPage = MainPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=MainPage.js.map