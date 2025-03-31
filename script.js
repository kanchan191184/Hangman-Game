import {
  getRandomWord,
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
  updateGuessedWord,
  trackIncorrectGuesses,
} from "./js/game.js";

document.addEventListener("DOMContentLoaded", (event) => {
  let words = ["JAVASCRIPT", "PYTHON", "HTML", "CSS", "NODEJS"];

  let wordToGuess, guessedWord, incorrectGuesses;

  const initializeGame = () => {
    wordToGuess = getRandomWord(words);
    guessedWord = initializeGuessedWord(wordToGuess.length);
    incorrectGuesses = [];
    updateOutputDiv(outputDiv, guessedWord);
    incorrectGuessesDiv.textContent = " ";
    messageDiv.textContent = "";
    hangmanImage.src = "assets/hangman0.jpg";
    enableAllButtons();
  };

  const handleButtonClick = (e, button) => {
    e.preventDefault();
    const char = button.textContent;
    if (button.disabled) return;
    button.disabled = true;

    if (wordToGuess.includes(char)) {
      updateGuessedWord(char, wordToGuess, guessedWord);
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
