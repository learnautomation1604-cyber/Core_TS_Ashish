// Normal code Excution

// console.log("Anbu") // 10 ms
// console.log("Ashish") // 10 ms
// console.log("Arun") // 10 ms

// Using - setTimeOut();

// console.log("start") // 10 ms

// setTimeout(()=>{
//     console.log("Task completing") // 2sec delay

// },2000)

// Promises (Cl200ass) - A promises repreents a value that will be available later

// console.log("Start")

// const promise = new Promise<string>(
//     (resolve) => {

//         setTimeout(()=>{
//             resolve("Finished")
//         }, 2000);

//     });

// promise.then(result =>{
//     console.log(result)
// })

Promise.all([Promise.resolve("A"), Promise.resolve("B")]); // - All Promisese to succeed
Promise.race([Promise.resolve("A")]); // Return the result of the first promise to settle
Promise.any([Promise.resolve("A")]); // Return the first fulfilled promise
Promise.allSettled([Promise.resolve("A")]); // Waits for all promises to finish, wheter or rejected

//asyn 

const add = async ()=>{

    console.log("Start")

    await delay(2000);
    
    console.log("Stop")


}

add();


// What is asyn function and its usage , write syntax, 
// what is settimeout?
// what is promise ? and its usage 
// Difference - Promise vs promises 























function delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}
// function delay(arg0: number) {
//     throw new Error("Function not implemented.");
// }

// // async makes function always return a promise
// // await can only used inside a async function
// // awai pause the current async function - 
// // implement try catch - Handle error from awaited promises


// // let add = async()=>{
// //     // await 
// // }

// console.log("start") // 10 ms

// setTimeout(()=>{
//     console.log("Task completing") // 2sec delay
// },2000)

// setTimeout(()=>{
//     console.log("End") // 10 ms
// },2000)