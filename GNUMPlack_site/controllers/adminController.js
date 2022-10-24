const { validationResult } = require('express-validator');
let fs = require('fs');
const { join } = require('path');
let path = require('path');
let products = require('../data/products.json');
const db = require('../database/models')

let db = require('../database/models')


let guardarProductos = (dato) => fs.writeFileSync(path.join(__dirname,"../data/products.json"),JSON.stringify(dato,null,4),'utf-8')
let productsRemoved = require('../data/productsRemoved.json')
guardarHistorial = (dato) => fs.writeFileSync(path.join(__dirname,'../data/productsRemoved.json'),JSON.stringify(dato,null,4),'utf-8')


module.exports = {
    create: async (req, res) => {
        try {
            let categories_products = await db.Categories_products.findAll()
            let conditions = await db.Conditions.findAll()
           /* return res.send (categories_products)*/
            return res.render('admin/create'), {
                categories_products,
                conditions
            }
        } catch (error) {
            return res.render(error)
        }
    },

    store: (req, res) => {
        let errors = validationResult(req)
        //return res.send(req.fileValidationError)
        if (req.fileValidationError) {
            let image = {
                param: 'image',
                msg: req.fileValidationError,
            }
            errors.errors.push(image);
        }

        if (errors.isEmpty()) {
            /*let newAdvantages = advantage.split('--');
            let newQualities = qualities.split('--');
            //let newImage = image.split();*/

            let { name, description, dimensions, category, condition, stock, price, qualities, discount, advantage } = req.body;
             //return res.send(req.body)//

            db.Products.create({

                name: name,
                description: description,
                dimensions: dimensions,
                categories_products_id: category,
                conditions_id: condition,
                stock: +stock,
                price: +price,
                discount: +discount,
                qualities: qualities,
                advantages: advantage,
                image: req.file.filename
          
          }) .then(p => {  
            res.redirect("/admin/list");
             
            })
              .catch(error => res.send(error))

        } else {
            let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', 'public', 'img', 'products', dato))
            req.files.forEach(image => {
                if (ruta(image) && (image !== "default-product-image.png")) {
                    fs.unlinkSync(path.join(__dirname, '..', 'public', 'img', 'products', req.file.filename))
                }

            })

            return res.render('admin/create', {
                errors: errors.mapped(),
                old: req.body
            })
        }
        },
    list :(req, res) =>{
        db.Products.findAll({
            include: [
                {
                    all:true
                }
            ]
        })
        .then(products => {
            return res.render('admin/list',{
                products
        })
        
        });
        
    },

    edit: (req, res) => {
        let id = +req.params.id
        let productoAEditar = products.find(producto => producto.id === id)
        return res.render('admin/edit', {
            producto: productoAEditar
        });
    },

    update: (req, res) => {
        let errors = validationResult(req)
        if (req.fileValidationError) {
            let image = {
                param: 'image',
                msg: req.fileValidationError,
            }
            errors.errors.push(image);
        }

        if (errors.isEmpty()) {
            let id = +req.params.id
            return res.send(req.body)
            let { name, description, dimensions, category, condition, discount, price, qualities, stock, advantage } = req.body
            products.forEach(producto => {
                if (producto.id === id) {
                    producto.name = name
                    producto.description = description
                    producto.dimensions = dimensions
                    producto.category = category
                    producto.condition = condition
                    producto.discount = +discount
                    producto.price = +price
                    producto.qualities = qualities.split('--')
                    producto.stock = +stock
                    producto.advantage = advantage.split('--')
                    producto.image = (req.file ? req.file.filename : producto.image)
                }
            })
            guardarProductos(products)
            return res.redirect(`/admin/list`)

        } else {
            let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', 'public', 'img', 'products', dato))
            if (req.file && ruta(req.file.filename) && (req.file.filename !== "default-product-image.png")) {
                fs.unlinkSync(path.join(__dirname, '..', 'public', 'img', 'products', req.file.filename))
            }

            let id = +req.params.id
            let productoAEditar = products.find(producto => producto.id === id)

            res.render('admin/edit', {
                producto: productoAEditar,
                errors: errors.mapped()
            })
        }
    },

    trash: (req, res) => {
        let id = +req.params.id
        let productoEliminado = products.find(producto => producto.id === id)

        let productosActualizados = products.filter(producto => producto.id !== id)
        guardarProductos(productosActualizados)

        productoEliminado.id = productsRemoved[productsRemoved.length - 1].id - 1
        productsRemoved.push(productoEliminado)
        guardarHistorial(productsRemoved)

        return res.redirect('/admin/list')
    },

    history: (req, res) => {
        return res.render('admin/listDeleted', {
            products: productsRemoved
        })
    },

    restore: (req, res) => {
        let id = +req.params.id
        let productoARestaurar = productsRemoved.find(producto => producto.id === id)
        let productosEliminados = productsRemoved.filter(producto => producto.id !== id)

        guardarHistorial(productosEliminados)

        productoARestaurar.id = products[products.length - 1].id + 1
        products.push(productoARestaurar)
        guardarProductos(products)
        res.redirect('/admin/list')
    },

    destroy: (req, res) => {
        let id = +req.params.id
        let productosEliminados = productsRemoved.filter(producto => producto.id !== id)

        guardarHistorial(productosEliminados)
        res.redirect('/admin/listDeleted')
    }
}