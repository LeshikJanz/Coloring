var express = require('express');

module.exports = function(app){
    app.get('/socket', require("./socket").get);
    app.get('/', require("./frontPage").get);
}
