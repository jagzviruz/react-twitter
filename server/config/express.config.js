import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import lusca from 'lusca';
import cors from 'cors';
import express from 'express';

import config from './env';

const expressConfigurator = (routesConfig) => {
  const app = express();
  const PORT = config.port;

  app.use(bodyParser.json()); // support json encoded bodies
  app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
  app.use(helmet({
    noCache: true,
    frameguard: { action: 'deny' },
  }));
  app.use(
    morgan(
      '[:date[iso]] :date[web] :remote-addr - :remote-user :method :url :status[pretty] :response-time',
    ),
  );
  app.use(cors());

  app.set('appPath', config.appPath);
  app.set('env', config.env);

  routesConfig(app);
  app.listen( PORT || 3001, () => {
    console.log(`My API is running on ${PORT} in "${config.env}" mode ...`);
  });

  return app;
};

export default expressConfigurator;
