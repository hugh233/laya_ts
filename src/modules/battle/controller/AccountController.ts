class AccountController
{
    private _view: AccountView = new AccountView()
    constructor()
    {
        this.addListener()
        this.initView()
    }

    public getView()
    {
        return this._view
    }

    private initView()
    {
        this._view.setResult(BattleMgr.getInstance().getSelfScore())
    }

    private addListener()
    {
        this._view.mpBtnBack.on(Laya.Event.MOUSE_DOWN, this, this.onButtonClickBack)
        this._view.mpBtnAgain.on(Laya.Event.MOUSE_DOWN, this, this.onButtonClickAgain)
    }

    private removeListener()
    {
        this._view.mpBtnBack.off(Laya.Event.MOUSE_DOWN, this, this.onButtonClickBack)
        this._view.mpBtnAgain.off(Laya.Event.MOUSE_DOWN, this, this.onButtonClickAgain)
    }

    private onButtonClickBack()
    {
        this.onDestroy()
        var temp: MainController = GameMgr.getInstance().getCurScene()
        temp.showView()
    }

    private onButtonClickAgain()
    {
        this.onDestroy()
        BattleMgr.getInstance().enterBattle()
    }

    public onDestroy()
    {
        this.removeListener()
        this._view.removeSelf()
    }
}