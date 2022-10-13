module.exports = (req,res,next) => {
    if (req.session.userLogin && req.session.userLogin.category === 'admin'){
        return next()
    }
        res.redirect('/')
}