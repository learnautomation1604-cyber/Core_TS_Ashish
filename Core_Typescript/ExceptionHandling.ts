// Exception Handling - Its done primerly using try catch method. In typescript its typesafety 

// Basic Exception Handling:


try{

    let person = null;
    console.log(person.name)

}catch(error:unknown){
    console.log("Type Error")

}finally{
    console.log("Exception handled")

}


try{
    
let person1 = {
    name: "anithA",
    AGE: 22
};
console.log(person1.name)

}catch(error){
    console.log("Type Error")

}finally{
    console.log("Exception handled")
}

// throw vs throws - Where it can used 

// Thrwing exception: Use thetrow keyword to raise an exception

function divide(a:number, b:number): number{

    if(b===0){
        throw new Error ("Division by Zero is not allowed")
    }

    return a/b
}

try{
    console.log(divide(10,2))
    console.log(divide(10,0))
}catch(error:unknown){
    console.log(error)
}finally{
    console.log("inally program executed successfully")
}




