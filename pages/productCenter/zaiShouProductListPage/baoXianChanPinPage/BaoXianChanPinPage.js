var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/************************************************************************
 * 类名  :  ProductListPage
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/22
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../../scripts/bns/btop.bui.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var PageManager = btop.hui.PageManager;
        var BaoXianChanPinPage = (function (_super) {
            __extends(BaoXianChanPinPage, _super);
            function BaoXianChanPinPage() {
                _super.apply(this, arguments);
            }
            BaoXianChanPinPage.prototype.initView = function () {
                var _this = this;
                //1. 返回产品中心页面，并保持现场数据
                $(this.nodeTypeMap.get('openProductCenterMainPage')).click(function () {
                    var currentPage = 1;
                    PageManager.to('btop.bui.ProductCenterMainPage', { currentPage: currentPage });
                });
                //1. 保险公司查询
                $(this.nodeTypeMap.get('openBaoXianGongSi')).click(function () {
                    var currentPage = 1;
                    PageManager.to('btop.bui.ProductCenterMainPage', { currentPage: currentPage });
                    //pageAlert 产品详情及额度查询
                    var option = {
                        top: "10%",
                        left: '15%',
                        width: '70%',
                        height: '60%',
                        opacity: 0.9
                    };
                    var pageAlert = bui.BGlobal.PageAlert.show("btop.bui.BaoXianChanPinXiangQingPage", option);
                    pageAlert.confirmBtn.unbind("click").on("click", function (data) {
                        console.info(data);
                    });
                    pageAlert.cancelBtn.unbind("click").on("click", function (data) {
                        console.info(data);
                    });
                });
                //保险产品列表查询
                var reqMsg = new bui.ReqMsg();
                reqMsg.body = {};
                bui.HttpUtils.bipHttp('product_insuranceList', reqMsg).then(function (data) {
                    //let product:Array<Object> = data.body.PRODUCTLIST;
                    if (data.header.rc = "0000") {
                        _this.executeVue(data.body['PRODUCTLIST']);
                    }
                    else {
                        bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                    }
                }, function (data) {
                    bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                });
                //由guiJinShuTab父容器来委托所有元素事件，建议使用禁止事件冒泡
                $('#app').click(function (event) {
                    event.stopPropagation();
                    if (event.target.innerText === "查看详情") {
                        var PRODUCTCODE = $(event.target).attr("name");
                        if (PRODUCTCODE) {
                            var reqMsg_1 = new bui.ReqMsg();
                            reqMsg_1.body =
                                {
                                    PRODUCTCODE: PRODUCTCODE
                                };
                            bui.HttpUtils.bipHttp("product_insuranceInfo", reqMsg_1).then(function (data) {
                                if (data.header.rc == "0000") {
                                    //pageAlert 产品详情及额度查询
                                    var option = {
                                        opacity: 0.9
                                    };
                                    var pageAlert = bui.BGlobal.PageAlert.show("btop.bui.BaoXianChanPinXiangQingPage", data, option);
                                    pageAlert.confirmBtn.unbind("click").on("click", function (data) {
                                        console.info(data);
                                    });
                                    pageAlert.cancelBtn.unbind("click").on("click", function (data) {
                                        console.info(data);
                                    });
                                }
                                else {
                                    bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                }
                            }, function (data) {
                                bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                            });
                        }
                        else {
                            return false;
                        }
                    }
                });
            };
            BaoXianChanPinPage.prototype.executeVue = function (data) {
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
                                return item['PRODUCTNAME'].indexOf(this.$data.filterText) != -1
                                    || item['PRODUCTCODE'].indexOf(this.$data.filterText) != -1
                                    || item['INSURETYPE'].indexOf(this.$data.filterText) != -1
                                    || item['INSUREDCORPNAME'].indexOf(this.$data.filterText) != -1;
                            }.bind(this));
                        }
                    }
                });
                new Vue({
                    el: '#app'
                });
            };
            return BaoXianChanPinPage;
        })(Page);
        bui.BaoXianChanPinPage = BaoXianChanPinPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=BaoXianChanPinPage.js.map