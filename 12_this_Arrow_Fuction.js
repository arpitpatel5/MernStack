// "This" keyword explanation⭐⭐⭐⭐


const user  = {
    username: "Arpit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`); // this shows current context  
    }

}
// user.username = "Patel" // treated as current context
// user.welcomeMessage()
console.log(this) // will provide empty Object.


//⭐⭐ Normal function with this keyword
function coffee (){
    let coffeename = "Starbucks"
    // console.log(this.username)
}
coffee() // will give undefined becuase "this" keyword only a Object context not in function

//⭐⭐Arrow function with this keyword
const chai = () =>{
    let chaiName = "Green Tea"
    console.log(this.chaiName);
}
chai()

//final words -- this keywords from normal function refers to global object and from Arrow function it refers to lexical scope Object function.




// Arrow functions explaination.⭐⭐⭐⭐⭐⭐⭐⭐

//basic arrow function -  (Explicit - use return keyword)
const addNum = (num1, num2) => {
    return num1 + num2
}
 console.log(addNum(2,3));


//Implicit arrow function -1 
const Sum = (n1, n2) => n1 + n2

console.log(Sum(10000,5000));

//Implicit arrow function -2
const Add = (n1, n2) => (n1 + n2)

console.log(Sum(10000,5000));



//Immediately Invoked fucntion Expressions (IIFE)

// IIFE - (Function definition) (execution)

(function WorkoutNotify(){
    console.log("this friday, Upper body Workout");
} )
();

//final words IIFE - imediately execute function + to avoid Global scope pollution (Like varibale and declaration) that's why we use IIFE. 
//and one more imp thing always use ; colon after IIFE fucntion execution to end the coverage.⭐⭐otherwise next IFEE will not execute.


