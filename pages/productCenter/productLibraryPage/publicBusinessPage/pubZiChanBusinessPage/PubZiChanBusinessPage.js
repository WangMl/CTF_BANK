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
        var PubZiChanBusinessPage = (function (_super) {
            __extends(PubZiChanBusinessPage, _super);
            function PubZiChanBusinessPage() {
                _super.apply(this, arguments);
            }
            PubZiChanBusinessPage.prototype.initView = function () {
                //跳详情
                $('#pubZiChanBusinessPage').on('click', function (e) {
                    PageManager.to("btop.bui.TextAndTextPage", ziCanData1);
                });
                var _this = this;
                //操作tab切换标签
                this.tabInstance = WidgetManager.byId('pubZiChanBusinessPage');
                var titles = ["流动资金贷款", "项目贷款业务", "特色贷款业务", "贴现业务", "其他类贷款业务"];
                var option = {
                    titles: titles,
                    mountId: 'pubZiChanBusinessPage'
                };
                this.tabInstance.initData(option);
                var ziCanData = [
                    {
                        star: 5,
                        money: 1.168,
                        title: '建筑安装企业流动资金贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: '代扣国税个体工商户税款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '“中关村科信通”贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '“中关村科保通”贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '“中关村科抵通”贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: '“联东U谷快捷贷”贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '“联东U谷循环贷”贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '农工商公司流动资金“集合”授信',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '“药商通”国内保理业务',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    }
                ];
                //嵌套stackPage
                PageManager.embedTo('btop.bui.StackPage', 'dgZiCanBusinessStack', { title: '流动资金贷款', data: ziCanData });
                $(this.tabInstance.nodeTypeMap.get('tabItemNode0')).click(function () {
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('流动资金贷款', ziCanData);
                });
                var ziCanData1 = [
                    {
                        star: 3,
                        money: 1.167,
                        title: '固定资产贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '房地产开发贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '土地储备和一级开发贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '经营性物业抵押贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: '保障性住房项目贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '保障性农民回迁安置房建设贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '旧村改造贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '资产量化贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: '集体产业建设贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: '法人商业用房按揭贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode1')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgZiCanBusinessStack', { title: '项目贷款业务', data: ziCanData1 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('项目贷款业务', ziCanData1);
                });
                var ziCanData2 = [
                    {
                        star: 3,
                        money: 1.167,
                        title: '中关村科技园区贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '农民专业合作社贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '林权抵押贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '重点村改造贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: '棚户区改造贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '全国棉花交易市场网络融资贷',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '中技绿色通道业务（2015年新增）',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode2')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgZiCanBusinessStack', { title: '特色贷款业务', data: ziCanData2 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('特色贷款业务', ziCanData2);
                });
                var ziCanData3 = [
                    {
                        star: 3,
                        money: 1.167,
                        title: '银行承兑汇票贴现',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode3')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgZiCanBusinessStack', { title: '贴现业务', data: ziCanData3 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('贴现业务', ziCanData3);
                });
                var ziCanData4 = [
                    {
                        star: 3,
                        money: 1.167,
                        title: '银团贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '行内银团贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '买断型信贷资产转让',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '境内非银行金融机构同业借款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: '国内保理',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '应收租赁款保理',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '并购贷款',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode4')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgZiCanBusinessStack', { title: '其他类贷款业务', data: ziCanData4 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('其他类贷款业务', ziCanData4);
                });
                //返回产品中心页
                $(this.nodeTypeMap.get('openProductCenterMainPage')).click(function () {
                    PageManager.to("btop.bui.ProductCenterMainPage");
                });
            };
            PubZiChanBusinessPage.prototype.destroy = function () {
                var stackpage = WidgetManager.byId("btop.bui.StackPage");
                if (stackpage)
                    stackpage.destroy();
                _super.prototype.destroy.call(this);
            };
            return PubZiChanBusinessPage;
        })(Page);
        bui.PubZiChanBusinessPage = PubZiChanBusinessPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=PubZiChanBusinessPage.js.map