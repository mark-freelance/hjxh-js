var { fuckingD, fucking } = require("./fucking.js");

var e = 176;
for (; --e; ) fuckingD.push(fuckingD.shift());

const fs = require("fs");

var s = fs.readFileSync("./main.js", "utf-8");

s = s.replace(/(\W)fucking\("(.*?)",\s*"(.*?)"\)/g, (args, m1, m2, m3) => {
  return m1 + fucking(m2, m3);
});

console.log("\n=====\n");

s = s.replace(/(\W)fucking1\("(.*?)",\s*"(.*?)"\)/g, (args, m1, m2, m3) => {
  return `${m1}"${fucking(m2, m3)}"`;
});

// console.log({s, s2})

fs.writeFileSync("main_v2.js", s, "utf-8");
