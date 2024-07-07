// Array Prototype: reduce method (accumulator, current value and initial value)
const myNums = [1,2,3]
const total = myNums.reduce(function (accumulator, currentvalue) {
    console.log(`acc: ${accumulator} and curr value: ${currentvalue}`);
    return accumulator + currentvalue
}, 0)
console.log(total);

const NewTotal = myNums.reduce((acc, curr)=> acc + curr, 0)
console.log(total);


// shopping cart example using reduce array prototype.

const shoppingCart = [
    {
    course: "Js course",
    price: 2999
    },
    {
        course: "py course",
        price: 5999
        },
        {
            course: "fullstack course",
            price: 6999
            },

]

const totalPrice = shoppingCart.reduce((acc, item)=> acc + item.price, 0)
console.log(totalPrice);
