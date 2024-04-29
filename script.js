function getComputerChoice(max) {
  return Math.floor(Math.random() * max);
}

const juegalacompu=(getComputerChoice(3));
   // Expected output: 0, 1 or 2
console.log (juegalacompu)
let valorcompu
if (juegalacompu === 0) {
  valorcompu= 'rock'
}
if (juegalacompu === 1){
  valorcompu = 'paper'
}
else{
  valorcompu='scissors'
}
console.log (valorcompu)
  function getHumanChoice() {
    let sign = prompt("What's your Choice?");
    if (sign.toLowerCase() === "rock") {
        alert("You chose rock!");
      }
  }