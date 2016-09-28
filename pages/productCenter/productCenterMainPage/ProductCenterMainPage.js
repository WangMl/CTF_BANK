var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/************************************************************************
 * 类名  :  ProductCenterMainPage
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/14
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
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
        var PageManager = btop.hui.PageManager;
        var ProductCenterMainPage = (function (_super) {
            __extends(ProductCenterMainPage, _super);
            function ProductCenterMainPage() {
                _super.apply(this, arguments);
            }
            ProductCenterMainPage.prototype.initView = function () {
                if (this.data.currentPage) {
                    this.currentPage = this.data.currentPage;
                }
                else {
                    this.currentPage = 0;
                }
                var _this = this;
                //操作tab切换标签
                this.tabInstance = WidgetManager.byId('productTab');
                var titles = ["产品知识库", "在售产品清单", "热销产品及推荐产品"];
                var pageIds = ["btop.bui.ProductLibraryMainPage", "btop.bui.ZaiShouProductListMainPage", "btop.bui.ReXiaoAndTuiJianProductMainPage"];
                var option = {
                    titles: titles,
                    pageIds: pageIds,
                    mountId: 'productCenterMount'
                };
                this.tabInstance.initData(option);
                this.tabInstance.switchPage(this.currentPage, 'productCenterMount');
                if (this.currentPage) {
                    var items = $('#productTab .bui-tab-container').children();
                    for (var j = 0; j < items.length; j++) {
                        if (j == this.currentPage) {
                            $(items[j]).addClass('bui-tab-item-checked');
                        }
                        else {
                            $(items[j]).removeClass('bui-tab-item-checked');
                        }
                    }
                }
                //返回主页
                $(this.nodeTypeMap.get('openMainPage')).click(function () {
                    PageManager.to('btop.bui.MainPage');
                });
                //角色过滤
                bui.RoleFilter.filter(_this.id);
                this.localTest();
                this.sessionTest();
            };
            ProductCenterMainPage.prototype.localTest = function () {
                var user = {
                    name: 'wxl',
                    age: '25'
                };
                bui.DbManager.local("wxl", user, true); //覆盖原有的数据
                var getUser;
                bui.DbManager.localGet("wxl", true).then(function (value) {
                    getUser = value;
                });
                var loginUser = bui.DbManager.localGet("wxl");
                bui.DbManager.local("wxl", { height: 175 }, false); //添加新属性
                var getUser2;
                bui.DbManager.localGet("wxl", true).then(function (value) {
                    getUser2 = value;
                });
                bui.DbManager.local("wxl", { name: "wxl2" }, false); //覆盖部分属性
                var getUser3;
                bui.DbManager.localGet("wxl", true).then(function (value) {
                    getUser3 = value;
                });
                bui.DbManager.local("wxl", { name: "wxl3", hobby: 'pingpang' }, false); //覆盖部分属性和添加新属性
                var getUser4;
                bui.DbManager.localGet("wxl", true).then(function (value) {
                    getUser4 = value;
                });
                var getUser7;
                bui.DbManager.localPut("wxl", { name: "wxl3", hobby: 'pingpang2', sex: "男" }).then(function (value) {
                    getUser7 = value;
                });
                var getUser8;
                bui.DbManager.localGet("wxl", true).then(function (value) {
                    getUser8 = value;
                });
                var car = {
                    name: 'bmw',
                    color: 'black'
                };
                bui.DbManager.local("car", car, true); //覆盖原有的数据
                var getCar;
                bui.DbManager.localGet("car", true).then(function (value) {
                    getCar = value;
                });
                bui.DbManager.clearLocal("car");
                var getCar1;
                bui.DbManager.localGet("car", true).then(function (value) {
                    getCar1 = value;
                });
                var getUser5;
                bui.DbManager.localGet("wxl", true).then(function (value) {
                    getUser5 = value;
                });
            };
            ProductCenterMainPage.prototype.sessionTest = function () {
                var user = {
                    name: 'wxl',
                    age: '25'
                };
                bui.DbManager.session("wxl", user, true); //覆盖原有的数据
                var getUser;
                bui.DbManager.sessionGet("wxl", true).then(function (value) {
                    getUser = value;
                });
                bui.DbManager.session("wxl", { height: 175 }, false); //添加新属性
                var getUser2;
                bui.DbManager.sessionGet("wxl", true).then(function (value) {
                    getUser2 = value;
                });
                bui.DbManager.session("wxl", { name: "wxl2" }, false); //覆盖部分属性
                var getUser3;
                bui.DbManager.sessionGet("wxl", true).then(function (value) {
                    getUser3 = value;
                });
                bui.DbManager.session("wxl", { name: "wxl3", hobby: 'pingpang' }, false); //覆盖部分属性和添加新属性
                var getUser4;
                bui.DbManager.sessionGet("wxl", true).then(function (value) {
                    getUser4 = value;
                });
                var getUser7;
                bui.DbManager.sessionPut("wxl", { name: "wxl3", hobby: 'pingpang2', sex: "男" }).then(function (value) {
                    getUser7 = value;
                });
                var getUser8;
                bui.DbManager.sessionGet("wxl", true).then(function (value) {
                    getUser8 = value;
                });
                var car = {
                    name: 'bmw',
                    color: 'black'
                };
                bui.DbManager.session("car", car, true); //覆盖原有的数据
                var getCar;
                bui.DbManager.sessionGet("car", true).then(function (value) {
                    getCar = value;
                });
                bui.DbManager.clearSession("car");
                var getCar1;
                bui.DbManager.sessionGet("car", true).then(function (value) {
                    getCar1 = value;
                });
                var getUser5;
                bui.DbManager.sessionGet("wxl", true).then(function (value) {
                    getUser5 = value;
                });
            };
            ProductCenterMainPage.prototype.destroy = function () {
                if (this.tabInstance)
                    this.tabInstance.destroyPage();
                _super.prototype.destroy.call(this);
                console.log("roleFilter is destroy !");
            };
            return ProductCenterMainPage;
        })(Page);
        bui.ProductCenterMainPage = ProductCenterMainPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ProductCenterMainPage.js.map