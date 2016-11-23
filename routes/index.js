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
}
