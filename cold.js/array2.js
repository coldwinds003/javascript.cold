const marvel_hero = ["spiderman", "ironman", "Hulk", "thor"];
const dc_hero = ["superman", "batman", "flash"];

const all_new_hero = [...marvel_hero, ...dc_hero];
console.log(all_new_hero);

const another_array = [1,2,3,4,[2,4,5,67,],8,9,0];
const another_real_array = another_array.flat(Infinity);
console.log(another_real_array);

console.log(Array.isArray("sidhartha"));
console.log(Array.from("sidhartha"));
console.log(Array.from({name:"hitesh"}));
let score1=100
let score2=200
let score3=600
console.log(Array.of(score1,score2,score3));