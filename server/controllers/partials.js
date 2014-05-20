var get = module.exports.get = function (req, res) {
    var name = req.params[0];
    var model = {};
    res.render("partials/" + name, model);
};
