const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");


yesBtn.addEventListener("click", () => {
  question.innerHTML = "Good to hear, what happend that it made it so good?";
  gif.src ="https://media.giphy.com/media/FDbIUZLwbCUS4786z3/giphy.gif";
  noBtn.style.display = "none";
  const yremainingBtn = document.querySelector('.btn-group button:not(.no-btn)');
    // Center the remaining button by setting margin to auto
    remainingBtn.style.margin = 'auto';
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "If you want i can give you a hug baby.";
  gif.src ="https://media.giphy.com/media/vJ3PqQ1qTsEV2/giphy.gif";
  yesBtn.style.display = "none";
  const nremainingBtn = document.querySelector('.btn-group button:not(.yes-btn)');
    // Center the remaining button by setting margin to auto
    remainingBtn.style.margin = 'auto';
});
