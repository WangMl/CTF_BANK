var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Administrator on 2016/7/14.
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
///<reference path="../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../scripts/bns/btop.bui.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var ShangjichaxunXiangQingPage = (function (_super) {
            __extends(ShangjichaxunXiangQingPage, _super);
            function ShangjichaxunXiangQingPage() {
                _super.apply(this, arguments);
            }
            ShangjichaxunXiangQingPage.prototype.initView = function () {
                var _this = this;
                //取消
                $(_this.nodeTypeMap.get('cancelBtnNode')).unbind('click').click(function (e) {
                    var pageAlert = bui.BGlobal.PageAlert.getInstance();
                    var event = new bui.BEvent(e, { data: "cancel" });
                    pageAlert.cancelBtn.trigger('click', event);
                    pageAlert.hide();
                });
                var aaa = _this.data.data;
                console.info(aaa);
                this.vm = new Vue({
                    el: '#shangjixiangqing',
                    data: {
                        accountManagerLog: aaa
                    },
                    methods: {}
                });
            };
            return ShangjichaxunXiangQingPage;
        })(Page);
        bui.ShangjichaxunXiangQingPage = ShangjichaxunXiangQingPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ShangjichaxunXiangQingPage.js.map