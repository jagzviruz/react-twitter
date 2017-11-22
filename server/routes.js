import path from 'path';
import twitter from './api/twitter';
import express from 'express';

const routesConfig = app => {
  app.use('/api/search', twitter);

  app.use('/static/js', express.static(path.resolve(`${app.get('appPath')}/static/js`)));

  app.route('/*').get((req, res) => {
    res.sendFile(path.resolve(`${ app.get('appPath') }/index.html`));
  })
}

export default routesConfig;
