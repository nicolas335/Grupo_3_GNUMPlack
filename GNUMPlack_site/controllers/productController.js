const products = require('../data/products.json')

module.exports={
     product:(req,res)=>{
          return res.render("product",{products})
    },
     detail:(req,res)=>{
          db.Products.findOne({
               where: {
                   id : req.params.id
               },
               include: [{
                   all:true
               }]
           })
           .then(product => {
               //res.send(product)
               return res.render("detail",{productoDetallado:product})
           })
           .catch(error => res.send(error))
   } 
}