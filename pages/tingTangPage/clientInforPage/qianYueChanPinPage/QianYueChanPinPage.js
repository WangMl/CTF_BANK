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
        var Page = btop.hui.Page;
        var QianYueChanPinPage = (function (_super) {
            __extends(QianYueChanPinPage, _super);
            function QianYueChanPinPage() {
                _super.apply(this, arguments);
            }
            QianYueChanPinPage.prototype.initView = function () {
                var _this = this;
                //取消
                var CUST_ID = this.data.data;
                $(_this.nodeTypeMap.get('cancelBtnNode')).unbind('click').click(function (e) {
                    var pageAlert = bui.BGlobal.PageAlert.getInstance();
                    var event = new bui.BEvent(e, { data: "cancel" });
                    pageAlert.cancelBtn.trigger('click', event);
                    pageAlert.hide();
                });
                var aaa = _this.data.dataContent;
                if (!!aaa) {
                    if (_this.data.data1 == "1") {
                        document.getElementById('cunkuan').hidden = false;
                        document.getElementById('daikuan').hidden = true;
                        document.getElementById('jijin').hidden = true;
                        document.getElementById('guozhai').hidden = true;
                        document.getElementById('baoxian').hidden = true;
                        document.getElementById('xintuo').hidden = true;
                        document.getElementById('fenghuangbao').hidden = true;
                        document.getElementById('jichunjin').hidden = true;
                        $(".qianYueName").html("存款");
                        //存款产品详情
                        var template = "<tr >\n                                        <td>\u6D3B\u671F</td>\n                                        <td>" + aaa.ACTIV_BAL + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u4E09\u4E2A\u6708\u5B9A\u671F</td>\n                                        <td>" + aaa.FIX_M3_BAL + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u534A\u5E74\u5B9A\u671F</td>\n                                        <td>" + aaa.FIX_M6_BAL + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u4E00\u5E74\u5B9A\u671F</td>\n                                        <td>" + aaa.FIX_Y1_BAL + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u4E8C\u5E74\u5B9A\u671F</td>\n                                        <td>" + aaa.FIX_Y2_BAL + "</td>\n                                     </tr>\n                                    <tr >\n                                        <td>\u4E09\u5E74\u5B9A\u671F</td>\n                                        <td>" + aaa.FIX_Y3_BAL + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u4E94\u5E74\u5B9A\u671F</td>\n                                        <td>" + aaa.FIX_Y5_BAL + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u901A\u77E5\u5B58\u6B3E</td>\n                                        <td>" + aaa.ADVISE_DPST + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u5916\u5E01</td>\n                                        <td>" + aaa.FCURR_DPST_BAL + "</td>\n                                     </tr>                                                            ";
                        var templateJQuery = $(template);
                        templateJQuery.appendTo($('#cunkuanxiangqing'));
                    }
                    else if (_this.data.data1 == "2") {
                        $(".qianYueName").html("贷款");
                        document.getElementById('cunkuan').hidden = true;
                        document.getElementById('daikuan').hidden = false;
                        document.getElementById('jijin').hidden = true;
                        document.getElementById('guozhai').hidden = true;
                        document.getElementById('baoxian').hidden = true;
                        document.getElementById('xintuo').hidden = true;
                        document.getElementById('fenghuangbao').hidden = true;
                        document.getElementById('jichunjin').hidden = true;
                        //存款产品详情
                        var template = "<tr >\n                                        <td>\u519C\u6237\u4FDD\u8BC1\u8D37\u6B3E</td>\n                                        <td>" + aaa.GUARLOAN + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u4E2A\u4EBA\u623F\u4EA7\u62B5\u62BC\u7ECF\u8425\u8D37\u6B3E</td>\n                                        <td>" + aaa.MTGOPERLOAN + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u5FEB\u6377\u8D37</td>\n                                        <td>" + aaa.FASTLOAN + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u4E2A\u4EBA\u623F\u4EA7\u62B5\u62BC\u7ECF\u8425\u989D\u5EA6\u8D37\u6B3E</td>\n                                        <td>" + aaa.GUARLOAN + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u4E2A\u4EBA\u7EFC\u5408\u6D88\u8D39\u989D\u5EA6\u8D37\u6B3E</td>\n                                        <td>" + aaa.SYNCONSMLIMITLOAN + "</td>\n                                     </tr>\n                                    <tr >\n                                        <td>\u519C\u6237\u4FDD\u8BC1\u989D\u5EA6\u8D37\u6B3E</td>\n                                        <td>" + aaa.GUARLIMITLOAN + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u519C\u6237\u62B5\u62BC\u989D\u5EA6\u8D37\u6B3E</td>\n                                        <td>" + aaa.COLTRLLIMITLOAN + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u4E2A\u4EBA\u4E00\u624B\u6D88\u8D39\u6C7D\u8F66\u8D37\u6B3E</td>\n                                        <td>" + aaa.CONSMCARLOAN + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u4E2A\u4EBA\u4E00\u624B\u7ECF\u8425\u6C7D\u8F66\u8D37\u6B3E</td>\n                                        <td>" + aaa.OPERCARLOAN + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u4E2A\u4EBA\u4E8C\u624B\u7ECF\u8425\u6C7D\u8F66\u8D37\u6B3E</td>\n                                        <td>" + aaa.SECONDOPERCARLOAN + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u4E2A\u4EBA\u7EFC\u5408\u6D88\u8D39\u8D37\u6B3E</td>\n                                        <td>" + aaa.SYNCONSMLOAN + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u4E2A\u4EBA\u4FE1\u7528\u8D37\u6B3E</td>\n                                        <td>" + aaa.CRDTLOAN + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u519C\u6237\u8D28\u62BC\u8D37\u6B3E</td>\n                                        <td> " + aaa.IMPAWNLOAN + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u519C\u6237\u62B5\u62BC\u8D37\u6B3E</td>\n                                        <td>" + aaa.COLTRLLOAN + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u519C\u6237\u5C0F\u989D\u4FE1\u7528\u8D37\u6B3E</td>\n                                        <td>" + aaa.BEPSCRDTLOAN + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u6388\u4FE1\u989D\u5EA6\u7C7B\u4EA7\u54C1</td>\n                                        <td>" + aaa.CRDTLIMITPROD + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u519C\u6237\u8D28\u62BC\u989D\u5EA6\u8D37\u6B3E</td>\n                                        <td>" + aaa.IMPAWNLIMITLOAN + "</td>\n                                     </tr>";
                        var templateJQuery = $(template);
                        templateJQuery.appendTo($('#daikuanxiangqing'));
                    }
                    else if (_this.data.data1 == "3") {
                        $(".qianYueName").html("基金");
                        document.getElementById('cunkuan').hidden = true;
                        document.getElementById('daikuan').hidden = true;
                        document.getElementById('jijin').hidden = false;
                        document.getElementById('guozhai').hidden = true;
                        document.getElementById('baoxian').hidden = true;
                        document.getElementById('xintuo').hidden = true;
                        document.getElementById('fenghuangbao').hidden = true;
                        document.getElementById('jichunjin').hidden = true;
                        var reqMsg = new bui.ReqMsg();
                        reqMsg.body = {
                            CUST_ID: CUST_ID
                        };
                        bui.HttpUtils.bipHttp('cust_fund', reqMsg).then(function (data) {
                            var type = { "01": "股票", "02": "债券", "03": "混合", "04": "贷币" };
                            if (data.header.rc == "0000") {
                                var custFund = data.body.FUND;
                                for (var i in custFund) {
                                    custFund[i].FUND_TP = type[custFund[i].FUND_TP];
                                }
                                _this.executeVue(custFund);
                            }
                            else {
                                bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                            }
                        }, function () {
                            bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                        });
                    }
                    else if (_this.data.data1 == "4") {
                        $(".qianYueName").html("国债");
                        document.getElementById('cunkuan').hidden = true;
                        document.getElementById('daikuan').hidden = true;
                        document.getElementById('jijin').hidden = true;
                        document.getElementById('guozhai').hidden = false;
                        document.getElementById('baoxian').hidden = true;
                        document.getElementById('xintuo').hidden = true;
                        document.getElementById('fenghuangbao').hidden = true;
                        document.getElementById('jichunjin').hidden = true;
                        var reqMsg = new bui.ReqMsg();
                        reqMsg.body = {
                            CUST_ID: CUST_ID
                        };
                        bui.HttpUtils.bipHttp('cust_nationalDebt', reqMsg).then(function (data) {
                            if (data.header.rc == "0000") {
                                var custFund = data.body.NATIONALDEBT;
                                _this.guozhaiVue(custFund);
                            }
                            else {
                                bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                            }
                        }, function () {
                            bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                        });
                    }
                    else if (_this.data.data1 == "6") {
                        $(".qianYueName").html("保险");
                        document.getElementById('cunkuan').hidden = true;
                        document.getElementById('daikuan').hidden = true;
                        document.getElementById('jijin').hidden = true;
                        document.getElementById('guozhai').hidden = true;
                        document.getElementById('baoxian').hidden = false;
                        document.getElementById('xintuo').hidden = true;
                        document.getElementById('fenghuangbao').hidden = true;
                        document.getElementById('jichunjin').hidden = true;
                        var reqMsg = new bui.ReqMsg();
                        reqMsg.body = {
                            CUST_ID: CUST_ID
                        };
                        bui.HttpUtils.bipHttp('cust_insurance', reqMsg).then(function (data) {
                            var type = { "0": "趸交", "1": "期交" };
                            if (data.header.rc == "0000") {
                                var custFund = data.body.INSURANCE;
                                for (var i in custFund) {
                                    custFund[i].PAY_MODE = type[custFund[i].PAY_MODE];
                                }
                                _this.baoxianVue(custFund);
                            }
                            else {
                                bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                            }
                        }, function () {
                            bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                        });
                    }
                    else if (_this.data.data1 == "7") {
                        $(".qianYueName").html("积存金");
                        document.getElementById('cunkuan').hidden = true;
                        document.getElementById('daikuan').hidden = true;
                        document.getElementById('jijin').hidden = true;
                        document.getElementById('guozhai').hidden = true;
                        document.getElementById('baoxian').hidden = true;
                        document.getElementById('jichunjin').hidden = false;
                        document.getElementById('xintuo').hidden = true;
                        document.getElementById('fenghuangbao').hidden = true;
                        //积存金产品详情
                        var template = "<tr >\n                                        <td>\u4EF7\u683C</td>\n                                        <td>" + aaa.PRC + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u91CD\u91CF</td>\n                                        <td>" + aaa.WGT + "</td>\n                                     </tr>\n                                     <tr >\n                                        <td>\u79EF\u5B58\u91D1\u4F59\u989D</td>\n                                        <td>" + aaa.ACCMLTGOLD_BAL + "</td>\n                                     </tr>";
                        var templateJQuery = $(template);
                        templateJQuery.appendTo($('#jicunjinxiangqing'));
                    }
                    else if (_this.data.data1 == "8") {
                        $(".qianYueName").html("信托");
                        document.getElementById('cunkuan').hidden = true;
                        document.getElementById('daikuan').hidden = true;
                        document.getElementById('jijin').hidden = true;
                        document.getElementById('guozhai').hidden = true;
                        document.getElementById('baoxian').hidden = true;
                        document.getElementById('jichunjin').hidden = true;
                        document.getElementById('xintuo').hidden = false;
                        document.getElementById('fenghuangbao').hidden = true;
                        var reqMsg = new bui.ReqMsg();
                        reqMsg.body = {
                            CUST_ID: CUST_ID
                        };
                        bui.HttpUtils.bipHttp('cust_trust', reqMsg).then(function (data) {
                            if (data.header.rc == "0000") {
                                var custFund = data.body.TRUST;
                                _this.xintuoVue(custFund);
                            }
                            else {
                                bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                            }
                        }, function () {
                            bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                        });
                    }
                    else if (_this.data.data1 == "9") {
                        $(".qianYueName").html("凤凰宝");
                        document.getElementById('cunkuan').hidden = true;
                        document.getElementById('daikuan').hidden = true;
                        document.getElementById('jijin').hidden = true;
                        document.getElementById('guozhai').hidden = true;
                        document.getElementById('baoxian').hidden = true;
                        document.getElementById('jichunjin').hidden = true;
                        document.getElementById('xintuo').hidden = true;
                        document.getElementById('fenghuangbao').hidden = false;
                        var reqMsg = new bui.ReqMsg();
                        reqMsg.body = {
                            CUST_ID: CUST_ID
                        };
                        bui.HttpUtils.bipHttp('cust_phoenixTreasure', reqMsg).then(function (data) {
                            if (data.header.rc == "0000") {
                                var custFund = data.body.PHOENIXTREASURE;
                                _this.fenghuangVue(custFund);
                            }
                            else {
                                bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                            }
                        }, function () {
                            bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                        });
                    }
                    else {
                        var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '暂无此信息' });
                        buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                            console.info(e);
                        });
                        buiAlert.setTheme(bui.AlertTheme.BLUE);
                    }
                }
                else {
                    bui.BGlobal.Alert.show({ title: '提示', content: '无签约数据' });
                }
            };
            QianYueChanPinPage.prototype.jicunjinVue = function (data) {
                Vue.component('condition', {
                    template: '#jicunjin-condition-temp',
                    props: ['filterText']
                });
                Vue.component('list', {
                    template: '#jicunjin-list-temp',
                    props: ['items']
                });
                Vue.component('filter-list', {
                    template: '#jicunjin-filter-list-temp',
                    data: function () {
                        return {
                            filterText: '',
                            items: data
                        };
                    },
                    computed: {
                        filteredItems: function () {
                            return this.$data.items.filter(function (item) {
                                return item['PRC'].indexOf(this.$data.filterText) != -1
                                    || item['WGT'].indexOf(this.$data.filterText) != -1
                                    || item['ACCMLTGOLD_BAL'].indexOf(this.$data.filterText) != -1;
                            }.bind(this));
                        }
                    }
                });
                new Vue({
                    el: '#jicunjinapp'
                });
            };
            QianYueChanPinPage.prototype.cunKuanVue = function (data) {
                Vue.component('condition', {
                    template: '#cunkuan-condition-temp',
                    props: ['filterText']
                });
                Vue.component('list', {
                    template: '#cunkuan-list-temp',
                    props: ['items']
                });
                Vue.component('filter-list', {
                    template: '#cunkuan-filter-list-temp',
                    data: function () {
                        return {
                            filterText: '',
                            items: data
                        };
                    },
                    computed: {
                        filteredItems: function () {
                            return this.$data.items.filter(function (item) {
                                return item['ACTIV_BAL'].indexOf(this.$data.filterText) != -1
                                    || item['FIX_M3_BAL'].indexOf(this.$data.filterText) != -1
                                    || item['FIX_M6_BAL'].indexOf(this.$data.filterText) != -1
                                    || item['FIX_Y1_BAL'].indexOf(this.$data.filterText) != -1
                                    || item['FIX_Y2_BAL'].indexOf(this.$data.filterText) != -1
                                    || item['FIX_Y3_BAL'].indexOf(this.$data.filterText) != -1
                                    || item['FIX_Y5_BAL'].indexOf(this.$data.filterText) != -1
                                    || item['ADVISE_DPST'].indexOf(this.$data.filterText) != -1
                                    || item['FCURR_DPST_BAL'].indexOf(this.$data.filterText) != -1;
                            }.bind(this));
                        }
                    }
                });
                new Vue({
                    el: '#cunkuanapp'
                });
            };
            QianYueChanPinPage.prototype.xintuoVue = function (data) {
                Vue.component('condition', {
                    template: '#xintuo-condition-temp',
                    props: ['filterText']
                });
                Vue.component('list', {
                    template: '#xintuo-list-temp',
                    props: ['items']
                });
                Vue.component('filter-list', {
                    template: '#xintuo-filter-list-temp',
                    data: function () {
                        return {
                            filterText: '',
                            items: data
                        };
                    },
                    computed: {
                        filteredItems: function () {
                            return this.$data.items.filter(function (item) {
                                return item['PRODUCTNAME'].indexOf(this.$data.filterText) != -1
                                    || item['TRUST_DATE'].indexOf(this.$data.filterText) != -1
                                    || item['TERM'].indexOf(this.$data.filterText) != -1
                                    || item['BUYBAL'].indexOf(this.$data.filterText) != -1
                                    || item['INCOMERATE'].indexOf(this.$data.filterText) != -1;
                            }.bind(this));
                        }
                    }
                });
                new Vue({
                    el: '#appxintuo'
                });
            };
            QianYueChanPinPage.prototype.fenghuangVue = function (data) {
                Vue.component('condition', {
                    template: '#fenghuang-condition-temp',
                    props: ['filterText']
                });
                Vue.component('list', {
                    template: '#fenghuang-list-temp',
                    props: ['items']
                });
                Vue.component('filter-list', {
                    template: '#fenghuang-filter-list-temp',
                    data: function () {
                        return {
                            filterText: '',
                            items: data
                        };
                    },
                    computed: {
                        filteredItems: function () {
                            return this.$data.items.filter(function (item) {
                                return item['FUND_SUM_SHARE'].indexOf(this.$data.filterText) != -1
                                    || item['FUND_SUM_AMT'].indexOf(this.$data.filterText) != -1
                                    || item['FUND_CD'].indexOf(this.$data.filterText) != -1;
                            }.bind(this));
                        }
                    }
                });
                new Vue({
                    el: '#appfenghuang'
                });
            };
            QianYueChanPinPage.prototype.baoxianVue = function (data) {
                Vue.component('condition', {
                    template: '#baoxian-condition-temp',
                    props: ['filterText']
                });
                Vue.component('list', {
                    template: '#baoxian-list-temp',
                    props: ['items']
                });
                Vue.component('filter-list', {
                    template: '#baoxian-filter-list-temp',
                    data: function () {
                        return {
                            filterText: '',
                            items: data
                        };
                    },
                    computed: {
                        filteredItems: function () {
                            return this.$data.items.filter(function (item) {
                                return item['INSURE_PROD_NAME'].indexOf(this.$data.filterText) != -1
                                    || item['INSURE_BAL'].indexOf(this.$data.filterText) != -1
                                    || item['PAY_MODE'].indexOf(this.$data.filterText) != -1
                                    || item['INSURE_TERM'].indexOf(this.$data.filterText) != -1
                                    || item['INSURANCE_DT'].indexOf(this.$data.filterText) != -1;
                            }.bind(this));
                        }
                    }
                });
                new Vue({
                    el: '#appbaoxian'
                });
            };
            QianYueChanPinPage.prototype.guozhaiVue = function (data) {
                Vue.component('condition', {
                    template: '#guozhai-condition-temp',
                    props: ['filterText']
                });
                Vue.component('list', {
                    template: '#guozhai-list-temp',
                    props: ['items']
                });
                Vue.component('filter-list', {
                    template: '#guozhai-filter-list-temp',
                    data: function () {
                        return {
                            filterText: '',
                            items: data
                        };
                    },
                    computed: {
                        filteredItems: function () {
                            return this.$data.items.filter(function (item) {
                                return item['NATION_DEBT_NAME'].indexOf(this.$data.filterText) != -1
                                    || item['SELL_RATE'].indexOf(this.$data.filterText) != -1
                                    || item['BUY_DT'].indexOf(this.$data.filterText) != -1
                                    || item['NATION_DEBT_TREM'].indexOf(this.$data.filterText) != -1
                                    || item['BUY_AMT'].indexOf(this.$data.filterText) != -1;
                            }.bind(this));
                        }
                    }
                });
                new Vue({
                    el: '#appguozhai'
                });
            };
            QianYueChanPinPage.prototype.executeVue = function (data) {
                Vue.component('condition', {
                    template: '#jinjin-condition-temp',
                    props: ['filterText']
                });
                Vue.component('list', {
                    template: '#jinjin-list-temp',
                    props: ['items']
                });
                Vue.component('filter-list', {
                    template: '#jinjin-filter-list-temp',
                    data: function () {
                        return {
                            filterText: '',
                            items: data
                        };
                    },
                    computed: {
                        filteredItems: function () {
                            return this.$data.items.filter(function (item) {
                                return item['FUND_TP'].indexOf(this.$data.filterText) != -1
                                    || item['FUND_CD'].indexOf(this.$data.filterText) != -1
                                    || item['FUND_SHARE'].indexOf(this.$data.filterText) != -1
                                    || item['UNIT_NET_VAL'].indexOf(this.$data.filterText) != -1
                                    || item['FUND_BAL'].indexOf(this.$data.filterText) != -1;
                            }.bind(this));
                        }
                    }
                });
                new Vue({
                    el: '#app'
                });
            };
            return QianYueChanPinPage;
        })(Page);
        bui.QianYueChanPinPage = QianYueChanPinPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=QianYueChanPinPage.js.map