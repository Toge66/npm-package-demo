import 'colors'

export function printMsg () {
  console.log('This message is from the npm-package-demo11 module'.red)
}

export function printPath () {
  let path = __dirname
  console.log(`current path is：${path}`.blue)
}

export function fnAdd (a, b) {
  return a + b
}

export default class MathFn extends Object{

  constructor (value = 0) {
    super()
    this.__value = value
  }
  add = (r) => {
    this.__value += r
    return this
  }

  minutes = (r) => {
    this.__value -= r
    return this
  }

  value = () => {
    return this.__value
  }
}
