// const flip = parseInt(prompt('enter number'))
// console.log(typeof (flip))

// this function will access the button element i.e rock scissor or paper -->> read the input of player
// function winFunction(event) {
//   console.log(event)
//   console.log(event.target)
//   console.log(event.target.id + typeof (event.target.id))
//   console.log(event.target.id.slice(4) + "  " +
//     typeof parseInt(event.target.id.slice(4)))
//   // console.log(event.target.value)
//   let text = event.target.innerHTML;
//   document.getElementById("demo").innerHTML = text;
// }

// how to run a do while loop
// let result = '';
// let ch = 0;

// do {
//   console.log('chances remaining ' + (5-ch) );
//   ch = ch + 1;
//   result = result + ch;
// } while (ch < 5);
// console.log('RESULT IS HERE  ' + result );
// // Expected output: "12345"
// document.getElementById("demo").innerHTML = result;

//basic logic to decide who won 
// let num = 1;
// num === 2 ? document.getElementById("demo").innerHTML = 'match draw': num === 1 ? document.getElementById("demo").innerHTML = 'match is won by player 1' : document.getElementById("demo").innerHTML = 'match is won by player 2';
// let player = 'scissor'
// let cpu = 'paper'
// if (player === cpu) { document.getElementById("demo").innerHTML = "match tied" }
//   //for payer - rock
//   else if (player === "rock" && cpu === 'paper') { document.getElementById("demo").innerHTML = "cpu won" }
//   else if (player === "rock" && cpu === 'scissor') { document.getElementById("demo").innerHTML = "PLAYER WON !" }
//   //for payer - paper
//   else if (player === "paper" && cpu === 'scissor') { document.getElementById("demo").innerHTML = "cpu won" }
//   else if (player === "paper" && cpu === 'rock') { document.getElementById("demo").innerHTML = "PLAYER WON !" }
//   //for payer - scissor
//   else if (player === "scissor" && cpu === 'rock') { document.getElementById("demo").innerHTML = "cpu won" }
//   else if (player === "scissor" && cpu === 'paper') { document.getElementById("demo").innerHTML = "PLAYER WON !" }
