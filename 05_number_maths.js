// +++++++++++++++++++++++++++++++++ Numbers +++++++++++++++++++++++++++++
const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));
// console.log(typeof(balance));

let otherNum = 231.8989
// console.log(otherNum.toPrecision(3)); //Precision work before decimal then after decimal preference goes.

const hundreds =  10000
// console.log(hundreds.toLocaleString());// convert it into comma's


// ++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs()
// console.log(math.round(4.6));
// console.log(math.ciel(4.2));
// console.log(math.floor(4.2));
// console.log(math.max(4,7,2,1));
// console.log(math.min(4,7,2,1));

console.log(Math.random()); // provide random valuea
console.log(Math.random()*10); // provide non zero value with decimal 
console.log(Math.floor(Math.random()*10)+1); // provide random  non-zero value with no decimal 


const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min +1) + min)) // formula to find the min & max with non zero and without decimal.


