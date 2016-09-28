var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Administrator on 2016/7/6.
 */
/************************************************************************
 * 类名  :  ProductListPage
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/22
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../../scripts/bns/btop.bui.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var JiJinChanPinXiangQingPage = (function (_super) {
            __extends(JiJinChanPinXiangQingPage, _super);
            function JiJinChanPinXiangQingPage() {
                _super.apply(this, arguments);
            }
            JiJinChanPinXiangQingPage.prototype.initView = function () {
                var _this = this;
                //确定
                $(_this.nodeTypeMap.get('confirmBtnNode')).unbind('click').click(function (e) {
                    if (1) {
                        var pageAlert = bui.BGlobal.PageAlert.getInstance();
                        var event_1 = new bui.BEvent(e, bEvent[0]['data']);
                        pageAlert.confirmBtn.trigger('click', event_1);
                        pageAlert.hide();
                    }
                    else {
                        var alert_1 = bui.BGlobal.Alert.show({ title: '提示', content: '请选中意向产品' });
                        pageAlert.hide();
                    }
                });
                //取消
                $(_this.nodeTypeMap.get('cancelBtnNode')).unbind('click').click(function (e) {
                    var pageAlert = bui.BGlobal.PageAlert.getInstance();
                    var event = new bui.BEvent(e, { data: "cancel" });
                    pageAlert.cancelBtn.trigger('click', event);
                    pageAlert.hide();
                });
                var aaa = _this.data.body;
                //let fund_state = {"0":"可申购赎回","1":"发行","4":"停止申购赎回","5":"停止申购","6":"停止赎回","8":"基金终止","9":"基金封闭"}
                //let fund_ip = {"01":"股票型","02":"债券型","03":"混合型","04":"货币型"}
                //let fund_con_state = {"0":"可转入,可转出","1":"只可转入","2":"只可转出","3":"不可转换"}
                //let fund_abonus = {"0":"红利转投","1":"现金分红"}
                //let fund_isdecide = {"0":"可定投","1":"不可定投"}
                //
                //aaa.FUND_STATE=fund_state[aaa.FUND_STATE];
                //aaa.FUND_TP=fund_ip[aaa.FUND_TP];
                //aaa.FUND_CON_STATE=fund_con_state[aaa.FUND_CON_STATE];
                //aaa.FUND_ABONUS=fund_abonus[aaa.FUND_ABONUS];
                //aaa.FUND_ISDECIDE=fund_isdecide[aaa.FUND_ISDECIDE];
                if (aaa.FUND_CD == undefined) {
                    aaa.FUND_CD = "无";
                }
                if (aaa.FUND_NAME == undefined) {
                    aaa.FUND_NAME = "无";
                }
                if (aaa.FUND_STATE == undefined) {
                    aaa.FUND_STATE = "无";
                }
                if (aaa.UNIT_NET_VAL == undefined) {
                    aaa.UNIT_NET_VAL = "无";
                }
                if (aaa.FUND_COMPANY_CODE == undefined) {
                    aaa.FUND_COMPANY_CODE = "无";
                }
                if (aaa.FUND_TP == undefined) {
                    aaa.FUND_TP = "无";
                }
                if (aaa.FUND_CON_STATE == undefined) {
                    aaa.FUND_CON_STATE = "无";
                }
                if (aaa.FUND_ABONUS == undefined) {
                    aaa.FUND_ABONUS = "无";
                }
                if (aaa.FUND_ISDECIDE == undefined) {
                    aaa.FUND_ISDECIDE = "无";
                }
                if (aaa.FUND_PURCHASE_AMOUNT == "") {
                    aaa.FUND_PURCHASE_AMOUNT = "无";
                }
                if (aaa.FUND_DECIDE_AMOUNT == "") {
                    aaa.FUND_DECIDE_AMOUNT = "无";
                }
                this.vm = new Vue({
                    el: '#jiJinXiangQing',
                    data: {
                        accountManagerLog: aaa
                    },
                    methods: {}
                });
            };
            return JiJinChanPinXiangQingPage;
        })(Page);
        bui.JiJinChanPinXiangQingPage = JiJinChanPinXiangQingPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=JiJinChanPinXiangQingPage.js.map