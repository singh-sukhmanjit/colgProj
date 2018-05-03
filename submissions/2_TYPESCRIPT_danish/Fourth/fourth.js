var Danish = /** @class */ (function () {
    function Danish() {
    }
    Danish.prototype.constructer = function (_x, _y) { };
    Danish.prototype.show = function () {
        document.write("X: " + this._x + " Y: " + this._y);
    };
    return Danish;
}());
var a = new Danish();
a._x = 1;
a._y = 2;
a.show();
