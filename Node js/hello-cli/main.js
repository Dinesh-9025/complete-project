const express = require('express');
var cors = require('cors')

const app = express();
const bodyParser = require('body-parser');
global.__basedir = __dirname;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

const index = require('./Routes/index');
app.use('/', index);

app.listen(8081, () => {
    console.log('Express app listening on port 8081');
  });
