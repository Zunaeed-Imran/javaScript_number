let n = prompt("Enter 1st LCM number ");
let m = prompt("Enter 2nd LCM number ");

let min = Math.min(n, m);

let GCD;

for (let i = 1; i <= min; i++){
  if (n % i == 0 && m % i == 0) {
    GCD = i;
  }
}

let LCM = (n * m) / GCD;
document.write(LCM);