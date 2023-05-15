let binary = prompt("Enetr a Number: ");
let decimal = 0;
let base = 1;

for (let i = binary.length - 1; i >= 0; i--){
  let digit = binary[i];
  decimal += digit * base;
  base *= 2;
}
document.write(decimal);