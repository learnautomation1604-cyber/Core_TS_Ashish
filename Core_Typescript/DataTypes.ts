// Data type define - What kind of value a variable can store

// Data type - Primitive Data Type, Special Data Type, Object Data Types

// Primitive Data Type - These represents a single values
// Special Data Types - Any, Unkown, void, Null, Undefined, Never, 

//=====================Primitive Data Types =======================

// Types of Primitive Data Type - String, Number, Boolean, BigInt, Symbol
//1. String

let studentname: String = "Ashish"
let city: string = "Chennai"
let studenntname: String = "Anbu"

console.log(studenntname)
console.log(city)

//2. Number 

var mark: number = 10;
var id: number = 198979;
var price: number = 4343.2345235;

// 3. Boolean
let xer: boolean = true;
var xero: boolean = false;

// 4. BigInt = Used for very large integers that exceeds the safe range of number 

let biginteer: bigint = 32n;

// 5. Symbol - Create a unique value, Often Used as Unique Object Keys

let ide: symbol = Symbol("TCS10163245")

////================================================Special Data Types ========================

//1. Any - any disablke type checking

// let value: any =true;
// console.log(value)
// console.log(typeof value)

//2. unknown - Can hold any value, But you must check its type before using it

let valuer:unknown = "Hello";
console.log(valuer)



let a: any = "Hello";
a.toUpperCase();
console.log(a.toUpperCase())

let b: unknown = "Hello";





//3. Undefined

let vert;
console.log(vert)
console.log(typeof vert)

// 3. void - Used when a function does not return any value

function printname(name: String):void{

    console.log("Name World be : " +name)

}

printname("Ashish")

// 4. Null - Represents the intentional absence of value

let data:null = null;
console.log(data)

// 5. never - Represents values that neve Occur - A Functiona Always throw an error - 

function throwerror(): never{

    throw new Error("Something went wrong")
}
// ======================================= Object Data Types ===== =========================
// Define Objects: Object always consist of properties or calable and constructable signature

let obj = {

    name: "Ashish",
    id: "HJGHJGJ",
    email: "",
    ag: 34,

    salary2026():void{
        console.log("Hey this the january salary 2026")

    }

};

console.log(obj.name)
obj.salary2026();

// let obj1{};
// obj1 =[];
// obj1 = ()=>{

// }

// Object type with only a method(no data properties)

// type animal={
//     speak():void;
// };
// const dog: animal = {

//     speak(){
//         console.log("Bark")
//     }
// }



// Specify properties of Object; Optional properties value; readonly property

let Employee : {
    name: string;
    readonly dept: number;
    email?: string;
    address?:{
       City: "NY",
       pincode: 78876
    }
};

Employee={
    name: "Anil",
    dept: 9869869898,
    email: ""


};


// Define - The type() method is used to enter text into an input field one character at a time, simulating keyboard typing.