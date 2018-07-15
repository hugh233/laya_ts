var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EventMgr = /** @class */ (function (_super) {
    __extends(EventMgr, _super);
    function EventMgr() {
        return _super.call(this) || this;
    }
    EventMgr.getInstance = function () {
        if (this._ins == null) {
            this._ins = new EventMgr();
        }
        return this._ins;
    };
    return EventMgr;
}(laya.events.EventDispatcher));
//# sourceMappingURL=EventMgr.js.map