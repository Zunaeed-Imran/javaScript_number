let n = prompt("Enter a 1st Number: ");
let m = prompt("Enter a 2nd Number: ");
let o = prompt("Enter a 3rd Number: ");
let gretest;

if (n > m && n > o) {
  gretest = n;
} else if (m > n && m > o) {
  gretest = m;
} else  {
  gretest = o;
}
document.write(gretest+ " is Gretest");