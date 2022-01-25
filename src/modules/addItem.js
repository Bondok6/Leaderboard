import renderItem from './renderItem.js';
import Data from './data.js';

const addItem = (name, score) => {
  const newItem = new Data(name, score);
  Data.scores.push(newItem);
  Data.setStorage();
  renderItem(name, score);
};

export default addItem;
