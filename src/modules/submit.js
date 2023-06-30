import { createData } from './game.js';

const submitForm = async e => {
  e.preventDefault();
  const nameInput = document.getElementById('name-input');
  const scoreInput = document.getElementById('score-input');
  const data = {
    user: nameInput.value,
    score: Number(scoreInput.value),
  };
  await createData(data);
  nameInput.value = '';
  scoreInput.value = '';
};

export default submitForm;