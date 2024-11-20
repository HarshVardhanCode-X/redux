async function getMessage(){
    await new Promise(resolve=>setTimeout(resolve,2000))
    return "HELLO ASYNC !"
}

getMessage().then((result)=>console.log(result))


// Both approches are correct one is short !


const asyncf = async () => {
    const promise = await new Promise((resolve) => {
        setTimeout(()=>{
            resolve("hello async")
        },2000)
    })
    return promise
}

asyncf().then((result)=>console.log(result))