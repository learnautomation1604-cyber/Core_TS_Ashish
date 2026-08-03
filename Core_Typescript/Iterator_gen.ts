// Iterator - A generator function that yields values one at a time, allowing for lazy evaluation and iteration over potentially infinite sequences.
// An Iterator is an object that provides a way to access elents one by one
// Iterators must have a next() method that returns an object with two properties: value and done. The value property contains the next value in the sequence, and the done property indicates whether the iterator has reached the end of the sequence.
// Custome Iterators can be created by implementing the Iterator interface, which requires the next() method to be defined. The next() method should return an object with the value and done properties, where value is the next value in the sequence and done is a boolean indicating whether the iterator has reached the end of the sequence.

const number = [10, 20, 30];

const iterator = number[Symbol.iterator]();
console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }



// for(let prod =0, prod < prodresult.length; prod++){

// if(prod.iterator(i) === true){

//     console.log(prod.iterator(i));

// }

// }


//

// Generator - A generator function is a special type of function that can be paused and resumed, allowing for the generation of a sequence of values over time. It is defined using the `function*` syntax and uses the `yield` keyword to produce values one at a time. When a generator function is called, it returns an iterator object that can be used to iterate over the generated values.

function* numberGenerator() {
    yield 10;
    yield 20;
    yield 30;
}
const gen = numberGenerator();
console.log(gen.next());    // { value: 10, done: false }
console.log(gen.next());    // { value: 20, done: false }
console.log(gen.next());    // { value: 30, done: false }
console.log(gen.next(40));    // { value: 40, done: true }
console.log(gen.next());    // { value: undefined, done: true }