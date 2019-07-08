import 'module-alias/register';

import { Sequelize } from 'sequelize';
import * as express from 'express';
import * as cors from 'cors';

import { R } from '@libs/ramda';

import { bootstrap } from './bootstrapper';

const CONNECTION_STRING = 'postgres://test:test1234@db/pg-db-test';

const app = express();

const registerAppDependencies = (app: express.Express): void => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
}

const initializeDbConnect = (): Sequelize =>
    new Sequelize(CONNECTION_STRING);

const registerRoutes = (route: express.Router) => app.use('/api/v1', route);

// core 
const connection = initializeDbConnect();
const routes = bootstrap(connection);

registerAppDependencies(app);
R.forEach(registerRoutes, routes)

app.listen(7070, () => console.log(`Started at 7070 port`));

