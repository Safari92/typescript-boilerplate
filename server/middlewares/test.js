var test = module.exports.test = function (req, res, next) {
    console.log('in the test middleware');
    next();
};
