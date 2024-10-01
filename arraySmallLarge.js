// return smallest and largest element of an array.

let arr=[55,4,64,9,13,88];

let small=arr.reduce((prev,current) => {
    return prev < current ? prev : current;
})
console.log(small);

let large=arr.reduce((prev,current) => {
    return prev > current ? prev : current;
})
console.log(large);
