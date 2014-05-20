///<amd-dependency path="app/routes"/>
///<amd-dependency path="app/controllers"/>
///<amd-dependency path="app/services"/>
///<amd-dependency path="app/directives"/>

import angular = require("angular");

var app:ng.IModule = angular.module('app', [
    'app.routes',
    'app.controllers',
    'app.services',
    'app.directives'
]);

export = app;




