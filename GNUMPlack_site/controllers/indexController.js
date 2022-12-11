const db = require('../database/models');
const {Op} = require('Sequelize');
module.exports = {
    home : (req, res) =>{
      const categories = ["Placa de yeso","Placa de yeso laminado","Placa de yeso con fibras","Placa de lana de madera","Placa de cemento"];
      db.Products.findAll()
        .then(products => {
            /* return res.send(products) */
            const saleProducts = products.filter(p => p.conditions_id === 2);
            const featuredProducts = products.filter(p => p.conditions_id === 1);
            return res.render( "home", {products ,saleProducts ,featuredProducts ,categories })
        })
        .catch(err => res.send(err))
        /* return res.render("home") */
    },

    aboutUs: (req, res) => {
        return res.render('aboutUs')
    }    
}