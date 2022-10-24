//const products = require('../data/products.json')
const db = require('../database/models')


module.exports={
     product:(req,res)=>{
        db.Products.findAll()
        .then(products => {
            return res.render("product",{products})
        })
        .catch(error => res.send(error))
    },
     detail:(req,res)=>{
<<<<<<< HEAD
          let id = +req.params.id
          let productoDetallado = products.find(producto => producto.id === id)
          return res.render("detail",{productoDetallado})
   }
=======
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
               return res.render("detail",{productoDetallado:product})
           })
           .catch(error => res.send(error))
   } 
>>>>>>> ulises
}