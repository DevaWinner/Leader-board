import './styles/style.css';


const leaderboardData = [
  { 
    name: 'Player 1', 
    score: 100 
  },
  { 
    name: 'Player 2', 
    score: 200 
  },
  { 
    name: 'Player 3', 
    score: 150 
  },
];

const leaderboard = document.getElementById('leaderboard');

const renderLeaderboard = () => {
  leaderboard.innerHTML = '';
  leaderboardData.forEach((player) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${player.name}:</span>
      <span>${player.score}</span>
  `;
    leaderboard.appendChild(li);
  });
};

renderLeaderboard();