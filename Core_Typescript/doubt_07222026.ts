// var Vs let -- 

// Feature 
// Scope - var - Functional scope , let Block scope
// Reclaration - var (Ok), let (Let in the same scope)
// Hoisting - var - Histed and Initialized with undefined , Hoisted but not initialised


// Function scope:

function demo(){
    if(true){
        var x=10
    }
    console.log("This is the example fo functional scope: "+x)
}

demo();

//
function demo1(){

    //  if(true){
    //     let x=10
    //     }
    //  console.log("This is the example fo functional scope: "+x)// Getting Reference Error - x is not defined 
    // }


    try {
    if(true){
        let x=10
        }
     console.log("This is the example fo functional scope: "+x)// Getting Reference Error - x is not defined 
    }catch{
        console.log("This is Issue due to block scope voilation")
    } finally{
        console.log(
            "The Program executed without failure"
        )
    }
    // finalize method
 }

demo1();


function sub(){
    console.log("hell")
}

sub();



// try{

//     // Tryin the code wich going to throw an exception

// }catch{

//     // Catch or define the error going to happens

// }finally{

//     // The program exceution completed without any failure

// }


// Unkown data type need to be revisited?

let x:any =10;

let b:unknown = 10;

// Object - Readonly property - Allows to overwrite the readonly value?

class Employess{
     readonly employyid: string;
    constructor(employyid: string){
        this.employyid = employyid;
    }
}

const emp = new Employess("EMP001");
console.log(emp)
// emp.employyid="EMP0023";
// console.log(emp)











