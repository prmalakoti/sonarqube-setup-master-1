const express = require('express'),
  appRoutes = express(),
  bodyParser = require('body-parser'),
  port = process.env.API_APP_ENV || 8888;

const apiRoute = require('./controllers/api'),
  middlewares = require('./middleware/common-middleware');

appRoutes.use(bodyParser.json());
appRoutes.use(middlewares.setDefaultHeaders);

appRoutes.get('/', (req, res) => {
  res.send('This is the node api app !');
});

// set common response headers for all incoming requests
appRoutes.use('/api', apiRoute);

if (!module.parent) {
  appRoutes.listen(port, () => console.log('App booted'));
}

module.exports = appRoutes;
