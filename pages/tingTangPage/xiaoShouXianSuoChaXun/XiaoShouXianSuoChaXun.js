var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../scripts/bns/btop.bui.d.ts"/>
///<reference path="../../../scripts/libs/jQuery.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var PageManager = btop.hui.PageManager;
        var XiaoShouXianSuoChaXun = (function (_super) {
            __extends(XiaoShouXianSuoChaXun, _super);
            function XiaoShouXianSuoChaXun() {
                _super.apply(this, arguments);
            }
            XiaoShouXianSuoChaXun.prototype.initView = function () {
                var _this = this;
                var bbb = this.data;
                //返回主页
                $(this.nodeTypeMap.get('backDangrilaike')).click(function () {
                    if (_this.data.data1 == "KeHuChaXunLieBiao") {
                        PageManager.to('btop.bui.ClientInforMainPage', _this.data.data2);
                    }
                    else {
                        PageManager.to('btop.bui.DangRiLaiKeMainPage', _this.data.data2);
                    }
                });
                if (this.data.data1 == "KeHuChaXunLieBiao") {
                    _this.executeVue(this.data.data['SaleList']);
                    //由guiJinShuTab父容器来委托所有元素事件，建议使用禁止事件冒泡
                    $('#xiaoshouapp').click(function (event) {
                        event.stopPropagation();
                        if (event.target.innerText === "查看详情") {
                            var PRODUCTCODE = $(event.target).attr("name");
                            if (PRODUCTCODE) {
                                var reqMsg = new bui.ReqMsg();
                                reqMsg.body =
                                    {
                                        SERIALNO: PRODUCTCODE
                                    };
                                bui.HttpUtils.bipHttp("saleLeads_info", reqMsg).then(function (data) {
                                    if (data.header.rc == "0000") {
                                        if (data != null) {
                                            var keHuInfo = data.body;
                                            console.info(keHuInfo);
                                            PageManager.to('btop.bui.XiaoShouXianSuoCreatePage', { data: keHuInfo, data1: "KeHuxiaoShouXianSuoChaXun", data2: bbb });
                                        }
                                        else {
                                            bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                        }
                                    }
                                    else {
                                        bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                                    }
                                });
                            }
                            else {
                                return false;
                            }
                        }
                    });
                }
                else {
                    _this.executeVue(this.data['SaleList']);
                    //由guiJinShuTab父容器来委托所有元素事件，建议使用禁止事件冒泡
                    $('#xiaoshouapp').click(function (event) {
                        event.stopPropagation();
                        if (event.target.innerText === "查看详情") {
                            var PRODUCTCODE = $(event.target).attr("name");
                            if (PRODUCTCODE) {
                                var reqMsg = new bui.ReqMsg();
                                reqMsg.body =
                                    {
                                        SERIALNO: PRODUCTCODE
                                    };
                                bui.HttpUtils.bipHttp("saleLeads_info", reqMsg).then(function (data) {
                                    if (data.header.rc == "0000") {
                                        if (data != null) {
                                            var keHuInfo = data.body;
                                            PageManager.to('btop.bui.XiaoShouXianSuoCreatePage', { data: keHuInfo, data1: "DangRixiaoShouXianSuoChaXun", data2: bbb });
                                        }
                                        else {
                                            bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                        }
                                    }
                                    else {
                                        bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                                    }
                                });
                            }
                            else {
                                return false;
                            }
                        }
                    });
                }
            };
            XiaoShouXianSuoChaXun.prototype.executeVue = function (data) {
                Vue.component('condition', {
                    template: '#xiaoshou-condition-temp',
                    props: ['filterText']
                });
                Vue.component('list', {
                    template: '#xiaoshou-list-temp',
                    props: ['items']
                });
                Vue.component('filter-list', {
                    template: '#xiaoshou-filter-list-temp',
                    data: function () {
                        return {
                            filterText: '',
                            items: data
                        };
                    },
                    computed: {
                        filteredItems: function () {
                            return this.$data.items.filter(function (item) {
                                return item['CUSTNAME'].indexOf(this.$data.filterText) != -1
                                    || item['CUSTTYPE'].indexOf(this.$data.filterText) != -1
                                    || item['CUST_PRODNAME'].indexOf(this.$data.filterText) != -1
                                    || item['SERIALNO'].indexOf(this.$data.filterText) != -1;
                            }.bind(this));
                        }
                    }
                });
                new Vue({
                    el: '#xiaoshouapp'
                });
            };
            return XiaoShouXianSuoChaXun;
        })(Page);
        bui.XiaoShouXianSuoChaXun = XiaoShouXianSuoChaXun;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=XiaoShouXianSuoChaXun.js.map