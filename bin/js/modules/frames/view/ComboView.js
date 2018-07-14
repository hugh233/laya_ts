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
var ComboView = /** @class */ (function (_super) {
    __extends(ComboView, _super);
    function ComboView() {
        return _super.call(this) || this;
    }
    ComboView.prototype.setComboCount = function (count) {
        this.mpImgCount.skin = "battle/Nub_Answer_1_" + count + ".png";
    };
    return ComboView;
}(ui.battle.ComboViewUI));
//# sourceMappingURL=ComboView.js.map