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
        var PubTongYeBusinessPage = (function (_super) {
            __extends(PubTongYeBusinessPage, _super);
            function PubTongYeBusinessPage() {
                _super.apply(this, arguments);
            }
            PubTongYeBusinessPage.prototype.initView = function () {
                //跳详情
                $('#dgTongYeBusinessStack').on('click', function (e) {
                    PageManager.to("btop.bui.TextAndTextPage", ziCanData1);
                });
                var _this = this;
                //操作tab切换标签
                this.tabInstance = WidgetManager.byId('pubTongYeBusinessPage');
                var titles = ["同业存款", "回购业务", "信用拆借", "票据转贴现业务", "同业贸易融资", "自营外汇买卖", "投资顾问业务"];
                var option = {
                    titles: titles,
                    mountId: 'pubTongYeBusinessPage'
                };
                this.tabInstance.initData(option);
                var ziCanData = [
                    {
                        star: 5,
                        money: 1.168,
                        title: '存放同业',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: '同业存放',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                ];
                //嵌套stackPage
                PageManager.embedTo('btop.bui.StackPage', 'dgTongYeBusinessStack', { title: '同业存款', data: ziCanData });
                $(this.tabInstance.nodeTypeMap.get('tabItemNode0')).click(function () {
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('同业存款', ziCanData);
                });
                var ziCanData1 = [
                    {
                        star: 5,
                        money: 1.168,
                        title: '债券质押式回购',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: '票据质押式回购',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '债券买断式回购（2015年新增）',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode1')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgTongYeBusinessStack', { title: '回购业务', data: ziCanData1 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('回购业务', ziCanData1);
                });
                var ziCanData2 = [
                    {
                        star: 5,
                        money: 1.168,
                        title: '信用拆入',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: '信用拆出',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode2')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgTongYeBusinessStack', { title: '信用拆借', data: ziCanData2 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('信用拆借', ziCanData2);
                });
                var ziCanData3 = [
                    {
                        star: 3,
                        money: 1.167,
                        title: '票据转贴现业务',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode3')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgTongYeBusinessStack', { title: '票据转贴现业务', data: ziCanData3 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('票据转贴现业务', ziCanData3);
                });
                var ziCanData4 = [
                    {
                        star: 5,
                        money: 1.168,
                        title: '代开进口信用证',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: '进口代付',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '福费廷包买',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode4')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgTongYeBusinessStack', { title: '同业贸易融资', data: ziCanData4 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('同业贸易融资', ziCanData4);
                });
                var ziCanData5 = [
                    {
                        star: 5,
                        money: 1.168,
                        title: '代开进口信用证自营外汇买卖',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode5')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgTongYeBusinessStack', { title: '自营外汇买卖', data: ziCanData5 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('自营外汇买卖', ziCanData5);
                });
                var ziCanData6 = [
                    {
                        star: 5,
                        money: 1.168,
                        title: '投资顾问业务',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode6')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgTongYeBusinessStack', { title: '投资顾问业务', data: ziCanData6 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('投资顾问业务', ziCanData6);
                });
                //返回产品中心页
                $(this.nodeTypeMap.get('openProductCenterMainPage')).click(function () {
                    PageManager.to("btop.bui.ProductCenterMainPage");
                });
            };
            PubTongYeBusinessPage.prototype.destroy = function () {
                var stackpage = WidgetManager.byId("btop.bui.StackPage");
                if (stackpage)
                    stackpage.destroy();
                _super.prototype.destroy.call(this);
            };
            return PubTongYeBusinessPage;
        })(Page);
        bui.PubTongYeBusinessPage = PubTongYeBusinessPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=PubTongYeBusinessPage.js.map