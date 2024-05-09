
//Methods Adding two arrays into one:

const marvel_heros = ["Ironman","Spiderman","Thor"]
const dc_heros = ["Batman","superman","Flash"]

//arr.push()
marvel_heros.push(dc_heros) // this will return array in form of element
console.log(marvel_heros); //push method works on existing array

//arr.concate()
const new_heros = marvel_heros.concat(dc_heros) //concat method will combine arrays
console.log(new_heros);// concat method return new array.

//spread method (...arr1, ...arr2)
const spread_heros = [...marvel_heros, ...dc_heros]
console.log(spread_heros); // combine all arrays into one new created array.

//web scraping method - suppose u have array into array
const scraping_arr = [1,2,3,[4,5,6],7,[8,9,10,[11,12,13]],14]
const now_scrap = scraping_arr.flat(Infinity)
console.log(now_scrap);

//arr.from method:

console.log(Array.from("Arpit")); // convert this string to array.
console.log(Array.isArray("arpit")); // false -- gives boolean result
console.log(Array.from({name:"Arpit"})); // we didn't declare anything wheather we need keys array or values.

//arr.of method:

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2,score3)); // of method returns a new set of array from existing elements.





