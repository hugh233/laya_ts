/*------------------------------------------------------------------------------------------
--
--　　　　　　　┏┓　　　┏┓+ +
--　　　　　　┏┛┻━━━┛┻┓ + +
--　　　　　　┃　　　　　　　┃ 　
--　　　　　　┃　　　━　　　┃ ++ + + +
--　　　　　 ████━████ ┃+
--　　　　　　┃　　　　　　　┃ +
--　　　　　　┃　　　┻　　　┃
--　　　　　　┃　　　　　　　┃ + +
--　　　　　　┗━┓　　　┏━┛
--　　　　　　　　┃　　　┃　　　　　　　　　　　
--　　　　　　　　┃　　　┃ + + + +
--　　　　　　　　┃　　　┃　　　　　　　　　　　
--　　　　　　　　┃　　　┃ + 　　　　　　
--　　　　　　　　┃　　　┃
--　　　　　　　　┃　　　┃　　+　　　　　　　　　
--　　　　　　　　┃　 　　┗━━━┓ + +
--　　　　　　　　┃ 　　　　　　　┣┓
--　　　　　　　　┃ 　　　　　　　┏┛
--　　　　　　　　┗┓┓┏━┳┓┏┛ + + + +
--　　　　　　　　　┃┫┫　┃┫┫
--　　　　　　　　　┗┻┛　┗┻┛+ + + +
--
-- 
-- Code is far away from bug with the animal protecting
-- Date    : 2018-07-11 21:27:00
-- Author  : (moxun)hongchang.huang
-- Version : 0.0.1
------------------------------------------------------------------------------------------*/
class BattleMgr
{
    private static _ins:BattleMgr
    private _battleController: BattleController
    private _answerConfig: any[] = ["101","102","103","104","105"]
    private _comboCount:number
    private _roundId:number
    private _selfScore: number
    private _isPause:boolean

    constructor()
    {
    }

    public static getInstance():BattleMgr
    {
        if(!this._ins)
        {
            this._ins = new BattleMgr()
        }
        return this._ins
    }

    public enterBattle():void
    {
        this.addListener()
        this.initData()

        this._battleController = new BattleController()
        this._battleController.getView().name = "BattleView"
        Laya.stage.addChild(this._battleController.getView())
    }

    private onUpdate()
    {
        if(this._isPause)
        {
            return
        }
        this._battleController.onUpdate()
    }
    
    public showRoundBroadcastView()
    {
        this._battleController.showAnswerBox(false)
        if(this._roundId >= 5)
        {
            this.exitBattle()
            return
        }
        this.battlePause()
        let ctrl = new RoundBroadcastController()
        // let frameShow = new LeftToRightFrames(1, 30, 750, ctrl.getView(), Laya.Handler.create(this, this.onShowRoundComplete))
        let frameShow = new FadeFrames(1, 90, ctrl.getView(), Laya.Handler.create(this, this.onShowRoundComplete))
        frameShow.setViewPosition(200, 500)
    }

    private onShowRoundComplete()
    {
        // Laya.timer.once(500, this, this.battlePause)        
        this._battleController.showAnswerBox(true, Laya.Handler.create(this, this.onShowAnswerBoxComplete))
        this.onShowAnswerBoxComplete()
    }

    private onShowAnswerBoxComplete()
    {
        this.battleResume()
        this.reqNextRound()
    }

    public battlePause()
    {
        this._isPause = true
    }

    public battleResume()
    {
        this._isPause = false
    }

    private onShowComboComplete()
    {
        // console.log("onShowComboComplete Run")
    }

    public showComboView()
    {
        if(this._comboCount >= 2)
        {
            let ctrl = new ComboController()
            let frameShow = new LeftToRightFrames(1, 30, 1650, ctrl.getView(), Laya.Handler.create(this, this.onShowComboComplete))
        }
    }

    private addListener()
    {
        Laya.timer.loop(1, this, this.onUpdate)
    }

    private removeListener()
    {
        Laya.timer.clear(this, this.onUpdate)
    }

    private initData()
    {
        this.resetCombo()
        this.resetRoundId()
        this.setSelfScore(0)
        this._isPause = false
    }

    private reqNextRound()
    {
        this._battleController.onNextRound()
    }

    public exitBattle():void
    {
        this.removeListener()
        this._battleController.onDestroy()

        // var temp: MainController = GameMgr.getInstance().getCurScene()
        // temp.showView()

        let temp: AccountController = new AccountController()
        temp.getView().name = "AccountController"
        Laya.stage.addChild(temp.getView())
    }

    public getDataByRoundId(id: number)
    {
        var config = BattleDataDao.getConfig()
        // console.log("getDataByRoundId Run -> ", id, config.get(this._answerConfig[id]))
        
        return config.get(this._answerConfig[id])
    }

    public getType()
    {
        return "咋地啦"
    }

    public getRoundId()
    {
        return this._roundId
    }

    public getComboCount()
    {
        return this._comboCount
    }

    public setSelfScore(score)
    {
        this._selfScore = score
    }

    public getSelfScore()
    {
        return this._selfScore
    }

    public addRoundId()
    {
        this._roundId++
    }

    public resetRoundId()
    {
        this._roundId = 0
    }

    public addCombo()
    {
        this._comboCount++
    }   

    public resetCombo()
    {
        this._comboCount = 0
    }

}