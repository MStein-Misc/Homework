
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

blockdiv = document.createElement('div');
blockdiv.className = 'blockdiv';
blockdiv.appendChild(ClockFactory.timer());
blockdiv.appendChild(ClockFactory.timer());
blockdiv.appendChild(ClockFactory.timer());
blockdiv.appendChild(ClockFactory.timer());
blockdiv.appendChild(ClockFactory.timer());
document.body.appendChild(blockdiv);
})();
