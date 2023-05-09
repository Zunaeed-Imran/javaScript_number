let fac = prompt("Enter Number to see factor: ");

for (let i = 0; i < fac / 2; i++){
  if (fac % i == 0) {
    document.write(i+"<br>");
  }
}