import App from './app';
import {sequelize} from './config/sequelize';

import * as dotEnv from 'dotenv';

dotEnv.config();
sequelize.sync({
    force: true,
});

const port: any = process.env.PORT || 3000;
const app = new App();

app.start(port);
