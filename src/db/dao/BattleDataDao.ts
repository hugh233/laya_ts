class BattleDataDao
{
    private static _DATA_PATH:string = "res/data/t_s_test.json"
    private static _config: Dictionary
    constructor()
    {
    }

    private static parse_config()
    {
        let data: JSON = Laya.loader.getRes(this._DATA_PATH)
        for (var temp in data)
        {
            var item = data[temp]
            let vo: BattleDataVO = new BattleDataVO()
            vo.id = item.id
            vo.type = item.type
            vo.src = item.src
            vo.desc = item.desc
            vo.answer = item.answer
            vo.aim = item.aim

            this._config.add(temp, vo)
        }
    }

    public static getConfig()
    {
        if (this._config == null)
        {
            this._config = new Dictionary()
            this.parse_config()
        }
        return this._config
    }
}