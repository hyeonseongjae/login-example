var routeHelper = require('sg-route-helper');
var express = require('express');

var META = require('../../bridge/metadata/index');

module.exports = function (app) {

    function sampleRenderer() {
        return function(req, res, next) {
            if (req.url === '/oauth/facebook' || req.url.indexOf('/api') != -1) {
                return next();
            }

            req.preparedParam.params.oauth = {};

            if (META.std.flag.isMoreSocialInfo == true) {
                req.preparedParam.params.oauth.facebook = req.flash('facebook')[0];
                req.preparedParam.params.oauth.twitter = req.flash('twitter')[0];
                req.preparedParam.params.oauth.google = req.flash('google')[0];
            }

            if (req.url.indexOf("/admin") == 0) {
                var check = req.url.replace("/admin", "");
                if (check.length <= 0) {
                    return next();
                } else if (check[0] == '/') {
                    return next();
                }
            }

            res.render('main-' + process.env.NODE_ENV, req.preparedParam);
        };
    }

    app.get('/*',
        routeHelper.prepareParam("main"),
        sampleRenderer()
    );

    app.get('/',
        routeHelper.prepareParam("main"),
        sampleRenderer()
    );
};