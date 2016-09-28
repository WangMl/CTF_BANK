var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Administrator on 2016/4/28.
 */
///<reference path="../../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../../scripts/bns/btop.bui.d.ts"/>
///<reference path="../../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../../scripts/libs/echarts.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var PageManager = btop.hui.PageManager;
        var WidgetManager = btop.hui.WidgetManager;
        var Global = btop.hui.Global;
        var PaiDuiXinXiMainPage = (function (_super) {
            __extends(PaiDuiXinXiMainPage, _super);
            function PaiDuiXinXiMainPage() {
                _super.apply(this, arguments);
                this.currentQueuePostion = 0;
            }
            PaiDuiXinXiMainPage.prototype.initView = function () {
                var _this = this;
                if (this.data['fromQueue']) {
                    this.currentQueuePostion = this.data['fromQueue'];
                }
                Global.OverLay.show();
                setTimeout(function () {
                    Global.OverLay.hide();
                }, 500); //防止用户连续点击内部元素
                Global.LoadingToast.show("正在玩命加载中...");
                //返回主页
                $(this.nodeTypeMap.get('openTingTangMainPage')).click(function () {
                    PageManager.to('btop.bui.TingTangMainPage');
                });
                //创建销售线索
                $(this.nodeTypeMap.get('openXiaoShouXianSuoCreatePage')).click(function () {
                    PageManager.to('btop.bui.XiaoShouXianSuoCreatePage');
                });
                $(this.nodeTypeMap.get('refreshDataNode')).click(function () {
                    _this.refreshData();
                });
                this.loadUI();
            };
            /**
             * @description 刷新数据
             */
            PaiDuiXinXiMainPage.prototype.refreshData = function () {
                var _this = this;
                Global.LoadingToast.show("正在玩命加载中...");
                var bipHeaderInst = bui.SingletonUtil.getInstance("btop.bui.BipHeader");
                var reqMsg = new bui.ReqMsg();
                reqMsg.body = {
                    BranchNo: bipHeaderInst.nid
                };
                bui.HttpUtils.bipHttp('hallManagerService_queueInfoAll', reqMsg).then(function (resMsg) {
                    if (resMsg.header.rc == "0000") {
                        var customerQueues = (resMsg['body']['BusQueues']);
                        //3.取出数据后，把队列数据存放到客户端上
                        bui.DbManager.sessionPut("CustomerQueues", customerQueues, true, true).then(function (customerQueues) {
                            var hallManager = WidgetManager.byId('hallManager');
                            hallManager.clear();
                            _this.loadUI();
                        });
                    }
                    else {
                        bui.BGlobal.Alert.show({ title: "提示", content: resMsg.header.rm });
                    }
                }, function (error) {
                    bui.BGlobal.Alert.show({ title: "提示", content: "网络异常！" });
                });
            };
            /**
             * @description 加载数据，渲染UI界面
             */
            PaiDuiXinXiMainPage.prototype.loadUI = function () {
                var hallManager = WidgetManager.byId('hallManager');
                var _this = this;
                //1.查询缓存中客户队列数据CustomerQueues
                bui.DbManager.sessionGet('CustomerQueues', true).then(function (customerQueues) {
                    //2.如果客户队列存在队列数据，则展示，否则，请求服务端取出对应队列数据，把取得的数据存放到客户端上
                    Global.LoadingToast.hide();
                    if (customerQueues != null) {
                        _this.loadHallManager(customerQueues, _this.currentQueuePostion);
                        _this.computeWaitingAndCalled(customerQueues);
                    }
                    else {
                        var reqMsg = new bui.ReqMsg();
                        bui.HttpUtils.bipHttp('hallManagerService_queueInfoAll', reqMsg).then(function (resMsg) {
                            if (resMsg.header.rc == "0000") {
                                var customerQueues_1 = (data['body']['BusQueues']);
                                //3.取出数据后，把队列数据存放到客户端上
                                bui.DbManager.sessionPut("CustomerQueues", customerQueues_1, true, false).then(function (customerQueues) {
                                    _this.loadHallManager(customerQueues, _this.currentQueuePostion);
                                });
                            }
                            else {
                                bui.BGlobal.Alert.show({ title: "提示", content: resMsg.header.rm });
                            }
                        }, function (error) {
                            bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                        });
                    }
                }, function (error) {
                    console.info(error);
                });
            };
            /**
             * @description 加载厅堂管理
             * @customerQueues 队列数据
             * @index 显示选择的队列
             * 需要注意：当change事件发生后，会响应页面变化，然后又要绑定change事件，这就是递归的场景，所以这个方法会设计成递归模式
             * 递归的出口为所有调整队列结束
             */
            PaiDuiXinXiMainPage.prototype.loadHallManager = function (customerQueues, index) {
                this.hallManager = WidgetManager.byId('hallManager');
                var _this = this;
                this.hallManager.clear();
                this.hallManager.initData(customerQueues, _this.id);
                this.hallManager.checkedByIndex(index);
                this.hallManager.unbind('click').on('click', function (bEvent) {
                    console.info(bEvent[0]["data"]["ticket"].CustId);
                    console.info(bEvent[0]["data"]["ticket"]);
                    //客户信息主页
                    if (bEvent[0]["data"]["ticket"].CustId != "") {
                        var reqMsg = new bui.ReqMsg();
                        reqMsg.body =
                            {
                                CUST_ID: bEvent[0]["data"]["ticket"].CustId
                            };
                        bui.HttpUtils.bipHttp("cust_Info", reqMsg).then(function (data) {
                            if (data.header.rc == "0000") {
                                PageManager.to("btop.bui.ClientInforMainPage", {
                                    ticket: bEvent[0]["data"]["ticket"],
                                    fromQueue: bEvent[0]["data"]["fromQueue"]
                                });
                            }
                            else {
                                bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                            }
                        });
                    }
                    else {
                        var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '没有客户ID' });
                        buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                            console.info(e);
                        });
                    }
                });
                this.hallManager.unbind('change').on('change', function (bEvent) {
                    //1.数据变更后，第一时间进行服务器更新操作
                    var oldObject = bEvent[0]["data"]["oldObject"];
                    var rank = bEvent[0]["data"]["rank"];
                    var fromQueue = bEvent[0]["data"]["fromQueue"];
                    var newObject = bEvent[0]["data"]["newObject"];
                    var toQueue = bEvent[0]["data"]["toQueue"];
                    var notifyUpdateView = bEvent[0]["data"]["notifyUpdateView"];
                    var scope = bEvent[0]["data"]["scope"];
                    var bipHeaderInst = bui.SingletonUtil.getInstance("btop.bui.BipHeader");
                    var reqMsg = new bui.ReqMsg();
                    reqMsg.body =
                        {
                            BranchNo: bipHeaderInst.nid,
                            OldBusTypeId: customerQueues.BusQueue[fromQueue].BusTypeId,
                            OldBusCode: customerQueues.BusQueue[fromQueue].BusCode,
                            OldTicketNo: oldObject.TicketNo,
                            NewBusTypeId: customerQueues.BusQueue[toQueue].BusTypeId,
                            NewBusCode: customerQueues.BusQueue[toQueue].BusCode,
                            CustNo: oldObject.CustId
                        };
                    bui.HttpUtils.bipHttp("hallManagerService_queueJumping", reqMsg).then(function (resMsg) {
                        //首先得判断交易码，如果交易成功，更新缓存数据  NewTicketCode返回新取号号码
                        if (resMsg.header.rc == "0000") {
                            bui.BGlobal.Alert.show({ title: "提示", content: "您的取号号码为： " + resMsg.body["NewTicketCode"] });
                            oldObject.TrxStatus = '3';
                            customerQueues.BusQueue[fromQueue].Ticket[rank] = oldObject;
                            //customerQueues.BusQueue[toQueue].Ticket.push(newObject);
                            //更新缓存内存
                            bui.DbManager.sessionPut('CustomerQueues', customerQueues, true, true).then(function (customerQueues) {
                                //2.更新缓存后，需要及时更新界面
                                notifyUpdateView.apply(scope);
                                _this.computeWaitingAndCalled(customerQueues);
                                _this.loadHallManager(customerQueues, fromQueue); //这个方法走递归
                            });
                        }
                        else {
                            bui.BGlobal.Alert.show({ title: "提示", content: resMsg.header.rm });
                        }
                    }, function (error) {
                        bui.BGlobal.Alert.show({ title: "提示", content: "网络加载有异常" });
                    });
                });
            };
            /**
             * @description 计算客户等待及叫号人数
             * @customerQueues 队列数据
             */
            PaiDuiXinXiMainPage.prototype.computeWaitingAndCalled = function (customerQueues) {
                //首先过滤数据，把等待用户抽取到等待容器中
                var waitingTickets = new Array();
                var calledTickets = new Array();
                //由于calledTickets可能有重复，所以要排重，为了快速排重，建立临时的hash表（此方法的特点，用空间换时间，所以空间上会占用更大内容）
                var calledHash = {};
                for (var i in customerQueues.BusQueue) {
                    var busQueue = customerQueues.BusQueue[i];
                    for (var j in busQueue.Ticket) {
                        var ticket = busQueue.Ticket[j];
                        if (ticket.TrxStatus == "0") {
                            //存入等待客户
                            waitingTickets.push(ticket);
                        }
                        if (ticket.CallTime) {
                            if (!calledHash[ticket.CustId]) {
                                calledHash[ticket.CustId] = true; //存入hash表中
                                calledTickets.push(ticket); //存入临时数组中
                            }
                        }
                    }
                }
                $(this.nodeTypeMap.get('waitingCountNode')).html(waitingTickets.length);
                $(this.nodeTypeMap.get('calledCountNode')).html(calledTickets.length);
            };
            return PaiDuiXinXiMainPage;
        })(Page);
        bui.PaiDuiXinXiMainPage = PaiDuiXinXiMainPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=PaiDuiXinXiMainPage.js.map