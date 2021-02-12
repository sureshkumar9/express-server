import * as express from 'express';
import * as bodyParser from 'body-parser';
import { notFoundHandler, errorHandler } from './libs/routes';
import mainRouter from './router';
import Database from './libs/Database';

class Server {
    app;
    constructor(private config) {
        this.app = express();
    }
    bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }
    setupRoutes() {
        const { app } = this;
        app.use('/api', mainRouter);
        app.get('/health-check', (req, res, next) => {
            res.send('I am Ok');
        });
        this.app.use(notFoundHandler);
        this.app.use(errorHandler);
        return this;
    }
    initBodyParser() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }))
    }
    run() {
        const { app, config: { PORT, MONGO_URL} } = this;
        Database.open(MONGO_URL)
        .then(() => {
            console.log('Succesfully connected to Mongodb');
        
        app.listen(PORT, (err) => {
            if (err) {
                console.log(err);
            }
            console.log(`App is running ${PORT}`);
        });
    })
    }
}
export default Server;
