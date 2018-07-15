var AccountController = /** @class */ (function () {
    function AccountController() {
        this._view = new AccountView();
        this.addListener();
        this.initView();
    }
    AccountController.prototype.getView = function () {
        return this._view;
    };
    AccountController.prototype.initView = function () {
        this._view.setResult(BattleMgr.getInstance().getSelfScore());
    };
    AccountController.prototype.addListener = function () {
        this._view.mpBtnBack.on(Laya.Event.MOUSE_DOWN, this, this.onButtonClickBack);
        this._view.mpBtnAgain.on(Laya.Event.MOUSE_DOWN, this, this.onButtonClickAgain);
    };
    AccountController.prototype.removeListener = function () {
        this._view.mpBtnBack.off(Laya.Event.MOUSE_DOWN, this, this.onButtonClickBack);
        this._view.mpBtnAgain.off(Laya.Event.MOUSE_DOWN, this, this.onButtonClickAgain);
    };
    AccountController.prototype.onButtonClickBack = function () {
        this.onDestroy();
        var temp = GameMgr.getInstance().getCurScene();
        temp.showView();
    };
    AccountController.prototype.onButtonClickAgain = function () {
        this.onDestroy();
        BattleMgr.getInstance().enterBattle();
    };
    AccountController.prototype.onDestroy = function () {
        this.removeListener();
        this._view.removeSelf();
    };
    return AccountController;
}());
//# sourceMappingURL=AccountController.js.map