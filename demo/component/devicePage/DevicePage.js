var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by wangxinlu on 2016/6/3.
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
        var Native = btop.hui.Native;
        var DevicePage = (function (_super) {
            __extends(DevicePage, _super);
            function DevicePage() {
                _super.apply(this, arguments);
            }
            DevicePage.prototype.initView = function () {
                $(this.nodeTypeMap.get('getIDCardInfo')).click(function () {
                    var delResult = Native.syncCall("IDCardService", "getIDCardInfo", ["30"]);
                    alert(delResult);
                });
                $(this.nodeTypeMap.get('getIDFullInfo')).click(function () {
                    var delResult = Native.syncCall("IDCardService", "getIDFullInfo", ["30"]);
                    alert(delResult);
                });
                $(this.nodeTypeMap.get('readPin')).click(function () {
                    var delResult = Native.syncCall("PwdKeyPadService", "readPin", [1, 6, "20"]);
                    alert(delResult);
                });
                $(this.nodeTypeMap.get('keyAffusePin')).click(function () {
                    var delResult = Native.syncCall("PwdKeyPadService", "keyAffusePin", [["1111111", "11111111", "2222222"]]);
                    alert(delResult);
                });
                $(this.nodeTypeMap.get('getSignature')).click(function () {
                    var delResult = Native.syncCall("SignService", "getSignature", ["30"]);
                    alert(delResult);
                });
                $(this.nodeTypeMap.get('keyAffuse')).click(function () {
                    var delResult = Native.syncCall("SignService", "keyAffuse", [["1111111", "11111111", "2222222"]]);
                    alert(delResult);
                });
                $(this.nodeTypeMap.get('getBookAcct')).click(function () {
                    var delResult = Native.syncCall("RDCardService", "getBookAcct", ["30"]);
                    alert(delResult);
                });
            };
            return DevicePage;
        })(Page);
        bui.DevicePage = DevicePage;
    })(bui = btop.bui || (btop.bui = {}));
})(btop || (btop = {}));
//# sourceMappingURL=DevicePage.js.map