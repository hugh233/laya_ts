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
var AccountView = /** @class */ (function (_super) {
    __extends(AccountView, _super);
    function AccountView() {
        return _super.call(this) || this;
    }
    AccountView.prototype.setResult = function (score) {
        if (score > 0) {
            this.mpTextResult.text = "You Win!";
        }
        else {
            this.mpTextResult.text = "Draw!";
        }
        this.mpNumScore.text = score + "";
    };
    return AccountView;
}(ui.battle.AccountViewUI));
//# sourceMappingURL=AccountView.js.map