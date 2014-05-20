///<reference path="./types/collection.d.ts"/>

import express = require('express');
import path = require('path');
import fs = require('fs');
import http = require('http');

export class Main {
    private app: any;
    private server: any;
    private middleware: any;
    private controller: any;

    constructor() {
        this.app = express();
        this.app.set('views', path.join(__dirname, '/views'));
        this.app.set('view engine', 'jade');
        this.app.use(express.static(path.join(__dirname, '../client')));

        this.middleware = this.loadFiles('middlewares');
        this.controller = this.loadFiles('controllers');

        this.setRoutes(this.app, this.controller, this.middleware);
        this.server = http.createServer(this.app);

    }
    public startServer(callback) {

        this.app.set('port', process.env.PORT || 3000);
        this.server.listen(this.app.get('port'), callback(this.app, this.server));

    }
    private loadFiles(directory: string) {
        var files = [];
        fs.readdirSync(path.join(__dirname, directory)).forEach(function(file) {
            if (path.extname(file) === '.ts') {
                var filepath = path.join(__dirname, directory, file);
                var handler = require(filepath);
                var filename = path.basename(file, '.ts');
                files[filename] = handler;

            }
        });
        return files;
    }
    private setRoutes(app, controller, middleware) {
        app.get('/', [middleware.test.test], controller.home.index);
        app.get('/chat', [], controller.chat.index);
        app.get(/^\/partials\/(.*)+$/, [], controller.partials.get);

    }
}


