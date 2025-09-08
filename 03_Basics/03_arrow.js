const user={
    username:"GTM",
    price:300,
    welcomeMessage: function (){
        console.log(`${this.username}, welcome to website`);
        
    }


}

user.welcomeMessage()
user.username="MTM"
user.welcomeMessage()
console.log(this);


const chai = () => {
    console.log(this);
    

}

chai()





// Arrow function 
// ()=>{}

// const addTwo = (a,b) =>{
//         return a+b
//     }

// console.log(addTwo(3,4))



// new level  , imlplicit return 

const addTwo =(a,b) => (a+b)

console.log(addTwo(4,5));

// if we use return we use {} and if we don't then we use ()
