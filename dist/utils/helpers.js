"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = void 0;
function validateEmail(email) {
    const pattern = /^([a-zA-Z0-9\.-]+)@(successive).(tech)$/;
    return (pattern.test(email));
}
exports.validateEmail = validateEmail;
//# sourceMappingURL=helpers.js.map