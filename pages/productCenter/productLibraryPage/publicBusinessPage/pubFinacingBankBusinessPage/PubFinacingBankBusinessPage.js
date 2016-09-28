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
        var PubFinacingBankBusinessPage = (function (_super) {
            __extends(PubFinacingBankBusinessPage, _super);
            function PubFinacingBankBusinessPage() {
                _super.apply(this, arguments);
            }
            PubFinacingBankBusinessPage.prototype.initView = function () {
                var _this = this;
                //跳详情
                $('#dgTouZiYinHangBusinessStack').on('click', function (e) {
                    PageManager.to("btop.bui.TextAndTextPage", ziCanData1);
                });
                //操作tab切换标签
                this.tabInstance = WidgetManager.byId('pubFinacingBankBusinessPage');
                var titles = ["结构化融资业务", "非金融企业债务"];
                var option = {
                    titles: titles,
                    mountId: 'pubFinacingBankBusinessPage'
                };
                this.tabInstance.initData(option);
                var ziCanData = [
                    {
                        star: 3,
                        money: 1.167,
                        title: '存放同业',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '同业存放',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                ];
                //嵌套stackPage
                PageManager.embedTo('btop.bui.StackPage', 'dgTouZiYinHangBusinessStack', { title: '结构化融资业务', data: ziCanData });
                $(this.tabInstance.nodeTypeMap.get('tabItemNode0')).click(function () {
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('结构化融资业务', ziCanData);
                });
                var ziCanData1 = [
                    {
                        star: 3,
                        money: 1.167,
                        title: '超短期融资券（SCP）',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '短期融资券（CP）',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '中期票据（MTN）',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '非公开定向债务融资工具（PPN）',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                    {
                        star: 3,
                        money: 1.167,
                        title: '中小企业集合票据（SMECN）',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: true
                    },
                    {
                        star: 5,
                        money: 1.168,
                        title: '项目收益票据(PRN)',
                        number: 'K14527',
                        productType: '2016.5.23',
                        isAttension: false
                    },
                ];
                $(this.tabInstance.nodeTypeMap.get('tabItemNode1')).click(function () {
                    PageManager.embedTo('btop.bui.StackPage', 'dgTouZiYinHangBusinessStack', { title: '非金融企业债务', data: ziCanData1 });
                    var stackPage = WidgetManager.byId('btop.bui.StackPage');
                    stackPage.show('非金融企业债务', ziCanData1);
                });
                //返回产品中心页
                $(this.nodeTypeMap.get('openProductCenterMainPage')).click(function () {
                    PageManager.to("btop.bui.ProductCenterMainPage");
                });
            };
            PubFinacingBankBusinessPage.prototype.destroy = function () {
                var stackpage = WidgetManager.byId("btop.bui.StackPage");
                if (stackpage)
                    stackpage.destroy();
                _super.prototype.destroy.call(this);
            };
            return PubFinacingBankBusinessPage;
        })(Page);
        bui.PubFinacingBankBusinessPage = PubFinacingBankBusinessPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=PubFinacingBankBusinessPage.js.map