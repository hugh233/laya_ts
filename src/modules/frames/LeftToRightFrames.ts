class LeftToRightFrames extends BaseFrames
{
    constructor(startFrame: number, endFrame:number, y: number, view: Laya.View, handler: Laya.Handler)
    {
        super(startFrame, endFrame, view, handler)
        this._view = view
        this._view.y = y
    }

    public onUpdate()
    {
        super.onUpdate()
        this._view.x = this.frames * 20
    }

    public onDestroy()
    {
        super.onDestroy()
    }
}