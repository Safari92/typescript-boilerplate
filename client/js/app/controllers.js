define(["require", "exports", 'angular', "controllers/home"], function(require, exports, angular) {
    var module = angular.module('app.controllers', [
        'app.controllers.home'
    ]);

    
    return module;
});
