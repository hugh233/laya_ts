var BaseFrames = /** @class */ (function () {
    function BaseFrames(startFrame, endFrame, view, handler) {
        this.frames = 0;
        this._endFrame = endFrame;
        this._startFrame = startFrame;
        this._handler = handler;
        this._view = view;
        Laya.timer.loop(1, this, this.onUpdate);
    }
    BaseFrames.prototype.onUpdate = function () {
        this.frames++;
        if (this.frames == this._startFrame) {
            this.onStart();
        }
        if (this.frames == this._endFrame) {
            if (this._handler != null) {
                this._handler.run();
            }
            this.onDestroy();
        }
    };
    BaseFrames.prototype.onStart = function () {
        if (this._view != null) {
            Laya.stage.addChild(this._view);
        }
    };
    BaseFrames.prototype.onDestroy = function () {
        if (this._view != null) {
            this._view.removeSelf();
        }
    };
    return BaseFrames;
}());
//# sourceMappingURL=BaseFrames.js.map