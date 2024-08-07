// Task 1 => WAP to print nos from 1 to 10

// for(let i=0; i<10; i++) {
//     console.log(i+1);
    
// }

// Task 2 => Multiplication of 5 using for Loop


// This Pgm prints table from 1 to 10

// for(let i=1; i<11;i++) {
//    for(let j= 1; j<11; j++) {
//     console.log(`${i} * ${j} = ${i*j}`);
    
//    }
    
// }

// Modifying this above table -->

// This prints table of 5

// for(let i=5; i<6;i++) {
//     for(let j= 1; j<11; j++) {
//      console.log(`${i} * ${j} = ${i*j}`);
//     }
//  }


// Task 3 => 1 to 10 nos using while Loop

// let k = 0

// while(k <11) {
//     console.log(k);
//     k++;    
// }

// WAP to print sum of nos from 1 to 10

// let nos = 1;
// let sum =0;

// while (nos <=10) {
//     sum += nos;
//     console.log(sum);
//    nos++;
    
// }

// Task 4 => 10 to 1 nos using while Loop

// let m = 10;

// while(m<=10) {
//     console.log(m);
//     m--
//     if(m === 0) {
//         break;
//     }
// }

// Task 5 -> WAP to print nos from 1 to 5 using doWhile Loop

// let v = 0
// do {
//     v++;
//     console.log(v);
    
// } while (v<5);


// Task 6 => WAP to print factorial of nos using do while Loop

// Factorial of nos using for loop


// let nos =5
// let factorial = 1;
// for(let i=nos; i<=nos; i-- ) {
//     factorial = i * factorial // factorial = 1 * 5
//     if(i === 1) {
//         break;
//     }
// }
//     console.log(factorial) // 5
// 5*4*3*2*1

// Factorial of nos using while loop

// let nos = 5;
// let factorial = 1;

// while(nos <=5) {
//     factorial *= nos;
//     nos--
//     if(nos === 0) {
//         break;
//     }
// }

// console.log(factorial)

// Factorial of nos using do while loop

let factorialNos = (nos:number)=> {
    let factorial = 1;
do{
    factorial *= nos;
    nos--
    if(nos === 0) {
        break;
    }
}while(nos <=5)

    return factorial;
    
}
// console.log(factorialNos(5));

// Task 8: WAP to print nos from 1 to 10 , but skip the number 5 using continue statement

// for(let i=1; i<=11; i++) {
//     if(i===5){
//         continue;
//     }
//     console.log(i);
    
// }

// // Task 8: WAP to print nos from 1 to 10 , but stop the loop when the number is 7 using break statement

for(let i=1;i<=11; i++) {
    if(i===8) break;
    console.log(i);
    
}