const config = require('./config.json');
const kata = require('./kata.js');

describe('is valid output', () => {
  it('is not null', () => {
    const result = kata.run();
    expect(result).notEqual(null);
  });
})
