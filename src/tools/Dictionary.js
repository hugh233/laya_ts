var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this._dic = {};
    }
    Dictionary.prototype.add = function (key, value) {
        this._dic[key] = value;
    };
    Dictionary.prototype.get = function (key) {
        if (this.isContains(key)) {
            return this._dic[key];
        }
        else {
            return null;
        }
    };
    Dictionary.prototype.isContains = function (key) {
        if (this._dic[key] != null) {
            return true;
        }
        else {
            return false;
        }
    };
    Dictionary.prototype.remove = function (key) {
        if (this.isContains(key)) {
            delete this._dic[key];
        }
    };
    return Dictionary;
}());
//# sourceMappingURL=Dictionary.js.map