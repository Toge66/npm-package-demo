const color = require('colors')
exports.printMsg = function() {
	console.log("This message is from the npm-package-demo11 module".red)
}

exports function printPath() {
	let path = __dirname
	console.log(`current path is：${path}`.blue)
}
