// Polymorphism - Same method behaves differently based on the object that invokes it. It allows us to use a single interface to represent different types of objects, enabling flexibility and extensibility in our code.

class animalE {
    makeSound() {
        console.log("Animal makes a sound");
    }
}

class dogE extends animalE{
    makeSound() {
        console.log("Dog barks");
    }


}

class catE extends animalE{
    makeSound() {
        console.log("Cat meows");
    }


}

const catt = new catE();
const dogg = new dogE();
catt.makeSound(); // Output: Cat meows
dogg.makeSound(); // Output: Dog barks