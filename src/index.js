import formData from './modules/form.js';
import render from './modules/renderData.js';

import './style.css';

document.querySelector('#form').addEventListener('submit', formData);
// prettier-ignore
document.querySelector('#refresh-btn').addEventListener('click', () => window.location.reload());

render();
