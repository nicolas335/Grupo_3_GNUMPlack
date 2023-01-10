const { validationResult, Result } = require('express-validator');
const path = require('path');
const db = require('../database/models')
const {Op, where} = require('Sequelize')
/*  */
module.exports = {
     cart : (req, res) => {
        db.Carts.findAll({
            where: {
                users_id: req.session.userLogin.id
            },
            include: [
                {
                    all:true
                }
            ],

        })
        .then(carts => {
            //return res.send(cartsPending)
            let cartsPending = carts.filter(cart => cart.order.status === 'pending')
                        
            return res.render('cart',{cart: cartsPending})
        })
        .catch(err => res.send(err))
    },
    add: (req,res) => {
        let idParams = +req.params.id

        db.Orders.findOne({
            where: {
                users_id: req.session.userLogin.id,
                status: 'pending'
            }
        })
        .then(result => {
            if (result) {       //Pregunto si existe la orden
                let ordenes = result
                db.Carts.findAll({      //Busco en la db los productos con esa orden
                    where: {
                        users_id: req.session.userLogin.id,
                        orders_id: ordenes.id
                    }
                })
                .then(productCart => {
                    let productInCart = productCart.filter(product => product.products_id == idParams) //filtro el carrito por el id del producto que se quiere agregar
                    if (productInCart.length==0) {    //Si el usuario no tiene ese producto en su carrito se crea
                        db.Carts.create({
                            users_id: +req.session.userLogin.id,
                            products_id: idParams,
                            orders_id: +ordenes.id,
                            amount: 1,
                            createdAt: new Date,
                            updatedAt: new Date
                        })
                        .then(addProduct => {
                            return res.redirect(`/product/detail/${idParams}`)
                        })
                    }
                })
                .catch(err => res.send(err))
                
            } else {        //Si no existe la orden la creo y luego creo el carrito (que no deberia existir)
                db.Orders.create({
                    users_id: req.session.userLogin.id,
                    status: 'pending',
                    createdAt: new Date,
                    updatedAt: new Date
                })
                .then(newOrder => {
                    db.Carts.create({
                        users_id: req.session.userLogin.id,
                        products_id: idParams,
                        orders_id: +newOrder.id,
                        amount: 1,
                        createdAt: new Date,
                        updatedAt: new Date
                    })
                    .then(response => {
                        // Creo la nueva session
                        req.session.userLogin = {
                            id: req.session.userLogin.id,
                            first_name: req.session.userLogin.first_name,
                            last_name: req.session.userLogin.last_name,
                            email: req.session.userLogin.email,
                            image: req.session.userLogin.image,
                            categories_users_id: req.session.userLogin.categories_users_id,
                            cart: 1
                        }
                    if (req.cookies.recordar) {
                        res.cookie('recordar', '', { maxAge: -1 })
                        res.cookie('recordar', req.session.userLogin, { maxAge: 1000 * 60 * 60 * 24 })
                    }
                        return res.redirect(`/product/detail/${idParams}`)
                    })
                })
                .catch(err => res.send(err))
            }
            //return res.send(result)
        })
        .catch(err => res.send(err))
    },
    destroy: (req,res) => {
        const idParams = +req.params.id
        db.Orders.findOne({
            where: {
                users_id: req.session.userLogin.id,
                status: 'pending'
            }
        })
        .then(orders => {
            let order = orders;
            db.Carts.findAll({
                where: {
                    users_id: req.session.userLogin.id,
                    orders_id: orders.id
                }
            })
            .then(productCart => {
                if (productCart.length == 1) {  //si existe un solo carrito elimino el carrito y la orden
                    let cartDetele = db.Carts.destroy({
                        where: {
                            products_id: idParams,
                            orders_id: order.id
                        }
                    })
                    let OrderDelete = db.Orders.destroy({
                        where: {
                            users_id: req.session.userLogin.id,
                            status: 'pending'
                        }
                    })
                    Promise.all([cartDetele,OrderDelete])
                    .then(([cartDetele,OrderDelete]) => {
                        res.redirect('/cart')
                    })
                    .catch(err => res.send(err))

                } else {    // si hay mas de un carrito, solo elimino el carrito
                    db.Carts.destroy({
                        where: {
                            products_id: idParams,
                            orders_id: order.id
                        }
                    })
                    .then(response => {
                        res.redirect('/cart')
                    })
                    .catch(err => res.send(err))
                }
                //res.send(productCart)
            })
        })
        .catch(err => res.send(err))
    },
    buy: (req,res) => {
        console.log('entre al metodo');
        db.Orders.findOne({
            where: {
                users_id: req.session.userLogin.id,
                status: 'pending'
            }
        })
        .then(order => {
            if (order) {
                db.Orders.update({
                    status: 'complete'
                },{
                    where: {id: order.id}
                })
                .then(response => {
                    req.session.userLogin = {
                        id: req.session.userLogin.id,
                        first_name: req.session.userLogin.first_name,
                        last_name: req.session.userLogin.last_name,
                        email: req.session.userLogin.email,
                        image: req.session.userLogin.image,
                        categories_users_id: req.session.userLogin.categories_users_id,
                        cart: 0
                    }
                    if (req.cookies.recordar) {
                        res.cookie('recordar', '', { maxAge: -1 })
                        res.cookie('recordar', req.session.userLogin, { maxAge: 1000 * 60 * 60 * 24 })
                    }
                    res.redirect('/')
                })     
                .catch(err => res.send(err))           
            } else {
                res.redirect('/')                
            }
        })
        .catch(err => res.send(err))           
    }
} 