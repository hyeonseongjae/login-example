facebook.$inject = ['$window'];

export default function facebook($window) {
    $window.fbAsyncInit = function () {
        FB.init({
            appId: '1152760568171715',
            appSecret: 'd821d951ffae32270ea652af5b20094c',
            status: true,
            cookie: true,
            xfbml: true,
            version: 'v2.8'
        });

    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/ko_KR/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


    return {
        login: function (callback) {
            FB.login(function (response) {
                callback(response);
            });
        },
        getStatus: function (callback) {
            FB.getLoginStatus(function (response) {
                // if (response.status === 'connected') {
                //     var accessToken = response.authResponse.accessToken;
                // }
                callback(response);
            });
        },
        getData: function (params, callback) {
            FB.api('/me', {
                params: params
            }, function (response) {
                callback(response);
            });
        },
        getProfileImage: function getProfileImage(params, callback){
            FB.api("/me/picture?width=180&height=180",  function(response) {

                console.log(response.data.url);

            }, function (response) {
                callback(response);
            });
        },
        sharePost: function (tags, callback) {
            // FB.ui(
            //     {
            //         method: 'share',
            //         href: url
            //     }, function (response) {
            //         callback(response);
            //     });

            FB.ui({
                    method: 'share_open_graph',
                    action_type: 'og.shares',
                    action_properties: JSON.stringify({
                        object : {
                            'og:url': tags.url, // your url to share
                            'og:title': tags.title,
                            'og:description': tags.description,
                            'og:image': tags.image
                        }
                    })
                },
                // callback
                function(response) {
                    callback(response);
                });
        }
    }
}