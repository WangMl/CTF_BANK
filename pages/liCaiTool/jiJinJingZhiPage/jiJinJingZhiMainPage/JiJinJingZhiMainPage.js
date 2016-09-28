/**
 * Created by Administrator on 2016/5/3.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../../scripts/bns/btop.bui.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var PageManager = btop.hui.PageManager;
        var Global = btop.hui.Global;
        var JiJinJingZhiMainPage = (function (_super) {
            __extends(JiJinJingZhiMainPage, _super);
            function JiJinJingZhiMainPage() {
                _super.apply(this, arguments);
            }
            JiJinJingZhiMainPage.prototype.initView = function () {
                //var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$) | (^(0){1}$) | (^[0-9]\.[0-9]([0-9])?$)/;
                //var money = 0;
                //if ( reg.test(money)){
                //    alert("金額校驗正確")
                //}else {
                //    alert("金額校驗錯誤")
                //}
                Global.LoadingToast.show("正在玩命加载中...");
                var _this = this;
                var reqMsg = new bui.ReqMsg();
                reqMsg.body =
                    {};
                bui.HttpUtils.bipHttp('tool_fund', reqMsg).then(function (data) {
                    if (data.header.rc == "0000") {
                        _this.pageShow();
                        //let fundstate={"0":"可申购赎回","1":"发行","4":"停止申购赎回","5":"停止申购","6":"停止赎回","8":"基金终止","9":"基金封闭"};
                        //let fundstp={"01":"股票型","02":"债券型","03":"混合型","04":"货币型"};
                        //let fundconstate={"0":"可转入,可转出","1":"只可转入","2":"只可转出","3":"不可转换"};
                        //let fundabonus={"0":"红利转投","1":"现金分红"};
                        //let fundisdecide={"0":"可定投","1":"不可定投"};
                        //let data1=data.body.FundList;
                        //for(let i in data1) {
                        //    data1[i].FUND_STATE = fundstate[data1[i].FUND_STATE] ;
                        //    data1[i].FUND_TP = fundstp[data1[i].FUND_TP];
                        //    data1[i].FUND_CON_STATE = fundconstate[data1[i].FUND_CON_STATE];
                        //    data1[i].FUND_ABONUS = fundabonus[data1[i].FUND_ABONUS];
                        //    data1[i].FUND_ISDECIDE = fundisdecide[data1[i].FUND_ISDECIDE];
                        //}
                        //_this.executeVue(data1);
                        _this.executeVue(data.body.FundList);
                    }
                    else {
                        bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                    }
                }, function () {
                    bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                });
                //1. 返回理财工具页面，并保持现场数据
                $(this.nodeTypeMap.get('openLiCaiToolMainPage')).click(function () {
                    var currentPage = 1;
                    PageManager.to('btop.bui.LiCaiToolMainPage', { currentPage: currentPage });
                });
            };
            JiJinJingZhiMainPage.prototype.executeVue = function (data) {
                Vue.component('condition', {
                    template: '#jiJingJingZhi-condition-temp',
                    props: ['filterText']
                });
                Vue.component('list', {
                    template: '#jiJingJingZhi-list-temp',
                    props: ['items']
                });
                Vue.component('filter-list', {
                    template: '#jiJingJingZhi-filter-list-temp',
                    data: function () {
                        return {
                            filterText: '',
                            items: data
                        };
                    },
                    computed: {
                        filteredItems: function () {
                            return this.$data.items.filter(function (item) {
                                return item['FUND_CD'] ? item['FUND_CD'].indexOf(this.$data.filterText) != -1 : false
                                    || item['FUND_NAME'].indexOf(this.$data.filterText) != -1
                                    || item['FUND_STATE'].indexOf(this.$data.filterText) != -1
                                    || item['UNIT_NET_VAL'].indexOf(this.$data.filterText) != -1
                                    || item['FUND_COMPANY_CODE'].indexOf(this.$data.filterText) != -1
                                    || item['FUND_COMPANY_NAME_A'].indexOf(this.$data.filterText) != -1
                                    || item['FUND_TP'].indexOf(this.$data.filterText) != -1
                                    || item['FUND_CON_STATE'].indexOf(this.$data.filterText) != -1
                                    || item['FUND_ABONUS'].indexOf(this.$data.filterText) != -1
                                    || item['FUND_ISDECIDE'].indexOf(this.$data.filterText) != -1;
                            }.bind(this));
                        }
                    }
                });
                new Vue({
                    el: '#app'
                });
            };
            JiJinJingZhiMainPage.prototype.pageShow = function () {
                this.visible = true;
                Global.LoadingToast.hide();
            };
            return JiJinJingZhiMainPage;
        })(btop.hui.Page);
        bui.JiJinJingZhiMainPage = JiJinJingZhiMainPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=JiJinJingZhiMainPage.js.map