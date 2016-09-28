var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/************************************************************************
 * 类名  :  ZiCanBussinessPage
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/18
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../../scripts/bns/btop.bui.d.ts"/>
///<reference path="../../../common/stackPage/StackPage.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var WidgetManager = btop.hui.WidgetManager;
        var PageManager = btop.hui.PageManager;
        var LiLvMainPage = (function (_super) {
            __extends(LiLvMainPage, _super);
            function LiLvMainPage() {
                _super.apply(this, arguments);
            }
            LiLvMainPage.prototype.initView = function () {
                var _this = this;
                //操作tab切换标签
                this.tabInstance = WidgetManager.byId('liLvTab');
                var titles = ["存款利率", "贷款利率", "外汇利率", "结售汇牌价"];
                var pageIds = ["btop.bui.CunKuanLiLvPage", "btop.bui.DaiKuanLiLvPage", "btop.bui.WaiHuiLiLvPage", "btop.bui.JieShouHuiPaiJiaPage"];
                var option = {
                    titles: titles,
                    pageIds: pageIds,
                    mountId: 'liLvMount'
                };
                this.tabInstance.initData(option);
                this.tabInstance.switchPage(0, 'liLvMount');
                //返回理财工具页
                $(this.nodeTypeMap.get('openLiCaiToolPage')).click(function () {
                    PageManager.to("btop.bui.LiCaiToolMainPage");
                });
            };
            LiLvMainPage.prototype.destroy = function () {
                if (this.tabInstance) {
                    this.tabInstance.destroyPage();
                }
                _super.prototype.destroy.call(this);
            };
            return LiLvMainPage;
        })(Page);
        bui.LiLvMainPage = LiLvMainPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=LiLvMainPage.js.map