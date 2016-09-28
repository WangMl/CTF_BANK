var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../../../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../../../scripts/bns/btop.bui.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var PageManager = btop.hui.PageManager;
        var JiJinQuestionPage = (function (_super) {
            __extends(JiJinQuestionPage, _super);
            function JiJinQuestionPage() {
                _super.apply(this, arguments);
                this.currentQuestions = new Array();
                this.currentQusIndex = 0;
            }
            JiJinQuestionPage.prototype.initView = function () {
                var _this = this;
                this.currentQuestions.push($('#question1'));
                this.currentQuestions.push($('#question2'));
                this.currentQuestions.push($('#question3'));
                this.currentQuestions.push($('#question4'));
                this.currentQuestions.push($('#question5'));
                this.currentQuestions.push($('#question6'));
                this.currentQuestions.push($('#question7'));
                this.currentQuestions.push($('#question8'));
                $(this.nodeTypeMap.get('openLiCaiToolMainPage')).click(function () {
                    PageManager.to("btop.bui.LiCaiToolMainPage");
                });
                $(this.nodeTypeMap.get('openFengXianCePingMainPage')).click(function () {
                    PageManager.to("btop.bui.FengXianCePingMainPage");
                });
                $(".showDown").html("<div class='col l12' style='margin-top: 10px;text-align: center;font-size: 25px'>" + "共8页，此页为第1页 " + "</div>");
                //Q1.checkbox-1
                this.chooseOnlyAnswer();
                $(".exit").css("display", "none");
                var index = 1;
                $(".next").click(function () {
                    if (!_this.submitValidate()) {
                        var alert_1 = bui.BGlobal.Alert.show({ title: '提示', content: '您未选择答案！' });
                        alert_1.setTheme(bui.AlertTheme.Red);
                        return false;
                    }
                    var domCurrent = ".question" + index;
                    index++;
                    $(".showDown").html("<div class='col l12' style='margin-top: 10px;text-align: center;font-size: 25px'>" + "共8页，此页为第" + index + "页" + "</div>");
                    var domNext = ".question" + index;
                    $(domCurrent).css("display", "none");
                    $(domNext).css("display", "block");
                    if (index > 1) {
                        $(".pre").css("display", "block");
                        $(".next").css("display", "block");
                    }
                    else {
                        $(".pre").css("display", "none");
                    }
                    if (index == 8) {
                        $(".submit").css("display", "block");
                        $(".next").css("display", "block");
                        $(".next").css("display", "none");
                    }
                    else {
                        $(".submit").css("display", "none");
                    }
                    _this.nextQuestion();
                    _this.chooseOnlyAnswer();
                    //_this.submitValidate();
                });
                $(".pre").click(function () {
                    var domCurrent = ".question" + index;
                    index--;
                    $(".showDown").html("<div class='col l12' style='margin-top: 10px;text-align: center;font-size: 25px'>" + "共8页，此页为第" + index + "页" + "</div>");
                    var domPre = ".question" + index;
                    $(domCurrent).css("display", "none");
                    $(domPre).css("display", "block");
                    if (index > 1) {
                        $(".pre").css("display", "block");
                        $(".next").css("display", "block");
                    }
                    else {
                        $(".pre").css("display", "none");
                    }
                    if (index == 8) {
                        $(".submit").css("display", "block");
                        $(".next").css("display", "block");
                        $(".next").css("display", "none");
                    }
                    else {
                        $(".submit").css("display", "none");
                    }
                    _this.preQuestion();
                    _this.chooseOnlyAnswer();
                    //_this.submitValidate();
                });
                $("#cal").click(function () {
                    if (!_this.submitValidate()) {
                        var alert_2 = bui.BGlobal.Alert.show({ title: '提示', content: '您未选择答案！' });
                        alert_2.setTheme(bui.AlertTheme.Red);
                        return false;
                    }
                    var customer;
                    var total = parseInt($("input[name='No1']:checked").val()) +
                        parseInt($("input[name='No2']:checked").val()) +
                        parseInt($("input[name='No3']:checked").val()) +
                        parseInt($("input[name='No4']:checked").val()) +
                        parseInt($("input[name='No5']:checked").val()) +
                        parseInt($("input[name='No6']:checked").val()) +
                        parseInt($("input[name='No7']:checked").val()) +
                        parseInt($("input[name='No8']:checked").val());
                    $(".pre").css("display", "none");
                    $(".submit").css("display", "none");
                    if (8 <= total & total <= 12) {
                        customer = "保守型";
                    }
                    else if (total > 12 & total <= 17) {
                        customer = "谨慎型";
                    }
                    else if (total > 17 & total <= 23) {
                        customer = "稳健型";
                    }
                    else if (total > 23 & total <= 28) {
                        customer = "积极型";
                    }
                    else {
                        customer = "激进型";
                    }
                    $(".question8").css("display", "none");
                    $(".showDown").css("display", "none");
                    $(".show").html("<div class='col l12' style='margin-top: 10px;text-align: center;font-size: 36px'>" + ""
                        + "通过对您问卷调查的综合评分为" + "<span style='text-decoration:underline;color: red'>" + total + "</span>" + ","
                        + "我行将您的风险等级评估为" + "<span style='text-decoration:underline;color: red'>" + customer + "" +
                        "</span>" + "投资者。" + ""
                        + "</div>");
                    $(".exit").css("display", "block");
                });
            };
            /**
             * @description 仅仅选择一条答案
             */
            JiJinQuestionPage.prototype.chooseOnlyAnswer = function () {
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
             * @description 下一步操作
             */
            JiJinQuestionPage.prototype.nextQuestion = function () {
                if (this.currentQusIndex < this.currentQuestions.length) {
                    this.currentQusIndex++;
                }
                else {
                    this.currentQusIndex = this.currentQuestions.length;
                }
            };
            /**
             * @description 上一步操作
             */
            JiJinQuestionPage.prototype.preQuestion = function () {
                if (this.currentQusIndex < 0) {
                    this.currentQusIndex = 0;
                }
                else {
                    this.currentQusIndex--;
                }
            };
            /**
             * @description 提交校验，不选择不进行跳转下一题
             */
            JiJinQuestionPage.prototype.submitValidate = function () {
                var _this = this;
                var items = this.currentQuestions[this.currentQusIndex].find('input');
                var flag = false;
                for (var i = 0; i < items.length; i++) {
                    if (items[i]['checked']) {
                        flag = true;
                    }
                }
                return flag;
            };
            return JiJinQuestionPage;
        })(btop.hui.Page);
        bui.JiJinQuestionPage = JiJinQuestionPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=JiJinQuestionPage.js.map