// DON'T DO THIS!!
// var myVariable = 'I am at the global scope';

// THIS EITHER
/*
var myFunction = function() {
    console.log('me too!');
}
*/

function one(){
    return one = one();
}

// let value = one();
// console.log(value);
// console.log(one());

// let value = one;
// console.log(typeof value);
// console.log(typeof value);
// console.log(value());

// sting
// number 
// boolean
// undefined
// function

/*
function two() {
    return function () {
        console.log('two');
    }
}

let myFunction = two();
myFunction();
*/

function three() {
    return function() {
        return 'three';
    }
}

console.log(three()());
