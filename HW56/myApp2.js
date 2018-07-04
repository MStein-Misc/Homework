var myApp = (function (myApp) {
    'use strict'
    myApp.utils = myApp.utils || {};
    myApp.utils.mystringcaseinsensitiveEquals = function (a, b) {
        return a.toLowerCase() === b.toLowerCase();
    }
    return myApp;
}(myApp || {}));