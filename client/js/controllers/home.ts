import angular = require('angular');
import HomeController = require('controllers/home/HomeController');

var module:ng.IModule = angular.module('app.controllers.home', [
]);

module.controller('app.controllers.home.index', ['$scope', ($scope)
    => new HomeController($scope)]);

export = module;


