let num = prompt("Enter Abundant Number: ");
let sum = 0;

for (let i = 0; i <= num / 2; i++){
  if (num % i == 0) {
    sum += i;
  }
}
if (num < sum) {
  document.write(num + " is Abundant Number.");
} else {
  document.write(num + " Not Abundant Number.");
}