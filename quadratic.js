let a = prompt("Enter a Number for Quadratic Equation: ");
let b = prompt("Enter a Number for Quadratic Equation: ");
let c = prompt("Enter a Number for Quadratic Equation: ");
let d = (b * b) - (4 * a * c);

let e = -b + Math.sqrt(d) / (2 * a);
let f = -b - Math.sqrt(d) / (2 * a);
let g = (-b / (2 * a) + (-(d) / (2 * a)));
let h = (-b / (2 * a) - (-(d) / (2 * a)));
let i = (-b) / (2 * a);


if (d > 0) {
  document.write("Root1 "+ e +"<br>"+ "Root2 " + f);
} else if (d == 0) {
  document.write("Root1 "+ i);
} else if (d < 0) {
  document.write("Root1 "+ g +"<br>" + "Root2 " + h);
} else {
  document.write("Incorrect Input");
}
            
     
  
       