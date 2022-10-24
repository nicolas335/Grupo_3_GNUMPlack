/*const db = require('../database/models')

module.exports ={
    home:(req,res) => {
        db.Users.findAll()

        .then(users =>{

        })
        .catch(error => {
            res.send(error)
        })
    }
}*/


module.exports = {
    home : (req, res) =>{
        return res.render('home')
    },

    aboutUs: (req, res) => {
        return res.render('aboutUs')
    }    
}