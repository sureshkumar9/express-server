class UserController {
    static instance: UserController

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }
    get(req, res, next) {
        try {
            console.log("Inside get method of user Controller");
            res.send({
                message: "user displayed successfully",
                data: [
                    {
                        name: "Suresh",
                        address: "Noida"
                    }
                ]
            });
        }
        catch (err) {
            console.log("Inside err", err);
        }
    }
    create(req, res, next) {
        try {
            console.log("Inside post method of user Controller");
            res.send({
                message: "successfully created user",
                data: [
                    {
                        name: req.body.name,
                        address: req.body.add                    }
                ]
            });
        }
        catch (err) {
            console.log("Inside err", err);
        }
    }
    update(req, res, next) {
        try {
            console.log("Inside update method of user Controller");
            res.send({
                message: "user updated successfully",
                data: [
                    {
                        name: "Suresh",
                        address: "Noida"
                    }
                ]
            });
        }
        catch (err) {
            console.log("Inside err", err);
        }
    }
    delete(req, res, next) {
        try {
            console.log("Inside delete method of user Controller");
            res.send({
                message: "user deleted successfully",
                data: [
                    {
                        name: "Suresh",
                        address: "Noida"
                    }
                ]
            });
        }
        catch (err) {
            console.log("Inside err", err);
        }
    }
}
export default UserController.getInstance()