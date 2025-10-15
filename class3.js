//check whether a year is a leap year or not
function leapYear(year){
    if(year % 4 === 0){
        return true;
    }
    return false;
}

const leap = leapYear(1996)
console.log(leap)

function leapYear2(year){
    if(year % 100 !==0 && year % 4 ===0 ){
        return true;
    }
    else if(year % 100 && year % 400 === 0){
        return true;
    }
    return false;
}
const find = leapYear2(2052)
console.log(find)