// If condition, Switch Case

// if⭐

//ex 1

const Workout = true;
if (Workout === false){
    console.log("Calories burn");
} else {
    console.log("Gaining unhealthy weights");
}

console.log("Workout tracking"); // Execute because it's in the global scope.

// Comparison & logical operators: <,>,<=,=>, ==, !=, ===(Strict checking datatypes), !==


// ex 2

const score = 200
if(score>100){
    let power ="Fly"
    console.log(`User Power: ${power}`);
}

//ex 3 

const balance = 10
if (balance > 5) console.log("Account Open"), console.log("Account close"); // we can write if condtion code by using implicit scope({}) but it's not the good practice.

// ex 4

const userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true


// && (and both should be the same)
if (userLoggedIn && debitCard && 2===3){
    console.log("Allow user to view checklist");
}

// || (or anyone is correct, code will execute)
if (loggedInfromGoogle || loggedInfromEmail){
    console.log("User logged in");
}




// Nullish Coalescing Operator (??): null undefined ⭐

let val1 = 5 ?? 10 // print 5 (first value assigned)
let val2 = null ?? 10 // detect values print 10
let val3 = undefined ?? 15 // print 15
let val4 = null ?? 10 ?? 20
console.log(val4); // detect first print 10


// Ternary Operator ⭐
//condition ? true: false

const coldCoffee = 50
coldCoffee <= 50 ? console.log("less than 50") : console.log("more than 50");



// Switch case ⭐
const month = 10

switch (month) {
    case 1: 
    console.log("jan");
        break;
    case 2:
    console.log("Feb");
        break;
    case 3: 
    console.log("March");
        break;
    case 4: 
    console.log("April");
        break;
    case 5: 
    console.log("May");
        break;

    default: console.log("default value");
        break;
}



