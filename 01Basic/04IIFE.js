// Immediately Invoked Function Expressions

(function chai(){
    //name IIFE
    console.log(`DB Connected`);
})();


((name)=>{
    //UnNamed IIFE
    console.log(`Db Connected ${name}`)
})('Saurabh')
