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
        var TomorrowPlanPage = (function (_super) {
            __extends(TomorrowPlanPage, _super);
            function TomorrowPlanPage() {
                _super.apply(this, arguments);
            }
            TomorrowPlanPage.prototype.initView = function () {
                //当天日志vue
                this.todayVue = new Vue({
                    el: '#TomorrowPlanPage',
                    data: {
                        tomorrowPlanLog: null
                    },
                    methods: {}
                });
                //确定
                $(this.nodeTypeMap.get('tuichuTomorrowPlan')).click(function (e) {
                    var pageAlert = bui.BGlobal.PageAlert.getInstance();
                    var event = new bui.BEvent(e, { data: "confirm" });
                    pageAlert.confirmBtn.trigger('click', event);
                    pageAlert.hide();
                });
                var userId = "";
                bui.DbManager.sessionGet("UserInfo", true).then(function (data) {
                    userId = data.UserId;
                });
                var _this = this;
                var log = WidgetManager.byId('log');
                var today = bui.TimeUtil.getToday();
                var currentMonth = bui.TimeUtil.getYM();
                var reqMsg = new bui.ReqMsg();
                reqMsg.body = {
                    OWNERCODE: userId,
                    MBDATE: today
                };
                bui.HttpUtils.bipHttp('jobLog_tomorrowPlan', reqMsg).then(function (data) {
                    if (data.header.rc == "0000") {
                        var resMsg = data;
                        var logsData = (resMsg.body['List']);
                        for (var i in logsData) {
                            var template = "<tr><td>" + logsData[i].CUSTTYPE + "</td>\n                                                     <td style=\"text-align: center\">" + logsData[i].OWNERNAME + "</td>\n                                                     <td style=\"text-align: center\">" + logsData[i].CUSTNAME + "</td>\n                                                     <td style=\"text-align: center\">" + logsData[i].CUSTID + "</td>\n                                                     <td style=\"text-align: center\">" + logsData[i].PHONE + "</td>\n                                                     <td style=\"text-align: center\">" + logsData[i].MBPRO + "</td>\n                                                     <td style=\"text-align: center\">" + logsData[i].OTHERBZ + "</td>\n                                </tr>";
                            var starItem = "<div style=\"\" class=\"stack-item-star\">\n                                </div>";
                            var templateJQuery = $(template);
                            if (logsData[i].OWNERNAME) {
                                for (var j = 0; j < logsData[i].OWNERNAME.length; j++) {
                                    $(starItem).appendTo(templateJQuery.find('.stack-item-header-left'));
                                }
                            }
                            templateJQuery.appendTo($('#tomorrowPlanList'));
                        }
                    }
                    else {
                        bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                    }
                }, function (data) {
                    bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                });
                /*DbManager.sessionGet("mingLogs", true).then(function (data) {
                    if(data==null) {
                        let reqMsg:ReqMsg = new ReqMsg();
                        reqMsg.body = {
                            OWNERCODE: userId,
                            MBDATE: today
                        }
                        HttpUtils.bipHttp('jobLog_tomorrowPlan', reqMsg).then(function (data:ResMsg) {
                            if (data.header.rc == "0000") {
                                let resMsg:ResMsg = data;
                                let currentMonthData:any = {};
                                currentMonthData[currentMonth] = resMsg.body['List'];
                                DbManager.sessionPut("mingLogs", currentMonthData, true, false).then(function (data) {
                                    //let logsData:Array<TomorrowPlan> = <Array<TomorrowPlan>>data;
                                    //let logsMap:Map<string,string> = _this.getExistLogsMapt(currentMonth, 'MBDATE', logsData);
                                    //log.show(logsMap);
                                    let logsData:Array<TomorrowPlan> = <Array<TomorrowPlan>>(data[currentMonth]);
                                    for (let i in logsData) {
                                        //if (logsData[i].MBDATE == "2016-05-19") {
                                        //    _this.todayVue._data.tomorrowPlanLog = logsData[i];
                                        //}
                                        let template = `<tr><td>${logsData[i].CUSTTYPE}</td>
                                                         <td>${logsData[i].OWNERNAME}</td>
                                                         <td>${logsData[i].CUSTNAME}</td>
                                                         <td>${logsData[i].CUSTID}</td>
                                                         <td>${logsData[i].PHONE}</td>
                                                         <td>${logsData[i].MBPRO}</td>
                                                         <td>${logsData[i].OTHERBZ}</td>
                                    </tr>`;
                                        let starItem = `<div style="" class="stack-item-star">
                                    </div>`;
                                        let templateJQuery:JQuery = $(template);
                                        if (logsData[i].OWNERNAME) {
                                            for (let j = 0; j < logsData[i].OWNERNAME.length; j++) {
                                                $(starItem).appendTo(templateJQuery.find('.stack-item-header-left'))
                                            }
                                        }
                                        templateJQuery.appendTo($('#tomorrowPlanList'));
                                    }
                                });
                            } else {
                                BGlobal.Alert.show({title: "提示", content: data.header.rm})
                            }
                        },function(data){
                            BGlobal.Alert.show({title: "提示", content:"网络异常"});
                        });
    
                    }else {
                        DbManager.sessionGet("mingLogs", true).then(function (data) {
                            if (data == null) {
    
                            } else {
                                if (data[currentMonth]) {
                                    let logsData:Array<TomorrowPlan> = <Array<TomorrowPlan>>(data[currentMonth]);
                                    for (let i in logsData) {
                                        if (logsData[i].MBDATE == "2016-05-19") {
                                            _this.todayVue._data.tomorrowPlanLog = logsData[i];
                                        }
                                    }
                                    for (let i in logsData) {
                                        //if (logsData[i].MBDATE == "2016-05-19") {
                                        //    _this.todayVue._data.tomorrowPlanLog = logsData[i];
                                        //}
                                        let template = `<tr><td>${logsData[i].CUSTTYPE}</td>
                                                             <td>${logsData[i].OWNERNAME}</td>
                                                             <td>${logsData[i].CUSTNAME}</td>
                                                             <td>${logsData[i].CUSTID}</td>
                                                             <td>${logsData[i].PHONE}</td>
                                                             <td>${logsData[i].MBPRO}</td>
                                                             <td>${logsData[i].OTHERBZ}</td>
                                    </tr>`;
                                        let starItem = `<div style="" class="stack-item-star">
                                    </div>`;
                                        let templateJQuery:JQuery = $(template);
                                        if(logsData[i].OWNERNAME)
                                        {
                                            for(let j = 0;j < logsData[i].OWNERNAME.length;j++)
                                            {
                                                $(starItem).appendTo(templateJQuery.find('.stack-item-header-left'))
                                            }
                                        }
                                        templateJQuery.appendTo($('#tomorrowPlanList'));
                                    }
                                } else {
    
                                }
                            }
                        })
                    }
                })*/
            };
            TomorrowPlanPage.prototype.show = function (data) {
            };
            /**
             *
             * @param currentMonth
             * @param logsData
             * @returns {Map<string, string>}
             */
            TomorrowPlanPage.prototype.getExistLogsMap = function (currentMonth, dateField, logsData) {
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
            return TomorrowPlanPage;
        })(Page);
        bui.TomorrowPlanPage = TomorrowPlanPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=TomorrowPlanPage.js.map