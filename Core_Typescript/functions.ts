// function is a one of the core building block of typescript

// Basic functions - No return type :

// function greet():void{
//     console.log("Hello!! World")
// }

// greet();


// Basic functions -  return type :


// function add(a:number, b:number){
//     return a+b;
// }
// console.log(add(10,20));


// const subtract = (a: number, b: number): number => {
//     return a - b;
// };
// console.log(subtract(10, 3));

// Anonymous function

setTimeout(() => {
    console.log("Execute after 1 Second");
}, 5000);
    

// Calback function: functions pased as argumetns 

// function calcula(a:number, b:number){

//     return a*b;
// }

// calcula(10, 20)


function calc( a:number, b:number, callback: (x:number, y:number) => number)
{
    return callback(a ,b);
}

const result = calc(5,4, (x,y)=> x*y);
console.log(result);

// function - Overloading - Mutiple function signatures with one implementation

function displ(value: string):void;
function displ(value: number):void;

function displ(value:any){
    console.log(value)

}


displ("Hello");
displ(10);

// Generic function -- Generic functios work with different types while preserving type safety

function ident<T>(value:T):T{
    return value;
}

console.log(ident<number>(100))
console.log(ident<string>("hello"))

// void Vs never; 

// void - Doesnot reture any value

function printmessage(msg: string):void{
    console.log(msg)
}




// never - Never fnishes normally (throw an error or loops forever)

function throwerror(msg: string): never{
    throw new Error(msg)
}

// asyn

async()=>{

    // awit

}

// Optional function


// let person: { name: string; age?: number } = {
//     name: "mano",
// };


function welcome(name: string, age?: number){
    if(age){
        console.log(name +"is"+ age + " years old")
    }else{
        console.log(name)
    }

}

welcome("john")