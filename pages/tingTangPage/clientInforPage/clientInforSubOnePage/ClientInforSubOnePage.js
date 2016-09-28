var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Administrator on 2016/4/28.
 */
///<reference path="../../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../../scripts/bns/btop.bui.d.ts"/>
///<reference path="../../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../../scripts/libs/echarts.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var PageManager = btop.hui.PageManager;
        var ClientInforSubOnePage = (function (_super) {
            __extends(ClientInforSubOnePage, _super);
            function ClientInforSubOnePage() {
                _super.apply(this, arguments);
            }
            ClientInforSubOnePage.prototype.initView = function () {
                var _this = this;
                //返回主页
                $(this.nodeTypeMap.get('openTingTangMainPage')).click(function () {
                    PageManager.to('btop.bui.TingTangMainPage');
                });
                //进入购买力分析
                $(this.nodeTypeMap.get('openClientInforSubTwoPage')).click(function () {
                    PageManager.to('btop.bui.ClientInforSubTwoPage');
                });
                //进入推荐产品
                $(this.nodeTypeMap.get('openTuiJianChanPingMainPage')).click(function () {
                    PageManager.to('btop.bui.TuiJianChanPingMainPage');
                });
                var CUST_ID = this.data["CUST_ID"].CUST_ID;
                var reqMsg = new bui.ReqMsg();
                reqMsg.body =
                    {
                        CUST_ID: CUST_ID
                    };
                bui.HttpUtils.bipHttp("cust_financialAssets", reqMsg).then(function (data) {
                    if (data.header.rc == "0000") {
                        var Assets = data.body;
                        //本月  管理资产饼图当日余额
                        parseFloat(Assets.DEPOSIT_BAL);
                        var DEPOSIT_BAL = parseFloat(Assets.DEPOSIT_BAL); //存款余额
                        var FUND_BAL = parseFloat(Assets.FUND_BAL); //基金余额
                        var NATLDEBT_BAL = parseFloat(Assets.DEPOSIT_BAL); //国债余额
                        var MANAGERMONEY_BAL = parseFloat(Assets.DEPOSIT_BAL); //理财产品余额
                        var PHOENIX_BAL = parseFloat(Assets.DEPOSIT_BAL); //凤凰E账户（凤凰宝）余额
                        var TRUSTPRD_BAL = parseFloat(Assets.DEPOSIT_BAL); //信托产品余额
                        var INSURE_BAL = parseFloat(Assets.DEPOSIT_BAL); //保险余额
                        var PAPERGOLD_BAL = parseFloat(Assets.DEPOSIT_BAL); //纸黄金余额
                        var total1 = DEPOSIT_BAL + FUND_BAL + NATLDEBT_BAL
                            + MANAGERMONEY_BAL + PHOENIX_BAL + TRUSTPRD_BAL + INSURE_BAL + PAPERGOLD_BAL;
                        console.info(total1);
                        // // 本月月日均
                        var option3 = {
                            color: ['#fd5a5d', '#fda93f', '#c9edff', 'pink', '#1dc2b2', 'purple', '#982645', '#c866c5'],
                            calculable: true,
                            series: [
                                {
                                    name: '卡队列',
                                    type: 'pie',
                                    radius: '60px',
                                    center: ['50%', '90px'],
                                    data: [
                                        { value: DEPOSIT_BAL / total1, name: '储蓄存款', id: 'chu-xu' },
                                        { value: FUND_BAL / total1, name: '基金', id: 'ji-jin' },
                                        { value: NATLDEBT_BAL / total1, name: '国债', id: 'guo-zhai' },
                                        { value: MANAGERMONEY_BAL / total1, name: '理财产品', id: 'li-cai' },
                                        { value: PHOENIX_BAL / total1, name: '保险', id: 'bao-xian' },
                                        { value: TRUSTPRD_BAL / total1, name: '凤凰E账户', id: 'feng-huang' },
                                        { value: INSURE_BAL / total1, name: '信托产品', id: 'xin-tuo' },
                                        { value: PAPERGOLD_BAL / total1, name: '纸黄金', id: 'zhi-huang-jin' },
                                    ],
                                    itemStyle: {
                                        normal: {
                                            label: {
                                                show: true,
                                                formatter: '{b}{d}%'
                                            },
                                            labelLine: { show: true }
                                        }
                                    }
                                }
                            ]
                        };
                        var businessTypePie = document.getElementById('cardTypePie2'); //取html的 id
                        var myChart3 = echarts.init(businessTypePie);
                        myChart3.setOption(option3);
                        //点击事件编写方法
                        //myChart3.on('click', function (p) {
                        //    var data = p.data.id;
                        //    var page = "btop.bui." + data;
                        //    PageManager.to(page);
                        //});
                        //上月  管理资产饼图上月月日均
                        var DEPOSIT_LAVG_BAL = parseFloat(Assets.DEPOSIT_BAL);
                        var FUND_LAVG_BAL = parseFloat(Assets.DEPOSIT_BAL);
                        var NATLDEBT_LAVG_BAL = parseFloat(Assets.DEPOSIT_BAL);
                        var MANAGERMONEY_LAVG_BAL = parseFloat(Assets.DEPOSIT_BAL);
                        var PHOENIX_LAVG_BAL = parseFloat(Assets.DEPOSIT_BAL);
                        var TRUSTPRD_LAVG_BAL = parseFloat(Assets.DEPOSIT_BAL);
                        var INSURE_LAVG_BAL = parseFloat(Assets.DEPOSIT_BAL);
                        var PAPERGOLD_LAVG_BAL = parseFloat(Assets.DEPOSIT_BAL);
                        var total2 = DEPOSIT_LAVG_BAL + FUND_LAVG_BAL + NATLDEBT_LAVG_BAL + MANAGERMONEY_LAVG_BAL + PHOENIX_LAVG_BAL + TRUSTPRD_LAVG_BAL + INSURE_LAVG_BAL + PAPERGOLD_LAVG_BAL;
                        console.info(total2);
                        // 上月月日均
                        var option = {
                            color: ['#fd5a5d', '#fda93f', '#c9edff', 'pink', '#1dc2b2', 'purple', '#982645', '#c866c5'],
                            calculable: true,
                            series: [
                                {
                                    name: '卡队列',
                                    type: 'pie',
                                    radius: '60px',
                                    center: ['50%', '110px'],
                                    data: [
                                        { value: DEPOSIT_LAVG_BAL / total2, name: '储蓄存款', id: 'chu-xu' },
                                        { value: FUND_LAVG_BAL / total2, name: '基金', id: 'ji-jin' },
                                        { value: NATLDEBT_LAVG_BAL / total2, name: '国债', id: 'guo-zhai' },
                                        { value: MANAGERMONEY_LAVG_BAL / total2, name: '理财产品', id: 'li-cai' },
                                        { value: PHOENIX_LAVG_BAL / total2, name: '保险', id: 'bao-xian' },
                                        { value: TRUSTPRD_LAVG_BAL / total2, name: '凤凰E账户', id: 'feng-huang' },
                                        { value: INSURE_LAVG_BAL / total2, name: '信托产品', id: 'xin-tuo' },
                                        { value: PAPERGOLD_LAVG_BAL / total2, name: '纸黄金', id: 'zhi-huang-jin' },
                                    ],
                                    itemStyle: {
                                        normal: {
                                            label: {
                                                show: true,
                                                formatter: '{b}{d}%'
                                            },
                                            labelLine: { show: true }
                                        }
                                    }
                                }
                            ]
                        };
                        var cardTypePie1 = document.getElementById('cardTypePie1');
                        var myChart1 = echarts.init(cardTypePie1);
                        myChart1.setOption(option);
                        //贷款饼图
                        var GUARLOAN = parseFloat(Assets.DEPOSIT_BAL); //农户保证贷款
                        var MTGOPERLOAN = parseFloat(Assets.DEPOSIT_BAL); //个人房产抵押经营贷款
                        var FASTLOAN = parseFloat(Assets.DEPOSIT_BAL); //快捷贷
                        var MTGOPERLIMITLOAN = parseFloat(Assets.DEPOSIT_BAL); //个人房产抵押经营额度贷款
                        var SYNCONSMLIMITLOAN = parseFloat(Assets.DEPOSIT_BAL); //个人综合消费额度贷款
                        var GUARLIMITLOAN = parseFloat(Assets.DEPOSIT_BAL); //农户保证额度贷款
                        var COLTRLLIMITLOAN = parseFloat(Assets.DEPOSIT_BAL); //农户抵押额度贷款
                        var CONSMCARLOAN = parseFloat(Assets.DEPOSIT_BAL); //个人一手消费汽车贷款
                        var OPERCARLOAN = parseFloat(Assets.DEPOSIT_BAL); //个人一手经营汽车贷款
                        var SECONDOPERCARLOAN = parseFloat(Assets.DEPOSIT_BAL); //个人二手经营汽车贷款
                        var SYNCONSMLOAN = parseFloat(Assets.DEPOSIT_BAL); //个人综合消费贷款
                        var CRDTLOAN = parseFloat(Assets.DEPOSIT_BAL); //个人信用贷款
                        var IMPAWNLOAN = parseFloat(Assets.DEPOSIT_BAL); //农户质押贷款
                        var COLTRLLOAN = parseFloat(Assets.DEPOSIT_BAL); //农户抵押贷款
                        var BEPSCRDTLOAN = parseFloat(Assets.DEPOSIT_BAL); //农户小额信用贷款
                        var CRDTLIMITPROD = parseFloat(Assets.DEPOSIT_BAL); //授信额度类产品
                        var IMPAWNLIMITLOAN = parseFloat(Assets.DEPOSIT_BAL); //农户质押额度贷款
                        var total3 = GUARLOAN + MTGOPERLOAN + FASTLOAN
                            + MTGOPERLIMITLOAN + SYNCONSMLIMITLOAN + GUARLIMITLOAN +
                            COLTRLLIMITLOAN + CONSMCARLOAN + OPERCARLOAN + SECONDOPERCARLOAN
                            + SYNCONSMLOAN + CRDTLOAN + IMPAWNLOAN + COLTRLLOAN +
                            BEPSCRDTLOAN + CRDTLIMITPROD + IMPAWNLIMITLOAN;
                        console.info(total3);
                        //贷款
                        var option2 = {
                            color: ['#fd5a5d', '#fda93f', '#c9edff', 'pink', '#1dc2b2', 'purple', '#982645', '#c866c5', 'red', 'green', '#3dc2b2', '#5dc2b2', '#fda96f', '#fda63f', '#c1edff', '#c9edef', '#c4edff', '#b9edff'],
                            calculable: true,
                            series: [
                                {
                                    name: '卡队列',
                                    type: 'pie',
                                    radius: '70px',
                                    center: ['50%', '120px'],
                                    data: [
                                        { value: GUARLOAN / total3, name: '农户保证', id: 'nong-hu-bao-dai' },
                                        { value: MTGOPERLOAN / total3, name: '个人房产抵押经营', id: 'ge-ren-fang-chan' },
                                        { value: FASTLOAN / total3, name: '快捷贷', id: 'kuai-jie-dai' },
                                        { value: MTGOPERLIMITLOAN / total3, name: '个人房产抵押经营额度', id: 'ge-ren-fang-chan' },
                                        { value: SYNCONSMLIMITLOAN / total3, name: '个人综合消费额度', id: 'ge-ren-zong-he' },
                                        { value: GUARLIMITLOAN / total3, name: '农户保证额度', id: 'nong-hu-bao-e' },
                                        { value: COLTRLLIMITLOAN / total3, name: '农户抵押额度', id: 'nong-hu-di-ya-e-du' },
                                        { value: CONSMCARLOAN / total3, name: '个人一手消费汽车', id: 'ge-ren-yi-shou-xiao-fei' },
                                        { value: OPERCARLOAN / total3, name: '个人一手经营汽车', id: 'ge-ren-yi-shou-jing-ying' },
                                        { value: SECONDOPERCARLOAN / total3, name: '个人二手经营汽车', id: 'ge-ren-e-shou-jing-ying' },
                                        { value: SYNCONSMLOAN / total3, name: '个人综合消费', id: 'ge-ren-zong-he-xiao-fei' },
                                        { value: CRDTLOAN / total3, name: '个人信用', id: 'ge-ren-xin-yong' },
                                        { value: IMPAWNLOAN / total3, name: '农户质押', id: 'nong-hu-zhi-ya' },
                                        { value: COLTRLLOAN / total3, name: '农户抵押', id: 'nong-hu-di-ya' },
                                        { value: BEPSCRDTLOAN / total3, name: '农户小额信用', id: 'nong-hu-xiao-e' },
                                        { value: CRDTLIMITPROD / total3, name: '授信额度类产品', id: 'shou-xin-e-du' },
                                        { value: IMPAWNLIMITLOAN / total3, name: '农户质押额度', id: 'nong-hu-zhi-ya-e' },
                                    ],
                                    itemStyle: {
                                        normal: {
                                            label: {
                                                show: true,
                                                formatter: '{d}%'
                                            },
                                            labelLine: { show: true }
                                        }
                                    }
                                }
                            ]
                        };
                        var cardTypePie2 = document.getElementById('businessTypePie');
                        var myChart2 = echarts.init(cardTypePie2);
                        myChart2.setOption(option2);
                    }
                    else {
                        bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                    }
                }, function () {
                    bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                });
            };
            return ClientInforSubOnePage;
        })(Page);
        bui.ClientInforSubOnePage = ClientInforSubOnePage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ClientInforSubOnePage.js.map