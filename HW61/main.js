
'strict on'
helloTools = toolBox('hello');
helloTools.setBackgroundcolor('red');
helloTools.setElement('hello2');
helloTools.setBackgroundcolor('green');
helloTools.blink(1000);
// setTimeout(helloTools.steady(), 10000);