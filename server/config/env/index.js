/* eslint no-process-env:0 */
/* eslint import/no-dynamic-require:0 */

import path from 'path';
const rootPath = path.normalize(`${ __dirname }/../../..`); // This gives the path of the root of the module where the client and server folders are created
const appConfig = {
  env: process.env.NODE_ENV || 'dev',
  // Root path of server
  root: rootPath,
  // Server port
  port: process.env.PORT || (process.env.NODE_ENV == 'production' && 80) || 3000,

  // Server IP
  ip: process.env.IP || '0.0.0.0',
  appPath: path.join(rootPath, 'client'),
};

module.exports = appConfig;
