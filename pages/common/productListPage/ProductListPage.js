var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        var PageManager = btop.hui.PageManager;
        var ProductListPage = (function (_super) {
            __extends(ProductListPage, _super);
            function ProductListPage() {
                _super.apply(this, arguments);
            }
            ProductListPage.prototype.initView = function () {
                //1. 返回产品中心页面，并保持现场数据
                $(this.nodeTypeMap.get('openProductCenterMainPage')).click(function () {
                    var currentPage = 1;
                    PageManager.to('btop.bui.ProductCenterMainPage', { currentPage: currentPage });
                });
                $('#infoMore1').click(function () {
                    var data = [
                        {
                            title: '设备名称',
                            content: '设备名称'
                        },
                        {
                            title: '设备名称',
                            content: '设备名称'
                        },
                        {
                            title: '设备名称',
                            content: '设备名称'
                        }
                    ];
                    bui.BGlobal.ProductAlert.show(data);
                });
                $('#infoMore2').click(function () {
                    PageManager.to('btop.bui.ImagePage');
                });
                $('#infoMore3').click(function () {
                    PageManager.to('btop.bui.TextAndImagePage');
                });
                $('#infoMore4').click(function () {
                    PageManager.to('btop.bui.TextAndTextPage');
                });
                $('#infoMore5').click(function () {
                    PageManager.to('btop.bui.TextAndVideoPage');
                });
                $('#infoMore6').click(function () {
                    PageManager.to('btop.bui.VedioPage');
                });
                //var opt = {
                //    dataJson: {
                //        "01": "apple",
                //        "02": "banana",
                //        "03": "orange"
                //    }
                //};
                //let select = <Select>WidgetManager.byId("selectOptDemo");
                //select.initData(opt);
            };
            return ProductListPage;
        })(Page);
        bui.ProductListPage = ProductListPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ProductListPage.js.map