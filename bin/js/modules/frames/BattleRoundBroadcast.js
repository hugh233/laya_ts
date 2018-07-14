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
var BattleRoundBroadcast = /** @class */ (function (_super) {
    __extends(BattleRoundBroadcast, _super);
    function BattleRoundBroadcast() {
        return _super.call(this) || this;
    }
    BattleRoundBroadcast.prototype.onUpdate = function () {
        _super.prototype.onUpdate.call(this);
        console.log("onUpdate -> ", this.frames);
    };
    return BattleRoundBroadcast;
}(BaseFrames));
//# sourceMappingURL=BattleRoundBroadcast.js.map