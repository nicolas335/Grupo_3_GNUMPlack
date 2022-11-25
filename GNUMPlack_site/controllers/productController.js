//const products = require('../data/products.json')
const db = require('../database/models')
const {Op, where} = require('Sequelize')
/* const Sequelize  = require('Sequelize') */
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports={
     product:(req,res)=>{
        
        let placaYeso = db.Products.findAll({
            where: {
                categories_products_id: 1,
            }
        })
        let placaLaminado = db.Products.findAll({
            where: {
                categories_products_id: 2,
            }
        })
        let placaFibras = db.Products.findAll({
            where: {
                categories_products_id: 3,
            }
        })
        let placaMadera = db.Products.findAll({
            where: {
                categories_products_id: 4,
            }
        })
        let placaCemento = db.Products.findAll({
            where: {
                categories_products_id: 5,
            }
        })
        Promise.all([placaYeso, placaLaminado, placaFibras,placaMadera,placaCemento])
            .then(([placaYeso, placaLaminado, placaFibras,placaMadera,placaCemento]) => {
                res.render("product", {
                    placaYeso ,
                    placaLaminado ,
                    placaFibras ,
                    placaMadera ,
                    placaCemento
                });
            })
            .catch((error) => res.send(error));
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