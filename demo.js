// let x = 10
// if (x==10) {
//     console.log(`Hello Suraj`)
// } else {
//     console.log(`Hey Akhil`)
// }

// x==10?console.log(`Hello Siraj`):console.log('Hello Akhil ')

// let y = x??1000
// // console.log(y, "y")

// first Javascript program

// alert("hello world");
// document.write("Hello World");
// console.log("hello world")
// document.getElementById("output").innerHTML = "Hello World";

let x = 15 
const y = 45
//x is variable , let = variable, const = constant
if (x<=45) {
    console.log(`hello`)
} else {
    console.log(`No Hello`)
    
}

//data types:
// number;
let a = 5
let b = 10
console.log(a + b)
console.log(typeof(a)) // type of variable

//string
let Name = 'Suraj'
let lastName = 'Deshmukh'
console.log(Name + '' + lastName )

//boolean
let bool1 = true;
let bool2 = false;
console.log("The value of the bool1 is " + bool1);

//Undefined 
let houseNo; // Contains undefined value
let apartment = "Suraj";
apartment = undefined; // Assigning the undefined value
     
//null
let houseNo1 = null; // Unknown house number or empty value

//Bigint Used to store the very large number
let largeNum = 1245646564515635412348923448234842842343546576876789n;

// Symbol 
let sym1 = Symbol("123"); //Symbol() create a unique symbol

// Object
let user= {               // an object
    name: "Suraj",        // by key "name" store value "Suraj"
    age: 27              // by key "age" store value 27
};
console.log(user)

//Array               
let colors = ["Brown", "red", "pink", "Yellow", "Blue"];
console.log(colors)    // list of items

//Date
let date = new Date();
console.log(date)      // date function

// Implicit Type Conversion

// Converting to String (Implicit conversion)
console.log("100"+ 24)

// Converting to Number (Implicit conversion)
console.log('100' / 50); // Converts '100' to 100
console.log('100' - '50'); // Converts '100' and '50' to 100 and 50

//Converting to Boolean (Implicit conversion)
num1= !!0;   // !0 = true, !!0 = false
num2 = !!1;  // !1 = false, !!1 = true

//Null to Number (Implicit conversion)
let 
num3 = 100 + null;        // Converts null to 0
num4 = 100 * null;            // Converts null to 0

//Explicit Type Conversion
// Converting to String (Explicit conversion)

String(100);               // number to string
String(null);              // null to string
String(true);              // boolean to string

//Converting to Number (Explicit conversion)
Number('100');            // Converts '100' to 100
Number(false);            // Converts false to 0
Number(null);             // Converts null to 0

//Converting to Boolean (Explicit conversion)
Boolean(100);              // Converts number to boolean (true)
Boolean(0);                // 0 is falsy value (false)
Boolean("");               // Empty string is falsy value (false)

//Converting Date to String/Number
Number(date);            //date to number
String(date);            //date to string

//Use strict mode
'use strict'; // It removes the silent errors from the code

// Arithmetic Operators
let p = 5
let q = 10
console.log(p + q)
console.log(p - q)
console.log(p * q)
console.log(p / q)
console.log(q % p)

// Logical Operators
// && (Logical AND)
// || (Logical OR)
// ! (Logical NOT)

// Assignment Operators
z = x + y //assign the value of x + y into z
z += x  //z = z + x
z -= x //z = z - x
z *= x // z = z * x
z /= x // z = z / x
z %= x // z = z % x

// Conditional Operators
r ==10
 r ==10?console.log(`Hello Siraj`):console.log('Hello Akhil ')

//  typeof Operator
 console.log(typeof(r)) //  typeof Operator

//  Nullish Coalescing Operator
op1 ?? op2 //returns the first operand if it is not null or undefined. 
//            //Otherwise, it returns the second operand


// Delete Operator

let obj ={
    product: "Mobile",
    price: 20000
}

console.log(delete obj ["price"])
console.log(obj)

// if...else Statement
let ab = 15 
const cd = 45
//ab is variable , let = variable, const = constant
if (cd<=45) {
    console.log(`hello`)
} else {
    console.log(`No Hello`)
    
}
