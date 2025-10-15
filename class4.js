//calculate the average of the add numbers in an array
let sum = 0;
function oddAvg(numbers){
    for(let number of numbers){
        if(number % 2 !==0){
            sum = sum + number
        }
    }
    return sum;
}
let sum2 = 0;
function evenAvg(numbers){
    for(let number of numbers){
        if(number % 2 ===0){
            sum2 = sum2 + number
        }
    }
    return sum2;
}
const a = [2,1,43,5,6,432,1,];
const b = [2,1,1,2,1];
console.log(oddAvg(a))
console.log(evenAvg(b))