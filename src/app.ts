import 'reflect-metadata';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';
import * as compression from 'compression';
import * as fs from 'fs';
import {sequelize} from './config/sequelize';

class App {
    public app: express.Application;
    public port: number;

    constructor(port: number) {
        this.app = express.default();
        this.port = port;
        this.initializeMiddleware();
    }

    private initializeMiddleware() {
        const corsMiddleware = cors.default({
            origin: '*',
            preflightContinue: true,
        });

        sequelize.sync({
            force: false,
        });

        this.app.use(cors.default());
        this.app.use(bodyParser.urlencoded({
            extended: false,
        }));

        this.app.use(bodyParser.json());
        this.app.use(compression.default());
        this.app.use(logger.default('common', {
            stream: fs.createWriteStream('./access.log', {flags: 'a'}),
        }));

        this.app.use(logger.default('dev'));
        this.app.use(corsMiddleware);
        this.app.options('*', corsMiddleware);
    }

    public listen() {
        this.app.listen(this.port, () => {
            // tslint:disable-next-line: no-console
            console.log(`Application listening on port ${this.port}`);
        });
    }
}

export default App;
