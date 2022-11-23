const db = require('../database/models')

module.exports = {
    home : (req, res) =>{
        return res.render('home')
    },

    aboutUs: (req, res) => {
        return res.render('aboutUs')
    }    
}