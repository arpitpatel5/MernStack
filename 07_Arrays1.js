
//array

const myarr = [0,1,"arpit",2] // diff datatype can be take 
const myHeroes = ["Stark", "X-man"] 
// console.log(myHeroes[0]) // array are not associated array. if u want specific array then print the index of the array.

const myarr1 = new Array (10,1,2,3,) // same datatype can used in array
// console.log(myarr1[2]);

//Array Method: ⭐⭐⭐⭐

//arr.push
myarr.push(6)

//arr.pop
myarr.pop()

//arr.unshift
myarr.unshift(100) // add element in the staritng of the array leads to shift all elemnt and will impact on memory.

//arr.shift 
myarr.shift() // remove element from starting.

//arr.includes,indexoff.
console.log(myarr.includes(9)); 
console.log(myarr.indexOf("arpit")); //will let u know whats the index of the element. and there is no value then it will give -1 by default.
console.log(myarr);

// arr.join:

const newArr = myarr.join() // .join method will convert your array into string type.
console.log(newArr);
console.log(typeof newArr)


//arr.slice:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.slice(0)); // fruits.slice(start,end) : it will cut the array from start to end(number) and if you only use start then it will simply remove the start numbers


//arr.splice: 
const car = ["tata","Sizuki","hyundai", "Mahindra"]
car.splice(1,0,"lamborgini"); // insert lamborgini at position 1 and 0 justify nothing to remove.
console.log(car);
car.splice(3,1,"ferrari") // 3 position removed and insert one element at that position i.e. ferrari
console.log(car);
 
/* Imp⭐⭐ Difference between Slice and splice?
slice returns a piece of the array but it doesn't affect the original array. splice changes the original array by removing, replacing, or adding values and returns the affected values. */

