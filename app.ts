///<reference path="./server/types/collection.d.ts"/>

import Application = require('./server/index');

var app = new Application.Main();

app.startServer(function(appReference, serverReference) {
    console.log('typescript-boilerplate started...');
});
