let p = prompt("Enter a Number to Check Perfect or not: ");
sum = 0;

for (let i = 0; i <= p / 2; i++){
  if (p % i == 0) {
    sum += i;
  }
}
if (p == sum) {
  document.write(p + " is Perfect Number.");
} else {
  document.write(p + " is Not Perfect Number.");
}