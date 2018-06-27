'use strict'
let dayOfWeek = (function () {
    return  {
        getDayName:function (x) {
            const days = [
                "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Shabbos"
            ];
            return days[x];
        },
        getDayNum:function (name) {
            switch (name) {
                case "Sunday":
                    return 1;
                    break;
                case "Monday":
                    return 2;
                    break;
                case "Tuesday":
                    return 3;
                    break;
                case "Wednesday":
                    return 4;
                    break;
                case "Thursday":
                    return 5;
                    break;
                case "Friday":
                    return 6;
                    break;
                case "Shabbos":
                    return 7;
                    break;
                default:
                    return "Not A Day";
                    break;
            }
        }
    };
}());




let calInterest = (function(){
    return {
        rate:0.01,
        years:5,
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
