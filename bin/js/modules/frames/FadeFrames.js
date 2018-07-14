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
var FadeFrames = /** @class */ (function (_super) {
    __extends(FadeFrames, _super);
    function FadeFrames(startFrame, endframe, view, handler) {
        var _this = _super.call(this, startFrame, endframe, view, handler) || this;
        _this._view = view;
        return _this;
    }
    FadeFrames.prototype.onStart = function () {
        _super.prototype.onStart.call(this);
        this._view.alpha = 0;
    };
    FadeFrames.prototype.setViewPosition = function (x, y) {
        this._view.x = x;
        this._view.y = y;
    };
    FadeFrames.prototype.onUpdate = function () {
        _super.prototype.onUpdate.call(this);
        if (this._view.alpha < 1) {
            this._view.alpha = this.frames / (this._endFrame / 2);
        }
    };
    FadeFrames.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    return FadeFrames;
}(BaseFrames));
//# sourceMappingURL=FadeFrames.js.map