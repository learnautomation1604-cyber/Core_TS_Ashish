// async makes function always return a promise
// await can only used inside a async function
// awai pause the current async function - 
// implement try catch - Handle error from awaited promises


// let add = async()=>{
//     // await 
// }

console.log("start") // 10 ms

setTimeout(()=>{
    console.log("Task completing") // 2sec delay
},2000)

setTimeout(()=>{
    console.log("End") // 10 ms
},2000)