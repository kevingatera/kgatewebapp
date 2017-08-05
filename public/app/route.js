var app = angular.module('appRoutes', ['ngRoute'])
.config(function($routeProvider, $locationProvider){

    $routeProvider

    .when('/', {
        templateUrl: 'web/views/pages/home.html'
    })

    .when('/about', {
        templateUrl: 'web/views/pages/about.html'
    })

    .when('/contact', {
        templateUrl: 'web/views/pages/contact.html'
    })

    .when('/register', {
        templateUrl: 'web/views/pages/users/register.html',
        controller: 'registrationController',
        controllerAs: 'register', // This is the name to user in your app
        authenticated: false // Can't use this route when user is authenticated
    })

    .when('/login', {
        templateUrl: 'web/views/pages/users/login.html',
        authenticated: false
        // controller: ''
    })

    .when('/logout', {
        templateUrl: 'web/views/pages/users/logout.html',
        authenticated: true
    })

    .when('/profile', {
        templateUrl: 'web/views/pages/users/profile.html',
        authenticated: true
    })

    .when('/facebook/:token', {
        templateUrl: 'web/views/pages/users/social/social.html',
        controller: 'facebookController',
        controllerAs: 'facebook',
        authenticated: false
    })

    .when('/fberror', {
        templateUrl: 'web/views/pages/users/login.html',
        controller: 'facebookController',
        controllerAs: 'facebook',
        authenticated: false
    })

    .when('/twitter:token', {
        templateUrl: 'web/views/pages/users/login.html',
        controller: 'twitterController',
        controllerAs: 'twitter',
        authenticated: false
    })

    .when('/twittererror', {
        templateUrl: 'web/views/pages/users/login.html',
        controller: 'googleController',
        controllerAs: 'google',
        authenticated: false
    })

    .when('/google:token', {
        templateUrl: 'web/views/pages/users/login.html',
        controller: 'googleController',
        controllerAs: 'google',
        authenticated: false
    })

    .when('/googleerror', {
        templateUrl: 'web/views/pages/users/login.html',
        controller: 'facebookController',
        controllerAs: 'facebook',
        authenticated: false
    })

    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode({ // This is used to remove the # sign from url
        enabled: true,
        requireBase: false
    });
});
// Restricting certain routes or pages
app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        console.log(next.$$route);
    })
}])

console.log('ROUTE.js file... OK');
