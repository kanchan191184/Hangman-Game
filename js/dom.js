export const lettersDiv = document.querySelector("#lettersId");
export const outputDiv = document.querySelector("#outputId");
export const incorrectGuessesDiv = document.querySelector(
  "#incorrectGuessesId"
);
export const messageDiv = document.querySelector("#messageId");
export const resetButton = document.querySelector("#resetButton");
export const hangmanImage = document.querySelector("#hangmanImage");
export const buttons = lettersDiv.querySelectorAll("button");

export function disableAllButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

export const enableAllButtons = () => {
  buttons.forEach((button) => {
    button.disabled = false;
  });
};

// Number of dashes depending on words length
export const initializeGuessedWord = (length) => {
  return Array(length).fill("_");
};

export const updateOutputDiv = (outputDiv, guessedWord) => {
  outputDiv.textContent = guessedWord.join(" ");
};
