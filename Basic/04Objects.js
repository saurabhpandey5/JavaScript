// const tinderUser= new Object();

const tinderUser = {};
tinderUser.id = "12ab";
tinderUser.name = "saurabh";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "saurabh@gmail.com",
  fullname: {
    userFullName: {
      firstName: "saurabh",
      lastName: "Pandey",
    },
  },
};
// console.log(regularUser.fullname.userFullName);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};

// const obj3={obj1,obj2}; //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// const obj3=Object.assign({},obj1,obj2);

// const obj3={...obj1,...obj2};  // Spread
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "saurabh@gmail.com",
  },
  {
    id: 2,
    email: "user@gmail.com",
  },
];

// console.log(users[0].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));




const course={
    courseName:'Js in Hindi',
    price:"999",
    teacher:'saurabh'
}

//Destructure
const {courseName,price,teacher}=course;
// console.log(courseName);
// console.log(price);






