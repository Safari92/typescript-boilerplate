define(["require", "exports", 'angular', 'controllers/home/HomeController'], function(require, exports, angular, HomeController) {
    var module = angular.module('app.controllers.home', []);

    module.controller('app.controllers.home.index', [
        '$scope', function ($scope) {
            return new HomeController($scope);
        }]);

    
    return module;
});
