let fs = require('fs')
let path = require('path')
let products = require('../data/products.json')
let guardarProductos = (dato) => fs.writeFileSync(path.join(__dirname,"../data/products.json"),JSON.stringify(dato,null,4),'utf-8')

module.exports = {
    create :(req, res) =>{
        return res.render('admin/create');
    },

    list :(req, res) =>{
        return res.render('admin/list',{
            products
        });
    },
    
    edit :(req, res) =>{
        let id = +req.params.id
        let productoAEditar = products.find(producto => producto.id === id)
        return res.render('admin/edit',{
            producto:productoAEditar
        });
    },

    update :(req,res) =>{
        return res.send(req.body)
        let id = +req.params
        let {Name,Description,Category,Price,Qualities} = req.body
        products.forEach(producto => {
            if (producto.id === id) {
                producto.name = Name
                producto.description = Description
                producto.category = Category
                producto.price = +Price
                producto.qualities = Qualities
            }
        })
        console.log(products);
        guardarProductos(products)
        return res.redirect(`/admin/list`)
    },

    trash:(req,res)=>{
        let id = +req.params.id
        let productosActualizados = products.filter(producto => producto.id !== id)
        guardarProductos(productosActualizados)
        return res.redirect('/admin/list')
    }
}