var BattleController = /** @class */ (function () {
    function BattleController() {
        this._view = new BattleView();
        this._frames = 0;
        this._frameSec = 0;
        this._timeSec = 0;
        this._selfScore = 0;
        this._enemyScore = 0;
        this.initData();
        this.initView();
        this.tweenShow();
        this.addListener();
    }
    BattleController.prototype.tweenShow = function () {
        this.showAnswerBox(false);
        this._view.showBattleStart(Laya.Handler.create(this, this.showComplete));
    };
    BattleController.prototype.showComplete = function () {
        console.log("showComplete Run");
        BattleMgr.getInstance().showRoundBroadcastView();
    };
    BattleController.prototype.init = function () {
        this._showBox = this._view.getShowBox(this._data.type);
    };
    BattleController.prototype.onUpdate = function () {
        this._frames++;
        this._frameSec++;
        if (this._frameSec >= 60) {
            this._frameSec = 0;
            this._timeSec--;
            this._view.setTime(this._timeSec);
        }
        if (this._timeSec <= 0) {
            BattleMgr.getInstance().battlePause();
            BattleMgr.getInstance().resetCombo();
            Laya.timer.once(500, this, this.reqNextRound);
        }
    };
    BattleController.prototype.showAnswerBox = function (isShow, handler) {
        this._view.showAnswerBox(isShow, this._data.type);
        // this._view.showAnswerBox(false, this._data.type)
        // if(isShow)
        // {
        //     this._view.showTitleAndPro(this._data.type, Laya.Handler.create(this, this.showAnswerBoxComplete, [handler]))
        // }
    };
    BattleController.prototype.showAnswerBoxComplete = function (handler) {
        this._view.showAnswerBox(true, this._data.type);
        if (handler != null) {
            handler.run();
        }
    };
    BattleController.prototype.initData = function () {
        this._isTrue = false;
        this._isSelect = false;
        this._timeSec = 10;
        this._frameSec = 0;
        this._data = BattleMgr.getInstance().getDataByRoundId(BattleMgr.getInstance().getRoundId());
        if (this._data == null) {
            console.log("the _data is null roundId = ", BattleMgr.getInstance().getRoundId());
        }
    };
    BattleController.prototype.getView = function () {
        return this._view;
    };
    BattleController.prototype.initView = function () {
        this._showBox = this._view.getShowBox(this._data.type);
        this._view.setTime(10);
        this.initAnswerView(this._showBox);
        this.calcScore();
    };
    BattleController.prototype.initPro = function () {
        this._view.setSelfPro(this._selfScore);
        this._view.setEnemyPro(this._enemyScore);
    };
    BattleController.prototype.initAnswerView = function (box) {
        var mpBoxTitle = box.getChildByName("mpBoxTitle");
        var mpTextTitle = mpBoxTitle.getChildByName("mpTextTitle");
        mpTextTitle.text = this._data.desc;
        var answers = this._data.answer.split("|");
        for (var i = 0; i <= 3; i++) {
            var mpBtn = box.getChildByName("mpBtn" + i);
            var mpText = mpBtn.getChildByName("mpText");
            if (mpBtn == null) {
                console.log("mpBtn is null");
            }
            if (mpText == null) {
                console.log("mpText is null");
            }
            mpText.text = answers[i];
            mpBtn.on(Laya.Event.MOUSE_DOWN, this, this.onButtonClick, [mpBtn, answers[i], this._data.aim]);
        }
    };
    BattleController.prototype.onButtonClick = function (btn, text, aim) {
        if (this._isSelect) {
            console.log("onButtonClick has Select");
            return;
        }
        this._isSelect = true;
        var mpImg = btn.getChildByName("mpImg");
        if (text == aim) {
            this._isTrue = true;
            BattleMgr.getInstance().addCombo();
            mpImg.skin = "battle/Box_Answer_01.png";
        }
        else {
            BattleMgr.getInstance().resetCombo();
            mpImg.skin = "battle/Box_Answer_02.png";
        }
        this.calcScore();
        BattleMgr.getInstance().showComboView();
        Laya.timer.once(500, this, this.reqNextRound);
    };
    BattleController.prototype.reqNextRound = function () {
        BattleMgr.getInstance().showRoundBroadcastView();
    };
    BattleController.prototype.onNextRound = function () {
        this.removeBtnListener();
        this.initData();
        this.initView();
        BattleMgr.getInstance().addRoundId();
    };
    BattleController.prototype.calcScore = function () {
        var step = 20;
        if (BattleMgr.getInstance().getRoundId() > 4) {
            step = 40;
        }
        if (this._isTrue) {
            this._selfScore = this._selfScore + this._timeSec * step;
        }
        this._view.mpNumSelf.text = this._selfScore + "";
        this._view.mpNumEnemy.text = this._enemyScore + "";
        BattleMgr.getInstance().setSelfScore(this._selfScore);
        this.initPro();
    };
    BattleController.prototype.removeBtnListener = function () {
        for (var i = 0; i <= 3; i++) {
            var mpBtn = this._showBox.getChildByName("mpBtn" + i);
            var mpImg = mpBtn.getChildByName("mpImg");
            if (mpBtn != null) {
                mpImg.skin = "battle/Box_Answer_03.png";
                mpBtn.off(Laya.Event.MOUSE_DOWN, this, this.onButtonClick);
            }
        }
    };
    BattleController.prototype.addListener = function () {
        this._view.mpImgSelf.on(Laya.Event.MOUSE_DOWN, this, this.onExit);
    };
    BattleController.prototype.removeListener = function () {
        this._view.mpImgSelf.off(Laya.Event.MOUSE_DOWN, this, this.onExit);
    };
    BattleController.prototype.onExit = function () {
        console.log("onExitRoundId -> ", BattleMgr.getInstance().getRoundId());
        BattleMgr.getInstance().exitBattle();
    };
    BattleController.prototype.onDestroy = function () {
        this.removeListener();
        this._view.removeChildren();
        this._view.removeSelf();
    };
    return BattleController;
}());
//# sourceMappingURL=BattleController.js.map