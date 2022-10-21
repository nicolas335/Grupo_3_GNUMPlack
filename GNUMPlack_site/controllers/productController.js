const products = require('../data/products.json')

module.exports={
     product:(req,res)=>{
          return res.render("product",{products})
    },
     detail:(req,res)=>{
          let id = +req.params.id
          let productoDetallado = products.find(producto => producto.id === id)
          return res.render("detail",{productoDetallado})
   }
}