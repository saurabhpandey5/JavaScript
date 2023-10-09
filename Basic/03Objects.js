// Singleton
// Object.create

// object literals

const mysym=Symbol("Key1");

const JsUser={
    name: "Saurabh",
    "lastname": "pandey",
    [mysym]: "mykey1",
    age:23,
    location:"Noida",
    email:"psaurabh645@gmail.com",
    isloggedIn:false,
    lastLoginDays:["Monday","sunday"]
}


// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["lastname"]);
// console.log(JsUser[mysym]); //Symbol


// JsUser.email="sp410150@gmail.com";
// console.log(JsUser['email']);
// Object.freeze(JsUser);
// JsUser.email="sp410@gmail.com";
// console.log(JsUser);


JsUser.greeting=function(){
    console.log("hello Js user");
}
JsUser.greetingtwo=function(){
    console.log(`hello ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greeting);   //[Function (anonymous)]

console.log(JsUser.greetingtwo());


