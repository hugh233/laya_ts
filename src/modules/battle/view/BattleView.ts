class BattleView extends ui.battle.BattleViewUI
{
    private _showType: number = 1
    constructor()
    {
        super()
        this.initView()
    }

    private initView()
    {
        this.mpTextTime.text = "10"
        this.mpNumSelf.text = "0"
        this.mpNumEnemy.text = "0"
        this.mpProSelf.height = 0
        this.mpProEnemy.height = 0
    }

    public getShowBox(type: number): Laya.Box
    {
        this._showType = type
        if(type == 2)
        {
            this.mpBoxImg.visible = true
            this.mpBoxText.visible = false
            return this.mpBoxImg
        }
        else
        {
            this.mpBoxImg.visible = false
            this.mpBoxText.visible = true
            return this.mpBoxText
        }
    }

    public getResultImg()
    {
        // var tempImg: Laya.Image = new Image()
    }

    public showAnswerBox(isShow: boolean, type:number)
    {
        let showBox = this.getShowBox(type) as Laya.Box
        showBox.visible = isShow
        this.mpBgSelf.visible = isShow
        this.mpBgEnemy.visible = isShow
    }

    public showBattleStart(handler: Laya.Handler)
    {
        let tempSelfX = this.mpBoxSelf.x
        this.mpBoxSelf.x = tempSelfX - this.mpBoxSelf.width
        this.mpBoxSelf.alpha = 0

        let tempEnemyX = this.mpBoxEnemy.x
        this.mpBoxEnemy.x = tempEnemyX + this.mpBoxEnemy.width
        this.mpBoxEnemy.alpha = 0

        let tempTimeY = this.mpImgBgTime.y
        this.mpImgBgTime.y = tempTimeY - this.mpImgBgTime.height
        this.mpImgBgTime.alpha = 0

        Laya.Tween.to(this.mpBoxSelf, {x: tempSelfX, alpha: 1}, 1000, Laya.Ease.bounceOut, handler)
        Laya.Tween.to(this.mpBoxEnemy, {x: tempEnemyX, alpha: 1}, 1000, Laya.Ease.bounceOut)
        Laya.Tween.to(this.mpImgBgTime, {y: tempTimeY, alpha: 1}, 1000, Laya.Ease.backInOut)
    }

    public showTitleAndPro( type:number, handler?: Laya.Handler)
    {
        let showBox = this.getShowBox(type)
        let titleBox = showBox.getChildByName("mpBoxTitle") as Laya.Box
        titleBox.alpha = 0

        this.mpBoxSelf.alpha = 0
        this.mpBoxEnemy.alpha = 0
        Laya.Tween.to(titleBox, {alpha: 1}, 1000, null, handler)
        Laya.Tween.to(this.mpBoxSelf, {alpha: 1}, 1000)
        Laya.Tween.to(this.mpBoxEnemy, {alpha: 1}, 1000)
    }

    public showRoundStart(handler?: Laya.Handler)
    {

    }

    public setSelfPro(score)
    {
        this.mpProSelf.visible = score > 0
        this.mpProSelf.height = this.mpBgSelf.height * (score / 1200)
    }

    public setEnemyPro(score)
    {
        this.mpProEnemy.visible = score > 0
        this.mpProEnemy.height = this.mpBgEnemy.height * (score / 1200)
    }

    public setTime(time)
    {
        this.mpTextTime.text = time + ""
    }
}