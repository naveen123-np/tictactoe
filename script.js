const boxs = document.querySelectorAll(".box");
const turnTune = new Audio("turn.wav");
const gameOverTune = new Audio("gameover.wav");
const img = document.querySelector(".img");
const resetbtn = document.querySelector(".reset");
const displayWinner = document.querySelector(".winner-display");
console.log(boxs);
let turn = "X";

const winnerPattern = [
  [0, 1, 2],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [6, 3, 0],
];

//setvalue of button
for (let a = 0; a < boxs.length; a++) {
  boxs[a].addEventListener("click", () => {
    console.log(boxs[a]);
    if (turn == "X") {
      boxs[a].innerText = turn;
      turnTune.play();
      checkWinner();
      turn = "O";
      boxs[a].removeEventListener("click", () => {});
    } else {
      boxs[a].innerText = turn;
      turnTune.play();
      checkWinner();
      turn = "X";
    }
    boxs[a].disabled = true;
  });
}

// reset option
resetbtn.addEventListener("click", () => {
  for (const box of boxs) {
    box.innerText = "";
    box.disabled = false;
    img.src = "dancing2.gif";
    displayWinner.innerText = "";
    turn="X";
    displayWinner.style.display="none";
  }
});

//checkwinner condition
function checkWinner() {
  for (let a = 0; a < winnerPattern.length; a++) {
    let value1 = boxs[winnerPattern[a][0]].innerText;
    let value2 = boxs[winnerPattern[a][1]].innerText;
    let value3 = boxs[winnerPattern[a][2]].innerText;
    if (value1 !== "" && value2 !== "" && value3 !== "") {
      if (value1 == value2 && value2 == value3 && value3 == value1) {
        console.log(
          winnerPattern[a][0],
          winnerPattern[a][1],
          winnerPattern[a][2]
        );
        gameOverTune.play();
        img.src = "dancing.gif";
        displayWinner.style.display="block";
        displayWinner.innerText = ` Congratulation ${turn} won the Game !! 🚀🚀🚀`;
        for (const box of boxs) {
          box.disabled = true;
      }
   
         }else {
        if(
          value1 !== value2 && value2 !== value3 &&
        boxs[0].innerText !== "" &&
        boxs[1].innerText !== "" &&
        boxs[2].innerText !== "" &&
        boxs[3].innerText !== "" &&
        boxs[4].innerText !== "" &&
        boxs[5].innerText !== "" &&
        boxs[6].innerText !== "" &&
        boxs[7].innerText !== "" &&
        boxs[8].innerText !== ""
      )
      {
        
        displayWinner.innerText = ` Game Draw No one Wins  !! 🚀🚀🚀`;
      }
    }
    }
  }
}
