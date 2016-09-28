var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Administrator on 2016/7/6.
 */
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
        var GuoZhaiChanPinXiangQingPage = (function (_super) {
            __extends(GuoZhaiChanPinXiangQingPage, _super);
            function GuoZhaiChanPinXiangQingPage() {
                _super.apply(this, arguments);
            }
            GuoZhaiChanPinXiangQingPage.prototype.initView = function () {
                var _this = this;
                //取消
                $(_this.nodeTypeMap.get('cancelBtnNode')).unbind('click').click(function (e) {
                    var pageAlert = bui.BGlobal.PageAlert.getInstance();
                    var event = new bui.BEvent(e, { data: "cancel" });
                    pageAlert.cancelBtn.trigger('click', event);
                    pageAlert.hide();
                });
                var aaa = _this.data.data.body;
                if (this.data.data1 == 1) {
                    document.getElementById('guozhaiEDuChaXun').hidden = true;
                    document.getElementById('guozhaiXiangQing').hidden = false;
                    //$("#guozhaiXiangQing").hide();
                    this.vm = new Vue({
                        el: '#guozhaiXiangQing',
                        data: {
                            accountManagerLog: aaa
                        },
                        methods: {}
                    });
                }
                else if (this.data.data1 == 2) {
                    document.getElementById('guozhaiEDuChaXun').hidden = false;
                    document.getElementById('guozhaiXiangQing').hidden = true;
                    //$("#guozhaiXiangQing").hide();
                    this.vm = new Vue({
                        el: '#guozhaiEDuChaXun',
                        data: {
                            accountManagerLog: aaa
                        },
                        methods: {}
                    });
                }
                ;
                var aaa = _this.data.data.body;
                var inieresttype = { "A": "附息固定利率", "B": "附息浮动利率", "C": "通胀指数债 如为空，表明不是定期付息债" };
                var paytype = { "A": "定期付息", "B": "利随本清" };
                var NDTYPE = { "0": "电子式", "1": "凭证式" };
                aaa.INTERESTTYPE = inieresttype[aaa.INTERESTTYPE];
                aaa.PAYTYPE = paytype[aaa.PAYTYPE];
                aaa.NDTYPE = NDTYPE[aaa.NDTYPE];
                if (aaa.CURRENCY == "") {
                    aaa.CURRENCY = "无";
                }
                this.vm = new Vue({
                    el: '#guozhaiXiangQing',
                    data: {
                        accountManagerLog: aaa
                    },
                    methods: {}
                });
            };
            return GuoZhaiChanPinXiangQingPage;
        })(Page);
        bui.GuoZhaiChanPinXiangQingPage = GuoZhaiChanPinXiangQingPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=GuoZhaiChanPinXiangQingPage.js.map