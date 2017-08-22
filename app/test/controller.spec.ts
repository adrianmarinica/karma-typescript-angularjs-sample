import "angular-mocks";
import { IModule, mock, module } from "angular";

describe('weather controller', () => {

    var $rootScope: any;
    var $controller: any;

    var testDateValue = '2017/8/22';

    let app = module("app", []);
    require('../src/controller')(app);

    beforeEach(mock.module('app'));

    beforeEach(mock.inject((_$controller_: any, _$rootScope_: any) => {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    it('should initialize correctly', () => {
        $controller('weatherController', {
            $scope: $rootScope,
            date: {
                getDateString: function () {
                    return testDateValue;
                }
            }
        });
        expect($rootScope.getDate()).toBe(testDateValue);
    });
});