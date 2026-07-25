// Define loopings - Loops is used to execute the same block of code multiple times until the condition become false

// Simple for loop Example

// for(let i=0; i<=10;i += 2){
//     console.log(i)
// }

for(let i=0; i<=10;i++){
    if(i===5){
        break;
        // continue;
    }
    console.log(i)
}

// for(let i=5; i>=1; i--){
//     console.log(i)

// }

// Types of loopings - for (More), while, do while
// for types - for in , for each , for of

// FOR -- > FOR loop is used when you know how many time loop will run

// for(initizlization, CSSConditionRule; increment/decrement){

// }


// While loop - The while loop runs as long as the condition is true

// while(condition){
    // code
// }


// let i=0;



// while(i<=5){
//     console.log(i)
//     i++;

// }

// Do while loop - A do..while loop executes the code at least once, Even if the condition is false

// do{
//     // code 
// }while(condition){

// }




// let i =10;


// do{
//     console.log(i);
//     i++;

// }while (i<=15);


// 'for of'--> Used to itereate over the values of an array or string;;


// let fruits = ["Apple", "Banana", "Mango", "Fig", "Watermelon"] // array 

// console.log(fruits)

// console.log(typeof fruits)

// for(let fruit of fruits){
//     console.log(fruit)
//     console.log(typeof fruit)
// }

// 'for in' --> Used to iterate over the keys(property name) of an object

// let student ={
//     name: "john",
//     age: 23,
//     city: "New Yark"
// }

// console.log(student)


// for(let key in student){

//     console.log(key, ":", student[key as keyof typeof student])

// }
// // 


// let numbers = [10, 20, 30, 10, 30, 50, 10];



// let colours = ["red", "yello", "white", "orange"]

// colours.forEach((data , postion) => {

//     console.log("Arrary data:"+data +"   ==> ", "Aray position: "+postion)

// });