const apiRouter = require('express').Router();

const heroRouter = require('./superHeroRouter');

apiRouter.use('/heroes', heroRouter);

module.exports = apiRouter;