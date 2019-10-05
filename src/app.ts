// import 'reflect-metadata';
import * as fs from 'fs';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import compression from 'compression';

import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import {sequelize} from './config/sequelize';
import * as controllers from './controllers';


class App extends Server {
    private readonly SERVER_STARTED = 'Server started on port: ';

    constructor() {
        super(true);
        const corsMiddleware = cors({
            origin: '*',
            preflightContinue: true,
        });

        sequelize.sync({
            force: true,
        });

        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true,
        }));

        this.app.use(compression());
        this.app.use(logger('common', {
            stream: fs.createWriteStream('./access.log', {flags: 'a'}),
        }));

        this.app.use(logger('dev'));
        this.app.use(corsMiddleware);
        this.app.options('*', corsMiddleware);
        this.setupControllers();
    }

    private setupControllers(): void {
        const ctlrInstances = [];
        for (const name in controllers) {
            if (controllers.hasOwnProperty(name)) {
                const controller = (controllers as any)[name];
                ctlrInstances.push(new controller());
            }
        }
        super.addControllers(ctlrInstances);
    }

    public start(port: number): void {
        this.app.get('*', (req, res) => {
            res.send(this.SERVER_STARTED + port);
        });

        this.app.listen(port, () => {
            Logger.Imp(this.SERVER_STARTED + port);
        });
    }
}

export default App;
