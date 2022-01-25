const renderItem = (name, score) => {
  const itemHtml = `
    <li class="item">${name}: ${score}</li>
    `;

  const itemsContainer = document.querySelector('.recent-score-container');
  itemsContainer.insertAdjacentHTML('beforeend', itemHtml);
};

export default renderItem;
