import * as jwt from 'jsonwebtoken';
import { permissions } from './Constants';
import hasPermission from './permissions';
export default (module: any , permissionType:string ) =>(req,res,next)=>{

    console.log('config is',module,permissionType)
    const token = req.headers['authorization']; 
    console.log(token);
    const User = jwt.verify(token,'qwertyuiopasdfghjklzxcvbnm123456');
    console.log(User);
    
    const result = hasPermission(permissions.getUsers, 'head-trainer', 'delete');
    console.log('result is',result);
    if(result===true)
        next();
    else {
        next({
            message: 'Unauthorised',
            status: 403
        });
    }
}