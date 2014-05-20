import Controller = require('components/base/Controller');

class HomeController extends Controller{

    constructor($scope) {
        super($scope);

    }
    test() {
        alert('test');
    }

}
export = HomeController;