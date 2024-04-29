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
  valorcompu = 'papers'
}
else{
  valorcompu='scissors'
}
console.log (valorcompu)



    let sign = prompt("What's your Choice?");
    if (sign.toLowerCase() === "rock") {
        alert("You chose rock!");}
    if (sign.toLocaleLowerCase() === "papers"){
      alert ("You chose papers!");
    }
    if (sign.toLocaleLowerCase() === "scissors") {
      alert ("You chose scissors!");
    }
    else{
      alert ("You must choose rock, papers or scissors!")
    }