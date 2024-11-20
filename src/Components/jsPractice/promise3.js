const promiseA = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise A Wins !")
    },5000)
})

const promiseB = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise B Wins !")
    },2000)
})

const promiseC = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise C Wins !")
    },4000)
})

Promise.race([promiseA,promiseB,promiseC]).then((result)=>console.log(result));