import globals from './globals';

import expressConfigurator from './config/express.config';
import routesConfig from './routes';

const app = expressConfigurator(routesConfig);

export default app;
