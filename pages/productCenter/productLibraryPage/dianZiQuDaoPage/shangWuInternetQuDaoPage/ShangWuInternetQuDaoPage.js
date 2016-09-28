/************************************************************************
 * 类名  :  ZiCanBussinessPage
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/18
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../../../scripts/bns/btop.bui.d.ts"/>
///<reference path="../../../../common/stackPage/StackPage.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var WidgetManager = btop.hui.WidgetManager;
        var PageManager = btop.hui.PageManager;
        var ShangWuInternetQuDaoPage = (function (_super) {
            __extends(ShangWuInternetQuDaoPage, _super);
            function ShangWuInternetQuDaoPage() {
                _super.apply(this, arguments);
            }
            ShangWuInternetQuDaoPage.prototype.initView = function () {
                var _this = this;
                //操作tab切换标签
                this.tabInstance = WidgetManager.byId('shangWuInternetQuDaoPage');
                var titles = ["凤凰e账户个人渠道", "凤凰宝个人渠道", "微信银行", "社区e服务—个人", "凤凰乡村游APP", "网上营业厅"];
                var option = {
                    titles: titles,
                    mountId: 'shangWuInternetQuDaoPage'
                };
                this.tabInstance.initData(option);
                var ziCanData = [
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: 'AAAAAA',
                        number: 'K14527',
                        productType: '理财产品',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: 'AAAAAA',
                        number: 'K14527',
                        productType: '理财产品',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    }
                ];
                //嵌套stackPage
                PageManager.embedTo('btop.bui.StackPage', 'dzInternetBusinessStack', { title: '凤凰e账户个人渠道', data: ziCanData });
                $(this.tabInstance.nodeTypeMap.get('tabItemNode0')).click(function () {
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('凤凰e账户个人渠道', ziCanData);
                });
                var ziCanData1 = [
                    {
                        star: 3,
                        money: 1.167,
                        title: 'AAAAAA',
                        number: 'K14527',
                        productType: '理财产品',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: 'AAAAAA',
                        number: 'K14527',
                        productType: '理财产品',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: 'AAAAAA',
                        number: 'K14527',
                        productType: '理财产品',
                        isAttension: true
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode1')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dzInternetBusinessStack', { title: '凤凰宝个人渠道', data: ziCanData1 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('凤凰宝个人渠道', ziCanData1);
                });
                var ziCanData2 = [
                    {
                        star: 3,
                        money: 1.167,
                        title: 'AAAAAA',
                        number: 'K14527',
                        productType: '理财产品',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: 'AAAAAA',
                        number: 'K14527',
                        productType: '理财产品',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: 'AAAAAA',
                        number: 'K14527',
                        productType: '理财产品',
                        isAttension: true
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode2')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dzInternetBusinessStack', { title: '微信银行', data: ziCanData2 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('微信银行', ziCanData2);
                });
                var ziCanData3 = [
                    {
                        star: 3,
                        money: 1.167,
                        title: 'AAAAAA',
                        number: 'K14527',
                        productType: '理财产品',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: 'AAAAAA',
                        number: 'K14527',
                        productType: '理财产品',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: 'AAAAAA',
                        number: 'K14527',
                        productType: '理财产品',
                        isAttension: true
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode3')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dzInternetBusinessStack', { title: '社区e服务—个人', data: ziCanData3 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('社区e服务—个人', ziCanData3);
                });
                var ziCanData4 = [
                    {
                        star: 3,
                        money: 1.167,
                        title: 'AAAAAA',
                        number: 'K14527',
                        productType: '理财产品',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: 'AAAAAA',
                        number: 'K14527',
                        productType: '理财产品',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: 'AAAAAA',
                        number: 'K14527',
                        productType: '理财产品',
                        isAttension: true
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode4')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dzInternetBusinessStack', { title: '凤凰乡村游APP', data: ziCanData4 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('凤凰乡村游APP', ziCanData4);
                });
                var ziCanData5 = [
                    {
                        star: 3,
                        money: 1.167,
                        title: 'AAAAAA',
                        number: 'K14527',
                        productType: '理财产品',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: 'AAAAAA',
                        number: 'K14527',
                        productType: '理财产品',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: 'AAABAA',
                        number: 'K14527',
                        productType: '基金产品',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: 'AAAAAA',
                        number: 'K14527',
                        productType: '理财产品',
                        isAttension: true
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode5')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dzInternetBusinessStack', { title: '网上营业厅', data: ziCanData5 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('网上营业厅', ziCanData5);
                });
                //返回产品中心页
                $(this.nodeTypeMap.get('openProductCenterMainPage')).click(function () {
                    PageManager.to("btop.bui.ProductCenterMainPage");
                });
                //跳详情
                $('#dzInternetBusinessStack').on('click', function (e) {
                    PageManager.to("btop.bui.TextAndTextPage", ziCanData1);
                });
            };
            ShangWuInternetQuDaoPage.prototype.destroy = function () {
                var stackpage = WidgetManager.byId("btop.bui.StackPage");
                if (stackpage)
                    stackpage.destroy();
                _super.prototype.destroy.call(this);
            };
            return ShangWuInternetQuDaoPage;
        })(Page);
        bui.ShangWuInternetQuDaoPage = ShangWuInternetQuDaoPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ShangWuInternetQuDaoPage.js.map