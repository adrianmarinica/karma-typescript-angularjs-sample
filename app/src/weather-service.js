module.exports = function (app) {
    app.service('weather', ['temperature', function (temperature) {
        this.getInfo = function () {
            var time = new Date().getTime();
            var weatherIndex = time % 3;
            var weatherStatus = '';

            switch (weatherIndex) {
                case 0:
                    weatherStatus = 'Rainy';
                    break;
                case 1:
                    weatherStatus = 'Sunny';
                    break;
                case 2:
                    weatherStatus = 'Snowy';
                    break;
            }

            return weatherStatus + ' with ' + temperature.getInfo(weatherIndex);
        };
    }]);
};
