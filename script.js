import {
  lettersDiv,
  outputDiv,
  incorrectGuessesDiv,
  messageDiv,
  resetButton,
  hangmanImage,
  enableAllButtons,
  initializeGuessedWord,
  updateOutputDiv,
  buttons,
} from "./js/dom.js";
import {
  checkWinOrLoseConditions,
  getRandomWord,
  updateGuessedWord,
  trackIncorrectGuesses,
} from "./js/game.js";

import exampleWords from "./assets/example-words.json"  with { type: "json" };

document.addEventListener("DOMContentLoaded", (event) => {
  //let words = ["JAVASCRIPT", "PYTHON", "HTML", "CSS", "NODEJS"];
  let words = Array.isArray(exampleWords) 
  ? exampleWords.map((word) => word.toUpperCase()) 
  : [];

  console.log(words);
  let wordToGuess, guessedWord, incorrectGuesses;

  const initializeGame = () => {
    wordToGuess = getRandomWord(words);
    guessedWord = initializeGuessedWord(wordToGuess.length);
    incorrectGuesses = [];
    updateOutputDiv(outputDiv, guessedWord);
    incorrectGuessesDiv.textContent = " ";
    messageDiv.textContent = "";
    hangmanImage.src = "assets/h-0.jpg";
    enableAllButtons();
  };

  const handleButtonClick = (e, button) => {
    e.preventDefault();
    const char = button.textContent;
    if (button.disabled) return;
    button.disabled = true;

    if (wordToGuess.includes(char)) {
      guessedWord = updateGuessedWord(char, wordToGuess, guessedWord);
      updateOutputDiv(outputDiv, guessedWord);
    } else {
      trackIncorrectGuesses(char, incorrectGuesses, incorrectGuessesDiv);
    }

    checkWinOrLoseConditions(
      guessedWord,
      incorrectGuesses,
      wordToGuess,
      messageDiv
    );
  };

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      handleButtonClick(e, button);
    });
  });

  resetButton.addEventListener("click", initializeGame);

  // Initialize the game for the first time
  initializeGame();
});
