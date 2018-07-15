var RoundBroadcastController = /** @class */ (function () {
    function RoundBroadcastController() {
        this._view = new RoundBroadcastView();
        this.initView();
    }
    RoundBroadcastController.prototype.initView = function () {
        this._view.setType(BattleMgr.getInstance().getType());
        this._view.setRound(BattleMgr.getInstance().getRoundId() + 1);
    };
    RoundBroadcastController.prototype.getView = function () {
        return this._view;
    };
    return RoundBroadcastController;
}());
//# sourceMappingURL=RoundBroadcastController.js.map