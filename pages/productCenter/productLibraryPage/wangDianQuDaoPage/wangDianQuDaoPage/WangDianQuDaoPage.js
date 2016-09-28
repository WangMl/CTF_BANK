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
        var WangDianQuDaoPage = (function (_super) {
            __extends(WangDianQuDaoPage, _super);
            function WangDianQuDaoPage() {
                _super.apply(this, arguments);
            }
            WangDianQuDaoPage.prototype.initView = function () {
                //跳详情
                $('#wdQuDaoZiCanBusinessStack').on('click', function (e) {
                    PageManager.to("btop.bui.TextAndTextPage", ziCanData1);
                });
                var _this = this;
                //操作tab切换标签
                this.tabInstance = WidgetManager.byId('wangDianQuDaoPage');
                var titles = ["社区银行", "幸福彩虹自助银行"];
                var option = {
                    titles: titles,
                    mountId: 'wangDianQuDaoPage'
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
                PageManager.embedTo('btop.bui.StackPage', 'wdQuDaoZiCanBusinessStack', { title: '社区银行', data: ziCanData });
                $(this.tabInstance.nodeTypeMap.get('tabItemNode0')).click(function () {
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('社区银行', ziCanData);
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
                    PageManager.embedTo('btop.bui.StackPage', 'wdQuDaoZiCanBusinessStack', { title: '幸福彩虹自助银行', data: ziCanData1 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('幸福彩虹自助银行', ziCanData1);
                });
                //返回产品中心页
                $(this.nodeTypeMap.get('openProductCenterMainPage')).click(function () {
                    PageManager.to("btop.bui.ProductCenterMainPage");
                });
            };
            WangDianQuDaoPage.prototype.destroy = function () {
                var stackpage = WidgetManager.byId("btop.bui.StackPage");
                if (stackpage)
                    stackpage.destroy();
                _super.prototype.destroy.call(this);
            };
            return WangDianQuDaoPage;
        })(Page);
        bui.WangDianQuDaoPage = WangDianQuDaoPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=WangDianQuDaoPage.js.map