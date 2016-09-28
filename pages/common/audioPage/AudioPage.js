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
        var AudioPage = (function (_super) {
            __extends(AudioPage, _super);
            function AudioPage() {
                _super.apply(this, arguments);
            }
            AudioPage.prototype.initView = function () {
                //返回销售主页
                $(this.nodeTypeMap.get('openPeiZhiPage1Page')).click(function () {
                    var currentPage = 1;
                    PageManager.to('btop.bui.PeiZhiPage1', { currentPage: currentPage });
                });
                var audioRootPath = Native.getDefaultAudioRootPath();
                var audioList;
                try {
                    audioList = Native.syncCall("CommService", "getMediaList", [audioRootPath]);
                    audioList = JSON.parse(audioList);
                    for (var key in audioList) {
                        if (key.indexOf('.mp3') != -1) {
                            var i = 0;
                            var audio = audioList[key];
                            var name_1 = key;
                            var rowTemp = "<tr>\n                                               <td>" + name_1 + "</td>\n                                               <td><audio src=\"" + audio + "\" controls=\"controls\"></td>\n                                               <td><div id=\"audiosListDom" + i + "\" class=\"btn btn-danger\" bui-audio-src=\"" + audio + "\">\u5220\u9664</div></td>\n                                           </tr>";
                            $("#AudiosTable").append(rowTemp);
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
                    console.log("AudioPage \u8C03\u7528Native\u975E\u672C\u5730\uFF0C\u5982\u60F3\u6B63\u5E38\u4F7F\u7528\uFF0C\u8BF7\u5207\u5165PAD\u73AF\u5883\u4E2D");
                }
                $('#AudiosTable').on('click', function (e) {
                    var target = bui.EventUtils.getTarget(e);
                    var $target = $(target);
                    if (target.innerText === "删除") {
                        var confirm_1 = bui.BGlobal.Confirm.show({ title: '提示', content: '确定要删除此音频文件么？' });
                        confirm_1.confirmBtn.unbind('click').on('click', function () {
                            var currentAudioSrc = $target.attr("bui-audio-src");
                            if (currentAudioSrc) {
                                var delResult = Native.syncCall("CommService", "deleteFile", [currentAudioSrc]);
                                if (delResult) {
                                    var grandElement = target.parentElement.parentElement;
                                    $(grandElement).empty();
                                    $(grandElement).remove();
                                    $(grandElement).off();
                                }
                                else {
                                    bui.BGlobal.Alert.show({ title: '提示', content: '音频删除失败' });
                                }
                            }
                        });
                    }
                });
            };
            return AudioPage;
        })(Page);
        bui.AudioPage = AudioPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=AudioPage.js.map