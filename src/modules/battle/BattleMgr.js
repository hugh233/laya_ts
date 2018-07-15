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
var BattleMgr = /** @class */ (function () {
    function BattleMgr() {
        this._answerConfig = ["101", "102", "103", "104", "105"];
    }
    BattleMgr.getInstance = function () {
        if (!this._ins) {
            this._ins = new BattleMgr();
        }
        return this._ins;
    };
    BattleMgr.prototype.enterBattle = function () {
        this.addListener();
        this.initData();
        this._battleController = new BattleController();
        this._battleController.getView().name = "BattleView";
        Laya.stage.addChild(this._battleController.getView());
    };
    BattleMgr.prototype.onUpdate = function () {
        if (this._isPause) {
            return;
        }
        this._battleController.onUpdate();
    };
    BattleMgr.prototype.showRoundBroadcastView = function () {
        this._battleController.showAnswerBox(false);
        if (this._roundId >= 5) {
            this.exitBattle();
            return;
        }
        this.battlePause();
        var ctrl = new RoundBroadcastController();
        // let frameShow = new LeftToRightFrames(1, 30, 750, ctrl.getView(), Laya.Handler.create(this, this.onShowRoundComplete))
        var frameShow = new FadeFrames(1, 90, ctrl.getView(), Laya.Handler.create(this, this.onShowRoundComplete));
        frameShow.setViewPosition(200, 500);
    };
    BattleMgr.prototype.onShowRoundComplete = function () {
        // Laya.timer.once(500, this, this.battlePause)        
        this._battleController.showAnswerBox(true, Laya.Handler.create(this, this.onShowAnswerBoxComplete));
        this.onShowAnswerBoxComplete();
    };
    BattleMgr.prototype.onShowAnswerBoxComplete = function () {
        this.battleResume();
        this.reqNextRound();
    };
    BattleMgr.prototype.battlePause = function () {
        this._isPause = true;
    };
    BattleMgr.prototype.battleResume = function () {
        this._isPause = false;
    };
    BattleMgr.prototype.onShowComboComplete = function () {
        // console.log("onShowComboComplete Run")
    };
    BattleMgr.prototype.showComboView = function () {
        if (this._comboCount >= 2) {
            var ctrl = new ComboController();
            var frameShow = new LeftToRightFrames(1, 30, 1650, ctrl.getView(), Laya.Handler.create(this, this.onShowComboComplete));
        }
    };
    BattleMgr.prototype.addListener = function () {
        Laya.timer.loop(1, this, this.onUpdate);
    };
    BattleMgr.prototype.removeListener = function () {
        Laya.timer.clear(this, this.onUpdate);
    };
    BattleMgr.prototype.initData = function () {
        this.resetCombo();
        this.resetRoundId();
        this.setSelfScore(0);
        this._isPause = false;
    };
    BattleMgr.prototype.reqNextRound = function () {
        this._battleController.onNextRound();
    };
    BattleMgr.prototype.exitBattle = function () {
        this.removeListener();
        this._battleController.onDestroy();
        // var temp: MainController = GameMgr.getInstance().getCurScene()
        // temp.showView()
        var temp = new AccountController();
        temp.getView().name = "AccountController";
        Laya.stage.addChild(temp.getView());
    };
    BattleMgr.prototype.getDataByRoundId = function (id) {
        var config = BattleDataDao.getConfig();
        // console.log("getDataByRoundId Run -> ", id, config.get(this._answerConfig[id]))
        return config.get(this._answerConfig[id]);
    };
    BattleMgr.prototype.getType = function () {
        return "咋地啦";
    };
    BattleMgr.prototype.getRoundId = function () {
        return this._roundId;
    };
    BattleMgr.prototype.getComboCount = function () {
        return this._comboCount;
    };
    BattleMgr.prototype.setSelfScore = function (score) {
        this._selfScore = score;
    };
    BattleMgr.prototype.getSelfScore = function () {
        return this._selfScore;
    };
    BattleMgr.prototype.addRoundId = function () {
        this._roundId++;
    };
    BattleMgr.prototype.resetRoundId = function () {
        this._roundId = 0;
    };
    BattleMgr.prototype.addCombo = function () {
        this._comboCount++;
    };
    BattleMgr.prototype.resetCombo = function () {
        this._comboCount = 0;
    };
    return BattleMgr;
}());
//# sourceMappingURL=BattleMgr.js.map