const number = prompt("Enter a number: ");

let sum = 0;
let temp = number;

for (let i = 0; i < number.length; i++) {
  const digit = temp % 10;
  temp = Math.floor(temp / 10);
  sum += Math.pow(digit, number.length);
}
if (number == sum) {
  document.write(number + " is an Armstrong number."+sum);
} else {
  document.write(number + " is not an Armstrong number."+sum);
}
