var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        var TingTangMainPage = (function (_super) {
            __extends(TingTangMainPage, _super);
            function TingTangMainPage() {
                _super.apply(this, arguments);
            }
            TingTangMainPage.prototype.initView = function () {
                var _this = this;
                //返回主页
                $(this.nodeTypeMap.get('openMainPage')).click(function () {
                    PageManager.to('btop.bui.MainPage');
                });
                //进入排队队列
                $(this.nodeTypeMap.get('openPaiDuiXinXiMainPage')).click(function () {
                    PageManager.to('btop.bui.PaiDuiXinXiMainPage');
                });
                //当日来客查询
                $(this.nodeTypeMap.get('openDangRiLaiKeMainPage')).click(function () {
                    PageManager.to('btop.bui.DangRiLaiKeMainPage');
                });
                //自助渠道到访客户
                $(this.nodeTypeMap.get('openZiZhuQuDaoMainPage')).click(function () {
                    PageManager.to('btop.bui.ZiZhuQuDaoPage');
                });
                //1.查询缓存中客户队列数据CustomerQueues
                bui.DbManager.sessionGet('CustomerQueues', true).then(function (data) {
                    //2.如果客户队列存在队列数据，则展示，否则，请求服务端取出对应队列数据，把取得的数据存放到客户端上
                    if (data != null) {
                        _this.computeBussinessPie(data);
                        _this.computeCustomerTypePie(data);
                        _this.computeWaitingRect(data);
                    }
                    else {
                        var bipHeaderInst = bui.SingletonUtil.getInstance("btop.bui.BipHeader");
                        var reqMsg = new bui.ReqMsg();
                        reqMsg.body = {
                            BranchNo: bipHeaderInst.nid
                        };
                        bui.HttpUtils.bipHttp('hallManagerService_queueInfoAll', reqMsg).then(function (resMsg) {
                            if (resMsg.header.rc == "0000") {
                                var customerQueues = (resMsg['body']['BusQueues']);
                                //3.取出数据后，把队列数据存放到客户端上
                                bui.DbManager.sessionPut("CustomerQueues", customerQueues, true, false).then(function (data) {
                                    _this.computeBussinessPie(data);
                                    _this.computeCustomerTypePie(data);
                                    _this.computeWaitingRect(data);
                                });
                            }
                            else {
                                bui.BGlobal.Alert.show({ title: "提示", content: resMsg.header.rm });
                            }
                        }, function (error) {
                            bui.BGlobal.Alert.show({ title: "提示", content: "网络加载有异常" });
                        });
                    }
                });
            };
            /**
             * @description 计算客户类别饼图
             * @customerQueues 队列数据
             */
            TingTangMainPage.prototype.computeCustomerTypePie = function (customerQueues) {
                //首先建立五种客户类型容器
                var guiBins = new Array();
                var puTongs = new Array();
                var yuYueGuiBins = new Array();
                var yuYuePuTongs = new Array();
                var weiZhis = new Array();
                for (var i in customerQueues.BusQueue) {
                    var busQueue = customerQueues.BusQueue[i];
                    for (var j in busQueue.Ticket) {
                        var ticket = busQueue.Ticket[j];
                        switch (ticket.CustTypeId) {
                            case "01":
                                guiBins.push(ticket);
                                break;
                            case "02":
                                puTongs.push(ticket);
                                break;
                            case "03":
                                yuYueGuiBins.push(ticket);
                                break;
                            case "04":
                                yuYuePuTongs.push(ticket);
                                break;
                            default:
                                weiZhis.push(ticket);
                                break;
                        }
                    }
                }
                var guiBinRadius, puTongRadius, yuYueGuiBinRadius, yuYuePuTongRadius, weiZhiRadius;
                var totalLength = guiBins.length + puTongs.length + yuYueGuiBins.length + yuYuePuTongs.length + weiZhis.length;
                if (totalLength == 0) {
                    guiBinRadius = 0;
                    puTongRadius = 0;
                    yuYueGuiBinRadius = 0;
                    yuYuePuTongRadius = 0;
                    weiZhiRadius = 0;
                }
                else {
                    guiBinRadius = guiBins.length / totalLength;
                    puTongRadius = puTongs.length / totalLength;
                    yuYueGuiBinRadius = yuYueGuiBins.length / totalLength;
                    yuYuePuTongRadius = yuYuePuTongs.length / totalLength;
                    weiZhiRadius = weiZhis.length / totalLength;
                }
                var graphicData1 = [];
                if (guiBins.length != 0)
                    graphicData1.push({ value: guiBins.length, name: '贵宾客户', id: 'PaiDuiXinXiMainPage', radius: guiBinRadius });
                if (puTongs.length != 0)
                    graphicData1.push({ value: puTongs.length, name: '普通客户', id: 'PaiDuiXinXiMainPage', radius: puTongRadius });
                if (yuYueGuiBins.length != 0)
                    graphicData1.push({ value: yuYueGuiBins.length, name: '预约贵宾', id: 'PaiDuiXinXiMainPage', radius: yuYueGuiBinRadius });
                if (yuYuePuTongs.length != 0)
                    graphicData1.push({ value: yuYuePuTongs.length, name: '预约普通', id: 'PaiDuiXinXiMainPage', radius: yuYuePuTongRadius });
                if (weiZhis.length != 0)
                    graphicData1.push({ value: weiZhis.length, name: '未知客户', id: 'PaiDuiXinXiMainPage', radius: weiZhiRadius });
                var graphicData = [];
                graphicData.push({ value: guiBins.length, name: '贵宾客户', id: 'PaiDuiXinXiMainPage', radius: guiBinRadius });
                graphicData.push({ value: puTongs.length, name: '普通客户', id: 'PaiDuiXinXiMainPage', radius: puTongRadius });
                graphicData.push({ value: yuYueGuiBins.length, name: '预约贵宾', id: 'PaiDuiXinXiMainPage', radius: yuYueGuiBinRadius });
                graphicData.push({ value: yuYuePuTongs.length, name: '预约普通', id: 'PaiDuiXinXiMainPage', radius: yuYuePuTongRadius });
                graphicData.push({ value: weiZhis.length, name: '未知客户', id: 'PaiDuiXinXiMainPage', radius: weiZhiRadius });
                // 卡类型饼状图
                var option = {
                    color: ['#fd5a5d', '#fda93f', '#c9edff', 'pink', '#1dc2b2', 'purple', 'green', 'blue'],
                    calculable: true,
                    series: [
                        {
                            name: '卡队列',
                            type: 'pie',
                            radius: '90px',
                            center: ['50%', '140px'],
                            data: graphicData1,
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        formatter: '{d}%',
                                        textStyle: {
                                            // 用 itemStyle.normal.label.textStyle.fontSize 來更改餅圖上項目字體大小
                                            fontSize: 15
                                        }
                                    },
                                    labelLine: { show: true }
                                }
                            }
                        }
                    ]
                };
                var cardTypePie = document.getElementById('cardTypePie');
                var myChart = echarts.init(cardTypePie);
                myChart.setOption(option);
                //todo 根据业务逻辑禁止当前点击事件，点击事件编写方法,
                /* myChart.on('click', function (e) {
                     var page = "btop.bui." + e.data.id;
                     setTimeout(function(){
                         PageManager.to(page);
                     },0)
                 });*/
                var $customerTypeRadiusMount = $("#customerTypeRadiusMount");
                //绘制客户比例图
                for (var i in graphicData) {
                    var option1 = {
                        attachElement: $customerTypeRadiusMount,
                        title: graphicData[i].name,
                        size: graphicData[i].value,
                        attr: {
                            width: graphicData[i].radius * 100 * 1.3 + 'px',
                            backgroundColor: option.color[i]
                        }
                    };
                    this.generateRectTempt(option1);
                }
                btop.hui.Global.LoadingToast.hide();
            };
            /**
             * @description 计算业务饼图数据，及展示
             * @customerQueues 队列数据
             */
            TingTangMainPage.prototype.computeBussinessPie = function (customerQueues) {
                var _this = this;
                var graphicData = [];
                var graphicData1 = [];
                var totalLenth = 0;
                for (var i in customerQueues.BusQueue) {
                    var temData = {
                        value: customerQueues.BusQueue[i].Ticket.length,
                        name: customerQueues.BusQueue[i].BusName,
                        id: 'PaiDuiXinXiMainPage',
                        radius: ''
                    };
                    totalLenth += customerQueues.BusQueue[i].Ticket.length;
                    graphicData.push(temData);
                    if (customerQueues.BusQueue[i].Ticket.length != 0) {
                        graphicData1.push(temData);
                    }
                }
                for (var j in graphicData) {
                    graphicData[j].radius = graphicData[j].value / totalLenth;
                }
                for (var j in graphicData1) {
                    graphicData1[j].radius = graphicData1[j].value / totalLenth;
                }
                //业务类型饼状图
                var option1 = {
                    color: ['#fd5a5d', '#fda93f', '#c9edff', 'pink', '#1dc2b2', 'purple', 'green', 'blue'],
                    calculable: true,
                    series: [
                        {
                            name: '卡队列',
                            type: 'pie',
                            radius: '90px',
                            center: ['50%', '140px'],
                            data: graphicData1,
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        formatter: '{d}%',
                                        textStyle: {
                                            // 用 itemStyle.normal.label.textStyle.fontSize 來更改餅圖上項目字體大小
                                            fontSize: 15
                                        }
                                    },
                                    labelLine: { show: true }
                                }
                            },
                            textStyle: {
                                // 用 itemStyle.normal.label.textStyle.fontSize 來更改餅圖上項目字體大小
                                fontSize: 15
                            }
                        }
                    ]
                };
                var businessTypePie = document.getElementById('businessTypePie'); //取html的 id
                var myChart1 = echarts.init(businessTypePie);
                myChart1.setOption(option1);
                //点击事件编写方法
                myChart1.on('click', function (p) {
                    var pageid = p.data.id;
                    var page = "btop.bui." + pageid;
                    setTimeout(function () {
                        PageManager.to(page, { waitingCount: _this.waitingCount, calledCount: _this.calledCount });
                    }, 0);
                });
                var $bussinessTypeContainerMount = $("#bussinessTypeRadiusMount");
                //绘制业务比例图
                for (var i in graphicData) {
                    var option = {
                        attachElement: $bussinessTypeContainerMount,
                        title: graphicData[i].name,
                        size: graphicData[i].value,
                        attr: {
                            width: graphicData[i].radius * 100 * 1.3 + 'px',
                            backgroundColor: option1.color[i]
                        }
                    };
                    this.generateRectTempt2(option);
                }
            };
            /**
             * @description 计算客户等待图数据，及展示
             * @customerQueues 队列数据
             */
            TingTangMainPage.prototype.computeWaitingRect = function (customerQueues) {
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
                this.calledCount = calledTickets.length;
                this.waitingCount = waitingTickets.length;
                //把数据分段抽出，分别放到不同的容器中
                var m20Tickets = new Array();
                var m40Tickets = new Array();
                var m60Tickets = new Array();
                var m80Tickets = new Array();
                var m100Tickets = new Array();
                var m120Tickets = new Array();
                var mOtherTickets = new Array();
                var currentTime = new Date().getTime();
                var allWaitingTime = 0; //计算总时长，为了是求取平均值
                for (var k in waitingTickets) {
                    var ticket = waitingTickets[k];
                    var timeGaps = (currentTime - new Date(ticket.PrintTime).getTime()) / (60 * 1000); //求出时间差单位为分钟
                    allWaitingTime += timeGaps;
                    if (timeGaps > 0 && timeGaps <= 20) {
                        m20Tickets.push(ticket);
                    }
                    else if (timeGaps > 20 && timeGaps <= 40) {
                        m40Tickets.push(ticket);
                    }
                    else if (timeGaps > 40 && timeGaps <= 60) {
                        m60Tickets.push(ticket);
                    }
                    else if (timeGaps > 60 && timeGaps <= 80) {
                        m80Tickets.push(ticket);
                    }
                    else if (timeGaps > 80 && timeGaps <= 100) {
                        m100Tickets.push(ticket);
                    }
                    else if (timeGaps > 100 && timeGaps <= 120) {
                        m120Tickets.push(ticket);
                    }
                    else {
                        mOtherTickets.push(ticket);
                    }
                }
                var averageTime = allWaitingTime / waitingTickets.length;
                $(this.nodeTypeMap.get('M20WaitingNode')).html(m20Tickets.length);
                $(this.nodeTypeMap.get('M40WaitingNode')).html(m40Tickets.length);
                $(this.nodeTypeMap.get('M60WaitingNode')).html(m60Tickets.length);
                $(this.nodeTypeMap.get('M80WaitingNode')).html(m80Tickets.length);
                $(this.nodeTypeMap.get('M100WaitingNode')).html(m100Tickets.length);
                $(this.nodeTypeMap.get('M120WaitingNode')).html(m120Tickets.length);
                $(this.nodeTypeMap.get('MOtherWaitingNode')).html(mOtherTickets.length);
                $(this.nodeTypeMap.get('avgMinutesNode')).html(Math.floor(averageTime));
            };
            /**
             * @description 生成比例矩形图
             * @param opt
             */
            TingTangMainPage.prototype.generateRectTempt = function (opt) {
                if (opt === void 0) { opt = { attachElement: JQuery, title: string, size: number, attr: { width: string, backgroundColor: string } }; }
                var temp = "<div class=\"row\">\n                                   <div class=\"col l5\" style=\"text-align: right\">" + opt.title + ":&nbsp;&nbsp;&nbsp;&nbsp;</div>\n                                   <div class=\"col l7\">\n                                        <div class=\"type\" style=\"display:inline-block;background-color:" + opt.attr.backgroundColor + ";width:" + opt.attr.width + ";margin-top: 5px\"></div>\n                                        <div style=\"display: inline-block;\">&nbsp;" + opt.size + "\u4EBA</div>\n                                   </div>\n                              </div>";
                $(temp).appendTo(opt.attachElement);
            };
            TingTangMainPage.prototype.generateRectTempt2 = function (opt) {
                if (opt === void 0) { opt = { attachElement: JQuery, title: string, size: number, attr: { width: string, backgroundColor: string } }; }
                var temp = "<div class=\"row\">\n                                   <div class=\"col l5\" style=\"text-align: right\">" + opt.title + ":&nbsp;&nbsp;&nbsp;&nbsp;</div>\n                                   <div class=\"col l7\">\n                                        <div class=\"type\" style=\"display:inline-block;background-color:" + opt.attr.backgroundColor + ";width:" + opt.attr.width + "\"></div>\n                                        <div style=\"display: inline-block;\">&nbsp;" + opt.size + "\u4EBA</div>\n                                   </div>\n                              </div>";
                $(temp).appendTo(opt.attachElement);
            };
            return TingTangMainPage;
        })(Page);
        bui.TingTangMainPage = TingTangMainPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=TingTangMainPage.js.map