function pattern(n){

    let i=1;
    for(i=1;i<=n;i++){

        let stars="";

        if(i%2!==0){
            stars="*".repeat(n);
        }else{
            stars=" "+"*".repeat(n-1)
        }
        console.log(stars)
    }
}
// const input = parseInt(prompt("Enter the Number -----> "));
pattern(6)