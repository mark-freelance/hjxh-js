const fs = require("fs");
const path = require("path");

const cookiePath = path.resolve(__dirname, "../cookie.txt");

const readCookie = () => {
  var ks = fs.readFileSync(cookiePath, "utf-8").split("\n");
  while (ks[ks.length - 1].length === 0) {
    ks.pop();
  }
  const cookie = ks[ks.length - 1];
  console.log({ cookie });
  return cookie;
};

module.exports = readCookie;
