module.exports = function (app) {
    app.controller('weatherController', ['$scope', function ($scope) {
        $scope.today = new Date();
    }]);
};
