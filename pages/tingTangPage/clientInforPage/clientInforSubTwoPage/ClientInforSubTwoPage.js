var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Administrator on 2016/4/29.
 */
///<reference path="../../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../../scripts/bns/btop.bui.d.ts"/>
///<reference path="../../../../scripts/libs/jQuery.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var ClientInforSubTwoPage = (function (_super) {
            __extends(ClientInforSubTwoPage, _super);
            function ClientInforSubTwoPage() {
                _super.apply(this, arguments);
            }
            ClientInforSubTwoPage.prototype.initView = function () {
                var _this = this;
                //销售线索创建页
                //客户购买力信息列表
                var CUST_ID = this.data["CUST_ID"].CUST_ID;
                var reqMsg = new bui.ReqMsg();
                reqMsg.body = {
                    CUST_ID: CUST_ID
                };
                bui.HttpUtils.bipHttp('cust_purchasingPower', reqMsg).then(function (data) {
                    if (data.header.rc == "0000") {
                        _this.executeVue(data.body.PURCHASINGPOWER);
                    }
                    else {
                        bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                    }
                }, function (data) {
                    bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                });
            };
            ClientInforSubTwoPage.prototype.executeVue = function (data) {
                Vue.component('condition', {
                    template: '#goumaili-condition-temp',
                    props: ['filterText']
                });
                Vue.component('list', {
                    template: '#goumaili-list-temp',
                    props: ['items']
                });
                Vue.component('filter-list', {
                    template: '#goumaili-filter-list-temp',
                    data: function () {
                        return {
                            filterText: '',
                            items: data
                        };
                    },
                    computed: {
                        filteredItems: function () {
                            return this.$data.items.filter(function (item) {
                                return item['PRODUCTCODE'].indexOf(this.$data.filterText) != -1
                                    || item['PRODUCTNAME'].indexOf(this.$data.filterText) != -1
                                    || item['ENDDATA'].indexOf(this.$data.filterText) != -1
                                    || item['ENDMONEY'].indexOf(this.$data.filterText) != -1;
                            }.bind(this));
                        }
                    }
                });
                new Vue({
                    el: '#app'
                });
            };
            return ClientInforSubTwoPage;
        })(Page);
        bui.ClientInforSubTwoPage = ClientInforSubTwoPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ClientInforSubTwoPage.js.map