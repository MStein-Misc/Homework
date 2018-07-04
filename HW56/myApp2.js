'use strict'
myApp = (function (myApp) {
    utils = myApp.utils || {};
    utils.mystringcaseinsensitiveEquals = function (a, b) {
        return a.toLowerCase() === b.toLowerCase();
    }
    myApp.utils = utils;
    return myApp;
}(myApp || {}));