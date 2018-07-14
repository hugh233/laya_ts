class GameMgr
{
    private static _ins: GameMgr
    private _curScene: any
    constructor()
    {

    }

    public static getInstance()
    {
        if (this._ins == null)
        {
            this._ins = new GameMgr()
        }
        return this._ins
    }

    public setCurScene(ctrl: any)
    {
        this._curScene = ctrl
    }

    public getCurScene()
    {
        return this._curScene
    }
}