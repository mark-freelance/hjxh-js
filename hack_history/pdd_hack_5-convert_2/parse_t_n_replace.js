const fs = require("fs");
const funcConvert = require("./parse_t_n");
const prefix = 'out_'
const filename = process.argv[2]
if(!filename) {
    throw new Error('not existed')
}
var s = fs.readFileSync(filename, 'utf-8')


const re = new RegExp(/\("(.*?)",\s*"(.*?)"\)/g)
console.log({re})
s = s.replace(re, (_, s1, s2) => {
    const res = '"' + funcConvert(s1, s2) + '"'
    console.log({s1, s2, res})
    return res
})

fs.writeFileSync(prefix + filename, s)


module.exports = funcConvert