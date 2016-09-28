var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by wangxinlu on 2016/9/7.
 */
///<reference path="../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../scripts/bns/btop.bui.d.ts"/>
///<reference path="../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../scripts/libs/echarts.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var PageManager = btop.hui.PageManager;
        var WidgetManager = btop.hui.WidgetManager;
        var ZiZhuQuDaoPage = (function (_super) {
            __extends(ZiZhuQuDaoPage, _super);
            function ZiZhuQuDaoPage() {
                _super.apply(this, arguments);
            }
            ZiZhuQuDaoPage.prototype.initView = function () {
                var _this = this;
                //返回主页
                $(this.nodeTypeMap.get('openTingTangMainPage')).click(function () {
                    PageManager.to('btop.bui.TingTangMainPage');
                });
                //刷新数据
                $(this.nodeTypeMap.get('refreshDataNode')).click(function () {
                    _this.refreshData();
                });
                this.loadUI();
            };
            /**
             * @description 对界面数据进行刷新
             */
            ZiZhuQuDaoPage.prototype.refreshData = function () {
                var _this = this;
                bui.DbManager.sessionGet("UserInfo", true).then(function (user) {
                    var reqMsg = new bui.ReqMsg();
                    reqMsg.body =
                        {
                            BranchNo: user.BranchNo
                        };
                    bui.HttpUtils.bipHttp("hallManagerService_custChannel", reqMsg).then(function (resMsg) {
                        if (resMsg.header.rc === "0000") {
                            var assistChanel = resMsg.body;
                            bui.DbManager.sessionPut('AssistChannel', assistChanel, true, true).then(function () {
                                _this.loadUI();
                            });
                        }
                        else {
                            bui.BGlobal.Alert.show({ title: '提示', content: resMsg.header.rm });
                        }
                    }, function () {
                        bui.BGlobal.Alert.show({ title: '提示', content: '网络异常' });
                    });
                });
            };
            /**
             * @description 加载界面数据及渲染界面
             */
            ZiZhuQuDaoPage.prototype.loadUI = function () {
                var _this = this;
                bui.DbManager.sessionGet("UserInfo", true).then(function (user) {
                    //查询缓存数据
                    bui.DbManager.sessionGet("AssistChannel", true).then(function (assistChanel) {
                        if (assistChanel != null) {
                            _this.computeChannelTypeCount(assistChanel);
                            var assistChannelQueue = WidgetManager.byId('assistChannelQueue');
                            assistChannelQueue.initData(assistChanel);
                            assistChannelQueue.unbind('click').on('click', function (bEvent) {
                                PageManager.to("btop.bui.ClientInforMainPage", {
                                    ticket: {
                                        CustId: bEvent[0]["data"]["custChannel"]["CUST_ID"],
                                        CustBirthday: bEvent[0]["data"]["custChannel"]["CUST_BIRTHDAY"]
                                    },
                                    isSee: bEvent[0]["data"]["isSee"]
                                });
                            });
                        }
                        else {
                            var reqMsg = new bui.ReqMsg();
                            reqMsg.body =
                                {
                                    BranchNo: user.BranchNo
                                };
                            bui.HttpUtils.bipHttp("hallManagerService_custChannel", reqMsg).then(function (resMsg) {
                                if (resMsg.header.rc === "0000") {
                                    var assistChanel_1 = resMsg.body;
                                    bui.DbManager.sessionPut('AssistChannel', assistChanel_1, true, false).then(function (assistChanel) {
                                        _this.computeChannelTypeCount(assistChanel);
                                        var assistChannelQueue = WidgetManager.byId('assistChannelQueue');
                                        assistChannelQueue.initData(assistChanel);
                                        assistChannelQueue.unbind('click').on('click', function (bEvent) {
                                            console.info(bEvent);
                                        });
                                    });
                                }
                                else {
                                    bui.BGlobal.Alert.show({ title: '提示', content: resMsg.header.rm });
                                }
                            }, function () {
                                bui.BGlobal.Alert.show({ title: '提示', content: '网络异常' });
                            });
                        }
                    });
                });
            };
            /**
             * @description 计算渠道类型数目，并渲染界面
             * @param assistChanel
             */
            ZiZhuQuDaoPage.prototype.computeChannelTypeCount = function (assistChanel) {
                var custChannel = assistChanel.CUST;
                var paiDuiJiContainer = new Array();
                var weiXinContainer = new Array();
                var WifiContainer = new Array();
                var lanYaContainer = new Array();
                var zhiNengContainer = new Array();
                for (var i in custChannel) {
                    if (custChannel[i].CHANNEL_TYPE === "01") {
                        paiDuiJiContainer.push(custChannel[i]);
                    }
                    else if (custChannel[i].CHANNEL_TYPE === "02") {
                        weiXinContainer.push(custChannel[i]);
                    }
                    else if (custChannel[i].CHANNEL_TYPE === "03") {
                        WifiContainer.push(custChannel[i]);
                    }
                    else if (custChannel[i].CHANNEL_TYPE === "04") {
                        lanYaContainer.push(custChannel[i]);
                    }
                    else if (custChannel[i].CHANNEL_TYPE === "05") {
                        zhiNengContainer.push(custChannel[i]);
                    }
                }
                //渲染界面数据
                $("#paiDuiJi").html(paiDuiJiContainer.length);
                $("#weiXinYinHang").html(weiXinContainer.length);
                $("#WIFI").html(WifiContainer.length);
                $("#lanYa").html(lanYaContainer.length);
                $("#zhiNengTerminal").html(zhiNengContainer.length);
            };
            return ZiZhuQuDaoPage;
        })(Page);
        bui.ZiZhuQuDaoPage = ZiZhuQuDaoPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ZiZhuQuDaoPage.js.map