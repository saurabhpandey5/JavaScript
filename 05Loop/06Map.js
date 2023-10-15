// const coding =['JS','c++','c','java','ruby'];

// const values=coding.forEach(element => {
//     //console.log(element);
//     // return element;
// });
// console.log(values);

const mynum = [1, 2, 3, 4, 5, 6, 7];
const value = mynum.filter((element) => {
  return element > 5;
});
//  console.log(value);

const newNums = [];
mynum.forEach((element) => {
  if (element > 5) {
    newNums.push(element);
  }
});

// console.log(newNums);

const books = [
  { title: "book one", genre: "friction", publish: 2012, edition: 2002 },
  { title: "book two", genre: "history", publish: 2013, edition: 2003 },
  { title: "book three", genre: "Novel", publish: 2014, edition: 2005 },
  { title: "book four", genre: "Science", publish: 2052, edition: 2001 },
];

const userBooks=books.filter((bk)=> bk.publish<2014 && bk.genre=='history');


console.log(userBooks);
