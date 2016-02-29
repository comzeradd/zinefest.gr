var panopticon = angular.module('zinefest', [
    'ngRoute'
]);

panopticon.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/participate', {
                templateUrl: 'partials/participate.html'
            }).
            when('/archive', {
                templateUrl: 'partials/archive.html'
            }).
            otherwise({
                templateUrl: 'partials/about.html'
            });
    }
]);
