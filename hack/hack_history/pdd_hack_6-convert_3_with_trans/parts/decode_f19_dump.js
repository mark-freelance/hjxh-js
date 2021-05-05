const fs = require("fs");
var fp = "f19_hard.js";
s = fs
  .readFileSync(fp, "utf-8")
  .replace(/(?<=\W)\w\("(.*?)",\s*"(.*?)"\)/g, (s, a, b) => {
    c = require("./decode_f19_core")(a, b);
    console.log({ a, b, c });
    return `"${c}"`;
  });

fs.writeFileSync("o1_" + fp, s);
