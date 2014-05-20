///<reference path="./../types/collection.d.ts"/>

var test = module.exports.test = function(req, res, next) {
    console.log('in the test middleware');
    next();
}
