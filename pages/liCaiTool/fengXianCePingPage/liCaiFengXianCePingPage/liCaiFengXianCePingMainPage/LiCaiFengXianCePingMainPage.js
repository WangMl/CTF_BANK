var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Administrator on 2016/4/19.
 */
/**
 * Created by Administrator on 2016/4/19.
 */
/**
 * @user wxl
 * @date 2016/3/3
 **/
///<reference path="../../../../../scripts/libs/lib.d.ts"/>
///<reference path="../../../../../scripts/btop/btop.hui.d.ts"/>
///<reference path="../../../../../scripts/libs/jQuery.d.ts"/>
///<reference path="../../../../../scripts/bns/btop.bui.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var PageManager = btop.hui.PageManager;
        var LiCaiFengXianCePingMainPage = (function (_super) {
            __extends(LiCaiFengXianCePingMainPage, _super);
            function LiCaiFengXianCePingMainPage() {
                _super.apply(this, arguments);
                this.currentQuestions = new Array();
                this.currentQusIndex = 0;
            }
            LiCaiFengXianCePingMainPage.prototype.initView = function () {
                var _this = this;
                this.currentQuestions.push($('#question1'));
                //Q1.checkbox-1
                this.chooseOnlyAnswer();
                $(this.nodeTypeMap.get('openFengXianCePingMainPage')).click(function () {
                    PageManager.to("btop.bui.FengXianCePingMainPage");
                });
                $("#submit").click(function () {
                    if (!_this.submitValidate()) {
                        var alert_1 = bui.BGlobal.Alert.show({ title: '提示', content: '您未选择答案！' });
                        alert_1.setTheme(bui.AlertTheme.Red);
                        return false;
                    }
                    var choice = $("input[name='choice']:checked").val();
                    if (choice == 1) {
                        PageManager.to("btop.bui.LiCaiQuestionPage");
                    }
                    if (choice == 2) {
                        PageManager.to("btop.bui.FengXianCePingMainPage");
                    }
                });
            };
            /**
             * @description 仅仅选择一条答案
             */
            LiCaiFengXianCePingMainPage.prototype.chooseOnlyAnswer = function () {
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
            LiCaiFengXianCePingMainPage.prototype.nextQuestion = function () {
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
            LiCaiFengXianCePingMainPage.prototype.preQuestion = function () {
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
            LiCaiFengXianCePingMainPage.prototype.submitValidate = function () {
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
            return LiCaiFengXianCePingMainPage;
        })(btop.hui.Page);
        bui.LiCaiFengXianCePingMainPage = LiCaiFengXianCePingMainPage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=LiCaiFengXianCePingMainPage.js.map