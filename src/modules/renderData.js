const render = (data) => {
  const itemsContainer = document.querySelector('.recent-score-container');

  let itemHtml = '';

  data.result.forEach((item) => {
    itemHtml += `
    <li class="item">${item.user}: ${item.score}</li>
    `;
  });
  itemsContainer.innerHTML = itemHtml;
};

export default render;
