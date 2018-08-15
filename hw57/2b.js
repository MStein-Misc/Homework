

//2b
var app = app || {};
app.counterfactory = (function(){
    place  = 0;
    return {
        increment:function(){
            place++;
        },
        get:function(){
            return place;
        }
    };
});