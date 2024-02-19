const heroRouter = require('express').Router();
const {pagination,
    validateBody,
    getSuperpower} = require('../middlewares');
const HeroController = require('../controllers/HeroControlller');
const upload = require('../middlewares/multer');

heroRouter.post('/', upload.single('image'), validateBody, getSuperpower, HeroController.createOne); //create
heroRouter.get('/', pagination, HeroController.getAll); // read all
heroRouter.get('/:heroId', HeroController.getOne); //read one
heroRouter.put('/:heroId', upload.single('image'), getSuperpower, HeroController.updateOne); //update one
heroRouter.delete('/:heroId', HeroController.deleteOne); //delete one


module.exports = heroRouter;
