///<amd-dependency path="controllers/home"/>

import angular = require('angular');


var module:ng.IModule = angular.module('app.controllers', [
    'app.controllers.home'
]);


export = module;


