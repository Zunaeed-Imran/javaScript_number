let h = prompt("Enter harshad Number: ")
let sum = 0;
for (let i = 0; i < h.length; i++){
  sum += parseInt(h[i]);
}

if (h % sum == 0) {
  document.write("Harshad Number.");
} else {
  document.write("Not Harshad Number.");
}