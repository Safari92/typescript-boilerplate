///<reference path="types/collection.d.ts"/>

require.config({
    baseUrl: '/js/',
    paths: {
        jquery: '/components/jquery/dist/jquery',
        foundation: '/components/foundation/js/foundation',
        fastclick: '/components/fastclick/lib/fastclick',
        angular: '/components/angular/angular',
        angularRoute: '/components/angular-route/angular-route',
        'socket.io': '/components/socket.io-client/dist/socket.io'
    },

    shim: {
        'foundation': {
            deps: ['jquery', 'fastclick']
        },
        'angular': {'exports': 'angular'},
        'angularRoute': ['angular']
    },
    priority: [
        'angular'
    ]

});

require( [
    'app/appsetup',
    'foundation',
    'angular'
], function(controller, foundation, angular) {
    'use strict';
    angular.bootstrap (document, ['app']);

});
