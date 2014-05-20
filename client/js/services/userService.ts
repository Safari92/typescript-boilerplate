class UserService {

    http: ng.IHttpService;
    location: ng.ILocationService;

    user= [
        1,3,6,4,1
    ]

    constructor($http: ng.IHttpService, $location: ng.ILocationService) {
        this.http = $http;
        this.location = $location;
    }

    GetAll(successCallback: Function) {
        successCallback(this.user);
    }
}

export = UserService;