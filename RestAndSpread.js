// Spread operator
//use to spread an object or an array inside different an object or an array
let A={
    a:"abc",
    b:"ghi",
    c:"Hif"
}

let B={
    ...A,
    x:"hid",
    y:"sdg",
    z:"fds"
}
console.log(B);

let j=["fgdg","fdsg","dfgf"]
let k=[...j,54,56,78];
console.log(k)

// rest operator
// it will collect all remains of an object or an array inside single an object or an array
// let X={
//     a:"fdf",
//     b:"dfggfd",
//     c:"fdsf",
//     d:"fdsf",
//     e:"fdsg"
// }

// const {a,...remains}=X;
// console.log(a);
// console.log(remains);


let Y=["fdf","fgdfsg","fgdg","fdgggf","gdgd"]
const [a,...rest]=Y;
console.log(a);
console.log(rest)