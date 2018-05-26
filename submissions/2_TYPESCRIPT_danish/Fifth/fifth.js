"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Danish = /** @class */ (function () {
    function Danish(_x, _y) {
        this.a = _x;
        this.b = _y;
    }
    Danish.prototype.show = function () {
        document.write("X: " + this.a + " Y: " + this.b);
    };
    return Danish;
}());
exports.Danish = Danish;
