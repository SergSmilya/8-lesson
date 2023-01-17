import throttle from 'lodash.throttle';
const buttonEl = document.querySelector('.feedback-form');
const formEl = document.querySelector('.feedback-form');

buttonEl.addEventListener('submit', onButtonClick);
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
    formEl.elements.email.value = dataFromStorage.email ?? '';
    formEl.elements.message.value = dataFromStorage.message ?? '';
  }
}
