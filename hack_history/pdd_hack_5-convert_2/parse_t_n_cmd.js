const funcConvert = require("./parse_t_n");
console.log({args: process.argv})
const [a, b] = process.argv.slice(2, 4)

console.log({a, b, res: funcConvert(a, b)})