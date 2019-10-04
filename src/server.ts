import App from './app';
import * as dotEnv from 'dotenv';

dotEnv.config();
const port: any = process.env.PORT || 3000;
const app = new App(port);
app.listen();
