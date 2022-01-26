import { postData } from './data.js';

const formData = (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;

  const obj = {
    user: name,
    score,
  };

  postData(obj);

  // Clear Inputs
  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
  document.querySelector('#name').focus();
};

export default formData;
