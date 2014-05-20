define(["require", "exports", 'angular', 'services/userService'], function(require, exports, angular, userService) {
    define([
        'angular',
        'services/userService'
    ], function (angular, userService) {
        var services = angular.module('app.services', []);
        services.factory("app.services.userService", [
            "$http", "$location", function ($http, $location) {
                return new userService.UserService($http, $location);
            }]);
    });

    var module = angular.module('app.services', []);

    module.factory("app.services.userService", [
        "$http", "$location", function ($http, $location) {
            return new userService($http, $location);
        }]);

    
    return module;
});
