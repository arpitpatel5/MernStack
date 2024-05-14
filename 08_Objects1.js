// singleton : one instance of a class.
const mySym = Symbol("keys1"); 
//object literals
const Jsuser = {
    fullName: "Arpit Patel",
    age: 22,
    [mySym]: "myKeys", // take one symbol > define through keys > print.
    location: "NCR",
    email: "arpit.patel3@wipro.com",
    isLogged: false
}

// methods to access/print object values.
console.log(Jsuser); // print whole Object values 
console.log(Jsuser.email); // using dot we no need to define string 
console.log(Jsuser["email"]); // Ideal way to print using square bracket an Object key value. 
console.log(Jsuser[mySym]); // Symbol print

// we can modify keys value example
Jsuser.email = "arpatel@openai.com"
//Object.freeze(Jsuser) // freez any changes from here 
Jsuser.email = "arpatel@google.com"

console.log(Jsuser);

// Now add function in Object:
Jsuser.greeting = function(){
   console.log("hello, good morning");
}
Jsuser.greetingTwo = function(){
    console.log(`hi Jsuser, ${this.fullName}`);
}
console.log(Jsuser.greeting()); // it will provide the reference for the function.
console.log(Jsuser.greetingTwo());