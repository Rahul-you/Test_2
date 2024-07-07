
//  question 1
// 1.how to integrate css file in html file?
// b) using <link> tag

//  question 2
// How do you make a new paragraph in HTML?
// b) using p tag


// question 3
//  Div tag is a inline-block element?
//  b false


// question 4
//  Span is an inline-block element?

// b) false


// question 5
function valueofc(){
    var y=10;var c=y**y
    console.log(c)
    return c
}

valueofc()

//  question 6

const people = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Bob', age: 40 },
];

const namesArray = people.map(person => person.name);
console.log(namesArray); 


const xy = people.map(person => ({
    ...person,
    salary: 50000
}));
console.log(xy);


const x = people.filter(person => person.age > 30)
    .map(person => ({
        name: person.name,
        age: person.age
    }));

console.log(x);


//   question 7

// const cb1 = (a, b) => {
//     return a + b;
// };
// const cb2 = (a, b) => {
//     return a - b;
// };

// const result = (cb1, cb2, x, y) => {
//     const add = cb1(x, y);
//     console.log(`Result of addition (${x} + ${y}):`, add);

//     const sub = cb2(x, y);
//     console.log(`Result of subtraction (${x} - ${y}):`, sub);
// };

// // Example usage:
// const x = 11;
// const y = 4;
// result(cb1, cb2, x, y);



//  question 8

// //  we use the map function 

// var users = [
//     { firstName: "Susan", lastName: "Steward" },
//     { firstName: "Daniel", lastName: "Longbottom" },
//     { firstName: "Jacob", lastName: "Black" }
// ];

// var x = users.map(user => `${user.firstName} ${user.lastName}`);

// console.log(x);


//  question 10

var arr = [1, 2, 3, 4, 5].filter(func);

function func(v) {
    return false;
}

console.log(arr);


// answer ogf tis c  []

//  question 11


// Q11: what is the key difference between these two
// properties?Choose appropriate option.

// ans
// B)display : none removes the element from the dom
// while visibility : hidden just hides the element.


//  question 12
// var a = 1;
// var b = 0;
// while (a <= 3)
// {
// a++;
// b += a * 2;
// console.log(b);
// }

// ans a 4 10 18


//  question 13
var arr= [1,2,3,4]
arr.unshift(100)
arr.shift()

console.log(arr)

//  ans is 1 2 3 4












