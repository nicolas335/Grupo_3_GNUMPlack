const db = require('../database/models')

module.exports = (req,res,next) => {
    let idParams = +req.params.id
    
    db.Products.findByPk(idParams)
    .then(product => {

        if (product) {
            return next()
        } else {
            res.render('errors')
        }
    })
}