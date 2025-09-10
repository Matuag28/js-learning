// const promiseOne = new Promise(function (resolve,reject){
//    // Do an sync task 
//    // DB calls, cryptograpghy, network
//    setTimeout(function(){
//     console.log('Async task is comolete');
//     resolve()
    
//    },1000) 
// })

// promiseOne.then(function(){
//     console.log('Promise consumed');
    
// })


// const promiseThree = new Promise(function (resolve,reject){
//     setTimeout(function (){
//         resolve({username:"GG",email:"GG@gmail.com"})

//     },1000)
// })

// promiseThree.then(function (){
// console.log(promiseThree);

// })



// // const promiseFour = new Promise(function (resolve,reject){
// //     setTimeout(function (){

// //         let error = true
// //         if(!error){
// //             resolve({username:"GGMM",email:"GG@gmail.com"})

// //         }
// //         else{
// //             reject("Error: soemthing is wrong")
// //         }
// //     },1000)
// // })

// // promiseFour.then((user)=>{
// //     console.log(user);
// //     return user.username
    

// // }).then((username)=>{
// //     console.log(username);
    

// // }).catch(function(error){
// //     console.log((error));
    
// // }).finally(()=> console.log("PRomise is either resolved or rejected")
// // )


// promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error)
//             {
//             resolve({username:"JS",password:"123"}

//             )
//         }
//         else{
//             reject("Error JS went wrong")
//         }
//     },1000)
// });


// async function consumedPromiseFive(){
//     const response = await promiseFive
//     console.log(response);
    
// }
    

 