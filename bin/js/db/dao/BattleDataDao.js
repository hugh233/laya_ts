var BattleDataDao = /** @class */ (function () {
    function BattleDataDao() {
    }
    BattleDataDao.parse_config = function () {
        var data = Laya.loader.getRes(this._DATA_PATH);
        for (var temp in data) {
            var item = data[temp];
            var vo = new BattleDataVO();
            vo.id = item.id;
            vo.type = item.type;
            vo.src = item.src;
            vo.desc = item.desc;
            vo.answer = item.answer;
            vo.aim = item.aim;
            this._config.add(temp, vo);
        }
    };
    BattleDataDao.getConfig = function () {
        if (this._config == null) {
            this._config = new Dictionary();
            this.parse_config();
        }
        return this._config;
    };
    BattleDataDao._DATA_PATH = "res/data/t_s_test.json";
    return BattleDataDao;
}());
//# sourceMappingURL=BattleDataDao.js.map