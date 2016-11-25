var routeHelper = require('sg-route-helper');
var express = require('express');

var META = require('../../bridge/metadata/index');

module.exports = function (app) {

    var adminRouter = express.Router();
    app.use('/' + META.std.prefix.admin, adminRouter);

    function pageRenderer() {
        return function(req, res, next) {
            res.render('admin-' + process.env.NODE_ENV, req.preparedParam);
        };
    }

    adminRouter.get('/*',
        routeHelper.prepareParam("admin"),
        pageRenderer()
    );

    adminRouter.get('/',
        routeHelper.prepareParam("admin"),
        pageRenderer()
    );
};