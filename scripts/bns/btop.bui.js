var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/************************************************************************
 * 类名  :  SingletonUtil
 * 描述  :  单例工具包
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  4/5/2016 10:30:16 PM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
/**
 * @api {get} /user/:id SingletonUtil单例工具包
 * @apiName GetUser
 * @apiGroup SingletonUtil
 */
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var SingletonUtil = (function () {
            function SingletonUtil() {
            }
            SingletonUtil.register = function (classPath, config) {
                this.instances.set(classPath, config);
            };
            SingletonUtil.byClassPath = function (classPath) {
                return this.instances.get(classPath);
            };
            SingletonUtil.unRegister = function (classPath) {
                return this.instances.delete(classPath);
            };
            SingletonUtil.removeAll = function () {
            };
            SingletonUtil.getInstance = function (classPath) {
                var targetClass = bui.ClassUtils.forName(classPath);
                var flag = false;
                var instance;
                this.instances.forEach(function (value, index) {
                    if (index == classPath) {
                        if (SingletonUtil.byClassPath(index) != null && SingletonUtil.byClassPath(index) != undefined) {
                            flag = true; //表示map中有targetClass的实例
                            instance = SingletonUtil.byClassPath(index);
                        }
                    }
                });
                if (!flag) {
                    var instance_1 = new targetClass;
                    SingletonUtil.register(classPath, instance_1);
                    return SingletonUtil.byClassPath(classPath);
                }
                return instance;
            };
            SingletonUtil.instances = new Map();
            return SingletonUtil;
        }());
        bui.SingletonUtil = SingletonUtil;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  CachePool
 * 描述  :  缓冲池
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  5/6/2016 1:13:16 PM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
///<reference path="../../util/SingletonUtil.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var CachePool = (function () {
            function CachePool() {
            }
            /**
            * @description 验证方法池中是否有此方法
            * @methodName方法名称
            */
            CachePool.nameIsNotRepeated = function (methodName, instancePool) {
                var flag = true;
                for (var i in instancePool) {
                    if (i == methodName) {
                        flag = false;
                    }
                }
                return flag;
            };
            return CachePool;
        }());
        bui.CachePool = CachePool;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  DataPool
 * @apiName GetUser
 * @apiGroup User
 * 描述  :  数据缓冲池
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  5/6/2016 1:13:16 PM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
///<reference path="../../util/SingletonUtil.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var DataPool = (function (_super) {
            __extends(DataPool, _super);
            function DataPool() {
                _super.apply(this, arguments);
                //字符串的缓冲池
                this.dataPool = new Map();
            }
            /**
            * @description 根据单例工具包获取数据缓存池的单例
            */
            DataPool.getInstance = function () {
                this.dataPoolInstance = bui.SingletonUtil.getInstance("btop.bui.DataPool");
                return this.dataPoolInstance;
            };
            /**
              * @description 注入方法到数据缓存池中
              * @dataName 数据名称
              * @value 匿名方法
              */
            DataPool.register = function (dataName, value) {
                this.getInstance();
                if (bui.CommonUtils.stringIsNotEmpty(dataName)) {
                    if (this.nameIsNotRepeated(dataName, this.dataPoolInstance.dataPool)) {
                        if (typeof value === "string") {
                            this.dataPoolInstance.dataPool.set(dataName, value);
                        }
                        else {
                            console.error("DataPool: put\u65B9\u6CD5\u4E2D" + value + "\u4E0D\u662Fstring\u7C7B\u578B");
                        }
                    }
                    else {
                        console.error("DataPool: " + dataName + "\u662F\u91CD\u590D\u7684\uFF0C\u8BF7\u6838\u67E5\u540E\u518D\u6CE8\u5165");
                    }
                }
            };
            /**
             * @description 注销对应数据缓存池中的数据
             * @dataName 数据名称
             */
            DataPool.unRegister = function (dataName) {
                if (bui.CommonUtils.stringIsNotEmpty(dataName)) {
                    this.dataPoolInstance.dataPool.delete(dataName);
                }
            };
            /**
             * @description 清除缓存池中的所有数据
             */
            DataPool.removeAll = function () {
                this.dataPoolInstance.dataPool.clear();
            };
            /**
           * @description通过方法名称来调用数据池中的数据
           * @dataName 数据名称
           */
            DataPool.byDataPath = function (dataName) {
                if (bui.CommonUtils.stringIsNotEmpty(dataName)) {
                    return this.dataPoolInstance.dataPool.get(dataName);
                }
            };
            return DataPool;
        }(bui.CachePool));
        bui.DataPool = DataPool;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  MethodPool
 * 描述  :  方法缓冲池
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  5/6/2016 1:13:16 PM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
///<reference path="../../util/SingletonUtil.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var MethodPool = (function (_super) {
            __extends(MethodPool, _super);
            function MethodPool() {
                _super.apply(this, arguments);
                //方法的缓存池
                this.methodPool = new Map();
            }
            /**
             * @description 根据单例工具包获取方法缓存池的单例
             */
            MethodPool.getInstance = function () {
                this.methodPoolInstance = bui.SingletonUtil.getInstance("btop.bui.MethodPool");
                return this.methodPoolInstance;
            };
            /**
             * @description 注入方法到方法缓存池中
             * @methodName 方法名称
             * @value 匿名方法
             */
            MethodPool.register = function (methodName, value) {
                this.getInstance();
                if (bui.CommonUtils.stringIsNotEmpty(methodName)) {
                    if (this.nameIsNotRepeated(methodName, this.methodPoolInstance.methodPool)) {
                        if (typeof value === "function") {
                            this.methodPoolInstance.methodPool.set(methodName, value);
                        }
                        else {
                            console.error("MethodPool: put\u65B9\u6CD5\u4E2D" + value + "\u4E0D\u662Ffunction\u7C7B\u578B");
                        }
                    }
                    else {
                        console.error("MethodPool: " + methodName + " \u662F\u91CD\u590D\u7684\uFF0C\u8BF7\u6838\u67E5\u540E\u518D\u6CE8\u5165");
                    }
                }
            };
            /**
             * @description 注销对应方法缓存池中的方法
             * @methodName 方法名称
             */
            MethodPool.unRegister = function (methodName) {
                if (bui.CommonUtils.stringIsNotEmpty(methodName)) {
                    this.methodPoolInstance.methodPool.delete(methodName);
                }
            };
            /**
             * @description 清除缓存池中的所有方法
             */
            MethodPool.removeAll = function () {
                this.methodPoolInstance.methodPool.clear();
            };
            /**
             * @description 通过方法名称来获取对应的方法
             * @methodName 方法名称
             */
            MethodPool.byMethodPath = function (methodName) {
                if (bui.CommonUtils.stringIsNotEmpty(methodName)) {
                    return this.methodPoolInstance.methodPool.get(methodName);
                }
            };
            /**
             * @description通过方法名称来调用方法池中的方法
             * @methodName 方法名称
             */
            MethodPool.execute = function (methodName) {
                this.byMethodPath(methodName)();
            };
            return MethodPool;
        }(bui.CachePool));
        bui.MethodPool = MethodPool;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  ObjectPool
 * 描述  :  对象缓冲池
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  5/11/2016 1:13:16 PM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
///<reference path="../../util/SingletonUtil.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var ObjectPool = (function (_super) {
            __extends(ObjectPool, _super);
            function ObjectPool() {
                _super.apply(this, arguments);
                //Object的缓冲池
                this.objectPool = new Map();
            }
            /**
                   * @description 根据单例工具包获取数据缓存池的单例
                   */
            ObjectPool.getInstance = function () {
                this.objectPoolInstance = bui.SingletonUtil.getInstance("btop.bui.ObjectPool");
                return this.objectPoolInstance;
            };
            /**
              * @description 注入方法到数据缓存池中
              * @objectName 数据名称
              * @value 匿名方法
              */
            ObjectPool.register = function (objectName, value) {
                this.getInstance();
                if (bui.CommonUtils.stringIsNotEmpty(objectName)) {
                    if (this.nameIsNotRepeated(objectName, this.objectPoolInstance.objectPool)) {
                        if (typeof value === "object") {
                            this.objectPoolInstance.objectPool.set(objectName, value);
                        }
                        else {
                            console.error("ObjectPool: put\u65B9\u6CD5\u4E2D" + value + "\u4E0D\u662Fobject\u7C7B\u578B");
                        }
                    }
                    else {
                        console.error("ObjectPool: " + objectName + " \u662F\u91CD\u590D\u7684\uFF0C\u8BF7\u6838\u67E5\u540E\u518D\u6CE8\u5165");
                    }
                }
            };
            /**
             * @description 注销对应数据缓存池中的数据
             * @objectName 数据名称
             */
            ObjectPool.unRegister = function (objectName) {
                if (bui.CommonUtils.stringIsNotEmpty(objectName)) {
                    this.objectPoolInstance.objectPool.delete(objectName);
                }
            };
            /**
             * @description 清除缓存池中的所有数据
             */
            ObjectPool.removeAll = function () {
                this.objectPoolInstance.objectPool.clear();
            };
            /**
           * @description通过方法名称来调用数据池中的数据
           * @objectName 数据名称
           */
            ObjectPool.byDataPath = function (objectName) {
                if (bui.CommonUtils.stringIsNotEmpty(objectName)) {
                    return this.objectPoolInstance.objectPool.get(objectName);
                }
            };
            return ObjectPool;
        }(bui.CachePool));
        bui.ObjectPool = ObjectPool;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  PromiseManager
 * 描述  :  promise的管理类
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/5/13
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="Promise.ts"/>
///<reference path="Deferred.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var PromiseManager = (function () {
            function PromiseManager() {
            }
            PromiseManager.transition = function (deferred, type, result) {
                if (type === 'fulfilled') {
                    deferred.resolve(result);
                }
                else if (type === 'rejected') {
                    deferred.reject(result);
                }
                else if (type !== 'pending') {
                    console.error("promise \u4E0D\u652F\u6301\u7C7B\u578B\uFF1A " + type);
                }
            };
            PromiseManager.makeSignaler = function (deferred, type) {
                return function (result) {
                    PromiseManager.transition(deferred, type, result);
                };
            };
            PromiseManager.procedure = function (type, handler, result) {
                var func = handler[type];
                var def = handler.deferred;
                if (func) {
                    try {
                        var newResult = func(result);
                        if (newResult && typeof newResult.then === 'function') {
                            // 此种写法存在闭包容易造成内存泄露，我们通过高阶函数解决
                            // newResult.then(function(data) {
                            //     def.resolve(data);
                            // }, function(err) {
                            //     def.reject(err);
                            // });
                            //PromiseA+规范，x代表newResult，promise代表def.promise
                            newResult.then(PromiseManager.makeSignaler(def, 'fulfilled'), PromiseManager.makeSignaler(def, 'rejected')); //此处的本质是利用了异步闭包
                        }
                        else {
                            PromiseManager.transition(def, type, newResult);
                        }
                    }
                    catch (error) {
                        console.error(error.message);
                        PromiseManager.transition(def, 'rejected', error);
                    }
                }
                else {
                    PromiseManager.transition(def, type, result);
                }
            };
            return PromiseManager;
        }());
        bui.PromiseManager = PromiseManager;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Deferred
 * 描述  :  网络延迟类
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/5/13
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="Promise.ts"/>
///<reference path="PromiseManager.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Deferred = (function () {
            function Deferred() {
                this.promise = new bui.Promise();
            }
            /**
             * @description 处理
             * @result 传入数据
             */
            Deferred.prototype.resolve = function (result) {
                if (!this.promise.isPending()) {
                    return;
                }
                var queue = this.promise.getQueue();
                for (var i = 0, len = queue.length; i < len; i++) {
                    bui.PromiseManager.procedure('fulfilled', queue[i], result);
                }
                this.promise.setStatus('fulfilled', result);
            };
            /**
             * @description 拒绝
             * @error 失败信息
             */
            Deferred.prototype.reject = function (error) {
                if (!this.promise.isPending()) {
                    return;
                }
                var queue = this.promise.getQueue();
                for (var i = 0, len = queue.length; i < len; i++) {
                    bui.PromiseManager.procedure('rejected', queue[i], error);
                }
                this.promise.setStatus('rejected', error);
            };
            return Deferred;
        }());
        bui.Deferred = Deferred;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Promise
 * 描述  :  网络请求允许类
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/5/13
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="Deferred.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Promise = (function () {
            function Promise() {
                this.queue = new Array();
                this.status = 'pending'; //status总共有三种状态 pending就绪状态、fulfilled已处理状态 rejected拒绝状态
            }
            /**
             * @description 获取队列
             */
            Promise.prototype.getQueue = function () {
                return this.queue;
            };
            /**
             * @description 获取promise的状态
             */
            Promise.prototype.getStatus = function () {
                return this.status;
            };
            /**
             * @description 设置promise的状态
             */
            Promise.prototype.setStatus = function (s, value) {
                if (s === 'fulfilled' || s === 'rejected') {
                    this.status = s;
                    this.value = value;
                    this.queue = [];
                    var freezeObject = Object.freeze || function () { };
                    freezeObject(this); //冻结对象，使promise的状态不可逆
                }
                else {
                    console.error("promise\u4E0D\u652F\u6301\u72B6\u6001\uFF1A " + s);
                }
            };
            /**
             * @description 判断是否为已处理状态
             */
            Promise.prototype.isFulFilled = function () {
                return this.status === 'fulfilled';
            };
            /**
             * @description 判断是否已经拒绝状态
             */
            Promise.prototype.isRejected = function () {
                return this.status === 'rejected';
            };
            /**
             * @description 判断是否是就绪状态
             */
            Promise.prototype.isPending = function () {
                return this.status === 'pending';
            };
            /**
             * @description 请求下一步方法
             */
            Promise.prototype.then = function (onFulfilled, onRejected) {
                var handler = {
                    'fulfilled': onFulfilled,
                    'rejected': onRejected
                };
                handler.deferred = new bui.Deferred();
                if (!this.isPending()) {
                    bui.PromiseManager.procedure(this.status, handler, this.value);
                }
                else {
                    this.queue.push(handler);
                }
                return handler.deferred.promise;
            };
            return Promise;
        }());
        bui.Promise = Promise;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Db
 * 描述  :  本地数据或漫游数据
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  5/23/2016 1:17:14 PM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
///<reference path="../../connect/promise/Promise.ts"/>
///<reference path="../../connect/promise/Deferred.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Db = (function () {
            function Db() {
            }
            /**
            * @description 存储数据
            * @name 存储数据的名称
            * @value 存储的数据
            * @over 是否覆盖
            * @type 存储数据的类型
            * @asyn 是否为异步
            */
            Db.put = function (name, value, over, type, asyn) {
                var _this = this;
                var def = new bui.Deferred();
                function result() {
                    var settings = type == _this.local ? localStorage : sessionStorage;
                    //如果不覆盖，则将所有的值复制进去，没有的值不动
                    if (!over) {
                        var v = settings[name];
                        if (v) {
                            v = JSON.parse(v);
                            if (value instanceof Array) {
                                var length_1 = v.length;
                                for (var i in value) {
                                    v[parseInt(i) + length_1] = value[i];
                                }
                            }
                            else {
                                for (var i in value) {
                                    v[i] = value[i];
                                }
                            }
                            value = v;
                        }
                    }
                    //给对应的name重新赋值
                    settings[name] = JSON.stringify(value);
                    if (!asyn) {
                        return value;
                    }
                    def.resolve(value);
                }
                if (asyn) {
                    result();
                    return def.promise;
                }
                else {
                    return result();
                }
            };
            /**
             * @description 获取数据
             * @name 获取数据的名称
             * @asyn 是否为异步
             * @type 存储数据的类型
             */
            Db.get = function (name, asyn, type) {
                var _this = this;
                var def = new bui.Deferred();
                function result() {
                    var settings = type == _this.local ? localStorage : sessionStorage; //得到本地存储的storage还是漫游的storage
                    var value = settings[name];
                    if (value) {
                        value = JSON.parse(value);
                    }
                    if (!asyn) {
                        return value;
                    }
                    if (!value) {
                        def.resolve(null);
                    }
                    else {
                        def.resolve(value);
                    }
                }
                if (asyn) {
                    result();
                    return def.promise;
                }
                else {
                    return result();
                }
            };
            /**
             * @description 获得或者存放值
             * @name 存储名称
             * @value 存储的内容
             * @over 是否覆盖原有的属性
             * @argLength 参数的长度
             * @isLocal 是否为localstorage
             */
            Db.getOrPut = function (name, value, over, argLength, isLocal) {
                if (argLength == 1) {
                    return Db.get(name, false, isLocal);
                }
                else if (argLength == 2) {
                    if (typeof value == "boolean") {
                        return Db.get(name, value, isLocal);
                    }
                    return Db.put(name, value, over, isLocal, true);
                }
                return Db.put(name, value, over, isLocal, true);
            };
            Db.session = 1;
            Db.local = 2;
            return Db;
        }());
        bui.Db = Db;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  DbManager
 * 描述  :  本地数据或漫游数据管理器
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  5/23/2016 13:17:14 PM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
///<reference path="Db.ts"/>
///<reference path="../../connect/promise/Promise.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var DbManager = (function () {
            function DbManager() {
            }
            /**
             * @description 存放或者获得本地数据,只允许存储json对象
             * 当参数只有一个的时候，就为取本地数据，默认为同步获取
             * 当参数为两个的时候，第二个参数为boolean类型，且为true，则为异步获取，返回promise，如果为false，则为同步获取，返回值
             * 如果第二个参数为jsonObject，则为存储,存储都是异步的，返回promise
             * 当参数为三个时，为存储，当over为true的时候，替换掉原来的对象，否则只覆盖传入的部分
             * @name 对应存储的名称
             * @value 存储的内容
             * @over 是否覆盖原有的数据
             */
            DbManager.local = function (name, value, over) {
                return bui.Db.getOrPut(name, value, over, arguments.length, this.localWay);
            };
            /**
             * @description 得到本地数据，默认为同步
             * @name 获取名称
             * @asyn 是否为同步，可选字段
             */
            DbManager.localGet = function (name, asyn) {
                if (asyn == undefined)
                    asyn = true;
                return bui.Db.get(name, asyn, this.localWay);
            };
            /**
             * @description 存放本地数据，默认为同步
             * @name 存储名称
             * @value 存储内容
             * @asyn 是否同步
             * @over 是否属性覆盖
             */
            DbManager.localPut = function (name, value, asyn, over) {
                if (over == undefined)
                    over = false;
                if (asyn == undefined)
                    asyn = true;
                if (value == undefined) {
                    return;
                }
                else {
                    return bui.Db.put(name, value, over, this.localWay, asyn);
                }
            };
            /**
             * @description 清楚本地数据，默认为同步，如果name不传，则为清除所有本地数据
             * @name 存储值对应的名称
             * @asyn 是否为同步
             */
            DbManager.clearLocal = function (name, asyn) {
                function result(name) {
                    if (name) {
                        localStorage.removeItem(name);
                        return;
                    }
                    localStorage.clear();
                }
                result(name);
            };
            /**
            * @description 存放或者获得漫游数据,只允许存储json对象
            * 当参数只有一个的时候，就为取漫游数据，默认为同步获取
            * 当参数为两个的时候，第二个参数为boolean类型，且为true，则为异步获取，返回promise，如果为false，则为同步获取，返回值
            * 如果第二个参数为jsonObject，则为存储,存储都是异步的，返回promise
            * 当参数为三个时，为存储，当over为true的时候，替换掉原来的对象，否则只覆盖传入的部分
            * @name 对应存储的名称
            * @value 存储的内容
            * @over 是否覆盖原有的数据
            */
            DbManager.session = function (name, value, over) {
                if (over == undefined)
                    over = false;
                return bui.Db.getOrPut(name, value, over, arguments.length, this.sessionWay);
            };
            /**
             * @description 得到漫游数据，默认为同步
             * @name 存储的名称
             * @asyn 是否为同步，可选字段
             */
            DbManager.sessionGet = function (name, asyn) {
                if (asyn == undefined)
                    asyn = true;
                return bui.Db.get(name, asyn, this.sessionWay);
            };
            /**
             * @description 存放漫游数据，默认为同步
             * @name 存储的名称
             * @value 存储的内容
             * @asyn 是否为同步，可选字段
             * @over 是否覆盖
             */
            DbManager.sessionPut = function (name, value, asyn, over) {
                if (over == undefined)
                    over = false;
                if (asyn == undefined)
                    asyn = true;
                if (value == undefined) {
                    return;
                }
                else {
                    return bui.Db.put(name, value, over, this.sessionWay, asyn);
                }
            };
            /**
             * @description 清除漫游数据，默认为同步，如果name不传，则为清除所有漫游数据
             * @name 存储值对应的名称
             * @asyn 是否为同步
             */
            DbManager.clearSession = function (name, asyn) {
                function result(name) {
                    if (name) {
                        sessionStorage.removeItem(name);
                        return;
                    }
                    sessionStorage.clear();
                }
                result(name);
            };
            DbManager.sessionWay = 1;
            DbManager.localWay = 2;
            return DbManager;
        }());
        bui.DbManager = DbManager;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  DbObserver
 * 描述  :  本地数据或漫游数据的观察者
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  5/23/2016 1:17:14 PM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var DbObserver = (function () {
            function DbObserver() {
            }
            return DbObserver;
        }());
        bui.DbObserver = DbObserver;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  BipServer
 * 描述  :  Bip连接信息类
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/5/13
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var BipServer = (function () {
            function BipServer() {
                this.remoteImage = new Map();
            }
            Object.defineProperty(BipServer.prototype, "url", {
                get: function () {
                    return this._url;
                },
                set: function (url) {
                    this._url = url;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BipServer.prototype, "reOpenTime", {
                get: function () {
                    return this._reOpenTime;
                },
                set: function (reOpenTime) {
                    if (reOpenTime < 1000) {
                        throw "重连时间必须大于或者等于1000毫秒";
                    }
                    this._reOpenTime = reOpenTime;
                },
                enumerable: true,
                configurable: true
            });
            return BipServer;
        }());
        bui.BipServer = BipServer;
        var BipHeader = (function () {
            function BipHeader() {
            }
            return BipHeader;
        }());
        bui.BipHeader = BipHeader;
        var ReqMsg = (function () {
            function ReqMsg() {
            }
            return ReqMsg;
        }());
        bui.ReqMsg = ReqMsg;
        var ResBipHeader = (function () {
            function ResBipHeader() {
            }
            return ResBipHeader;
        }());
        bui.ResBipHeader = ResBipHeader;
        var ResMsg = (function () {
            function ResMsg() {
            }
            return ResMsg;
        }());
        bui.ResMsg = ResMsg;
        var SystemSetting = (function () {
            function SystemSetting() {
            }
            return SystemSetting;
        }());
        bui.SystemSetting = SystemSetting;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  DeviceServer
 * 描述  :  Device连接信息类
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/5/13
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var DeviceServer = (function () {
            function DeviceServer() {
            }
            return DeviceServer;
        }());
        bui.DeviceServer = DeviceServer;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Validator
 * 描述  :  校验器
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/8/11
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Validator = (function () {
            function Validator() {
            }
            return Validator;
        }());
        bui.Validator = Validator;
        var ValidatorType = (function () {
            function ValidatorType() {
            }
            return ValidatorType;
        }());
        bui.ValidatorType = ValidatorType;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Constant
 * 描述  :  全局常量
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/3/22
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Constant = (function () {
            function Constant() {
            }
            // 加载资源时的超时函数
            Constant.RESOURCE_TIMEOUT = 60000;
            //登录角色
            Constant.LOGIN_ROLE = "manager"; //@todo 此时暂时设置一个测试字段
            //Toast提示信息
            Constant.TOAST_WAITTING_TIP_MSG = "正在玩命加载中...";
            Constant.MEDIA_TIMER = "0:0:0";
            Constant.CHANNEL = "";
            Constant.BASE_SERVER = "";
            return Constant;
        }());
        bui.Constant = Constant;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  HttpUtils
 * 描述  :  网络请求工具包
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  3/27/2016 10:21:31 PM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
///<reference path="../../btop/btop.hui.d.ts"/>
///<reference path="../../libs/jQuery.d.ts"/>
///<reference path="../connect/promise/Deferred.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        /**
         * 网络请求工具包
         * @class HttpUtils
         * @module btop.bui
         * */
        var HttpUtils = (function () {
            function HttpUtils() {
            }
            /**
             * bip的http请求
             * @method bipHttp
             * @serviceName {String} 服务名
             * @reqMsg {ReqMsg} 请求体
             * @return {Promise} 返回Promise对象
             */
            HttpUtils.bipHttp = function (serviceName, reqMsg, tipOption) {
                return HttpUtils.connect('http', 'bipServer', 'post', serviceName, reqMsg, tipOption);
            };
            /**
             * bip的https请求
              * @method bipHttps
             * @serviceName {String} 服务名
             * @reqMsg {ReqMsg} 请求体
             * @return {Promise} 返回Promise对象
             */
            HttpUtils.bipHttps = function (serviceName, reqMsg, tipOption) {
                return HttpUtils.connect('https', 'bipServer', 'post', serviceName, reqMsg, tipOption);
            };
            /**
            * @description 普通的http请求
            * @serviceName 服务名
            * @requestType 请求类型（get,post）
            * @params 请求自带参数
            */
            HttpUtils.http = function (url, requestType, params, tipOption) {
                return HttpUtils.connect('http', 'common', requestType, url, params, tipOption);
            };
            /**
            * @description 网厅http请求
            * @serviceName 服务名
            * @requestType 请求类型（get,post）
            * @params 请求自带参数
            */
            HttpUtils.netHallHttp = function (params, requestType) {
                HttpUtils.connect('https', 'netHallServer', requestType, '', params);
            };
            /**
            * @description 网厅https请求
            * @serviceName 服务名
            * @requestType 请求类型（get,post）
            * @params 请求自带参数
            */
            HttpUtils.connect = function (httpType, serverType, requestType, serviceName, reqMsg, tipOption) {
                if (tipOption) {
                    if (tipOption.isShow) {
                        btop.hui.Global.LoadingToast.show(tipOption.tipMsg);
                    }
                }
                else {
                    btop.hui.Global.LoadingToast.show(bui.Constant.TOAST_WAITTING_TIP_MSG);
                }
                var bipServerInst = bui.SingletonUtil.getInstance("btop.bui.BipServer");
                var bipHeaderInst = bui.SingletonUtil.getInstance("btop.bui.BipHeader");
                var def = new bui.Deferred();
                var header;
                if (reqMsg.header) {
                    header = reqMsg.header;
                }
                else {
                    header = bipHeaderInst;
                }
                var ajaxUrl;
                var ajaxData;
                var requestId = new Date().getTime();
                var opt; //ajax统一配置
                //是否启用remote远程模式
                if (!bipServerInst.isRemote) {
                    opt = {
                        url: "skin/cache/remoteImage/" + bipServerInst.remoteImage.get(serviceName),
                        type: 'get',
                        dataType: 'JSON',
                        success: function (d) {
                            var resMsg = new bui.ResMsg();
                            resMsg.header = d.h;
                            resMsg.body = d.b;
                            def.resolve(resMsg);
                            btop.hui.Global.LoadingToast.hide();
                        },
                        error: function (e) {
                            def.reject(e);
                            btop.hui.Global.LoadingToast.hide();
                        }
                    };
                }
                else {
                    switch (serverType) {
                        //1. bipServer请求
                        case 'bipServer':
                            {
                                var baseServer = void 0;
                                if (httpType == "http")
                                    //baseServer = `http://${bipServerInst.ip}:${bipServerInst.port}/`;
                                    baseServer = bui.Constant.BASE_SERVER;
                                else
                                    //baseServer = `https://${bipServerInst.ip}:${bipServerInst.port}/`;
                                    baseServer = bui.Constant.BASE_SERVER;
                                ajaxUrl = baseServer + bipServerInst.ajaxService;
                                ajaxData = {
                                    h: header,
                                    b: reqMsg.body //发送的内容
                                };
                                break;
                            }
                        //2. 设备请求
                        case 'deviceServer':
                            {
                                //@todo 后期处理
                                break;
                            }
                        //3. 网络厅堂请求
                        case 'netHallServer':
                            {
                                var baseServer = bui.NetHallServer.https;
                                ajaxData = {
                                    financeData: ''
                                };
                                break;
                            }
                        //4. 普通请求
                        case 'common':
                            {
                                ajaxUrl = serviceName;
                                ajaxData = reqMsg.body;
                                break;
                            }
                        case 'default': {
                            console.error("\u8BF7\u6C42\u53C2\u6570\u8F93\u5165\u6709\u8BEF:" + serverType);
                        }
                    }
                    opt = {
                        url: ajaxUrl,
                        type: requestType,
                        dataType: 'JSON',
                        success: function (d) {
                            var resMsg = new bui.ResMsg();
                            resMsg.header = d.h;
                            resMsg.body = d.b;
                            def.resolve(resMsg);
                            if (!HttpUtils.BACK_SERVICE) {
                                btop.hui.Global.LoadingToast.hide();
                            }
                        },
                        error: function (e) {
                            def.reject(e);
                            if (!HttpUtils.BACK_SERVICE) {
                                btop.hui.Global.LoadingToast.hide();
                            }
                        }
                    };
                    if (requestType === 'post') {
                        opt.data = {
                            serviceName: 'pad/pad/' + serviceName,
                            arg: JSON.stringify(ajaxData)
                        };
                    }
                    else if (requestType !== 'get') {
                        console.error("requestType\u4E0D\u5408\u6CD5\u6216\u8005\u7A7A\uFF1A " + requestType);
                    }
                }
                $.ajax(opt);
                return def.promise;
            };
            HttpUtils.defaultSuccessFunc = function (data) {
                console.log('请求数据成功!');
            };
            HttpUtils.defaultFailureFunc = function (e) {
                console.error('请求数据失败!' + e);
            };
            //ajax 初始化信息
            HttpUtils.ajaxSetup = function () {
                $.ajaxSetup({ timeout: bui.Constant.RESOURCE_TIMEOUT }); // 设置jQuery全局默认超时
            };
            HttpUtils.mixinBipHeader = function (originObject, newObject) {
                var unionObject;
                for (var i in newObject) {
                    originObject[i] = newObject[i];
                }
                unionObject = originObject;
                return unionObject;
            };
            HttpUtils.BACK_SERVICE = false;
            return HttpUtils;
        }());
        bui.HttpUtils = HttpUtils;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Socket
 * 描述  :  webSocket协议类
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/5/13
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../constants/Constant.ts"/>
///<reference path="../../util/HttpUtils.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Socket = (function () {
            function Socket() {
            }
            /**
             * @description 初始化socket信息
             */
            Socket.init = function () {
                var bipServerInst = bui.SingletonUtil.getInstance("btop.bui.BipServer");
                this.url = "ws://" + bipServerInst.ip + ":" + bipServerInst.wsport + "/" + bipServerInst.wsService;
                this.isDebug = bipServerInst.isDebug;
                this.isRemote = bipServerInst.isRemote;
                this.reOpenTime = bipServerInst.reOpenTime;
                this.beatTime = bipServerInst.beatTime;
            };
            /**
             * @description 打开socket，此时重新实例化一个Websocket
             */
            Socket.open = function () {
                var _this = this;
                this.close(); //关闭旧连接
                this.forbidReOpen = false; //取消禁止重连
                var url = this.url;
                this.socket = new WebSocket(url);
                bui.SocketObserverable.register("socket_notify", Socket);
                this.socket.onopen = function (event) {
                    bui.SocketListener.handle("socket.open", event);
                };
                this.socket.onerror = function (event) {
                    bui.SocketListener.handle("socket.error", event);
                };
                this.socket.onmessage = function (event) {
                    bui.SocketListener.handle("socket.message", event);
                };
                this.socket.onclose = function (event) {
                    bui.SocketListener.handle("socket.close", event);
                };
            };
            /**
             * @description 关闭Socket长链接
             */
            Socket.close = function () {
                if (this.socket) {
                    this.socket.close();
                    delete this.socket;
                    this.forbidReOpen = true; //禁止重连
                }
            };
            /**
             * @description Socket建立重连
             */
            Socket.reOpen = function () {
                var _this = this;
                if (this.forbidReOpen) {
                    return;
                }
                clearTimeout(this.reOpenTimeOut);
                this.reOpenTimeOut = setTimeout(function () {
                    if (_this.forbidReOpen) {
                        return;
                    }
                    _this.open();
                    if (_this.isDebug) {
                        console.log("reOpen:" + _this.url);
                        console.log("\n");
                        console.log("\n");
                    }
                }, _this.reOpenTime || 0);
            };
            /**
             * @description 通知Socket新建起的心跳
             */
            Socket.notify = function () {
                var _this = this;
                this.reOpen();
            };
            /**
             * @description socket事件绑定器
             * @type 事件类型
             * @callbackfn 回调函数
             */
            Socket.on = function (type, callbackfn) {
                btop.hui.EventProxy.inst.on(type, callbackfn);
            };
            /**
             * @description socket事件的触发器
             * @type 事件类型
             * @callbackfn 回调函数
             */
            Socket.trigger = function (type) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                btop.hui.EventProxy.inst.trigger(type, args);
            };
            Socket.forbidReOpen = true; //禁止重连
            return Socket;
        }());
        bui.Socket = Socket;
        var Command = (function () {
            function Command() {
            }
            Command.HEART = "H";
            Command.ID = "I";
            Command.MESSAGE = "M";
            return Command;
        }());
        bui.Command = Command;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  ConfigManager
 * 描述  :
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  4/6/2016 1:17:14 PM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
///<reference path="../../connect/linkInfo/BipServer.ts"/>
///<reference path="../../connect/linkInfo/DeviceServer.ts"/>
///<reference path="../../connect/linkInfo/DeviceServer.ts"/>
///<reference path="../../domain/model/Validator.ts"/>
///<reference path="../../connect/websocket/Socket.ts"/>
///<reference path="../../cache/db/DbManager.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var ConfigManager = (function () {
            function ConfigManager() {
            }
            ConfigManager.initConfig = function (data) {
                for (var i in data) {
                    switch (i) {
                        case "Server":
                            this.initServerConfig(data[i]);
                            break;
                        case "Validator":
                            this.initValidatorConfig(data[i]);
                            break;
                        case "Themes":
                            this.initThemeConfig(i, data[i]);
                            break;
                        case "RemoteImage":
                            this.initRemoteImageConfig(data[i]);
                            break;
                        default:
                            break;
                    }
                }
            };
            /**
             * @description 初始化服务配置信息
             * @data 服务json数据
             */
            ConfigManager.initServerConfig = function (data) {
                /** for(let className in data)
                {
                    let dynamicClass = ClassUtils.generateClass("btop.bui",className,data[className]);
                }
        
                */
                var bipServerInst = bui.SingletonUtil.getInstance("btop.bui.BipServer");
                var deviceServerInst = bui.SingletonUtil.getInstance("btop.bui.DeviceServer");
                var netHallServerInst = bui.SingletonUtil.getInstance("btop.bui.NetHallServer");
                var _loop_1 = function(configType) {
                    switch (configType) {
                        case "BipServer":
                            {
                                var bipServer_1;
                                bui.DbManager.localGet("BipServer", true).then(function (data) {
                                    bipServer_1 = data;
                                });
                                if (!bipServer_1) {
                                    bui.DbManager.localPut("BipServer", data[configType], true, true).then(function (data) {
                                        bipServer_1 = data;
                                    });
                                }
                                bipServerInst.ip = bipServer_1.ip;
                                bipServerInst.port = bipServer_1.port;
                                bipServerInst.domain = bipServer_1.domain;
                                bipServerInst.netHallUrl = bipServer_1.netHallUrl;
                                bipServerInst.ajaxService = bipServer_1.ajaxService;
                                bipServerInst.wsService = bipServer_1.wsService;
                                bipServerInst.isDebug = bipServer_1.isDebug;
                                bipServerInst.isRemote = bipServer_1.isRemote;
                                bipServerInst.reOpenTime = bipServer_1.reOpenTime;
                                bipServerInst.timeOut = bipServer_1.timeOut;
                                bipServerInst.beatTime = bipServer_1.beatTime;
                                bipServerInst.wsport = bipServer_1.wsport;
                                bipServerInst.birthTip = bipServer_1.birthTip;
                                bipServerInst.custWaitting = bipServer_1.custWaitting;
                                bipServerInst.ringTip = bipServer_1.ringTip;
                                bipServerInst.ringTipType = bipServer_1.ringTipType;
                                bipServerInst.defaultFilePath = bipServer_1.defaultFilePath;
                                bipServerInst.httpType = bipServer_1.httpType;
                                bipServerInst.localFilePath = bipServer_1.localFilePath;
                                bipServerInst.remoteFilePath = bipServer_1.remoteFilePath;
                                if (bipServer_1.httpType == "http") {
                                    bui.Constant.BASE_SERVER = bipServer_1.httpType + "://" + bipServer_1.ip + ":" + bipServer_1.port + "/";
                                }
                                else {
                                    bui.Constant.BASE_SERVER = bipServer_1.httpType + "://" + bipServer_1.domain + "/";
                                }
                                var url = bipServer_1.httpType + "://" + bipServer_1.ip + ":" + bipServer_1.port + "/" + bipServer_1.ajaxService;
                                bipServer_1.url = url;
                                var systemSettingInst_1 = bui.SingletonUtil.getInstance("btop.bui.SystemSetting");
                                systemSettingInst_1.birthTip = bipServerInst.birthTip;
                                systemSettingInst_1.ringTip = bipServerInst.ringTip;
                                systemSettingInst_1.custWaitting = bipServerInst.custWaitting;
                                systemSettingInst_1.ringTip = bipServerInst.ringTip;
                                systemSettingInst_1.ringTipType = bipServerInst.ringTipType;
                                systemSettingInst_1.mediaTimer = bui.Constant.MEDIA_TIMER;
                                //存储系统配置的缓存信息
                                bui.DbManager.localGet("SystemSetting", true).then(function (data) {
                                    if (data == null) {
                                        bui.DbManager.localPut("SystemSetting", systemSettingInst_1, true, false);
                                    }
                                });
                                bui.Socket.init();
                                break;
                            }
                        case "DeviceServer":
                            {
                                bui.DeviceServer.http = data[configType].http;
                                bui.DeviceServer.description = data[configType].description;
                                break;
                            }
                        case "NetHallServer":
                            {
                                bui.NetHallServer.https = data[configType].https;
                                bui.NetHallServer.description = data[configType].description;
                                break;
                            }
                    }
                };
                for (var configType in data) {
                    _loop_1(configType);
                }
            };
            /**
             * @description 初始化校验规则
             */
            ConfigManager.initValidatorConfig = function (data) {
                var validatorInst = bui.SingletonUtil.getInstance("btop.bui.Validator");
                validatorInst.email = data.email;
                validatorInst.idCard = data.idCard;
                validatorInst.letter = data.letter;
                validatorInst.number = data.number;
                validatorInst.numberOrLetter = data.numberOrLetter;
                validatorInst.phone = data.phone;
                validatorInst.required = data.required;
                validatorInst.telePhone = data.telePhone;
                validatorInst.name = data.name;
                validatorInst.custNumber = data.custNumber;
            };
            /**
             * @description 初始化主题配置
             * @className 主题的类名
             * @data 主题配置的数据
             */
            ConfigManager.initThemeConfig = function (className, data) {
                var dynamicClass = bui.ClassUtils.generateClass("btop.bui", className, data);
                var themeInstance = bui.SingletonUtil.getInstance("btop.bui." + className);
                for (var i in data) {
                    themeInstance[i] = data[i];
                }
                bui.DbManager.localGet("Themes", true).then(function (data) {
                    if (!data) {
                        bui.DbManager.localPut("Themes", themeInstance, true, false);
                    }
                });
            };
            /**
             * @description 初始化远程与本地镜像配置
             */
            ConfigManager.initRemoteImageConfig = function (data) {
                var bipServerInst = bui.SingletonUtil.getInstance("btop.bui.BipServer");
                for (var i in data) {
                    bipServerInst.remoteImage.set(i, data[i]);
                }
            };
            return ConfigManager;
        }());
        bui.ConfigManager = ConfigManager;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  FileService
 * 描述  :  加载文件服务类
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/7/16
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../btop/btop.hui.d.ts"/>
///<reference path="../../../libs/jQuery.d.ts"/>
///<reference path="../../util/SingletonUtil.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var FileService = (function () {
            function FileService() {
            }
            /**
             * @description 过滤文件，
             * 1.首先拿到图片路径，和本地图片做对比，如果有此图片，直接返回路径
             * 2.如果没有本地缓存，则去请求Native.asyncCall("FileService","downloadFile",[remotePath,savePath],function(success, error, result){});
             * 3.如果请求成功则返回本地路径，如果请求异常，就返回本地默认图片路径
             * @param filePath 图片名称
             */
            FileService.filterFile = function (filePath, callback, item) {
                var bipServerInst = bui.SingletonUtil.getInstance("btop.bui.BipServer"); //初始化配置信息
                this.defaultFilePath = bipServerInst.defaultFilePath;
                this.localFilePath = bipServerInst.localFilePath;
                this.remoteFilePath = bui.Constant.BASE_SERVER + bipServerInst.remoteFilePath;
                var _this = this;
                var fileName;
                var successCallBack = function () {
                    callback({
                        localFilePath: _this.localFilePath + fileName,
                        item: item
                    });
                };
                var errorCallBack = function () {
                    try {
                        btop.hui.Native.asyncCall("FileService", "downloadFile", [_this.remoteFilePath + fileName, _this.localFilePath + fileName], function (success, error, result) {
                            if (success) {
                                callback({
                                    localFilePath: _this.localFilePath + fileName,
                                    item: item
                                });
                            }
                            else {
                                callback({
                                    localFilePath: _this.defaultFilePath,
                                    item: item
                                });
                            }
                        });
                    }
                    catch (ex) {
                        console.error("FileService: \u6D4F\u89C8\u5668\u4E0D\u652F\u6301Native\u8C03\u7528\uFF0C\u9700\u8981\u5728Android\u8BBE\u5907\u4E0A\u624D\u80FD\u6B63\u786E\u8C03\u7528");
                        callback({
                            localFilePath: _this.defaultFilePath,
                            item: item
                        });
                    }
                };
                if (filePath != null) {
                    var position = filePath.lastIndexOf("/");
                    if (position != -1) {
                        fileName = filePath.substr(position + 1, filePath.length);
                        this.isExistInLocal(_this.localFilePath + fileName, successCallBack, errorCallBack);
                    }
                    else {
                        callback({
                            localFilePath: _this.defaultFilePath,
                            item: item
                        });
                    }
                }
                else {
                    callback({
                        localFilePath: _this.defaultFilePath,
                        item: item
                    });
                }
            };
            /**
             * @description 判断本地是否有此文件信息
             * @param filePath
             */
            FileService.isExistInLocal = function (filePath, success, error) {
                var xhr = this.createXHR(success, error);
                var flag = false;
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                            success();
                        }
                        else {
                            error();
                        }
                    }
                };
                xhr.open("get", filePath, true);
                xhr.send(null);
            };
            /**
             * @description 创建XHR对象
             */
            FileService.createXHR = function (success, error) {
                if (typeof XMLHttpRequest != "undefined") {
                    return new XMLHttpRequest();
                }
                else if (typeof ActiveXObject != "undefined") {
                    if (typeof arguments.callee.activeXString != "string") {
                        var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"], i, len;
                        for (i = 0, len = versions.length; i < len; i++) {
                            try {
                                new ActiveXObject(versions[i]);
                                arguments.callee.activeXString = versions[i];
                                break;
                            }
                            catch (ex) {
                                error();
                                throw ex;
                            }
                        }
                    }
                    return new ActiveXObject(arguments.callee.activeXString);
                }
                else {
                    error();
                    throw new Error("No XHR object avaliable !");
                }
            };
            return FileService;
        }());
        bui.FileService = FileService;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  NetHallServer
 * 描述  :  厅堂连接信息
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/5/13
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var NetHallServer = (function () {
            function NetHallServer() {
            }
            return NetHallServer;
        }());
        bui.NetHallServer = NetHallServer;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  ClassUtils
 * 描述  :  类工具包
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  5/9/2016 13:21:31 PM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var ClassUtils = (function () {
            function ClassUtils() {
            }
            /**
             * @description 通过类的全路径来获取类
             * @classPathArg 类的全路径
             */
            ClassUtils.forName = function (classPathArg) {
                var buiClass = null;
                if (!classPathArg) {
                    console.error("ClassUtils: " + classPathArg + "\u8DEF\u5F84\u65E0\u6548");
                }
                else {
                    if (classPathArg.indexOf(".") == -1) {
                        console.error("ClassUtils:" + classPathArg + "\u672A\u5305\u542Bclass\u7684\u5168\u8DEF\u5F84");
                    }
                    else {
                        var classPath = classPathArg.split(".");
                        for (var i = 0; i < classPath.length; i++) {
                            if (i == 0) {
                                if (!window.hasOwnProperty(classPath[i])) {
                                    console.error("ClassUtils: \u4E0D\u80FD\u901A\u8FC7\u9884\u8BBE\u7684" + classPath + "\u83B7\u53D6\u5230window\u5BF9\u8C61\u4E2D" + classPath[i] + "\u7684\u5B9E\u4F8B,\u8BF7\u68C0\u67E5" + classPath + "\u662F\u5426\u5408\u6CD5");
                                    return;
                                }
                                buiClass = window[classPath[i]];
                            }
                            else {
                                if (!buiClass.hasOwnProperty(classPath[i])) {
                                    console.error("ClassUtils: \u4E0D\u80FD\u901A\u8FC7\u9884\u8BBE\u7684" + classPath + "\u83B7\u53D6\u5230" + classPath[i - 1] + "\u5BF9\u8C61\u4E2D" + classPath[i] + "\u7684\u5B9E\u4F8B\uFF0C\u8BF7\u68C0\u67E5" + classPath + "\u662F\u5426\u5408\u6CD5");
                                    return;
                                }
                                buiClass = buiClass[classPath[i]];
                            }
                        }
                    }
                }
                return buiClass;
            };
            /**
             * @description 动态生成类
             * @namespace 类的命名空间
             * @properties 传入的类属性参数
             */
            ClassUtils.generateClass = function (namespace, className, properties) {
                var buiClass = null;
                if (!namespace) {
                    console.error("ClassUtils: namespace(\u547D\u540D\u7A7A\u95F4) " + namespace + " \u8DEF\u5F84\u65E0\u6548");
                }
                else {
                    if (namespace.indexOf(".") == -1) {
                        console.error("ClassUtils:namespace(\u547D\u540D\u7A7A\u95F4) " + namespace + " \u9700\u8981\u5168\u8DEF\u5F84");
                    }
                    else {
                        var classTotalPath = namespace + "." + className;
                        var classPath = classTotalPath.split(".");
                        for (var i = 0; i < classPath.length; i++) {
                            if (i == 0) {
                                if (!window.hasOwnProperty(classPath[i])) {
                                    console.error("ClassUtils: \u4E0D\u80FD\u901A\u8FC7\u9884\u8BBE\u7684" + classPath + "\u83B7\u53D6\u5230window\u5BF9\u8C61\u4E2D" + classPath[i] + "\u7684\u5B9E\u4F8B,\u8BF7\u68C0\u67E5" + classPath + "\u662F\u5426\u5408\u6CD5");
                                    return;
                                }
                                buiClass = window[classPath[i]];
                            }
                            else if (i == 1) {
                                if (!buiClass.hasOwnProperty(classPath[i])) {
                                    console.error("ClassUtils: \u4E0D\u80FD\u901A\u8FC7\u9884\u8BBE\u7684" + classPath + "\u83B7\u53D6\u5230" + classPath[i - 1] + "\u5BF9\u8C61\u4E2D" + classPath[i] + "\u7684\u5B9E\u4F8B\uFF0C\u8BF7\u68C0\u67E5" + classPath + "\u662F\u5426\u5408\u6CD5");
                                    return;
                                }
                                buiClass = buiClass[classPath[i]];
                            }
                            else {
                                var propertiesString = bui.CommonUtils.getObjectAttrsToString(properties);
                                buiClass = (buiClass[classPath[i]] = bui.OOUtils.funcFactory(classPath[i], propertiesString));
                            }
                        }
                    }
                }
                return buiClass;
            };
            /**
             * @description 动态为谋类生成方法
             * @classPathArg class的全路径
             * @methodName 生成的方法名
             * @methodFunction 传入的方法地址
             */
            ClassUtils.generateMethod = function (classPathArg, methodName, methodFunction) {
                var buiClass = ClassUtils.forName(classPathArg);
                buiClass.prototype[methodName] = methodFunction;
            };
            return ClassUtils;
        }());
        bui.ClassUtils = ClassUtils;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  SocketObserver
 * 描述  :  webSocket的观察者，考虑到注入的直接是类，被观察者会调用类中的方法，所以在每个方法都设置为静态方法
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/5/13
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../util/ClassUtils.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var SocketObserverable = (function () {
            function SocketObserverable() {
            }
            /**
           * @description 把观察者注入到被观察者中
           * @type 观察者的标识
           * @entity 观察者实例
           */
            SocketObserverable.register = function (type, entity) {
                if (!this.byType(type)) {
                    this.observers.set(type, entity);
                }
            };
            /**
             * @description 注销观察者
             * @type 观察者的标识
             */
            SocketObserverable.unRegister = function (type) {
                if (this.byType(type)) {
                    this.observers.delete(type);
                }
                else {
                    console.info("SocketObserverable \u6CA1\u6709\u6B64" + type + "\u89C2\u5BDF\u8005");
                }
            };
            /**
             * @description 清除被观察者中的所有数据
             */
            SocketObserverable.removeAll = function () {
                this.observers.clear();
            };
            /**
           * @description通过类的全路径来查询在windows下挂载的类
           * @someClass 类的全路径
           */
            SocketObserverable.byType = function (type) {
                return this.observers.get(type);
            };
            /**
             * @description 为type订阅者发布通知
             * @type 事件类型
             * @args 传递的数据
             */
            SocketObserverable.notify = function (type, args) {
                var observer = this.byType(type);
                if (observer) {
                    observer.notify(args);
                }
                else {
                    console.error("SocketObserverable \u6CA1\u6709\u6B64" + type + "\u89C2\u5BDF\u8005");
                }
            };
            /**
             * @description 为每个订阅者发布通知
             */
            SocketObserverable.notifyAll = function (args) {
                var _this = this;
                if (this.observers) {
                    this.observers.forEach(function (value, index) {
                        _this.byType(index).notify();
                    });
                }
            };
            SocketObserverable.observers = new Map();
            return SocketObserverable;
        }());
        bui.SocketObserverable = SocketObserverable;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  EventType
 * 描述  :  事件类型
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  9/4/2016
************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        (function (EventType) {
            EventType[EventType["clientActive"] = 1] = "clientActive";
            EventType[EventType["clientIdle"] = 2] = "clientIdle";
        })(bui.EventType || (bui.EventType = {}));
        var EventType = bui.EventType;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  AccountManagerLogs
 * 描述  :  客户经理日志
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/6/25
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var AccountManagerLogs = (function () {
            function AccountManagerLogs() {
            }
            return AccountManagerLogs;
        }());
        bui.AccountManagerLogs = AccountManagerLogs;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  CustChannel
 * 描述  :  自助渠道到访客户信息列表
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/7/01
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var AssistChannel = (function () {
            function AssistChannel() {
            }
            return AssistChannel;
        }());
        bui.AssistChannel = AssistChannel;
        var CustChannel = (function () {
            function CustChannel() {
            }
            return CustChannel;
        }());
        bui.CustChannel = CustChannel;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  CustAccumltGold
 * 描述  :  客户积存金实体
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/7/01
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var CustAccumltGold = (function () {
            function CustAccumltGold() {
            }
            return CustAccumltGold;
        }());
        bui.CustAccumltGold = CustAccumltGold;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  CustDeposit
 * 描述  :  客户存款实体
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/7/01
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var CustDeposit = (function () {
            function CustDeposit() {
            }
            return CustDeposit;
        }());
        bui.CustDeposit = CustDeposit;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  CustFund
 * 描述  :  客户基金实体
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/7/01
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var CustFund = (function () {
            function CustFund() {
            }
            return CustFund;
        }());
        bui.CustFund = CustFund;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  CustInsurance
 * 描述  :  客户保险实体
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/7/01
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var CustInsurance = (function () {
            function CustInsurance() {
            }
            return CustInsurance;
        }());
        bui.CustInsurance = CustInsurance;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  CustManager
 * 描述  :  网点客户经理
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/7/01
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var CustManager = (function () {
            function CustManager() {
            }
            return CustManager;
        }());
        bui.CustManager = CustManager;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  CustNationalDebt
 * 描述  :  客户国债实体
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/7/01
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var CustNationalDebt = (function () {
            function CustNationalDebt() {
            }
            return CustNationalDebt;
        }());
        bui.CustNationalDebt = CustNationalDebt;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  CustNobleMetal
 * 描述  :  客户实物贵金属实体
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/7/01
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var CustNobleMetal = (function () {
            function CustNobleMetal() {
            }
            return CustNobleMetal;
        }());
        bui.CustNobleMetal = CustNobleMetal;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  CustPhoenixTreasure
 * 描述  :  客户凤凰宝实体
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/7/01
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var CustPhoenixTreasure = (function () {
            function CustPhoenixTreasure() {
            }
            return CustPhoenixTreasure;
        }());
        bui.CustPhoenixTreasure = CustPhoenixTreasure;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  CustTrust
 * 描述  :  客户信任实体
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/7/01
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var CustTrust = (function () {
            function CustTrust() {
            }
            return CustTrust;
        }());
        bui.CustTrust = CustTrust;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  CustomerQueues
 * 描述  :  客户队列
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/6/17
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../btop/btop.hui.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var CustomerQueues = (function () {
            function CustomerQueues() {
                this.BusQueue = new Array(); //数组
            }
            return CustomerQueues;
        }());
        bui.CustomerQueues = CustomerQueues;
        var BusQueue = (function () {
            function BusQueue() {
                this.Ticket = new Array(); //数组
            }
            return BusQueue;
        }());
        bui.BusQueue = BusQueue;
        var Ticket = (function () {
            function Ticket() {
            }
            return Ticket;
        }());
        bui.Ticket = Ticket;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Device
 * 描述  :  设备信息
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/6/24
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Device = (function () {
            function Device() {
            }
            return Device;
        }());
        bui.Device = Device;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  History
 * 描述  :  历史信息
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/9/5
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var History = (function () {
            function History() {
            }
            return History;
        }());
        bui.History = History;
        var MediaRecord = (function () {
            function MediaRecord() {
            }
            return MediaRecord;
        }());
        bui.MediaRecord = MediaRecord;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  LobbyManagerLogs
 * 描述  :  大堂经理日志
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/6/28
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var LobbyManagerLogs = (function () {
            function LobbyManagerLogs() {
            }
            return LobbyManagerLogs;
        }());
        bui.LobbyManagerLogs = LobbyManagerLogs;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Notification
 * 描述  :  推送的数据
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/7/1
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        /**
         * @description 公告
         */
        var MsgNotice = (function () {
            function MsgNotice() {
                this.ISREADED = false; //是否被读
            }
            return MsgNotice;
        }());
        bui.MsgNotice = MsgNotice;
        /**
         * @description 销售线索通知消息推送
         */
        var MsgSaleLeads = (function () {
            function MsgSaleLeads() {
                this.ISREADED = false; //是否被读
            }
            return MsgSaleLeads;
        }());
        bui.MsgSaleLeads = MsgSaleLeads;
        /**
         * @description 贵宾客户达到网点通知
         */
        var MsgCust = (function () {
            function MsgCust() {
                this.ISREADED = false; //是否被读
                this.ticketDto = { fromQueue: '', ticket: null };
            }
            return MsgCust;
        }());
        bui.MsgCust = MsgCust;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  OppInfo
 * 描述  :  商机信息
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/6/22
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var OppInfo = (function () {
            function OppInfo() {
            }
            return OppInfo;
        }());
        bui.OppInfo = OppInfo;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  OppInfo
 * 描述  :  商机信息
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/6/22
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var ProductMenu = (function () {
            function ProductMenu() {
            }
            return ProductMenu;
        }());
        bui.ProductMenu = ProductMenu;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  ProductRecommendInfo
 * 描述  :  热销及推荐产品详情
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/7/12
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var ProductRecommendInfo = (function () {
            function ProductRecommendInfo() {
            }
            return ProductRecommendInfo;
        }());
        bui.ProductRecommendInfo = ProductRecommendInfo;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  ProductRecommendList
 * 描述  :  热销及推荐产品详情
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/7/12
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var ProductRecommendList = (function () {
            function ProductRecommendList() {
            }
            return ProductRecommendList;
        }());
        bui.ProductRecommendList = ProductRecommendList;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  ProductSellTrustList
 * 描述  :  热销及推荐产品详情
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/7/12
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/ 
/************************************************************************
 * 类名  :  SaleClue
 * 描述  :  销售线索
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/6/23
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var SaleClueList = (function () {
            function SaleClueList() {
                this.SaleList = new Array();
            }
            return SaleClueList;
        }());
        bui.SaleClueList = SaleClueList;
        var SaleClue = (function () {
            function SaleClue() {
            }
            return SaleClue;
        }());
        bui.SaleClue = SaleClue;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  SaleLeadsProduct
 * 描述  :  意向产品
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/6/30
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var SaleLeadsProduct = (function () {
            function SaleLeadsProduct() {
            }
            return SaleLeadsProduct;
        }());
        bui.SaleLeadsProduct = SaleLeadsProduct;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  TomorrowPlan
 * 描述  :  客户经理明日计划
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/6/30
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var TomorrowPlan = (function () {
            function TomorrowPlan() {
            }
            return TomorrowPlan;
        }());
        bui.TomorrowPlan = TomorrowPlan;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  UserInfo
 * 描述  :  用户信息
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/6/23
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var User = (function () {
            function User() {
            }
            return User;
        }());
        bui.User = User;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  BEvent
 * 描述  :  基于北农商事件,继承自hui.Event
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/3/22
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../btop/btop.hui.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var BEvent = (function () {
            function BEvent(event, data) {
                this.event = event;
                this.data = data;
            }
            return BEvent;
        }());
        bui.BEvent = BEvent;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  BEvent
 * 描述  :  基于北农商事件,继承自hui.Event
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/3/22
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var event;
        (function (event_1) {
            var Event = (function () {
                function Event(event, data) {
                    this.event = event;
                    this.data = data;
                }
                return Event;
            }());
            event_1.Event = Event;
        })(event = bui.event || (bui.event = {}));
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  EventHub
 * 描述  :  事件处理中心
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/9/5
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
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
                    var event = new bui.BEvent(type, data);
                    listener.handle(event);
                });
            };
            EventHub.listeners = new Map();
            return EventHub;
        }());
        bui.EventHub = EventHub;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  RoleFilter
 * 描述  :  角色过滤器
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/16
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../constants/Constant.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var RoleFilter = (function () {
            function RoleFilter() {
            }
            /**
             * @不同的角色可以根据权限来查看对应的组件
             * @param id 页面id
             */
            RoleFilter.filter = function (id) {
                var idNew = id.replace(/\./g, '\\.');
                var rootElement = $("#" + idNew)[0];
                var role = bui.Constant.LOGIN_ROLE;
                $(rootElement).find('div[bui-role-filter]').each(function () {
                    var isShow = false;
                    var attributes = RoleFilter.parseHuiAttr($(this), "bui-role-filter");
                    if (attributes != null || attributes != undefined) {
                        var roles = attributes.roles;
                        for (var i in roles) {
                            if (role == roles[i]) {
                                isShow = true;
                            }
                        }
                    }
                    if (!isShow) {
                        $(this).hide();
                    }
                });
                $(rootElement).find('li[bui-role-filter]').each(function () {
                    var isShow = false;
                    var attributes = RoleFilter.parseHuiAttr($(this), "bui-role-filter");
                    if (attributes != null || attributes != undefined) {
                        var roles = attributes.roles;
                        for (var i in roles) {
                            if (role == roles[i]) {
                                isShow = true;
                            }
                        }
                    }
                    if (!isShow) {
                        $(this).hide();
                    }
                });
                $(rootElement).find('button[bui-role-filter]').each(function () {
                    var isShow = false;
                    var attributes = RoleFilter.parseHuiAttr($(this), "bui-role-filter");
                    if (attributes != null || attributes != undefined) {
                        var roles = attributes.roles;
                        for (var i in roles) {
                            if (role == roles[i]) {
                                isShow = true;
                            }
                        }
                    }
                    if (!isShow) {
                        $(this).hide();
                    }
                });
            };
            RoleFilter.parseHuiAttr = function (jQueryNode, attrType) {
                var attributeString = jQueryNode.attr(attrType);
                if (attributeString == null
                    || attributeString == undefined
                    || attributeString == "")
                    return null;
                return JSON.parse(attributeString);
            };
            return RoleFilter;
        }());
        bui.RoleFilter = RoleFilter;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
///<reference path="../event/BEvent.ts"/>
///<reference path="../event/BEvent.ts"/>
/************************************************************************
 * 类名  :  SocketListener
 * 描述  :  Socket的监听器
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/5/16
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../util/HttpUtils.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var SocketListener = (function () {
            function SocketListener() {
            }
            SocketListener.handle = function (evtType, evt) {
                switch (evtType) {
                    case "socket.open":
                        {
                            //如果是远程且是debug模式，则提示已经建立连接
                            if (bui.Socket.isRemote && bui.Socket.isDebug) {
                                console.info("socket已建立连接");
                            }
                            break;
                        }
                    case "socket.error":
                        {
                            //如果是远程模式，出错则触发重连
                            if (bui.Socket.isRemote) {
                                bui.Socket.reOpen();
                            }
                            break;
                        }
                    case "socket.close":
                        {
                            break;
                        }
                    case "socket.message":
                        {
                            //接受推送内容，并解析
                            var jsonData = JSON.parse(evt.data);
                            //获取消息类型
                            var msgType = jsonData.msgType;
                            if ("#heart" == msgType) {
                                bui.SocketObserverable.notify("socket_notify");
                                var args = new Array();
                                args.push("login_ping");
                                bui.SocketObserverable.notify("login", args);
                                var responseObj = { "msgType": "#heart", "content": "" };
                                var responseJson = JSON.stringify(responseObj);
                                bui.Socket.socket.send(responseJson); //回应心跳
                                console.info("SocketListener心跳数据： " + evt.data);
                                return;
                            }
                            //处理信息
                            if ("#info" == msgType) {
                                var content = jsonData.content;
                                var args = new Array();
                                args.push("login_login");
                                args.push(content);
                                bui.SocketObserverable.notify("login", args);
                                console.info("SocketListener长链接链接服务器第一次返回数据： " + evt.data);
                            }
                            else {
                                var content = jsonData.content;
                                var args = new Array();
                                args.push("notification_msg");
                                args.push(JSON.parse(content));
                                bui.SocketObserverable.notify("login", args);
                                console.info("SocketListener客户端推送数据" + evt.data);
                            }
                            break;
                        }
                    default:
                        break;
                }
            };
            return SocketListener;
        }());
        bui.SocketListener = SocketListener;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  ConfigResource
 * 描述  :
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  4/6/2016 10:09:13 AM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
///<reference path="../constants/Constant.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var ConfigResource = (function () {
            function ConfigResource() {
            }
            ConfigResource.load = function (serverUrl, callback) {
                $.ajax({
                    url: serverUrl,
                    type: 'get',
                    dataType: 'JSON',
                    success: function (data) {
                        callback(data);
                    },
                    error: function (data) {
                        console.error("加载" + this.url + "资源出异常，提示信息" + data);
                    }
                });
            };
            return ConfigResource;
        }());
        bui.ConfigResource = ConfigResource;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  TimeUtil
 * 描述  :  时间工具包
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/3/22
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var TimeUtil = (function () {
            function TimeUtil() {
            }
            TimeUtil.getCurrentTime = function () {
                var date = new Date();
                var week = ["日", "一", "二", "三", "四", "五", "六"];
                var currentTime = this.formatDate(date, "yyyy/M/d EEE");
                var hour = date.getHours() < 10 && date.getHours() >= 0 ? "0" + date.getHours() : date.getHours() + '';
                var minute = date.getMinutes() < 10 && date.getMinutes() >= 0 ? "0" + date.getMinutes() : date.getMinutes() + '';
                var second = date.getSeconds() < 10 && date.getSeconds() >= 0 ? "0" + date.getSeconds() : date.getSeconds() + '';
                return currentTime + '  ' + hour + ':' + minute
                    + ':' + second;
            };
            TimeUtil.formatDate = function (date, fmt) {
                var o = {
                    "M+": date.getMonth() + 1,
                    "d+": date.getDate(),
                    "h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12,
                    "H+": date.getHours(),
                    "m+": date.getMinutes(),
                    "s+": date.getSeconds(),
                    "q+": Math.floor((date.getMonth() + 3) / 3),
                    "S": date.getMilliseconds() //毫秒
                };
                var week = {
                    "0": "\u65e5",
                    "1": "\u4e00",
                    "2": "\u4e8c",
                    "3": "\u4e09",
                    "4": "\u56db",
                    "5": "\u4e94",
                    "6": "\u516d"
                };
                if (/(y+)/.test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
                }
                if (/(E+)/.test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "") + week[date.getDay() + ""]);
                }
                for (var k in o) {
                    if (new RegExp("(" + k + ")").test(fmt)) {
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                    }
                }
                return fmt;
            };
            TimeUtil.getToday = function () {
                this.today = new Date();
                var day = this.today.getDate() < 10 && this.today.getDate() > 0 ? '0' + this.today.getDate() : this.today.getDate();
                var month = this.today.getMonth() < 10 && this.today.getMonth() > 0 ? '0' + (this.today.getMonth() + 1) : (this.today.getMonth() + 1);
                return this.today.getFullYear() + "-" + month + "-" + day;
            };
            TimeUtil.getAccurateToday = function () {
                this.today = new Date();
                return this.getToday() + "-" + this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
            };
            TimeUtil.getYM = function () {
                this.today = new Date();
                var month = this.today.getMonth() < 10 && this.today.getMonth() > 0 ? '0' + (this.today.getMonth() + 1) : (this.today.getMonth() + 1);
                return this.today.getFullYear() + "-" + month;
            };
            TimeUtil.getPreYM = function () {
                this.today = new Date();
                var year = this.today.getFullYear();
                var preMonth = this.today.getMonth() + 1 - 1;
                var preYear = preMonth >= 1 ? year : (year - 1);
                preMonth = preMonth <= 1 ? 12 : preMonth;
                return preYear + '-' + preMonth;
            };
            TimeUtil.getNextYM = function () {
                this.today = new Date();
                var year = this.today.getFullYear();
                var nextMonth = this.today.getMonth() + 1 + 1;
                var nextYear = nextMonth <= 12 ? year : (year + 1);
                nextMonth = nextMonth <= 12 ? nextMonth : 1;
                return nextYear + '-' + nextMonth;
            };
            TimeUtil.get2NextYM = function () {
                this.today = new Date();
                var year = this.today.getFullYear();
                var nextMonth = this.today.getMonth() + 2 + 1;
                var nextYear = nextMonth <= 12 ? year : (year + 1);
                nextMonth = nextMonth <= 12 ? nextMonth : 1;
                return nextYear + '-' + nextMonth;
            };
            TimeUtil.getYear = function () {
                this.today = new Date();
                return this.today.getFullYear();
            };
            TimeUtil.getMonth = function () {
                this.today = new Date();
                var month = this.today.getMonth() < 10 && this.today.getMonth() > 0 ? '0' + (this.today.getMonth() + 1) : (this.today.getMonth() + 1);
                return month;
            };
            TimeUtil.getDay = function () {
                this.today = new Date();
                var day = this.today.getDate() < 10 && this.today.getDate() > 0 ? '0' + this.today.getDate() : this.today.getDate();
                return day;
            };
            TimeUtil.isValidDate = function (date) {
                date = date.replace(/-/gi, '');
                var month = parseInt(date.substring(0, 2), 10), day = parseInt(date.substring(2, 4), 10), year = parseInt(date.substring(4, 8), 10);
                if ((month < 1) || (month > 12)) {
                    return false;
                }
                else if ((day < 1) || (day > 31)) {
                    return false;
                }
                else if (((month == 4) || (month == 6) || (month == 9) || (month == 11)) && (day > 30)) {
                    return false;
                }
                else if ((month == 2) && (((year % 400) == 0) || ((year % 4) == 0)) && ((year % 100) != 0) && (day > 29)) {
                    return false;
                }
                else if ((month == 2) && ((year % 100) == 0) && (day > 29)) {
                    return false;
                }
                return {
                    day: day,
                    month: month,
                    year: year
                };
            };
            /**
             * @description 获取当前小时
             */
            TimeUtil.getHour = function () {
                this.today = new Date();
                return this.today.getHours();
            };
            /**
             * @description 获取当前分钟
             */
            TimeUtil.getMinutes = function () {
                this.today = new Date();
                return this.today.getMinutes();
            };
            /**
             * @description 获取当前秒数
             */
            TimeUtil.getSeconds = function () {
                this.today = new Date();
                return this.today.getSeconds();
            };
            TimeUtil.getMilliseconds = function () {
                this.today = new Date();
                return this.today.getMilliseconds();
            };
            TimeUtil.getAnotherDay = function (n) {
                var now = new Date;
                now.setDate(now.getDate() - n);
                var day = now.getDate() < 10 && now.getDate() > 0 ? '0' + now.getDate() : now.getDate();
                var month = now.getMonth() < 10 && now.getMonth() > 0 ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1);
                return now.getFullYear() + "-" + month + "-" + day;
            };
            TimeUtil.today = new Date();
            return TimeUtil;
        }());
        bui.TimeUtil = TimeUtil;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Time
 * 描述  :  时间组件
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/3/21
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../../libs/jQuery.d.ts"/>
///<reference path="../../../util/TimeUtil.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Time = (function (_super) {
            __extends(Time, _super);
            function Time() {
                _super.apply(this, arguments);
            }
            Time.prototype.initView = function () {
                var that = this;
                var nowTime;
                $(that.nodeTypeMap.get("timeNode")).css('color', 'white');
                setInterval(function () {
                    nowTime = bui.TimeUtil.getCurrentTime();
                    $(that.nodeTypeMap.get("timeNode")).html(nowTime);
                }, 500);
            };
            return Time;
        }(btop.hui.Widget));
        bui.Time = Time;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  BGlobal
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/3/22
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../btop/btop.hui.d.ts"/>
///<reference path="../widget/impl/time/Time.ts"/>
///<reference path="../widget/impl/time/Time.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var BGlobal = (function () {
            function BGlobal() {
            }
            return BGlobal;
        }());
        bui.BGlobal = BGlobal;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  WidgetTemplate
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/3/22
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../btop/btop.hui.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var BWidgetTemplate = (function () {
            function BWidgetTemplate() {
            }
            BWidgetTemplate.Time = "<div class=\"bui-widget-view\">\n                                            <div class='bui-time-root'>\n                                                <div class='bui-time-content' hui-widget-nodeType=\"timeNode\"></div>\n                                            </div>\n                                        </div>";
            BWidgetTemplate.LandscapeBox = "<div class=\"bui-widget-view\">\n                                                        <div class='bui-lbox-root' hui-widget-nodeType=\"lboxRootNode\">\n                                                            <div class=\"bui-lbox-text-content\" hui-widget-nodeType=\"lboxTextNode\"></div>\n                                                            <div class=\"bui-lbox-img-content\" hui-widget-nodeType=\"lboxImgNode\">\n                                                                <div class=\"bui-lbox-img\"></div>\n                                                            </div>\n                                                        </div>\n                                                    </div>";
            BWidgetTemplate.PortraitBox = "<div class=\"bui-widget-view\">\n                                                        <div class='bui-pbox-root' hui-widget-nodeType=\"pboxRootNode\">\n                                                            <div class=\"bui-pbox-img-content\" >\n                                                                <img class=\"bui-pbox-img\" hui-widget-nodeType=\"pboxImgNode\"/>\n                                                            </div>\n                                                            <div class=\"bui-pbox-text-content\" hui-widget-nodeType=\"pboxTextNode\"></div>                                                      \n                                                        </div>\n                                                    </div>";
            BWidgetTemplate.CaculatorMenu = "<div class=\"bui-widget-view\">\n                                                        <div class='bui-cmenu-root' hui-widget-nodeType=\"pboxRootNode\">\n                                                            <div class='bui-cmenu-item' hui-widget-nodeType=\"cmenuItemNode\"></div>                                                      \n                                                        </div>\n                                                    </div>";
            BWidgetTemplate.Tab = "<div class=\"bui-widget-view\">\n                                                        <div class='bui-tab-root' hui-widget-nodeType=\"tabRootNode\">\n                                                            <div class='bui-tab-container'>\n                                                                \n                                                            </div>                                                      \n                                                        </div>\n                                                    </div>";
            BWidgetTemplate.Menu = "<div class=\"bui-widget-view\">\n                                                        <div class='bui-menu-root' hui-widget-nodeType=\"menuRootNode\">\n                                                            <div class='bui-menu-container'>\n                                                                \n                                                            </div>                                                      \n                                                        </div>\n                                                    </div>";
            BWidgetTemplate.Gallery = "<div class=\"bui-widget-view\">\n                                            <section id=\"gallery\" class=\"bui-gallery-root\"hui-widget-nodeType='galleryRootNode'>\n                                                <div hui-layout-type='RowLayout'>\n                                                     <div>\n                                                          <div class='col l2 m2'>\n                                                              <div class='bui-gallery-left-btn-container'>\n                                                                  <div class=\"bui-gallery-btn bui-gallery-btn-prev\">&gt;</div>\n                                                              </div>                                \n                                                          </div>\n                                                          <div class='col l8 m8' hui-widget-nodeType='galleryContentNode'>\n                                                               <div class=\"bui-gallery-wrapper\">                                                                       \n                                                                </div>                                                                                                                               \n                                                          </div>\n                                                          <div class='col l2 m2'>\n                                                               <div class='bui-gallery-right-btn-container'>\n                                                                   <div class=\"bui-gallery-btn bui-gallery-btn-next\">&lt;</div>                                                                    \n                                                               </div>    \n                                                          </div>\n                                                     </div>\n                                                </div>\n\n                                            </section>\n                                        </div>";
            BWidgetTemplate.ProductAlert = "<div class=\"bui-widget-view\">\n                                               <div class='bui-productalert-overlay' hui-widget-nodeType=\"OverLayNode\"></div>\n                                               <div class='bui-productalert-root'>\n                                                    <table class=\"table table-bordered productlist-alert-table\" hui-widget-nodeType=\"productAlertTable\">\n                                                         <tr class=\"warm\">\n                                                             <th>\u5B57\u6BB5\u540D\u79F0</th>\n                                                             <th>\n                                                                 <div class=\"bui-productalert-left-title\">\u9ED8\u8BA4\u503C</div>\n                                                                 <div class=\"bui-productalert-btn-delete\" hui-widget-nodeType=\"productAlertBtnDelete\">X</div>\n                                                             </th>\n                                                         </tr>\n                                                         \n                                                    </table>      \n                                               </div>\n                                           </div>\n                                         ";
            BWidgetTemplate.Login = "<div class=\"bui-widget-view\">\n                                      <div class=\"bui-login-overlay\"></div>\n                                      <div class=\"bui-login-root\" hui-widget-nodeType=\"loginRootNode\">\n                                          <div class=\"bui-login-title-container\">\n                                              <div class=\"row\">\n                                                   <div class=\"col l4 m4 push-l4 push-m4\" style=\"text-align:center;\">\n                                                        <span class=\"bui-login-title\" hui-widget-nodeType=\"loginTitleNode\">\u767B\u5F55</span>\n                                                   </div> \n                                                  \n                                               </div>\n                                          </div>\n                                          <div class=\"bui-login-container\" hui-widget-nodeType=\"loginContainerNode\">\n                                              \n                                               <div class=\"row\">\n                                                    <div class=\"col l12 m12 input-row\">\n                                                        <div class=\"row\">\n                                                            <div class=\"col l1 m1 push-l4 push-m4 input-wrapper-group\" style=\"text-align:right;\">\n                                                                <span for=\"loginUserAccount\" class=\"bui-login-label\">\u8D26\u53F7\uFF1A</span>\n                                                            </div>\n                                                            <div class=\"col l3 m3 push-l4 push-m4 input-wrapper-group\">\n                                                                <input type=\"text\" bui-disable-focus='true' class=\"input-control bui-login-input\" hui-widget-nodeType=\"loginAccountNode\" id=\"loginUserAccount\" placeholder=\"\u8BF7\u8F93\u5165\u8D26\u53F7\">\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                               </div>\n                                               <div class=\"row\">\n                                                   <div class=\"col l12 m12 input-row\">\n                                                        <div class=\"row\">\n                                                            <div class=\"col l1 m1 push-l4 push-m4 input-wrapper-group\" style=\"text-align:right;\">\n                                                                <span for=\"loginUserPwd\" class=\"bui-login-label\">\u5BC6\u7801\uFF1A</span>\n                                                            </div>\n                                                            <div class=\"col l3 m3 push-l4 push-m4 input-wrapper-group\">\n                                                                <input type=\"password\" bui-disable-focus='true' class=\"input-control bui-login-input\" hui-widget-nodeType=\"loginPwdNode\" id=\"loginUserPwd\" placeholder=\"\u8BF7\u8F93\u5165\u5BC6\u7801\">\n                                                            </div>\n                                                        </div>\n                                                       \n                                                    </div>\n                                               </div>\n                                               <div class=\"row\" style=\"width:90%;\">\n                                                   <div class=\"col l4 m4 push-l4 push-m4 btn btn-cold btn-lg bui-login-submit-btn\" style=\"margin-left:15px;\"  hui-widget-nodeType=\"loginBtnNode\">\n                                                      \u767B\u5F55\n                                                   </div>\n                                               </div>\n                                                <div class=\"row\" style=\"width:90%;\">\n                                                   <div class=\"col l4 m4 push-l4 push-m4 btn btn-warm btn-lg bui-login-submit-btn\" style=\"margin-left:15px;\" hui-widget-nodeType=\"cancelBtnNode1\">\n                                                      \u53D6\u6D88\u767B\u5F55\n                                                   </div>\n                                               </div>\n                                          </div>\n                                          <div class=\"bui-login-verify-container\" hui-widget-nodeType=\"loginVerifyContainer\">\n                                             <div class=\"row\">\n                                                   <div class=\"col l12 m12 input-row\">\n                                                       <div class=\"row\">\n                                                            <div class=\"col l1 m1 push-l4 push-m4 input-wrapper-group\" style=\"text-align:right;\">\n                                                                <span for=\"loginVerifyCode\" class=\"bui-login-label\">\u9A8C\u8BC1\u7801\uFF1A</span>\n                                                            </div>\n                                                            <div class=\"col l3 m3 push-l4 push-m4 input-wrapper-group\">\n                                                                <input type=\"text\" bui-disable-focus='true' class=\"input-control bui-login-input\" hui-widget-nodeType=\"loginVerifyCodeNode\" id=\"loginVerifyCode\" placeholder=\"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\">\n                                                            </div>\n                                                       </div>\n                                                    </div>\n                                               </div>\n                                              <div class=\"row\" style=\"width:90%;\">\n                                                   <div class=\"col l4 m4 push-l4 push-m4 btn btn-lg btn-success bui-login-verify-btn\" hui-widget-nodeType=\"loginGetVerifyBtnNode\">\n                                                      \u83B7\u53D6\u9A8C\u8BC1\u7801\n                                                   </div>\n                                               </div>\n                                               <div class=\"row\" style=\"width:90%;\">\n                                                   <div class=\"col l4 m4 push-l4 push-m4 btn btn-lg btn-cold bui-login-submit-btn\"  hui-widget-nodeType=\"loginSubmitVerifyBtnNode\">\n                                                      \u767B\u5F55\n                                                   </div>\n                                               </div>\n                                               <div class=\"row\" style=\"width:90%;\">\n                                                   <div class=\"col l4 m4 push-l4 push-m4 btn btn-lg btn-warm bui-login-submit-btn\"  hui-widget-nodeType=\"cancelBtnNode2\">\n                                                      \u53D6\u6D88\u767B\u5F55\n                                                   </div>\n                                               </div>\n                                          </div>\n                                      </div>\n                                  </div>";
            BWidgetTemplate.UserCard = "<div class=\"bui-widget-view\">\n                                            <div class='bui-usercard-root'>\n                                                <div class='bui-usercard-triangle'></div>\n                                                <div class='bui-usercard-container'>\n                                                    <div class=\"row\">\n                                                        <div class=\"col l5 m5 bui-usercard-title\">\n                                                            <div class=\"label\">\u7528\u6237\u540D\uFF1A</div>\n                                                        </div>\n                                                        <div class=\"col l7 m7 bui-usercard-content\">\n                                                            <span hui-widget-nodeType=\"userNameNode\"></span>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"row\">\n                                                        <div class=\"col l5 m5 bui-usercard-title\">\n                                                            <div  class=\"label\">\u5DE5&nbsp;&nbsp;&nbsp;\u53F7\uFF1A</div>\n                                                        </div>\n                                                        <div class=\"col l7 m7 bui-usercard-content\">\n                                                            <span hui-widget-nodeType=\"userAccount\"></span>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"row\">\n                                                        <div class=\"col l5 m5 bui-usercard-title\">\n                                                            <div  class=\"label\">\u5C97&nbsp;&nbsp;&nbsp;\u4F4D\uFF1A</div>\n                                                        </div>\n                                                        <div class=\"col l7 m7 bui-usercard-content\">\n                                                            <span hui-widget-nodeType=\"userRoleNode\"></span>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"row\" style=\"width:90%;\">\n                                                        <div class=\"col l12 m12 btn btn-cold\"  hui-widget-nodeType=\"userCardLogOutBtnNode\">\n                                                            \u6CE8\u9500\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                \n                                            </div>\n                                        </div>";
            BWidgetTemplate.Select = "<div class=\"bui-widget-view\">\n                                            <div class='bui-select-root'>\n                                                <input type=\"text\" value=\"--\u8BF7\u9009\u62E9--\" class=\"bui-select-input input-control\" hui-widget-nodeType=\"selectInputNode\" readonly />\n                                                <div class=\"bui-select-container\">\n                                                    <ul class=\"bui-select-list\"  hui-widget-nodeType=\"selectListNode\">\n                                                    </ul>\n                                                </div>\n                                            </div>                                            \n                                         </div>";
            BWidgetTemplate.Notification = "<div class=\"bui-widget-view\">\n                                              <div class='bui-notification-root' hui-widget-nodeType=\"notificationRootNode\">\n                                                  <div class='bui-notification-container'>\n                                                      <div class=\"row bui-notification-tabs\" hui-widget-nodeType=\"notificationTabsNode\"> \n                                                          <div class=\"col l4 m4 bui-notification-title\" hui-widget-nodeType=\"title1Node\">\n                                                               \u516C\u544A\n                                                               <span hui-widget-nodeType=\"msgNoticeNoReadNode\" class=\"bui-notification-unread-count1\"></span>\n                                                          </div>\n                                                          <div class=\"col l4 m4 bui-notification-title\" hui-widget-nodeType=\"title2Node\">\n                                                               \u9500\u552E\u7EBF\u7D22\n                                                               <span hui-widget-nodeType=\"msgSaleClueNoReadNode\" class=\"bui-notification-unread-count2\"></span>\n                                                          </div>\n                                                          <div class=\"col l4 m4 bui-notification-title\" hui-widget-nodeType=\"title3Node\">\n                                                               \u5BA2\u6237\n                                                               <span hui-widget-nodeType=\"msgCustNoReadNode\" class=\"bui-notification-unread-count3\"></span>\n                                                          </div>\n                                                      </div>\n                                                      <div class=\"bui-notification-content\" hui-widget-nodeType=\"notificationContentNode\">\n                                                          <div>\n                                                            <div class=\"bui-notification-content-item\"  hui-widget-nodeType=\"notificationSubContentNode1\">\n                                                               \n                                                            </div>\n                                                          </div>\n                                                          <div>\n                                                            <div class=\"bui-notification-content-item\"  hui-widget-nodeType=\"notificationSubContentNode2\">\n                                                               \n                                                            </div>\n                                                          </div>\n                                                          <div>\n                                                            <div class=\"bui-notification-content-item\"  hui-widget-nodeType=\"notificationSubContentNode3\">\n                                                               \n                                                            </div>\n                                                          </div>\n                                                          \n                                                      </div>\n                                                  </div>\n                                              </div> \n                                           </div>";
            BWidgetTemplate.CustomerCard = "<div class=\"bui-widget-view\">\n                                              <div class=\"bui-customercard-root\" hui-widget-nodeType=\"customercardRootNode\">\n                                                  <div hui-layout-type=\"RowLayout\" class=\"bui-customercard-content-container\">\n                                                        <div>\n                                                            <div class=\"col l4 m4 push-l2 push-m2 top-title\">\n                                                                \u4E2A\u4EBA\u4E1A\u52A1\n                                                            </div>\n                                                            <div class=\"col l5 m5 push-l1 push-m1 top-title\">\n                                                                <div class=\"dengdaiTime \">\n                                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2min\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div style=\"margin-top: 50px\">\n                                                            <div class=\"mid-title\" hui-widget-nodeType=\"customercarTitleNode\">\n                                                                \n                                                            </div>\n                                                        </div>\n                                                        <div>\n                                                            <div class=\"col l5 m5 push-l2 push-m2 \">\n                                                                \u5BA2\u6237\u59D3\u540D\uFF1A\n                                                            </div>\n                                                            <div class=\"col l7 m7\">\n                                                                <div><span hui-widget-nodeType=\"custNameNode\"></span></div>\n                                                            </div>\n                                                        </div>\n                                                        <div>\n                                                            <div class=\"col l5 m5 push-l2 push-m2 \">\n                                                                <div>\n                                                                    <span>\u5BA2\u6237\u7B49\u7EA7\uFF1A</span>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"col l7 m7\">\n                                                                <div>\n                                                                    <span hui-widget-nodeType=\"custLevelNode\"></span>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n\n                                                        <div>\n                                                            <div class=\"col l2 m2\">\n                                                                <div class=\"xingbie\"></div>\n                                                            </div>\n                                                            <div class=\"col l3 m3\">\n                                                                \u5BA2\u6237\u6027\u522B:\n                                                            </div>\n                                                            <div class=\"col l7 m7\">\n                                                                <div><span hui-widget-nodeType=\"custSexNode\">\u7537/\u5973</span></div>\n                                                            </div>\n                                                        </div>\n\n                                                        <div>\n                                                            <div class=\"col l2 m2\">\n                                                                <div class=\"shengri\"></div>\n                                                            </div>\n                                                            <div class=\"col l3 m3\">\n                                                                \u5BA2\u6237\u751F\u65E5:\n                                                            </div>\n                                                            <div class=\"col l7 m7\">\n                                                                <div><span hui-widget-nodeType=\"custBirthdayNode\"></span></div>\n                                                            </div>\n                                                        </div>\n\n                                                        <div>\n                                                            <div class=\"col l2 m2 \">\n                                                                <div class=\"star\"></div>\n                                                            </div>\n                                                            <div class=\"col l3 m3\">\n                                                                \u94F6\u884C\u8BC4\u7EA7:\n                                                            </div>\n                                                            <div class=\"col l7 m7\">\n                                                                <div><span hui-widget-nodeType=\"bankRankNode\"></span></div>\n                                                            </div>\n                                                        </div>\n\n                                                       \n\n                                                        <div>\n                                                            <div class=\"col l4 m4 push-l8 push-m8 \">\n                                                                <div class=\"btn btn-cold btn-sm\" hui-widget-nodeType=\"adjustQueueBtnNode\">\u961F\u5217\u8C03\u6574</div>\n                                                            </div>\n                                                        </div>\n                                                         <div>\n                                                            <div class=\"col l4 m4 push-l8 push-m8\">\n                                                                <div class=\"btn btn-danger btn-sm\" hui-widget-nodeType=\"abandonQueueBtnNode\">\u5E9F\u5F03\u961F\u5217</div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                              </div>\n                                          </div>";
            BWidgetTemplate.Prompt = "<div class=\"bui-widget-view\">\n                                         <div class=\"bui-prompt-overlay\"></div>\n                                         <div class=\"bui-prompt-root\" hui-widget-nodeType=\"promptRootNode\">\n                                             <div class=\"bui-prompt-container\" hui-layout-type=\"RowLayout\">\n                                                <div>\n                                                    <div class=\"col l4 m4 push-l4 push-m4 \" style=\"text-align:center;\">\n                                                        <span class=\"bui-prompt-title\" hui-widget-nodeType=\"promptTitleNode\"></span>\n                                                    </div>\n                                                    \n                                                </div>\n                                                <div>\n                                                    <div class=\"bui-prompt-labels col l4 m4 push-l4 push-m4 \" hui-widget-nodeType=\"promptLabeNode\">\n                                                    \n                                                    </div>\n                                                </div>    \n                                                <div>\n                                                    <div class=\"bui-prompt-buttons col l4 m4 push-l4 push-m4 \">\n                                                        <div hui-layout-type=\"RowLayout\">\n                                                            <div>\n                                                               <div class=\"col l3 m3\">\n                                                                   <div class=\"btn btn-warm bui-prompt-cancel-btn\" hui-widget-nodeType=\"cancelBtnNode\">\u53D6\u6D88</div>\n                                                               </div>\n                                                               <div class=\"col l3 m3 push-l1 push-m1 \">\n                                                                   <div class=\"btn btn-cold bui-prompt-confirm-btn\" hui-widget-nodeType=\"confirmBtnNode\">\u786E\u5B9A</div>\n                                                               </div>\n                                                            <div/>\n                                                        </div>\n                                                    </div> \n                                                </div>            \n                                             </div>\n                                             \n                                         </div>\n                                     </div>";
            BWidgetTemplate.Alert = "<div class=\"bui-widget-view\">\n                                      <div class=\"bui-alert-overlay\"></div>\n                                      <div class=\"bui-alert-root\" hui-widget-nodeType=\"alertRootNode\">\n                                          <div class=\"bui-alert-container\">\n                                               <div class=\"row\">\n                                                   <div class=\"col l4 m4 push-l4 push-m4 \" style=\"text-align:center;\">\n                                                        <span class=\"bui-alert-title\" hui-widget-nodeType=\"alertTitleNode\"></span>\n                                                   </div> \n                                               </div>\n                                               <div class=\"row\">\n                                                   <div class=\"col l4 m4 push-l4 push-m4 \">\n                                                        <span class=\"bui-alert-content\" hui-widget-nodeType=\"alertContentNode\"></span>\n                                                   </div>\n                                               </div>\n                                               <div class=\"row\">\n                                                   <div class=\"col l4 m4 push-l7 push-m7\">\n                                                       <div class=\"btn btn-cold bui-alert-confirm-btn\" hui-widget-nodeType=\"confirmBtnNode\">\u786E\u5B9A</div>\n                                                   </div>\n                                               </div>\n                                          </div>\n                                      </div>\n                                  </div>";
            BWidgetTemplate.ToastTip = "<div class=\"bui-widget-view\">\n                                      <div class=\"bui-toasttip-root\" hui-widget-nodeType=\"toastTipRootNode\">\n                                          <div class=\"bui-toasttip-container\">\n                                               <div class=\"bui-toasttip-content\" hui-widget-nodeType=\"alertContentNode\"></div>\n                                          </div>\n                                          <div class=\"bui-toasttip-operation row\" hui-widget-nodeType=\"toastTipOperiationsNode\">\n                                               <div class=\"col l5 push-l7\">\n                                                   <div class=\"btn btn-info bui-alert-confirm-btn\" hui-widget-nodeType=\"closeBtnNode\">\u5173\u95ED</div>\n                                               </div>\n                                          </div>\n                                      </div>\n                                  </div>";
            BWidgetTemplate.ComplexToastTip = "<div class=\"bui-widget-view\">\n                                      <div class=\"bui-complextoasttip-root\" hui-widget-nodeType=\"toastTipRootNode\">\n                                          <div class=\"bui-complextoasttip-container\">\n                                               <div class=\"bui-complextoasttip-content\" hui-widget-nodeType=\"alertContentNode\"></div>\n                                          </div>\n                                          <div class=\"bui-complextoasttip-operation row\" hui-widget-nodeType=\"toastTipOperiationsNode\">\n                                               <div class=\"col l5 push-l7\">\n                                                   <div class=\"btn btn-info bui-alert-confirm-btn\" hui-widget-nodeType=\"closeBtnNode\">\u5173\u95ED</div>\n                                               </div>\n                                          </div>\n                                      </div>\n                                  </div>";
            BWidgetTemplate.Confirm = "<div class=\"bui-widget-view\">\n                                      <div class=\"bui-confirm-overlay\"></div>\n                                      <div class=\"bui-confirm-root\" hui-widget-nodeType=\"confirmRootNode\">\n                                          <div class=\"bui-confirm-container\">\n                                               <div class=\"row\">\n                                                   <div class=\"col l4 m4 push-l4 push-m4 \" style=\"text-align:center;\">\n                                                        <span class=\"bui-confirm-title\" hui-widget-nodeType=\"confirmTitleNode\"></span>\n                                                   </div> \n                                               </div>\n                                               <div class=\"row\">\n                                                   <div class=\"col l4 m4 push-l4 push-m4 \">\n                                                        <p class=\"bui-confirm-content\" hui-widget-nodeType=\"confirmContentNode\"></p>\n                                                   </div>\n                                               </div>\n                                               <div class=\"row\">\n                                                   <div class=\"col l1 m1 push-l6 push-m6\">\n                                                        <div class=\"btn btn-warm bui-confirm-cancel-btn\" hui-widget-nodeType=\"cancelBtnNode\">\u53D6\u6D88</div>\n                                                   </div>\n                                                   <div class=\"col l1 m1 push-l6 push-m6\">\n                                                        <div class=\"btn btn-cold bui-confirm-confirm-btn\" hui-widget-nodeType=\"confirmBtnNode\">\u786E\u5B9A</div>\n                                                   </div>\n                                               </div>\n                                          </div>\n                                      </div>\n                                  </div>";
            BWidgetTemplate.LogCalendar = "<div class=\"bui-widget-view\">\n                                            <div class=\"bui-log-root\">\n                                                <div class=\"bui-log-calendar-wrap\">\n                                                    <div  hui-widget-nodeType=\"logCalendarInnerNode\" class=\"bui-log-calendar-inner\">\n                                                        <div class=\"bui-log-calendar-header clearfix\">\n                                                            <nav>\n                                                                <span id=\"custom-prev\" hui-widget-nodeType=\"logCalendarNextBtn\" class=\"bui-log-calendar-prev\"></span>\n                                                                <span id=\"custom-next\" hui-widget-nodeType=\"logCalendarPrevBtn\"logCalendarPrevBtn class=\"bui-log-calendar-next\"></span>\n                                                            </nav>\n                                                            <h2 hui-widget-nodeType=\"logCalendarMonthNode\" class=\"bui-log-calendar-month\"></h2>\n                                                            <h3 hui-widget-nodeType=\"logCalendarYearNode\" class=\"bui-log-calendar-year\"></h3>\n                                                        </div>\n                                                        <div hui-widget-nodeType=\"logCalendarElementNode\" class=\"bui-log-calendar-container\"></div>\n                                                    </div>\n                                                    <div class=\"bui-log-panel-container\" id=\"logPanelContainer\">\n\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>";
            BWidgetTemplate.LogPanel = "<div class=\"bui-widget-view\">\n                                          <div class=\"bui-logpanel-root\">\n                                               <div class=\"bui-logpanel-wrapper\">\n                                                   <div class=\"bui-logpanel-add-btn-container\" hui-widget-nodeType=\"logPanelAddBtnContainerNode\">\n                                                       <div class=\"btn btn-cold\" hui-widget-nodeType=\"logPanelAddBtnNode\">\u6DFB\u52A0\u65E5\u5FD7</div>     \n                                                   </div>\n                                                   <div class=\"bui-logpanel-container\" hui-widget-nodeType=\"logPanelContainerNode\">            \n                                                       <div class=\"bui-logpanel-title\" hui-widget-nodeType=\"logpanelTitleNode\"></div>\n                                                       <div class=\"bui-logpanel-content\" hui-widget-nodeType=\"logPanelContentNode\"></div>\n                                                       <div class=\"btn btn-cold\" hui-widget-nodeType=\"logPanelEditBtnNode\">\u7F16\u8F91</div>    \n                                                   </div>\n                                                   <div class=\"bui-logpanel-edit-container\" hui-widget-nodeType=\"logPanelEditContainerNode\">            \n                                                       <input type=\"text\" class=\"bui-logpanel-edit-title\" hui-widget-nodeType=\"logpanelTitleEditNode\"/>\n                                                       <input type=\"textarea\" class=\"bui-logpanel-edit-content\" hui-widget-nodeType=\"logPanelContentEditNode\"/>\n                                                        <div class=\"btn btn-cold\" hui-widget-nodeType=\"logPanelSaveBtnNode\">\u4FDD\u5B58</div> \n                                                   </div>\n                                               </div>\n                                          </div>\n                                     </div>";
            BWidgetTemplate.HallManager = "<div class=\"bui-widget-view\">\n                                             <div class=\"bui-hallmanager-root\" hui-widget-nodeType=\"buiHallmanagerRootNode\">\n                                                  <div class=\"bui-hallmanager-nav\">\n                                                      <div class=\"row\">\n                                                           <div class=\"col l5 m5 bui-hallmanager-nav-tabs\" hui-widget-nodeType=\"hallManagerNavTabsNode\">\n                                                           \n                                                           </div>\n                                                           <div  class=\"col l1 m1\">\n                                                               <div class=\"bui-hallmanager-right-arrow\" hui-widget-nodeType=\"hallManagerExpandNavTabsNode\">&gt;</div>\n                                                           </div>\n                                                           <div class=\"col l6 m6 bui-hallmanager-nav-sort\" hui-widget-nodeType=\"hallManagerNavSortNode\">\n                                                               <div class=\"row\">\n                                                                    <div class=\"col l3 m3\" hui-widget-nodeType=\"hallManagerSelectNode\" style=\"text-align:left;\">\n                                                                        \n                                                                    </div>\n                                                                    <div class=\"col l3 m3\">\n                                                                        <div class=\"row\">\n                                                                            <div class=\"col l6 m6\" hui-widget-nodeType=\"ticketNoSortsNode\">\n                                                                                <span>\u6392\u961F\u53F7</span>\n                                                                            </div>\n                                                                            <div class=\"col l4 m4 hui-hallmanager-sort-control-container\">\n                                                                                <div class=\"hui-hallmanager-sort-aes-control\" hui-widget-nodeType=\"ticketNoSortAesNode\"></div>\n                                                                                <div class=\"hui-hallmanager-sort-des-control\" hui-widget-nodeType=\"ticketNoSortDesNode\"></div>\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"col l3 m3\">\n                                                                       <div class=\"row\">\n                                                                            <div class=\"col l8 m8\" hui-widget-nodeType=\"custLevelSortsNode\">\n                                                                                <span>\u5BA2\u6237\u7B49\u7EA7</span>\n                                                                            </div>\n                                                                            <div class=\"col l4 m4 hui-hallmanager-sort-control-container\">\n                                                                                <div class=\"hui-hallmanager-sort-aes-control\" hui-widget-nodeType=\"custLevelSortAesNode\"></div>\n                                                                                <div class=\"hui-hallmanager-sort-des-control\" hui-widget-nodeType=\"custLevelSortDesNode\"></div>\n                                                                            </div>\n                                                                        </div>     \n                                                                    </div>\n                                                                    <div class=\"col l3 m3\">\n                                                                       <div class=\"row\">\n                                                                            <div class=\"col l6 m6\" hui-widget-nodeType=\"printTimeSortsNode\">\n                                                                                <span>\u65F6\u95F4</span>\n                                                                            </div>\n                                                                            <div class=\"col l4 m4 hui-hallmanager-sort-control-container\">\n                                                                                <div class=\"hui-hallmanager-sort-aes-control\" hui-widget-nodeType=\"printTimeSortAesNode\"></div>\n                                                                                <div class=\"hui-hallmanager-sort-des-control\" hui-widget-nodeType=\"printTimeSortDesNode\"></div>\n                                                                            </div>\n                                                                        </div>  \n                                                                        \n                                                                    </div>\n                                                               </div>\n                                                           </div>\n                                                      </div>\n                                                  </div>\n                                                  <div class=\"bui-hallmanager-queue-container\" hui-widget-nodeType=\"hallQueueContainerNode\">\n                                                  \n                                                  </div>\n                                             </div>\n                                        </div>";
            BWidgetTemplate.CustomerQueue = "<div class=\"bui-widget-view\">\n                                             <div class=\"bui-customerqueue-root\" hui-widget-nodeType=\"buiCustomerqueueRootNode\">\n                                                  <div class=\"bui-customerqueue-container\" hui-widget-nodeType=\"customerqueueContainerNode\">\n                                                  \n                                                  </div>\n                                             </div>\n                                        </div>";
            BWidgetTemplate.AssistChannelQueue = "<div class=\"bui-widget-view\">                                            \n                                            <div class=\"bui-assistchannelqueue-root\" hui-widget-nodeType=\"saleClueQueueRootNode\">                                              \n                                                <div class=\"bui-assistchannelqueue-container\" hui-widget-nodeType=\"saleClueQueueContainerNode\">\n                                                                                                    \n                                                </div>                                            \n                                            </div>                                        \n                                       </div>\";";
            BWidgetTemplate.PullLoadToast = "<div class=\"bui-loading-toast\">\n                                            <div class=\"bui-toast\">\n                                                <div class=\"bui-loading\">\n                                                    <div class=\"bui-loading-leaf bui-loading-leaf-0\"></div>\n                                                    <div class=\"bui-loading-leaf bui-loading-leaf-1\"></div>\n                                                    <div class=\"bui-loading-leaf bui-loading-leaf-2\"></div>\n                                                    <div class=\"bui-loading-leaf bui-loading-leaf-3\"></div>\n                                                    <div class=\"bui-loading-leaf bui-loading-leaf-4\"></div>\n                                                    <div class=\"bui-loading-leaf bui-loading-leaf-5\"></div>\n                                                    <div class=\"bui-loading-leaf bui-loading-leaf-6\"></div>\n                                                    <div class=\"bui-loading-leaf bui-loading-leaf-7\"></div>\n                                                    <div class=\"bui-loading-leaf bui-loading-leaf-8\"></div>\n                                                    <div class=\"bui-loading-leaf bui-loading-leaf-9\"></div>\n                                                    <div class=\"bui-loading-leaf bui-loading-leaf-10\"></div>\n                                                    <div class=\"bui-loading-leaf bui-loading-leaf-11\"></div>\n                                                </div>\n                                                <p class=\"bui-toast-content\" hui-widget-nodeType=\"showMsg\"></p>\n                                            </div>\n                                        </div>";
            BWidgetTemplate.SaleClueQueue = "<div class=\"bui-widget-view\">                                            \n                                            <div class=\"bui-salecluequeue-root\" hui-widget-nodeType=\"saleClueQueueRootNode\">  \n                                                <div class=\"row bui-salecluequeue-nav\" hui-widget-nodeType=\"saleClueQueueNavTabsNode\">   \n                                                    <div class=\"col l2 m2 bui-salecluequeue-nav-item\" hui-widget-nodeType=\"zhuanJieNode\">\u672A\u8F6C\u4ECB</div>     \n                                                    <div class=\"col l2 m2 bui-salecluequeue-nav-item\" hui-widget-nodeType=\"weiZhuanJieNode\">\u5DF2\u8F6C\u4ECB</div> \n                                                    <div class=\"col l2 m2 bui-salecluequeue-nav-item\" hui-widget-nodeType=\"youXiaoNode\">\u6709\u6548</div>     \n                                                    <div class=\"col l2 m2 bui-salecluequeue-nav-item\" hui-widget-nodeType=\"wuXiaoNode\">\u65E0\u6548</div> \n                                                    <div class=\"col l2 m2 bui-salecluequeue-nav-item\" hui-widget-nodeType=\"weiQueRenNode\">\u672A\u786E\u8BA4</div> \n                                                </div>                                                 \n                                                <div class=\"bui-salecluequeue-container\" hui-widget-nodeType=\"saleClueQueueContainerNode\">\n                                                                                                    \n                                                </div>                                            \n                                            </div>                                        \n                                       </div>\";";
            BWidgetTemplate.PageAlert = "<div class=\"bui-widget-view\">\n                                      <div class=\"bui-pagealert-overlay\"></div>\n                                      <div class=\"bui-pagealert-root\" hui-widget-nodeType=\"pageAlertRootNode\">\n                                          <div class=\"bui-pagealert-container\" id=\"pageAlertContainerMount\">\n                                               \n                                          </div>\n                                      </div>\n                                  </div>";
            BWidgetTemplate.ProductTreeMenu = "<div class=\"bui-widget-view\">\n                                                <div class=\"bui-productmenu-root\" hui-widget-nodeType=\"productmenuRootNode\">\n                                                    <div class=\"bui-productmenu-container\" hui-widget-nodeType=\"productmenuContainerNode\">\n                                                    </div>\n                                                </div>\n                                            </div>";
            BWidgetTemplate.VideoAndAudio = "<div class=\"bui-widget-view\">\n                                            <div class='bui-videoandaudio-root' hui-widget-nodeType=\"videoAndAudioRootNode\">\n                                                <div class='bui-videoandaudio-triangle'></div>\n                                                <div class='bui-videoandaudio-container'>\n                                                    <div class=\"row\">\n                                                        <div class=\"col l3 m3 bui-videoandaudio-title\">\n                                                            <div class=\"label\">\u5F55\u97F3\u65F6\u95F4\uFF1A</div>\n                                                        </div>\n                                                        <div class=\"col l9 m9 bui-videoandaudio-content\">\n                                                            <input bui-disable-focus='true' type=\"range\" style=\"width: 80%;\" value=\"5\" max=\"20\"\n                                                              hui-widget-nodeType=\"audioTimeLimitingNode\"/>\n                                                            <span hui-widget-nodeType=\"audioTimeLimitingValueNode\">5</span>\u5206\u949F\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"row\">\n                                                        <div class=\"col l4 m4 push-l1 push-m4 btn btn-lg btn-cold\" hui-widget-nodeType=\"startAudioBtnNode\">\n                                                             \u5F00\u59CB\u5F55\u97F3\n                                                        </div>\n                                                        <div class=\"col l4 m4 push-l2 push-m2 btn btn-lg btn-warning bui-videoandaudio-btn-disabled\" hui-widget-nodeType=\"stopAudioBtnNode\">\n                                                             \u505C\u6B62\u5F55\u97F3\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"row\">\n                                                        <div class=\"col l3 m3 bui-videoandaudio-title\">\n                                                            <div class=\"label\">\u5F55\u50CF\u65F6\u95F4\uFF1A</div>\n                                                        </div>\n                                                        <div class=\"col l9 m9 bui-videoandaudio-content\">\n                                                            <input type=\"range\" style=\"width: 80%;\" value=\"3\" max=\"10\"\n                                                              bui-disable-focus='true' hui-widget-nodeType=\"videoTimeLimitingNode\"/>\n                                                            <span hui-widget-nodeType=\"videoTimeLimitingValueNode\">3</span>\u5206\u949F\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"row\">\n                                                        <div class=\"col l4 m4 push-l1 push-m1 btn btn-lg btn-cold\" hui-widget-nodeType=\"startVideoBtnNode\">\n                                                             \u5F00\u59CB\u5F55\u50CF\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                \n                                            </div>\n                                        </div>";
            return BWidgetTemplate;
        }());
        bui.BWidgetTemplate = BWidgetTemplate;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  DeviceUtils
 * 描述  :  设备工具包
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/8/30
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var DeviceUtils = (function () {
            function DeviceUtils() {
            }
            DeviceUtils.getDeviceType = function () {
                var userAgent = navigator.userAgent.toLowerCase();
                if (/(iphone|ipad|ipod|ios)/i.test(userAgent)) {
                    //alert(navigator.userAgent);  
                    return 0;
                }
                else if (/(android)/i.test(userAgent)) {
                    //alert(navigator.userAgent); 
                    //安卓端
                    return 1;
                }
                else {
                    //pc端
                    return 2;
                }
                ;
            };
            return DeviceUtils;
        }());
        bui.DeviceUtils = DeviceUtils;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  DomUtils
 * 描述  :  dom操作的工具包
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/8/30
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var DomUtils = (function () {
            function DomUtils() {
            }
            /**
             * @description 获取当前元素相对于窗口左侧总偏移量
             * @element 当前DOM元素
             */
            DomUtils.getElementLeft = function (element) {
                var actualLeft = element.offsetLeft;
                var current = element.offsetParent;
                while (current != null) {
                    actualLeft += current.offsetLeft;
                    current = current.offsetParent;
                }
                return actualLeft;
            };
            /**
            * @description 获取当前元素相对于窗口上侧总偏移量
            * @element 当前DOM元素
            */
            DomUtils.getElementTop = function (element) {
                var actualTop = element.offsetTop;
                var current = element.offsetParent;
                while (current != null) {
                    actualTop += current.offsetTop;
                    current = current.offsetParent;
                }
                return actualTop;
            };
            return DomUtils;
        }());
        bui.DomUtils = DomUtils;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  BuiLoader
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/3/22
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../btop/btop.hui.d.ts"/>
///<reference path="../widget/base/BWidgetTemplate.ts"/>
///<reference path="../util/HttpUtils.ts"/>
///<reference path="../util/SingletonUtil.ts"/>
///<reference path="../util/DeviceUtils.ts"/>
///<reference path="../util/DomUtils.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        /**
         * Bui加载器
         * @class BuiLoader
         * @module btop.bui
         * */
        var BuiLoader = (function () {
            function BuiLoader() {
            }
            /**
             * bui组件加载入口，需要在huiLoader.load()方法之前加载
             * @method load
             * @serverUrl {String} 本地配置路径
             */
            BuiLoader.load = function (serverUrl) {
                this.loadWidgetExtension();
                bui.HttpUtils.ajaxSetup(); //ajax全局设置
                this.loadConfig(serverUrl);
                this.mountGlobal();
            };
            /**
             * 加载bui组件
             * @method loadWidgetExtension
             * @private
             */
            BuiLoader.loadWidgetExtension = function () {
                btop.hui.WidgetExtension.bind("btop.bui.Time", bui.BWidgetTemplate.Time);
                btop.hui.WidgetExtension.bind("btop.bui.LandscapeBox", bui.BWidgetTemplate.LandscapeBox);
                btop.hui.WidgetExtension.bind("btop.bui.PortraitBox", bui.BWidgetTemplate.PortraitBox);
                btop.hui.WidgetExtension.bind("btop.bui.CaculatorMenu", bui.BWidgetTemplate.CaculatorMenu);
                btop.hui.WidgetExtension.bind("btop.bui.Gallery", bui.BWidgetTemplate.Gallery);
                btop.hui.WidgetExtension.bind("btop.bui.Login", bui.BWidgetTemplate.Login);
                btop.hui.WidgetExtension.bind("btop.bui.Tab", bui.BWidgetTemplate.Tab);
                btop.hui.WidgetExtension.bind("btop.bui.ProductAlert", bui.BWidgetTemplate.ProductAlert);
                btop.hui.WidgetExtension.bind("btop.bui.Select", bui.BWidgetTemplate.Select);
                btop.hui.WidgetExtension.bind("btop.bui.Notification", bui.BWidgetTemplate.Notification);
                btop.hui.WidgetExtension.bind("btop.bui.Prompt", bui.BWidgetTemplate.Prompt);
                btop.hui.WidgetExtension.bind("btop.bui.LogCalendar", bui.BWidgetTemplate.LogCalendar);
                btop.hui.WidgetExtension.bind("btop.bui.Alert", bui.BWidgetTemplate.Alert);
                btop.hui.WidgetExtension.bind("btop.bui.Confirm", bui.BWidgetTemplate.Confirm);
                btop.hui.WidgetExtension.bind("btop.bui.UserCard", bui.BWidgetTemplate.UserCard);
                btop.hui.WidgetExtension.bind("btop.bui.HallManager", bui.BWidgetTemplate.HallManager);
                btop.hui.WidgetExtension.bind("btop.bui.CustomerQueue", bui.BWidgetTemplate.CustomerQueue);
                btop.hui.WidgetExtension.bind("btop.bui.PullLoadToast", bui.BWidgetTemplate.PullLoadToast);
                btop.hui.WidgetExtension.bind("btop.bui.SaleClueQueue", bui.BWidgetTemplate.SaleClueQueue);
                btop.hui.WidgetExtension.bind("btop.bui.PageAlert", bui.BWidgetTemplate.PageAlert);
                btop.hui.WidgetExtension.bind("btop.bui.ProductTreeMenu", bui.BWidgetTemplate.ProductTreeMenu);
                btop.hui.WidgetExtension.bind("btop.bui.VideoAndAudio", bui.BWidgetTemplate.VideoAndAudio);
                btop.hui.WidgetExtension.bind("btop.bui.AssistChannelQueue", bui.BWidgetTemplate.AssistChannelQueue);
                btop.hui.WidgetExtension.bind("btop.bui.ToastTip", bui.BWidgetTemplate.ToastTip);
                btop.hui.WidgetExtension.bind("btop.bui.ComplexToastTip", bui.BWidgetTemplate.ComplexToastTip);
            };
            /**
             * 挂载全局组件
             * @method mountGlobal
             * @private
             */
            BuiLoader.mountGlobal = function () {
                var _super_root_ = document.getElementById("_super_root_") ? $("#_super_root_") : $("<div id=\"_super_root_\">").appendTo(document.body);
                this.globalProductAlertId = "bui_global_ProductAlert";
                $("<div id='" + this.globalProductAlertId + "' hui-widget-type = 'btop.bui.ProductAlert'>").addClass("bui-fullScreen").appendTo(_super_root_);
                this.globalLoginId = "bui_global_Login";
                $("<div id='" + this.globalLoginId + "' hui-widget-type = 'btop.bui.Login'>").addClass("bui-fullScreen").appendTo(_super_root_);
                this.globalNotificationId = "bui_global_Notification";
                $("<div id='" + this.globalNotificationId + "' hui-widget-type = 'btop.bui.Notification'>").appendTo(_super_root_);
                this.globalPromptId = "bui_global_Prompt";
                $("<div id='" + this.globalPromptId + "' hui-widget-type = 'btop.bui.Prompt'>").addClass("bui-fullScreen").appendTo(_super_root_);
                this.globalAlertId = "bui_global_Alert";
                $("<div id='" + this.globalAlertId + "' hui-widget-type = 'btop.bui.Alert'>").addClass("bui-fullScreen").appendTo(_super_root_);
                this.globalConfirmId = "bui_global_Confirm";
                $("<div id='" + this.globalConfirmId + "' hui-widget-type = 'btop.bui.Confirm'>").addClass("bui-fullScreen").appendTo(_super_root_);
                this.globalUserCardId = "bui_global_UserCard";
                $("<div id='" + this.globalUserCardId + "' hui-widget-type = 'btop.bui.UserCard'>").addClass("bui-fullScreen").appendTo(_super_root_);
                this.globalPullLoadToastId = "bui_global_PullLoadToast";
                $("<div id='" + this.globalPullLoadToastId + "' hui-widget-type = 'btop.bui.PullLoadToast'>").appendTo(_super_root_);
                this.globalPageAlertId = "bui_global_PageAlert";
                $("<div id='" + this.globalPageAlertId + "' hui-widget-type = 'btop.bui.PageAlert'>").addClass("hui-fullScreen").appendTo(_super_root_);
                this.globalVideoAndAudioId = "bui_global_VideoAndAudio";
                $("<div id='" + this.globalVideoAndAudioId + "' hui-widget-type = 'btop.bui.VideoAndAudio'>").addClass("bui-fullScreen").appendTo(_super_root_);
                this.globalToastTipId = "bui_global_ToastTip";
                $("<div id='" + this.globalToastTipId + "' hui-widget-type = 'btop.bui.ToastTip'>").appendTo(_super_root_);
                this.globalComplexToastTipId = "bui_global_ComplexToastTip";
                $("<div id='" + this.globalComplexToastTipId + "' hui-widget-type = 'btop.bui.ComplexToastTip'>").appendTo(_super_root_);
                //处理软键盘消失后，界面自动恢复到原始展示状态   
                window.addEventListener('resize', function () {
                    if (window.innerHeight > 700) {
                        document.body.style.marginTop = "0px";
                    }
                });
                //检查当前设备是否处于android设备，进行类焦点处理
                if (bui.DeviceUtils.getDeviceType() === 1) {
                    document.addEventListener('focusin', function (e) {
                        var target = bui.EventUtils.getTarget(e);
                        if (target['nodeName'] === "input" || target['nodeName'] === "INPUT" || target['nodeName'] === "textarea" || target['nodeName'] === "TEXTAREA") {
                            if (!$(target).attr('bui-disable-focus')) {
                                if (!target['readOnly']) {
                                    var actualTop = bui.DomUtils.getElementTop(target);
                                    document.body.style.marginTop = (-actualTop + 200) + 'px';
                                }
                            }
                        }
                    });
                    document.addEventListener('focusout', function (e) {
                        var target = bui.EventUtils.getTarget(e);
                        if (target['nodeName'] === "input" || target['nodeName'] === "INPUT" || target['nodeName'] === "textarea" || target['nodeName'] === "TEXTAREA") {
                            if (!$(target).attr('bui-disable-focus')) {
                                if (!target['readOnly']) {
                                    document.body.style.marginTop = "0px";
                                }
                            }
                        }
                    });
                }
            };
            /**
            * 加载系统配置
            * @method loadConfig
            * @serverUrl {String} 本地配置路径
            * @private
            */
            BuiLoader.loadConfig = function (serverUrl) {
                var _this = this;
                var successCallback = function (data) {
                    _this.initConfig(data);
                };
                var failedCallback = function () {
                    console.error("加载server配置失败");
                };
                bui.ConfigResource.load(serverUrl, successCallback);
            };
            /**
              * 加载系统配置
              * @method initConfig
              * @data {any} 加载的配置信息
              * @private
              */
            BuiLoader.initConfig = function (data) {
                bui.ConfigManager.initConfig(data);
            };
            /**
             * 在HuiLoader方法load后加载，需要在afterHuiLoaderExecution方法内执行
             * @method afterHuiLoaderContinueMountBGlobal
             * @private
             */
            BuiLoader.afterHuiLoaderContinueMountBGlobal = function () {
                bui.BGlobal.ProductAlert = btop.hui.WidgetManager.byId(this.globalProductAlertId);
                bui.BGlobal.Login = btop.hui.WidgetManager.byId(this.globalLoginId);
                bui.BGlobal.Notification = btop.hui.WidgetManager.byId(this.globalNotificationId);
                bui.BGlobal.Prompt = btop.hui.WidgetManager.byId(this.globalPromptId);
                bui.BGlobal.Alert = btop.hui.WidgetManager.byId(this.globalAlertId);
                bui.BGlobal.Confirm = btop.hui.WidgetManager.byId(this.globalConfirmId);
                bui.BGlobal.Usercard = btop.hui.WidgetManager.byId(this.globalUserCardId);
                bui.BGlobal.PullLoadToast = btop.hui.WidgetManager.byId(this.globalPullLoadToastId);
                bui.BGlobal.PageAlert = btop.hui.WidgetManager.byId(this.globalPageAlertId);
                bui.BGlobal.VideoAndAudio = btop.hui.WidgetManager.byId(this.globalVideoAndAudioId);
                bui.BGlobal.ToastTip = btop.hui.WidgetManager.byId(this.globalToastTipId);
                bui.BGlobal.ComplexToastTip = btop.hui.WidgetManager.byId(this.globalComplexToastTipId);
            };
            /**
             * 在HuiLoader方法load后加载NativeService壳内部信息，需要在afterHuiLoaderExecution方法内执行
             * @method afterHuiLoaderNaiveState
             * @private
             */
            BuiLoader.afterHuiLoaderNaiveState = function () {
                if (window.hasOwnProperty("NativeService")) {
                    btop.hui.EP.trigger(btop.hui.Native.syncCall("AppService", "getScreenState", []));
                    var connectedState = btop.hui.Native.syncCall("NetWorkService", "getConnectedState", []);
                    var jsonState = JSON.parse(connectedState);
                    btop.hui.EP.trigger(jsonState.state, jsonState.data ? JSON.parse(jsonState.data) : null);
                }
            };
            /**
            * 在HuiLoader方法load后执行，
            * @method afterHuiLoaderExecution （这一步必须按要求配置）
            * @private
            */
            BuiLoader.afterHuiLoaderExecution = function () {
                this.afterHuiLoaderContinueMountBGlobal();
                this.huiGlobalLoadingToastId = "hui_global_LoadingToast";
                $("#" + this.huiGlobalLoadingToastId).removeClass('hui-fullScreen').addClass("bui-fullScreen");
                // this.afterHuiLoaderNaiveState();
            };
            return BuiLoader;
        }());
        bui.BuiLoader = BuiLoader;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  CommonUtils
 * 描述  :  一般工具包
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  5/10/2016 13:21:31 PM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var CommonUtils = (function () {
            function CommonUtils() {
            }
            /**
             * @description 验证字符串是否为空或者undefined
             * @value 传入的字符串
             */
            CommonUtils.stringIsNotEmpty = function (value) {
                if (value != "" && value != undefined) {
                    return true;
                }
                else {
                    console.error("stringIsNotEmpty: value is " + value);
                    return false;
                }
            };
            /**
             * @description 判断对象是否为空或者undefined
             * @object 传入的对象
             */
            CommonUtils.objectIsNotEmpty = function (object) {
                if (object != null && object != undefined) {
                    return true;
                }
                else {
                    return false;
                }
            };
            /**
             * @description 获取对象第一层属性
             * @object 传入的对象
             */
            CommonUtils.getObjectAttrsToString = function (object) {
                var attrs = "";
                for (var i in object) {
                    attrs += "var " + i + ";";
                }
                return attrs;
            };
            CommonUtils.map2Object = function (mapData) {
                var objectData = {};
                mapData.forEach(function (value, key) {
                    objectData[key] = value;
                });
                return objectData;
            };
            CommonUtils.object2Map = function (objectData) {
                var mapData = new Map();
                for (var i in objectData) {
                    mapData.set(i, objectData[i]);
                }
                return mapData;
            };
            return CommonUtils;
        }());
        bui.CommonUtils = CommonUtils;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  DESUtil
 * 描述  :  DESUtil加密工具包//THIS SOFTWARE IS PROVIDED "AS IS" AND
 * //ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * //IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * //ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
 * //FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * //DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * //OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * //HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * //LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * //OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * //SUCH DAMAGE.
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/6/13
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../btop/btop.hui.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var DESUtil = (function () {
            function DESUtil() {
            }
            DESUtil.des = function (key, message, encrypt, mode, iv, padding) {
                //declaring this locally speeds things up a bit
                var spfunction1 = new Array(0x1010400, 0, 0x10000, 0x1010404, 0x1010004, 0x10404, 0x4, 0x10000, 0x400, 0x1010400, 0x1010404, 0x400, 0x1000404, 0x1010004, 0x1000000, 0x4, 0x404, 0x1000400, 0x1000400, 0x10400, 0x10400, 0x1010000, 0x1010000, 0x1000404, 0x10004, 0x1000004, 0x1000004, 0x10004, 0, 0x404, 0x10404, 0x1000000, 0x10000, 0x1010404, 0x4, 0x1010000, 0x1010400, 0x1000000, 0x1000000, 0x400, 0x1010004, 0x10000, 0x10400, 0x1000004, 0x400, 0x4, 0x1000404, 0x10404, 0x1010404, 0x10004, 0x1010000, 0x1000404, 0x1000004, 0x404, 0x10404, 0x1010400, 0x404, 0x1000400, 0x1000400, 0, 0x10004, 0x10400, 0, 0x1010004);
                var spfunction2 = new Array(-0x7fef7fe0, -0x7fff8000, 0x8000, 0x108020, 0x100000, 0x20, -0x7fefffe0, -0x7fff7fe0, -0x7fffffe0, -0x7fef7fe0, -0x7fef8000, -0x80000000, -0x7fff8000, 0x100000, 0x20, -0x7fefffe0, 0x108000, 0x100020, -0x7fff7fe0, 0, -0x80000000, 0x8000, 0x108020, -0x7ff00000, 0x100020, -0x7fffffe0, 0, 0x108000, 0x8020, -0x7fef8000, -0x7ff00000, 0x8020, 0, 0x108020, -0x7fefffe0, 0x100000, -0x7fff7fe0, -0x7ff00000, -0x7fef8000, 0x8000, -0x7ff00000, -0x7fff8000, 0x20, -0x7fef7fe0, 0x108020, 0x20, 0x8000, -0x80000000, 0x8020, -0x7fef8000, 0x100000, -0x7fffffe0, 0x100020, -0x7fff7fe0, -0x7fffffe0, 0x100020, 0x108000, 0, -0x7fff8000, 0x8020, -0x80000000, -0x7fefffe0, -0x7fef7fe0, 0x108000);
                var spfunction3 = new Array(0x208, 0x8020200, 0, 0x8020008, 0x8000200, 0, 0x20208, 0x8000200, 0x20008, 0x8000008, 0x8000008, 0x20000, 0x8020208, 0x20008, 0x8020000, 0x208, 0x8000000, 0x8, 0x8020200, 0x200, 0x20200, 0x8020000, 0x8020008, 0x20208, 0x8000208, 0x20200, 0x20000, 0x8000208, 0x8, 0x8020208, 0x200, 0x8000000, 0x8020200, 0x8000000, 0x20008, 0x208, 0x20000, 0x8020200, 0x8000200, 0, 0x200, 0x20008, 0x8020208, 0x8000200, 0x8000008, 0x200, 0, 0x8020008, 0x8000208, 0x20000, 0x8000000, 0x8020208, 0x8, 0x20208, 0x20200, 0x8000008, 0x8020000, 0x8000208, 0x208, 0x8020000, 0x20208, 0x8, 0x8020008, 0x20200);
                var spfunction4 = new Array(0x802001, 0x2081, 0x2081, 0x80, 0x802080, 0x800081, 0x800001, 0x2001, 0, 0x802000, 0x802000, 0x802081, 0x81, 0, 0x800080, 0x800001, 0x1, 0x2000, 0x800000, 0x802001, 0x80, 0x800000, 0x2001, 0x2080, 0x800081, 0x1, 0x2080, 0x800080, 0x2000, 0x802080, 0x802081, 0x81, 0x800080, 0x800001, 0x802000, 0x802081, 0x81, 0, 0, 0x802000, 0x2080, 0x800080, 0x800081, 0x1, 0x802001, 0x2081, 0x2081, 0x80, 0x802081, 0x81, 0x1, 0x2000, 0x800001, 0x2001, 0x802080, 0x800081, 0x2001, 0x2080, 0x800000, 0x802001, 0x80, 0x800000, 0x2000, 0x802080);
                var spfunction5 = new Array(0x100, 0x2080100, 0x2080000, 0x42000100, 0x80000, 0x100, 0x40000000, 0x2080000, 0x40080100, 0x80000, 0x2000100, 0x40080100, 0x42000100, 0x42080000, 0x80100, 0x40000000, 0x2000000, 0x40080000, 0x40080000, 0, 0x40000100, 0x42080100, 0x42080100, 0x2000100, 0x42080000, 0x40000100, 0, 0x42000000, 0x2080100, 0x2000000, 0x42000000, 0x80100, 0x80000, 0x42000100, 0x100, 0x2000000, 0x40000000, 0x2080000, 0x42000100, 0x40080100, 0x2000100, 0x40000000, 0x42080000, 0x2080100, 0x40080100, 0x100, 0x2000000, 0x42080000, 0x42080100, 0x80100, 0x42000000, 0x42080100, 0x2080000, 0, 0x40080000, 0x42000000, 0x80100, 0x2000100, 0x40000100, 0x80000, 0, 0x40080000, 0x2080100, 0x40000100);
                var spfunction6 = new Array(0x20000010, 0x20400000, 0x4000, 0x20404010, 0x20400000, 0x10, 0x20404010, 0x400000, 0x20004000, 0x404010, 0x400000, 0x20000010, 0x400010, 0x20004000, 0x20000000, 0x4010, 0, 0x400010, 0x20004010, 0x4000, 0x404000, 0x20004010, 0x10, 0x20400010, 0x20400010, 0, 0x404010, 0x20404000, 0x4010, 0x404000, 0x20404000, 0x20000000, 0x20004000, 0x10, 0x20400010, 0x404000, 0x20404010, 0x400000, 0x4010, 0x20000010, 0x400000, 0x20004000, 0x20000000, 0x4010, 0x20000010, 0x20404010, 0x404000, 0x20400000, 0x404010, 0x20404000, 0, 0x20400010, 0x10, 0x4000, 0x20400000, 0x404010, 0x4000, 0x400010, 0x20004010, 0, 0x20404000, 0x20000000, 0x400010, 0x20004010);
                var spfunction7 = new Array(0x200000, 0x4200002, 0x4000802, 0, 0x800, 0x4000802, 0x200802, 0x4200800, 0x4200802, 0x200000, 0, 0x4000002, 0x2, 0x4000000, 0x4200002, 0x802, 0x4000800, 0x200802, 0x200002, 0x4000800, 0x4000002, 0x4200000, 0x4200800, 0x200002, 0x4200000, 0x800, 0x802, 0x4200802, 0x200800, 0x2, 0x4000000, 0x200800, 0x4000000, 0x200800, 0x200000, 0x4000802, 0x4000802, 0x4200002, 0x4200002, 0x2, 0x200002, 0x4000000, 0x4000800, 0x200000, 0x4200800, 0x802, 0x200802, 0x4200800, 0x802, 0x4000002, 0x4200802, 0x4200000, 0x200800, 0, 0x2, 0x4200802, 0, 0x200802, 0x4200000, 0x800, 0x4000002, 0x4000800, 0x800, 0x200002);
                var spfunction8 = new Array(0x10001040, 0x1000, 0x40000, 0x10041040, 0x10000000, 0x10001040, 0x40, 0x10000000, 0x40040, 0x10040000, 0x10041040, 0x41000, 0x10041000, 0x41040, 0x1000, 0x40, 0x10040000, 0x10000040, 0x10001000, 0x1040, 0x41000, 0x40040, 0x10040040, 0x10041000, 0x1040, 0, 0, 0x10040040, 0x10000040, 0x10001000, 0x41040, 0x40000, 0x41040, 0x40000, 0x10041000, 0x1000, 0x40, 0x10040040, 0x1000, 0x41040, 0x10001000, 0x40, 0x10000040, 0x10040000, 0x10040040, 0x10000000, 0x40000, 0x10001040, 0, 0x10041040, 0x40040, 0x10000040, 0x10040000, 0x10001000, 0x10001040, 0, 0x10041040, 0x41000, 0x41000, 0x1040, 0x1040, 0x40040, 0x10000000, 0x10041000);
                //create the 16 or 48 subkeys we will need
                var keys = DESUtil.des_createKeys(key);
                var m = 0, i, j, temp, temp2, right1, right2, left, right, looping;
                var cbcleft, cbcleft2, cbcright, cbcright2;
                var endloop, loopinc;
                var len = message.length;
                var chunk = 0;
                //set up the loops for single and triple des
                var iterations = keys.length == 32 ? 3 : 9; //single or triple des
                if (iterations == 3) {
                    looping = encrypt ? new Array(0, 32, 2) : new Array(30, -2, -2);
                }
                else {
                    looping = encrypt ? new Array(0, 32, 2, 62, 30, -2, 64, 96, 2) : new Array(94, 62, -2, 32, 64, 2, 30, -2, -2);
                }
                //pad the message depending on the padding parameter
                if (padding == 2)
                    message += "        "; //pad the message with spaces
                else if (padding == 1) {
                    temp = 8 - (len % 8);
                    message += String.fromCharCode(temp, temp, temp, temp, temp, temp, temp, temp);
                    if (temp == 8)
                        len += 8;
                } //PKCS7 padding
                else if (!padding)
                    message += "\0\0\0\0\0\0\0\0"; //pad the message out with null bytes
                //store the result here
                var result = "";
                var tempresult = "";
                if (mode == 1) {
                    cbcleft = (iv.charCodeAt(m++) << 24) | (iv.charCodeAt(m++) << 16) | (iv.charCodeAt(m++) << 8) | iv.charCodeAt(m++);
                    cbcright = (iv.charCodeAt(m++) << 24) | (iv.charCodeAt(m++) << 16) | (iv.charCodeAt(m++) << 8) | iv.charCodeAt(m++);
                    m = 0;
                }
                //loop through each 64 bit chunk of the message
                while (m < len) {
                    left = (message.charCodeAt(m++) << 24) | (message.charCodeAt(m++) << 16) | (message.charCodeAt(m++) << 8) | message.charCodeAt(m++);
                    right = (message.charCodeAt(m++) << 24) | (message.charCodeAt(m++) << 16) | (message.charCodeAt(m++) << 8) | message.charCodeAt(m++);
                    //for Cipher Block Chaining mode, xor the message with the previous result
                    if (mode == 1) {
                        if (encrypt) {
                            left ^= cbcleft;
                            right ^= cbcright;
                        }
                        else {
                            cbcleft2 = cbcleft;
                            cbcright2 = cbcright;
                            cbcleft = left;
                            cbcright = right;
                        }
                    }
                    //first each 64 but chunk of the message must be permuted according to IP
                    temp = ((left >>> 4) ^ right) & 0x0f0f0f0f;
                    right ^= temp;
                    left ^= (temp << 4);
                    temp = ((left >>> 16) ^ right) & 0x0000ffff;
                    right ^= temp;
                    left ^= (temp << 16);
                    temp = ((right >>> 2) ^ left) & 0x33333333;
                    left ^= temp;
                    right ^= (temp << 2);
                    temp = ((right >>> 8) ^ left) & 0x00ff00ff;
                    left ^= temp;
                    right ^= (temp << 8);
                    temp = ((left >>> 1) ^ right) & 0x55555555;
                    right ^= temp;
                    left ^= (temp << 1);
                    left = ((left << 1) | (left >>> 31));
                    right = ((right << 1) | (right >>> 31));
                    //do this either 1 or 3 times for each chunk of the message
                    for (j = 0; j < iterations; j += 3) {
                        endloop = looping[j + 1];
                        loopinc = looping[j + 2];
                        //now go through and perform the encryption or decryption  
                        for (i = looping[j]; i != endloop; i += loopinc) {
                            right1 = right ^ keys[i];
                            right2 = ((right >>> 4) | (right << 28)) ^ keys[i + 1];
                            //the result is attained by passing these bytes through the S selection functions
                            temp = left;
                            left = right;
                            right = temp ^ (spfunction2[(right1 >>> 24) & 0x3f] | spfunction4[(right1 >>> 16) & 0x3f]
                                | spfunction6[(right1 >>> 8) & 0x3f] | spfunction8[right1 & 0x3f]
                                | spfunction1[(right2 >>> 24) & 0x3f] | spfunction3[(right2 >>> 16) & 0x3f]
                                | spfunction5[(right2 >>> 8) & 0x3f] | spfunction7[right2 & 0x3f]);
                        }
                        temp = left;
                        left = right;
                        right = temp; //unreverse left and right
                    } //for either 1 or 3 iterations
                    //move then each one bit to the right
                    left = ((left >>> 1) | (left << 31));
                    right = ((right >>> 1) | (right << 31));
                    //now perform IP-1, which is IP in the opposite direction
                    temp = ((left >>> 1) ^ right) & 0x55555555;
                    right ^= temp;
                    left ^= (temp << 1);
                    temp = ((right >>> 8) ^ left) & 0x00ff00ff;
                    left ^= temp;
                    right ^= (temp << 8);
                    temp = ((right >>> 2) ^ left) & 0x33333333;
                    left ^= temp;
                    right ^= (temp << 2);
                    temp = ((left >>> 16) ^ right) & 0x0000ffff;
                    right ^= temp;
                    left ^= (temp << 16);
                    temp = ((left >>> 4) ^ right) & 0x0f0f0f0f;
                    right ^= temp;
                    left ^= (temp << 4);
                    //for Cipher Block Chaining mode, xor the message with the previous result
                    if (mode == 1) {
                        if (encrypt) {
                            cbcleft = left;
                            cbcright = right;
                        }
                        else {
                            left ^= cbcleft2;
                            right ^= cbcright2;
                        }
                    }
                    tempresult += String.fromCharCode((left >>> 24), ((left >>> 16) & 0xff), ((left >>> 8) & 0xff), (left & 0xff), (right >>> 24), ((right >>> 16) & 0xff), ((right >>> 8) & 0xff), (right & 0xff));
                    chunk += 8;
                    if (chunk == 512) {
                        result += tempresult;
                        tempresult = "";
                        chunk = 0;
                    }
                } //for every 8 characters, or 64 bits in the message
                //return the result as an array
                return result + tempresult;
            };
            //des_createKeys
            //this takes as input a 64 bit key (even though only 56 bits are used)
            //as an array of 2 integers, and returns 16 48 bit keys
            DESUtil.des_createKeys = function (key) {
                //declaring this locally speeds things up a bit
                var pc2bytes0 = new Array(0, 0x4, 0x20000000, 0x20000004, 0x10000, 0x10004, 0x20010000, 0x20010004, 0x200, 0x204, 0x20000200, 0x20000204, 0x10200, 0x10204, 0x20010200, 0x20010204);
                var pc2bytes1 = new Array(0, 0x1, 0x100000, 0x100001, 0x4000000, 0x4000001, 0x4100000, 0x4100001, 0x100, 0x101, 0x100100, 0x100101, 0x4000100, 0x4000101, 0x4100100, 0x4100101);
                var pc2bytes2 = new Array(0, 0x8, 0x800, 0x808, 0x1000000, 0x1000008, 0x1000800, 0x1000808, 0, 0x8, 0x800, 0x808, 0x1000000, 0x1000008, 0x1000800, 0x1000808);
                var pc2bytes3 = new Array(0, 0x200000, 0x8000000, 0x8200000, 0x2000, 0x202000, 0x8002000, 0x8202000, 0x20000, 0x220000, 0x8020000, 0x8220000, 0x22000, 0x222000, 0x8022000, 0x8222000);
                var pc2bytes4 = new Array(0, 0x40000, 0x10, 0x40010, 0, 0x40000, 0x10, 0x40010, 0x1000, 0x41000, 0x1010, 0x41010, 0x1000, 0x41000, 0x1010, 0x41010);
                var pc2bytes5 = new Array(0, 0x400, 0x20, 0x420, 0, 0x400, 0x20, 0x420, 0x2000000, 0x2000400, 0x2000020, 0x2000420, 0x2000000, 0x2000400, 0x2000020, 0x2000420);
                var pc2bytes6 = new Array(0, 0x10000000, 0x80000, 0x10080000, 0x2, 0x10000002, 0x80002, 0x10080002, 0, 0x10000000, 0x80000, 0x10080000, 0x2, 0x10000002, 0x80002, 0x10080002);
                var pc2bytes7 = new Array(0, 0x10000, 0x800, 0x10800, 0x20000000, 0x20010000, 0x20000800, 0x20010800, 0x20000, 0x30000, 0x20800, 0x30800, 0x20020000, 0x20030000, 0x20020800, 0x20030800);
                var pc2bytes8 = new Array(0, 0x40000, 0, 0x40000, 0x2, 0x40002, 0x2, 0x40002, 0x2000000, 0x2040000, 0x2000000, 0x2040000, 0x2000002, 0x2040002, 0x2000002, 0x2040002);
                var pc2bytes9 = new Array(0, 0x10000000, 0x8, 0x10000008, 0, 0x10000000, 0x8, 0x10000008, 0x400, 0x10000400, 0x408, 0x10000408, 0x400, 0x10000400, 0x408, 0x10000408);
                var pc2bytes10 = new Array(0, 0x20, 0, 0x20, 0x100000, 0x100020, 0x100000, 0x100020, 0x2000, 0x2020, 0x2000, 0x2020, 0x102000, 0x102020, 0x102000, 0x102020);
                var pc2bytes11 = new Array(0, 0x1000000, 0x200, 0x1000200, 0x200000, 0x1200000, 0x200200, 0x1200200, 0x4000000, 0x5000000, 0x4000200, 0x5000200, 0x4200000, 0x5200000, 0x4200200, 0x5200200);
                var pc2bytes12 = new Array(0, 0x1000, 0x8000000, 0x8001000, 0x80000, 0x81000, 0x8080000, 0x8081000, 0x10, 0x1010, 0x8000010, 0x8001010, 0x80010, 0x81010, 0x8080010, 0x8081010);
                var pc2bytes13 = new Array(0, 0x4, 0x100, 0x104, 0, 0x4, 0x100, 0x104, 0x1, 0x5, 0x101, 0x105, 0x1, 0x5, 0x101, 0x105);
                //how many iterations (1 for des, 3 for triple des)
                var iterations = key.length > 8 ? 3 : 1; //changed by Paul 16/6/2007 to use Triple DES for 9+ byte keys
                //stores the return keys
                var keys = new Array(32 * iterations);
                //now define the left shifts which need to be done
                var shifts = new Array(0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0);
                //other variables
                var lefttemp, righttemp, m = 0, n = 0, temp;
                for (var j = 0; j < iterations; j++) {
                    var left = (key.charCodeAt(m++) << 24) | (key.charCodeAt(m++) << 16) | (key.charCodeAt(m++) << 8) | key.charCodeAt(m++);
                    var right = (key.charCodeAt(m++) << 24) | (key.charCodeAt(m++) << 16) | (key.charCodeAt(m++) << 8) | key.charCodeAt(m++);
                    temp = ((left >>> 4) ^ right) & 0x0f0f0f0f;
                    right ^= temp;
                    left ^= (temp << 4);
                    temp = ((right >>> -16) ^ left) & 0x0000ffff;
                    left ^= temp;
                    right ^= (temp << -16);
                    temp = ((left >>> 2) ^ right) & 0x33333333;
                    right ^= temp;
                    left ^= (temp << 2);
                    temp = ((right >>> -16) ^ left) & 0x0000ffff;
                    left ^= temp;
                    right ^= (temp << -16);
                    temp = ((left >>> 1) ^ right) & 0x55555555;
                    right ^= temp;
                    left ^= (temp << 1);
                    temp = ((right >>> 8) ^ left) & 0x00ff00ff;
                    left ^= temp;
                    right ^= (temp << 8);
                    temp = ((left >>> 1) ^ right) & 0x55555555;
                    right ^= temp;
                    left ^= (temp << 1);
                    //the right side needs to be shifted and to get the last four bits of the left side
                    temp = (left << 8) | ((right >>> 20) & 0x000000f0);
                    //left needs to be put upside down
                    left = (right << 24) | ((right << 8) & 0xff0000) | ((right >>> 8) & 0xff00) | ((right >>> 24) & 0xf0);
                    right = temp;
                    //now go through and perform these shifts on the left and right keys
                    for (var i = 0; i < shifts.length; i++) {
                        //shift the keys either one or two bits to the left
                        if (shifts[i]) {
                            left = (left << 2) | (left >>> 26);
                            right = (right << 2) | (right >>> 26);
                        }
                        else {
                            left = (left << 1) | (left >>> 27);
                            right = (right << 1) | (right >>> 27);
                        }
                        left &= -0xf;
                        right &= -0xf;
                        //now apply PC-2, in such a way that E is easier when encrypting or decrypting
                        //this conversion will look like PC-2 except only the last 6 bits of each byte are used
                        //rather than 48 consecutive bits and the order of lines will be according to 
                        //how the S selection functions will be applied: S2, S4, S6, S8, S1, S3, S5, S7
                        lefttemp = pc2bytes0[left >>> 28] | pc2bytes1[(left >>> 24) & 0xf]
                            | pc2bytes2[(left >>> 20) & 0xf] | pc2bytes3[(left >>> 16) & 0xf]
                            | pc2bytes4[(left >>> 12) & 0xf] | pc2bytes5[(left >>> 8) & 0xf]
                            | pc2bytes6[(left >>> 4) & 0xf];
                        righttemp = pc2bytes7[right >>> 28] | pc2bytes8[(right >>> 24) & 0xf]
                            | pc2bytes9[(right >>> 20) & 0xf] | pc2bytes10[(right >>> 16) & 0xf]
                            | pc2bytes11[(right >>> 12) & 0xf] | pc2bytes12[(right >>> 8) & 0xf]
                            | pc2bytes13[(right >>> 4) & 0xf];
                        temp = ((righttemp >>> 16) ^ lefttemp) & 0x0000ffff;
                        keys[n++] = lefttemp ^ temp;
                        keys[n++] = righttemp ^ (temp << 16);
                    }
                } //for each iterations
                //return the keys we've created
                return keys;
            };
            ////////////////////////////// TEST //////////////////////////////
            DESUtil.stringToHex = function (s) {
                var r = "0x";
                var hexes = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
                for (var i = 0; i < s.length; i++) {
                    r += hexes[s.charCodeAt(i) >> 4] + hexes[s.charCodeAt(i) & 0xf];
                }
                return r;
            };
            DESUtil.hexToString = function (h) {
                var r = "";
                for (var i = (h.substr(0, 2) == "0x") ? 2 : 0; i < h.length; i += 2) {
                    r += String.fromCharCode(parseInt(h.substr(i, 2), 16));
                }
                return r;
            };
            DESUtil.test = function () {
                var key = "this is a 24 byte key !!";
                var message = "This is a test message";
                var ciphertext = DESUtil.des(key, message, 1, 0);
                console.info('密文： ' + DESUtil.stringToHex(ciphertext));
                console.info('解密： ' + DESUtil.des(key, DESUtil.hexToString(ciphertext), 0, 0));
            };
            return DESUtil;
        }());
        bui.DESUtil = DESUtil;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  EventUtils
 * 描述  :  事件工具包
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  7/29/2016 13:21:31 PM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        /**
         * 事件处理工具包
         * @class EventUtils
         * @module btop.bui
         * */
        var EventUtils = (function () {
            function EventUtils() {
            }
            /**
             * 为元素添加type类型的事件和handler处理程序
             * @method addHandler
             * @element HTMLElement元素
             * @type {String} 绑定的事件类型
             * @handler {any} 事件处理程序
             */
            EventUtils.addHandler = function (element, type, handler) {
                if (element.addEventListener) {
                    element.addEventListener(type, handler, false);
                }
                else if (element.attachEvent) {
                    element.attachEvent("on" + type, handler);
                }
                else {
                    element["on" + type] = handler;
                }
            };
            /**
             * @description 为元素解除type类型的事件和handler处理程序
             * @element HTMLElement元素
             * @type 解除的事件类型
             * @handler 解除的事件处理程序
             */
            EventUtils.removeHandler = function (element, type, handler) {
                if (element.removeEventListener) {
                    element.removeEventListener(type, handler, false);
                }
                else if (element.detachEvent) {
                    element.detachEvent("on" + type, handler);
                }
                else {
                    element["on" + type] = null;
                }
            };
            /**
             * @description 根据事件获取事件对象
             * @event 当前事件
             */
            EventUtils.getEvent = function (event) {
                return event ? event : window.event;
            };
            /**
             * @description 根据事件获取当前目标元素
             * @event 当前事件
             */
            EventUtils.getTarget = function (event) {
                return event.target || event.srcElement;
            };
            /**
             * @description 根据事件来取消事件默认行为
             * @event 当前事件
             */
            EventUtils.preventDefault = function (event) {
                if (event.preventDefault) {
                    event.preventDefault();
                }
                else {
                    event.returnValue = false;
                }
            };
            /**
             * @description 根据事件来取消事件冒泡行为
             * @event 当前事件
             */
            EventUtils.stopPropagation = function (event) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else {
                    event.cancelBubble = true;
                }
            };
            /**
             * @description 根据事件来来获取相关元素（用于鼠标事件）
             * @event 当前事件
             */
            EventUtils.getRelatedTarget = function (event) {
                if (event.relatedTarget) {
                    return event.relatedTarget;
                }
                else if (event.toElement) {
                    return event.toElement;
                }
                else {
                    return null;
                }
            };
            /**
             * @description 根据事件来获取鼠标button类型（鼠标事件）
             * @event 当前事件
             */
            EventUtils.getButton = function (event) {
                if (document.implementation.hasFeature("MouseEvents", "2.0")) {
                    return event.button;
                }
                else {
                    switch (event.button) {
                        case 0:
                        case 1:
                        case 3:
                        case 5:
                        case 7:
                            return 0;
                        case 2:
                        case 6:
                            return 2;
                        case 4:
                            return 1;
                    }
                }
            };
            /**
             * @description 获取键盘数据（键盘事件）
             * @event 当前事件
             */
            EventUtils.getCharCode = function (event) {
                if (typeof event.charCode == "number") {
                    return event.charCode;
                }
                else {
                    return event.keyCode;
                }
            };
            return EventUtils;
        }());
        bui.EventUtils = EventUtils;
    })(bui = btop.bui || (btop.bui = {}));
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
///<reference path="../../btop/btop.hui.d.ts"/>
///<reference path="../../libs/jQuery.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
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
            /**
             * @description 创建命名空函数，使其实例化的ele具有此 类名
             * @name 创建的函数名称
             * @properties 添加的属性
             */
            OOUtils.funcFactory = function (name, properties) {
                var tmpl = "function name(){xxpropertiesxx}; return name;".replace(/name/g, name).replace(/xxpropertiesxx/g, properties);
                return (new Function(tmpl))();
            };
            return OOUtils;
        }());
        bui.OOUtils = OOUtils;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  TimerTask
 * 描述  :  定时执行任务
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/8/16
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        /**
       * 定时执行任务
       * @class TimerTask
       * @module btop.bui
       * */
        var TimerTask = (function () {
            function TimerTask(hour, minute, second) {
                this.hour = hour < 0 || hour > 24 ? 0 : hour;
                this.minute = minute < 0 || minute > 60 ? 0 : minute;
                this.second = second < 0 || second > 60 ? 0 : second;
            }
            /**
            * 定时执行任务
            * @method schedule
            * @callbackfn {Function} 执行回调函数
            */
            TimerTask.prototype.schedule = function (callbackfn) {
                var _this = this;
                var intervalId = setInterval(function () {
                    var now = new Date();
                    if (_this.hour == now.getHours()
                        && _this.minute == now.getMinutes()
                        && _this.second == now.getSeconds())
                        callbackfn();
                }, 1000);
                return intervalId;
            };
            return TimerTask;
        }());
        bui.TimerTask = TimerTask;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  ValidatorUtils
 * 描述  :  类工具包
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  7/29/2016 13:21:31 PM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
/**
 * @api {get} /user/:id ValidatorUtils工具包
 * @apiName GetUser
 * @apiGroup ###ValidatorUtils###
 */
///<reference path="EventUtils.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var ValidatorUtils = (function () {
            function ValidatorUtils() {
                this.submitStatus = new Map(); //存储每个输入厂的状态值
            }
            ValidatorUtils.prototype.validate = function (element) {
                var _this = this;
                var $element = $(element);
                this.$delegateElement = $element;
                //获取焦点，对其进行处理
                $element.on('focusin', function (e) {
                    var target = $(bui.EventUtils.getTarget(e));
                    _this.handlerValidate(target);
                });
                //失去焦点，对其进行处理
                $element.on('focusout', function (e) {
                    var target = $(bui.EventUtils.getTarget(e));
                    _this.handlerValidate(target);
                });
                //键盘点击事件
                $element.on('keypress', function (e) {
                    //_this.handlerValidate(e);
                });
                $element.on('keyup', function (e) {
                    var target = $(bui.EventUtils.getTarget(e));
                    _this.handlerValidate(target);
                });
                $element.on('input', function (e) {
                    var target = $(bui.EventUtils.getTarget(e));
                    _this.handlerValidate(target);
                });
            };
            /**
             * @对每个输入厂目标元素进行验证处理
             * @$element 输入厂元素
             */
            ValidatorUtils.prototype.handlerValidate = function ($element) {
                var _this = this;
                var validatorInst = bui.SingletonUtil.getInstance("btop.bui.Validator");
                var $target = $element;
                var parentElement = $target[0].parentElement;
                if ($target[0].tagName === "INPUT") {
                    var rulersString = $target.attr("bui-input-rulers");
                    if (!!rulersString) {
                        var rulers = _this.parseAttr(rulersString);
                        /*if(rulers["number"])
                        {
                            let charCode:number = EventUtils.getCharCode(e);
                            if(!/\d/.test(String.fromCharCode(charCode)))
                            {
                                EventUtils.preventDefault(e);
                            }
                        }*/
                        //对非空处理    
                        if (rulers["required"]) {
                            var $successTipTemp = _this.createSuccessTemp($target);
                            var $errorTipTemp = _this.createErrorTemp(validatorInst.required.tipMsg ? validatorInst.required.tipMsg : "数据不能为空", $target);
                            var targetVal = $target.val();
                            if ($target.val()) {
                                _this.successShow(parentElement, $successTipTemp);
                                _this.submitStatus.set("required" + $target[0].id, true);
                            }
                            else {
                                _this.errorShow(parentElement, $errorTipTemp);
                                _this.submitStatus.set("required" + $target[0].id, false);
                            }
                        }
                        //目前为了少改代码，暂时这样设计
                        if (rulers["noRequired"]) {
                            var $clearTipTemp = _this.clearTemp();
                            _this.clearShow(parentElement, $clearTipTemp);
                        }
                        //对手机号处理
                        if (rulers["telePhone"]) {
                            var $successTipTemp = _this.createSuccessTemp($target);
                            var $errorTipTemp = _this.createErrorTemp(validatorInst.telePhone.tipMsg ? validatorInst.telePhone.tipMsg : "手机号码格式有误", $target);
                            var targetVal = $target.val();
                            if ($target.val()) {
                                if (/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(targetVal)) {
                                    _this.successShow(parentElement, $successTipTemp);
                                    _this.submitStatus.set("telePhone", true);
                                }
                                else {
                                    _this.errorShow(parentElement, $errorTipTemp);
                                    _this.submitStatus.set("telePhone", false);
                                }
                            }
                            else {
                                _this.errorShow(parentElement, $errorTipTemp);
                                _this.submitStatus.set("telePhone", false);
                            }
                        }
                        //电话号码处理
                        if (rulers["phone"]) {
                            var $successTipTemp = _this.createSuccessTemp($target);
                            var $errorTipTemp = _this.createErrorTemp(validatorInst.phone.tipMsg ? validatorInst.phone.tipMsg : "电话号码格式有误", $target);
                            var targetVal = $target.val();
                            if ($target.val()) {
                                if (/(\(\d{3,4}\)|\d{3,4}-|\s)?\d{8}/.test(targetVal)) {
                                    _this.successShow(parentElement, $successTipTemp);
                                    _this.submitStatus.set("phone", true);
                                }
                                else {
                                    _this.errorShow(parentElement, $errorTipTemp);
                                    _this.submitStatus.set("phone", false);
                                }
                            }
                            else {
                                _this.errorShow(parentElement, $errorTipTemp);
                                _this.submitStatus.set("phone", false);
                            }
                        }
                        //对身份证号处理
                        if (rulers["idCard"]) {
                            var $successTipTemp = _this.createSuccessTemp($target);
                            var $errorTipTemp = _this.createErrorTemp(validatorInst.idCard.tipMsg ? validatorInst.idCard.tipMsg : "身份证号格式不正确", $target);
                            var targetVal = $target.val();
                            if ($target.val()) {
                                if (/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(targetVal)) {
                                    _this.successShow(parentElement, $successTipTemp);
                                    _this.submitStatus.set("idCard", true);
                                }
                                else {
                                    _this.errorShow(parentElement, $errorTipTemp);
                                    _this.submitStatus.set("idCard", false);
                                }
                            }
                            else {
                                _this.errorShow(parentElement, $errorTipTemp);
                                _this.submitStatus.set("idCard", false);
                            }
                        }
                        //对邮箱处理
                        if (rulers["email"]) {
                            var $successTipTemp = _this.createSuccessTemp($target);
                            var $errorTipTemp = _this.createErrorTemp(validatorInst.email.tipMsg ? validatorInst.email.tipMsg : "邮箱格式不正确", $target);
                            var targetVal = $target.val();
                            if ($target.val()) {
                                if (/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(targetVal)) {
                                    _this.successShow(parentElement, $successTipTemp);
                                    _this.submitStatus.set("email", true);
                                }
                                else {
                                    _this.errorShow(parentElement, $errorTipTemp);
                                    _this.submitStatus.set("email", false);
                                }
                            }
                            else {
                                _this.errorShow(parentElement, $errorTipTemp);
                                _this.submitStatus.set("email", false);
                            }
                        }
                        //只能输入数字处理
                        if (rulers["number"]) {
                            var $successTipTemp = _this.createSuccessTemp($target);
                            var $errorTipTemp = _this.createErrorTemp(validatorInst.number.tipMsg ? validatorInst.number.tipMsg : "只能输入数字", $target);
                            var targetVal = $target.val();
                            if ($target.val()) {
                                if (/^[0-9]*$/.test(targetVal)) {
                                    _this.successShow(parentElement, $successTipTemp);
                                    _this.submitStatus.set("number", true);
                                }
                                else {
                                    _this.errorShow(parentElement, $errorTipTemp);
                                    _this.submitStatus.set("number", false);
                                }
                            }
                            else {
                                _this.errorShow(parentElement, $errorTipTemp);
                                _this.submitStatus.set("number", false);
                            }
                        }
                        //姓名处理
                        if (rulers["name"]) {
                            var $successTipTemp = _this.createSuccessTemp($target);
                            var $errorTipTemp = _this.createErrorTemp(validatorInst.name.tipMsg ? validatorInst.name.tipMsg : "只能中文或英文姓名", $target);
                            var targetVal = $target.val();
                            if ($target.val()) {
                                if (/^[\u4e00-\u9fa5]+$/gi.test(targetVal) || /^[a-zA-Z \s]{2,20}$/.test(targetVal)) {
                                    _this.successShow(parentElement, $successTipTemp);
                                    _this.submitStatus.set("name", true);
                                }
                                else {
                                    _this.errorShow(parentElement, $errorTipTemp);
                                    _this.submitStatus.set("name", false);
                                }
                            }
                            else {
                                _this.errorShow(parentElement, $errorTipTemp);
                                _this.submitStatus.set("name", false);
                            }
                        }
                        //客户号处理
                        if (rulers["custNumber"]) {
                            var $successTipTemp = _this.createSuccessTemp($target);
                            var $errorTipTemp = _this.createErrorTemp(validatorInst.custNumber.tipMsg ? validatorInst.custNumber.tipMsg : "只能9位数字", $target);
                            var targetVal = $target.val();
                            if ($target.val()) {
                                if (/^\d{9}$/.test(targetVal)) {
                                    _this.successShow(parentElement, $successTipTemp);
                                    _this.submitStatus.set("custNumber", true);
                                }
                                else {
                                    _this.errorShow(parentElement, $errorTipTemp);
                                    _this.submitStatus.set("custNumber", false);
                                }
                            }
                            else {
                                _this.errorShow(parentElement, $errorTipTemp);
                                _this.submitStatus.set("custNumber", false);
                            }
                        }
                        //只能输入字母
                        if (rulers["letter"]) {
                            var $successTipTemp = _this.createSuccessTemp($target);
                            var $errorTipTemp = _this.createErrorTemp(validatorInst.letter.tipMsg ? validatorInst.letter.tipMsg : "只能输入字母", $target);
                            var targetVal = $target.val();
                            if ($target.val()) {
                                if (/^[A-Za-z]+$/.test(targetVal)) {
                                    _this.successShow(parentElement, $successTipTemp);
                                    _this.submitStatus.set("letter", true);
                                }
                                else {
                                    _this.errorShow(parentElement, $errorTipTemp);
                                    _this.submitStatus.set("letter", false);
                                }
                            }
                            else {
                                _this.errorShow(parentElement, $errorTipTemp);
                                _this.submitStatus.set("letter", false);
                            }
                        }
                        //只能输入数字或字母
                        if (rulers["numberOrLetter"]) {
                            var $successTipTemp = _this.createSuccessTemp($target);
                            var $errorTipTemp = _this.createErrorTemp(validatorInst.numberOrLetter.tipMsg ? validatorInst.numberOrLetter.tipMsg : "只能输入数字或字母", $target);
                            var targetVal = $target.val();
                            if ($target.val()) {
                                if (/^[A-Za-z0-9]+$/.test(targetVal)) {
                                    _this.successShow(parentElement, $successTipTemp);
                                    _this.submitStatus.set("numberOrLetter", true);
                                }
                                else {
                                    _this.errorShow(parentElement, $errorTipTemp);
                                    _this.submitStatus.set("numberOrLetter", false);
                                }
                            }
                            else {
                                _this.errorShow(parentElement, $errorTipTemp);
                                _this.submitStatus.set("numberOrLetter", false);
                            }
                        }
                    }
                }
            };
            /**
             * @description 清除展示
             * @parentElement 父元素
             * @$successTipTemp 清除提示模板
             */
            ValidatorUtils.prototype.clearShow = function (parentElement, $clearTipTemp) {
                var lastChild = parentElement.lastChild;
                if (lastChild.nodeName === "span" || lastChild.nodeName === "SPAN") {
                    parentElement.replaceChild($clearTipTemp[0], parentElement.lastChild);
                }
                else {
                    parentElement.appendChild($clearTipTemp[0]);
                }
            };
            /**
             * @description 成功展示
             * @parentElement 父元素
             * @$successTipTemp 成功提示模板
             */
            ValidatorUtils.prototype.successShow = function (parentElement, $successTipTemp) {
                var lastChild = parentElement.lastChild;
                if (lastChild.nodeName === "span" || lastChild.nodeName === "SPAN") {
                    parentElement.replaceChild($successTipTemp[0], parentElement.lastChild);
                }
                else {
                    parentElement.appendChild($successTipTemp[0]);
                }
            };
            /**
             * @description 错误展示
             * @parentElement 父元素
             * @$errorTipTemp 错误提示模板
             */
            ValidatorUtils.prototype.errorShow = function (parentElement, $errorTipTemp) {
                var lastChild = parentElement.lastChild;
                if (lastChild.nodeName === "span" || lastChild.nodeName === "SPAN") {
                    parentElement.replaceChild($errorTipTemp[0], parentElement.lastChild);
                }
                else {
                    parentElement.appendChild($errorTipTemp[0]);
                }
            };
            /**
             * @description 清除模板
             */
            ValidatorUtils.prototype.clearTemp = function () {
                var clearTipTemp = "<span></span>";
                return $(clearTipTemp);
            };
            /**
             * @description 创建成功提示模板
             * @$target 目标元素
             */
            ValidatorUtils.prototype.createSuccessTemp = function ($target) {
                var successTipTemp = "<span class=\"input-success\">\n                                             <i class=\"icon-ok\"></i>\n                                        </span>"; //输入成功后的模板
                return $(successTipTemp).css("margin-left", ($target.width() - 15) + "px");
            };
            /**
             * @description 创建错误提示模板
             * @errorTip 错误提示
             * @$target 目标元素
             */
            ValidatorUtils.prototype.createErrorTemp = function (errorTip, $target) {
                var errorTipTemp = "<span><span class=\"input-error\">\n                                            <i class=\"icon-fail\"></i>\n                                       </span>\n                                       <span class=\"input-error-info\">\n                                           " + errorTip + "\n                                      </span></span>"; //输入错误后的模板
                var $errorTipTemp = $(errorTipTemp);
                $($errorTipTemp[0].firstChild).css("margin-left", ($target.width() - 15) + "px");
                $($errorTipTemp[0].lastChild).css("margin-left", ($target.width() + 15) + "px");
                return $errorTipTemp;
            };
            /**
             * @description 提交验证
             */
            ValidatorUtils.prototype.submitValidate = function () {
                var _this = this;
                this.submitStatus = new Map();
                //遍历所有的输入厂元素
                this.$delegateElement.find("input").each(function () {
                    var $that = $(this);
                    var rulers = $that.attr("bui-input-rulers");
                    if (rulers != "" && rulers != undefined) {
                        _this.handlerValidate($that);
                    }
                });
                var flag = true;
                this.submitStatus.forEach(function (value, index) {
                    if (!value) {
                        flag = false;
                    }
                });
                return flag;
            };
            ValidatorUtils.prototype.clear = function () {
                var $inputError = this.$delegateElement.find(".input-error");
                $inputError.remove();
                $inputError.off();
                $inputError.empty();
                var $inputErrorInfo = this.$delegateElement.find(".input-error-info");
                $inputErrorInfo.remove();
                $inputErrorInfo.off();
                $inputErrorInfo.empty();
                var $inputSuccess = this.$delegateElement.find(".input-success");
                $inputSuccess.remove();
                $inputSuccess.off();
                $inputSuccess.empty();
            };
            /**
             * @description 解析自定义规则元素
             * @rulers 字符串规则序列化数据
             */
            ValidatorUtils.prototype.parseAttr = function (rulers) {
                return JSON.parse(rulers);
            };
            return ValidatorUtils;
        }());
        bui.ValidatorUtils = ValidatorUtils;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Button
 * 描述  :  按钮基类
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/3/22
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../btop/btop.hui.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Button = (function () {
            function Button(subClassType, btnType) {
                this.callbackMap = new Map();
                this.subClassType = subClassType;
                this.btnType = btnType;
            }
            /**
             * @description 通过on来注入事件及时间处理程序
             * @type 事件类型
             * @callbackfn 事件处理集合
             */
            Button.prototype.on = function (type, callbackfn) {
                var eventType = type + "." + this.btnType + "." + this.subClassType;
                btop.hui.EventProxy.inst.on(eventType, callbackfn);
                if (!this.callbackMap.has(eventType))
                    this.callbackMap.set(eventType, new Array());
                this.callbackMap.get(eventType).push(callbackfn);
            };
            /**
             * @description 通过trigger来触发on绑定对应type的事件
             * @type 事件类型
             * @callbackfn 事件处理集合
             */
            Button.prototype.trigger = function (type) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                var eventType = type + "." + this.btnType + "." + this.subClassType;
                btop.hui.EventProxy.inst.trigger(eventType, args);
            };
            /**
            * @description 通过unbind来解除on绑定对应type的事件，实质上是通过remove来解除事件的绑定
            * @type 事件类型
            * @callbackfn 事件处理集合
            */
            Button.prototype.unbind = function (type) {
                this.remove(type);
                return this;
            };
            /**
            * @description 通过remove来解除on绑定对应type的事件
            * @type 事件类型
            * @callbackfn 事件处理集合
            */
            Button.prototype.remove = function (type) {
                var eventType = type + "." + this.btnType + "." + this.subClassType;
                var _this = this;
                if (this.callbackMap.has(eventType)) {
                    var callbackfnArray = _this.callbackMap.get(eventType);
                    for (var i = 0; i < callbackfnArray.length; i++) {
                        btop.hui.EventProxy.inst.remove(eventType, callbackfnArray[i]);
                        var index = callbackfnArray.indexOf(callbackfnArray[i]);
                        if (index != -1)
                            callbackfnArray.splice(index, 1);
                    }
                }
            };
            return Button;
        }());
        bui.Button = Button;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  LogCalendar
 * 描述  :  日志日历
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/6/5
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../base/Button.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var LogCalendar = (function (_super) {
            __extends(LogCalendar, _super);
            function LogCalendar() {
                _super.apply(this, arguments);
                this.caldata = new Map();
                this.logStyle = LogCalendarTheme.SIMPLE; //默认为简单风格
                this.preBtn = new LogCalendarBtn('pre');
                this.nextBtn = new LogCalendarBtn('next');
            }
            LogCalendar.prototype.initView = function () {
                this.logOptions = { caldata: {}, displayWeekAbbr: true };
            };
            LogCalendar.prototype.show = function (data) {
                this.logOptions.caldata = data;
                this.$el = $(this.nodeTypeMap.get('logCalendarElementNode'));
                this.initData(this.logOptions);
                this.bindEvents();
            };
            LogCalendar.prototype.setTheme = function (style) {
                if (style == LogCalendarTheme.COMPLEX) {
                    this.logOptions.displayWeekAbbr = false;
                }
                else {
                    this.logOptions.displayWeekAbbr = true;
                    ;
                }
            };
            LogCalendar.prototype.initData = function (options) {
                // o// options
                var _this = this;
                this.options = this.initOptions(options);
                this.today = new Date();
                this.month = (isNaN(this.options.month) || this.options.month == null) ? this.today.getMonth() : this.options.month - 1;
                this.year = (isNaN(this.options.year) || this.options.year == null) ? this.today.getFullYear() : this.options.year;
                this.caldata = this.options.caldata || [];
                this.generateTemplate(null);
                this.$month = $(this.nodeTypeMap.get('logCalendarMonthNode'));
                this.$year = $(this.nodeTypeMap.get('logCalendarYearNode'));
                this.$month.html(_this.getMonthName() + '');
                this.$year.html(_this.getYear() + '');
                this.$prevBtn = $(this.nodeTypeMap.get('logCalendarPrevBtn'));
                this.$nextBtn = $(this.nodeTypeMap.get('logCalendarNextBtn'));
            };
            LogCalendar.prototype.initOptions = function (options) {
                var optionsOrigin = {
                    //可选英文和中文，根据业务来定
                    /*weeks : [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                    weekabbrs : [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
                    months : [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
                    monthabbrs : [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],*/
                    weeks: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
                    weekabbrs: ['日', '一', '二', '三', '四', '五', '六'],
                    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                    monthabbrs: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                    // choose between values in options.weeks or options.weekabbrs
                    displayWeekAbbr: false,
                    // choose between values in options.months or options.monthabbrs
                    displayMonthAbbr: false,
                    // left most day in the calendar
                    // 0 - Sunday, 1 - Monday, ... , 6 - Saturday
                    startIn: 1
                };
                var optionsNew = {};
                for (var i in optionsOrigin) {
                    optionsNew[i] = optionsOrigin[i];
                }
                for (var j in options) {
                    optionsNew[j] = options[j];
                }
                optionsNew['month'] = this.month + 1;
                optionsNew['year'] = this.year;
                return optionsNew;
            };
            LogCalendar.prototype.bindEvents = function () {
                var _this = this;
                this.$el.on('click.calendario', 'div.bui-log-row > div', function (e) {
                    var $cell = $(this), idx = $cell.index(), $content = $cell.children('div'), dateProp = {
                        day: $cell.children('span.bui-log-date').text(),
                        month: _this.month + 1,
                        monthname: _this.options.displayMonthAbbr ? _this.options.monthabbrs[_this.month] : _this.options.months[_this.month],
                        year: _this.year,
                        weekday: idx + _this.options.startIn,
                        weekdayname: _this.options.weeks[idx + _this.options.startIn]
                    };
                    /**
                     * if( dateProp.day ) {
                       
                        let dateStr =$(`<div>${e.target.innerHTML}</div>`).find('div.bui-log-calendar-strdate').html();
                        let dayLog = _this.caldata.get(dateStr);
                        let event:BEvent = new BEvent(e,dayLog);
                        _this.trigger(`click.logCalendar`,event);
                    }
                     *  */
                    var dateStr = $("<div>" + e.target.innerHTML + "</div>").find('div.bui-log-calendar-strdate').html();
                    var dayData = _this.caldata.get(dateStr);
                    var dayLogObject = {};
                    if (!dayData) {
                        dayLogObject[dateStr] = null;
                        dayLogObject['date'] = dateStr;
                        var event_2 = new bui.BEvent(e, dateStr);
                        _this.trigger("click.logCalendar", event_2);
                    }
                    else {
                        dayLogObject[dateStr] = dayData;
                        dayLogObject['date'] = dateStr;
                        var event_3 = new bui.BEvent(e, dayLogObject);
                        _this.trigger("click.logCalendar", event_3);
                    }
                });
                function updateMonthYear() {
                    _this.$month.html(_this.getMonthName() + '');
                    _this.$year.html(_this.getYear() + '');
                }
                //下一月操作
                this.$prevBtn.unbind('click').on('click', function (e) {
                    _this.gotoNextMonth(updateMonthYear);
                    var dateData = {
                        currentYM: _this.getCurrentYM(),
                        nextYM: _this.getNextYM()
                    };
                    var event = new bui.BEvent(e, dateData);
                    _this.nextBtn.trigger('click', event);
                });
                //上一月操作
                this.$nextBtn.unbind('click').on('click', function (e) {
                    _this.gotoPreviousMonth(updateMonthYear);
                    var dateData = {
                        currentYM: _this.getCurrentYM(),
                        nextYM: _this.getNextYM()
                    };
                    var event = new bui.BEvent(e, dateData);
                    _this.preBtn.trigger('click', event);
                });
            };
            LogCalendar.prototype.generateTemplate = function (callback) {
                var head = this.getHead(), body = this.getBody(), rowClass;
                switch (this.rowTotal) {
                    case 4:
                        rowClass = 'bui-log-four-rows';
                        break;
                    case 5:
                        rowClass = 'bui-log-five-rows';
                        break;
                    case 6:
                        rowClass = 'bui-log-six-rows';
                        break;
                }
                this.$cal = $('<div class="bui-log-calendar ' + rowClass + '">').append(head, body);
                this.$el.find('div.bui-log-calendar').remove().end().append(this.$cal);
                if (callback) {
                    callback.call();
                }
            };
            LogCalendar.prototype.getHead = function () {
                var html = '<div class="bui-log-head">';
                for (var i = 0; i <= 6; i++) {
                    var pos = i + this.options.startIn, j = pos > 6 ? pos - 6 - 1 : pos;
                    html += '<div>';
                    html += this.options.displayWeekAbbr ? this.options.weekabbrs[j] : this.options.weeks[j];
                    html += '</div>';
                }
                html += '</div>';
                return html;
            };
            LogCalendar.prototype.getBody = function () {
                var d = new Date(this.year, this.month + 1, 0), 
                // number of days in the month
                monthLength = d.getDate(), firstDay = new Date(this.year, this.month, 1);
                // day of the week
                this.startingDay = firstDay.getDay();
                var _this = this;
                var html = '<div class="bui-log-body"><div class="bui-log-row">', 
                // fill in the days
                day = 1;
                // this loop is for weeks (rows)
                for (var i = 0; i < 7; i++) {
                    // this loop is for weekdays (cells)
                    for (var j = 0; j <= 6; j++) {
                        var pos = this.startingDay - this.options.startIn, p = pos < 0 ? 6 + pos + 1 : pos, inner = '', today = this.month === this.today.getMonth() && this.year === this.today.getFullYear() && day === this.today.getDate(), content = null;
                        var strdate = void 0, dayData = void 0;
                        if (day <= monthLength && (i > 0 || j >= p)) {
                            inner += '<span class="bui-log-date">' + day + '</span><span class="bui-log-weekday">' + this.options.weekabbrs[j + this.options.startIn > 6 ? j + this.options.startIn - 6 - 1 : j + this.options.startIn] + '</span>';
                            // this day is:
                            strdate = (this.year + '-' + (this.month + 1 < 10 ? '0' + (this.month + 1) : this.month + 1)) + '-' + (day < 10 ? '0' + day : day);
                            dayData = this.caldata.get(strdate);
                            if (dayData) {
                                content = dayData;
                            }
                            inner += "<div style=\"display:none;\" class=\"bui-log-calendar-strdate\">" + strdate + "</div>";
                            ++day;
                        }
                        else {
                            today = false;
                        }
                        var cellClasses = today ? 'bui-log-today ' : '';
                        if (content !== null) {
                            cellClasses += 'bui-log-content';
                        }
                        var outClass = '';
                        if (!_this.isDuringRangeDate(strdate)) {
                            outClass = 'bui-log-out-range';
                        }
                        html += cellClasses !== '' ? "<div class=\"" + cellClasses + " " + outClass + "\">" : "<div class=\"" + outClass + "\">";
                        html += inner;
                        html += '</div>';
                    }
                    // stop making rows if we've run out of days
                    if (day > monthLength) {
                        this.rowTotal = i + 1;
                        break;
                    }
                    else {
                        html += '</div><div class="bui-log-row">';
                    }
                }
                html += '</div></div>';
                return html;
            };
            LogCalendar.prototype.isValidDate = function (date) {
                date = date.replace(/-/gi, '');
                var month = parseInt(date.substring(0, 2), 10), day = parseInt(date.substring(2, 4), 10), year = parseInt(date.substring(4, 8), 10);
                if ((month < 1) || (month > 12)) {
                    return false;
                }
                else if ((day < 1) || (day > 31)) {
                    return false;
                }
                else if (((month == 4) || (month == 6) || (month == 9) || (month == 11)) && (day > 30)) {
                    return false;
                }
                else if ((month == 2) && (((year % 400) == 0) || ((year % 4) == 0)) && ((year % 100) != 0) && (day > 29)) {
                    return false;
                }
                else if ((month == 2) && ((year % 100) == 0) && (day > 29)) {
                    return false;
                }
                return {
                    day: day,
                    month: month,
                    year: year
                };
            };
            LogCalendar.prototype.move = function (period, dir, callback) {
                if (dir === 'previous') {
                    if (period === 'month') {
                        this.year = this.month > 0 ? this.year : --this.year;
                        this.month = this.month > 0 ? --this.month : 11;
                    }
                    else if (period === 'year') {
                        this.year = --this.year;
                    }
                }
                else if (dir === 'next') {
                    if (period === 'month') {
                        this.year = this.month < 11 ? this.year : ++this.year;
                        this.month = this.month < 11 ? ++this.month : 0;
                    }
                    else if (period === 'year') {
                        this.year = ++this.year;
                    }
                }
                this.generateTemplate(callback);
            };
            /**
             * @description 判断选中的日期是否在当月前后两月之内
             */
            LogCalendar.prototype.isDuringRangeDate = function (chooseDate) {
                var nextMonthDate = new Date(this.getNextYM() + "-01").getTime();
                var preMonthDate = new Date(this.getPreYM() + "-01").getTime();
                var chooseDateArg = new Date(chooseDate).getTime();
                if (chooseDateArg < nextMonthDate && chooseDateArg > preMonthDate) {
                    return true;
                }
                else {
                    return false;
                }
            };
            /*************************
             ******PUBLIC METHODS *****
            **************************/
            LogCalendar.prototype.getYear = function () {
                return this.year;
            };
            LogCalendar.prototype.getMonth = function () {
                return this.month + 1;
            };
            LogCalendar.prototype.getMonthName = function () {
                return this.options.displayMonthAbbr ? this.options.monthabbrs[this.month] : this.options.months[this.month];
            };
            // gets the cell's content div associated to a day of the current displayed month
            // day : 1 - [28||29||30||31]
            LogCalendar.prototype.getCell = function (day) {
                var row = Math.floor((day + this.startingDay - this.options.startIn) / 7), pos = day + this.startingDay - this.options.startIn - (row * 7) - 1;
                return this.$cal.find('div.bui-log-body').children('div.bui-log-row').eq(row).children('div').eq(pos).children('div');
            };
            LogCalendar.prototype.setData = function (caldata) {
                caldata = caldata || {};
                $.extend(this.caldata, caldata);
                this.generateTemplate();
            };
            // goes to today's month/year
            LogCalendar.prototype.gotoNow = function (callback) {
                this.month = this.today.getMonth();
                this.year = this.today.getFullYear();
                this.generateTemplate(callback);
            };
            //goes to today's month/year
            LogCalendar.prototype.goto = function (month, year, callback) {
                this.month = month;
                this.year = year;
                this.generateTemplate(callback);
            };
            LogCalendar.prototype.gotoPreviousMonth = function (callback) {
                this.move('month', 'previous', callback);
            };
            LogCalendar.prototype.gotoPreviousYear = function (callback) {
                this.move('year', 'previous', callback);
            };
            LogCalendar.prototype.gotoNextMonth = function (callback) {
                this.move('month', 'next', callback);
            };
            LogCalendar.prototype.gotoNextYear = function (callback) {
                this.move('year', 'next', callback);
            };
            LogCalendar.prototype.logError = function (message) {
                if (window.console) {
                    window.console.error(message);
                }
            };
            /**
           * @description 为select组件绑定on事件
           * @type {string} 事件类型
           * @callbackfn 回调函数
           */
            LogCalendar.prototype.on = function (type, callbackfn) {
                this.clickCallBackFn = callbackfn;
                btop.hui.EventProxy.inst.on(type + ".logCalendar", callbackfn);
            };
            /**
             * @description 为select组件绑定trigger事件
             * @type {string} 事件类型
             * @callbackfn 回调函数
             */
            LogCalendar.prototype.trigger = function (type) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                btop.hui.EventProxy.inst.trigger(type, args);
            };
            LogCalendar.prototype.unbind = function (type) {
                btop.hui.EventProxy.inst.remove(type + ".logCalendar", this.clickCallBackFn);
                return this;
            };
            LogCalendar.prototype.destroy = function () {
                btop.hui.EventProxy.inst.remove("click.logCalendar", this.clickCallBackFn);
                _super.prototype.destroy.call(this);
            };
            LogCalendar.prototype.getToday = function () {
                var day = this.today.getDate() < 10 && this.today.getDate() > 0 ? '0' + this.today.getDate() : this.today.getDate();
                var month = this.today.getMonth() < 10 && this.today.getMonth() > 0 ? '0' + (this.today.getMonth() + 1) : (this.today.getMonth() + 1);
                return this.today.getFullYear() + "-" + month + "-" + day;
            };
            LogCalendar.prototype.getCurrentYM = function () {
                var month = (this.getMonth() < 10 && this.getMonth() > 0) ? '0' + this.getMonth() : this.getMonth() + '';
                return this.getYear() + '-' + month;
            };
            LogCalendar.prototype.getNextYM = function () {
                var year = this.getYear();
                var nextMonth = this.getMonth() + 1;
                var nextYear = nextMonth <= 12 ? year : (year + 1);
                nextMonth = nextMonth <= 12 ? nextMonth : 1;
                return nextYear + '-' + nextMonth;
            };
            LogCalendar.prototype.getPreYM = function () {
                var year = this.getYear();
                var preMonth = this.getMonth() - 1;
                var preYear = preMonth >= 1 ? year : (year - 1);
                preMonth = preMonth <= 1 ? 12 : preMonth;
                return preYear + '-' + preMonth;
            };
            return LogCalendar;
        }(btop.hui.Widget));
        bui.LogCalendar = LogCalendar;
        var LogCalendarBtn = (function (_super) {
            __extends(LogCalendarBtn, _super);
            function LogCalendarBtn(btnType) {
                _super.call(this, 'logCalendar', btnType);
                this.btnType = btnType;
            }
            return LogCalendarBtn;
        }(bui.Button));
        bui.LogCalendarBtn = LogCalendarBtn;
        (function (LogCalendarTheme) {
            LogCalendarTheme[LogCalendarTheme["SIMPLE"] = 0] = "SIMPLE";
            LogCalendarTheme[LogCalendarTheme["COMPLEX"] = 1] = "COMPLEX";
        })(bui.LogCalendarTheme || (bui.LogCalendarTheme = {}));
        var LogCalendarTheme = bui.LogCalendarTheme;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  PageAlert
 * 描述  :  页面弹出装载容器
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  7/01/2016 10:42:23 AM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
///<reference path="../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../../libs/jQuery.d.ts"/>
///<reference path="../../base/Button.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        /**
         * PageAlert 页面弹出装载容器
         * @class PageAlert
         * @module btop.bui
         * @extends btop.hui.Widget
         *  */
        var PageAlert = (function (_super) {
            __extends(PageAlert, _super);
            function PageAlert() {
                _super.apply(this, arguments);
                this.confirmBtn = new PageAlertBtn('confirm'); //确定按钮
                this.cancelBtn = new PageAlertBtn('cancel'); //取消按钮
            }
            /**
             * 初始化组件视图，它是全局组件，默认是隐藏的
             * @method initView
             */
            PageAlert.prototype.initView = function () {
                this.$pageAlertRootNode = $(this.nodeTypeMap.get('pageAlertRootNode'));
                this.visible = false;
            };
            /**
             * PageAlert显示操作
             * @method show
             * @emedPageId 嵌套的交易页面hash值
             * @data PageAlert传递的数据
             * @option 样式数据类型{width?:'',height?:'',top?:'',left?:'',backgroundcolor?:'',opacity?:''}
             * @return {PageAlert} 返回PageAlert对象
             */
            PageAlert.prototype.show = function (emedPageId, data, option) {
                this.emedPageId = emedPageId;
                //初始化PageAlert样式
                if (option) {
                    this.$pageAlertRootNode.css('width', option.width);
                    this.$pageAlertRootNode.css('height', option.height);
                    this.$pageAlertRootNode.css('top', option.top);
                    this.$pageAlertRootNode.css('left', option.left);
                    this.$pageAlertRootNode.css('background-color', option.backgroundcolor);
                    this.$pageAlertRootNode.css('opacity', option.opacity);
                }
                //进行页面嵌套操作
                btop.hui.PageManager.embedTo(emedPageId, "pageAlertContainerMount", data);
                this.show1();
                return this;
            };
            /**
             * 仅提供显示，以及动画操作，是个辅助操作
             * @method show1
             * @private
             */
            PageAlert.prototype.show1 = function () {
                var _this = this;
                this.visible = true;
                $(this.domNode).addClass('bui-pagealert-animate-opacity');
                $(this.domNode).addClass('bui-pagealert-animate-delete-opacity');
                setTimeout(function () {
                    $(_this.domNode).addClass('bui-pagealert-animate-add-opacity');
                }, 0);
            };
            /**
             * 仅提供隐藏，以及动画操作
             * @method hide
             */
            PageAlert.prototype.hide = function () {
                var _this = this;
                var emedPage = btop.hui.WidgetManager.byId(this.emedPageId);
                if (emedPage) {
                    emedPage.destroy();
                }
                else {
                    console.error("PageAlert: \u65E0" + this.emedPageId + "\u9875\u9762");
                }
                $(_this.domNode).removeClass('bui-pagealert-animate-add-opacity');
                setTimeout(function () {
                    _this.visible = false;
                }, 300);
            };
            /**
             * 供其他页面再次支配，避免调用show方法
             * @method getInstance
             */
            PageAlert.prototype.getInstance = function () {
                return this;
            };
            return PageAlert;
        }(btop.hui.Widget));
        bui.PageAlert = PageAlert;
        var PageAlertBtn = (function (_super) {
            __extends(PageAlertBtn, _super);
            function PageAlertBtn(btnType) {
                _super.call(this, 'pagealert', btnType);
                this.btnType = btnType;
            }
            return PageAlertBtn;
        }(bui.Button));
        bui.PageAlertBtn = PageAlertBtn;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  ProductAlert
 * 描述  :  Tab切换组件
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/22
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../../libs/jQuery.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var ProductAlert = (function (_super) {
            __extends(ProductAlert, _super);
            function ProductAlert() {
                _super.apply(this, arguments);
            }
            ProductAlert.prototype.initView = function () {
                var _this = this;
                this.deleteButton = $(this.nodeTypeMap.get('productAlertBtnDelete'));
                this.deleteButton.click(function () {
                    $('#' + _this.id).hide();
                });
                this.hide();
            };
            ProductAlert.prototype.show = function (data) {
                /**
                 * <tr>
                       <td>设备名称</td>
                       <td>设备描述设备描述设备描述设备描述设备描述设备描述设备描述设备描述设备描述设备描述设备描述设备描述设备描述设备描述设备描述设备描述设备描述设备描述设备描述设备描述设备描述设备描述设备描述设备描述</td>
                  </tr>
                 */
                var _this = this;
                for (var i in data) {
                    var temp = "<tr>\n                                <td>" + data[i].title + "</td>\n                                <td>" + data[i].content + "</td>\n                            </tr>\n                           ";
                    $(temp).appendTo($(_this.nodeTypeMap.get('productAlertTable')));
                }
                _super.prototype.show.call(this);
            };
            return ProductAlert;
        }(btop.hui.PopWindow));
        bui.ProductAlert = ProductAlert;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Select
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/22
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../../libs/jQuery.d.ts"/>
///<reference path="../../../util/EventUtils.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Select = (function (_super) {
            __extends(Select, _super);
            function Select() {
                _super.apply(this, arguments);
                this.selectItems = new Array(); //li的每一项的容器
                this.selectItemsCount = 0; //item数量
            }
            Select.prototype.initView = function () {
                bui.SelectManager.push(this.id);
            };
            /**
             * @description 初始化数据
             */
            Select.prototype.initData = function (option) {
                if (option != undefined) {
                    this.clear();
                    this.render(option);
                }
            };
            /**
             * @description 渲染select
             * @option 内部有select布局的方式和数据内容，起到配置作用
             */
            Select.prototype.render = function (option) {
                this.selectData = option.data;
                this.$selectInput = $(this.nodeTypeMap.get('selectInputNode'));
                this.$select = $(this.domNode).find('.bui-select-list');
                var firstItemTemp = "<li value=\"default\">--\u8BF7\u9009\u62E9--</li>";
                this.$firstItem = $(firstItemTemp);
                this.$firstItem.appendTo(this.$select);
                var optionData = {};
                if (typeof option.data[0] === "object") {
                    this.selectDataType = 0;
                    optionData = option.data;
                    for (var index in optionData) {
                        for (var index1 in option.data[index]) {
                            var selectItemTemp = "<li value=\"" + index1 + "\">" + option.data[index][index1] + "</li>";
                            var selectItem = $(selectItemTemp);
                            this.selectItems.push(selectItem);
                            selectItem.appendTo(this.$select);
                        }
                    }
                }
                else {
                    this.selectDataType = 1;
                    optionData = option.data;
                    for (var index in optionData) {
                        var selectItemTemp = "<li value=\"" + index + "\">" + option.data[index] + "</li>";
                        var selectItem = $(selectItemTemp);
                        this.selectItems.push(selectItem);
                        selectItem.appendTo(this.$select);
                    }
                }
                this.setSelectedItem('default');
                if (option.position == 'top') {
                    this.setPosition('top');
                }
                this.bindEvent();
            };
            /**
             * @description 选定显示哪一项
             * @index 默认传入数据的id
             */
            Select.prototype.setSelectedItem = function (index) {
                if (index == "default") {
                    this.$selectInput.val("--请选择--");
                    this.$selectedItem = this.$firstItem;
                }
                var count = 0;
                if (this.selectDataType === 0) {
                    for (var j in this.selectData) {
                        for (var i in this.selectData[j]) {
                            if (index == i) {
                                this.$selectInput.val(this.selectData[j][i]);
                                this.$selectedItem = this.selectItems[count];
                            }
                        }
                        count++;
                    }
                }
                else {
                    for (var j in this.selectData) {
                        if (index == j) {
                            this.$selectInput.val(this.selectData[j]);
                            this.$selectedItem = this.selectItems[count];
                        }
                        count++;
                    }
                }
                this.selectItemsCount = count + 1;
            };
            /**
             * @description 绑定select相关事件
             */
            Select.prototype.bindEvent = function () {
                var _this = this;
                //点击input元素，select的toggle效果
                this.$selectInput.unbind('click').on('click', function (e) {
                    //如果其它select组件还处于打开状态，给予关闭状态
                    var selectIds = bui.SelectManager.getIds();
                    for (var i in selectIds) {
                        if (_this.id != selectIds[i]) {
                            var selectInst = btop.hui.WidgetManager.byId(selectIds[i]);
                            selectInst.selectHide();
                        }
                    }
                    //动态切换自身的select展开     
                    _this.$select.toggle();
                    if (_this.$selectedItem)
                        _this.$selectedItem.addClass('bui-mouse-effect');
                    else
                        _this.$firstItem.addClass('bui-mouse-effect');
                    //当点击非自身元素时，select关闭
                    $(document).unbind('click').one("click", function () {
                        _this.$select.hide();
                    });
                    bui.EventUtils.stopPropagation(e); //阻止事件向上冒泡
                });
                this.$select.unbind('click').on('click', function (e) {
                    if (_this.$selectedItem)
                        _this.$selectedItem.removeClass('bui-mouse-effect');
                    _this.$selectedItem = $(e.target);
                    _this.$selectInput.val(_this.$selectedItem[0].innerHTML);
                    _this.$select.hide();
                    var selectValues = {
                        attrValue: _this.getAttrValue(),
                        htmlValue: _this.getHTMLValue()
                    };
                    _this.trigger("change." + _this.id, selectValues);
                    bui.EventUtils.stopPropagation(e); //阻止事件向上冒泡
                });
            };
            /**
             * @description 初始化前要清除数据
             */
            Select.prototype.clear = function () {
                if (this.$select) {
                    this.$select.children().remove();
                    this.$select.children().empty();
                    this.$select.children().off();
                }
            };
            /**
             * @description 设置select显示的位置，默认居于input下方
             * @topPosition 设置居于input上方
             */
            Select.prototype.setPosition = function (topPosition) {
                switch (topPosition) {
                    case "top":
                        {
                            var top_1 = this.$select.offset().top;
                            var selectHeight = this.selectItemsCount * 30;
                            var selectMarginTop = selectHeight + 32;
                            if (selectMarginTop <= 242)
                                this.$select.css("margin-top", (-selectMarginTop) + 'px');
                            else
                                this.$select.css("margin-top", (-242) + 'px');
                            break;
                        }
                    default:
                        break;
                }
            };
            /**
             * @description 为select组件绑定on事件
             * @type 事件类型
             * @callbackfn 回调函数
             */
            Select.prototype.on = function (type, callbackfn) {
                this.changeCallBackFn = callbackfn;
                btop.hui.EventProxy.inst.on(type + ("." + this.id), callbackfn);
            };
            /**
             * @description 为select组件绑定trigger事件
             * @type 事件类型
             * @callbackfn 回调函数
             */
            Select.prototype.trigger = function (type) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                btop.hui.EventProxy.inst.trigger(type, args);
            };
            Select.prototype.selectHide = function () {
                this.$select.hide();
            };
            /**
             * @description 获取li中attr属性value的值
             */
            Select.prototype.getAttrValue = function () {
                if (this.$selectedItem)
                    return this.$selectedItem.attr('value');
                else
                    return "";
            };
            /**
             * @description 获取li中html的值
             */
            Select.prototype.getHTMLValue = function () {
                if (this.$selectedItem)
                    return this.$selectedItem[0].innerHTML;
                else
                    return "";
            };
            Select.prototype.destroy = function () {
                btop.hui.EventProxy.inst.remove("change." + this.id, this.changeCallBackFn);
                bui.SelectManager.removeAll();
                _super.prototype.destroy.call(this);
            };
            return Select;
        }(btop.hui.Widget));
        bui.Select = Select;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  SelectManager
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/22
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../../libs/jQuery.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var SelectManager = (function () {
            function SelectManager() {
            }
            /**
             * @description 如果存在就不注入
             */
            SelectManager.push = function (id) {
                var flag = true;
                for (var i in this.selectIds) {
                    if (this.selectIds[i] == id)
                        flag = false;
                }
                if (flag)
                    this.selectIds.push(id);
            };
            /**
             * @description 获取注入的ids
             */
            SelectManager.getIds = function () {
                return this.selectIds;
            };
            SelectManager.removeAll = function () {
                this.selectIds = [];
            };
            SelectManager.selectIds = new Array(); //存放所有注入的select组件的id
            return SelectManager;
        }());
        bui.SelectManager = SelectManager;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Tab
 * 描述  :  Tab切换组件
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/4/14
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../../libs/jQuery.d.ts"/>
///<reference path="../../../util/TimeUtil.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var Tab = (function (_super) {
            __extends(Tab, _super);
            function Tab() {
                _super.apply(this, arguments);
            }
            Tab.prototype.initView = function () {
            };
            /**
             * @description 初始化数据
             * @titles 所有标题
             * @pageIds 页面切换的id，这个数据可选
             */
            Tab.prototype.initData = function (option) {
                //初始化页面数据
                var _this = this;
                _this.titles = option.titles;
                _this.transferData = option.data;
                var tabContainerHTMLElement = $(_this.nodeTypeMap.get('tabRootNode')).children().get(0);
                for (var i = 0; i < _this.titles.length; i++) {
                    var tabItemTempt = "<div class='bui-tab-item' hui-widget-nodeType='tabItemNode" + i + "'>\n                                                <div class='bui-tab-item-img-content'>\n                                                    <div class='bui-tab-item-img'></div>\n                                                </div>\n                                                <div class='bui-tab-item-title' hui-widget-nodeType='tabItemTitleNode" + i + "'></div>\n                                            </div>";
                    $(tabItemTempt).appendTo(tabContainerHTMLElement);
                }
                _this.nodeTypeMap = _this.parseWidgetNodeType($(_this.nodeTypeMap.get('tabRootNode')).parent()[0]);
                for (var j in _this.titles) {
                    $(_this.nodeTypeMap.get('tabItemTitleNode' + j)).html(_this.titles[j]);
                }
                //初始化页面数据
                _this.pageIds = option.pageIds;
                if (this.pageIds != null && this.pageIds != undefined) {
                    this.bindEvent(option.mountId);
                }
            };
            Tab.prototype.bindEvent = function (mountId) {
                var _this = this;
                $($('#' + _this.id + ' .bui-tab-container').children().get(0)).addClass('bui-tab-item-checked');
                this.switchPage(0, mountId);
                $('#' + _this.id + ' .bui-tab-container').children().click(function () {
                    var that = this;
                    var items = $('#' + _this.id + ' .bui-tab-container').children();
                    for (var i = 0; i < items.length; i++) {
                        if (that == items[i]) {
                            _this.switchPage(i, mountId);
                            $(that).addClass('bui-tab-item-checked');
                        }
                        else {
                            $(items[i]).removeClass('bui-tab-item-checked');
                        }
                    }
                });
            };
            /**
             * @description 切换不同的挂载页面
             */
            Tab.prototype.switchPage = function (index, mountPoint) {
                for (var i = 0; i < this.pageIds.length; i++) {
                    if (i == index) {
                        btop.hui.PageManager.embedTo(this.pageIds[index], mountPoint, this.transferData);
                    }
                    else {
                        if (btop.hui.WidgetManager.byId(this.pageIds[i])) {
                            btop.hui.WidgetManager.byId(this.pageIds[i]).destroy();
                        }
                    }
                }
            };
            /**
             * @description 销毁嵌套的页面
             */
            Tab.prototype.destroyPage = function () {
                for (var i = 0; i < this.pageIds.length; i++) {
                    if (btop.hui.WidgetManager.byId(this.pageIds[i])) {
                        btop.hui.WidgetManager.byId(this.pageIds[i]).destroy();
                    }
                }
            };
            return Tab;
        }(btop.hui.Widget));
        bui.Tab = Tab;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  VideoAndAudio
 * 描述  :  视频和音频组件
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/7/16
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../../libs/jQuery.d.ts"/>
///<reference path="../../base/Button.ts"/>
///<reference path="../../../util/EventUtils.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var VideoAndAudio = (function (_super) {
            __extends(VideoAndAudio, _super);
            function VideoAndAudio() {
                _super.apply(this, arguments);
                this.audioChooseTime = 5; //这个数据会根据change事件变化
                this.startAudioBtn = new VideoAndAudioBtn("startaudio"); //开始录音按钮(暴露事件)
                this.stopAudioBtn = new VideoAndAudioBtn("stopaudio"); //停止录音安按钮(暴露事件)
                this.videoChooseTime = 3; // 这个数据会根据change事件变化
                this.startVideoBtn = new VideoAndAudioBtn("startvideo"); //开始录像按钮(暴露事件)
                this.isProcessingAudio = false; //是否正在录制音频
                this.isProcessingVideo = false; //是否正在录制视频
            }
            VideoAndAudio.prototype.initView = function () {
                this.visible = false;
                this.$videoAndAudioRootNode = $(this.nodeTypeMap.get("videoAndAudioRootNode"));
                //录音初始化
                this.$audioTimeLimitingNode = $(this.nodeTypeMap.get("audioTimeLimitingNode"));
                this.$audioTimeLimitingValueNode = $(this.nodeTypeMap.get("audioTimeLimitingValueNode"));
                this.$startAudioBtnNode = $(this.nodeTypeMap.get("startAudioBtnNode"));
                this.$stopAudioBtnNode = $(this.nodeTypeMap.get("stopAudioBtnNode"));
                //录像初始化
                this.$videoTimeLimitingNode = $(this.nodeTypeMap.get("videoTimeLimitingNode"));
                this.$videoTimeLimitingValueNode = $(this.nodeTypeMap.get("videoTimeLimitingValueNode"));
                this.$startVideoBtnNode = $(this.nodeTypeMap.get("startVideoBtnNode"));
                this.bindEvents();
            };
            VideoAndAudio.prototype.bindEvents = function () {
                var _this = this;
                //为根节点绑定事件，事件冒泡来拦截，防止组件被隐藏
                this.$videoAndAudioRootNode.on("click", function (e) {
                    bui.EventUtils.stopPropagation(e);
                });
                //开始录音事件
                this.$startAudioBtnNode.on('click', function (e) {
                    if (_this.isProcessingAudio) {
                        return false;
                    }
                    _this.isProcessingAudio = true; //正在录音
                    _this.$startAudioBtnNode.html('正在录音');
                    _this.$startAudioBtnNode.addClass("bui-videoandaudio-btn-disabled");
                    _this.$stopAudioBtnNode.removeClass("bui-videoandaudio-btn-disabled");
                    _this.$startVideoBtnNode.addClass("bui-videoandaudio-btn-disabled");
                    var event = new bui.BEvent(e, { type: 'startaudio', timeOut: _this.audioChooseTime });
                    _this.startAudioBtn.trigger('click', event);
                });
                //停止录音事件
                this.$stopAudioBtnNode.on('click', function (e) {
                    if (_this.isProcessingAudio) {
                        _this.isProcessingAudio = false;
                        _this.$startAudioBtnNode.html('开始录音');
                        _this.$startAudioBtnNode.removeClass("bui-videoandaudio-btn-disabled");
                        _this.$stopAudioBtnNode.addClass("bui-videoandaudio-btn-disabled");
                        _this.$startVideoBtnNode.removeClass("bui-videoandaudio-btn-disabled");
                        var event_4 = new bui.BEvent(e, { type: 'stopaudio' });
                        _this.stopAudioBtn.trigger('click', event_4);
                    }
                });
                //选择录音时间事件
                this.$audioTimeLimitingNode[0].addEventListener('change', function (e) {
                    //最小时间为1
                    if (e.currentTarget.value == 0) {
                        _this.$audioTimeLimitingValueNode.html(1 + '');
                        _this.audioChooseTime = 1;
                    }
                    else {
                        _this.$audioTimeLimitingValueNode.html(e.currentTarget.value);
                        _this.audioChooseTime = e.currentTarget.value;
                    }
                });
                //开始录像事件
                this.$startVideoBtnNode.unbind('click').on('click', function (e) {
                    if (_this.isProcessingAudio) {
                        return false;
                    }
                    var event = new bui.BEvent(e, { type: 'startvideo', timeOut: _this.videoChooseTime });
                    _this.startVideoBtn.trigger('click', event);
                });
                //选择录像时间事件
                this.$videoTimeLimitingNode[0].addEventListener('change', function (e) {
                    //最小时间为1
                    if (e.currentTarget.value == 0) {
                        _this.$videoTimeLimitingValueNode.html(1 + '');
                        _this.videoChooseTime = 1;
                    }
                    else {
                        _this.$videoTimeLimitingValueNode.html(e.currentTarget.value);
                        _this.videoChooseTime = e.currentTarget.value;
                    }
                });
            };
            VideoAndAudio.prototype.simulateStopAudioEvent = function (bEvent) {
                this.isProcessingAudio = false;
                this.$startAudioBtnNode.html('开始录音');
                this.$startAudioBtnNode.removeClass("bui-videoandaudio-btn-disabled");
                this.$stopAudioBtnNode.addClass("bui-videoandaudio-btn-disabled");
                this.$startVideoBtnNode.removeClass("bui-videoandaudio-btn-disabled");
                var event = new bui.BEvent(bEvent, { type: 'stopaudio' });
                this.stopAudioBtn.trigger('click', event);
            };
            /**
             * @description 展示用户卡片信息
             */
            VideoAndAudio.prototype.show = function () {
                this.show1();
                return this;
            };
            /**
            * @description 仅提供显示，以及动画操作
            */
            VideoAndAudio.prototype.show1 = function () {
                var _this = this;
                this.visible = true;
                $(this.domNode).addClass('bui-videoandaudio-animate-opacity');
                $(this.domNode).addClass('bui-videoandaudio-animate-delete-opacity');
                setTimeout(function () {
                    $(_this.domNode).addClass('bui-videoandaudio-animate-add-opacity');
                }, 0);
            };
            VideoAndAudio.prototype.hide = function () {
                var _this = this;
                $(_this.domNode).removeClass('bui-videoandaudio-animate-add-opacity');
                setTimeout(function () {
                    _this.visible = false;
                }, 300);
            };
            /**
             * @description 设置启动音频按钮
             * @content 内容值
             */
            VideoAndAudio.prototype.setStartAudioBtn = function (content) {
            };
            return VideoAndAudio;
        }(btop.hui.Widget));
        bui.VideoAndAudio = VideoAndAudio;
        var VideoAndAudioBtn = (function (_super) {
            __extends(VideoAndAudioBtn, _super);
            function VideoAndAudioBtn(btnType) {
                _super.call(this, 'videoandaudio', btnType);
                this.btnType = btnType;
            }
            return VideoAndAudioBtn;
        }(bui.Button));
        bui.VideoAndAudioBtn = VideoAndAudioBtn;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Alert
 * 描述  :  Alert控件
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/6/12
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../btop/btop.hui.d.ts"/>
///<reference path="../../base/Button.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        /**
         * Alert提示框
         * @class Alert
         * @module btop.bui
         * @extends btop.bui.Widget
         *  */
        var Alert = (function (_super) {
            __extends(Alert, _super);
            function Alert() {
                _super.apply(this, arguments);
                this.clickAutoHide = false; //点击其它区域，Alert自动隐藏
                /**
                 * Alert确定按钮属性，可以通过BGlobal.Alert.confirmBtn进行调用
                 * @property confirmBtn
                 * @type AlertBtn
                 * @for Alert
                 */
                this.confirmBtn = new AlertBtn('confirm'); //按钮，及通过此按钮暴露到调用UI，可以执行对应的事件
            }
            /**
            * 初始化组件视图，它是全局组件，默认是隐藏的
            * @method initView
            */
            Alert.prototype.initView = function () {
                this.hide();
                this.visible = false;
            };
            /**
             * 根据show内部数据来展现
             * @method show
             * @data {Object} 传输JSON数据，其中title为标题，content为内容
             * @return {Alert} 返回Alert对象
             */
            Alert.prototype.show = function (data) {
                if (data === void 0) { data = { title: '标题', content: '内容' }; }
                var _this = this;
                this.render(data);
                this.bindEvents();
                this.show1();
                this.setTheme(AlertTheme.BLUE);
                return this;
            };
            /**
             * 根据data渲染界面
             * @method render
             * @data {JSON} 传输JSON数据，其中title为标题，content为内容
             * @private
             */
            Alert.prototype.render = function (data) {
                this.$rootNode = $(this.nodeTypeMap.get('alertRootNode'));
                this.$titleNode = $(this.nodeTypeMap.get('alertTitleNode'));
                this.$contentNode = $(this.nodeTypeMap.get('alertContentNode'));
                this.$confirmBtn = $(this.nodeTypeMap.get('confirmBtnNode'));
                this.$titleNode.html(data.title);
                this.$contentNode.html(data.content);
            };
            /**
            * 为Alert节点绑定事件
            * @method bindEvents
            * @private
            */
            Alert.prototype.bindEvents = function () {
                var _this = this;
                this.$confirmBtn.unbind('click').on('click', function (e) {
                    _this.hide();
                    var event = new bui.BEvent(e, { data: "cancel" });
                    _this.confirmBtn.trigger('click', event);
                    _this.confirmBtn.unbind('click');
                });
                //阻止事件冒泡
                this.$rootNode.unbind('click').on('click', function (e) {
                    bui.EventUtils.stopPropagation(e);
                });
            };
            /**
            * 为Alert设置相对应的主题
            * @theme {AlertTheme} 有AlertTheme.Red、AlertTheme.GREEN、AlertTheme.BLUE三种样式
            * @method setTheme
            */
            Alert.prototype.setTheme = function (theme) {
                switch (theme) {
                    case AlertTheme.Red:
                        this.$rootNode.css('background-color', 'red');
                        break;
                    case AlertTheme.GREEN:
                        this.$rootNode.css('background-color', 'green');
                        break;
                    case AlertTheme.BLUE:
                        this.$rootNode.css('background-color', 'blue');
                        break;
                    default:
                        this.$rootNode.css('background-color', 'red');
                        break;
                }
            };
            /**
            * 仅提供显示，以及动画操作，是个辅助操作
            * @method show1
            * @private
            */
            Alert.prototype.show1 = function () {
                var _this = this;
                this.visible = true;
                $(this.domNode).addClass('bui-alert-animate-opacity');
                $(this.domNode).addClass('bui-alert-animate-delete-opacity');
                setTimeout(function () {
                    $(_this.domNode).addClass('bui-alert-animate-add-opacity');
                }, 0);
            };
            /**
           * 仅提供隐藏，以及动画操作
           * @method hide
           */
            Alert.prototype.hide = function () {
                var _this = this;
                $(_this.domNode).removeClass('bui-alert-animate-add-opacity');
                setTimeout(function () {
                    _this.visible = false;
                }, 300);
                if (this.clickAutoHide) {
                    document.removeEventListener('click', _this.hideFunction);
                }
            };
            Alert.prototype.setStartAuto = function (flag) {
                this.clickAutoHide = flag;
                var _this = this;
                if (!flag) {
                    clearTimeout(this.timeOutId);
                    document.removeEventListener('click', this.hideFunction);
                }
                if (this.clickAutoHide) {
                    _this.hideFunction = function (e) {
                        _this.hide();
                    };
                    var timeOutId = setTimeout(function () {
                        document.addEventListener('click', _this.hideFunction);
                    }, 0);
                }
            };
            return Alert;
        }(btop.hui.Widget));
        bui.Alert = Alert;
        var AlertBtn = (function (_super) {
            __extends(AlertBtn, _super);
            function AlertBtn(type) {
                _super.call(this, 'alert', type);
            }
            return AlertBtn;
        }(bui.Button));
        bui.AlertBtn = AlertBtn;
        (function (AlertTheme) {
            AlertTheme[AlertTheme["Red"] = 0] = "Red";
            AlertTheme[AlertTheme["GREEN"] = 1] = "GREEN";
            AlertTheme[AlertTheme["BLUE"] = 2] = "BLUE";
        })(bui.AlertTheme || (bui.AlertTheme = {}));
        var AlertTheme = bui.AlertTheme;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Box
 * 描述  :
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/3/25
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../../../libs/jQuery.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        /**
         * LandscapeBox 横向布局的Box
         * @class LandscapeBox
         * @module btop.bui
         * @extends btop.bui.Widget
         *  */
        var LandscapeBox = (function (_super) {
            __extends(LandscapeBox, _super);
            function LandscapeBox() {
                _super.apply(this, arguments);
            }
            /**
             * 初始化组件视图，它是全局组件，默认是隐藏的
             * @method initView
             */
            LandscapeBox.prototype.initView = function () {
                var that = this;
                if (this.data != null) {
                    //取出文本区域值
                    $(this.nodeTypeMap.get('lboxTextNode')).html(that.data['text']);
                }
            };
            return LandscapeBox;
        }(btop.hui.Widget));
        bui.LandscapeBox = LandscapeBox;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  PortraitBox
 * 描述  :
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  3/27/2016 6:08:05 PM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
///<reference path="../../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../../../libs/jQuery.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        /**
         * LandscapeBox 纵向布局的Box
         * @class PortraitBox
         * @module btop.bui
         * @extends btop.bui.Widget
         *  */
        var PortraitBox = (function (_super) {
            __extends(PortraitBox, _super);
            function PortraitBox() {
                _super.apply(this, arguments);
            }
            /**
             * 初始化组件视图，它是全局组件，默认是隐藏的
             * @method initView
             */
            PortraitBox.prototype.initView = function () {
                var that = this;
                if (this.data != null) {
                    //取出文本区域值
                    $(this.nodeTypeMap.get('pboxTextNode')).html(that.data['text']);
                    $(this.nodeTypeMap.get('pboxImgNode')).attr('src', "skin/default/img/" + that.data['imgName']);
                }
            };
            return PortraitBox;
        }(btop.hui.Widget));
        bui.PortraitBox = PortraitBox;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  UserCard
 * 描述  :
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  4/13/2016 8:57:15 AM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
///<reference path="../../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../../../libs/jQuery.d.ts"/>
///<reference path="../../../../util/TimeUtil.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        /**
         * UserCard 用户信息展示卡片
         * @class UserCard
         * @module btop.bui
         * @extends btop.bui.Widget
         *  */
        var UserCard = (function (_super) {
            __extends(UserCard, _super);
            function UserCard() {
                _super.apply(this, arguments);
                this.logOutBtn = new UserCardBtn('logout'); //注销按钮
            }
            /**
             * 初始化组件视图，它是全局组件，默认是隐藏的
             * @method initView
             */
            UserCard.prototype.initView = function () {
                this.hide();
                this.$userNameNode = $(this.nodeTypeMap.get('userNameNode'));
                this.$userAccountNode = $(this.nodeTypeMap.get('userAccount'));
                this.$userCardLogOutBtnNode = $(this.nodeTypeMap.get("userCardLogOutBtnNode"));
                this.$userRoleNode = $(this.nodeTypeMap.get("userRoleNode"));
                this.bindEvent();
                this.visible = false;
            };
            /**
             * 为UserCard节点元素绑定事件
             * @method bindEvents
             * @private
             */
            UserCard.prototype.bindEvent = function () {
                var _this = this;
                this.$userCardLogOutBtnNode.unbind("click").on("click", function (e) {
                    var event = new bui.BEvent(e, { data: "UserCard.logOut" });
                    _this.logOutBtn.trigger('click', event);
                    _this.hide();
                });
            };
            /**
             * @description 展示用户卡片信息
             */
            /**
             * 根据show内部数据来展示用户卡片信息
             * @method show
             * @data {JSON} 传输JSON数据，其中userName为用户名称，userAccount为用户账号，userRole角色
             * @return {UserCard} 返回Alert对象
             */
            UserCard.prototype.show = function (data) {
                if (data === void 0) { data = { userName: "", userAccount: "", userRole: "" }; }
                this.render(data);
                this.show1();
                return this;
            };
            /**
             * 仅提供显示，以及动画操作，是个辅助操作
             * @method show1
             * @private
             */
            UserCard.prototype.show1 = function () {
                var _this = this;
                this.visible = true;
                $(this.domNode).addClass('bui-usercard-animate-opacity');
                $(this.domNode).addClass('bui-usercard-animate-delete-opacity');
                setTimeout(function () {
                    $(_this.domNode).addClass('bui-usercard-animate-add-opacity');
                }, 0);
            };
            /**
             * 根据data渲染界面
             * @method render
             * @data {JSON} 传输JSON数据，其中userName为用户名称，userAccount为用户账号，userRole角色，其中角色 1、大堂经理 2、客户经理 3、灵活用户
             * @private
             */
            UserCard.prototype.render = function (data) {
                if (data === void 0) { data = { userName: "", userAccount: "", userRole: "" }; }
                this.$userNameNode.html(data.userName);
                this.$userAccountNode.html(data.userAccount);
                if (data.userRole == "1") {
                    this.$userRoleNode.html("大堂经理");
                }
                else if (data.userRole == "2") {
                    this.$userRoleNode.html("客户经理");
                }
                else if (data.userRole == "3") {
                    this.$userRoleNode.html("灵活用户");
                }
            };
            /**
             * 仅提供隐藏，以及动画操作
             * @method hide
             */
            UserCard.prototype.hide = function () {
                var _this = this;
                $(_this.domNode).removeClass('bui-usercard-animate-add-opacity');
                setTimeout(function () {
                    _this.visible = false;
                }, 300);
            };
            return UserCard;
        }(btop.hui.Widget));
        bui.UserCard = UserCard;
        var UserCardBtn = (function () {
            function UserCardBtn(btnType) {
                this.btnType = btnType;
                this.callbackMap = new Map();
                this.btnType = btnType;
            }
            UserCardBtn.prototype.on = function (type, callbackfn) {
                var eventType = type + "." + this.btnType + ".usercard";
                btop.hui.EventProxy.inst.on(eventType, callbackfn);
                if (!this.callbackMap.has(eventType))
                    this.callbackMap.set(eventType, new Array());
                this.callbackMap.get(eventType).push(callbackfn);
            };
            UserCardBtn.prototype.trigger = function (type) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                var eventType = type + "." + this.btnType + ".usercard";
                btop.hui.EventProxy.inst.trigger(eventType, args);
            };
            UserCardBtn.prototype.unbind = function (type) {
                this.remove(type);
                return this;
            };
            UserCardBtn.prototype.remove = function (type) {
                var eventType = type + "." + this.btnType + ".usercard";
                var _this = this;
                if (this.callbackMap.has(eventType)) {
                    var callbackfnArray = _this.callbackMap.get(eventType);
                    for (var i = 0; i < callbackfnArray.length; i++) {
                        btop.hui.EventProxy.inst.remove(eventType, callbackfnArray[i]);
                        var index = callbackfnArray.indexOf(callbackfnArray[i]);
                        if (index != -1)
                            callbackfnArray.splice(index, 1);
                    }
                }
            };
            return UserCardBtn;
        }());
        bui.UserCardBtn = UserCardBtn;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Confirm
 * 描述  :  Confirm控件
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/6/12
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../btop/btop.hui.d.ts"/>
///<reference path="../../base/Button.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        /**
         * Confirm 用户信息展示卡片
         * @class Confirm
         * @module btop.bui
         * @extends btop.bui.Widget
         *  */
        var Confirm = (function (_super) {
            __extends(Confirm, _super);
            function Confirm() {
                _super.apply(this, arguments);
                /**
                 * Confirm确定按钮属性，可以通过BGlobal.Confirm.confirmBtn进行调用
                 * @property confirmBtn
                 * @type ConfirmBtn
                 * @for Confirm
                 */
                this.confirmBtn = new ConfirmBtn('confirm');
                /**
                 * Confirm取消按钮属性，可以通过BGlobal.Confirm.cancelBtn进行调用
                 * @property cancelBtn
                 * @type ConfirmBtn
                 * @for Confirm
                 */
                this.cancelBtn = new ConfirmBtn('cancel');
            }
            /**
             * 初始化组件视图，它是全局组件，默认是隐藏的
             * @method initView
             */
            Confirm.prototype.initView = function () {
                this.hide();
                this.visible = false;
            };
            /**
             * 根据show内部数据来展现
             * @method show
             * @data {JSON} 传输JSON数据，其中title为标题，content为内容
             * @return {Confirm} 返回Alert对象
             */
            Confirm.prototype.show = function (data) {
                if (data === void 0) { data = { title: '', content: '' }; }
                var _this = this;
                this.render(data);
                this.bindEvents();
                this.show1();
                this.setTheme(ConfirmTheme.BLUE);
                return this;
            };
            /**
             * 根据data渲染界面
             * @method render
             * @data {Object} 传输JSON数据，其中title为标题，content为内容
             * @private
             */
            Confirm.prototype.render = function (data) {
                this.$rootNode = $(this.nodeTypeMap.get('confirmRootNode'));
                this.$titleNode = $(this.nodeTypeMap.get('confirmTitleNode'));
                this.$contentNode = $(this.nodeTypeMap.get('confirmContentNode'));
                this.$confirmBtn = $(this.nodeTypeMap.get('confirmBtnNode'));
                this.$cancelBtn = $(this.nodeTypeMap.get('cancelBtnNode'));
                this.$titleNode.html(data.title);
                this.$contentNode.html(data.content);
            };
            /**
             * 为Confirm节点绑定事件
             * @method bindEvents
             * @private
             */
            Confirm.prototype.bindEvents = function () {
                var _this = this;
                this.$confirmBtn.unbind('click').on('click', function (e) {
                    _this.hide();
                    var event = new bui.BEvent(e, { data: "confirm" });
                    _this.confirmBtn.trigger('click', event);
                    _this.confirmBtn.unbind('click');
                });
                this.$cancelBtn.unbind('click').on('click', function (e) {
                    _this.hide();
                    var event = new bui.BEvent(e, { data: "cancel" });
                    _this.cancelBtn.trigger('click', event);
                    _this.cancelBtn.unbind('click');
                });
            };
            /**
             * 仅提供显示，以及动画操作，是个辅助操作
             * @method show1
             * @private
             */
            Confirm.prototype.show1 = function () {
                var _this = this;
                this.visible = true;
                $(this.domNode).addClass('bui-confirm-animate-opacity');
                $(this.domNode).addClass('bui-confirm-animate-delete-opacity');
                setTimeout(function () {
                    $(_this.domNode).addClass('bui-confirm-animate-add-opacity');
                }, 0);
            };
            /**
             * 仅提供隐藏，以及动画操作
             * @method hide
             */
            Confirm.prototype.hide = function () {
                var _this = this;
                $(_this.domNode).removeClass('bui-confirm-animate-add-opacity');
                setTimeout(function () {
                    _this.visible = false;
                }, 300);
            };
            /**
             * 为Alert设置相对应的主题
             * @theme {AlertTheme} 有ConfirmTheme.Red、ConfirmTheme.GREEN、ConfirmTheme.BLUE三种样式
             * @method setTheme
             */
            Confirm.prototype.setTheme = function (theme) {
                switch (theme) {
                    case ConfirmTheme.Red:
                        this.$rootNode.css('background-color', 'red');
                        break;
                    case ConfirmTheme.GREEN:
                        this.$rootNode.css('background-color', 'green');
                        break;
                    case ConfirmTheme.BLUE:
                        this.$rootNode.css('background-color', 'blue');
                        break;
                    default:
                        this.$rootNode.css('background-color', 'red');
                        break;
                }
            };
            return Confirm;
        }(btop.hui.Widget));
        bui.Confirm = Confirm;
        var ConfirmBtn = (function (_super) {
            __extends(ConfirmBtn, _super);
            function ConfirmBtn(btnType) {
                _super.call(this, 'confirm', btnType);
                this.btnType = btnType;
            }
            return ConfirmBtn;
        }(bui.Button));
        bui.ConfirmBtn = ConfirmBtn;
        (function (ConfirmTheme) {
            ConfirmTheme[ConfirmTheme["Red"] = 0] = "Red";
            ConfirmTheme[ConfirmTheme["GREEN"] = 1] = "GREEN";
            ConfirmTheme[ConfirmTheme["BLUE"] = 2] = "BLUE";
        })(bui.ConfirmTheme || (bui.ConfirmTheme = {}));
        var ConfirmTheme = bui.ConfirmTheme;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Gallery
 * 描述  :
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  3/30/2016 9:07:11 AM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
///<reference path="../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../../libs/jQuery.d.ts"/>
///<reference path="../../../util/TimeUtil.ts"/>
///<reference path="../../../domain/model/ProductRecommendInfo.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        /**
         * Gallery 画廊
         * @class Gallery
         * @module btop.bui
         * @extends btop.bui.Widget
         *  */
        var Gallery = (function (_super) {
            __extends(Gallery, _super);
            function Gallery() {
                _super.apply(this, arguments);
            }
            /**
             * 初始化组件视图，它是全局组件，默认是隐藏的
             * @method initView
             */
            Gallery.prototype.initView = function () {
            };
            /**
             * 根据show内部数据来展现
             * @method show
             * @data {Object} 内部数据autoplay表示是否进行自动播放，current当前播放位置，displayItemsCount轮播显示图片总数量，itemInfo类型为Array<ProductRecommendInfo>
             * @return {Confirm} 返回Alert对象
             */
            Gallery.prototype.show = function (data) {
                if (data === void 0) { data = { autoplay: true, current: 0, displayItemsCount: 5, itemsInfo: new Array() }; }
                this.render(data.itemsInfo);
                /**
                 * 画廊总共展示多少item，目前只支持3,5个item进行轮播
                 * @attribute displayItemsCount
                 * @type Number
                 * @private
                 * @for Gallery
                 */
                this.displayItemsCount = data.displayItemsCount;
                /**
                 * 是否自动播放
                 * @attribute autoplay
                 * @type boolean
                 * @private
                 */
                if (data.autoplay === false) {
                    this.autoplay = false;
                }
                else {
                    this.autoplay = data.autoplay;
                }
                /**
                 * 当前页
                 * @attribute current
                 * @type any
                 * @private
                 */
                this.current = data.current;
                /**
                 * 转场过渡时间
                 * @attribute interval
                 * @type number
                 * @private
                 */
                this.interval = 2000; //转场过渡时间
                /**
                 * 是否支持2d
                 * @attribute support2d
                 * @type boolean
                 * @private
                 */
                this.support2d = true;
                /**
                 * 是否支持3d
                 * @attribute support3d
                 * @type boolean
                 * @private
                 */
                this.support3d = true;
                /**
                 * 是否支持转场平滑过渡
                 * @attribute supportTrans
                 * @type boolean
                 * @private
                 */
                this.supportTrans = true;
                this.validate();
                this.layout();
                this.loadEvents();
                if (this.autoplay) {
                    this.startSlideShow();
                }
            };
            /**
             * 根据itemsInfo渲染界面，数据类型为Array<ProductRecommendInfo>
             * @method render
             * @data {Object} 推荐产品信息列表
             * @private
             */
            Gallery.prototype.render = function (itemsInfo) {
                //初始化页面数据
                var _this = this;
                this.itemsInfo = itemsInfo;
                var galleryContentHTMLElement = $(_this.nodeTypeMap.get('galleryContentNode')).children().get(0);
                for (var i = 0; i < _this.itemsInfo.length; i++) {
                    var galleryItemTempt = " <a href=\"javascript:void(0)\">\n                                                 <div class='bui-gallery-img'  data-bui-productcode=\"" + _this.itemsInfo[i].PRODUCTCODE + "\"  style='background:url(\"" + _this.itemsInfo[i].LOGO_PATH + "\");background-size: 100% 100%;'>\n                                                     <div hui-widget-nodeType='galleryImgNode" + i + "' data-bui-productcode=\"" + _this.itemsInfo[i].PRODUCTCODE + "\" class=\"bui-gallery-title\">\u5317\u519C\u5546\u753B\u5ECA0</div>\n                                                 </div>\n                                                 <div class='bui-gallery-img-clone' style='background:url(\"" + _this.itemsInfo[i].LOGO_PATH + "\");background-size: 100% 100%;'>\n                                                 </div>                                                                       \n                                             </a> ";
                    $(galleryItemTempt).appendTo(galleryContentHTMLElement);
                }
                _this.nodeTypeMap = _this.parseWidgetNodeType($(_this.nodeTypeMap.get('galleryRootNode')).parent()[0]);
                for (var j in _this.itemsInfo) {
                    $(_this.nodeTypeMap.get('galleryImgNode' + j)).html(_this.itemsInfo[j].PRODUCTNAME);
                }
                this.$galleryRootNode = $(this.nodeTypeMap.get('galleryRootNode'));
                var galleryHTMLElement = $('#' + this.id)[0];
                var wrapperHTMLElement = $(galleryHTMLElement).find('.bui-gallery-wrapper')[0];
                this.wrapper = $(wrapperHTMLElement);
                this.items = $(wrapperHTMLElement).children();
                this.itemsCount = this.items.length;
                this.nav = $(galleryHTMLElement).find('nav');
                this.navPrev = $(galleryHTMLElement).find('.bui-gallery-btn-prev');
                this.navNext = $(galleryHTMLElement).find('.bui-gallery-btn-next');
                this.items.css({
                    'opacity': 0,
                    'visibility': 'hidden'
                });
                this.bindEvents();
            };
            /**
             * 为Gallery节点绑定事件
             * @method bindEvents
             * @private
             */
            Gallery.prototype.bindEvents = function () {
                var _this = this;
                this.$galleryRootNode.find(".bui-gallery-img").unbind("click").on("click", function (e) {
                    var target = e.target;
                    var bEvent = new bui.BEvent(e, { productCode: $(target).attr("data-bui-productcode") });
                    _this.trigger('click', bEvent);
                });
            };
            /**
             * 为Gallery判断临界值情况
             * @method validate
             * @private
             */
            Gallery.prototype.validate = function () {
                if (this.current < 0 || this.current > this.itemsCount - 1) {
                    this.current = 0;
                }
            };
            /**
             * 为Gallery布局
             * @method layout
             * @private
             */
            Gallery.prototype.layout = function () {
                // current, left and right items
                this.setItems();
                // current item is not changed
                // left and right one are rotated and translated
                var leftCSS, rightCSS, currentCSS, leftPoleCSS, rightPoleCSS;
                if (this.support3d && this.supportTrans) {
                    leftCSS = {
                        '-webkit-transform': 'translateX(-300px) translateZ(-200px) rotateY(55deg)',
                        '-moz-transform': 'translateX(-300px) translateZ(-200px) rotateY(55deg)',
                        '-o-transform': 'translateX(-300px) translateZ(-200px) rotateY(55deg)',
                        '-ms-transform': 'translateX(-300px) translateZ(-200px) rotateY(55deg)',
                        'transform': 'translateX(-300px) translateZ(-200px) rotateY(55deg)'
                    };
                    leftPoleCSS = {
                        '-webkit-transform': 'translateX(-450px) translateZ(-200px) rotateY(55deg)',
                        '-moz-transform': 'translateX(-450px) translateZ(-200px) rotateY(55deg)',
                        '-o-transform': 'translateX(-450px) translateZ(-200px) rotateY(55deg)',
                        '-ms-transform': 'translateX(-450px) translateZ(-200px) rotateY(55deg)',
                        'transform': 'translateX(-450px) translateZ(-200px) rotateY(55deg)'
                    };
                    rightCSS = {
                        '-webkit-transform': 'translateX(300px) translateZ(-200px) rotateY(-55deg)',
                        '-moz-transform': 'translateX(300px) translateZ(-200px) rotateY(-55deg)',
                        '-o-transform': 'translateX(300px) translateZ(-200px) rotateY(-55deg)',
                        '-ms-transform': 'translateX(300px) translateZ(-200px) rotateY(-55deg)',
                        'transform': 'translateX(300px) translateZ(-200px) rotateY(-55deg)'
                    };
                    rightPoleCSS = {
                        '-webkit-transform': 'translateX(450px) translateZ(-200px) rotateY(-55deg)',
                        '-moz-transform': 'translateX(450px) translateZ(-200px) rotateY(-55deg)',
                        '-o-transform': 'translateX(450px) translateZ(-200px) rotateY(-55deg)',
                        '-ms-transform': 'translateX(450px) translateZ(-200px) rotateY(-55deg)',
                        'transform': 'translateX(450px) translateZ(-200px) rotateY(-55deg)'
                    };
                    if (this.displayItemsCount === 3) {
                        leftCSS.opacity = 1;
                        leftCSS.visibility = 'visible';
                        rightCSS.opacity = 1;
                        rightCSS.visibility = 'visible';
                    }
                    if (this.displayItemsCount === 5) {
                        leftCSS.opacity = 1;
                        leftCSS.visibility = 'visible';
                        leftPoleCSS.opacity = 1;
                        leftPoleCSS.visibility = 'visible';
                        rightCSS.opacity = 1;
                        rightCSS.visibility = 'visible';
                        rightPoleCSS.opacity = 1;
                        rightPoleCSS.visibility = 'visible';
                    }
                }
                else if (this.support2d && this.supportTrans) {
                    leftCSS = {
                        '-webkit-transform': 'translate(-300px) scale(0.8)',
                        '-moz-transform': 'translate(-300px) scale(0.8)',
                        '-o-transform': 'translate(-300px) scale(0.8)',
                        '-ms-transform': 'translate(-300px) scale(0.8)',
                        'transform': 'translate(-300px) scale(0.8)'
                    };
                    leftPoleCSS = {
                        '-webkit-transform': 'translate(-450px) scale(0.8)',
                        '-moz-transform': 'translate(-450px) scale(0.8)',
                        '-o-transform': 'translate(-450px) scale(0.8)',
                        '-ms-transform': 'translate(-450px) scale(0.8)',
                        'transform': 'translate(-450px) scale(0.8)'
                    };
                    rightCSS = {
                        '-webkit-transform': 'translate(300px) scale(0.8)',
                        '-moz-transform': 'translate(300px) scale(0.8)',
                        '-o-transform': 'translate(300px) scale(0.8)',
                        '-ms-transform': 'translate(300px) scale(0.8)',
                        'transform': 'translate(300px) scale(0.8)'
                    };
                    rightPoleCSS = {
                        '-webkit-transform': 'translate(450px) scale(0.8)',
                        '-moz-transform': 'translate(450px) scale(0.8)',
                        '-o-transform': 'translate(450px) scale(0.8)',
                        '-ms-transform': 'translate(450px) scale(0.8)',
                        'transform': 'translate(450px) scale(0.8)'
                    };
                    currentCSS = {
                        'z-index': 999
                    };
                    if (this.displayItemsCount === 3) {
                        leftCSS.opacity = 1;
                        leftCSS.visibility = 'visible';
                        rightCSS.opacity = 1;
                        rightCSS.visibility = 'visible';
                    }
                    if (this.displayItemsCount === 5) {
                        leftCSS.opacity = 1;
                        leftCSS.visibility = 'visible';
                        leftPoleCSS.opacity = 1;
                        leftPoleCSS.visibility = 'visible';
                        rightCSS.opacity = 1;
                        rightCSS.visibility = 'visible';
                        rightPoleCSS.opacity = 1;
                        rightPoleCSS.visibility = 'visible';
                    }
                }
                if (this.displayItemsCount === 3) {
                    this.leftItem.css(leftCSS || {});
                    this.rightItem.css(rightCSS || {});
                }
                else {
                    this.leftItem.css(leftCSS || {});
                    this.rightItem.css(rightCSS || {});
                    this.leftPoleItem.css(leftPoleCSS || {});
                    this.rightPoleItem.css(rightPoleCSS || {});
                }
                this.currentItem.css(currentCSS || {}).css({
                    'opacity': 1,
                    'visibility': 'visible'
                }).addClass('bui-gallery-center');
            };
            /**
             * 为Gallery设置展现出的三或者五个页面样式
             * @method setItems
             * @private
             */
            Gallery.prototype.setItems = function () {
                this.items.removeClass('bui-gallery-center');
                switch (this.displayItemsCount) {
                    case 3:
                        this.set3Items();
                        break;
                    case 5:
                        this.set5Items();
                        break;
                    default:
                        this.set5Items();
                        break;
                }
            };
            /**
             * 为Gallery设置展现出的三个页面样式
             * @method set3Items
             * @private
             */
            Gallery.prototype.set3Items = function () {
                this.currentItem = this.items.eq(this.current);
                this.leftItem = (this.current === 0) ? this.items.eq(this.itemsCount - 1) : this.items.eq(this.current - 1);
                this.rightItem = (this.current === this.itemsCount - 1) ? this.items.eq(0) : this.items.eq(this.current + 1);
                if (!this.support3d && this.support2d && this.supportTrans) {
                    this.items.css('z-index', 1);
                    this.currentItem.css('z-index', 999);
                }
                // next & previous items
                if (this.itemsCount >= 3) {
                    // next item
                    this.nextItem = (this.rightItem.index() === this.itemsCount - 1) ? this.items.eq(0) : this.rightItem.next();
                    this.nextItem.css(this.getCoordinates('outright'));
                    // previous item
                    this.prevItem = (this.leftItem.index() === 0) ? this.items.eq(this.itemsCount - 1) : this.leftItem.prev();
                    this.prevItem.css(this.getCoordinates('outleft'));
                }
                if (this.itemsCount === 3) {
                    // next item
                    this.nextItem = (this.rightItem.index() === this.itemsCount - 1) ? this.items.eq(0) : this.rightItem.next();
                    // previous item
                    this.prevItem = (this.leftItem.index() === 0) ? this.items.eq(this.itemsCount - 1) : this.leftItem.prev();
                }
            };
            /**
             * 为Gallery设置展现出的五个页面样式
             * @method set5Items
             * @private
             */
            Gallery.prototype.set5Items = function () {
                this.currentItem = this.items.eq(this.current);
                this.leftItem = (this.current === 0) ? this.items.eq(this.itemsCount - 1) : this.items.eq(this.current - 1);
                this.rightItem = (this.current === this.itemsCount - 1) ? this.items.eq(0) : this.items.eq(this.current + 1);
                //设置最左边元素
                if (this.current === 0) {
                    this.leftPoleItem = this.items.eq(this.itemsCount - 2);
                }
                else if (this.current === 1) {
                    this.leftPoleItem = this.items.eq(this.itemsCount - 1);
                }
                else {
                    this.leftPoleItem = this.items.eq(this.current - 2);
                }
                //设置最右边元素
                if (this.current === this.itemsCount - 1) {
                    this.rightPoleItem = this.items.eq(1);
                }
                else if (this.current === this.itemsCount - 2) {
                    this.rightPoleItem = this.items.eq(0);
                }
                else {
                    this.rightPoleItem = this.items.eq(this.current + 2);
                }
                if (!this.support3d && this.support2d && this.supportTrans) {
                    this.items.css('z-index', 1);
                    this.currentItem.css('z-index', 999);
                }
                // next & previous items
                if (this.itemsCount > 5) {
                    // next item
                    this.nextItem = (this.rightPoleItem.index() === this.itemsCount - 1) ? this.items.eq(0) : this.rightPoleItem.next();
                    this.nextItem.css(this.getCoordinates('outright'));
                    // previous item
                    this.prevItem = (this.leftPoleItem.index() === 0) ? this.items.eq(this.itemsCount - 1) : this.leftPoleItem.prev();
                    this.prevItem.css(this.getCoordinates('outleft'));
                }
                if (this.itemsCount === 5) {
                    // next item
                    this.nextItem = (this.rightPoleItem.index() === this.itemsCount - 1) ? this.items.eq(0) : this.rightPoleItem.next();
                    // previous item
                    this.prevItem = (this.leftPoleItem.index() === 0) ? this.items.eq(this.itemsCount - 1) : this.leftPoleItem.prev();
                }
            };
            /**
             * 获取Gallery出场入场的特效
             * @method getCoordinates
             * @private
             */
            Gallery.prototype.getCoordinates = function (position) {
                if (this.support3d && this.supportTrans) {
                    switch (position) {
                        case 'outleft':
                            return {
                                '-webkit-transform': 'translateX(-550px) translateZ(-300px) rotateY(55deg)',
                                '-moz-transform': 'translateX(-550px) translateZ(-300px) rotateY(55deg)',
                                '-o-transform': 'translateX(-550px) translateZ(-300px) rotateY(55deg)',
                                '-ms-transform': 'translateX(-550px) translateZ(-300px) rotateY(55deg)',
                                'transform': 'translateX(-550px) translateZ(-300px) rotateY(55deg)',
                                'opacity': 0,
                                'visibility': 'hidden'
                            };
                        case 'outright':
                            return {
                                '-webkit-transform': 'translateX(550px) translateZ(-300px) rotateY(-55deg)',
                                '-moz-transform': 'translateX(550px) translateZ(-300px) rotateY(-55deg)',
                                '-o-transform': 'translateX(550px) translateZ(-300px) rotateY(-55deg)',
                                '-ms-transform': 'translateX(550px) translateZ(-300px) rotateY(-55deg)',
                                'transform': 'translateX(550px) translateZ(-300px) rotateY(-55deg)',
                                'opacity': 0,
                                'visibility': 'hidden'
                            };
                        case 'left':
                            return {
                                '-webkit-transform': 'translateX(-300px) translateZ(-200px) rotateY(55deg)',
                                '-moz-transform': 'translateX(-300px) translateZ(-200px) rotateY(55deg)',
                                '-o-transform': 'translateX(-300px) translateZ(-200px) rotateY(55deg)',
                                '-ms-transform': 'translateX(-300px) translateZ(-200px) rotateY(55deg)',
                                'transform': 'translateX(-300px) translateZ(-200px) rotateY(55deg)',
                                'opacity': 1,
                                'visibility': 'visible'
                            };
                        case 'right':
                            return {
                                '-webkit-transform': 'translateX(300px) translateZ(-200px) rotateY(-55deg)',
                                '-moz-transform': 'translateX(300px) translateZ(-200px) rotateY(-55deg)',
                                '-o-transform': 'translateX(300px) translateZ(-200px) rotateY(-55deg)',
                                '-ms-transform': 'translateX(300px) translateZ(-200px) rotateY(-55deg)',
                                'transform': 'translateX(300px) translateZ(-200px) rotateY(-55deg)',
                                'opacity': 1,
                                'visibility': 'visible'
                            };
                        case 'leftPole':
                            return {
                                '-webkit-transform': 'translateX(-450px) translateZ(-200px) rotateY(55deg)',
                                '-moz-transform': 'translateX(-450px) translateZ(-200px) rotateY(55deg)',
                                '-o-transform': 'translateX(-450px) translateZ(-200px) rotateY(55deg)',
                                '-ms-transform': 'translateX(-450px) translateZ(-200px) rotateY(55deg)',
                                'transform': 'translateX(-450px) translateZ(-200px) rotateY(55deg)',
                                'opacity': 1,
                                'visibility': 'visible'
                            };
                        case 'rightPole':
                            return {
                                '-webkit-transform': 'translateX(450px) translateZ(-200px) rotateY(-55deg)',
                                '-moz-transform': 'translateX(450px) translateZ(-200px) rotateY(-55deg)',
                                '-o-transform': 'translateX(450px) translateZ(-200px) rotateY(-55deg)',
                                '-ms-transform': 'translateX(450px) translateZ(-200px) rotateY(-55deg)',
                                'transform': 'translateX(450px) translateZ(-200px) rotateY(-55deg)',
                                'opacity': 1,
                                'visibility': 'visible'
                            };
                        case 'center':
                            return {
                                '-webkit-transform': 'translateX(0px) translateZ(0px) rotateY(0deg)',
                                '-moz-transform': 'translateX(0px) translateZ(0px) rotateY(0deg)',
                                '-o-transform': 'translateX(0px) translateZ(0px) rotateY(0deg)',
                                '-ms-transform': 'translateX(0px) translateZ(0px) rotateY(0deg)',
                                'transform': 'translateX(0px) translateZ(0px) rotateY(0deg)',
                                'opacity': 1,
                                'visibility': 'visible'
                            };
                    }
                    ;
                }
                else if (this.support2d && this.supportTrans) {
                    switch (position) {
                        case 'outleft':
                            return {
                                '-webkit-transform': 'translate(-450px) scale(0.7)',
                                '-moz-transform': 'translate(-450px) scale(0.7)',
                                '-o-transform': 'translate(-450px) scale(0.7)',
                                '-ms-transform': 'translate(-450px) scale(0.7)',
                                'transform': 'translate(-450px) scale(0.7)',
                                'opacity': 0,
                                'visibility': 'hidden'
                            };
                        case 'outright':
                            return {
                                '-webkit-transform': 'translate(450px) scale(0.7)',
                                '-moz-transform': 'translate(450px) scale(0.7)',
                                '-o-transform': 'translate(450px) scale(0.7)',
                                '-ms-transform': 'translate(450px) scale(0.7)',
                                'transform': 'translate(450px) scale(0.7)',
                                'opacity': 0,
                                'visibility': 'hidden'
                            };
                        case 'left':
                            return {
                                '-webkit-transform': 'translate(-300px) scale(0.8)',
                                '-moz-transform': 'translate(-300px) scale(0.8)',
                                '-o-transform': 'translate(-300px) scale(0.8)',
                                '-ms-transform': 'translate(-300px) scale(0.8)',
                                'transform': 'translate(-300px) scale(0.8)',
                                'opacity': 1,
                                'visibility': 'visible'
                            };
                        case 'right':
                            return {
                                '-webkit-transform': 'translate(300px) scale(0.8)',
                                '-moz-transform': 'translate(300px) scale(0.8)',
                                '-o-transform': 'translate(300px) scale(0.8)',
                                '-ms-transform': 'translate(300px) scale(0.8)',
                                'transform': 'translate(300px) scale(0.8)',
                                'opacity': 1,
                                'visibility': 'visible'
                            };
                        case 'center':
                            return {
                                '-webkit-transform': 'translate(0px) scale(1)',
                                '-moz-transform': 'translate(0px) scale(1)',
                                '-o-transform': 'translate(0px) scale(1)',
                                '-ms-transform': 'translate(0px) scale(1)',
                                'transform': 'translate(0px) scale(1)',
                                'opacity': 1,
                                'visibility': 'visible'
                            };
                    }
                    ;
                }
                else {
                    switch (position) {
                        case 'outleft':
                        case 'outright':
                        case 'left':
                        case 'right':
                            return {
                                'opacity': 0,
                                'visibility': 'hidden'
                            };
                        case 'center':
                            return {
                                'opacity': 1,
                                'visibility': 'visible'
                            };
                    }
                    ;
                }
            };
            /**
             * 为Gallery加载事件
             * @method loadEvents
             * @private
             */
            Gallery.prototype.loadEvents = function () {
                var _self = this;
                this.navPrev.on('click.gallery', function (event) {
                    if (_self.autoplay) {
                        clearTimeout(_self.slideshow);
                    }
                    _self.navigate('prev');
                    return false;
                });
                this.navNext.on('click.gallery', function (event) {
                    if (_self.autoplay) {
                        clearTimeout(_self.slideshow);
                    }
                    _self.navigate('next');
                    return false;
                });
                this.wrapper.on('webkitTransitionEnd.gallery transitionend.gallery OTransitionEnd.gallery', function (event) {
                    _self.currentItem.addClass('bui-gallery-center');
                    _self.items.removeClass('dg-transition');
                    _self.isAnim = false;
                });
            };
            /**
             * 为Gallery进行pre上一轮播、next下一轮播进行操作
             * @method navigate
             * @private
             */
            Gallery.prototype.navigate = function (dir) {
                if (this.supportTrans && this.isAnim)
                    return false;
                this.isAnim = true;
                switch (dir) {
                    case 'next':
                        this.current = this.rightItem.index();
                        if (this.displayItemsCount === 3) {
                            // current item moves left
                            this.currentItem.addClass('bui-gallery-transition').css(this.getCoordinates('left'));
                            // right item moves to the center
                            this.rightItem.addClass('bui-gallery-transition').css(this.getCoordinates('center'));
                            // next item moves to the right
                            if (this.nextItem) {
                                // left item moves out
                                this.leftItem.addClass('bui-gallery-transition').css(this.getCoordinates('outleft'));
                                this.nextItem.addClass('bui-gallery-transition').css(this.getCoordinates('right'));
                            }
                            else {
                                // left item moves right
                                this.leftItem.addClass('bui-gallery-transition').css(this.getCoordinates('right'));
                            }
                        }
                        if (this.displayItemsCount === 5) {
                            //left item moves to the leftPole item
                            this.leftItem.addClass('bui-gallery-transition').css(this.getCoordinates('leftPole'));
                            // current item moves left
                            this.currentItem.addClass('bui-gallery-transition').css(this.getCoordinates('left'));
                            // right item moves to the center
                            this.rightItem.addClass('bui-gallery-transition').css(this.getCoordinates('center'));
                            // rightPole item moves to the right
                            this.rightPoleItem.addClass('bui-gallery-transition').css(this.getCoordinates('right'));
                            // next item moves to the right
                            if (this.nextItem) {
                                // left item moves out
                                this.leftPoleItem.addClass('bui-gallery-transition').css(this.getCoordinates('outleft'));
                                this.nextItem.addClass('bui-gallery-transition').css(this.getCoordinates('rightPole'));
                            }
                            else {
                                // left item moves right
                                this.leftPoleItem.addClass('bui-gallery-transition').css(this.getCoordinates('right'));
                            }
                        }
                        if (this.autoplay) {
                            this.startSlideShow();
                        }
                        break;
                    case 'prev':
                        this.current = this.leftItem.index();
                        if (this.displayItemsCount === 3) {
                            // current item moves right
                            this.currentItem.addClass('bui-gallery-transition').css(this.getCoordinates('right'));
                            // left item moves to the center
                            this.leftItem.addClass('bui-gallery-transition').css(this.getCoordinates('center'));
                            // prev item moves to the left
                            if (this.prevItem) {
                                // right item moves out
                                this.rightItem.addClass('bui-gallery-transition').css(this.getCoordinates('outright'));
                                this.prevItem.addClass('bui-gallery-transition').css(this.getCoordinates('left'));
                            }
                            else {
                                // right item moves left
                                this.rightItem.addClass('bui-gallery-transition').css(this.getCoordinates('left'));
                            }
                        }
                        if (this.displayItemsCount === 5) {
                            // right item moves to the rightPole
                            this.rightItem.addClass('bui-gallery-transition').css(this.getCoordinates('rightPole'));
                            // current item moves right
                            this.currentItem.addClass('bui-gallery-transition').css(this.getCoordinates('right'));
                            // left item moves to the center
                            this.leftItem.addClass('bui-gallery-transition').css(this.getCoordinates('center'));
                            //leftPole item moves to the left item
                            this.leftPoleItem.addClass('bui-gallery-transition').css(this.getCoordinates('left'));
                            // prev item moves to the left
                            if (this.prevItem) {
                                // right item moves out
                                this.rightPoleItem.addClass('bui-gallery-transition').css(this.getCoordinates('outright'));
                                this.prevItem.addClass('bui-gallery-transition').css(this.getCoordinates('leftPole'));
                            }
                            else {
                                // right item moves left
                                this.rightPoleItem.addClass('bui-gallery-transition').css(this.getCoordinates('left'));
                            }
                        }
                        if (this.autoplay) {
                            this.startSlideShow();
                        }
                        break;
                }
                ;
                this.setItems();
                if (!this.supportTrans)
                    this.currentItem.addClass('bui-gallery-center');
            };
            /**
             * 为Gallery开始自动切换
             * @method startSlideShow
             * @private
             */
            Gallery.prototype.startSlideShow = function () {
                var _self = this;
                /**
                 * slideshow展示定时器
                 * @attribute slideshow
                 * @type any
                 * @for Gallery
                 * @private
                 */
                this.slideshow = setTimeout(function () {
                    _self.navigate('next');
                    if (_self.autoplay) {
                        _self.startSlideShow();
                    }
                }, this.interval);
            };
            /**
             * 为Gallery组件绑定on事件
             * @method on
             * @type 事件类型
             * @callbackfn 回调函数
             */
            Gallery.prototype.on = function (type, callbackfn) {
                this.changeCallBackFn = callbackfn;
                btop.hui.EventProxy.inst.on(type + ".gallery", callbackfn);
            };
            /**
             * 为Gallery组件trigger触发事件
             * @method trigger
             * @type 事件类型
             * @args 事件传递参数
             */
            Gallery.prototype.trigger = function (type1) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                btop.hui.EventProxy.inst.trigger(type1 + ".gallery", args);
            };
            /**
             * 为Gallery组件unbind解除绑定事件
             * @method unbind
             * @type 事件类型
             * @return {Gallery}
             */
            Gallery.prototype.unbind = function (type1) {
                btop.hui.EventProxy.inst.remove(type1 + ".gallery", this.changeCallBackFn);
                return this;
            };
            /**
             * 销毁Gallery组件
             * @method destroy
             */
            Gallery.prototype.destroy = function () {
                //HallObservable.removeAll();//记得要清除观察者数据
                btop.hui.EventProxy.inst.remove("change.gallery", this.changeCallBackFn);
                _super.prototype.destroy.call(this);
            };
            return Gallery;
        }(btop.hui.Widget));
        bui.Gallery = Gallery;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Login
 * 描述  :
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  4/13/2016 8:57:15 AM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
///<reference path="../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../../libs/jQuery.d.ts"/>
///<reference path="../../../util/TimeUtil.ts"/>
///<reference path="../../base/Button.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        /**
         * Login 登录组件
         * @class Login
         * @module btop.bui
         * @extends btop.bui.PopContainer
         *  */
        var Login = (function (_super) {
            __extends(Login, _super);
            function Login() {
                _super.apply(this, arguments);
                this.submitLoginBtn = new LoginBtn('submitlogin'); //登录按钮
                this.getVerifyBtn = new LoginBtn('getverify'); //获取验证码按钮
                this.submitVerifyBtn = new LoginBtn('submitverify'); //提交验证码按钮
                this.countDown = 10; //倒计时次数
                this.intervalIdsArray = new Array();
            }
            /**
             * 初始化组件视图，它是全局组件，默认是隐藏的
             * @method initView
             */
            Login.prototype.initView = function () {
                this.$loginRootNode = $(this.nodeTypeMap.get('loginRootNode'));
                this.$loginContainerNode = $(this.nodeTypeMap.get('loginContainerNode'));
                this.$loginAccountNode = $(this.nodeTypeMap.get('loginAccountNode'));
                this.$loginPwdNode = $(this.nodeTypeMap.get('loginPwdNode'));
                this.$loginBtnNode = $(this.nodeTypeMap.get('loginBtnNode'));
                this.$loginVerifyContainer = $(this.nodeTypeMap.get('loginVerifyContainer'));
                this.$loginVerifyCodeNode = $(this.nodeTypeMap.get('loginVerifyCodeNode'));
                this.$loginGetVerifyBtnNode = $(this.nodeTypeMap.get('loginGetVerifyBtnNode'));
                this.$loginSubmitVerifyBtnNode = $(this.nodeTypeMap.get('loginSubmitVerifyBtnNode'));
                this.$cancelBtnNode1 = $(this.nodeTypeMap.get('cancelBtnNode1'));
                this.$cancelBtnNode2 = $(this.nodeTypeMap.get('cancelBtnNode2'));
                this.$loginGetVerifyBtnNode.hide();
                this.$loginVerifyContainer.hide();
                this.bindEvent();
                this.setTheme(LoginTheme.BLUE);
                this.hide();
                this.visible = false;
            };
            /**
             * 为Login节点绑定事件
             * @method bindEvents
             * @private
             */
            Login.prototype.bindEvent = function () {
                var _this = this;
                //触发登录事件
                this.$loginBtnNode.unbind('click').on('click', function (e) {
                    var loginData = {
                        userAccount: _this.$loginAccountNode.val(),
                        userPwd: _this.$loginPwdNode.val()
                    };
                    var event = new bui.BEvent(e, loginData);
                    _this.submitLoginBtn.trigger('click', event);
                });
                //触发获取验证码事件
                this.$loginGetVerifyBtnNode.unbind('click').on('click', function (e) {
                    for (var i in _this.intervalIdsArray) {
                        clearInterval(_this.intervalIdsArray[i]);
                    }
                    if (_this.countDown == 10) {
                        var event_5 = new bui.BEvent(e, { data: "login.getverify" });
                        _this.getVerifyBtn.trigger('click', event_5);
                        var countDownTimeOut = setInterval(function () {
                            _this.renderVerifyBtn();
                        }, 1000);
                        _this.intervalIdsArray.push(countDownTimeOut);
                    }
                });
                //触发登录验证
                this.$loginSubmitVerifyBtnNode.unbind('click').on('click', function (e) {
                    var event = new bui.BEvent(e, { verifyCode: _this.$loginVerifyCodeNode.val() });
                    _this.submitVerifyBtn.trigger('click', event);
                });
                this.$cancelBtnNode1.unbind('click').on('click', function (e) {
                    _this.hide();
                });
                this.$cancelBtnNode2.unbind('click').on('click', function (e) {
                    _this.hide();
                });
            };
            /**
             * 根据show显示组件
             * @method show
             * @return {Login} 返回Login对象
             */
            Login.prototype.show = function () {
                var _this = this;
                this.$loginContainerNode.show();
                this.$loginVerifyContainer.hide();
                this.show1();
                return this;
            };
            /**
             * 仅提供显示，以及动画操作，是个辅助操作
             * @method show1
             * @private
             */
            Login.prototype.show1 = function () {
                var _this = this;
                this.visible = true;
                $(this.domNode).addClass('bui-login-animate-opacity');
                $(this.domNode).addClass('bui-login-animate-delete-opacity');
                setTimeout(function () {
                    $(_this.domNode).addClass('bui-login-animate-add-opacity');
                }, 0);
            };
            /**
             * 仅提供隐藏，以及动画操作
             * @method hide
             */
            Login.prototype.hide = function () {
                var _this = this;
                $(_this.domNode).removeClass('bui-login-animate-add-opacity');
                setTimeout(function () {
                    _this.visible = false;
                }, 300);
            };
            /**
             * 下一步进入验证码输入视图
             * @method nextStep
             */
            Login.prototype.nextStep = function () {
                this.$loginContainerNode.hide();
                this.$loginVerifyContainer.show();
            };
            /**
             * 渲染Login组件验证码按钮
             * @method nextStep
             */
            Login.prototype.renderVerifyBtn = function () {
                if (this.countDown < 0) {
                    this.$loginGetVerifyBtnNode.html('重新获取验证码');
                    this.$loginGetVerifyBtnNode.removeAttr('disabled');
                    for (var i in this.intervalIdsArray) {
                        clearInterval(this.intervalIdsArray[i]);
                    }
                    this.countDown = 10;
                }
                else {
                    this.$loginGetVerifyBtnNode.attr('disabled', 'true');
                    this.$loginGetVerifyBtnNode.html("\u91CD\u65B0\u83B7\u53D6" + this.countDown + "\u79D2");
                    this.countDown--;
                }
            };
            /**
             * 为Login设置相对应的主题
             * @theme {LoginTheme} 有LoginTheme.Red、LoginTheme.GREEN、LoginTheme.BLUE三种样式
             * @method setTheme
             */
            Login.prototype.setTheme = function (theme) {
                if (theme == LoginTheme.Red) {
                    this.$loginRootNode.css('background-color', 'red');
                }
                switch (theme) {
                    case LoginTheme.Red:
                        this.$loginRootNode.css('background-color', 'red');
                        break;
                    case LoginTheme.GREEN:
                        this.$loginRootNode.css('background-color', 'green');
                        break;
                    case LoginTheme.BLUE:
                        this.$loginRootNode.css('background-color', 'blue');
                        break;
                    default:
                        this.$loginRootNode.css('background-color', 'blue');
                        break;
                }
            };
            Login.prototype.clearInputData = function () {
                this.$loginAccountNode.val("");
                this.$loginPwdNode.val("");
            };
            return Login;
        }(btop.hui.PopContainer));
        bui.Login = Login;
        var LoginBtn = (function (_super) {
            __extends(LoginBtn, _super);
            function LoginBtn(btnType) {
                _super.call(this, 'login', btnType);
                this.btnType = btnType;
            }
            return LoginBtn;
        }(bui.Button));
        bui.LoginBtn = LoginBtn;
        (function (LoginTheme) {
            LoginTheme[LoginTheme["Red"] = 0] = "Red";
            LoginTheme[LoginTheme["GREEN"] = 1] = "GREEN";
            LoginTheme[LoginTheme["BLUE"] = 2] = "BLUE";
        })(bui.LoginTheme || (bui.LoginTheme = {}));
        var LoginTheme = bui.LoginTheme;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  CaculatorMenu
 * 描述  :
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  3/28/2016 10:42:23 AM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
///<reference path="../../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../../../libs/jQuery.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var CaculatorMenu = (function (_super) {
            __extends(CaculatorMenu, _super);
            function CaculatorMenu() {
                _super.apply(this, arguments);
            }
            CaculatorMenu.prototype.initView = function () {
                var that = this;
                if (this.data != null) {
                }
            };
            CaculatorMenu.prototype.show = function (data) {
                if (data === void 0) { data = [{ imgClass: "daikuan-caculator-img-src", text: "text" }]; }
                var that = this;
                var menuItemTemp = "<div class=\"bui-cmenu-img-content\" hui-widget-nodeType=\"cmenuImgNode\">\n                                          <img class=\"bui-cmenu-img\"/>\n                                          </div>\n                                    <div class=\"bui-cmenu-text-content\" hui-widget-nodeType=\"cmenuTextNode\"></div>";
                data.forEach(function (index) {
                    //设置图片class
                    $(menuItemTemp).find('img').addClass(that.data[index + '']['imgClass']);
                    //设置menuItem的值
                    $(menuItemTemp).find('bui-cmenu-text-content').html(that.data[index + '']['text']);
                    //把属性挂载到menuItemNode节点上
                    $(menuItemTemp).appendTo($(that.nodeTypeMap.get('cmenuItemNode')));
                });
            };
            return CaculatorMenu;
        }(btop.hui.Container));
        bui.CaculatorMenu = CaculatorMenu;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  ProductTreeMenu
 * 描述  :
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  3/28/2016 10:42:23 AM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
///<reference path="../../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../../../libs/jQuery.d.ts"/>
///<reference path="../../../../util/EventUtils.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        /**
         * ProductTreeMenu 菜单树组件
         * @class ProductTreeMenu
         * @module btop.bui
         * @extends btop.hui.Widget
         *  */
        var ProductTreeMenu = (function (_super) {
            __extends(ProductTreeMenu, _super);
            function ProductTreeMenu() {
                _super.apply(this, arguments);
                this.productList = new Array(); //装载所有层级产品菜单
                this.menuItems = new Array(); //存放菜单所有元素的容器
            }
            /**
             * 初始化组件视图，它是全局组件，默认是隐藏的
             * @method initView
             */
            ProductTreeMenu.prototype.initView = function () {
                this.$productmenuContainerNode = $(this.nodeTypeMap.get('productmenuContainerNode'));
                this.hide();
            };
            /**
             * 根据show内部数据来展现
             * @method show
             * @data {Array} 传输数组数据，类型为Array<SaleLeadsProduct>
             */
            ProductTreeMenu.prototype.show = function (data) {
                this.visible = true;
                this.productList = data;
                this.render();
                this.bindEvents(this.$productmenuContainerNode, 0);
            };
            /**
             * 渲染菜单
             * @method render
             * @private
             */
            ProductTreeMenu.prototype.render = function () {
                //首次进行渲染，只渲染顶级菜单
                var rootMenu = this.findChildren("");
                var $rootTemp = $("<ul></ul>");
                $rootTemp.appendTo(this.$productmenuContainerNode);
                for (var i in rootMenu) {
                    var rootChildrenItemTemp = "<li name=\"" + rootMenu[i].PRODID + "\" class=\"bui-productmenu-folder bui-productmenu-close\"><div  class=\"bui-productmenu-title\">" + rootMenu[i].PRODNAME + "</div></li>";
                    $(rootChildrenItemTemp).appendTo($rootTemp);
                }
            };
            /**
             * 为每个li节点绑定事件
             * 绑定事件会用到回调，回调会让菜单动态生成，以及能够动态绑定事件
             * @method bindEvents
             * @$currentContainer {JQuery} 当前容器
             * @recurseCount {number} 递归次数
             * @private
             */
            ProductTreeMenu.prototype.bindEvents = function ($currentContainer, recurseCount) {
                var _this = this;
                recurseCount++;
                $currentContainer.find("li").unbind('click').on('click', function (e) {
                    var that = this;
                    var menus = _this.findChildren($(that).attr("name"));
                    var whiteCell = 10;
                    for (var j = 0; j < recurseCount; j++) {
                        whiteCell += whiteCell;
                    }
                    if (menus.length > 0) {
                        var $menuTemp = $("<ul></ul>");
                        $menuTemp.appendTo($(that));
                        for (var i in menus) {
                            var existChildren = false;
                            if (_this.existChildren(menus[i].PRODID)) {
                                existChildren = true;
                            }
                            else {
                                existChildren = false;
                            }
                            var menuChildrenItemTemp = "<li name=\"" + menus[i].PRODID + "\" style=\"padding-left:" + whiteCell + "px\" class=\"" + (existChildren ? 'bui-productmenu-folder bui-productmenu-close' : 'bui-productmenu-file') + "\">" + (existChildren ? "<div class='bui-productmenu-title'>" + menus[i].PRODNAME + "</div>" : menus[i].PRODNAME) + "</li>";
                            $(menuChildrenItemTemp).appendTo($menuTemp);
                        }
                        if ($(that).children().length > 0) {
                            //$(that).children().unbind('toggle').toggle();
                            var closeFlag = $(that).hasClass("bui-productmenu-close");
                            if (closeFlag) {
                                $(that).children().show();
                                $(that).addClass('bui-productmenu-open');
                                $(that).removeClass('bui-productmenu-close');
                            }
                            else {
                                $(that).children().hide();
                                $(that).addClass('bui-productmenu-close');
                                $(that).removeClass('bui-productmenu-open');
                            }
                        }
                        _this.bindEvents($(that), recurseCount);
                    }
                    else {
                        if ($(that).children().length > 0) {
                            //$(that).children().unbind('toggle').toggle();
                            var closeFlag = $(that).hasClass("bui-productmenu-close");
                            if (closeFlag) {
                                $(that).children().show();
                                $(that).addClass('bui-productmenu-open');
                                $(that).removeClass('bui-productmenu-close');
                            }
                            else {
                                $(that).children().hide();
                                $(that).addClass('bui-productmenu-close');
                                $(that).removeClass('bui-productmenu-open');
                            }
                        }
                        if ($(that).children().length == 0) {
                            for (var k in _this.menuItems) {
                                _this.menuItems[k].removeClass('bui-productmenu-checked');
                            }
                            _this.menuItems.push($(that));
                            $(that).addClass('bui-productmenu-checked');
                            $(that).removeClass('');
                            var postion = $(that).html().lastIndexOf(";") + 1;
                            var event_6 = new bui.BEvent(e, { id: $(that).attr("name"), value: $(that).html().substr(postion, $(that).html().length) });
                            _this.trigger("click.pruducttree", event_6);
                        }
                        return false;
                    }
                    bui.EventUtils.stopPropagation(e); //防止影响父级菜单点击事件的响应，造成互相污染
                });
            };
            /**
             * 根据父id来寻找自己的孩子节点
             * @method findChildren
             * @parentId 父id
             * @return {Array} 根据parentId获取的子销售线索列表
             * @private
             */
            ProductTreeMenu.prototype.findChildren = function (parentId) {
                var temData = new Array();
                var valuableItems = new Array();
                for (var i = 0; i < this.productList.length; i++) {
                    if (this.productList[i].SUPID == parentId || this.productList[i].SUPID == undefined) {
                        //需要两步操作，第一，取出该节点放置到temData临时容器中。第二，删除productList原始容器中已经查到的数据
                        //优点：这样做能够减轻很大的计算量
                        temData.push(this.productList[i]);
                    }
                    else {
                        valuableItems.push(this.productList[i]);
                    }
                }
                this.productList = valuableItems;
                return temData;
            };
            /**
             * @description 判断此item是否有孩子节点
             */
            /**
             * 判断此item是否有孩子节点
             * @method existChildren
             * @parentId 父id
             * @return {boolean} 根据parentId获来判断是否有此数据
             * @private
             */
            ProductTreeMenu.prototype.existChildren = function (parentId) {
                for (var i = 0; i < this.productList.length; i++) {
                    if (this.productList[i].SUPID == parentId) {
                        return true;
                    }
                }
                return false;
            };
            /**
             * 隐藏ProductTreeMenu组件，以及隐藏动画操作
             * @method hide
             */
            ProductTreeMenu.prototype.hide = function () {
                this.visible = false;
            };
            /**
           * 为ProductTreeMenu组件绑定on事件
           * @method on
           * @type 事件类型
           * @callbackfn 回调函数
           */
            ProductTreeMenu.prototype.on = function (type, callbackfn) {
                this.clickCallBackFn = callbackfn;
                btop.hui.EventProxy.inst.on(type + ".pruducttree", callbackfn);
            };
            /**
             * 为ProductTreeMenu组件trigger触发绑定事件
             * @method trigger
             * @type 事件类型
             * @args 事件传递参数
             */
            ProductTreeMenu.prototype.trigger = function (type) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                btop.hui.EventProxy.inst.trigger(type, args);
            };
            /**
             * 为ProductTreeMenu组件trigger触发绑定事件
             * @method unbind
             * @type 事件类型
             * @callbackfn 回调函数
             * @return {ProductTreeMenu}
             */
            ProductTreeMenu.prototype.unbind = function (type) {
                btop.hui.EventProxy.inst.remove(type + ".pruducttree", this.clickCallBackFn);
                return this;
            };
            /**
             * 销毁ProductTreeMenu组件
             * @method destroy
             */
            ProductTreeMenu.prototype.destroy = function () {
                btop.hui.EventProxy.inst.remove("click.pruducttree", this.clickCallBackFn);
                _super.prototype.destroy.call(this);
            };
            return ProductTreeMenu;
        }(btop.hui.Widget));
        bui.ProductTreeMenu = ProductTreeMenu;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Notification
 * 描述  :
 * 版本  :  v1.0
 * 用户  :  wangxinlu
 * 时间  :  3/28/2016 10:42:23 AM
************************************************************************
 * Copyright @ wh 2016 . All rights reserved.
************************************************************************/
///<reference path="../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../domain/model/Notification.ts"/>
///<reference path="../../../../libs/jQuery.d.ts"/>
///<reference path="../../../util/EventUtils.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        /**
         * Notification 消息通知组件
         * @class Notification
         * @module btop.bui
         * @extends btop.hui.Widget
         *  */
        var Notification = (function (_super) {
            __extends(Notification, _super);
            function Notification() {
                _super.apply(this, arguments);
                this.unReadedNotice = 0; //未读的公告数量
                this.unReadedSaleClue = 0; //未读销售线索的数据
                this.unReadedCust = 0; //未读的客户信息
                this.unReadedCount = 0; //三个主要类型信息未读通知
            }
            /**
             * 初始化组件视图，它是全局组件，默认是隐藏的
             * @method initView
             */
            Notification.prototype.initView = function () {
                this.notificationRootContainer = $(this.nodeTypeMap.get('notificationRootNode'));
                this.$title1Node = $(this.nodeTypeMap.get('title1Node'));
                this.$title2Node = $(this.nodeTypeMap.get('title2Node'));
                this.$title3Node = $(this.nodeTypeMap.get('title3Node'));
                this.$notificationSubContentNode1 = $(this.nodeTypeMap.get('notificationSubContentNode1'));
                this.$notificationSubContentNode2 = $(this.nodeTypeMap.get('notificationSubContentNode2'));
                this.$notificationSubContentNode3 = $(this.nodeTypeMap.get('notificationSubContentNode3'));
                this.$notificationTabsNode = $(this.nodeTypeMap.get('notificationTabsNode'));
                this.$notificationContentNode = $(this.nodeTypeMap.get('notificationContentNode'));
                this.$msgNoticeNoReadNode = $(this.nodeTypeMap.get('msgNoticeNoReadNode'));
                this.$msgSaleClueNoReadNode = $(this.nodeTypeMap.get('msgSaleClueNoReadNode'));
                this.$msgCustNoReadNode = $(this.nodeTypeMap.get('msgCustNoReadNode'));
                this.parentViewRoot = $('._view_root_');
                this.bindEvent();
                this.hide();
                this.initMsgView();
            };
            /**
             * 初始化消息未读标记显示
             * @method initMsgView
             * @private
             */
            Notification.prototype.initMsgView = function () {
                //初始化未读公告标记显示
                if (this.unReadedNotice === 0) {
                    this.$msgNoticeNoReadNode.hide();
                }
                else {
                    this.$msgNoticeNoReadNode.show();
                }
                //初始化未读销售线索标记显示
                if (this.unReadedSaleClue === 0) {
                    this.$msgSaleClueNoReadNode.hide();
                }
                else {
                    this.$msgNoticeNoReadNode.show();
                }
                //初始化未读客户标记显示
                if (this.unReadedCust === 0) {
                    this.$msgCustNoReadNode.hide();
                }
                else {
                    this.$msgCustNoReadNode.show();
                }
            };
            /**
             * 为Notification节点绑定事件
             * @method bindEvents
             * @private
             */
            Notification.prototype.bindEvent = function () {
                var _this = this;
                //当点击非自身元素时，select关闭
                $("#" + this.id).click(function (e) {
                    bui.EventUtils.stopPropagation(e);
                });
                //切换标题事件绑定
                $(this.$notificationTabsNode.children()[0]).addClass('bui-notification-tab-item-checked');
                this.$notificationTabsNode.children().on('click', function (e) {
                    var that = this;
                    var items = _this.$notificationTabsNode.children();
                    for (var i = 0; i < items.length; i++) {
                        if (that == items[i]) {
                            _this.setSelectByIndex(i);
                            $(that).addClass('bui-notification-tab-item-checked');
                        }
                        else {
                            $(items[i]).removeClass('bui-notification-tab-item-checked');
                        }
                    }
                });
                this.$notificationSubContentNode1.unbind('click').on('click', function (e) {
                    var items = _this.$notificationSubContentNode1.children();
                    var element = e.target.parentElement;
                    var $parentElement = $(element);
                    if (element.className === "bui-notification-list-item") {
                        var $remark = $parentElement.find(".bui-notification-read-remark");
                        if ($remark[0].innerText == "未读") {
                            $remark.html("已读");
                            _this.unReadedNotice--;
                            var event_7 = new bui.BEvent(e, { type: "change" });
                            _this.trigger('change', event_7);
                            _this.updateUnReadNoticeView();
                        }
                        for (var i in items) {
                            if (element == items[i]) {
                                var data = {
                                    type: 'P2',
                                    index: i
                                };
                                var event_8 = new bui.BEvent(e, data);
                                _this.trigger("click", event_8);
                            }
                        }
                        var titleElement = element.firstElementChild;
                        var contentElement = titleElement.nextElementSibling;
                        var contentText = contentElement.innerText;
                        var lineCount = 1;
                        if (contentText) {
                            lineCount = Math.ceil(contentText.length / 23);
                        }
                        var height = lineCount * 23 > 40 ? lineCount * 23 : 40;
                        var expandElement = titleElement.lastElementChild;
                        if (lineCount > 2) {
                            if (expandElement.classList.contains("bui-notification-notice-expand")) {
                                expandElement.classList.remove("bui-notification-notice-expand");
                                expandElement.classList.add("bui-notification-notice-unexpand");
                                contentElement.style.height = height + 'px';
                            }
                            else {
                                expandElement.classList.remove("bui-notification-notice-unexpand");
                                expandElement.classList.add("bui-notification-notice-expand");
                                contentElement.style.height = 40 + 'px';
                            }
                        }
                        else {
                            expandElement.classList.remove("bui-notification-notice-expand");
                        }
                    }
                });
                this.$notificationSubContentNode2.unbind('click').on('click', function (e) {
                    var items = _this.$notificationSubContentNode2.children();
                    var element = e.target.parentElement;
                    var $parentElement = $(element);
                    if (element.className === "bui-notification-list-item") {
                        var $remark = $parentElement.find(".bui-notification-read-remark");
                        var transforData = $remark.attr('bui-transfor-attr');
                        if ($remark[0].innerText == "未读") {
                            $remark.html("已读");
                            _this.unReadedSaleClue--;
                            var event_9 = new bui.BEvent(e, { type: "change" });
                            _this.trigger('change', event_9);
                            _this.updateUnReadSaleClueView();
                        }
                        for (var i in items) {
                            if (element == items[i]) {
                                var data = {
                                    type: 'P3',
                                    index: i
                                };
                                if (!!transforData) {
                                    data['serialNo'] = transforData;
                                }
                                var event_10 = new bui.BEvent(e, data);
                                _this.trigger("click", event_10);
                            }
                        }
                    }
                });
                this.$notificationSubContentNode3.unbind('click').on('click', function (e) {
                    var items = _this.$notificationSubContentNode3.children();
                    var element = e.target.parentElement;
                    var $parentElement = $(element);
                    if (element.className === "bui-notification-list-item") {
                        var $remark = $parentElement.find(".bui-notification-read-remark");
                        var transforData = $remark.attr('bui-transfor-attr');
                        if ($remark[0].innerText == "未读") {
                            $remark.html("已读");
                            _this.unReadedCust--;
                            var event_11 = new bui.BEvent(e, { type: "change" });
                            _this.trigger('change', event_11);
                            _this.updateUnReadCustView();
                        }
                        for (var i in items) {
                            if (element == items[i]) {
                                var data = {
                                    type: 'P5',
                                    index: i
                                };
                                if (!!transforData) {
                                    data['msgCust'] = JSON.parse(transforData);
                                }
                                var event_12 = new bui.BEvent(e, data);
                                _this.trigger("click", event_12);
                            }
                        }
                    }
                });
            };
            /**
             * 为Notification根据类型来更新对应视图
             * @method bindEvents
             * @data {any} 通知消息
             */
            Notification.prototype.updateViewByEntity = function (data) {
                if (data["TYPE"] == "P2") {
                    var msgNotices = data;
                    var lineCount = 1;
                    if (msgNotices.NOTICE_CONTENT) {
                        lineCount = Math.ceil(msgNotices.NOTICE_CONTENT.length / 23);
                    }
                    var itemTemp = "  <div class=\"bui-notification-list-item\">\n                                                <div class=\"bui-notification-list-item-title\">\n                                                    " + msgNotices.NOTICE_TITLE + "\n                                                    <div class=\"" + this.getMsgUrgentedDegreeClass(msgNotices.URGENTDEGREE) + "\">" + this.getMsgUrgentedDegreeText(msgNotices.URGENTDEGREE) + "</div>\n                                                    <div class=\"bui-notification-notice-expand\"  style=\"" + (lineCount <= 2 ? 'display:none' : 'display:inline-block') + "\"></div>\n                                                </div>\n                                                <div class=\"bui-notification-list-item-content\">\n                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + msgNotices.NOTICE_CONTENT + "\n                                                </div>\n                                                <div class=\"bui-notification-read-remark\">\n                                                    " + (msgNotices.ISREADED ? '已读' : '未读') + "  \n                                                </div>\n                                            </div>";
                    if (!msgNotices.ISREADED) {
                        this.unReadedNotice++;
                        //模拟事件，来触发change事件
                        var event_13 = new bui.BEvent(data, { type: "change" });
                        this.trigger('change', event_13);
                    }
                    this.$notificationSubContentNode1.prepend($(itemTemp));
                }
                else if (data["TYPE"] == "P3") {
                    var msgSaleLead = data;
                    var itemTemp = "  <div class=\"bui-notification-list-item\">\n                                                <div class=\"bui-notification-list-item-title\">\n                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + msgSaleLead.MESSAGE + "\n                                                </div>\n                                                <div class=\"bui-notification-read-remark\" bui-transfor-attr='" + msgSaleLead.SERIALNO + "'>\n                                                    " + (msgSaleLead.ISREADED ? '已读' : '未读') + "  \n                                                </div>\n                                            </div>";
                    if (!msgSaleLead.ISREADED) {
                        this.unReadedSaleClue++;
                        //模拟事件，来触发change事件
                        var event_14 = new bui.BEvent(data, { type: "change" });
                        this.trigger('change', event_14);
                    }
                    this.$notificationSubContentNode2.prepend($(itemTemp));
                }
                else if (data["TYPE"] == "P5") {
                    var msgCust = data;
                    var itemTemp = "  <div class=\"bui-notification-list-item\">\n                                                <div class=\"bui-notification-list-item-title\">\n                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + msgCust.MESSAGE + "\n                                                </div>\n                                                <div class=\"bui-notification-read-remark\" bui-transfor-attr='" + JSON.stringify(msgCust) + "'>\n                                                    " + (msgCust.ISREADED ? '已读' : '未读') + "  \n                                                </div>\n                                            </div>";
                    if (!msgCust.ISREADED) {
                        this.unReadedCust++;
                        //模拟事件，来触发change事件
                        var event_15 = new bui.BEvent(data, { type: "change" });
                        this.trigger('change', event_15);
                    }
                    this.$notificationSubContentNode3.prepend($(itemTemp));
                }
            };
            /**
             * 为Notification获取紧急程度的类型
             * @method getMsgUrgentedDegreeClass
             * @type {string} 1-加急 2-急 3-普通
             */
            Notification.prototype.getMsgUrgentedDegreeClass = function (type) {
                if (type == "1") {
                    return "bui-notification-urgentedgree-high";
                }
                else if (type == "2") {
                    return "bui-notification-urgentedgree-middle";
                }
                else {
                    return "bui-notification-urgentedgree-common";
                }
            };
            /**
             * 为Notification获取紧急程度的类型文本
             * @method getMsgUrgentedDegreeClass
             * @type {string} 1-加急 2-急 3-普通
             */
            Notification.prototype.getMsgUrgentedDegreeText = function (type) {
                if (type == "1") {
                    return "急+";
                }
                else if (type == "2") {
                    return "急";
                }
                else {
                    return "";
                }
            };
            /**
             * Notification初始化数据
             * @method bindEvents
             * @data {Object} 通知消息，具体内部数据类型为msgNotices:Array<MsgNotice>,msgSaleLeads:Array<MsgSaleLeads>,msgCusts:Array<MsgCust>}
             */
            Notification.prototype.initData = function (data) {
                this.render(data);
                return this;
            };
            /**
             * Notification渲染界面
             * @method bindEvents
             * @data {Object} 通知消息，具体内部数据类型为msgNotices:Array<MsgNotice>,msgSaleLeads:Array<MsgSaleLeads>,msgCusts:Array<MsgCust>}
             */
            Notification.prototype.render = function (data) {
                //初始化部分信息
                //渲染标题未读消息
                this.updateUnReadNoticeView();
                this.updateUnReadSaleClueView();
                this.updateUnReadCustView();
                this.unReadedCust = 0;
                this.unReadedNotice = 0;
                this.unReadedSaleClue = 0;
                if (data.msgNotices != null) {
                    for (var i in data.msgNotices) {
                        this.updateViewByEntity(data.msgNotices[i]);
                    }
                }
                if (data.msgSaleLeads != null) {
                    for (var i in data.msgSaleLeads) {
                        this.updateViewByEntity(data.msgSaleLeads[i]);
                    }
                }
                if (data.msgCusts != null) {
                    for (var i in data.msgCusts) {
                        this.updateViewByEntity(data.msgCusts[i]);
                    }
                }
            };
            /**
             * Natification显示操作
             * @method show
             * @return {Notification} 返回Notification对象
             */
            Notification.prototype.show = function () {
                $(this.$notificationTabsNode.children()[0]).addClass('bui-notification-tab-item-checked');
                $(this.$notificationTabsNode.children()[1]).removeClass('bui-notification-tab-item-checked');
                $(this.$notificationTabsNode.children()[2]).removeClass('bui-notification-tab-item-checked');
                this.setSelectByIndex(0);
                this.notificationRootContainer.addClass('bui-notification-translate-animate');
                this.parentViewRoot.addClass('bui-notification-translate-animate');
                return this;
            };
            /**
             * Natification显示操作
             * @method hide
             */
            Notification.prototype.hide = function () {
                this.notificationRootContainer.removeClass('bui-notification-translate-animate');
                this.parentViewRoot.removeClass('bui-notification-translate-animate');
            };
            /**
             * Notification获取Notification根节点JQuery对象
             * @method getNotificationRootContainer
             * @return {JQuery} Notification
             */
            Notification.prototype.getNotificationRootContainer = function () {
                return this.notificationRootContainer;
            };
            Notification.prototype.getInstance = function () {
                return this;
            };
            /**
             * 选择展示Notification第index项
             * @method setSelectByIndex
             * @index {number} 显示index（索引值）项
             */
            Notification.prototype.setSelectByIndex = function (index) {
                switch (index) {
                    case 0:
                        this.$notificationSubContentNode1.show();
                        this.$notificationSubContentNode2.hide();
                        this.$notificationSubContentNode3.hide();
                        break;
                    case 1:
                        this.$notificationSubContentNode1.hide();
                        this.$notificationSubContentNode2.show();
                        this.$notificationSubContentNode3.hide();
                        break;
                    case 2:
                        this.$notificationSubContentNode1.hide();
                        this.$notificationSubContentNode2.hide();
                        this.$notificationSubContentNode3.show();
                        break;
                    default:
                        break;
                }
            };
            /**
             * 设置Notification通告未读次数
             * @method setNoticeCount
             * @count {number} 通告未读次数
             */
            Notification.prototype.setNoticeCount = function (count) {
                if (count) {
                    this.$msgNoticeNoReadNode.html(count + '');
                }
                else {
                    this.$msgNoticeNoReadNode.html('');
                }
            };
            /**
             * 设置Notification销售线索未读次数
             * @method setSaleClueCount
             * @count {number} 销售线索未读次数
             */
            Notification.prototype.setSaleClueCount = function (count) {
                if (count) {
                    this.$msgNoticeNoReadNode.html(count + '');
                }
                else {
                    this.$msgNoticeNoReadNode.html('');
                }
            };
            /**
             * 设置Notification客户未读次数
             * @method setCustCount
             * @count {number} 客户未读次数
             */
            Notification.prototype.setCustCount = function (count) {
                if (count) {
                    this.$msgNoticeNoReadNode.html(count + '');
                }
                else {
                    this.$msgNoticeNoReadNode.html('');
                }
            };
            /**
             * Notification更新未读公告数量
             * @method updateUnReadNoticeView
             */
            Notification.prototype.updateUnReadNoticeView = function () {
                var count = this.getUnReadedNoticeTime();
                if (count > 0) {
                    this.$msgNoticeNoReadNode.html(count + '');
                    this.$msgNoticeNoReadNode.show();
                }
                else {
                    this.$msgNoticeNoReadNode.html('');
                    this.$msgNoticeNoReadNode.hide();
                }
            };
            /**
             * Notification更新未读销售线索数量
             * @method updateUnReadSaleClueView
             */
            Notification.prototype.updateUnReadSaleClueView = function () {
                var count = this.getUnReadedSaleClueTime();
                if (count > 0) {
                    this.$msgSaleClueNoReadNode.html(count + '');
                    this.$msgSaleClueNoReadNode.show();
                }
                else {
                    this.$msgSaleClueNoReadNode.html('');
                    this.$msgSaleClueNoReadNode.hide();
                }
            };
            /**
             * Notification更新未读客户数量
             * @method updateUnReadCustView
             */
            Notification.prototype.updateUnReadCustView = function () {
                var count = this.getUnReadedCustTime();
                if (count > 0) {
                    this.$msgCustNoReadNode.html(count + '');
                    this.$msgCustNoReadNode.show();
                }
                else {
                    this.$msgCustNoReadNode.html('');
                    this.$msgCustNoReadNode.hide();
                }
            };
            Notification.prototype.getUnReadedNoticeTime = function () {
                var _this = this;
                var count = 0;
                bui.DbManager.localGet('MsgNotices', true).then(function (msgNotices) {
                    if (msgNotices != null) {
                        for (var i in msgNotices) {
                            if (!msgNotices[i].ISREADED) {
                                count++;
                            }
                        }
                    }
                    else {
                        count = 0;
                    }
                });
                _this.unReadedNotice = count;
                return count;
            };
            Notification.prototype.getUnReadedSaleClueTime = function () {
                var _this = this;
                var count = 0;
                bui.DbManager.localGet('MsgSaleLeads', true).then(function (msgNotices) {
                    if (msgNotices != null) {
                        for (var i in msgNotices) {
                            if (!msgNotices[i].ISREADED) {
                                count++;
                            }
                        }
                    }
                    else {
                        count = 0;
                    }
                });
                _this.unReadedSaleClue = count;
                return count;
            };
            Notification.prototype.getUnReadedCustTime = function () {
                var _this = this;
                var count = 0;
                bui.DbManager.localGet('MsgCusts', true).then(function (msgNotices) {
                    if (msgNotices != null) {
                        for (var i in msgNotices) {
                            if (!msgNotices[i].ISREADED) {
                                count++;
                            }
                        }
                    }
                    else {
                        count = 0;
                    }
                });
                _this.unReadedCust = count;
                return count;
            };
            /**
             * @description 清除通知内容信息
             */
            Notification.prototype.clear = function () {
                this.$notificationSubContentNode1.children().remove();
                this.$notificationSubContentNode1.children().empty();
                this.$notificationSubContentNode1.children().off();
                this.$notificationSubContentNode2.children().remove();
                this.$notificationSubContentNode2.children().empty();
                this.$notificationSubContentNode2.children().off();
                this.$notificationSubContentNode3.children().remove();
                this.$notificationSubContentNode3.children().empty();
                this.$notificationSubContentNode3.children().off();
            };
            /**
             * Notification获取未读推送信息的总数量（公告、销售线索、客户）
             * @method getUnReadedCount
             */
            Notification.prototype.getUnReadedCount = function () {
                return this.getUnReadedNoticeTime() + this.getUnReadedSaleClueTime() + this.getUnReadedCustTime();
            };
            /**
             * 为notification组件绑定on事件
             * @method on
             * @type 事件类型
             * @callbackfn 回调函数
             */
            Notification.prototype.on = function (type, callbackfn) {
                this.changeCallBackFn = callbackfn;
                btop.hui.EventProxy.inst.on(type + ".notification", callbackfn);
            };
            /**
             * 为notification组件绑定trigger事件
             * @method trigger
             * @type 事件类型
             * @args 事件传递参数
             */
            Notification.prototype.trigger = function (type) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                btop.hui.EventProxy.inst.trigger(type + ".notification", args);
            };
            /**
             * 为notification组件unbind解除绑定事件
             * @method unbind
             * @type 事件类型
             * @return {Notification}
             */
            Notification.prototype.unbind = function (type) {
                btop.hui.EventProxy.inst.remove(type + ".notification", this.changeCallBackFn);
                return this;
            };
            /**
             * 销毁Notification组件
             * @method destroy
             */
            Notification.prototype.destroy = function () {
                btop.hui.EventProxy.inst.remove("change.notification", this.changeCallBackFn);
                _super.prototype.destroy.call(this);
            };
            return Notification;
        }(btop.hui.Widget));
        bui.Notification = Notification;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  Prompt
 * 描述  :  文本输入的提示框
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/5/25
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../../libs/jQuery.d.ts"/>
///<reference path="../../base/Button.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        /**
         * Prompt文本输入的提示框
         * @class Prompt
         * @module btop.bui
         * @extends btop.bui.Widget
         *  */
        var Prompt = (function (_super) {
            __extends(Prompt, _super);
            function Prompt() {
                _super.apply(this, arguments);
                /**
                 * Prompt确定按钮属性，可以通过BGlobal.Prompt.confirmBtn进行调用
                 * @property confirmBtn
                 * @type PromptBtn
                 * @for Prompt
                 */
                this.confirmBtn = new PromptBtn("confirm");
                /**
                 * Prompt取消按钮属性，可以通过BGlobal.Prompt.cancelBtn进行调用
                 * @property confirmBtn
                 * @type PromptBtn
                 * @for Prompt
                 */
                this.cancelBtn = new PromptBtn("cancel");
                this.selects = new Array();
                this.selectIds = new Array();
                this.selectsData = new Array();
                this.typeSequence = new Array();
            }
            /**
             * 初始化组件视图，它是全局组件，默认是隐藏的
             * @method initView
             */
            Prompt.prototype.initView = function () {
                this.promptLabeNode = $(this.nodeTypeMap.get('promptLabeNode'));
                this.buttonsNode = $(this.nodeTypeMap.get('promptbuttonsNode'));
                this.promptRoot = $(this.nodeTypeMap.get('promptRootNode'));
                this.hide();
                this.visible = false;
            };
            /**
             * 根据show内部数据来展现
             * @method show
             * @data {Object} 传输JSON数据，其中title为标题，content为内容
             * @return {Prompt} 返回Prompt对象
             */
            Prompt.prototype.show = function (data) {
                if (data === void 0) { data = { title: '', content: [{ label: '标题', type: 'input', data: {} }] }; }
                this.render(data);
                this.bindEvent();
                return this;
            };
            /**
             * 根据opt渲染界面
             * @method render
             * @data {JSON} 传输JSON数据，其中title为标题，content为内容
             * @private
             */
            Prompt.prototype.render = function (opt) {
                if (opt === void 0) { opt = { title: '', content: [{ label: '标题', type: 'input', data: {} }] }; }
                this.promptLabeNode.children().remove();
                var _this = this;
                var titlesItemTemp;
                var j = 0;
                var k = 0;
                var data = opt.content;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].type == 'input') {
                        titlesItemTemp = "<div hui-layout-type=\"RowLayout\">\n                                                <div>\n                                                    <div class=\"hui-prompt-labels-item col l4\" hui-widget-nodeType=\"prompt" + j + "\">" + data[i].label + ":</div>\n                                                    <div class=\"hui-prompt-inputs-item col l5\">\n                                                         <input class=\"input-control\" type=\"text\" value=\"" + (data[i].data.content ? data[i].data.content : '') + "\" bui-disable-focus='true'/>\n                                                    </div>\n                                                </div>\n                                            </div>";
                        $(titlesItemTemp).appendTo(this.promptLabeNode);
                        this.typeSequence.push(data[i].type);
                        j++;
                    }
                    else if (data[i].type == 'select') {
                        titlesItemTemp = "<div hui-layout-type=\"RowLayout\">\n                                                <div>\n                                                    <div class=\"hui-prompt-labels-item col l4\">" + data[i].label + ":</div>\n                                                    <div class=\"hui-prompt-inputs-item col l5\">\n                                                         <div id=\"promptSelect" + k + "\" hui-widget-type=\"btop.bui.Select\"></div>\n                                                    </div>\n                                                </div>\n                                            </div>";
                        this.selectsData.push(data[i].data);
                        this.selectIds.push("promptSelect" + k);
                        this.typeSequence.push(data[i].type);
                        k++;
                        $(titlesItemTemp).appendTo(this.promptLabeNode);
                    }
                    else {
                        console.error("Prompt's \u4F20\u5165\u7684\u6570\u636Etype\u6709\u8BEF\uFF01 ");
                    }
                }
                this.reInitNodeTypeMap();
                this.promptTitleNode.html(opt.title);
                btop.hui.HuiParser.parse(this.promptRoot[0]);
                this.initSelects();
                this.setTheme(PromptTheme.BLUE);
                this.show1();
                $(this.domNode).addClass('bui-prompt-animate-opacity');
                $(this.domNode).addClass('bui-prompt-animate-delete-opacity');
                setTimeout(function () {
                    $(_this.domNode).addClass('bui-prompt-animate-add-opacity');
                }, 0);
            };
            /**
             * 重新初始化node节点映射
             * @method reInitNodeTypeMap
             * @private
             */
            Prompt.prototype.reInitNodeTypeMap = function () {
                var _this = this;
                this.nodeTypeMap = this.parseWidgetNodeType($(_this.nodeTypeMap.get('promptRootNode')).parent()[0]);
                this.promptLabeNode = $(this.nodeTypeMap.get('promptLabeNode'));
                this.buttonsNode = $(this.nodeTypeMap.get('promptbuttonsNode'));
                this.promptRoot = $(this.nodeTypeMap.get('promptRootNode'));
                this.confirmBtnJQuery = $(this.nodeTypeMap.get('confirmBtnNode'));
                this.cancelBtnJQuery = $(this.nodeTypeMap.get('cancelBtnNode'));
                this.promptTitleNode = $(this.nodeTypeMap.get('promptTitleNode'));
            };
            /**
             * 初始化selects组件
             * @method initSelects
             * @private
             */
            Prompt.prototype.initSelects = function () {
                for (var i in this.selectIds) {
                    this.selects.push(btop.hui.WidgetManager.byId(this.selectIds[i]));
                }
                for (var i = 0; i < this.selectsData.length; i++) {
                    var selectPrompt = this.getSelectByIndex(i);
                    var option = {
                        data: this.selectsData[i]
                    };
                    selectPrompt.initData(option);
                }
            };
            /**
             * 根据索引index获取注入的select组件
             * @method getSelectByIndex
             * @index select注入的索引值
             * @private
             */
            Prompt.prototype.getSelectByIndex = function (index) {
                if (index < this.selects.length) {
                    return this.selects[index];
                }
                else {
                    console.error("index >= select\u7684\u957F\u5EA6");
                }
            };
            /**
             * 为Alert节点绑定事件
             * @method bindEvents
             * @private
             */
            Prompt.prototype.bindEvent = function () {
                var _this = this;
                this.cancelBtnJQuery.unbind('click').on('click', function (e) {
                    _this.hide();
                    var event = new bui.BEvent(e, { data: "cancel" });
                    _this.cancelBtn.trigger('click', event);
                    _this.cancelBtn.unbind('click');
                    _this.destroy();
                });
                this.confirmBtnJQuery.unbind('click').on('click', function (e) {
                    _this.hide();
                    var inputData = _this.getInputData();
                    var event = new bui.BEvent(e, inputData);
                    _this.confirmBtn.trigger('click', event);
                    _this.confirmBtn.unbind('click');
                    _this.destroy();
                });
            };
            /**
             * 获取Prompt中所有的input值
             * @method getInputData
             * @private
             */
            Prompt.prototype.getInputData = function () {
                var _this = this;
                var inputData = new Array();
                var i = 0;
                this.promptRoot.find('input[type=text]').each(function (index, element) {
                    inputData.push($(this).val());
                    if (_this.typeSequence[index] == 'select') {
                        inputData.pop();
                        var select = btop.hui.WidgetManager.byId(_this.selectIds[i]);
                        inputData.push(select.getAttrValue());
                        i++;
                    }
                });
                return inputData;
            };
            /**
             * 为PromptTheme设置相对应的主题
             * @theme {AlertTheme} 有PromptTheme.Red、PromptTheme.GREEN、PromptTheme.BLUE三种样式
             * @method setTheme
             */
            Prompt.prototype.setTheme = function (theme) {
                if (theme == PromptTheme.Red) {
                    this.promptRoot.css('background-color', 'red');
                }
                switch (theme) {
                    case PromptTheme.Red:
                        this.promptRoot.css('background-color', 'red');
                        break;
                    case PromptTheme.GREEN:
                        this.promptRoot.css('background-color', 'green');
                        break;
                    case PromptTheme.BLUE:
                        this.promptRoot.css('background-color', 'blue');
                        break;
                    default:
                        this.promptRoot.css('background-color', 'red');
                        break;
                }
            };
            /**
             * 仅提供显示，以及动画操作，是个辅助操作
             * @method show1
             * @private
             */
            Prompt.prototype.show1 = function () {
                var _this = this;
                this.visible = true;
                $(this.domNode).addClass('bui-prompt-animate-opacity');
                $(this.domNode).addClass('bui-prompt-animate-delete-opacity');
                setTimeout(function () {
                    $(_this.domNode).addClass('bui-prompt-animate-add-opacity');
                }, 0);
            };
            /**
             * 仅提供隐藏，以及动画操作
             * @method hide
             */
            Prompt.prototype.hide = function () {
                var _this = this;
                $(_this.domNode).removeClass('bui-prompt-animate-add-opacity');
                setTimeout(function () {
                    _this.visible = false;
                }, 300);
            };
            Prompt.prototype.destroy = function () {
                for (var i in this.selectIds) {
                    var select = btop.hui.WidgetManager.byId(this.selectIds[i]);
                    select.destroy();
                }
                this.selectIds = new Array();
                this.selects = new Array();
                this.selectsData = new Array();
                this.typeSequence = new Array();
            };
            return Prompt;
        }(btop.hui.Widget));
        bui.Prompt = Prompt;
        var PromptBtn = (function (_super) {
            __extends(PromptBtn, _super);
            function PromptBtn(btnType) {
                _super.call(this, 'confirm', btnType);
                this.btnType = btnType;
            }
            return PromptBtn;
        }(bui.Button));
        bui.PromptBtn = PromptBtn;
        (function (PromptTheme) {
            PromptTheme[PromptTheme["Red"] = 0] = "Red";
            PromptTheme[PromptTheme["GREEN"] = 1] = "GREEN";
            PromptTheme[PromptTheme["BLUE"] = 2] = "BLUE";
        })(bui.PromptTheme || (bui.PromptTheme = {}));
        var PromptTheme = bui.PromptTheme;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  PullLoadToast
 * 描述  :  拉动加载数据土司
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/6/21
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../../libs/jQuery.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        /**
         * PullLoadToast拉动加载数据土司
         * @class PullLoadToast
         * @module btop.bui
         * @extends btop.bui.Widget
         *  */
        var PullLoadToast = (function (_super) {
            __extends(PullLoadToast, _super);
            function PullLoadToast() {
                _super.apply(this, arguments);
            }
            /**
             * 初始化组件视图，它是全局组件，默认是隐藏的
             * @method initView
             */
            PullLoadToast.prototype.initView = function () {
                this.hide();
                this.showMsgNode = this.nodeTypeMap.get("showMsg");
            };
            /**
             * PullLoadToast组件隐藏操作
             * @method hide
             */
            PullLoadToast.prototype.hide = function () {
                this.visible = false;
            };
            /**
             * PullLoadToast组件显示操作
             * @method show
             */
            PullLoadToast.prototype.show = function () {
                this.visible = true;
            };
            return PullLoadToast;
        }(btop.hui.Widget));
        bui.PullLoadToast = PullLoadToast;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  SaleClueQueue
 * 描述  :  销售队列
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/6/22
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../../../../libs/jQuery.d.ts"/>
///<reference path="../../../../../domain/model/SaleClue.ts"/>
///<reference path="../../../../../event/BEvent.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var AssistChannelQueue = (function (_super) {
            __extends(AssistChannelQueue, _super);
            function AssistChannelQueue() {
                _super.apply(this, arguments);
                this.custChannelQueue = new Array();
                this.loadPosition = 0; //当前加载位置
                this.currentPosition = 0; //当前选中的类型
                this.dataIsLoaded = false;
                this.dataIsLoadedComplete = false;
            }
            AssistChannelQueue.prototype.initView = function () {
                var _this = this;
                var start = 0;
                var end = 0;
                var xTouchLength = 0;
                this.$custChannelQueueContainerNode = $(this.nodeTypeMap.get('saleClueQueueContainerNode'));
                this.bindEvents();
                _this.$custChannelQueueContainerNode[0].addEventListener('touchstart', function (e) {
                    start = e.changedTouches[0].pageX;
                });
                _this.$custChannelQueueContainerNode[0].addEventListener('touchend', function (e) {
                    end = e.changedTouches[0].pageX - start;
                    if (end > 0) {
                        console.info('手势向右滑动,滑动了' + end + 'px');
                    }
                    else {
                        console.info('手势向左滑动,滑动了' + (-end) + 'px');
                    }
                });
                this.$custChannelQueueContainerNode[0].addEventListener('scroll', function (e) {
                    var clientW = e.currentTarget.clientWidth; //可视宽度
                    var contentW = e.currentTarget.scrollWidth; //内容宽度
                    var scrollLeft = e.currentTarget.scrollLeft; //滚动的宽度
                    var condition = contentW - scrollLeft - clientW;
                    var $currentTarget = $(e.currentTarget);
                    //console.info('scoll condition: '+condition);
                    if (condition <= 40 && end < 0 && !_this.dataIsLoaded) {
                        $currentTarget.css('transform', 'translate(-50px)');
                        bui.BGlobal.PullLoadToast.show();
                        setTimeout(function () {
                            bui.BGlobal.PullLoadToast.hide();
                            $currentTarget.css('transform', 'translate(0px)');
                            _this.render();
                        }, 1000);
                    }
                    var saleContainerLastElement = _this.$custChannelQueueContainerNode[0].lastElementChild;
                    if (saleContainerLastElement) {
                        if (saleContainerLastElement.classList.contains("bui-pull-left-referesh")) {
                            _this.$custChannelQueueContainerNode[0].removeChild(saleContainerLastElement);
                        }
                        setTimeout(function () {
                            if (!_this.dataIsLoadedComplete) {
                                bui.BGlobal.PullLoadToast.show();
                                $currentTarget.css('transform', 'translate(-50px)');
                            }
                        }, 10);
                        setTimeout(function () {
                            if (!_this.dataIsLoadedComplete) {
                                bui.BGlobal.PullLoadToast.hide();
                                $currentTarget.css('transform', 'translate(0px)');
                            }
                            _this.render();
                        }, 1000);
                    }
                });
            };
            /**
             * @description 初始化数据
             */
            AssistChannelQueue.prototype.initData = function (assistChannel) {
                this.custChannelQueue = assistChannel.CUST;
                this.isSee = assistChannel.IS_SEE;
                this.render();
            };
            /**
             * @description 渲染视图
             */
            AssistChannelQueue.prototype.render = function () {
                var _this = this;
                /*for(let i=this.loadPosition;i<this.custChannelQueue.length;i++)
                {
                    let assistChannelCard:AssistChannelCard = new AssistChannelCard(this.custChannelQueue[i],this,i,_this.isSee);
                    let $saleCardTemp:JQuery =  assistChannelCard.getCard();
                    $saleCardTemp.appendTo(this.$custChannelQueueContainerNode);
                    this.loadPosition++;
                    if(loadedValifyNumber == 10)
                    {
                        return;
                    }
                    if(this.loadPosition == this.custChannelQueue.length)
                    {
                        this.dataIsLoaded =true;
                    }
                }*/
                this.dataIsLoadedComplete = false;
                var loadedValifyNumber = 0;
                //加载数据时拆成两份进行加载
                var filterSaleClues = this.custChannelQueue;
                var complementation = filterSaleClues.length % 10;
                for (var i = this.loadPosition; i < filterSaleClues.length - complementation; i++) {
                    var assistChannelCard = new bui.AssistChannelCard(this.custChannelQueue[i], this, i, _this.isSee);
                    var $saleCardTemp = assistChannelCard.getCard();
                    $saleCardTemp.appendTo(this.$custChannelQueueContainerNode);
                    loadedValifyNumber++;
                    this.loadPosition++;
                    if (loadedValifyNumber == 10) {
                        if (this.loadPosition != filterSaleClues.length - complementation) {
                            if (filterSaleClues.length >= 10) {
                                this.createTipExistDataTemp().appendTo(this.$custChannelQueueContainerNode);
                            }
                        }
                        return;
                    }
                    if (this.loadPosition == this.custChannelQueue.length) {
                        this.dataIsLoaded = true;
                    }
                }
                var flag = false;
                if (this.loadPosition == filterSaleClues.length - complementation) {
                    for (var i = this.loadPosition; i < filterSaleClues.length; i++) {
                        var assistChannelCard = new bui.AssistChannelCard(this.custChannelQueue[i], this, i, _this.isSee);
                        var $saleCardTemp = assistChannelCard.getCard();
                        $saleCardTemp.appendTo(this.$custChannelQueueContainerNode);
                        this.loadPosition++;
                    }
                    flag = true;
                    setTimeout(function () {
                        _this.dataIsLoadedComplete = true;
                    }, 0);
                    if (filterSaleClues.length >= 10) {
                        this.createTipUnExistDataTemp().appendTo(this.$custChannelQueueContainerNode);
                    }
                }
            };
            /**
             * @description 重新渲染时，需要清除一些信息
             */
            AssistChannelQueue.prototype.clear = function () {
                this.dataIsLoaded = false;
                this.loadPosition = 0;
                this.$custChannelQueueContainerNode.children().remove();
                this.$custChannelQueueContainerNode.children().off();
                this.$custChannelQueueContainerNode.children().empty();
            };
            AssistChannelQueue.prototype.createTipExistDataTemp = function () {
                return $("<div class=\"bui-pull-left-referesh\"><div>\u5DE6\u62C9\u52A0\u8F7D\u6570\u636E</div></div>");
            };
            AssistChannelQueue.prototype.createTipUnExistDataTemp = function () {
                return $("<div class=\"bui-pull-left-loaded\">\u6570\u636E\u5DF2\u52A0\u8F7D\u5B8C\u6210</div>");
            };
            /**
             * @description 绑定事件集
             */
            AssistChannelQueue.prototype.bindEvents = function () {
                var _this = this;
            };
            /**
           * @description 为assistchannelqueue组件绑定on事件
           * @type 事件类型
           * @callbackfn 回调函数
           */
            AssistChannelQueue.prototype.on = function (type, callbackfn) {
                this.changeCallBackFn = callbackfn;
                btop.hui.EventProxy.inst.on(type + ".assistchannelqueue", callbackfn);
            };
            /**
             * @description 为assistchannelqueue组件绑定trigger事件
             * @type 事件类型
             * @callbackfn 回调函数
             */
            AssistChannelQueue.prototype.trigger = function (type) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                btop.hui.EventProxy.inst.trigger(type + ".assistchannelqueue", args);
            };
            AssistChannelQueue.prototype.unbind = function (type) {
                btop.hui.EventProxy.inst.remove(type + ".assistchannelqueue", this.changeCallBackFn);
                return this;
            };
            AssistChannelQueue.prototype.destroy = function () {
                btop.hui.EventProxy.inst.remove("change.assistchannelqueue", this.changeCallBackFn);
                _super.prototype.destroy.call(this);
            };
            return AssistChannelQueue;
        }(btop.hui.Widget));
        bui.AssistChannelQueue = AssistChannelQueue;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  AssistChannelCard
 * 描述  :  自助渠道客户到访卡片
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/9/7
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../../../../libs/jQuery.d.ts"/>
///<reference path="../AssistChannelQueue/AssistChannelQueue.ts"/>
///<reference path="../../../../../event/BEvent.ts"/>
///<reference path="../../../../../util/EventUtils.ts"/>
///<reference path="../../../../../domain/model/AssistChannel.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var AssistChannelCard = (function () {
            /**
             * @cardInfo 卡片信息
             */
            function AssistChannelCard(custChannel, attachAssistChannelQueue, currentPosition, isSee) {
                this.custChannel = new bui.CustChannel(); //存储销售线索卡片信息
                this.custChannel = custChannel;
                this.attachAssistChannelQueue = attachAssistChannelQueue;
                this.currentPosition = currentPosition;
                this.isSee = isSee;
            }
            /**
             * @description 展示
             */
            AssistChannelCard.prototype.show = function () {
            };
            /**
             * @description 获取卡片模板容器
             */
            AssistChannelCard.prototype.getCard = function () {
                var cardTemp = "<div class=\"bui-assistchannelcard-root\">\n                               <div class=\"bui-assistchannelcard-sub-root\">     \n                                 <div class=\"row\" style=\"margin-top: 50px;width:80%;\">\n                                     <div class=\"col l12 m12 bui-customercard-stars-container\">\n                                        " + this.getStarTempByLevel(this.custChannel.CUST_LEVEL) + "\n                                     </div>\n                                 </div>\n                                 <div class=\"row\">\n                                      <div class=\"col l5 m5 push-l2 push-m2\">\u5BA2\u6237\u59D3\u540D\uFF1A</div>\n                                      <div class=\"col l7 m7\">\n                                           <div>" + this.custChannel.CUST_NAME + "</div>\n                                       </div>\n                                 </div>\n                                 <div class=\"row\">\n                                       <div class=\"col l5 m5 push-l2 push-m2\">\n                                            <div><span>\u63A8\u9001\u6E20\u9053</span></div>\n                                       </div>\n                                       <div class=\"col l7 m7\">\n                                             <div><span>" + this.getChannelTypeTitle(this.custChannel.CHANNEL_TYPE) + "</span></div>\n                                       </div>\n                                 </div>\n                                 <div class=\"row\">\n                                        <div class=\"col l5 m5 push-l2  push-m2\">\u5BA2\u6237\u751F\u65E5:</div>\n                                        <div class=\"col l7\">\n                                             <div><span>" + this.custChannel.CUST_BIRTHDAY + "</span></div>\n                                        </div>\n                                 </div>\n                                   <div class=\"row\">\n                                        <div class=\"col l5 m5 push-l2 push-m2\">\u5230\u8BBF\u65F6\u95F4:</div>\n                                        <div class=\"col l7 m7\">\n                                             <div><span>" + this.custChannel.BEGIN_TIME + "</span></div>\n                                        </div>\n                                 </div>\n                                 <div class=\"row\">\n                                        <div class=\"col l5 m5 push-l2 push-m2\">\u5BA2\u6237\u6027\u522B:</div>\n                                        <div class=\"col l7 m7\">\n                                             <div><span>" + this.validateSex(this.custChannel.CUST_SEX) + "</span></div>\n                                        </div>\n                                 </div>\n                                  <div class=\"row\">\n                                        <div class=\"col l5 m5 push-l2 push-m2\">\u5BA2\u6237\u7EA7\u522B:</div>\n                                        <div class=\"col l7 m7\">\n                                             <div><span>" + this.getCustLevelTitle(this.custChannel.CUST_LEVEL) + "</span></div>\n                                        </div>\n                                 </div>\n                               </div>        \n                            </div> ";
                var $cardTemp = $(cardTemp);
                this.$assistChannelCard = $cardTemp;
                this.bindEvent();
                return $cardTemp;
            };
            /**
             * 根据等级来显示名称
             * @method getCustLevelTitle
             * @custLevel {string} 客户级别
             * @return {string}
             */
            AssistChannelCard.prototype.getCustLevelTitle = function (custLevel) {
                switch (custLevel) {
                    case "0": {
                        return "大众客户";
                    }
                    case "1": {
                        return "一星级客户";
                    }
                    case "2": {
                        return "二星级客户";
                    }
                    case "3": {
                        return "三星级客户";
                    }
                    case "4": {
                        return "四星级客户";
                    }
                    case "5": {
                        return "五星级客户";
                    }
                    case "6": {
                        return "六星级客户";
                    }
                    default: {
                        return "无";
                    }
                }
            };
            /**
             * @description 根据channelType来获取渠道类型名称
             * @param channelType 渠道类型
             */
            AssistChannelCard.prototype.getChannelTypeTitle = function (channelType) {
                switch (channelType) {
                    case "01":
                        return "排队机";
                    case "02":
                        return "微信银行";
                    case "03":
                        return "WIFI";
                    case "04":
                        return "蓝牙";
                    case "05":
                        return "智能终端";
                    default:
                        return "未知";
                }
            };
            /**
             * 根据客户等级来显示几颗亮星，其他默认显示灰色
             * @method getCustLevelTitle
             * @custLevel {string} 客户级别
             * @return {string}
             */
            AssistChannelCard.prototype.getStarTempByLevel = function (custLevel) {
                switch (custLevel) {
                    case "0": {
                        var temp = "<div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>";
                        return temp;
                    }
                    case "1": {
                        var temp = "<div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>";
                        return temp;
                    }
                    case "2": {
                        var temp = "<div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>";
                        return temp;
                    }
                    case "3": {
                        var temp = "<div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>";
                        return temp;
                    }
                    case "4": {
                        var temp = "<div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>";
                        return temp;
                    }
                    case "5": {
                        var temp = "<div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>";
                        return temp;
                    }
                    case "6": {
                        var temp = "<div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>";
                        return temp;
                    }
                    default: {
                        var temp = "<div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>";
                        return temp;
                    }
                }
            };
            /**
             * 获取性别class选择器
             * @method getCustLevelTitle
             * @sex {string} 性别类型
             * @return {string}
             */
            AssistChannelCard.prototype.getSexClass = function (sex) {
                if (sex == "0") {
                    return "bui-customercard-man";
                }
                else if (sex == "1") {
                    return "bui-customercard-woman";
                }
                else {
                    return "bui-customercard-man";
                }
            };
            /**
             * 返回此用户性别汉字
             * @method getCustLevelTitle
             * @sex {string} 性别类型
             * @return {string}
             */
            AssistChannelCard.prototype.validateSex = function (sex) {
                if (sex == "0") {
                    return "男";
                }
                else if (sex == "1") {
                    return "女";
                }
                else {
                    return "未知";
                }
            };
            /**
             * @description 绑定事件
             * @queueIndex 当前卡片在队列数组的索引下标
             * @ticketsIndex tickets队列数组中对应的队列索引下标
             * @callback 数据回调函数
             */
            AssistChannelCard.prototype.bindEvent = function () {
                var _this = this;
                this.$assistChannelCard.unbind('click').on('click', function (e) {
                    var transforData = {
                        custChannel: _this.custChannel,
                        isSee: _this.isSee
                    };
                    var bEvent = new bui.BEvent(e, transforData);
                    _this.attachAssistChannelQueue.trigger('click', bEvent);
                    //hui.PageManager.to("btop.bui.XiaoShouXianSuoCreatePage",{saleClue:_this.saleClue,fromQueue:_this.filterType});
                });
            };
            /**
             * @description 获得数据更新通知，来更新UI操作
             */
            AssistChannelCard.prototype.notifyUpdateView = function () {
                this.$assistChannelCard.remove();
                this.$assistChannelCard.off();
                this.$assistChannelCard.empty();
            };
            Object.defineProperty(AssistChannelCard.prototype, "statusIndex", {
                get: function () {
                    return this._statusIndex;
                },
                set: function (statusIndex) {
                    this._statusIndex = statusIndex;
                },
                enumerable: true,
                configurable: true
            });
            return AssistChannelCard;
        }());
        bui.AssistChannelCard = AssistChannelCard;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  CustomerCard
 * 描述  :  队列卡片
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/6/18
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../../../../libs/jQuery.d.ts"/>
///<reference path="../../../../../util/EventUtils.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        /**
         * CustomerCard队列卡片
         * @class CustomerCard
         * @module btop.bui
         * @extends btop.hui.Widget
         *  */
        var CustomerCard = (function () {
            /**
             * 根据show内部数据来展现
             * @cardInfo {Ticket} 卡片信息
             * @rank {string} tickets序号
             * @queueId {string} 所在的队列
             * @hallManager {HallManager} 厅堂
             * @constructor
             */
            function CustomerCard(cardInfo, filterConfig, rank, queueId, hallManager) {
                this.cardInfo = new bui.Ticket(); //组装客户信息
                this.queueData = new Array();
                this.adjustQueueData = {};
                this._filterConfig = { all: true, waitting: false, dealing: false, finish: false, abandon: false, other: false }; //过滤配置条件
                this.cardInfo = cardInfo;
                this.hallManager = hallManager;
                this.queueId = queueId;
                this.filterConfig = filterConfig;
                this.rank = rank;
                var _this = this;
                bui.HallManager.queuesMap.forEach(function (value, index) {
                    if (_this.queueId != index) {
                        _this.adjustQueueData[index] = value;
                    }
                });
            }
            /**
             * 初始化组件视图，它是全局组件，默认是隐藏的
             * @method initView
             */
            CustomerCard.prototype.initView = function () {
                /*this.$adjustQueueButton = $(this.nodeTypeMap.get('adjustQueueBtnNode'));
                this.$cardRoot = $(this.nodeTypeMap.get('customercardRootNode'));
                this.$abandonQueueBtnNode = $(this.nodeTypeMap.get('abandonQueueBtnNode'));*/
            };
            /**
             * CustomerCard组件展示
             * @method show
             * @data {any} 卡片数据
             * @allData {any} 队列所有数据
             * @queueIndex {string} 当前卡片在队列数组的索引下标
             * @ticketsIndex {string} 当前卡片在卡片数组中对应的位置
             * @callback {Function} 数据回调函数
             */
            CustomerCard.prototype.show = function (data, allData, queueIndex, ticketsIndex, callback) {
                this.cardData = data;
                this.allData = allData;
                /*$(this.nodeTypeMap.get('customercarTitleNode')).html(data.TicketNo);
                $(this.nodeTypeMap.get('custNameNode')).html(data.CustName);
                $(this.nodeTypeMap.get('custLevelNode')).html(data.CustLevel);
                $(this.nodeTypeMap.get('custSexNode')).html(data.CustSex);
                $(this.nodeTypeMap.get('custBirthdayNode')).html(data.CustBirthday);
                $(this.nodeTypeMap.get('bankRankNode')).html(data.BankRank);*/
                this.setStyle(data.TrxStatus);
                this.queueData = allData.BusQueues;
                for (var i in this.queueData) {
                    if (i != queueIndex) {
                        this.adjustQueueData[this.queueData[i].BusTypeId] = this.queueData[i].BusName;
                    }
                }
            };
            /**
             * 根据TrxStatus 展示不同的样式背景
             * @method setStyle
             * @$cardTmpt {JQuery}
             */
            CustomerCard.prototype.setStyle = function ($cardTmpt) {
                if (this.cardInfo.TrxStatus == '0') {
                    $cardTmpt.css('background-image', "url('scripts/bns/images/card_red.png')");
                }
                else if (this.cardInfo.TrxStatus == '1') {
                    $cardTmpt.css('background-image', "url('scripts/bns/images/card_orange.png')");
                }
                else if (this.cardInfo.TrxStatus == '2') {
                    $cardTmpt.css('background-image', "url('scripts/bns/images/card_green.png')");
                }
                else if (this.cardInfo.TrxStatus == '3') {
                    $cardTmpt.css('background-image', "url('scripts/bns/images/card_zhi.png')");
                }
                else {
                    $cardTmpt.css('background-image', "url('scripts/bns/images/card_qing.png')");
                }
            };
            /**
             * 获取卡片对象
             * @method getCard
             * @return {JQuery}
             */
            CustomerCard.prototype.getCard = function () {
                var cardTemp = "<div class=\"bui-customercard-root\">\n                               <div class=\"bui-customercar-sub-root\">     \n                                 <div class=\"row bui-customercard-content-container\">\n                                      <div class=\"col l4 m4 push-l2 push-m2 bui-customercard-top-title\">" + this.cardInfo.TicketNo + "</div>\n                                      <div class=\"col l5 m5 push-l1 push-m1 bui-customercard-top-time-title\">\n                                           <div class=\"bui-customercard-waitting-img\"></div>\n                                           <div class=\"bui-customercard-waitting-text\">" + Math.floor((new Date().getTime() - new Date(this.cardInfo.PrintTime).getTime()) / (60 * 1000)) + "min</div>\n                                      </div> \n                                 </div>\n                                 <div class=\"row\" style=\"margin-top: 50px;width:80%;\">\n                                     <div class=\"col l12 m12 bui-customercard-stars-container\">\n                                        " + this.getStarTempByLevel(this.cardInfo.CustLevel) + "\n                                     </div>\n                                 </div>\n                                 <div class=\"row\">\n                                      <div class=\"col l5 m5 push-l2 push-m2 bui-customercard-label\">\u5BA2\u6237\u59D3\u540D\uFF1A</div>\n                                      <div class=\"col l7 m7\">\n                                           <div class=\"bui-customercard-value\">" + this.cardInfo.CustName + "</div>\n                                       </div>\n                                 </div>\n                                 <div class=\"row\">\n                                       <div class=\"col l5 m5 push-l2 push-m2 bui-customercard-label\">\n                                            \u5BA2\u6237\u7B49\u7EA7\uFF1A\n                                       </div>\n                                       <div class=\"col l7 m7\">\n                                             <div><span class=\"bui-customercard-value\">" + this.getCustLevelTitle(this.cardInfo.CustLevel) + "</span></div>\n                                       </div>\n                                 </div>\n                                 <div class=\"row\">\n                                        <div class=\"col l3 m3 push-l2 bui-customercard-label\">\u5BA2\u6237\u6027\u522B:</div>\n                                        <div class=\"col l7 m7 push-l2\">\n                                             <div><span class=\"bui-customercard-value\">" + this.validateSex(this.cardInfo.CustSex) + "</span></div>\n                                        </div>\n                                 </div>\n                                 <div class=\"row\">\n                                        <div class=\"col l3 m3 push-l2 bui-customercard-label\">\u5BA2\u6237\u751F\u65E5:</div>\n                                        <div class=\"col l7 m7 push-l2\">\n                                                <div><span class=\"bui-customercard-value\">" + this.cardInfo.CustBirthday + "</span></div>\n                                        </div>\n                                  </div>\n                                  <div class=\"row\">\n                                        <div class=\"col l3 m3 push-l2 bui-customercard-label\">\u53D6\u53F7\u65F6\u95F4:</div>\n                                        <div class=\"col l7 m7 push-l2\">\n                                                <div><span class=\"bui-customercard-value\">" + this.cardInfo.PrintTime + "</span></div>\n                                        </div>\n                                  </div>\n                                 <div class=\"row\">\n                                         <div class=\"col l4 m4 push-l7  push-m7\">\n                                                <div class=\"btn btn-cold bui-hallmanager-adjustqueue-button\" style=\"display:" + (this.cardInfo.TrxStatus != '0' ? 'none' : '') + "\">\u961F\u5217\u8C03\u6574</div>\n                                          </div>\n                                 </div>\n                               </div>        \n                            </div> ";
                /* `<div class="bui-customercard-root">
                                    <div class="bui-customercar-sub-root">
                                      <div class="row bui-customercard-content-container">
                                           <div class="col l4 m4 push-l2 push-m2 bui-customercard-top-title">${this.cardInfo.TicketNo}</div>
                                           <div class="col l5 m5 push-l1 push-m1 bui-customercard-top-time-title">
                                                <div class="bui-customercard-waitting-img"></div>
                                                <div class="bui-customercard-waitting-text">${Math.floor((new Date().getTime()- new Date(this.cardInfo.PrintTime).getTime())/(60*1000))}min</div>
                                           </div>
                                      </div>
                                      <div class="row" style="margin-top: 50px;width:80%;">
                                          <div class="col l12 m12 bui-customercard-stars-container">
                                             ${this.getStarTempByLevel(this.cardInfo.CustLevel)}
                                          </div>
                                      </div>
                                      <div class="row">
                                           <div class="col l5 m5 push-l2 push-m2 bui-customercard-label">客户姓名：</div>
                                           <div class="col l7 m7">
                                                <div class="bui-customercard-value">${this.cardInfo.CustName}</div>
                                            </div>
                                      </div>
                                      <div class="row">
                                            <div class="col l5 m5 push-l2 push-m2 bui-customercard-label">
                                                 客户等级：
                                            </div>
                                            <div class="col l7 m7">
                                                  <div><span class="bui-customercard-value">${this.getCustLevelTitle(this.cardInfo.CustLevel)}</span></div>
                                            </div>
                                      </div>
                                      <div class="row">
                                            <div class="col l2 m2">
                                                 <div class="${this.getSexClass(this.cardInfo.CustSex)}"></div>
                                             </div>
                                             <div class="col l3 m3 bui-customercard-label">客户性别:</div>
                                             <div class="col l7 m7">
                                                  <div><span class="bui-customercard-value">${this.validateSex(this.cardInfo.CustSex)}</span></div>
                                             </div>
                                      </div>
                                      <div class="row">
                                             <div class="col l2 m2">
                                                   <div class="bui-customercard-birthday"></div>
                                             </div>
                                             <div class="col l3 m3  bui-customercard-label">客户生日:</div>
                                             <div class="col l7 m7">
                                                     <div><span class="bui-customercard-value">${this.cardInfo.CustBirthday}</span></div>
                                             </div>
                                       </div>
                                       <div class="row">
                                              <div class="col l2 m2" style="text-align: center;">
                                                    <div class="bui-customercard-star" style="width:20px;height:20px;"></div>
                                              </div>
                                              <div class="col l3 m3 bui-customercard-label">银行评级:</div>
                                              <div class="col l7 m7">
                                                    <div><span class="bui-customercard-value">${this.cardInfo.BankRank}</span></div>
                                              </div>
                                      </div>
                                      <div class="row">
                                              <div class="col l4 m4 push-l7  push-m7">
                                                     <div class="btn btn-cold bui-hallmanager-adjustqueue-button" style="display:${this.cardInfo.TrxStatus == '3' ? 'none':''}">队列调整</div>
                                               </div>
                                      </div>
                                    </div>
                                 </div> `*/
                /**
                 *   <div class="row">
                                              <div class="col l4 push-l8">
                                                    <div class="btn btn-danger btn-sm bui-hallmanager-abandonqueue-button">废弃队列</div>
                                              </div>
                                      </div> */
                var $cardTempt = $(cardTemp);
                this.setStyle($cardTempt);
                this.$customerCard = $cardTempt;
                this.bindEvent();
                this.filter();
                return $cardTempt;
            };
            /**
             * 根据等级来显示名称
             * @method getCustLevelTitle
             * @custLevel {string} 客户级别
             * @return {string}
             */
            CustomerCard.prototype.getCustLevelTitle = function (custLevel) {
                switch (custLevel) {
                    case "0": {
                        return "大众客户";
                    }
                    case "1": {
                        return "一星级客户";
                    }
                    case "2": {
                        return "二星级客户";
                    }
                    case "3": {
                        return "三星级客户";
                    }
                    case "4": {
                        return "四星级客户";
                    }
                    case "5": {
                        return "五星级客户";
                    }
                    case "6": {
                        return "六星级客户";
                    }
                    default: {
                        return "无";
                    }
                }
            };
            /**
             * 根据客户等级来显示几颗亮星，其他默认显示灰色
             * @method getCustLevelTitle
             * @custLevel {string} 客户级别
             * @return {string}
             */
            CustomerCard.prototype.getStarTempByLevel = function (custLevel) {
                switch (custLevel) {
                    case "0": {
                        var temp = "<div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>";
                        return temp;
                    }
                    case "1": {
                        var temp = "<div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>";
                        return temp;
                    }
                    case "2": {
                        var temp = "<div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>";
                        return temp;
                    }
                    case "3": {
                        var temp = "<div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>";
                        return temp;
                    }
                    case "4": {
                        var temp = "<div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>";
                        return temp;
                    }
                    case "5": {
                        var temp = "<div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>";
                        return temp;
                    }
                    case "6": {
                        var temp = "<div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>";
                        return temp;
                    }
                    default: {
                        var temp = "<div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>\n                                      <div class=\"bui-customercard-gray-star\"></div>";
                        return temp;
                    }
                }
            };
            /**
             * 获取性别class选择器
             * @method getCustLevelTitle
             * @sex {string} 性别类型
             * @return {string}
             */
            CustomerCard.prototype.getSexClass = function (sex) {
                if (sex == "0") {
                    return "bui-customercard-man";
                }
                else if (sex == "1") {
                    return "bui-customercard-woman";
                }
                else {
                    return "bui-customercard-man";
                }
            };
            /**
             * 返回此用户性别汉字
             * @method getCustLevelTitle
             * @sex {string} 性别类型
             * @return {string}
             */
            CustomerCard.prototype.validateSex = function (sex) {
                if (sex == "0") {
                    return "男";
                }
                else if (sex == "1") {
                    return "女";
                }
                else {
                    return "未知";
                }
            };
            /**
             * 为CustomerCard节点绑定事件
             * @method bindEvents
             * @private
             */
            CustomerCard.prototype.bindEvent = function () {
                var _this = this;
                this.$adjustQueueButton = this.$customerCard.find('.bui-hallmanager-adjustqueue-button');
                this.$abandonQueueButton = this.$customerCard.find('.bui-hallmanager-abandonqueue-button');
                this.$cardRoot = this.$customerCard.find('.bui-customercar-sub-root');
                this.$adjustQueueButton.unbind('click').on('click', function (e) {
                    bui.EventUtils.stopPropagation(e);
                    var confirm = bui.BGlobal.Confirm.show({ title: '提示', content: '确认调整队列么？' });
                    confirm.confirmBtn.unbind('click').on('click', function (e) {
                        //新对象
                        var ticket = new bui.Ticket();
                        ticket.AppValue = _this.cardInfo.AppValue;
                        ticket.BankRank = _this.cardInfo.BankRank;
                        ticket.BeginTime = _this.cardInfo.BeginTime;
                        ticket.CallTime = _this.cardInfo.CallTime;
                        ticket.CustBirthday = _this.cardInfo.CustBirthday;
                        ticket.CustId = _this.cardInfo.CustId;
                        ticket.CustLevel = _this.cardInfo.CustLevel;
                        ticket.CustName = _this.cardInfo.CustName;
                        ticket.CustSex = _this.cardInfo.CustSex;
                        ticket.CustTel = _this.cardInfo.CustTel;
                        ticket.CustTypeId = _this.cardInfo.CustTypeId;
                        ticket.EndTime = _this.cardInfo.EndTime;
                        ticket.FetchTicketType = _this.cardInfo.FetchTicketType;
                        ticket.FlowNo = _this.cardInfo.FlowNo;
                        ticket.OrderCode = _this.cardInfo.OrderCode;
                        ticket.PrintTime = _this.cardInfo.PrintTime;
                        ticket.Qytx = _this.cardInfo.Qytx;
                        ticket.TicketNo = _this.cardInfo.TicketNo;
                        ticket.TrxStatus = '0';
                        ticket.WinNo = _this.cardInfo.WinNo;
                        //旧对象
                        //_this.cardInfo.TrxStatus = '3';
                        var fromRankQueue;
                        var toRankQueue;
                        var i = 0;
                        bui.HallManager.queuesMap.forEach(function (value, key) {
                            if (key == _this.queueId) {
                                fromRankQueue = i;
                                toRankQueue = i;
                            }
                            i++;
                        });
                        //如果没有选中调整队列，则不做任何操作               
                        var transforData = {
                            oldObject: _this.cardInfo,
                            rank: _this.rank,
                            fromQueue: fromRankQueue,
                            newObject: ticket,
                            toQueue: toRankQueue,
                            notifyUpdateView: _this.notifyUpdateView,
                            scope: _this
                        };
                        var bEvent = new bui.BEvent(e, transforData);
                        _this.hallManager.trigger('change', bEvent);
                        _this.fromRankQueue = fromRankQueue;
                    });
                    confirm.cancelBtn.unbind('click').on('click', function (e) {
                    });
                    /*let prompt:Prompt = BGlobal.Prompt.show({
                        title: '确认',
                        content: [
                            {
                                label: '选择队列',
                                type: 'select',
                                data: _this.adjustQueueData
                            }
                        ]
                    });
                    prompt.setTheme(PromptTheme.Red);
                    //测试Prompt
                    prompt.cancelBtn.unbind('click').on('click',function(e){
                        console.info(e);
                    });
                    prompt.confirmBtn.unbind('click').on('click',function(e){
                        //新对象
                        let ticket:Ticket = new Ticket();
                        ticket.AppValue = _this.cardInfo.AppValue;
                        ticket.BankRank = _this.cardInfo.BankRank;
                        ticket.BeginTime = _this.cardInfo.BeginTime;
                        ticket.CallTime = _this.cardInfo.CallTime;
                        ticket.CustBirthday = _this.cardInfo.CustBirthday;
                        ticket.CustId = _this.cardInfo.CustId;
                        ticket.CustLevel = _this.cardInfo.CustLevel;
                        ticket.CustName = _this.cardInfo.CustName;
                        ticket.CustSex = _this.cardInfo.CustSex;
                        ticket.CustTel = _this.cardInfo.CustTel;
                        ticket.CustTypeId = _this.cardInfo.CustTypeId;
                        ticket.EndTime = _this.cardInfo.EndTime;
                        ticket.FetchTicketType = _this.cardInfo.FetchTicketType;
                        ticket.FlowNo = _this.cardInfo.FlowNo;
                        ticket.OrderCode = _this.cardInfo.OrderCode;
                        ticket.PrintTime = _this.cardInfo.PrintTime;
                        ticket.Qytx = _this.cardInfo.Qytx;
                        ticket.TicketNo = _this.cardInfo.TicketNo;
                        ticket.TrxStatus = '0';
                        ticket.WinNo = _this.cardInfo.WinNo;
                        //旧对象
                        _this.cardInfo.TrxStatus = '3';
                        let fromRankQueue:number;
                        let toRankQueue:number;
                        let i:number =0;
                        HallManager.queuesMap.forEach(function(value,key){
                            if(key == _this.queueId)
                            {
                                fromRankQueue = i;
                            }
                            if(e[0].data[0] == key)
                            {
                                toRankQueue = i;
                            }
                            i++;
                        });
                        //如果没有选中调整队列，则不做任何操作
                        if(toRankQueue)
                        {
                            let transforData:Object =
                            {
                                oldObject:_this.cardInfo,
                                rank:_this.rank,
                                fromQueue:fromRankQueue,
                                newObject:ticket,
                                toQueue:toRankQueue,
                                notifyUpdateView:_this.notifyUpdateView,
                                scope:_this
                            };
                            let bEvent:BEvent = new BEvent(e,transforData);
                            _this.hallManager.trigger('change',bEvent);
                           _this.fromRankQueue = fromRankQueue;
                           //_this.callback(_this.cardInfo,_this.rank,fromRankQueue,ticket,toRankQueue);
                           
                        }
                        
                    });    */
                });
                /*
                this.$abandonQueueButton.unbind('click').on('click',function(e:JQueryEventObject){
                    if (e.stopPropagation)
                        e.stopPropagation();
                    else
                        e.cancelBubble = true;
                    let confirm:Confirm = BGlobal.Confirm.show({title:'确认',content:'是否确定废除此客户？'});
                    confirm.setTheme(ConfirmTheme.Red);
                    confirm.confirmBtn.unbind('click').on('click',function(e){
                         //对客户相对应卡片状态更新为其他状态，标示为3弃号状态，显示与已完成相同
                        _this.cardInfo.TrxStatus = '3';
                        let fromRankQueue:number;
                        let i:number =0;
                        HallManager.queuesMap.forEach(function(value,key){
                            if(key == _this.queueId)
                            {
                                fromRankQueue = i;
                            }
                            i++;
                        });
                        _this.callback(_this.cardInfo,_this.rank,fromRankQueue);
                        _this.$customerCard.css('background-image',`url('scripts/bns/images/card_orange.png')`);//表示已经完成
                    });
                });*/
                this.$cardRoot.unbind('click').on('click', function (e) {
                    var fromRankQueue;
                    var toRankQueue;
                    var i = 0;
                    bui.HallManager.queuesMap.forEach(function (value, key) {
                        if (key == _this.queueId) {
                            fromRankQueue = i;
                        }
                        i++;
                    });
                    _this.fromRankQueue = fromRankQueue;
                    var transforData = {
                        ticket: _this.cardInfo, fromQueue: _this.fromRankQueue
                    };
                    var bEvent = new bui.BEvent(e, transforData);
                    _this.hallManager.trigger('click', bEvent);
                    //hui.PageManager.to("btop.bui.ClientInforMainPage",{ticket:_this.cardInfo,fromQueue:_this.fromRankQueue});
                });
            };
            /**
             * 更新视图UI
             * @method notifyUpdateView
             * @private
             */
            CustomerCard.prototype.notifyUpdateView = function () {
                this.$adjustQueueButton.hide();
                this.$customerCard.css('background-image', "url('scripts/bns/images/card_green.png')"); //表示已经完成
            };
            /**
             * 过滤条件
             * @method filter
             * @private
             */
            CustomerCard.prototype.filter = function () {
                if (!this.filterConfig.all) {
                    if (this.filterConfig.waitting) {
                        if (this.cardInfo.TrxStatus == '0')
                            this.$customerCard.css('display', 'inline-block');
                        else
                            this.$customerCard.hide();
                    }
                    if (this.filterConfig.dealing) {
                        if (this.cardInfo.TrxStatus == '1')
                            this.$customerCard.css('display', 'inline-block');
                        else
                            this.$customerCard.hide();
                    }
                    if (this.filterConfig.finish) {
                        if (this.cardInfo.TrxStatus == '2')
                            this.$customerCard.css('display', 'inline-block');
                        else
                            this.$customerCard.hide();
                    }
                    if (this.filterConfig.abandon) {
                        if (this.cardInfo.TrxStatus == '3')
                            this.$customerCard.css('display', 'inline-block');
                        else
                            this.$customerCard.hide();
                    }
                    if (this.filterConfig.other) {
                        if (this.cardInfo.TrxStatus == '4')
                            this.$customerCard.css('display', 'inline-block');
                        else
                            this.$customerCard.hide();
                    }
                }
                else {
                    this.$customerCard.css('display', 'inline-block');
                }
            };
            Object.defineProperty(CustomerCard.prototype, "filterConfig", {
                /**
                 * 获取filterConfig访问器
                 * @method filterConfig
                 * @private
                 */
                get: function () {
                    return this._filterConfig;
                },
                /**
                 * 设置filterConfig设置器
                 * @method filterConfig
                 * @private
                 */
                set: function (filterConfig) {
                    this._filterConfig = filterConfig;
                },
                enumerable: true,
                configurable: true
            });
            return CustomerCard;
        }());
        bui.CustomerCard = CustomerCard;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  CustomerQueue
 * 描述  :  厅堂队列
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/6/17
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../../../../libs/jQuery.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        /**
         * CustomerQueue厅堂队列
         * @class CustomerQueue
         * @module btop.bui
         * @extends btop.hui.PopContainer
         *  */
        var CustomerQueue = (function (_super) {
            __extends(CustomerQueue, _super);
            function CustomerQueue() {
                _super.apply(this, arguments);
                this._filterConfig = { all: true, waitting: false, dealing: false, finish: false, abandon: false, other: false }; //过滤配置条件
                this.queueData = new bui.BusQueue();
                this.customerCardContainer = new Map();
                this.loadPosition = 0; //当前加载位置
                this.dataIsLoaded = false;
                this.dataIsLoadedComplete = false;
            }
            /**
             * 初始化组件视图，它是全局组件，默认是隐藏的
             * @method initView
             */
            CustomerQueue.prototype.initView = function () {
                var _this = this;
                var start = 0;
                var end = 0;
                var xTouchLength = 0;
                this.$customerqueueContainerNode = $(this.nodeTypeMap.get('customerqueueContainerNode'));
                _this.$customerqueueContainerNode[0].addEventListener('touchstart', function (e) {
                    start = e.changedTouches[0].pageX;
                });
                _this.$customerqueueContainerNode[0].addEventListener('touchend', function (e) {
                    end = e.changedTouches[0].pageX - start;
                    if (end > 0) {
                        console.info('手势向右滑动,滑动了' + end + 'px');
                    }
                    else {
                        console.info('手势向左滑动,滑动了' + (-end) + 'px');
                    }
                });
                this.$customerqueueContainerNode[0].addEventListener('scroll', function (e) {
                    var clientW = e.currentTarget.clientWidth; //可视宽度
                    var contentW = e.currentTarget.scrollWidth; //内容宽度
                    var scrollLeft = e.currentTarget.scrollLeft; //滚动的宽度
                    var condition = contentW - scrollLeft - clientW;
                    var $currentTarget = $(e.currentTarget);
                    //console.info('scoll condition: '+condition);
                    if (condition <= 40 && end < 0 && !_this.dataIsLoaded) {
                        var custQueueContainerLastElement = _this.$customerqueueContainerNode[0].lastElementChild;
                        if (custQueueContainerLastElement) {
                            if (custQueueContainerLastElement.classList.contains("bui-pull-left-referesh")) {
                                _this.$customerqueueContainerNode[0].removeChild(custQueueContainerLastElement);
                            }
                        }
                        setTimeout(function () {
                            if (!_this.dataIsLoadedComplete) {
                                $currentTarget.css('transform', 'translate(-50px)');
                                bui.BGlobal.PullLoadToast.show();
                            }
                        }, 10);
                        setTimeout(function () {
                            if (!_this.dataIsLoadedComplete) {
                                bui.BGlobal.PullLoadToast.hide();
                                $currentTarget.css('transform', 'translate(0px)');
                            }
                            _this.render();
                        }, 1000);
                    }
                });
                _super.prototype.hide.call(this);
            };
            /**
             * @description 接受被观察者的通知，然后进行渲染
             */
            CustomerQueue.prototype.notify = function () {
                /*this.customerCardContainer = new Map<number,JQuery>();
                this.loadPosition=0;
                this.clear();*/
                this.render();
            };
            /**
             * 队列显示
             * @method show
             */
            CustomerQueue.prototype.show = function () {
                $(this.domNode).removeClass("flyInAnimEnd");
                $(this.domNode).addClass("flyInAnim");
                _super.prototype.show.call(this);
                var _this = this;
                setTimeout(function () {
                    $(_this.domNode).addClass("flyInTransision");
                    $(_this.domNode).addClass("flyInAnimEnd");
                    $(_this.domNode).removeClass("flyInAnim");
                }, 0);
            };
            /**
             * 队列显示
             * @queueData {BusQueue} 队列信息
             * @hallManager {HallManager}
             * @method initData
             */
            CustomerQueue.prototype.initData = function (queueData, hallManager) {
                this.clear();
                this.queueData = queueData;
                this.hallManager = hallManager;
                this.render();
            };
            /**
             * 队列分批加载数据渲染
             * @method render
             * @private
             */
            CustomerQueue.prototype.render = function () {
                var _this = this;
                var tickets = this.queueData.Ticket;
                this.dataIsLoadedComplete = false;
                if (this.loadPosition <= tickets.length && this.loadPosition + 10 > tickets.length) {
                    for (var i = this.loadPosition; i < tickets.length; i++) {
                        var customerCard = new bui.CustomerCard(tickets[i], this.filterConfig, i + '', this.queueData.BusTypeId, this.hallManager); //初始化对象
                        var $cardElement = customerCard.getCard();
                        $cardElement.appendTo(this.$customerqueueContainerNode);
                        this.customerCardContainer.set(i, $cardElement); //放入此容器里面，方便过滤和对卡片队列批处理操作
                        this.loadPosition++;
                    }
                    if (tickets.length >= 10) {
                        this.createTipUnExistDataTemp().appendTo(this.$customerqueueContainerNode);
                    }
                    setTimeout(function () {
                        _this.dataIsLoadedComplete = true;
                    }, 0);
                    if (this.loadPosition == tickets.length) {
                        this.dataIsLoaded = true;
                    }
                }
                else {
                    var endPosition = this.loadPosition + 10;
                    for (var i = this.loadPosition; i < endPosition; i++) {
                        var customerCard = new bui.CustomerCard(tickets[i], this.filterConfig, i + '', this.queueData.BusTypeId, this.hallManager); //初始化对象
                        var $cardElement = customerCard.getCard();
                        $cardElement.appendTo(this.$customerqueueContainerNode);
                        this.customerCardContainer.set(i, $cardElement); //放入此容器里面，方便过滤和对卡片队列批处理操作
                    }
                    this.loadPosition = endPosition; //为下一次加载做好准备 
                    if (tickets.length >= 10) {
                        this.createTipExistDataTemp().appendTo(this.$customerqueueContainerNode);
                    }
                }
                //this.filter();
            };
            /**
             * 队列清除操作
             * @method clear
             */
            CustomerQueue.prototype.clear = function () {
                this.dataIsLoaded = false;
                this.customerCardContainer = new Map();
                this.loadPosition = 0;
                this.$customerqueueContainerNode.children().remove();
                this.$customerqueueContainerNode.children().off();
                this.$customerqueueContainerNode.children().empty();
            };
            /**
             * 对队列进行排序
             * @filed {string}
             * @type {CustomerQueueSort}
             * @method sort
             */
            CustomerQueue.prototype.sort = function (filed, type) {
                switch (filed) {
                    case 'TicketNo':
                        this.sortByTicketNo(type);
                        break;
                    case 'CustLevel':
                        this.sortByCustLevel(type);
                        break;
                    case 'PrintTime':
                        this.sortByPrintTime(type);
                        break;
                    default:
                        break;
                }
            };
            /**
             * 根据排队号进行排序
             * @type {CustomerQueueSort}
             * @method sortByTicketNo
             * @private
             */
            CustomerQueue.prototype.sortByTicketNo = function (type) {
                var tickets = this.queueData.Ticket;
                if (tickets) {
                    if (type == CustomerQueueSort.AES) {
                        for (var i = 0; i < tickets.length - 1; i++) {
                            for (var j = 0; j < tickets.length - i - 1; j++) {
                                if (tickets[j]['TicketNo'] > tickets[j + 1]['TicketNo']) {
                                    var swap = tickets[j];
                                    tickets[j] = tickets[j + 1];
                                    tickets[j + 1] = swap;
                                }
                            }
                        }
                        this.clear(); //首先清除原有的数据
                        this.queueData.Ticket = tickets; //把值传递给全局数据
                        this.render();
                    }
                    else {
                        for (var i = 0; i < tickets.length - 1; i++) {
                            for (var j = 0; j < tickets.length - i - 1; j++) {
                                if (tickets[j]['TicketNo'] < tickets[j + 1]['TicketNo']) {
                                    var swap = tickets[j];
                                    tickets[j] = tickets[j + 1];
                                    tickets[j + 1] = swap;
                                }
                            }
                        }
                        this.clear(); //首先清除原有的数据
                        this.queueData.Ticket = tickets; //把值传递给全局数据
                        this.render();
                    }
                }
            };
            /**
             * 根据客户等级进行排序
             * @type {CustomerQueueSort} 表示升序或降序
             * @method sortByCustLevel
             * @private
             */
            CustomerQueue.prototype.sortByCustLevel = function (type) {
                var tickets = this.queueData.Ticket;
                if (tickets) {
                    if (type == CustomerQueueSort.AES) {
                        for (var i = 0; i < tickets.length - 1; i++) {
                            for (var j = 0; j < tickets.length - i - 1; j++) {
                                if (tickets[j]['CustLevel'] > tickets[j + 1]['CustLevel']) {
                                    var swap = tickets[j];
                                    tickets[j] = tickets[j + 1];
                                    tickets[j + 1] = swap;
                                }
                            }
                        }
                        this.clear(); //首先清除原有的数据
                        this.queueData.Ticket = tickets; //把值传递给全局数据
                        this.render();
                    }
                    else {
                        for (var i = 0; i < tickets.length - 1; i++) {
                            for (var j = 0; j < tickets.length - i - 1; j++) {
                                if (tickets[j]['CustLevel'] < tickets[j + 1]['CustLevel']) {
                                    var swap = tickets[j];
                                    tickets[j] = tickets[j + 1];
                                    tickets[j + 1] = swap;
                                }
                            }
                        }
                        this.clear(); //首先清除原有的数据
                        this.queueData.Ticket = tickets; //把值传递给全局数据
                        this.render();
                    }
                }
            };
            /**
             * 根据取号时间进行排序
             * @type {CustomerQueueSort} 表示升序或降序
             * @method sortByPrintTime
             * @private
             */
            CustomerQueue.prototype.sortByPrintTime = function (type) {
                var tickets = this.queueData.Ticket;
                if (tickets) {
                    if (type == CustomerQueueSort.DES) {
                        for (var i = 0; i < tickets.length - 1; i++) {
                            for (var j = 0; j < tickets.length - i - 1; j++) {
                                if (new Date(tickets[j]['PrintTime']).getTime() > new Date(tickets[j + 1]['PrintTime']).getTime()) {
                                    var swap = tickets[j];
                                    tickets[j] = tickets[j + 1];
                                    tickets[j + 1] = swap;
                                }
                            }
                        }
                        this.clear(); //首先清除原有的数据
                        this.queueData.Ticket = tickets; //把值传递给全局数据
                        this.render();
                    }
                    else {
                        for (var i = 0; i < tickets.length - 1; i++) {
                            for (var j = 0; j < tickets.length - i - 1; j++) {
                                if (new Date(tickets[j]['PrintTime']).getTime() < new Date(tickets[j + 1]['PrintTime']).getTime()) {
                                    var swap = tickets[j];
                                    tickets[j] = tickets[j + 1];
                                    tickets[j + 1] = swap;
                                }
                            }
                        }
                        this.clear(); //首先清除原有的数据
                        this.queueData.Ticket = tickets; //把值传递给全局数据
                        this.render();
                    }
                }
            };
            /**
             * 根据取号时间进行排序
             * @type {CustomerQueueSort} 表示升序或降序
             * @queueData {BusQueue} 队列数据
             * @hallManager {HallManager}
             * @method filter
             */
            CustomerQueue.prototype.filter = function (queueData, hallManager) {
                _super.prototype.hide.call(this);
                this.initData(queueData, hallManager);
                var _this = this;
                this.render();
                /*let tickets:Array<Ticket> = this.queueData.Tickets;
                for(let i =0 ;i<this.loadPosition;i++)
                {
                    if(!this.filterConfig.all)
                    {
                        if(this.filterConfig.waitting)
                        {
                            if(tickets[i].TrxStatus=='0')
                                _this.customerCardContainer.get(i).css('display','inline-block');
                            else
                               _this.customerCardContainer.get(i).hide();
                        }
                        if(this.filterConfig.dealing)
                        {
                            if(tickets[i].TrxStatus=='1')
                                _this.customerCardContainer.get(i).css('display','inline-block');
                            else
                               _this.customerCardContainer.get(i).hide();
                        }
                        if(this.filterConfig.finish)
                        {
                            if(tickets[i].TrxStatus=='2')
                                _this.customerCardContainer.get(i).css('display','inline-block');
                            else
                               _this.customerCardContainer.get(i).hide();
                        }
                        if(this.filterConfig.other)
                        {
                            if(tickets[i].TrxStatus=='4')
                                _this.customerCardContainer.get(i).css('display','inline-block');
                            else
                               _this.customerCardContainer.get(i).hide();
                        }
                    }else{
                        _this.customerCardContainer.get(i).css('display','inline-block');
                    }
                }*/
                $(this.domNode).removeClass("flyInAnimEnd");
                $(this.domNode).addClass("flyInAnim");
                _super.prototype.show.call(this);
                setTimeout(function () {
                    $(_this.domNode).addClass("flyInTransision");
                    $(_this.domNode).addClass("flyInAnimEnd");
                    $(_this.domNode).removeClass("flyInAnim");
                }, 0);
            };
            CustomerQueue.prototype.createTipExistDataTemp = function () {
                return $("<div class=\"bui-pull-left-referesh\"><div>\u5DE6\u62C9\u52A0\u8F7D\u6570\u636E</div></div>");
            };
            CustomerQueue.prototype.createTipUnExistDataTemp = function () {
                return $("<div class=\"bui-pull-left-loaded\">\u6570\u636E\u5DF2\u52A0\u8F7D\u5B8C\u6210</div>");
            };
            Object.defineProperty(CustomerQueue.prototype, "filterConfig", {
                get: function () {
                    return this._filterConfig;
                },
                set: function (filterConfig) {
                    this._filterConfig = filterConfig;
                },
                enumerable: true,
                configurable: true
            });
            return CustomerQueue;
        }(btop.hui.PopContainer));
        bui.CustomerQueue = CustomerQueue;
        (function (CustomerQueueSort) {
            CustomerQueueSort[CustomerQueueSort["AES"] = 0] = "AES";
            CustomerQueueSort[CustomerQueueSort["DES"] = 1] = "DES";
        })(bui.CustomerQueueSort || (bui.CustomerQueueSort = {}));
        var CustomerQueueSort = bui.CustomerQueueSort;
        var CustomerQueueFilter = (function () {
            function CustomerQueueFilter() {
            }
            return CustomerQueueFilter;
        }());
        bui.CustomerQueueFilter = CustomerQueueFilter;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  HallManager
 * 描述  :  厅堂管理队列
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/6/17
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../../../../libs/jQuery.d.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        /**
         * HallManager厅堂管理队列
         * @class HallManager
         * @module btop.bui
         * @extends btop.hui.Widget
         *  */
        var HallManager = (function (_super) {
            __extends(HallManager, _super);
            function HallManager() {
                _super.apply(this, arguments);
                this.customerQueues = new bui.CustomerQueues();
                this.titles = new Array();
                this.custLevelAes = true; //客户等级初始操作
                this.printTimeAes = true; //取号时间排序初始操作
                this.ticketSortAes = true; //排队排序初始操作
                this.currentQueuePostion = 0; //当前选中的队列类型
            }
            /**
             * 初始化组件视图，默认是隐藏的
             * @method initView
             */
            HallManager.prototype.initView = function () {
                _super.prototype.hide.call(this);
                this.$hallManagerNavTabsNode = $(this.nodeTypeMap.get('hallManagerNavTabsNode'));
            };
            /**
             * 初始化组件视图
             * @data {CustomerQueues} 队列数据
             * @parentId {string}
             * @method initData
             */
            HallManager.prototype.initData = function (data, parentId) {
                var _this = this;
                this.customerQueues = data;
                for (var i in this.customerQueues.BusQueue) {
                    this.titles.push(this.customerQueues.BusQueue[i].BusName);
                    HallManager.queuesMap.set(this.customerQueues.BusQueue[i].BusTypeId, this.customerQueues.BusQueue[i].BusName);
                }
                this.render(parentId);
                _super.prototype.show.call(this);
                this.bindEvents();
            };
            /**
             * 渲染HallManager组件
             * @parentId {string}
             * @method render
             */
            HallManager.prototype.render = function (parentId) {
                var _this = this;
                for (var i in this.titles) {
                    var tabsTemp = "<div class=\"bui-hallmanager-tab-title\" hui-widget-nodeType=\"hallmanagerTabTitleNode" + i + "\"></div>";
                    $(tabsTemp).appendTo(this.$hallManagerNavTabsNode);
                }
                this.nodeTypeMap = this.parseWidgetNodeType($(this.nodeTypeMap.get('buiHallmanagerRootNode')).parent()[0]);
                for (var j = 0; j < this.titles.length; j++) {
                    $(this.nodeTypeMap.get('hallmanagerTabTitleNode' + j)).html(this.titles[j]);
                }
                //动态添加select组件
                var selectTemp = "<div id=\"hallManagerQueueSelect\" class=\"bui-hallmanager-select\" hui-widget-type=\"btop.bui.Select\"></div>";
                this.$hallManagerSelectNode = $(this.nodeTypeMap.get('hallManagerSelectNode'));
                $(selectTemp).appendTo(this.$hallManagerSelectNode);
                btop.hui.HuiParser.parse(this.$hallManagerSelectNode[0], parentId);
                //解析后，初始化select信息
                var selectOptData = {};
                selectOptData = ["全部", "等待", "正在办理", "完成", "弃号", "其他"];
                var selectOpt = {
                    data: selectOptData
                };
                this.selectComponent = btop.hui.WidgetManager.byId("hallManagerQueueSelect");
                this.selectComponent.initData(selectOpt);
                this.selectComponent.setSelectedItem("1");
                this.selectComponent.on('change', function (e) {
                    switch (e[0]['attrValue']) {
                        case '0': {
                            var opt = {
                                all: true,
                                waitting: false,
                                dealing: false,
                                finish: false,
                                abandon: false,
                                other: false
                            };
                            _this.currentQueue.filterConfig = opt;
                            _this.currentQueue.filter(_this.customerQueues.BusQueue[_this.currentQueuePostion], _this);
                            break;
                        }
                        case '1': {
                            var opt = {
                                all: false,
                                waitting: true,
                                dealing: false,
                                finish: false,
                                abandon: false,
                                other: false
                            };
                            _this.currentQueue.filterConfig = opt;
                            _this.currentQueue.filter(_this.customerQueues.BusQueue[_this.currentQueuePostion], _this);
                            break;
                        }
                        case '2': {
                            var opt = {
                                all: false,
                                waitting: false,
                                dealing: true,
                                finish: false,
                                abandon: false,
                                other: false
                            };
                            _this.currentQueue.filterConfig = opt;
                            _this.currentQueue.filter(_this.customerQueues.BusQueue[_this.currentQueuePostion], _this);
                            break;
                        }
                        case '3': {
                            var opt = {
                                all: false,
                                waitting: false,
                                dealing: false,
                                finish: true,
                                abandon: false,
                                other: false
                            };
                            _this.currentQueue.filterConfig = opt;
                            _this.currentQueue.filter(_this.customerQueues.BusQueue[_this.currentQueuePostion], _this);
                            break;
                        }
                        case '4': {
                            var opt = {
                                all: false,
                                waitting: false,
                                dealing: false,
                                finish: false,
                                abandon: true,
                                other: false
                            };
                            _this.currentQueue.filterConfig = opt;
                            _this.currentQueue.filter(_this.customerQueues.BusQueue[_this.currentQueuePostion], _this);
                            break;
                        }
                        case '5': {
                            var opt = {
                                all: false,
                                waitting: false,
                                dealing: false,
                                finish: false,
                                abandon: false,
                                other: true
                            };
                            _this.currentQueue.filterConfig = opt;
                            _this.currentQueue.filter(_this.customerQueues.BusQueue[_this.currentQueuePostion], _this);
                            break;
                        }
                        default: {
                            var opt = {
                                all: true,
                                waitting: false,
                                dealing: false,
                                finish: false,
                                abandon: false,
                                other: false
                            };
                            _this.currentQueue.filterConfig = opt;
                            _this.currentQueue.filter(_this.customerQueues.BusQueue[_this.currentQueuePostion], _this);
                            break;
                        }
                    }
                });
                this.$hallManagerNavTabsNode = $(this.nodeTypeMap.get('hallManagerNavTabsNode'));
                //绑定内容区域
                this.$hallQueueContainerNode = $(this.nodeTypeMap.get('hallQueueContainerNode'));
                for (var i in this.customerQueues.BusQueue) {
                    var busQueuesTemp = "<div id=\"customerQueue" + i + "\" hui-widget-type=\"btop.bui.CustomerQueue\"></div>";
                    $(busQueuesTemp).appendTo(this.$hallQueueContainerNode);
                }
                btop.hui.HuiParser.parse(this.$hallQueueContainerNode[0], parentId);
                //初始化显示内容区域
                var customerQueue = btop.hui.WidgetManager.byId("customerQueue" + 0);
                customerQueue.initData(_this.customerQueues.BusQueue[0], _this);
                //HallObservable.register(customerQueue.id,customerQueue);
                this.currentQueue = customerQueue;
                customerQueue.show();
                //绑定扩展节点箭头
                this.$hallManagerExpandNavTabsNode = $(this.nodeTypeMap.get('hallManagerExpandNavTabsNode'));
                //排序节点进行初始化
                this.$custLevelSortsNode = $(this.nodeTypeMap.get('custLevelSortsNode'));
                this.$custLevelSortDesNode = $(this.nodeTypeMap.get('custLevelSortDesNode'));
                this.$custLevelSortAesNode = $(this.nodeTypeMap.get('custLevelSortAesNode'));
                this.$printTimeSortsNode = $(this.nodeTypeMap.get('printTimeSortsNode'));
                this.$printTimeSortDesNode = $(this.nodeTypeMap.get('printTimeSortDesNode'));
                this.$printTimeSortAesNode = $(this.nodeTypeMap.get('printTimeSortAesNode'));
                this.$ticketNoSortsNode = $(this.nodeTypeMap.get('ticketNoSortsNode'));
                this.$ticketNoSortDesNode = $(this.nodeTypeMap.get('ticketNoSortDesNode'));
                this.$ticketNoSortAesNode = $(this.nodeTypeMap.get('ticketNoSortAesNode'));
                this.initExpandTabView();
            };
            /**
             * 选择要显示的队列
             * @index {number} 根据索引值来显示
             * @method checkedByIndex
             */
            HallManager.prototype.checkedByIndex = function (index) {
                var _this = this;
                if (!index) {
                    index = 0;
                }
                $(this.nodeTypeMap.get("hallmanagerTabTitleNode" + index + "'")).addClass('bui-hallmanager-tab-title-checked');
                this.$hallManagerNavTabsNode.children().each(function (position) {
                    var that = this;
                    var items = _this.$hallManagerNavTabsNode.children();
                    if (position == index) {
                        bui.BGlobal.PullLoadToast.hide();
                        var customerQueue = btop.hui.WidgetManager.byId("customerQueue" + position);
                        var opt = {
                            all: true,
                            waitting: false,
                            dealing: false,
                            finish: false,
                            abandon: false,
                            other: false
                        };
                        _this.currentQueue.filterConfig = opt;
                        customerQueue.initData(_this.customerQueues.BusQueue[position], _this);
                        customerQueue.show();
                        _this.currentQueue = customerQueue;
                        _this.currentQueuePostion = position;
                        _this.selectComponent.setSelectedItem('default');
                        $(that).addClass('bui-hallmanager-tab-title-checked');
                    }
                    else {
                        var customerQueue = btop.hui.WidgetManager.byId("customerQueue" + position);
                        customerQueue.hide();
                        $(items[position]).removeClass('bui-hallmanager-tab-title-checked');
                    }
                });
            };
            /**
             * 绑定事件
             * @method bindEvents
             * @private
             */
            HallManager.prototype.bindEvents = function () {
                var _this = this;
                $(this.nodeTypeMap.get('hallmanagerTabTitleNode0')).addClass('bui-hallmanager-tab-title-checked');
                this.$hallManagerNavTabsNode.children().click(function () {
                    var that = this;
                    _this.sortClear();
                    _this.printTimeAes = true;
                    _this.ticketSortAes = true;
                    _this.custLevelAes = true;
                    var items = _this.$hallManagerNavTabsNode.children();
                    for (var i = 0; i < items.length; i++) {
                        if (that == items[i]) {
                            bui.BGlobal.PullLoadToast.hide();
                            var customerQueue = btop.hui.WidgetManager.byId("customerQueue" + i);
                            var opt = {
                                all: true,
                                waitting: false,
                                dealing: false,
                                finish: false,
                                abandon: false,
                                other: false
                            };
                            _this.currentQueue.filterConfig = opt;
                            customerQueue.initData(_this.customerQueues.BusQueue[i], _this);
                            customerQueue.show();
                            _this.currentQueue = customerQueue;
                            _this.currentQueuePostion = i;
                            _this.selectComponent.setSelectedItem('default');
                            $(that).addClass('bui-hallmanager-tab-title-checked');
                        }
                        else {
                            var customerQueue = btop.hui.WidgetManager.byId("customerQueue" + i);
                            customerQueue.hide();
                            $(items[i]).removeClass('bui-hallmanager-tab-title-checked');
                        }
                    }
                });
                //客户等级来切换排序
                this.$custLevelSortsNode.unbind('click').on('click', function (e) {
                    _this.printTimeAes = true;
                    _this.ticketSortAes = true;
                    _this.sortClear();
                    if (_this.custLevelAes) {
                        _this.currentQueue.sort('CustLevel', bui.CustomerQueueSort.AES);
                        _this.$custLevelSortAesNode.addClass('hui-hallmanager-sort-checked');
                        _this.$custLevelSortDesNode.removeClass('hui-hallmanager-sort-checked');
                        _this.custLevelAes = false;
                    }
                    else {
                        _this.currentQueue.sort('CustLevel', bui.CustomerQueueSort.DES);
                        _this.$custLevelSortDesNode.addClass('hui-hallmanager-sort-checked');
                        _this.$custLevelSortAesNode.removeClass('hui-hallmanager-sort-checked');
                        _this.custLevelAes = true;
                    }
                });
                /*//客户等级降序事件
                this.$custLevelSortDesNode.unbind('click').on('click',function(e:JQueryEventObject){
                    _this.currentQueue.sort('CustLevel',CustomerQueueSort.DES);
                });
                //客户等级升序序事件
                this.$custLevelSortAesNode.unbind('click').on('click',function(e:JQueryEventObject){
                    _this.currentQueue.sort('CustLevel',CustomerQueueSort.AES);
                });*/
                //取号时间来排序
                this.$printTimeSortsNode.unbind('click').on('click', function (e) {
                    _this.custLevelAes = true;
                    _this.ticketSortAes = true;
                    _this.sortClear();
                    if (_this.printTimeAes) {
                        _this.currentQueue.sort('PrintTime', bui.CustomerQueueSort.AES);
                        _this.$printTimeSortAesNode.addClass('hui-hallmanager-sort-checked');
                        _this.$printTimeSortDesNode.removeClass('hui-hallmanager-sort-checked');
                        _this.printTimeAes = false;
                    }
                    else {
                        _this.currentQueue.sort('PrintTime', bui.CustomerQueueSort.DES);
                        _this.$printTimeSortDesNode.addClass('hui-hallmanager-sort-checked');
                        _this.$printTimeSortAesNode.removeClass('hui-hallmanager-sort-checked');
                        _this.printTimeAes = true;
                    }
                });
                /*//根据取号时间进行降序事件
                this.$printTimeSortDesNode.unbind('click').on('click',function(e:JQueryEventObject){
                    _this.currentQueue.sort('PrintTime',CustomerQueueSort.DES);
                });
                //根据取号时间进行升序事件
                this.$printTimeSortAesNode.unbind('click').on('click',function(e:JQueryEventObject){
                    _this.currentQueue.sort('PrintTime',CustomerQueueSort.AES);
                });*/
                //排队号来切换排序
                this.$ticketNoSortsNode.unbind('click').on('click', function (e) {
                    _this.custLevelAes = true;
                    _this.printTimeAes = true;
                    _this.sortClear();
                    if (_this.ticketSortAes) {
                        _this.currentQueue.sort('TicketNo', bui.CustomerQueueSort.AES);
                        _this.$ticketNoSortAesNode.addClass('hui-hallmanager-sort-checked');
                        _this.$ticketNoSortDesNode.removeClass('hui-hallmanager-sort-checked');
                        _this.ticketSortAes = false;
                    }
                    else {
                        _this.currentQueue.sort('TicketNo', bui.CustomerQueueSort.DES);
                        _this.$ticketNoSortDesNode.addClass('hui-hallmanager-sort-checked');
                        _this.$ticketNoSortAesNode.removeClass('hui-hallmanager-sort-checked');
                        _this.ticketSortAes = true;
                    }
                });
                /*//根据排队号进行降序事件
                this.$ticketNoSortDesNode.unbind('click').on('click',function(e:JQueryEventObject){
                    _this.currentQueue.sort('TicketNo',CustomerQueueSort.DES);
                });
                //根据排队号进行升序事件
                this.$ticketNoSortAesNode.unbind('click').on('click',function(e:JQueryEventObject){
                    _this.currentQueue.sort('TicketNo',CustomerQueueSort.AES);
                });*/
            };
            /**
             * 进行排序清理操作，每次进行切换不同排序时，都会执行一次排序清理
             * @method sortClear
             */
            HallManager.prototype.sortClear = function () {
                this.$custLevelSortAesNode.removeClass('hui-hallmanager-sort-checked');
                this.$custLevelSortDesNode.removeClass('hui-hallmanager-sort-checked');
                this.$printTimeSortAesNode.removeClass('hui-hallmanager-sort-checked');
                this.$printTimeSortDesNode.removeClass('hui-hallmanager-sort-checked');
                this.$ticketNoSortDesNode.removeClass('hui-hallmanager-sort-checked');
                this.$ticketNoSortAesNode.removeClass('hui-hallmanager-sort-checked');
            };
            HallManager.prototype.initExpandTabView = function () {
                this.$hallManagerExpandNavTabsNode[0];
                this.$hallManagerNavTabsNode[0];
            };
            /**
             * 清理组件
             * @method clear
             */
            HallManager.prototype.clear = function () {
                this.titles = new Array();
                btop.hui.EventProxy.inst.remove("click.hallmanager", this.clickCallBackFn);
                btop.hui.EventProxy.inst.remove("change.hallmanager", this.changeCallBackFn);
                //this.$hallManagerSelectNode;    
                for (var i in this.customerQueues.BusQueue) {
                    var customerQueue = btop.hui.WidgetManager.byId("customerQueue" + i);
                    customerQueue.destroy();
                }
                this.customerQueues = new bui.CustomerQueues();
                this.currentQueuePostion = 0; //当前选中的队列类型  
                this.currentQueue = null;
                this.$hallManagerNavTabsNode.children().remove();
                this.$hallManagerNavTabsNode.children().off();
                this.$hallManagerNavTabsNode.children().empty();
            };
            /**
             * 为HallManager组件绑定on事件
             * @type {string} 事件类型
             * @callbackfn {any} 回调函数
             * @method on
             */
            HallManager.prototype.on = function (type, callbackfn) {
                if (type == "click") {
                    this.clickCallBackFn = callbackfn;
                }
                else if (type == "change") {
                    this.changeCallBackFn = callbackfn;
                }
                btop.hui.EventProxy.inst.on(type + ".hallmanager", callbackfn);
            };
            /**
             * 为HallManager组件绑定trigger事件
             * @type {string} 事件类型
             * @args {any} 事件传递参数
             * @method trigger
             */
            HallManager.prototype.trigger = function (type) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                btop.hui.EventProxy.inst.trigger(type + ".hallmanager", args);
            };
            /**
             * 为HallManager组件解除绑定的事件
             * @type {string} 事件类型
             * @method unbind
             * @return HallManager
             */
            HallManager.prototype.unbind = function (type) {
                if (type == "click") {
                    btop.hui.EventProxy.inst.remove(type + ".hallmanager", this.clickCallBackFn);
                }
                else if (type == "change") {
                    btop.hui.EventProxy.inst.remove(type + ".hallmanager", this.changeCallBackFn);
                }
                return this;
            };
            /**
             * 销毁HallManager组件
             * @type {string} 事件类型
             * @method destroy
             */
            HallManager.prototype.destroy = function () {
                //HallObservable.removeAll();//记得要清除观察者数据
                btop.hui.EventProxy.inst.remove("click.hallmanager", this.clickCallBackFn);
                btop.hui.EventProxy.inst.remove("change.hallmanager", this.changeCallBackFn);
                _super.prototype.destroy.call(this);
            };
            HallManager.queuesMap = new Map();
            return HallManager;
        }(btop.hui.PopContainer));
        bui.HallManager = HallManager;
        var HallObservable = (function () {
            function HallObservable() {
            }
            HallObservable.register = function (id, currentQueue) {
                if (!this.entities.get(id)) {
                    this.entities.set(id, currentQueue);
                }
            };
            HallObservable.unRegister = function (id) {
                this.entities.delete(id);
            };
            HallObservable.notify = function () {
                if (this.entities) {
                    this.entities.forEach(function (value, index) {
                        var customerQueue = value;
                        customerQueue.notify();
                    });
                }
            };
            HallObservable.removeAll = function () {
                this.entities.clear();
            };
            HallObservable.entities = new Map(); //存放队列观察者（及订阅者）
            return HallObservable;
        }());
        bui.HallObservable = HallObservable;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  SaleClueQueue
 * 描述  :  销售队列
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/6/22
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../../../../libs/jQuery.d.ts"/>
///<reference path="../../../../../domain/model/SaleClue.ts"/>
///<reference path="../../../../../event/BEvent.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var SaleClueQueue = (function (_super) {
            __extends(SaleClueQueue, _super);
            function SaleClueQueue() {
                _super.apply(this, arguments);
                this.saleClueQueue = new Array();
                this.filterType = 0; //点击nav进行联动显示的过滤条件
                this.loadPosition = 0; //当前加载位置
                this.currentPosition = 0; //当前选中的类型
                this.dataIsLoaded = false;
                this.status = ["未转介", "已转介", "有效", "无效", "未确认"];
                //private userRole:string;//用户角色
                this.dataIsLoadedComplete = false;
            }
            SaleClueQueue.prototype.initView = function () {
                var _this = this;
                var start = 0;
                var end = 0;
                var xTouchLength = 0;
                this.$saleClueQueueNavTabsNode = $(this.nodeTypeMap.get('saleClueQueueNavTabsNode'));
                this.$saleClueQueueContainerNode = $(this.nodeTypeMap.get('saleClueQueueContainerNode'));
                $(this.nodeTypeMap.get('zhuanJieNode')).hide();
                $(this.nodeTypeMap.get('weiZhuanJieNode')).hide();
                $(this.nodeTypeMap.get('youXiaoNode')).hide();
                $(this.nodeTypeMap.get('wuXiaoNode')).hide();
                $(this.nodeTypeMap.get('weiQueRenNode')).hide();
                this.bindEvents();
                _this.$saleClueQueueContainerNode[0].addEventListener('touchstart', function (e) {
                    start = e.changedTouches[0].pageX;
                });
                _this.$saleClueQueueContainerNode[0].addEventListener('touchend', function (e) {
                    end = e.changedTouches[0].pageX - start;
                    if (end > 0) {
                        console.info('手势向右滑动,滑动了' + end + 'px');
                    }
                    else {
                        console.info('手势向左滑动,滑动了' + (-end) + 'px');
                    }
                });
                this.$saleClueQueueContainerNode[0].addEventListener('scroll', function (e) {
                    var clientW = e.currentTarget.clientWidth; //可视宽度
                    var contentW = e.currentTarget.scrollWidth; //内容宽度
                    var scrollLeft = e.currentTarget.scrollLeft; //滚动的宽度
                    var condition = contentW - scrollLeft - clientW;
                    var $currentTarget = $(e.currentTarget);
                    //console.info('scoll condition: '+condition);
                    if (condition <= 40 && end < 0 && !_this.dataIsLoaded) {
                        var leftRefereshElement = $(_this.nodeTypeMap.get('saleClueQueueContainerNode')).find('.bui-pull-left-referesh')[0];
                        if (leftRefereshElement) {
                            if (leftRefereshElement.classList.contains("bui-pull-left-referesh")) {
                                _this.$saleClueQueueContainerNode[0].removeChild(leftRefereshElement);
                            }
                            setTimeout(function () {
                                if (!_this.dataIsLoadedComplete) {
                                    bui.BGlobal.PullLoadToast.show();
                                    $currentTarget.css('transform', 'translate(-50px)');
                                }
                            }, 10);
                            setTimeout(function () {
                                if (!_this.dataIsLoadedComplete) {
                                    bui.BGlobal.PullLoadToast.hide();
                                    $currentTarget.css('transform', 'translate(0px)');
                                }
                                _this.render();
                            }, 1000);
                        }
                    }
                });
            };
            /**
             * @description 初始化数据
             * @type 0表示创建，1表示转介给我
             */
            SaleClueQueue.prototype.initData = function (saleClueQueue, type) {
                this.saleClueQueue = saleClueQueue;
                this.saleClueQueue.sort(this.compare);
                //this.userRole = userRole;
                this.type = type;
                this.render();
            };
            SaleClueQueue.prototype.compare = function (saleClue1, saleClue2) {
                var date1 = new Date(saleClue1["INPUTDT"]).getTime();
                var date2 = new Date(saleClue2["INPUTDT"]).getTime();
                if (date1 < date2) {
                    return 1;
                }
                else if (date1 > date2) {
                    return -1;
                }
                else {
                    return 0;
                }
            };
            /**
             * @description 渲染视图
             */
            SaleClueQueue.prototype.render = function () {
                /*if(this.userRole == "2")
                {
                    $(this.nodeTypeMap.get('zhuanJieNode')).show();
                    $(this.nodeTypeMap.get('weiZhuanJieNode')).show();
                    $(this.nodeTypeMap.get('youXiaoNode')).show();
                    $(this.nodeTypeMap.get('wuXiaoNode')).show();
                    $(this.nodeTypeMap.get('weiQueRenNode')).show();
                }else if(this.userRole =="1"){
                   $(this.nodeTypeMap.get('zhuanJieNode')).show();
                    $(this.nodeTypeMap.get('weiZhuanJieNode')).show();
                    $(this.nodeTypeMap.get('youXiaoNode')).hide();
                    $(this.nodeTypeMap.get('wuXiaoNode')).hide();
                    $(this.nodeTypeMap.get('weiQueRenNode')).hide();
                }*/
                if (this.type == 0) {
                    $(this.nodeTypeMap.get('zhuanJieNode')).show();
                    $(this.nodeTypeMap.get('weiZhuanJieNode')).show();
                    $(this.nodeTypeMap.get('youXiaoNode')).show();
                    $(this.nodeTypeMap.get('wuXiaoNode')).show();
                    $(this.nodeTypeMap.get('weiQueRenNode')).show();
                }
                else if (this.type == 1) {
                    $(this.nodeTypeMap.get('zhuanJieNode')).hide();
                    $(this.nodeTypeMap.get('weiZhuanJieNode')).show();
                    $(this.nodeTypeMap.get('youXiaoNode')).show();
                    $(this.nodeTypeMap.get('wuXiaoNode')).show();
                    $(this.nodeTypeMap.get('weiQueRenNode')).show();
                }
                var _this = this;
                this.dataIsLoadedComplete = false;
                var loadedValifyNumber = 0;
                //加载数据时拆成两份进行加载
                var filterSaleClues = new Array();
                for (var i = 0; i < this.saleClueQueue.length; i++) {
                    if (this.saleClueQueue[i].STATUS == this.status[this.filterType]) {
                        filterSaleClues.push(this.saleClueQueue[i]);
                    }
                }
                if (filterSaleClues.length != 0) {
                    var complementation = filterSaleClues.length % 10;
                    if (filterSaleClues.length >= 10) {
                        for (var i = this.loadPosition; i < filterSaleClues.length - complementation; i++) {
                            var saleClueCard = new bui.SaleClueCard(filterSaleClues[i], this, i, this.filterType, this.type);
                            saleClueCard.statusIndex = this.filterType;
                            var $saleCardTemp = saleClueCard.getCard();
                            $saleCardTemp.appendTo(this.$saleClueQueueContainerNode);
                            if (filterSaleClues[i].STATUS == this.status[this.filterType]) {
                                loadedValifyNumber++;
                            }
                            this.loadPosition++;
                            if (loadedValifyNumber == 10) {
                                if (this.loadPosition != filterSaleClues.length - complementation) {
                                    if (filterSaleClues.length - this.loadPosition >= 10) {
                                        setTimeout(function () {
                                            _this.createTipExistDataTemp().appendTo(_this.$saleClueQueueContainerNode);
                                        }, 0);
                                    }
                                }
                                return;
                            }
                            if (this.loadPosition == this.saleClueQueue.length) {
                                this.dataIsLoaded = true;
                            }
                        }
                    }
                    var flag = false;
                    var tempLength = filterSaleClues.length < 10 ? 0 : filterSaleClues.length - complementation;
                    if (this.loadPosition == tempLength) {
                        for (var i = this.loadPosition; i < filterSaleClues.length; i++) {
                            var saleClueCard = new bui.SaleClueCard(filterSaleClues[i], this, i, this.filterType, this.type);
                            saleClueCard.statusIndex = this.filterType;
                            var $saleCardTemp = saleClueCard.getCard();
                            $saleCardTemp.appendTo(this.$saleClueQueueContainerNode);
                            this.loadPosition++;
                        }
                        flag = true;
                        setTimeout(function () {
                            _this.dataIsLoadedComplete = true;
                        }, 0);
                        if (filterSaleClues.length >= 10) {
                            this.createTipUnExistDataTemp().appendTo(this.$saleClueQueueContainerNode);
                        }
                    }
                }
            };
            SaleClueQueue.prototype.createTipExistDataTemp = function () {
                return $("<div class=\"bui-pull-left-referesh\"><div>\u5DE6\u62C9\u52A0\u8F7D\u6570\u636E</div></div>");
            };
            SaleClueQueue.prototype.createTipUnExistDataTemp = function () {
                return $("<div class=\"bui-pull-left-loaded\">\u6570\u636E\u5DF2\u52A0\u8F7D\u5B8C\u6210</div>");
            };
            /**
             * @description 重新渲染时，需要清除一些信息
             */
            SaleClueQueue.prototype.clear = function () {
                this.dataIsLoaded = false;
                this.loadPosition = 0;
                this.$saleClueQueueContainerNode.children().remove();
                this.$saleClueQueueContainerNode.children().off();
                this.$saleClueQueueContainerNode.children().empty();
            };
            /**
             * @description 获取当前位置
             */
            SaleClueQueue.prototype.getCurrentPosition = function () {
                return this.currentPosition;
            };
            /**
             * @description 设置当前位置
             */
            SaleClueQueue.prototype.setCurrentPosition = function (position) {
                this.currentPosition = position;
            };
            /**
             * @description 绑定事件集
             */
            SaleClueQueue.prototype.bindEvents = function () {
                var _this = this;
                //绑定菜单事件，可以通过点击不同的item进行联动显示数据
                $(this.$saleClueQueueNavTabsNode.children()[0]).addClass('bui-hallmanager-tab-title-checked');
                this.$saleClueQueueNavTabsNode.children().click(function () {
                    var that = this;
                    _this.clear();
                    var items = _this.$saleClueQueueNavTabsNode.children();
                    for (var i = 0; i < items.length; i++) {
                        if (that == items[i]) {
                            _this.setCurrentPosition(i);
                            _this.filterType = i;
                            _this.render();
                            $(that).addClass('bui-hallmanager-tab-title-checked');
                        }
                        else {
                            $(items[i]).removeClass('bui-hallmanager-tab-title-checked');
                        }
                    }
                });
            };
            /**
            * @description 选择要显示的队列
            * @index 根据索引值来显示
            */
            SaleClueQueue.prototype.checkedByIndex = function (index) {
                var _this = this;
                $(this.$saleClueQueueNavTabsNode.children()[0]).addClass('bui-hallmanager-tab-title-checked');
                this.clear();
                this.$saleClueQueueNavTabsNode.children().each(function (position) {
                    var that = this;
                    var items = _this.$saleClueQueueNavTabsNode.children();
                    if (index == position) {
                        _this.setCurrentPosition(index);
                        _this.filterType = position;
                        _this.render();
                        $(that).addClass('bui-hallmanager-tab-title-checked');
                    }
                    else {
                        $(items[position]).removeClass('bui-hallmanager-tab-title-checked');
                    }
                });
            };
            /**
           * @description 为salecluequeue组件绑定on事件
           * @type 事件类型
           * @callbackfn 回调函数
           */
            SaleClueQueue.prototype.on = function (type, callbackfn) {
                if (type == "click") {
                    this.clickCallBackFn = callbackfn;
                }
                else if (type == "change") {
                    this.changeCallBackFn = callbackfn;
                }
                btop.hui.EventProxy.inst.on(type + ".salecluequeue", callbackfn);
            };
            /**
             * @description 为salecluequeue组件绑定trigger事件
             * @type 事件类型
             * @callbackfn 回调函数
             */
            SaleClueQueue.prototype.trigger = function (type) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                btop.hui.EventProxy.inst.trigger(type + ".salecluequeue", args);
            };
            SaleClueQueue.prototype.unbind = function (type) {
                if (type == "click") {
                    btop.hui.EventProxy.inst.remove(type + ".salecluequeue", this.clickCallBackFn);
                }
                else if (type == "change") {
                    btop.hui.EventProxy.inst.remove(type + ".salecluequeue", this.changeCallBackFn);
                }
                return this;
            };
            SaleClueQueue.prototype.destroy = function () {
                btop.hui.EventProxy.inst.remove("change.salecluequeue", this.changeCallBackFn);
                btop.hui.EventProxy.inst.remove("click.salecluequeue", this.clickCallBackFn);
                _super.prototype.destroy.call(this);
            };
            return SaleClueQueue;
        }(btop.hui.Widget));
        bui.SaleClueQueue = SaleClueQueue;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  SaleClueCard
 * 描述  :  销售卡片
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/6/22
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../../../../libs/jQuery.d.ts"/>
///<reference path="../SaleQueue/SaleClueQueue.ts"/>
///<reference path="../../../../../event/BEvent.ts"/>
///<reference path="../../../../../util/EventUtils.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var SaleClueCard = (function () {
            /**
             * @cardInfo 卡片信息
             */
            function SaleClueCard(saleClue, attachSaleClueQueue, currentPosition, filterType, type) {
                this.saleClue = new bui.SaleClue(); //存储销售线索卡片信息
                this.status = ["未转介", "已转介", "有效", "无效", "未确认"];
                this.saleClue = saleClue;
                this.attachSaleClueQueue = attachSaleClueQueue;
                this.currentPosition = currentPosition;
                this.filterType = filterType;
                this.type = type;
            }
            /**
             * @description 展示
             */
            SaleClueCard.prototype.show = function () {
            };
            SaleClueCard.prototype.setStyle = function ($cardTmpt) {
                if (this.saleClue.STATUS == '未转介') {
                    $cardTmpt.css('background-image', "url('scripts/bns/images/card_red.png')");
                }
                else if (this.saleClue.STATUS == '已转介') {
                    $cardTmpt.css('background-image', "url('scripts/bns/images/card_orange.png')");
                }
                else if (this.saleClue.STATUS == '有效') {
                    $cardTmpt.css('background-image', "url('scripts/bns/images/card_green.png')");
                }
                else if (this.saleClue.STATUS == '无效') {
                    $cardTmpt.css('background-image', "url('scripts/bns/images/card_qing.png')");
                }
                else if (this.saleClue.STATUS == '未确认') {
                    $cardTmpt.css('background-image', "url('scripts/bns/images/card_zhi.png')");
                }
            };
            /**
             * @description 获取卡片模板容器
             */
            SaleClueCard.prototype.getCard = function () {
                var cardTemp = "<div class=\"bui-salecluecard-root\">\n                               <div class=\"bui-salecluecard-sub-root\">     \n                                 <div class=\"row\" style=\"center\">\n                                      <div class=\"col l12 m12 top-title\">" + this.saleClue.STATUS + "</div>  \n                                 </div>\n                                 <div class=\"row\" style=\"margin-top: 50px\">\n                                     <div class=\"mid-title\"></div>\n                                 </div>\n                                 <div class=\"row\">\n                                      <div class=\"col l5 m5 push-l2 push-m2\">\u5BA2\u6237\u59D3\u540D\uFF1A</div>\n                                      <div class=\"col l7 m7\">\n                                           <div>" + this.saleClue.CUSTNAME + "</div>\n                                       </div>\n                                 </div>\n                                 <div class=\"row\">\n                                       <div class=\"col l5 m5 push-l2 push-m2\">\n                                            <div><span>\u610F\u5411\u4EA7\u54C1\uFF1A</span></div>\n                                       </div>\n                                       <div class=\"col l7 m7\">\n                                             <div><span>" + this.saleClue.CUST_PRODNAME + "</span></div>\n                                       </div>\n                                 </div>\n                                 <div class=\"row\">\n                                        <div class=\"col l5 m5 push-l2  push-m2\">\u521B\u5EFA\u65E5\u671F:</div>\n                                        <div class=\"col l7\">\n                                             <div><span>" + this.saleClue.INPUTDT + "</span></div>\n                                        </div>\n                                 </div>\n                                   <div class=\"row\">\n                                        <div class=\"col l5 m5 push-l2 push-m2\">\u521B\u5EFA\u4EBA:</div>\n                                        <div class=\"col l7 m7\">\n                                             <div><span>" + this.saleClue.CEMPNAME + "</span></div>\n                                        </div>\n                                 </div>\n                                 " + (this.saleClue.STATUS == '已转介' && this.type == 1 ?
                    "<div class=\"row\">\n                                      <div class=\"col l2 m2 push-l8 push-m8\">\n                                            <div class=\"btn btn-cold bui-salecluecard-valuable-button\">\u6709\u6548</div>\n                                      </div>\n                                 </div>\n                                 <div class=\"row\">\n                                      <div class=\"col l2 m2 push-l8 push-m8\">\n                                            <div class=\"btn btn-danger bui-salecluecard-unvaluable-button\">\u65E0\u6548</div>\n                                      </div>\n                                 </div>"
                    : "") + "\n                               </div>        \n                            </div> ";
                var $cardTemp = $(cardTemp);
                this.setStyle($cardTemp);
                this.$saleClueCard = $cardTemp;
                this.filter();
                this.bindEvent();
                return $cardTemp;
            };
            /**
             * @description 绑定事件
             * @queueIndex 当前卡片在队列数组的索引下标
             * @ticketsIndex tickets队列数组中对应的队列索引下标
             * @callback 数据回调函数
             */
            SaleClueCard.prototype.bindEvent = function () {
                var _this = this;
                //初始化一些按钮对象
                this.$valuableBtn = this.$saleClueCard.find('.bui-salecluecard-valuable-button');
                //使销售线索变为有效操作
                this.$valuableBtn.unbind('click').on('click', function (e) {
                    bui.EventUtils.stopPropagation(e);
                    var newSaleClue = new bui.SaleClue();
                    newSaleClue.BRNAME = _this.saleClue.BRNAME;
                    newSaleClue.CEMPCODE = _this.saleClue.CEMPCODE;
                    newSaleClue.CEMPNAME = _this.saleClue.CEMPNAME;
                    newSaleClue.CERTNO = _this.saleClue.CERTNO;
                    newSaleClue.CERTTYPE = _this.saleClue.CERTTYPE;
                    newSaleClue.COMOC_STATE = _this.saleClue.COMOC_STATE;
                    newSaleClue.CONT_TEL_NO = _this.saleClue.CONT_TEL_NO;
                    newSaleClue.CUST_ID = _this.saleClue.CUST_ID;
                    newSaleClue.CUST_PRODID = _this.saleClue.CUST_PRODID;
                    newSaleClue.CUSTNAME = _this.saleClue.CUSTNAME;
                    newSaleClue.CUSTTYPE = _this.saleClue.CUSTTYPE;
                    newSaleClue.INPUTDT = _this.saleClue.INPUTDT;
                    newSaleClue.INTRDATE = _this.saleClue.INTRDATE;
                    newSaleClue.SERIALNO = _this.saleClue.SERIALNO;
                    newSaleClue.STATUS = _this.saleClue.STATUS;
                    newSaleClue.CUST_PRODNAME = _this.saleClue.CUST_PRODNAME;
                    newSaleClue.ZJEMPCODE = _this.saleClue.ZJEMPCODE;
                    newSaleClue.ZJEMPNAME = _this.saleClue.ZJEMPNAME;
                    newSaleClue.STATUS = '有效';
                    var transforData = {
                        saleClue: newSaleClue,
                        currentPosition: _this.currentPosition,
                        notifyUpdateView: _this.notifyUpdateView,
                        scope: _this
                    };
                    var bEvent = new bui.BEvent(e, transforData);
                    _this.attachSaleClueQueue.trigger('change', bEvent);
                });
                this.$saleClueCard.unbind('click').on('click', function (e) {
                    var transforData = {
                        saleClue: _this.saleClue,
                        fromQueue: _this.filterType
                    };
                    var bEvent = new bui.BEvent(e, transforData);
                    _this.attachSaleClueQueue.trigger('click', bEvent);
                    //hui.PageManager.to("btop.bui.XiaoShouXianSuoCreatePage",{saleClue:_this.saleClue,fromQueue:_this.filterType});
                });
                //使之无效按钮操作
                this.$unvaluableBtn = this.$saleClueCard.find('.bui-salecluecard-unvaluable-button');
                this.$unvaluableBtn.unbind('click').on('click', function (e) {
                    bui.EventUtils.stopPropagation(e);
                    var newSaleClue = new bui.SaleClue();
                    newSaleClue.BRNAME = _this.saleClue.BRNAME;
                    newSaleClue.CEMPCODE = _this.saleClue.CEMPCODE;
                    newSaleClue.CEMPNAME = _this.saleClue.CEMPNAME;
                    newSaleClue.CERTNO = _this.saleClue.CERTNO;
                    newSaleClue.CERTTYPE = _this.saleClue.CERTTYPE;
                    newSaleClue.COMOC_STATE = _this.saleClue.COMOC_STATE;
                    newSaleClue.CONT_TEL_NO = _this.saleClue.CONT_TEL_NO;
                    newSaleClue.CUST_ID = _this.saleClue.CUST_ID;
                    newSaleClue.CUST_PRODID = _this.saleClue.CUST_PRODID;
                    newSaleClue.CUSTNAME = _this.saleClue.CUSTNAME;
                    newSaleClue.CUSTTYPE = _this.saleClue.CUSTTYPE;
                    newSaleClue.INPUTDT = _this.saleClue.INPUTDT;
                    newSaleClue.INTRDATE = _this.saleClue.INTRDATE;
                    newSaleClue.SERIALNO = _this.saleClue.SERIALNO;
                    newSaleClue.CUST_PRODNAME = _this.saleClue.CUST_PRODNAME;
                    newSaleClue.STATUS = _this.saleClue.STATUS;
                    newSaleClue.ZJEMPCODE = _this.saleClue.ZJEMPCODE;
                    newSaleClue.ZJEMPNAME = _this.saleClue.ZJEMPNAME;
                    newSaleClue.STATUS = '无效';
                    var transforData = {
                        saleClue: newSaleClue,
                        currentPosition: _this.currentPosition,
                        notifyUpdateView: _this.notifyUpdateView,
                        scope: _this
                    };
                    var bEvent = new bui.BEvent(e, transforData);
                    _this.attachSaleClueQueue.trigger('change', bEvent);
                });
            };
            /**
             * @description 获得数据更新通知，来更新UI操作
             */
            SaleClueCard.prototype.notifyUpdateView = function () {
                this.$saleClueCard.remove();
                this.$saleClueCard.off();
                this.$saleClueCard.empty();
            };
            /**
          * @description 过滤条件
          * @customerFilter 传入的过滤条件
          */
            SaleClueCard.prototype.filter = function () {
                if (this.status[this.statusIndex] == this.saleClue.STATUS)
                    this.$saleClueCard.css('display', 'inline-block');
                else
                    this.$saleClueCard.hide();
            };
            Object.defineProperty(SaleClueCard.prototype, "statusIndex", {
                get: function () {
                    return this._statusIndex;
                },
                set: function (statusIndex) {
                    this._statusIndex = statusIndex;
                },
                enumerable: true,
                configurable: true
            });
            return SaleClueCard;
        }());
        bui.SaleClueCard = SaleClueCard;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  ToastTip
 * 描述  :  ToastTip控件
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/6/12
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../base/Button.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        /**
         * ToastTip提示框
         * @class ToastTip
         * @module btop.bui
         * @extends btop.bui.Widget
         *  */
        var ToastTip = (function (_super) {
            __extends(ToastTip, _super);
            function ToastTip() {
                _super.apply(this, arguments);
            }
            /**
            * 初始化组件视图，它是全局组件，默认是隐藏的
            * @method initView
            */
            ToastTip.prototype.initView = function () {
                this.hide();
                this.$toastTipOperiationsNode = $(this.nodeTypeMap.get('toastTipOperiationsNode'));
                this.$closeBtnNode = $(this.nodeTypeMap.get('closeBtnNode'));
                this.$toastTipOperiationsNode.hide();
                this.visible = false;
            };
            /**
             * 根据show内部数据来展现
             * @method show
             * @data {Object} 传输JSON数据，其中title为标题，content为内容
             * @return {Alert} 返回Alert对象
             */
            ToastTip.prototype.show = function (content) {
                var _this = this;
                this.render(content);
                this.bindEvents();
                this.show1();
                return this;
            };
            ToastTip.prototype.setOperationVisible = function (flag) {
                if (flag) {
                    this.$toastTipOperiationsNode.show();
                }
                else {
                    this.$toastTipOperiationsNode.hide();
                }
            };
            ToastTip.prototype.setWidth = function (width) {
                this.$rootNode.css('width', width);
            };
            /**
             * 根据data渲染界面
             * @method render
             * @data {JSON} 传输JSON数据，其中title为标题，content为内容
             * @private
             */
            ToastTip.prototype.render = function (content) {
                this.$rootNode = $(this.nodeTypeMap.get('toastTipRootNode'));
                this.$contentNode = $(this.nodeTypeMap.get('alertContentNode'));
                this.$contentNode.html(content);
            };
            /**
            * 为Alert节点绑定事件
            * @method bindEvents
            * @private
            */
            ToastTip.prototype.bindEvents = function () {
                var _this = this;
                //阻止事件冒泡
                this.$rootNode.unbind('click').on('click', function (e) {
                    bui.EventUtils.stopPropagation(e);
                });
            };
            /**
            * 仅提供显示，以及动画操作，是个辅助操作
            * @method show1
            * @private
            */
            ToastTip.prototype.show1 = function () {
                var _this = this;
                this.visible = true;
                $(this.domNode).addClass('bui-alert-animate-opacity');
                $(this.domNode).addClass('bui-alert-animate-delete-opacity');
                setTimeout(function () {
                    $(_this.domNode).addClass('bui-alert-animate-add-opacity');
                }, 0);
            };
            /**
           * 仅提供隐藏，以及动画操作
           * @method hide
           */
            ToastTip.prototype.hide = function () {
                var _this = this;
                $(_this.domNode).removeClass('bui-alert-animate-add-opacity');
                setTimeout(function () {
                    _this.visible = false;
                }, 300);
            };
            return ToastTip;
        }(btop.hui.Widget));
        bui.ToastTip = ToastTip;
        var ToastTipBtn = (function (_super) {
            __extends(ToastTipBtn, _super);
            function ToastTipBtn(type) {
                _super.call(this, 'toasttipbtn', type);
            }
            return ToastTipBtn;
        }(bui.Button));
        bui.ToastTipBtn = ToastTipBtn;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
/************************************************************************
 * 类名  :  ToastTip
 * 描述  :  ToastTip控件
 * 版本  :  v1.0
 * 作者  :  wangxinlu
 * 时间  :  2016/6/12
 ************************************************************************
 * Copyright @ bankit 2016 . All rights reserved.
 ************************************************************************/
///<reference path="../../../../../btop/btop.hui.d.ts"/>
///<reference path="../../../base/Button.ts"/>
///<reference path="../ToastTip/ToastTip.ts"/>
var btop;
(function (btop) {
    var bui;
    (function (bui) {
        var ComplexToastTip = (function (_super) {
            __extends(ComplexToastTip, _super);
            function ComplexToastTip() {
                _super.apply(this, arguments);
                this.closeBtn = new ComplexToastTipBtn('closeBtn'); //按钮，及通过此按钮暴露到调用UI，可以执行对应的事件
            }
            /**
            * 初始化组件视图，它是全局组件，默认是隐藏的
            * @method initView
            */
            ComplexToastTip.prototype.initView = function () {
                this.hide();
                this.$toastTipOperiationsNode = $(this.nodeTypeMap.get('toastTipOperiationsNode'));
                this.$closeBtnNode = $(this.nodeTypeMap.get('closeBtnNode'));
                this.visible = false;
            };
            /**
             * 根据show内部数据来展现
             * @method show
             * @data {Object} 传输JSON数据，其中title为标题，content为内容
             * @return {Alert} 返回Alert对象
             */
            ComplexToastTip.prototype.show = function (content) {
                var _this = this;
                this.render(content);
                this.bindEvents();
                this.show1();
                return this;
            };
            /**
             * 根据data渲染界面
             * @method render
             * @data {JSON} 传输JSON数据，其中title为标题，content为内容
             * @private
             */
            ComplexToastTip.prototype.render = function (content) {
                this.$rootNode = $(this.nodeTypeMap.get('toastTipRootNode'));
                this.$contentNode = $(this.nodeTypeMap.get('alertContentNode'));
                this.$contentNode.html(content);
            };
            /**
            * 为Alert节点绑定事件
            * @method bindEvents
            * @private
            */
            ComplexToastTip.prototype.bindEvents = function () {
                var _this = this;
                //阻止事件冒泡
                this.$rootNode.unbind('click').on('click', function (e) {
                    bui.EventUtils.stopPropagation(e);
                });
                this.$closeBtnNode.unbind('click').on('click', function (e) {
                    var event = new bui.BEvent(e, { data: "cancel" });
                    _this.closeBtn.trigger('click', event);
                });
            };
            /**
            * 仅提供显示，以及动画操作，是个辅助操作
            * @method show1
            * @private
            */
            ComplexToastTip.prototype.show1 = function () {
                var _this = this;
                this.visible = true;
                $(this.domNode).addClass('bui-alert-animate-opacity');
                $(this.domNode).addClass('bui-alert-animate-delete-opacity');
                setTimeout(function () {
                    $(_this.domNode).addClass('bui-alert-animate-add-opacity');
                }, 0);
            };
            /**
           * 仅提供隐藏，以及动画操作
           * @method hide
           */
            ComplexToastTip.prototype.hide = function () {
                var _this = this;
                $(_this.domNode).removeClass('bui-alert-animate-add-opacity');
                setTimeout(function () {
                    _this.visible = false;
                }, 300);
            };
            return ComplexToastTip;
        }(btop.hui.Widget));
        bui.ComplexToastTip = ComplexToastTip;
        var ComplexToastTipBtn = (function (_super) {
            __extends(ComplexToastTipBtn, _super);
            function ComplexToastTipBtn(type) {
                _super.call(this, 'complextoasttipbtn', type);
            }
            return ComplexToastTipBtn;
        }(bui.Button));
        bui.ComplexToastTipBtn = ComplexToastTipBtn;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=btop.bui.js.map