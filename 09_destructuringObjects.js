//Object Destructuring 

const Interest = {
    name: "Arpit",
    Pro: ["coder, trader"],
    mail: "arpit@google.com"
}

const {Pro:p} = Interest; // Destructuring in Object⭐⭐
console.log(p); //in this way we can get output multiple time from object by simplfy them.


// Json API (Before Json we use data in form of XML)

//Object form json api:
{
    // "name": "Arpit",
    // "mail": "arpit@google.com",
}

//Array form json api:
[
    {},
    {},
    {}
]

// Json API can be seen in for of Object and arrays.