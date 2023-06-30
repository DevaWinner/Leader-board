import './styles/style.css';
import submitForm from './modules/submit.js';
import {render, renderLeaderboardOnLoad} from './modules/render.js';

const refreshBtn = document.getElementById('refresh-btn');
const submitBtn = document.getElementById('submit-btn');

refreshBtn.addEventListener('click', render);
window.addEventListener('load', renderLeaderboardOnLoad);

submitBtn.addEventListener('click', submitForm);
