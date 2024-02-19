const heroRouter = require('express').Router();


heroRouter.post('/'); //create
heroRouter.get('/'); // read all
heroRouter.get('/:heroId'); //read one
heroRouter.put('/:heroId'); //update one
heroRouter.delete('/:heroId'); //delete one


module.exports = heroRouter;
