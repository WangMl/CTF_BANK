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
        var PageManager = btop.hui.PageManager;
        var DangRiLaiKeMainPage = (function (_super) {
            __extends(DangRiLaiKeMainPage, _super);
            function DangRiLaiKeMainPage() {
                _super.apply(this, arguments);
            }
            DangRiLaiKeMainPage.prototype.initView = function () {
                var _this = this;
                var custInfoAll;
                var PRODUCTCODE;
                bui.DbManager.sessionGet("DeviceInfo").then(function (data) {
                    var device = data;
                    var BranchNo = device.BRANCH_NO;
                    var reqMsg = new bui.ReqMsg();
                    reqMsg.body = {
                        BranchNo: BranchNo
                    };
                    bui.HttpUtils.bipHttp('hallManagerService_custInfoAll', reqMsg).then(function (data) {
                        custInfoAll = data;
                        if (data.header.rc == "0000") {
                            _this.executeVue(data.body['CustList']);
                        }
                        else {
                            bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                        }
                    }, function () {
                        bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                    });
                });
                //返回主页
                $(this.nodeTypeMap.get('openTingTangMainPage')).click(function () {
                    PageManager.to('btop.bui.TingTangMainPage');
                });
                //创建销售线索
                $(this.nodeTypeMap.get('tingtangChuangJian')).click(function () {
                    PageManager.to('btop.bui.ChuangjianxiaoshouxiansuoPage');
                });
                var shangji;
                $('#applaike').click(function (event) {
                    if (event.target.innerText === "查看商机") {
                        event.stopPropagation();
                        var PRODUCTCODE_1 = $(event.target).attr("name");
                        if (PRODUCTCODE_1) {
                            var reqMsg = new bui.ReqMsg();
                            reqMsg.body =
                                {
                                    CUST_ID: PRODUCTCODE_1
                                };
                            bui.HttpUtils.bipHttp("saleLeads_cust", reqMsg).then(function (data) {
                                if (data.header.rc == "0000") {
                                    if (data.body['OPPList'].length != "0") {
                                        PageManager.to('btop.bui.ShangjichaxunPage', data.body);
                                    }
                                    else {
                                        var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '没有商机' });
                                        buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                                            console.info(e);
                                        });
                                        buiAlert.setTheme(bui.AlertTheme.Red);
                                    }
                                }
                                else {
                                    bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                }
                            });
                        }
                        else {
                            return false;
                        }
                    }
                    else if (event.target.innerText === "查询是否存在销售线索") {
                        event.stopPropagation();
                        bui.DbManager.sessionGet("UserInfo").then(function (data) {
                            var user = data;
                            user.UserId; //创建人ID
                            PRODUCTCODE = $(event.target).attr("name");
                            if (PRODUCTCODE) {
                                var reqMsg = new bui.ReqMsg();
                                reqMsg.body =
                                    {
                                        CUST_ID: PRODUCTCODE,
                                        CEMPCODE: user.UserId //创建人ID
                                    };
                                bui.HttpUtils.bipHttp("saleLeads_teller", reqMsg).then(function (data) {
                                    shangji = data;
                                    if (data.header.rc == "0000") {
                                        if (data.body['SaleList'].length != "0") {
                                            $('.saleLead' + PRODUCTCODE).html("查询");
                                        }
                                        else {
                                            $('.saleLead' + PRODUCTCODE).html("创建");
                                        }
                                    }
                                    else {
                                        bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                    }
                                }, function () {
                                    bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                                });
                            }
                            else {
                                return false;
                            }
                            ;
                        });
                    }
                    else if (event.target.innerText === "查询") {
                        if (event.target.tagName === "DIV" || event.target.tagName === "div") {
                            if (shangji) {
                                PageManager.to('btop.bui.XiaoShouXianSuoChaXun', shangji.body);
                            }
                        }
                    }
                    else if (event.target.innerText === "创建") {
                        var dangri = custInfoAll.body['CustList'];
                        for (var i in dangri) {
                            var infoCustID = dangri[i].CustId;
                            if (infoCustID == PRODUCTCODE) {
                                console.info(dangri[i]);
                                PageManager.to('btop.bui.ChuangjianxiaoshouxiansuoPage', {
                                    data: dangri[i],
                                    data1: "chuangjianDangri"
                                });
                            }
                        }
                    }
                });
            };
            DangRiLaiKeMainPage.prototype.executeVue = function (data) {
                Vue.component('condition', {
                    template: '#laike-condition-temp',
                    props: ['filterText']
                });
                Vue.component('list', {
                    template: '#laike-list-temp',
                    props: ['items']
                });
                Vue.component('filter-list', {
                    template: '#laike-filter-list-temp',
                    data: function () {
                        return {
                            filterText: '',
                            items: data
                        };
                    },
                    computed: {
                        filteredItems: function () {
                            return this.$data.items.filter(function (item) {
                                return item['CustName'].indexOf(this.$data.filterText) != -1
                                    || item['CustId'].indexOf(this.$data.filterText) != -1
                                    || item['CustLevel'].indexOf(this.$data.filterText) != -1
                                    || item['BusName'].indexOf(this.$data.filterText) != -1;
                            }.bind(this));
                        }
                    }
                });
                var vue = new Vue({
                    el: '#applaike'
                });
            };
            return DangRiLaiKeMainPage;
        })(Page);
        bui.DangRiLaiKeMainPage = DangRiLaiKeMainPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=DangRiLaiKeMainPage.js.map