let p = prompt("Enter a Number to see prime or not: ");

for (let i = 2; i < p; i++){
  if (p % i != 0) {
    document.write(p + " is Prime Number.");
    break;
  } else {
    document.write(p + " is Not Prime Number.");
    break;
  }
}
