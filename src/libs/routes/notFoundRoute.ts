import {Request, Response, NextFunction} from 'express'

export default ((err, req , res, next) => {
    next({
            error : "Not Found",
            code:404
        }
    )
});