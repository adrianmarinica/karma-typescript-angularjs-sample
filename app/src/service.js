module.exports = function (app) {
    app.service('weather', function () {
        this.getInfo = function () {
            var time = new Date().getTime();

            switch (time % 3) {
                case 0:
                    return 'Rainy';
                case 1:
                    return 'Sunny';
                case 2:
                    return 'Snowy';
            }
        };
    });
};
