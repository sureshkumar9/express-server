interface IPermission{
    'getUsers' :{
        all: String[];
        read: String[];
        write:String[];
        delete:String[];
    }
}
export{IPermission};
