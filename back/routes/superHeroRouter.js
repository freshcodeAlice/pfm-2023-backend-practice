const heroRouter = require('express').Router();
const {pagination} = require('../middlewares/pagination');
const {validateBody} = require('../middlewares/validateBody'); 
const HeroController = require('../controllers/HeroControlller');

heroRouter.post('/', validateBody, HeroController.createOne); //create
heroRouter.get('/', pagination, HeroController.getAll); // read all
heroRouter.get('/:heroId'); //read one
heroRouter.put('/:heroId'); //update one
heroRouter.delete('/:heroId'); //delete one


module.exports = heroRouter;
