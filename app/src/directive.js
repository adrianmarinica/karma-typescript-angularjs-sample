module.exports = function (app) {
    app.directive('weatherToday', ['weather', function (weather) {
        return {
            restrict: 'E',
            replace: true,
            scope: true,
            template: '<h1>The weather outside is {{ weatherInfo }}.</h1>',
            link: function(scope) {
                scope.weatherInfo = weather.getInfo();
            }
        }
    }]);
}