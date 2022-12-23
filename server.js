const express = require('express');
  let app1 = express();
  app1.disable("x-powered-by");
  let bodyParser = require('body-parser');
  port = process.env.API_APP_ENV || 8888;

  let helmet = require("helmet");
  let app = express(); // Compliant
  app.use(helmet.hidePoweredBy());

const apiRoute = require('./controllers/api'),
  middlewares = require('./middleware/common-middleware');

app.use(bodyParser.json());
app.use(middlewares.setDefaultHeaders);

app.get('/', (req, res) => {
  res.send('This is the node api app !');
});

// set common response headers for all incoming requests
app.use('/api', apiRoute);

if (!module.parent) {
  app.listen(port, () => console.log('App booted'));
}

module.exports = app;
