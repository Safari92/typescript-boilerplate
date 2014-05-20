define(["require", "exports"], function(require, exports) {
    var Controller = (function () {
        function Controller($scope) {
            $scope.vm = this;
            this.$scope = $scope;
        }
        return Controller;
    })();
    
    return Controller;
});
