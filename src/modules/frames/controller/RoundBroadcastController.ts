class RoundBroadcastController
{
    private _view: RoundBroadcastView = new RoundBroadcastView()
    constructor()
    {
        this.initView()   
    }

    private initView()
    {
        this._view.setType(BattleMgr.getInstance().getType())
        this._view.setRound(BattleMgr.getInstance().getRoundId()+1)
    }

    public getView()
    {
        return this._view
    }
}