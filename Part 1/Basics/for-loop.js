// for(let i=1; i<=10; i++) {
//     console.log(i);
// }

// Loop inside a loop - NESTED LOOPS!!

for(let i=1; i<=10;i++) {
    // console.log(`************************************************`);
    // console.log(`Outer Loop ${i}`);
    for(let j=1; j<=10;j++) {
        // console.log(`Inner Loop Value: ${j} and inner loop ${i}`);
        // console.log(`${i} * ${j} = ${i*j}` );
    }
}

const arr = ['Superman', 'Batman', 'Flash'];
for(let i = 0; i<arr.length; i++) {
    // console.log(arr[i]);
}

// Break and Continue - 

// Break: If we have to break the control flow of any loop, we use break statement.

// for (let i = 1; i <= 20; i++) {
//     if(i === 5) {
//         console.log('5 Detected!');
//         break;
//     }
//     console.log(i);    
// }

// Continue - Skips the condition for a single interation

for (let i = 1; i <= 20; i++) {
    if(i === 5) {
        console.log('5 Detected!');
        continue; 
    }
    console.log(i);    
}