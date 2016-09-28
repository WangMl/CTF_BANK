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
        var PubZhongJianBusinessPage = (function (_super) {
            __extends(PubZhongJianBusinessPage, _super);
            function PubZhongJianBusinessPage() {
                _super.apply(this, arguments);
            }
            PubZhongJianBusinessPage.prototype.initView = function () {
                //跳详情
                $('#pubZhongJianBusinessPage').on('click', function (e) {
                    PageManager.to("btop.bui.TextAndTextPage", ziCanData1);
                });
                var _this = this;
                //操作tab切换标签
                this.tabInstance = WidgetManager.byId('pubZhongJianBusinessPage');
                var titles = ["支付结算业务", "银行卡业务", "代理类", "担保及承诺类", "咨询顾问业务", "现金管理业务", "贸易结算", "其他"];
                var option = {
                    titles: titles,
                    mountId: 'pubZhongJianBusinessPage'
                };
                this.tabInstance.initData(option);
                var ziCanData = [
                    {
                        star: 3,
                        money: 1.167,
                        title: '支票结算—普通支票结算',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '支票结算—代签支票结算（已停办）',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '支票结算—个人支票缴存业务',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '银行汇票结算',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: '银行本票结算',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '商业汇票—银行承兑汇票结算',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '商业汇票—商业承兑汇票结算',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '商业汇票—电子商业汇票结算',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: '汇兑—大额汇兑业务',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: '汇兑—小额汇兑业务',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '汇兑—农信银汇兑业务',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '汇兑—对公外汇汇入汇款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '汇兑—对公外汇汇出汇款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: '汇兑—全额到账境外汇款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '汇兑—多币种汇款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '汇兑—京港直通美元快汇',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '委托收款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: '托收承付',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: '农信银柜面通存通兑',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '电子清分服务平台汇兑业务',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '跨境人民币结算业务—跨境人民币汇出汇款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '跨境人民币结算业务—跨境人民币汇入汇款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                ];
                //嵌套stackPage
                PageManager.embedTo('btop.bui.StackPage', 'dgZhongJianBusinessStack', { title: '支付结算业务', data: ziCanData });
                $(this.tabInstance.nodeTypeMap.get('tabItemNode0')).click(function () {
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('支付结算业务', ziCanData);
                });
                var ziCanData1 = [
                    {
                        star: 5,
                        money: 1.168,
                        title: '凤凰单位结算卡（2015年新增）',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode1')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgZhongJianBusinessStack', { title: '银行卡业务', data: ziCanData1 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('银行卡业务', ziCanData1);
                });
                var ziCanData2 = [
                    {
                        star: 5,
                        money: 1.168,
                        title: '代理债券业务',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '委托贷款业务',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '代理理财业务—代理信托计划资金收付业务',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode2')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgZhongJianBusinessStack', { title: '代理类', data: ziCanData2 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('代理类', ziCanData2);
                });
                var ziCanData3 = [
                    {
                        star: 5,
                        money: 1.168,
                        title: '提货担保/提单背书',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '资信见证',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode3')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgZhongJianBusinessStack', { title: '咨询顾问业务', data: ziCanData3 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('咨询顾问业务', ziCanData3);
                });
                var ziCanData4 = [
                    {
                        star: 5,
                        money: 1.168,
                        title: '银企直联',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '多级账簿',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '资金归集与下拨',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '现金管理项下委托贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '综合收付款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '集中代理支付',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode4')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgZhongJianBusinessStack', { title: '现金管理业务', data: ziCanData4 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('现金管理业务', ziCanData4);
                });
                var ziCanData5 = [
                    {
                        star: 5,
                        money: 1.168,
                        title: '保函业务及备用信用证',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '保险债权保函（2015年新增）',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '提货担保/提单背书',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '资信见证',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode5')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgZhongJianBusinessStack', { title: '担保及承诺类业务', data: ziCanData5 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('担保及承诺类业务', ziCanData5);
                });
                var ziCanData6 = [
                    {
                        star: 5,
                        money: 1.168,
                        title: '国内信用证',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '进口信用证',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '出口信用证',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '进口代收',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '出口托收',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode6')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgZhongJianBusinessStack', { title: '贸易结算', data: ziCanData6 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('贸易结算', ziCanData6);
                });
                var ziCanData7 = [
                    {
                        star: 5,
                        money: 1.168,
                        title: '上门服务',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode7')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgZhongJianBusinessStack', { title: '其他', data: ziCanData7 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('其他', ziCanData7);
                });
                //返回产品中心页
                $(this.nodeTypeMap.get('openProductCenterMainPage')).click(function () {
                    PageManager.to("btop.bui.ProductCenterMainPage");
                });
            };
            PubZhongJianBusinessPage.prototype.destroy = function () {
                var stackpage = WidgetManager.byId("btop.bui.StackPage");
                if (stackpage)
                    stackpage.destroy();
                _super.prototype.destroy.call(this);
            };
            return PubZhongJianBusinessPage;
        })(Page);
        bui.PubZhongJianBusinessPage = PubZhongJianBusinessPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=PubZhongJianBusinessPage.js.map