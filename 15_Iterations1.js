// Interations: for loop⭐

for (let i = 0; i <= 10; i++) {  // ctrl + D use to make change in same index
    const element = i;
    if(element == 5){ // using if condition in for loop
        console.log("5 is the best number");
    }
    // console.log(element);

}


//nesting in for loop⭐

for (let j = 1; j <= 10; j++) {
    console.log(`Outer loop value: ${j}`);
     //nested
   for (let k = 1; k<=10; k++) {
    console.log(`Inner loop value: ${k} and Outer loop: ${j}`);
    // print 1 to 10 table
    //console.log(j + '*' + k + '=' + j*k ) ;  
   }
}

// Arrays in for loop⭐

let myArray = ["Elon","Mark","HM","Steve"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// let say we have 100 books data which we need to show on our site but on single page it needs to show only 15 books data from database, then use these keywords in loop: break and continue

// break and continue ⭐

for (let carKm = 1; carKm <= 25; carKm++) {   // 20km car mileage 
    if (carKm ==18){
        console.log("fuel Reminder: car traveled 18 Km");
        continue;
    } else if(carKm ==21){
        break;
    }
    console.log(`Car traveled km: ${carKm}`);
    
}

