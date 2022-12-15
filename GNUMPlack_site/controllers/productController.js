//const products = require('../data/products.json')
const db = require('../database/models')
const { Op, where } = require('Sequelize')
/* const Sequelize  = require('Sequelize') */
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports = {
    product: (req, res) => {

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
        Promise.all([placaYeso, placaLaminado, placaFibras, placaMadera, placaCemento])
            .then(([placaYeso, placaLaminado, placaFibras, placaMadera, placaCemento]) => {
                res.render("product", {
                    placaYeso,
                    placaLaminado,
                    placaFibras,
                    placaMadera,
                    placaCemento
                });
            })
            .catch((error) => res.send(error));
    },
    detail: (req, res) => {
        const idParams = +req.params.id
        let product = db.Products.findOne({ //busca el producto
            where: {
                id: idParams
            },
            include: [{
                all: true
            }]
        })

        let orders = db.Orders.findOne({    //busca la orden
            where: {
                users_id: req.session.userLogin.id,
                status: 'pending'
            }
        })
        let msg = 0;
        Promise.all([product, orders])
            .then(([product, orders]) => {
                if (orders) {   //pregunta si existe la orden y busca los carritos con esa orden
                    db.Carts.findAll({
                        where: {
                            users_id: req.session.userLogin.id,
                            orders_id: orders.id
                        }
                    })
                        .then(productCart => {
                            let productInCart = productCart.filter(product => product.products_id == idParams) //filtro el carrito por el id del producto que se quiere agregar
                            //return res.send(productInCart)
                            if (productInCart.length == 0) {    //si es igual a 0 el producto no esta en el carrito
                                return res.render("detail", {
                                    productoDetallado: product,
                                    msg,
                                    toThousand
                                })
                            } else {    //si es distinto de cero es porque esta en el carrito y mando el msj a la vista
                                msg = 1;
                                return res.render("detail", {
                                    productoDetallado: product,
                                    msg,
                                    toThousand
                                })
                            }
                        })
                } else {
                    return res.render("detail", {
                        productoDetallado: product,
                        msg,
                        toThousand
                    })
                }
            })
            .catch(error => res.send(error))
    },
    search: (req, res) => {
        let busqueda = req.query.search

        db.Products.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.substring]: busqueda } },
                    { description: { [Op.substring]: busqueda } },
                    { qualities: { [Op.substring]: busqueda } },
                    { advantages: { [Op.substring]: busqueda } }
                ]
            }
        })
            .then(resultado => {
                //return res.send(resultado)
                res.render('search', {
                    products: resultado,
                    busqueda
                })
            })
            .catch(error => res.send(error))

    }
}