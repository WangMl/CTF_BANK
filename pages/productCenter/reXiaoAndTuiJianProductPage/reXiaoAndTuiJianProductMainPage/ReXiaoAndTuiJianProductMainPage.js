var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/************************************************************************
 * 类名  :  ZiCanBussinessPage
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/18
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../../scripts/bns/btop.bui.d.ts"/>
///<reference path="../../../common/stackPage/StackPage.ts"/>
///<reference path="../reXiaoProductListPage/ReXiaoProductListPage.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var WidgetManager = btop.hui.WidgetManager;
        var PageManager = btop.hui.PageManager;
        var ReXiaoAndTuiJianProductMainPage = (function (_super) {
            __extends(ReXiaoAndTuiJianProductMainPage, _super);
            function ReXiaoAndTuiJianProductMainPage() {
                _super.apply(this, arguments);
            }
            ReXiaoAndTuiJianProductMainPage.prototype.initView = function () {
                var _this = this;
                //返回产品中心页
                $(this.nodeTypeMap.get('openProductCenterMainPage')).click(function () {
                    PageManager.to("btop.bui.ProductCenterMainPage");
                });
                var _this = this;
                //操作tab切换标签
                this.tabInstance = WidgetManager.byId('reXiaoAndTuiJianTab');
                this.titles = ["理财产品", "基金产品", "保险产品", "国债产品", "贵金属产品", "信托产品", "大额存单", "凤凰宝", "其他"];
                var option = {
                    titles: this.titles,
                    mountId: 'reXiaoAndTuiJianStack'
                };
                this.tabInstance.initData(option);
                this.loadProductList(0);
                $('#reXiaoAndTuiJianTab').find('.bui-tab-container').children().unbind('click').on('click', function (e) {
                    var chooseItem = e.target["parentNode"];
                    var items = $('#reXiaoAndTuiJianTab').find('.bui-tab-container').children();
                    for (var i = 0; i < items.length; i++) {
                        if (chooseItem == items[i]) {
                            _this.loadProductList(i);
                        }
                    }
                });
            };
            /**
             * @description 加载产品列表
             * @param i 加载位置，类似于数组下标索引
             */
            ReXiaoAndTuiJianProductMainPage.prototype.loadProductList = function (i) {
                var _this = this;
                //首先到缓存去取数据
                bui.DbManager.sessionGet("ProductRecommendList", true).then(function (data) {
                    if (data != null) {
                        var tempList = _this.findDataByType(data, i + 1);
                        if (WidgetManager.byId("btop.bui.ReXiaoProductListPage")) {
                            WidgetManager.byId("btop.bui.ReXiaoProductListPage").destroy();
                        }
                        PageManager.embedTo("btop.bui.ReXiaoProductListPage", "reXiaoAndTuiJianStack", { title: _this.titles[i], productList: tempList });
                    }
                    else {
                        //本地没有缓存数据，需要请求服务端
                        var reqMsg = new bui.ReqMsg();
                        bui.HttpUtils.bipHttp("product_recommendList", reqMsg).then(function (data) {
                            if (data.header.rc = "0000") {
                                bui.DbManager.sessionPut("ProductRecommendList", data.body["PRODUCTLIST"], true, false).then(function (productList) {
                                    var tempList = _this.findDataByType(productList, i + 1);
                                    if (WidgetManager.byId("btop.bui.ReXiaoProductListPage")) {
                                        WidgetManager.byId("btop.bui.ReXiaoProductListPage").destroy();
                                    }
                                    PageManager.embedTo("btop.bui.ReXiaoProductListPage", "reXiaoAndTuiJianStack", { title: _this.titles[i], productList: tempList });
                                });
                            }
                            else {
                                bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                            }
                        });
                    }
                });
            };
            /**
             * @description 根据类型来获取产品列表
             * @param data 产品数据
             * @param type 产品类型
             * @returns {Array<ProductRecommendInfo>}
             */
            ReXiaoAndTuiJianProductMainPage.prototype.findDataByType = function (data, type) {
                var productRecommendList = new Array();
                for (var i in data) {
                    if (data[i].PRODUCT_TYPE == type) {
                        productRecommendList.push(data[i]);
                    }
                }
                return productRecommendList;
            };
            ReXiaoAndTuiJianProductMainPage.prototype.destroy = function () {
                var reXiaoProductListPage = WidgetManager.byId("btop.bui.ReXiaoProductListPage");
                if (reXiaoProductListPage)
                    reXiaoProductListPage.destroy();
                _super.prototype.destroy.call(this);
            };
            return ReXiaoAndTuiJianProductMainPage;
        })(Page);
        bui.ReXiaoAndTuiJianProductMainPage = ReXiaoAndTuiJianProductMainPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ReXiaoAndTuiJianProductMainPage.js.map