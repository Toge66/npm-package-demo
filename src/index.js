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