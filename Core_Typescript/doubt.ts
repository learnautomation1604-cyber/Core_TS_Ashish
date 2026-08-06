// 1. can create nested class in typescript ? how access modifiers can taken in the point of declaration 

// ts does not support true nested classes like some other languages (e.g., Java or C#). However, you can achieve similar functionality by defining a class within another class's scope. In TypeScript, you can use access modifiers (public, private, protected) to control the visibility of class members.


// class outer{

//     static inner = class {

//         add(){
//             console.log("add method of inner class");
//         }
//     }
// }


// namespace - Namespace is a way to organize code in TypeScript. It allows you to group related classes, interfaces, functions, and variables under a single namespace. This can help prevent naming conflicts and improve code organization.
// namespace calc{
    
// class calssd{

// }
// class calssc{
    
// }

// class calssb{
    
// }

// }



interface obje {
    name: string;
    age: number;
    obj?: obje | undefined;
    callback?: () => void;
}

let obj1: obje = {
    name: "sachin",
    age: 23,
    obj: undefined,
    callback: () => {
        throw new Error("Function not implemented.");
    },
    obje: function (): void {
        throw new Error("Function not implemented.");
    }
};

class obje {

    name: string;
    age: number;
    obj?: obje | undefined;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.obj = {
            name: name,
            age: age,
            obje() {}
        };
    }


    obje(){

    }
}
