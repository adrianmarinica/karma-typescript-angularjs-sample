var angular = require('angular');

var app = angular.module('app', []);

app.config(['$provide', function ($provide) {

}]).run(['$rootScope', function ($rootScope) {

}]);

require('./src/service')(app);
require('./src/directive')(app);
require('./src/controller')(app);