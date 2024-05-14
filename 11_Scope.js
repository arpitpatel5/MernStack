// scope
if (true){
    let a = 10;
    const b = 20;
    var c = 30; // it will not differentiate the local and global scope that's why avoid to use var 
}
// console.log(a);
// console.log(b);
console.log(c);


// Scope level and mini hosting 


//Scope in nested function⭐

function one(){ //parent will not take anything from child (variable)
const username = "Arpit"

function two(){  //child can ask parent for things (variable)
    const company = "Wipro"
    console.log(username);
}

// console.log(company);
two()

}
one()

//scope in nested if condition⭐

if (true){
    const username = "Arpit"
    if (username ==="Arpit"){
        const company = " Wipro"
        console.log(username + company);
    }

    // console.log(company); error occurs because of scope issue
}
// console.log(username); error occurs because of scope issue

// +++++++++ Interesting ++++++++⭐

console.log(addone(5)) // can exceute becoz it's simple fucntion. 
function addone (num){ // simple function
    return num + 1
}


console.log(addtwo(8)) // ReferenceError: Cannot access 'addtwo' before initialization
const addtwo = function(num){  // addtwo -- Expression fucntion
    return num+2
}