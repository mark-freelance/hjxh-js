const fs = require("fs");
var fp = "f6_hard_important.js";
s = fs
  .readFileSync(fp, "utf-8")
  .replace(/(?<=\W)\w\("(.*?)",\s*"(.*?)"\)/g, (s, a, b) => {
    c = require("./decode_f6_core")(a, b);
    console.log({ a, b, c });
    return `"${c}"`;
  });

fs.writeFileSync("o1_" + fp, s);
