let player = '';
let cpu = '';
let arr = ['rock', 'paper', 'scissor'];
let demo = document.getElementById("demo");

//loop by the help  of ternary operator
let chance = 0;
let playerScore = 0;

function winFunction(event) {
  chance === 10 ? (document.getElementById("gameover").innerHTML = '<div id = "gameoverh1"><h1>GAME OVER <br> No more chance left</h1></div>') :
    //deciding PLAYER
    player = event.target.id;
  document.getElementById("demo2").innerHTML = 'PLAYER PICKED : ' + player.toUpperCase();
  // deciding CPU
  cpu = arr[Math.floor(Math.random() * 3)];
  document.getElementById("demo3").innerHTML = 'CPU PICKED : ' + cpu.toUpperCase();
  //deciding winner
  if (player === cpu) { demo.innerHTML = "MATCH TIED" }
  //for payer - rock
  else if (player === "rock" && cpu === 'paper') { demo.innerHTML = "CPU WON" }
  else if (player === "rock" && cpu === 'scissor') { demo.innerHTML = "PLAYER WON !"; playerScore = playerScore + 1; }
  //for payer - paper
  else if (player === "paper" && cpu === 'scissor') { demo.innerHTML = "CPU WON" }
  else if (player === "paper" && cpu === 'rock') { demo.innerHTML = "PLAYER WON !"; playerScore = playerScore + 1; }
  //for payer - scissor
  else if (player === "scissor" && cpu === 'rock') { demo.innerHTML = "CPU WON" }
  else if (player === "scissor" && cpu === 'paper') { demo.innerHTML = "PLAYER WON !"; playerScore = playerScore + 1; }
  // main function completed
  chance = chance + 1;
  console.log(chance);
  document.getElementById("demo4").innerHTML = 'Chances left: ' + (10 - chance) + '    ' + 'Player Score is : ' + playerScore;
}