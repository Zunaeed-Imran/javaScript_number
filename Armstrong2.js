let num = prompt("Enter a Armstrong Number: ");

let e = Math.pow(num[0], 1);
let f = Math.pow(num[0], 3) + Math.pow(num[1], 3) + Math.pow(num[2], 3);
let g = Math.pow(num[0], 4) + Math.pow(num[1], 4) + Math.pow(num[2], 4) +  Math.pow(num[3], 4);
let h = Math.pow(num[0], 5) + Math.pow(num[1], 5) + Math.pow(num[2], 5) +  Math.pow(num[3], 5) + Math.pow(num[4], 5);
let i = Math.pow(num[0], 6) + Math.pow(num[1], 6) + Math.pow(num[2], 6) +  Math.pow(num[3], 6) + Math.pow(num[4], 6) + Math.pow(num[5], 6);
let j = Math.pow(num[0], 7) + Math.pow(num[1], 7) + Math.pow(num[2], 7) +  Math.pow(num[3], 7) + Math.pow(num[4], 7) + Math.pow(num[5], 7) + Math.pow(num[6], 7);
let k = Math.pow(num[0], 8) + Math.pow(num[1], 8) + Math.pow(num[2], 8) +  Math.pow(num[3], 8) + Math.pow(num[4], 8) + Math.pow(num[5], 8) + Math.pow(num[6], 8) + Math.pow(num[7], 8);
let l = Math.pow(num[0], 9) + Math.pow(num[1], 9) + Math.pow(num[2], 9) +  Math.pow(num[3], 9) + Math.pow(num[4], 9) + Math.pow(num[5], 9) + Math.pow(num[6], 9) + Math.pow(num[7], 9) + Math.pow(num[8], 9);
let m = Math.pow(num[0], 10) + Math.pow(num[1], 10) + Math.pow(num[2], 10) +  Math.pow(num[3], 10) + Math.pow(num[4], 10) + Math.pow(num[5], 10) + Math.pow(num[6], 10) + Math.pow(num[7], 10) + Math.pow(num[8], 10) + Math.pow(num[9], 10);
let n = Math.pow(num[0], 11) + Math.pow(num[1], 11) + Math.pow(num[2], 11) +  Math.pow(num[3], 11) + Math.pow(num[4], 11) + Math.pow(num[5], 11) + Math.pow(num[6], 11) + Math.pow(num[7], 11) + Math.pow(num[8], 11) + Math.pow(num[9], 11) + Math.pow(num[10], 12);


if (num == f) {
  document.write("Armstrong number: " + num);
} else if (num == g) {
  document.write("Armstrong number: " + num);
} else if (num == h) {
  document.write("Armstrong number: " + num);
} else if (num == i) {
  document.write("Armstrong number: " + num);
} else if (num == j) {
  document.write("Armstrong number: " + num);
} else if (num == e) {
  document.write("Armstrong number: " + num);
} else if (num == k) {
  document.write("Armstrong number: " + num);
} else if (num == l) {
  document.write("Armstrong number: " + num);
} else if (num == m) {
  document.write("Armstrong number: " + num);
} else if (num == n) {
  document.write("Armstrong number: " + num);
}
else {
  document.write("Not Armstrong Number: " + num);
}
