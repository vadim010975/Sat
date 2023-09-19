class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Дублирование объекта');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((el) => this.members.add(el));
  }

  toArray() {
    return [...this.members];
  }
}

module.exports = {
  Team,
};
