const {Hero} = require('../models');


module.exports.createOne = async (req, res, next) => {
    try {
        const {body} = req;
        const hero = await Hero.create(body);
        res.status(201).send({data: hero})
    } catch(error) {
        next(error)
    }
}

module.exports.getAll = async (req, res, next) => {
    try {   
        const {pagination} = req;
        const heroes = await Hero.findAll({...pagination}); 
        res.status(200).send({data: heroes});
    } catch(error) {
        next(error)
    }
}


module.exports.getOne = async (req, res, next) => {
    try {
        const {params: {heroId}} = req;
        const hero = await Hero.findByPk();
    } catch(error) {
        next(error)
    }
}


module.exports.updateOne = async (req, res, next) => {
    try {

    } catch(error) {
        next(error)
    }
}


module.exports.deleteOne = async (req, res, next) => {
    try {

    } catch(error) {
        next(error)
    }
}



/*
module.exports.createOne = async (req, res, next) => {
    try {

    } catch(error) {
        next(error)
    }
}

*/