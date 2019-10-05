import {Sequelize} from 'sequelize-typescript';
import * as path from 'path';

const opt: any = {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    host: process.env.DEV_DB_HOSTNAME,
    database: process.env.DEV_DB_NAME,
    dialect: 'mysql',
    port: 3306,
    models: [
        path.join(__dirname, '../models'),
    ],
};

export const sequelize = new Sequelize(opt);
