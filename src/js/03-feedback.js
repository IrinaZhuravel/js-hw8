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

/*
 В HTML есть разметка формы. Напиши скрипт который будет сохранять значения полей в локальное хранилище когда пользователь что-то печатает.

<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>

Выполняй это задание в файлах 03-feedback.html и 03-feedback.js. Разбей его на несколько подзадач:

Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.
*/
