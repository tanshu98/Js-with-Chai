// for each - Additional Discussion - 

// let coding = ['c++', 'js', 'c', 'java', 'python'];

// const values = coding.forEach((items)=> {
//     // console.log(items);
//     return items;
// })

// console.log(values);

// So basically for-each loop doesnt return any value!!
// So if suppose based on certain condition we wanna return the array values..or we wanna do some calcuation and then return the array value..so that we cannot do..using for-each loop

// Filter => Filters always returns a value. So we filter array elements based on some conditon and the array elements which satisfy our conditon..they are returned back!! 
// Filter also expects a callback function!

const myNumbers = [1,2,3,4,5,6,7,8,9,10];

const number = myNumbers.filter((num)=>  num > 4) 
// console.log(number);

const number1 = myNumbers.filter((num)=>  {
   return num > 4
});
// Here..we are using {} and so this means..we are opening a scope..so in that case..we need to return the value and then only it will give us the result!
// console.log(number1);

// We can also do the same thing using for-each loop too..!

const newNums = [];
number.forEach((item)=> {
    if(item > 4) {
        newNums.push(item);
    }
})

console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]


// NOTE: All the Coding Questions you will find in the Interview Section of this Repo