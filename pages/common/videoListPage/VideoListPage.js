var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Administrator on 2016/5/24.
 */
///<reference path="../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../scripts/bns/btop.bui.d.ts"/>
///<reference path="../../../scripts/libs/jQuery.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var PageManager = btop.hui.PageManager;
        var Native = btop.hui.Native;
        var VideoListPage = (function (_super) {
            __extends(VideoListPage, _super);
            function VideoListPage() {
                _super.apply(this, arguments);
            }
            VideoListPage.prototype.initView = function () {
                //返回销售主页
                $(this.nodeTypeMap.get('openPeiZhiPage1Page')).click(function () {
                    var currentPage = 1;
                    PageManager.to('btop.bui.PeiZhiPage1', { currentPage: currentPage });
                });
                var videoRootPath = Native.getDefaultVideoRootPath();
                var videoList;
                try {
                    videoList = Native.syncCall("CommService", "getMediaList", [videoRootPath]);
                    videoList = JSON.parse(videoList);
                    for (var key in videoList) {
                        if (key.indexOf('.mp4') != -1) {
                            var i = 0;
                            var video = videoList[key];
                            var name_1 = key;
                            var rowTemp = "<tr>\n                                               <td>" + name_1 + "</td>\n                                               <td><div id=\"audiosListDom" + i + "\" class=\"btn btn-cold\" bui-video-src=\"" + video + "\">\u67E5\u770B\u89C6\u9891</div><div id=\"audiosListDom" + i + "\" class=\"btn btn-danger\" bui-video-src=\"" + video + "\">\u5220\u9664</div></td>\n                                           </tr>";
                            $("#VideosTable").append(rowTemp);
                            $('audiosListDom' + i).error(function () {
                                var grandElement = $(this).parentElement.parentElement;
                                $(grandElement).empty();
                                $(grandElement).remove();
                                $(grandElement).off();
                            });
                            i++;
                        }
                    }
                }
                catch (e) {
                    console.log("VideoListPage \u8C03\u7528Native\u975E\u672C\u5730\uFF0C\u5982\u60F3\u6B63\u5E38\u4F7F\u7528\uFF0C\u8BF7\u5207\u5165PAD\u73AF\u5883\u4E2D");
                }
                $('#VideosTable').on('click', function (e) {
                    var target = bui.EventUtils.getTarget(e);
                    var $target = $(target);
                    if (target.innerText === "删除") {
                        var confirm_1 = bui.BGlobal.Confirm.show({ title: '提示', content: '确定要删除此音频文件么？' });
                        confirm_1.confirmBtn.unbind('click').on('click', function () {
                            var currentVideoSrc = $target.attr("bui-video-src");
                            if (currentVideoSrc) {
                                var delResult = Native.syncCall("CommService", "deleteFile", [currentVideoSrc]);
                                if (delResult) {
                                    var grandElement = target.parentElement.parentElement;
                                    $(grandElement).empty();
                                    $(grandElement).remove();
                                    $(grandElement).off();
                                }
                                else {
                                    bui.BGlobal.Alert.show({ title: '提示', content: '视频删除失败' });
                                }
                            }
                        });
                    }
                    else if (target.innerText === "查看视频") {
                        PageManager.to("btop.bui.VedioPage", { videoPath: $target.attr("bui-video-src") });
                    }
                });
            };
            return VideoListPage;
        })(Page);
        bui.VideoListPage = VideoListPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=VideoListPage.js.map