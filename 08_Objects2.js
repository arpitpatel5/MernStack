// Objects part 2

//Declaration of Object 
const User1 = new Object () // 1
const User2 = {} // 2 
   User2.fullName = "Arpit Patel",
   User2.Id = 123,
   User2.mail = "arpit@googlecom"
Object.freeze(User2) // no change in data
   User2.mail = "arpit@tesla.com" // modify Object key values 
// console.log(User2)

// Nesting in Objects

 const regularUser = {
    mail: "arpit@gmail.com",
    userFullname:{
        firstName: "Arpit",
        lastName: "Patel",
        userFamily:{
            Caste: "Patel"
        }
    }
 }
 console.log(regularUser.userFullname.userFamily); // can access user through nesting 

 /* console.log(regularUser.fullname?.userFamily); 
 check that fullname object exist or not otherwise use if else. */


 // how to assign Objects 

const Obj1 = { 1:"a", 2: "b"}
const Obj2 = { 3:"a", 4: "b"}
const typeA =Object.assign ({}, Obj1,Obj2) // {}- target ,()-- source  ideal way to return the target objects.
console.log(typeA);

const typeB = {...Obj1, ...Obj2} // most of the time we'll use spread method to for Objects and Arrays to combine the result.
console.log(typeB);


// when value from Database 

// Array Objects: very Important⭐
 const database = [
    {
   name: "Tony",
   age: 40
 },
 {
    name: "Thor",
    age: 35
 },
 {
    name: "King kong",
    age: 50
 }
 ]
 console.log(database[0]); // this will print only index 0 arrays.


console.log(Object.values(database[0])); // console.log(Object.keys(database)), console.log(Object.entries(database))-- print only array's Object either keys or values then we can use loop further usage.⭐⭐⭐


