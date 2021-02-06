export default function hasPermission(moduleName:object, role:string, permissionType:string):void{
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
// let x = hasPermission(permissions.getUsers, 'head-trainer', 'delete');
// console.log(x)
// console.log(permissions)

