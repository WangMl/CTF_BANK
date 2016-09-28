var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        var ClientInforSubThreePage = (function (_super) {
            __extends(ClientInforSubThreePage, _super);
            function ClientInforSubThreePage() {
                _super.apply(this, arguments);
            }
            ClientInforSubThreePage.prototype.initView = function () {
                var _this = this;
                //返回主页
                $(this.nodeTypeMap.get('openTingTangMainPage')).click(function () {
                    PageManager.to('btop.bui.TingTangMainPage');
                });
                // 0 2：控制权限，客户信息查看权限与队列中保持一致。1：不控制权限，所有大堂经理和客户经理都可查看客户所有信息
                var isSeeData = this.data["data2"];
                var CUST_ID = this.data["CUST_ID"].CUST_ID;
                var custInfo = this.data["CUST_ID"].MANAGER_ID; //客户经理ID
                bui.DbManager.sessionGet("UserInfo").then(function (data) {
                    var device = data;
                    var jingLi = device.UserId; //User  当前PAD登陸用戶
                    //签约产品列表
                    var reqMsg = new bui.ReqMsg();
                    reqMsg.body =
                        {
                            CUST_ID: CUST_ID
                        };
                    bui.HttpUtils.bipHttp("cust_contractProduct", reqMsg).then(function (data) {
                        if (data.header.rc = "0000") {
                            var lieBiao = data.body;
                            if (isSeeData == 1) {
                                if (lieBiao.DEPOSIT == "1") {
                                    $(_this.nodeTypeMap.get('opencunkuan')).click(function () {
                                        var reqMsg = new bui.ReqMsg();
                                        reqMsg.body =
                                            {
                                                CUST_ID: CUST_ID
                                            };
                                        bui.HttpUtils.bipHttp("cust_deposit", reqMsg).then(function (data) {
                                            if (data.header.rc == "0000") {
                                                _this.pageAlertMethod(CUST_ID, 1, data.body);
                                            }
                                            else {
                                                bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                            }
                                        }, function () {
                                            bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                                        });
                                    });
                                }
                                else {
                                    $("#subthreecunkuan-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.INSURE == "1") {
                                    $(_this.nodeTypeMap.get('openbaoxian')).click(function () {
                                        _this.pageAlertMethod(CUST_ID, 6, data.body);
                                    });
                                }
                                else {
                                    $("#subthreebaoxian-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.FUND == "1") {
                                    //基金
                                    $(_this.nodeTypeMap.get('openjijin')).click(function () {
                                        _this.pageAlertMethod(CUST_ID, 3, data.body);
                                    });
                                }
                                else {
                                    $("#subthreejijin-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.NATLDEBT == "1") {
                                    //国债
                                    $(_this.nodeTypeMap.get('openguozhai')).click(function () {
                                        var reqMsg = new bui.ReqMsg();
                                        reqMsg.body =
                                            {
                                                CUST_ID: CUST_ID
                                            };
                                        _this.pageAlertMethod(CUST_ID, 4, data.body);
                                    });
                                }
                                else {
                                    $("#subthreeguozhai-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.TRUSTPRD == "1") {
                                    //信托
                                    $(_this.nodeTypeMap.get('openxintuo')).click(function () {
                                        _this.pageAlertMethod(CUST_ID, 8, data.body);
                                    });
                                }
                                else {
                                    $("#subthreexintuochanping-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.SAVEGOLD == "1") {
                                    //积存金
                                    $(_this.nodeTypeMap.get('openjichunjin')).click(function () {
                                        var reqMsg = new bui.ReqMsg();
                                        reqMsg.body =
                                            {
                                                CUST_ID: CUST_ID
                                            };
                                        bui.HttpUtils.bipHttp("cust_accmltgold", reqMsg).then(function (data) {
                                            if (data.header.rc == "0000") {
                                                _this.pageAlertMethod(CUST_ID, 7, data.body);
                                            }
                                            else {
                                                bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                                            }
                                        }, function () {
                                            bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                                        });
                                    });
                                }
                                else {
                                    $("#subthreejicunjin-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.PHOENIX == "1") {
                                    $(_this.nodeTypeMap.get('openfenghuangbao')).click(function () {
                                        if (data.header.rc == "0000") {
                                            _this.pageAlertMethod(CUST_ID, 9, data.body);
                                        }
                                    });
                                }
                                else {
                                    $("#subthreefenghuangbao-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.LOAN == "1") {
                                    //贷款
                                    $(_this.nodeTypeMap.get('opendaiKuan')).click(function () {
                                        var reqMsg = new bui.ReqMsg();
                                        reqMsg.body =
                                            {
                                                CUST_ID: CUST_ID
                                            };
                                        bui.HttpUtils.bipHttp("cust_loan", reqMsg).then(function (data) {
                                            if (data.header.rc === "0000") {
                                                _this.pageAlertMethod(CUST_ID, 2, data.body);
                                            }
                                            else {
                                                bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                                            }
                                        }, function () {
                                            bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                                        });
                                    });
                                }
                                else {
                                    $("#subthreedaikuan-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.FOREX == "1") {
                                    $(_this.nodeTypeMap.get('openwaihui')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else {
                                    $("#subthreewaihui-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.PAPYGOLD == "1") {
                                    $(_this.nodeTypeMap.get('openzhiHuangJin')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else {
                                    $("#subthreezhihuangjin-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.MANAGERMONEY == "1") {
                                    $(_this.nodeTypeMap.get('openlicai')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else {
                                    $("#subthreelicai-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.DEBIT_CRD_GLD == "1") {
                                    $(_this.nodeTypeMap.get('openjiejijinka')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else {
                                    $("#subthreejijiejinka-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.DEBIT_CRD_COMN == "1") {
                                    $(_this.nodeTypeMap.get('puTongJieJI')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else {
                                    $("#subthreejijieka-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.DEBIT_CRD_WHTFLD == "1") {
                                    $(_this.nodeTypeMap.get('jiejibaijin')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else {
                                    $("#subthreejiejibaijin-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.CRDT_CRD_COMN == "1") {
                                    $(_this.nodeTypeMap.get('xinyongpuka')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else {
                                    $("#subthreexinyongpuka-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.CRDT_CRD_GLD == "1") {
                                    $(_this.nodeTypeMap.get('xinyongjinka')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else {
                                    $("#subthreexinyongjinka-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.CRDT_CRD_WHTFLD == "1") {
                                    $(_this.nodeTypeMap.get('xinyongbaijin')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else {
                                    $("#subthreexinyongbaijin-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.NOTEINFORM == "1") {
                                    $(_this.nodeTypeMap.get('duanxintongzhi')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else {
                                    $("#subthreeduanxin-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.EBANK == "1") {
                                    $(_this.nodeTypeMap.get('wangyin')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else {
                                    $("#subthreewangyin-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.MOBILEBANK == "1") {
                                    $(_this.nodeTypeMap.get('shoujiyinhang')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else {
                                    $("#subthreeshoujiyinhang-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.PHONEBANK == "1") {
                                    $(_this.nodeTypeMap.get('dianhuayinhang')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else {
                                    $("#subthreedianhuayinhang-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.WECHATBANK == "1") {
                                    $(_this.nodeTypeMap.get('weixinyinhang')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else {
                                    $("#subthreeweixin-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.HIBS == "1") {
                                    $(_this.nodeTypeMap.get('yibaotong')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else {
                                    $("#subthreeyibaotong-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.DF_SALARY == "1") {
                                    $(_this.nodeTypeMap.get('daifagongzi')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else {
                                    $("#subthreedaifa-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.PHOENIX_E_ACCT == "1") {
                                    $(_this.nodeTypeMap.get('ebaotong')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else {
                                    $("#subthreeEbao-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.SJJYB == "1") {
                                    $(_this.nodeTypeMap.get('shoujijiaoyi')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else {
                                    $("#subthreej-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.CRDT_CRD_EXPAND_TERM_SLF == "1") {
                                    $(_this.nodeTypeMap.get('zidongkouhuan')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else {
                                    $("#subthreezidongfanhuan-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.QUICK_PAY == "1") {
                                    $(_this.nodeTypeMap.get('kuaijiefu')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else {
                                    $("#subthreezhifu-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.GH_PAY == "1") {
                                    $(_this.nodeTypeMap.get('gehuajiaofei')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else {
                                    $("#subthreegehua-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                            }
                            else if (isSeeData == 0 | isSeeData == 2) {
                                if (lieBiao.DEPOSIT == "1" & custInfo == jingLi) {
                                    $(_this.nodeTypeMap.get('opencunkuan')).click(function () {
                                        var reqMsg = new bui.ReqMsg();
                                        reqMsg.body =
                                            {
                                                CUST_ID: CUST_ID
                                            };
                                        bui.HttpUtils.bipHttp("cust_deposit", reqMsg).then(function (data) {
                                            if (data.header.rc == "0000") {
                                                _this.pageAlertMethod(CUST_ID, 1, data.body);
                                            }
                                            else {
                                                bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                            }
                                        }, function () {
                                            bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                                        });
                                    });
                                }
                                else if (lieBiao.DEPOSIT == "1") {
                                    $(_this.nodeTypeMap.get('opencunkuan')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreecunkuan-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.INSURE == "1" & custInfo == jingLi) {
                                    //保险
                                    $(_this.nodeTypeMap.get('openbaoxian')).click(function () {
                                        _this.pageAlertMethod(CUST_ID, 6, data.body);
                                    });
                                }
                                else if (lieBiao.INSURE == "1") {
                                    $(_this.nodeTypeMap.get('openbaoxian')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreebaoxian-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.FUND == "1" & custInfo == jingLi) {
                                    //基金
                                    $(_this.nodeTypeMap.get('openjijin')).click(function () {
                                        _this.pageAlertMethod(CUST_ID, 3, data.body);
                                    });
                                }
                                else if (lieBiao.FUND == "1") {
                                    $(_this.nodeTypeMap.get('openjijin')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreejijin-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.NATLDEBT == "1" & custInfo == jingLi) {
                                    //国债
                                    $(_this.nodeTypeMap.get('openguozhai')).click(function () {
                                        var reqMsg = new bui.ReqMsg();
                                        reqMsg.body =
                                            {
                                                CUST_ID: CUST_ID
                                            };
                                        _this.pageAlertMethod(CUST_ID, 4, data.body);
                                    });
                                }
                                else if (lieBiao.NATLDEBT == "1") {
                                    $(_this.nodeTypeMap.get('openguozhai')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreeguozhai-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.TRUSTPRD == "1" & custInfo == jingLi) {
                                    //信托
                                    $(_this.nodeTypeMap.get('openxintuo')).click(function () {
                                        _this.pageAlertMethod(CUST_ID, 8, data.body);
                                    });
                                }
                                else if (lieBiao.TRUSTPRD == "1") {
                                    $(_this.nodeTypeMap.get('openxintuo')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreexintuochanping-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.SAVEGOLD == "1" & custInfo == jingLi) {
                                    //积存金
                                    $(_this.nodeTypeMap.get('openjichunjin')).click(function () {
                                        var reqMsg = new bui.ReqMsg();
                                        reqMsg.body =
                                            {
                                                CUST_ID: CUST_ID
                                            };
                                        bui.HttpUtils.bipHttp("cust_accmltgold", reqMsg).then(function (data) {
                                            if (data.header.rc == "0000") {
                                                _this.pageAlertMethod(CUST_ID, 7, data.body);
                                            }
                                            else {
                                                bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                                            }
                                        }, function () {
                                            bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                                        });
                                    });
                                }
                                else if (lieBiao.SAVEGOLD == "1") {
                                    $(_this.nodeTypeMap.get('openjichunjin')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreejicunjin-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.PHOENIX == "1" & custInfo == jingLi) {
                                    //凤凰宝
                                    $(_this.nodeTypeMap.get('openfenghuangbao')).click(function () {
                                        if (data.header.rc == "0000") {
                                            _this.pageAlertMethod(CUST_ID, 9, data.body);
                                        }
                                    });
                                }
                                else if (lieBiao.PHOENIX == "1") {
                                    $(_this.nodeTypeMap.get('openfenghuangbao')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreefenghuangbao-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.LOAN == "1" & custInfo == jingLi) {
                                    //贷款
                                    $(_this.nodeTypeMap.get('opendaiKuan')).click(function () {
                                        var reqMsg = new bui.ReqMsg();
                                        reqMsg.body =
                                            {
                                                CUST_ID: CUST_ID
                                            };
                                        bui.HttpUtils.bipHttp("cust_loan", reqMsg).then(function (data) {
                                            if (data.header.rc === "0000") {
                                                _this.pageAlertMethod(CUST_ID, 2, data.body);
                                            }
                                            else {
                                                bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                                            }
                                        }, function () {
                                            bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                                        });
                                    });
                                }
                                else if (lieBiao.LOAN == "1") {
                                    $(_this.nodeTypeMap.get('opendaiKuan')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreedaikuan-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.FOREX == "1" & custInfo == jingLi) {
                                    $(_this.nodeTypeMap.get('openwaihui')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else if (lieBiao.FOREX == "1") {
                                    $(_this.nodeTypeMap.get('openwaihui')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreewaihui-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.PAPYGOLD == "1" & custInfo == jingLi) {
                                    $(_this.nodeTypeMap.get('openzhiHuangJin')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else if (lieBiao.PAPYGOLD == "1") {
                                    $(_this.nodeTypeMap.get('openzhiHuangJin')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreezhihuangjin-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.MANAGERMONEY == "1" & custInfo == jingLi) {
                                    $(_this.nodeTypeMap.get('openlicai')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else if (lieBiao.MANAGERMONEY == "1") {
                                    $(_this.nodeTypeMap.get('openlicai')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreelicai-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.DEBIT_CRD_GLD == "1" & custInfo == jingLi) {
                                    $(_this.nodeTypeMap.get('openjiejijinka')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else if (lieBiao.DEBIT_CRD_GLD == "1") {
                                    $(_this.nodeTypeMap.get('openjiejijinka')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreejijiejinka-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.DEBIT_CRD_COMN == "1" & custInfo == jingLi) {
                                    $(_this.nodeTypeMap.get('puTongJieJI')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else if (lieBiao.DEBIT_CRD_COMN == "1") {
                                    $(_this.nodeTypeMap.get('puTongJieJI')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreejijieka-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.DEBIT_CRD_WHTFLD == "1" & custInfo == jingLi) {
                                    $(_this.nodeTypeMap.get('jiejibaijin')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else if (lieBiao.DEBIT_CRD_WHTFLD == "1") {
                                    $(_this.nodeTypeMap.get('jiejibaijin')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreejiejibaijin-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.CRDT_CRD_COMN == "1" & custInfo == jingLi) {
                                    $(_this.nodeTypeMap.get('xinyongpuka')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else if (lieBiao.CRDT_CRD_COMN == "1") {
                                    $(_this.nodeTypeMap.get('xinyongpuka')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreexinyongpuka-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.CRDT_CRD_GLD == "1" & custInfo == jingLi) {
                                    $(_this.nodeTypeMap.get('xinyongjinka')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else if (lieBiao.CRDT_CRD_GLD == "1") {
                                    $(_this.nodeTypeMap.get('xinyongjinka')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreexinyongjinka-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.CRDT_CRD_WHTFLD == "1" & custInfo == jingLi) {
                                    $(_this.nodeTypeMap.get('xinyongbaijin')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else if (lieBiao.CRDT_CRD_WHTFLD == "1") {
                                    $(_this.nodeTypeMap.get('xinyongbaijin')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreexinyongbaijin-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.NOTEINFORM == "1" & custInfo == jingLi) {
                                    $(_this.nodeTypeMap.get('duanxintongzhi')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else if (lieBiao.NOTEINFORM == "1") {
                                    $(_this.nodeTypeMap.get('duanxintongzhi')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreeduanxin-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.EBANK == "1" & custInfo == jingLi) {
                                    $(_this.nodeTypeMap.get('wangyin')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else if (lieBiao.EBANK == "1") {
                                    $(_this.nodeTypeMap.get('wangyin')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreewangyin-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.MOBILEBANK == "1" & custInfo == jingLi) {
                                    $(_this.nodeTypeMap.get('shoujiyinhang')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else if (lieBiao.MOBILEBANK == "1") {
                                    $(_this.nodeTypeMap.get('shoujiyinhang')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreeshoujiyinhang-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.PHONEBANK == "1" & custInfo == jingLi) {
                                    $(_this.nodeTypeMap.get('dianhuayinhang')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else if (lieBiao.PHONEBANK == "1") {
                                    $(_this.nodeTypeMap.get('dianhuayinhang')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreedianhuayinhang-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.WECHATBANK == "1" & custInfo == jingLi) {
                                    $(_this.nodeTypeMap.get('weixinyinhang')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else if (lieBiao.WECHATBANK == "1") {
                                    $(_this.nodeTypeMap.get('weixinyinhang')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreeweixin-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.HIBS == "1" & custInfo == jingLi) {
                                    $(_this.nodeTypeMap.get('yibaotong')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else if (lieBiao.HIBS == "1") {
                                    $(_this.nodeTypeMap.get('yibaotong')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreeyibaotong-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.DF_SALARY == "1" & custInfo == jingLi) {
                                    $(_this.nodeTypeMap.get('daifagongzi')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else if (lieBiao.DF_SALARY == "1") {
                                    $(_this.nodeTypeMap.get('daifagongzi')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreedaifa-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.PHOENIX_E_ACCT == "1" & custInfo == jingLi) {
                                    $(_this.nodeTypeMap.get('ebaotong')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else if (lieBiao.PHOENIX_E_ACCT == "1") {
                                    $(_this.nodeTypeMap.get('ebaotong')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreeEbao-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.SJJYB == "1" & custInfo == jingLi) {
                                    $(_this.nodeTypeMap.get('shoujijiaoyi')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else if (lieBiao.SJJYB == "1") {
                                    $(_this.nodeTypeMap.get('shoujijiaoyi')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreej-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.CRDT_CRD_EXPAND_TERM_SLF == "1" & custInfo == jingLi) {
                                    $(_this.nodeTypeMap.get('zidongkouhuan')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else if (lieBiao.CRDT_CRD_EXPAND_TERM_SLF == "1") {
                                    $(_this.nodeTypeMap.get('zidongkouhuan')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreezidongfanhuan-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.QUICK_PAY == "1" & custInfo == jingLi) {
                                    $(_this.nodeTypeMap.get('kuaijiefu')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else if (lieBiao.QUICK_PAY == "1") {
                                    $(_this.nodeTypeMap.get('kuaijiefu')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreezhifu-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                                if (lieBiao.GH_PAY == "1" & custInfo == jingLi) {
                                    $(_this.nodeTypeMap.get('gehuajiaofei')).click(function () {
                                        _this.noDetails();
                                    });
                                }
                                else if (lieBiao.GH_PAY == "1") {
                                    $(_this.nodeTypeMap.get('gehuajiaofei')).click(function () {
                                        _this.noSustain();
                                    });
                                }
                                else {
                                    $("#subthreegehua-manager").find(".bui-widget-view").css("background-color", "#c8c8c8");
                                }
                            }
                        }
                        else {
                            bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                        }
                    }, function () {
                        bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                    });
                });
            };
            ClientInforSubThreePage.prototype.noSustain = function () {
                var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '该客户不在您名下，无法查询详细信息' });
                buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                    console.info(e);
                });
                buiAlert.setStartAuto(true);
                buiAlert.setTheme(bui.AlertTheme.Red);
            };
            ClientInforSubThreePage.prototype.noDetails = function () {
                var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '该产品不支持详情查询' });
                buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                    console.info(e);
                });
                buiAlert.setStartAuto(true);
                buiAlert.setTheme(bui.AlertTheme.Red);
            };
            ClientInforSubThreePage.prototype.pageAlertMethod = function (CUST_ID, biaoShi, dataContent) {
                var option = {
                    opacity: 1
                };
                var pageAlert = bui.BGlobal.PageAlert.show("btop.bui.QianYueChanPinPage", {
                    data: CUST_ID,
                    data1: biaoShi,
                    dataContent: dataContent
                }, option);
                pageAlert.confirmBtn.unbind("click").on("click", function (data) {
                });
                pageAlert.cancelBtn.unbind("click").on("click", function (data) {
                });
            };
            return ClientInforSubThreePage;
        })(Page);
        bui.ClientInforSubThreePage = ClientInforSubThreePage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ClientInforSubThreePage.js.map