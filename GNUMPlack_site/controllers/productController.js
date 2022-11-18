//const products = require('../data/products.json')
const db = require('../database/models')
const {Op} = require('Sequelize')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports={
     product:(req,res)=>{
        db.Products.findAll()
        .then(products => {
            return res.render("product",{products})
        })
        .catch(error => res.send(error))
    },
     detail:(req,res)=>{
        const idParams = +req.params.id
          db.Products.findOne({
               where: {
                   id : idParams
               },
               include: [{
                   all:true
               }]
           })
           .then(product => {
               //return res.send(product)
               return res.render("detail",{
                productoDetallado:product,
                toThousand
               })
           })
           .catch(error => res.send(error))
   },
   search: (req,res) => {
    let busqueda = req.query.search

    db.Products.findAll({
        where: {
            [Op.or]: [
                {name: {[Op.substring]: busqueda}},
                {description: {[Op.substring]: busqueda}},
                {qualities: {[Op.substring]: busqueda}},
                {advantages: {[Op.substring]: busqueda}}
            ]
        }
    })
    .then(resultado => {
        //return res.send(resultado)
        res.render('search',{
            products:resultado,
            busqueda
        })
    })
    .catch(error => res.send(error))

   }
}