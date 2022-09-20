const { validationResult } = require('express-validator');


module.exports ={
    signin : (req,res) => {
        return res.render('users/signin')
    },
    processRegister: (req,res) => {
      const errors = validationResult(req);
      if (errors.errors.length > 0) {
        return res.render('users/signin',{
            errors : errors.mapped(),
            old: req.body
        })
      }

    },
    login: (req,res) =>{
        return res.render('login')
    }
}
