module.exports = function (e, t, n) {
  "use strict";
  var r = n(1),
    o = 4,
    i = 0,
    a = 1,
    s = 2;

  function u(e) {
    for (var t = e.length; --t >= 0; ) e[t] = 0;
  }

  var c = 0,
    d = 1,
    f = 2,
    l = 29,
    p = 256,
    h = p + 1 + l,
    v = 30,
    m = 19,
    g = 2 * h + 1,
    y = 15,
    x = 16,
    b = 7,
    W = 256,
    _ = 16,
    w = 17,
    k = 18,
    S = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      5,
      5,
      5,
      5,
      0,
    ],
    O = [
      0,
      0,
      0,
      0,
      1,
      1,
      2,
      2,
      3,
      3,
      4,
      4,
      5,
      5,
      6,
      6,
      7,
      7,
      8,
      8,
      9,
      9,
      10,
      10,
      11,
      11,
      12,
      12,
      13,
      13,
    ],
    C = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    R = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    E = new Array(2 * (h + 2));
  u(E);
  var P = new Array(2 * v);
  u(P);
  var N = new Array(512);
  u(N);
  var j = new Array(256);
  u(j);
  var D = new Array(l);
  u(D);
  var T,
    L,
    q,
    M = new Array(v);

  function I(e, t, n, r, o) {
    (this.static_tree = e),
      (this.extra_bits = t),
      (this.extra_base = n),
      (this.elems = r),
      (this.max_length = o),
      (this.has_stree = e && e.length);
  }

  function A(e, t) {
    (this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t);
  }

  function G(e) {
    return e < 256 ? N[e] : N[256 + (e >>> 7)];
  }

  function B(e, t) {
    (e.pending_buf[e.pending++] = 255 & t),
      (e.pending_buf[e.pending++] = (t >>> 8) & 255);
  }

  function Q(e, t, n) {
    e.bi_valid > x - n
      ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
        B(e, e.bi_buf),
        (e.bi_buf = t >> (x - e.bi_valid)),
        (e.bi_valid += n - x))
      : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += n));
  }

  function F(e, t, n) {
    Q(e, n[2 * t], n[2 * t + 1]);
  }

  function V(e, t) {
    var n = 0;
    do {
      (n |= 1 & e), (e >>>= 1), (n <<= 1);
    } while (--t > 0);
    return n >>> 1;
  }

  function H(e, t, n) {
    var r,
      o,
      i = new Array(y + 1),
      a = 0;
    for (r = 1; r <= y; r++) i[r] = a = (a + n[r - 1]) << 1;
    for (o = 0; o <= t; o++) {
      var s = e[2 * o + 1];
      0 !== s && (e[2 * o] = V(i[s]++, s));
    }
  }

  function K(e) {
    var t;
    for (t = 0; t < h; t++) e.dyn_ltree[2 * t] = 0;
    for (t = 0; t < v; t++) e.dyn_dtree[2 * t] = 0;
    for (t = 0; t < m; t++) e.bl_tree[2 * t] = 0;
    (e.dyn_ltree[2 * W] = 1),
      (e.opt_len = e.static_len = 0),
      (e.last_lit = e.matches = 0);
  }

  function U(e) {
    e.bi_valid > 8
      ? B(e, e.bi_buf)
      : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
      (e.bi_buf = 0),
      (e.bi_valid = 0);
  }

  function J(e, t, n, r) {
    var o = 2 * t,
      i = 2 * n;
    return e[o] < e[i] || (e[o] === e[i] && r[t] <= r[n]);
  }

  function z(e, t, n) {
    for (
      var r = e.heap[n], o = n << 1;
      o <= e.heap_len &&
      (o < e.heap_len && J(t, e.heap[o + 1], e.heap[o], e.depth) && o++,
      !J(t, r, e.heap[o], e.depth));

    )
      (e.heap[n] = e.heap[o]), (n = o), (o <<= 1);
    e.heap[n] = r;
  }

  function $(e, t, n) {
    var r,
      o,
      i,
      a,
      s = 0;
    if (0 !== e.last_lit)
      do {
        (r =
          (e.pending_buf[e.d_buf + 2 * s] << 8) |
          e.pending_buf[e.d_buf + 2 * s + 1]),
          (o = e.pending_buf[e.l_buf + s]),
          s++,
          0 === r
            ? F(e, o, t)
            : (F(e, (i = j[o]) + p + 1, t),
              0 !== (a = S[i]) && Q(e, (o -= D[i]), a),
              F(e, (i = G(--r)), n),
              0 !== (a = O[i]) && Q(e, (r -= M[i]), a));
      } while (s < e.last_lit);
    F(e, W, t);
  }

  function X(e, t) {
    var n,
      r,
      o,
      i = t.dyn_tree,
      a = t.stat_desc.static_tree,
      s = t.stat_desc.has_stree,
      u = t.stat_desc.elems,
      c = -1;
    for (e.heap_len = 0, e.heap_max = g, n = 0; n < u; n++)
      0 !== i[2 * n]
        ? ((e.heap[++e.heap_len] = c = n), (e.depth[n] = 0))
        : (i[2 * n + 1] = 0);
    for (; e.heap_len < 2; )
      (i[2 * (o = e.heap[++e.heap_len] = c < 2 ? ++c : 0)] = 1),
        (e.depth[o] = 0),
        e.opt_len--,
        s && (e.static_len -= a[2 * o + 1]);
    for (t.max_code = c, n = e.heap_len >> 1; n >= 1; n--) z(e, i, n);
    o = u;
    do {
      (n = e.heap[1]),
        (e.heap[1] = e.heap[e.heap_len--]),
        z(e, i, 1),
        (r = e.heap[1]),
        (e.heap[--e.heap_max] = n),
        (e.heap[--e.heap_max] = r),
        (i[2 * o] = i[2 * n] + i[2 * r]),
        (e.depth[o] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1),
        (i[2 * n + 1] = i[2 * r + 1] = o),
        (e.heap[1] = o++),
        z(e, i, 1);
    } while (e.heap_len >= 2);
    (e.heap[--e.heap_max] = e.heap[1]),
      (function (e, t) {
        var n,
          r,
          o,
          i,
          a,
          s,
          u = t.dyn_tree,
          c = t.max_code,
          d = t.stat_desc.static_tree,
          f = t.stat_desc.has_stree,
          l = t.stat_desc.extra_bits,
          p = t.stat_desc.extra_base,
          h = t.stat_desc.max_length,
          v = 0;
        for (i = 0; i <= y; i++) e.bl_count[i] = 0;
        for (u[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < g; n++)
          (i = u[2 * u[2 * (r = e.heap[n]) + 1] + 1] + 1) > h && ((i = h), v++),
            (u[2 * r + 1] = i),
            r > c ||
              (e.bl_count[i]++,
              (a = 0),
              r >= p && (a = l[r - p]),
              (s = u[2 * r]),
              (e.opt_len += s * (i + a)),
              f && (e.static_len += s * (d[2 * r + 1] + a)));
        if (0 !== v) {
          do {
            for (i = h - 1; 0 === e.bl_count[i]; ) i--;
            e.bl_count[i]--,
              (e.bl_count[i + 1] += 2),
              e.bl_count[h]--,
              (v -= 2);
          } while (v > 0);
          for (i = h; 0 !== i; i--)
            for (r = e.bl_count[i]; 0 !== r; )
              (o = e.heap[--n]) > c ||
                (u[2 * o + 1] !== i &&
                  ((e.opt_len += (i - u[2 * o + 1]) * u[2 * o]),
                  (u[2 * o + 1] = i)),
                r--);
        }
      })(e, t),
      H(i, c, e.bl_count);
  }

  function Z(e, t, n) {
    var r,
      o,
      i = -1,
      a = t[1],
      s = 0,
      u = 7,
      c = 4;
    for (
      0 === a && ((u = 138), (c = 3)), t[2 * (n + 1) + 1] = 65535, r = 0;
      r <= n;
      r++
    )
      (o = a),
        (a = t[2 * (r + 1) + 1]),
        (++s < u && o === a) ||
          (s < c
            ? (e.bl_tree[2 * o] += s)
            : 0 !== o
            ? (o !== i && e.bl_tree[2 * o]++, e.bl_tree[2 * _]++)
            : s <= 10
            ? e.bl_tree[2 * w]++
            : e.bl_tree[2 * k]++,
          (s = 0),
          (i = o),
          0 === a
            ? ((u = 138), (c = 3))
            : o === a
            ? ((u = 6), (c = 3))
            : ((u = 7), (c = 4)));
  }

  function Y(e, t, n) {
    var r,
      o,
      i = -1,
      a = t[1],
      s = 0,
      u = 7,
      c = 4;
    for (0 === a && ((u = 138), (c = 3)), r = 0; r <= n; r++)
      if (((o = a), (a = t[2 * (r + 1) + 1]), !(++s < u && o === a))) {
        if (s < c)
          do {
            F(e, o, e.bl_tree);
          } while (0 != --s);
        else
          0 !== o
            ? (o !== i && (F(e, o, e.bl_tree), s--),
              F(e, _, e.bl_tree),
              Q(e, s - 3, 2))
            : s <= 10
            ? (F(e, w, e.bl_tree), Q(e, s - 3, 3))
            : (F(e, k, e.bl_tree), Q(e, s - 11, 7));
        (s = 0),
          (i = o),
          0 === a
            ? ((u = 138), (c = 3))
            : o === a
            ? ((u = 6), (c = 3))
            : ((u = 7), (c = 4));
      }
  }

  u(M);
  var ee = !1;

  function te(e, t, n, o) {
    Q(e, (c << 1) + (o ? 1 : 0), 3),
      (function (e, t, n, o) {
        U(e),
          o && (B(e, n), B(e, ~n)),
          r.arraySet(e.pending_buf, e.window, t, n, e.pending),
          (e.pending += n);
      })(e, t, n, !0);
  }

  (t._tr_init = function (e) {
    ee ||
      ((function () {
        var e,
          t,
          n,
          r,
          o,
          i = new Array(y + 1);
        for (n = 0, r = 0; r < l - 1; r++)
          for (D[r] = n, e = 0; e < 1 << S[r]; e++) j[n++] = r;
        for (j[n - 1] = r, o = 0, r = 0; r < 16; r++)
          for (M[r] = o, e = 0; e < 1 << O[r]; e++) N[o++] = r;
        for (o >>= 7; r < v; r++)
          for (M[r] = o << 7, e = 0; e < 1 << (O[r] - 7); e++) N[256 + o++] = r;
        for (t = 0; t <= y; t++) i[t] = 0;
        for (e = 0; e <= 143; ) (E[2 * e + 1] = 8), e++, i[8]++;
        for (; e <= 255; ) (E[2 * e + 1] = 9), e++, i[9]++;
        for (; e <= 279; ) (E[2 * e + 1] = 7), e++, i[7]++;
        for (; e <= 287; ) (E[2 * e + 1] = 8), e++, i[8]++;
        for (H(E, h + 1, i), e = 0; e < v; e++)
          (P[2 * e + 1] = 5), (P[2 * e] = V(e, 5));
        (T = new I(E, S, p + 1, h, y)),
          (L = new I(P, O, 0, v, y)),
          (q = new I(new Array(0), C, 0, m, b));
      })(),
      (ee = !0)),
      (e.l_desc = new A(e.dyn_ltree, T)),
      (e.d_desc = new A(e.dyn_dtree, L)),
      (e.bl_desc = new A(e.bl_tree, q)),
      (e.bi_buf = 0),
      (e.bi_valid = 0),
      K(e);
  }),
    (t._tr_stored_block = te),
    (t._tr_flush_block = function (e, t, n, r) {
      var u,
        c,
        l = 0;
      e.level > 0
        ? (e.strm.data_type === s &&
            (e.strm.data_type = (function (e) {
              var t,
                n = 4093624447;
              for (t = 0; t <= 31; t++, n >>>= 1)
                if (1 & n && 0 !== e.dyn_ltree[2 * t]) return i;
              if (
                0 !== e.dyn_ltree[18] ||
                0 !== e.dyn_ltree[20] ||
                0 !== e.dyn_ltree[26]
              )
                return a;
              for (t = 32; t < p; t++) if (0 !== e.dyn_ltree[2 * t]) return a;
              return i;
            })(e)),
          X(e, e.l_desc),
          X(e, e.d_desc),
          (l = (function (e) {
            var t;
            for (
              Z(e, e.dyn_ltree, e.l_desc.max_code),
                Z(e, e.dyn_dtree, e.d_desc.max_code),
                X(e, e.bl_desc),
                t = m - 1;
              t >= 3 && 0 === e.bl_tree[2 * R[t] + 1];
              t--
            );
            return (e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
          })(e)),
          (u = (e.opt_len + 3 + 7) >>> 3),
          (c = (e.static_len + 3 + 7) >>> 3) <= u && (u = c))
        : (u = c = n + 5),
        n + 4 <= u && -1 !== t
          ? te(e, t, n, r)
          : e.strategy === o || c === u
          ? (Q(e, (d << 1) + (r ? 1 : 0), 3), $(e, E, P))
          : (Q(e, (f << 1) + (r ? 1 : 0), 3),
            (function (e, t, n, r) {
              var o;
              for (
                Q(e, t - 257, 5), Q(e, n - 1, 5), Q(e, r - 4, 4), o = 0;
                o < r;
                o++
              )
                Q(e, e.bl_tree[2 * R[o] + 1], 3);
              Y(e, e.dyn_ltree, t - 1), Y(e, e.dyn_dtree, n - 1);
            })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, l + 1),
            $(e, e.dyn_ltree, e.dyn_dtree)),
        K(e),
        r && U(e);
    }),
    (t._tr_tally = function (e, t, n) {
      return (
        (e.pending_buf[e.d_buf + 2 * e.last_lit] = (t >>> 8) & 255),
        (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t),
        (e.pending_buf[e.l_buf + e.last_lit] = 255 & n),
        e.last_lit++,
        0 === t
          ? e.dyn_ltree[2 * n]++
          : (e.matches++,
            t--,
            e.dyn_ltree[2 * (j[n] + p + 1)]++,
            e.dyn_dtree[2 * G(t)]++),
        e.last_lit === e.lit_bufsize - 1
      );
    }),
    (t._tr_align = function (e) {
      Q(e, d << 1, 3),
        F(e, W, E),
        (function (e) {
          16 === e.bi_valid
            ? (B(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
            : e.bi_valid >= 8 &&
              ((e.pending_buf[e.pending++] = 255 & e.bi_buf),
              (e.bi_buf >>= 8),
              (e.bi_valid -= 8));
        })(e);
    });
};
