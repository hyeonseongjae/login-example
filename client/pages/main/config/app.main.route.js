routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            views: {
                'header': {
                    templateUrl: 'pages/main/views/layouts/header.html'
                },
                'footer': {
                    templateUrl: 'pages/main/views/layouts/footer.html'
                },
                'contents': {
                    templateUrl: 'pages/main/views/layouts/main-contents.html'
                }
            }
        })
        .state('signUp', {
            url: '/signup',
            views: {
                'header': {
                    templateUrl: 'pages/main/views/layouts/header.html'
                },
                'footer': {
                    templateUrl: 'pages/main/views/layouts/footer.html'
                },
                'contents': {
                    templateUrl: 'pages/main/views/layouts/signup-contents.html'
                }
            }
        })
        .state('home', {
            url: '/home',
            views: {
                'header': {
                    templateUrl: 'pages/main/views/layouts/header.html'
                },
                'footer': {
                    templateUrl: 'pages/main/views/layouts/footer.html'
                },
                'contents': {
                    templateUrl: 'pages/main/views/layouts/sub-contents.html'
                }
            }
        });
}
