// One class Inherit the method and class from another class is called Inheritance. It allows us to create a new class based on an existing class, inheriting its properties and methods. The new class is called the derived class or child class, while the existing class is called the base class or parent class.

class animal {
    static sleep() {
        throw new Error("Method not implemented.");
    }
    static makeSound() {
        throw new Error("Method not implemented.");
    }

    makeSound() {
        console.log("Animal makes a sound");
    }

}

class dog extends animal {
    makeSound() {
        console.log("Dog barks");
    }

}