
let num = prompt("Enter a Number: ");

  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    document.write(num + " is a prime number.");
  } else {
    document.write(num + " is not a prime number.");
  }

