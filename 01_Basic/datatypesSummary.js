// primitive : 
// String, Number , Boolean, null , undefined, Symbol ,BigInt

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


// Stack(Primitive) = copy hi milta hai , Heap (Non-Primitive)  = original value milti hai 

let myYtname="gg@gmail.com";

let anotherName=myYtname;
anotherName="CodeFordDebug"

console.log(anotherName);
console.log(myYtname);


let userOne ={
    email:"user@gmail.com",
    id:1
}

let userTwo=userOne;

console.log(userTwo.id);

userTwo.id=2

console.log(userTwo);

console.log(userOne.email,userOne.id);

