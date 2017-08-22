module.exports = function (app) {
    app.controller('weatherController', ['$scope', 'date', function ($scope, date) {

        $scope.getDate = function () {
            return date.getDateString(new Date());            
        };
    }]);
};