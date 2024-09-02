const boxs = document.querySelectorAll(".box");
const turnTune = new Audio("turn.wav");
const gameOverTune = new Audio("gameover.wav");
const img = document.querySelector(".img");
const resetbtn = document.querySelector(".reset");
 const line = document.querySelector(".line")
const displayWinner = document.querySelector(".winner-display");
let isgameOver = false;
console.log(boxs);
let turn = "X";

const winnerPattern = [
  [0, 1, 2 , 150,-100,270],
  [0, 4, 8,138,8,316],
  [1, 4, 7,140,15,0],
  [2, 4, 6,147,8,44],
  [2, 5, 8,245,15,0],
  [3, 4, 5,150,0,270],
  [6, 7, 8,150,106,270],
  [6, 3, 0,47,15,0],
];

//setvalue of button
for (let a = 0; a < boxs.length; a++) {
  boxs[a].addEventListener("click", () => {
    console.log(boxs[a]);
    if (turn == "X") {
      boxs[a].innerText = turn;
      turnTune.play();
      checkWinner();
     drawGame();
      turn = "O";
      boxs[a].removeEventListener("click", () => {});
    } else {
      boxs[a].innerText = turn;
      turnTune.play();
      checkWinner();
     drawGame();
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
    line.style.visibility="hidden";
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
         
        line.style.visibility="visible";
        line.style.transform=`translate(${winnerPattern[a][3]}px ,${winnerPattern[a][4]}px) rotate(${winnerPattern[a][5]}deg)`
        for (const box of boxs) {
          box.disabled = true;
      }
   isgameOver = true;
         }
    } 
    }
  }
function drawGame() {
  if (!isgameOver) {
    let isDraw = false;
      if (
        boxs[0].innerText !== "" &&
        boxs[1].innerText !== "" &&
        boxs[2].innerText !== "" &&
        boxs[3].innerText !== "" &&
        boxs[4].innerText !== "" &&
        boxs[5].innerText !== "" &&
        boxs[6].innerText !== "" &&
        boxs[7].innerText !== "" &&
        boxs[8].innerText !== ""
      ) {
        isDraw = true;
      }
    if (isDraw) {
      isgameOver = true;
      console.log("jai mata di bhailog");
      drawDisplay.innerText = ` Game Draw No one Wins  !! 🚀🚀🚀`;
    }
  }
}
