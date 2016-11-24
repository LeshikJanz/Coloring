var express = require('express');
var path = require('path');

module.exports = function(app){
    app.get('/socket', require("./socket").get);
    app.post('/socket', require("./socket").post);
    app.post('/removeSession', require("./removeSession").post);
    app.post('/currentState', function(req, res, err){
        console.log(app.currentState);
        res.send(app.currentState);
    });
    app.get('/', require("./frontPage").get);


    //app.use(,function(req,res, err){ //перенаправляет на любую страницу
    //    var url = req.url.substring(1, req.url.length);
    //    if(url == "socket" || url == "index" || url == "removeSession") return;
    //    console.log(url);
    //    if(err) res.status(404).send("Page not found");
    //    else res.render(url);
    //})


    //app.set('views', __dirname + '/views');
    //app.set('view engine', 'ejs');
}
