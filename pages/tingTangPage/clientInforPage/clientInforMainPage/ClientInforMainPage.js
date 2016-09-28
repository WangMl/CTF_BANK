var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../../scripts/bns/btop.bui.d.ts"/>
///<reference path="../../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../clientInforSubOnePage/ClientInforSubOnePage.ts"/>
///<reference path="../../../../scripts/libs/vue.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var PageManager = btop.hui.PageManager;
        var WidgetManager = btop.hui.WidgetManager;
        var ClientInforMainPage = (function (_super) {
            __extends(ClientInforMainPage, _super);
            function ClientInforMainPage() {
                _super.apply(this, arguments);
            }
            ClientInforMainPage.prototype.initView = function () {
                var _this = this;
                var shangji;
                var bbb = this.data;
                var ticket = this.data['ticket'];
                var fromQueue = this.data['fromQueue'];
                //返回厅堂主页
                $(this.nodeTypeMap.get('openPaiDuiXinXiMainPage')).click(function () {
                    if (_this.data["isSee"]) {
                        PageManager.to('btop.bui.ZiZhuQuDaoPage', { fromQueue: fromQueue });
                    }
                    else {
                        PageManager.to('btop.bui.PaiDuiXinXiMainPage', { fromQueue: fromQueue });
                    }
                });
                ////商机查询
                $(this.nodeTypeMap.get('shangjichaxun')).click(function () {
                    var PRODUCTCODE = ticket.CustId;
                    var reqMsg = new bui.ReqMsg();
                    reqMsg.body =
                        {
                            CUST_ID: PRODUCTCODE
                        };
                    bui.HttpUtils.bipHttp("saleLeads_cust", reqMsg).then(function (data) {
                        if (data.header.rc == "0000") {
                            if (data.body['OPPList'].length != "0") {
                                PageManager.to('btop.bui.ShangjichaxunPage', { data: data.body, data1: "kehuxinxi", data2: bbb });
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
                            bui.BGlobal.Alert.show(data.header.rm);
                        }
                    });
                });
                $('#chaxunshifouXiaoShou').show();
                $('#chaxunXiaoShou').hide();
                $('#chuangJianXiaoShou').hide();
                var CEMPCODE;
                bui.DbManager.sessionGet("UserInfo").then(function (data) {
                    var user = data;
                    CEMPCODE = user.UserId;
                });
                //查询是否销售线索
                $(this.nodeTypeMap.get('chaxunshifouXiaoShou')).click(function () {
                    var PRODUCTCODE = ticket.CustId;
                    var reqMsg = new bui.ReqMsg();
                    reqMsg.body =
                        {
                            CUST_ID: PRODUCTCODE,
                            CEMPCODE: CEMPCODE
                        };
                    bui.HttpUtils.bipHttp("saleLeads_teller", reqMsg).then(function (data) {
                        shangji = data;
                        if (data.header.rc == "0000") {
                            if (data.body['SaleList'].length != "0") {
                                $('#chaxunshifouXiaoShou').hide();
                                $('#chaxunXiaoShou').show();
                                $('#chuangJianXiaoShou').hide();
                            }
                            else {
                                $('#chaxunshifouXiaoShou').hide();
                                $('#chaxunXiaoShou').hide();
                                $('#chuangJianXiaoShou').show();
                            }
                        }
                        else {
                            bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                        }
                    });
                });
                //查询销售线索列表
                $(this.nodeTypeMap.get('chaxunXiaoShou')).click(function () {
                    PageManager.to('btop.bui.XiaoShouXianSuoChaXun', { data: shangji.body, data1: "KeHuChaXunLieBiao", data2: bbb });
                });
                //创建销售线索列表
                $(this.nodeTypeMap.get('chuangJianXiaoShou')).click(function () {
                    var dangri = ticket;
                    PageManager.to('btop.bui.ChuangjianxiaoshouxiansuoPage', { data: dangri, data1: "KeHuXinXichuangjian", data2: bbb });
                });
                var UserId = ticket.CustId; //得到客户
                var custInfo;
                var MANAGER_ID;
                var reqMsg = new bui.ReqMsg();
                reqMsg.body =
                    {
                        CUST_ID: UserId
                    };
                $("#userID").val(UserId);
                this.vm = new Vue({
                    el: '#clientInforMainPage',
                    data: {
                        accountManager: null
                    },
                    methods: {}
                });
                bui.HttpUtils.bipHttp("cust_Info", reqMsg).then(function (data) {
                    if (data.header.rc == "0000") {
                        custInfo = data.body;
                        //采用类似于hash散列值来映射对应显示的值
                        var CUSTSEX = { "0": "男", "1": "女" };
                        var CustLevel = { "0": "大众客户", "1": "一星级客户", "2": "二星级客户", "3": "三星级客户", "4": "四星级客户", "5": "五星级客户", "六星级客户": "六星级客户" };
                        custInfo.CUST_SEX = CUSTSEX[custInfo.CUST_SEX];
                        custInfo.CUST_LEVEL = CustLevel[custInfo.CUST_LEVEL];
                        _this.vm._data.accountManager = custInfo;
                        _this.vm._data.accountManager.CUST_ID = ticket.CustId;
                        /*this.vm = new Vue({
                            el: '#clientInforMainPage',
                            data: {
                                accountManager:custInfo
                            },
                            methods: {
                            }
                        });*/
                        var myDate = new Date();
                        //let year = myDate.getFullYear() + "";
                        var month = parseInt((myDate.getMonth() + 1));
                        if (month < 10) {
                            month = "0" + month;
                        }
                        else {
                            month = parseInt((myDate.getMonth() + 1));
                        }
                        var nowday = myDate.getDate() + "";
                        if (nowday < 10) {
                            nowday = "0" + nowday;
                        }
                        else {
                            nowday = parseInt(myDate.getDate());
                        }
                        var newDate = month + "-" + nowday;
                        var custBirthday = custInfo.CUST_BIRTHDAY.split("-")[1] + "-" + custInfo.CUST_BIRTHDAY.split("-")[2];
                        if (custBirthday == newDate) {
                            $(".keHuShengRiImage").show();
                        }
                        else {
                            $(".keHuShengRiImage").hide();
                        }
                        MANAGER_ID = custInfo.MANAGER_ID; //客户经理ID
                        bui.DbManager.sessionGet("UserInfo").then(function (data) {
                            var device = data;
                            var jingLi = device.UserId; //PAD登陆pad用户
                            if (_this.data.isSee == undefined) {
                                if (jingLi == MANAGER_ID) {
                                    _this.tabInstance = WidgetManager.byId('clientInfoTab');
                                    var titles = ["第一页", "第二页", "第三页"];
                                    var pageIds = ["btop.bui.ClientInforSubThreePage", "btop.bui.ClientInforSubOnePage", "btop.bui.ClientInforSubTwoPage"];
                                    var option = {
                                        titles: titles,
                                        pageIds: pageIds,
                                        mountId: 'clientInforMount',
                                        data: { CUST_ID: custInfo, data2: 2 }
                                    };
                                    _this.tabInstance.initData(option);
                                }
                                else {
                                    _this.tabInstance = WidgetManager.byId('clientInfoTab');
                                    var titles = ["第一页", "第二页", "第三页"];
                                    var pageIds = ["btop.bui.ClientInforSubThreePage", "btop.bui.ClientInforSubOnePage", "btop.bui.ClientInforSubTwoPage"];
                                    var option = {
                                        titles: titles,
                                        pageIds: pageIds,
                                        mountId: 'clientInforMount',
                                        data: { CUST_ID: custInfo, data2: 2 }
                                    };
                                    _this.tabInstance.initData(option);
                                    $(".switch-page-wrapper").hide();
                                }
                            }
                            else {
                                if (_this.data.isSee == 1) {
                                    _this.tabInstance = WidgetManager.byId('clientInfoTab');
                                    var titles = ["第一页", "第二页", "第三页"];
                                    var pageIds = ["btop.bui.ClientInforSubThreePage", "btop.bui.ClientInforSubOnePage", "btop.bui.ClientInforSubTwoPage"];
                                    var option = {
                                        titles: titles,
                                        pageIds: pageIds,
                                        mountId: 'clientInforMount',
                                        data: { CUST_ID: custInfo, data2: _this.data.isSee }
                                    };
                                    _this.tabInstance.initData(option);
                                }
                                else {
                                    if (jingLi == MANAGER_ID) {
                                        _this.tabInstance = WidgetManager.byId('clientInfoTab');
                                        var titles = ["第一页", "第二页", "第三页"];
                                        var pageIds = ["btop.bui.ClientInforSubThreePage", "btop.bui.ClientInforSubOnePage", "btop.bui.ClientInforSubTwoPage"];
                                        var option = {
                                            titles: titles,
                                            pageIds: pageIds,
                                            mountId: 'clientInforMount',
                                            data: { CUST_ID: custInfo, data2: _this.data.isSee }
                                        };
                                        _this.tabInstance.initData(option);
                                    }
                                    else {
                                        _this.tabInstance = WidgetManager.byId('clientInfoTab');
                                        var titles = ["第一页", "第二页", "第三页"];
                                        var pageIds = ["btop.bui.ClientInforSubThreePage", "btop.bui.ClientInforSubOnePage", "btop.bui.ClientInforSubTwoPage"];
                                        var option = {
                                            titles: titles,
                                            pageIds: pageIds,
                                            mountId: 'clientInforMount',
                                            data: { CUST_ID: custInfo, data2: _this.data.isSee }
                                        };
                                        _this.tabInstance.initData(option);
                                        $(".switch-page-wrapper").hide();
                                    }
                                }
                            }
                        });
                    }
                    else {
                        bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                    }
                });
                var flag = true;
                $('#switchArrowOpen').click(function () {
                    if (flag) {
                        $('.switch-arrow-right-container').css('transform', 'translate(-120px,0)');
                        $('.switch-arrow-left-container').css('transform', 'translateX(-130px) translateZ(0px) rotateY(180deg)');
                        $('#clientInfoTab .bui-tab-container').css('transform', 'translate(35px,0)');
                        flag = false;
                    }
                    else {
                        $('#clientInfoTab .bui-tab-container').css('transform', 'translate(0px,0)');
                        $('.switch-arrow-right-container').css('transform', 'translate(0,0)');
                        $('.switch-arrow-left-container').css('transform', 'translateX(-10px) translateZ(0px) rotateY(0deg)');
                        flag = true;
                    }
                });
            };
            ClientInforMainPage.prototype.destroy = function () {
                if (this.tabInstance)
                    this.tabInstance.destroyPage();
                _super.prototype.destroy.call(this);
            };
            return ClientInforMainPage;
        })(Page);
        bui.ClientInforMainPage = ClientInforMainPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ClientInforMainPage.js.map