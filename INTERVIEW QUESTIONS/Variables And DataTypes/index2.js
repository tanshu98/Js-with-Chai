
// const str = "i am in office"
// let nameNew = 'tanshu';
// let emptyVar = ''

// for(let i=0; i< str.length;  i+=3) {
//     // console.log(str[i]);
//     // console.log(emptyVar + str.slice(i,i+2) + nameNew);
//     emptyVar = emptyVar + str.slice(i,i+3)+ nameNew;
// }

// console.log('empty Var', emptyVar);


// const file = "abcedf.jpg" // return jpg
// const str1 = file.slice(-3) // Aim chesthunav
// console.log(str1);

// const str3 = "How can mirrors be real if our eyes aren't real"
// const strCap = str3.split(' ').map((s)=> s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
// console.log(strCap);

// // let s1='Good Evening'
// // // let s3=s1.split('')

// // let s2='Hii' 
// // let final=''

// // for (let i=0;i<s1.length;i+=3){
// //     // final=final+s1.slice(i,i+3)+s2

// //     console.log(s1.slice(i, i+3)); // prints 3 string
// //     console.log(final  = final + s1.slice(i, i+3) + s2);
    
// // }
// // // console.log('final', final)

const num = [12,34,9,37,5,90];

const descSort = num.sort((a,b)=> b-a);
// const numSort = num.sort((a,b)=> a-b);
// console.log(numSort);

console.log('----------', descSort);