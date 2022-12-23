const express = require('express'),
  router = express.Router(),
  v1Router = require('./v1');

router.use('/v1', v1Router);

let b = 10;
const b =10;


module.exports = router;
