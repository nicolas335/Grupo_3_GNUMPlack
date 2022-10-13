module.exports = (req,res,next) => {
    if (req.session.userLogin){
        return next()
    } else {
        return res.redirect('/')
    }
}