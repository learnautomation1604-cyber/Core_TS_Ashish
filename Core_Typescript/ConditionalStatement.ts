// Conditional statement - Allow your program to make decisions based on the wheter a condition tru or false 
// Types Conditional statement available - if, if else, if else if else, switch, Ternery Operator

// Proceed the execution ased on fulfilling conditions

// // if statement

// let age = 18

// if(age >= 18){ // Only condition
//   //  console.log("He is eligible for voting")
// }

// // //  if else     - Any of the condition except this condition

// let age1 = 1

// if(age1 >= 18){ // Only condition
//     console.log("He is eligible for voting")
// }else{
//     console.log("The Person is Not eligible")
// }


// //  if else     - Any of the condition except this condition


// let marks = 51;

// if(marks >=90){
//     console.log("A Grade")

// } else if(marks >=75){
//     console.log("B Grade")

// } else if(marks >=50){
//         console.log("C Grade")

// }else{
//     console.log("Fail")
// }

// switch - Comaring the variable against value

let day:String = "Wednesday"

if(day==="Monday"){
    console.log("Hey today monday")
}else if(day === "Tuesday"){
        console.log("Hey today tuesday")

}else {
     console.log("Hey you are not entered the proper value")
}

switch(day){
    case "Monday":
        console.log("Hey today monday")
        break;

    case "Tuesday":
         console.log("Hey today Tuesday")
         break;

    default:
        console.log("Hey you are not entered the proper value")
}

