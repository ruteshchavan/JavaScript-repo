/*
 Qs. Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”
a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end
*/

let companies=['bloomberg','microsoft','uber','google','ibm'];
console.log(companies);
console.log(companies.length)

companies.shift();

companies.splice(1,1,"ola");
console.log(companies);
