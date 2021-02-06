"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
function validateUsers(userData) {
    let valid = 0;
    let invalid = 0;
    userData.forEach(userData => {
        const { traineeEmail, reviewerEmail } = userData;
        if (helpers_1.validateEmail(traineeEmail) && helpers_1.validateEmail(reviewerEmail)) {
            valid += 1;
        }
        else {
            invalid += 1;
        }
    });
    console.log("Number of valid user", valid);
    console.log("Number of Invalid user", invalid);
}
exports.default = validateUsers;
//# sourceMappingURL=validation.js.map