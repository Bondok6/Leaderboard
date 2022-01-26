import render from "./renderData";

const URL =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fTRZwg4ycDdSEmSCjp4P/scores";

const postData = async (data) => {
  await fetch(URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

const getData = async () => {
  const res = await fetch(URL);
  const data = await res.json();

  render(data);
};

export { postData, getData };
