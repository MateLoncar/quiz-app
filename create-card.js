const questionInput = document.querySelector('[data-js="question"]');
const remainingCharactersQuestion = document.querySelector(
  '[data-js="remaining-characters-question"]'
);
const answerInput = document.querySelector('[data-js="answer"]');
const remainingCharactersAnswer = document.querySelector(
  '[data-js="remaining-characters-answer"]'
);

const tagsInput = document.querySelector('[data-js="tags"]');
const remainingCharactersTags = document.querySelector(
  '[data-js="remaining-characters-tags"]'
);
const submitButton = document.querySelector('[data-js="submit-button"]');

questionInput.addEventListener("input", (event) => {
  inputCounter(remainingCharactersQuestion, event, 150);
});

answerInput.addEventListener("input", (event) => {
  inputCounter(remainingCharactersAnswer, event, 150);
});

tagsInput.addEventListener("input", (event) => {
  inputCounter(remainingCharactersTags, event, 40);
});

function inputCounter(remainingCharacters, event, limit) {
  let inputValue = event.target.value;
  remainingCharacters.removeAttribute("hidden");
  let remainingInput = limit - inputValue.length;
  remainingCharacters.innerHTML = `${remainingInput} characters remaining`;
  if (remainingInput === 0) {
    remainingCharacters.style.color = "red";
  } else remainingCharacters.style.color = "black";
}
