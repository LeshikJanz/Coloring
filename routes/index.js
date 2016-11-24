var express = require('express');

module.exports = function(app){
    app.get('/socket', require("./socket").get);
    app.post('/socket', require("./socket").post);
    app.post('/removeSession', require("./removeSession").post);
    app.post('/currentState', function(req, res, err){
        console.log(app.currentState);
        res.send(app.currentState);
    });
    app.get('/', require("./frontPage").get);
    app.use(function(req,res, err){ //перенаправляет на любую страницу
        var url = req.url.substring(1, req.url.length);
        console.log(url);
        if(err) res.status(404).send("Page not found");
        else res.render(url);
    })
}
