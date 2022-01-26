import { getData } from './modules/data.js';
import formData from './modules/form.js';
import './style.css';

document.querySelector('#form').addEventListener('submit', formData);

document.querySelector('#refresh-btn').addEventListener('click', getData);
