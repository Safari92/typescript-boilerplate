class Controller {
    private $scope;

    constructor($scope) {
        $scope.vm = this;
        this.$scope = $scope;
    }
}
export = Controller;
