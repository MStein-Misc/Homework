var ClockFactory = ClockFactory || {};

(function () {
    'use strict';

    ClockFactory.new = function () {
        const timer = document.createElement('div');
        setInterval(function () {
            timer.innerHTML = new Date().toLocaleTimeString();
        }, 1000);
        return timer;
    };
})();