var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by wangxinlu on 2016/6/28.
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
        var OriginalCallDevice = (function (_super) {
            __extends(OriginalCallDevice, _super);
            function OriginalCallDevice() {
                _super.apply(this, arguments);
            }
            OriginalCallDevice.prototype.initView = function () {
                var _this = this;
                //回到主页
                $(this.nodeTypeMap.get('openMainPage')).click(function () {
                    PageManager.to('btop.bui.MainPage');
                });
                //获取应用版本名称
                $(this.nodeTypeMap.get('getAppVersionName')).click(function () {
                    var val = Native.syncCall("AppService", "getAppVersionName", []);
                    bui.BGlobal.Alert.show({ title: 'app版本号', content: val });
                });
                //获取应用版本号
                $(this.nodeTypeMap.get('getAppVersionCode')).click(function () {
                    var val = Native.syncCall("AppService", "getAppVersionCode", []);
                    bui.BGlobal.Alert.show({ title: 'app版本号', content: val });
                });
                //加密
                $(this.nodeTypeMap.get('jiami')).click(function () {
                    var encodeValue = $(_this.nodeTypeMap.get('encodeMsg')).val();
                    var val = Native.syncCall("StringService", "encrypt", [encodeValue]);
                    $(_this.nodeTypeMap.get('encodeMsg')).val(val);
                });
                //解密
                $(this.nodeTypeMap.get('jiemi')).click(function () {
                    var encodeValue = $(_this.nodeTypeMap.get('encodeMsg')).val();
                    var val = Native.syncCall("AppService", "decrypt", [encodeValue]);
                    $(_this.nodeTypeMap.get('encodeMsg')).val(val);
                });
                // @todo 下载有问题，待解决
                $(this.nodeTypeMap.get('download')).click(function () {
                    var path = "http://182.92.70.97:8080/PICC/logo.png";
                    var filePath = "/storage/emulated/0/Android/demoWeb/logo.png";
                    var file = bui.FileService.downloadFile(filePath, path);
                });
                //@todo 观察还未添加
                $(this.nodeTypeMap.get('upload')).click(function () {
                });
                //上传图片
                $(this.nodeTypeMap.get('uploadImgFile')).click(function () {
                    Native.syncCall("CommonService", "uploadImgFile", []);
                });
                //上传音频
                $(this.nodeTypeMap.get('uploadImgFile')).click(function () {
                    Native.syncCall("CommonService", "uploadAudioFile", []);
                });
                //上传视频
                $(this.nodeTypeMap.get('uploadVedio')).click(function () {
                    Native.syncCall("CommonService", "uploadVedioFile", []);
                });
                //获取IP
                $(this.nodeTypeMap.get('getLocalIP')).click(function () {
                    var ip = Native.syncCall("AppService", "getLocalIP", []);
                    bui.BGlobal.Alert.show({ title: '获取IP', content: ip });
                });
                //获取mac地址
                $(this.nodeTypeMap.get('getLocalMac')).click(function () {
                    var mac = Native.syncCall("AppService", "getLocalMac", []);
                    bui.BGlobal.Alert.show({ title: '获取mac', content: mac });
                });
                //获取GPS
                $(this.nodeTypeMap.get('getGPS')).click(function () {
                    var locationStr = btop.hui.Native.syncCall("GPSService", "getLocationInfo", []);
                    var location = JSON.parse(locationStr);
                    bui.BGlobal.Alert.show({ title: '获取GPS', content: "经度：" + location["JD"] + "\n纬度：" + location["WD"] });
                });
                //开始录音
                $(this.nodeTypeMap.get('recordAudio')).click(function () {
                    Native.syncCall("MediaRecordService", "startRecordAudio", [6]); //6s
                });
                //停止录音
                $(this.nodeTypeMap.get('stopAudio')).click(function () {
                    Native.syncCall("MediaRecordService", "stopRecordAudio", []);
                    Native.syncCall("MediaRecordService", "playAudio", []);
                });
                //开始录像
                $(this.nodeTypeMap.get('recordVideo')).click(function () {
                    if (window["androidShell"]) {
                        window["androidShell"].startRecordVideoJS(6); //6s
                    }
                });
                //照相takePhoto
                $(this.nodeTypeMap.get('takePhoto')).click(function () {
                    //let filePath = Native.syncCall("CameraService","takePhoto",[100]);
                    //alert(Native.syncCall("CameraService","takePhoto",[100]));
                    _this.wave(Native.syncCall("CameraService", "takePhoto", [100]));
                });
                //清除照片
                $(this.nodeTypeMap.get('revert')).click(function () {
                    _this.revert();
                });
                //查看音视频文件
                $(this.nodeTypeMap.get('searchMedia')).click(function () {
                    _this.searchMedia();
                });
                //批量删除
                $(this.nodeTypeMap.get('patchDelete')).click(function () {
                    _this.patchDelete();
                });
            };
            /**
             * @description 查看音视频文件
             */
            OriginalCallDevice.prototype.searchMedia = function () {
                $(".mediaList").empty(); //useless
                this.searchVideo();
                this.searchAudio();
            };
            /**
             * @description 搜索音频列表
             */
            OriginalCallDevice.prototype.searchAudio = function () {
                var audioList = btop.hui.Native.syncCall("CommonService", "getMediaList", ['audio']);
                audioList = JSON.parse(audioList);
                for (var key in audioList) {
                    var audio = audioList[key];
                    var name = key;
                    var row = '<div class="audioItem"><input type="checkbox" class="mediaChkBox" style="display:inline-block;"/><audio src="' + audio + '" controls="controls"></audio><span>' + name + '</span></div>';
                    $(".mediaList").append(row);
                }
            };
            /**
             * @description 搜索音频列表
             */
            OriginalCallDevice.prototype.searchVideo = function () {
                var videoList = btop.hui.Native.syncCall("CommonService", "getMediaList", ['video']);
                videoList = JSON.parse(videoList);
                for (var key in videoList) {
                    var video = videoList[key];
                    var name = key;
                    var row = '<div class="videoItem"><input type="checkbox" class="mediaChkBox" style="display:inline-block;"/><video src="' + video + '" controls="controls"></video><span>' + name + '</span></div>';
                    $(".mediaList").append(row);
                }
            };
            /**
             * @description 删除单个文件
             * @param filePath
             */
            OriginalCallDevice.prototype.deleteFile = function (filePath) {
                var delResult = Native.syncCall("CommonService", "deleteFile", [filePath]);
                if (delResult) {
                    alert("delete success");
                }
                else {
                    alert("delete fail");
                }
            };
            /**
             * @description 批量删除
             */
            OriginalCallDevice.prototype.patchDelete = function () {
                var _this = this;
                $(".mediaChkBox").each(function () {
                    var checked = $(this).prop("checked");
                    if (checked) {
                        var filePath = $(this).next().attr("src");
                        _this.deleteFile(filePath);
                    }
                });
                _this.searchMedia();
            };
            /**
             * @description 展示拍照图片
             * @param name
             */
            OriginalCallDevice.prototype.wave = function (name) {
                document.getElementById("droid").innerHTML = "Photopath: " + name;
                document.getElementById("pic0").src = name;
            };
            OriginalCallDevice.prototype.revert = function () {
                document.getElementById("droid").innerHTML = "";
                document.getElementById("pic0").src = "";
            };
            return OriginalCallDevice;
        })(Page);
        bui.OriginalCallDevice = OriginalCallDevice;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=OriginalCallDevice.js.map