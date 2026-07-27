// Arrary - Its a collecion of values stored in the sing variable

// Typescript adds types safety , so you specify what type of data that array can hold

// Array declaration: Subsequent variable declaration can be allowed


var flowers: string[] = ["Rose", "Jasmin", "lotus"];
var flowers1: number[] = [10, 20, 60, 34, 98]

var flowers: Array<string> = ["Rose", "Jasmin", "lotus"];
var flowers1: Array<number> = [10, 20, 60, 34, 98]

// Empty array:

let fruits:string[] = [];
console.log(fruits)
fruits.push("Apple"); // Add Data to an empty array using push() method
console.log(fruits);
fruits.push("Orange");
fruits.push("Mango");
console.log(fruits);
console.log(fruits[0]) // Extract single data from fruits array
fruits[1] = "Banana";
console.log(fruits)
fruits.pop(); // 
console.log(fruits) // Last data can be removed fro the array
fruits.reverse(); // Reverse the array
console.log(fruits)
fruits.shift(); // Remove the first one
console.log(fruits)

fruits.push("Jackfruit")
fruits.push("Watermelon")
fruits.push("Dragonfruit")

console.log(fruits)
fruits.sort();
console.log(fruits)
let single = fruits[0];
let textupper = single.toLocaleUpperCase();
console.log(textupper)
let textlower = single.toLocaleLowerCase();
console.log(textlower)
console.log(flowers1)
console.log(fruits)

console.log(fruits.join(" ,"))

//let combined = flowers1.concat([...fruits.map(f => parseInt(f))]); - Need to prepare 

// loopings array

const newfruits = fruits;
console.log(newfruits) // [ 'Apple', 'Dragonfruit', 'Jackfruit', 'Watermelon' ]

console.log(typeof newfruits)

for(let i=0; i<newfruits.length;i++){

   // console.log(i)
    console.log(fruits[i])
    if(i===1){
        console.log(fruits[i])
        break;

    }

}

// find,filter, reduce, readonly, tuples, 
