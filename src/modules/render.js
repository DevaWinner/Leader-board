import { getData } from './game.js';

const render = async () => {
  const data = await getData();
  const recentScore = document.getElementById('leaderboard');
  recentScore.innerHTML = '';
  const sortedData = data.sort((a, b) => a.score - b.score);
  sortedData.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <span> ${item.user} </span>
    <span> ${item.score} </span>
    `;
    recentScore.appendChild(listItem);
  });
};

const renderLeaderboardOnLoad = async () => {
  await render();
};

export { render, renderLeaderboardOnLoad };