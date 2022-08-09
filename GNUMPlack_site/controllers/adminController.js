module.exports = {
    create :(req, res) =>{
        return res.render('admin/create');
    },
    edit :(req, res) =>{
        return res.render('admin/edit');
    },
}