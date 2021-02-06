"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function equilateral(x) {
    console.log("print a equilateral triangle with rows " + x);
    for (let i = 1; i <= x; i++) {
        let a = "";
        for (let j = i; j <= x; j++) {
            a += " ";
        }
        for (let z = i; z > 0; z--) {
            a += "* ";
        }
        console.log(a);
    }
}
exports.default = equilateral;
//   equilateral(10)
//# sourceMappingURL=equilateral.js.map