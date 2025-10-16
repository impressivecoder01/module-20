//remove duplicate items from an array
const biriyani = ['a', 'b', 'c', 'c', 'd', 'a'];
const numbers = [1,2,2,43,43,1,76];
function noDuplicate (array){
    const unique = [];
    for(let biri of array){
        if(unique.includes(biri)=== false){
            unique.push(biri)
        }
    }
    return unique;
}
console.log(noDuplicate(biriyani))
console.log(noDuplicate(numbers))