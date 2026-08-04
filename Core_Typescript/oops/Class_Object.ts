// Class - A class is a blueprint for creating an object with predefined properties and methods. It encapsulates data for the object and defines behaviors that can be performed on that data.

class Loginpage {

    static staticlogin() {
        throw new Error("Method not implemented.");
    }

    username: "string" | undefined;
    password: "string" | undefined;
    loginbutton: "boolean" | undefined;
    

     staticlogin() {
        console.log("Login button clicked");
    }
}

// Object or instance creation of the class

const loginpage = new Loginpage(); // Object or instance creation of the class Loginpage
Loginpage.staticlogin();
