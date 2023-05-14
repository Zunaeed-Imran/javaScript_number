const number1 = prompt("Enter a number: ");
const number2 = prompt("Enter a number: ");

for (let j = number1; j <= number2; j++){

  let number = j.toString();
  let sum = 0;
  let temp = number;

for (let i = 0; i < number.length; i++) {
  const digit = temp % 10;
  temp = Math.floor(temp / 10);
  sum += Math.pow(digit, number.length);
}
if (number == sum) {
  document.write(number + " is an Armstrong number."+"<br>");
} else {
  document.write(number + " is not an Armstrong number."+"<br>");
}
}

