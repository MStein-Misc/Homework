// 1.
let upper = function(x){
    return x === x.toUpperCase();
}

let lower = function(x){
    return x !== x.toUpperCase();
}

function some(arr, ufunc){
    const arr2 = [];
    arr.forEach(element => {
        if (ufunc(element)) {
            arr2.push(element);
        }
    });
    return arr2;
}

let letters = ['A', 'b', 'C'];
console.log(some(letters, upper));
console.log(some(letters, lower));
//---------------console.log(Array.some(letters, upper));


//2.
function test(x) {
    return x === 'A' || x === 'Z';        
}

function action(x) {
    console.log(x);
}

function onlyIf(array, test, action) {
    array.forEach(element =>{
        if (test(element)) {
            action(element);
        }
    });
}

onlyIf(letters, test, action);
//-------------console.log(Array.forEach(test, letters));