var panopticon = angular.module('zinefest', [
    'ngRoute'
]);

panopticon.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/2013', {
                templateUrl: 'partials/2013.html'
            }).
            when('/2014', {
                templateUrl: 'partials/2014.html'
            }).
            when('/2016', {
                templateUrl: 'partials/2016.html'
            }).
            when('/2017', {
                templateUrl: 'partials/2017.html'
              }).
            when('/2018', {
                templateUrl: 'partials/2018.html'
            }).
            when('/posters', {
                templateUrl: 'partials/posters.html'
            }).
            when('/about', {
                templateUrl: 'partials/about.html'
            }).
            when('/setikozmo', {
                templateUrl: 'partials/setikozmo.html'
            }).
            when('/upyourass', {
                templateUrl: 'partials/upyourass.html'
            }).
            otherwise({
                templateUrl: 'partials/about.html'
            });
    }
]);
