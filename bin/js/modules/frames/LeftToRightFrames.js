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
var LeftToRightFrames = /** @class */ (function (_super) {
    __extends(LeftToRightFrames, _super);
    function LeftToRightFrames(startFrame, endFrame, y, view, handler) {
        var _this = _super.call(this, startFrame, endFrame, view, handler) || this;
        _this._view = view;
        _this._view.y = y;
        return _this;
    }
    LeftToRightFrames.prototype.onUpdate = function () {
        _super.prototype.onUpdate.call(this);
        this._view.x = this.frames * 20;
    };
    LeftToRightFrames.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    return LeftToRightFrames;
}(BaseFrames));
//# sourceMappingURL=LeftToRightFrames.js.map