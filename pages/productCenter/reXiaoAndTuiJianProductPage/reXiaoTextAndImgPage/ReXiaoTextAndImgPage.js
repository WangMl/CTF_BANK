var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Administrator on 2016/5/24.
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
        var ReXiaoTextAndImgPage = (function (_super) {
            __extends(ReXiaoTextAndImgPage, _super);
            function ReXiaoTextAndImgPage() {
                _super.apply(this, arguments);
            }
            ReXiaoTextAndImgPage.prototype.initView = function () {
                //返回销售主页
                var productRecommendInfo = this.data["productRecommendInfo"];
                var fromPage = this.data["fromPage"];
                new Vue({
                    el: '#ReXiaoPage',
                    data: {
                        productRecommendInfo: productRecommendInfo
                    }
                });
                $(this.nodeTypeMap.get('openProductCenterMainPage')).click(function () {
                    PageManager.to("btop.bui.ProductCenterMainPage", { currentPage: fromPage });
                });
                this.loadFile(productRecommendInfo.PICTURE_PATH);
            };
            /**
             * @description 加载文件
             * @param filePath
             */
            ReXiaoTextAndImgPage.prototype.loadFile = function (filePath) {
                var callBack = function (data) {
                    document.getElementById("reXiaoFile").src = data["localFilePath"];
                };
                bui.FileService.filterFile(filePath, callBack);
            };
            return ReXiaoTextAndImgPage;
        })(Page);
        bui.ReXiaoTextAndImgPage = ReXiaoTextAndImgPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ReXiaoTextAndImgPage.js.map