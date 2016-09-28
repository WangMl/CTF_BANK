var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by wangxinlu on 2016/6/27.
 */
///<reference path="../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../scripts/bns/btop.bui.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Page = btop.hui.Page;
        var PageManager = btop.hui.PageManager;
        var InputValidatePage = (function (_super) {
            __extends(InputValidatePage, _super);
            function InputValidatePage() {
                _super.apply(this, arguments);
            }
            InputValidatePage.prototype.initView = function () {
                var _this = this;
                $(this.nodeTypeMap.get('openMainPage')).click(function () {
                    PageManager.to("btop.bui.MainPage");
                });
                $(this.nodeTypeMap.get('submitBtn')).click(function () {
                    if (!_this.validate()) {
                        bui.BGlobal.Alert.show({ title: '提示', content: '验证不通过' });
                        return false;
                    }
                });
            };
            InputValidatePage.prototype.setConfig = function (options) {
                this.validateRules = options.rules;
            };
            InputValidatePage.prototype.rulers = function () {
                this.setConfig({
                    errorElement: 'span',
                    errorClass: 'help-inline',
                    focusInvalid: false,
                    ignore: "",
                    rules: {
                        name: {
                            minlength: 2,
                            required: true
                        },
                        email: {
                            required: true,
                            email: true
                        },
                        url: {
                            required: true,
                            url: true
                        },
                        number: {
                            required: true,
                            number: true
                        },
                        digits: {
                            required: true,
                            digits: true
                        },
                        creditcard: {
                            required: true,
                            creditcard: true
                        },
                        occupation: {
                            minlength: 5
                        },
                        category: {
                            required: true
                        }
                    },
                    invalidHandler: function (event, validator) {
                        /*success1.hide();
                        error1.show();
                        App.scrollTo(error1, -200);*/
                    },
                    highlight: function (element) {
                        $(element)
                            .closest('.help-inline').removeClass('ok'); // display OK icon
                        $(element)
                            .closest('.control-group').removeClass('success').addClass('error'); // set error class to the control group
                    },
                    unhighlight: function (element) {
                        $(element)
                            .closest('.control-group').removeClass('error'); // set error class to the control group
                    },
                    success: function (label) {
                        label
                            .addClass('valid').addClass('help-inline ok') // mark the current input as valid and display OK icon
                            .closest('.control-group').removeClass('error').addClass('success'); // set success class to the control group
                    },
                    submitHandler: function (form) {
                        /* success1.show();
                         error1.hide();*/
                    }
                });
            };
            InputValidatePage.prototype.validate = function () {
                var flag = true;
                $('#inputValidatePage').find("input[bui-validate]").each(function () {
                    if (!$(this).val()) {
                        flag = false;
                    }
                });
                return flag;
            };
            return InputValidatePage;
        })(Page);
        bui.InputValidatePage = InputValidatePage;
        var ValidateRulers = (function () {
            function ValidateRulers() {
            }
            ValidateRulers.register = function (type, msg) {
                if (ValidateRulers.byType(type)) {
                    console.error("ValidateRulers \u5DF2\u7ECF\u5B58\u5728\u6B64\u7C7B\u578B");
                }
                else {
                    this.rulersMap.set(type, msg);
                }
            };
            ValidateRulers.ungister = function (type) {
                if (ValidateRulers.byType(type)) {
                    this.rulersMap.delete(type);
                }
            };
            ValidateRulers.byType = function (type) {
                if (this.rulersMap.get(type)) {
                    return this.rulersMap.get(type);
                }
                else {
                    console.error("ValidateRulers \u4E0D\u5B58\u5728\u6B64\u7C7B\u578B\uFF01");
                }
            };
            ValidateRulers.removeAll = function () {
                this.rulersMap.clear();
            };
            ValidateRulers.rulersMap = new Map();
            return ValidateRulers;
        })();
        bui.ValidateRulers = ValidateRulers;
        var ValidateConfig = (function () {
            function ValidateConfig() {
            }
            return ValidateConfig;
        })();
        bui.ValidateConfig = ValidateConfig;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=InputValidatePage.js.map