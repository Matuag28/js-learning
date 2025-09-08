// for of 

// ["","",""]
// [{},{},{}]

// for of can use in any thing not just arr,or strings,etc.

const arr=[1,2,3,4,5,6]

for (const num of arr) {
    console.log(num);
    
    
}


const greet="Hello WOrld"

for (const char of greet) {
    console.log(char);
    
    
}


//Map


const map  = new Map()
map.set('IN',"India")
map.set('US',"United States")

console.log(map);

for (const [element,value] of map) {
    console.log(element,value);
    
    
}

// for of  loop can not be used for objects
// for in loop can not be used for map

