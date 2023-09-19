const { Team } = require('../Team');

class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const magIvan = new Character('Ivan', 'mag');
const archerSergey = new Character('Sergey', 'archer');
const swordsmanAndrey = new Character('Andrey', 'swordsman');
const palladinOleg = new Character('Oleg', 'palladin');
const myTeam = new Team();

test('test class Team method add', () => {
  myTeam.add(magIvan);
  myTeam.add(archerSergey);
  const result = myTeam.toArray();
  const expected = [
    { name: 'Ivan', type: 'mag' },
    { name: 'Sergey', type: 'archer' },
  ];
  expect(result).toEqual(expected);
});

test('test class Team method addAll', () => {
  myTeam.addAll(swordsmanAndrey, palladinOleg);
  const result = myTeam.toArray();
  const expected = [
    { name: 'Ivan', type: 'mag' },
    { name: 'Sergey', type: 'archer' },
    { name: 'Andrey', type: 'swordsman' },
    { name: 'Oleg', type: 'palladin' },
  ];
  expect(result).toEqual(expected);
});

test('test class Team method add again', () => {
  function checkFunction() {
    myTeam.add(magIvan);
  }
  expect(checkFunction).toThrow(new Error('Дублирование объекта'));
});
