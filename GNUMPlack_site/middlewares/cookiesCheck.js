module.exports =(req,res,next) => {
    if (req.cookies.recordar) {
        req.session.userLogin = req.cookies.recordar
        
    }
    next()
}