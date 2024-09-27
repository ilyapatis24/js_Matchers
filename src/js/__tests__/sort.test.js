import sort from '../sort';

test('sorting', () => {
  const correctSortHeroes = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const incorrectSortHeroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const heroes = sort([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);

  expect(heroes[0]).toEqual(correctSortHeroes[0]);
  expect(heroes[1]).toEqual(correctSortHeroes[1]);
  expect(heroes[2]).toEqual(correctSortHeroes[2]);

  expect(heroes[0]).not.toEqual(incorrectSortHeroes[0]);
  expect(heroes[1]).not.toEqual(incorrectSortHeroes[1]);
  expect(heroes[2]).not.toEqual(incorrectSortHeroes[2]);
});