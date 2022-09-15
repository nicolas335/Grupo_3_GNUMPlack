const { validationResult } = require('express-validator')

module.exports ={
    signin : (req,res) => {
        return res.render('signin')
    },
    
    login: (req,res) =>{
        return res.render('login')
    },
    processLogin:(req,res) =>{
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            return res.send(req.body)
        } else {
            return res.send(errors.mapped())
            /*return res.render('users/login',{
                errors: errors.mapped(),
                old: req.body
            })*/
            
        }
    }
}