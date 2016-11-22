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
        .state('index', {
            abstract: true,
            url: '/index',
            views: {
                header:{
                    templateUrl: 'pages/main/views/layouts/header.html'
                },
                contents: {
                    templateUrl: 'pages/main/views/contents/index.html'
                }
            }
        })

        .state('index.login', {
            url: '/login',
            templateUrl: 'pages/main/views/layouts/login.html'
        })
        .state('index.signup', {
            url: '/signup',
            templateUrl: 'pages/main/views/layouts/signup-contents.html'
        })
        .state('index.home', {
            url: '/home',
            templateUrl: 'pages/main/views/layouts/main.html'
        })
        .state('index.notice', {
            url: '/notice',
            templateUrl: 'pages/main/views/components/notice.html'
        })
        .state('index.report', {
            url: '/report',
            templateUrl: 'pages/main/views/components/report.html'
        })


}
