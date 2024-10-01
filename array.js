// array - collection of items
// array are mutable

let marks=[55,66,78,91];
console.log(marks);
console.log(marks[1]);
console.log(marks[5]);

let heros=['iron-man',"batman","black_panther"];
// console.log(heros);

for(let i=0;i<heros.length;i++){
    console.log(heros[i]);
}

// for of loop
for(let hero of heros){
    console.log(hero);
}

for(let hero of heros){
    console.log(hero.toUpperCase());
}