

//2b
var app = app || {};
app.counterfactory = (function(){
    return {
        place:0,
        increment:function(){
            this.place++;
        },
        get:function(){
            return this.place;
        }
    };
});