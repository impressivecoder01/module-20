// unit convert inch to feet, miles to kilometer
// 12 inch 1 feet
function inchToFeet(inch){
    let feet = inch/12;
    return feet;
}
const verify = 75;
console.log(inchToFeet(verify))

function inchToFeet2(inch){
    const feetFraction = inch/12;
    const feetNumber = parseInt(feetFraction)
    const inchRemain = inch % 12;
    const reslt = feetNumber + 'ft' + inchRemain + 'inch'
    return reslt;
}
const shuvo = inchToFeet2(40);
console.log(shuvo)

function milesToKilometers(mile){
    const kilo = mile * 1.60934;
    return kilo;

}
console.log(milesToKilometers(55))