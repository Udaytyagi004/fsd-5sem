// function in js
// function keyword - hoisted
function fun() {
  console.log("FSD Class");
}
console.log(fun);
console.log(fun());

// function as Expression
const a = function b() {
  console.log("FSD class!");
};
console.log(a);
console.log(a());
console.log(b);

// arrow function - not hoisted

const x = () => {
  console.log("FSD class!");
};
console.log(a);
console.log(a());

// immediate function

(() => {
  console.log("hello");
})();
