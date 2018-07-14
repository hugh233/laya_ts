class MainController
{
    private _view: MainView = new MainView()
    constructor()
    {
        this.addListener()
    }

    public getView()
    {
        return this._view
    }

    public showView()
    {
        this._view.visible = true
    }

    public hideView()
    {
        this._view.visible = false
    }

    private testFunc(data1, data2, data3)
    {
        console.log("testFunc Run", data1, data2, data3, Laya.Event.RESIZE)
    }

    private onClickTest()
    {
        EventMgr.getInstance().event("testFunc", [1,2,3])
    }

    private addListener()
    {
        EventMgr.getInstance().on("testFunc", this, this.testFunc)

        this._view.mpTextScore.on(Laya.Event.MOUSE_DOWN, this, this.onEnterBattle)
        this._view.mpTextGold.on(Laya.Event.MOUSE_DOWN, this, this.onEnterBattle)
        this._view.mpTextTest.on(Laya.Event.MOUSE_DOWN, this, this.onClickTest)
    }

    private removeListener()
    {
        EventMgr.getInstance().off("testFunc", this, this.testFunc)

        this._view.mpTextScore.off(Laya.Event.MOUSE_DOWN, this, this.onEnterBattle)
        this._view.mpTextGold.off(Laya.Event.MOUSE_DOWN, this, this.onEnterBattle)
        this._view.mpTextTest.off(Laya.Event.MOUSE_DOWN, this, this.onClickTest)
    }

    private onEnterBattle()
    {
        (GameMgr.getInstance().getCurScene() as MainController).hideView()
        var matchController: MatchController = new MatchController()
        matchController.getView().name = "MatchController"
        Laya.stage.addChild(matchController.getView())
    }
}