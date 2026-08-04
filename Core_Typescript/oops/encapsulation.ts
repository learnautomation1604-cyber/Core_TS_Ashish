// Encapsulation - Hides the implementation detils of a class and only exposes the necessary parts to the outside world. It helps in protecting the internal state of an object from unintended interference and misuse.

class employee{

    private _name: string;
    private _salary: number;

    constructor(name: string, salary: number) {
        this._name = name;
        this._salary = salary;
    }

      getName(): string {
        return this._name;
    }

      getSalary(): number {
        return this._salary;
    }
}

const emp = new employee("John Doe", 50000);
console.log(emp.getName()); // Accessing the name using the public method
console.log(emp.getSalary()); // Accessing the salary using the public method


// Ex -2 ;


// class BankAccount {

//     private balance: number = 500000;
//     accountNumber: string = "1234567890";

//     // getBalance(){
//     //     return this.balance;
//     // }

// }

// const bal = new BankAccount();
// const acc = bal.accountNumber;
// console.log("Account Number: Not private"+acc); // Accessing the account number directly
// console.log(bal.getBalance()); // Accessing the balance using the public method
// const b = bal.balance; // Error: Property 'balance' is private and only accessible within class 'BankAccount'.
