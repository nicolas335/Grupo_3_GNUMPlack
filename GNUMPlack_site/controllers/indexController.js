const db = require('../database/models');
const {Op} = require('Sequelize');
module.exports = {
    home : (req, res) =>{
      db.Products.findAll()
        .then(products => {
            /* return res.send(products) */
            return res.render("home",{products})
        })
        .catch(err => res.send(err))
        /* return res.render("home") */
    },

    aboutUs: (req, res) => {
        return res.render('aboutUs')
    }    
}