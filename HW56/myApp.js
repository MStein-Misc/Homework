'use strict'
myApp = (function (myApp) {
    const days = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Shabbos"
    ];
    utils = myApp.utils || {};
    utils.getDayName = function (x) {
        return days[x - 1];
    }
    utils.getDayNum = function (name) {
        return days.indexOf(name) + 1;
    }
    myApp.utils = utils;
    return myApp;
}(myApp || {}));