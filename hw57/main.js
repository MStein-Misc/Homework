
//1
const myArray = [1, 2, 3];
const myNewArray = map(myArray, function (x) {
    return x * 2;
});

myArray.forEach(element => {
    console.log("array #1  " + element);
});

myNewArray.forEach(element => {
    console.log("array #2  " + element);
});

//2a
for (let i = 0; i < 10; i++) {
    app.counter.increment();
}
document.writeln("2a  " + app.counter.get());

//2b
let mycounter1 = app.counterfactory();
for (let i = 0; i < 5; i++) {
    mycounter1.increment();
}
console.log("2b counter1  " + mycounter1.get());

let mycounter2 = app.counterfactory();
for (let i = 0; i < 15; i++) {
    mycounter2.increment();
}
console.log("2b counter2  " + mycounter2.get());
