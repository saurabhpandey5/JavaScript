// for of

const arr=[1,2,3,4,5];
for (const num of arr) {
    // console.log(num);
}

const greets="hello world";
for (const val of greets) {
    if(val==' '){
        continue;
    }
    // console.log(val);
}


//Maps

const map=new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('USA',"United States of America");
// console.log(map);

for (const [key,value] of map) {
    // console.log(key,"->",value);
}


const myObject={
    game:'NFS',
    game2:"PUBG"
}

// for (const [key,val] of myObject) {
//     console.log(key,'->',val);
// }

