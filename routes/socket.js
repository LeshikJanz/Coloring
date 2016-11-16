exports.get = function(req, res, next){
    res.render('socket', {firstName: req.session.firstName, lastName: req.session.lastName, uid: req.session.uid});
}

exports.post = function(req, res, next){
    console.log("first_name:" + req.body.first_name);
    console.log("last_name:" + req.body.last_name);
    console.log("uid:" + req.body.uid);
    req.session.firstName = req.body.first_name;
    req.session.lastName = req.body.last_name;
    req.session.uid = req.body.uid;

    console.log("session: " + req.session.firstName);
    res.render('socket', {firstName: req.body.first_name, lastName: req.body.last_name, uid: req.body.uid});
}