import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import lusca from 'lusca';
import cors from 'cors';
import express from 'express';

const expressConfigurator = (routesConfig) => {
  const app = express();

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
  routesConfig(app);
  app.listen(process.env.PORT || 3001, () => {
    console.log("My API is running...");
  });

  return app;
};

export default expressConfigurator;
