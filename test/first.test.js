
import { fnAdd, printMsg, printPath } from '../src/index'

test('simply:add:test', () => {
  const result = fnAdd(21,6)
  expect(result).toEqual(27)

  printPath()

  printMsg()

})