import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

formEl.addEventListener('submit', onButtonClick);
formEl.addEventListener('input', throttle(onFormInput, 500));

const dataForm = {};

const dataFromStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
dataFrom = dataFromStorage;
console.log(dataFrom);
saveData();

function onButtonClick(evt) {
  evt.preventDefault();

  console.log(localStorage.getItem('feedback-form-state'));

  formEl.reset();
  localStorage.removeItem('feedback-form-state');
}

function onFormInput(e) {
  dataForm[e.target.name] = e.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

function saveData() {
  if (dataFromStorage) {
    formEl.elements.email.value = dataFromStorage.email ?? '';
    formEl.elements.message.value = dataFromStorage.message ?? '';
  }
}
