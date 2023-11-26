const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const jpg = document.querySelector(".jpg");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Good to hear, what happend that it made it so good?";
  gif.src ="https://media.giphy.com/media/FDbIUZLwbCUS4786z3/giphy.gif";
  noBtn.style.display = "none";
  const remainingBtn = document.querySelector('.btn-group button:not(.no-btn)');
    // Center the remaining button by setting margin to auto
    remainingBtn.style.margin = 'auto';
});

yesBtn.addEventListener("click", () => {
  question.innerHTML = "If you want i can give you a hug baby.";
  jpg.src ="https://image.emojipng.com/467/12319467.jpg";
  yesBtn.style.display = "none";
  const remainingBtn = document.querySelector('.btn-group button:not(.yes-btn)');
    // Center the remaining button by setting margin to auto
    remainingBtn.style.margin = 'auto';
});
