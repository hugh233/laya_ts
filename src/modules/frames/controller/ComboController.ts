class ComboController
{
    private _view: ComboView
    constructor()
    {
        this._view = new ComboView()
        this.initData()
    }

    public getView()
    {
        return this._view
    }

    private initData()
    {
        this._view.setComboCount(BattleMgr.getInstance().getComboCount())
    }
}