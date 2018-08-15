
var ClockFactory = ClockFactory || {};

(function () {
    'use strict';

    ClockFactory.newClock = function () {
        const clockdiv = document.createElement('div');
        const clock = document.createElement('p');
        clock.innerHTML = new Date().toLocaleTimeString();
        clockdiv.appendChild(clock);
        clockdiv.className = 'clockclass';
        setInterval(() => clock.innerHTML = new Date().toLocaleTimeString(), 1000);
        return clockdiv;
    };

    ClockFactory.timer = function(){
        const timerdiv = document.createElement('div');
        const timer = document.createElement('p');
        timerdiv.appendChild(timer);
        timerdiv.className = 'timerclass';
        
        let timerticks;
        (function (){
            let ticks = 0;
            timerticks = function (){
                let s = formattime(ticks % 60);
                let m = formattime(Math.floor(ticks / 60) % 60);
                let h = Math.floor(ticks / 3600) % 60;
                ticks++;
                return h + ':' + m + ':' + s;
            }
            
            function formattime(string){
                string = string.toString()
                return string.length < 2 ? '0' + string : string;
            }
        })();
        timer.innerHTML = timerticks();
        setInterval(() => timer.innerHTML = timerticks(), 1000);
        return timerdiv;
    };
})();