
import * as express from 'express';

import TraineeController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import config from './validation';
import authMiddleWare from '../../libs/routes/authMoiddleWare';
import {permissions} from '../../libs/routes/Constants';
const traineeRoutes = express.Router();


traineeRoutes.route('/')
        .get(authMiddleWare(permissions.getUsers,'read'),validationHandler( config.get ) , TraineeController.get )
        .post( authMiddleWare(permissions.getUsers,'write'),validationHandler( config.create ) , TraineeController.create )
        .put( authMiddleWare(permissions.getUsers,'all'),validationHandler( config.update ) , TraineeController.update )
        .delete(authMiddleWare(permissions.getUsers,'Delete'), validationHandler( config.delete ) , TraineeController.delete );

export default traineeRoutes;