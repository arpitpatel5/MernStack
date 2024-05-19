const userEmail = ""

if (userEmail){
    console.log("got user email");
} else {
    console.log("don't have user email");
}

// Falsy values:⭐
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

//Truthy values:⭐
// true, Array, "0", 'False', [], {}, Function(){}


// Detect array is that empty or not 
if(userEmail.length===0){
    console.log("Array is empty");
}


// Detect Object through truthy or falsy method:

const Car = {
    seat1: "arpit",
    seat2: "Person 2",
    seat3: "Person 3",
    seat4: "Person 4"
}
if (Object.keys(Car).length===0){
    console.log("No passenger in car");
} else {
    console.log(`4 passengers in the car including ${Car.seat1}`);
}
