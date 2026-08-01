// Array methods (map, filter, reduce, find), -  Very very important

// Map - It is used to iterate over an array and perform some operation on each element of the array and return a new array with the modified elements.
// map - Create a new array by transforming each element of the original array using a provided function.
let numbers = [1, 2, 3, 4, 5,3,2,4,];

let squaredNumbers = numbers.map((num) => num * num);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// filter(): Return elements that satisfy a condition. It creates a new array with all elements that pass the test implemented by the provided function.
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// reduce(): Reduce the array to a single value by applying a function to each element and accumulating the result.
let product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(product); // Output: 120

let product1 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 1);
console.log(product1); // Output: 15

let sentence = ["Hello", "World", "from", "TypeScript"];
let joinedSentence = sentence.reduce((accumulator, currentValue) => accumulator + " " + currentValue, "");
console.log(joinedSentence); // Output: "Hello World from TypeScript"

// find(): Find the first element that satisfies a condition. It returns the value of the first element in the array that satisfies the provided testing function.
let foundNumber = numbers.find((num) => num > 3);
console.log(foundNumber); // Output: 4
// findIndex(): Find the index of the first element that satisfies a condition. It returns the index of the first element in the array that satisfies the provided testing function.
let foundIndex = numbers.findIndex((num) => num > 3);
console.log(foundIndex); // Output: 3

let numbers123 = [1, 3, 7, 9, 5];// some(): Check if at least one element satisfies a condition. It returns true if at least one element in the array passes the test implemented by the provided function.
let hasEvenNumber = numbers123.some((num) => num % 2 === 0);
console.log(hasEvenNumber);

// every(): Check if all elements satisfy a condition. It returns true if all elements in the array pass the test implemented by the provided function.
let allPositive = numbers123.every((num) => num > 0);
console.log(allPositive); // Output: true

// forEach(): Execute a provided function once for each array element. It does not return a new array, but rather performs an action for each element in the array.
numbers123.forEach((num) => console.log(num * 10)); // Output: 2, 6, 14, 18, 10
// includes(): Check if an array includes a certain value among its entries. It returns true if the array contains the specified element, and false otherwise.
let includesFive = numbers123.includes(1);
console.log(includesFive); // Output: true

// indexOf(): Return the first index at which a given element can be found in the array, or -1 if it is not present.
let index = numbers123.indexOf(7);
console.log(index); // Output: 2

// flat(): Create a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flattenedArray = nestedArray.flat(2);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// flatMap(): First maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1.
let words = ["hello", "world"];
let letters = words.flatMap((word) => word.split(""));
console.log(letters); // Output: ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

// reverse(): Reverse the order of the elements in an array in place. The first array element becomes the last, and the last array element becomes the first.
let reversedNumbers = [...numbers].reverse();   
console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]

// sort(): Sort the elements of an array in place and return the sorted array. The default sort order is according to string Unicode code points.
let unsortedNumbers = [3, 1, 4, 2, 5,8,9,0];
let sortedNumbers = [...unsortedNumbers].sort((a, b) => a - b);
console.log(sortedNumbers); // Output: [0, 1, 2, 3, 4, 5, 8, 9]
// concat(): Merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = array1.concat(array2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
// unique(): Create a new array with only unique elements from the original array. This can be achieved using a Set.
let uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]