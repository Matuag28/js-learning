// primitive : String, Number , Boolean, null , undefined, Symbol ,BigInt

// Dynamic typed language  

// non - primitve

// Array , objects , Functions 

const id =Symbol('123')
const andotherId = Symbol('123')

console.log(id === andotherId);

const myFunction = function(){
    console.log("Hello");
}

let obj={
    name:'HH',
    age:28
}
console.log(typeof obj);
