var danish = /** @class */ (function () {
    function danish() {
    }
    danish.prototype.show = function () {
        document.write("X: " + this._x + " Y: " + this._y);
    };
    return danish;
}());
var danish = new danish();
danish._x = 1;
danish._y = 2;
danish.show();
