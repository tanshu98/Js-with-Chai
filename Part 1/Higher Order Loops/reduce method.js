// Reduce - 

const myNums = [1,2,3];

// const myTotal = myNums.reduce(function(acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0);

// console.log(myTotal);
// op - acc: 0 and currVal: 1
// acc: 1 and currVal: 2
// acc: 3 and currVal: 3

// Reduce using arrow funtion - 

const myTotal = myNums.reduce((acc, currVal)=> acc+ currVal, 0);
console.log(myTotal);


const shoppingCart = [
    {
        itemName: 'js course',
        itemPrice: 99
    },
    {
        itemName: 'py course',
        itemPrice: 199
    },
    {
        itemName: 'java course',
        itemPrice: 299
    },
    {
        itemName: 'js course',
        itemPrice: 99
    },
    {
        itemName: 'c course',
        itemPrice: 499
    }
]

// Add the itemprice and print its total

const priceToPay = shoppingCart.reduce((acc,item)=> acc+ item.itemPrice, 0);
console.log(priceToPay); // 1195

// NOTE: All the Coding Questions you will find in the Interview Section of this Repo