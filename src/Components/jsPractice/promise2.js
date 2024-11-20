function promise(number){
    return new Promise((resolve, reject) => {
        if(number%2==0){
            resolve("Even Number !")
        }else{
            reject("Odd Number !")
        }
    })
}

promise(8).then((result)=>console.log(result)).catch((error)=>console.log(error));
