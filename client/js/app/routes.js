define(["require", "exports", 'angular', "angularRoute"], function(require, exports, angular) {
    angular.module('app.routes', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');

        $routeProvider.when('/', {
            controller: 'app.controllers.home.index',
            templateUrl: '/partials/home/index'
        }).otherwise({
            redirectTo: '/'
        });
    });
});
