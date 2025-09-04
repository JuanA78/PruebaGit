// tests/sum.test.js
const sum = require('../sum');

test('suma de 2 + 3 es 5', () => {
  expect(sum(2, 3)).toBe(5);
});
