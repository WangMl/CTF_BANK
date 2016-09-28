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
        var AccountManagerPage = (function (_super) {
            __extends(AccountManagerPage, _super);
            function AccountManagerPage() {
                _super.apply(this, arguments);
            }
            AccountManagerPage.prototype.initView = function () {
                this.validatorUtils = new bui.ValidatorUtils();
                this.validatorUtils.validate($("#createAccountManagerPage")[0]);
                //当天日志vue
                this.todayVue = new Vue({
                    el: '#AccountManagerPage',
                    data: {
                        accountManagerLog: null
                    },
                    methods: {}
                });
                //选中某天日志vue
                this.chooseDateVue = new Vue({
                    el: '#createAccountManagerPage',
                    data: {
                        WORKLOGDATE: '',
                        OWNERCODE: "",
                        BESPOKENUM: "",
                        PHONENUM: "",
                        BESPOKELIST: "",
                        PHONELIST: "",
                        HOLDFINSALON: "",
                        QUEADVISE: "",
                        OTHER: "",
                        BRNAME: ""
                    },
                    methods: {}
                });
                var _this = this;
                //默认显示当天的日志，1. 首先去缓存拿数据，如果有数据则展示数据。2.如果没有数据，就显示创建日志按钮。
                bui.DbManager.sessionGet("Logs", true).then(function (data) {
                    var currentMonth = bui.TimeUtil.getYM();
                    if (data == null) {
                        _this.createNewLog(bui.TimeUtil.getToday());
                    }
                    else {
                        if (data[currentMonth]) {
                            var logsData = (data[currentMonth]);
                            var today = bui.TimeUtil.getToday();
                            var flag = true;
                            for (var i in logsData) {
                                if (logsData[i].WORKLOGDATE == today) {
                                    $('#AccountManagerPage').show();
                                    $('#createchoose').hide();
                                    flag = false;
                                    _this.todayVue._data.accountManagerLog = logsData[i];
                                }
                            }
                            if (flag) {
                                var today_1 = bui.TimeUtil.getToday();
                                var accountManagerPage = WidgetManager.byId('btop.bui.AccountManagerPage');
                                accountManagerPage.show(today_1);
                            }
                        }
                        else {
                            $('#AccountManagerPage').hide();
                            $('#createchoose').show();
                        }
                    }
                });
            };
            /**
             * @description 展示选中日期的日志
             * @param data 出入的日期或选中日期的日志，这个数据比较重要，其数据结构为data[data['date']]
             * 1.当选中日期没有日志时，出入的data为选中日志 其格式为YYYY-MM-DD
             * 2.当选择日期有数据时，此时data["date"]为选中日期，根据这个选中日期去找传入的数据，格式为data[data['date']]
             * 注意：data[data['date']]可以根据泛型来进行强类型检测  如<AccountManagerLogs>data[data['date']]
             */
            AccountManagerPage.prototype.show = function (data) {
                var log = WidgetManager.byId('log');
                var _this = this;
                if (data[data['date']]) {
                    $('#AccountManagerPage').show();
                    $('#createchoose').hide();
                    $('#createAccountManagerPage').hide();
                    var accountManagerLog = data[data['date']];
                    this.todayVue._data.accountManagerLog = accountManagerLog;
                    if (this.todayVue._data.accountManagerLog.NOTELIST == undefined) {
                        this.todayVue._data.accountManagerLog.NOTELIST = "";
                    }
                }
                else {
                    var workDate = data;
                    this.createNewLog(workDate);
                }
            };
            /**
             * @description 大堂经理创建新日志
             */
            AccountManagerPage.prototype.createNewLog = function (workDate) {
                var _this = this;
                var userId = "";
                var log = WidgetManager.byId('log');
                bui.DbManager.sessionGet("UserInfo", true).then(function (data) {
                    userId = data.UserId;
                });
                $('#AccountManagerPage').hide();
                if (this.isDuringRangeDate(workDate)) {
                    $('#createchoose').show();
                    $('#createAccountManagerPage').hide();
                }
                else {
                    $('#createchoose').hide();
                    $('#createAccountManagerPage').hide();
                    bui.BGlobal.Alert.show({ title: '提示', content: "\u53EA\u80FD\u5F55\u5165" + bui.TimeUtil.getAnotherDay(30) + "\u81F3" + bui.TimeUtil.getToday() + "\u7684\u65E5\u5FD7\uFF01" });
                }
                _this.chooseDateVue._data.WORKLOGDATE = workDate;
                _this.chooseDateVue._data.OWNERCODE = userId;
                var currentMonth = workDate.substr(0, 7);
                $('#createchoose').unbind('click').click(function (e) {
                    _this.validatorUtils.clear();
                    $('#createchoose').hide();
                    _this.chooseDateVue._data.BESPOKENUM = "";
                    _this.chooseDateVue._data.PHONENUM = "";
                    _this.chooseDateVue._data.BESPOKELIST = "";
                    _this.chooseDateVue._data.PHONELIST = "";
                    _this.chooseDateVue._data.HOLDFINSALON = "";
                    _this.chooseDateVue._data.QUEADVISE = "";
                    _this.chooseDateVue._data.OTHER = "";
                    $('#AccountManagerPage').hide();
                    $('#createAccountManagerPage').show();
                    e.stopPropagation();
                });
                $('#quedingcreate').unbind('click').click(function (e) {
                    if (!_this.validatorUtils.submitValidate()) {
                        bui.EventUtils.preventDefault(e);
                        return false;
                    }
                    $('#createAccountManagerPage').hide();
                    var reqMsg = new bui.ReqMsg();
                    reqMsg.body = {
                        WORKLOGDATE: _this.chooseDateVue._data.WORKLOGDATE,
                        OWNERCODE: _this.chooseDateVue._data.OWNERCODE,
                        BESPOKENUM: _this.chooseDateVue._data.BESPOKENUM,
                        PHONENUM: _this.chooseDateVue._data.PHONENUM,
                        BESPOKELIST: _this.chooseDateVue._data.BESPOKELIST,
                        PHONELIST: _this.chooseDateVue._data.PHONELIST,
                        HOLDFINSALON: _this.chooseDateVue._data.HOLDFINSALON,
                        QUEADVISE: _this.chooseDateVue._data.QUEADVISE,
                        OTHER: _this.chooseDateVue._data.OTHER
                    };
                    var chooseDayLogData = reqMsg.body; //临时把requestbody数据装在到一个容器中，方便数据传递显示
                    bui.HttpUtils.bipHttp('jobLog_accountManagerFillIn', reqMsg).then(function (data) {
                        if (data.header.rc == "0000") {
                            //添加交易成功，需要把把pcrm当天全量日志加载到缓存中
                            var reqMsg_1 = new bui.ReqMsg();
                            reqMsg_1.body = {
                                OWNERCODE: _this.chooseDateVue._data.OWNERCODE,
                                WORKLOGDATE: workDate
                            };
                            bui.HttpUtils.bipHttp('jobLog_accountManagerInfo', reqMsg_1).then(function (resMsg) {
                                if (resMsg.header.rc == "0000") {
                                    bui.DbManager.sessionGet("Logs", true).then(function (data) {
                                        //首先判断当前月是否有信息
                                        if (data[currentMonth]) {
                                            var logsData = (data[currentMonth]);
                                            logsData.push(resMsg.body);
                                            var editLogData = { date: workDate };
                                            editLogData[workDate] = resMsg.body;
                                            _this.todayVue._data.accountManagerLog = resMsg.body;
                                            _this.show(editLogData);
                                            //数据添加到logsData之后，目前只是在内存中，还需要把内存中的logsData放到缓存中即sessionStorage
                                            var tempData = {};
                                            tempData[currentMonth] = logsData;
                                            bui.DbManager.sessionPut("Logs", tempData, true, false).then(function (data) {
                                                var logsData = data;
                                                var logsMap = _this.getExistLogsMap(currentMonth, 'WORKLOGDATE', logsData);
                                                log.show(logsMap);
                                                var today = bui.TimeUtil.getToday();
                                                /*
                                                _this.todayVue._data.accountManagerLog.CREATEDATE=today;
                                                if(_this.todayVue._data.accountManagerLog.NOTELIST==undefined){
                                                    _this.todayVue._data.accountManagerLog.NOTELIST="";
                                                };*/
                                            });
                                        }
                                        else {
                                            var logsSData = new Array();
                                            logsSData.push(reqMsg_1.body);
                                            var tempData = {};
                                            tempData[currentMonth] = logsSData;
                                            bui.DbManager.sessionPut("Logs", tempData, true, false).then(function (data) {
                                                var logsData = data;
                                                var logsMap = _this.getExistLogsMap(currentMonth, 'WORKLOGDATE', logsData);
                                                log.show(logsMap);
                                                _this.todayVue._data.accountManagerLogs = chooseDayLogData;
                                            });
                                        }
                                        $('#AccountManagerPage').show();
                                    });
                                }
                                else {
                                    bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                }
                            });
                        }
                        else {
                            _this.createNewLog(workDate);
                            bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                        }
                    }, function (data) {
                        bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                    });
                });
                $('#cancelcreate').unbind('click').click(function () {
                    $('#createAccountManagerPage').hide();
                    $('#AccountManagerPage').hide();
                    $('#createchoose').show();
                });
            };
            /**
             *
             * @param currentMonth
             * @param logsData
             * @returns {Map<string, string>}
             */
            AccountManagerPage.prototype.getExistLogsMap = function (currentMonth, dateField, logsData) {
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
            AccountManagerPage.prototype.isDuringRangeDate = function (chooseDate) {
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
            return AccountManagerPage;
        })(Page);
        bui.AccountManagerPage = AccountManagerPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=AccountManagerPage.js.map