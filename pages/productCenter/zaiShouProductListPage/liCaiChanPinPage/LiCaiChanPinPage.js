var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/************************************************************************
 * 类名  :  ProductListPage
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/22
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
        var Native = btop.hui.Native;
        var LiCaiChanPinPage = (function (_super) {
            __extends(LiCaiChanPinPage, _super);
            function LiCaiChanPinPage() {
                _super.apply(this, arguments);
            }
            LiCaiChanPinPage.prototype.initView = function () {
                console.info(this.data);
                var _this = this;
                //1. 返回产品中心页面，并保持现场数据
                $(this.nodeTypeMap.get('openProductCenterMainPage')).click(function () {
                    if (_this.data.data1 == "MainPage") {
                        PageManager.to('btop.bui.MainPage');
                    }
                    else {
                        var currentPage = 1;
                        PageManager.to('btop.bui.ProductCenterMainPage', { currentPage: currentPage });
                    }
                });
                bui.DbManager.sessionGet("DeviceInfo").then(function (data) {
                    var device = data;
                    var BranchNo = device.BRANCH_NO;
                    bui.DbManager.sessionGet("UserInfo").then(function (data) {
                        var device = data;
                        var UserId = device.UserId;
                        var reqMsg = new bui.ReqMsg();
                        reqMsg.body = {
                            BranchNo: BranchNo,
                            OperNo: UserId,
                            PrdCode: "",
                            ClientType: "",
                            TypeNo: "",
                            Channel: "V",
                            OffSet: "1",
                            QueryNum: "20"
                        };
                        bui.HttpUtils.bipHttp('product_financingList', reqMsg).then(function (data) {
                            if (data.header.rc == "0000") {
                                var quDao = data.body['ProductList'];
                                for (var i = 0; i < quDao.length; i++) {
                                    //console.info(quDao[i].Channels);
                                    //let str =quDao[i].Channels;
                                    //str.replace("0","柜台交易|");
                                    quDao[i].Channels = quDao[i].Channels.replace(/0/, "柜台交易|");
                                    quDao[i].Channels = quDao[i].Channels.replace(/1/, "网上银行|");
                                    quDao[i].Channels = quDao[i].Channels.replace(/2/, "自助查询终端|");
                                    quDao[i].Channels = quDao[i].Channels.replace(/3/, "电话银行|");
                                    quDao[i].Channels = quDao[i].Channels.replace(/4/, "ATM|");
                                    quDao[i].Channels = quDao[i].Channels.replace(/5/, "TA发起|");
                                    quDao[i].Channels = quDao[i].Channels.replace(/6/, "低柜|");
                                    quDao[i].Channels = quDao[i].Channels.replace(/9/, "批量发起|");
                                    quDao[i].Channels = quDao[i].Channels.replace(/G/, "WEB管理台|");
                                    quDao[i].Channels = quDao[i].Channels.replace(/B/, "微信|");
                                    quDao[i].Channels = quDao[i].Channels.replace(/D/, "代销|");
                                    quDao[i].Channels = quDao[i].Channels.replace(/V/, "网上营业厅|");
                                    var str = parseFloat(quDao[i].GuestRate);
                                    quDao[i].GuestRate = str * 1000000 / 10000 + "%";
                                }
                                //document.write(quDao[0].Channels)
                                console.info(quDao);
                                _this.executeVue(quDao);
                                $('#app').click(function (event) {
                                    event.stopPropagation();
                                    if (event.target.innerText === "详情") {
                                        var PrdName = data.body.ProductList;
                                        for (var i in PrdName) {
                                            if (PrdName[i].PrdName == $(event.target).attr("name")) {
                                                var option = {
                                                    top: "10%",
                                                    left: '15%',
                                                    width: '70%',
                                                    height: '60%',
                                                    opacity: 0.9
                                                };
                                                var pageAlert = bui.BGlobal.PageAlert.show("btop.bui.LiCaiChanPinXiangQingPage", {
                                                    data: PrdName[i],
                                                    data1: 2
                                                }, option);
                                                console.info(data);
                                            }
                                        }
                                    }
                                });
                            }
                            else {
                                bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                            }
                        });
                    });
                });
                //由guiJinShuTab父容器来委托所有元素事件，建议使用禁止事件冒泡
                $('#app').click(function (event) {
                    event.stopPropagation();
                    if (event.target.innerText === "查询") {
                        var PRODUCTCODE = $(event.target).attr("name");
                        if (PRODUCTCODE) {
                            var reqMsg = new bui.ReqMsg();
                            reqMsg.body =
                                {
                                    PrdCode: PRODUCTCODE
                                };
                            bui.HttpUtils.bipHttp("product_financingLimit", reqMsg).then(function (data) {
                                if (data.header.rc == "0000") {
                                    var licaiEDu = data.body.ErrorNo;
                                    if (licaiEDu == "1214") {
                                        var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '该产品不控制额度！' });
                                        buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                                            console.info(e);
                                        });
                                        buiAlert.setTheme(bui.AlertTheme.Red);
                                    }
                                    else if (licaiEDu == "0000") {
                                        //pageAlert 产品详情及额度查询
                                        var option = {
                                            opacity: 1
                                        };
                                        var pageAlert = bui.BGlobal.PageAlert.show("btop.bui.LiCaiChanPinXiangQingPage", {
                                            data: data,
                                            data1: 1
                                        }, option);
                                        pageAlert.confirmBtn.unbind("click").on("click", function (data) {
                                            console.info(data);
                                        });
                                        pageAlert.cancelBtn.unbind("click").on("click", function (data) {
                                            console.info(data);
                                        });
                                    }
                                }
                                else {
                                    bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                }
                            });
                        }
                        else {
                            return false;
                        }
                    }
                    else if (event.target.innerText === "下载") {
                        var PrdCode = $(event.target).attr("name1");
                        var PrdName = $(event.target).attr("name2");
                        if (PrdCode && PrdName) {
                            var reqMsg = new bui.ReqMsg();
                            reqMsg.body =
                                {
                                    PrdCode: PrdCode,
                                    PrdName: PrdName
                                };
                            bui.HttpUtils.bipHttp("product_financingDoc", reqMsg).then(function (data) {
                                if (data.header.rc = "0000") {
                                    /* let buiConfirm = <Alert>BGlobal.Confirm.show({title:'提示',content:'下载失败'});
                                     buiConfirm.confirmBtn.unbind('click').on('click',function(e:JQueryEventObject){
                                         console.info(e);
                                         PageManager.to("btop.bui.PdfBrowse",{financingDoc:data.body});
                                     });
                                     buiConfirm.setTheme(AlertTheme.Red);*/
                                    //PageManager.to("btop.bui.PdfBrowse",{financingDoc:data.body});
                                    if (data.body["address"]) {
                                        var address = data.body["address"];
                                        var bipServerInst = bui.SingletonUtil.getInstance("btop.bui.BipServer"); //初始化配置信息
                                        var localFilePath = bipServerInst.localFilePath + 'download/pdf/';
                                        var start = address.indexOf("LC/") + 3;
                                        var pdfName = address.substring(start, address.length);
                                        var result;
                                        try {
                                            result = Native.syncCall("CommService", "isExitFile", [localFilePath, pdfName]);
                                            var savePath = localFilePath + pdfName; //保存到本地的文件路径
                                            if (result) {
                                                if (result["isExist"]) {
                                                    var confirm_1 = bui.BGlobal.Confirm.show({ title: '提示', content: '是否浏览PDF' });
                                                    confirm_1.confirmBtn.unbind('click').on('click', function () {
                                                        Native.syncCall("CommService", "openPDF", [savePath]);
                                                    });
                                                }
                                                else {
                                                    var remotePath = bui.Constant.BASE_SERVER + bipServerInst.remoteFilePath + "LC/" + pdfName;
                                                    Native.asyncCall("FileService", "downloadFile", [remotePath, savePath], function (success, error, result) {
                                                        if (success) {
                                                            //服务器文件路径
                                                            var confirm_2 = bui.BGlobal.Confirm.show({ title: '提示', content: '是否浏览PDF' });
                                                            confirm_2.confirmBtn.unbind('click').on('click', function () {
                                                                Native.syncCall("CommService", "openPDF", [savePath]);
                                                            });
                                                        }
                                                        else {
                                                            bui.BGlobal.Alert.show({ title: '提示', content: '文件下载失败' });
                                                        }
                                                    });
                                                }
                                            }
                                        }
                                        catch (e) {
                                            var remotePath = bui.Constant.BASE_SERVER + bipServerInst.remoteFilePath + "LC/" + pdfName;
                                        }
                                    }
                                }
                                else {
                                    bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                }
                            });
                        }
                        else {
                            return false;
                        }
                    }
                    else if (event.target.innerText === "购买") {
                        var PrdCode = $(event.target).attr("name");
                        if (PrdCode) {
                            //let productUrl:string = `https://193.156.33.72/financing/padBuyFinancing.jhtml?prodCode=${PrdCode}`;
                            var bipServerInst = bui.SingletonUtil.getInstance("btop.bui.BipServer");
                            var productUrl = bipServerInst.netHallUrl + "?prodCode=" + PrdCode;
                            Native.syncCall("NetHallService", "startNetHall", [productUrl]);
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        return false; //禁止事件继续触发
                    }
                });
            };
            LiCaiChanPinPage.prototype.executeVue = function (data) {
                var _this = this;
                Vue.component('condition', {
                    template: '#licai-condition-temp',
                    props: ['filterText']
                });
                Vue.component('list', {
                    template: '#licai-list-temp',
                    props: ['items']
                });
                Vue.component('filter-list', {
                    template: '#licai-filter-list-temp',
                    data: function () {
                        return {
                            filterText: '',
                            items: data
                        };
                    },
                    computed: {
                        filteredItems: function () {
                            return this.$data.items.filter(function (item) {
                                if (item.Channels.indexOf('网上营业厅') == -1) {
                                    if (_this.data.data1 == "MainPage") {
                                        return false;
                                    }
                                }
                                return item['PrdName'].indexOf(this.$data.filterText) != -1
                                    || item['PrdCode'].indexOf(this.$data.filterText) != -1
                                    || item['PfirstAmt'].indexOf(this.$data.filterText) != -1
                                    || item['RiskName'].indexOf(this.$data.filterText) != -1
                                    || item['GuestRate'].indexOf(this.$data.filterText) != -1
                                    || item['EndDate'].indexOf(this.$data.filterText) != -1
                                    || item['Channels'].indexOf(this.$data.filterText) != -1;
                            }.bind(this));
                        }
                    }
                });
                new Vue({
                    el: '#app'
                });
            };
            return LiCaiChanPinPage;
        })(Page);
        bui.LiCaiChanPinPage = LiCaiChanPinPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=LiCaiChanPinPage.js.map