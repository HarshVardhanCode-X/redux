// async function getMessage(){
//     await new Promise(resolve=>setTimeout(resolve,2000))
//     return "HELLO ASYNC !"
// }

// getMessage().then((result)=>console.log(result))


// Both approches are correct one is short !


// const asyncf = async () => {
//     const promise = await new Promise((resolve) => {
//         setTimeout(()=>{
//             resolve("hello async")
//         },2000)
//     })
//     return promise
// }

// asyncf().then((result)=>console.log(result))

const asyFun = async()=>{
    const promise = new Promise((resolve) => {
        setTimeout(()=>{
            resolve("Hello !")
        },2000)
    })
    return promise
}
asyFun().then((result)=>console.log(result))


async function asyFunc(){
    await new Promise((resolve) => {setTimeout(resolve,2000)})
    return "Hello !"
}
asyFunc().then((result)=>console.log(result))
