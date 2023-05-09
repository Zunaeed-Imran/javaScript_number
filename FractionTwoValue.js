let a = prompt("Enter First Fraction Number: ");
let b = prompt("Enter 2nd Fraction Number: ");
let c = prompt("Enter 3rd Fraction Number: ");
let d = prompt("Enter 4th Fraction Number: ");
let symbol = prompt("Enter A Symbol '+' or '-': ");


let rp1 = a + c;
let rm1 = a - c;

let rp2 = b + d;
let rm2 = b - d;

let resultp = rp1 / rp2;
let resultm = rm1 / rm2;

if (symbol == "+") {
  document.write(resultp);
} else if (symbol == "-") {
  document.write(resultm);
} else {
  document.write("Wrong Symbol!");
}


