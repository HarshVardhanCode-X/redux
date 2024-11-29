const multipleAwait = async ()=>{
    const promiseA = await new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Promise A !")
        },2000)
    })
    const promiseB = await new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Promise B !")
        },2000)
    })
    console.log(promiseA)
    console.log(promiseB)
}

multipleAwait()