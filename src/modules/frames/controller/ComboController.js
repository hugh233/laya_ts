var ComboController = /** @class */ (function () {
    function ComboController() {
        this._view = new ComboView();
        this.initData();
    }
    ComboController.prototype.getView = function () {
        return this._view;
    };
    ComboController.prototype.initData = function () {
        this._view.setComboCount(BattleMgr.getInstance().getComboCount());
    };
    return ComboController;
}());
//# sourceMappingURL=ComboController.js.map