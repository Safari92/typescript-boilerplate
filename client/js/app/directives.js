define(["require", "exports", 'angular', 'directives/alertDirective'], function(require, exports, angular, alertDirective) {
    var module = angular.module('app.directives', []);

    module.directive("alertDirective", function () {
        return new alertDirective().CreateDirective();
    });

    
    return module;
});
