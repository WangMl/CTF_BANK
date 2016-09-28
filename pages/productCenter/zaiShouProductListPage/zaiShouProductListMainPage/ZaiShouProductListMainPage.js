var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/************************************************************************
 * 类名  :  ZaiShouProductListMainPage
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/14
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../../scripts/bns/btop.bui.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var PageManager = btop.hui.PageManager;
        var WidgetManager = btop.hui.WidgetManager;
        var Global = btop.hui.Global;
        var ZaiShouProductListMainPage = (function (_super) {
            __extends(ZaiShouProductListMainPage, _super);
            function ZaiShouProductListMainPage() {
                _super.apply(this, arguments);
                this.defaultFilePath = "skin/default/img/rexiaoproduct_jijinchanping.png";
            }
            ZaiShouProductListMainPage.prototype.initView = function () {
                var _this = this;
                //返回产品中心页
                $(this.nodeTypeMap.get('openProductCenterMainPage')).click(function () {
                    PageManager.to("btop.bui.ProductCenterMainPage");
                });
                //返回产品中心页
                $(this.nodeTypeMap.get('openProductCenterMainPage')).click(function () {
                    PageManager.to("btop.bui.ProductCenterMainPage");
                });
                // 在售产品详情 - 理财产品
                $(this.nodeTypeMap.get('openLiCaiChanPinPage')).click(function () {
                    PageManager.to("btop.bui.LiCaiChanPinPage");
                });
                // 在售产品详情 - 基金产品
                $(this.nodeTypeMap.get('openJiJinChanPinPage')).click(function () {
                    PageManager.to("btop.bui.JiJinChanPinPage");
                });
                // 在售产品详情 - 保险产品
                $(this.nodeTypeMap.get('openBaoXianChanPinPage')).click(function () {
                    PageManager.to("btop.bui.BaoXianChanPinPage");
                });
                // 在售产品详情 - 国债产品
                $(this.nodeTypeMap.get('openGuoZhaiChanPinPage')).click(function () {
                    PageManager.to("btop.bui.GuoZhaiChanPinPage");
                });
                // 在售产品详情 - 贵金属产品
                $(this.nodeTypeMap.get('openguijinshu')).click(function () {
                    PageManager.to("btop.bui.GuiJinShuProductPage");
                });
                // 在售产品详情 - 信托产品
                $(this.nodeTypeMap.get('openxintuo')).click(function () {
                    PageManager.to("btop.bui.XinTuoProductPage");
                });
                // 在售产品详情 - 大额存单产品
                $(this.nodeTypeMap.get('opendaEcundan')).click(function () {
                    PageManager.to("btop.bui.DaECunDanProductPage");
                });
                //首先到缓存拿数据
                bui.DbManager.sessionGet("ProductRecommendList", true).then(function (productRecommends) {
                    //判断是否有本地数据
                    if (productRecommends != null) {
                        //0时拿去前10条数据进行处理
                        if (productRecommends.length <= 10) {
                            var temProductRecommends = productRecommends.slice(0, 9);
                            _this.loadUI(temProductRecommends);
                        }
                        else {
                            _this.loadUI(productRecommends);
                        }
                    }
                    else {
                        var reqMsg = new bui.ReqMsg();
                        bui.HttpUtils.bipHttp("product_recommendList", reqMsg).then(function (resMsg) {
                            if (resMsg.header.rc == "0000") {
                                bui.DbManager.sessionPut("ProductRecommendList", resMsg.body["PRODUCTLIST"], true, false).then(function (productRecommends) {
                                    //0时拿去前10条数据进行处理
                                    if (productRecommends.length <= 10) {
                                        var temProductRecommends = productRecommends.slice(0, 9);
                                        _this.loadUI(temProductRecommends);
                                    }
                                    else {
                                        _this.loadUI(productRecommends);
                                    }
                                });
                            }
                            else {
                                bui.BGlobal.Alert.show({ title: "登录", content: resMsg.header.rm });
                            }
                        }, function () {
                            bui.BGlobal.Alert.show({ title: "登录", content: "登陆异常" });
                        });
                    }
                });
            };
            /**
             * @description 加载界面UI
             * @param productRecommends 热销产品列表
             */
            ZaiShouProductListMainPage.prototype.loadUI = function (productRecommends) {
                var _this = this;
                var subProductRecommends = productRecommends.slice(0, 10);
                Global.LoadingToast.show("正在玩命加载...");
                /* let callback = function(productRecommends:Array<ProductRecommendInfo>){
                     alert(JSON.stringify(productRecommends));
                     Global.LoadingToast.hide();
                     //获取画廊实体
                     let grZiCanBussinessGallery:Gallery= <Gallery>WidgetManager.byId('grZiCanBussinessGallery');
                     let galleryData = {
                         autoplay: true,
                         current: 0,
                         displayItemsCount: 5,//目前只支持3 ，5
                     }
                     galleryData.itemsInfo = productRecommends;
                     grZiCanBussinessGallery.show(galleryData);
                     grZiCanBussinessGallery.on("click",function(bEvent:BEvent){
                         let successCallBack= function(productRecommendInfo:ProductRecommendInfo)
                         {
                             switch(productRecommendInfo.PRODUCT_LAYOUT)
                             {
                                 case "1"://文本
                                     PageManager.to("btop.bui.ReXiaoTextPage",{productRecommendInfo:productRecommendInfo,fromPage:1});
                                     break;
                                 case "2"://文本+图片
                                     PageManager.to("btop.bui.ReXiaoTextAndImgPage",{productRecommendInfo:productRecommendInfo,fromPage:1});
                                     break;
                                 case "3"://图片
                                     PageManager.to("btop.bui.ReXiaoImgPage",{productRecommendInfo:productRecommendInfo,fromPage:1});
                                     break;
                                 case "4"://文本+视频
                                     PageManager.to("btop.bui.ReXiaoTextAndVideoPage",{productRecommendInfo:productRecommendInfo,fromPage:1});
                                     break;
                                 case "5"://视频
                                     PageManager.to("btop.bui.ReXiaoVedioPage",{productRecommendInfo:productRecommendInfo,fromPage:1});
                                     break;
                                 default:
                                     break;
                             }
                         }
                         _this.findProductByProductCode(bEvent[0]["data"]["productCode"],successCallBack);
                     });
                 }
                 this.handleProductRecommends(subProductRecommends,callback);*/
                var callBack = function (data) {
                    Global.LoadingToast.hide();
                    //获取画廊实体
                    var grZiCanBussinessGallery = WidgetManager.byId('grZiCanBussinessGallery');
                    var galleryData = {
                        autoplay: true,
                        current: 0,
                        displayItemsCount: 5
                    };
                    galleryData.itemsInfo = data;
                    grZiCanBussinessGallery.show(galleryData);
                    grZiCanBussinessGallery.on("click", function (bEvent) {
                        var successCallBack = function (productRecommendInfo) {
                            switch (productRecommendInfo.PRODUCT_LAYOUT) {
                                case "1":
                                    PageManager.to("btop.bui.ReXiaoTextPage", { productRecommendInfo: productRecommendInfo, fromPage: 1 });
                                    break;
                                case "2":
                                    PageManager.to("btop.bui.ReXiaoTextAndImgPage", { productRecommendInfo: productRecommendInfo, fromPage: 1 });
                                    break;
                                case "3":
                                    PageManager.to("btop.bui.ReXiaoImgPage", { productRecommendInfo: productRecommendInfo, fromPage: 1 });
                                    break;
                                case "4":
                                    PageManager.to("btop.bui.ReXiaoTextAndVideoPage", { productRecommendInfo: productRecommendInfo, fromPage: 1 });
                                    break;
                                case "5":
                                    PageManager.to("btop.bui.ReXiaoVedioPage", { productRecommendInfo: productRecommendInfo, fromPage: 1 });
                                    break;
                                default:
                                    break;
                            }
                        };
                        _this.findProductByProductCode(bEvent[0]["data"]["productCode"], successCallBack);
                    });
                };
                this.filterImgs(subProductRecommends, callBack);
            };
            ZaiShouProductListMainPage.prototype.handleProductRecommends = function (productRecommends, callback) {
                /* let bipServerInst: BipServer = <BipServer>SingletonUtil.getInstance("btop.bui.BipServer");  //初始化配置信息
                 let localFilePath:string = bipServerInst.localFilePath+'download/image/';
                 let tempArray:Array<ProductRecommendInfo> = new Array<ProductRecommendInfo>();
                 for(let i in productRecommends)
                 {
                     if(productRecommends[i].LOGO_PATH)
                     {
                         let logoPath:string = productRecommends[i].LOGO_PATH;
                         //"/home/usera/padserver/BIPS/resources/imageUpload/20160831103619435.png"
                         let start:number = logoPath.indexOf('imageUpload/')+12;
                         let logoName:string = logoPath.substring(start,logoPath.length);
                         let result = Native.syncCall("CommService","isExitFile",[localFilePath,logoName]);
                         if(!result["isExist"])
                         {
                             let remotePath = bipServerInst.remoteFilePath+logoName;
                             let savePath = localFilePath+logoName; //保存到本地的文件路径
                             Native.asyncCall("FileService","downloadFile",[remotePath,savePath],function(success, error, result){
                                 if(success){
                                     productRecommends[i].LOGO_PATH = localFilePath+logoName;
                                     tempArray.push(productRecommends[i]);
                                     if(tempArray.length == 10)
                                     {
                                          callback(tempArray);
                                     }
                                 }else{
                                     productRecommends[i].LOGO_PATH = bipServerInst.defaultFilePath;
                                     tempArray.push(productRecommends[i]);
                                     if(tempArray.length == 10)
                                     {
                                         callback(tempArray);
                                     }
                                 }
                             });
     
                         }else{
                             productRecommends[i].LOGO_PATH = localFilePath+logoName;
                             tempArray.push(productRecommends[i]);
                             if(tempArray.length == 10)
                             {
                                 callback(tempArray);
                             }
                         }
                     }else{
                         productRecommends[i].LOGO_PATH = bipServerInst.defaultFilePath;
                         tempArray.push(productRecommends[i]);
                         if(tempArray.length == 10)
                         {
                             callback(tempArray);
                         }
                     }
                 }
                 return tempArray;*/
            };
            /**
             * @description 根据productCode请求网络来获取产品详情
             * @param productCode
             */
            ZaiShouProductListMainPage.prototype.findProductByProductCode = function (productCode, success) {
                var reqMsg = new bui.ReqMsg();
                reqMsg.body =
                    {
                        PRODUCTCODE: productCode
                    };
                bui.HttpUtils.bipHttp("product_recommendInfo", reqMsg).then(function (data) {
                    if (data.header.rc == "0000") {
                        success(data.body);
                    }
                    else {
                        bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                    }
                });
            };
            /**
             * @description 过滤热销产品推荐信息，并返回过滤后的数据
             * @param productRecommends
             */
            ZaiShouProductListMainPage.prototype.filterImgs = function (productRecommends, callBack) {
                var tempProductRecommends = productRecommends;
                for (var i in tempProductRecommends) {
                    var callBack1 = function (data) {
                        tempProductRecommends[data["item"]].LOGO_PATH = data["localFilePath"];
                        if (parseInt(data["item"]) + 1 == tempProductRecommends.length) {
                            callBack(tempProductRecommends);
                        }
                    };
                    bui.FileService.filterFile(tempProductRecommends[i].LOGO_PATH, callBack1, i);
                }
            };
            return ZaiShouProductListMainPage;
        })(Page);
        bui.ZaiShouProductListMainPage = ZaiShouProductListMainPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ZaiShouProductListMainPage.js.map