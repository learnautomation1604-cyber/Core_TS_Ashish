// Abstraction - Expose only essential features while hiding implementaion detils

// abstract class BasePage{

//     constructor(protected page: page) {

//     }

//     abstract verifyPage():Promise<void>;

//     async takescreenshot(){

//         await this.page.screenshot({path:"screenshot.png"});
//     }


// }


// abstract class Animal{

//     static makeSound: any;

//     static sleep() {
//         throw new Error("Method not implemented.");
//     }
//     abstract makeSound(): void;

//     sleep(){
//         console.log("Animal is sleeping");
//     }
// }


// // const animal = new Dog();
// Animal.makeSound();
// Animal.sleep();


// abstract class atm {
//    abstract withdraw(amount: number): void;
    
// }

// class SBIATM extends atm {
//     withdraw(amount: number):void{
//         console.log(`Withdrawing ${amount} from SBI ATM`);

//     }

// }

// const ATM = new SBIATM();
// ATM.withdraw(1000);


