var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../scripts/bns/btop.bui.d.ts"/>
///<reference path="../../../scripts/libs/jQuery.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var WidgetManager = btop.hui.WidgetManager;
        var PageManager = btop.hui.PageManager;
        var ChuangjianxiaoshouxiansuoPage = (function (_super) {
            __extends(ChuangjianxiaoshouxiansuoPage, _super);
            function ChuangjianxiaoshouxiansuoPage() {
                _super.apply(this, arguments);
            }
            ChuangjianxiaoshouxiansuoPage.prototype.initView = function () {
                var _this = this;
                var ZJEMPCODE;
                var SERIALNO = ""; //创建时可以不输
                //var myDate = new Date();
                //let year = myDate.getFullYear() + "";
                //let month = ( myDate.getMonth() + 1) + "";
                //let nowday = myDate.getDate() + "";
                //let INTRDATE = year + "-" + month + "-" + nowday;
                var INTRDATE = bui.TimeUtil.getToday();
                var aaaa = INTRDATE.split("-");
                $("#INTRDATE").val(INTRDATE);
                var year = parseInt(aaaa[0]);
                var moon = parseInt(aaaa[1]);
                var day = parseInt(aaaa[2]);
                var today = bui.TimeUtil.getToday();
                var datepicker = WidgetManager.byId("INTRDATE");
                //datepicker.Date = {year: 2013, month: 1, date: 13};
                $('#' + datepicker.id).find("input").addClass('input-control1');
                //$("#INTRDATE").blur(function(){
                //    let INTRDATE:string = datepicker.getDateString();
                //    let aaaa = INTRDATE.split("-");
                //
                //    let newyear = parseInt(aaaa[0]);
                //    let newmoon = parseInt(aaaa[1]);
                //    let newday = parseInt(aaaa[2]);
                //    if(year>newyear || moon>newmoon || day>newday){
                //        alert("请输入正确的日期")
                //        return;
                //    }
                // });
                var validatorUtils = new bui.ValidatorUtils();
                validatorUtils.validate($("#chuangJianXiaoShouXianSuo")[0]);
                $(this.nodeTypeMap.get('openXiaoShouMainPage')).click(function () {
                    if (_this.data.data1 == "KeHuXinXichuangjian") {
                        PageManager.to('btop.bui.ClientInforMainPage', _this.data.data2);
                    }
                    else if (_this.data.data1 == "chuangjianDangri") {
                        PageManager.to('btop.bui.DangRiLaiKeMainPage', _this.data.data2);
                    }
                    else {
                        PageManager.to('btop.bui.XiaoShouMainPage');
                    }
                });
                $("#CERTNO1").hide();
                $(this.nodeTypeMap.get('chuangJianZhuanJie')).click(function () {
                    var that = this;
                    var option = {
                        opacity: 0.8
                    };
                    var pageAlert = bui.BGlobal.PageAlert.show("btop.bui.XiaoShouXianSuoZhuanJiePage", option);
                    pageAlert.confirmBtn.unbind("click").on("click", function (data) {
                        ZJEMPCODE = data[0].data.data;
                        $("#ZJEMPCODE").val(data['0'].data.data);
                        $(that).focus();
                    });
                    pageAlert.cancelBtn.unbind("click").on("click", function (data) {
                        console.info(data);
                    });
                });
                $(this.nodeTypeMap.get('YiXiangChanPin')).focus(function () {
                    var that = this;
                    var pageAlert = bui.BGlobal.PageAlert.show("btop.bui.XiaoShouYiXiangChanPinPage");
                    pageAlert.confirmBtn.unbind("click").on("click", function (bevent) {
                        $("#CUST_PRODID").val(bevent[0]['data']['value']);
                        _this.yiXiangID = bevent[0]['data']["id"];
                        $(that).focus();
                    });
                    pageAlert.cancelBtn.unbind("click").on("click", function (bevent) {
                        console.info(bevent);
                    });
                });
                var opt1 = {
                    data: [
                        { "1": "存量客户 " },
                        { "2": "潜在客户" }
                    ]
                };
                var cUSTTYPESelect = WidgetManager.byId("CUSTTYPESelect");
                cUSTTYPESelect.initData(opt1);
                cUSTTYPESelect.setSelectedItem('1');
                var opt2 = {
                    data: [
                        { "1": "身份证" },
                        { "2": " 户口本" },
                        { "3": "军官证" },
                        { "4": "警官证" },
                        { "5": "士兵证" },
                        { "6": "文职干部证" },
                        { "7": "护照" },
                        { "8": "港澳台通行证" },
                        { "9": "其他" },
                        { "10": " 临时身份证" },
                        { "11": "香港身份证" },
                        { "12": "澳门身份证" },
                        { "13": "台湾身份证" }
                    ]
                };
                var CERTTYPESelect = WidgetManager.byId("CERTTYPE");
                CERTTYPESelect.initData(opt2);
                CERTTYPESelect.setSelectedItem('1');
                //$("#qiTa").hide('empty');
                CERTTYPESelect.on('change', function (data) {
                    var that = this;
                    if (CERTTYPESelect.getHTMLValue() == "身份证") {
                        $("#CERTNO").attr('bui-input-rulers', '{"idCard":true}');
                        $(that).focus();
                    }
                    else {
                        $("#CERTNO").attr('bui-input-rulers', '{"required":true}');
                        $(that).focus();
                    }
                });
                if (this.data.data1 == "KeHuXinXichuangjian") {
                    var CUST_ID; //取select的值
                    var that = this;
                    //$("#qianzai").hide('empty');
                    cUSTTYPESelect.on('change', function (data) {
                        if (cUSTTYPESelect.getHTMLValue() == "潜在客户") {
                            $('#CUST_ID').attr('bui-input-rulers', '{"noRequired":true}');
                            $(that).focus();
                        }
                        else {
                            $('#CUST_ID').attr('bui-input-rulers', '{"required":true}');
                            $(that).focus();
                        }
                    });
                    if (CERTTYPESelect.getHTMLValue() == "身份证") {
                        $('#CERTNO').attr('bui-input-rulers', '{"idCard":true}');
                        $(that).focus();
                    }
                    else {
                        $('#CERTNO').attr('bui-input-rulers', '{"required":true}');
                        $(that).focus();
                    }
                    var chuangjian = this.data.data;
                    $("#CUSTNAME").val(chuangjian.CustName);
                    $("#CONT_TEL_NO").val(chuangjian.CustTel);
                    $("#CUST_ID").val(chuangjian.CustId);
                    //创建销售线索
                    $(this.nodeTypeMap.get('chuangJianBaochun')).click(function (e) {
                        if (!validatorUtils.submitValidate()) {
                            bui.EventUtils.preventDefault(e);
                            return false;
                        }
                        var INTRDATE = datepicker.getDateString();
                        var aaaa = INTRDATE.split("-");
                        var newyear = parseInt(aaaa[0]);
                        var newmoon = parseInt(aaaa[1]);
                        var newday = parseInt(aaaa[2]);
                        if (year > newyear || moon > newmoon || day > newday) {
                            var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '转介日期请输入' + today + '或之后的日期' });
                            buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                                console.info(e);
                            });
                            buiAlert.setTheme(bui.AlertTheme.BLUE);
                            return;
                        }
                        var CERTNO = $("#CERTNO").val();
                        CUST_ID = $("#CUST_ID").val(); //不是必输项
                        var CERTTYPEValue = CERTTYPESelect.getHTMLValue();
                        var ZJEMPCODE = $("#ZJEMPCODE").val();
                        var CUSTTYPE = cUSTTYPESelect.getHTMLValue(); //取select的值
                        var CERTTYPE = CERTTYPEValue;
                        var CUSTNAME = $("#CUSTNAME").val();
                        var CONT_TEL_NO = $("#CONT_TEL_NO").val();
                        var CUST_PRODID = _this.yiXiangID; //意象产品 //
                        var COMOC_STATE = $("#COMOC_STATE").val();
                        bui.DbManager.sessionGet("UserInfo").then(function (data) {
                            var user = data;
                            var cEMPCODE = user.UserId;
                            var reqMsg6 = new bui.ReqMsg();
                            reqMsg6.body = {
                                SERIALNO: SERIALNO,
                                INTRDATE: datepicker.getDateString(),
                                ZJEMPCODE: ZJEMPCODE,
                                CUSTTYPE: CUSTTYPE,
                                CUST_ID: CUST_ID,
                                CERTTYPE: CERTTYPE,
                                CERTNO: CERTNO,
                                CUSTNAME: CUSTNAME,
                                CONT_TEL_NO: CONT_TEL_NO,
                                CUST_PRODID: CUST_PRODID,
                                CEMPCODE: cEMPCODE,
                                COMOC_STATE: COMOC_STATE,
                                OperaType: 0,
                                STATUS: $("#checkbox-1-2").is(":checked") ? 1 : 0
                            };
                            bui.HttpUtils.bipHttp('saleLeads_maintenance', reqMsg6).then(function (data) {
                                if (data.header.rc == "0000") {
                                    var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '创建销售线索成功' });
                                    buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                                        console.info(e);
                                    });
                                    buiAlert.setTheme(bui.AlertTheme.Red);
                                    PageManager.to('btop.bui.ClientInforMainPage', _this.data.data2);
                                }
                                else {
                                    bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                }
                            }, function (data) {
                                bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                            });
                        });
                    });
                }
                else if (this.data.data1 == "chuangjianDangri") {
                    var CUSTTYPE; //取select的值
                    var that = this;
                    //$("#qianzai").hide('empty');
                    cUSTTYPESelect.on('change', function (data) {
                        if (cUSTTYPESelect.getHTMLValue() == "潜在客户") {
                            $('#CUST_ID').attr('bui-input-rulers', '{"noRequired":true}');
                            $(that).focus();
                        }
                        else {
                            $('#CUST_ID').attr('bui-input-rulers', '{"required":true}');
                            $(that).focus();
                        }
                    });
                    if (CERTTYPESelect.getHTMLValue() == "身份证") {
                        $('#CERTNO').attr('bui-input-rulers', '{"idCard":true}');
                        $(that).focus();
                    }
                    else {
                        $('#CERTNO').attr('bui-input-rulers', '{"required":true}');
                        $(that).focus();
                    }
                    var chuangjian = this.data.data;
                    $("#CUSTNAME").val(chuangjian.CustName);
                    $("#CONT_TEL_NO").val(chuangjian.CustTel);
                    $("#CUST_ID").val(chuangjian.CustId);
                    $("#CONT_TEL_NO").val(chuangjian.Telephone);
                    //创建销售线索
                    $(this.nodeTypeMap.get('chuangJianBaochun')).click(function () {
                        if (!validatorUtils.submitValidate()) {
                            bui.EventUtils.preventDefault(e);
                            return false;
                        }
                        var INTRDATE = datepicker.getDateString();
                        var aaaa = INTRDATE.split("-");
                        var newyear = parseInt(aaaa[0]);
                        var newmoon = parseInt(aaaa[1]);
                        var newday = parseInt(aaaa[2]);
                        if (year > newyear || moon > newmoon || day > newday) {
                            var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '转介日期请输入' + today + '或之后的日期' });
                            buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                                console.info(e);
                            });
                            buiAlert.setTheme(bui.AlertTheme.BLUE);
                            return;
                        }
                        var CERTTYPEValue = CERTTYPESelect.getHTMLValue();
                        var ZJEMPCODE = $("#ZJEMPCODE").val();
                        var CUSTTYPE = cUSTTYPESelect.getHTMLValue(); //取select的值
                        var CUST_ID = $("#CUST_ID").val(); //不是必输项
                        var CERTTYPE = CERTTYPEValue;
                        var CERTNO = $("#CERTNO").val();
                        var CUSTNAME = $("#CUSTNAME").val();
                        var CONT_TEL_NO = $("#CONT_TEL_NO").val();
                        var CUST_PRODID = _this.yiXiangID; //意象产品 //
                        var COMOC_STATE = $("#COMOC_STATE").val();
                        bui.DbManager.sessionGet("UserInfo").then(function (data) {
                            var user = data;
                            var cEMPCODE = user.UserId;
                            $("#CEMPCODE").val(cEMPCODE);
                            //5创建销售线索
                            var reqMsg6 = new bui.ReqMsg();
                            reqMsg6.body = {
                                SERIALNO: SERIALNO,
                                INTRDATE: INTRDATE,
                                ZJEMPCODE: ZJEMPCODE,
                                CUSTTYPE: CUSTTYPE,
                                CUST_ID: CUST_ID,
                                CERTTYPE: CERTTYPE,
                                CERTNO: CERTNO,
                                CUSTNAME: CUSTNAME,
                                CONT_TEL_NO: CONT_TEL_NO,
                                CUST_PRODID: CUST_PRODID,
                                CEMPCODE: cEMPCODE,
                                COMOC_STATE: COMOC_STATE,
                                OperaType: 0,
                                STATUS: $("#checkbox-1-2").is(":checked") ? 1 : 0
                            };
                            bui.HttpUtils.bipHttp('saleLeads_maintenance', reqMsg6).then(function (data) {
                                if (data.header.rc == "0000") {
                                    var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '创建销售线索 成功' });
                                    buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                                        console.info(e);
                                    });
                                    buiAlert.setTheme(bui.AlertTheme.Red);
                                    PageManager.to('btop.bui.DangRiLaiKeMainPage', _this.data.fff);
                                }
                                else {
                                    bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                }
                            }, function (data) {
                                bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                            });
                        });
                    });
                }
                else {
                    //创建销售线索
                    var CUSTTYPE; //取select的值
                    var that = this;
                    //$("#qianzai").hide('empty');
                    cUSTTYPESelect.on('change', function (data) {
                        if (cUSTTYPESelect.getHTMLValue() == "潜在客户") {
                            $('#CUST_ID').attr('bui-input-rulers', '{"noRequired":true}');
                            $(that).focus();
                        }
                        else {
                            $('#CUST_ID').attr('bui-input-rulers', '{"required":true}');
                            $(that).focus();
                        }
                    });
                    if (CERTTYPESelect.getHTMLValue() == "身份证") {
                        $('#CERTNO').attr('bui-input-rulers', '{"idCard":true}');
                        $(that).focus();
                    }
                    else {
                        $('#CERTNO').attr('bui-input-rulers', '{"required":true}');
                        $(that).focus();
                    }
                    $(this.nodeTypeMap.get('chuangJianBaochun')).click(function (e) {
                        if (!validatorUtils.submitValidate()) {
                            bui.EventUtils.preventDefault(e);
                            return false;
                        }
                        var INTRDATE = datepicker.getDateString();
                        var aaaa = INTRDATE.split("-");
                        var newyear = parseInt(aaaa[0]);
                        var newmoon = parseInt(aaaa[1]);
                        var newday = parseInt(aaaa[2]);
                        if (year > newyear || moon > newmoon || day > newday) {
                            var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '转介日期请输入' + today + '或之后的日期' });
                            buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                                console.info(e);
                            });
                            buiAlert.setTheme(bui.AlertTheme.BLUE);
                            return;
                        }
                        var CERTTYPEValue = CERTTYPESelect.getHTMLValue();
                        var SERIALNO = $("#SERIALNO").val();
                        var CERTNO = $("#CERTNO").val();
                        var CUSTTYPE = cUSTTYPESelect.getHTMLValue(); //取select的值
                        var CUST_ID = $("#CUST_ID").val();
                        var CERTTYPE = CERTTYPEValue;
                        var CUSTNAME = $("#CUSTNAME").val();
                        var CONT_TEL_NO = $("#CONT_TEL_NO").val();
                        var CUST_PRODID = _this.yiXiangID;
                        var COMOC_STATE = $("#COMOC_STATE").val();
                        bui.DbManager.sessionGet("UserInfo").then(function (data) {
                            var user = data;
                            var cEMPCODE = user.UserId;
                            //判断是否转介
                            //5创建销售线索
                            var SERIALNO = "";
                            var reqMsg6 = new bui.ReqMsg();
                            reqMsg6.body = {
                                SERIALNO: SERIALNO,
                                INTRDATE: INTRDATE,
                                ZJEMPCODE: ZJEMPCODE,
                                CUSTTYPE: CUSTTYPE,
                                CUST_ID: CUST_ID,
                                CERTTYPE: CERTTYPE,
                                CERTNO: CERTNO,
                                CUSTNAME: CUSTNAME,
                                CONT_TEL_NO: CONT_TEL_NO,
                                CUST_PRODID: CUST_PRODID,
                                CEMPCODE: cEMPCODE,
                                COMOC_STATE: COMOC_STATE,
                                OperaType: 0,
                                STATUS: $("#checkbox-1-2").is(":checked") ? 1 : 0,
                                CUST_PRODNAME: ""
                            };
                            bui.HttpUtils.bipHttp('saleLeads_maintenance', reqMsg6).then(function (data) {
                                if (data.header.rc == "0000") {
                                    console.info(data.body.SERIALNO);
                                    SERIALNO = data.body.SERIALNO;
                                    var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '创建销售线索成功' });
                                    buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                                        console.info(e);
                                    });
                                    buiAlert.setTheme(bui.AlertTheme.BLUE);
                                    PageManager.to('btop.bui.XiaoShouXianSuoCreatePage', { data: SERIALNO, data1: "fanHui" });
                                }
                                else {
                                    bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                                }
                            }, function (data) {
                                bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                            });
                        });
                    });
                }
            };
            ChuangjianxiaoshouxiansuoPage.prototype.destroy = function () {
                if (this.tabInstance)
                    this.tabInstance.destroyPage();
                _super.prototype.destroy.call(this);
            };
            return ChuangjianxiaoshouxiansuoPage;
        })(Page);
        bui.ChuangjianxiaoshouxiansuoPage = ChuangjianxiaoshouxiansuoPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=ChuangjianxiaoshouxiansuoPage.js.map