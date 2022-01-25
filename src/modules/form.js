import addItem from "./addItem.js";

const formData = (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const score = document.querySelector("#score").value;

  addItem(name, score);
};

export default formData;
