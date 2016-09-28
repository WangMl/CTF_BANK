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
        var XiaoShouXianSuoXiuGaiPage = (function (_super) {
            __extends(XiaoShouXianSuoXiuGaiPage, _super);
            function XiaoShouXianSuoXiuGaiPage() {
                _super.apply(this, arguments);
            }
            XiaoShouXianSuoXiuGaiPage.prototype.initView = function () {
                //返回主页
                var saleClues = this.data.data;
                var validatorUtils = new bui.ValidatorUtils();
                validatorUtils.validate($("#xiaoShouXianSuoXiuGaiPage")[0]);
                $(this.nodeTypeMap.get('backXiaoShouMainPage')).click(function () {
                    var cEMPCODE = saleClues.SERIALNO;
                    PageManager.to('btop.bui.XiaoShouXianSuoCreatePage', { data: cEMPCODE, data1: "backData" });
                });
                var zhuanjie;
                var cEMPCODE;
                $(this.nodeTypeMap.get('chuangJianZhuanJie')).click(function () {
                    var option = {
                        opacity: 0.8
                    };
                    var pageAlert = bui.BGlobal.PageAlert.show("btop.bui.XiaoShouXianSuoZhuanJiePage", option);
                    var that = this;
                    pageAlert.confirmBtn.unbind("click").on("click", function (data) {
                        console.info(data);
                        zhuanjie = data['0'].data.data;
                        $("#ZJEMPCODE").val(data['0'].data.data);
                        $(that).focus();
                    });
                    pageAlert.cancelBtn.unbind("click").on("click", function (data) {
                        console.info(data);
                    });
                });
                var datepicker = WidgetManager.byId("INTRDATE");
                //datepicker.Date = {year: 2013, month: 1, date: 13};
                $('#' + datepicker.id).find("input").addClass('input-control1');
                $(this.nodeTypeMap.get('YiXiangChanPin')).focus(function () {
                    var pageAlert = bui.BGlobal.PageAlert.show("btop.bui.XiaoShouYiXiangChanPinPage");
                    pageAlert.confirmBtn.unbind("click").on("click", function (bevent) {
                        $("#CUST_PRODID").val(bevent[0]['data']['value']);
                    });
                    pageAlert.cancelBtn.unbind("click").on("click", function (bevent) {
                        console.info(bevent);
                    });
                });
                var today = bui.TimeUtil.getToday();
                $("#CUST_PRODID").val(saleClues.CUST_PRODNAME);
                $("#BRNAME").val(saleClues.BRNAME);
                $("#SERIALNO").val(saleClues.CEMPNAME);
                $("#INTRDATE").val(saleClues.INTRDATE);
                $("#ZJEMPCODE").val(saleClues.ZJEMPCODE);
                $("#CUSTTYPE").val(saleClues.CUSTTYPE);
                $("#CUST_ID").val(saleClues.CUST_ID);
                $("#CUSTNAME").val(saleClues.CUSTNAME);
                $("#CERTTYPE").val(saleClues.CERTTYPE); //证件类型
                $("#CERTNO").val(saleClues.CERTNO);
                $("#CONT_TEL_NO").val(saleClues.CONT_TEL_NO);
                $("#CEMPCODE").val(saleClues.CEMPNAME); /////////////////////////////////////////////////////
                $("#INPUTDT").val(saleClues.INPUTDT);
                $("#STATUS").val(saleClues.STATUS);
                $("#COMOC_STATE").val(saleClues.COMOC_STATE);
                //销售线索删除
                $(this.nodeTypeMap.get('deleteSERIALNO')).click(function () {
                    var buiConfirm = bui.BGlobal.Confirm.show({ title: '提示', content: '确认删除' });
                    buiConfirm.confirmBtn.unbind('click').on('click', function (e) {
                        var SERIALNO = saleClues.SERIALNO;
                        //销售线索删除
                        var reqMsg9 = new bui.ReqMsg();
                        reqMsg9.body = {
                            SERIALNO: SERIALNO
                        };
                        bui.HttpUtils.bipHttp('saleLeads_delete', reqMsg9).then(function (data) {
                            if (data.header.rc == "0000") {
                                var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '销售线索删除成功' });
                                buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                                    console.info(e);
                                });
                                buiAlert.setTheme(bui.AlertTheme.Red);
                                PageManager.to('btop.bui.XiaoShouMainPage');
                            }
                            else {
                                bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                            }
                        }, function (error) {
                            bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                        });
                    });
                    buiConfirm.cancelBtn.unbind('click').on('click', function (e) {
                        console.info(e);
                    });
                    buiConfirm.setTheme(bui.ConfirmTheme.Red);
                });
                var INTRDATE = datepicker.getDateString();
                var aaaa = INTRDATE.split("-");
                $("#INTRDATE").val(INTRDATE);
                var year = parseInt(aaaa[0]);
                var moon = parseInt(aaaa[1]);
                var day = parseInt(aaaa[2]);
                // 保存修改销售线索 按钮
                $(this.nodeTypeMap.get('openbaocun')).click(function (e) {
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
                    var zJEMPCODE = $("#ZJEMPCODE").val();
                    //let zJEMPCODE = zhuanjie;
                    //$("#ZJEMPCODE").val(zhuanjie);
                    var cUST_PRODID = saleClues.CUST_PRODID;
                    var sERIALNO = saleClues.SERIALNO;
                    var iNTRDATE = datepicker.getDateString();
                    var cUSTTYPE = $("#CUSTTYPE").val();
                    var cUSTNAME = $("#CUSTNAME").val();
                    var cONT_TEL_NO = $("#CONT_TEL_NO").val();
                    var cERTNO = $("#CERTNO").val();
                    var cUST_ID = $("#CUST_ID").val();
                    var cERTTYPE = $("#CERTTYPE").val();
                    var COMOC_STATE = $("#COMOC_STATE").val();
                    console.info(saleClues.CUST_PRODNAME);
                    //5修改销售线索
                    var reqMsg6 = new bui.ReqMsg();
                    reqMsg6.body = {
                        SERIALNO: sERIALNO,
                        INTRDATE: iNTRDATE,
                        ZJEMPCODE: zJEMPCODE,
                        CUSTTYPE: cUSTTYPE,
                        CUST_ID: cUST_ID,
                        CEMPCODE: "",
                        CERTTYPE: cERTTYPE,
                        CERTNO: cERTNO,
                        CUSTNAME: cUSTNAME,
                        CONT_TEL_NO: cONT_TEL_NO,
                        CUST_PRODID: cUST_PRODID,
                        OperaType: '1',
                        STATUS: $("#checkbox-1-2").is(":checked") ? 1 : 0,
                        COMOC_STATE: COMOC_STATE,
                        CUST_PRODNAME: saleClues.CUST_PRODNAME
                    };
                    bui.HttpUtils.bipHttp('saleLeads_maintenance', reqMsg6).then(function (data) {
                        if (data.header.rc == "0000") {
                            var buiAlert = bui.BGlobal.Alert.show({ title: '提示', content: '销售线索修改成功' });
                            buiAlert.confirmBtn.unbind('click').on('click', function (e) {
                                console.info(e);
                            });
                            buiAlert.setTheme(bui.AlertTheme.Red);
                            var SERIALNO = data.body.SERIALNO;
                            PageManager.to('btop.bui.XiaoShouXianSuoCreatePage', { data: SERIALNO, data1: "xiuGai" });
                        }
                        else {
                            bui.BGlobal.Alert.show({ title: "提示", content: data.header.rm });
                        }
                    }, function (error) {
                        bui.BGlobal.Alert.show({ title: "提示", content: "网络异常" });
                    });
                });
            };
            return XiaoShouXianSuoXiuGaiPage;
        })(Page);
        bui.XiaoShouXianSuoXiuGaiPage = XiaoShouXianSuoXiuGaiPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=XiaoShouXianSuoXiuGaiPage.js.map