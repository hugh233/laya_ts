class UIMgr
{
    private _views: BaseView[] = []
    private _hideViews: BaseView[] = []

    private static ins:UIMgr
    constructor()
    {
        
    }

    public static getInstance():UIMgr
    {
        if(this.ins == null)
        {
            this.ins = new UIMgr()
        }
        return this.ins
    }

    public openUI(type: ViewType, obj: any[], call: Laya.Handler)
    {
        var hide: boolean = false
        var ui:BaseView
        
    }
}