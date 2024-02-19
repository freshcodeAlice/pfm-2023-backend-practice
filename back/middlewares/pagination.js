module.exports.pagination = async (req, res, next) => {
    try {
        const {query: {page}} = req;
        // ?page може не бути
        //?page=2 --> limit: 5, offset: (page-1)*limit
        const limit = 5;
        req.pagination = {
            limit,
            offset: page ? (page-1)*limit : 0
        }
        next();
    } catch(error) {
        next(error)
    }
}