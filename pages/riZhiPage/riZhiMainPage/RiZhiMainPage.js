var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Administrator on 2016/5/4.
 */
///<reference path="../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../scripts/bns/btop.bui.d.ts"/>
///<reference path="../accountManagerPage/AccountManagerPage.ts"/>
///<reference path="../lobbyManagerPage/LobbyManagerPage.ts"/>
///<reference path="../tomorrowPlanPage/TomorrowPlanPage.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var PageManager = btop.hui.PageManager;
        var WidgetManager = btop.hui.WidgetManager;
        var RiZhiMainPage = (function (_super) {
            __extends(RiZhiMainPage, _super);
            function RiZhiMainPage() {
                _super.apply(this, arguments);
            }
            RiZhiMainPage.prototype.initView = function () {
                var _this = this;
                $(this.nodeTypeMap.get('openMainPage')).click(function () {
                    PageManager.to('btop.bui.MainPage');
                });
                bui.DbManager.sessionGet("UserInfo", true).then(function (data) {
                    var userrole = data.UserRole;
                    if (userrole == 1) {
                        $('#tomorrowPlan').hide();
                        _this.lobbyManagerOperate(); //大堂经理日志操作
                    }
                    else if (userrole == 2) {
                        $('#tomorrowPlan').show();
                        _this.accountManagerOperate(); //客户经理日志操作
                    }
                });
            };
            /**
             * @description 客户经理日志操作
             */
            RiZhiMainPage.prototype.accountManagerOperate = function () {
                PageManager.embedTo("btop.bui.AccountManagerPage", "mountId");
                var userId = "";
                bui.DbManager.sessionGet("UserInfo", true).then(function (data) {
                    userId = data.UserId;
                });
                var log = WidgetManager.byId('log');
                log.setTheme(bui.LogCalendarTheme.SIMPLE);
                var _this = this;
                bui.DbManager.sessionGet("Logs", true).then(function (data) {
                    var currentMonth = bui.TimeUtil.getYM();
                    var nextMonth = bui.TimeUtil.getNextYM();
                    if (data != null) {
                        if (data[currentMonth]) {
                            var logsData = data;
                            var logsMap = _this.getExistLogsMap(currentMonth, 'WORKLOGDATE', logsData);
                            log.show(logsMap);
                            log.unbind('click').on('click', function (e) {
                                var returnData = e[0].data;
                                var accountManagerPage = WidgetManager.byId('btop.bui.AccountManagerPage');
                                accountManagerPage.show(returnData);
                            });
                            //下一个月事件触发操作
                            log.nextBtn.unbind('click').on('click', function (e) {
                                var currentYM = e[0].data['currentYM'];
                                var nextYM = e[0].data['nextYM'];
                                if (data[currentYM]) {
                                    var logsData_1 = data;
                                    var logsMap_1 = _this.getExistLogsMap(currentYM, 'WORKLOGDATE', logsData_1);
                                    log.show(logsMap_1);
                                    log.unbind('click').on('click', function (e) {
                                        var returnData = e[0].data;
                                        var accountManagerPage = WidgetManager.byId('btop.bui.AccountManagerPage');
                                        accountManagerPage.show(returnData);
                                    });
                                }
                                else {
                                    var reqMsg = new bui.ReqMsg();
                                    reqMsg.body = {
                                        OWNERCODE: userId,
                                        STARTDT: currentYM + "-01",
                                        ENDDT: nextYM + "-01"
                                    };
                                    bui.HttpUtils.bipHttp('jobLog_accountManagerList', reqMsg).then(function (data) {
                                        if (data.header.rc == "0000") {
                                            var resMsg = data;
                                            var currentMonthData = {};
                                            currentMonthData[currentYM] = resMsg.body['LogList'];
                                            bui.DbManager.sessionPut("Logs", currentMonthData, true, false).then(function (data) {
                                                var logsData = data;
                                                var logsMap = _this.getExistLogsMap(currentYM, 'WORKLOGDATE', logsData);
                                                log.show(logsMap);
                                                log.unbind('click').on('click', function (e) {
                                                    var returnData = e[0].data;
                                                    var accountManagerPage = WidgetManager.byId('btop.bui.AccountManagerPage');
                                                    accountManagerPage.show(returnData);
                                                });
                                            });
                                        }
                                        else {
                                            bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                        }
                                    }, function (data) {
                                        bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                                    });
                                }
                            });
                            //上一个月事件触发操作
                            log.preBtn.unbind('click').on('click', function (e) {
                                var currentYM = e[0].data['currentYM'];
                                var nextYM = e[0].data['nextYM'];
                                if (data[currentYM]) {
                                    var logsData_2 = data;
                                    var logsMap_2 = _this.getExistLogsMap(currentYM, 'WORKLOGDATE', logsData_2);
                                    log.show(logsMap_2);
                                    log.unbind('click').on('click', function (e) {
                                        var returnData = e[0].data;
                                        var accountManagerPage = WidgetManager.byId('btop.bui.AccountManagerPage');
                                        accountManagerPage.show(returnData);
                                        e[0]['event'].stopPropagation();
                                    });
                                }
                                else {
                                    var reqMsg = new bui.ReqMsg();
                                    reqMsg.body = {
                                        OWNERCODE: userId,
                                        STARTDT: currentYM + "-01",
                                        ENDDT: nextYM + "-01"
                                    };
                                    bui.HttpUtils.bipHttp('jobLog_accountManagerList', reqMsg).then(function (data) {
                                        if (data.header.rc == "0000") {
                                            var resMsg = data;
                                            var currentMonthData = {};
                                            currentMonthData[currentYM] = resMsg.body['LogList'];
                                            bui.DbManager.sessionPut("Logs", currentMonthData, true, false).then(function (data) {
                                                var logsData = data;
                                                var logsMap = _this.getExistLogsMap(currentYM, 'WORKLOGDATE', logsData);
                                                log.show(logsMap);
                                                log.unbind('click').on('click', function (e) {
                                                    var returnData = e[0].data;
                                                    var accountManagerPage = WidgetManager.byId('btop.bui.AccountManagerPage');
                                                    accountManagerPage.show(returnData);
                                                });
                                            });
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
                        else {
                            var reqMsg = new bui.ReqMsg();
                            reqMsg.body = {
                                OWNERCODE: userId,
                                STARTDT: currentMonth + "-01",
                                ENDDT: nextMonth + "-01"
                            };
                            bui.HttpUtils.bipHttp('jobLog_accountManagerList', reqMsg).then(function (data) {
                                if (data.header.rc == "0000") {
                                    var resMsg = data;
                                    var currentMonthData = {};
                                    if (resMsg.body != null) {
                                        currentMonthData[currentMonth] = resMsg.body['LogList'];
                                    }
                                    bui.DbManager.sessionPut("Logs", currentMonthData, true, false).then(function (data) {
                                        var logsData = data;
                                        var logsMap = _this.getExistLogsMap(currentMonth, 'WORKLOGDATE', logsData);
                                        log.show(logsMap);
                                        var returnData = {};
                                        var today = bui.TimeUtil.getToday();
                                        var data1 = null;
                                        var tt = null;
                                        for (var i in data) {
                                            tt = i;
                                        }
                                        for (var i in data[tt]) {
                                            if (data[tt][i].WORKLOGDATE == today) {
                                                data1 = data[tt][i];
                                            }
                                        }
                                        if (data1 != null) {
                                            returnData = (_a = {}, _a[today] = data1, _a["date"] = today, _a);
                                            var accountManagerPage1 = WidgetManager.byId('btop.bui.AccountManagerPage');
                                            accountManagerPage1.show(returnData);
                                        }
                                        log.unbind('click').on('click', function (e) {
                                            var returnData = e[0].data;
                                            var accountManagerPage = WidgetManager.byId('btop.bui.AccountManagerPage');
                                            accountManagerPage.show(returnData);
                                        });
                                        var _a;
                                    });
                                }
                                else {
                                    bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                }
                            }, function (data) {
                                bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                            });
                        }
                    }
                    else {
                        var reqMsg = new bui.ReqMsg();
                        reqMsg.body = {
                            OWNERCODE: userId,
                            STARTDT: currentMonth + "-01",
                            ENDDT: nextMonth + "-01"
                        };
                        bui.HttpUtils.bipHttp('jobLog_accountManagerList', reqMsg).then(function (data0) {
                            if (data0.header.rc == "0000") {
                                var resMsg = data0;
                                var currentMonthData = {};
                                if (resMsg.body != null) {
                                    currentMonthData[currentMonth] = resMsg.body['LogList'];
                                }
                                bui.DbManager.sessionPut("Logs", currentMonthData, true, true).then(function (data) {
                                    var logsData = data;
                                    var logsMap = _this.getExistLogsMap(currentMonth, 'WORKLOGDATE', logsData);
                                    log.show(logsMap);
                                    var returnData = {};
                                    var today = bui.TimeUtil.getToday();
                                    var data1 = null;
                                    var tt = null;
                                    for (var i in data) {
                                        tt = i;
                                    }
                                    for (var i in data[tt]) {
                                        if (data[tt][i].WORKLOGDATE == today) {
                                            data1 = data[tt][i];
                                        }
                                    }
                                    if (data1 != null) {
                                        returnData = (_a = {}, _a[today] = data1, _a["date"] = today, _a);
                                        var accountManagerPage1 = WidgetManager.byId('btop.bui.AccountManagerPage');
                                        accountManagerPage1.show(returnData);
                                    }
                                    log.unbind('click').on('click', function (e) {
                                        var returnData = e[0].data;
                                        var accountManagerPage = WidgetManager.byId('btop.bui.AccountManagerPage');
                                        accountManagerPage.show(returnData);
                                    });
                                    //下一个月事件触发操作
                                    log.nextBtn.unbind('click').on('click', function (e) {
                                        var currentYM = e[0].data['currentYM'];
                                        var nextYM = e[0].data['nextYM'];
                                        if (data[currentYM]) {
                                            var logsData_3 = data;
                                            var logsMap_3 = _this.getExistLogsMap(currentYM, 'WORKLOGDATE', logsData_3);
                                            log.show(logsMap_3);
                                            log.unbind('click').on('click', function (e) {
                                                var returnData = e[0].data;
                                                var accountManagerPage = WidgetManager.byId('btop.bui.AccountManagerPage');
                                                accountManagerPage.show(returnData);
                                            });
                                        }
                                        else {
                                            var reqMsg_1 = new bui.ReqMsg();
                                            reqMsg_1.body = {
                                                OWNERCODE: userId,
                                                STARTDT: currentYM + "-01",
                                                ENDDT: nextYM + "-01"
                                            };
                                            bui.HttpUtils.bipHttp('jobLog_accountManagerList', reqMsg_1).then(function (data) {
                                                if (data.header.rc == "0000") {
                                                    var resMsg_1 = data;
                                                    var currentMonthData_1 = {};
                                                    currentMonthData_1[currentYM] = resMsg_1.body['LogList'];
                                                    bui.DbManager.sessionPut("Logs", currentMonthData_1, true, false).then(function (data) {
                                                        var logsData = data;
                                                        var logsMap = _this.getExistLogsMap(currentYM, 'WORKLOGDATE', logsData);
                                                        log.show(logsMap);
                                                        log.unbind('click').on('click', function (e) {
                                                            var returnData = e[0].data;
                                                            var accountManagerPage = WidgetManager.byId('btop.bui.AccountManagerPage');
                                                            accountManagerPage.show(returnData);
                                                        });
                                                    });
                                                }
                                                else {
                                                    bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                                }
                                            }, function (data) {
                                                bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                                            });
                                        }
                                    });
                                    //上一个月事件触发操作
                                    log.preBtn.unbind('click').on('click', function (e) {
                                        var currentYM = e[0].data['currentYM'];
                                        var nextYM = e[0].data['nextYM'];
                                        if (data[currentYM]) {
                                            var logsData_4 = data;
                                            var logsMap_4 = _this.getExistLogsMap(currentYM, 'WORKLOGDATE', logsData_4);
                                            log.show(logsMap_4);
                                            log.unbind('click').on('click', function (e) {
                                                var returnData = e[0].data;
                                                var accountManagerPage = WidgetManager.byId('btop.bui.AccountManagerPage');
                                                accountManagerPage.show(returnData);
                                                e[0]['event'].stopPropagation();
                                            });
                                        }
                                        else {
                                            var reqMsg_2 = new bui.ReqMsg();
                                            reqMsg_2.body = {
                                                OWNERCODE: userId,
                                                STARTDT: currentYM + "-01",
                                                ENDDT: nextYM + "-01"
                                            };
                                            bui.HttpUtils.bipHttp('jobLog_accountManagerList', reqMsg_2).then(function (data) {
                                                if (data.header.rc == "0000") {
                                                    var resMsg_2 = data;
                                                    var currentMonthData_2 = {};
                                                    currentMonthData_2[currentYM] = resMsg_2.body['LogList'];
                                                    bui.DbManager.sessionPut("Logs", currentMonthData_2, true, false).then(function (data) {
                                                        var logsData = data;
                                                        var logsMap = _this.getExistLogsMap(currentYM, 'WORKLOGDATE', logsData);
                                                        log.show(logsMap);
                                                        log.unbind('click').on('click', function (e) {
                                                            var returnData = e[0].data;
                                                            var accountManagerPage = WidgetManager.byId('btop.bui.AccountManagerPage');
                                                            accountManagerPage.show(returnData);
                                                        });
                                                    });
                                                }
                                                else {
                                                    bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                                }
                                            }, function (data) {
                                                bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                                            });
                                        }
                                    });
                                    var _a;
                                });
                            }
                            else {
                                bui.BGlobal.Alert.show({ title: "提示", content: data0.header.rm });
                            }
                        }, function (data) {
                            bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                        });
                    }
                });
                /**
                 * 明日计划
                 */
                $('#tomorrowPlan').click(function () {
                    var option = {
                        top: "10%",
                        left: '20%',
                        width: '70%',
                        height: '60%',
                        opacity: 1
                    };
                    var pageAlert = bui.BGlobal.PageAlert.show("btop.bui.TomorrowPlanPage", option);
                    pageAlert.confirmBtn.unbind("click").on("click", function (data) {
                        console.info(data);
                    });
                    //pageAlert.cancelBtn.unbind("click").on("click",function(data){
                    //    console.info(data);
                    //});
                });
            };
            /**
             * @description 大堂经理日志操作
             */
            RiZhiMainPage.prototype.lobbyManagerOperate = function () {
                PageManager.embedTo("btop.bui.LobbyManagerPage", "mountId");
                var userId = "";
                bui.DbManager.sessionGet("UserInfo", true).then(function (data) {
                    userId = data.UserId;
                });
                var log = WidgetManager.byId('log');
                log.setTheme(bui.LogCalendarTheme.SIMPLE);
                var _this = this;
                bui.DbManager.sessionGet("Logs", true).then(function (data) {
                    var currentMonth = bui.TimeUtil.getYM();
                    var nextMonth = bui.TimeUtil.getNextYM();
                    if (data != null) {
                        if (data[currentMonth]) {
                            var logsData = data;
                            var logsMap = _this.getExistLogsMap(currentMonth, 'LOGDATE', logsData);
                            log.show(logsMap);
                            log.unbind('click').on('click', function (e) {
                                //console.info(e);
                                var returnData = e[0].data;
                                var lobbyManagerPage = WidgetManager.byId('btop.bui.LobbyManagerPage');
                                lobbyManagerPage.show(returnData);
                            });
                            //下一个月事件触发操作
                            log.nextBtn.unbind('click').on('click', function (e) {
                                var currentYM = e[0].data['currentYM'];
                                var nextYM = e[0].data['nextYM'];
                                if (data[currentYM]) {
                                    var logsData_5 = data;
                                    var logsMap_5 = _this.getExistLogsMap(currentYM, 'LOGDATE', logsData_5);
                                    log.show(logsMap_5);
                                    log.unbind('click').on('click', function (e) {
                                        var returnData = e[0].data;
                                        var lobbyManagerPage = WidgetManager.byId('btop.bui.LobbyManagerPage');
                                        lobbyManagerPage.show(returnData);
                                    });
                                }
                                else {
                                    var reqMsg = new bui.ReqMsg();
                                    reqMsg.body = {
                                        OWNERCODE: userId,
                                        STARTDT: currentYM + "-01",
                                        ENDDT: nextYM + "-01"
                                    };
                                    bui.HttpUtils.bipHttp('jobLog_lobbyManagerList', reqMsg).then(function (data) {
                                        if (data.header.rc == "0000") {
                                            var resMsg = data;
                                            var currentMonthData = {};
                                            currentMonthData[currentYM] = resMsg.body['List'];
                                            bui.DbManager.sessionPut("Logs", currentMonthData, true, false).then(function (data) {
                                                var logsData = data;
                                                var logsMap = _this.getExistLogsMap(currentYM, 'LOGDATE', logsData);
                                                log.show(logsMap);
                                                log.unbind('click').on('click', function (e) {
                                                    var returnData = e[0].data;
                                                    var lobbyManagerPage = WidgetManager.byId('btop.bui.LobbyManagerPage');
                                                    lobbyManagerPage.show(returnData);
                                                });
                                            });
                                        }
                                        else {
                                            bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                        }
                                    }, function (data) {
                                        bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                                    });
                                }
                            });
                            //上一个月事件触发操作
                            log.preBtn.unbind('click').on('click', function (e) {
                                var currentYM = e[0].data['currentYM'];
                                var nextYM = e[0].data['nextYM'];
                                if (data[currentYM]) {
                                    var logsData_6 = data;
                                    var logsMap_6 = _this.getExistLogsMap(currentYM, 'LOGDATE', logsData_6);
                                    log.show(logsMap_6);
                                    log.unbind('click').on('click', function (e) {
                                        var returnData = e[0].data;
                                        var lobbyManagerPage = WidgetManager.byId('btop.bui.LobbyManagerPage');
                                        lobbyManagerPage.show(returnData);
                                        e[0]['event'].stopPropagation();
                                    });
                                }
                                else {
                                    var reqMsg = new bui.ReqMsg();
                                    reqMsg.body = {
                                        OWNERCODE: userId,
                                        STARTDT: currentYM + "-01",
                                        ENDDT: nextYM + "-01"
                                    };
                                    bui.HttpUtils.bipHttp('jobLog_lobbyManagerList', reqMsg).then(function (data) {
                                        if (data.header.rc == "0000") {
                                            var resMsg = data;
                                            var currentMonthData = {};
                                            currentMonthData[currentYM] = resMsg.body['List'];
                                            bui.DbManager.sessionPut("Logs", currentMonthData, true, false).then(function (data) {
                                                var logsData = data;
                                                var logsMap = _this.getExistLogsMap(currentYM, 'LOGDATE', logsData);
                                                log.show(logsMap);
                                                log.unbind('click').on('click', function (e) {
                                                    var returnData = e[0].data;
                                                    var lobbyManagerPage = WidgetManager.byId('btop.bui.LobbyManagerPage');
                                                    lobbyManagerPage.show(returnData);
                                                });
                                            });
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
                        else {
                            var reqMsg = new bui.ReqMsg();
                            reqMsg.body = {
                                OWNERCODE: userId,
                                STARTDT: currentMonth + "-01",
                                ENDDT: nextMonth + "-01"
                            };
                            bui.HttpUtils.bipHttp('jobLog_lobbyManagerList', reqMsg).then(function (data) {
                                if (data.header.rc == "0000") {
                                    var resMsg = data;
                                    var currentMonthData = {};
                                    currentMonthData[currentMonth] = resMsg.body['List'];
                                    bui.DbManager.sessionPut("Logs", currentMonthData, true, false).then(function (data) {
                                        var logsData = data;
                                        var logsMap = _this.getExistLogsMap(currentMonth, 'LOGDATE', logsData);
                                        log.show(logsMap);
                                        var returnData = {};
                                        var today = bui.TimeUtil.getToday();
                                        var data1 = null;
                                        var tt = null;
                                        for (var i in data) {
                                            tt = i;
                                        }
                                        for (var i in data[tt]) {
                                            if (data[tt][i].LOGDATE == today) {
                                                data1 = data[tt][i];
                                            }
                                        }
                                        if (data1 != null) {
                                            returnData = (_a = {}, _a[today] = data1, _a["date"] = today, _a);
                                            var accountManagerPage1 = WidgetManager.byId('btop.bui.LobbyManagerPage');
                                            accountManagerPage1.show(returnData);
                                        }
                                        log.unbind('click').on('click', function (e) {
                                            var returnData = e[0].data;
                                            var lobbyManagerPage = WidgetManager.byId('btop.bui.LobbyManagerPage');
                                            lobbyManagerPage.show(returnData);
                                        });
                                        var _a;
                                    });
                                }
                                else {
                                    bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                }
                            }, function (data) {
                                bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                            });
                        }
                    }
                    else {
                        var reqMsg = new bui.ReqMsg();
                        reqMsg.body = {
                            OWNERCODE: userId,
                            STARTDT: currentMonth + "-01",
                            ENDDT: nextMonth + "-01"
                        };
                        bui.HttpUtils.bipHttp('jobLog_lobbyManagerList', reqMsg).then(function (data) {
                            if (data.header.rc == "0000") {
                                var resMsg = data;
                                var currentMonthData = {};
                                currentMonthData[currentMonth] = resMsg.body['List'];
                                bui.DbManager.sessionPut("Logs", currentMonthData, true, true).then(function (data) {
                                    var logsData = data;
                                    var logsMap = _this.getExistLogsMap(currentMonth, 'LOGDATE', logsData);
                                    log.show(logsMap);
                                    var returnData = {};
                                    var today = bui.TimeUtil.getToday();
                                    var data1 = null;
                                    var tt = null;
                                    for (var i in data) {
                                        tt = i;
                                    }
                                    for (var i in data[tt]) {
                                        if (data[tt][i].LOGDATE == today) {
                                            data1 = data[tt][i];
                                        }
                                    }
                                    if (data1 != null) {
                                        returnData = (_a = {}, _a[today] = data1, _a["date"] = today, _a);
                                        var accountManagerPage1 = WidgetManager.byId('btop.bui.LobbyManagerPage');
                                        accountManagerPage1.show(returnData);
                                    }
                                    log.unbind('click').on('click', function (e) {
                                        var returnData = e[0].data;
                                        var lobbyManagerPage = WidgetManager.byId('btop.bui.LobbyManagerPage');
                                        lobbyManagerPage.show(returnData);
                                    });
                                    var _a;
                                });
                            }
                            else {
                                bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                            }
                        }, function (data) {
                            bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                        });
                    }
                });
            };
            /**
             *
             * @param currentMonth
             * @param logsData
             * @returns {Map<string, string>}
             */
            RiZhiMainPage.prototype.getExistLogsMap = function (currentMonth, dateField, logsData) {
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
            RiZhiMainPage.prototype.getExistLogsMapt = function (currentMonth, dateField, logsData) {
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
            RiZhiMainPage.prototype.destroy = function () {
                var accountManagerPage = WidgetManager.byId('btop.bui.AccountManagerPage');
                var lobbyManagerPage = WidgetManager.byId('btop.bui.LobbyManagerPage');
                //let tomorrowPlanPage:TomorrowPlanPage = <TomorrowPlanPage>WidgetManager.byId('btop.bui.TomorrowPlanPage');
                if (accountManagerPage) {
                    accountManagerPage.destroy();
                }
                if (lobbyManagerPage) {
                    lobbyManagerPage.destroy();
                }
                _super.prototype.destroy.call(this);
            };
            return RiZhiMainPage;
        })(btop.hui.Page);
        bui.RiZhiMainPage = RiZhiMainPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=RiZhiMainPage.js.map