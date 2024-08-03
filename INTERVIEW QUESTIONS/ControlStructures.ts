// Activity 1 => If-else statements

// Task 1  WAP to check wether no is +ve, -ve or zero

const checkNumber = (num:number)=> {
    if(num > 0) {
        return('Number is Positive');
    } else if(num <0) {
        return 'Number is Negative';
    } else {
        return 'Number is Zero';
    }
}


console.log(checkNumber(-1));

// Task 3 -> WAP to find largest of 3 nos use nested if-else

const largestNumber = (n1:number,n2:number,n3:number) => {
    if(n1 >n2 && n1 >n3) {
        return `${n1} is greater!`
    } else if(n2 >n1 && n2 >n3) {
        return `${n2} is greater!`
    } else {
        return `${n3} is greater!`
    }
}


console.log(largestNumber(1,6,3));


// Task 4 -> 

const dayOfWeek = (day:number)=> {
    let dayToday: string
    switch(day) {
        case 1: 
            dayToday = 'Sunday';
            break;
        case 2: 
            dayToday = 'Monday';
            break;
        case 3: 
            dayToday = 'Tuesday';
            break;
        case 4: 
            dayToday = 'Wednesday';
            break;
        case 5: 
            dayToday = 'Thursday';
            break;
        case 6: 
            dayToday = 'Friday';
            break;
        case 7: 
            dayToday = 'Saturday';
            break;
        default: 
            return('Pls enter a correct choice');
            break;
            
    };
    return dayToday;
}

console.log(dayOfWeek(7));



// Task 7 => Leap Year 

const leapYear = (year:number)=> {
    if(year % 400 === 0) {
        return true;
    }
    if(year % 100 ===0) {
        return false;
    }
    if(year %4 === 0) {
        return true;
    }
    return false;
}

console.log(leapYear(2020));
