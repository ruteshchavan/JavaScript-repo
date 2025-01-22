// JSON - Javascript object notation
// JSON is data format and JS object is data structure.

let product = {
  name:'T-Shirt',
  size:'L',
  price:2299,
  rating : {
    stars:4.5,
    reviews:453,
  },
}

console.log(typeof product);
console.log(product);


let str=JSON.stringify(product);     // converts object into string
console.log(typeof str);            // strings are easy to transport over network so we try to convert into JSON object
console.log(str);

let product_new=JSON.parse(str);     // converts string into object
console.log(typeof product_new );
console.log(product_new);
