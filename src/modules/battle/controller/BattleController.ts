class BattleController
{
    private _view = new BattleView()

    private _frames: number = 0
    private _frameSec: number = 0
    private _timeSec: number = 0
    private _selfScore: number = 0
    private _enemyScore: number = 0
    private _showBox:Laya.Box
    private _isTrue:boolean
    private _data:BattleDataVO
    private _isSelect:boolean

    constructor()
    {
        this.initData()
        this.initView()
        this.tweenShow()
        this.addListener()
    }

    private tweenShow()
    {
        this.showAnswerBox(false)
        this._view.showBattleStart(Laya.Handler.create(this, this.showComplete))
    }

    private showComplete()
    {
        console.log("showComplete Run")
        BattleMgr.getInstance().showRoundBroadcastView()
    }

    private init()
    {
        this._showBox = this._view.getShowBox(this._data.type)
    }

    public onUpdate()
    {
        this._frames++
        this._frameSec++
        if(this._frameSec >= 60)
        {
            this._frameSec = 0
            this._timeSec--
            this._view.setTime(this._timeSec)
        }
        if(this._timeSec <= 0)
        {
            BattleMgr.getInstance().battlePause()
            BattleMgr.getInstance().resetCombo()
            Laya.timer.once(500, this, this.reqNextRound)
        }
    }

    public showAnswerBox(isShow: boolean, handler?: Laya.Handler)
    {
        this._view.showAnswerBox(isShow, this._data.type)
        // this._view.showAnswerBox(false, this._data.type)
        // if(isShow)
        // {
        //     this._view.showTitleAndPro(this._data.type, Laya.Handler.create(this, this.showAnswerBoxComplete, [handler]))
        // }
    }

    private showAnswerBoxComplete(handler?: Laya.Handler)
    {
        this._view.showAnswerBox(true, this._data.type)
        if (handler != null)
        {
            handler.run()
        }
    }

    private initData()
    {
        this._isTrue = false
        this._isSelect = false
        this._timeSec = 10
        this._frameSec = 0
        this._data = BattleMgr.getInstance().getDataByRoundId(BattleMgr.getInstance().getRoundId()) as BattleDataVO
        if(this._data == null)
        {
            console.log("the _data is null roundId = ", BattleMgr.getInstance().getRoundId())
        }
    }

    public getView()
    {
        return this._view
    }

    private initView()
    {
        this._showBox = this._view.getShowBox(this._data.type)
        this._view.setTime(10)
        this.initAnswerView(this._showBox)
        this.calcScore()
    }

    private initPro()
    {
        this._view.setSelfPro(this._selfScore)
        this._view.setEnemyPro(this._enemyScore)
    }

    private initAnswerView(box: Laya.Box)
    {
        let mpBoxTitle: Laya.Box = box.getChildByName("mpBoxTitle") as Laya.Box
        let mpTextTitle: Laya.Label = mpBoxTitle.getChildByName("mpTextTitle") as Laya.Label
        mpTextTitle.text = this._data.desc
        let answers: string[] = this._data.answer.split("|")

        for(let i = 0; i <= 3; i++)
        {
            let mpBtn = box.getChildByName("mpBtn" + i) as Laya.Button
            let mpText = mpBtn.getChildByName("mpText") as Laya.Label
            if(mpBtn == null)
            {
                console.log("mpBtn is null")
            }

            if (mpText == null)
            {
                console.log("mpText is null")
            }
            mpText.text = answers[i]
            mpBtn.on(Laya.Event.MOUSE_DOWN, this, this.onButtonClick, [mpBtn, answers[i], this._data.aim])
        }
    }

    private onButtonClick(btn:Laya.Button, text:string, aim: string)
    {
        if(this._isSelect)
        {
            console.log("onButtonClick has Select")
            return
        }
        this._isSelect = true
        let mpImg = btn.getChildByName("mpImg") as Laya.Image
        if(text == aim)
        {
            this._isTrue = true
            BattleMgr.getInstance().addCombo()
            mpImg.skin = "battle/Box_Answer_01.png"
        }else
        {
            BattleMgr.getInstance().resetCombo()
            mpImg.skin = "battle/Box_Answer_02.png"
        }
        this.calcScore()
        BattleMgr.getInstance().showComboView()
        Laya.timer.once(500, this, this.reqNextRound)
    }

    private reqNextRound()
    {
        BattleMgr.getInstance().showRoundBroadcastView()
    }

    public onNextRound()
    {
        this.removeBtnListener()
        this.initData()
        this.initView()
        BattleMgr.getInstance().addRoundId()
    }

    private calcScore():void
    {
        var step = 20
        if (BattleMgr.getInstance().getRoundId() > 4)
        {
            step = 40
        }
        if(this._isTrue)
        {
            this._selfScore = this._selfScore + this._timeSec * step
        }
        this._view.mpNumSelf.text = this._selfScore + ""
        this._view.mpNumEnemy.text = this._enemyScore + ""
        BattleMgr.getInstance().setSelfScore(this._selfScore)
        this.initPro()        
    }

    private removeBtnListener()
    {
        for(let i = 0; i <= 3; i++)
        {
            let mpBtn = this._showBox.getChildByName("mpBtn" + i) as Laya.Button
            let mpImg = mpBtn.getChildByName("mpImg") as Laya.Image
            if (mpBtn != null)
            {
                mpImg.skin = "battle/Box_Answer_03.png"
                mpBtn.off(Laya.Event.MOUSE_DOWN, this, this.onButtonClick)
            }
        }
    }

    private addListener()
    {
        this._view.mpImgSelf.on(Laya.Event.MOUSE_DOWN, this, this.onExit)
    }

    private removeListener()
    {
        this._view.mpImgSelf.off(Laya.Event.MOUSE_DOWN, this, this.onExit)
    }

    private onExit()
    {
        console.log("onExitRoundId -> ", BattleMgr.getInstance().getRoundId())
        BattleMgr.getInstance().exitBattle()
    }

    public onDestroy()
    {
        this.removeListener()
        this._view.removeChildren()
        this._view.removeSelf()
    }
}