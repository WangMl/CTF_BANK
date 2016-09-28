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
///<reference path="../productMenusStackPage/ProductMenusStackPage.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var WidgetManager = btop.hui.WidgetManager;
        var PageManager = btop.hui.PageManager;
        var ProductMenusPage = (function (_super) {
            __extends(ProductMenusPage, _super);
            function ProductMenusPage() {
                _super.apply(this, arguments);
                this.menuIds = new Array(); //存放菜单Id容器
                this.menuNames = new Array(); //存放菜单名称容器
                this.isFirstLoad = true; //是否为第一次加载
            }
            ProductMenusPage.prototype.initView = function () {
                var _this = this;
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
                //返回产品中心页
                $(this.nodeTypeMap.get('openProductCenterMainPage')).click(function () {
                    PageManager.to("btop.bui.ProductCenterMainPage");
                });
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
                //默认要显示第项菜单的数据
                // _this.initMenuView();
                if (this.data["transferData"]) {
                    this.transferData = this.data["transferData"];
                    this.requestFourthMenu(this.transferData.MENU_ID, this.transferData);
                }
            };
            /***************************************************第一次进入页面，进行初始化显示**********************************************************************/
            ProductMenusPage.prototype.initMenuView = function () {
                var _this = this;
                var transferData = new bui.ProductMenu();
                transferData.MENU_ID = this.menuIds[0];
                transferData.MENU_NAME = this.menuNames[0];
                _this.initFourthData(transferData);
            };
            /**************************************************加载三级菜单***********************************************************************/
            /**
             * @description 对服务端请求三级菜单数据
             */
            ProductMenusPage.prototype.requestThirdMenu = function (parentId) {
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
            ProductMenusPage.prototype.initThirdMenu = function (productMenus) {
                var _this = this;
                for (var i in productMenus) {
                    _this.menuIds.push(productMenus[i].MENU_ID);
                    _this.menuNames.push(productMenus[i].MENU_NAME);
                }
                //首先得初始化tab，操作tab切换标签
                _this.tabInstance = WidgetManager.byId('productTab');
                var titles = this.menuNames;
                var option = {
                    titles: titles,
                    mountId: 'productTab'
                };
                _this.tabInstance.initData(option);
                //对部分item进行修改
                $('.bui-tab-item').each(function () {
                    var content = this.innerText;
                    if (content.length > 0 && content.length <= 8) {
                        $(this).find('.bui-tab-item-img').css('margin-bottom', '5px');
                    }
                    else if (content.length > 8 && content.length <= 13) {
                        $(this).find('.bui-tab-item-img').css('margin-bottom', '10px');
                    }
                    else {
                        $(this).find('.bui-tab-item-img').css('margin-bottom', '30px');
                    }
                });
                //然后再每个item绑定MENU_ID
                $('#productTab').find(".bui-tab-container").children().each(function (index) {
                    var transferData = new bui.ProductMenu();
                    transferData.MENU_ID = _this.menuIds[index];
                    transferData.MENU_NAME = _this.menuNames[index];
                    $(this).attr("bui-data-binder", JSON.stringify(transferData));
                });
                _this.bindEvents();
            };
            /**************************************************加载四级菜单***********************************************************************/
            /**
             * @description 为菜单添加绑定事件
             */
            ProductMenusPage.prototype.bindEvents = function () {
                var _this = this;
                $('#productTab').find('.bui-tab-container').children().unbind('click').on('click', function (e) {
                    var transferData = JSON.parse($(this).attr("bui-data-binder"));
                    _this.initFourthData(transferData);
                });
                if (this.isFirstLoad) {
                    this.initMenuView();
                    this.isFirstLoad = false;
                }
            };
            /**
             * @description 初始化四级菜单的数据
             * @param transferData 包含MENU_ID和MENU_NAME
             */
            ProductMenusPage.prototype.initFourthData = function (transferData) {
                var _this = this;
                //首先判断本地缓存是否有此menuId的子菜单，如果有就展示，如果没有就请求服务端
                bui.DbManager.sessionGet("ProductMenus", true).then(function (productMenus) {
                    //1、判断菜单是否有数据,无数据时到服务端请求数据
                    if (productMenus != null) {
                        //1.1 需要继续判断，是否菜单缓存中有此父菜单下的子菜单
                        var subMenus = new Array(); //标识是否有子菜单
                        for (var i in productMenus) {
                            if (productMenus[i].SUPERIOR_MENUID == transferData.MENU_ID) {
                                subMenus.push(productMenus[i]);
                            }
                        }
                        if (subMenus.length != 0) {
                            _this.initFourthMenu(subMenus, transferData);
                        }
                        else {
                            _this.requestFourthMenu(transferData.MENU_ID, transferData);
                        }
                    }
                    else {
                        _this.requestFourthMenu(transferData.MENU_ID, transferData);
                    }
                });
            };
            /**
             * @description 对服务端请求四级菜单数据
             */
            ProductMenusPage.prototype.requestFourthMenu = function (parentId, transferData) {
                var _this = this;
                var reqMsg = new bui.ReqMsg();
                reqMsg.body = {
                    MENU_ID: parentId
                };
                var url;
                /*     if(parentId == "010101")
                     {
                         url = "product_menu_level41";
                     }else if(parentId == "010102"){
                         url = "product_menu_level42";
                     }*/
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
                                _this.initFourthMenu(data.body["MENULIST"], transferData);
                            });
                        });
                    }
                    else {
                        bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                    }
                });
            };
            /**
             * @description 初始化四级菜单信息，及渲染UI界面
             * @param productMenus 产品菜单数据
             */
            ProductMenusPage.prototype.initFourthMenu = function (productMenus, transferData) {
                var _this = this;
                if (WidgetManager.byId("btop.bui.ProductMenusStackPage")) {
                    WidgetManager.byId("btop.bui.ProductMenusStackPage").destroy();
                }
                PageManager.embedTo('btop.bui.ProductMenusStackPage', 'productStack', { secondMenu: { id: this.secondMenuId, name: this.secondMenuName }, transferData: transferData, productMenus: productMenus });
            };
            /**
             * @description 销毁操作，嵌套页面必须再次销毁
             */
            ProductMenusPage.prototype.destroy = function () {
                var stackpage = WidgetManager.byId("btop.bui.ProductMenusStackPage");
                if (stackpage)
                    stackpage.destroy();
                _super.prototype.destroy.call(this);
            };
            return ProductMenusPage;
        })(Page);
        bui.ProductMenusPage = ProductMenusPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ProductMenusPage.js.map