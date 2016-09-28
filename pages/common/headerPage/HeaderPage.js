var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/************************************************************************
 * 类名  :  HeaderPage
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/11
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../scripts/bns/btop.bui.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var Global = btop.hui.Global;
        var PageManager = btop.hui.PageManager;
        var Native = btop.hui.Native;
        var EventProxy = btop.hui.EventProxy;
        var HeaderPage = (function (_super) {
            __extends(HeaderPage, _super);
            function HeaderPage() {
                _super.apply(this, arguments);
                this.DEV_OID = "";
                this.assitMsgs = new Array();
                this.assistQueueStatu = 'idle';
            }
            HeaderPage.prototype.initView = function () {
                var _this = this;
                //首先得清除通知缓存
                bui.DbManager.clearLocal('MsgNotices', true);
                bui.DbManager.clearLocal('MsgSaleLeads', true);
                bui.DbManager.clearLocal('MsgCusts', true);
                //启动上传媒体资源文件
                this.uploadMediaTimer();
                clearInterval(this.notificationIntervalId);
                /*document.addEventListener('click',function(){
                    _this.computeNotiCount();
                });*/
                bui.BGlobal.Notification.getInstance().getNotificationRootContainer()[0].addEventListener('click', function () {
                    _this.computeNotiCount();
                });
                //通过History历史记录的currentDate标识来确定通知是否是最新数据，如果和当天相等则不操作，否则执行清除操作
                bui.DbManager.localGet("History", true).then(function (history) {
                    if (history != null) {
                        if (bui.TimeUtil.getToday() != history.currentDate) {
                            bui.DbManager.clearLocal('MsgNotices', true);
                            bui.DbManager.clearLocal('MsgSaleLeads', true);
                            bui.DbManager.clearLocal('MsgCusts', true);
                            var history_1 = new bui.History();
                            history_1.currentDate = bui.TimeUtil.getToday();
                            bui.DbManager.localPut("History", history_1, true, true);
                        }
                    }
                    else {
                        var history_2 = new bui.History();
                        history_2.currentDate = bui.TimeUtil.getToday();
                        bui.DbManager.localPut("History", history_2, true, true);
                    }
                });
                //通过MediaRecord历史记录的currentDate标识来确定通知是否是最新数据，如果和当天相等则不操作，否则执行清除操作
                bui.DbManager.localGet("MediaRecord", true).then(function (mediaRecord) {
                    if (mediaRecord != null) {
                        if (bui.TimeUtil.getToday() != history.currentDate) {
                            var mediaRecord_1 = new bui.MediaRecord();
                            mediaRecord_1.currentDate = bui.TimeUtil.getToday();
                            mediaRecord_1.audioTime = 0;
                            mediaRecord_1.videoTime = 0;
                            bui.DbManager.localPut("MediaRecord", mediaRecord_1, true, true);
                        }
                    }
                    else {
                        var mediaRecord_2 = new bui.MediaRecord();
                        mediaRecord_2.currentDate = bui.TimeUtil.getToday();
                        mediaRecord_2.audioTime = 0;
                        mediaRecord_2.videoTime = 0;
                        bui.DbManager.localPut("MediaRecord", mediaRecord_2, true, true);
                    }
                });
                this.bipInstance = bui.SingletonUtil.getInstance("btop.bui.BipServer");
                //登录
                var loginIsShow = true;
                var buiLogin;
                $(this.nodeTypeMap.get('login')).click(function (e) {
                    $(document).unbind('click').on("click", function () {
                        bui.DbManager.sessionGet("UserInfo", true).then(function (data) {
                            if (data != null) {
                                bui.BGlobal.Usercard.hide();
                            }
                            else {
                            }
                            Global.OverLay.hide();
                        });
                    });
                    bui.DbManager.sessionGet("UserInfo", true).then(function (user) {
                        if (user != null) {
                            var userCard = bui.BGlobal.Usercard.show({ userName: user.UserName, userAccount: user.UserId, userRole: user.UserRole });
                            userCard.logOutBtn.unbind('click').on("click", function (bEvent) {
                                bEvent[0]["event"].stopPropagation();
                                var confirm = bui.BGlobal.Confirm.show({ title: '提示', content: '确定要退出么？' });
                                confirm.confirmBtn.unbind('click').on('click', function () {
                                    bui.DbManager.sessionGet("DeviceInfo", true).then(function (device) {
                                        var reqMsg = new bui.ReqMsg();
                                        reqMsg.body =
                                            {
                                                UserId: user.UserId,
                                                BranchNo: user.BranchNo,
                                                UserName: user.UserName,
                                                DEV_NO: device.DEV_NO,
                                                UserRole: user.UserRole
                                            };
                                        bui.HttpUtils.bipHttp("login_logout", reqMsg).then(function (resMsg) {
                                            console.info("退出成功！");
                                            if (resMsg.header.rc === "0000") {
                                                bui.DbManager.clearSession();
                                                bui.DbManager.clearLocal('MsgNotices', true);
                                                bui.DbManager.clearLocal('MsgSaleLeads', true);
                                                bui.DbManager.clearLocal('MsgCusts', true);
                                                clearInterval(_this.audioTimeOutId);
                                                clearInterval(_this.videoTimeOutId);
                                                clearTimeout(_this.mediaUploadTimeOut);
                                                clearInterval(_this.interValId);
                                                clearInterval(_this.notificationIntervalId);
                                                if (_this.notification) {
                                                    _this.notification.hide();
                                                    _this.notification.clear();
                                                }
                                                _this.loginPadDevice();
                                                PageManager.to("btop.bui.MainPage");
                                            }
                                            else {
                                                bui.BGlobal.Alert.show({ title: "登录提示", content: resMsg.header.rm });
                                            }
                                        }, function (data) {
                                            bui.BGlobal.Alert.show({ title: "系统提示", content: "网络有异常！" });
                                        });
                                    });
                                });
                            });
                            Global.OverLay.show();
                            e.stopPropagation();
                        }
                        else {
                            var userLogin;
                            buiLogin = bui.BGlobal.Login.show();
                            buiLogin.clearInputData();
                            //登录事件和逻辑设置
                            buiLogin.setTheme(bui.LoginTheme.Red);
                            buiLogin.submitLoginBtn.unbind('click').on('click', function (e) {
                                e[0]["event"].stopPropagation();
                                var reqMsg = new bui.ReqMsg();
                                /*if(_this.bipInstance.isRemote)
                                 {
                                 reqMsg.body = {UserId:e[0].data.userAccount,Password:e[0].data.userPwd}
                                 }else{
                                 reqMsg.body = {
                                 UserId:'00000656',
                                 Password:'password123'
                                 }
                                 }
                                 reqMsg.body = {
                                 UserId:'00000889',
                                 Password:'password123'
                                 }*/
                                reqMsg.body = { UserId: e[0].data.userAccount, Password: e[0].data.userPwd };
                                bui.HttpUtils.bipHttp("login_password", reqMsg).then(function (data) {
                                    var resMsg = data;
                                    var resHeader = resMsg.header;
                                    if (resHeader.rc == "0000") {
                                        userLogin = resMsg.body;
                                        userLogin.UserId = reqMsg.body["UserId"];
                                        userLogin.Password = reqMsg.body["Password"];
                                        /*DbManager.sessionPut("UserInfo",reqMsg.body,true,false);
                                        DbManager.sessionPut("UserInfo",resMsg.body,true,false).then(function(user:User){
                                            userLogin = user;
                                        });*/
                                        buiLogin.nextStep();
                                    }
                                    else {
                                        bui.BGlobal.Login.hide();
                                        bui.BGlobal.Alert.show({ title: "登录提示", content: resHeader.rm });
                                    }
                                }, function (data) {
                                    bui.BGlobal.Alert.show({ title: "系统提示", content: "网络有异常！" });
                                });
                                buiLogin.nextStep();
                            });
                            buiLogin.submitVerifyBtn.unbind('click').on('click', function (e) {
                                e[0]["event"].stopPropagation();
                                console.info(e);
                                var bipServer = bui.SingletonUtil.getInstance("btop.bui.BipServer");
                                if (bipServer.isDebug) {
                                    bui.DbManager.sessionPut("UserInfo", userLogin, true, false);
                                    _this.loginLogin();
                                    _this.startMessageSeleAll(); //及时触发
                                    _this.notificationIntervalId = setInterval(function () {
                                        _this.startMessageSeleAll();
                                    }.bind(this), 60000); //消息通知一分钟一轮循
                                    /*Socket.open();
                                    SocketObserverable.register("login",WidgetManager.byId("btop.bui.HeaderPage"));*/
                                    buiLogin.hide();
                                }
                                else {
                                    if (userLogin.VerifyCode === e[0]["data"]["verifyCode"]) {
                                        bui.DbManager.sessionPut("UserInfo", userLogin, true, false);
                                        _this.loginLogin();
                                        _this.startMessageSeleAll(); //及时触发
                                        _this.notificationIntervalId = setInterval(function () {
                                            _this.startMessageSeleAll();
                                        }.bind(this), 60000); //消息通知一分钟一轮循
                                        /*Socket.open();
                                       SocketObserverable.register("login",WidgetManager.byId("btop.bui.HeaderPage"));*/
                                        buiLogin.hide();
                                    }
                                    else {
                                        bui.BGlobal.Alert.show({ title: "系统提示", content: "验证码输入有误！" });
                                    }
                                }
                            });
                            buiLogin.getVerifyBtn.unbind('click').on('click', function (e) {
                                e[0]["event"].stopPropagation();
                                console.info(e);
                            });
                            e.stopPropagation();
                        }
                    });
                });
                //通知
                $(this.nodeTypeMap.get('notification')).click(function (e) {
                    bui.DbManager.sessionGet("UserInfo", true).then(function (data) {
                        if (data != null) {
                            bui.BGlobal.Usercard.hide();
                            loginIsShow = false;
                            $(document).unbind('click').one("click", function () {
                                bui.BGlobal.Notification.hide();
                                Global.OverLay.hide();
                            });
                            bui.BGlobal.Notification.show().setSelectByIndex(0);
                            Global.OverLay.show();
                            e.stopPropagation();
                        }
                        else {
                            var alert_1 = bui.BGlobal.Alert.show({ title: '提示', content: '用户未登录，请登录！' });
                            alert_1.setTheme(bui.AlertTheme.Red);
                        }
                    });
                });
                //录制音频和视频
                $(this.nodeTypeMap.get("audioAndVideo")).click(function (e) {
                    bui.DbManager.sessionGet("UserInfo", true).then(function (data) {
                        if (data != null) {
                            $(document).unbind('click').one("click", function () {
                                //对document绑定一个影藏Div方法
                                bui.BGlobal.VideoAndAudio.hide();
                                Global.OverLay.hide();
                            });
                            var videoAndAudio = bui.BGlobal.VideoAndAudio.show();
                            videoAndAudio.startAudioBtn.unbind('click').on('click', function (bEvent) {
                                bui.DbManager.localGet("MediaRecord", true).then(function (mediaRecord) {
                                    var timeout = parseInt(bEvent[0]["data"]["timeOut"]) * 60 + 1;
                                    if (mediaRecord.audioTime <= 7200) {
                                        if (mediaRecord.audioTime + timeout > 7200) {
                                            timeout = 7200 - mediaRecord.audioTime;
                                        }
                                        clearInterval(_this.audioTimeOutId);
                                        try {
                                            Native.ignoreDeleteCallbackService.push("MediaRecordService");
                                        }
                                        catch (e) {
                                        }
                                        //加入音频命名规则  **年**月**日“+**支行+**网点+**人员（8位员工号）+序号
                                        var userInfo;
                                        bui.DbManager.sessionGet("UserInfo", true).then(function (data) {
                                            userInfo = data;
                                        });
                                        var audioRootPath = Native.getDefaultAudioRootPath();
                                        var audioListString;
                                        var audioListJSON;
                                        var sequence;
                                        try {
                                            audioListString = Native.syncCall("CommService", "getMediaList", [audioRootPath]);
                                            audioListJSON = JSON.parse(audioListString);
                                            var squenceArray = new Array();
                                            var flag = false;
                                            for (var key in audioListJSON) {
                                                if (key.indexOf(".mp3") != -1) {
                                                    flag = true;
                                                    var start = key.indexOf("人员");
                                                    var end = key.indexOf("_");
                                                    squenceArray.push(key.substring(start + 2, end));
                                                }
                                            }
                                            sequence = Math.max.apply(null, squenceArray);
                                            if (!flag) {
                                                sequence = 0;
                                            }
                                            if (timeout - 2 > 60) {
                                                var currentTimeOut = timeout - 2;
                                                _this.audioTimeOutId = setInterval(function () {
                                                    currentTimeOut--;
                                                    if (currentTimeOut == 60) {
                                                        bui.BGlobal.ToastTip.show("录音剩余一分钟！");
                                                        setTimeout(function () {
                                                            bui.BGlobal.ToastTip.hide();
                                                        }, 4000);
                                                    }
                                                }, 1000);
                                            }
                                            var audioName = userInfo.BranchNo + '网点' + userInfo.UserId + '人员' + '_' + bui.TimeUtil.getAccurateToday();
                                            var filePath = Native.createAudioPath(audioName);
                                            Native.asyncCall("MediaRecordService", "startRecordAudio", [timeout, filePath], function (success, error, result) {
                                                if (success) {
                                                    var audioFilePath = result.audioFilePath; //音频文件的本地路径
                                                    var audioFileTime = result.audioFileTime; //音频文件的录制时间
                                                    if (audioFileTime == 0) {
                                                        bui.BGlobal.Alert.show({ title: '提示', content: "录音时间过短，请重新录制！" });
                                                        Native.syncCall("CommService", "deleteFile", [audioFilePath]);
                                                    }
                                                    else {
                                                        //音频录制成功后，把时间记录到当天数据中
                                                        mediaRecord.audioTime += audioFileTime;
                                                        bui.DbManager.localPut("MediaRecord", mediaRecord, true, true);
                                                        bui.BGlobal.Alert.show({ title: '提示', content: "录音成功！" });
                                                    }
                                                    videoAndAudio.simulateStopAudioEvent(bEvent);
                                                }
                                                else {
                                                    videoAndAudio.simulateStopAudioEvent(bEvent);
                                                    //let alert:Alert = BGlobal.Alert.show({title:'提示',content:error});
                                                    var alert_2 = bui.BGlobal.Alert.show({
                                                        title: '提示',
                                                        content: "录音失败，请重新录制！"
                                                    });
                                                    alert_2.setTheme(bui.AlertTheme.Red);
                                                }
                                                clearInterval(_this.audioTimeOutId);
                                            });
                                        }
                                        catch (e) {
                                            console.log("HeaderPage \u8C03\u7528Native\u975E\u672C\u5730\uFF0C\u5982\u60F3\u6B63\u5E38\u4F7F\u7528\uFF0C\u8BF7\u5207\u5165PAD\u73AF\u5883\u4E2D");
                                        }
                                        bEvent[0]["event"].stopPropagation();
                                    }
                                    else {
                                        bui.BGlobal.Alert.show({ title: '提示', content: '当天录制音频超过俩小时，不允录制！' });
                                        videoAndAudio.simulateStopAudioEvent(bEvent);
                                    }
                                });
                            });
                            videoAndAudio.stopAudioBtn.unbind('click').on('click', function (bEvent) {
                                //同步接口，无需传入回调方法。因为startRecordAudio已经传入回调
                                Native.syncCall("MediaRecordService", "stopRecordAudio");
                                clearInterval(_this.audioTimeOutId);
                                bEvent[0]["event"].stopPropagation();
                            });
                            videoAndAudio.startVideoBtn.unbind('click').on('click', function (bEvent) {
                                bui.DbManager.localGet("MediaRecord", true).then(function (mediaRecord) {
                                    var timeout = parseInt(bEvent[0]["data"]["timeOut"]) * 60 + 2;
                                    if (mediaRecord.videoTime <= 1600) {
                                        if (mediaRecord.videoTime + timeout > 1600) {
                                            timeout = 1600 - mediaRecord.videoTime;
                                        }
                                        clearInterval(_this.videoTimeOutId);
                                        var videoWidth = 500; //录制视频窗口宽度
                                        var videoHeight = 500; //录制视频窗口高度
                                        var videoLeft = 600; //录制视频窗口离屏幕左间距
                                        var videoTop = 150; //录制视频窗口离屏幕上间距
                                        var userInfo;
                                        bui.DbManager.sessionGet("UserInfo", true).then(function (data) {
                                            userInfo = data;
                                        });
                                        var videoRootPath = Native.getDefaultVideoRootPath();
                                        var videoListString;
                                        var videoListJSON;
                                        var sequence;
                                        try {
                                            videoListString = Native.syncCall("CommService", "getMediaList", [videoRootPath]);
                                            videoListJSON = JSON.parse(videoListString);
                                            var squenceArray = new Array();
                                            var flag = false;
                                            for (var key in videoListJSON) {
                                                if (key.indexOf('.mp4') != -1) {
                                                    flag = true;
                                                    var start = key.indexOf("人员");
                                                    var end = key.indexOf("_");
                                                    squenceArray.push(key.substring(start + 2, end));
                                                }
                                            }
                                            sequence = Math.max.apply(null, squenceArray);
                                            if (!flag) {
                                                sequence = 0;
                                            }
                                            //剩余一分钟提示
                                            if (timeout - 2 > 60) {
                                                var currentTimeOut = timeout - 2;
                                                _this.videoTimeOutId = setInterval(function () {
                                                    currentTimeOut--;
                                                    if (currentTimeOut == 60) {
                                                        bui.BGlobal.ToastTip.show("录像剩余一分钟！");
                                                        setTimeout(function () {
                                                            bui.BGlobal.ToastTip.hide();
                                                        }, 4000);
                                                    }
                                                }, 1000);
                                            }
                                            var videoName = userInfo.BranchNo + '网点' + userInfo.UserId + '人员' + '_' + bui.TimeUtil.getAccurateToday();
                                            var filePath = Native.createVideoPath(videoName);
                                            Native.ignoreDeleteCallbackService.push("MediaRecordService");
                                            Native.asyncCall("MediaRecordService", "startRecordVideo", [timeout, videoWidth, videoHeight, videoLeft, videoTop, filePath], function (success, error, result) {
                                                if (success) {
                                                    var videoFilePath = result.videoFilePath; //视频文件的本地路径
                                                    var videoFileTime = result.videoFileTime; //视频文件的录制时间
                                                    if (videoFileTime == 0) {
                                                        bui.BGlobal.Alert.show({ title: '提示', content: "录像时间过短，请重新录制！" });
                                                        Native.syncCall("CommService", "deleteFile", [videoFilePath]);
                                                    }
                                                    else {
                                                        mediaRecord.videoTime += videoFileTime;
                                                        bui.DbManager.localPut("MediaRecord", mediaRecord, true, true);
                                                        bui.BGlobal.Alert.show({ title: '提示', content: "录像完毕" });
                                                    }
                                                    videoAndAudio.simulateStopAudioEvent(bEvent);
                                                }
                                                else {
                                                    //let alert:Alert = BGlobal.Alert.show({title:'提示',content:error});
                                                    var alert_3 = bui.BGlobal.Alert.show({ title: '提示', content: "录像失败，请重新录制！" });
                                                    videoAndAudio.simulateStopAudioEvent(bEvent);
                                                }
                                                clearInterval(_this.videoTimeOutId);
                                            });
                                        }
                                        catch (e) {
                                            console.log("HeaderPage \u8C03\u7528Native\u975E\u672C\u5730\uFF0C\u5982\u60F3\u6B63\u5E38\u4F7F\u7528\uFF0C\u8BF7\u5207\u5165PAD\u73AF\u5883\u4E2D");
                                        }
                                        bEvent[0]["event"].stopPropagation();
                                    }
                                    else {
                                        bui.BGlobal.Alert.show({ title: '提示', content: '当天录制视频超过半小时，不允录制！' });
                                        videoAndAudio.simulateStopAudioEvent(bEvent);
                                    }
                                });
                            });
                            Global.OverLay.show();
                            e.stopPropagation();
                        }
                        else {
                            var alert_4 = bui.BGlobal.Alert.show({ title: '提示', content: '用户未登录，请登录！' });
                            alert_4.setTheme(bui.AlertTheme.Red);
                        }
                    });
                });
                //返回主页
                $(this.nodeTypeMap.get('returnHome')).click(function () {
                    PageManager.to('btop.bui.MainPage');
                });
                this.loginPadDevice();
                var logoTimeOutId;
                //修改服务对接的IP地址
                /*$(this.nodeTypeMap.get("logoNode")).on("touchstart",function(e:JQueryEventObject){
                    logoTimeOutId = setTimeout(function(){
                        let bipServerInst:BipServer =  <BipServer>SingletonUtil.getInstance("btop.bui.BipServer");
                        let prompt:Prompt = BGlobal.Prompt.show({
                            title:"服务器对接配置",
                            content:[
                                {
                                    label:'ip地址',
                                    type:'input',
                                    data:{
                                        content:bipServerInst.ip
                                    }
                                },
                                {
                                    label:'端口号',
                                    type:'input',
                                    data:{
                                        content:bipServerInst.port
                                    }
                                },
                                {
                                    label:'请求类型',
                                    type:'input',
                                    data:{
                                        content:bipServerInst.httpType
                                    }
                                },
                                {
                                    label:'网厅地址',
                                    type:'input',
                                    data:{
                                        content:bipServerInst.netHallUrl
                                    }
                                }
                            ]});
                        prompt.setTheme(PromptTheme.Red);
                        prompt.confirmBtn.unbind('click').on('click',function(bEvent:BEvent){
                            let newIp:string = bEvent[0]["data"][0];
                            let newPort:string = bEvent[0]["data"][1];
                            let newHttpType:string = bEvent[0]["data"][2];
                            let newNetHallUrl:string = bEvent[0]["data"][3];
                            bipServerInst.ip = newIp;
                            bipServerInst.port = newPort;
                            bipServerInst.httpType = newHttpType;
                            bipServerInst.netHallUrl = newNetHallUrl;
                            DbManager.localGet("BipServer",true).then(function(data:BipServer){
                                data.ip = newIp;
                                data.port = newPort;
                                data.netHallUrl = newNetHallUrl;
                                data.httpType = newHttpType;
                                DbManager.localPut("BipServer",data,true,true).then(function(bipServer:BipServer){
                                    Constant.BASE_SERVER = `${bipServer.httpType}://${bipServer.ip}:${bipServer.port}/`;
                                });
                            });
                            _this.loginPadDevice();
                        });
                    },2000);
    
                });*/
                $(_this.nodeTypeMap.get("logoNode")).on("touchend", function (e) {
                    clearTimeout(logoTimeOutId);
                });
                //可以手动重新上传login_padDevice
                var logoTextTimeOutId;
                $(this.nodeTypeMap.get("logoTextNode")).on("touchstart", function (e) {
                    logoTextTimeOutId = setTimeout(function () {
                        var prompt = bui.BGlobal.Prompt.show({
                            title: "重新上送IP和MAC地址",
                            content: [
                                {
                                    label: 'IP地址',
                                    type: 'input'
                                },
                                {
                                    label: 'MAC地址',
                                    type: 'input'
                                }
                            ] });
                        prompt.setTheme(bui.PromptTheme.Red);
                        prompt.confirmBtn.unbind('click').on('click', function (bEvent) {
                            var newIp = bEvent[0]["data"][0];
                            var newMac = bEvent[0]["data"][1];
                            body = {
                                DEV_IP: newIp,
                                DEV_MAC: newMac
                            };
                            //alert("DEV_IP: "+Native.syncCall("AppService","getLocalIP",[])+" DEV_MAC: "+Native.syncCall("AppService","getLocalMac",[]));
                            var reqmsg = new bui.ReqMsg();
                            reqmsg.body = body;
                            bui.HttpUtils.bipHttp("login_padDevice", reqmsg).then(function (resMsg) {
                                if (resMsg.header.rc == "0000") {
                                    var bipHeaderInst = bui.SingletonUtil.getInstance("btop.bui.BipHeader");
                                    bipHeaderInst.tty = "pad"; //终端号
                                    bipHeaderInst.cid = "PAD"; //渠道编号
                                    bipHeaderInst.tsn = 26; //终端流水号
                                    bipHeaderInst.nid = resMsg.body["BRANCH_NO"]; //网点号
                                    bui.DbManager.clearSession();
                                    bui.DbManager.sessionPut("DeviceInfo", resMsg.body, true, false);
                                    bui.DbManager.sessionPut("DeviceInfo", reqmsg.body, true, false);
                                }
                                else {
                                    bui.BGlobal.Alert.show({ title: "登录", content: resMsg.header.rm });
                                }
                            }, function (data) {
                                bui.BGlobal.Alert.show({ title: "登录", content: "网络异常" });
                            });
                        });
                    }, 2000);
                });
                $(_this.nodeTypeMap.get("logoTextNode")).on("touchend", function (e) {
                    clearTimeout(logoTextTimeOutId);
                });
                //当客户端超过30分钟无操作，会自动签退
                EventProxy.inst.on('clientIdle', function () {
                    console.info('客户端超出30m没有使用');
                    bui.BGlobal.Alert.show({ title: '提示', content: '客户端超出30分钟没有使用，请重新登录！' });
                    bui.DbManager.sessionGet("UserInfo", true).then(function (user) {
                        bui.DbManager.sessionGet("DeviceInfo", true).then(function (device) {
                            var reqMsg = new bui.ReqMsg();
                            reqMsg.body =
                                {
                                    UserId: user.UserId,
                                    BranchNo: user.BranchNo,
                                    UserName: user.UserName,
                                    DEV_NO: device.DEV_NO,
                                    UserRole: user.UserRole
                                };
                            bui.HttpUtils.bipHttp("login_logout", reqMsg).then(function (resMsg) {
                                if (resMsg.header.rc === "0000") {
                                    bui.DbManager.clearSession();
                                    bui.DbManager.clearLocal('MsgNotices', true);
                                    bui.DbManager.clearLocal('MsgSaleLeads', true);
                                    bui.DbManager.clearLocal('MsgCusts', true);
                                    clearInterval(_this.audioTimeOutId);
                                    clearInterval(_this.videoTimeOutId);
                                    clearTimeout(_this.mediaUploadTimeOut);
                                    clearInterval(_this.interValId);
                                    clearInterval(_this.notificationIntervalId);
                                    if (_this.notification) {
                                        _this.notification.hide();
                                        _this.notification.clear();
                                    }
                                    _this.loginPadDevice();
                                    PageManager.to("btop.bui.MainPage");
                                }
                                else {
                                    bui.BGlobal.Alert.show({ title: "登录提示", content: resMsg.header.rm });
                                }
                            }, function (data) {
                                bui.BGlobal.Alert.show({ title: "系统提示", content: "网络有异常！" });
                            });
                        });
                    });
                });
            };
            /**
             * @description 负责查询消息通知信息
             */
            HeaderPage.prototype.startMessageSeleAll = function () {
                var deviceInfo;
                var userInfo;
                var _this = this;
                bui.DbManager.sessionGet('UserInfo', true).then(function (user) {
                    userInfo = user;
                });
                bui.DbManager.sessionGet('DeviceInfo', true).then(function (device) {
                    deviceInfo = device;
                });
                var reqMsg = new bui.ResMsg();
                reqMsg.body =
                    {
                        DEV_NO: deviceInfo.DEV_NO,
                        UserId: userInfo.UserId,
                        BRANCHNO: userInfo.BranchNo
                    };
                bui.HttpUtils.bipHttp("message_seleAll", reqMsg).then(function (resMsg) {
                    if (resMsg.header.rc == "0000") {
                        var msgs = resMsg.body["MESSAGE"];
                        for (var i in msgs) {
                            _this.notify(JSON.parse(msgs[i]["MESSAGEDATA"]));
                        }
                    }
                    else {
                        console.info(resMsg.header.rm);
                    }
                }, function (error) {
                    //BGlobal.Alert.show({title:'',content:resMsg.header.rm})
                    console.error("HeaderPage \u8FDB\u884C\u8F6E\u5FAA\u6D88\u606F\u65F6\u51FA\u73B0\u5F02\u5E38\uFF0C\u5F02\u5E38\u4FE1\u606F\u4E3A\uFF1A " + error);
                });
            };
            /**
             * @description 播放铃声
             */
            HeaderPage.prototype.playAlarm = function () {
                bui.DbManager.localGet("SystemSetting", true).then(function (systemSetting) {
                    if (systemSetting != null) {
                        if (systemSetting.ringTip) {
                            if (systemSetting.ringTipType == 0) {
                                document.getElementById("ringError").play();
                            }
                            else if (systemSetting.ringTipType == 1) {
                                document.getElementById("ringNotify").play();
                            }
                            else if (systemSetting.ringTipType == 2) {
                                document.getElementById("ringNotifyCalendar").play();
                            }
                            else {
                                document.getElementById("ringError").play();
                            }
                        }
                    }
                });
            };
            /**
             * @description 通知等待客户进入通知组件
             */
            HeaderPage.prototype.notifyCustWaitting = function () {
                var _this = this;
                clearInterval(this.interValId); //socket可能被重新打开，所以这个ID需要清除
                this.interValId = setInterval(function () {
                    var that = this;
                    var customerQueues;
                    //1.查询缓存中客户队列数据CustomerQueues
                    bui.DbManager.sessionGet('CustomerQueues', true).then(function (data) {
                        //2.如果客户队列存在队列数据，则展示，否则，请求服务端取出对应队列数据，把取得的数据存放到客户端上
                        if (data != null) {
                            //customerQueues = data;
                            that.custBirthAndWatingNotify(data);
                        }
                        else {
                            var bipHeaderInst = bui.SingletonUtil.getInstance("btop.bui.BipHeader");
                            var reqMsg = new bui.ReqMsg();
                            reqMsg.body = {
                                BranchNo: bipHeaderInst.nid
                            };
                            var tipOption = {
                                tipMsg: '正在玩命加载数据...',
                                isShow: false
                            };
                            bui.HttpUtils.bipHttp('hallManagerService_queueInfoAll', reqMsg, tipOption).then(function (data) {
                                var resMsg = data;
                                if (resMsg.header.rc == "0000") {
                                    var customerQueues_1 = (data['body']['BusQueues']);
                                    //3.取出数据后，把队列数据存放到客户端上
                                    bui.DbManager.sessionPut("CustomerQueues", customerQueues_1, true, false).then(function (data) {
                                        //customerQueues = data;
                                        that.custBirthAndWatingNotify(customerQueues_1);
                                    });
                                }
                                else {
                                    //BGlobal.Alert.show({title:"提示",content:resMsg.header.rm})
                                    console.error("HeaderPage\u5B9A\u65F6\u5668\u672A\u67E5\u5230\u6392\u961F\u4FE1\u606F,\u8FD4\u56DE\u4EA4\u6613\u7801\u4E3A\uFF1A " + resMsg.header.rm);
                                }
                            }, function (error) {
                                bui.BGlobal.Alert.show({ title: "提示", content: "网络加载有异常" });
                            });
                        }
                    }, function (error) {
                        console.info(error);
                    });
                }.bind(this), 20000);
            };
            /**
             * @description 根据队列信息来排查用户生日提醒和等待提醒
             * @param customerQueues
             */
            HeaderPage.prototype.custBirthAndWatingNotify = function (customerQueues) {
                var _this = this;
                //首先过滤数据，把等待用户抽取到等待容器中
                var custWaitting;
                var birthDayTip = true;
                var ringTip = true;
                bui.DbManager.localGet("SystemSetting", true).then(function (systemSetting) {
                    if (systemSetting != null) {
                        custWaitting = systemSetting.custWaitting;
                        birthDayTip = systemSetting.birthTip;
                        ringTip = systemSetting.ringTip;
                    }
                });
                var currentTime = new Date().getTime();
                for (var i in customerQueues.BusQueue) {
                    var busQueue = customerQueues.BusQueue[i];
                    for (var j in busQueue.Ticket) {
                        var ticket = busQueue.Ticket[j];
                        //对ST1等待队列用户提醒
                        if (ticket.TrxStatus == "0" && !_this.validateRepeat(ticket.CustId, "ST1")) {
                            //存入等待客户
                            var timeGaps = Math.floor((currentTime - new Date(ticket.PrintTime).getTime()) / (60 * 1000)); //求出时间差单位为分钟
                            if (custWaitting < timeGaps) {
                                var msgCustInst = new bui.MsgCust();
                                msgCustInst.TYPE = 'P5';
                                msgCustInst.CUSTCODE = ticket.CustId;
                                msgCustInst.SUB_TYPE = 'ST1';
                                msgCustInst.MESSAGE = "\u5BA2\u6237" + ticket.CustName + "\u5DF2\u7ECF\u7B49\u5F85\u4E86" + timeGaps + "\u5206\u949F";
                                msgCustInst.ticketDto.fromQueue = i;
                                msgCustInst.ticketDto.ticket = ticket;
                                var args = new Array();
                                _this.notify(msgCustInst); //这一步很重要，可以让通知组件更新数据
                            }
                        }
                        //对生日进行提醒
                        if (birthDayTip) {
                            if (!_this.validateRepeat(ticket.CustId, "ST2")) {
                                /*let date:string = TimeUtil.getToday();
                                date = date.replace(/\-/g,"");*/
                                var currentBirth = bui.TimeUtil.getMonth() + "-" + bui.TimeUtil.getDay();
                                if (currentBirth == ticket.CustBirthday.substr(5)) {
                                    var msgCustInst = new bui.MsgCust();
                                    msgCustInst.TYPE = 'P5';
                                    msgCustInst.CUSTCODE = ticket.CustId;
                                    msgCustInst.SUB_TYPE = 'ST2';
                                    msgCustInst.MESSAGE = "\u4ECA\u5929\u5929\u662F\u7528\u6237" + ticket.CustName + "\u7684\u751F\u65E5\uFF01";
                                    _this.notify(msgCustInst); //这一步很重要，可以让通知组件更新数据
                                }
                            }
                        }
                    }
                }
            };
            /**
             * @description 在缓存MsgCusts去过滤是否重复
             * @param custCode 客户ID
             * @param type 类型
             * @returns {boolean}
             */
            HeaderPage.prototype.validateRepeat = function (custCode, type) {
                var flag = false;
                bui.DbManager.localGet("MsgCusts", true).then(function (msgCusts) {
                    for (var i in msgCusts) {
                        if (msgCusts[i].CUSTCODE == custCode && msgCusts[i].SUB_TYPE == type) {
                            flag = true;
                        }
                    }
                });
                return flag;
            };
            /**
             * @description 登录成功登录
             */
            HeaderPage.prototype.loginLogin = function () {
                var _this = this;
                this.DEV_OID = null;
                var UserId;
                var UserName;
                var BranchNo;
                var DEV_NO;
                var UserRole;
                var DEV_IP;
                bui.DbManager.sessionGet('DeviceInfo', true).then(function (data) {
                    BranchNo = data.BRANCH_NO;
                    DEV_NO = data.DEV_NO;
                    DEV_IP = data.DEV_IP;
                });
                bui.DbManager.sessionGet('UserInfo', true).then(function (data) {
                    UserId = data.UserId;
                    UserName = data.UserName;
                    UserRole = data.UserRole;
                });
                var reqMsg = new bui.ReqMsg();
                reqMsg.body = {
                    UserId: UserId,
                    UserName: UserName,
                    BranchNo: BranchNo,
                    DEV_NO: DEV_NO,
                    UserRole: UserRole,
                    DEV_OID: null
                };
                var tipOption = {
                    tipMsg: '正在登录中...',
                    isShow: true
                };
                bui.HttpUtils.bipHttp("login_login", reqMsg, tipOption).then(function (data) {
                    var resMsg = data;
                    var resHeader = resMsg.header;
                    if (resHeader.rc == "0000") {
                        // DbManager.sessionPut("login_login",data,false,true);
                        console.info("login_login is successed");
                        var msgNotices; //初始化公告通知
                        bui.DbManager.localGet("MsgNotices", true).then(function (data) {
                            msgNotices = data;
                        });
                        var msgSaleLeads; //初始化销售线索推送信息
                        bui.DbManager.localGet("MsgSaleLeads", true).then(function (data) {
                            msgSaleLeads = data;
                        });
                        var msgCusts; //初始化贵宾客户达到网点通知
                        bui.DbManager.localGet("MsgCusts", true).then(function (data) {
                            msgCusts = data;
                        });
                        _this.notification = bui.BGlobal.Notification.initData({ msgNotices: msgNotices, msgSaleLeads: msgSaleLeads, msgCusts: msgCusts });
                        //为notification绑定click事件
                        _this.notification.unbind('click').on('click', function (bEvent) {
                            var type = bEvent[0].data["type"];
                            var index = bEvent[0].data["index"];
                            console.info(bEvent);
                            switch (type) {
                                case "P2":
                                    _this.updateMsgNotice(index);
                                    break;
                                case "P3":
                                    _this.updateMsgSaleLeads(index);
                                    var serialNo = bEvent[0].data["serialNo"];
                                    _this.selectSaleClueBySerialNo(serialNo);
                                    break;
                                case "P5":
                                    _this.updateMsgCust(index);
                                    var msgCust = bEvent[0].data["msgCust"];
                                    if (msgCust.SUB_TYPE === "ST1") {
                                        if (!!msgCust.ticketDto.ticket.CustId) {
                                            PageManager.to("btop.bui.TransferPage", {
                                                title: '客户信息',
                                                pageId: 'btop.bui.ClientInforMainPage',
                                                data: {
                                                    ticket: msgCust.ticketDto.ticket,
                                                    fromQueue: msgCust.ticketDto.fromQueue
                                                }
                                            });
                                        }
                                        else {
                                            bui.BGlobal.Alert.show({ title: '提示', content: '没有客户ID' });
                                        }
                                    }
                                    break;
                                default:
                                    break;
                            }
                        });
                        //为notification绑定change事件
                        _this.notification.unbind('change').on('change', function (bEvent) {
                            _this.computeNotiCount();
                        });
                        _this.notifyCustWaitting();
                        _this.computeNotiCount();
                    }
                    else {
                        bui.BGlobal.Login.hide();
                        bui.BGlobal.Alert.show({ title: "登录提示", content: resHeader.rm });
                    }
                }, function (data) {
                    bui.BGlobal.Alert.show({ title: "系统提示", content: "网络有异常！" });
                });
            };
            /**
             * @description pad设备登录操作
             */
            HeaderPage.prototype.loginPadDevice = function () {
                Global.LoadingToast.show('设备正在登录中');
                var _this = this;
                var body;
                /* if(_this.bipInstance.isRemote)
                 {
                 body = {
                 DEV_IP:Native.syncCall("AppService","getLocalIP",[]),
                 DEV_MAC:Native.syncCall("AppService","getLocalMac",[])
                 }
                 }else {
                 body = {
                 DEV_IP:"193.158.168.84",
                 DEV_MAC:"6C-0B-84-A5-03-C7"
                 }
                 }*/
                /*body = {
                 DEV_IP:"193.158.168.84",
                 DEV_MAC:"6C0B84A503C7"
                 }*/
                /* body = {
                     DEV_IP:"192.168.2.62",
                     DEV_MAC:"0008225815fc"
                 }*/
                /* body = {
                     DEV_IP:Native.syncCall("AppService","getLocalIP",[]),
                     DEV_MAC:Native.syncCall("AppService","getLocalMac",[])
                 }*/
                var devIp;
                var devMac;
                try {
                    devIp = Native.syncCall("AppService", "getLocalIP", []);
                    devMac = Native.syncCall("AppService", "getLocalMac", []);
                }
                catch (ex) {
                    /*  devIp = "192.168.2.62";
                      devMac = "0008225815fc";*/
                    devIp = "192.168.2.91";
                    devMac = "00483cdb00e0";
                    console.log("AudioPage \u8C03\u7528Native\u975E\u672C\u5730\uFF0C\u5982\u60F3\u6B63\u5E38\u4F7F\u7528\uFF0C\u8BF7\u5207\u5165PAD\u73AF\u5883\u4E2D");
                }
                //catch (ex){
                //    devIp = "192.168.2.74";
                //    devMac = "008b2f376b1b";
                //    console.error(`Native调用异常： `+ex);
                //}
                body = {
                    DEV_IP: devIp,
                    DEV_MAC: devMac
                };
                //alert("DEV_IP: "+Native.syncCall("AppService","getLocalIP",[])+" DEV_MAC: "+Native.syncCall("AppService","getLocalMac",[]));
                var reqmsg = new bui.ReqMsg();
                reqmsg.body = body;
                bui.HttpUtils.bipHttp("login_padDevice", reqmsg).then(function (resMsg) {
                    if (resMsg.header.rc == "0000") {
                        var bipHeaderInst = bui.SingletonUtil.getInstance("btop.bui.BipHeader");
                        bipHeaderInst.tty = "pad"; //终端号
                        bipHeaderInst.cid = "PAD"; //渠道编号
                        bipHeaderInst.tsn = 26; //终端流水号
                        bipHeaderInst.nid = resMsg.body["BRANCH_NO"]; //网点号
                        bui.DbManager.sessionPut("DeviceInfo", resMsg.body, true, false);
                        bui.DbManager.sessionPut("DeviceInfo", reqmsg.body, true, false);
                    }
                    else {
                        bui.BGlobal.Alert.show({ title: "登录", content: resMsg.header.rm });
                    }
                }, function (data) {
                    bui.BGlobal.Alert.show({ title: "登录", content: "网络异常" });
                });
            };
            /**
             * @description 接收服务端推送第一次建立长连接推送的信息
             * @param args
             */
            HeaderPage.prototype.notify = function (args) {
                var _this = this;
                //通知类型 客户取号叫号通知 P1  公告 P2 销售线索通知消息推送 P3 通知PAD客户端进行版本更新 P4 贵宾客户达到网点通知 P5
                switch (args["TYPE"]) {
                    case "P1":
                        _this.msgQueue(args);
                        break;
                    case "P2":
                        _this.msgNotice(args);
                        break;
                    case "P3":
                        _this.msgSaleLeads(args);
                        break;
                    case "P4":
                        _this.msgVersion(args);
                        break;
                    case "P5":
                        _this.msgCust(args);
                        break;
                    case "P7":
                        _this.assitMsg(args);
                        break;
                    default:
                        break;
                }
                /*//需要做通知类型判断
                if(args[0] == "login_login")
                {
                    this.DEV_OID = args[1];
                    let UserId:string;
                    let UserName:string;
                    let BranchNo:string;
                    let DEV_NO:string;
                    let UserRole:string;
                    let DEV_IP:string;
                    DbManager.sessionGet('DeviceInfo',true).then(function(data){
                        BranchNo = data.BRANCH_NO;
                        DEV_NO= data.DEV_NO;
                        DEV_IP = data.DEV_IP;
                    });
                    DbManager.sessionGet('UserInfo',true).then(function(data){
                        UserId = data.UserId;
                        UserName = data.UserName;
                        UserRole = data.UserRole;
                    });
                    let reqMsg:ReqMsg = new ReqMsg();
                    reqMsg.body = {
                        UserId:UserId,
                        UserName:UserName,
                        BranchNo:BranchNo,
                        DEV_NO:DEV_NO,
                        UserRole:UserRole,
                        DEV_OID:args[1]
                    }
                    let tipOption = {
                        tipMsg:'正在登录中...',
                        isShow:true
                    };
                    HttpUtils.bipHttp("login_login",reqMsg,tipOption).then(function(data:ResMsg){
                        let resMsg:ResMsg = data;
                        let resHeader:ResBipHeader = resMsg.header;
                        if(resHeader.rc == "0000"){
                            // DbManager.sessionPut("login_login",data,false,true);
                            console.info("login_login is successed");
                            let msgNotices:Array<MsgNotice>;//初始化公告通知
                            DbManager.localGet("MsgNotices",true).then(function(data){
                                msgNotices = data;
                            });
                            let msgSaleLeads:Array<MsgSaleLeads>;//初始化销售线索推送信息
                            DbManager.localGet("MsgSaleLeads",true).then(function(data){
                                msgSaleLeads = data;
                            });
                            let msgCusts:Array<MsgCust>;//初始化贵宾客户达到网点通知
                            DbManager.localGet("MsgCusts",true).then(function(data){
                                msgCusts = data;
                            });
                            _this.notification = <Notification>BGlobal.Notification.initData({msgNotices:msgNotices,msgSaleLeads:msgSaleLeads,msgCusts:msgCusts});
                            //为notification绑定click事件
                            _this.notification.unbind('click').on('click',function(bEvent:BEvent){
                                let type = bEvent[0].data["type"];
                                let index = bEvent[0].data["index"];
                                console.info(bEvent);
                                switch (type)
                                {
                                    case "P2":
                                        _this.updateMsgNotice(index);
                                        break;
                                    case "P3":
                                        _this.updateMsgSaleLeads(index);
                                        let serialNo:string = bEvent[0].data["serialNo"];
                                        _this.selectSaleClueBySerialNo(serialNo);
                                        break;
                                    case "P5":
                                        _this.updateMsgCust(index);
                                        let msgCust:MsgCust = <MsgCust>bEvent[0].data["msgCust"];
                                        if(msgCust.SUB_TYPE === "ST1")
                                        {
                                            if(!!msgCust.ticketDto.ticket.CustId)
                                            {
                                                PageManager.to("btop.bui.TransferPage", {
                                                    title:'客户信息',
                                                    pageId:'btop.bui.ClientInforMainPage',
                                                    data:{
                                                        ticket: msgCust.ticketDto.ticket,
                                                        fromQueue: msgCust.ticketDto.fromQueue
                                                    }
                                                });
                                            }else{
                                                 BGlobal.Alert.show({title:'提示',content:'没有客户ID'});
                                            }
                                        }
                                        break;
                                    default:
                                        break;
                                }
                            });
                            //为notification绑定change事件
                            _this.notification.unbind('change').on('change',function(bEvent:BEvent){
                                _this.computeNotiCount();
                            });
                            _this.notifyCustWaitting();
                            _this.computeNotiCount();
                        }else
                        {
                            BGlobal.Login.hide();
                            BGlobal.Alert.show({title:"登录提示",content:resHeader.rm});
                        }
    
                    },function(data){
                        BGlobal.Alert.show({title:"系统提示",content:"网络有异常！"});
                    });
                }else if(args[0] == "login_ping")
                {
                    //根据服务端来促使客户端向服务端发送心跳
                    let DEV_NO = 'PAD001';
                    let reqMsg:ReqMsg = new ReqMsg();
                    reqMsg.body = {
                        DEV_NO:DEV_NO,
                        DEV_OID:this.DEV_OID
                    }
                    HttpUtils.bipHttp("login_ping",reqMsg).then(function(data){
                        console.info('心跳发送成功');
                        console.info(data);
                    },function(data){
    
                    });
                }else if(args[0] == "notification_msg") //服务器推送的正常数据
                {
                    //通知类型 客户取号叫号通知 P1  公告 P2 销售线索通知消息推送 P3 通知PAD客户端进行版本更新 P4 贵宾客户达到网点通知 P5
                    switch (args[1]["TYPE"])
                    {
                        case "P1":
                            _this.msgQueue(args[1]);
                            break;
                        case "P2":
                            _this.msgNotice(<MsgNotice>args[1]);
                            break;
                        case "P3":
                            _this.msgSaleLeads(<MsgSaleLeads>args[1])
                            break;
                        case "P4":
                            _this.msgVersion(args[1]);
                            break;
                        case "P5":
                            _this.msgCust(<MsgCust>args[1]);
                            break;
                        case "P7":
                            _this.assitMsg(args[1]);
                            break;
                        default:
                            break;
                    }
                }*/
            };
            /**
             * @description 客户取号叫号通知
             * @param data
             */
            HeaderPage.prototype.msgQueue = function (data) {
                bui.DbManager.sessionGet("CustomerQueues", true).then(function (customerQueues) {
                    if (customerQueues != null) {
                        for (var i in customerQueues.BusQueue) {
                            var busQueue = customerQueues.BusQueue[i];
                            var ticketsLength = busQueue.Ticket.length;
                            for (var j = 0; j < ticketsLength; j++) {
                                var ticket1 = busQueue.Ticket[j];
                                if (ticket1.TicketNo == data["QueueNo"]) {
                                    ticket1.TrxStatus = "3";
                                    busQueue.Ticket.splice(j, 0, ticket1);
                                    var ticket = new bui.Ticket();
                                    ticket.AppValue = data["AppValue"];
                                    ticket.BankRank = data["BankRank"];
                                    ticket.BeginTime = data["BeginTime"];
                                    ticket.CallTime = data["CallTime"];
                                    ticket.CustBirthday = data["CustBirthday"];
                                    ticket.CustId = data["CustId"];
                                    ticket.CustLevel = data["CustLevel"];
                                    ticket.CustName = data["CustName"];
                                    ticket.CustSex = data["CustSex"];
                                    ticket.CustTel = data["CustTel"];
                                    ticket.CustTypeId = data["CustTypeId"];
                                    ticket.EndTime = data["EndTime"];
                                    ticket.FetchTicketType = data["FetchTicketType"];
                                    //ticket.FlowNo = data["FlowNo"];
                                    ticket.OrderCode = data["OrderCode"];
                                    ticket.PrintTime = data["PrintTime"];
                                    ticket.Qytx = data["Qytx"];
                                    ticket.TicketNo = data["QueueNo"];
                                    ticket.TrxStatus = '0';
                                    ticket.WinNo = data["WinNo"];
                                    busQueue.Ticket.push(ticket);
                                }
                            }
                        }
                        bui.DbManager.sessionPut("CustomerQueues", customerQueues, true, true);
                    }
                    else {
                        var bipHeaderInst = bui.SingletonUtil.getInstance("btop.bui.BipHeader");
                        var reqMsg = new bui.ReqMsg();
                        reqMsg.body = {
                            BranchNo: bipHeaderInst.nid
                        };
                        bui.HttpUtils.bipHttp('hallManagerService_queueInfoAll', reqMsg).then(function (resMsg) {
                            if (resMsg.header.rc == "0000") {
                                var customerQueues_2 = (resMsg['body']['BusQueues']);
                                //3.取出数据后，把队列数据存放到客户端上
                                bui.DbManager.sessionPut("CustomerQueues", customerQueues_2, true, true);
                            }
                            else {
                                bui.BGlobal.Alert.show({ title: "提示", content: resMsg.header.rm });
                            }
                        }, function (error) {
                            bui.BGlobal.Alert.show({ title: "提示", content: "网络异常！" });
                        });
                    }
                });
                /*   DbManager.sessionPut("CustomerQueues",customerQueues,true,true).then(function(customerQueues:CustomerQueues){
                       let hallManager:HallManager = <HallManager>WidgetManager.byId('hallManager');
                       hallManager.clear();
                       _this.loadUI();
                   });*/
            };
            /**
             * @description 公告
             * @param msgNotice
             */
            HeaderPage.prototype.msgNotice = function (msgNotice) {
                var _this = this;
                //1.首先更新缓存数据
                bui.DbManager.localGet("MsgNotices", true).then(function (data) {
                    if (data == null) {
                        data = new Array();
                    }
                    msgNotice.ISREADED = false;
                    data.splice(0, 0, msgNotice); //每条新推送的数据，都放在首部
                    bui.DbManager.localPut("MsgNotices", data, true, true).then(function () {
                        bui.BGlobal.Notification.updateViewByEntity(msgNotice); //更新通知，显示在视图上
                        bui.BGlobal.Notification.updateUnReadNoticeView();
                        _this.playAlarm();
                        //_this.computeNotiCount();
                    });
                });
            };
            /**
             * @description 销售线索通知消息推送
             * @param msgSaleLeads
             */
            HeaderPage.prototype.msgSaleLeads = function (msgSaleLeads) {
                var _this = this;
                //1.首先更新缓存数据
                bui.DbManager.localGet("MsgSaleLeads", true).then(function (data) {
                    if (data == null) {
                        data = new Array();
                    }
                    msgSaleLeads.ISREADED = false;
                    data.splice(0, 0, msgSaleLeads); //每条新推送的数据，都放在首部
                    bui.DbManager.localPut("MsgSaleLeads", data, true, true).then(function () {
                        bui.BGlobal.Notification.updateViewByEntity(msgSaleLeads); //更新通知，显示在视图上
                        bui.BGlobal.Notification.updateUnReadSaleClueView();
                        _this.playAlarm();
                        //_this.createSaleClue(msgSaleLeads.SERIALNO);
                        //_this.computeNotiCount();
                    });
                });
            };
            /**
             * @description 通知客户进行版本更新
             * @param msgVersion
             */
            HeaderPage.prototype.msgVersion = function (msgVersion) {
                var _this = this;
                _this.playAlarm();
                try {
                    Native.asyncCall("TradeService", "updateVersion", [], function (success, error, result) {
                        var updateResultCode = result.updateResultCode;
                        if (updateResultCode == 0) {
                            alert("更新操作运行完成,没有更新不需要重启");
                        }
                        else if (updateResultCode == 1) {
                            alert("更新失败");
                        }
                        else if (updateResultCode == 3) {
                            alert("更新成功,应用即将重启");
                            Native.asyncCall("TradeService", "reBoot");
                        }
                    });
                }
                catch (e) {
                }
            };
            /**
             * @description 贵宾客户达到网点通知
             * @param msgCust
             */
            HeaderPage.prototype.msgCust = function (msgCust) {
                var _this = this;
                //1.首先更新缓存数据
                bui.DbManager.localGet("MsgCusts", true).then(function (data) {
                    if (data == null) {
                        data = new Array();
                    }
                    msgCust.ISREADED = false;
                    data.splice(0, 0, msgCust); //每条新推送的数据，都放在首部
                    bui.DbManager.localPut("MsgCusts", data, true, true).then(function () {
                        bui.BGlobal.Notification.updateViewByEntity(msgCust); //更新通知，显示在视图上
                        bui.BGlobal.Notification.updateUnReadCustView();
                        _this.playAlarm();
                        //_this.computeNotiCount();
                    });
                });
            };
            HeaderPage.prototype.assitMsg = function (assistMsg) {
                this.assitMsgs.push(assistMsg);
                /*if(this.assitMsgs.length == 1)
                {
                    let assistMsg2:AssitMsg = this.assitMsgs.shift();
                    let toastTip:ToastTip = BGlobal.ToastTip.show(assistMsg2.HELP_CONTENT);
                    toastTip.setWidth('300px');
                    toastTip.setOperationVisible(true);
                }else{
                    this.showAssistMsg();
                }*/
                this.showAssistMsg(false);
            };
            HeaderPage.prototype.showAssistMsg = function (flag) {
                var _this = this;
                if (this.assistQueueStatu == 'idle' || flag) {
                    this.assistQueueStatu = 'busy';
                    var assistMsg2 = this.assitMsgs.shift();
                    if (!!assistMsg2) {
                        _this.assitToastTip = bui.BGlobal.ComplexToastTip.show(assistMsg2.HELP_CONTENT);
                        _this.assitToastTip.closeBtn.unbind('click').on('click', function () {
                            if (_this.assitMsgs.length >= 1) {
                                setTimeout(function () {
                                    _this.showAssistMsg(true);
                                }, 0);
                            }
                            else {
                                _this.assitToastTip.hide();
                                _this.assistQueueStatu = 'idle';
                            }
                        });
                    }
                }
            };
            /**
             * @description 设置显示有多少未读信息
             * @param count
             */
            HeaderPage.prototype.setNotiCount = function (count) {
                var $notificationCountNode = $(this.nodeTypeMap.get("notification")).find(".notification-count");
                if (count <= 0) {
                    $notificationCountNode.html("");
                    $notificationCountNode.css("opacity", "0");
                }
                else if (count > 99) {
                    $notificationCountNode.html("99+");
                    $notificationCountNode.css("opacity", "1");
                }
                else {
                    $notificationCountNode.html(count);
                    $notificationCountNode.css("opacity", "1");
                }
            };
            /**
             * @description 当点击此item时，表示已经浏览过，把通知内部属性ISREADED设为true，并且此时重新计算有多少条未读
             * @param index
             */
            HeaderPage.prototype.updateMsgNotice = function (index) {
                var _this = this;
                bui.DbManager.localGet("MsgNotices", true).then(function (msgNotices) {
                    if (!msgNotices[index].ISREADED) {
                        msgNotices[index].ISREADED = true;
                        bui.DbManager.localPut("MsgNotices", msgNotices, true, true).then(function () {
                            if (_this.notification) {
                                _this.notification.updateUnReadNoticeView();
                            }
                        });
                    }
                });
            };
            /**
             * @description 当点击此item时，表示已经浏览过，把通知内部属性ISREADED设为true，并且此时重新计算有多少条未读
             * @param index
             */
            HeaderPage.prototype.updateMsgSaleLeads = function (index) {
                var _this = this;
                bui.DbManager.localGet("MsgSaleLeads", true).then(function (msgSaleLeads) {
                    if (!msgSaleLeads[index].ISREADED) {
                        msgSaleLeads[index].ISREADED = true;
                        bui.DbManager.localPut("MsgSaleLeads", msgSaleLeads, true, true).then(function () {
                            if (_this.notification) {
                                _this.notification.updateUnReadSaleClueView();
                            }
                        });
                    }
                });
            };
            /**
             * @description 当点击此item时，表示已经浏览过，把通知内部属性ISREADED设为true，并且此时重新计算有多少条未读
             * @param index
             */
            HeaderPage.prototype.updateMsgCust = function (index) {
                var _this = this;
                bui.DbManager.localGet("MsgCusts", true).then(function (msgCusts) {
                    if (!msgCusts[index].ISREADED) {
                        msgCusts[index].ISREADED = true;
                        bui.DbManager.localPut("MsgCusts", msgCusts, true, true).then(function () {
                            if (_this.notification) {
                                _this.notification.updateUnReadCustView();
                            }
                        });
                    }
                });
            };
            /**
             * @description 计算未读通知数量
             */
            HeaderPage.prototype.computeNotiCount = function () {
                var _this = this;
                if (_this.notification) {
                    this.setNotiCount(_this.notification.getUnReadedCount());
                }
            };
            /**
             * @description 定时清理任务
             */
            HeaderPage.prototype.uploadMediaTimer = function () {
                var _this = this;
                clearInterval(this.mediaUploadIntervalId);
                bui.DbManager.localGet("SystemSetting", true).then(function (systemSetting) {
                    if (systemSetting.mediaTimer) {
                        var timers = systemSetting.mediaTimer.split(":");
                        var hour = timers[0];
                        var minute = timers[1];
                        var second = timers[2];
                        var timerTask = new bui.TimerTask(hour, minute, second);
                        _this.mediaUploadIntervalId = timerTask.schedule(function () {
                            _this.uploadMedia();
                            _this.uplaodBreakpointMedia();
                        });
                    }
                    else {
                        var timerTask = new bui.TimerTask(0, 0, 0);
                        _this.mediaUploadIntervalId = timerTask.schedule(function () {
                            _this.uploadMedia();
                            _this.uplaodBreakpointMedia();
                        });
                    }
                });
            };
            /**
             * @description 模仿断点续传，直到全部上传成功
             */
            HeaderPage.prototype.uploadBreakpointMedia = function () {
                var _this = this;
                this.mediaUploadTimeOut = setInterval(function () {
                    var audioRootPath = Native.getDefaultAudioRootPath();
                    var audioList = Native.syncCall("CommService", "getMediaList", [audioRootPath]);
                    audioList = JSON.parse(audioList);
                    var videoRootPath = Native.getDefaultVideoRootPath();
                    var videoList = Native.syncCall("CommService", "getMediaList", [videoRootPath]);
                    videoList = JSON.parse(videoList);
                    _this.uploadMedia();
                    if (audioList.length == 0 && videoList.length == 0) {
                        clearTimeout(_this.mediaUploadTimeOut);
                    }
                }, 100000);
            };
            HeaderPage.prototype.uploadMedia = function () {
                //上传录音文件
                var remoteUploadPath = "/update/resource/pad/App/media/audios"; //上传到服务器的路径
                Native.asyncCall("FileService", "uploadAudioFile", [remoteUploadPath], function (success, error, result) {
                    if (success) {
                        var uploadSuccCount = result.uploadSuccCount; //成功上传文件的个数
                        var uploadFailCount = result.uploadFailCount; //失败上传文件的个数
                        // BGlobal.Alert.show({title:'提示',content:`音频成功上传${uploadSuccCount}个，失败上传${uploadFailCount}个`});
                        var uploadedFiles = result.uploadedFiles;
                        //alert(JSON.stringify(uploadedFiles))
                        for (var i in uploadedFiles) {
                            Native.syncCall("CommService", "deleteFile", [uploadedFiles[i]]); //删除上传成功的文件
                        }
                    }
                    else {
                    }
                });
                var remoteUploadPath = "/update/resource/pad/App/media/videos"; //上传到服务器的路径
                Native.asyncCall("FileService", "uploadVideoFile", [remoteUploadPath], function (success, error, result) {
                    if (success) {
                        var uploadSuccCount = result.uploadSuccCount; //成功上传文件的个数
                        var uploadFailCount = result.uploadFailCount; //失败上传文件的个数
                        // BGlobal.Alert.show({title:'提示',content:`视频成功上传${uploadSuccCount}个，失败上传${uploadFailCount}个`});
                        var uploadedFiles = result.uploadedFiles;
                        for (var i in uploadedFiles) {
                            Native.syncCall("CommService", "deleteFile", [uploadedFiles[i]]); //删除上传成功的文件
                        }
                    }
                    else {
                    }
                });
            };
            /**
             * @description 销售线索创建
             * @param saleClue
             */
            HeaderPage.prototype.createSaleClue = function (SERIALNO) {
                var reqMsg9 = new bui.ReqMsg();
                reqMsg9.body = {
                    SERIALNO: SERIALNO
                };
                var _this = this;
                bui.HttpUtils.bipHttp('saleLeads_info', reqMsg9).then(function (data) {
                    if (data.header.rc == "0000") {
                        var saleClueRequest = data.body;
                        //进行创建缓存存储
                        bui.DbManager.sessionGet('SaleClues', true).then(function (saleClues) {
                            if (saleClues != null) {
                                saleClues.push(saleClueRequest);
                                bui.DbManager.sessionPut('SaleClues', saleClues, true, true);
                            }
                            else {
                                var saleCluesNew = new Array();
                                saleCluesNew.push(saleClueRequest);
                                bui.DbManager.sessionPut('SaleClues', saleCluesNew, true, true);
                            }
                        });
                    }
                    else {
                        console.error("HeaderPage \u63A8\u9001\u9500\u552E\u7EBF\u7D22\u7F51\u7EDC\u5F02\u5E38\uFF1A" + data.header.rm);
                    }
                });
            };
            /**
             * @description 查询销售线索
             * @param SERIALNO
             */
            HeaderPage.prototype.selectSaleClueBySerialNo = function (SERIALNO) {
                var saleClue;
                var reqMsg9 = new bui.ReqMsg();
                reqMsg9.body = {
                    SERIALNO: SERIALNO
                };
                var _this = this;
                bui.HttpUtils.bipHttp('saleLeads_info', reqMsg9).then(function (data) {
                    if (data.header.rc == "0000") {
                        var saleClueRequest = data.body;
                        //进行创建缓存存储
                        saleClue = data.body;
                        if (saleClue != null) {
                            PageManager.to("btop.bui.TransferPage", {
                                title: '客户信息',
                                pageId: 'btop.bui.XiaoShouXianSuoCreatePage',
                                data: {
                                    saleClue: saleClue
                                }
                            });
                        }
                        else {
                            bui.BGlobal.Alert.show({ title: '提示', content: '缓存数据没此销售线索，请刷新缓存' });
                        }
                    }
                    else {
                        console.error("HeaderPage \u63A8\u9001\u9500\u552E\u7EBF\u7D22\u7F51\u7EDC\u5F02\u5E38\uFF1A" + data.header.rm);
                    }
                });
                /*let saleClue:SaleClue;
                DbManager.sessionGet('SaleClues',true).then(function(saleClues:Array<SaleClue>){
                    for(let i = 0;i<saleClues.length;i++)
                    {
                        if(saleClues[i].SERIALNO === SERIALNO)
                        {
                            saleClue = saleClues[i];
                        }
                    }
                });
                return saleClue;*/
            };
            return HeaderPage;
        })(Page);
        bui.HeaderPage = HeaderPage;
        var AssitMsg = (function () {
            function AssitMsg() {
            }
            return AssitMsg;
        })();
        bui.AssitMsg = AssitMsg;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=HeaderPage.js.map