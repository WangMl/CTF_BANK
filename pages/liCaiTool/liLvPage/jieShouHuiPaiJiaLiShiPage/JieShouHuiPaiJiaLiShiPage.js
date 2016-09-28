var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Administrator on 2016/7/6.
 */
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
        var JieShouHuiPaiJiaLiShiPage = (function (_super) {
            __extends(JieShouHuiPaiJiaLiShiPage, _super);
            function JieShouHuiPaiJiaLiShiPage() {
                _super.apply(this, arguments);
            }
            JieShouHuiPaiJiaLiShiPage.prototype.initView = function () {
                var _this = this;
                //确定
                $(_this.nodeTypeMap.get('confirmBtnNode')).unbind('click').click(function (e) {
                    if (1) {
                        var pageAlert = bui.BGlobal.PageAlert.getInstance();
                        var event_1 = new bui.BEvent(e, bEvent[0]['data']);
                        pageAlert.confirmBtn.trigger('click', event_1);
                        pageAlert.hide();
                    }
                    else {
                        var alert_1 = bui.BGlobal.Alert.show({ title: '提示', content: '请选中意向产品' });
                        pageAlert.hide();
                    }
                });
                //取消
                $(_this.nodeTypeMap.get('cancelBtnNode')).unbind('click').click(function (e) {
                    var pageAlert = bui.BGlobal.PageAlert.getInstance();
                    var event = new bui.BEvent(e, { data: "cancel" });
                    pageAlert.cancelBtn.trigger('click', event);
                    pageAlert.hide();
                });
                var aaa = _this.data;
                _this.executeVue(aaa);
            };
            JieShouHuiPaiJiaLiShiPage.prototype.executeVue = function (data) {
                Vue.component('condition', {
                    template: '#jieShouHui-condition-temp',
                    props: ['filterText']
                });
                Vue.component('list', {
                    template: '#jieShouHui-list-temp',
                    props: ['items']
                });
                Vue.component('filter-list', {
                    template: '#jieShouHui-filter-list-temp',
                    data: function () {
                        return {
                            filterText: '',
                            items: data
                        };
                    },
                    computed: {
                        filteredItems: function () {
                            return this.$data.items.filter(function (item) {
                                return item['SUPUPRICE'].indexOf(this.$data.filterText) != -1
                                    || item['HUPUPRICE'].indexOf(this.$data.filterText) != -1
                                    || item['SELLPRICE'].indexOf(this.$data.filterText) != -1
                                    || item['MIDDLEPRICE'].indexOf(this.$data.filterText) != -1
                                    || item['RELEASETIME'].indexOf(this.$data.filterText) != -1
                                    || item['EREFDT'].indexOf(this.$data.filterText) != -1
                                    || item['DATA_DT'].indexOf(this.$data.filterText) != -1;
                            }.bind(this));
                        }
                    }
                });
                var vue = new Vue({
                    el: '#app1'
                });
                console.info(vue.$data);
            };
            return JieShouHuiPaiJiaLiShiPage;
        })(Page);
        bui.JieShouHuiPaiJiaLiShiPage = JieShouHuiPaiJiaLiShiPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=JieShouHuiPaiJiaLiShiPage.js.map