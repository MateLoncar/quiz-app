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

const tagInput = document.querySelector('[data-js="tags"]');
const button = document.querySelector('[data-js="submit-button"]');
const main = document.querySelector('[data-js="main"]');
const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newCard = document.createElement("article");
  const newQuestion = document.createElement("h2");
  const newCardButton = document.createElement("button");
  const newAnswer = document.createElement("p");
  const newTag = document.createElement("p");

  newQuestion.textContent = questionInput.value;
  newCardButton.textContent = "Show Answer";
  newAnswer.textContent = answerInput.value;
  newTag.textContent = tagInput.value;

  newCardButton.classList.add("button_show_answer");

  newCard.append(newQuestion);
  newCard.append(newCardButton);
  newCard.append(newAnswer);
  newCard.append(newTag);
  newCard.classList.add("question-card");
  main.append(newCard);

  event.target.reset();
});
