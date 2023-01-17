import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

formEl.addEventListener('submit', onButtonClick);
formEl.addEventListener('input', throttle(onFormInput, 500));

const dataForm = {};
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
  const dataFromStorage = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (dataFromStorage) {
    inputEl.value = dataFromStorage.email ?? '';
    textareaEl.value = dataFromStorage.message ?? '';

    dataForm.email = dataFromStorage.email ?? '';
    dataForm.message = dataFromStorage.message ?? '';
  }
}
