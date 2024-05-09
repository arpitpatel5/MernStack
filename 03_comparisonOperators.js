// *************Arithmetic Operations in JS**************

// let value = 3;
// let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); //POWER
// console.log(2/2);
// console.log(2%2); //REMAINDER/MOD

let str1="Arpit";
let str2=" Patel";
let str3= str1+str2;
console.log(str3);

console.log(1+"2"); // str 
console.log(2 +"1");//str
console.log(2+2+"1");//number + str
console.log("1"+2+2);// str (preference given to prefix that's why treated as str.)

console.log(+true);
console.log(+"");

let gameChanger = 100;
gameChanger++;
console.log(gameChanger); // use postfix more


//********** COmparison Operators****************/

// console.log( 2 >= 2);
// console.log( 2 <= 2);
// console.log( 2 == 2);
// console.log( 2 !=2);

console.log("2">1);
console.log("02">1);// "2" treated as number 


//In js equality and comparison work differently. comparison treated null as 0
console.log(null > 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);

// === special case 
console.log("2"==2); //true = double equals - loose equality
console.log("2"===2);// false = Triple equals - strict equality - check datatype also.




// today -- datatype -- primitive and non primitive make notes on personal laptop.

//🪔memory - Stack ( primitive) & heap memory( non-primitive )

let case1 = "arpit"
let case2 ="Patel"
console.log(case2); // stack memory which is for primitive return copy value of variable


let userOne ={ 
    email: "arpit@gmail.com",
    UPI: "909@paytm"
}
let userTwo = userOne;
 
console.log(userTwo);// heap memory which is non primitve return reference value of variable.
