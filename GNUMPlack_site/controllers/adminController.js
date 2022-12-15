const fs = require('fs')
const { validationResult } = require('express-validator');
const path = require('path');
const db = require('../database/models')


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

            let { name, description, dimensions, category, condition, stock, price, qualities, discount, advantage } = req.body;
             //return res.send(req.body)

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
                image: req.file ? req.file.filename : 'default-product-image.png'
          
          }) .then(p => {  
            res.redirect("/admin/list");
             
            })
              .catch(error => res.send(error))

        } else {
            let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', 'public', 'img', 'products', dato))
            if (ruta(req.file.filename) && (req.file.filename !== "default-product-image.png")) {
                fs.unlinkSync(path.join(__dirname, '..', 'public', 'img', 'products', req.file.filename))
            }
                
            let categories_products = db.Categories_products.findAll()
            let conditions = db.Conditions.findAll()
            Promise.all([categories_products,conditions])
            .then(([categories_products,conditions]) => {
            })
            return res.render('admin/create'), {
                errors: errors.mapped(),
                old: req.body,
                categories_products,
                conditions
            }
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
    
    edit :(req, res) =>{
        let product = db.Products.findOne({
            where: {
                id : req.params.id
            },
            include: [{
                all:true
            }]
        })
        let categories_products = db.Categories_products.findAll()
        let conditions = db.Conditions.findAll()
        Promise.all([product,categories_products,conditions])
        .then(([product,categories_products,conditions]) => {
            //return res.send(producto)
            res.render('admin/edit',{
                producto: product,
                categories_products,
                conditions
            })
        })
        .catch(error => res.send(error))
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
        let idParams  =+req.params.id

        if (errors.isEmpty()) {

            let oldProduct = db.Products.findByPk(idParams)
            let updatedProducto = db.Products.update({
                name: req.body.name,
                description: req.body.description,
                dimensions: req.body.dimensions,
                discount: +req.body.discount,
                price: +req.body.price,
                qualities: req.body.qualities,
                stock: +req.body.stock,
                categories_products_id: +req.body.category,
                condition_id: +req.body.condition,
                updatedAt: new Date,
            },{
                where: {
                    id : idParams
                }
            })
            Promise.all([oldProduct,updatedProducto])
            .then(([oldProduct,updatedProducto]) => {    
                
                if (req.file) {
                    db.Products.update({
                        image: req.file.filename
                    }, {
                        where: {id: idParams}
                    })
                    .then(resultado => {
                        let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', 'public', 'img', 'products', dato))
                        if (ruta(req.file.filename) && (oldProduct.image !== "default-product-image.png")) {
                            fs.unlinkSync(path.join(__dirname, '..', 'public', 'img', 'products', oldProduct.image))
                        }
                    })
                }
                return res.redirect('/admin/list')
            })
            .catch(error => res.send(error))

        } else {
            let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', 'public', 'img', 'products', dato))
            if (ruta(req.file.filename) && (req.file.filename !== "default-product-image.png")) {
                fs.unlinkSync(path.join(__dirname, '..', 'public', 'img', 'products', req.file.filename))
            }
            
            let categories_products = db.Categories_products.findAll()
            let conditions = db.Conditions.findAll()
            let product = db.Products.findOne({
                where: {
                    id : idParams
                },
                include: [{
                    all:true
                }]
            })
            Promise.all([product,product,categories_products,conditions])
            .then(([product,categories_products,conditions]) => {
                res.render('admin/edit',{
                    producto: product,
                    categories_products,
                    conditions,
                    errors:errors.mapped()
                })
            })
            .catch(error => res.send(error))
        }
    },

    trash:(req,res)=>{
        
        let idParams = +req.params.id
        db.Products.findOne({
            where: {id: idParams},
            include: [{
                all:true
            }] 
        })
        .then(producto => {
            //return res.send(producto)
            // Agrego el producto al historial
            db.Removed_products.create({
                name: producto.name,
                description: producto.description,
                dimensions: producto.dimensions,
                discount: producto.discount,
                price: producto.price,
                qualities: producto.qualities,
                advantages: producto.advantages,
                image: producto.image,
                stock: producto.stock,
                categories_products_id: producto.categoryProduct.id,
                conditions_id: producto.condition.id,
                createdAt: producto.createdAt,
                updatedAt: new Date
            })

            .then(historial => {
                db.Products.destroy({
                    where: {id: idParams}
                })
            })
            .then(producto => {
                res.redirect('/admin/list')
            })
        })
        .catch(error => res.send(error))
        
    },

    history: (req,res) => {
        db.Removed_products.findAll()
        .then(productsRemoved => {
            return res.render('admin/listDeleted',{
                products:productsRemoved
            })
        })
    },

    restore: (req,res) => {
        let idParams = +req.params.id
        
        db.Removed_products.findOne({
            where: {id: idParams},
            include: [{
                all:true
            }] 
        })
        .then(producto => {
            //return res.send(producto)
            db.Products.create({
                name: producto.name,
                description: producto.description,
                dimensions: producto.dimensions,
                discount: producto.discount,
                price: producto.price,
                qualities: producto.qualities,
                advantages: producto.advantages,
                image: producto.image,
                stock: producto.stock,
                categories_products_id: producto.categoryProduct.id,
                conditions_id: producto.condition.id,
                createdAt: producto.createdAt,
                updatedAt: new Date
            })
            .then(eliminar => {
                db.Removed_products.destroy({
                    where: {id: idParams}
                })
            })
            .then(redireccion => {
                res.redirect('/admin/list')
            })
        })
        .catch(error => res.send(error))
        
    },

    destroy: (req,res) => {
        let idParams = +req.params.id
        db.Removed_products.findByPk(idParams)
        .then(productRemoved => {
            let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', 'public', 'img', 'products', dato))
            if (ruta(productRemoved.image) && (productRemoved.image !== "default-product-image.png")) {
                fs.unlinkSync(path.join(__dirname, '..', 'public', 'img', 'products', productRemoved.image))
            }
        })
        .then(respuesta => {
            db.Removed_products.destroy({
                where: {id:idParams}
            })
            .then(redireccion => {
                res.redirect('/admin/listDeleted')
            })
        })
        .catch(errors => res.send(errors))        
    }
}