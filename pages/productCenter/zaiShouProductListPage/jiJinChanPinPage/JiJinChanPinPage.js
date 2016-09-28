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
        var JiJinChanPinPage = (function (_super) {
            __extends(JiJinChanPinPage, _super);
            function JiJinChanPinPage() {
                _super.apply(this, arguments);
            }
            JiJinChanPinPage.prototype.initView = function () {
                var _this = this;
                //1. 返回产品中心页面，并保持现场数据
                $(this.nodeTypeMap.get('openProductCenterMainPage')).click(function () {
                    var currentPage = 1;
                    PageManager.to('btop.bui.ProductCenterMainPage', { currentPage: currentPage });
                });
                var reqMsg = new bui.ReqMsg();
                reqMsg.body = {};
                bui.HttpUtils.bipHttp('product_fundList', reqMsg).then(function (data) {
                    if (data.header.rc == "0000") {
                        _this.executeVue(data.body['PRODUCTLIST']);
                    }
                    else {
                        bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                    }
                }, function () {
                    bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                });
                //由guiJinShuTab父容器来委托所有元素事件，建议使用禁止事件冒泡
                $('#jiJinChanPin').click(function (event) {
                    event.stopPropagation();
                    if (event.target.innerText === "查看详情") {
                        var PRODUCTCODE = $(event.target).attr("name");
                        if (PRODUCTCODE) {
                            var reqMsg_1 = new bui.ReqMsg();
                            reqMsg_1.body =
                                {
                                    FUND_CD: PRODUCTCODE
                                };
                            bui.HttpUtils.bipHttp("product_fundInfo", reqMsg_1).then(function (data) {
                                if (data.header.rc == "0000") {
                                    //pageAlert 产品详情及额度查询
                                    var option = {
                                        top: "10%",
                                        left: '15%',
                                        width: '70%',
                                        height: '60%',
                                        opacity: 0.9
                                    };
                                    var pageAlert = bui.BGlobal.PageAlert.show("btop.bui.JiJinChanPinXiangQingPage", data, option);
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
            JiJinChanPinPage.prototype.executeVue = function (data) {
                var _this = this;
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
                                return item['FUND_NAME'] ? item['FUND_NAME'].indexOf(this.$data.filterText) != -1 : false
                                    || item['FUND_CD'].indexOf(this.$data.filterText) != -1
                                    || item['FUND_COMPANY_CODE'].indexOf(this.$data.filterText) != -1
                                    || item['FUND_TP'].indexOf(this.$data.filterText) != -1;
                            }.bind(this));
                        }
                    }
                });
                new Vue({
                    el: '#jiJinChanPin'
                });
            };
            return JiJinChanPinPage;
        })(Page);
        bui.JiJinChanPinPage = JiJinChanPinPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=JiJinChanPinPage.js.map