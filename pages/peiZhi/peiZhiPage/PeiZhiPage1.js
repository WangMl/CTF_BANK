var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/************************************************************************
 * 类名  :  peiZhiPage
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/3/14
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../scripts/bns/btop.bui.d.ts"/>
///<reference path="../../common/headerPage/HeaderPage.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var PageManager = btop.hui.PageManager;
        var Native = btop.hui.Native;
        var WidgetManager = btop.hui.WidgetManager;
        var PeiZhiPage1 = (function (_super) {
            __extends(PeiZhiPage1, _super);
            function PeiZhiPage1() {
                _super.apply(this, arguments);
                this.currentQuestions = new Array();
                this.currentQusIndex = 0;
            }
            PeiZhiPage1.prototype.initView = function () {
                var _this = this;
                this.currentQuestions.push($('#ringTipType'));
                this.chooseOnlyAnswer();
                $(this.nodeTypeMap.get('openMainPage')).click(function () {
                    PageManager.to("btop.bui.MainPage");
                    bui.BGlobal.ToastTip.hide();
                });
                this.$themeMountNode = $(this.nodeTypeMap.get('themeMountNode'));
                this.$themeMountNode.children().remove();
                var themes;
                bui.DbManager.localGet("Themes", true).then(function (data) {
                    themes = data;
                });
                var j = 0, position;
                for (var i in themes) {
                    var themeTemp = " <div style=\"display: inline-block;margin-right: 10px;\">\n                                        <img src=\"" + themes[i]['imgPath'] + "\" class=\"zhuTi1\"/>\n                                    </div>";
                    $(themeTemp).appendTo(this.$themeMountNode);
                    if (themes[i]['status']) {
                        position = j;
                    }
                    j++;
                }
                //选择主题效果处理
                this.$themeMountNode.children().click(function () {
                    var that = this;
                    var items = _this.$themeMountNode.children();
                    var chooseIndex = 0;
                    for (var i = 0; i < items.length; i++) {
                        if (that == items[i]) {
                            chooseIndex = i;
                            $(items[i]).css("opacity", "1");
                        }
                        else {
                            $(items[i]).css("opacity", "0.5");
                        }
                    }
                    var m = 0;
                    for (var i in themes) {
                        if (m == chooseIndex) {
                            $('#theme').attr("href", themes[i]['cssPath']);
                            themes[i]['status'] = true;
                        }
                        else {
                            themes[i]['status'] = false;
                        }
                        m++;
                    }
                    bui.DbManager.localPut('Themes', themes, true, true);
                });
                //默认显示效果
                this.themeSelectedByIndex(position);
                $(this.nodeTypeMap.get("waitTimeRange"))[0].addEventListener('change', function (e) {
                    $(_this.nodeTypeMap.get("waitTimeValue")).html(e.currentTarget.value);
                    bui.DbManager.localGet("SystemSetting", true).then(function (systemSetting) {
                        if (systemSetting != null) {
                            systemSetting.custWaitting = parseInt(e.currentTarget.value);
                            //更换缓存中的数据
                            bui.DbManager.localPut("SystemSetting", systemSetting, true, true);
                        }
                    });
                });
                //读取缓存进行设置初始化显示
                bui.DbManager.localGet("SystemSetting", true).then(function (systemSetting) {
                    if (systemSetting != null) {
                        $(_this.nodeTypeMap.get("waitTimeValue")).html(systemSetting.custWaitting);
                        $(_this.nodeTypeMap.get("waitTimeRange")).val(systemSetting.custWaitting);
                        $("#birthdayInfoInput").attr("checked", systemSetting.birthTip);
                        $("#clockInfoInput").attr("checked", systemSetting.ringTip);
                        if (systemSetting.ringTip) {
                            $("#ringTipType").css("display", "block");
                        }
                        else {
                            $("#ringTipType").css("display", "none");
                        }
                        if (systemSetting.ringTipType === 0) {
                            $("#checkbox-1-1").attr("checked", "checked");
                            $("#checkbox-1-2").removeAttr("checked");
                            $("#checkbox-1-3").removeAttr("checked");
                        }
                        else if (systemSetting.ringTipType === 1) {
                            $("#checkbox-1-1").removeAttr("checked");
                            $("#checkbox-1-2").attr("checked", "checked");
                            $("#checkbox-1-3").removeAttr("checked");
                        }
                        else if (systemSetting.ringTipType === 2) {
                            $("#checkbox-1-1").removeAttr("checked");
                            $("#checkbox-1-2").removeAttr("checked");
                            $("#checkbox-1-3").attr("checked", "checked");
                        }
                    }
                });
                //生日提醒操作
                $("#birthdayInfoInput").on("change", function (event) {
                    bui.DbManager.localGet("SystemSetting", true).then(function (systemSetting) {
                        if (systemSetting != null) {
                            systemSetting.birthTip = event.target["checked"];
                            //更换缓存中的数据
                            bui.DbManager.localPut("SystemSetting", systemSetting, true, true);
                        }
                    });
                });
                //铃声提醒设置
                $("#clockInfoInput").on("change", function (event) {
                    bui.DbManager.localGet("SystemSetting", true).then(function (systemSetting) {
                        if (systemSetting != null) {
                            systemSetting.ringTip = event.target["checked"];
                            if (event.target["checked"] == true) {
                                $("#ringTipType").css("display", "block");
                            }
                            else {
                                $("#ringTipType").css("display", "none");
                            }
                            //更换缓存中的数据
                            bui.DbManager.localPut("SystemSetting", systemSetting, true, true);
                        }
                    });
                });
                $("#checkbox-1-1").on("change", function (event) {
                    bui.DbManager.localGet("SystemSetting", true).then(function (systemSetting) {
                        if (systemSetting != null) {
                            if (event.target["checked"]) {
                                systemSetting.ringTipType = 0;
                                _this.playAlarm(0);
                            }
                        }
                        //更换缓存中的数据
                        bui.DbManager.localPut("SystemSetting", systemSetting, true, true);
                    });
                });
                $("#checkbox-1-2").on("change", function (event) {
                    bui.DbManager.localGet("SystemSetting", true).then(function (systemSetting) {
                        if (systemSetting != null) {
                            if (event.target["checked"]) {
                                systemSetting.ringTipType = 1;
                                _this.playAlarm(1);
                            }
                        }
                        //更换缓存中的数据
                        bui.DbManager.localPut("SystemSetting", systemSetting, true, true);
                    });
                });
                $("#checkbox-1-3").on("change", function (event) {
                    bui.DbManager.localGet("SystemSetting", true).then(function (systemSetting) {
                        if (systemSetting != null) {
                            if (event.target["checked"]) {
                                systemSetting.ringTipType = 2;
                                _this.playAlarm(2);
                            }
                        }
                        //更换缓存中的数据
                        bui.DbManager.localPut("SystemSetting", systemSetting, true, true);
                    });
                });
                //显示IP和MAC地址
                try {
                    var localIP = Native.syncCall("AppService", "getLocalIP", []);
                    $("#ipAddress").html(localIP ? localIP : "请联网");
                    var localMac = Native.syncCall("AppService", "getLocalMac", []);
                    $("#macAddress").html(localMac);
                }
                catch (e) {
                }
                //查看视频文件
                $('#queryVideos').click(function (e) {
                    PageManager.to("btop.bui.VideoListPage");
                });
                //查看音频文件
                $('#queryAudios').click(function (e) {
                    PageManager.to("btop.bui.AudioPage");
                });
                //上传音频文件
                $("#updateAudios").click(function (e) {
                    //上传录音文件
                    var remoteUploadPath = "/update/resource/pad/App/media/audios"; //上传到服务器的路径
                    Native.asyncCall("FileService", "uploadAudioFile", [remoteUploadPath], function (success, error, result) {
                        if (success) {
                            var uploadSuccCount = result.uploadSuccCount; //成功上传文件的个数
                            var uploadFailCount = result.uploadFailCount; //失败上传文件的个数
                            bui.BGlobal.Alert.show({ title: '提示', content: "\u97F3\u9891\u6210\u529F\u4E0A\u4F20" + uploadSuccCount + "\u4E2A\uFF0C\u5931\u8D25\u4E0A\u4F20" + uploadFailCount + "\u4E2A" });
                            var uploadedFiles = result.uploadedFiles;
                            for (var i in uploadedFiles) {
                                Native.syncCall("CommService", "deleteFile", [uploadedFiles[i]]); //删除上传成功的文件
                            }
                        }
                        else {
                            bui.BGlobal.Alert.show({ title: '提示', content: '音频上传失败！' });
                        }
                    });
                });
                //上传视频文件
                $("#uploadVides").click(function (e) {
                    var remoteUploadPath = "/update/resource/pad/App/media/videos"; //上传到服务器的路径
                    Native.asyncCall("FileService", "uploadVideoFile", [remoteUploadPath], function (success, error, result) {
                        if (success) {
                            var uploadSuccCount = result.uploadSuccCount; //成功上传文件的个数
                            var uploadFailCount = result.uploadFailCount; //失败上传文件的个数
                            bui.BGlobal.Alert.show({ title: '提示', content: "\u89C6\u9891\u6210\u529F\u4E0A\u4F20" + uploadSuccCount + "\u4E2A\uFF0C\u5931\u8D25\u4E0A\u4F20" + uploadFailCount + "\u4E2A" });
                            var uploadedFiles = result.uploadedFiles;
                            for (var i in uploadedFiles) {
                                Native.syncCall("CommService", "deleteFile", [uploadedFiles[i]]); //删除上传成功的文件
                            }
                        }
                        else {
                            bui.BGlobal.Alert.show({ title: '提示', content: '视频上传失败！' });
                        }
                    });
                });
                var opt1 = {
                    position: 'top',
                    data: [
                        { "0": "00" },
                        { "1": "01" },
                        { "2": "02" },
                        { "3": "03" },
                        { "4": "04" },
                        { "5": "05" },
                        { "6": "06" },
                        { "7": "07" },
                        { "8": "08" },
                        { "9": "09" },
                        { "10": "10" },
                        { "11": "11" },
                        { "12": "12" },
                        { "13": "13" },
                        { "14": "14" },
                        { "15": "15" },
                        { "16": "16" },
                        { "17": "17" },
                        { "18": "18" },
                        { "19": "19" },
                        { "20": "20" },
                        { "21": "21" },
                        { "22": "22" },
                        { "23": "23" }
                    ]
                };
                var uploadHour = WidgetManager.byId("uploadHour");
                uploadHour.initData(opt1);
                var opt2 = {
                    position: 'top',
                    data: [
                        { "0": "00" },
                        { "1": "01" },
                        { "2": "02" },
                        { "3": "03" },
                        { "4": "04" },
                        { "5": "05" },
                        { "6": "06" },
                        { "7": "07" },
                        { "8": "08" },
                        { "9": "09" },
                        { "10": "10" },
                        { "11": "11" },
                        { "12": "12" },
                        { "13": "13" },
                        { "14": "14" },
                        { "15": "15" },
                        { "16": "16" },
                        { "17": "17" },
                        { "18": "18" },
                        { "19": "19" },
                        { "20": "20" },
                        { "21": "21" },
                        { "22": "22" },
                        { "23": "23" },
                        { "24": "24" },
                        { "25": "25" },
                        { "26": "26" },
                        { "27": "27" },
                        { "28": "28" },
                        { "29": "29" },
                        { "30": "30" },
                        { "31": "31" },
                        { "32": "32" },
                        { "33": "33" },
                        { "34": "34" },
                        { "35": "35" },
                        { "36": "36" },
                        { "37": "37" },
                        { "38": "38" },
                        { "39": "39" },
                        { "40": "40" },
                        { "41": "41" },
                        { "42": "42" },
                        { "43": "43" },
                        { "44": "44" },
                        { "45": "45" },
                        { "46": "46" },
                        { "47": "47" },
                        { "48": "48" },
                        { "49": "49" },
                        { "50": "50" },
                        { "51": "51" },
                        { "52": "52" },
                        { "53": "53" },
                        { "54": "54" },
                        { "55": "55" },
                        { "56": "56" },
                        { "57": "57" },
                        { "58": "58" },
                        { "59": "59" }
                    ]
                };
                var uploadMinute = WidgetManager.byId("uploadMinute");
                uploadMinute.initData(opt2);
                var opt3 = {
                    position: 'top',
                    data: [
                        { "0": "00" },
                        { "1": "01" },
                        { "2": "02" },
                        { "3": "03" },
                        { "4": "04" },
                        { "5": "05" },
                        { "6": "06" },
                        { "7": "07" },
                        { "8": "08" },
                        { "9": "09" },
                        { "10": "10" },
                        { "11": "11" },
                        { "12": "12" },
                        { "13": "13" },
                        { "14": "14" },
                        { "15": "15" },
                        { "16": "16" },
                        { "17": "17" },
                        { "18": "18" },
                        { "19": "19" },
                        { "20": "20" },
                        { "21": "21" },
                        { "22": "22" },
                        { "23": "23" },
                        { "24": "24" },
                        { "25": "25" },
                        { "26": "26" },
                        { "27": "27" },
                        { "28": "28" },
                        { "29": "29" },
                        { "30": "30" },
                        { "31": "31" },
                        { "32": "32" },
                        { "33": "33" },
                        { "34": "34" },
                        { "35": "35" },
                        { "36": "36" },
                        { "37": "37" },
                        { "38": "38" },
                        { "39": "39" },
                        { "40": "40" },
                        { "41": "41" },
                        { "42": "42" },
                        { "43": "43" },
                        { "44": "44" },
                        { "45": "45" },
                        { "46": "46" },
                        { "47": "47" },
                        { "48": "48" },
                        { "49": "49" },
                        { "50": "50" },
                        { "51": "51" },
                        { "52": "52" },
                        { "53": "53" },
                        { "54": "54" },
                        { "55": "55" },
                        { "56": "56" },
                        { "57": "57" },
                        { "58": "58" },
                        { "59": "59" }
                    ]
                };
                var uploadSecond = WidgetManager.byId("uploadSecond");
                uploadSecond.initData(opt3);
                bui.DbManager.localGet("SystemSetting", true).then(function (systemSetting) {
                    if (systemSetting.mediaTimer) {
                        var timers = systemSetting.mediaTimer.split(":");
                        var hour = timers[0];
                        var minute = timers[1];
                        var second = timers[2];
                        uploadHour.setSelectedItem(hour);
                        uploadMinute.setSelectedItem(minute);
                        uploadSecond.setSelectedItem(second);
                    }
                    else {
                        uploadSecond.setSelectedItem('0');
                        uploadMinute.setSelectedItem('0');
                        uploadHour.setSelectedItem('0');
                    }
                });
                $("#uploadTimer").click(function () {
                    var confirm = bui.BGlobal.Confirm.show({ title: '提示', content: '确定修改上传时间么？' });
                    confirm.confirmBtn.unbind('click').on('click', function () {
                        var hour = parseInt(uploadHour.getAttrValue());
                        var minute = parseInt(uploadMinute.getAttrValue());
                        var second = parseInt(uploadSecond.getAttrValue());
                        bui.DbManager.localGet("SystemSetting", true).then(function (systemSetting) {
                            if (systemSetting != null) {
                                systemSetting.mediaTimer = hour + ":" + minute + ":" + second;
                                //更换缓存中的数据
                                bui.DbManager.localPut("SystemSetting", systemSetting, true, true).then(function () {
                                    bui.BGlobal.Alert.show({ title: '提示', content: '修改成功！' });
                                    var headerPage = WidgetManager.byId('btop.bui.HeaderPage');
                                    headerPage.uploadMediaTimer();
                                });
                            }
                            else {
                                var systemeSetting = new bui.SystemSetting();
                                systemeSetting.mediaTimer = hour + ":" + minute + ":" + second;
                                bui.DbManager.localPut("SystemSetting", systemSetting, true, true);
                            }
                        });
                    });
                });
            };
            /**
             * @description 显示某个主题
             * @param index
             */
            PeiZhiPage1.prototype.themeSelectedByIndex = function (index) {
                for (var i = 0; i < this.$themeMountNode.children().length; i++) {
                    if (i == index)
                        $(this.$themeMountNode.children()[i]).css("opacity", "1");
                    else
                        $(this.$themeMountNode.children()[i]).css("opacity", "0.5");
                }
            };
            /**
             * @description 仅仅选择一条答案
             */
            PeiZhiPage1.prototype.chooseOnlyAnswer = function () {
                var _this = this;
                this.currentQuestions[this.currentQusIndex].find('input').click(function (e) {
                    var that = this;
                    var items = _this.currentQuestions[_this.currentQusIndex].find('input');
                    for (var i = 0; i < items.length; i++) {
                        if (that == items[i]) {
                            $(items[i]).attr("checked", "checked");
                        }
                        else {
                            $(items[i]).removeAttr("checked");
                        }
                    }
                });
            };
            /**
             * @description 播放铃声
             */
            PeiZhiPage1.prototype.playAlarm = function (ringTipType) {
                if (ringTipType == 0) {
                    document.getElementById("ringError").play();
                }
                else if (ringTipType == 1) {
                    document.getElementById("ringNotify").play();
                }
                else if (ringTipType == 2) {
                    document.getElementById("ringNotifyCalendar").play();
                }
            };
            return PeiZhiPage1;
        })(btop.hui.Page);
        bui.PeiZhiPage1 = PeiZhiPage1;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=PeiZhiPage1.js.map