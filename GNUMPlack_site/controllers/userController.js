const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const usuarios = require('../data/users.json');
const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/users.json')
    , JSON.stringify(dato, null, 4), 'utf-8');
const db = require('../database/models')

module.exports ={
    signin : (req,res) => {
        return res.render('users/signin')
    },
    processRegister: (req,res) => {
      let errors = validationResult(req);
      if (req.fileValidationError) {
          let image = {
              param: 'imageUser',
              msg: req.fileValidationError,
          }
          errors.errors.push(image);
      }
      if (errors.isEmpty()) {
          let {name,lastName,email,pass,phoneNumber,city,gender} = req.body;

          db.Users.create({
            first_name: name,
            last_name: lastName,
            email: email,
            password: bcryptjs.hashSync(pass, 12),
            phoneNumber: phoneNumber,
            city: city,
            genders_id: gender,
            image: req.file? req.file.filename: "default-profile-image.jfif",
            categories_users_id: 1
          })
          .then(user =>{
            req.session.userLogin = {
            first_name: user.name,
            last_name: user.lastName,
            email: user.email,
            password: user.pass,
            phoneNumber: user.phoneNumber,
            city: user.city,
            genders_id: user.genders_id,
            image: user.image,
            categories_users_id: user.categories_users_id
            }
          })
          .catch(errors => res.send(errors))

          return res.redirect('/')
      } else {

          return res.render('users/signin', {
              errors: errors.mapped(),
              old: req.body
          })
        }},

    login: (req,res) =>{
        return res.render('users/login')
    },
    processLogin:(req,res) =>{
         let errors= validationResult(req)
        // return res.send(errors); 
        if (errors.isEmpty()){
            
            const {email, recordame} = req.body
            db.Users.findOne({
                where : {
                    email
                }
            })
            .then(user => {
                
                //return res.send(user)
                req.session.userLogin = {
                name: user.firstName,
                email: user.email,
                password: user.pass,
                image: user.image,
                categories_users_id: user.category
                }
            if(recordame){
                res.cookie('GNUM.Plack',req.session.userLogin,{maxAge: 1000 * 60 * 60 * 24})
            }
            // console.log(req.session.userLogin); 
            return res.redirect('/')
            // return res.send(req.body) 
            })
            .catch(err => res.send(err))
        } else {
            //return res.send(req.body)
            return res.render('users/login',{
                errors: errors.mapped(),
                old: req.body})}
    },
    profile:(req,res) =>{
        return res.render('users/profile')
    },
    logout : (req,res)=>{
        req.session.destroy();
        if(req.cookies.recordar){
            res.cookie('recordar','',{maxAge: -1})
        }


        return res.redirect('/')
    }
}
