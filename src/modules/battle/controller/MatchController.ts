class MatchController
{
    private _view = new MatchView()
    constructor()
    {
        this.initData()
    }
    private initData()
    {
        Laya.timer.once(1500, this, this.enterBattle)
    }

    public getView()
    {
        return this._view
    }

    private enterBattle()
    {
        this.removeSelfView()
        BattleMgr.getInstance().enterBattle()
    }

    private removeSelfView()
    {
        this._view.removeSelf()
    }
}