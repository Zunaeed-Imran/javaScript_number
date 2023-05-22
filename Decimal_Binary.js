let desimal = prompt("Enter Desimal Number.");
let binary = "";

for (let i = desimal; i > 0; i = Math.floor(i / 2)){
  binary = (i % 2) + binary;
}
document.write(binary);