// Optional chaining and nullish coalescing are two powerful features in TypeScript that help developers write cleaner and more concise code when dealing with potentially undefined or null values.

// Optional chaining allows you to safely access deeply nested properties of an object without having to check if each property in the chain is defined. It uses the `?.` operator to short-circuit the evaluation if any property in the chain is null or undefined.

// Optional chaining example: Safely access properties , methods, or elements of array elements without throwing an error if the property does not exist.

const user = {
  name: "Alice",
  address: {
    street: "123 Main St"
  }
};

// Without optional chaining, you would need to check each property:

if (user.name && user.address && user.address.street) {
  console.log(user.address.street);
  console.log(user.name);
}

// if (user && user.address && user.address.street) {
//   console.log(user.address.street);
// }

// With optional chaining, you can write it more concisely:
console.log(user?.address?.street? "Street: " + user.address.street : "Street not available");

// Nullish coalescing allows you to provide a default value for a variable that may be null or undefined. It uses the `??` operator to return the right-hand operand if the left-hand operand is null or undefined, otherwise it returns the left-hand operand.

// Nullish coalescing example: Provide a default value for a variable that may be null or undefined.
const username = null;
const displayName = username ?? "Guest";
console.log(displayName); // Output: "Guest"
// const userName = user?.name ?? "Guest";
// console.log(userName);

// POST - JSON - 

const user1 = {
  name: null,
  address: {
    street: "123 Main St"
  }
};


const userName = user1?.name ?? " Name not provided";
console.log(userName); // Output: "Name not provided"



interface Userert {
  name?: string;
  address?: {
    street?: string;
  };
}

let Userert: Userert = {
    name: "Alice",
    address: {
        street: "123 Main St"
    }
};








