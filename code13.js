/*
Give discount based on age, gender for metro ticket
- Females get 50% off
- Kids under 5 years of age are free
- Kids up to 8 years have half ticket
- People Over 65 years of age only pay 30% of
the ticket
- In case of multiple discounts max discount will
apply.
*/

let age =40;
let gender='female';
let discount;

if(age<=5){
  discount=100;
}
else if(gender==='female' || age<=8){
  discount=50;
}
else if(age>=65){
  discount=30;
}
else{
  discount=0;
}

console.log(`Your final discount is ${discount}`);
