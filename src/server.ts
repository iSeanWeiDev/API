import 'dotenv/config';
import App from './app';
import { sequelize } from './config/sequelize';

sequelize.sync({
  force: false,
});

const port: any = process.env.PORT || 3000;
const app = new App();
app.start(port);
