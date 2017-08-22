module.exports = function (app) {
    app.service('date', function () {
        this.getDateString = function (dt) {
            return dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
        };
    });
};
