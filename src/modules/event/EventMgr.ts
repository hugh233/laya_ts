class EventMgr extends laya.events.EventDispatcher
{
    private static _ins: EventMgr
    constructor()
    {
        super()
    }

    public static getInstance()
    {
        if (this._ins == null)
        {
            this._ins = new EventMgr()
        }
        return this._ins
    }
}