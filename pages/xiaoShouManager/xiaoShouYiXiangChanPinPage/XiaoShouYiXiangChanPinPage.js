var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../scripts/bns/btop.bui.d.ts"/>
///<reference path="../../../scripts/libs/jQuery.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var WidgetManager = btop.hui.WidgetManager;
        var XiaoShouYiXiangChanPinPage = (function (_super) {
            __extends(XiaoShouYiXiangChanPinPage, _super);
            function XiaoShouYiXiangChanPinPage() {
                _super.apply(this, arguments);
            }
            XiaoShouYiXiangChanPinPage.prototype.initView = function () {
                var _this = this;
                //加载意向产品
                var reqMsg1 = new bui.ReqMsg();
                reqMsg1.body = {};
                var bEvent;
                //首先到缓存中去查询是否有销售线索意向产品
                bui.DbManager.sessionGet("SaleLeadsProduct", true).then(function (data) {
                    //如果有数据，就直接展示
                    if (data) {
                        var productMenu = WidgetManager.byId("productMenu");
                        productMenu.show(data);
                        productMenu.unbind("click").on("click", function (bevent) {
                            bEvent = bevent;
                        });
                    }
                    else {
                        bui.HttpUtils.bipHttp('saleLeads_product', reqMsg1).then(function (data) {
                            var saleLeadsProduct = (data['body']['ProductList']);
                            bui.DbManager.sessionPut("SaleLeadsProduct", saleLeadsProduct, true, false).then(function (data) {
                                var productMenu = WidgetManager.byId("productMenu");
                                productMenu.show(data);
                                productMenu.unbind("click").on("click", function (bevent) {
                                    bEvent = bevent;
                                });
                            });
                        });
                    }
                });
                //确定
                $(_this.nodeTypeMap.get('confirmBtnNode')).unbind('click').click(function (e) {
                    if (bEvent) {
                        var pageAlert = bui.BGlobal.PageAlert.getInstance();
                        var event_1 = new bui.BEvent(e, bEvent[0]['data']);
                        pageAlert.confirmBtn.trigger('click', event_1);
                        pageAlert.hide();
                    }
                    else {
                        var alert_1 = bui.BGlobal.Alert.show({ title: '提示', content: '请选中意向产品' });
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
            return XiaoShouYiXiangChanPinPage;
        })(Page);
        bui.XiaoShouYiXiangChanPinPage = XiaoShouYiXiangChanPinPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=XiaoShouYiXiangChanPinPage.js.map