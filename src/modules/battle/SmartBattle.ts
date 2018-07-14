class SmartBattle extends ui.battle.SmartBattleUI
{
    private frames: number = 0
    private frameSec: number = 0
    private timeSec: number = 0
    private selectIndex: number = 0
    private roundId: number = 1 
    private selfScore: number = 0
    private enemyScore: number = 0
    private isTrue: Boolean = false

    private answers:Array<string> = ["不是我", "不是我", "不是我", "那就是我咯"]

    constructor()
    {
        super()
        this.initView()
    }

    private initView():void
    {
        this.initData()
        this.mpTextRound.text = "第 " + this.roundId + " 回合"
        this.mpTextTime.text = 10 + ""
        this.mpNumSelf.text = this.selfScore + ""
        this.mpNumEnemy.text = this.enemyScore + ""
        this.isTrue = false

        this.mpListView.renderHandler = new Laya.Handler(this, this.onListRender)
        this.mpListView.selectEnable = true
        this.mpListView.selectHandler = new Laya.Handler(this, this.onItemClick)
        Laya.timer.frameLoop(1, this, this.update)
    }

    private initData():void
    {
        this.selectIndex = 0
        this.roundId = 1
        this.selfScore = 0
        this.enemyScore = 0
        this.filterList()
    }

    public onNextRound():void
    {
        this.mpListView.selectedIndex = -1
        this.calcScore()
        this.roundId++
        this.mpTextTime.text = 10 + ""
        this.frameSec = 0
        this.mpTextRound.text = "第 " + this.roundId + " 回合"
    }

    private calcScore():void
    {
        var step = 20
        if (this.roundId >= 5)
        {
            step = 40
        }
        if(this.isTrue)
        {
            this.mpNumSelf.text = parseInt(this.mpNumSelf.text) + parseInt(this.mpTextTime.text) * step + ""
        }
    }

    private update():void
    {
        this.frames ++
        this.frameSec ++
        if(this.roundId > 5)
        {
            Laya.timer.clear(this, this.update)
            BattleMgr.getInstance().exitBattle()
        }
        if(this.frameSec >= 60)
        {
            this.frameSec = 0
            this.mpTextTime.text = parseInt(this.mpTextTime.text) - 1 + ""
        }
        if(parseInt(this.mpTextTime.text) == 0)
        {
            this.onNextRound()
        }
    }

    private filterList(): void
    {
        var data: Array<any> = []
        for (var m:number = 0; m < 20; m++)
        {
            data.push({mpTextItem: "点我 " + m})
        }
        this.mpListView.array = data
    }

    private onItemClick(index : number):void
    {
        console.log("onItemClick Run -> ", index)
        if (index == 3)
        {
            this.isTrue = true
        }
        if (index != -1)
        {
            this.onNextRound()
        }
    }

    private onListRender(item: Laya.Box, index: number): void
    {
        var label: Label = item.getChildByName("mpTextItem") as Label
        label.text = this.answers[index]
    }
}