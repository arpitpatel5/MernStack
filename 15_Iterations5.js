// use of filter

const books = [
    {title:'Book One', genre:'Finance', publish: 1992, edition: 2},
    {title:'Book two', genre:'History', publish: 1995, edition: 1},
    {title:'Book three', genre:'Martial Arts', publish: 2001, edition: 3},
    {title:'Book Four', genre:'Coding', publish: 2012, edition: 5}
]

let userBooks = books.filter((bk)=> {
    return bk.genre === 'Coding'})
// console.log(userBooks);

userBooks = books.filter((bk)=>{
    return bk.publish >= 2000
})
// console.log(userBooks);

let newBook = books.filter((bk)=>{
    return bk.edition === 2 || bk.title === 'Book three'
})
console.log(newBook);
