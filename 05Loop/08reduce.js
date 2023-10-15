const mynums=[1,2,3];
const initi=0;
const newmy=mynums.reduce((acc,curr)=>{
    // console.log(`acc: ${acc} and curr : ${curr}`)
    return acc+curr;
},0)

// console.log(newmy);


const course=[
    {
        itemName:"DEV",
        price:2300
    },
    {
        itemName:'Prod',
        price:2300
    },
    {
        itemName:"DEV2",
        price:2000
    },
    {
        itemName:'Prod2',
        price:3000
    }
]

const ans=course.reduce((acc,item)=>{
    return acc+item.price;
},0)
console.log(ans);















