module.exports = function (app) {
    app.service('temperature', function () {
        this.getInfo = function (weather) {
            switch (weather) {
                case 0:
                    return '15°C';
                case 1:
                    return '35°C';
                case 2:
                    return '-15°C';
            }
        };
    });
};
