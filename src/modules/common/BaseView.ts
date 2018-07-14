class BaseView extends laya.ui.View implements IResize
{
    constructor()
    {
        super()
    }

    public onResize(_bestFitWidth: number, _bestHeight: number):void
    {
        console.log("onResize Run")
    }

}