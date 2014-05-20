define(["require", "exports"], function(require, exports) {
    var UserService = (function () {
        function UserService($http, $location) {
            this.user = [
                1, 3, 6, 4, 1
            ];
            this.http = $http;
            this.location = $location;
        }
        UserService.prototype.GetAll = function (successCallback) {
            successCallback(this.user);
        };
        return UserService;
    })();

    
    return UserService;
});
