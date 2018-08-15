
(function(){
'use strict';
var blockdiv = document.createElement('div');
blockdiv.className = 'blockdiv';
blockdiv.appendChild(ClockFactory.newClock());
blockdiv.appendChild(ClockFactory.newClock());
blockdiv.appendChild(ClockFactory.newClock());
blockdiv.appendChild(ClockFactory.newClock());
blockdiv.appendChild(ClockFactory.newClock());
document.body.appendChild(blockdiv);
let helloTools = toolBox(blockdiv);
helloTools.setBackgroundcolor('gray');
helloTools.blink(1000);

blockdiv = document.createElement('div');
blockdiv.className = 'blockdiv';
blockdiv.appendChild(ClockFactory.timer());
blockdiv.appendChild(ClockFactory.timer());
blockdiv.appendChild(ClockFactory.timer());
blockdiv.appendChild(ClockFactory.timer());
blockdiv.appendChild(ClockFactory.timer());
document.body.appendChild(blockdiv);
})();

