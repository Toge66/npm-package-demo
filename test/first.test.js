const demo = require('../src/index')

test('simply:add:test', () => {
  const result = demo.fnAdd(21,6)
  expect(result).toEqual(27)
})