exports.get = function(req, res, next){

    res.render('frontPage', {
        Title: "Главная страница"
    });
}

