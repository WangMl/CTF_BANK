var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Administrator on 2016/4/29.
 */
///<reference path="../../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../../scripts/bns/btop.bui.d.ts"/>
///<reference path="../../../../scripts/libs/jQuery.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var PageManager = btop.hui.PageManager;
        var TuiJianChanPingMainPage = (function (_super) {
            __extends(TuiJianChanPingMainPage, _super);
            function TuiJianChanPingMainPage() {
                _super.apply(this, arguments);
            }
            TuiJianChanPingMainPage.prototype.initView = function () {
                //返回主页
                $(this.nodeTypeMap.get('openMainPage')).click(function () {
                    PageManager.to('btop.bui.MainPage');
                });
                //销售线索创建页
                $(this.nodeTypeMap.get('openxiaoShouXianSuoCreatePage')).click(function () {
                    PageManager.to('btop.bui.XiaoShouXianSuoCreatePage');
                });
            };
            return TuiJianChanPingMainPage;
        })(Page);
        bui.TuiJianChanPingMainPage = TuiJianChanPingMainPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=TuiJianChanPingMainPage.js.map