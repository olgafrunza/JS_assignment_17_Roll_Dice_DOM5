const totalScoreP1Elm = document.getElementById("score--0");
const totalScoreP2Elm = document.getElementById("score--1");
const diceElm = document.querySelector(".dice");
const btnNewGame = document.querySelector(".btn--new");
const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const currentScoreP1Elm = document.getElementById("current--0");
const currentScoreP2Elm = document.getElementById("current--1");
const sectionP1 = document.querySelector(".player--0");
const sectionP2 = document.querySelector(".player--1");

totalScoreP1Elm.textContent = 0;
totalScoreP2Elm.textContent = 0;

diceElm.classList.add("hidden");

let currentScoreP1 = 0;
let currentScoreP2 = 0;
let activePlayer = 1;

let totalScoreP1 = 0;
let totalScoreP2 = 0;

function handleRollDice() {
  const diceNumber = Math.floor(Math.random() * 6) + 1;
  console.log(diceNumber);
  diceElm.classList.remove("hidden");
  diceElm.src = `./images/dice-${diceNumber}.png`;

  if (diceNumber === 1) {
    sectionP1.classList.toggle("player--active");
    sectionP2.classList.toggle("player--active");
    if (activePlayer === 1) {
      currentScoreP1Elm.textContent = 0;
      currentScoreP1 = 0;
      activePlayer = 2;
    } else {
      currentScoreP2Elm.textContent = 0;
      currentScoreP2 = 0;
      activePlayer = 1;
    }
  } else {
    if (activePlayer === 1) {
      currentScoreP1 += diceNumber;
      currentScoreP1Elm.textContent = currentScoreP1;
    } else {
      currentScoreP2 += diceNumber;
      currentScoreP2Elm.textContent = currentScoreP2;
    }
  }
}

function handleHold() {
  sectionP1.classList.toggle("player--active");
  sectionP2.classList.toggle("player--active");
  if (activePlayer === 1) {
    totalScoreP1 += currentScoreP1;
    totalScoreP1Elm.textContent = totalScoreP1;
    if (totalScoreP1 >= 10) {
      sectionP1.classList.add("player--winner");
      btnHold.removeEventListener("click", handleHold);
      btnRollDice.removeEventListener("click", handleRollDice);
    } else {
      currentScoreP1 = 0;
      currentScoreP1Elm.textContent = 0;
      totalScoreP1Elm.textContent = totalScoreP1;
      activePlayer = 2;
    }
  } else {
    totalScoreP2 += currentScoreP2;
    totalScoreP2Elm.textContent = totalScoreP2;
    if (totalScoreP2 >= 10) {
      sectionP2.classList.add("player--winner");
      btnHold.removeEventListener("click", handleHold);
      btnRollDice.removeEventListener("click", handleRollDice);
    } else {
      currentScoreP2 = 0;
      currentScoreP2Elm.textContent = 0;
      totalScoreP2Elm.textContent = totalScoreP2;
      activePlayer = 1;
    }
  }
}

function handleNewGame() {
  currentScoreP1 = 0;
  currentScoreP2 = 0;
  activePlayer = 1;
  totalScoreP1 = 0;
  totalScoreP2 = 0;

  totalScoreP1Elm.textContent = 0;
  totalScoreP2Elm.textContent = 0;
  currentScoreP1Elm.textContent = 0;
  currentScoreP2Elm.textContent = 0;

  sectionP1.classList.remove("player--winner");
  sectionP2.classList.remove("player--winner");
  sectionP1.classList.add("player--active");
  sectionP2.classList.remove("player--active");

  btnRollDice.addEventListener("click", handleRollDice);
  btnHold.addEventListener("click", handleHold);
}

btnRollDice.addEventListener("click", handleRollDice);
btnHold.addEventListener("click", handleHold);
btnNewGame.addEventListener("click", handleNewGame);

//////////////////////////////////////////////////

// let btnRoll = document.querySelector(".btn--roll");
// let btnReset = document.querySelector(".btn--new");
// let btnHold = document.querySelector(".btn--hold");

// let player1 = document.getElementById("player--0");
// let player2 = document.getElementById("player--1");
// let totalScoreP1 = document.getElementById("score--0");
// totalScoreP1.textContent = 0;
// let totalScoreP2 = document.getElementById("score--1");
// totalScoreP2.textContent = 0;
// let currentScoreP1 = document.getElementById("current--0");
// let currentScoreP2 = document.getElementById("current--1");

// let diceImg = document.querySelector(".dice");
// diceImg.classList.add("hidden");

// letscores = [0, 0];
// let score = 0;
// let activePlayer = 0;

// btnRoll.addEventListener("click", function () {
//   let diceNum = Math.trunc(Math.random() * 6) + 1;
//   diceImg.classList.remove("hidden");
//   diceImg.src = `./images/dice-${diceNum}.png`;
//   if (diceNum !== 1) {
//     score += diceNum;
//     document.getElementById(`current--${activePlayer}`).textContent = score;
//   } else {
//     document.getElementById(`current--${activePlayer}`).textContent = 0;
//     score = 0;
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     player1.classList.toggle("player--active");
//     player2.classList.toggle("player--active");
//   }
// });
