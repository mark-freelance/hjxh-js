function s(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

var a = s(r("fbeZ"))

function d(e) {
  var t = d.defaults,
    r = t.serverTime,
    n = t.localTime,
    o = t.promise,
    i = t.anti;
  return r && n && i
    ? (i.updateServerTime(+new Date().getTime() + r - n),
      (t.promise = Promise.resolve(i)))
    : o ||
        (e
          ? (t.promise = e().then(function (e) {
              l.serverTime = e.server_time;
              var r = new a.default(l);
              return (
                Object.assign(t, {
                  serverTime: e.server_time,
                  localTime: +new Date().getTime(),
                  anti: r,
                  promise: null,
                }),
                r
              );
            }))
          : Promise.reject(
              new Error("Invalid Option: risk anti has to input a serverTime.")
            ));
}

var l = {
  serverTime: new Date().getTime(),
  touchEventData: !0,
  clickEventData: !0,
  focusblurEventData: !0,
  changeEventData: !0,
  locationInfo: !0,
  referrer: !0,
  browserSize: !0,
  browserInfo: !0,
  token: !0,
  fingerprint: !0,
};

d.defaults = {
  serverTime: l.serverTime,
  localTime: 0,
  promise: null,
  anti: null,
};

console.log({ d });
