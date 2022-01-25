class Data {
  static scores = [];

  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  static setStorage() {
    localStorage.setItem("scores", JSON.stringify(this.scores));
  }
}

export default Data;
