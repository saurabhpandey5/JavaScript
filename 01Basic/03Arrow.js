const user={
    username:"saurabh",
    price:99,

    welcomeMessage: function(){
     console.log(`${this.username} welcome to website`);
    //  console.log(this);
    }
    

}
// user.welcomeMessage();
// user.username="Pandey";
// user.welcomeMessage();
// console.log(this)


// function chai(){
//     let username="saurabh";
//     console.log(this.username); //undefined
// }
// chai();


// const chai=function (){
//     let username="saurabh";
//     console.log(this.username);
// }
// chai();


// Arrow Function

// const chai=()=>{
    // let username="saurabh";
    // console.log(this.username);
// }
// chai();


// const addTwo=(num,num2)=>{
//     return num+num2;
// }
// console.log(addTwo(2,3));


//implicitly return 
// const addon=(num1,num2)=> (num1 + num2);
// console.log(addon(2,3));

// const addon=(num1,num2)=> ({username:"Saurabh"});
// console.log(addon(2,3));




