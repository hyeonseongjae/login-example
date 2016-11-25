var express = require('express');
var utils = require('../utils/index');

module.exports = function (app) {

    app.use(function (req, res, next) {
        req.appUtils = require('../utils/index');
        next();
    });

    return app;
};