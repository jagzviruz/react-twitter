## Sample React + Redux + Redux Saga + Node.js( with Express ) Application

This is a sample application to demonstrate how to build a fullstack React + Redux Application
with a Node.js (Express) backend to integrate with a third party API.

Once you have cloned the application on a system having node.js,
you need to run `npm run setup` in the root folder to install all the
dependencies.

Before you can do anything, you need to populate the values from your Twitter App Console (https://app.twitter.com)
in `server/.env`

#### Development mode
To run the application in 'development' mode you can use `npm run dev`.
This will run 2 servers :
- An express server that proxies requests to Twitter API.
- Webpack Server that gets installed with the default `create-react-app` that proxies all AJAX requests to the Express server.


### Production Mode
The application can be budled after minification and uglification to run as a single application on express.js
`npm run build` will create a `dist.zip` (and a `dist` folder ) with the production ready code.
This dist folder contains `server` and `client` folders, a `package.json` and a `.env` file.
Run `npm install` to install all production dependencies and the issue `npm run start` to run the application in `production` mode
on `localhost:80`. You might need `sudo` depending on your environment setup.
The application is started as a forever process in the background(daemon). So be sure to kill it.

## TODO
- Implement pagination
- Make tweet results clickable to open thread of discussion if any.
- Make links in tweet clickable
- Display images etc. if applicable.
- Support advanced queries using tags-input in the searchbar to make location based and time range queries.
