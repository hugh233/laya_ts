var MatchController = /** @class */ (function () {
    function MatchController() {
        this._view = new MatchView();
        this.initData();
    }
    MatchController.prototype.initData = function () {
        Laya.timer.once(1500, this, this.enterBattle);
    };
    MatchController.prototype.getView = function () {
        return this._view;
    };
    MatchController.prototype.enterBattle = function () {
        this.removeSelfView();
        BattleMgr.getInstance().enterBattle();
    };
    MatchController.prototype.removeSelfView = function () {
        this._view.removeSelf();
    };
    return MatchController;
}());
//# sourceMappingURL=MatchController.js.map