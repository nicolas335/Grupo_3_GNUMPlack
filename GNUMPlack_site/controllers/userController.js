const path = require('path');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../database/models')

module.exports = {
    signin: (req, res) => {
        return res.render('users/signin')
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);
        if (req.fileValidationError) {
            let image = {
                param: 'imageUser',
                msg: req.fileValidationError,
            }
            errors.errors.push(image);
        }
        if (errors.isEmpty()) {
            let { name, lastName, email, pass, phoneNumber, city, gender } = req.body;

            db.Users.create({
                first_name: name,
                last_name: lastName,
                email: email,
                password: bcryptjs.hashSync(pass, 12),
                phoneNumber: phoneNumber,
                city: city,
                genders_id: gender,
                image: req.file ? req.file.filename : "default-profile-image.jfif",
                categories_users_id: 1
            })
                .then(user => {
                    req.session.userLogin = {
                        first_name: user.name,
                        last_name: user.lastName,
                        email: user.email,
                        image: user.image,
                        categories_users_id: user.categories_users_id
                    }
                    res.cookie('recordar', req.session.userLogin, { maxAge: 1000 * 60 * 60 * 24 })
                })
                .then(iniciar => {
                    return res.redirect('/')
                })
                .catch(errors => res.send(errors))

        } else {

            return res.render('users/signin', {
                errors: errors.mapped(),
                old: req.body
            })
        }
    },

    login: (req, res) => {
        return res.render('users/login')
    },
    processLogin: (req, res) => {
        let errors = validationResult(req)
        // return res.send(errors); 
        if (errors.isEmpty()) {

            const { email, recordame } = req.body
            db.Users.findOne({
                where: {
                    email
                }
            })
                .then(user => {

                    //return res.send(user)
                    req.session.userLogin = {
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email,
                        image: user.image,
                        categories_users_id: user.categories_users_id
                    }
                    //return res.send(req.session.userLogin)
                    if (recordame) {
                        res.cookie('recordar', req.session.userLogin, { maxAge: 1000 * 60 * 60 * 24 })
                    }
                    return res.redirect('/')
                    // return res.send(req.body) 
                })
                .catch(err => res.send(err))
        } else {
            //return res.send(req.body)
            return res.render('users/login', {
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
    profile: (req, res) => {
        return res.render('users/profile')
    },
    editUser: (req, res) => {

        db.Users.findOne({
            where: {
                email: req.session.userLogin.email,
            },
            include: [{
                all: true,
            }]
        })
            .then((user) => {
                //return res.send(user)//
                return res.render('users/editUser', {
                    user
                });
            }).catch((error) => res.send(error));

    },
    processEdit: (req, res) => {
        let errors = validationResult(req);
        if (req.fileValidationError) {
            let image = {
                param: 'imageUser',
                msg: req.fileValidationError,
            }
            errors.errors.push(image);
        }
        if (errors.isEmpty()) {
            let { name, lastName, email, pass, phoneNumber, city, gender } = req.body;
        

        db.Users.update({
            first_name: name,
            last_name: lastName,
            email: email,

            phoneNumber: phoneNumber,
            city: city,
             //req.file ? req.file.filename : "",

        })
        .then(usuario => res.redirect("/user/profile"))
        .catch(error => res.send(error))
    }
    }, 


    logout: (req, res) => {
        req.session.destroy();
        if (req.cookies.recordar) {
            res.cookie('recordar', '', { maxAge: -1 })
        }


        return res.redirect('/')
    },



}

