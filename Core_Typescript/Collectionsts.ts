// Typescript based collection framework -  :  Array, tuple, Map, Set, WeakMap, Weakset

// Array - It is a collection of elements of the same type. It is a linear data structure that stores elements in contiguous memory locations. It can be used to store a fixed-size sequential collection of elements of the same type. The elements can be accessed using their index.
// let arr: number[] = [1, 2, 3, 4, 5];
// console.log(arr[0]);
// arr.push(6);
// console.log(arr);
// arr.map((num) => console.log(typeof num === "number" ? num * 2 : num));
// arr.filter((num) => num % 2 === 0).forEach((num) => console.log(num));
// arr.reduce((acc, num) => acc + num, 0);
// const found = arr.find((num) => num > 3);
// console.log(found);
// Tuple - It is a collection of elements of different types. It is a linear data structure that stores elements in contiguous memory locations. It can be used to store a fixed-size sequential collection of elements of different types. The elements can be accessed using their index.
// let tuple: [number, string, boolean] = [1, "Hello", true];
// console.log(tuple[0]);
// console.log(tuple[1]);
// console.log(tuple[2]);
// Map - It is a collection of key-value pairs. It is a linear data structure that stores elements in contiguous memory locations. It can be used to store a fixed-size sequential collection of key-value pairs. The elements can be accessed using their key.
// let map: Map<string, number> = new Map();

// map.set("one", 1);
// map.set("Two", 2);
// map.set("Three", 3);

// console.log(map.get("one"));
// console.log(map.get("Two"));
// console.log(map.get("Three"));

// WeakMap - It is a collection of key-value pairs where the keys are objects and the values can be of any type. It is a linear data structure that stores elements in contiguous memory locations. It can be used to store a fixed-size sequential collection of key-value pairs where the keys are objects. The elements can be accessed using their key.
// let weakMap: WeakMap<object, number> = new WeakMap();

// let obj1 = { name: "John" };
// let obj2 = { name: "Jane" };

// weakMap.set(obj1, 1);
// weakMap.set(obj2, 2);

// console.log(weakMap.get(obj1));
// console.log(weakMap.get(obj2));

// map - key - must be a object, Not iterable, Not primitive type, Not string, Not number, Not boolean

// set - It is a collection of unique elements. It is a linear data structure that stores elements in contiguous memory locations. It can be used to store a fixed-size sequential collection of unique elements. The elements can be accessed using their index.
// const termp = new Set();
// termp.add("1");
// termp.add("2");
// termp.add("3");
// termp.add("4"); // Duplicate element, will not be added
// console.log(termp); // true
// console.log(termp.has("1"));
// console.log(termp.has("4"));
// console.log(termp.has("1"));


// | Feature          | `Set`                    | `Map`                                         |
// | ---------------- | ------------------------ | --------------------------------------------- |
// | Purpose          | Stores **unique values** | Stores **key-value pairs**                    |
// | Duplicate Values | ❌ Not allowed            | Keys must be unique, values can be duplicated |
// | Data Stored      | Only values              | Key and value                                 |
// | Access           | `has(value)`             | `get(key)`                                    |
// | Add              | `add(value)`             | `set(key, value)`                             |
// | Remove           | `delete(value)`          | `delete(key)`                                 |
// | Size             | `size`                   | `size`                                        |
// | Iteration        | Values only              | Keys and values                               |
