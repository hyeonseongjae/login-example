export default function Kakaotalk() {
    Kakao.init('648d44a01e9478cdd79e8836578e6157');

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//developers.kakao.com/sdk/js/kakao.min.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'kakao-jssdk'));

    return {
        login: function (callback) {
            Kakao.Auth.login({
                success: function (res) {
                    callback(res);
                },
                fail: function (err) {
                    callback(err);
                }
            });
        },
        logout: function () {
            Kakao.Auth.logout();
        },
        setToken: function (accessTokenFromServer) {
            Kakao.Auth.setAccessToken(accessTokenFromServer);
        },
        getData: function (callback) {
            Kakao.API.request({
                url: '/v1/user/me',
                success: function (res) {
                    callback(res);
                },
                fail: function (error) {
                    callback(error);
                }
            });
        },
        getStroyData: function (callback) {
            Kakao.API.request({
                url: '/v1/api/story/profile',
                success: function (res) {
                    callback(res);
                },
                fail: function (error) {
                    callback(error);
                }
            })
        }
    }
}