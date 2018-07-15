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
var BattleView = /** @class */ (function (_super) {
    __extends(BattleView, _super);
    function BattleView() {
        var _this = _super.call(this) || this;
        _this._showType = 1;
        _this.initView();
        return _this;
    }
    BattleView.prototype.initView = function () {
        this.mpTextTime.text = "10";
        this.mpNumSelf.text = "0";
        this.mpNumEnemy.text = "0";
        this.mpProSelf.height = 0;
        this.mpProEnemy.height = 0;
    };
    BattleView.prototype.getShowBox = function (type) {
        this._showType = type;
        if (type == 2) {
            this.mpBoxImg.visible = true;
            this.mpBoxText.visible = false;
            return this.mpBoxImg;
        }
        else {
            this.mpBoxImg.visible = false;
            this.mpBoxText.visible = true;
            return this.mpBoxText;
        }
    };
    BattleView.prototype.getResultImg = function () {
        // var tempImg: Laya.Image = new Image()
    };
    BattleView.prototype.showAnswerBox = function (isShow, type) {
        var showBox = this.getShowBox(type);
        showBox.visible = isShow;
        this.mpBgSelf.visible = isShow;
        this.mpBgEnemy.visible = isShow;
    };
    BattleView.prototype.showBattleStart = function (handler) {
        var tempSelfX = this.mpBoxSelf.x;
        this.mpBoxSelf.x = tempSelfX - this.mpBoxSelf.width;
        this.mpBoxSelf.alpha = 0;
        var tempEnemyX = this.mpBoxEnemy.x;
        this.mpBoxEnemy.x = tempEnemyX + this.mpBoxEnemy.width;
        this.mpBoxEnemy.alpha = 0;
        var tempTimeY = this.mpImgBgTime.y;
        this.mpImgBgTime.y = tempTimeY - this.mpImgBgTime.height;
        this.mpImgBgTime.alpha = 0;
        Laya.Tween.to(this.mpBoxSelf, { x: tempSelfX, alpha: 1 }, 1000, Laya.Ease.bounceOut, handler);
        Laya.Tween.to(this.mpBoxEnemy, { x: tempEnemyX, alpha: 1 }, 1000, Laya.Ease.bounceOut);
        Laya.Tween.to(this.mpImgBgTime, { y: tempTimeY, alpha: 1 }, 1000, Laya.Ease.backInOut);
    };
    BattleView.prototype.showTitleAndPro = function (type, handler) {
        var showBox = this.getShowBox(type);
        var titleBox = showBox.getChildByName("mpBoxTitle");
        titleBox.alpha = 0;
        this.mpBoxSelf.alpha = 0;
        this.mpBoxEnemy.alpha = 0;
        Laya.Tween.to(titleBox, { alpha: 1 }, 1000, null, handler);
        Laya.Tween.to(this.mpBoxSelf, { alpha: 1 }, 1000);
        Laya.Tween.to(this.mpBoxEnemy, { alpha: 1 }, 1000);
    };
    BattleView.prototype.showRoundStart = function (handler) {
    };
    BattleView.prototype.setSelfPro = function (score) {
        this.mpProSelf.visible = score > 0;
        this.mpProSelf.height = this.mpBgSelf.height * (score / 1200);
    };
    BattleView.prototype.setEnemyPro = function (score) {
        this.mpProEnemy.visible = score > 0;
        this.mpProEnemy.height = this.mpBgEnemy.height * (score / 1200);
    };
    BattleView.prototype.setTime = function (time) {
        this.mpTextTime.text = time + "";
    };
    return BattleView;
}(ui.battle.BattleViewUI));
//# sourceMappingURL=BattleView.js.map