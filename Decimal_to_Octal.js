let desimal = prompt("Enter a Decimal Number: ");
let Octal = " ";
for (let i = desimal; i > 0; i = Math.floor(i / 8)){
  Octal = (i % 8) + Octal;
}
document.write(Octal);