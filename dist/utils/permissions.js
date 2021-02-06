"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hasPermission(moduleName, role, permissionType) {
    if (!moduleName.hasOwnProperty(permissionType)) {
        console.log(false);
    }
    else if (moduleName[permissionType].includes(role) || (role == 'head-trainer')) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
exports.default = hasPermission;
// let x = hasPermission(permissions.getUsers, 'head-trainer', 'delete');
// console.log(x)
// console.log(permissions)
//# sourceMappingURL=permissions.js.map