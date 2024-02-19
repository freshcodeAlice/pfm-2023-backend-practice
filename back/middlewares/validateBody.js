const {heroCreateSchema} = require('../validationSchemas/heroSchema');

module.exports.validateBody = async (req, res, next) => {
    try {
        const {body} = req;
        const result = await heroCreateSchema.validate(body);
        // як варіант - доробити додаткову фільтрацію даних і дописувати до об'єкта req вже відфільтровані дані
        next();
    } catch(error) {
        next(error); // ось сюди може попасти помилка самого япа
    }
}