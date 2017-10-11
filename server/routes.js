import uuid from 'uuid';
import twitter from './api/twitter';
const routesConfig = app => {
  app.use('/api/search', twitter);
}

export default routesConfig;
