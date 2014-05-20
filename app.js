var Application = require('./server/index');

var app = new Application.Main();

app.startServer(function (appReference, serverReference) {
    console.log('typescript-boilerplate started...');
});
