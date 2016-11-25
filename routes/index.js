var express = require('express');
var path = require('path');

module.exports = function(app){
    app.get('/socket', require("./socket").get);
    app.post('/socket', require("./socket").post);
    app.post('/removeSession', require("./removeSession").post);
    app.post('/createSvgFile', require("./createSvgFile").post);
    app.post('/currentState', function(req, res, err){
        console.log(app.currentState);
        res.send(app.currentState);
    });
    app.get('')
    app.get('/', require("./frontPage").get);
    app.get('/individualSvgs', require('./individualSvgs').get);
}
