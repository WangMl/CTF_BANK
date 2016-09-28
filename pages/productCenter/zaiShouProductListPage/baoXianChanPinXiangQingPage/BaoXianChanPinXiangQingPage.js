var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../../scripts/bns/btop.bui.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var BaoXianChanPinXiangQingPage = (function (_super) {
            __extends(BaoXianChanPinXiangQingPage, _super);
            function BaoXianChanPinXiangQingPage() {
                _super.apply(this, arguments);
            }
            BaoXianChanPinXiangQingPage.prototype.initView = function () {
                var _this = this;
                //取消
                $(_this.nodeTypeMap.get('cancelBtnNode')).unbind('click').click(function (e) {
                    var pageAlert = bui.BGlobal.PageAlert.getInstance();
                    var event = new bui.BEvent(e, { data: "cancel" });
                    pageAlert.cancelBtn.trigger('click', event);
                    pageAlert.hide();
                });
                var aaa = _this.data.body;
                var insureiype = { "0": "传统险", "1": "分红", "2": "投连", "3": "万能", "4": "小额信贷", "5": "投资理财险", "6": "年金", "7": "交通保障", "8": "重疾保障", "9": "车险", "10": "两全", "11": "意外保障", "12": "医疗保障", "13": "产品组合" };
                var payiype = { "0": "趸交", "1": "期交" };
                var yeartype = { "0": "无关", "1": "趸交", "2": "按年限交", "3": "交至某确定年龄", "4": "终生交费", "5": "不定期交" };
                var limittype = { "0": "无关", "1": "保终身", "2": "按年限保", "3": "保至某确定年龄", "4": "按月保", "5": "按天保" };
                var bonustype = { "0": "现金给付", "1": "抵交保费", "2": "累计生息", "3": "增额红利" };
                var safetype = { "0": "年交", "1": "半年交", "2": "季交", "3": "趸交" };
                var cettype = { "1": "月领", "2": "季领", "3": "半年领", "4": "年领", "5": "趸领" };
                aaa.INSURETYPE = insureiype[aaa.INSURETYPE];
                aaa.PAYTYPE = payiype[aaa.PAYTYPE];
                aaa.YEARTYPE = yeartype[aaa.YEARTYPE];
                aaa.LIMITTYPE = limittype[aaa.LIMITTYPE];
                aaa.BONUSTYPE = bonustype[aaa.BONUSTYPE];
                aaa.SAFETYPE = safetype[aaa.SAFETYPE];
                aaa.GETTYPE = cettype[aaa.GETTYPE];
                if (aaa.PRODUCTNAME == undefined) {
                    aaa.PRODUCTNAME = "无";
                }
                if (aaa.PRODUCTCODE == undefined) {
                    aaa.PRODUCTCODE = "无";
                }
                if (aaa.INSUREPERIOD == undefined) {
                    aaa.INSUREPERIOD = "无";
                }
                if (aaa.INSURETYPE == undefined) {
                    aaa.INSURETYPE = "无";
                }
                if (aaa.PAYTYPE == undefined) {
                    aaa.PAYTYPE = "无";
                }
                if (aaa.YEARTYPE == undefined) {
                    aaa.YEARTYPE = "无";
                }
                if (aaa.LIMITTYPE == undefined) {
                    aaa.LIMITTYPE = "无";
                }
                if (aaa.BONUSTYPE == undefined) {
                    aaa.BONUSTYPE = "无";
                }
                if (aaa.SAFETYPE == undefined) {
                    aaa.SAFETYPE = "无";
                }
                if (aaa.GETTYPE == undefined) {
                    aaa.GETTYPE = "无";
                }
                if (aaa.INSUREDCORPNAME == undefined) {
                    aaa.INSUREDCORPNAME = "无";
                }
                //保险产品详情
                this.vm = new Vue({
                    el: '#BaoXianXiangQing',
                    data: {
                        accountManagerLog: aaa
                    },
                    methods: {}
                });
            };
            return BaoXianChanPinXiangQingPage;
        })(Page);
        bui.BaoXianChanPinXiangQingPage = BaoXianChanPinXiangQingPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=BaoXianChanPinXiangQingPage.js.map