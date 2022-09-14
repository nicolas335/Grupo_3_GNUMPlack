const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const users = require('../data/users.json');
const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/users.json')
, JSON.stringify(dato, null, 4), 'utf-8');

module.exports = {
    signin : (req,res) => {
        return res.render('signin')
    },
    processSignin:(req,res) => {
    const errors = validationResult(req);
   
    if (req.fileValidationError) {
        let image = {
            param: 'imageUser',
            msg: req.fileValidationError,
        }
        errors.errors.push(image)
    }
    if (errors.isEmpty()) {
        let {name,lastName,email,pass,city,gender,phoneNumber} = req.body;
         let usuarioNuevo = {
            id:users[users.length - 1].id + 1,
            name,
            lastName,
            email,
            phoneNumber,
            pass: bcrypt.hashSync(pass, 12),
            city,
            gender,
            image: req.file.size > 1 ? req.file.filename : "default-user-img.png",
            category: "user"
        }
        users.push(usuarioNuevo)
        guardar(users)

        return res.redirect('/') 
    }else {

        let ruta = (dato) => fs.existsSync(path.join(__dirname, '..', '..', 'public', 'img', 'users', dato))
        if (ruta(req.file.filename) && (req.file.filename !== "default-user-img.png")) {
            fs.unlinkSync(path.join(__dirname, '..', '..', 'public', 'img', 'users', req.file.filename))
        }
        return res.render('signin', {
            errors: errors.mapped(),
            old: req.body
        })
    }
   
    },
    login: (req,res) =>{
        return res.render('login')
    }
}
