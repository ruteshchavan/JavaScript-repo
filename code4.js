/* for a given array with marks of student -> 85,77,44,37,76,60.
   find average of entire class.
*/

let marks=[85,77,44,37,76,60];
let sum=0;

for(let x of marks) {
    sum+=x;
}

let avg=sum/marks.length;
console.log(`avergae marks of class is : ${avg}`);