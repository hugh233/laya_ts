class GameMain
{
    private _JSON_PATH: string = "res/data/t_s_demo.json"
    private _BATTLE_DATA_PATH: string = "res/data/t_s_test.json"
    private _IMG_PATH: string = "res/atlas/battle.atlas"

    constructor()
    {
        //初始化引擎
        Laya.init(1080, 1920, Laya.WebGL);
        //设置适配模式
        Laya.stage.scaleMode = "showall";
        // Laya.stage.screenMode = "vertical"
        Laya.stage.alignH = "center";
        Laya.stage.bgColor = "#000000";
        Laya.stage.frameRate = "slow"
        Laya.stage.frameRate = Laya.Stage.FRAME_MOUSE;

        this.onPreLoad()
    }

    private onPreLoad()
    {
        let resArray: Array<any> = [];
        resArray.push({url: this._JSON_PATH, type: Laya.Loader.JSON});
        resArray.push({url: this._BATTLE_DATA_PATH, type: Laya.Loader.JSON});
        resArray.push({url: this._IMG_PATH, type: Laya.Loader.ATLAS})

        Laya.loader.load(resArray, Laya.Handler.create(this, this.onResLoaded))
    }

    private onResLoaded()
    {
        let mainController = new MainController()
        mainController.getView().name = "MainController"
        GameMgr.getInstance().setCurScene(mainController)
        Laya.stage.addChild(mainController.getView())

        this.testDic()
    }

    private testDic()
    {
        var dic = new Dictionary()
        dic.add("name", "Hugh")
        dic.add("age", 25)
        dic.add("table", {website: "http://www.baidu.com"})

        console.log(dic.get("name"), dic.get("age"), dic.get("table").website)
    }

}

new GameMain()