import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';
import * as compression from 'compression';
import * as fs from 'fs';
import {sequelize} from './config/sequelize';
import * as controllers from './controllers';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

class App extends Server {
    private readonly SERVER_STARTED = 'Server started on port: ';

    constructor() {
        super(true);
        const corsMiddleware = cors.default({
            origin: '*',
            preflightContinue: true,
        });

        sequelize.sync({
            force: false,
        });

        this.app.use(cors.default());
        this.app.use(bodyParser.urlencoded({
            extended: true,
        }));

        this.app.use(bodyParser.json());
        this.app.use(compression.default());
        this.app.use(logger.default('common', {
            stream: fs.createWriteStream('./access.log', {flags: 'a'}),
        }));

        this.app.use(logger.default('dev'));
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
