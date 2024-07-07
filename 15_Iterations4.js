// by default loop that injects in Arrays.

//foreach⭐

const coding = ["js","ruby","java", "Python","cpp"]

coding.forEach( function (val){
 console.log(val);
}) // ()- callbackfn asking for function (callback func doesn't require name)



//foreach loop using arrow function.
coding .forEach((item) => {
    //console.log(item);
})


// normal function

function printMe(item){
    console.log(item);
}
//coding.forEach(printMe)



//foreach loop can also us item/value, index of arr, arr

coding.forEach ((item, index, arr)=> {console.log(item, index,arr);
    })


//⭐array > Objects > and we extract those Object values.

const myCoding =[
    {
        langaugeName: "javascript",
        langaugeFileName: "js"
    },
    {
        langaugeName: "Python",
        langaugeFileName: "py"
    },
    {
        langaugeName:"Java",
        langaugeFileName: "java"
    }
]

myCoding.forEach((item)=>{
    console.log(item.langaugeFileName);
})


// ⭐we can't store foreach loop in varibale. if we store it will return: undefined
//for this issue (filter) comes into picture


const myNums = [1,2,3,4,5,6,7,8,9,10]

myNums.filter((num)=> num > 4  )  //filter take call back function which check each value and apply condition and then return accordingly.
// console.log(myNums);


// but if we apply {}-scope in arrow function then always use return keyword

const newNum = myNums.filter((num)=>{
    return num > 4
})
// console.log(newNum);



//now store foreach each loop as variable using if else condition.

myNums.forEach((num)=>{
    if(num > 4){
        newNum.push(num)
    }
})
console.log(newNum);


//using map

const derivatives  = [1,2,3,4,5]
const newderivatives = derivatives.map((num)=> {
return num + 10
})
console.log(newderivatives);


//⭐ chaining of methods: map>map>filter 

const num = [1,2,3,4,5]
const ultimateNum = num.map((item)=> item * 10).map((item)=> item +1 ).filter((item)=> item >=40)
console.log(ultimateNum);












