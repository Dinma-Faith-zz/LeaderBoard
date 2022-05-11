import './style.css';
import { postScores, getScore } from './api.js';

const renderPage = document.querySelector('.render-page');
const form = document.querySelector('#form');
const name = document.querySelector('#name');
const number = document.querySelector('#number');
const refreshBtn = document.querySelector('#refresh');

const createScore = async () => {
  const data = await getScore();
  const dataInfo = data.result;
  renderPage.innerHTML = '';
  dataInfo.forEach((record) => {
    renderPage.innerHTML += `<li>${record.user}: ${record.score}</li>`;
  });
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const myname = name.value;
  const myNumber = number.value;
  await postScores(myname, myNumber);
  form.reset();
  createScore();
});

refreshBtn.addEventListener('click', async () => {
  createScore();
});
 
window.addEventListener('load', () => {
  createScore();
});