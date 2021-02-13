import { Router } from 'express';
import UserController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import validation from './validation';

const userRouter = Router();

userRouter.route('/')
    .get(validationHandler(validation.get),UserController.get)
    .post(validationHandler(validation.create),UserController.create)
    .put(validationHandler(validation.update),UserController.update)
    .delete(validationHandler(validation.delete),UserController.delete);
export default userRouter;