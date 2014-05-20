define(["require", "exports"], function(require, exports) {
    var AlertDirective = (function () {
        function AlertDirective() {
        }
        AlertDirective.prototype.CreateDirective = function () {
            return {
                restrict: 'E',
                template: '<div>This is my directive :)</div>'
            };
        };
        return AlertDirective;
    })();
    
    return AlertDirective;
});
