// array are used to store multiple values in a single variable.
// array - collection of items.
// array are mutable.
// typeof operator on array returns object.

let marks=[55,66,78,91];
console.log(marks);
console.log(marks[1]);
console.log(marks[5]);
console.log();


let arr=[1,'JavaScript',null,true,{college:'DYPCET'}];
console.log(arr[1]);
console.log(arr[5]);
console.log(arr.length);
console.log(arr[4]);
console.log();

let heros=['iron-man',"batman","black_panther"];
// console.log(heros);

for(let i=0;i<heros.length;i++){
    console.log(heros[i]);
}

// for of loop
for(let hero of heros){
    console.log(hero);
}console.log();


for(let hero of heros){
    console.log(hero.toUpperCase());
}