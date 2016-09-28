var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by wangxinlu on 2016/7/12.
 */
///<reference path="../../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../../scripts/bns/btop.bui.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var WidgetManager = btop.hui.WidgetManager;
        var PageManager = btop.hui.PageManager;
        var ProductThirdMenusPage = (function (_super) {
            __extends(ProductThirdMenusPage, _super);
            function ProductThirdMenusPage() {
                _super.apply(this, arguments);
            }
            ProductThirdMenusPage.prototype.initView = function () {
                var _this = this;
                //返回产品中心页
                $(this.nodeTypeMap.get('openProductCenterMainPage')).click(function () {
                    PageManager.to("btop.bui.ProductCenterMainPage");
                });
                if (this.data["menuId"]) {
                    this.secondMenuId = this.data["menuId"];
                }
                if (this.data["menuName"]) {
                    this.secondMenuName = this.data["menuName"];
                    $(this.nodeTypeMap.get('productMenuNameNode')).html(this.secondMenuName);
                }
                else {
                    $(this.nodeTypeMap.get('productMenuNameNode')).html('产品');
                }
                //首先到缓存中去找菜单数据
                var parentId = this.secondMenuId; //资产业务菜单ID
                bui.DbManager.sessionGet("ProductMenus", true).then(function (productMenus) {
                    //1、判断菜单是否有数据,无数据时到服务端请求数据
                    if (productMenus != null) {
                        //1.1 需要继续判断，是否菜单缓存中有此父菜单下的子菜单
                        var subMenus = new Array(); //标识是否有子菜单
                        for (var i in productMenus) {
                            if (productMenus[i].SUPERIOR_MENUID == parentId) {
                                subMenus.push(productMenus[i]);
                            }
                        }
                        if (subMenus.length != 0) {
                            _this.initThirdMenu(subMenus);
                        }
                        else {
                            _this.requestThirdMenu(parentId);
                        }
                    }
                    else {
                        _this.requestThirdMenu(parentId);
                    }
                });
            };
            /**************************************************加载三级菜单***********************************************************************/
            /**
             * @description 对服务端请求三级菜单数据
             */
            ProductThirdMenusPage.prototype.requestThirdMenu = function (parentId) {
                var _this = this;
                var reqMsg = new bui.ReqMsg();
                reqMsg.body = {
                    MENU_ID: parentId
                };
                bui.HttpUtils.bipHttp("product_menu", reqMsg).then(function (data) {
                    if (data.header.rc == "0000") {
                        bui.DbManager.sessionGet("ProductMenus", true).then(function (productMenus) {
                            if (!productMenus) {
                                productMenus = new Array();
                            }
                            for (var i in data.body["MENULIST"]) {
                                productMenus.push(data.body["MENULIST"][i]);
                            }
                            bui.DbManager.sessionPut("ProductMenus", productMenus, true, true).then(function () {
                                //由于缓存拿取得是全部的菜单信息，这里使用个小技巧，then回调只是通知缓存添加成功的回调，然而正在的数据还是从服务端
                                //取得数据，因为这样会减轻对缓存的过滤步骤，减少客户端计算操作
                                _this.initThirdMenu(data.body["MENULIST"]);
                            });
                        });
                    }
                    else {
                        bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                    }
                });
            };
            /**
             * @description 初始化三级菜单信息，及渲染UI界面
             * @param productMenus 产品菜单数据
             */
            ProductThirdMenusPage.prototype.initThirdMenu = function (productMenus) {
                var _this = this;
                if (WidgetManager.byId("btop.bui.ProductThirdMenusStackPage")) {
                    WidgetManager.byId("btop.bui.ProductThirdMenusStackPage").destroy();
                }
                PageManager.embedTo('btop.bui.ProductThirdMenusStackPage', 'productStack', { secondMenu: { id: this.secondMenuId, name: this.secondMenuName }, title: null, productMenus: productMenus, from: 'ProductThirdMenusStackPage' });
            };
            /**
             * @description 销毁操作，嵌套页面必须再次销毁
             */
            ProductThirdMenusPage.prototype.destroy = function () {
                var stackpage = WidgetManager.byId("btop.bui.ProductThirdMenusStackPage");
                if (stackpage)
                    stackpage.destroy();
                _super.prototype.destroy.call(this);
            };
            return ProductThirdMenusPage;
        })(Page);
        bui.ProductThirdMenusPage = ProductThirdMenusPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ProductThirdMenusPage.js.map