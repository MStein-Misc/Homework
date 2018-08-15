

// 2a
var app = app || {};
app.counter = (function(){
    place = 0;
    return {
        increment:function(){
            place++;
        },
        get:function(){
            return place;
        }
    };
}());