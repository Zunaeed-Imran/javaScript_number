let p1 = prompt("Enter 1st LCM Number: ");
let p2 = prompt("Enter 2nd LCM Number");

let max = Math.max(p1, p2);
let min = Math.min(p1, p2);
let lcm = max;

for (let i = 1; i <= min; i++){
  lcm = max * i;
  if (lcm % min == 0) {
    break;
  }
}
document.write("The LCM is = " + lcm);
