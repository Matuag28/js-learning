function multBy5(num){
    return num*5

}

multBy5.power=2


console.log(multBy5(5));
console.log(multBy5.power);
console.log(multBy5.prototype);



function createUser (username,score){
    this.username=username
    this.score = score

}

createUser.prototype.increment = function(){
    this.score++
}

const ch = createUser("Chari",25)
const coff= createUser("coffe",250)

