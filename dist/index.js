"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const index_1 = require("./patterns/index");
const index_2 = require("./utils/index");
const constants_1 = require("./constants");
index_1.equilateral(10);
index_1.diamond(5);
let x = index_2.hasPermission(constants_1.permissions.getUsers, 'head-trainer', 'delete');
console.log(x);
console.log(constants_1.permissions);
exports.users = [
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
    },
    {
        traineeEmail: 'trainee2successive.tech',
        reviewerEmail: 'reviewer2@succesive.tech',
    }
];
index_2.validateUsers(exports.users);
//# sourceMappingURL=index.js.map