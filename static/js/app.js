var panopticon = angular.module('zinefest', [
    'ngRoute'
]);

panopticon.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/participate', {
                templateUrl: 'partials/participate.html'
            }).
            when('/2013', {
                templateUrl: 'partials/2013.html'
            }).
            when('/2014', {
                templateUrl: 'partials/2014.html'
            }).
            otherwise({
                templateUrl: 'partials/about.html'
            });
    }
]);
