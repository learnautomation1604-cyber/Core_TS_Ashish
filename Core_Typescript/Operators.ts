// Arithmatic Operators

// let a = 10;
// let b = 20;

// var output = a+b;
// console.log("Addition of a & b: " +output);
// var output = a-b;
// console.log("Subraction value : "+output);
// var output = a*b;
// console.log("Division Value value : "+output);
// var output = a/b;
// console.log("% value : "+output);
// var output = a**b;
// console.log("a power b value : "+output);

// Assignment Operators - Assign a value to the variable

// var x = 10;
// console.log(x)
// x +=5;    //x = x+5;
// console.log(x)
// x -=5;     // x = x-3;
// console.log(x)
// x *=5;  // x = x*7;
// console.log(x)
// x %=5;  // x = x%4;
// console.log(x)
// x **=5;  // x = x**2;
// console.log(x)


// // Increment , Decrement
// let a1 = 10;
// let b1 = 20;

// var increment = a1++
// console.log("a value after the increment: "+increment)
// var increment = a1++
// console.log("a value after the increment: "+increment)
// var increment = a1++
// console.log("a value after the increment: "+increment)
// // b1--
// // console.log("a value after the decrement: "+b1--)

// var decrement = b1--
// console.log("a value after the increment: "+decrement)
// var decrement = b1--
// console.log("a value after the increment: "+decrement)
// var decrement = b1--
// console.log("a value after the increment: "+decrement)

// Comparison Operators - Outcome =  true, false 

// var a = 10;
// var b = 34;
// var c = 10;
// var d = "10";

// console.log(a==b);
// console.log(a!=b);
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);

// Strict Comparison;

// console.log(a===b);
// console.log(a==d); // 

// Logical Operators - Used with Boolean value

// // AND
// var age =20;
// var voterage = true;

// console.log(age >= 18 && voterage)

// // OR

// console.log(age >= 18 || voterage)

// // NOT (!) 

// let loggedin = true;
// console.log(!true)

// Ternery Operators (if...else)

// let age =4; 

// let result = age >= 18 ? "Adult" : "Minor";

// console.log(result);


// Type Operators

// type of -- Its used to know the existing variable or object data type - 

var x:any = true;
console.log(typeof x)

// key of Operator -- Returns all propert names (keys) of an Object type as a union

// type person = {

//     name: string;
//     age: number;

// }

// type keys = keyof person;

// let key:keys

// key = "name";
// console.log(key)

// key = "age"
// console.log(key)

// in - Loops through keys to create a new type

// type person = {

//     name: string;
//     age: number;

// }

// type Boolenuser ={
//     [K in keyof person]:boolean;
// };
