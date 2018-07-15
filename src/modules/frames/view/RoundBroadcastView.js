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
var RoundBroadcastView = /** @class */ (function (_super) {
    __extends(RoundBroadcastView, _super);
    function RoundBroadcastView() {
        return _super.call(this) || this;
    }
    RoundBroadcastView.prototype.setType = function (type) {
        this.mpTextType.text = type;
    };
    RoundBroadcastView.prototype.setRound = function (roundId) {
        this.mpTextTitle.text = "第" + roundId + "题";
        this.mpImgBgScore.visible = roundId == 5;
    };
    return RoundBroadcastView;
}(ui.battle.RoundBroadcastViewUI));
//# sourceMappingURL=RoundBroadcastView.js.map