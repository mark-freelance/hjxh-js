module.exports = function (e, t, n) {
  "use strict";
  var r = n(7),
    o = n(1),
    i = n(11),
    a = n(4),
    s = n(12),
    u = Object.prototype.toString,
    c = 0,
    d = -1,
    f = 0,
    l = 8;

  function p(e) {
    if (!(this instanceof p)) return new p(e);
    this.options = o.assign(
      {
        level: d,
        method: l,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: f,
        to: "",
      },
      e || {}
    );
    var t = this.options;
    t.raw && t.windowBits > 0
      ? (t.windowBits = -t.windowBits)
      : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16),
      (this.err = 0),
      (this.msg = ""),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new s()),
      (this.strm.avail_out = 0);
    var n = r.deflateInit2(
      this.strm,
      t.level,
      t.method,
      t.windowBits,
      t.memLevel,
      t.strategy
    );
    if (n !== c) throw new Error(a[n]);
    if ((t.header && r.deflateSetHeader(this.strm, t.header), t.dictionary)) {
      var h;
      if (
        ((h =
          "string" == typeof t.dictionary
            ? i.string2buf(t.dictionary)
            : "[object ArrayBuffer]" === u.call(t.dictionary)
            ? new Uint8Array(t.dictionary)
            : t.dictionary),
        (n = r.deflateSetDictionary(this.strm, h)) !== c)
      )
        throw new Error(a[n]);
      this._dict_set = !0;
    }
  }

  function h(e, t) {
    var n = new p(t);
    if ((n.push(e, !0), n.err)) throw n.msg || a[n.err];
    return n.result;
  }

  (p.prototype.push = function (e, t) {
    var n,
      a,
      s = this.strm,
      d = this.options.chunkSize;
    if (this.ended) return !1;
    (a = t === ~~t ? t : !0 === t ? 4 : 0),
      "string" == typeof e
        ? (s.input = i.string2buf(e))
        : "[object ArrayBuffer]" === u.call(e)
        ? (s.input = new Uint8Array(e))
        : (s.input = e),
      (s.next_in = 0),
      (s.avail_in = s.input.length);
    do {
      if (
        (0 === s.avail_out &&
          ((s.output = new o.Buf8(d)), (s.next_out = 0), (s.avail_out = d)),
        1 !== (n = r.deflate(s, a)) && n !== c)
      )
        return this.onEnd(n), (this.ended = !0), !1;
      (0 !== s.avail_out && (0 !== s.avail_in || (4 !== a && 2 !== a))) ||
        ("string" === this.options.to
          ? this.onData(i.buf2binstring(o.shrinkBuf(s.output, s.next_out)))
          : this.onData(o.shrinkBuf(s.output, s.next_out)));
    } while ((s.avail_in > 0 || 0 === s.avail_out) && 1 !== n);
    return 4 === a
      ? ((n = r.deflateEnd(this.strm)),
        this.onEnd(n),
        (this.ended = !0),
        n === c)
      : 2 !== a || (this.onEnd(c), (s.avail_out = 0), !0);
  }),
    (p.prototype.onData = function (e) {
      this.chunks.push(e);
    }),
    (p.prototype.onEnd = function (e) {
      e === c &&
        ("string" === this.options.to
          ? (this.result = this.chunks.join(""))
          : (this.result = o.flattenChunks(this.chunks))),
        (this.chunks = []),
        (this.err = e),
        (this.msg = this.strm.msg);
    }),
    (t.Deflate = p),
    (t.deflate = h),
    (t.deflateRaw = function (e, t) {
      return ((t = t || {}).raw = !0), h(e, t);
    }),
    (t.gzip = function (e, t) {
      return ((t = t || {}).gzip = !0), h(e, t);
    });
};
