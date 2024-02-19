const {Hero, Superpower, HeroImage} = require('../models');


module.exports.createOne = async (req, res, next) => {
    try {
        const {body, file: {filename}, powers} = req;
        // image -> req.file
        const hero = await Hero.create(body);
        const image = await hero.createHeroImage({imagePath: filename});
        if (powers) {
            await Hero.addSuperpower(powers);
        }
        res.status(201).send({data: hero})
    } catch(error) {
        next(error)
    }
}

module.exports.getAll = async (req, res, next) => {
    try {   
        const {pagination} = req;
        const heroes = await Hero.findAll({
            include: [{
                model: Superpower
            }], 
            ...pagination}); 
        res.status(200).send({data: heroes});
    } catch(error) {
        next(error)
    }
}


module.exports.getOne = async (req, res, next) => {
    try {
        const {params: {heroId}} = req;
        const hero = await Hero.findAll({
            where: {
                id: Number(heroId)
            },
            include: [{
                model: Superpower
            }]
        });
        res.status(200).send({data: hero})
    } catch(error) {
        next(error)
    }
}


module.exports.updateOne = async (req, res, next) => {
    try {
        // image -> req.file
        const {body, file: {filename}, params: {heroId}} = req;
        // image -> req.file
        const hero = await Hero.update(body, {
            where: {
                id: Number(heroId)
            }
        });
        if (filename) {
            const image = await HeroImage.create({imagePath: filename});
            hero.addHeroImage(image);
        }
        if (powers) {
            hero.addSuperpower(powers);
        }

        res.status(201).send({data: hero})
    } catch(error) {
        next(error)
    }
}


module.exports.deleteOne = async (req, res, next) => {
    try {
        const {params: {heroId}} = req;
        const del = await Hero.destroy({
            where: {
                id: Number(heroId)
            }
        });
        res.status(200).send({meta: {
            deleted: del
        }})
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