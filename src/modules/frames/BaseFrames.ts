class BaseFrames
{
    protected frames: number
    protected _startFrame:number
    protected _endFrame:number
    protected _handler: Laya.Handler
    protected _view: Laya.View

    constructor(startFrame: number, endFrame: number, view?: Laya.View, handler?: Laya.Handler)
    {
        this.frames = 0
        this._endFrame = endFrame
        this._startFrame = startFrame
        this._handler = handler
        this._view = view
        Laya.timer.loop(1, this, this.onUpdate)
    }

    protected onUpdate()
    {
        this.frames++
        if (this.frames == this._startFrame)
        {
            this.onStart()
        }
        if(this.frames == this._endFrame)
        {
            if(this._handler != null)
            {
                this._handler.run()
            }
            this.onDestroy()
        }
    }

    protected onStart()
    {
        if(this._view != null)
        {
            Laya.stage.addChild(this._view)
        }
    }

    protected onDestroy()
    {
        if (this._view != null)
        {
            this._view.removeSelf()
        }
    }
}