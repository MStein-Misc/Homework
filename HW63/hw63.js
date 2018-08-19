
(function () {
    'use strict';

    let loadP;
    let waitingID;
    let load = function () {
        loadP = loadP || $('#load');
        $('.box').empty().append(loadP);
        loadP.html('Loading...').css('color', 'rgba(255, 166, 0, 0.521)');
        setTimeout(get, 2500);
        waitingID = setInterval(waiting, 400);
    }
    
    let period = 3;
    let loading = 'Loading';
    let waiting = function () {
        loadP.html(loading);
        if (period > 3) {
            period = 1;
            return;
        }
        for (let i = 0; i < period; i++) {
            loadP.html(loadP.html() + '.');
        }
        period++;
    }
    let get = function () {
        // $.get('barrierReef.jpg', view).fail(fail);
        $.get($('#input').val(), view).fail(fail).always(() => clearInterval(waitingID));
    }

    let view = function (data) {
        // let s = 'data:image/jpg;base64,';
        // $('.box').empty().append($('<img></img>').attr('src', s + data).css({width: '100%', height: '100%'}));
        $('.box').empty().append($('<p></p>').html(data).css({ width: '100%', height: '100%' }));
    }

    let fail = function () {
        loadP.html('Failed').css('color', 'red');
    }

    $('#btn').click(load);
}());