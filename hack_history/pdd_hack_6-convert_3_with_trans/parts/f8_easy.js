module.exports = function (e, t, n) {
  "use strict";
  var r,
    o = n(1),
    i = n(8),
    a = n(9),
    s = n(10),
    u = n(4),
    c = 0,
    d = 1,
    f = 3,
    l = 4,
    p = 5,
    h = 0,
    v = 1,
    m = -2,
    g = -3,
    y = -5,
    x = -1,
    b = 1,
    W = 2,
    _ = 3,
    w = 4,
    k = 0,
    S = 2,
    O = 8,
    C = 9,
    R = 15,
    E = 8,
    P = 286,
    N = 30,
    j = 19,
    D = 2 * P + 1,
    T = 15,
    L = 3,
    q = 258,
    M = q + L + 1,
    I = 32,
    A = 42,
    G = 69,
    B = 73,
    Q = 91,
    F = 103,
    V = 113,
    H = 666,
    K = 1,
    U = 2,
    J = 3,
    z = 4,
    $ = 3;

  function X(e, t) {
    return (e.msg = u[t]), t;
  }

  function Z(e) {
    return (e << 1) - (e > 4 ? 9 : 0);
  }

  function Y(e) {
    for (var t = e.length; --t >= 0; ) e[t] = 0;
  }

  function ee(e) {
    var t = e.state,
      n = t.pending;
    n > e.avail_out && (n = e.avail_out),
      0 !== n &&
        (o.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out),
        (e.next_out += n),
        (t.pending_out += n),
        (e.total_out += n),
        (e.avail_out -= n),
        (t.pending -= n),
        0 === t.pending && (t.pending_out = 0));
  }

  function te(e, t) {
    i._tr_flush_block(
      e,
      e.block_start >= 0 ? e.block_start : -1,
      e.strstart - e.block_start,
      t
    ),
      (e.block_start = e.strstart),
      ee(e.strm);
  }

  function ne(e, t) {
    e.pending_buf[e.pending++] = t;
  }

  function re(e, t) {
    (e.pending_buf[e.pending++] = (t >>> 8) & 255),
      (e.pending_buf[e.pending++] = 255 & t);
  }

  function oe(e, t) {
    var n,
      r,
      o = e.max_chain_length,
      i = e.strstart,
      a = e.prev_length,
      s = e.nice_match,
      u = e.strstart > e.w_size - M ? e.strstart - (e.w_size - M) : 0,
      c = e.window,
      d = e.w_mask,
      f = e.prev,
      l = e.strstart + q,
      p = c[i + a - 1],
      h = c[i + a];
    e.prev_length >= e.good_match && (o >>= 2),
      s > e.lookahead && (s = e.lookahead);
    do {
      if (
        c[(n = t) + a] === h &&
        c[n + a - 1] === p &&
        c[n] === c[i] &&
        c[++n] === c[i + 1]
      ) {
        (i += 2), n++;
        do {} while (
          c[++i] === c[++n] &&
          c[++i] === c[++n] &&
          c[++i] === c[++n] &&
          c[++i] === c[++n] &&
          c[++i] === c[++n] &&
          c[++i] === c[++n] &&
          c[++i] === c[++n] &&
          c[++i] === c[++n] &&
          i < l
        );
        if (((r = q - (l - i)), (i = l - q), r > a)) {
          if (((e.match_start = t), (a = r), r >= s)) break;
          (p = c[i + a - 1]), (h = c[i + a]);
        }
      }
    } while ((t = f[t & d]) > u && 0 != --o);
    return a <= e.lookahead ? a : e.lookahead;
  }

  function ie(e) {
    var t,
      n,
      r,
      i,
      u,
      c,
      d,
      f,
      l,
      p,
      h = e.w_size;
    do {
      if (
        ((i = e.window_size - e.lookahead - e.strstart),
        e.strstart >= h + (h - M))
      ) {
        o.arraySet(e.window, e.window, h, h, 0),
          (e.match_start -= h),
          (e.strstart -= h),
          (e.block_start -= h),
          (t = n = e.hash_size);
        do {
          (r = e.head[--t]), (e.head[t] = r >= h ? r - h : 0);
        } while (--n);
        t = n = h;
        do {
          (r = e.prev[--t]), (e.prev[t] = r >= h ? r - h : 0);
        } while (--n);
        i += h;
      }
      if (0 === e.strm.avail_in) break;
      if (
        ((c = e.strm),
        (d = e.window),
        (f = e.strstart + e.lookahead),
        (l = i),
        (p = void 0),
        (p = c.avail_in) > l && (p = l),
        (n =
          0 === p
            ? 0
            : ((c.avail_in -= p),
              o.arraySet(d, c.input, c.next_in, p, f),
              1 === c.state.wrap
                ? (c.adler = a(c.adler, d, p, f))
                : 2 === c.state.wrap && (c.adler = s(c.adler, d, p, f)),
              (c.next_in += p),
              (c.total_in += p),
              p)),
        (e.lookahead += n),
        e.lookahead + e.insert >= L)
      )
        for (
          u = e.strstart - e.insert,
            e.ins_h = e.window[u],
            e.ins_h =
              ((e.ins_h << e.hash_shift) ^ e.window[u + 1]) & e.hash_mask;
          e.insert &&
          ((e.ins_h =
            ((e.ins_h << e.hash_shift) ^ e.window[u + L - 1]) & e.hash_mask),
          (e.prev[u & e.w_mask] = e.head[e.ins_h]),
          (e.head[e.ins_h] = u),
          u++,
          e.insert--,
          !(e.lookahead + e.insert < L));

        );
    } while (e.lookahead < M && 0 !== e.strm.avail_in);
  }

  function ae(e, t) {
    for (var n, r; ; ) {
      if (e.lookahead < M) {
        if ((ie(e), e.lookahead < M && t === c)) return K;
        if (0 === e.lookahead) break;
      }
      if (
        ((n = 0),
        e.lookahead >= L &&
          ((e.ins_h =
            ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + L - 1]) &
            e.hash_mask),
          (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
          (e.head[e.ins_h] = e.strstart)),
        0 !== n &&
          e.strstart - n <= e.w_size - M &&
          (e.match_length = oe(e, n)),
        e.match_length >= L)
      )
        if (
          ((r = i._tr_tally(e, e.strstart - e.match_start, e.match_length - L)),
          (e.lookahead -= e.match_length),
          e.match_length <= e.max_lazy_match && e.lookahead >= L)
        ) {
          e.match_length--;
          do {
            e.strstart++,
              (e.ins_h =
                ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + L - 1]) &
                e.hash_mask),
              (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = e.strstart);
          } while (0 != --e.match_length);
          e.strstart++;
        } else
          (e.strstart += e.match_length),
            (e.match_length = 0),
            (e.ins_h = e.window[e.strstart]),
            (e.ins_h =
              ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 1]) &
              e.hash_mask);
      else
        (r = i._tr_tally(e, 0, e.window[e.strstart])),
          e.lookahead--,
          e.strstart++;
      if (r && (te(e, !1), 0 === e.strm.avail_out)) return K;
    }
    return (
      (e.insert = e.strstart < L - 1 ? e.strstart : L - 1),
      t === l
        ? (te(e, !0), 0 === e.strm.avail_out ? J : z)
        : e.last_lit && (te(e, !1), 0 === e.strm.avail_out)
        ? K
        : U
    );
  }

  function se(e, t) {
    for (var n, r, o; ; ) {
      if (e.lookahead < M) {
        if ((ie(e), e.lookahead < M && t === c)) return K;
        if (0 === e.lookahead) break;
      }
      if (
        ((n = 0),
        e.lookahead >= L &&
          ((e.ins_h =
            ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + L - 1]) &
            e.hash_mask),
          (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
          (e.head[e.ins_h] = e.strstart)),
        (e.prev_length = e.match_length),
        (e.prev_match = e.match_start),
        (e.match_length = L - 1),
        0 !== n &&
          e.prev_length < e.max_lazy_match &&
          e.strstart - n <= e.w_size - M &&
          ((e.match_length = oe(e, n)),
          e.match_length <= 5 &&
            (e.strategy === b ||
              (e.match_length === L && e.strstart - e.match_start > 4096)) &&
            (e.match_length = L - 1)),
        e.prev_length >= L && e.match_length <= e.prev_length)
      ) {
        (o = e.strstart + e.lookahead - L),
          (r = i._tr_tally(
            e,
            e.strstart - 1 - e.prev_match,
            e.prev_length - L
          )),
          (e.lookahead -= e.prev_length - 1),
          (e.prev_length -= 2);
        do {
          ++e.strstart <= o &&
            ((e.ins_h =
              ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + L - 1]) &
              e.hash_mask),
            (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
            (e.head[e.ins_h] = e.strstart));
        } while (0 != --e.prev_length);
        if (
          ((e.match_available = 0),
          (e.match_length = L - 1),
          e.strstart++,
          r && (te(e, !1), 0 === e.strm.avail_out))
        )
          return K;
      } else if (e.match_available) {
        if (
          ((r = i._tr_tally(e, 0, e.window[e.strstart - 1])) && te(e, !1),
          e.strstart++,
          e.lookahead--,
          0 === e.strm.avail_out)
        )
          return K;
      } else (e.match_available = 1), e.strstart++, e.lookahead--;
    }
    return (
      e.match_available &&
        ((r = i._tr_tally(e, 0, e.window[e.strstart - 1])),
        (e.match_available = 0)),
      (e.insert = e.strstart < L - 1 ? e.strstart : L - 1),
      t === l
        ? (te(e, !0), 0 === e.strm.avail_out ? J : z)
        : e.last_lit && (te(e, !1), 0 === e.strm.avail_out)
        ? K
        : U
    );
  }

  function ue(e, t, n, r, o) {
    (this.good_length = e),
      (this.max_lazy = t),
      (this.nice_length = n),
      (this.max_chain = r),
      (this.func = o);
  }

  function ce(e) {
    var t;
    return e && e.state
      ? ((e.total_in = e.total_out = 0),
        (e.data_type = S),
        ((t = e.state).pending = 0),
        (t.pending_out = 0),
        t.wrap < 0 && (t.wrap = -t.wrap),
        (t.status = t.wrap ? A : V),
        (e.adler = 2 === t.wrap ? 0 : 1),
        (t.last_flush = c),
        i._tr_init(t),
        h)
      : X(e, m);
  }

  function de(e) {
    var t,
      n = ce(e);
    return (
      n === h &&
        (((t = e.state).window_size = 2 * t.w_size),
        Y(t.head),
        (t.max_lazy_match = r[t.level].max_lazy),
        (t.good_match = r[t.level].good_length),
        (t.nice_match = r[t.level].nice_length),
        (t.max_chain_length = r[t.level].max_chain),
        (t.strstart = 0),
        (t.block_start = 0),
        (t.lookahead = 0),
        (t.insert = 0),
        (t.match_length = t.prev_length = L - 1),
        (t.match_available = 0),
        (t.ins_h = 0)),
      n
    );
  }

  function fe(e, t, n, r, i, a) {
    if (!e) return m;
    var s = 1;
    if (
      (t === x && (t = 6),
      r < 0 ? ((s = 0), (r = -r)) : r > 15 && ((s = 2), (r -= 16)),
      i < 1 ||
        i > C ||
        n !== O ||
        r < 8 ||
        r > 15 ||
        t < 0 ||
        t > 9 ||
        a < 0 ||
        a > w)
    )
      return X(e, m);
    8 === r && (r = 9);
    var u = new (function () {
      (this.strm = null),
        (this.status = 0),
        (this.pending_buf = null),
        (this.pending_buf_size = 0),
        (this.pending_out = 0),
        (this.pending = 0),
        (this.wrap = 0),
        (this.gzhead = null),
        (this.gzindex = 0),
        (this.method = O),
        (this.last_flush = -1),
        (this.w_size = 0),
        (this.w_bits = 0),
        (this.w_mask = 0),
        (this.window = null),
        (this.window_size = 0),
        (this.prev = null),
        (this.head = null),
        (this.ins_h = 0),
        (this.hash_size = 0),
        (this.hash_bits = 0),
        (this.hash_mask = 0),
        (this.hash_shift = 0),
        (this.block_start = 0),
        (this.match_length = 0),
        (this.prev_match = 0),
        (this.match_available = 0),
        (this.strstart = 0),
        (this.match_start = 0),
        (this.lookahead = 0),
        (this.prev_length = 0),
        (this.max_chain_length = 0),
        (this.max_lazy_match = 0),
        (this.level = 0),
        (this.strategy = 0),
        (this.good_match = 0),
        (this.nice_match = 0),
        (this.dyn_ltree = new o.Buf16(2 * D)),
        (this.dyn_dtree = new o.Buf16(2 * (2 * N + 1))),
        (this.bl_tree = new o.Buf16(2 * (2 * j + 1))),
        Y(this.dyn_ltree),
        Y(this.dyn_dtree),
        Y(this.bl_tree),
        (this.l_desc = null),
        (this.d_desc = null),
        (this.bl_desc = null),
        (this.bl_count = new o.Buf16(T + 1)),
        (this.heap = new o.Buf16(2 * P + 1)),
        Y(this.heap),
        (this.heap_len = 0),
        (this.heap_max = 0),
        (this.depth = new o.Buf16(2 * P + 1)),
        Y(this.depth),
        (this.l_buf = 0),
        (this.lit_bufsize = 0),
        (this.last_lit = 0),
        (this.d_buf = 0),
        (this.opt_len = 0),
        (this.static_len = 0),
        (this.matches = 0),
        (this.insert = 0),
        (this.bi_buf = 0),
        (this.bi_valid = 0);
    })();
    return (
      (e.state = u),
      (u.strm = e),
      (u.wrap = s),
      (u.gzhead = null),
      (u.w_bits = r),
      (u.w_size = 1 << u.w_bits),
      (u.w_mask = u.w_size - 1),
      (u.hash_bits = i + 7),
      (u.hash_size = 1 << u.hash_bits),
      (u.hash_mask = u.hash_size - 1),
      (u.hash_shift = ~~((u.hash_bits + L - 1) / L)),
      (u.window = new o.Buf8(2 * u.w_size)),
      (u.head = new o.Buf16(u.hash_size)),
      (u.prev = new o.Buf16(u.w_size)),
      (u.lit_bufsize = 1 << (i + 6)),
      (u.pending_buf_size = 4 * u.lit_bufsize),
      (u.pending_buf = new o.Buf8(u.pending_buf_size)),
      (u.d_buf = 1 * u.lit_bufsize),
      (u.l_buf = 3 * u.lit_bufsize),
      (u.level = t),
      (u.strategy = a),
      (u.method = n),
      de(e)
    );
  }

  (r = [
    new ue(0, 0, 0, 0, function (e, t) {
      var n = 65535;
      for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5); ; ) {
        if (e.lookahead <= 1) {
          if ((ie(e), 0 === e.lookahead && t === c)) return K;
          if (0 === e.lookahead) break;
        }
        (e.strstart += e.lookahead), (e.lookahead = 0);
        var r = e.block_start + n;
        if (
          (0 === e.strstart || e.strstart >= r) &&
          ((e.lookahead = e.strstart - r),
          (e.strstart = r),
          te(e, !1),
          0 === e.strm.avail_out)
        )
          return K;
        if (
          e.strstart - e.block_start >= e.w_size - M &&
          (te(e, !1), 0 === e.strm.avail_out)
        )
          return K;
      }
      return (
        (e.insert = 0),
        t === l
          ? (te(e, !0), 0 === e.strm.avail_out ? J : z)
          : (e.strstart > e.block_start && (te(e, !1), e.strm.avail_out), K)
      );
    }),
    new ue(4, 4, 8, 4, ae),
    new ue(4, 5, 16, 8, ae),
    new ue(4, 6, 32, 32, ae),
    new ue(4, 4, 16, 16, se),
    new ue(8, 16, 32, 32, se),
    new ue(8, 16, 128, 128, se),
    new ue(8, 32, 128, 256, se),
    new ue(32, 128, 258, 1024, se),
    new ue(32, 258, 258, 4096, se),
  ]),
    (t.deflateInit = function (e, t) {
      return fe(e, t, O, R, E, k);
    }),
    (t.deflateInit2 = fe),
    (t.deflateReset = de),
    (t.deflateResetKeep = ce),
    (t.deflateSetHeader = function (e, t) {
      return e && e.state
        ? 2 !== e.state.wrap
          ? m
          : ((e.state.gzhead = t), h)
        : m;
    }),
    (t.deflate = function (e, t) {
      var n, o, a, u;
      if (!e || !e.state || t > p || t < 0) return e ? X(e, m) : m;
      if (
        ((o = e.state),
        !e.output ||
          (!e.input && 0 !== e.avail_in) ||
          (o.status === H && t !== l))
      )
        return X(e, 0 === e.avail_out ? y : m);
      if (
        ((o.strm = e), (n = o.last_flush), (o.last_flush = t), o.status === A)
      )
        if (2 === o.wrap)
          (e.adler = 0),
            ne(o, 31),
            ne(o, 139),
            ne(o, 8),
            o.gzhead
              ? (ne(
                  o,
                  (o.gzhead.text ? 1 : 0) +
                    (o.gzhead.hcrc ? 2 : 0) +
                    (o.gzhead.extra ? 4 : 0) +
                    (o.gzhead.name ? 8 : 0) +
                    (o.gzhead.comment ? 16 : 0)
                ),
                ne(o, 255 & o.gzhead.time),
                ne(o, (o.gzhead.time >> 8) & 255),
                ne(o, (o.gzhead.time >> 16) & 255),
                ne(o, (o.gzhead.time >> 24) & 255),
                ne(
                  o,
                  9 === o.level ? 2 : o.strategy >= W || o.level < 2 ? 4 : 0
                ),
                ne(o, 255 & o.gzhead.os),
                o.gzhead.extra &&
                  o.gzhead.extra.length &&
                  (ne(o, 255 & o.gzhead.extra.length),
                  ne(o, (o.gzhead.extra.length >> 8) & 255)),
                o.gzhead.hcrc &&
                  (e.adler = s(e.adler, o.pending_buf, o.pending, 0)),
                (o.gzindex = 0),
                (o.status = G))
              : (ne(o, 0),
                ne(o, 0),
                ne(o, 0),
                ne(o, 0),
                ne(o, 0),
                ne(
                  o,
                  9 === o.level ? 2 : o.strategy >= W || o.level < 2 ? 4 : 0
                ),
                ne(o, $),
                (o.status = V));
        else {
          var g = (O + ((o.w_bits - 8) << 4)) << 8;
          (g |=
            (o.strategy >= W || o.level < 2
              ? 0
              : o.level < 6
              ? 1
              : 6 === o.level
              ? 2
              : 3) << 6),
            0 !== o.strstart && (g |= I),
            (g += 31 - (g % 31)),
            (o.status = V),
            re(o, g),
            0 !== o.strstart && (re(o, e.adler >>> 16), re(o, 65535 & e.adler)),
            (e.adler = 1);
        }
      if (o.status === G)
        if (o.gzhead.extra) {
          for (
            a = o.pending;
            o.gzindex < (65535 & o.gzhead.extra.length) &&
            (o.pending !== o.pending_buf_size ||
              (o.gzhead.hcrc &&
                o.pending > a &&
                (e.adler = s(e.adler, o.pending_buf, o.pending - a, a)),
              ee(e),
              (a = o.pending),
              o.pending !== o.pending_buf_size));

          )
            ne(o, 255 & o.gzhead.extra[o.gzindex]), o.gzindex++;
          o.gzhead.hcrc &&
            o.pending > a &&
            (e.adler = s(e.adler, o.pending_buf, o.pending - a, a)),
            o.gzindex === o.gzhead.extra.length &&
              ((o.gzindex = 0), (o.status = B));
        } else o.status = B;
      if (o.status === B)
        if (o.gzhead.name) {
          a = o.pending;
          do {
            if (
              o.pending === o.pending_buf_size &&
              (o.gzhead.hcrc &&
                o.pending > a &&
                (e.adler = s(e.adler, o.pending_buf, o.pending - a, a)),
              ee(e),
              (a = o.pending),
              o.pending === o.pending_buf_size)
            ) {
              u = 1;
              break;
            }
            (u =
              o.gzindex < o.gzhead.name.length
                ? 255 & o.gzhead.name.charCodeAt(o.gzindex++)
                : 0),
              ne(o, u);
          } while (0 !== u);
          o.gzhead.hcrc &&
            o.pending > a &&
            (e.adler = s(e.adler, o.pending_buf, o.pending - a, a)),
            0 === u && ((o.gzindex = 0), (o.status = Q));
        } else o.status = Q;
      if (o.status === Q)
        if (o.gzhead.comment) {
          a = o.pending;
          do {
            if (
              o.pending === o.pending_buf_size &&
              (o.gzhead.hcrc &&
                o.pending > a &&
                (e.adler = s(e.adler, o.pending_buf, o.pending - a, a)),
              ee(e),
              (a = o.pending),
              o.pending === o.pending_buf_size)
            ) {
              u = 1;
              break;
            }
            (u =
              o.gzindex < o.gzhead.comment.length
                ? 255 & o.gzhead.comment.charCodeAt(o.gzindex++)
                : 0),
              ne(o, u);
          } while (0 !== u);
          o.gzhead.hcrc &&
            o.pending > a &&
            (e.adler = s(e.adler, o.pending_buf, o.pending - a, a)),
            0 === u && (o.status = F);
        } else o.status = F;
      if (
        (o.status === F &&
          (o.gzhead.hcrc
            ? (o.pending + 2 > o.pending_buf_size && ee(e),
              o.pending + 2 <= o.pending_buf_size &&
                (ne(o, 255 & e.adler),
                ne(o, (e.adler >> 8) & 255),
                (e.adler = 0),
                (o.status = V)))
            : (o.status = V)),
        0 !== o.pending)
      ) {
        if ((ee(e), 0 === e.avail_out)) return (o.last_flush = -1), h;
      } else if (0 === e.avail_in && Z(t) <= Z(n) && t !== l) return X(e, y);
      if (o.status === H && 0 !== e.avail_in) return X(e, y);
      if (
        0 !== e.avail_in ||
        0 !== o.lookahead ||
        (t !== c && o.status !== H)
      ) {
        var x =
          o.strategy === W
            ? (function (e, t) {
                for (var n; ; ) {
                  if (0 === e.lookahead && (ie(e), 0 === e.lookahead)) {
                    if (t === c) return K;
                    break;
                  }
                  if (
                    ((e.match_length = 0),
                    (n = i._tr_tally(e, 0, e.window[e.strstart])),
                    e.lookahead--,
                    e.strstart++,
                    n && (te(e, !1), 0 === e.strm.avail_out))
                  )
                    return K;
                }
                return (
                  (e.insert = 0),
                  t === l
                    ? (te(e, !0), 0 === e.strm.avail_out ? J : z)
                    : e.last_lit && (te(e, !1), 0 === e.strm.avail_out)
                    ? K
                    : U
                );
              })(o, t)
            : o.strategy === _
            ? (function (e, t) {
                for (var n, r, o, a, s = e.window; ; ) {
                  if (e.lookahead <= q) {
                    if ((ie(e), e.lookahead <= q && t === c)) return K;
                    if (0 === e.lookahead) break;
                  }
                  if (
                    ((e.match_length = 0),
                    e.lookahead >= L &&
                      e.strstart > 0 &&
                      (r = s[(o = e.strstart - 1)]) === s[++o] &&
                      r === s[++o] &&
                      r === s[++o])
                  ) {
                    a = e.strstart + q;
                    do {} while (
                      r === s[++o] &&
                      r === s[++o] &&
                      r === s[++o] &&
                      r === s[++o] &&
                      r === s[++o] &&
                      r === s[++o] &&
                      r === s[++o] &&
                      r === s[++o] &&
                      o < a
                    );
                    (e.match_length = q - (a - o)),
                      e.match_length > e.lookahead &&
                        (e.match_length = e.lookahead);
                  }
                  if (
                    (e.match_length >= L
                      ? ((n = i._tr_tally(e, 1, e.match_length - L)),
                        (e.lookahead -= e.match_length),
                        (e.strstart += e.match_length),
                        (e.match_length = 0))
                      : ((n = i._tr_tally(e, 0, e.window[e.strstart])),
                        e.lookahead--,
                        e.strstart++),
                    n && (te(e, !1), 0 === e.strm.avail_out))
                  )
                    return K;
                }
                return (
                  (e.insert = 0),
                  t === l
                    ? (te(e, !0), 0 === e.strm.avail_out ? J : z)
                    : e.last_lit && (te(e, !1), 0 === e.strm.avail_out)
                    ? K
                    : U
                );
              })(o, t)
            : r[o.level].func(o, t);
        if (((x !== J && x !== z) || (o.status = H), x === K || x === J))
          return 0 === e.avail_out && (o.last_flush = -1), h;
        if (
          x === U &&
          (t === d
            ? i._tr_align(o)
            : t !== p &&
              (i._tr_stored_block(o, 0, 0, !1),
              t === f &&
                (Y(o.head),
                0 === o.lookahead &&
                  ((o.strstart = 0), (o.block_start = 0), (o.insert = 0)))),
          ee(e),
          0 === e.avail_out)
        )
          return (o.last_flush = -1), h;
      }
      return t !== l
        ? h
        : o.wrap <= 0
        ? v
        : (2 === o.wrap
            ? (ne(o, 255 & e.adler),
              ne(o, (e.adler >> 8) & 255),
              ne(o, (e.adler >> 16) & 255),
              ne(o, (e.adler >> 24) & 255),
              ne(o, 255 & e.total_in),
              ne(o, (e.total_in >> 8) & 255),
              ne(o, (e.total_in >> 16) & 255),
              ne(o, (e.total_in >> 24) & 255))
            : (re(o, e.adler >>> 16), re(o, 65535 & e.adler)),
          ee(e),
          o.wrap > 0 && (o.wrap = -o.wrap),
          0 !== o.pending ? h : v);
    }),
    (t.deflateEnd = function (e) {
      var t;
      return e && e.state
        ? (t = e.state.status) !== A &&
          t !== G &&
          t !== B &&
          t !== Q &&
          t !== F &&
          t !== V &&
          t !== H
          ? X(e, m)
          : ((e.state = null), t === V ? X(e, g) : h)
        : m;
    }),
    (t.deflateSetDictionary = function (e, t) {
      var n,
        r,
        i,
        s,
        u,
        c,
        d,
        f,
        l = t.length;
      if (!e || !e.state) return m;
      if (
        2 === (s = (n = e.state).wrap) ||
        (1 === s && n.status !== A) ||
        n.lookahead
      )
        return m;
      for (
        1 === s && (e.adler = a(e.adler, t, l, 0)),
          n.wrap = 0,
          l >= n.w_size &&
            (0 === s &&
              (Y(n.head),
              (n.strstart = 0),
              (n.block_start = 0),
              (n.insert = 0)),
            (f = new o.Buf8(n.w_size)),
            o.arraySet(f, t, l - n.w_size, n.w_size, 0),
            (t = f),
            (l = n.w_size)),
          u = e.avail_in,
          c = e.next_in,
          d = e.input,
          e.avail_in = l,
          e.next_in = 0,
          e.input = t,
          ie(n);
        n.lookahead >= L;

      ) {
        (r = n.strstart), (i = n.lookahead - (L - 1));
        do {
          (n.ins_h =
            ((n.ins_h << n.hash_shift) ^ n.window[r + L - 1]) & n.hash_mask),
            (n.prev[r & n.w_mask] = n.head[n.ins_h]),
            (n.head[n.ins_h] = r),
            r++;
        } while (--i);
        (n.strstart = r), (n.lookahead = L - 1), ie(n);
      }
      return (
        (n.strstart += n.lookahead),
        (n.block_start = n.strstart),
        (n.insert = n.lookahead),
        (n.lookahead = 0),
        (n.match_length = n.prev_length = L - 1),
        (n.match_available = 0),
        (e.next_in = c),
        (e.input = d),
        (e.avail_in = u),
        (n.wrap = s),
        h
      );
    }),
    (t.deflateInfo = "pako deflate (from Nodeca project)");
};
