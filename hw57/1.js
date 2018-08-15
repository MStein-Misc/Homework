
let map = function (args, callback) {
    const myArray = [];
    i = 0;
    args.forEach(element => {
        myArray[i++] = callback(element);
    });
    return myArray;
};