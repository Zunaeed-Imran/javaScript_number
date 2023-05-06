let num = prompt("Enter a Armstrong Number: ");
let num1 = prompt("Enter a Armstrong  Number 1st digit: ");
let num2 = prompt("Enter a Armstrong Number 2nd digit: ");
let num3 = prompt("Enter a Armstrong Number 3rd digit: ");

let f = Math.pow(num1, 3) + Math.pow(num2, 3) + Math.pow(num3, 3);


if (num == f) {
  document.write("Armstrong number: ");
} else {
  document.write("Not Armstrong Number: ");
}

