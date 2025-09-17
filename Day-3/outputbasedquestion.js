var a = 13;
console.log(a);
if (a > 12) {
  a = 43;
  console.log(a);
}
console.log(a);

// using function
var a = 13;
console.log(a);
function fun() {
  a = 43;
  console.log(a);
}
fun();
console.log(a);

function output() {
  var x = (y = 8);
}
output();
console.log(typeof x);
console.log(typeof y);

// datatyes in javascript
// primitive(boolean ,number ,null ,),non primitive(array , string,)

let a = "235" - 23 + 23 + "true" - false + 23 - 235 + 235;
console.log(a);

// output
// NaN (not a number)
