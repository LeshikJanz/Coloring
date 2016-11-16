exports.post = function(req, res, next){
    console.log("Session is destroyed");
    req.session.destroy();
    res.send("Session is destroyed");
}