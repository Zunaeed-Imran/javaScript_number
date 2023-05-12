let num1 = prompt("Enter 1st GCD numbr: ");
let num2 = prompt("Enter 2nd GCD number: ");

num1 = Math.abs(num1);
num2 = Math.abs(num2);

let min = Math.min(num1, num2);

let GCD;

for (let i = 1; i <= min; i++){
  if (num1 % i == 0 && num2 % i == 0) {
    GCD = i;
  }
}
document.write("result of GCD is =  "+ GCD);
