let a = prompt("Enter a Number for Quadratic Equation: ");
let b = prompt("Enter a Number for Quadratic Equation: ");
let c = prompt("Enter a Number for Quadratic Equation: ");
let d = Math.sqrt((b * b) - (4 * a * c));

let Root1 = (- b + d) / (2 * a);
let Root2 = (- b - d) / (2 * a);

document.write("Root1 "+ Root1 +"<br>"+ "Root2 " + Root2);