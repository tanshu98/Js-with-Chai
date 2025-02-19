const obj1 = {firstName: 'Tanshu',lastName: 'Allewar', gender: 'Male'};

const obj2 = {...obj1, firstName: 'Akshay', age: 31};

console.log(obj1,obj2);

// { firstName: 'Tanshu', lastName: 'Allewar', gender: 'Male' } { firstName: 'Akshay', lastName: 'Allewar', gender: 'Male', age: 31 }

// Here values get overwrite..i.e here in the case of obj2, firstName got overwrite.

let arr1 = [1,2,4,5,6,7];

const arr2 = [...arr1, 1,8,5,4];

console.log(arr2);
// [
//   1, 2, 4, 5, 6,
//   7, 1, 8, 5, 4
// ]

// Here values are getting appended..