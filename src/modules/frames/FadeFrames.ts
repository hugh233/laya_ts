class FadeFrames extends BaseFrames
{
    constructor(startFrame:number, endframe:number, view?: Laya.View, handler?: Laya.Handler)
    {
        super(startFrame, endframe, view, handler)
        this._view = view
    }

    public onStart()
    {
        super.onStart()
        this._view.alpha = 0
    }

    public setViewPosition(x:number, y:number)
    {
        this._view.x = x
        this._view.y = y
    }

    public onUpdate()
    {
        super.onUpdate()
        if(this._view.alpha < 1)
        {
            this._view.alpha = this.frames / (this._endFrame / 2)  
        }
    } 

    public onDestroy()
    {
        super.onDestroy()
    }
}