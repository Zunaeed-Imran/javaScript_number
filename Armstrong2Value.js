let num1 = prompt("Enter 1st Number: ");
let num2 = prompt("Enter 2nd number: ");

for (let i = num1; i <= num2; i++) {
  let number = i.toString();
  let sum = 0;

  for (let j = 0; j < number.length; j++) {
    const digit = (number[j]);
    sum += Math.pow(digit, number.length);
  }
  
  if (i == sum) {
    document.write(i + " is an Armstrong number.</br>");
  } else {
    document.write(i + " is not an Armstrong number.</br>");
  }
}
