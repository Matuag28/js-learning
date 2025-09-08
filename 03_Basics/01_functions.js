// console.log('h');
// console.log('e');
// console.log('l');
// console.log('l');
// console.log('o');

function sayMyName (){
console.log('h');
console.log('e');
console.log('l');
console.log('l');
console.log('o');
}
// sayMyName();

// console log only print 
function addTowNumber(a,b){
    console.log(a+b)
}

addTowNumber(3,4)
// return value have any variable to store the number 
function addTowNumber1(a,b){
    return a+b
}

let result =addTowNumber1(1,4)

console.log(`result is ${result}`)

// rest operator or spread operator 
function calculateCartPrice (...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500))


