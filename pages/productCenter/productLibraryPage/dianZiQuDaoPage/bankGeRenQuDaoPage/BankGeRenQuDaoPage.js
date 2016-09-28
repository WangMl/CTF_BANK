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
        var BankGeRenQuDaoPage = (function (_super) {
            __extends(BankGeRenQuDaoPage, _super);
            function BankGeRenQuDaoPage() {
                _super.apply(this, arguments);
            }
            BankGeRenQuDaoPage.prototype.initView = function () {
                var _this = this;
                //操作tab切换标签
                this.tabInstance = WidgetManager.byId('bankGeRenQuDaoPage');
                var titles = ["个人电话银行", "个人手机银行", "自助服务终端", "移动支付终端", "虚拟柜员机", "移动支付终端", "电子银行渠道认证"];
                var option = {
                    titles: titles,
                    mountId: 'bankGeRenQuDaoPage'
                };
                this.tabInstance.initData(option);
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
                PageManager.embedTo('btop.bui.StackPage', 'dzCanBusinessStack', { title: '个人电话银行', data: ziCanData1 });
                $(this.tabInstance.nodeTypeMap.get('tabItemNode1')).click(function () {
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('个人电话银行', ziCanData1);
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
                    PageManager.embedTo('btop.bui.StackPage', 'dzCanBusinessStack', { title: '个人手机银行', data: ziCanData2 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('个人手机银行', ziCanData2);
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
                    PageManager.embedTo('btop.bui.StackPage', 'dzCanBusinessStack', { title: '自助服务终端', data: ziCanData3 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('自助服务终端', ziCanData3);
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
                    PageManager.embedTo('btop.bui.StackPage', 'dzCanBusinessStack', { title: '移动支付终端', data: ziCanData4 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('移动支付终端', ziCanData4);
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
                    PageManager.embedTo('btop.bui.StackPage', 'dzCanBusinessStack', { title: '虚拟柜员机', data: ziCanData5 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('虚拟柜员机', ziCanData5);
                });
                var ziCanData6 = [
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
                $(this.tabInstance.nodeTypeMap.get('tabItemNode6')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dzCanBusinessStack', { title: '移动支付终端', data: ziCanData6 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('移动支付终端', ziCanData6);
                });
                var ziCanData7 = [
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
                $(this.tabInstance.nodeTypeMap.get('tabItemNode7')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dzCanBusinessStack', { title: '电子银行渠道认证', data: ziCanData7 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('电子银行渠道认证', ziCanData7);
                });
                $('#dzCanBusinessStack').on('click', function (e) {
                    PageManager.to("btop.bui.TextAndTextPage", ziCanData1);
                });
                //返回产品中心页
                $(this.nodeTypeMap.get('openProductCenterMainPage')).click(function () {
                    PageManager.to("btop.bui.ProductCenterMainPage");
                });
            };
            BankGeRenQuDaoPage.prototype.destroy = function () {
                var stackpage = WidgetManager.byId("btop.bui.StackPage");
                if (stackpage)
                    stackpage.destroy();
                _super.prototype.destroy.call(this);
            };
            return BankGeRenQuDaoPage;
        })(Page);
        bui.BankGeRenQuDaoPage = BankGeRenQuDaoPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=BankGeRenQuDaoPage.js.map