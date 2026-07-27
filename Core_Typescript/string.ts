// String: String is a sequence of charecters used to store text, such as a names, addresses, message or password

// String Declaration:

var myname:string = "Ashish";
var mynameNum:number = 10;
var mynameAnbu:string = `Anbu`;

// String concatenation

const fulldata = myname+" "+mynameNum + " " + mynameAnbu

console.log(fulldata)
// Template literals:

const outcome = `My name is ${myname} and I am ${mynameNum} year old `
console.log(outcome)


// Using Expression:

const a = 90; 
const b = 70;
console.log(typeof (a+b)) // Its return number 
const h = `Sum = ${a+b}`; // Return the string
console.log(typeof h)

// Mutiline string
