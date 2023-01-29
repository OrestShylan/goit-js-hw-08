import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formObject = {
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
  form: document.querySelector('.feedback-form'),
};

const params = {};

formObject.form.addEventListener('input', throttle(onFormInput, 500));
formObject.form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  const key = event.target.name;
  params[key] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(params));
}

function onFormSubmit(event) {
  event.preventDefault();

  console.log(params);

  event.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}

function getStorageData() {
  const data = localStorage.getItem(STORAGE_KEY);
  const parseData = JSON.parse(data);

  if (parseData) {
    formObject.email = parseData.email;
    formObject.message.value = parseData.message;
  }
}

getStorageData();
