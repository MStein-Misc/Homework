
'strict on'
// var tools = tools || {};
toolBox = (function (x) {
    // let s = 'sd';
    // let elem;
    // if (typeof x == 'string') {
    //     elem = document.getElementById(x);
    // } else {
    //     elem = x;
    // }
    tools = {
        element: typeof x === 'string' ? document.getElementById(x) : x,
        setElement: function x(element) {
            this.element = typeof element === 'string' ? document.getElementById(element) : element;
        },
        setBackgroundcolor: function x(color) {
            // var dlement = document.getElementById("1");
            if (tools.element !== null) {
                this.element.style.backgroundColor = color;
                console.log('set Backgroundcolor: ' + color)
            }
        },
        blinkInterval: null,
        blink: function (span) {
            let color = 'unset';
            let element = this.element;
            this.blinkInterval = setInterval(function (x) {
                let temp = element.style.backgroundColor;
                element.style.backgroundColor = color;
                color = temp;
            }, span)
            console.log('Backgroundcolor blink: ' + span + ' milliseconds')
        },
        steady: function () {
            if (this.blinkInterval !== null) {
                clearInterval(this.blinkInterval);
                this.blinkInterval = null;
                console.log('blink stopped')
            }
        }
    }
    return tools;
});