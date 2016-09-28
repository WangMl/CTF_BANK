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
        var PubGuoMaoBusinessPage = (function (_super) {
            __extends(PubGuoMaoBusinessPage, _super);
            function PubGuoMaoBusinessPage() {
                _super.apply(this, arguments);
            }
            PubGuoMaoBusinessPage.prototype.initView = function () {
                //跳详情
                $('#dgGaoMaoBusinessStack').on('click', function (e) {
                    PageManager.to("btop.bui.TextAndTextPage", ziCanData1);
                });
                var _this = this;
                //操作tab切换标签
                this.tabInstance = WidgetManager.byId('pubGuoMaoBusinessPage');
                var titles = ["买方融资", "卖方融资", "进口融资", "出口融资"];
                var option = {
                    titles: titles,
                    mountId: 'pubGuoMaoBusinessPage'
                };
                this.tabInstance.initData(option);
                var ziCanData = [
                    {
                        star: 3,
                        money: 1.167,
                        title: '买方融资',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                ];
                //嵌套stackPage
                PageManager.embedTo('btop.bui.StackPage', 'dgGaoMaoBusinessStack', { title: '买方融资', data: ziCanData });
                $(this.tabInstance.nodeTypeMap.get('tabItemNode0')).click(function () {
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('买方融资', ziCanData);
                });
                var ziCanData1 = [
                    {
                        star: 3,
                        money: 1.167,
                        title: '国内证议付',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode1')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgGaoMaoBusinessStack', { title: '卖方融资', data: ziCanData1 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('卖方融资', ziCanData1);
                });
                var ziCanData2 = [
                    {
                        star: 3,
                        money: 1.167,
                        title: '进口押汇',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: '进口汇出款融资',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode2')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgGaoMaoBusinessStack', { title: '进口融资', data: ziCanData2 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('进口融资', ziCanData2);
                });
                var ziCanData3 = [
                    {
                        star: 3,
                        money: 1.167,
                        title: '出口押汇/贴现',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '出口发票融资',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '出口信用保险项目下',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '福费廷',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: '出口订单融资',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode3')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgGaoMaoBusinessStack', { title: '出口融资', data: ziCanData3 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('出口融资', ziCanData3);
                });
                //返回产品中心页
                $(this.nodeTypeMap.get('openProductCenterMainPage')).click(function () {
                    PageManager.to("btop.bui.ProductCenterMainPage");
                });
            };
            PubGuoMaoBusinessPage.prototype.destroy = function () {
                var stackpage = WidgetManager.byId("btop.bui.StackPage");
                if (stackpage)
                    stackpage.destroy();
                _super.prototype.destroy.call(this);
            };
            return PubGuoMaoBusinessPage;
        })(Page);
        bui.PubGuoMaoBusinessPage = PubGuoMaoBusinessPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=PubGuoMaoBusinessPage.js.map