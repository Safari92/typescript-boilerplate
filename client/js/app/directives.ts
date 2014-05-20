import angular = require('angular');
import alertDirective = require('directives/alertDirective');

var module:ng.IModule = angular.module('app.directives', [
]);

module.directive("alertDirective", ()
    => new alertDirective().CreateDirective());

export = module;


