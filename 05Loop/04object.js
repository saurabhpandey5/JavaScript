const myObject={
    js:'javascript',
    CPP:'C++',
    rb:'ruby',
}

for (const key in myObject) {
    // console.log(key,":-",myObject[key]);
}

const arr=[1,2,3,4,5]
for (const key in arr) {
    // console.log(arr[key]);
}

const map=new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('USA',"United States of America");

for (const key in map) {
    // console.log(key); // this will not work 
}