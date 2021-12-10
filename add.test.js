const add = require('./add-documented');

test('adds 0 + 0 to equal 0', () => {
    expect(add(0, 0)).toBe(0);
});

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});