// // Data type define - What kind of value a variable can store

// // Data type - Primitive Data Type, Special Data Type, Object Data Types

// // Primitive Data Type - These represents a single values
// // Special Data Types - Any, Unkown, void, Null, Undefined, Never, 

// //=====================Primitive Data Types =======================

// // Types of Primitive Data Type - String, Number, Boolean, BigInt, Symbol
// //1. String

// let studentname: String = "Ashish"
// let city: string = "Chennai"
// let studenntname: String = "Anbu"

// console.log(studenntname)
// console.log(city)

// //2. Number 

// var mark: number = 10;
// var id: number = 198979;
// var price: number = 4343.2345235;

// // 3. Boolean
// let xer: boolean = true;
// var xero: boolean = false;

// // 4. BigInt = Used for very large integers that exceeds the safe range of number 

// let biginteer: bigint = 32n;

// // 5. Symbol - Create a unique value, Often Used as Unique Object Keys

// let ide: symbol = Symbol("TCS10163245")

// ////================================================Special Data Types ========================

// //1. Any - any disablke type checking

// // let value: any =true;
// // console.log(value)
// // console.log(typeof value)

// //2. unknown - Can hold any value, But you must check its type before using it

// let valuer:unknown = "Hello";
// console.log(valuer)



// let a: any = "Hello";
// a.toUpperCase();
// console.log(a.toUpperCase())

// let b: unknown = "Hello";



// //3. Undefined

// let vert;
// console.log(vert)
// console.log(typeof vert)

// // 3. void - Used when a function does not return any value

// function printname(name: String):void{

//     console.log("Name World be : " +name)

// }

// printname("Ashish")

// // 4. Null - Represents the intentional absence of value

// let data:null = null;
// console.log(data)

// // 5. never - Represents values that neve Occur - A Functiona Always throw an error - 

// function throwerror(): never{

//     throw new Error("Something went wrong")
// }
// // ======================================= Object Data Types ===== =========================
// // Define Objects: Object always consist of properties or calable and constructable signature

// let obj = {

//     name: "Ashish",
//     id: "HJGHJGJ",
//     email: "",
//     ag: 34,

//     salary2026():void{
//         console.log("Hey this the january salary 2026")

//     }

// };

// console.log(obj.name)
// obj.salary2026();

// // let obj1{};
// // obj1 =[];
// // obj1 = ()=>{

// // }

// // Object type with only a method(no data properties)

// // type animal={
// //     speak():void;
// // };
// // const dog: animal = {

// //     speak(){
// //         console.log("Bark")
// //     }
// // }



// // Specify properties of Object; Optional properties value; readonly property

// let Employee : {
//     name: string;
//     readonly dept: number;
//     email?: string;
//     address?:{
//        City: "NY",
//        pincode: 78876
//     }
// };

// Employee={
//     name: "Anil",
//     dept: 9869869898,
//     email: ""


// };


// Define - The type() method is used to enter text into an input field one character at a time, simulating keyboard typing.

//=====================================Primitive Data Types =======================================

// Objects:An Object is a collection of Key-value pairs

// let student34 ={

//     name: "Ashish",
//     age: 30

// }

// Object with type annotation 

//syntax:
// let Objectname:{
//     Property: datatype:
// }

// let student35: {
//     name: string;
//     id123: number;
// } = {
//     name: "30",
//     id123: 40
// };
// Accessing Object Property

// console.log("TThis is the value of student name: "+student35.name+", "+ "This is the value of student age: "+student35.id123)
// console.log(student35);

// Adding a New Property

// let student36: {
//     name: string;
//     id123: number;
//     department?: String
// } = {
//     name: "30",
//     id123: 40,
// };

// student36.department="CSC"
// console.log(student36)

// Read Only Property

// let student37: {
//     name: string;
//     readonly id123: number;
// } = {
//     name: "30",
//     id123: 40,
// };

// student37.id123 = 102; // Error: Cannot assign to 'id123' because it is a read-only property.
// console.log(student37)

// Nested Objects


// let student37: {
//     name: string;
//     readonly id123: number;
//     address:{
//         city: String,
//         zip?: number
//     }
// } = {
//     name: "30",
//     id123: 40,
//     address:{
//         city: "Pune",
//     }
// };

// Object With Array

// let student37: {
//     name: string;
//     readonly id123: number;
//     address:{
//         city: String,
//         zip?: number
//     };
//     marks:[number, number]

// } = {
//     name: "30",
//     id123: 40,
//     address:{
//         city: "Pune",
//     },
//     marks:[98, 56]
// };

// Objects With Functions:

// let StudentTotalMarks = {

//     add(a: number, b: number){
//         return a+b;
//     }
// }
// console.log(StudentTotalMarks.add(10, 20))

// Arrary - Store Multiple Value of the same type -- 

// let marks: Number[] = [10, 20, 30, 45];

// let subjects: String[] = ["Lang", "English", "Matchs"];

// let bool: boolean[] = [true, false, true, false]
// // Array Any type

// let combi: any[] = [true, null, undefined, 10, 87875n, "name"]

// // Tupes - Sores fixed numbers of elements with different data types

// let employee: va[string, number] = ["john", 50000]

// Enum - A Collection Of Named constants 

// enum directin{
//     North,
//     south, 
//     East, 
// }

// let move: directin = directin.North;
// console.log(move)

// enum statuser {

//     Pending = 1,
//     Approved = 2,
//     Rejected = 3
// }

// console.log(statuser.Approved);

// Unknown - Safer alternative of any

// let value: unknown = "564564564"

// if(typeof value=="number"){
//     console.log("Hey this is number")

// }

// void - Used for functions that return nothing

function greet1():void{
    console.log("Good Morning!!!")
}
greet1();

// Never - Used when a function never teturns

function throwError(messae: string): never{

    throw new Error(messae);

}

// Interface - Define the structure of an object

// interface Student{
//     name: string;
//     age?: number;

// }

// let student: Student = {
//     name: "aSHISH",
// }


//Type Alias - Another way to define Object types 

// type Student12{
//     name: string;
//     age?: number;

// }

// let student34: Student12 = {
//     name: "aSHISH",
// }

// Union Type - Variable can store multiple types

var id: number | string | boolean;

id = 100;
console.log(typeof id)
id = "EMP109";
console.log(typeof id)
id = true;
console.log(typeof id)

// Literla type 

let direction: "left" | "right" | "up"
direction = "left";
direction = "up";
















