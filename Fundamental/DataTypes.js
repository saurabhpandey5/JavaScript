"use strict";// treat all JS code as new version

//alert("hello"); // we are using node-js , not brower

console.log(2+2);
console.log("saurabh");

//primitive
let name="saurabh"; //string
let age=19; //number
let islogin=true; //boolean
let email=null; // null
let num=1122344556677778; //bigInt
let lastname; //undefined
let result =Symbol(num); //symbol ->unique 

//non-primintive
let car={
    price:123,
    name:"BMW"
}
console.log(car.name);
console.log(typeof(car));
