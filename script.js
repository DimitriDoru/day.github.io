const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");


yesBtn.addEventListener("click", () => {
  question.innerHTML = "Good to hear, what happend that it made it so good?";
  gif.src ="https://giphy.com/embed/naIhzcoCSBZm3FARM4";
  noBtn.style.display = "none";
  const yremainingBtn = document.querySelector('.btn-group button:not(.no-btn)');
    // Center the remaining button by setting margin to auto
    yremainingBtn.style.margin = 'auto';
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "If you want i can give you a hug baby.";
  gif.src ="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmJlYXhvdmQ2ZDFwaTRzbW02eGsyZWJ0dGdybWZuMmtuMDZka3gzeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uCJdwkgk7EGsx5n6d4/giphy.gif";
  yesBtn.style.display = "none";
  const nremainingBtn = document.querySelector('.btn-group button:not(.yes-btn)');
    // Center the remaining button by setting margin to auto
    nremainingBtn.style.margin = 'auto';
});
