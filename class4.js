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
let newAry = []
function evenAvg(numbers){
    for(let number of numbers){
        if(number % 2 ===0){
            sum2 = sum2 + number
            newAry.push(number)
        }
    }
    let result = sum2/newAry.length;
    return result;
}
const a = [2,1,43,5,6,432,1,];
const b = [4,1,1,6,1];
console.log(oddAvg(a))
console.log(evenAvg(b))