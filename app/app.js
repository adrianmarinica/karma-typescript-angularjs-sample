var angular = require('angular');

var app = angular.module('app', ['ngRoute']);

app.config(['$provide', '$routeProvider', function ($provide, $routeProvider) {
    $routeProvider.when('/weather', {
        templateUrl: 'src/weather.html',
        controller: 'weatherController'
    }).otherwise({ redirectTo: '/weather' });

}]).run(['$rootScope', function ($rootScope) {

}]);

require('./src/temperature-service')(app);
require('./src/weather-service')(app);
require('./src/date-service')(app);
require('./src/directive')(app);
require('./src/controller')(app);