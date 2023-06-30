const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const id = 'cQWcskK5XUvGhFKDV6FI';

const game = async (name) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(`{name: ${name}}`),
  });
  const response = await res.json();
  return response;
};

