// arrays and Objects specific loops


/* [⭐forof loop - arrays, string and maps but in Objects because Objects are not iterable] and [⭐forin loop - Objeccts] */

//forof -----⭐

const arr = [1,2,3,4,5]
for (const num of arr) {
//console.log(num);
    
}

const greetings = "Hello World!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
    
}

// Map - print only unique value with given order and maps are not interables 

const map = new Map()
map.set('In', "india")
map.set('USA',"United States of America")
map.set('fr',"France")

//console.log(map);

for (const [key,value]/*destructing of array*/ of map) {
    console.log(key, '-', value);
    
}


//forin ----⭐

const myObject ={
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby',
    py: 'Python'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);

}

//forin loop using arrays

const programming = ['frontend','backend','cloud', 'AI']
for (const key in programming) {
        console.log(programming[key])
        }
    






