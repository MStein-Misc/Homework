'use strict'
let dayOfWeek = (function () {
    const days = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Shabbos"
    ];
    return  {
        getDayName:function (x) {
            return days[x + 1];
        },
        getDayNum:function (name) {
            return days.indexOf(name) + 1;
        }
    };
}());




let calInterest = (function(){
    let rate = 0.01;
    let years = 5;
    return {
        calcinterest : function(x){
            return x * rate * years;
        },
        setRate : function(x){
            rate = x;
        },
        setYear : function(x){
            years = x;
        }
    };
}());
