var GameMgr = /** @class */ (function () {
    function GameMgr() {
    }
    GameMgr.getInstance = function () {
        if (this._ins == null) {
            this._ins = new GameMgr();
        }
        return this._ins;
    };
    GameMgr.prototype.setCurScene = function (ctrl) {
        this._curScene = ctrl;
    };
    GameMgr.prototype.getCurScene = function () {
        return this._curScene;
    };
    return GameMgr;
}());
//# sourceMappingURL=GameMgr.js.map