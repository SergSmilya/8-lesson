// const feedbackForm = document.querySelector('.feedback-form');
// const input = document.querySelector('input');
// const textarea = document.querySelector('textarea');

// const KEY_STORAGE = 'feedback-form-state';

// const formData = {};

// writeValueInputStartPage();

// feedbackForm.addEventListener('input', onWriteValueLocalStorage);
// feedbackForm.addEventListener('submit', onSubmitForm);

// function onWriteValueLocalStorage(e) {
//   writeFormData(e);

//   const formDataString = JSON.stringify(writeFormData(e));
//   localStorage.setItem(KEY_STORAGE, formDataString);
// }

// function onSubmitForm(e) {
//   e.preventDefault();

//   feedbackForm.reset();
//   console.log(writeFormData(e));

//   localStorage.removeItem(KEY_STORAGE);
// }

// function writeFormData(e) {
//   formData[e.target.name] = e.target.value;

//   return formData;
// }

// function writeValueInputStartPage() {
//   if (localStorage.getItem(KEY_STORAGE)) {
//     const { email, message } = JSON.parse(localStorage.getItem(KEY_STORAGE));

//     input.value = email ?? '';
//     textarea.value = message ?? '';

//   *  formData.email = email ?? '';
//   *  formData.message = message ?? '';
//   }
// }
