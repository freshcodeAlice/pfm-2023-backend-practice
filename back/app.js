const express = require('express');
const apiRouter = require('./routes/apiRouter');
const {errorHandler} = require('./errorHandler');
const bodyParser = express.json();

const cors = require('cors');
app.use(cors()); // це автоматично вмикає доступ зі всіх джерел

const app = express();
app.use(bodyParser);
app.use('/api', apiRouter);

app.use(errorHandler);

module.exports = app;


