var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SmartBattle = /** @class */ (function (_super) {
    __extends(SmartBattle, _super);
    function SmartBattle() {
        var _this = _super.call(this) || this;
        _this.frames = 0;
        _this.frameSec = 0;
        _this.timeSec = 0;
        _this.selectIndex = 0;
        _this.roundId = 1;
        _this.selfScore = 0;
        _this.enemyScore = 0;
        _this.isTrue = false;
        _this.answers = ["不是我", "不是我", "不是我", "那就是我咯"];
        _this.initView();
        return _this;
    }
    SmartBattle.prototype.initView = function () {
        this.initData();
        this.mpTextRound.text = "第 " + this.roundId + " 回合";
        this.mpTextTime.text = 10 + "";
        this.mpNumSelf.text = this.selfScore + "";
        this.mpNumEnemy.text = this.enemyScore + "";
        this.isTrue = false;
        this.mpListView.renderHandler = new Laya.Handler(this, this.onListRender);
        this.mpListView.selectEnable = true;
        this.mpListView.selectHandler = new Laya.Handler(this, this.onItemClick);
        Laya.timer.frameLoop(1, this, this.update);
    };
    SmartBattle.prototype.initData = function () {
        this.selectIndex = 0;
        this.roundId = 1;
        this.selfScore = 0;
        this.enemyScore = 0;
        this.filterList();
    };
    SmartBattle.prototype.onNextRound = function () {
        this.mpListView.selectedIndex = -1;
        this.calcScore();
        this.roundId++;
        this.mpTextTime.text = 10 + "";
        this.frameSec = 0;
        this.mpTextRound.text = "第 " + this.roundId + " 回合";
    };
    SmartBattle.prototype.calcScore = function () {
        var step = 20;
        if (this.roundId >= 5) {
            step = 40;
        }
        if (this.isTrue) {
            this.mpNumSelf.text = parseInt(this.mpNumSelf.text) + parseInt(this.mpTextTime.text) * step + "";
        }
    };
    SmartBattle.prototype.update = function () {
        this.frames++;
        this.frameSec++;
        if (this.roundId > 5) {
            Laya.timer.clear(this, this.update);
            BattleMgr.getInstance().exitBattle();
        }
        if (this.frameSec >= 60) {
            this.frameSec = 0;
            this.mpTextTime.text = parseInt(this.mpTextTime.text) - 1 + "";
        }
        if (parseInt(this.mpTextTime.text) == 0) {
            this.onNextRound();
        }
    };
    SmartBattle.prototype.filterList = function () {
        var data = [];
        for (var m = 0; m < 20; m++) {
            data.push({ mpTextItem: "点我 " + m });
        }
        this.mpListView.array = data;
    };
    SmartBattle.prototype.onItemClick = function (index) {
        console.log("onItemClick Run -> ", index);
        if (index == 3) {
            this.isTrue = true;
        }
        if (index != -1) {
            this.onNextRound();
        }
    };
    SmartBattle.prototype.onListRender = function (item, index) {
        var label = item.getChildByName("mpTextItem");
        label.text = this.answers[index];
    };
    return SmartBattle;
}(ui.battle.SmartBattleUI));
//# sourceMappingURL=SmartBattle.js.map