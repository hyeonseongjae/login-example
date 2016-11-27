routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/not-found');

    $stateProvider
        .state('redirect', {
            url: '/',
            views: {
                contents: {
                    templateUrl: 'pages/main/views/contents/redirect.html'
                }
            }
        })

        .state('home', {
            url: '/home',
            views: {
                header:{
                    templateUrl: 'pages/main/views/contents/header.html'
                },
                contents: {
                    templateUrl: 'pages/main/views/contents/home.html'
                }
            }
        })

        .state('auth', {
            url: '/auth',
            views: {
                contents: {
                    templateUrl: 'pages/main/views/auth/index.html'
                }
            }
        })

        .state('auth.signin', {
            url: '/signin',
            views: {
                header:{
                    templateUrl: 'pages/main/views/auth/header.html'
                },
                contents: {
                    templateUrl: 'pages/main/views/auth/signin-normal.html'
                }
            }
        })
        .state('auth.home', {
            url: '/home',
            views: {
                header:{
                    templateUrl: 'pages/main/views/auth/header.html'
                },
                contents: {
                    templateUrl: 'pages/main/views/auth/home.html'
                }
            }
        })
        .state('auth.complete', {
            url: '/complete',
            views: {
                header:{
                    templateUrl: 'pages/main/views/auth/header.html'
                },
                contents: {
                    templateUrl: 'pages/main/views/auth/complete.html'
                }
            }
        })
        .state('auth.signup', {
            url: '/signup',
            views: {
                header:{
                    templateUrl: 'pages/main/views/auth/header.html'
                },
                contents: {
                    templateUrl: 'pages/main/views/auth/signup-normal.html'
                }
            }
        })
        .state('auth.mobileCheck', {
            url: '/mobileCheck',
            views: {
                header:{
                    templateUrl: 'pages/main/views/auth/header.html'
                },
                contents: {
                    templateUrl: 'pages/main/views/auth/signup-mobile-check.html'
                }
            }
        })

        .state('auth.findId', {
            url: '/findId',
            views: {
                header:{
                    templateUrl: 'pages/main/views/auth/header.html'
                },
                contents: {
                    templateUrl: 'pages/main/views/auth/signup-mobile-check.html'
                }
            }
        })
        .state('auth.findPass', {
            url: '/findPass',
            views: {
                header:{
                    templateUrl: 'pages/main/views/auth/header.html'
                },
                contents: {
                    templateUrl: 'pages/main/views/auth/signup-mobile-check.html'
                }
            }
        })
        .state('auth.nick', {
            url: '/nick',
            views: {
                header:{
                    templateUrl: 'pages/main/views/auth/header.html'
                },
                contents: {
                    templateUrl: 'pages/main/views/auth/signup-nick.html'
                }
            }
        })


        //
        // .state('index.notice', {
        //     url: '/notice',
        //     templateUrl: 'pages/main/views/components/notice.html'
        // })
        // .state('index.report', {
        //     url: '/report',
        //     templateUrl: 'pages/main/views/components/report.html'
        // })


}
