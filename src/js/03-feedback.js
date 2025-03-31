import throttle from "lodash.throttle";

const feedbackForm = document.querySelector(".feedback-form");
const emailInput = document.querySelector("[name='email']");
const messageInput = document.querySelector("[name='message']");


const memory = localStorage.getItem("feedback-form-state");
const feedbackData = memory ? JSON.parse(memory) : { email: "", message: "" };

  emailInput.value = feedbackData.email || "";
  messageInput.value = feedbackData.message || "";


const formInput = throttle((event) => {
  feedbackData[event.target.name] = event.target.value.trim();
  localStorage.setItem("feedback-form-state", JSON.stringify(feedbackData));
}, 500);

const cleanData = (event) => {
  event.preventDefault();
  console.log(feedbackData);
  feedbackForm.reset();
  feedbackData.email = "";
  feedbackData.message = "";
  localStorage.removeItem("feedback-form-state");
};

feedbackForm.addEventListener("input", formInput);
feedbackForm.addEventListener("submit", cleanData);


