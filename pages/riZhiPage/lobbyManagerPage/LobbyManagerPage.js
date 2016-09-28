var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by wangxinlu on 2016/6/27.
 */
///<reference path="../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../scripts/bns/btop.bui.d.ts"/>
///<reference path="../../../scripts/libs/vue.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var WidgetManager = btop.hui.WidgetManager;
        var LobbyManagerPage = (function (_super) {
            __extends(LobbyManagerPage, _super);
            function LobbyManagerPage() {
                _super.apply(this, arguments);
            }
            LobbyManagerPage.prototype.initView = function () {
                //当天日志vue
                this.todayVue = new Vue({
                    el: '#LobbyManagerPage',
                    data: {
                        lobbyManagerLog: null
                    },
                    methods: {}
                });
                //选中某天日志vue
                this.chooseDateVue = new Vue({
                    el: '#createLobbyManagerPage',
                    data: {
                        LOGDATE: '',
                        OWNERCODE: "",
                        ARRPOST: "",
                        IOENVIRONMENT: "",
                        CLOTHES: "",
                        VISITORBOOK: "",
                        ATTENDMEET: "",
                        ATMRUN: "",
                        MONEYMACHINE: "",
                        QUEUEMACHINE: "",
                        ELESCREEN: "",
                        TEREQUIPMENT: "",
                        PROPAPER: "",
                        PLAYBILL: "",
                        NOTICE: "",
                        EXPENSESCHART: "",
                        CUSTVOUCHER: "",
                        TEREQUIPMENTCASE: "",
                        CUSTOMERCASE: "",
                        REQUIRECASE: "",
                        MAJORMATTER: "",
                        OTHERMATTER: "",
                        CALLNUM: "",
                        COUNTEREXNUM: "",
                        BUSINESSSTOP: "",
                        TERMDUMP: "",
                        REVISITORBOOK: "",
                        RECOMMENDSUM: "",
                        TJSUCCNUM: ""
                    },
                    methods: {}
                });
                var _this = this;
                //默认显示当天的日志，1. 首先去缓存拿数据，如果有数据则展示数据。2.如果没有数据，就显示创建日志按钮。
                bui.DbManager.sessionGet("Logs", true).then(function (data) {
                    var currentMonth = bui.TimeUtil.getYM();
                    if (data == null) {
                        $('#LobbyManagerPage').hide();
                        $('#createLobbyChoose').show();
                    }
                    else {
                        if (data[currentMonth]) {
                            var logsData = (data[currentMonth]);
                            var today = bui.TimeUtil.getToday();
                            var flag = true;
                            for (var i in logsData) {
                                if (logsData[i].LOGDATE == today) {
                                    $('#LobbyManagerPage').show();
                                    $('#createLobbyChoose').hide();
                                    flag = false;
                                    _this.todayVue._data.lobbyManagerLog = logsData[i];
                                }
                            }
                            if (flag) {
                                var today_1 = bui.TimeUtil.getToday();
                                var lobbyManagerPage = WidgetManager.byId('btop.bui.LobbyManagerPage');
                                lobbyManagerPage.show(today_1);
                            }
                        }
                        else {
                            $('#LobbyManagerPage').hide();
                            $('#createLobbyChoose').show();
                        }
                    }
                });
            };
            /**
             * @description 展示选中日期的日志
             * @param data 出入的日期或选中日期的日志，这个数据比较重要，其数据结构为data[data['date']]
             * 1.当选中日期没有日志时，出入的data为选中日志 其格式为YYYY-MM-DD
             * 2.当选择日期有数据时，此时data["date"]为选中日期，根据这个选中日期去找传入的数据，格式为data[data['date']]
             * 注意：data[data['date']]可以根据泛型来进行强类型检测  如<LobbyManagerLogs>data[data['date']]
             */
            LobbyManagerPage.prototype.show = function (data) {
                var log = WidgetManager.byId('log');
                var _this = this;
                var workDate = data;
                if (data[data['date']]) {
                    $('#LobbyManagerPage').show();
                    $('#createLobbyChoose').hide();
                    $('#createLobbyManagerPage').hide();
                    var lobbyManagerLog = data[data['date']];
                    this.todayVue._data.lobbyManagerLog = lobbyManagerLog;
                }
                else {
                    var userId = "";
                    bui.DbManager.sessionGet("UserInfo", true).then(function (data) {
                        userId = data.UserId;
                    });
                    if (this.isDuringRangeDate(workDate)) {
                        $('#LobbyManagerPage').hide();
                        $('#createLobbyChoose').show();
                        $('#createLobbyManagerPage').hide();
                    }
                    else {
                        $('#LobbyManagerPage').hide();
                        $('#createLobbyChoose').hide();
                        bui.BGlobal.Alert.show({ title: '提示', content: "\u53EA\u80FD\u5F55\u5165" + bui.TimeUtil.getAnotherDay(30) + "\u81F3" + bui.TimeUtil.getToday() + "\u7684\u65E5\u5FD7\uFF01" });
                    }
                    _this.chooseDateVue._data.LOGDATE = workDate;
                    _this.chooseDateVue._data.OWNERCODE = userId;
                    var currentMonth = workDate.substr(0, 7);
                    $('#createLobbyChoose').unbind('click').click(function (e) {
                        $('#createLobbyChoose').hide();
                        $('#LobbyManagerPage').hide();
                        _this.chooseDateVue._data.ARRPOST = "";
                        _this.chooseDateVue._data.IOENVIRONMENT = "";
                        _this.chooseDateVue._data.CLOTHES = "";
                        _this.chooseDateVue._data.VISITORBOOK = "";
                        _this.chooseDateVue._data.ATTENDMEET = "";
                        _this.chooseDateVue._data.ATMRUN = "";
                        _this.chooseDateVue._data.MONEYMACHINE = "";
                        _this.chooseDateVue._data.QUEUEMACHINE = "";
                        _this.chooseDateVue._data.ELESCREEN = "";
                        _this.chooseDateVue._data.TEREQUIPMENT = "";
                        _this.chooseDateVue._data.PROPAPER = "";
                        _this.chooseDateVue._data.PLAYBILL = "";
                        _this.chooseDateVue._data.NOTICE = "";
                        _this.chooseDateVue._data.EXPENSESCHART = "";
                        _this.chooseDateVue._data.CUSTVOUCHER = "";
                        _this.chooseDateVue._data.TEREQUIPMENTCASE = "";
                        _this.chooseDateVue._data.CUSTOMERCASE = "";
                        _this.chooseDateVue._data.REQUIRECASE = "";
                        _this.chooseDateVue._data.MAJORMATTER = "";
                        _this.chooseDateVue._data.OTHERMATTER = "";
                        _this.chooseDateVue._data.CALLNUM = "";
                        _this.chooseDateVue._data.COUNTEREXNUM = "";
                        _this.chooseDateVue._data.BUSINESSSTOP = "";
                        _this.chooseDateVue._data.TERMDUMP = "";
                        _this.chooseDateVue._data.REVISITORBOOK = "";
                        _this.chooseDateVue._data.RECOMMENDSUM = "";
                        _this.chooseDateVue._data.TJSUCCNUM = "";
                        $('#createLobbyManagerPage').show();
                        e.stopPropagation();
                    });
                    $('#quedingcreate').unbind('click').click(function () {
                        $('#createLobbyManagerPage').hide();
                        var reqMsg = new bui.ReqMsg();
                        reqMsg.body = {
                            LOGDATE: _this.chooseDateVue._data.LOGDATE,
                            OWNERCODE: _this.chooseDateVue._data.OWNERCODE,
                            ARRPOST: _this.chooseDateVue._data.ARRPOST,
                            IOENVIRONMENT: _this.chooseDateVue._data.IOENVIRONMENT,
                            CLOTHES: _this.chooseDateVue._data.CLOTHES,
                            VISITORBOOK: _this.chooseDateVue._data.VISITORBOOK,
                            ATTENDMEET: _this.chooseDateVue._data.ATTENDMEET,
                            ATMRUN: _this.chooseDateVue._data.ATMRUN,
                            MONEYMACHINE: _this.chooseDateVue._data.MONEYMACHINE,
                            QUEUEMACHINE: _this.chooseDateVue._data.QUEUEMACHINE,
                            ELESCREEN: _this.chooseDateVue._data.ELESCREEN,
                            TEREQUIPMENT: _this.chooseDateVue._data.TEREQUIPMENT,
                            PROPAPER: _this.chooseDateVue._data.PROPAPER,
                            PLAYBILL: _this.chooseDateVue._data.PLAYBILL,
                            NOTICE: _this.chooseDateVue._data.NOTICE,
                            EXPENSESCHART: _this.chooseDateVue._data.EXPENSESCHART,
                            CUSTVOUCHER: _this.chooseDateVue._data.CUSTVOUCHER,
                            TEREQUIPMENTCASE: _this.chooseDateVue._data.TEREQUIPMENTCASE,
                            CUSTOMERCASE: _this.chooseDateVue._data.CUSTOMERCASE,
                            REQUIRECASE: _this.chooseDateVue._data.REQUIRECASE,
                            MAJORMATTER: _this.chooseDateVue._data.MAJORMATTER,
                            OTHERMATTER: _this.chooseDateVue._data.OTHERMATTER,
                            CALLNUM: _this.chooseDateVue._data.CALLNUM,
                            COUNTEREXNUM: _this.chooseDateVue._data.COUNTEREXNUM,
                            BUSINESSSTOP: _this.chooseDateVue._data.BUSINESSSTOP,
                            TERMDUMP: _this.chooseDateVue._data.TERMDUMP,
                            REVISITORBOOK: _this.chooseDateVue._data.REVISITORBOOK,
                            RECOMMENDSUM: _this.chooseDateVue._data.RECOMMENDSUM,
                            TJSUCCNUM: _this.chooseDateVue._data.TJSUCCNUM
                        };
                        var chooseDayLogData = reqMsg.body; //临时把requestbody数据装在到一个容器中，方便数据传递显示
                        bui.HttpUtils.bipHttp('jobLog_lobbyManagerFillIn', reqMsg).then(function (data) {
                            if (data.header.rc == "0000") {
                                bui.DbManager.sessionGet("Logs", true).then(function (data) {
                                    //首先判断当前月是否有信息
                                    if (data[currentMonth]) {
                                        var logsData = (data[currentMonth]);
                                        logsData.push(reqMsg.body);
                                        //数据添加到logsData之后，目前只是在内存中，还需要把内存中的logsData放到缓存中即sessionStorage
                                        var tempData = {};
                                        tempData[currentMonth] = logsData;
                                        bui.DbManager.sessionPut("Logs", tempData, true, false).then(function (data) {
                                            var logsData = data;
                                            var logsMap = _this.getExistLogsMap(currentMonth, 'LOGDATE', logsData);
                                            log.show(logsMap);
                                            _this.todayVue._data.lobbyManagerLog = chooseDayLogData;
                                        });
                                    }
                                    else {
                                        var logsSData = new Array();
                                        logsSData.push(reqMsg.body);
                                        var tempData = {};
                                        tempData[currentMonth] = logsSData;
                                        bui.DbManager.sessionPut("Logs", tempData, true, false).then(function (data) {
                                            var logsData = data;
                                            var logsMap = _this.getExistLogsMap(currentMonth, 'LOGDATE', logsData);
                                            log.show(logsMap);
                                            _this.todayVue._data.lobbyManagerLogs = chooseDayLogData;
                                        });
                                    }
                                });
                            }
                            else {
                                bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                            }
                        }, function (data) {
                            bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                        });
                        $('#LobbyManagerPage').show();
                    });
                    $('#cancelcreate').unbind('click').click(function () {
                        $('#createLobbyManagerPage').hide();
                        $('#LobbyManagerPage').hide();
                        $('#createLobbyChoose').show();
                    });
                }
            };
            /**
             *
             * @param currentMonth
             * @param logsData
             * @returns {Map<string, string>}
             */
            LobbyManagerPage.prototype.getExistLogsMap = function (currentMonth, dateField, logsData) {
                var logsMap = new Map();
                for (var i = 1; i <= 31; i++) {
                    var date = currentMonth + '-' + (i < 10 ? ("0" + i) : i);
                    for (var j in logsData[currentMonth]) {
                        if (logsData[currentMonth][j][dateField] == date) {
                            logsMap.set(logsData[currentMonth][j][dateField], logsData[currentMonth][j]);
                        }
                    }
                }
                return logsMap;
            };
            /**
             * @description 判断选中的日期是否在当月前后两月之内
             */
            LobbyManagerPage.prototype.isDuringRangeDate = function (chooseDate) {
                var nextMonthDate = new Date().getTime();
                var preMonthDate = new Date(bui.TimeUtil.getAnotherDay(30)).getTime();
                var chooseDateArg = new Date(chooseDate).getTime();
                if (chooseDateArg <= nextMonthDate && chooseDateArg >= preMonthDate) {
                    return true;
                }
                else {
                    return false;
                }
            };
            return LobbyManagerPage;
        })(Page);
        bui.LobbyManagerPage = LobbyManagerPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=LobbyManagerPage.js.map