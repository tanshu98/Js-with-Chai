// for-each, map these iterable functions are inbuilt in arrays..so these are just methods with the help of which we can iterate over any array..

let coding = ['c++', 'js', 'c', 'java', 'python'];

// forEach => Performs the specified action for each element in an array.This exprects a callback function(Function with no name..ie anonymus function)
// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach((item)=> {
//     console.log(item);
// })

// Another way - 

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe); // Here we dont execute the function..here we just pass the function reference. Executing woh aapne aap khud krleta hain

// Now for each can accept 3 paramters..



coding.forEach((item, index, arr)=> {
    // console.log(item, index, arr);
    // op - c++ 0 [ 'c++', 'js', 'c', 'java', 'python' ]
// js 1 [ 'c++', 'js', 'c', 'java', 'python' ]
// c 2 [ 'c++', 'js', 'c', 'java', 'python' ]
// java 3 [ 'c++', 'js', 'c', 'java', 'python' ]
// python 4 [ 'c++', 'js', 'c', 'java', 'python' ]
})


// For-each in Array of Objects - 

const myCoding = [
    {
        languageName: 'JavScript',
        languageFileName: 'js'
    },
    {
        languageName: 'Python',
        languageFileName: 'py'
    },
    {
        languageName: 'Java',
        languageFileName: 'java'
    }
]

const values = myCoding.forEach((item)=> {
    console.log(item.languageName);
    // return values;
})

// NOTE: All the Coding Questions you will find in the Interview Section of this Repo