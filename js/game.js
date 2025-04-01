import { disableAllButtons } from "./dom.js";

export const checkWinOrLoseConditions = (
  guessedWord,
  incorrectGuesses,
  wordToGuess,
  messageDiv
) => {
  if (!guessedWord.includes("_")) {
    messageDiv.textContent = "Congratulations! You've guessed the word!";
    messageDiv.style.color = "green";
    disableAllButtons();
  } else if (incorrectGuesses.length >= 10) {
    messageDiv.textContent = "Game over! The word was: " + wordToGuess;
    messageDiv.style.color = "red";
    disableAllButtons();
  }
};

export const getRandomWord = (words) => {
  return words[Math.floor(Math.random() * words.length)];
};

export const updateGuessedWord = (char, wordToGuess, guessedWord) => {
  for (let i = 0; i < wordToGuess.length; i++) {
    if (wordToGuess[i] === char) {
      guessedWord[i] = char;
    }
  }
  return guessedWord;
};

export const trackIncorrectGuesses = (
  char,
  incorrectGuesses,
  incorrectGuessesDiv
) => {
  if (!incorrectGuesses.includes(char)) {
    incorrectGuesses.push(char);
    if (incorrectGuesses.length === 1) {
      incorrectGuessesDiv.textContent = "Incorrect guesses: " + char;
    } else {
      incorrectGuessesDiv.textContent =
        "Incorrect guesses: " + incorrectGuesses.join(", ");
    }
    hangmanImage.src = `assets/h-${incorrectGuesses.length}.jpg`;
  }
};
