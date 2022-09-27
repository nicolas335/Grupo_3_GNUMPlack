const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const usuarios = require('../data/users.json');
const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/users.json')
    , JSON.stringify(dato, null, 4), 'utf-8');

module.exports ={
    signin : (req,res) => {
        return res.render('users/signin')
    },
    processRegister: (req,res) => {
    
        /* return res.send(req.file.filename) */
      let errors = validationResult(req);
      if (req.fileValidationError) {
          let image = {
              param: 'imageUser',
              msg: req.fileValidationError,
          }
          errors.errors.push(image);
      }
      if (errors.isEmpty()) {
          let {name,lastName,email,pass,phoneNumber,city,gender} = req.body
          let usuarioNuevo = {
              id:usuarios[usuarios.length - 1].id + 1,
              firstName: name.trim(),
              lastName:lastName.trim(),
              email:email.trim(),
              pass:bcrypt.hashSync(pass, 12),
              phoneNumber:phoneNumber.trim(),
              city:city.trim(),
              gender: gender === "Seleccione su género"? "N/C": gender ,
              image: req.file? req.file.filename: "default-profile-image.jfif",
              category: "user"
          }
          usuarios.push(usuarioNuevo)
          guardar(usuarios)

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
        let errors = validationResult(req)
        if (errors.isEmpty()) {

            const {email,recordame} = req.body

            let usuario = usuarios.find(user => user.email === email)

            req.session.userLogin = {
                id: usuario.id,
                name: usuario.firstName,
                image:usuario.image,
                category : usuario.category,
            }
            if (recordame) {
                res.cookie('recordar',req.session.userLogin,{maxAge:10000*60*60*60})
                
            }

            return res.redirect('/user/login')

            return res.redirect("/")

            return res.redirect('/user/profile')
            //return res.send(req.body)//
        } else {
            //return res.send(errors.mapped())
            return res.render('users/login',{
                errors: errors.mapped(),
                old: req.body
            })
            
        }
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
