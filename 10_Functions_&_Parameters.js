//Function 1

function sayHello (){ // () -- Paramters
    console.log("Good morning, Hello Arpit");
    console.log("How are you?");
}
sayHello() //()-- arguments, sayHello - reference, sayHello() - excute  


//Function 2

function addTwoNumbers (a,b){
    // method 1 
    // let result = a + b
    // return result 
    //method 2
    return a + b;
    console.log("Hi printing the result"); // it will not execute after declaration of return.
}

const result = addTwoNumbers(3,5)

console.log("Result", result);


//Function 3

function loginUser (username){
    // if (username === undefined){
    //     console.log("Please enter username")
    //     return
    // }
    if (!username){
        console.log("Please enter username")
        return
    }
    return `${username} Logged in`

}
console.log(loginUser("Arpit")); //there is no value then it will display undefined.


// Function with Objects:⭐


function calculateCartPrice (val1, val2, ...num1){        //... - rest operator - multiple values pass in function
    return num1
} 
console.log(calculateCartPrice(100, 200, 300, 400, 500)) //rest goes with rest operator i.e. 300,400,500



//Object created
let user = {
    Shirt: "Jack & Jones",
    Jeans: "Blackberry",
    price: 1999,
}

//creating function for object⭐

function handleObject(anyObject){
    console.log(`Shirt is from ${anyObject.shirt} and the price is ${anyObject.Price}`);
}
// handleObject(user)

handleObject({
    shirt: "PE",
    Price: 1599
})


//Creating function for Arrays⭐

const NewArray =[10, 20, 30]
function returnSecondValue(getArray){
    return getArray [0]
}
console.log(returnSecondValue(New));