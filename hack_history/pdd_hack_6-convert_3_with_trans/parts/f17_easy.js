module.exports = function (e, t, n) {
  "use strict";
  e.exports = function (e, t, n) {
    if ("string" != typeof e)
      throw new Error("The string parameter must be a string.");
    if (e.length < 1)
      throw new Error("The string parameter must be 1 character or longer.");
    if ("number" != typeof t)
      throw new Error("The length parameter must be a number.");
    if ("string" != typeof n && n)
      throw new Error("The character parameter must be a string.");
    var r = -1;
    for (t -= e.length, n || 0 === n || (n = " "); ++r < t; ) e += n;
    return e;
  };
};
