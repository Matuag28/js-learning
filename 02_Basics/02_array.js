const marvel_heroes= ["Thor","IronMan","Spiderman"]
const dc_heroes=["Batman","Superman","Flash"]

console.log(marvel_heroes.concat(dc_heroes));


const allNewHeroes = [...marvel_heroes, ...dc_heroes]
console.log(allNewHeroes);

console.log(Array.isArray("GG"));
console.log(Array.from("GM"));
