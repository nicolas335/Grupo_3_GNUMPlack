let fs = require('fs')
const { join } = require('path')
let path = require('path')
let products = require('../data/products.json')
let guardarProductos = (dato) => fs.writeFileSync(path.join(__dirname,"../data/products.json"),JSON.stringify(dato,null,4),'utf-8')

module.exports = {
    create :(req, res) =>{
        return res.render('admin/create');
    },
    
    store: (req, res) => {
            let { name, description, dimensions, category, condition, stock, price, qualities, discount, advantage, image} = req.body;

            let newAdvantages = advantage.split('--');
            let newQualities = qualities.split('--');
            let newImage = image.split();
            

            let newProduct = {
                id: products[products.length - 1].id + 1,
                name: name,
                description: description,
                dimensions: dimensions,
                category: category,
                condition: condition,
                stock: +stock,
                price: +price,
                discount: +discount,
                qualities: newQualities,
                advantage: newAdvantages,
                image: newImage,
            }

            products.push(newProduct)
            guardarProductos(products)

            /* Redirecciona a la lista de productos en admin*/
            return res.redirect('/admin/list')
        },
    list :(req, res) =>{
        return res.render('admin/list',{
            products
        });
    },
    
    edit :(req, res) =>{
        let id = +req.params.id
        let productoAEditar = products.find(producto => producto.id === id)
       /*  let cualidades = productoAEditar.qualities.join(' -- ')
        let ventajas = productoAEditar */
        return res.render('admin/edit',{
            producto:productoAEditar
        });
    },

    update :(req,res) =>{
        //return res.send(req.body)
        let id = +req.params.id
        let {name,description,category,price,qualities,advantage} = req.body
        let newAdvantages = advantage.split('--');
        let newQualities = qualities.split('--');
        products.forEach(producto => {
            if (producto.id === id) {
                producto.name = name
                producto.description = description
                producto.category = category
                producto.price = +price
                producto.qualities = newQualities
            }
        })
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