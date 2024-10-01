/* 1.We are given array of marks.Filter out marks of students that scored 90+.
   2.Take a number n as input from user.Create an array of numbers from 1 to n.
   3.use reduce method to calculate sum of all numbers in the array.
   4.use the reduce method to calculate product of all numbers. 
*/

// 1
let marks=[99,65,79,91,93,88,96,99,78,95];
let a= marks.filter((value) => {
    return value > 90 ;
})
console.log(a);

//2
let n=prompt("Enter the number :");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

// 3
let p=[2,4,6,8,10];
let b= arr.reduce((prev,curr) => {
    return prev + curr ;
})
console.log(b);

// 4
let q=[1,3,5,7];
let c= arr.reduce((prev,curr) => {
    return prev * curr ;
})
console.log(c);
