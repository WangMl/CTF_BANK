/**
 * Created by shuai on 2016/3/9.
 */
///<reference path="../btop/btop.hui.d.ts"/>
///<reference path="../libs/LAB.d.ts"/>
///<reference path="../bns/btop.bui.d.ts"/>
var btop;
(function (btop) {
    var trade;
    (function (trade) {
        var JsLoader = (function () {
            function JsLoader() {
            }
            JsLoader.load = function () {
                btop.bui.BuiLoader.load("setting.json");
                btop.hui.HuiLoader.load();
                btop.bui.BuiLoader.afterHuiLoaderExecution(); //此方法必须在huiLoader.load()后面再执行
                this.loadDB();
                window.location.hash = "#!btop.bui.MountPage";
            };
            JsLoader.loadJs = function () {
                this.jsFiles.push("scripts/libs/jquery-2.1.3.min.js");
                this.jsFiles.push("scripts/libs/pdf.js");
                this.jsFiles.push("scripts/libs/vue.min.js");
                this.jsFiles.push("scripts/btop/btop.hui.js");
                this.jsFiles.push("scripts/bns/btop.bui.js");
                this.jsFiles.push("scripts/libs/echarts.js");
                this.jsFiles.push("scripts/common/resource/home.resource.js");
                this.jsFiles.push("scripts/common/resource/xiaoshou.resource.js");
                this.jsFiles.push("scripts/common/resource/peizhi.resource.js");
                this.jsFiles.push("scripts/common/resource/licaitool.resource.js");
                this.jsFiles.push("scripts/common/resource/common.resource.js");
                this.jsFiles.push("scripts/common/resource/productcenter.resource.js");
                this.jsFiles.push("scripts/common/resource/tingtangguanli.resource.js");
                this.jsFiles.push("scripts/common/resource/rizhi.resource.js");
                this.jsFiles.push("scripts/common/resource/demo.js");
                var _this = this;
                $LAB.setOptions({ AlwaysPreserveOrder: true }).script(this.jsFiles).wait(function () {
                    _this.load();
                });
            };
            JsLoader.loadCss = function () {
                this.cssFiles.push("scripts/btop/btop.hui.css");
                this.cssFiles.push("scripts/bns/btop.bui.css");
                this.cssFiles.push("skin/default/css/common.css");
                this.cssFiles.push("skin/default/css/default.css");
                this.cssFiles.push("skin/default/css/reset.css");
                this.cssFiles.push("skin/theme/red/css/red.css");
                var s;
                for (var i = 0, item; item = this.cssFiles[i]; i++) {
                    if (item == "skin/theme/red/css/red.css") {
                        // 给link增加一个id，为了配置不同皮肤
                        s = document.createElement("link");
                        s.type = "text/css";
                        s.rel = "stylesheet";
                        /*  var skinLocalStorage = localStorage.getItem('skin');
                          if(skinLocalStorage != undefined)
                              s.href = skinLocalStorage;
                          else
                              s.href = item;*/
                        s.href = this.loadTheme();
                        s.id = "theme";
                        document.head.appendChild(s);
                    }
                    else {
                        s = document.createElement("link");
                        s.type = "text/css";
                        s.rel = "stylesheet";
                        s.href = item;
                        document.head.appendChild(s);
                    }
                }
            };
            JsLoader.loadDB = function () {
            };
            /**
             * @description 在缓存中获取选中的主题
             * @returns {string}
             */
            JsLoader.loadTheme = function () {
                var defaultTheme = "skin/theme/red/css/red.css";
                var flag = false; //判断是否所有状态都为false
                var theme = JSON.parse(localStorage.getItem('Themes'));
                if (theme != null) {
                    for (var i in theme) {
                        if (theme[i]['status'] == true) {
                            flag = true;
                            return theme[i]['cssPath'];
                        }
                    }
                }
                else {
                    return defaultTheme;
                }
                if (!flag) {
                    return defaultTheme;
                }
            };
            JsLoader.jsFiles = new Array();
            JsLoader.cssFiles = new Array();
            return JsLoader;
        })();
        trade.JsLoader = JsLoader;
        trade.JsLoader.loadCss();
        trade.JsLoader.loadJs();
    })(trade = btop.trade || (btop.trade = {}));
})(btop || (btop = {}));
//# sourceMappingURL=JsLoader.js.map