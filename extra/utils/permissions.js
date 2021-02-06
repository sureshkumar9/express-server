const permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    },
}
function hasPermission(moduleName, role, permissionType) {
    if (!moduleName.hasOwnProperty(permissionType)) {
        return false
    }
    else if (moduleName[permissionType].includes(role) || (role == 'head-trainer')) {
        return true
    }
    else {
        return false
    }
}
let x = hasPermission(permissions.getUsers, 'head-trainer', 'delete');
console.log(x)
console.log(permissions)
