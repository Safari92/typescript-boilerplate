define(["require", "exports", "angular", "app/routes", "app/controllers", "app/services", "app/directives"], function(require, exports, angular) {
    var app = angular.module('app', [
        'app.routes',
        'app.controllers',
        'app.services',
        'app.directives'
    ]);

    
    return app;
});
