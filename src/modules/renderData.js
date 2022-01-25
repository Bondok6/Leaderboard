import Data from "./data.js";

const render = () => {
  const itemsContainer = document.querySelector(".recent-score-container");

  if (JSON.parse(localStorage.getItem("scores"))) {
    Data.scores = JSON.parse(localStorage.getItem("scores"));
  }

  let itemHtml = "";

  Data.scores.forEach((item) => {
    itemHtml += `
    <li class="item">${item.name}: ${item.score}</li>
    `;
  });

  itemsContainer.insertAdjacentHTML("beforeend", itemHtml);
};

export default render;
