const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameId = 'DOHDqsWYkGmCuwVtm0LV';

export const postScores = async (name, score) => {
  await fetch(`${url}${gameId}/scores`, {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((result) => result.json());
};

export const getScore = async () => {
  const data = await fetch(`${url}${gameId}/scores`);
  const inputData = await data.json();
  return inputData;
};