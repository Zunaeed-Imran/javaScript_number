// let num = prompt("Enter a number:");
// let s = num * num;

// let square = s.toString();
// let len = num.length;
// if (square.slice(-len) == num) {
//   document.write(num + " is an Automorphic number.");
// } else {
//   document.write(num + " is not an Automorphic number.");
// }
// console.log(len);



let num = prompt("Enter a number:");
let s = num * num;

let square = s.toString();
let len = num.length;
if (square.slice(-len) == num) {
  document.write(num + " is an Automorphic number.");
} else {
  document.write(num + " is not an Automorphic number.");
}
console.log(len);