var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/************************************************************************
 * 类名  :  EventType
 * 描述  :  事件类型
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 10:46:25 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        (function (EventType) {
            EventType[EventType["hashchange"] = 1] = "hashchange";
            EventType[EventType["clientActive"] = 2] = "clientActive";
            EventType[EventType["clientIdle"] = 3] = "clientIdle";
            EventType[EventType["screenOn"] = 4] = "screenOn";
            EventType[EventType["screenOff"] = 5] = "screenOff";
        })(hui.EventType || (hui.EventType = {}));
        var EventType = hui.EventType;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        (function (Keys) {
            Keys[Keys["BACKSPACE"] = 8] = "BACKSPACE";
            Keys[Keys["TAB"] = 9] = "TAB";
            Keys[Keys["CLEAR"] = 12] = "CLEAR";
            Keys[Keys["ENTER"] = 13] = "ENTER";
            Keys[Keys["SHIFT"] = 16] = "SHIFT";
            Keys[Keys["CTRL"] = 17] = "CTRL";
            Keys[Keys["ALT"] = 18] = "ALT";
            Keys[Keys["META"] = 91] = "META";
            Keys[Keys["PAUSE"] = 19] = "PAUSE";
            Keys[Keys["CAPS_LOCK"] = 20] = "CAPS_LOCK";
            Keys[Keys["ESCAPE"] = 27] = "ESCAPE";
            Keys[Keys["SPACE"] = 32] = "SPACE";
            Keys[Keys["PAGE_UP"] = 33] = "PAGE_UP";
            Keys[Keys["PAGE_DOWN"] = 34] = "PAGE_DOWN";
            Keys[Keys["END"] = 35] = "END";
            Keys[Keys["HOME"] = 36] = "HOME";
            Keys[Keys["LEFT_ARROW"] = 37] = "LEFT_ARROW";
            Keys[Keys["UP_ARROW"] = 38] = "UP_ARROW";
            Keys[Keys["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
            Keys[Keys["DOWN_ARROW"] = 40] = "DOWN_ARROW";
            Keys[Keys["INSERT"] = 45] = "INSERT";
            Keys[Keys["DELETE"] = 46] = "DELETE";
            Keys[Keys["HELP"] = 47] = "HELP";
            Keys[Keys["NUM_0"] = 48] = "NUM_0";
            Keys[Keys["NUM_1"] = 49] = "NUM_1";
            Keys[Keys["NUM_2"] = 50] = "NUM_2";
            Keys[Keys["NUM_3"] = 51] = "NUM_3";
            Keys[Keys["NUM_4"] = 52] = "NUM_4";
            Keys[Keys["NUM_5"] = 53] = "NUM_5";
            Keys[Keys["NUM_6"] = 54] = "NUM_6";
            Keys[Keys["NUM_7"] = 55] = "NUM_7";
            Keys[Keys["NUM_8"] = 56] = "NUM_8";
            Keys[Keys["NUM_9"] = 57] = "NUM_9";
            Keys[Keys["CHAR_A"] = 65] = "CHAR_A";
            Keys[Keys["CHAR_B"] = 66] = "CHAR_B";
            Keys[Keys["CHAR_C"] = 67] = "CHAR_C";
            Keys[Keys["CHAR_D"] = 68] = "CHAR_D";
            Keys[Keys["CHAR_E"] = 69] = "CHAR_E";
            Keys[Keys["CHAR_F"] = 70] = "CHAR_F";
            Keys[Keys["CHAR_G"] = 71] = "CHAR_G";
            Keys[Keys["CHAR_H"] = 72] = "CHAR_H";
            Keys[Keys["CHAR_I"] = 73] = "CHAR_I";
            Keys[Keys["CHAR_J"] = 74] = "CHAR_J";
            Keys[Keys["CHAR_K"] = 75] = "CHAR_K";
            Keys[Keys["CHAR_L"] = 76] = "CHAR_L";
            Keys[Keys["CHAR_M"] = 77] = "CHAR_M";
            Keys[Keys["CHAR_N"] = 78] = "CHAR_N";
            Keys[Keys["CHAR_O"] = 79] = "CHAR_O";
            Keys[Keys["CHAR_P"] = 80] = "CHAR_P";
            Keys[Keys["CHAR_Q"] = 81] = "CHAR_Q";
            Keys[Keys["CHAR_R"] = 82] = "CHAR_R";
            Keys[Keys["CHAR_S"] = 83] = "CHAR_S";
            Keys[Keys["CHAR_T"] = 84] = "CHAR_T";
            Keys[Keys["CHAR_U"] = 85] = "CHAR_U";
            Keys[Keys["CHAR_V"] = 86] = "CHAR_V";
            Keys[Keys["CHAR_W"] = 87] = "CHAR_W";
            Keys[Keys["CHAR_X"] = 88] = "CHAR_X";
            Keys[Keys["CHAR_Y"] = 89] = "CHAR_Y";
            Keys[Keys["CHAR_Z"] = 90] = "CHAR_Z";
            Keys[Keys["LEFT_WINDOW"] = 91] = "LEFT_WINDOW";
            Keys[Keys["RIGHT_WINDOW"] = 92] = "RIGHT_WINDOW";
            Keys[Keys["SELECT"] = 93] = "SELECT";
            Keys[Keys["NUMPAD_0"] = 96] = "NUMPAD_0";
            Keys[Keys["NUMPAD_1"] = 97] = "NUMPAD_1";
            Keys[Keys["NUMPAD_2"] = 98] = "NUMPAD_2";
            Keys[Keys["NUMPAD_3"] = 99] = "NUMPAD_3";
            Keys[Keys["NUMPAD_4"] = 100] = "NUMPAD_4";
            Keys[Keys["NUMPAD_5"] = 101] = "NUMPAD_5";
            Keys[Keys["NUMPAD_6"] = 102] = "NUMPAD_6";
            Keys[Keys["NUMPAD_7"] = 103] = "NUMPAD_7";
            Keys[Keys["NUMPAD_8"] = 104] = "NUMPAD_8";
            Keys[Keys["NUMPAD_9"] = 105] = "NUMPAD_9";
            Keys[Keys["NUMPAD_MULTIPLY"] = 106] = "NUMPAD_MULTIPLY";
            Keys[Keys["NUMPAD_PLUS"] = 107] = "NUMPAD_PLUS";
            Keys[Keys["NUMPAD_ENTER"] = 108] = "NUMPAD_ENTER";
            Keys[Keys["NUMPAD_MINUS"] = 109] = "NUMPAD_MINUS";
            Keys[Keys["NUMPAD_PERIOD"] = 110] = "NUMPAD_PERIOD";
            Keys[Keys["NUMPAD_DIVIDE"] = 111] = "NUMPAD_DIVIDE";
            Keys[Keys["F1"] = 112] = "F1";
            Keys[Keys["F2"] = 113] = "F2";
            Keys[Keys["F3"] = 114] = "F3";
            Keys[Keys["F4"] = 115] = "F4";
            Keys[Keys["F5"] = 116] = "F5";
            Keys[Keys["F6"] = 117] = "F6";
            Keys[Keys["F7"] = 118] = "F7";
            Keys[Keys["F8"] = 119] = "F8";
            Keys[Keys["F9"] = 120] = "F9";
            Keys[Keys["F10"] = 121] = "F10";
            Keys[Keys["F11"] = 122] = "F11";
            Keys[Keys["F12"] = 123] = "F12";
            Keys[Keys["F13"] = 124] = "F13";
            Keys[Keys["F14"] = 125] = "F14";
            Keys[Keys["F15"] = 126] = "F15";
            Keys[Keys["NUM_LOCK"] = 144] = "NUM_LOCK";
            Keys[Keys["SCROLL_LOCK"] = 145] = "SCROLL_LOCK";
            Keys[Keys["UP_DPAD"] = 175] = "UP_DPAD";
            Keys[Keys["DOWN_DPAD"] = 176] = "DOWN_DPAD";
            Keys[Keys["LEFT_DPAD"] = 177] = "LEFT_DPAD";
            Keys[Keys["RIGHT_DPAD"] = 178] = "RIGHT_DPAD";
            Keys[Keys["MINUS"] = 189] = "MINUS";
        })(hui.Keys || (hui.Keys = {}));
        var Keys = hui.Keys;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var Entry = (function () {
            function Entry(key, value) {
                this.key = key;
                this.value = value;
            }
            return Entry;
        }());
        hui.Entry = Entry;
        var Map = (function () {
            function Map() {
                this.clear();
            }
            /**
             * 清空Map
            */
            Map.prototype.clear = function () {
                this.pairs = new Array();
                this.keys = new Array();
            };
            /**
             * 返回所有的键值对
            */
            Map.prototype.entrys = function () {
                //复制pairs,防止通过修改pairs改变Map中的值
                var entrys = new Array();
                this.pairs.forEach(function (value, index, array) {
                    entrys.push(new Entry(value.key, value.value));
                });
                return entrys;
            };
            /**
             * 删除key值为key的键值对
            */
            Map.prototype.delete = function (key) {
                if (!this.has(key))
                    return false;
                else {
                    var index = this.keys.indexOf(key);
                    this.keys.splice(index, 1);
                    this.pairs.splice(index, 1);
                }
                return true;
            };
            /**
             * 根据键获得值
            */
            Map.prototype.get = function (key) {
                return this.has(key) ? this.pairs[this.keys.indexOf(key)].value : null;
            };
            /**
             * 是否包含key对应的key值
            */
            Map.prototype.has = function (key) {
                return this.keys.indexOf(key) != -1 ? true : false;
            };
            /**
             * 设置键值
            */
            Map.prototype.set = function (key, value) {
                if (!(typeof (key) == "string" || typeof (key) == "number")) {
                    console.error("Map: Map\u6682\u65F6\u53EA\u652F\u6301\u4EE5String\u548CNumber\u505A\u4E3Akey\u503C");
                    return this;
                }
                if (this.has(key))
                    this.pairs[this.keys.indexOf(key)].value = value;
                else {
                    this.keys.push(key);
                    this.pairs.push(new Entry(key, value));
                }
                return this;
            };
            return Map;
        }());
        hui.Map = Map;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Event
 * 描述  :  事件基类
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 10:31:36 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="../util/Map.ts"/>
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var Event = (function () {
            function Event(type, data) {
                this.type = type;
                this.data = data;
            }
            return Event;
        }());
        hui.Event = Event;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  IListener
 * 描述  :  监听器接口
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 10:39:37 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
/************************************************************************
 * 类名  :  EventHub
 * 描述  :  事件中心
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 10:36:02 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="../listener/IListener.ts"/>
///<reference path="../constants/EventType.ts"/>
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var EventHub = (function () {
            function EventHub() {
            }
            /**
             * 增加监听器
             */
            EventHub.addListener = function (type, listener) {
                if (!this.listeners.get(type)) {
                    this.listeners.set(type, new Array());
                }
                this.listeners.get(type).push(listener);
            };
            /**
             * 移除监听器
             */
            EventHub.removeListener = function (type, listener) {
                var targetListeners = this.listeners.get(type);
                if (targetListeners) {
                    targetListeners.splice(targetListeners.indexOf(listener), 1);
                    this.listeners.set(type, targetListeners);
                }
            };
            /**
             * 触发事件
             */
            EventHub.fireEvent = function (type, data) {
                var targetListeners = this.listeners.get(type);
                if (!targetListeners)
                    return;
                targetListeners.forEach(function (listener, index, array) {
                    var event = new hui.Event(type, data);
                    listener.handle(event);
                });
            };
            EventHub.listeners = new hui.Map();
            return EventHub;
        }());
        hui.EventHub = EventHub;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        /**
         * 事件代理类,该类是单例模式的
        */
        var EventProxy = (function () {
            function EventProxy() {
                this.callbackMap = new hui.Map();
            }
            Object.defineProperty(EventProxy, "inst", {
                /**
                 * 获取EventProxy的实例
                */
                get: function () {
                    if (this._instance == null)
                        this._instance = new EventProxy();
                    return this._instance;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 触发事件类型为eventType的事件
             * @params eventType事件类型
             * @params any类型代表该事件对应的参数
             * */
            EventProxy.prototype.trigger = function (eventType) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                if (this.callbackMap.has(eventType)) {
                    var callbackfnArray = this.callbackMap.get(eventType);
                    var _this = this;
                    callbackfnArray.forEach(function (callbackfn, i, arr) {
                        callbackfn.apply(callbackfn, args);
                    });
                }
                return this;
            };
            /**
             * 移除事件,交易销毁是应该注意调用该函数移除已经绑定监听的事件
            */
            EventProxy.prototype.remove = function (eventType, callbackfn) {
                if (this.callbackMap.has(eventType)) {
                    var callbacks = this.callbackMap.get(eventType);
                    var index = callbacks.indexOf(callbackfn);
                    if (index != -1)
                        callbacks.splice(index, 1);
                }
                return this;
            };
            /**
             * 监听事件
             * @params eventType 事件类型
             * @params callbackfn 回掉函数
            */
            EventProxy.prototype.on = function (eventType, callbackfn) {
                if (!this.callbackMap.has(eventType))
                    this.callbackMap.set(eventType, new Array());
                this.callbackMap.get(eventType).push(callbackfn);
                return this;
            };
            EventProxy._instance = null;
            return EventProxy;
        }());
        hui.EventProxy = EventProxy;
        hui.EP = EventProxy.inst;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var ClientListener = (function () {
            function ClientListener() {
                this.timeOut = 1000 * 60 * 30;
            }
            ClientListener.prototype.handle = function (event) {
                if (event.type == hui.EventType.clientActive) {
                    if (this.timeHandler)
                        clearTimeout(this.timeHandler);
                    var _this = this;
                    this.timeHandler = setTimeout(function () {
                        hui.EventProxy.inst.trigger("clientIdle");
                    }, this.timeOut);
                }
            };
            return ClientListener;
        }());
        hui.ClientListener = ClientListener;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  HashListener
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/19/2016 9:48:35 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var HashListener = (function () {
            function HashListener() {
            }
            HashListener.prototype.handle = function (event) {
                if (window.location.hash.charAt(1) != "!")
                    return;
                var hash = window.location.hash.replace("#!", "");
                var target = hui.WidgetManager.byId(hash);
                hui.WidgetManager.addCreateTask(new hui.Task(hash, null, null));
            };
            return HashListener;
        }());
        hui.HashListener = HashListener;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        /**
         * 屏幕状态监听器
        */
        var ScreenListener = (function () {
            function ScreenListener() {
            }
            ScreenListener.prototype.handle = function (event) {
                if (event.type == hui.EventType.screenOff) {
                    hui.EventProxy.inst.trigger("screenOff");
                }
                if (event.type == hui.EventType.screenOn) {
                    hui.EventProxy.inst.trigger("screenOn");
                }
            };
            return ScreenListener;
        }());
        hui.ScreenListener = ScreenListener;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        /**
         * 首选项的基类,首选项类都需要继承这个抽象类
        */
        var SuperPreference = (function () {
            function SuperPreference() {
            }
            return SuperPreference;
        }());
        hui.SuperPreference = SuperPreference;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var WidgetPath = (function () {
            function WidgetPath(html, css, js) {
                this.html = html;
                this.css = css;
                this.js = js;
            }
            return WidgetPath;
        }());
        var LoadStatus = (function () {
            function LoadStatus(jsloaded, cssloaded, htmlloaded, css, html) {
                this.jsloaded = jsloaded;
                this.cssloaded = cssloaded;
                this.htmlloaded = htmlloaded;
                this.css = css;
                this.html = html;
            }
            return LoadStatus;
        }());
        hui.LoadStatus = LoadStatus;
        var PageInfo = (function () {
            function PageInfo(id, pageCode, description) {
                this.id = id;
                this.pageCode = pageCode;
                this.description = description;
            }
            PageInfo.prototype.getId = function () {
                return this.id;
            };
            PageInfo.prototype.getPageCode = function () {
                return this.pageCode;
            };
            PageInfo.prototype.getDescription = function () {
                return this.description;
            };
            return PageInfo;
        }());
        hui.PageInfo = PageInfo;
        var ResourceManager = (function () {
            function ResourceManager() {
            }
            /**
             * 存储页资源到缓存
             *
             * @params source json对象{id: string, path: { html: string, css: Array<string>, js: string }}
             *                  id值也的id,该id需要和Page的全路径相同,运行时会根据id来找到对应的函数
             *                  id: "btop.bui.MainPage"对应的Page类应该声明为:
             *                              namespace btop.bui
             *                              {
             *                                  export class MainPage extends Page
             *                                  {
             *
             *                                  }
             *                              }
             *                  , path.html是html模板对应的路径: page/homePage/MainPage.html
             *                  , path.css是css模板对应的路径: page/homePage/MainPage.css
             *                  , js是js代码对应的路径:pages/homePage/MainPage
            */
            ResourceManager.access = function (source) {
                if (this.widgetResources.has(source.id))
                    console.error("ResourceManager: " + source.id + "\u662F\u552F\u4E00\u7684!!!\u4E0D\u80FD\u591F\u4F7F\u7528" + source.id + "\u518D\u6B21\u6CE8\u518C\u7EC4\u4EF6\u6E90");
                else {
                    this.widgetResources.set(source.id, new WidgetPath(source.path.html, source.path.css, source.path.js));
                    this.pageInfos.set(source.id, new PageInfo(source.id, source.pageCode, source.description));
                }
            };
            /**
             * 存储首选项
             *
             * @params t SuperPreference的实现类
             * @params preference SuperPreference的实现类的实例
            */
            ResourceManager.createPreference = function (t) {
                var preference_instance = new t();
                this.preferences.set(preference_instance.defineType(), preference_instance);
                return preference_instance;
            };
            /**
             * 根据首选项类型获取首选项实例
            */
            ResourceManager.getPreference = function (type) {
                var preference = this.preferences.get(type);
                if (!preference)
                    console.error("ResourceManager: \u6839\u636E" + type + "\u627E\u4E0D\u5230\u5176\u5BF9\u5E94\u7684\u9996\u9009\u9879!\u8BF7\u6CE8\u518C" + type + "\u5BF9\u5E94\u7684\u9996\u9009\u9879\u540E\u518D\u8C03\u7528\u8BE5\u51FD\u6570!");
                return preference;
            };
            ResourceManager.getPageInfo = function (id) {
                return this.pageInfos.get(id);
            };
            ResourceManager.getPageInfos = function () {
                return this.pageInfos;
            };
            /**
             * 从远端加载资源到本地
             * @params widgetType 组件类型,也就是page组件的id
             * @params 加载状态
             * @params 加载完成后回掉的函数
            */
            ResourceManager.loadResourceFromRemote = function (widgetType, loadStatus, callback) {
                var path = this.widgetResources.get(widgetType);
                if (path == null) {
                    hui.Global.Alert.show({ title: "\u52A0\u8F7D\u8D44\u6E90\u5931\u8D25", content: "\u6CA1\u6709\u627E\u5230" + widgetType + "\u5BF9\u5E94\u7684\u8D44\u6E90", buttons: ["\u786E\u5B9A"] });
                    console.error("ResourceManager: \u6CA1\u6709\u5728.resource.js\u8D44\u6E90\u6587\u4EF6\u4E2D\u58F0\u660E" + widgetType + ",\u4E0D\u80FD\u901A\u8FC7" + widgetType + "\u52A0\u8F7D\u5BF9\u5E94\u7684\u8D44\u6E90\u6587\u4EF6");
                    return false;
                }
                hui.Global.LoadingToast.show("页面加载中");
                this.loadScript(path, loadStatus, callback);
                this.loadCss(path, loadStatus, callback);
                this.loadHtml(path, loadStatus, callback);
                return true;
            };
            /**
             * 加载css
            */
            ResourceManager.loadCss = function (path, loadStatus, callback) {
                var count = 0;
                var cssPath = new Array();
                for (var i = 0; i < path.css.length; i++) {
                    if (path.css[i] != "")
                        cssPath.push(path.css[i]);
                }
                if (cssPath.length == 0) {
                    loadStatus.cssloaded = true;
                    callback();
                    return;
                }
                for (var i = 0; i < cssPath.length; i++) {
                    $.ajax({
                        url: cssPath[i],
                        success: function (_data) {
                            loadStatus.css = loadStatus.css.concat(_data);
                            if (++count == cssPath.length) {
                                loadStatus.cssloaded = true;
                                callback();
                            }
                        }
                    });
                }
            };
            /**
             * 加载js
            */
            ResourceManager.loadScript = function (path, loadStatus, callback) {
                var _this = this;
                $LAB.setOptions({
                    AlwaysPreserveOrder: true
                }).script(path.js).wait(function () {
                    loadStatus.jsloaded = true;
                    callback();
                });
            };
            /**
             * 加载html模板
            */
            ResourceManager.loadHtml = function (path, loadStatus, callback) {
                var _this = this;
                $.ajax({
                    url: path.html,
                    success: function (_data) {
                        loadStatus.htmlloaded = true;
                        loadStatus.html = _data;
                        callback();
                    }
                });
            };
            ResourceManager.widgetResources = new hui.Map();
            ResourceManager.preferences = new hui.Map();
            ResourceManager.pageInfos = new hui.Map();
            return ResourceManager;
        }());
        hui.ResourceManager = ResourceManager;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  WidgetManager
 * 描述  :  组件的管理类，该类将组件实例注入到Map中，可通过该类访问组件实例。
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="Widget.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        /**
         * 队列状态
        */
        var QueueStatus;
        (function (QueueStatus) {
            QueueStatus[QueueStatus["IDLE"] = 0] = "IDLE";
            QueueStatus[QueueStatus["READY"] = 1] = "READY";
            QueueStatus[QueueStatus["BUSY"] = 2] = "BUSY";
        })(QueueStatus || (QueueStatus = {}));
        /**
         *任务
        */
        var Task = (function () {
            /**
             * @params widgetType 组件类型
             * @params attachElementId 连接点的id
             * @params data 数据
             * @parentId 可选，父组件的id
            */
            function Task(widgetType, attachElementId, data, parentId) {
                this.widgetType = widgetType;
                this.attachElementId = attachElementId;
                this.data = data;
                this.parentId = parentId;
            }
            return Task;
        }());
        hui.Task = Task;
        /**
         * 任务队列
        */
        var TaskQueue = (function () {
            function TaskQueue() {
                this.status = QueueStatus.IDLE;
                this.tasks = new Array();
            }
            /**
             * 增加任务
             * @params task Task类型
            */
            TaskQueue.prototype.addTask = function (task) {
                switch (this.status) {
                    case QueueStatus.IDLE:
                        this.doTask(task);
                        break;
                    case QueueStatus.BUSY:
                        this.tasks.push(task);
                        break;
                    default:
                        break;
                }
            };
            /**
             * 执行任务
             * @params task Task类型 要执行的任务
            */
            TaskQueue.prototype.doTask = function (task) {
                this.status = QueueStatus.BUSY;
                this.requestCreate(task);
            };
            /**
             * 开始执行下一个任务
            */
            TaskQueue.prototype.nextTask = function () {
                if (this.tasks.length != 0)
                    this.doTask(this.tasks.shift());
                else
                    this.status = QueueStatus.IDLE;
            };
            /**
             * 请求执行该任务，改任务的作用是创建widget实例
             * @params task Task类型
            */
            TaskQueue.prototype.requestCreate = function (task) {
                if (hui.WidgetExtension.getWidgetTypes().indexOf(task.widgetType) != -1) {
                    this.createWidget(task);
                }
                else {
                    var _this = this;
                    var loadStatus = new hui.LoadStatus(false, false, false, "", "");
                    var loadTimeOut = setTimeout(function () {
                        hui.Global.LoadingToast.hide();
                        hui.Global.Alert.show({ title: "\u8B66\u544A", content: "\u901A\u8BAF\u5931\u8D25,\u8BF7\u68C0\u67E5\u7F51\u7EDC!", buttons: ["\u786E\u5B9A"] });
                        _this.nextTask();
                    }, 15 * 1000);
                    var result = hui.ResourceManager.loadResourceFromRemote(task.widgetType, loadStatus, function () {
                        //轮询
                        if (loadStatus.jsloaded && loadStatus.cssloaded && loadStatus.htmlloaded) {
                            clearTimeout(loadTimeOut);
                            hui.WidgetExtension.bind(task.widgetType, "<div class=\"hui-widget-view\"><style>" + loadStatus.css + "</style>" + loadStatus.html + "</div>");
                            _this.createWidget(task);
                        }
                    });
                    if (!result)
                        this.nextTask();
                }
            };
            /**
             * 根据任务创建组件实例
             * @params task Task类型
            */
            TaskQueue.prototype.createWidget = function (task) {
                try {
                    var attachElementId = task.attachElementId ? task.attachElementId : "_view_root_";
                    var widgetClass = hui.WidgetExtension.findWidget(task.widgetType);
                    var isPage = widgetClass.prototype instanceof hui.Page;
                    if (isPage) {
                        //销毁当前页
                        var currPage = hui.PageManager.currPage;
                        if (currPage) {
                            if (currPage.id == task.widgetType) {
                                this.nextTask();
                                return;
                            }
                            else {
                                if (currPage.suspend != true)
                                    currPage.destroy();
                            }
                        }
                        var target = WidgetManager.byId(task.widgetType);
                        if (target && target instanceof hui.Page && target.suspend == true) {
                            target.suspend = false;
                            hui.PageManager.currPage = target;
                            hui.PageManager.currPage.data = task.data;
                            this.nextTask();
                            return;
                        }
                    }
                    var inst = new widgetClass.prototype.constructor();
                    inst.init(attachElementId, hui.WidgetExtension.findTemplate(task.widgetType), task.widgetType, task.data);
                    if (task.parentId) {
                        inst.parent = WidgetManager.byId(task.parentId);
                        if (inst instanceof hui.Page && inst.parent instanceof hui.Page)
                            hui.PageManager.currPage = inst.parent;
                    }
                    if (isPage) {
                        //解析当前页
                        hui.HuiParser.parse(inst.attachElement, inst.id);
                        this.nextTask();
                        hui.Global.LoadingToast.hide();
                        inst.notifyInit();
                        return;
                    }
                    this.nextTask();
                }
                catch (error) {
                    console.error("WidgetManager: " + task.widgetType + " \u7EC4\u4EF6\u5B9E\u4F8B\u5316\u65F6\u53D1\u751F\u4E86\u4E25\u91CD\u7684\u9519\u8BEF__ " + error.stack);
                    this.nextTask();
                }
            };
            return TaskQueue;
        }());
        /**
         * 组件管理器
        */
        var WidgetManager = (function () {
            function WidgetManager() {
            }
            /**
             * 注册组件
             * @widget Widget类型 组件的实例
            */
            WidgetManager.register = function (widget) {
                this.manager.set(widget.id, widget);
            };
            /**
             * 根据指定的id获得组件实例
             * @params widgetId 字符串 组件id
             * @return 组件实例
            */
            WidgetManager.byId = function (widgetId) {
                return this.manager.get(widgetId);
            };
            /**
             * 将创建组件的任务加入队列
             * @params task Task类型
            */
            WidgetManager.addCreateTask = function (task) {
                this.taskSquence.addTask(task);
            };
            /**
             * 反注册组件
             * @params widgetId 组件id
            */
            WidgetManager.unRegister = function (widgetId) {
                return this.manager.delete(widgetId);
            };
            WidgetManager.removeAll = function () {
            };
            WidgetManager.taskSquence = new TaskQueue();
            WidgetManager.manager = new hui.Map();
            return WidgetManager;
        }());
        hui.WidgetManager = WidgetManager;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Widget
 * 描述  :  该类为客户端组件基类，将widget模板附加到attchElement下面。
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="WidgetManager.ts" />
///<reference path="../../util/Map.ts"/>
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var Widget = (function () {
            function Widget() {
                this.nodeTypeMap = new hui.Map();
                this._data = {};
            }
            /**
             * @params attachElementId 连接点id
             * @params template html模板
             * @params widgetType 组件类型 如"btop.hui.Alert"
             * @params data 类型为json对象
            */
            Widget.prototype.init = function (attachElementId, template, widgetType, data) {
                this.attachElementId = attachElementId;
                this.template = template;
                this.widgetType = widgetType;
                if (!this.attachElementId)
                    return;
                this.attachElement = $("#" + this.attachElementId)[0];
                if (this.template)
                    this.domNode = $(this.template)[0];
                else
                    this.domNode = this.attachElement;
                if ($(this.attachElement).attr("hui-widget-type"))
                    this._id = this.attachElement.id;
                else
                    this._id = this.domNode.id ? this.domNode.id : $(this.domNode).attr("id", this.widgetType).attr("id");
                if (!hui.WidgetManager.byId(this.id)) {
                    this.nodeTypeMap = this.parseWidgetNodeType(this.domNode);
                    $(this.domNode).appendTo($(this.attachElement));
                    this.data = data ? data : this.data;
                    hui.WidgetManager.register(this);
                    this.initView();
                }
            };
            Object.defineProperty(Widget.prototype, "visible", {
                /**
                 * 返回组件是否可见
                 * @return 布尔类型 true可见 false不可见
                */
                get: function () {
                    return this._visible;
                },
                /**
                 * 设置该组件可见还是不可见
                 * @params visible 布尔类型,false不可见,true可见
                */
                set: function (visible) {
                    if ($(this.attachElement).attr("hui-widget-type")) {
                        if (!visible)
                            $(this.attachElement).hide();
                        else
                            $(this.attachElement).show();
                    }
                    else {
                        if (!visible)
                            $(this.domNode).hide();
                        else
                            $(this.domNode).show();
                    }
                    this._visible = visible;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Widget.prototype, "parent", {
                /**
                 * 返回组件的父节点
                 * @return Container 容器类型
                */
                get: function () {
                    return this._parent;
                },
                /**
                 * 设置父亲
                 * @params parent 容器类型 该组件的父亲
                */
                set: function (parent) {
                    this._parent = parent;
                    this._parent.addChild(this);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Widget.prototype, "data", {
                /**
                 * 获取数据
                 * @return 类型为json对象
                */
                get: function () {
                    return this._data;
                },
                /**
                 * 设置数据
                 * @params data 类型为json对象
                */
                set: function (data) {
                    this._data = data;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 解析自定义的nodetype
             * @return 返回值是Map，比如声明了<div hui-widget-nodeType="msgNode"></div>，Map中的键值对为"msgNode" => HTMLDIVELEMENT实例
            */
            Widget.prototype.parseWidgetNodeType = function (root) {
                var resultMap = new hui.Map();
                var nodeType = $(root).attr("hui-widget-NodeType");
                if (nodeType != null || nodeType != undefined)
                    resultMap.set(nodeType, $(root)[0]);
                $(root).find('*').each(function () {
                    var nodeType = $(this).attr("hui-widget-NodeType");
                    if (nodeType != null || nodeType != undefined)
                        resultMap.set(nodeType, $(this)[0]);
                });
                var _this = this;
                $(root).find("*").each(function () {
                    var bindnode = $(this).attr("h-on");
                    if (bindnode != null || bindnode != undefined) {
                        var bindArray = bindnode.trim().split(":");
                        var domEvent = bindArray[0].trim();
                        var method = bindArray[1].trim();
                        var targetMethod;
                        var args = new Array();
                        if (bindnode.indexOf("(") != -1 && bindnode.indexOf(")") != -1) {
                            var temp = bindnode.trim().split(":")[1].split("(")[1].split(")")[0].split(",");
                            for (var i = 0; i < temp.length; i++) {
                                var value = temp[i].trim();
                                var val = parseInt(value);
                                if (val)
                                    args.push(val);
                                else {
                                    if (value == "true" || value == "false")
                                        args.push(Boolean(temp[i]));
                                    else
                                        args.push(val);
                                }
                            }
                            targetMethod = _this[bindnode.trim().split(":")[1].split("(")[0]];
                        }
                        else
                            targetMethod = _this[method];
                        $(this).on(domEvent, function () {
                            targetMethod.apply(_this, args);
                        });
                        $(this).removeAttr("h-on");
                    }
                });
                return resultMap;
            };
            Object.defineProperty(Widget.prototype, "id", {
                /**
                 * 获取组件id
                */
                get: function () {
                    return this._id;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 销毁该组件
            */
            Widget.prototype.destroy = function () {
                if ($(this.attachElement).attr("hui-widget-type")) {
                    $(this.attachElement).remove();
                    $(this.attachElement).empty();
                    $(this.attachElement).off();
                }
                else {
                    $(this.domNode).remove();
                    $(this.domNode).empty();
                    $(this.domNode).off();
                }
                hui.WidgetManager.unRegister(this.id);
            };
            return Widget;
        }());
        hui.Widget = Widget;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  PopContainer
 * 描述  :  所有可弹出容器的基类
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="../../base/Widget.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var PopContainer = (function (_super) {
            __extends(PopContainer, _super);
            function PopContainer() {
                _super.apply(this, arguments);
            }
            PopContainer.prototype.initView = function () {
                this.visible = false;
            };
            /**
             * 隐藏
            */
            PopContainer.prototype.hide = function () {
                this.visible = false;
            };
            /**
             * 显示
            */
            PopContainer.prototype.show = function (args) {
                this.visible = true;
            };
            return PopContainer;
        }(hui.Widget));
        hui.PopContainer = PopContainer;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Alert
 * 描述  :  Alert组件
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="../popcontainer/PopContainer.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var Alert = (function (_super) {
            __extends(Alert, _super);
            function Alert() {
                _super.apply(this, arguments);
            }
            /**
             * 显示Alert
             * @params args为json对象,可选 title 标题 content 内容 buttons 数组
            */
            Alert.prototype.show = function (args) {
                var _this = this;
                $(this.nodeTypeMap.get("titleNode")).html(args.title ? args.title : "标题");
                $(this.nodeTypeMap.get("contentNode")).html(args.content ? args.content : "这里显示的是正文");
                var container = $(this.nodeTypeMap.get("btnContainerNode"));
                container.empty();
                var btnTemplates = '<button type="button" class="hui-alert-button"></button>';
                for (var i = 0; i < args.buttons.length; i++) {
                    (function (idx) {
                        $(btnTemplates)
                            .appendTo(container)
                            .text(args.buttons[idx]).click(function () {
                            _this.hide();
                            if (args && args.callbackfn && args.callbackfn[idx]) {
                                args.callbackfn[idx].apply(_this, []);
                            }
                        });
                    })(i);
                }
                _super.prototype.show.call(this);
            };
            /**
             * 显示默认alert
             */
            Alert.prototype.showMsg = function (content, title, confirm) {
                this.show({ title: title ? title : "提示", content: content, buttons: ["确定"], callbackfn: [confirm] });
            };
            /**
             * 显示默认confirm
             */
            Alert.prototype.showConfirm = function (content, title, confirm, cancel) {
                this.show({ title: title ? title : "提示", content: content, buttons: ["确定", "取消"], callbackfn: [confirm, cancel] });
            };
            return Alert;
        }(hui.PopContainer));
        hui.Alert = Alert;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  PopWindow
 * 描述  :  弹出窗口
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="../popcontainer/PopContainer.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var PopWindow = (function (_super) {
            __extends(PopWindow, _super);
            function PopWindow() {
                _super.apply(this, arguments);
            }
            return PopWindow;
        }(hui.PopContainer));
        hui.PopWindow = PopWindow;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Select
 * 描述  :  Select下拉框组件
 * 版本  :  v1.0
 * 作者  :  luo
 * 时间  :  8/3/2016
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../base/Widget.ts" />
///<reference path="../../../../libs/jQuery.d.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var Select = (function (_super) {
            __extends(Select, _super);
            function Select() {
                _super.apply(this, arguments);
                this.temp = "";
                this.dataJson = {};
                // private domNode: any;
                this.defaultOption = "";
            }
            Select.prototype.initView = function () {
                $(".selOptionUlDiv").hide();
                $("*:not('.selOptionInput')").click(function (e) {
                    e.stopPropagation();
                    $(".selOptionUlDiv").hide();
                });
                // this.domNode = $(this.domNode$);
                this.dom = $(this.domNode).find("input:first");
                var domNodeId = $(this.domNode).parent().attr("id");
                var domNodeName = $(this.domNode).parent().attr("name");
                this.dom.attr("name", domNodeName || domNodeId);
                this.dom.css({ height: "100%", width: "100%" });
            };
            Select.prototype.initData = function (opt) {
                var that = this;
                this.dataJson = !!opt.dataJson ? opt.dataJson : {};
                this.defaultOption = opt.defaultOption;
                // var domNode = $(this.domNode);
                // var dom = domNode.find("input:first");
                // this.dom = dom;
                var li_list = '<li value="">--请选择--</li>';
                for (var i in this.dataJson) {
                    var li = '<li value="' + i + '">' + this.dataJson[i] + '</li>';
                    li_list += li;
                    if (!!this.defaultOption && this.dataJson[i].indexOf(this.defaultOption) != -1) {
                        this.dom.val(this.dataJson[i]);
                        this.dom.attr("opt-value", i);
                    }
                }
                $(this.domNode).find("ul:first").append(li_list);
                this.dom.unbind("click").click(function (e) {
                    e.stopPropagation();
                    var _this = $(this);
                    that.clickEvent(_this, opt);
                });
            };
            Select.prototype.clickEvent = function (t, opt) {
                var sh = window.screen.height;
                var current_val = t.val();
                var current_optval = t.attr("opt-value");
                var current_li;
                var choose_val = "";
                var posi_h = t.offset().top;
                var parent_left = t.parent().offset().left;
                var posi_left = t.offset().left;
                var rela_left = posi_left - parent_left;
                var pps = posi_h / sh;
                //var optListDiv = t.nextAll(".selOptionUlDiv").first();
                var optListDiv = t.next(".selOptionUlDiv");
                var t_h = t.outerHeight();
                if (optListDiv.css("display") == "none") {
                    //t.after(this.temp);
                    optListDiv = t.next(".selOptionUlDiv");
                    optListDiv.show();
                    if (!!rela_left)
                        optListDiv.css("left", rela_left + "px");
                    var opt_height = optListDiv.height();
                    if (pps > 0.6) {
                        optListDiv.css("margin-top", -opt_height - t_h - 2 + "px");
                    }
                }
                else {
                    optListDiv.hide();
                }
                current_li = optListDiv.find("li[value='" + current_optval + "']").first();
                var ul = optListDiv.find("ul").first();
                var li = ul.find("li");
                li.removeClass("current_li");
                current_li.addClass("current_li");
                //optListDiv.toggle();
                //if(!!current_li.length) optListDiv.scrollTo(current_li, 2,{offset: 0});
                li.unbind("mouseup").bind("mousedown", function () {
                });
                li.unbind("mouseup").bind("mouseup", function () {
                    var c_li = $(this);
                    choose_val = c_li.text();
                    var optVal = c_li.attr("value");
                    t.val(choose_val);
                    t.attr("opt-value", optVal);
                    optListDiv.hide(); //slideUp(5);
                    //console.log(optVal+""+typeof opt.onchange);
                    if (current_val != choose_val && typeof opt.onchange == "function") {
                        opt.onchange(optVal); //callback
                    }
                });
            };
            Select.prototype.setSelectedItem = function (selectedValue) {
                for (var i in this.dataJson) {
                    if (!!selectedValue && this.dataJson[i].indexOf(selectedValue) != -1) {
                        this.dom.val(this.dataJson[i]);
                        this.dom.attr("opt-value", i);
                    }
                }
            };
            Select.prototype.getValue = function () {
                if (!!this.dom) {
                    return this.dom.val();
                }
                else {
                    return "";
                }
            };
            Select.prototype.getOptValue = function () {
                if (!!this.dom) {
                    return this.dom.attr("opt-value");
                }
                else {
                    return "";
                }
            };
            return Select;
        }(hui.Widget));
        hui.Select = Select;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Global
 * 描述  :  该类管理了全局且唯一的组件实例,如:Alert,PopWindow。
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="../widget/impl/alert/Alert.ts" />
///<reference path="../widget/impl/popwindow/PopWindow.ts" />
///<reference path="../widget/impl/Select/Select.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var Global = (function () {
            function Global() {
            }
            return Global;
        }());
        hui.Global = Global;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  WidgetExtension
 * 描述  :  组件的扩展点，用于注册组件，自定义组件将会在这里被注册，从而被HuiParser解析。
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="Widget.ts" />
///<reference path="../../event/Event.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var WidgetExtension = (function () {
            function WidgetExtension() {
            }
            /**
             * 绑定组件及其html模板,调用方式如: WidgetExtension.bind("btop.hui.Alert", "<div></div>")。改函数会根据widgetPath也就是btop.hui.Alert找到这个Alert函数
             * @params widgetPath 组件类的全路径
             * @params template html模板
            */
            WidgetExtension.bind = function (widgetPath, template) {
                if (!widgetPath) {
                    console.error("WidgetExtension: \u7ED1\u5B9A\u7EC4\u4EF6\u548C\u5176\u5BF9\u5E94html\u6A21\u677F\u5931\u8D25");
                }
                else {
                    if (widgetPath.indexOf(".") == -1) {
                        console.error("WidgetExtension:" + widgetPath + "\u672A\u5305\u542B\u7EC4\u4EF6\u7684\u5168\u8DEF\u5F84");
                    }
                    else {
                        var classPath = widgetPath.split(".");
                        var widgetClass = null;
                        for (var i = 0; i < classPath.length; i++) {
                            if (i == 0) {
                                if (!window.hasOwnProperty(classPath[i])) {
                                    console.error("WidgetExtension: \u4E0D\u80FD\u901A\u8FC7\u9884\u8BBE\u7684" + widgetPath + "\u83B7\u53D6\u5230window\u5BF9\u8C61\u4E2D" + classPath[i] + "\u7684\u5B9E\u4F8B,\u8BF7\u68C0\u67E5" + widgetPath + "\u662F\u5426\u5408\u6CD5");
                                    return;
                                }
                                widgetClass = window[classPath[i]];
                            }
                            else {
                                if (!widgetClass.hasOwnProperty(classPath[i])) {
                                    console.error("WidgetExtension: \u4E0D\u80FD\u901A\u8FC7\u9884\u8BBE\u7684" + widgetPath + "\u83B7\u53D6\u5230" + classPath[i - 1] + "\u5BF9\u8C61\u4E2D" + classPath[i] + "\u7684\u5B9E\u4F8B\uFF0C\u8BF7\u68C0\u67E5" + widgetPath + "\u662F\u5426\u5408\u6CD5");
                                    return;
                                }
                                widgetClass = widgetClass[classPath[i]];
                            }
                        }
                        if (this.types.indexOf(widgetPath) == -1) {
                            this.types.push(widgetPath);
                            this.widgetMap.set(widgetPath, widgetClass);
                            this.templateMap.set(widgetPath, template);
                        }
                        else {
                            console.error("WidgetExtension: \u4E0D\u80FD\u901A\u8FC7\u9884\u8BBE\u7684" + widgetPath + "\u91CD\u590D\u6CE8\u518C" + widgetPath + "\u7684\u5B9E\u4F8B\uFF0C\u8BF7\u68C0\u67E5" + widgetPath + "\u662F\u5426\u5DF2\u7ECF\u58F0\u660E\u8FC7");
                        }
                    }
                }
            };
            /**
             * 获得已经绑定所有组件的全路径
             * @return Array<string> 如["btop.hui.Alert", "btop.hui.OverLay"]
            */
            WidgetExtension.getWidgetTypes = function () {
                return this.types;
            };
            /**
             * 根据组件类型找到其对应的函数
             * @return Function 组件的函数
            */
            WidgetExtension.findWidget = function (widgetType) {
                return this.widgetMap.get(widgetType);
            };
            /**
             * 根据组件类型找到其对应的html模板,值已经绑定过的html模板,如: WidgetExtension.bind("btop.hui.Alert", AlertTemplate),根据"btop.hui.Alert"可以获取到AlertTemplate
             * @return string 组件模板
            */
            WidgetExtension.findTemplate = function (widgetType) {
                return this.templateMap.get(widgetType);
            };
            WidgetExtension.templateMap = new hui.Map();
            WidgetExtension.widgetMap = new hui.Map();
            WidgetExtension.types = new Array();
            return WidgetExtension;
        }());
        hui.WidgetExtension = WidgetExtension;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  WattPanel
 * 描述  :  等待面板组件
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="../popcontainer/PopContainer.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var WattPanel = (function (_super) {
            __extends(WattPanel, _super);
            function WattPanel() {
                _super.apply(this, arguments);
            }
            WattPanel.prototype.show = function (msg) {
                $(this.nodeTypeMap.get("msgNode")).html(msg);
                _super.prototype.show.call(this);
            };
            return WattPanel;
        }(hui.PopContainer));
        hui.WattPanel = WattPanel;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  HandWritingPanel
 * 描述  :  手写面板
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="../../base/Widget.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var Point = (function () {
            function Point(x, y) {
                this.x = x;
                this.y = y;
            }
            return Point;
        }());
        var HandWritingPanel = (function (_super) {
            __extends(HandWritingPanel, _super);
            function HandWritingPanel() {
                _super.apply(this, arguments);
                this.paint = false;
                this.oldPoint = null;
                this.currPoint = null;
            }
            HandWritingPanel.prototype.initView = function () {
                this.canvas = $(this.attachElement).find('canvas').get(0);
                this.canvas.width = this.attachElement.clientWidth || $(this.attachElement).width();
                this.canvas.height = this.attachElement.clientHeight || $(this.attachElement).height();
                this.context = this.canvas.getContext("2d");
                this.context.strokeStyle = "#df4b26";
                this.context.lineJoin = "round";
                this.context.lineWidth = 5;
                var _this = this;
                this.canvas.addEventListener("mousedown", function (e) {
                    _this.paint = true;
                    _this.oldPoint = _this.currPoint = new Point(e.offsetX, e.offsetY);
                    _this.draw();
                });
                this.canvas.addEventListener("mousemove", function (e) {
                    if (_this.paint) {
                        _this.currPoint = new Point(e.offsetX, e.offsetY);
                        _this.draw();
                    }
                });
                this.canvas.addEventListener("mouseup", function (e) {
                    _this.paint = false;
                });
                this.canvas.addEventListener("mouseleave", function (e) {
                    _this.paint = false;
                });
                this.canvas.addEventListener("touchstart", function (e) {
                    _this.paint = true;
                    var touchX = e.targetTouches[0].pageX - _this.canvas.getBoundingClientRect().left;
                    var touchY = e.targetTouches[0].pageY - _this.canvas.getBoundingClientRect().top;
                    _this.oldPoint = _this.currPoint = new Point(touchX, touchY);
                    _this.draw();
                });
                this.canvas.addEventListener("touchmove", function (e) {
                    if (_this.paint) {
                        var touchX = e.targetTouches[0].pageX - _this.canvas.getBoundingClientRect().left;
                        var touchY = e.targetTouches[0].pageY - _this.canvas.getBoundingClientRect().top;
                        _this.currPoint = new Point(touchX, touchY);
                        _this.draw();
                    }
                });
                this.canvas.addEventListener("touchend", function (e) {
                    _this.paint = false;
                });
            };
            HandWritingPanel.prototype.draw = function () {
                this.context.beginPath();
                if (this.oldPoint == this.currPoint)
                    this.context.moveTo(this.oldPoint.x - 1, this.oldPoint.y);
                else
                    this.context.moveTo(this.oldPoint.x, this.oldPoint.y);
                this.context.lineTo(this.currPoint.x, this.currPoint.y);
                this.context.closePath();
                this.context.stroke();
                this.oldPoint = this.currPoint;
            };
            HandWritingPanel.prototype.clear = function () {
                this.canvas.width = this.canvas.width;
                this.context.strokeStyle = "#df4b26";
                this.context.lineJoin = "round";
                this.context.lineWidth = 5;
            };
            /**
             * 将画过的笔记保存成图片
            */
            HandWritingPanel.prototype.saveImage = function () {
                return this.canvas.toDataURL();
            };
            return HandWritingPanel;
        }(hui.Widget));
        hui.HandWritingPanel = HandWritingPanel;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  OverLay
 * 描述  :  蒙板
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="../popcontainer/PopContainer.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var OverLay = (function (_super) {
            __extends(OverLay, _super);
            function OverLay() {
                _super.apply(this, arguments);
            }
            OverLay.prototype.show = function (msg) {
                $(this.nodeTypeMap.get("msgNode")).html(msg);
                _super.prototype.show.call(this);
            };
            return OverLay;
        }(hui.PopContainer));
        hui.OverLay = OverLay;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  ProcessBar
 * 描述  :  进度条组件。此进度条组件非progressbar，该组件用于展示页面的若干步骤
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="../../base/Widget.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var ProcessBar = (function (_super) {
            __extends(ProcessBar, _super);
            function ProcessBar() {
                _super.apply(this, arguments);
                this.points = null;
            }
            ProcessBar.prototype.initView = function () {
                this.points = new Array();
                if (!this.data || this.data == {})
                    this.data = { steps: ["defaultStep1", "defaultStep2", "defaultStep3", "defaultStep4", "defaultStep5"], gotoStep: 0 };
                else
                    this.data["gotoStep"] = parseInt(this.data["gotoStep"]);
                this.stepBar = this.nodeTypeMap.get("stepBar");
                var pointHtml = "<div class='processbar-step-point processbar-step-point-unprocessed'></div>";
                var stepDes = "<div class='processbar-step-des'></div>";
                for (var i = 0; i < this.data["steps"].length; i++) {
                    var width = 100 * (i + 1) / (this.data["steps"].length + 1) + "%";
                    var point = $(pointHtml).css({ left: width }).appendTo($(this.domNode));
                    $(stepDes).html(this.data["steps"][i]).appendTo(point);
                    this.points.push(point);
                }
                this.gotoStep(this.data["gotoStep"]);
            };
            ProcessBar.prototype.gotoStep = function (step) {
                if (step < 0 || step > this.data["steps"].length - 1)
                    return;
                this.data["gotoStep"] = step;
                for (var i = 0; i < this.points.length; i++) {
                    if (i <= step)
                        this.points[i].removeClass("processbar-step-point-unprocessed")
                            .addClass("processbar-step-point-processed");
                    else
                        this.points[i].addClass("processbar-step-point-unprocessed")
                            .removeClass("processbar-step-point-processed");
                }
                var _this = this;
                $(this.stepBar).css({ right: _this.getRightPercent() });
            };
            ProcessBar.prototype.getRightPercent = function () {
                var point = this.points[this.data["gotoStep"]];
                var right = parseFloat($(this.domNode).css("width").replace("px", ""))
                    - parseFloat(point.css("left").replace("px", ""))
                    - parseFloat(point.css("width").replace("px", "")) / 2;
                var rightPercent = right / parseFloat($(this.domNode).css("width").replace("px", "")) * 100 + "%";
                return rightPercent;
            };
            return ProcessBar;
        }(hui.Widget));
        hui.ProcessBar = ProcessBar;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  DatePicker
 * 描述  :  日期组件
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="../../base/Widget.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var CALENDER_EVENT;
        (function (CALENDER_EVENT) {
            CALENDER_EVENT[CALENDER_EVENT["SHOW_TODAY"] = 0] = "SHOW_TODAY";
            CALENDER_EVENT[CALENDER_EVENT["NEXT_MONTH"] = 1] = "NEXT_MONTH";
            CALENDER_EVENT[CALENDER_EVENT["NEXT_THREE_MONTHS"] = 3] = "NEXT_THREE_MONTHS";
            CALENDER_EVENT[CALENDER_EVENT["NEXT_SIX_MONTHS"] = 6] = "NEXT_SIX_MONTHS";
            CALENDER_EVENT[CALENDER_EVENT["NEXT_YEAR"] = 12] = "NEXT_YEAR";
            CALENDER_EVENT[CALENDER_EVENT["PRE_YEAR"] = -12] = "PRE_YEAR";
            CALENDER_EVENT[CALENDER_EVENT["LAST_MONTH"] = -1] = "LAST_MONTH";
        })(CALENDER_EVENT || (CALENDER_EVENT = {}));
        var UPDATE_RANGE;
        (function (UPDATE_RANGE) {
            UPDATE_RANGE[UPDATE_RANGE["BOTH_GRID"] = 0] = "BOTH_GRID";
            UPDATE_RANGE[UPDATE_RANGE["LEFT_GRID"] = 1] = "LEFT_GRID";
            UPDATE_RANGE[UPDATE_RANGE["RIGHT_GRID"] = 2] = "RIGHT_GRID";
        })(UPDATE_RANGE || (UPDATE_RANGE = {}));
        /**
         * 日期组件
        */
        var DatePicker = (function (_super) {
            __extends(DatePicker, _super);
            function DatePicker() {
                _super.apply(this, arguments);
                this.formatString = "yyyy/MM/dd";
                this._dtNow = new Date();
                this._MonthNow = this._dtNow.getMonth() + 1;
                this._yearNow = this._dtNow.getFullYear();
                this._dateNow = this._dtNow.getDate();
                this._selectedCell = { year: this._yearNow, month: this._MonthNow, date: this._dateNow, cell: "" };
                this.GRID1 = "G1";
                this.GRID2 = "G2";
                this.SHOW_MONTH_GRID1 = "showMonthGrid1";
                this.SHOW_MONTH_GRID2 = "showMonthGrid2";
                this.months = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
                this.monthOf31Days = [1, 3, 5, 7, 8, 10, 12];
                this.monthOf30Days = [4, 6, 9, 11];
            }
            DatePicker.prototype.initView = function () {
                var domNode = $(this.domNode);
                var domNodeId = domNode.parent().attr("id");
                var domNodeName = domNode.parent().attr("name");
                domNode.attr("name", domNodeName || domNodeId);
                if (this.data["format"])
                    this.formatString = this.data["format"];
                var datePickerTemplate = "<div class='hui-datepicker' id='" + this.id + "_Calender'>\n    <div class='hui-datepicker-yearPanel'>\n        <input hui-widget-NodeType=\"leftArrowBtn\" type='button' style='float: left;border-top-left-radius: 6px;' value='<'\n               class='hui-datepicker-arrowButton'/>\n        <div class='hui-datepicker-yearDisplay hui-datepicker-nearYear' hui-widget-NodeType=\"preYear\">\u53BB\u5E74</div>\n        <div class='hui-datepicker-yearDisplay' hui-widget-NodeType=\"currYear\">\u4ECA\u5E74</div>\n        <div class='hui-datepicker-yearDisplay hui-datepicker-nearYear' hui-widget-NodeType=\"nextYear\">\u660E\u5E74</div>\n        <input hui-widget-NodeType=\"rightArrowBtn\" type='button' style='float: right;border-top-right-radius: 6px;' value='>'\n               class='hui-datepicker-arrowButton'/>\n    </div>\n    <div class='hui-datepicker-monthPanel'>\n        <ul hui-widget-NodeType=\"monthList\" class='hui-datepicker-monthTab'></ul>\n        <div>\n            <div hui-widget-NodeType=\"dateList\" class='hui-datepicker-monthsDisplay'>\n            </div>\n            <div class='hui-datepicker-operationsPanel'>\n                <input type='button' value='\u9009\u62E9\u4ECA\u5929'  hui-widget-NodeType=\"chooseTodayBtn\" class='hui-datepicker-button'/>\n                <input type='button' value='\u4E0B\u4E09\u4E2A\u6708' hui-widget-NodeType=\"nextThreeMonthBtn\" class='hui-datepicker-button'/>\n                <input type='button' value='\u4E0B\u534A\u5E74' hui-widget-NodeType=\"nextSixMonthBtn\" class='hui-datepicker-button'/>\n                <input type='button' value='\u6E05\u9664' hui-widget-NodeType=\"clearBtn\" class='hui-datepicker-button'/>\n                <input type='button' value='\u786E\u5B9A' hui-widget-NodeType=\"submitBtn\" class='hui-datepicker-button'/>\n                <input type='button' value='\u5173\u95ED' hui-widget-NodeType=\"cancelBtn\" class='hui-datepicker-button'/>\n            </div>\n        </div>\n    </div>\n</div>";
                this.datePickerNode = $(datePickerTemplate).appendTo($("#_super_root_"))[0];
                var datePickerMap = this.parseWidgetNodeType(this.datePickerNode);
                this.monthListNode = datePickerMap.get("monthList");
                this.dateListNode = datePickerMap.get("dateList");
                this.currYearNode = datePickerMap.get("currYear");
                this.preYearNode = datePickerMap.get("preYear");
                this.nextYearNode = datePickerMap.get("nextYear");
                this.createCalender();
                this.monthsMap = this.parseWidgetNodeType(this.monthListNode);
                this.dateCellMap = this.parseWidgetNodeType($(this.dateListNode)[0]);
                var entrys = this.dateCellMap.entrys();
                var _this = this;
                for (var i = 0; i < entrys.length; i++) {
                    var entry = entrys[i];
                    if (entry.key.indexOf("G") != -1) {
                        $(entry.value).click(function () {
                            _this.handleDateClick($(this)[0]);
                        }).on("mouseout", function () {
                            _this.handleMouseExitEvent($(this)[0]);
                        }).on("mouseover", function () {
                            _this.handleMouseOverEvent($(this)[0]);
                        });
                    }
                }
                entrys = this.monthsMap.entrys();
                for (var i = 0; i < entrys.length; i++) {
                    var entry = entrys[i];
                    if (entry.key != "monthList") {
                        $(entry.value).click(function (e) {
                            _this.handleMonthClick($(this)[0]);
                        });
                    }
                }
                $(datePickerMap.get("chooseTodayBtn")).click(function (e) {
                    _this._selectedCell.year = _this._yearNow;
                    _this._selectedCell.month = _this._MonthNow;
                    _this._selectedCell.date = _this._dateNow;
                    _this.handleEvent(CALENDER_EVENT.SHOW_TODAY);
                });
                $(datePickerMap.get("nextThreeMonthBtn")).click(function (e) {
                    _this.handleEvent(CALENDER_EVENT.NEXT_THREE_MONTHS);
                });
                $(datePickerMap.get("nextSixMonthBtn")).click(function (e) {
                    _this.handleEvent(CALENDER_EVENT.NEXT_SIX_MONTHS);
                });
                $(datePickerMap.get("clearBtn")).click(function (e) {
                    $(_this.domNode).val("");
                });
                $(datePickerMap.get("submitBtn")).click(function (e) {
                    _this.handleSubmit();
                });
                $(datePickerMap.get("cancelBtn")).click(function (e) {
                    _this.handleCancel();
                });
                $(datePickerMap.get("leftArrowBtn")).click(function (e) {
                    _this.handleEvent(CALENDER_EVENT.PRE_YEAR);
                });
                $(datePickerMap.get("rightArrowBtn")).click(function (e) {
                    _this.handleEvent(CALENDER_EVENT.NEXT_YEAR);
                });
                $(this.domNode).on("focus", function () {
                    _this.showCalender();
                });
                this.showDatePicker(false);
                $(this.domNode).val(this.format());
            };
            DatePicker.prototype.getChineseMonth = function (month) {
                return this.months[month - 1];
            };
            DatePicker.prototype.createCalender = function () {
                var gridHtml = "";
                for (var k = 0; k < 2; k++) {
                    var className = k == 0 ? "hui-datepicker-monthDisplay hui-datepicker-month-left" : "hui-datepicker-monthDisplay hui-datepicker-month-right";
                    var showMonth = k == 0 ? this.SHOW_MONTH_GRID1 : this.SHOW_MONTH_GRID2;
                    var html = '';
                    html += "<div class = \"" + className + "\">\n                <div><div class=\"hui-datepicker-monthLabel hui-datepicker-dateCell\" hui-widget-NodeType=\"" + showMonth + "\"></div></div>\n                <div class=\"hui-datepicker-dateRow\">\n                <div class=\"hui-datepicker-dateCell\">\u65E5</div>\n                <div class=\"hui-datepicker-dateCell\">\u4E00</div>\n                <div class=\"hui-datepicker-dateCell\">\u4E8C</div>\n                <div class=\"hui-datepicker-dateCell\">\u4E09</div>\n                <div class=\"hui-datepicker-dateCell\">\u56DB</div>\n                <div class=\"hui-datepicker-dateCell\">\u4E94</div>\n                <div class=\"hui-datepicker-dateCell\">\u516D</div>\n                </div>";
                    for (var i = 0; i < 6; i++) {
                        if (i == 0)
                            html += '<div class="hui-datepicker-dateRow">';
                        else
                            html += '</div><div class="hui-datepicker-dateRow">';
                        for (var j = 0; j < 7; j++) {
                            var key = k == 0 ? this.GRID1 + "_" + i + "_" + j : this.GRID2 + "_" + i + "_" + j;
                            html += "<input type=\"button\" hui-widget-NodeType=\"" + key + "\" value=\"" + key + "\" class=\"hui-datepicker-dateCell\">";
                        }
                    }
                    html += '</div></div>';
                    gridHtml = gridHtml + html;
                }
                var tabItemHtml = "";
                for (var i = 0; i < 12; i++) {
                    var month = i + 1;
                    var chineseMonth = this.getChineseMonth(month);
                    var key = "month_" + month;
                    var item = "<li class='hui-datepicker-month' hui-widget-NodeType=\"" + key + "\">" + chineseMonth + "</li>";
                    tabItemHtml = tabItemHtml + item;
                }
                $(this.monthListNode).html(tabItemHtml);
                $(this.dateListNode).html(gridHtml);
            };
            DatePicker.prototype.handleEvent = function (calenderEvent) {
                if (calenderEvent == CALENDER_EVENT.SHOW_TODAY) {
                    this.DATAGRID1 = this._calculateMonth(calenderEvent, this._selectedCell.year, this._selectedCell.month);
                    this._updateGrid(this.DATAGRID1.year, this.DATAGRID1.month, UPDATE_RANGE.LEFT_GRID);
                    this.DATAGRID2 = this._calculateMonth(CALENDER_EVENT.NEXT_MONTH, this.DATAGRID1.year, this.DATAGRID1.month);
                    this._updateGrid(this.DATAGRID2.year, this.DATAGRID2.month, UPDATE_RANGE.RIGHT_GRID);
                }
                else {
                    if (this._selectedCell.cell.indexOf(this.GRID2, 0) != -1) {
                        this.DATAGRID2 = this._calculateMonth(calenderEvent, this.DATAGRID2.year, this.DATAGRID2.month);
                        this._updateGrid(this.DATAGRID2.year, this.DATAGRID2.month, UPDATE_RANGE.RIGHT_GRID);
                        this.DATAGRID1 = this._calculateMonth(CALENDER_EVENT.LAST_MONTH, this.DATAGRID2.year, this.DATAGRID2.month);
                        this._updateGrid(this.DATAGRID1.year, this.DATAGRID1.month, UPDATE_RANGE.LEFT_GRID);
                        this._selectedCell.year = this.DATAGRID2.year;
                        this._selectedCell.month = this.DATAGRID2.month;
                    }
                    else {
                        this.DATAGRID1 = this._calculateMonth(calenderEvent, this.DATAGRID1.year, this.DATAGRID1.month);
                        this._updateGrid(this.DATAGRID1.year, this.DATAGRID1.month, UPDATE_RANGE.LEFT_GRID);
                        this.DATAGRID2 = this._calculateMonth(CALENDER_EVENT.NEXT_MONTH, this.DATAGRID1.year, this.DATAGRID1.month);
                        this._updateGrid(this.DATAGRID2.year, this.DATAGRID2.month, UPDATE_RANGE.RIGHT_GRID);
                        this._selectedCell.year = this.DATAGRID1.year;
                        this._selectedCell.month = this.DATAGRID1.month;
                    }
                }
                this._updateSelectedCell();
            };
            ;
            DatePicker.prototype._updateSelectedCell = function () {
                var grid = this.DATAGRID1.month == this._selectedCell.month ? this.GRID1 : this.GRID2;
                for (var i = 0; i < 6; i++) {
                    for (var j = 0; j < 7; j++) {
                        var key = grid + "_" + i + "_" + j;
                        if ($(this.dateCellMap.get(key)).val() == this._selectedCell.date)
                            this._selectedCell.cell = key;
                    }
                }
                if (this._selectedCell["lastCell"])
                    $(this.dateCellMap.get(this._selectedCell["lastCell"])).attr("class", "hui-datepicker-dateCell");
                if (this._selectedCell.cell != "") {
                    $(this.dateCellMap.get(this._selectedCell.cell)).attr("class", "hui-datepicker-dateCell hui-datepicker-dateSelected").focus();
                }
                else {
                    for (var i = 0; i < 6; i++) {
                        for (var j = 0; j < 7; j++) {
                            var key = grid + "_" + i + "_" + j;
                            var ndays = this._getDays(this._selectedCell.month, this._selectedCell.year);
                            if ($(this.dateCellMap.get(key)).val() == ndays) {
                                this._selectedCell.cell = key;
                                this._selectedCell.date = ndays;
                            }
                        }
                    }
                    $(this.dateCellMap.get(this._selectedCell.cell)).attr("class", "hui-datepicker-dateCell hui-datepicker-dateSelected").focus();
                }
                this._selectedCell["lastCell"] = this._selectedCell.cell;
                this._updateSelectedMonths();
                this._updateSelectedYear();
            };
            DatePicker.prototype._updateSelectedYear = function () {
                var year = this._selectedCell.year;
                $(this.currYearNode).html(String(year));
                $(this.preYearNode).html(String(year - 1));
                $(this.nextYearNode).html(String(year + 1));
            };
            DatePicker.prototype._updateSelectedMonths = function () {
                this._selectedMonth = this._selectedCell.month;
                if (this._lastSelectedMonth)
                    $(this.monthsMap.get("month_" + this._lastSelectedMonth)).attr("class", "hui-datepicker-month");
                if (this._selectedMonth) {
                    $(this.monthsMap.get("month_" + this._selectedMonth)).attr("class", "hui-datepicker-month hui-datepicker-month-selected");
                    this._lastSelectedMonth = this._selectedMonth;
                }
            };
            DatePicker.prototype._updateGrid = function (year, month, range) {
                var startDay = new Date(year, month - 1, 1).getDay();
                var daysArray = new Array();
                var showMonth = range == UPDATE_RANGE.LEFT_GRID ? this.SHOW_MONTH_GRID1 : this.SHOW_MONTH_GRID2;
                $(this.dateCellMap.get(showMonth)).html(this.getChineseMonth(month));
                var _days = this._getDays(month, year);
                for (var i = 0; i < _days; i++) {
                    daysArray[i] = i + 1;
                }
                for (var i = 0; i < 6; i++) {
                    for (var j = 0; j < 7; j++) {
                        var key = range == UPDATE_RANGE.LEFT_GRID ? this.GRID1 + "_" + i + "_" + j : this.GRID2 + "_" + i + "_" + j;
                        if (i == 0 && j < startDay) {
                            $(this.dateCellMap.get(key)).val("").css("visibility", "hidden");
                        }
                        else {
                            if (daysArray.length != 0) {
                                var day = daysArray.shift();
                                $(this.dateCellMap.get(key)).val(day).css("visibility", "visible");
                                continue;
                            }
                            $(this.dateCellMap.get(key)).val("").css("visibility", "hidden");
                        }
                    }
                }
            };
            DatePicker.prototype._getDays = function (month, year) {
                if (this.monthOf31Days.indexOf(month) != -1)
                    return 31;
                if (this.monthOf30Days.indexOf(month) != -1)
                    return 30;
                if (this.isLeapYear(year))
                    return 29;
                else
                    return 28;
            };
            ;
            DatePicker.prototype.isLeapYear = function (year) {
                if (((year % 4) == 0) && ((year % 100) != 0) || ((year % 400) == 0))
                    return true;
                else
                    return false;
            };
            DatePicker.prototype._calculateMonth = function (delta, year, month) {
                var sum = month + delta;
                var result = { year: year, month: month };
                if (delta < 0) {
                    result.year = sum < 1 ? year - 1 : year;
                    result.month = sum < 1 ? sum + 12 : sum;
                }
                else if (delta > 0) {
                    result.year = sum > 12 ? year + 1 : year;
                    result.month = sum > 12 ? sum - 12 : sum;
                }
                return result;
            };
            DatePicker.prototype.handleMonthClick = function (srcElement) {
                var index = this._getCurrentNodeIndex(srcElement);
                var month = index + 1;
                if (month != this._selectedCell.month)
                    this.handleEvent(month - this._selectedCell.month);
            };
            DatePicker.prototype.handleMouseExitEvent = function (srcElement) {
                $(srcElement).removeClass("hui-datepickier-dateCellHover");
            };
            DatePicker.prototype.handleDateClick = function (srcElement) {
                var cell = $(srcElement).attr("hui-widget-NodeType");
                if ($(srcElement).val() != "") {
                    this._selectedCell.date = parseInt($(srcElement).val());
                    var grid = cell.indexOf(this.GRID1, 0) != -1 ? this.DATAGRID1 : this.DATAGRID2;
                    this._selectedCell.month = grid.month;
                    this._selectedCell.year = grid.year;
                    this._updateSelectedCell();
                }
            };
            DatePicker.prototype.handleMouseOverEvent = function (srcElement) {
                if ($(srcElement).val() != "") {
                    $(srcElement).addClass("hui-datepickier-dateCellHover");
                }
            };
            DatePicker.prototype.showDatePicker = function (show) {
                if (show) {
                    $(this.datePickerNode).show();
                    hui.Global.OverLay.show();
                }
                else {
                    $(this.datePickerNode).hide();
                    hui.Global.OverLay.hide();
                }
            };
            DatePicker.prototype.handleSubmit = function () {
                this.showDatePicker(false);
                $(this.domNode).val(this.format());
            };
            DatePicker.prototype.handleCancel = function () {
                this.showDatePicker(false);
            };
            DatePicker.prototype.format = function () {
                var fmt = this.formatString;
                var o = {
                    "M+": this._selectedCell.month,
                    "d+": this._selectedCell.date //日
                };
                if (/(y+)/.test(fmt))
                    fmt = fmt.replace(RegExp.$1, (this._selectedCell.year + "").substr(4 - RegExp.$1.length));
                for (var k in o) {
                    if (new RegExp("(" + k + ")").test(fmt))
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                }
                return fmt;
            };
            DatePicker.prototype.getDateString = function () {
                return this.format();
            };
            DatePicker.prototype.showCalender = function () {
                this.showDatePicker(true);
                this.handleEvent(CALENDER_EVENT.SHOW_TODAY);
            };
            Object.defineProperty(DatePicker.prototype, "Date", {
                /**
                 * 获得当前选中的日期，或者输入场中填入的日期
                 * @return json对象 {year: number, month: number, date: number}
                */
                get: function () {
                    return { year: this._selectedCell.year, month: this._selectedCell.month, date: this._selectedCell.date };
                },
                set: function (data) {
                    this._selectedCell.year = data.year;
                    this._selectedCell.month = data.month;
                    this._selectedCell.date = data.date;
                    $(this.domNode).val(this.format());
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 获得日期字面上的值,如"2010/01/01"
            */
            DatePicker.prototype.getDate = function () {
                return this.format();
            };
            DatePicker.prototype._getCurrentNodeIndex = function (node) {
                var children = node.parentNode.childNodes;
                for (var i = 0; i < children.length; i++) {
                    if (children[i] == node)
                        return i;
                }
                return -1;
            };
            DatePicker.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
                $(this.datePickerNode).remove();
                $(this.datePickerNode).empty();
                $(this.datePickerNode).off();
            };
            return DatePicker;
        }(hui.Widget));
        hui.DatePicker = DatePicker;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Amount
 * 描述  :  金额场组件
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="../../base/Widget.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var Amount = (function (_super) {
            __extends(Amount, _super);
            function Amount() {
                _super.apply(this, arguments);
                this.minus = false;
            }
            Amount.prototype.initView = function () {
                this.decimalLen = this.data["decimalLen"] ? parseInt(this.data["decimalLen"]) : 2;
                this.maxLength = this.data["maxLength"] ? parseInt(this.data["maxLength"]) : 15;
                this.minus = this.data["minus"] == "true" ? true : false;
                this.inputElement = this.nodeTypeMap.get("inputNode");
                this.inputElement.maxLength = this.maxLength;
                var _this = this;
                this.inputElement.addEventListener("input", function (e) {
                    console.info(e);
                    _this.handleOnInputEvent();
                });
                this.inputElement.addEventListener("keydown", function (e) {
                    _this.handleKeyDownEvent(e);
                });
                this.setAmount(this.minus ? "-0" : "0");
            };
            Amount.prototype.handleOnInputEvent = function () {
                this._cursorIndex = this.inputElement.selectionEnd; //光标位置
                var str = this.inputElement.value;
                //
                var illegalChars = new Array();
                var valueCache = new Array();
                for (var i = 0; i < str.length; i++) {
                    var char = str.charAt(i);
                    valueCache.push(char);
                    if (!/^[0-9]*$/.test(char)) {
                        if (char == "." || char == "-" || char == ",")
                            continue;
                        illegalChars.push(char); //缓存输入值中的非法字符
                    }
                }
                if (illegalChars.length > 0) {
                    for (var i = 0; i < valueCache.length; i++) {
                        for (var j = 0; j < illegalChars.length; j++) {
                            if (valueCache[i] == illegalChars[j])
                                valueCache[i] = "x"; //非法字符替换成未知数"x"
                        }
                    }
                }
                var newVal = "";
                for (var i = 0; i < valueCache.length; i++) {
                    if (valueCache[i] != "x")
                        newVal = newVal + valueCache[i]; //过滤掉代表非法字符的未知数“x”
                }
                if (str.indexOf(".") == 0) {
                    str = "0" + str; //如果以小数点开头则整数位补0
                    this.inputElement.value = str;
                    this.inputElement.selectionEnd = 1;
                    return;
                }
                if (str.indexOf("-.") == 0) {
                    //如果以-.开头则整数位补0
                    str = str.substring(0, 1) + "0" + str.substring(1, str.length);
                    this.inputElement.value = str;
                    this.inputElement.selectionEnd = 2;
                    return;
                }
                if (newVal != str) {
                    //过滤非法后的字符串写入文本框
                    str = newVal;
                    this.inputElement.value = str;
                    this.inputElement.selectionEnd = this._cursorIndex - 1;
                    return;
                }
                else {
                    var floatAmt = this.recoverAmount(this.inputElement.value);
                    str = floatAmt + ""; //获得金额场浮点型的金额值
                    if (str.indexOf(".") == -1) {
                        str = str + ".";
                        for (var i = 0; i < this.decimalLen; i++) {
                            str = str + "0"; //没有小数位则补0
                        }
                    }
                    var _decimalLen = this.inputElement.value.substring(this.inputElement.value.indexOf(".") + 1, this.inputElement.value.length).length; //实际上的小数位
                    if (_decimalLen > this.decimalLen) {
                        var cursorRelativePeriod = this._cursorIndex - this.inputElement.value.indexOf(".") - 1; //光标位置相对小数点的坐标
                        if (cursorRelativePeriod > this.decimalLen) {
                            //超过预设的小数位数直接截取
                            var intPart = str.split(".")[0];
                            var decimalPart = this.inputElement.value.split(".")[1];
                            this.setAmount(intPart + "." + decimalPart.substring(0, this.decimalLen));
                            return;
                        }
                        else {
                            //位数不够则用0补位
                            var intPart = str.split(".")[0];
                            var decimalPart = this.inputElement.value.split(".")[1];
                            var justInput = decimalPart.substring(cursorRelativePeriod - 1, cursorRelativePeriod);
                            var strBeforeCursor = decimalPart.substring(0, cursorRelativePeriod - 1);
                            var strAfterCursor = decimalPart.substring(cursorRelativePeriod + 1, str.length);
                            decimalPart = strBeforeCursor + justInput + strAfterCursor;
                            this.setAmount(intPart + "." + decimalPart);
                            return;
                        }
                    }
                    else if (_decimalLen < this.decimalLen) {
                        //实际小数位比金额场预设的小数位小，补0
                        var cursorRelativePeriod = this._cursorIndex - this.inputElement.value.indexOf(".") - 1;
                        var result = str.substring(0, str.indexOf(".") + cursorRelativePeriod + 1)
                            + "0" + this.inputElement.value.substring(this.inputElement.value.indexOf(".") + cursorRelativePeriod + 1, this.inputElement.value.length);
                        this.setAmount(result);
                        return;
                    }
                    else {
                        if (str.indexOf("0") == 0) {
                            str = str.substring(1, str.length);
                            this.setAmount(str);
                            return;
                        }
                        if (str.indexOf("-0") == 0) {
                            //以-0开头，覆盖0的整数位
                            str = "-" + str.substring(2, str.length);
                            str = str.substring(1, str.length);
                            this.setAmount(str);
                            return;
                        }
                        this.setAmount(parseFloat(str).toString());
                    }
                }
            };
            Amount.prototype.handleKeyDownEvent = function (event) {
                if (event.keyCode == hui.Keys.NUMPAD_PERIOD || event.keyCode == 190) {
                    if (this.inputElement.value.indexOf(".") != -1)
                        event.preventDefault();
                }
                if (event.keyCode == hui.Keys.MINUS || event.keyCode == hui.Keys.NUMPAD_MINUS) {
                    if (this.inputElement.value.indexOf("-") != -1)
                        event.preventDefault();
                }
                if (event.keyCode == hui.Keys.DELETE || event.keyCode == hui.Keys.BACKSPACE) {
                    if (this.inputElement.selectionEnd == this.inputElement.value.indexOf(".") + 1) {
                        //光标在小数点后，按删除按钮不删除小数点，直接将光标位置移动到个数位
                        this.inputElement.selectionEnd = this.inputElement.value.indexOf(".");
                        event.preventDefault();
                    }
                    if (this.inputElement.selectionEnd == this.inputElement.value.indexOf("-") + 1) {
                        //光标在“-”后，按删除按钮不删除"-"，直接将光标位置移动到个数位
                        event.preventDefault();
                    }
                }
            };
            /**
             * 获得浮点型的金额值
             * @return number 实际为浮点型
            */
            Amount.prototype.getFloatAmt = function () {
                return this.recoverAmount(this.getAmount());
            };
            /**
             * 获得字面上的金额值
             * @return 金额值
            */
            Amount.prototype.getAmount = function () {
                return this.inputElement.value;
            };
            /**
             * 设置金额值
             * @param s 金额值
            */
            Amount.prototype.setAmount = function (s) {
                if (this.minus && s.charAt(0) != "-") {
                    console.error("\u91D1\u989D\u573A" + this.id + ": \u9884\u8BBEminus\u7B26\u53F7\u4E3A\u8D1F\u53F7,\u53EA\u80FD\u8F93\u5165\u8D1F\u6570, \u5F53\u524D\u8BBE\u7F6E\u7684\u503C\u4E3A" + s);
                    return;
                }
                if (!this.minus && s.charAt(0) == "-") {
                    console.error("\u91D1\u989D\u573A" + this.id + ": \u9884\u8BBEminus\u7B26\u53F7\u4E3A\u6B63\u53F7,\u53EA\u80FD\u8F93\u5165\u6B63\u6570, \u5F53\u524D\u8BBE\u7F6E\u7684\u503C\u4E3A" + s);
                    return;
                }
                if (this.minus && s.charAt(0) == "-")
                    s = s.substring(1, s.length);
                var fmtAmt = this.formatAmount(s);
                var result = fmtAmt;
                if (this.minus)
                    result = "-" + fmtAmt;
                if (!this.minus && result.length > this.maxLength) {
                    console.error(this.id + ":\u8D85\u51FA\u6700\u5927\u957F\u5EA6!");
                    return;
                }
                if (this.minus && result.length - 1 > this.maxLength) {
                    console.error(this.id + ":\u8D85\u51FA\u6700\u5927\u957F\u5EA6!");
                    return;
                }
                if (this.oldAmount) {
                    if (this.oldAmount.length > result.length) {
                        //由于使用，分数字位数，逗号将占位置
                        var _oldSeparatorSize = this.getSeparatorSize(this.oldAmount);
                        var _currSeparatorSize = this.getSeparatorSize(result);
                        if (_oldSeparatorSize > _currSeparatorSize) {
                            this._cursorIndex = this._cursorIndex - 1; //重新计算光标位置
                        }
                    }
                    else if (this.oldAmount.length < result.length) {
                        var _oldSeparatorSize = this.getSeparatorSize(this.oldAmount);
                        var _currSeparatorSize = this.getSeparatorSize(result);
                        if (_oldSeparatorSize < _currSeparatorSize) {
                            this._cursorIndex = this._cursorIndex + 1; //重新计算光标位置
                        }
                    }
                    else {
                        if (this.oldAmount == result) {
                            if (!this.minus)
                                this._cursorIndex = this._cursorIndex > 2 ? this._cursorIndex : this._cursorIndex - 1; //重新计算光标位置
                            else
                                this._cursorIndex = this._cursorIndex > 3 ? this._cursorIndex : this._cursorIndex - 1;
                        }
                        if (!this.minus && this.oldAmount.charAt(0) != result.charAt(0))
                            this._cursorIndex = this._cursorIndex - 1; //重新计算光标位置
                        if (this.minus && this.oldAmount.charAt(1) != result.charAt(1))
                            this._cursorIndex = this._cursorIndex - 1; //重新计算光标位置
                    }
                }
                this.inputElement.value = result;
                this.inputElement.selectionEnd = this._cursorIndex;
                this.oldAmount = result;
            };
            Amount.prototype.formatAmount = function (s) {
                var n = this.decimalLen;
                n = n > 0 && n <= 20 ? n : 2;
                s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
                var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
                var t = "";
                for (var i = 0; i < l.length; i++) {
                    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
                }
                return t.split("").reverse().join("") + "." + r;
            };
            Amount.prototype.recoverAmount = function (s) {
                return parseFloat(s.replace(/[^\d\.-]/g, ""));
            };
            Amount.prototype.getSeparatorSize = function (s) {
                var count = 0;
                for (var i = 0; i < s.length; i++) {
                    if (s.charAt(i) == ",")
                        count++;
                }
                return count;
            };
            return Amount;
        }(hui.Widget));
        hui.Amount = Amount;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  WidgetTemplate
 * 描述  :  该类为组件的Html模板库，各组件模板使用多行模板字符串来声明
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var WidgetTemplate = (function () {
            function WidgetTemplate() {
            }
            WidgetTemplate.Alert = "<div class=\"hui-widget-view\">\n                                            <div class='hui-alert-overlay' hui-widget-nodeType=\"OverLayNode\"></div>\n                                            <div class='hui-alert-root'>\n                                                <div class='hui-alert-title' hui-widget-nodeType=\"titleNode\"></div>\n                                                <div class='hui-alert-content' hui-widget-nodeType=\"contentNode\"></div>\n                                                <div class='row hui-alert-bottom' hui-widget-nodeType=\"btnContainerNode\"></div>\n                                            </div>\n                                        </div>";
            WidgetTemplate.Amount = "<input class=\"hui-widget-view\" ime-mode:disabled style='width:100%;text-align:right' hui-widget-nodeType=\"inputNode\"/>";
            WidgetTemplate.DatePicker = "<input class=\"hui-widget-view\" style='text-align: right'/>";
            WidgetTemplate.HandWrittingPanel = "<canvas class=\"hui-HandWrittingPanel-style\"></canvas>";
            WidgetTemplate.OverLay = "<div class=\"hui-widget-view\">\n                                            <div class=\"hui-overlay-style\">\n                                                <div class=\"ui-WattPanel-msgNode\" hui-widget-nodeType=\"msgNode\">\n                                                </div>\n                                            </div>\n                                        </div>";
            WidgetTemplate.PopWindow = "<div class=\"hui-widget-view\">\n                                                <div class='hui-alert-overlay' hui-widget-nodeType=\"OverLayNode\"></div>\n                                            </div>";
            WidgetTemplate.ProcessBar = "<div class='processbar-bar'>\n                                                <div class='processbar-step-handled' hui-widget-nodeType=\"stepBar\"></div>\n                                            </div>";
            WidgetTemplate.WattPanel = "<div class=\"hui-widget-view\">\n                                                <div class=\"hui-overlay-style\"></div>\n                                                <div class=\"ui-WattPanel\">\n                                                      <img src=\"\" class=\"ui-WattPanel-img\"/>\n                                                      <div class=\"ui-WattPanel-msgNode\" hui-widget-nodeType=\"msgNode\"></div>\n                                                </div>\n                                           </div>";
            WidgetTemplate.Select = "<div class=\"hui-widget-view\">\n                                            <input type=\"text\" value=\"--\u8BF7\u9009\u62E9--\" class=\"selOptionInput\" readonly />\n                                            <div class=\"selOptionUlDiv\">\n                                                <ul class=\"li_list\">\n                                                </ul>\n                                            </div>\n                                         </div>";
            WidgetTemplate.LoadingToast = "<div class=\"hui_loading_toast\">\n    <div class=\"hui_mask_transparent\"></div>\n    <div class=\"hui_toast\">\n        <div class=\"hui_loading\">\n            <div class=\"hui_loading_leaf hui_loading_leaf_0\"></div>\n            <div class=\"hui_loading_leaf hui_loading_leaf_1\"></div>\n            <div class=\"hui_loading_leaf hui_loading_leaf_2\"></div>\n            <div class=\"hui_loading_leaf hui_loading_leaf_3\"></div>\n            <div class=\"hui_loading_leaf hui_loading_leaf_4\"></div>\n            <div class=\"hui_loading_leaf hui_loading_leaf_5\"></div>\n            <div class=\"hui_loading_leaf hui_loading_leaf_6\"></div>\n            <div class=\"hui_loading_leaf hui_loading_leaf_7\"></div>\n            <div class=\"hui_loading_leaf hui_loading_leaf_8\"></div>\n            <div class=\"hui_loading_leaf hui_loading_leaf_9\"></div>\n            <div class=\"hui_loading_leaf hui_loading_leaf_10\"></div>\n            <div class=\"hui_loading_leaf hui_loading_leaf_11\"></div>\n        </div>\n        <p class=\"hui_toast_content\" hui-widget-nodeType=\"showMsg\"></p>\n    </div>\n</div>";
            return WidgetTemplate;
        }());
        hui.WidgetTemplate = WidgetTemplate;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  HuiLoader
 * 描述  :  加载Widget扩展点，加载全局组件
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 5:02:08 PM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="Global.ts" />
///<reference path="../widget/base/WidgetExtension.ts" />
///<reference path="../widget/base/Widget.ts" />
///<reference path="../widget/impl/alert/Alert.ts" />
///<reference path="../widget/impl/popwindow/PopWindow.ts" />
///<reference path="../widget/impl/wattpanel/WattPanel.ts" />
///<reference path="../widget/impl/handwritingpanel/HandWritingPanel.ts" />
///<reference path="../widget/impl/overlay/OverLay.ts" />
///<reference path="../widget/impl/processbar/ProcessBar.ts" />
///<reference path="../widget/impl/datepicker/DatePicker.ts" />
///<reference path="../widget/impl/amount/Amount.ts" />
///<reference path="../widget/base/WidgetTemplate.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var HuiLoader = (function () {
            function HuiLoader() {
            }
            /**
             * hui加载器加载
            */
            HuiLoader.load = function (callbackfn) {
                this.loadWidgetExtension();
                this.loadValidator();
                this.mountGlobal();
                if (callbackfn)
                    callbackfn();
            };
            /**
             * 加载校验器
            */
            HuiLoader.loadValidator = function () {
                hui.ValidatorManager.register(new hui.IdCardValidator());
                hui.ValidatorManager.register(new hui.TelephoneValidator());
                hui.ValidatorManager.register(new hui.PhoneValidator());
                hui.ValidatorManager.register(new hui.NumberValidator());
                hui.ValidatorManager.register(new hui.NumberOrLetterValidator());
                hui.ValidatorManager.register(new hui.EmailValidator());
                hui.ValidatorManager.register(new hui.LetterValidator());
            };
            /**
             * 加载组件扩展点
            */
            HuiLoader.loadWidgetExtension = function () {
                hui.WidgetExtension.bind("btop.hui.Alert", hui.WidgetTemplate.Alert);
                hui.WidgetExtension.bind("btop.hui.PopWindow", hui.WidgetTemplate.PopWindow);
                hui.WidgetExtension.bind("btop.hui.WattPanel", hui.WidgetTemplate.WattPanel);
                hui.WidgetExtension.bind("btop.hui.HandWritingPanel", hui.WidgetTemplate.HandWrittingPanel);
                hui.WidgetExtension.bind("btop.hui.OverLay", hui.WidgetTemplate.OverLay);
                hui.WidgetExtension.bind("btop.hui.ProcessBar", hui.WidgetTemplate.ProcessBar);
                hui.WidgetExtension.bind("btop.hui.DatePicker", hui.WidgetTemplate.DatePicker);
                hui.WidgetExtension.bind("btop.hui.Amount", hui.WidgetTemplate.Amount);
                hui.WidgetExtension.bind("btop.hui.Select", hui.WidgetTemplate.Select);
                hui.WidgetExtension.bind("btop.hui.LoadingToast", hui.WidgetTemplate.LoadingToast);
            };
            /**
             * 挂载全局的实例或者监听器或者数据
            */
            HuiLoader.mountGlobal = function () {
                var _super_root_ = document.getElementById("_super_root_") ? $("#_super_root_") : $("<div id=\"_super_root_\">").appendTo(document.body);
                var _global_Alert = "hui_global_Alert";
                var _global_PopWindow = "hui_global_PopWindow";
                var _global_OverLay = "hui_global_OverLay";
                var _global_WattPanel = "hui_global_WattPanel";
                var _global_LoadingToast = "hui_global_LoadingToast";
                $("<div id='" + _global_PopWindow + "' hui-widget-type = 'btop.hui.PopWindow'>").addClass("hui-fullScreen").appendTo(_super_root_);
                $("<div id='" + _global_OverLay + "' hui-widget-type = 'btop.hui.OverLay'>").addClass("hui-fullScreen").appendTo(_super_root_);
                $("<div id='" + _global_WattPanel + "' hui-widget-type = 'btop.hui.WattPanel'>").addClass("hui-fullScreen").appendTo(_super_root_);
                $("<div id='" + _global_Alert + "' hui-widget-type = 'btop.hui.Alert'>").addClass("hui-fullScreen").appendTo(_super_root_);
                $("<div id='" + _global_LoadingToast + "' hui-widget-type = 'btop.hui.LoadingToast'>").addClass("hui-fullScreen").appendTo(_super_root_);
                hui.HuiParser.parse(_super_root_[0]);
                hui.Global.OverLay = hui.WidgetManager.byId(_global_OverLay);
                hui.Global.Alert = hui.WidgetManager.byId(_global_Alert);
                hui.Global.PopWindow = hui.WidgetManager.byId(_global_PopWindow);
                hui.Global.WattPanel = hui.WidgetManager.byId(_global_WattPanel);
                hui.Global.LoadingToast = hui.WidgetManager.byId(_global_LoadingToast);
                window.addEventListener(hui.EventType[hui.EventType.hashchange], function (e) {
                    hui.EventHub.fireEvent(hui.EventType.hashchange);
                });
                hui.EventHub.addListener(hui.EventType.hashchange, new hui.HashListener());
                hui.EventHub.fireEvent(hui.EventType.hashchange);
                document.addEventListener('click', function () {
                    hui.EventHub.fireEvent(hui.EventType.clientActive);
                });
                document.addEventListener('keydown', function () {
                    hui.EventHub.fireEvent(hui.EventType.clientActive);
                });
                hui.EventHub.fireEvent(hui.EventType.clientActive);
                hui.EventHub.addListener(hui.EventType.clientActive, new hui.ClientListener());
                hui.EventHub.fireEvent(hui.EventType.clientActive);
                var screenListener = new hui.ScreenListener();
                hui.EventHub.addListener(hui.EventType.screenOn, screenListener);
                hui.EventHub.addListener(hui.EventType.screenOff, screenListener);
            };
            return HuiLoader;
        }());
        hui.HuiLoader = HuiLoader;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Layout
 * 描述  :  该类是所有布局类的基类
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
/************************************************************************
 * 类名  :  HeaderFooterLayout
 * 描述  :  该布局类将一个块级元素分成了上中下三个部分
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="Layout.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var HeaderFooterLayout = (function () {
            function HeaderFooterLayout(containerElement, layoutData) {
                this.containerElement = containerElement;
                this.layoutData = layoutData;
            }
            HeaderFooterLayout.prototype.doLayout = function () {
                var _this = this;
                $(_this.containerElement).children().each(function (i) {
                    if (i == 0)
                        $(this).addClass("hui-layout-topRegion")
                            .css({ height: _this.layoutData.topHeight });
                    if (i == 1)
                        $(this).addClass("hui-layout-midRegion")
                            .css({ top: _this.layoutData.topHeight, height: _this.layoutData.midHeight });
                    if (i == 2)
                        $(this).addClass("hui-layout-bottomRegion")
                            .css({ height: _this.layoutData.bottomHeight });
                });
            };
            return HeaderFooterLayout;
        }());
        hui.HeaderFooterLayout = HeaderFooterLayout;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  LayoutData
 * 描述  :  该类是所有布局数据的基类
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
/************************************************************************
 * 类名  :  HeaderFooterLayoutData
 * 描述  :  该类为HeaderFooterLayout布局类封装数据
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="LayoutData.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var HeaderFooterLayoutData = (function () {
            function HeaderFooterLayoutData(topHeight, midHeight, bottomHeight) {
                if (topHeight === void 0) { topHeight = "10%"; }
                if (midHeight === void 0) { midHeight = "75%"; }
                if (bottomHeight === void 0) { bottomHeight = "15%"; }
                this.topHeight = topHeight;
                this.midHeight = midHeight;
                this.bottomHeight = bottomHeight;
            }
            return HeaderFooterLayoutData;
        }());
        hui.HeaderFooterLayoutData = HeaderFooterLayoutData;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  FillLayout
 * 描述  :  填充布局
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="Layout.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var FillLayout = (function () {
            function FillLayout(containerElement, layoutData) {
                this.containerElement = containerElement;
                this.layoutData = layoutData;
            }
            FillLayout.prototype.doLayout = function () {
                var _this = this;
                $(_this.containerElement).children().each(function (i) {
                    if (i == 0)
                        $(this).css({ width: "100%", height: "100%" });
                });
            };
            return FillLayout;
        }());
        hui.FillLayout = FillLayout;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  FillLayoutData
 * 描述  :  为FillLayout封装的数据
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="LayoutData.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var FillLayoutData = (function () {
            function FillLayoutData() {
            }
            return FillLayoutData;
        }());
        hui.FillLayoutData = FillLayoutData;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  SashLayout
 * 描述  :  该类将一个块级元素分为左右两个区域
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="Layout.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var SashLayout = (function () {
            function SashLayout(containerElement, layoutData) {
                this.containerElement = containerElement;
                this.layoutData = layoutData;
            }
            SashLayout.prototype.doLayout = function () {
                var _this = this;
                $(_this.containerElement).children().each(function (i) {
                    if (i == 0)
                        $(this).addClass("hui-layout-leftRegion")
                            .css({ width: _this.layoutData.leftWidth });
                    if (i == 1)
                        $(this).addClass("hui-layout-rightRegion")
                            .css({ width: _this.layoutData.rightWidth });
                });
            };
            return SashLayout;
        }());
        hui.SashLayout = SashLayout;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  SashLayoutData
 * 描述  :  该类为SashLayout布局类封装数据
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="LayoutData.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var SashLayoutData = (function () {
            function SashLayoutData(leftWidth, rightWidth) {
                if (leftWidth === void 0) { leftWidth = "25%"; }
                if (rightWidth === void 0) { rightWidth = "75%"; }
                this.leftWidth = leftWidth;
                this.rightWidth = rightWidth;
            }
            return SashLayoutData;
        }());
        hui.SashLayoutData = SashLayoutData;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  RowLayout
 * 描述  :  该类提供行的布局方式
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="Layout.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var RowLayout = (function () {
            function RowLayout(containerElement, layoutData) {
                this.containerElement = containerElement;
                this.layoutData = layoutData;
            }
            RowLayout.prototype.doLayout = function () {
                var _this = this;
                $(_this.containerElement).children().each(function (i) {
                    $(this).addClass("row");
                });
            };
            return RowLayout;
        }());
        hui.RowLayout = RowLayout;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  RowLayoutData
 * 描述  :  该类为RowLayout提供数据
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="LayoutData.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var RowLayoutData = (function () {
            function RowLayoutData() {
            }
            return RowLayoutData;
        }());
        hui.RowLayoutData = RowLayoutData;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  HuiParser
 * 描述  :  该类用于解析自定义html中自定义属性，并且创建相应的组件或者布局
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="../widget/impl/layout/HeaderFooterLayout.ts" />
///<reference path="../widget/impl/layout/HeaderFooterLayoutData.ts" />
///<reference path="../widget/impl/layout/FillLayout.ts" />
///<reference path="../widget/impl/layout/FillLayoutData.ts" />
///<reference path="../widget/impl/layout/SashLayout.ts" />
///<reference path="../widget/impl/layout/SashLayoutData.ts" />
///<reference path="../widget/impl/layout/RowLayout.ts" />
///<reference path="../widget/impl/layout/RowLayoutData.ts" />
///<reference path="../widget/base/Widget.ts" />
///<reference path="../widget/base/WidgetExtension.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var HuiParser = (function () {
            function HuiParser() {
            }
            /**
             * 解析 hui-widget-attr
            */
            HuiParser.parseHuiAttr = function (jQueryNode, attrType) {
                var attributeString = jQueryNode.attr(attrType);
                if (attributeString == null
                    || attributeString == undefined
                    || attributeString == "")
                    return null;
                return JSON.parse(attributeString);
            };
            /**
             * 解析hui-widget-layout
            */
            HuiParser.parseLayout = function (root) {
                $(root).find("div[hui-layout-type='HeaderFooterLayout']").each(function () {
                    var attributes = HuiParser.parseHuiAttr($(this), "hui-layout-attr");
                    if (attributes != null || attributes != undefined) {
                        var heights = attributes.heights;
                        new hui.HeaderFooterLayout($(this)[0], new hui.HeaderFooterLayoutData(heights[0], heights[1], heights[2])).doLayout();
                        $(this).removeAttr("hui-layout-type").removeAttr("hui-layout-attr");
                    }
                    else {
                        new hui.HeaderFooterLayout($(this)[0], new hui.HeaderFooterLayoutData()).doLayout();
                        $(this).removeAttr("hui-layout-type").removeAttr("hui-layout-attr");
                    }
                });
                $(root).find("div[hui-layout-type='SashLayout']").each(function () {
                    var attributes = HuiParser.parseHuiAttr($(this), "hui-layout-attr");
                    if (attributes != null || attributes != undefined) {
                        new hui.SashLayout($(this)[0], new hui.SashLayoutData(attributes[0], attributes[1])).doLayout();
                        $(this).removeAttr("hui-layout-type").removeAttr("hui-layout-attr");
                    }
                    else {
                        new hui.SashLayout($(this)[0], new hui.SashLayoutData()).doLayout();
                        $(this).removeAttr("hui-layout-type").removeAttr("hui-layout-attr");
                    }
                });
                $(root).find("div[hui-layout-type='FillLayout']").each(function () {
                    new hui.FillLayout($(this)[0], new hui.FillLayoutData()).doLayout();
                    $(this).removeAttr("hui-layout-type").removeAttr("hui-layout-attr");
                });
                $(root).find("div[hui-layout-type='RowLayout']").each(function () {
                    new hui.RowLayout($(this)[0], new hui.RowLayoutData()).doLayout();
                    $(this).removeAttr("hui-layout-type").removeAttr("hui-layout-attr");
                });
            };
            /**
             * 解析hui-widget-type
            */
            HuiParser.parseWidget = function (root, parentId) {
                var widgetTypes = hui.WidgetExtension.getWidgetTypes();
                for (var i = 0; i < widgetTypes.length; i++) {
                    var _this = this;
                    $(root).find("div[hui-widget-type=\"" + widgetTypes[i] + "\"]").each(function () {
                        var data = _this.parseHuiAttr($(this), "hui-widget-attr");
                        if ($(this).attr("id")) {
                            hui.WidgetManager.addCreateTask(new hui.Task(widgetTypes[i], $(this).attr("id"), data, parentId));
                        }
                        else {
                            console.error("HuiParser: \u672A\u5411div[hui-widget-type=\"" + widgetTypes[i] + "\"]\u6307\u5B9Aid,widget\u5B9E\u4F8B\u521B\u5EFA\u5931\u8D25!!!");
                        }
                    });
                }
            };
            /**
             * 解析页面上hui-*的数据, hui-widget-nodeType除外
            */
            HuiParser.parse = function (root, parentId) {
                this.parseLayout(root);
                this.parseWidget(root, parentId);
            };
            return HuiParser;
        }());
        hui.HuiParser = HuiParser;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        /**
         * 将外壳注入的NativeService对象二次封装
        */
        var Native = (function () {
            function Native() {
            }
            Native.getDefaultAudioRootPath = function () {
                return Native.ROOT_WORKSPACE + "/" + Native.MEDIA_ROOT_DIR + "/" + Native.AUDIO_ROOT_DIR;
            };
            Native.getDefaultVideoRootPath = function () {
                return Native.ROOT_WORKSPACE + "/" + Native.MEDIA_ROOT_DIR + "/" + Native.VEDIO_ROOT_DIR;
            };
            Native.getDefaultImageRootPath = function () {
                return Native.ROOT_WORKSPACE + "/" + Native.MEDIA_ROOT_DIR + "/" + Native.IMAGE_ROOT_DIR;
            };
            Native.createAudioPath = function (fileName) {
                return Native.getDefaultAudioRootPath() + "/" + fileName + Native.DEFAULT_AUDIO_SUFFIX;
            };
            Native.createVideoPath = function (fileName) {
                return Native.getDefaultVideoRootPath() + "/" + fileName + Native.DEFAULT_VIDEO_SUFFIX;
            };
            Native.createImagePath = function (fileName) {
                return Native.getDefaultImageRootPath() + "/" + fileName + Native.DEFAULT_IMAGE_SUFFIX;
            };
            /**
            * 同步调用外壳封装的NativeService,如要获取网络连接状态，则需要调用网络服务的获取连接状态的函数，该函数
            * java的写法是:NetWorkService.getConnectedState()
            * js的调用这个java类函数的写法应该为:btop.hui.Native.syncCall("NetWorkService","getConnectedState",[])
            * @params service 如 NetWorkService
            * @params service中的的方法名 如:NativeService.getConnectedState(), "getConnectedState"则是方法名
            * @params 数组类型,代表要传入的参数，如果没有参数传入写成[],如果有参数传入写成如:[1,false,"msg",0.3]
            *
            *
            *
            *java接口:
            *
            *	//AppService
            *	AppService.getAppName();								=> Native.syncCall("AppService","getAppName",[])
            *	AppService.getAppVersionCode();
            *	AppService.getAppVersionName();
            *	AppService.getLocalIP();
            *	AppService.getLocalMac();
            *	AppService.getLocalMacFromFile();
            *	AppService.getLocalMacFromIP();
            *	AppService.getScreenState();
            *
            *	//StringService
            *	StringService.decrypt(String value);					=>Native.syncCall("StringService","decrypt",["test"])
            *	StringService.encrypt(String value);
            *
            *	//NetWorkService
            *	NetWorkService.getConnectedState();
            *
            *	//MediaService
            *	MediaService.startRecordAudio(Integer maxDuration);		=>Native.syncCall("MediaService","startRecordAudio",[60])
            *	MediaService.stopRecordAudio();
            *
            *	//GPSService
            *	GPSService.getLocationInfo();
            *
            *
            */
            Native.invoke = function (service, methodName, params, callbackfn) {
                if (callbackfn) {
                    Native.asyncCall(service, methodName, params, callbackfn);
                    return undefined;
                }
                else {
                    return Native.syncCall(service, methodName, params);
                }
            };
            Native.syncCall = function (service, methodName, params) {
                var returnValue = NativeService.syncCallService(service, methodName, JSON.stringify({ args: params }));
                var _result = JSON.parse(returnValue);
                if (!_result.success) {
                    console.error(service + "\u7C7B" + methodName + "\u51FD\u6570\u8C03\u7528\u5931\u8D25,error: " + _result.error);
                    return undefined;
                }
                else {
                    return _result.result;
                }
            };
            Native.asyncCall = function (service, methodName, params, callbackfn) {
                var callId = "asyncCall_" + hui.UUID.generate();
                hui.EP.on(callId, function (dataFromJAVA) {
                    //异步调用外设service不自动销毁callback
                    if (Native.ignoreDeleteCallbackService.indexOf(service) == -1) {
                        hui.EP.remove(callId, this);
                    }
                    var success = dataFromJAVA.success;
                    delete dataFromJAVA.success;
                    var error = dataFromJAVA.error;
                    delete dataFromJAVA.error;
                    callbackfn(success, error, dataFromJAVA);
                });
                params.push(callId);
                NativeService.asyncCallService(service, methodName, JSON.stringify({ args: params }));
            };
            Native.DEFAULT_AUDIO_SUFFIX = ".mp3";
            Native.DEFAULT_VIDEO_SUFFIX = ".mp4";
            Native.DEFAULT_IMAGE_SUFFIX = ".jpg";
            Native.ROOT_WORKSPACE = "Android/data/cn.com.bankit.crosswalksample/version";
            Native.MEDIA_ROOT_DIR = "media_app";
            Native.AUDIO_ROOT_DIR = "audio";
            Native.VEDIO_ROOT_DIR = "video";
            Native.IMAGE_ROOT_DIR = "image";
            Native.SEPARATOR = "/";
            Native.ignoreDeleteCallbackService = new Array();
            return Native;
        }());
        hui.Native = Native;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  WinShell
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  3/17/2016 10:35:19 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var WinShell = (function () {
            function WinShell() {
            }
            WinShell.callDevice = function (deviceId, funcName, args, doSuccess, doError) {
                if (NativeService) {
                    var callback = function (jsonData) {
                        var jsonObj = JSON.parse(jsonData);
                        var successVal = jsonObj.success;
                        var errorVal = jsonObj.error;
                        var resultVal = JSON.parse(jsonObj.result);
                        var data = { success: successVal, error: errorVal, result: resultVal };
                        if (successVal)
                            doSuccess(resultVal);
                        else {
                            if (!doError)
                                doError(errorVal);
                            else
                                hui.Global.Alert.showMsg(errorVal, "外设调用错误");
                        }
                    };
                    NativeService.callDevice(deviceId, funcName, JSON.stringify(args), callback);
                }
                else {
                    $.ajax({
                        type: "get",
                        url: "http://127.0.0.1:12315/callDevice",
                        data: {
                            deviceId: deviceId,
                            funcName: funcName,
                            args: JSON.stringify(args)
                        },
                        success: function (data) {
                            doSuccess(data);
                        }
                    });
                }
            };
            return WinShell;
        }());
        hui.WinShell = WinShell;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  OOUtils
 * 描述  :
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  4/1/2016 10:13:02 AM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
///<reference path="../../libs/jQuery.d.ts"/>
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var OOUtils = (function () {
            function OOUtils() {
            }
            /**
             * 用 defaults 对象里的默认值来填充 object
               对象里遗漏的属性值, 并返回 object 对象.
               当属性值已被填充遗漏, 再添加属性值就没用了.  只有一层
             * @param obj
             * @returns {*}
             */
            OOUtils.defaults = function (obj /* , *defaults */) {
                if (!(obj && typeof obj == "object"))
                    return obj;
                for (var i = 1, length = arguments.length; i < length; i++) {
                    var source = arguments[i];
                    for (var prop in source) {
                        if (obj[prop] === void 0)
                            obj[prop] = source[prop];
                    }
                }
                return obj;
            };
            return OOUtils;
        }());
        hui.OOUtils = OOUtils;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  TimeStampCreator
 * 描述  :  创建时间戳
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var TimeStampCreator = (function () {
            function TimeStampCreator() {
            }
            TimeStampCreator.createStamp = function () {
                return "_" + new Date().getTime();
            };
            return TimeStampCreator;
        }());
        hui.TimeStampCreator = TimeStampCreator;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  UUID
 * 描述  :  生成UUID
 * 版本  :  v1.0
 * 作者  :  luo
 * 时间  :  3/16/2016
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var UUID = (function () {
            function UUID() {
            }
            UUID.generate = function () {
                // Loose interpretation of the specification DCE 1.1: Remote Procedure Call
                // since JavaScript doesn't allow access to internal systems, the last 48 bits
                // of the node section is made up using a series of random numbers (6 octets long).
                var dg = new Date(1582, 10, 15, 0, 0, 0, 0);
                var dc = new Date();
                var t = dc.getTime() - dg.getTime();
                var tl = this.getIntegerBits(t, 0, 31);
                var tm = this.getIntegerBits(t, 32, 47);
                var thv = this.getIntegerBits(t, 48, 59) + '1'; // version 1, security version is 2
                var csar = this.getIntegerBits(this.rand(4095), 0, 7);
                var csl = this.getIntegerBits(this.rand(4095), 0, 7);
                // since detection of anything about the machine/browser is far to buggy,
                // include some more random numbers here
                // if NIC or an IP can be obtained reliably, that should be put in
                // here instead.
                var n = this.getIntegerBits(this.rand(8191), 0, 7) +
                    this.getIntegerBits(this.rand(8191), 8, 15) +
                    this.getIntegerBits(this.rand(8191), 0, 7) +
                    this.getIntegerBits(this.rand(8191), 8, 15) +
                    this.getIntegerBits(this.rand(8191), 0, 15); // this last number is two octets long
                return "" + tl + tm + thv + csar + csl + n;
            };
            UUID.getIntegerBits = function (val, start, end) {
                var base16 = this.returnBase(val, 16);
                var quadArray = new Array();
                var quadString = '';
                var i = 0;
                for (i = 0; i < base16.length; i++) {
                    quadArray.push(base16.substring(i, i + 1));
                }
                for (i = Math.floor(start / 4); i <= Math.floor(end / 4); i++) {
                    if (!quadArray[i] || quadArray[i] == '')
                        quadString += '0';
                    else
                        quadString += quadArray[i];
                }
                return quadString;
            };
            UUID.returnBase = function (number, base) {
                return number.toString(base).toUpperCase();
            };
            UUID.rand = function (max) {
                return Math.floor(Math.random() * (max + 1));
            };
            return UUID;
        }());
        hui.UUID = UUID;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  WebStorage
 * 描述  :  本地存储常用方法
 * 版本  :  v1.0
 * 作者  :  luo
 * 时间  :  5/16/2016
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var WebStorage = (function () {
            function WebStorage() {
            }
            // 本地存储LocalStorage
            WebStorage.setLocalStor = function (key, value) {
                if (key == "" || key.replace(" ", "").length == 0) {
                    return;
                }
                if (typeof value === "object") {
                    localStorage.setItem(key, JSON.stringify(value));
                }
                else {
                    localStorage.setItem(key, value);
                }
            };
            WebStorage.getLocalStor = function (key, isJSON) {
                if (key == "" || key.replace(" ", "").length == 0) {
                    return;
                }
                var str = localStorage.getItem(key);
                if (!!str && isJSON) {
                    return JSON.parse(str);
                }
                return str;
            };
            WebStorage.removeLocalStor = function (key) {
                if (key == "" || key.replace(" ", "").length == 0) {
                    return;
                }
                localStorage.removeItem(key);
            };
            WebStorage.clearLocalStor = function () {
                localStorage.clear();
            };
            // 会话存储SessionStorage
            WebStorage.setSessStor = function (key, value) {
                if (key == "" || key.replace(" ", "").length == 0) {
                    return;
                }
                if (typeof value === "object") {
                    sessionStorage.setItem(key, JSON.stringify(value));
                }
                else {
                    sessionStorage.setItem(key, value);
                }
            };
            WebStorage.getSessStor = function (key, isJSON) {
                if (key == "" || key.replace(" ", "").length == 0) {
                    return;
                }
                var str = sessionStorage.getItem(key);
                if (!!str && isJSON) {
                    return JSON.parse(str);
                }
                return str;
            };
            WebStorage.removeSessStor = function (key) {
                if (key == "" || key.replace(" ", "").length == 0) {
                    return;
                }
                sessionStorage.removeItem(key);
            };
            WebStorage.clearSessStor = function () {
                sessionStorage.clear();
            };
            return WebStorage;
        }());
        hui.WebStorage = WebStorage;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var LoadingToast = (function (_super) {
            __extends(LoadingToast, _super);
            function LoadingToast() {
                _super.apply(this, arguments);
            }
            LoadingToast.prototype.initView = function () {
                this.hide();
                this.showMsgNode = this.nodeTypeMap.get("showMsg");
            };
            LoadingToast.prototype.hide = function () {
                this.visible = false;
            };
            LoadingToast.prototype.show = function (msg) {
                this.showMsgNode.innerHTML = msg;
                this.visible = true;
            };
            return LoadingToast;
        }(hui.Widget));
        hui.LoadingToast = LoadingToast;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Container
 * 描述  :  容器类
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  2/4/2016 9:19:47 AM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="../../base/Widget.ts" />
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var Container = (function (_super) {
            __extends(Container, _super);
            function Container() {
                _super.apply(this, arguments);
                this.children = new Array();
            }
            /**
             * 增加一个孩子
             * @child Widget类型，孩子组件
            */
            Container.prototype.addChild = function (child) {
                this.children.push(child);
            };
            /**
             * @Override 重写父类销毁函数
            */
            Container.prototype.destroy = function () {
                //释放孩子然后在父节点移除自身
                while (this.children.length != 0) {
                    this.children.shift().destroy();
                }
                if (this.parent)
                    this.parent.removeChild(this);
                _super.prototype.destroy.call(this);
            };
            Container.prototype.removeChild = function (child) {
                var index = this.children.indexOf(child);
                if (index != -1)
                    this.children.splice(index, 1);
            };
            Container.prototype.getChildren = function () {
                return this.children;
            };
            return Container;
        }(hui.Widget));
        hui.Container = Container;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Page
 * 描述  :  页容器组件
 * 版本  :  v1.0
 * 作者  :  liu.shuai
 * 时间  :  3/8/2016 4:02:48 PM
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
///<reference path="../container/Container.ts"/>
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var UIEntry = (function () {
            function UIEntry(target, attrNames) {
                this.target = target;
                this.attrNames = attrNames;
            }
            UIEntry.prototype.getTargetNode = function () {
                return this.target;
            };
            UIEntry.prototype.getAttrName = function () {
                return this.attrNames;
            };
            return UIEntry;
        }());
        hui.UIEntry = UIEntry;
        var UIModel = (function () {
            function UIModel() {
                var _this = this;
                this.mutationObserver = new MutationObserver(function (mutations, observer) {
                    for (var i = 0; i < mutations.length; i++) {
                        var mutation = mutations[i];
                        _this[mutation.type] = mutation.target[mutation.type];
                        console.info(_this[mutation.type]);
                    }
                });
            }
            UIModel.prototype.bind = function (key, entry) {
                var target = entry.getTargetNode();
                var attrName = entry.getAttrName();
                var options = {
                    attributes: true,
                    attributeOldValue: true,
                    attributeFilter: [attrName]
                };
                if (target instanceof HTMLInputElement) {
                    target.addEventListener("input", function (e) {
                        target.setAttribute("value", target.value);
                    });
                }
                this.mutationObserver.observe(entry.getTargetNode(), options);
                return this;
            };
            return UIModel;
        }());
        hui.UIModel = UIModel;
        var Page = (function (_super) {
            __extends(Page, _super);
            function Page() {
                _super.apply(this, arguments);
                this.suspended = false;
            }
            Page.prototype.init = function (attachElementId, template, widgetType, data) {
                this.attachElementId = attachElementId;
                this.template = template;
                this.widgetType = widgetType;
                if (!this.attachElementId)
                    return;
                this.attachElement = $("#" + this.attachElementId)[0];
                if (this.template)
                    this.domNode = $(this.template)[0];
                else
                    this.domNode = this.attachElement;
                if ($(this.attachElement).attr("hui-widget-type"))
                    this._id = this.attachElement.id;
                else
                    this._id = this.domNode.id ? this.domNode.id : $(this.domNode).attr("id", this.widgetType).attr("id");
                if (!hui.WidgetManager.byId(this._id)) {
                    this.nodeTypeMap = this.parseWidgetNodeType(this.domNode);
                    $(this.domNode).appendTo($(this.attachElement));
                    this.data = data ? data : this.data;
                    hui.WidgetManager.register(this);
                    hui.PageManager.currPage = this;
                }
                this.visible = false;
            };
            /**
             * 通知改组件调用initView函数
            */
            Page.prototype.notifyInit = function () {
                $(this.domNode).removeClass("flyInAnimEnd");
                $(this.domNode).addClass("flyInAnim");
                this.visible = true;
                var _this = this;
                $(_this.domNode).addClass("flyInTransision");
                $(_this.domNode).addClass("flyInAnimEnd");
                $(_this.domNode).removeClass("flyInAnim");
                this.initView();
            };
            Page.prototype.getUIModel = function () {
                return this.uiModel ? this.uiModel : this.uiModel = new UIModel();
            };
            Object.defineProperty(Page.prototype, "suspend", {
                /**
                 * 该组件是否挂起
                */
                get: function () {
                    return this.suspended;
                },
                /**
                 * 设置是否挂起该组件
                 * @params isSuspend 是否要挂起 false 不挂起, true 挂起
                */
                set: function (isSuspend) {
                    if (isSuspend) {
                        this.suspended = true;
                        this.visible = false;
                    }
                    else {
                        this.suspended = false;
                        this.visible = true;
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 导航到id为pageId的页组件,同时销毁该页面,如果该组件有子组件嵌套的话，则不销毁该组件
             * @deprecated 不建议调用，请使用PageManager.to函数
             * @params pageId 要跳转到的页的id
             * @params args 数据 可选
            */
            Page.prototype.navigateTo = function (pageId, args) {
                if (this.suspend)
                    this.suspend = false;
                this.open(pageId, null, Page.CLOSE, args);
            };
            /**
             * @deprecated 不建议调用, 请使用PageManager.suspendTo函数
             * 跳转到pageId的页面, 同时挂起当前交易，就好像在一个标签容器里面隐藏了当前标签，同时打开下一个标签
            */
            Page.prototype.navigateToAndSuspend = function (pageId, args) {
                this.open(pageId, null, Page.SUSPEND, args);
            };
            /**
             * @deprecated 不建议调用, 请使用PageManager.embedTo函数
             * 将pageId的页面嵌入toElementId代表的dom节点上
             * @params pageId 页的id
             * @params toElementId 要嵌入到的dom节点的id
            */
            Page.prototype.navigateToAndEmbed = function (pageId, toElementId, args) {
                this.open(pageId, toElementId, Page.EMBED, args);
            };
            /**
             * @deprecated
             * 打开pageId所制定的页
            */
            Page.prototype.open = function (pageId, toElementId, operation, data) {
                var task = null;
                switch (operation) {
                    case Page.SUSPEND:
                        this.suspend = true;
                        if (!toElementId)
                            window.location.hash = "#!" + pageId;
                        task = new hui.Task(pageId, toElementId, data);
                        break;
                    case Page.CLOSE:
                        if (!toElementId)
                            window.location.hash = "#!" + pageId;
                        task = new hui.Task(pageId, toElementId, data);
                        break;
                    default:
                        this.suspended = true;
                        task = new hui.Task(pageId, toElementId, data, this.id);
                        break;
                }
                hui.WidgetManager.addCreateTask(task);
            };
            Page.SUSPEND = 0x01;
            Page.CLOSE = 0x02;
            Page.EMBED = 0x03;
            return Page;
        }(hui.Container));
        hui.Page = Page;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
/************************************************************************
* 类名  :  SPCManager
* 描述  :
* 版本  :  v1.0
* 作者  :  liu.shuai
* 时间  :  3/8/2016 3:39:48 PM
************************************************************************
* Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        var PageManager = (function () {
            function PageManager() {
            }
            Object.defineProperty(PageManager, "currPage", {
                /**
                 * 获取当前页
                 * @return Page类型
                */
                get: function () {
                    return this._currPage;
                },
                /**
                 * 设置当前页
                 * @params page Page实例
                */
                set: function (page) {
                    this._currPage = page;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 跳转到pageId指定的页面
             * @params pageId 页的id
             * @params args 可选
            */
            PageManager.to = function (pageId, args) {
                if (this.currPage.suspend)
                    this.currPage.suspend = false;
                this.open(pageId, null, hui.Page.CLOSE, args);
            };
            /**
             * 挂起当前页并且跳转到pageId指定的页
             * @params pageId 页的id
             * @params args 可选
            */
            PageManager.suspendTo = function (pageId, args) {
                this.open(pageId, null, hui.Page.SUSPEND, args);
            };
            /**
             * 将Pageid指定的页嵌入到toElementid对应的dom节点上
             * @params pageid 页的id
             * @params toElementId dom节点的id
            */
            PageManager.embedTo = function (pageId, toElementId, args) {
                this.open(pageId, toElementId, hui.Page.EMBED, args);
            };
            PageManager.open = function (pageId, toElementId, operation, data) {
                var task = null;
                switch (operation) {
                    case hui.Page.SUSPEND:
                        this.currPage.suspend = true;
                        if (!toElementId)
                            window.location.hash = "#!" + pageId;
                        task = new hui.Task(pageId, toElementId, data);
                        break;
                    case hui.Page.CLOSE:
                        if (!toElementId)
                            window.location.hash = "#!" + pageId;
                        task = new hui.Task(pageId, toElementId, data);
                        break;
                    default:
                        this.currPage.suspended = true;
                        task = new hui.Task(pageId, toElementId, data, this.currPage.id);
                        break;
                }
                hui.WidgetManager.addCreateTask(task);
            };
            return PageManager;
        }());
        hui.PageManager = PageManager;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
var btop;
(function (btop) {
    var hui;
    (function (hui) {
        (function (ValidatorType) {
            ValidatorType[ValidatorType["Email"] = 1] = "Email";
            ValidatorType[ValidatorType["Telephone"] = 2] = "Telephone";
            ValidatorType[ValidatorType["Phone"] = 3] = "Phone";
            ValidatorType[ValidatorType["IdCard"] = 4] = "IdCard";
            ValidatorType[ValidatorType["Number"] = 5] = "Number";
            ValidatorType[ValidatorType["Letter"] = 6] = "Letter";
            ValidatorType[ValidatorType["NumberOrLetter"] = 7] = "NumberOrLetter";
        })(hui.ValidatorType || (hui.ValidatorType = {}));
        var ValidatorType = hui.ValidatorType;
        var ValidatorManager = (function () {
            function ValidatorManager() {
            }
            ValidatorManager.register = function (validator) {
                this.mamanger.set(validator.type, validator);
            };
            ValidatorManager.byType = function (type) {
                return this.mamanger.get(type);
            };
            ValidatorManager.mamanger = new hui.Map();
            return ValidatorManager;
        }());
        hui.ValidatorManager = ValidatorManager;
        var Validator = (function () {
            function Validator() {
            }
            Validator.validate = function (type, value, callbackfn) {
                var validator = ValidatorManager.byType(type);
                if (!validator) {
                    console.error("Validator: \u627E\u4E0D\u5230" + type + "\u5BF9\u5E94\u7684\u6821\u9A8C\u5668!!!");
                }
                else {
                    if (validator.validate(value))
                        callbackfn(true, null);
                    else
                        callbackfn(false, validator.errorMsg);
                }
            };
            Validator.validate_sync = function (type, value) {
                var validator = ValidatorManager.byType(type);
                if (!validator) {
                    console.error("Validator: \u627E\u4E0D\u5230" + type + "\u5BF9\u5E94\u7684\u6821\u9A8C\u5668!!!");
                    return false;
                }
                else {
                    if (validator.validate(value))
                        return true;
                    else
                        return false;
                }
            };
            Validator.bindOnBlur = function (type, inputElement, callbackfn) {
                inputElement.addEventListener("blur", function () {
                    Validator.validate(type, this.value, callbackfn);
                });
            };
            Validator.bindOnInput = function (type, inputElement, callbackfn) {
                inputElement.addEventListener("input", function (e) {
                    var validator = ValidatorManager.byType(type);
                    if (!validator.validate(inputElement.value)) {
                        inputElement.value = inputElement.value.substr(0, inputElement.value.length - 1);
                        callbackfn(false, validator.errorMsg);
                    }
                    else
                        callbackfn(true, null);
                });
            };
            return Validator;
        }());
        hui.Validator = Validator;
        var EmailValidator = (function () {
            function EmailValidator() {
                this.errorMsg = "\u90AE\u4EF6\u683C\u5F0F\u4E0D\u6B63\u786E!!!";
                this.reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
                this.type = ValidatorType[ValidatorType.Email];
            }
            EmailValidator.prototype.validate = function (value) {
                return this.reg.test(value);
            };
            return EmailValidator;
        }());
        hui.EmailValidator = EmailValidator;
        var TelephoneValidator = (function () {
            function TelephoneValidator() {
                this.errorMsg = "\u624B\u673A\u53F7\u7801\u683C\u5F0F\u4E0D\u6B63\u786E!!!";
                this.reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
                this.type = ValidatorType[ValidatorType.Telephone];
            }
            TelephoneValidator.prototype.validate = function (value) {
                return this.reg.test(value);
            };
            return TelephoneValidator;
        }());
        hui.TelephoneValidator = TelephoneValidator;
        var PhoneValidator = (function () {
            function PhoneValidator() {
                this.errorMsg = "\u7535\u8BDD\u53F7\u7801\u683C\u5F0F\u4E0D\u6B63\u786E!!!";
                this.reg = /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{8}/;
                this.type = ValidatorType[ValidatorType.Phone];
            }
            PhoneValidator.prototype.validate = function (value) {
                return this.reg.test(value);
            };
            return PhoneValidator;
        }());
        hui.PhoneValidator = PhoneValidator;
        var IdCardValidator = (function () {
            function IdCardValidator() {
                this.reg = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/;
                this.errorMsg = "\u8EAB\u4EFD\u8BC1\u53F7\u7801\u683C\u5F0F\u4E0D\u6B63\u786E!!!";
                this.type = ValidatorType[ValidatorType.IdCard];
            }
            IdCardValidator.prototype.validate = function (value) {
                return this.reg.test(value);
            };
            return IdCardValidator;
        }());
        hui.IdCardValidator = IdCardValidator;
        var NumberValidator = (function () {
            function NumberValidator() {
                this.reg = /^[0-9]*$/;
                this.type = ValidatorType[ValidatorType.Number];
                this.errorMsg = "\u53EA\u80FD\u8F93\u5165\u6570\u5B57";
            }
            NumberValidator.prototype.validate = function (value) {
                return this.reg.test(value);
            };
            return NumberValidator;
        }());
        hui.NumberValidator = NumberValidator;
        var LetterValidator = (function () {
            function LetterValidator() {
                this.reg = /^[A-Za-z]+$/;
                this.type = ValidatorType[ValidatorType.Letter];
                this.errorMsg = "\u53EA\u80FD\u8F93\u5165\u5B57\u6BCD";
            }
            LetterValidator.prototype.validate = function (value) {
                return this.reg.test(value);
            };
            return LetterValidator;
        }());
        hui.LetterValidator = LetterValidator;
        var NumberOrLetterValidator = (function () {
            function NumberOrLetterValidator() {
                this.reg = /^[A-Za-z0-9]+$/;
                this.type = ValidatorType[ValidatorType.NumberOrLetter];
                this.errorMsg = "\u53EA\u80FD\u8F93\u5165\u6570\u5B57\u548C\u5B57\u6BCD";
            }
            NumberOrLetterValidator.prototype.validate = function (value) {
                return this.reg.test(value);
            };
            return NumberOrLetterValidator;
        }());
        hui.NumberOrLetterValidator = NumberOrLetterValidator;
    })(hui = btop.hui || (btop.hui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=btop.hui.js.map