exports.get = function(req, res, next){
    res.render('individualsvgs/' + req.query.id, {firstName: req.session.firstName, lastName: req.session.lastName, uid: req.session.uid});
}