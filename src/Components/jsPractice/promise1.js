const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise Resolved !")
    },3000)
})
promise.then((result)=>console.log(result));