var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/************************************************************************
 * 类名  :  FooterPage
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/11
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
        var FooterPage = (function (_super) {
            __extends(FooterPage, _super);
            function FooterPage() {
                _super.apply(this, arguments);
            }
            FooterPage.prototype.initView = function () {
                var timeOutId;
                var bipServer = bui.SingletonUtil.getInstance("btop.bui.BipServer");
                if (bipServer.isDebug) {
                    $("#timer").on("touchstart", function () {
                        timeOutId = setTimeout(function () {
                            var confirm = bui.BGlobal.Confirm.show({ title: "提示", content: "是否进入Debug模式" });
                            //进入Debug模式
                            confirm.confirmBtn.unbind('click').on('click', function () {
                                var bipServer = bui.SingletonUtil.getInstance("btop.bui.BipServer");
                                bipServer.isDebug = true;
                            });
                            //进入Release模式
                            confirm.cancelBtn.unbind('click').on('click', function () {
                                var bipServer = bui.SingletonUtil.getInstance("btop.bui.BipServer");
                                bipServer.isDebug = false;
                            });
                        }, 2000);
                    });
                    $("#timer").on("touchend", function () {
                        clearTimeout(timeOutId);
                    });
                }
            };
            return FooterPage;
        })(Page);
        bui.FooterPage = FooterPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=FooterPage.js.map