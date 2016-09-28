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
        var ShangjichaxunPage = (function (_super) {
            __extends(ShangjichaxunPage, _super);
            function ShangjichaxunPage() {
                _super.apply(this, arguments);
            }
            ShangjichaxunPage.prototype.initView = function () {
                var _this = this;
                $(this.nodeTypeMap.get('backDangrilaike')).click(function () {
                    if (_this.data.data1 == "kehuxinxi") {
                        PageManager.to('btop.bui.ClientInforMainPage', _this.data.data2);
                    }
                    else {
                        PageManager.to('btop.bui.DangRiLaiKeMainPage');
                    }
                });
                //返回主页
                if (this.data.data1 == "kehuxinxi") {
                    _this.executeVue(_this.data.data['OPPList']);
                    //由guiJinShuTab父容器来委托所有元素事件，建议使用禁止事件冒泡
                    $('#shangjiapp').click(function (event) {
                        event.stopPropagation();
                        if (event.target.innerText === "查看详情") {
                            var PRODUCTCODE = $(event.target).attr("name");
                            if (PRODUCTCODE) {
                                var PrdName = _this.data.data['OPPList'];
                                for (var i in PrdName) {
                                    if (PrdName[i].OPPSTATUS == $(event.target).attr("name")) {
                                        var option = {
                                            opacity: 1
                                        };
                                        var pageAlert = bui.BGlobal.PageAlert.show("btop.bui.ShangjichaxunXiangQingPage", { data: PrdName[i] }, option);
                                        console.info(data);
                                    }
                                }
                            }
                            else {
                                return false;
                            }
                        }
                        else if (event.target.innerText === "跟进") {
                            var PRODUCTCODE = $(event.target).attr("name");
                            // $(event.target.innerText === "跟进").hide();
                            var reqMsg13 = new bui.ReqMsg();
                            reqMsg13.body = {
                                OPPID: PRODUCTCODE,
                                OPPSTATUS: '已跟进'
                            };
                            bui.HttpUtils.bipHttp('saleLeads_custStatus', reqMsg13).then(function (data) {
                                if (data.header.rc == "0000") {
                                    //商机状态修改
                                    var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '商机状态已跟进' });
                                    buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                                        console.info(e);
                                    });
                                    $(event.target).hide();
                                    var parentElement = event.target.parentElement;
                                    if (parentElement.tagName === "TR" || parentElement.tagName === "tr") {
                                        var oppElement = parentElement.querySelector(".bui-opp-status");
                                        oppElement.innerHTML = "已跟进";
                                    }
                                    else if (parentElement.parentElement.tagName === "TR" || parentElement.parentElement.tagName === "tr") {
                                        var oppElement = parentElement.parentElement.querySelector(".bui-opp-status");
                                        oppElement.innerHTML = "已跟进";
                                    }
                                }
                                else {
                                    bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                }
                            }, function (data) {
                                console.log('商机状态修改失败');
                                console.info();
                            });
                        }
                    });
                }
                else {
                    _this.executeVue(_this.data['OPPList']);
                    //由guiJinShuTab父容器来委托所有元素事件，建议使用禁止事件冒泡
                    $('#shangjiapp').click(function (event) {
                        event.stopPropagation();
                        if (event.target.innerText === "查看详情") {
                            var PRODUCTCODE = $(event.target).attr("name");
                            if (PRODUCTCODE) {
                                var PrdName = _this.data['OPPList'];
                                for (var i in PrdName) {
                                    if (PrdName[i].OPPSTATUS == $(event.target).attr("name")) {
                                        var option = {
                                            opacity: 1
                                        };
                                        var pageAlert = bui.BGlobal.PageAlert.show("btop.bui.ShangjichaxunXiangQingPage", { data: PrdName[i] }, option);
                                        console.info(data);
                                    }
                                }
                            }
                            else {
                                return false;
                            }
                        }
                        else if (event.target.innerText === "跟进") {
                            var PRODUCTCODE = $(event.target).attr("name");
                            var reqMsg13 = new bui.ReqMsg();
                            reqMsg13.body = {
                                OPPID: PRODUCTCODE,
                                OPPSTATUS: '已跟进'
                            };
                            bui.HttpUtils.bipHttp('saleLeads_custStatus', reqMsg13).then(function (data) {
                                $(event.target).hide();
                                $(event.target.parentNode.parentNode).find('.btn-opp-status').html('已跟进');
                                ;
                                if (data.header.rc == "0000") {
                                    //商机状态修改
                                    var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '商机状态已跟进' });
                                    buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                                        console.info(e);
                                    });
                                    buiAlert.setTheme(bui.AlertTheme.Red);
                                    var parentElement = event.target.parentElement;
                                    if (parentElement.tagName === "TR" || parentElement.tagName === "tr") {
                                        var oppElement = parentElement.querySelector(".bui-opp-status");
                                        oppElement.innerHTML = "已跟进";
                                    }
                                    else if (parentElement.parentElement.tagName === "TR" || parentElement.parentElement.tagName === "tr") {
                                        var oppElement = parentElement.parentElement.querySelector(".bui-opp-status");
                                        oppElement.innerHTML = "已跟进";
                                    }
                                }
                                else {
                                    bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                }
                            }, function (data) {
                                bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                            });
                        }
                    });
                }
            };
            ShangjichaxunPage.prototype.executeVue = function (data) {
                Vue.component('condition', {
                    template: '#shangji-condition-temp',
                    props: ['filterText']
                });
                Vue.component('list', {
                    template: '#shangji-list-temp',
                    props: ['items']
                });
                Vue.component('filter-list', {
                    template: '#shangji-filter-list-temp',
                    data: function () {
                        return {
                            filterText: '',
                            items: data
                        };
                    },
                    computed: {
                        filteredItems: function () {
                            return this.$data.items.filter(function (item) {
                                return item['OPPID'].indexOf(this.$data.filterText) != -1
                                    || item['CUST_ID'].indexOf(this.$data.filterText) != -1
                                    || item['CREATEDT'].indexOf(this.$data.filterText) != -1
                                    || item['OPPTITLE'].indexOf(this.$data.filterText) != -1;
                                item['OPPSRC'].indexOf(this.$data.filterText) != -1
                                    || item['OPPSTATUS'].indexOf(this.$data.filterText) != -1
                                    || item['CUSTNAME'].indexOf(this.$data.filterText) != -1
                                    || item['TELEPHONE'].indexOf(this.$data.filterText) != -1;
                            }.bind(this));
                        }
                    }
                });
                new Vue({
                    el: '#shangjiapp'
                });
            };
            return ShangjichaxunPage;
        })(Page);
        bui.ShangjichaxunPage = ShangjichaxunPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ShangjichaxunPage.js.map