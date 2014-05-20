class AlertDirective {

    constructor() {
    }

    CreateDirective() {
        return {
            restrict: 'E',
            template: '<div>This is my directive :)</div>'
        };
    }
}
export = AlertDirective;