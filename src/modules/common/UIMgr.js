var UIMgr = /** @class */ (function () {
    function UIMgr() {
        this._views = [];
        this._hideViews = [];
    }
    UIMgr.getInstance = function () {
        if (this.ins == null) {
            this.ins = new UIMgr();
        }
        return this.ins;
    };
    UIMgr.prototype.openUI = function (type, obj, call) {
        var hide = false;
        var ui;
    };
    return UIMgr;
}());
//# sourceMappingURL=UIMgr.js.map