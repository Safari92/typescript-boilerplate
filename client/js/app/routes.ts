///<amd-dependency path="angularRoute"/>
import angular = require('angular');

angular.module('app.routes', ['ngRoute'])

    .config(function($routeProvider, $locationProvider) {
        $locationProvider
            .html5Mode(true)
            .hashPrefix('!');

        $routeProvider
            .when('/', {
                controller:'app.controllers.home.index',
                templateUrl:'/partials/home/index'
            })
            .otherwise({
                redirectTo:'/'
            });
    })