// Variables: const, let - Block scope
// let - Block scoped
let x:number = 10;

if(true){
    let x:number = 20;
    console.log(x)
}

console.log(x);

// const

// const PI = 3.14;
// PI =4;

// Arrow function:

// In JavaScript/TypeScript, a function that doesn't return a value automatically returns undefined.

const addition = (a:number,b:number): number => {
    return a+b;
}

const resultqw = addition(34,6)
console.log(resultqw)
/// Template litrels:

var nameq = "john";
console.log(`Hello: ${nameq}`) // temple litral type
console.log("Hello: "+nameq)

// Default parameter :

function greet(name="Guest"){
    console.log(name)

}
greet();
greet("Alise");
// Rest Parameter: Unknown number of arguments


function sum(...numbers: number[]){

    return numbers.reduce((a,b) => a+b);
    
// return numbers.reduce((a,b,c,....)=>a+b+c+d+.+.+.....);
}
console.log(sum(1,2,3,4,5,100))

// Spread Operaor 

let arr1 = [1,2,3]
console.log(arr1)
let arr3 = [4,5,6]
console.log(arr3)
let arr2 = [...arr1, ...arr3]
console.log(arr2)

let user = {
    namez : "Ashish"
}

let employee = {

    ...user,
    salary:90909
}

console.log(employee)
// Destructing:

let numberf = [10, 30, 50, 60]
let [a,b,c,d] = numberf;
console.log(a)

// Class file - Class is a blueprint for creating Objects,Variable, etc.. Its group to gether

// class student{

//     namea: string;
//     age: number;

//     constructor(namea:string, age:number){
//         this.namea = namea;
//         this.age = age;

//     }

//     introduce(): void{

//         console.log(`Hi I am ${this.namea} and I am ${this.age} years old`)

//     }


// }

// const stu1 = new student("Ashish", 25)
// stu1.introduce();



class studentIntro{
    namew: string;
    age: number;
    constructor(namew: string, age:number){
        this.namew = namew;
        this.age = age;

    }
    introduce(): void{
    //   console.log(`Hi I am ${this.namea} and I am ${this.age} years old`)
        console.log(`Hi I am ${this.namew} and I am ${this.age} years old`)
    }
}

const stu1 = new studentIntro("Anbu", 6);
stu1.introduce();
const stu2 = new studentIntro("Ashish", 6);
stu2.introduce();


// Primary - you need to create the class for mainitin all student wish 

