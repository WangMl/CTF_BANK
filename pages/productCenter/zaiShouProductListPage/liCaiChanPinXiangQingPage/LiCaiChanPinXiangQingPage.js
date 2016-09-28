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
        var LiCaiChanPinXiangQingPage = (function (_super) {
            __extends(LiCaiChanPinXiangQingPage, _super);
            function LiCaiChanPinXiangQingPage() {
                _super.apply(this, arguments);
            }
            LiCaiChanPinXiangQingPage.prototype.initView = function () {
                var _this = this;
                //取消
                $(_this.nodeTypeMap.get('cancelBtnNode')).unbind('click').click(function (e) {
                    var pageAlert = bui.BGlobal.PageAlert.getInstance();
                    var event = new bui.BEvent(e, { data: "cancel" });
                    pageAlert.cancelBtn.trigger('click', event);
                    pageAlert.hide();
                });
                if (this.data.data1 == 1) {
                    $("#xiangQing").hide();
                    $("#EDu").show();
                    $("#liCaiEDuChaXun").show();
                    $("#liCaiXiangQing").hide();
                    var aaa = _this.data.data.body;
                    var PerAllow = { "0": "不允许", "1": "允许" };
                    var InstAllow = { "0": "不允许", "1": "允许" };
                    aaa.PerAllow = PerAllow[aaa.PerAllow];
                    aaa.InstAllow = InstAllow[aaa.InstAllow];
                    if (aaa.TotNum == undefined) {
                        aaa.TotNum = "无";
                    }
                    if (aaa.PrdCode == undefined) {
                        aaa.PrdCode = "无";
                    }
                    if (aaa.PrdName == undefined) {
                        aaa.PrdName = "无";
                    }
                    if (aaa.CurrType == undefined) {
                        aaa.CurrType = "无";
                    }
                    if (aaa.IpoStartDate == undefined) {
                        aaa.IpoStartDate = "无";
                    }
                    if (aaa.IpoEndDate == undefined) {
                        aaa.IpoEndDate = "无";
                    }
                    if (aaa.IncomeDate == undefined) {
                        aaa.IncomeDate = "无";
                    }
                    if (aaa.EndDate == undefined) {
                        aaa.EndDate = "无";
                    }
                    if (aaa.InterestDays == undefined) {
                        aaa.InterestDays = "无";
                    }
                    if (aaa.PfirstAmt == undefined) {
                        aaa.PfirstAmt = "无";
                    }
                    if (aaa.PappAmt == undefined) {
                        aaa.PappAmt = "无";
                    }
                    if (aaa.OfirstAmt == undefined) {
                        aaa.OfirstAmt = "无";
                    }
                    if (aaa.OappAmt == undefined) {
                        aaa.OappAmt = "无";
                    }
                    if (aaa.PrdScale == undefined) {
                        aaa.PrdScale = "无";
                    }
                    //if(aaa.PerAllow==undefined){
                    //    aaa.PerAllow="无"
                    //}
                    //if(aaa.InstAllow==undefined){
                    //    aaa.InstAllow="无"
                    //}
                    //if(aaa.TypeName==undefined){
                    //    aaa.TypeName="无"
                    //}
                    //if(aaa.RiskName==undefined){
                    //    aaa.RiskName="无"
                    //}
                    //if(aaa.GuestRate==undefined){
                    //    aaa.GuestRate="无"
                    //}
                    //if(aaa.Channels==undefined){
                    //    aaa.Channels="无"
                    //}
                    this.vm = new Vue({
                        el: '#liCaiEDuChaXun',
                        data: {
                            accountManagerLog: aaa
                        },
                        methods: {}
                    });
                }
                else if (this.data.data1 == 2) {
                    $("#EDu").hide();
                    $("#xiangQing").show();
                    $("#liCaiEDuChaXun").hide();
                    $("#liCaiXiangQing").show();
                    var aaa = _this.data.data;
                    var PerAllow = { "0": "不允许", "1": "允许" };
                    var InstAllow = { "0": "不允许", "1": "允许" };
                    aaa.PerAllow = PerAllow[aaa.PerAllow];
                    aaa.InstAllow = InstAllow[aaa.InstAllow];
                    if (aaa.TotNum == undefined) {
                        aaa.TotNum = "无";
                    }
                    if (aaa.PrdCode == undefined) {
                        aaa.PrdCode = "无";
                    }
                    if (aaa.PrdName == undefined) {
                        aaa.PrdName = "无";
                    }
                    if (aaa.CurrType == undefined) {
                        aaa.CurrType = "无";
                    }
                    if (aaa.IpoStartDate == undefined) {
                        aaa.IpoStartDate = "无";
                    }
                    if (aaa.IpoEndDate == undefined) {
                        aaa.IpoEndDate = "无";
                    }
                    if (aaa.IncomeDate == undefined) {
                        aaa.IncomeDate = "无";
                    }
                    if (aaa.EndDate == undefined) {
                        aaa.EndDate = "无";
                    }
                    if (aaa.InterestDays == undefined) {
                        aaa.InterestDays = "无";
                    }
                    if (aaa.PfirstAmt == undefined) {
                        aaa.PfirstAmt = "无";
                    }
                    if (aaa.PappAmt == undefined) {
                        aaa.PappAmt = "无";
                    }
                    if (aaa.OfirstAmt == undefined) {
                        aaa.OfirstAmt = "无";
                    }
                    if (aaa.OappAmt == undefined) {
                        aaa.OappAmt = "无";
                    }
                    if (aaa.PrdScale == undefined) {
                        aaa.PrdScale = "无";
                    }
                    if (aaa.PerAllow == undefined) {
                        aaa.PerAllow = "无";
                    }
                    if (aaa.InstAllow == undefined) {
                        aaa.InstAllow = "无";
                    }
                    if (aaa.TypeName == undefined) {
                        aaa.TypeName = "无";
                    }
                    if (aaa.RiskName == undefined) {
                        aaa.RiskName = "无";
                    }
                    if (aaa.GuestRate == undefined) {
                        aaa.GuestRate = "无";
                    }
                    if (aaa.Channels == undefined) {
                        aaa.Channels = "无";
                    }
                    this.vm = new Vue({
                        el: '#liCaiXiangQing',
                        data: {
                            accountManagerLog: aaa
                        },
                        methods: {}
                    });
                }
            };
            return LiCaiChanPinXiangQingPage;
        })(Page);
        bui.LiCaiChanPinXiangQingPage = LiCaiChanPinXiangQingPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=LiCaiChanPinXiangQingPage.js.map