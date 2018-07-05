// 2a
var app = app || {};
app.counter = (function(){
    return {
        place:0,
        increment:function(){
            this.place++;
        },
        get:function(){
            return this.place;
        }
    };
}());