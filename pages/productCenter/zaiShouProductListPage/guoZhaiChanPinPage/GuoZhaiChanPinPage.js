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
        var GuoZhaiChanPinPage = (function (_super) {
            __extends(GuoZhaiChanPinPage, _super);
            function GuoZhaiChanPinPage() {
                _super.apply(this, arguments);
            }
            GuoZhaiChanPinPage.prototype.initView = function () {
                var _this = this;
                //1. 返回产品中心页面，并保持现场数据
                $(this.nodeTypeMap.get('openProductCenterMainPage')).click(function () {
                    var currentPage = 1;
                    PageManager.to('btop.bui.ProductCenterMainPage', { currentPage: currentPage });
                });
                //国债产品列表查询
                var reqMsg = new bui.ReqMsg();
                reqMsg.body = {};
                bui.HttpUtils.bipHttp('product_nationalDebtList', reqMsg).then(function (data) {
                    if (data.header.rc == "0000") {
                        _this.executeVue(data.body['PRODUCTLIST']);
                        console.info(data.body['PRODUCTLIST']);
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
                    var PRODUCTCODE = $(event.target).attr("name");
                    var xqdata;
                    //国债详情查询
                    //国债产品列表查询
                    var reqMsg = new bui.ReqMsg();
                    reqMsg.body = {
                        PRODUCTCODE: PRODUCTCODE
                    };
                    if (event.target.innerText === "查看详情" || event.target.innerText === "查询") {
                        bui.HttpUtils.bipHttp("product_nationalDebtInfo", reqMsg).then(function (data) {
                            if (data.header.rc == "0000") {
                                xqdata = data;
                                //pageAlert 产品详情及额度查询
                                if (event.target.innerText === "查看详情") {
                                    if (PRODUCTCODE) {
                                        var reqMsg_1 = new bui.ReqMsg();
                                        reqMsg_1.body = {
                                            PRODUCTCODE: PRODUCTCODE
                                        };
                                        if (data.header.rc == "0000") {
                                            //pageAlert 产品详情及额度查询
                                            var option = {
                                                top: "10%",
                                                left: '15%',
                                                width: '70%',
                                                height: '60%',
                                                opacity: 0.9
                                            };
                                            var pageAlert = bui.BGlobal.PageAlert.show("btop.bui.GuoZhaiChanPinXiangQingPage", { data: data, data1: "1" }, option);
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
                                    }
                                    else {
                                        return false;
                                    }
                                }
                                else if (event.target.innerText === "查询") {
                                    var reqMsg_2 = new bui.ReqMsg();
                                    reqMsg_2.body =
                                        {
                                            PRODUCTCODE: PRODUCTCODE,
                                            NDTYPE: xqdata.body.NDTYPE
                                        };
                                    //国债详情查询
                                    bui.HttpUtils.bipHttp("product_nationalDebtLimit", reqMsg_2).then(function (data) {
                                        if (data.header.rc == "0000") {
                                            //pageAlert 产品详情及额度查询
                                            var option = {
                                                opacity: 0.9
                                            };
                                            var pageAlert = bui.BGlobal.PageAlert.show("btop.bui.GuoZhaiChanPinXiangQingPage", { data: data, data1: "2" }, option);
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
                });
            };
            GuoZhaiChanPinPage.prototype.executeVue = function (data) {
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
                                return item['PRODUCTNAME'].indexOf(this.$data.filterText) != -1
                                    || item['PRODUCTCODE'].indexOf(this.$data.filterText) != -1;
                            }.bind(this));
                        }
                    }
                });
                new Vue({
                    el: '#app'
                });
            };
            return GuoZhaiChanPinPage;
        })(Page);
        bui.GuoZhaiChanPinPage = GuoZhaiChanPinPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=GuoZhaiChanPinPage.js.map