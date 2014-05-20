var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'components/base/Controller'], function(require, exports, Controller) {
    var HomeController = (function (_super) {
        __extends(HomeController, _super);
        function HomeController($scope) {
            _super.call(this, $scope);
        }
        HomeController.prototype.test = function () {
            alert('test');
        };
        return HomeController;
    })(Controller);
    
    return HomeController;
});
