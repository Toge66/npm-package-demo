import Math from '../src'

test('math:test', () => {
  const m = new Math()
  expect(m.value()).toBe(0)
})

test('math:test2', () => {
  const m = new Math()
  const result = m.add(50).minutes(10).value()
  expect(result).toBe(40)
})