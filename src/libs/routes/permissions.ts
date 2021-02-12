import { permissions } from "./Constants";

export default function hasPermission(moduleName:object, role:string, permissionType:string):any{
    if (!moduleName.hasOwnProperty(permissionType)) {
        return false;
    }
    else if (moduleName[permissionType].includes(role) || (role == 'head-trainer')) {
        return true;

    }
    else {
        return false;
    }
}
// let x = hasPermission(permissions.getUsers, 'head-trainer', 'delete');
// console.log(x)
// console.log(permissions)

