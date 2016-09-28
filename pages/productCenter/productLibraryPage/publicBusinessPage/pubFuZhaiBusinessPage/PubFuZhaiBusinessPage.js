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
        var PubFuZhaiBusinessPage = (function (_super) {
            __extends(PubFuZhaiBusinessPage, _super);
            function PubFuZhaiBusinessPage() {
                _super.apply(this, arguments);
            }
            PubFuZhaiBusinessPage.prototype.initView = function () {
                //返回产品中心页
                $(this.nodeTypeMap.get('openProductCenterMainPage')).click(function () {
                    PageManager.to("btop.bui.ProductCenterMainPage");
                });
                //跳详情
                $('#dgFuZhaiBusinessStack').on('click', function (e) {
                    PageManager.to("btop.bui.TextAndTextPage", ziCanData1);
                });
                var _this = this;
                //操作tab切换标签
                this.tabInstance = WidgetManager.byId('pubFuZhaiBusinessPage');
                var titles = ["活期储蓄", "定期储蓄", "通知存款", "中央国库定期存款", "单用途存管业务"];
                var option = {
                    titles: titles,
                    mountId: 'pubFuZhaiBusinessPage'
                };
                this.tabInstance.initData(option);
                var ziCanData = [
                    {
                        star: 3,
                        money: 1.167,
                        title: '人民币活期储蓄',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '外币活期储蓄',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                ];
                //嵌套stackPage
                PageManager.embedTo('btop.bui.StackPage', 'dgFuZhaiBusinessStack', { title: '活期储蓄', data: ziCanData });
                $(this.tabInstance.nodeTypeMap.get('tabItemNode0')).click(function () {
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('活期储蓄', ziCanData);
                });
                var ziCanData1 = [
                    {
                        star: 3,
                        money: 1.167,
                        title: '人民币整存整取定期储蓄',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '外币定期存款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '协定存款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '人民币对公定期一本通业务',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode1')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgFuZhaiBusinessStack', { title: '定期储蓄', data: ziCanData1 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('定期储蓄', ziCanData1);
                });
                var ziCanData2 = [
                    {
                        star: 5,
                        money: 1.168,
                        title: '人民币通知存款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '外币七天通知存款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode2')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgFuZhaiBusinessStack', { title: '通知存款', data: ziCanData2 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('通知存款', ziCanData2);
                });
                var ziCanData3 = [
                    {
                        star: 3,
                        money: 1.167,
                        title: '暂无',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode3')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgFuZhaiBusinessStack', { title: '中央国库定期存款', data: ziCanData3 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('中央国库定期存款', ziCanData3);
                });
                var ziCanData4 = [
                    {
                        star: 3,
                        money: 1.167,
                        title: '暂无',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode4')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgFuZhaiBusinessStack', { title: '单用途存管业务', data: ziCanData4 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('单用途存管业务', ziCanData4);
                });
            };
            PubFuZhaiBusinessPage.prototype.destroy = function () {
                var stackpage = WidgetManager.byId("btop.bui.StackPage");
                if (stackpage)
                    stackpage.destroy();
                _super.prototype.destroy.call(this);
            };
            return PubFuZhaiBusinessPage;
        })(Page);
        bui.PubFuZhaiBusinessPage = PubFuZhaiBusinessPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=PubFuZhaiBusinessPage.js.map