module.exports = {
    create :(req, res) =>{
        return res.render('admin/create');
    },

    list :(req, res) =>{
        return res.render('admin/list');
    },
    
    edit :(req, res) =>{
        return res.render('admin/edit');
    },
}