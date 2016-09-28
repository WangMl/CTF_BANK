var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by wangxinlu on 2016/7/5.
 */
///<reference path="../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../scripts/bns/btop.bui.d.ts"/>
///<reference path="../../../scripts/libs/jQuery.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var XiaoShouXianSuoUnvaluablePage = (function (_super) {
            __extends(XiaoShouXianSuoUnvaluablePage, _super);
            function XiaoShouXianSuoUnvaluablePage() {
                _super.apply(this, arguments);
            }
            XiaoShouXianSuoUnvaluablePage.prototype.initView = function () {
                var _this = this;
                var description;
                $(this.nodeTypeMap.get('UNVALUABLE_DESCRIPTION')).blur(function () {
                    description = $(_this.nodeTypeMap.get('UNVALUABLE_DESCRIPTION')).val();
                });
                //确定
                $(_this.nodeTypeMap.get('confirmBtnNode')).unbind('click').click(function (e) {
                    if (description) {
                        var pageAlert = bui.BGlobal.PageAlert.getInstance();
                        var event_1 = new bui.BEvent(e, description);
                        pageAlert.confirmBtn.trigger('click', event_1);
                        pageAlert.hide();
                    }
                    else {
                        var alert_1 = bui.BGlobal.Alert.show({ title: '提示', content: '输入的原因不能为空' });
                    }
                });
                //取消
                $(_this.nodeTypeMap.get('cancelBtnNode')).unbind('click').click(function (e) {
                    var pageAlert = bui.BGlobal.PageAlert.getInstance();
                    var event = new bui.BEvent(e, { data: "cancel" });
                    pageAlert.cancelBtn.trigger('click', event);
                    pageAlert.hide();
                });
            };
            return XiaoShouXianSuoUnvaluablePage;
        })(Page);
        bui.XiaoShouXianSuoUnvaluablePage = XiaoShouXianSuoUnvaluablePage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=XiaoShouXianSuoUnvaluablePage.js.map