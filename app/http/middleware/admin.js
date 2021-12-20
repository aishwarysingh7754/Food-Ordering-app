function admin (req, res, next){
    // console.log("from admin")
    if(req.isAuthenticated() && req.user.role === 'admin'){
        console.log("from if admin")
        return next()
    }
    // console.log("Not admin")
    // return res.send('all ok')
    return res.redirect('/')
}

module.exports = admin