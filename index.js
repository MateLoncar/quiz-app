const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');
const showAnswer = document.querySelector('[data-js="show-answer"]');
const answerElement = document.querySelector('[data-js="answer-element"]');

bookmarkIcon.addEventListener("click", () => {
  if (bookmarkIcon.classList.contains("fa-solid")) {
    bookmarkIcon.classList.replace("fa-solid", "fa-regular");
  } else {
    bookmarkIcon.classList.replace("fa-regular", "fa-solid");
  }
});

showAnswer.addEventListener("click", () => {
  answerElement.classList.toggle("hide-answer");
  if (answerElement.classList.contains("hide-answer")) {
    showAnswer.textContent = "Show Answer";
  } else {
    showAnswer.textContent = "Hide Answer";
  }
});
