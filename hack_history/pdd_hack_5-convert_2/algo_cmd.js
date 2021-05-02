var argv = require('minimist')(process.argv.slice(2));
console.log(argv);

const funcConvert = require("./algo_core");
console.log({args: process.argv})
const [a, b] = process.argv.slice(2, 4)

console.log({a, b, res: funcConvert(a, b)})