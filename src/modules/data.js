import render from "./renderData";

const URL =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fTRZwg4ycDdSEmSCjp4P/scores";

const postData = (data) => {
  fetch(URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

const getData = () => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      render(data);
    });
};

export { postData, getData };
