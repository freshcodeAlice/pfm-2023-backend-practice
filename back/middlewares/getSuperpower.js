const {Superpower} = require('../models');


module.exports.getSuperpower = async (req, res, next) => {
    try {
        const {body: {power}} = req;
        if (power) {
            let powerInstanse = await Superpower.findAll({
                where: {
                    name: power
                }
            });
            if (!powerInstanse) {
                powerInstanse = await Superpower.create({
                    name: power
                });
            }
            req.powers = powerInstanse;
        }
        next();
    } catch(error) {
        next(error)
    }
}