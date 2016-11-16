var express = require('express');

module.exports = function(app){
    app.get('/socket', require("./socket").get);
    app.post('/socket', require("./socket").post);
    app.post('/removeSession', require("./removeSession").post);
    app.get('/', require("./frontPage").get);
}
