const { validationResult } = require('express-validator')
const usuarios = require("../data/Users.json")

module.exports ={
    signin : (req,res) => {
        return res.render('signin')
    },
    
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