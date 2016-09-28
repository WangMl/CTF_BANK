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
        var XiaoShouXianSuoZhuanJiePage = (function (_super) {
            __extends(XiaoShouXianSuoZhuanJiePage, _super);
            function XiaoShouXianSuoZhuanJiePage() {
                _super.apply(this, arguments);
            }
            XiaoShouXianSuoZhuanJiePage.prototype.initView = function () {
                var _this = this;
                var branchNo = {};
                bui.DbManager.sessionGet("DeviceInfo", true).then(function (data) {
                    branchNo = data.BRANCH_NO;
                });
                //加载销售线索转介
                var reqMsg1 = new bui.ReqMsg();
                reqMsg1.body = {
                    BRCODE: branchNo
                };
                bui.HttpUtils.bipHttp('saleLeads_manager', reqMsg1).then(function (data) {
                    var custManager = data['body'];
                    var a = custManager['ManagerList'];
                    _this.executeVue(a);
                });
                var jingliId = "";
                //确定
                $(this.nodeTypeMap.get('confirmBtnNode')).click(function (e) {
                    var pageAlert = bui.BGlobal.PageAlert.getInstance();
                    var event = new bui.BEvent(e, { data: jingliId });
                    pageAlert.confirmBtn.trigger('click', event);
                    pageAlert.hide();
                });
                //选择转接人
                $('#app11').click(function (event) {
                    event.stopPropagation();
                    if ($(event.target).attr("name") != null) {
                        jingliId = $(event.target).attr("name");
                        $('.' + $(event.target).attr("name")).css('background', 'red');
                        $('#app11 td:not(.' + $(event.target).attr("name") + ')').css('background', 'white');
                    }
                });
                //取消
                $(this.nodeTypeMap.get('cancelBtnNode')).click(function (e) {
                    var pageAlert = bui.BGlobal.PageAlert.getInstance();
                    var event = new bui.BEvent(e, { data: "cancel" });
                    pageAlert.cancelBtn.trigger('click', event);
                    pageAlert.hide();
                });
            };
            XiaoShouXianSuoZhuanJiePage.prototype.executeVue = function (data) {
                Vue.component('condition', {
                    template: '#xiansuozhuanjie-condition-temp',
                    props: ['filterText']
                });
                Vue.component('list', {
                    template: '#xiansuozhuanjie-list-temp',
                    props: ['items']
                });
                Vue.component('filter-list', {
                    template: '#xiansuozhuanjie-filter-list-temp',
                    data: function () {
                        return {
                            filterText: '',
                            items: data
                        };
                    },
                    computed: {
                        filteredItems: function () {
                            return this.$data.items.filter(function (item) {
                                return item['USERCODE'].indexOf(this.$data.filterText) != -1;
                            }.bind(this));
                        }
                    }
                });
                new Vue({
                    el: '#app11'
                });
            };
            return XiaoShouXianSuoZhuanJiePage;
        })(Page);
        bui.XiaoShouXianSuoZhuanJiePage = XiaoShouXianSuoZhuanJiePage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=XiaoShouXianSuoZhuanJiePage.js.map