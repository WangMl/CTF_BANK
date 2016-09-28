var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/************************************************************************
 * 类名  :  input
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/12
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
        var WidgetManager = btop.hui.WidgetManager;
        var Validator = btop.hui.Validator;
        var ValidatorType = btop.hui.ValidatorType;
        var PageManager = btop.hui.PageManager;
        var InputPage = (function (_super) {
            __extends(InputPage, _super);
            function InputPage() {
                _super.apply(this, arguments);
            }
            InputPage.prototype.initView = function () {
                $(this.nodeTypeMap.get('openComponentMainPage')).click(function () {
                    PageManager.to('btop.bui.ComponentMainPage');
                });
                /**
                 * @description 金额输入厂封装，支持页面生名式
                 * setAmount: 设置金额
                 * getAmount: 获得金额的字符串
                 * getFloatAmt: 获得浮点型的金额值
                 */
                var amount1 = WidgetManager.byId("amount1");
                amount1.setAmount(String(1001));
                $('#' + amount1.id).find("input").addClass('input-control');
                console.info(amount1.getAmount());
                console.info(amount1.getFloatAmt());
                /**
                 * @description Email验证
                 */
                $('#email').blur(function () {
                    var emailValue = $('.email').val();
                    Validator.validate(ValidatorType[ValidatorType.Email], emailValue, function (success, errorMsg) {
                        if (!success)
                            alert('错误提示: ' + errorMsg);
                    });
                });
                /**
                 * @description IdCard验证
                 */
                $('#IDCard').blur(function () {
                    var IdCardValue = $('.IDCard').val();
                    Validator.validate(ValidatorType[ValidatorType.IdCard], IdCardValue, function (success, errorMsg) {
                        if (!success)
                            alert('错误提示: ' + errorMsg);
                    });
                });
                /**
                 * @description Telephone验证
                 */
                $('#Telephone').blur(function () {
                    var TelephoneValue = $('.Telephone').val();
                    Validator.validate(ValidatorType[ValidatorType.Telephone], TelephoneValue, function (success, errorMsg) {
                        if (!success)
                            alert('错误提示: ' + errorMsg);
                    });
                });
                /**
                 * @description Telephone验证
                 */
                $('#Phone').blur(function () {
                    var PhoneValue = $('.Phone').val();
                    Validator.validate(ValidatorType[ValidatorType.Phone], PhoneValue, function (success, errorMsg) {
                        if (!success)
                            alert('错误提示: ' + errorMsg);
                    });
                });
                /**
                 * @description Number验证
                 */
                $('#Number').blur(function () {
                    var NumberValue = $('.Number').val();
                    Validator.validate(ValidatorType[ValidatorType.Number], NumberValue, function (success, errorMsg) {
                        if (!success)
                            alert('错误提示: ' + errorMsg);
                    });
                });
                /**
                 * @description Number验证
                 */
                $('#NumberOrLetter').blur(function () {
                    var NumberOrLetterValue = $('.NumberOrLetter').val();
                    Validator.validate(ValidatorType[ValidatorType.NumberOrLetter], NumberOrLetterValue, function (success, errorMsg) {
                        if (!success)
                            alert('错误提示: ' + errorMsg);
                    });
                });
                /**
                 * @description Number验证
                 */
                $('#Letter').blur(function () {
                    var LetterValue = $('.Letter').val();
                    Validator.validate(ValidatorType[ValidatorType.Letter], LetterValue, function (success, errorMsg) {
                        if (!success)
                            alert('错误提示: ' + errorMsg);
                    });
                });
                /**
                 * @description DatePicker
                 */
                var datepicker = WidgetManager.byId("datepicker1");
                datepicker.Date = { year: 2013, month: 1, date: 13 };
                $('#' + datepicker.id).find("input").addClass('input-control');
                console.info(datepicker.Date);
                console.info(datepicker.getDateString());
                /**
                 * @description select组件
                 */
                var opt1 = {
                    data: {
                        "01": "apple",
                        "02": "banana",
                        "03": "orange"
                    }
                };
                var select2 = WidgetManager.byId("selectOptDemo");
                select2.initData(opt1);
                var opt = {
                    position: 'top',
                    data: [
                        "banana1",
                        "orange1"
                    ]
                };
                var select1 = WidgetManager.byId("buiSelect");
                select1.initData(opt);
                select1.setSelectedItem('03');
                select1.on("change", function (data) {
                    console.info(data[0]);
                });
                $('#getSelectAttrValue').click(function () {
                    alert(select1.getAttrValue());
                });
                $('#getSelectHTMLValue').click(function () {
                    alert(select1.getHTMLValue());
                });
            };
            return InputPage;
        })(Page);
        bui.InputPage = InputPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=InputPage.js.map