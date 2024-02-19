const {Superpower} = require('../models');


module.exports.getSuperpower = async (req, res, next) => {
    try {
        const {body: {powers}} = req;
        //powers: ['flying', 'fire','power']
    
        if (powers && powers.length) {
            const superPowers = [];
            for (const name of powers) {
                let powerInstanse = await Superpower.findAll({
                    where: {
                        name
                    }
                });
                if (!powerInstanse) {
                    powerInstanse = await Superpower.create({
                        name
                    });
                }
                superPowers.push(powerInstanse)
            }
            req.powers = superPowers
        }
        next();
    } catch(error) {
        next(error)
    }
}