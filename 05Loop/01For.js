// For
const arr = [];
for (let i = 0; i < 10; i++) {
  if (i > 6) {
    arr.push(i);
  }
}
// console.log(arr);

const arr1 = [];
for (let i = 1; i <= 5; i++) {
  const arr2 = [];
  for (let j = 1; j <= 10; j++) {
    arr2.push(j * i);
  }
  arr1.push(arr2);
}
// console.log(arr1);

//break
for (let index = 1; index < 20; index++) {
  if (index == 5) {
    break;
  }
  // console.log(index);
}

//Continue
for (let index = 0; index < 10; index++) {
  if (index == 5) {
    continue;
  }
//   console.log(index);
}
