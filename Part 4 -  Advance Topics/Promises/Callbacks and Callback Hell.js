// const makeBurger = function nextStep() {
//     getPataGobi(function(pataGobi) {
//         cookPataGobi(pataGobi, function(cookedPataGobi) {
//             getBuns(function(buns) {
//                 putPataGobiBetweenBuns(pataGobi, buns, function(burger) {
//                     nextStep(burger)
//                 })
//             })
//         })
//     })
// }

// makeBurger(function(burger) {
//     serve(burger);
// })

// const str = 'bannanannnnnn';
// let count = 0;
// let prevVal = '';
// for(let j= 97; j<=122; j++) {
//     // Converting string into ascii Code
//     let ch = String.fromCharCode(j);
//     console.log(ch);
//     let count = 0;
//     for(let i =0; i<str.length; i++) {
//         if(str[i] === ch) {
//             count++;
//         }
//     }
//     if(count > 0) {
//         console.log(`${ch} occurs ${count} times`);
//     }
// }

// let str1 = 'bannnaaa';
// let convertedStr = str1[0].toUpperCase() + str1.split(1,5) + str1[str1.length- 1].toUpperCase();
// console.log(str1.split(2,str1.length-2));
// console.log(convertedStr);

// Pls note - Call back functions alone dont make the code async
// Also event listners alone do not make the code async

    

// API Data Formats - 

// 1. XML - > Prev Popular data format used to transmit data across the web
// 2. JSON -> Nowdays we use only JSON format for APIS..XML format is not used now!!
