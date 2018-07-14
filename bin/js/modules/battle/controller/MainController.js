var MainController = /** @class */ (function () {
    function MainController() {
        this._view = new MainView();
        this.addListener();
    }
    MainController.prototype.getView = function () {
        return this._view;
    };
    MainController.prototype.showView = function () {
        this._view.visible = true;
    };
    MainController.prototype.hideView = function () {
        this._view.visible = false;
    };
    MainController.prototype.testFunc = function (data1, data2, data3) {
        console.log("testFunc Run", data1, data2, data3, Laya.Event.RESIZE);
    };
    MainController.prototype.onClickTest = function () {
        EventMgr.getInstance().event("testFunc", [1, 2, 3]);
    };
    MainController.prototype.addListener = function () {
        EventMgr.getInstance().on("testFunc", this, this.testFunc);
        this._view.mpTextScore.on(Laya.Event.MOUSE_DOWN, this, this.onEnterBattle);
        this._view.mpTextGold.on(Laya.Event.MOUSE_DOWN, this, this.onEnterBattle);
        this._view.mpTextTest.on(Laya.Event.MOUSE_DOWN, this, this.onClickTest);
    };
    MainController.prototype.removeListener = function () {
        EventMgr.getInstance().off("testFunc", this, this.testFunc);
        this._view.mpTextScore.off(Laya.Event.MOUSE_DOWN, this, this.onEnterBattle);
        this._view.mpTextGold.off(Laya.Event.MOUSE_DOWN, this, this.onEnterBattle);
        this._view.mpTextTest.off(Laya.Event.MOUSE_DOWN, this, this.onClickTest);
    };
    MainController.prototype.onEnterBattle = function () {
        GameMgr.getInstance().getCurScene().hideView();
        var matchController = new MatchController();
        matchController.getView().name = "MatchController";
        Laya.stage.addChild(matchController.getView());
    };
    return MainController;
}());
//# sourceMappingURL=MainController.js.map