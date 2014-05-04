! function() {
    function n(n, t) {
        return t > n ? -1 : n > t ? 1 : n >= t ? 0 : 0 / 0
    }

    function t(n) {
        return null != n && !isNaN(n)
    }

    function r(n) {
        return {
            left: function(t, r, e, u) {
                for (arguments.length < 3 && (e = 0), arguments.length < 4 && (u = t.length); u > e;) {
                    var i = e + u >>> 1;
                    n(t[i], r) < 0 ? e = i + 1 : u = i
                }
                return e
            },
            right: function(t, r, e, u) {
                for (arguments.length < 3 && (e = 0), arguments.length < 4 && (u = t.length); u > e;) {
                    var i = e + u >>> 1;
                    n(t[i], r) > 0 ? u = i : e = i + 1
                }
                return e
            }
        }
    }

    function e(n) {
        return n.length
    }

    function u(n) {
        for (var t = 1; n * t % 1;) t *= 10;
        return t
    }

    function i(n, t) {
        try {
            for (var r in t) Object.defineProperty(n.prototype, r, {
                value: t[r],
                enumerable: !1
            })
        } catch (e) {
            n.prototype = t
        }
    }

    function o() {}

    function a(n) {
        return _a + n in this
    }

    function c(n) {
        return n = _a + n, n in this && delete this[n]
    }

    function l() {
        var n = [];
        return this.forEach(function(t) {
            n.push(t)
        }), n
    }

    function s() {
        var n = 0;
        for (var t in this) t.charCodeAt(0) === ba && ++n;
        return n
    }

    function f() {
        for (var n in this)
            if (n.charCodeAt(0) === ba) return !1;
        return !0
    }

    function h() {}

    function g(n, t, r) {
        return function() {
            var e = r.apply(t, arguments);
            return e === t ? n : e
        }
    }

    function p(n, t) {
        if (t in n) return t;
        t = t.charAt(0).toUpperCase() + t.substring(1);
        for (var r = 0, e = wa.length; e > r; ++r) {
            var u = wa[r] + t;
            if (u in n) return u
        }
    }

    function v() {}

    function d() {}

    function m(n) {
        function t() {
            for (var t, e = r, u = -1, i = e.length; ++u < i;)(t = e[u].on) && t.apply(this, arguments);
            return n
        }
        var r = [],
            e = new o;
        return t.on = function(t, u) {
            var i, o = e.get(t);
            return arguments.length < 2 ? o && o.on : (o && (o.on = null, r = r.slice(0, i = r.indexOf(o)).concat(r.slice(i + 1)), e.remove(t)), u && r.push(e.set(t, {
                on: u
            })), n)
        }, t
    }

    function y() {
        oa.event.preventDefault()
    }

    function x() {
        for (var n, t = oa.event; n = t.sourceEvent;) t = n;
        return t
    }

    function M(n) {
        for (var t = new d, r = 0, e = arguments.length; ++r < e;) t[arguments[r]] = m(t);
        return t.of = function(r, e) {
            return function(u) {
                try {
                    var i = u.sourceEvent = oa.event;
                    u.target = n, oa.event = u, t[u.type].apply(r, e)
                } finally {
                    oa.event = i
                }
            }
        }, t
    }

    function _(n) {
        return ka(n, La), n
    }

    function b(n) {
        return "function" == typeof n ? n : function() {
            return Ea(n, this)
        }
    }

    function w(n) {
        return "function" == typeof n ? n : function() {
            return Na(n, this)
        }
    }

    function S(n, t) {
        function r() {
            this.removeAttribute(n)
        }

        function e() {
            this.removeAttributeNS(n.space, n.local)
        }

        function u() {
            this.setAttribute(n, t)
        }

        function i() {
            this.setAttributeNS(n.space, n.local, t)
        }

        function o() {
            var r = t.apply(this, arguments);
            null == r ? this.removeAttribute(n) : this.setAttribute(n, r)
        }

        function a() {
            var r = t.apply(this, arguments);
            null == r ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, r)
        }
        return n = oa.ns.qualify(n), null == t ? n.local ? e : r : "function" == typeof t ? n.local ? a : o : n.local ? i : u
    }

    function k(n) {
        return n.trim().replace(/\s+/g, " ")
    }

    function E(n) {
        return new RegExp("(?:^|\\s+)" + oa.requote(n) + "(?:\\s+|$)", "g")
    }

    function N(n) {
        return n.trim().split(/^|\s+/)
    }

    function A(n, t) {
        function r() {
            for (var r = -1; ++r < u;) n[r](this, t)
        }

        function e() {
            for (var r = -1, e = t.apply(this, arguments); ++r < u;) n[r](this, e)
        }
        n = N(n).map(C);
        var u = n.length;
        return "function" == typeof t ? e : r
    }

    function C(n) {
        var t = E(n);
        return function(r, e) {
            if (u = r.classList) return e ? u.add(n) : u.remove(n);
            var u = r.getAttribute("class") || "";
            e ? (t.lastIndex = 0, t.test(u) || r.setAttribute("class", k(u + " " + n))) : r.setAttribute("class", k(u.replace(t, " ")))
        }
    }

    function L(n, t, r) {
        function e() {
            this.style.removeProperty(n)
        }

        function u() {
            this.style.setProperty(n, t, r)
        }

        function i() {
            var e = t.apply(this, arguments);
            null == e ? this.style.removeProperty(n) : this.style.setProperty(n, e, r)
        }
        return null == t ? e : "function" == typeof t ? i : u
    }

    function q(n, t) {
        function r() {
            delete this[n]
        }

        function e() {
            this[n] = t
        }

        function u() {
            var r = t.apply(this, arguments);
            null == r ? delete this[n] : this[n] = r
        }
        return null == t ? r : "function" == typeof t ? u : e
    }

    function T(n) {
        return "function" == typeof n ? n : (n = oa.ns.qualify(n)).local ? function() {
            return this.ownerDocument.createElementNS(n.space, n.local)
        } : function() {
            return this.ownerDocument.createElementNS(this.namespaceURI, n)
        }
    }

    function z(n) {
        return {
            __data__: n
        }
    }

    function R(n) {
        return function() {
            return Ca(this, n)
        }
    }

    function D(t) {
        return arguments.length || (t = n),
        function(n, r) {
            return n && r ? t(n.__data__, r.__data__) : !n - !r
        }
    }

    function P(n, t) {
        for (var r = 0, e = n.length; e > r; r++)
            for (var u, i = n[r], o = 0, a = i.length; a > o; o++)(u = i[o]) && t(u, o, r);
        return n
    }

    function U(n) {
        return ka(n, Ta), n
    }

    function j(n) {
        var t, r;
        return function(e, u, i) {
            var o, a = n[i].update,
                c = a.length;
            for (i != r && (r = i, t = 0), u >= t && (t = u + 1); !(o = a[t]) && ++t < c;);
            return o
        }
    }

    function H() {
        var n = this.__transition__;
        n && ++n.active
    }

    function F(n, t, r) {
        function e() {
            var t = this[o];
            t && (this.removeEventListener(n, t, t.$), delete this[o])
        }

        function u() {
            var u = c(t, ca(arguments));
            e.call(this), this.addEventListener(n, this[o] = u, u.$ = r), u._ = t
        }

        function i() {
            var t, r = new RegExp("^__on([^.]+)" + oa.requote(n) + "$");
            for (var e in this)
                if (t = e.match(r)) {
                    var u = this[e];
                    this.removeEventListener(t[1], u, u.$), delete this[e]
                }
        }
        var o = "__on" + n,
            a = n.indexOf("."),
            c = O;
        a > 0 && (n = n.substring(0, a));
        var l = Ra.get(n);
        return l && (n = l, c = I), a ? t ? u : e : t ? v : i
    }

    function O(n, t) {
        return function(r) {
            var e = oa.event;
            oa.event = r, t[0] = this.__data__;
            try {
                n.apply(this, t)
            } finally {
                oa.event = e
            }
        }
    }

    function I(n, t) {
        var r = O(n, t);
        return function(n) {
            var t = this,
                e = n.relatedTarget;
            e && (e === t || 8 & e.compareDocumentPosition(t)) || r.call(t, n)
        }
    }

    function Y() {
        var n = ".dragsuppress-" + ++Pa,
            t = "click" + n,
            r = oa.select(fa).on("touchmove" + n, y).on("dragstart" + n, y).on("selectstart" + n, y);
        if (Da) {
            var e = sa.style,
                u = e[Da];
            e[Da] = "none"
        }
        return function(i) {
            function o() {
                r.on(t, null)
            }
            r.on(n, null), Da && (e[Da] = u), i && (r.on(t, function() {
                y(), o()
            }, !0), setTimeout(o, 0))
        }
    }

    function Z(n, t) {
        t.changedTouches && (t = t.changedTouches[0]);
        var r = n.ownerSVGElement || n;
        if (r.createSVGPoint) {
            var e = r.createSVGPoint();
            return e.x = t.clientX, e.y = t.clientY, e = e.matrixTransform(n.getScreenCTM().inverse()), [e.x, e.y]
        }
        var u = n.getBoundingClientRect();
        return [t.clientX - u.left - n.clientLeft, t.clientY - u.top - n.clientTop]
    }

    function V() {
        return oa.event.changedTouches[0].identifier
    }

    function $() {
        return oa.event.target
    }

    function X() {
        return fa
    }

    function B(n) {
        return n > 0 ? 1 : 0 > n ? -1 : 0
    }

    function J(n, t, r) {
        return (t[0] - n[0]) * (r[1] - n[1]) - (t[1] - n[1]) * (r[0] - n[0])
    }

    function W(n) {
        return n > 1 ? 0 : -1 > n ? Ua : Math.acos(n)
    }

    function G(n) {
        return n > 1 ? Ha : -1 > n ? -Ha : Math.asin(n)
    }

    function K(n) {
        return ((n = Math.exp(n)) - 1 / n) / 2
    }

    function Q(n) {
        return ((n = Math.exp(n)) + 1 / n) / 2
    }

    function nt(n) {
        return ((n = Math.exp(2 * n)) - 1) / (n + 1)
    }

    function tt(n) {
        return (n = Math.sin(n / 2)) * n
    }

    function rt() {}

    function et(n, t, r) {
        return new ut(n, t, r)
    }

    function ut(n, t, r) {
        this.h = n, this.s = t, this.l = r
    }

    function it(n, t, r) {
        function e(n) {
            return n > 360 ? n -= 360 : 0 > n && (n += 360), 60 > n ? i + (o - i) * n / 60 : 180 > n ? o : 240 > n ? i + (o - i) * (240 - n) / 60 : i
        }

        function u(n) {
            return Math.round(255 * e(n))
        }
        var i, o;
        return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t, r = 0 > r ? 0 : r > 1 ? 1 : r, o = .5 >= r ? r * (1 + t) : r + t - r * t, i = 2 * r - o, yt(u(n + 120), u(n), u(n - 120))
    }

    function ot(n, t, r) {
        return new at(n, t, r)
    }

    function at(n, t, r) {
        this.h = n, this.c = t, this.l = r
    }

    function ct(n, t, r) {
        return isNaN(n) && (n = 0), isNaN(t) && (t = 0), lt(r, Math.cos(n *= Ia) * t, Math.sin(n) * t)
    }

    function lt(n, t, r) {
        return new st(n, t, r)
    }

    function st(n, t, r) {
        this.l = n, this.a = t, this.b = r
    }

    function ft(n, t, r) {
        var e = (n + 16) / 116,
            u = e + t / 500,
            i = e - r / 200;
        return u = gt(u) * Qa, e = gt(e) * nc, i = gt(i) * tc, yt(vt(3.2404542 * u - 1.5371385 * e - .4985314 * i), vt(-.969266 * u + 1.8760108 * e + .041556 * i), vt(.0556434 * u - .2040259 * e + 1.0572252 * i))
    }

    function ht(n, t, r) {
        return n > 0 ? ot(Math.atan2(r, t) * Ya, Math.sqrt(t * t + r * r), n) : ot(0 / 0, 0 / 0, n)
    }

    function gt(n) {
        return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037
    }

    function pt(n) {
        return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29
    }

    function vt(n) {
        return Math.round(255 * (.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055))
    }

    function dt(n) {
        return yt(n >> 16, 255 & n >> 8, 255 & n)
    }

    function mt(n) {
        return dt(n) + ""
    }

    function yt(n, t, r) {
        return new xt(n, t, r)
    }

    function xt(n, t, r) {
        this.r = n, this.g = t, this.b = r
    }

    function Mt(n) {
        return 16 > n ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16)
    }

    function _t(n, t, r) {
        var e, u, i, o = 0,
            a = 0,
            c = 0;
        if (e = /([a-z]+)\((.*)\)/i.exec(n)) switch (u = e[2].split(","), e[1]) {
            case "hsl":
                return r(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
            case "rgb":
                return t(kt(u[0]), kt(u[1]), kt(u[2]))
        }
        return (i = uc.get(n)) ? t(i.r, i.g, i.b) : (null == n || "#" !== n.charAt(0) || isNaN(i = parseInt(n.substring(1), 16)) || (4 === n.length ? (o = (3840 & i) >> 4, o = o >> 4 | o, a = 240 & i, a = a >> 4 | a, c = 15 & i, c = c << 4 | c) : 7 === n.length && (o = (16711680 & i) >> 16, a = (65280 & i) >> 8, c = 255 & i)), t(o, a, c))
    }

    function bt(n, t, r) {
        var e, u, i = Math.min(n /= 255, t /= 255, r /= 255),
            o = Math.max(n, t, r),
            a = o - i,
            c = (o + i) / 2;
        return a ? (u = .5 > c ? a / (o + i) : a / (2 - o - i), e = n == o ? (t - r) / a + (r > t ? 6 : 0) : t == o ? (r - n) / a + 2 : (n - t) / a + 4, e *= 60) : (e = 0 / 0, u = c > 0 && 1 > c ? 0 : e), et(e, u, c)
    }

    function wt(n, t, r) {
        n = St(n), t = St(t), r = St(r);
        var e = pt((.4124564 * n + .3575761 * t + .1804375 * r) / Qa),
            u = pt((.2126729 * n + .7151522 * t + .072175 * r) / nc),
            i = pt((.0193339 * n + .119192 * t + .9503041 * r) / tc);
        return lt(116 * u - 16, 500 * (e - u), 200 * (u - i))
    }

    function St(n) {
        return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
    }

    function kt(n) {
        var t = parseFloat(n);
        return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t
    }

    function Et(n) {
        return "function" == typeof n ? n : function() {
            return n
        }
    }

    function Nt(n) {
        return n
    }

    function At(n) {
        return function(t, r, e) {
            return 2 === arguments.length && "function" == typeof r && (e = r, r = null), Ct(t, r, n, e)
        }
    }

    function Ct(n, t, r, e) {
        function u() {
            var n, t = c.status;
            if (!t && c.responseText || t >= 200 && 300 > t || 304 === t) {
                try {
                    n = r.call(i, c)
                } catch (e) {
                    return o.error.call(i, e), void 0
                }
                o.load.call(i, n)
            } else o.error.call(i, c)
        }
        var i = {}, o = oa.dispatch("beforesend", "progress", "load", "error"),
            a = {}, c = new XMLHttpRequest,
            l = null;
        return !fa.XDomainRequest || "withCredentials" in c || !/^(http(s)?:)?\/\//.test(n) || (c = new XDomainRequest), "onload" in c ? c.onload = c.onerror = u : c.onreadystatechange = function() {
            c.readyState > 3 && u()
        }, c.onprogress = function(n) {
            var t = oa.event;
            oa.event = n;
            try {
                o.progress.call(i, c)
            } finally {
                oa.event = t
            }
        }, i.header = function(n, t) {
            return n = (n + "").toLowerCase(), arguments.length < 2 ? a[n] : (null == t ? delete a[n] : a[n] = t + "", i)
        }, i.mimeType = function(n) {
            return arguments.length ? (t = null == n ? null : n + "", i) : t
        }, i.responseType = function(n) {
            return arguments.length ? (l = n, i) : l
        }, i.response = function(n) {
            return r = n, i
        }, ["get", "post"].forEach(function(n) {
            i[n] = function() {
                return i.send.apply(i, [n].concat(ca(arguments)))
            }
        }), i.send = function(r, e, u) {
            if (2 === arguments.length && "function" == typeof e && (u = e, e = null), c.open(r, n, !0), null == t || "accept" in a || (a.accept = t + ",*/*"), c.setRequestHeader)
                for (var s in a) c.setRequestHeader(s, a[s]);
            return null != t && c.overrideMimeType && c.overrideMimeType(t), null != l && (c.responseType = l), null != u && i.on("error", u).on("load", function(n) {
                u(null, n)
            }), o.beforesend.call(i, c), c.send(null == e ? null : e), i
        }, i.abort = function() {
            return c.abort(), i
        }, oa.rebind(i, o, "on"), null == e ? i : i.get(Lt(e))
    }

    function Lt(n) {
        return 1 === n.length ? function(t, r) {
            n(null == t ? r : null)
        } : n
    }

    function qt() {
        var n = Tt(),
            t = zt() - n;
        t > 24 ? (isFinite(t) && (clearTimeout(cc), cc = setTimeout(qt, t)), ac = 0) : (ac = 1, sc(qt))
    }

    function Tt() {
        var n = Date.now();
        for (lc = ic; lc;) n >= lc.t && (lc.f = lc.c(n - lc.t)), lc = lc.n;
        return n
    }

    function zt() {
        for (var n, t = ic, r = 1 / 0; t;) t.f ? t = n ? n.n = t.n : ic = t.n : (t.t < r && (r = t.t), t = (n = t).n);
        return oc = n, r
    }

    function Rt(n, t) {
        return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1)
    }

    function Dt(n, t) {
        var r = Math.pow(10, 3 * Ma(8 - t));
        return {
            scale: t > 8 ? function(n) {
                return n / r
            } : function(n) {
                return n * r
            },
            symbol: n
        }
    }

    function Pt(n) {
        var t = n.decimal,
            r = n.thousands,
            e = n.grouping,
            u = n.currency,
            i = e ? function(n) {
                for (var t = n.length, u = [], i = 0, o = e[0]; t > 0 && o > 0;) u.push(n.substring(t -= o, t + o)), o = e[i = (i + 1) % e.length];
                return u.reverse().join(r)
            } : Nt;
        return function(n) {
            var r = hc.exec(n),
                e = r[1] || " ",
                o = r[2] || ">",
                a = r[3] || "",
                c = r[4] || "",
                l = r[5],
                s = +r[6],
                f = r[7],
                h = r[8],
                g = r[9],
                p = 1,
                v = "",
                d = "",
                m = !1;
            switch (h && (h = +h.substring(1)), (l || "0" === e && "=" === o) && (l = e = "0", o = "=", f && (s -= Math.floor((s - 1) / 4))), g) {
                case "n":
                    f = !0, g = "g";
                    break;
                case "%":
                    p = 100, d = "%", g = "f";
                    break;
                case "p":
                    p = 100, d = "%", g = "r";
                    break;
                case "b":
                case "o":
                case "x":
                case "X":
                    "#" === c && (v = "0" + g.toLowerCase());
                case "c":
                case "d":
                    m = !0, h = 0;
                    break;
                case "s":
                    p = -1, g = "r"
            }
            "$" === c && (v = u[0], d = u[1]), "r" != g || h || (g = "g"), null != h && ("g" == g ? h = Math.max(1, Math.min(21, h)) : ("e" == g || "f" == g) && (h = Math.max(0, Math.min(20, h)))), g = gc.get(g) || Ut;
            var y = l && f;
            return function(n) {
                var r = d;
                if (m && n % 1) return "";
                var u = 0 > n || 0 === n && 0 > 1 / n ? (n = -n, "-") : a;
                if (0 > p) {
                    var c = oa.formatPrefix(n, h);
                    n = c.scale(n), r = c.symbol + d
                } else n *= p;
                n = g(n, h);
                var x = n.lastIndexOf("."),
                    M = 0 > x ? n : n.substring(0, x),
                    _ = 0 > x ? "" : t + n.substring(x + 1);
                !l && f && (M = i(M));
                var b = v.length + M.length + _.length + (y ? 0 : u.length),
                    w = s > b ? new Array(b = s - b + 1).join(e) : "";
                return y && (M = i(w + M)), u += v, n = M + _, ("<" === o ? u + n + w : ">" === o ? w + u + n : "^" === o ? w.substring(0, b >>= 1) + u + n + w.substring(b) : u + (y ? n : w + n)) + r
            }
        }
    }

    function Ut(n) {
        return n + ""
    }

    function jt() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }

    function Ht(n, t, r) {
        function e(t) {
            var r = n(t),
                e = i(r, 1);
            return e - t > t - r ? r : e
        }

        function u(r) {
            return t(r = n(new vc(r - 1)), 1), r
        }

        function i(n, r) {
            return t(n = new vc(+n), r), n
        }

        function o(n, e, i) {
            var o = u(n),
                a = [];
            if (i > 1)
                for (; e > o;) r(o) % i || a.push(new Date(+o)), t(o, 1);
            else
                for (; e > o;) a.push(new Date(+o)), t(o, 1);
            return a
        }

        function a(n, t, r) {
            try {
                vc = jt;
                var e = new jt;
                return e._ = n, o(e, t, r)
            } finally {
                vc = Date
            }
        }
        n.floor = n, n.round = e, n.ceil = u, n.offset = i, n.range = o;
        var c = n.utc = Ft(n);
        return c.floor = c, c.round = Ft(e), c.ceil = Ft(u), c.offset = Ft(i), c.range = a, n
    }

    function Ft(n) {
        return function(t, r) {
            try {
                vc = jt;
                var e = new jt;
                return e._ = t, n(e, r)._
            } finally {
                vc = Date
            }
        }
    }

    function Ot(n) {
        function t(n) {
            function t(t) {
                for (var r, u, i, o = [], a = -1, c = 0; ++a < e;) 37 === n.charCodeAt(a) && (o.push(n.substring(c, a)), null != (u = mc[r = n.charAt(++a)]) && (r = n.charAt(++a)), (i = A[r]) && (r = i(t, null == u ? "e" === r ? " " : "0" : u)), o.push(r), c = a + 1);
                return o.push(n.substring(c, a)), o.join("")
            }
            var e = n.length;
            return t.parse = function(t) {
                var e = {
                    y: 1900,
                    m: 0,
                    d: 1,
                    H: 0,
                    M: 0,
                    S: 0,
                    L: 0,
                    Z: null
                }, u = r(e, n, t, 0);
                if (u != t.length) return null;
                "p" in e && (e.H = e.H % 12 + 12 * e.p);
                var i = null != e.Z && vc !== jt,
                    o = new(i ? jt : vc);
                return "j" in e ? o.setFullYear(e.y, 0, e.j) : "w" in e && ("W" in e || "U" in e) ? (o.setFullYear(e.y, 0, 1), o.setFullYear(e.y, 0, "W" in e ? (e.w + 6) % 7 + 7 * e.W - (o.getDay() + 5) % 7 : e.w + 7 * e.U - (o.getDay() + 6) % 7)) : o.setFullYear(e.y, e.m, e.d), o.setHours(e.H + Math.floor(e.Z / 100), e.M + e.Z % 100, e.S, e.L), i ? o._ : o
            }, t.toString = function() {
                return n
            }, t
        }

        function r(n, t, r, e) {
            for (var u, i, o, a = 0, c = t.length, l = r.length; c > a;) {
                if (e >= l) return -1;
                if (u = t.charCodeAt(a++), 37 === u) {
                    if (o = t.charAt(a++), i = C[o in mc ? t.charAt(a++) : o], !i || (e = i(n, r, e)) < 0) return -1
                } else if (u != r.charCodeAt(e++)) return -1
            }
            return e
        }

        function e(n, t, r) {
            b.lastIndex = 0;
            var e = b.exec(t.substring(r));
            return e ? (n.w = w.get(e[0].toLowerCase()), r + e[0].length) : -1
        }

        function u(n, t, r) {
            M.lastIndex = 0;
            var e = M.exec(t.substring(r));
            return e ? (n.w = _.get(e[0].toLowerCase()), r + e[0].length) : -1
        }

        function i(n, t, r) {
            E.lastIndex = 0;
            var e = E.exec(t.substring(r));
            return e ? (n.m = N.get(e[0].toLowerCase()), r + e[0].length) : -1
        }

        function o(n, t, r) {
            S.lastIndex = 0;
            var e = S.exec(t.substring(r));
            return e ? (n.m = k.get(e[0].toLowerCase()), r + e[0].length) : -1
        }

        function a(n, t, e) {
            return r(n, A.c.toString(), t, e)
        }

        function c(n, t, e) {
            return r(n, A.x.toString(), t, e)
        }

        function l(n, t, e) {
            return r(n, A.X.toString(), t, e)
        }

        function s(n, t, r) {
            var e = x.get(t.substring(r, r += 2).toLowerCase());
            return null == e ? -1 : (n.p = e, r)
        }
        var f = n.dateTime,
            h = n.date,
            g = n.time,
            p = n.periods,
            v = n.days,
            d = n.shortDays,
            m = n.months,
            y = n.shortMonths;
        t.utc = function(n) {
            function r(n) {
                try {
                    vc = jt;
                    var t = new vc;
                    return t._ = n, e(t)
                } finally {
                    vc = Date
                }
            }
            var e = t(n);
            return r.parse = function(n) {
                try {
                    vc = jt;
                    var t = e.parse(n);
                    return t && t._
                } finally {
                    vc = Date
                }
            }, r.toString = e.toString, r
        }, t.multi = t.utc.multi = ar;
        var x = oa.map(),
            M = Yt(v),
            _ = Zt(v),
            b = Yt(d),
            w = Zt(d),
            S = Yt(m),
            k = Zt(m),
            E = Yt(y),
            N = Zt(y);
        p.forEach(function(n, t) {
            x.set(n.toLowerCase(), t)
        });
        var A = {
            a: function(n) {
                return d[n.getDay()]
            },
            A: function(n) {
                return v[n.getDay()]
            },
            b: function(n) {
                return y[n.getMonth()]
            },
            B: function(n) {
                return m[n.getMonth()]
            },
            c: t(f),
            d: function(n, t) {
                return It(n.getDate(), t, 2)
            },
            e: function(n, t) {
                return It(n.getDate(), t, 2)
            },
            H: function(n, t) {
                return It(n.getHours(), t, 2)
            },
            I: function(n, t) {
                return It(n.getHours() % 12 || 12, t, 2)
            },
            j: function(n, t) {
                return It(1 + pc.dayOfYear(n), t, 3)
            },
            L: function(n, t) {
                return It(n.getMilliseconds(), t, 3)
            },
            m: function(n, t) {
                return It(n.getMonth() + 1, t, 2)
            },
            M: function(n, t) {
                return It(n.getMinutes(), t, 2)
            },
            p: function(n) {
                return p[+(n.getHours() >= 12)]
            },
            S: function(n, t) {
                return It(n.getSeconds(), t, 2)
            },
            U: function(n, t) {
                return It(pc.sundayOfYear(n), t, 2)
            },
            w: function(n) {
                return n.getDay()
            },
            W: function(n, t) {
                return It(pc.mondayOfYear(n), t, 2)
            },
            x: t(h),
            X: t(g),
            y: function(n, t) {
                return It(n.getFullYear() % 100, t, 2)
            },
            Y: function(n, t) {
                return It(n.getFullYear() % 1e4, t, 4)
            },
            Z: ir,
            "%": function() {
                return "%"
            }
        }, C = {
                a: e,
                A: u,
                b: i,
                B: o,
                c: a,
                d: Qt,
                e: Qt,
                H: tr,
                I: tr,
                j: nr,
                L: ur,
                m: Kt,
                M: rr,
                p: s,
                S: er,
                U: $t,
                w: Vt,
                W: Xt,
                x: c,
                X: l,
                y: Jt,
                Y: Bt,
                Z: Wt,
                "%": or
            };
        return t
    }

    function It(n, t, r) {
        var e = 0 > n ? "-" : "",
            u = (e ? -n : n) + "",
            i = u.length;
        return e + (r > i ? new Array(r - i + 1).join(t) + u : u)
    }

    function Yt(n) {
        return new RegExp("^(?:" + n.map(oa.requote).join("|") + ")", "i")
    }

    function Zt(n) {
        for (var t = new o, r = -1, e = n.length; ++r < e;) t.set(n[r].toLowerCase(), r);
        return t
    }

    function Vt(n, t, r) {
        yc.lastIndex = 0;
        var e = yc.exec(t.substring(r, r + 1));
        return e ? (n.w = +e[0], r + e[0].length) : -1
    }

    function $t(n, t, r) {
        yc.lastIndex = 0;
        var e = yc.exec(t.substring(r));
        return e ? (n.U = +e[0], r + e[0].length) : -1
    }

    function Xt(n, t, r) {
        yc.lastIndex = 0;
        var e = yc.exec(t.substring(r));
        return e ? (n.W = +e[0], r + e[0].length) : -1
    }

    function Bt(n, t, r) {
        yc.lastIndex = 0;
        var e = yc.exec(t.substring(r, r + 4));
        return e ? (n.y = +e[0], r + e[0].length) : -1
    }

    function Jt(n, t, r) {
        yc.lastIndex = 0;
        var e = yc.exec(t.substring(r, r + 2));
        return e ? (n.y = Gt(+e[0]), r + e[0].length) : -1
    }

    function Wt(n, t, r) {
        return /^[+-]\d{4}$/.test(t = t.substring(r, r + 5)) ? (n.Z = +t, r + 5) : -1
    }

    function Gt(n) {
        return n + (n > 68 ? 1900 : 2e3)
    }

    function Kt(n, t, r) {
        yc.lastIndex = 0;
        var e = yc.exec(t.substring(r, r + 2));
        return e ? (n.m = e[0] - 1, r + e[0].length) : -1
    }

    function Qt(n, t, r) {
        yc.lastIndex = 0;
        var e = yc.exec(t.substring(r, r + 2));
        return e ? (n.d = +e[0], r + e[0].length) : -1
    }

    function nr(n, t, r) {
        yc.lastIndex = 0;
        var e = yc.exec(t.substring(r, r + 3));
        return e ? (n.j = +e[0], r + e[0].length) : -1
    }

    function tr(n, t, r) {
        yc.lastIndex = 0;
        var e = yc.exec(t.substring(r, r + 2));
        return e ? (n.H = +e[0], r + e[0].length) : -1
    }

    function rr(n, t, r) {
        yc.lastIndex = 0;
        var e = yc.exec(t.substring(r, r + 2));
        return e ? (n.M = +e[0], r + e[0].length) : -1
    }

    function er(n, t, r) {
        yc.lastIndex = 0;
        var e = yc.exec(t.substring(r, r + 2));
        return e ? (n.S = +e[0], r + e[0].length) : -1
    }

    function ur(n, t, r) {
        yc.lastIndex = 0;
        var e = yc.exec(t.substring(r, r + 3));
        return e ? (n.L = +e[0], r + e[0].length) : -1
    }

    function ir(n) {
        var t = n.getTimezoneOffset(),
            r = t > 0 ? "-" : "+",
            e = ~~ (Ma(t) / 60),
            u = Ma(t) % 60;
        return r + It(e, "0", 2) + It(u, "0", 2)
    }

    function or(n, t, r) {
        xc.lastIndex = 0;
        var e = xc.exec(t.substring(r, r + 1));
        return e ? r + e[0].length : -1
    }

    function ar(n) {
        for (var t = n.length, r = -1; ++r < t;) n[r][0] = this(n[r][0]);
        return function(t) {
            for (var r = 0, e = n[r]; !e[1](t);) e = n[++r];
            return e[0](t)
        }
    }

    function cr() {}

    function lr(n, t, r) {
        var e = r.s = n + t,
            u = e - n,
            i = e - u;
        r.t = n - i + (t - u)
    }

    function sr(n, t) {
        n && wc.hasOwnProperty(n.type) && wc[n.type](n, t)
    }

    function fr(n, t, r) {
        var e, u = -1,
            i = n.length - r;
        for (t.lineStart(); ++u < i;) e = n[u], t.point(e[0], e[1], e[2]);
        t.lineEnd()
    }

    function hr(n, t) {
        var r = -1,
            e = n.length;
        for (t.polygonStart(); ++r < e;) fr(n[r], t, 1);
        t.polygonEnd()
    }

    function gr() {
        function n(n, t) {
            n *= Ia, t = t * Ia / 2 + Ua / 4;
            var r = n - e,
                o = r >= 0 ? 1 : -1,
                a = o * r,
                c = Math.cos(t),
                l = Math.sin(t),
                s = i * l,
                f = u * c + s * Math.cos(a),
                h = s * o * Math.sin(a);
            kc.add(Math.atan2(h, f)), e = n, u = c, i = l
        }
        var t, r, e, u, i;
        Ec.point = function(o, a) {
            Ec.point = n, e = (t = o) * Ia, u = Math.cos(a = (r = a) * Ia / 2 + Ua / 4), i = Math.sin(a)
        }, Ec.lineEnd = function() {
            n(t, r)
        }
    }

    function pr(n) {
        var t = n[0],
            r = n[1],
            e = Math.cos(r);
        return [e * Math.cos(t), e * Math.sin(t), Math.sin(r)]
    }

    function vr(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
    }

    function dr(n, t) {
        return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]
    }

    function mr(n, t) {
        n[0] += t[0], n[1] += t[1], n[2] += t[2]
    }

    function yr(n, t) {
        return [n[0] * t, n[1] * t, n[2] * t]
    }

    function xr(n) {
        var t = Math.sqrt(vr(n, n));
        n[0] /= t, n[1] /= t, n[2] /= t
    }

    function Mr(n, t) {
        var r = t[0] - n[0],
            e = t[1] - n[1],
            u = t[2] - n[2];
        return Oa * Oa > r * r + e * e + u * u
    }

    function _r(n) {
        return [Math.atan2(n[1], n[0]), G(n[2])]
    }

    function br(n, t) {
        return Ma(n[1] - t[1]) < Fa && (Ma(Ma(n[1]) - Ua / 2) < Fa || wr(n[0], t[0]) < Fa)
    }

    function wr(n, t) {
        var r = Ma(t - n);
        return r > Ua ? 2 * Ua - r : r
    }

    function Sr(n, t) {
        n *= Ia;
        var r = Math.cos(t *= Ia);
        kr(r * Math.cos(n), r * Math.sin(n), Math.sin(t))
    }

    function kr(n, t, r) {
        ++Nc, Cc += (n - Cc) / Nc, Lc += (t - Lc) / Nc, qc += (r - qc) / Nc
    }

    function Er() {
        function n(n, u) {
            n *= Ia;
            var i = Math.cos(u *= Ia),
                o = i * Math.cos(n),
                a = i * Math.sin(n),
                c = Math.sin(u),
                l = Math.atan2(Math.sqrt((l = r * c - e * a) * l + (l = e * o - t * c) * l + (l = t * a - r * o) * l), t * o + r * a + e * c);
            Ac += l, Tc += l * (t + (t = o)), zc += l * (r + (r = a)), Rc += l * (e + (e = c)), kr(t, r, e)
        }
        var t, r, e;
        jc.point = function(u, i) {
            u *= Ia;
            var o = Math.cos(i *= Ia);
            t = o * Math.cos(u), r = o * Math.sin(u), e = Math.sin(i), jc.point = n, kr(t, r, e)
        }
    }

    function Nr() {
        jc.point = Sr
    }

    function Ar() {
        function n(n, t) {
            n *= Ia;
            var r = Math.cos(t *= Ia),
                o = r * Math.cos(n),
                a = r * Math.sin(n),
                c = Math.sin(t),
                l = u * c - i * a,
                s = i * o - e * c,
                f = e * a - u * o,
                h = Math.sqrt(l * l + s * s + f * f),
                g = e * o + u * a + i * c,
                p = h && -W(g) / h,
                v = Math.atan2(h, g);
            Dc += p * l, Pc += p * s, Uc += p * f, Ac += v, Tc += v * (e + (e = o)), zc += v * (u + (u = a)), Rc += v * (i + (i = c)), kr(e, u, i)
        }
        var t, r, e, u, i;
        jc.point = function(o, a) {
            t = o, r = a, jc.point = n, o *= Ia;
            var c = Math.cos(a *= Ia);
            e = c * Math.cos(o), u = c * Math.sin(o), i = Math.sin(a), kr(e, u, i)
        }, jc.lineEnd = function() {
            n(t, r), jc.lineEnd = Nr, jc.point = Sr
        }
    }

    function Cr() {
        return !0
    }

    function Lr(n, t, r, e, u) {
        var i = [],
            o = [];
        if (n.forEach(function(n) {
            if (!((t = n.length - 1) <= 0)) {
                var t, r = n[0],
                    e = n[t];
                if (Ma(e[0] - r[0]) < Fa && Ma(e[1] - r[1]) < Fa) {
                    u.lineStart();
                    for (var a = 0; t > a; ++a) u.point((r = n[a])[0], r[1]);
                    return u.lineEnd(), void 0
                }
                var c = new Tr(r, n, null, !0),
                    l = new Tr(r, null, c, !1);
                c.o = l, i.push(c), o.push(l), c = new Tr(e, n, null, !1), l = new Tr(e, null, c, !0), c.o = l, i.push(c), o.push(l)
            }
        }), o.sort(t), qr(i), qr(o), i.length) {
            for (var a = 0, c = r, l = o.length; l > a; ++a) o[a].e = c = !c;
            for (var s, f, h = i[0];;) {
                for (var g = h, p = !0; g.v;)
                    if ((g = g.n) === h) return;
                s = g.z, u.lineStart();
                do {
                    if (g.v = g.o.v = !0, g.e) {
                        if (p)
                            for (var a = 0, l = s.length; l > a; ++a) u.point((f = s[a])[0], f[1]);
                        else e(g.x, g.n.x, 1, u);
                        g = g.n
                    } else {
                        if (p) {
                            s = g.p.z;
                            for (var a = s.length - 1; a >= 0; --a) u.point((f = s[a])[0], f[1])
                        } else e(g.x, g.p.x, -1, u);
                        g = g.p
                    }
                    g = g.o, s = g.z, p = !p
                } while (!g.v);
                u.lineEnd()
            }
        }
    }

    function qr(n) {
        if (t = n.length) {
            for (var t, r, e = 0, u = n[0]; ++e < t;) u.n = r = n[e], r.p = u, u = r;
            u.n = r = n[0], r.p = u
        }
    }

    function Tr(n, t, r, e) {
        this.x = n, this.z = t, this.o = r, this.e = e, this.v = !1, this.n = this.p = null
    }

    function zr(n, t, r, e, u) {
        return function(i, o) {
            function a(t, r) {
                var e = i(t, r);
                n(t = e[0], r = e[1]) && o.point(t, r)
            }

            function c(n, t) {
                var r = i(n, t);
                m.point(r[0], r[1])
            }

            function l() {
                x.point = c, m.lineStart()
            }

            function s() {
                x.point = a, m.lineEnd()
            }

            function f(n, t, r) {
                d.push([n, t]);
                var e = i(n, t);
                _.point(e[0], e[1], r)
            }

            function h() {
                _.lineStart(), d = []
            }

            function g() {
                f(d[0][0], d[0][1], !0), _.lineEnd();
                var n, t = _.clean(),
                    r = M.buffer(),
                    e = r.length;
                if (d.pop(), v.push(d), d = null, e) {
                    if (1 & t) {
                        n = r[0];
                        var u, e = n.length - 1,
                            i = -1;
                        for (o.lineStart(); ++i < e;) o.point((u = n[i])[0], u[1]);
                        return o.lineEnd(), void 0
                    }
                    e > 1 && 2 & t && r.push(r.pop().concat(r.shift())), p.push(r.filter(Rr))
                }
            }
            var p, v, d, m = t(o),
                y = i.invert(e[0], e[1]),
                x = {
                    point: a,
                    lineStart: l,
                    lineEnd: s,
                    polygonStart: function() {
                        x.point = f, x.lineStart = h, x.lineEnd = g, p = [], v = [], o.polygonStart()
                    },
                    polygonEnd: function() {
                        x.point = a, x.lineStart = l, x.lineEnd = s, p = oa.merge(p);
                        var n = Ur(y, v);
                        p.length ? Lr(p, u, n, r, o) : n && (o.lineStart(), r(null, null, 1, o), o.lineEnd()), o.polygonEnd(), p = v = null
                    },
                    sphere: function() {
                        o.polygonStart(), o.lineStart(), r(null, null, 1, o), o.lineEnd(), o.polygonEnd()
                    }
                }, M = Dr(),
                _ = t(M);
            return x
        }
    }

    function Rr(n) {
        return n.length > 1
    }

    function Dr() {
        var n, t = [];
        return {
            lineStart: function() {
                t.push(n = [])
            },
            point: function(t, r, e, u) {
                var i = [t, r];
                arguments.length > 2 && (i.index = e, i.t = u), n.push(i)
            },
            lineEnd: v,
            buffer: function() {
                var r = t;
                return t = [], n = null, r
            },
            rejoin: function() {
                t.length > 1 && t.push(t.pop().concat(t.shift()))
            }
        }
    }

    function Pr(n, t) {
        return ((n = n.x)[0] < 0 ? n[1] - Ha - Fa : Ha - n[1]) - ((t = t.x)[0] < 0 ? t[1] - Ha - Fa : Ha - t[1])
    }

    function Ur(n, t) {
        var r = n[0],
            e = n[1],
            u = [Math.sin(r), -Math.cos(r), 0],
            i = 0,
            o = 0;
        kc.reset();
        for (var a = 0, c = t.length; c > a; ++a) {
            var l = t[a],
                s = l.length;
            if (s)
                for (var f = l[0], h = f[0], g = f[1] / 2 + Ua / 4, p = Math.sin(g), v = Math.cos(g), d = 1;;) {
                    d === s && (d = 0), n = l[d];
                    var m = n[0],
                        y = n[1] / 2 + Ua / 4,
                        x = Math.sin(y),
                        M = Math.cos(y),
                        _ = m - h,
                        b = _ >= 0 ? 1 : -1,
                        w = b * _,
                        S = w > Ua,
                        k = p * x;
                    if (kc.add(Math.atan2(k * b * Math.sin(w), v * M + k * Math.cos(w))), i += S ? _ + b * ja : _, S ^ h >= r ^ m >= r) {
                        var E = dr(pr(f), pr(n));
                        xr(E);
                        var N = dr(u, E);
                        xr(N);
                        var A = (S ^ _ >= 0 ? -1 : 1) * G(N[2]);
                        (e > A || e === A && (E[0] || E[1])) && (o += S ^ _ >= 0 ? 1 : -1)
                    }
                    if (!d++) break;
                    h = m, p = x, v = M, f = n
                }
        }
        return (-Fa > i || Fa > i && 0 > kc) ^ 1 & o
    }

    function jr(n) {
        var t, r = 0 / 0,
            e = 0 / 0,
            u = 0 / 0;
        return {
            lineStart: function() {
                n.lineStart(), t = 1
            },
            point: function(i, o) {
                var a = i > 0 ? Ua - Fa : -Ua,
                    c = Ma(i - r);
                Ma(c - Ua) < Fa ? (n.point(r, e = (e + o) / 2 > 0 ? Ha : -Ha), n.point(u, e), n.lineEnd(), n.lineStart(), n.point(a, e), n.point(i, e), t = 0) : u !== a && c >= Ua && (Ma(r - u) < Fa && (r -= u * Fa), Ma(i - a) < Fa && (i -= a * Fa), e = Hr(r, e, i, o), n.point(u, e), n.lineEnd(), n.lineStart(), n.point(a, e), t = 0), n.point(r = i, e = o), u = a
            },
            lineEnd: function() {
                n.lineEnd(), r = e = 0 / 0
            },
            clean: function() {
                return 2 - t
            }
        }
    }

    function Hr(n, t, r, e) {
        var u, i, o = Math.sin(n - r);
        return Ma(o) > Fa ? Math.atan((Math.sin(t) * (i = Math.cos(e)) * Math.sin(r) - Math.sin(e) * (u = Math.cos(t)) * Math.sin(n)) / (u * i * o)) : (t + e) / 2
    }

    function Fr(n, t, r, e) {
        var u;
        if (null == n) u = r * Ha, e.point(-Ua, u), e.point(0, u), e.point(Ua - Fa, u), e.point(Ua - Fa, 0), e.point(Ua - Fa, -u), e.point(0, -u), e.point(-Ua, -u), e.point(-Ua, 0), e.point(-Ua, u);
        else if (Ma(n[0] - t[0]) > Fa) {
            var i = -Ua,
                o = Ua - Fa,
                a = (n[0] < t[0] ? 1 : -1) * Ua;
            t[0] < n[0] && (i = Ua - Fa, o = -Ua), u = r * a / 2, e.point(i, u), e.point(0, u), e.point(o, u)
        } else e.point(t[0], t[1])
    }

    function Or(n) {
        return Ma(Ma(n) - Ua) > Fa
    }

    function Ir(n) {
        function t(n, t) {
            return Math.cos(n) * Math.cos(t) > i
        }

        function r(n) {
            var r, i, c, l, s;
            return {
                lineStart: function() {
                    l = c = !1, s = 1
                },
                point: function(f, h) {
                    var g, p = [f, h],
                        v = t(f, h),
                        d = o ? v ? 0 : u(f, h) : v ? u(f + (0 > f ? Ua : -Ua), h) : 0;
                    if (!r && (l = c = v) && n.lineStart(), v !== c && (g = e(r, p), (br(r, g) || br(p, g)) && (p[0] += Fa, p[1] += Fa, v = t(p[0], p[1]))), v !== c) s = 0, v ? (n.lineStart(), g = e(p, r), n.point(g[0], g[1])) : (g = e(r, p), n.point(g[0], g[1]), n.lineEnd()), r = g;
                    else if (a && r && o ^ v) {
                        var m;
                        d & i || !(m = e(p, r, !0)) || (s = 0, o ? (n.lineStart(), n.point(m[0][0], m[0][1]), n.point(m[1][0], m[1][1]), n.lineEnd()) : (n.point(m[1][0], m[1][1]), n.lineEnd(), n.lineStart(), n.point(m[0][0], m[0][1])))
                    }!v || r && br(r, p) || n.point(p[0], p[1]), r = p, c = v, i = d
                },
                lineEnd: function() {
                    c && n.lineEnd(), r = null
                },
                clean: function() {
                    return s | (l && c) << 1
                }
            }
        }

        function e(n, t, r) {
            var e = pr(n),
                u = pr(t),
                o = [1, 0, 0],
                a = dr(e, u),
                c = vr(a, a),
                l = a[0],
                s = c - l * l;
            if (!s) return !r && n;
            var f = i * c / s,
                h = -i * l / s,
                g = dr(o, a),
                p = yr(o, f),
                v = yr(a, h);
            mr(p, v);
            var d = g,
                m = vr(p, d),
                y = vr(d, d),
                x = m * m - y * (vr(p, p) - 1);
            if (!(0 > x)) {
                var M = Math.sqrt(x),
                    _ = yr(d, (-m - M) / y);
                if (mr(_, p), _ = _r(_), !r) return _;
                var b, w = n[0],
                    S = t[0],
                    k = n[1],
                    E = t[1];
                w > S && (b = w, w = S, S = b);
                var N = S - w,
                    A = Ma(N - Ua) < Fa,
                    C = A || Fa > N;
                if (!A && k > E && (b = k, k = E, E = b), C ? A ? k + E > 0 ^ _[1] < (Ma(_[0] - w) < Fa ? k : E) : k <= _[1] && _[1] <= E : N > Ua ^ (w <= _[0] && _[0] <= S)) {
                    var L = yr(d, (-m + M) / y);
                    return mr(L, p), [_, _r(L)]
                }
            }
        }

        function u(t, r) {
            var e = o ? n : Ua - n,
                u = 0;
            return -e > t ? u |= 1 : t > e && (u |= 2), -e > r ? u |= 4 : r > e && (u |= 8), u
        }
        var i = Math.cos(n),
            o = i > 0,
            a = Ma(i) > Fa,
            c = be(n, 6 * Ia);
        return zr(t, r, c, o ? [0, -n] : [-Ua, n - Ua], Pr)
    }

    function Yr(n, t, r, e) {
        return function(u) {
            var i, o = u.a,
                a = u.b,
                c = o.x,
                l = o.y,
                s = a.x,
                f = a.y,
                h = 0,
                g = 1,
                p = s - c,
                v = f - l;
            if (i = n - c, p || !(i > 0)) {
                if (i /= p, 0 > p) {
                    if (h > i) return;
                    g > i && (g = i)
                } else if (p > 0) {
                    if (i > g) return;
                    i > h && (h = i)
                }
                if (i = r - c, p || !(0 > i)) {
                    if (i /= p, 0 > p) {
                        if (i > g) return;
                        i > h && (h = i)
                    } else if (p > 0) {
                        if (h > i) return;
                        g > i && (g = i)
                    }
                    if (i = t - l, v || !(i > 0)) {
                        if (i /= v, 0 > v) {
                            if (h > i) return;
                            g > i && (g = i)
                        } else if (v > 0) {
                            if (i > g) return;
                            i > h && (h = i)
                        }
                        if (i = e - l, v || !(0 > i)) {
                            if (i /= v, 0 > v) {
                                if (i > g) return;
                                i > h && (h = i)
                            } else if (v > 0) {
                                if (h > i) return;
                                g > i && (g = i)
                            }
                            return h > 0 && (u.a = {
                                x: c + h * p,
                                y: l + h * v
                            }), 1 > g && (u.b = {
                                x: c + g * p,
                                y: l + g * v
                            }), u
                        }
                    }
                }
            }
        }
    }

    function Zr(n, t, r, e) {
        function u(e, u) {
            return Ma(e[0] - n) < Fa ? u > 0 ? 0 : 3 : Ma(e[0] - r) < Fa ? u > 0 ? 2 : 1 : Ma(e[1] - t) < Fa ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2
        }

        function i(n, t) {
            return o(n.x, t.x)
        }

        function o(n, t) {
            var r = u(n, 1),
                e = u(t, 1);
            return r !== e ? r - e : 0 === r ? t[1] - n[1] : 1 === r ? n[0] - t[0] : 2 === r ? n[1] - t[1] : t[0] - n[0]
        }
        return function(a) {
            function c(n) {
                for (var t = 0, r = d.length, e = n[1], u = 0; r > u; ++u)
                    for (var i, o = 1, a = d[u], c = a.length, l = a[0]; c > o; ++o) i = a[o], l[1] <= e ? i[1] > e && J(l, i, n) > 0 && ++t : i[1] <= e && J(l, i, n) < 0 && --t, l = i;
                return 0 !== t
            }

            function l(i, a, c, l) {
                var s = 0,
                    f = 0;
                if (null == i || (s = u(i, c)) !== (f = u(a, c)) || o(i, a) < 0 ^ c > 0) {
                    do l.point(0 === s || 3 === s ? n : r, s > 1 ? e : t); while ((s = (s + c + 4) % 4) !== f)
                } else l.point(a[0], a[1])
            }

            function s(u, i) {
                return u >= n && r >= u && i >= t && e >= i
            }

            function f(n, t) {
                s(n, t) && a.point(n, t)
            }

            function h() {
                C.point = p, d && d.push(m = []), S = !0, w = !1, _ = b = 0 / 0
            }

            function g() {
                v && (p(y, x), M && w && N.rejoin(), v.push(N.buffer())), C.point = f, w && a.lineEnd()
            }

            function p(n, t) {
                n = Math.max(-Fc, Math.min(Fc, n)), t = Math.max(-Fc, Math.min(Fc, t));
                var r = s(n, t);
                if (d && m.push([n, t]), S) y = n, x = t, M = r, S = !1, r && (a.lineStart(), a.point(n, t));
                else if (r && w) a.point(n, t);
                else {
                    var e = {
                        a: {
                            x: _,
                            y: b
                        },
                        b: {
                            x: n,
                            y: t
                        }
                    };
                    A(e) ? (w || (a.lineStart(), a.point(e.a.x, e.a.y)), a.point(e.b.x, e.b.y), r || a.lineEnd(), k = !1) : r && (a.lineStart(), a.point(n, t), k = !1)
                }
                _ = n, b = t, w = r
            }
            var v, d, m, y, x, M, _, b, w, S, k, E = a,
                N = Dr(),
                A = Yr(n, t, r, e),
                C = {
                    point: f,
                    lineStart: h,
                    lineEnd: g,
                    polygonStart: function() {
                        a = N, v = [], d = [], k = !0
                    },
                    polygonEnd: function() {
                        a = E, v = oa.merge(v);
                        var t = c([n, e]),
                            r = k && t,
                            u = v.length;
                        (r || u) && (a.polygonStart(), r && (a.lineStart(), l(null, null, 1, a), a.lineEnd()), u && Lr(v, i, t, l, a), a.polygonEnd()), v = d = m = null
                    }
                };
            return C
        }
    }

    function Vr(n, t) {
        this.from = n, this.to = t, this.normal = dr(n, t), this.fromNormal = dr(this.normal, n), this.toNormal = dr(this.normal, t)
    }

    function $r(n, t) {
        var r = dr(n.normal, t.normal);
        xr(r);
        var e = vr(r, n.fromNormal),
            u = vr(r, n.toNormal),
            i = vr(r, t.fromNormal),
            o = vr(r, t.toNormal);
        return e > -Oa && Oa > u && i > -Oa && Oa > o ? r : Oa > e && u > -Oa && Oa > i && o > -Oa ? (r[0] = -r[0], r[1] = -r[1], r[2] = -r[2], r) : void 0
    }

    function Xr(n, t) {
        var r = vr(n, t.fromNormal),
            e = vr(n, t.toNormal);
        return n = vr(n, t.normal), Math.abs(n) < Oa && (r > -Oa && Oa > e || Oa > r && e > -Oa)
    }

    function Br(n) {
        function t(t, r) {
            return Ur([t, r], n)
        }

        function r(n) {
            var r, e, i, o, a, c;
            return {
                lineStart: function() {
                    r = null, c = 1
                },
                point: function(l, s, f) {
                    f && (l = e, s = i);
                    var h = pr([l, s]),
                        g = a;
                    if (r) {
                        for (var p = new Vr(r, h), v = [], d = 0, m = 100; d < u.length && m > 0; ++d) {
                            var y = u[d],
                                x = $r(p, y);
                            if (x) {
                                if (x === Oc || Mr(x, r) || Mr(x, h) || Mr(x, y.from) || Mr(x, y.to)) {
                                    var M = 1e-4;
                                    l = (l + 3 * Ua + (Math.random() < .5 ? M : -M)) % (2 * Ua) - Ua, s = Math.min(Ua / 2 - 1e-4, Math.max(1e-4 - Ua / 2, s + (Math.random() < .5 ? M : -M))), p = new Vr(r, h = pr([l, s])), d = -1, --m, v.length = 0;
                                    continue
                                }
                                var _ = _r(x);
                                x.distance = Wr(r, x), x.index = d, x.t = Wr(y.from, x), x[0] = _[0], x[1] = _[1], x.pop(), v.push(x)
                            }
                        }
                        if (v.length) {
                            c = 0, v.sort(function(n, t) {
                                return n.distance - t.distance
                            });
                            for (var d = 0; d < v.length; ++d) {
                                var x = v[d];
                                (g = !g) ? (n.lineStart(), n.point(x[0], x[1], x.index, x.t)) : (n.point(x[0], x[1], x.index, x.t), n.lineEnd())
                            }
                        }
                        g && n.point(l, s)
                    } else {
                        for (var d = 0, m = 100; d < u.length && m > 0; ++d) {
                            var y = u[d];
                            if (Xr(h, y)) {
                                var M = 1e-4;
                                l = (l + 3 * Ua + (Math.random() < .5 ? M : -M)) % (2 * Ua) - Ua, s = Math.min(Ua / 2 - 1e-4, Math.max(1e-4 - Ua / 2, s + (Math.random() < .5 ? M : -M))), h = pr([l, s]), d = -1, --m
                            }
                        }(o = g = t(e = l, i = s)) && (n.lineStart(), n.point(l, s))
                    }
                    r = h, a = g
                },
                lineEnd: function() {
                    a && n.lineEnd()
                },
                clean: function() {
                    return c | (o && a) << 1
                }
            }
        }

        function e(t, r, e, i) {
            if (null == t) {
                var o = n.length;
                n.forEach(function(n, t) {
                    n.forEach(function(n) {
                        i.point(n[0], n[1])
                    }), o - 1 > t && (i.lineEnd(), i.lineStart())
                })
            } else if (t.index !== r.index && null != t.index && null != r.index)
                for (var a = t.index; a !== r.index; a = (a + e + u.length) % u.length) {
                    var c = u[a],
                        l = _r(e > 0 ? c.to : c.from);
                    i.point(l[0], l[1])
                }
        }
        var u = [];
        return n = n.map(function(n) {
            var t;
            return n = n.map(function(n, r) {
                var e = pr(n = [n[0] * Ia, n[1] * Ia]);
                return r && u.push(new Vr(t, e)), t = e, n
            }), n.pop(), n
        }), zr(t, r, e, n[0][0], Jr)
    }

    function Jr(n, t) {
        return n = n.x, t = t.x, n.index - t.index || n.t - t.t
    }

    function Wr(n, t) {
        var r = dr(n, t);
        return Math.atan2(Math.sqrt(vr(r, r)), vr(n, t))
    }

    function Gr(n, t) {
        function r(r, e) {
            return r = n(r, e), t(r[0], r[1])
        }
        return n.invert && t.invert && (r.invert = function(r, e) {
            return r = t.invert(r, e), r && n.invert(r[0], r[1])
        }), r
    }

    function Kr(n) {
        var t = 0,
            r = Ua / 3,
            e = pe(n),
            u = e(t, r);
        return u.parallels = function(n) {
            return arguments.length ? e(t = n[0] * Ua / 180, r = n[1] * Ua / 180) : [180 * (t / Ua), 180 * (r / Ua)]
        }, u
    }

    function Qr(n, t) {
        function r(n, t) {
            var r = Math.sqrt(i - 2 * u * Math.sin(t)) / u;
            return [r * Math.sin(n *= u), o - r * Math.cos(n)]
        }
        var e = Math.sin(n),
            u = (e + Math.sin(t)) / 2,
            i = 1 + e * (2 * u - e),
            o = Math.sqrt(i) / u;
        return r.invert = function(n, t) {
            var r = o - t;
            return [Math.atan2(n, r) / u, G((i - (n * n + r * r) * u * u) / (2 * u))]
        }, r
    }

    function ne() {
        function n(n, t) {
            Yc += u * n - e * t, e = n, u = t
        }
        var t, r, e, u;
        Bc.point = function(i, o) {
            Bc.point = n, t = e = i, r = u = o
        }, Bc.lineEnd = function() {
            n(t, r)
        }
    }

    function te(n, t) {
        Zc > n && (Zc = n), n > $c && ($c = n), Vc > t && (Vc = t), t > Xc && (Xc = t)
    }

    function re() {
        function n(n, t) {
            o.push("M", n, ",", t, i)
        }

        function t(n, t) {
            o.push("M", n, ",", t), a.point = r
        }

        function r(n, t) {
            o.push("L", n, ",", t)
        }

        function e() {
            a.point = n
        }

        function u() {
            o.push("Z")
        }
        var i = ee(4.5),
            o = [],
            a = {
                point: n,
                lineStart: function() {
                    a.point = t
                },
                lineEnd: e,
                polygonStart: function() {
                    a.lineEnd = u
                },
                polygonEnd: function() {
                    a.lineEnd = e, a.point = n
                },
                pointRadius: function(n) {
                    return i = ee(n), a
                },
                result: function() {
                    if (o.length) {
                        var n = o.join("");
                        return o = [], n
                    }
                }
            };
        return a
    }

    function ee(n) {
        return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z"
    }

    function ue(n, t) {
        Cc += n, Lc += t, ++qc
    }

    function ie() {
        function n(n, e) {
            var u = n - t,
                i = e - r,
                o = Math.sqrt(u * u + i * i);
            Tc += o * (t + n) / 2, zc += o * (r + e) / 2, Rc += o, ue(t = n, r = e)
        }
        var t, r;
        Wc.point = function(e, u) {
            Wc.point = n, ue(t = e, r = u)
        }
    }

    function oe() {
        Wc.point = ue
    }

    function ae() {
        function n(n, t) {
            var r = n - e,
                i = t - u,
                o = Math.sqrt(r * r + i * i);
            Tc += o * (e + n) / 2, zc += o * (u + t) / 2, Rc += o, o = u * n - e * t, Dc += o * (e + n), Pc += o * (u + t), Uc += 3 * o, ue(e = n, u = t)
        }
        var t, r, e, u;
        Wc.point = function(i, o) {
            Wc.point = n, ue(t = e = i, r = u = o)
        }, Wc.lineEnd = function() {
            n(t, r)
        }
    }

    function ce(n) {
        function t(t, r) {
            n.moveTo(t, r), n.arc(t, r, o, 0, ja)
        }

        function r(t, r) {
            n.moveTo(t, r), a.point = e
        }

        function e(t, r) {
            n.lineTo(t, r)
        }

        function u() {
            a.point = t
        }

        function i() {
            n.closePath()
        }
        var o = 4.5,
            a = {
                point: t,
                lineStart: function() {
                    a.point = r
                },
                lineEnd: u,
                polygonStart: function() {
                    a.lineEnd = i
                },
                polygonEnd: function() {
                    a.lineEnd = u, a.point = t
                },
                pointRadius: function(n) {
                    return o = n, a
                },
                result: v
            };
        return a
    }

    function le(n) {
        function t(n) {
            return (a ? e : r)(n)
        }

        function r(t) {
            return he(t, function(r, e) {
                r = n(r, e), t.point(r[0], r[1])
            })
        }

        function e(t) {
            function r(r, e) {
                r = n(r, e), t.point(r[0], r[1])
            }

            function e() {
                x = 0 / 0, S.point = i, t.lineStart()
            }

            function i(r, e) {
                var i = pr([r, e]),
                    o = n(r, e);
                u(x, M, y, _, b, w, x = o[0], M = o[1], y = r, _ = i[0], b = i[1], w = i[2], a, t), t.point(x, M)
            }

            function o() {
                S.point = r, t.lineEnd()
            }

            function c() {
                e(), S.point = l, S.lineEnd = s
            }

            function l(n, t) {
                i(f = n, h = t), g = x, p = M, v = _, d = b, m = w, S.point = i
            }

            function s() {
                u(x, M, y, _, b, w, g, p, f, v, d, m, a, t), S.lineEnd = o, o()
            }
            var f, h, g, p, v, d, m, y, x, M, _, b, w, S = {
                    point: r,
                    lineStart: e,
                    lineEnd: o,
                    polygonStart: function() {
                        t.polygonStart(), S.lineStart = c
                    },
                    polygonEnd: function() {
                        t.polygonEnd(), S.lineStart = e
                    }
                };
            return S
        }

        function u(t, r, e, a, c, l, s, f, h, g, p, v, d, m) {
            var y = s - t,
                x = f - r,
                M = y * y + x * x;
            if (M > 4 * i && d--) {
                var _ = a + g,
                    b = c + p,
                    w = l + v,
                    S = Math.sqrt(_ * _ + b * b + w * w),
                    k = Math.asin(w /= S),
                    E = Ma(Ma(w) - 1) < Fa || Ma(e - h) < Fa ? (e + h) / 2 : Math.atan2(b, _),
                    N = n(E, k),
                    A = N[0],
                    C = N[1],
                    L = A - t,
                    q = C - r,
                    T = x * L - y * q;
                (T * T / M > i || Ma((y * L + x * q) / M - .5) > .3 || o > a * g + c * p + l * v) && (u(t, r, e, a, c, l, A, C, E, _ /= S, b /= S, w, d, m), m.point(A, C), u(A, C, E, _, b, w, s, f, h, g, p, v, d, m))
            }
        }
        var i = .5,
            o = Math.cos(30 * Ia),
            a = 16;
        return t.precision = function(n) {
            return arguments.length ? (a = (i = n * n) > 0 && 16, t) : Math.sqrt(i)
        }, t
    }

    function se(n) {
        var t = le(function(t, r) {
            return n([t * Ya, r * Ya])
        });
        return function(n) {
            return ve(t(n))
        }
    }

    function fe(n) {
        this.stream = n
    }

    function he(n, t) {
        return {
            point: t,
            sphere: function() {
                n.sphere()
            },
            lineStart: function() {
                n.lineStart()
            },
            lineEnd: function() {
                n.lineEnd()
            },
            polygonStart: function() {
                n.polygonStart()
            },
            polygonEnd: function() {
                n.polygonEnd()
            }
        }
    }

    function ge(n) {
        return pe(function() {
            return n
        })()
    }

    function pe(n) {
        function t(n) {
            return n = a(n[0] * Ia, n[1] * Ia), [n[0] * h + c, l - n[1] * h]
        }

        function r(n) {
            return n = a.invert((n[0] - c) / h, (l - n[1]) / h), n && [n[0] * Ya, n[1] * Ya]
        }

        function e() {
            a = Gr(o = ye(m, y, x), i);
            var n = i(v, d);
            return c = g - n[0] * h, l = p + n[1] * h, u()
        }

        function u() {
            return s && (s.valid = !1, s = null), t
        }
        var i, o, a, c, l, s, f = le(function(n, t) {
                return n = i(n, t), [n[0] * h + c, l - n[1] * h]
            }),
            h = 150,
            g = 480,
            p = 250,
            v = 0,
            d = 0,
            m = 0,
            y = 0,
            x = 0,
            M = Hc,
            _ = Nt,
            b = null,
            w = null,
            S = null;
        return t.stream = function(n) {
            return s && (s.valid = !1), s = ve(M(o, f(_(n)))), s.valid = !0, s
        }, t.clipAngle = function(n) {
            return arguments.length ? (M = null == n ? (b = n, Hc) : Ir((b = +n) * Ia), u()) : b
        }, t.clipExtent = function(n) {
            return arguments.length ? (S = n, _ = n ? Zr(n[0][0], n[0][1], n[1][0], n[1][1]) : Nt, u()) : S
        }, t.scale = function(n) {
            return arguments.length ? (h = +n, e()) : h
        }, t.translate = function(n) {
            return arguments.length ? (g = +n[0], p = +n[1], e()) : [g, p]
        }, t.center = function(n) {
            return arguments.length ? (v = n[0] % 360 * Ia, d = n[1] % 360 * Ia, e()) : [v * Ya, d * Ya]
        }, t.rotate = function(n) {
            return arguments.length ? (m = n[0] % 360 * Ia, y = n[1] % 360 * Ia, x = n.length > 2 ? n[2] % 360 * Ia : 0, e()) : [m * Ya, y * Ya, x * Ya]
        }, oa.rebind(t, f, "precision"), t.clipPolygon = function(n) {
            return arguments.length ? (b = null, w = n, M = null == n ? Hc : Br(n), e()) : w
        },
        function() {
            return i = n.apply(this, arguments), t.invert = i.invert && r, e()
        }
    }

    function ve(n) {
        return he(n, function(t, r) {
            n.point(t * Ia, r * Ia)
        })
    }

    function de(n, t) {
        return [n, t]
    }

    function me(n, t) {
        return [n > Ua ? n - ja : -Ua > n ? n + ja : n, t]
    }

    function ye(n, t, r) {
        return n ? t || r ? Gr(Me(n), _e(t, r)) : Me(n) : t || r ? _e(t, r) : me
    }

    function xe(n) {
        return function(t, r) {
            return t += n, [t > Ua ? t - ja : -Ua > t ? t + ja : t, r]
        }
    }

    function Me(n) {
        var t = xe(n);
        return t.invert = xe(-n), t
    }

    function _e(n, t) {
        function r(n, t) {
            var r = Math.cos(t),
                a = Math.cos(n) * r,
                c = Math.sin(n) * r,
                l = Math.sin(t),
                s = l * e + a * u;
            return [Math.atan2(c * i - s * o, a * e - l * u), G(s * i + c * o)]
        }
        var e = Math.cos(n),
            u = Math.sin(n),
            i = Math.cos(t),
            o = Math.sin(t);
        return r.invert = function(n, t) {
            var r = Math.cos(t),
                a = Math.cos(n) * r,
                c = Math.sin(n) * r,
                l = Math.sin(t),
                s = l * i - c * o;
            return [Math.atan2(c * i + l * o, a * e + s * u), G(s * e - a * u)]
        }, r
    }

    function be(n, t) {
        var r = Math.cos(n),
            e = Math.sin(n);
        return function(u, i, o, a) {
            var c = o * t;
            null != u ? (u = we(r, u), i = we(r, i), (o > 0 ? i > u : u > i) && (u += o * ja)) : (u = n + o * ja, i = n - .5 * c);
            for (var l, s = u; o > 0 ? s > i : i > s; s -= c) a.point((l = _r([r, -e * Math.cos(s), -e * Math.sin(s)]))[0], l[1])
        }
    }

    function we(n, t) {
        var r = pr(t);
        r[0] -= n, xr(r);
        var e = W(-r[1]);
        return ((-r[2] < 0 ? -e : e) + 2 * Math.PI - Fa) % (2 * Math.PI)
    }

    function Se(n, t, r) {
        var e = oa.range(n, t - Fa, r).concat(t);
        return function(n) {
            return e.map(function(t) {
                return [n, t]
            })
        }
    }

    function ke(n, t, r) {
        var e = oa.range(n, t - Fa, r).concat(t);
        return function(n) {
            return e.map(function(t) {
                return [t, n]
            })
        }
    }

    function Ee(n) {
        return n.source
    }

    function Ne(n) {
        return n.target
    }

    function Ae(n, t, r, e) {
        var u = Math.cos(t),
            i = Math.sin(t),
            o = Math.cos(e),
            a = Math.sin(e),
            c = u * Math.cos(n),
            l = u * Math.sin(n),
            s = o * Math.cos(r),
            f = o * Math.sin(r),
            h = 2 * Math.asin(Math.sqrt(tt(e - t) + u * o * tt(r - n))),
            g = 1 / Math.sin(h),
            p = h ? function(n) {
                var t = Math.sin(n *= h) * g,
                    r = Math.sin(h - n) * g,
                    e = r * c + t * s,
                    u = r * l + t * f,
                    o = r * i + t * a;
                return [Math.atan2(u, e) * Ya, Math.atan2(o, Math.sqrt(e * e + u * u)) * Ya]
            } : function() {
                return [n * Ya, t * Ya]
            };
        return p.distance = h, p
    }

    function Ce() {
        function n(n, u) {
            var i = Math.sin(u *= Ia),
                o = Math.cos(u),
                a = Ma((n *= Ia) - t),
                c = Math.cos(a);
            Gc += Math.atan2(Math.sqrt((a = o * Math.sin(a)) * a + (a = e * i - r * o * c) * a), r * i + e * o * c), t = n, r = i, e = o
        }
        var t, r, e;
        Kc.point = function(u, i) {
            t = u * Ia, r = Math.sin(i *= Ia), e = Math.cos(i), Kc.point = n
        }, Kc.lineEnd = function() {
            Kc.point = Kc.lineEnd = v
        }
    }

    function Le(n, t) {
        function r(t, r) {
            var e = Math.cos(t),
                u = Math.cos(r),
                i = n(e * u);
            return [i * u * Math.sin(t), i * Math.sin(r)]
        }
        return r.invert = function(n, r) {
            var e = Math.sqrt(n * n + r * r),
                u = t(e),
                i = Math.sin(u),
                o = Math.cos(u);
            return [Math.atan2(n * i, e * o), Math.asin(e && r * i / e)]
        }, r
    }

    function qe(n, t) {
        function r(n, t) {
            o > 0 ? -Ha + Fa > t && (t = -Ha + Fa) : t > Ha - Fa && (t = Ha - Fa);
            var r = o / Math.pow(u(t), i);
            return [r * Math.sin(i * n), o - r * Math.cos(i * n)]
        }
        var e = Math.cos(n),
            u = function(n) {
                return Math.tan(Ua / 4 + n / 2)
            }, i = n === t ? Math.sin(n) : Math.log(e / Math.cos(t)) / Math.log(u(t) / u(n)),
            o = e * Math.pow(u(n), i) / i;
        return i ? (r.invert = function(n, t) {
            var r = o - t,
                e = B(i) * Math.sqrt(n * n + r * r);
            return [Math.atan2(n, r) / i, 2 * Math.atan(Math.pow(o / e, 1 / i)) - Ha]
        }, r) : ze
    }

    function Te(n, t) {
        function r(n, t) {
            var r = i - t;
            return [r * Math.sin(u * n), i - r * Math.cos(u * n)]
        }
        var e = Math.cos(n),
            u = n === t ? Math.sin(n) : (e - Math.cos(t)) / (t - n),
            i = e / u + n;
        return Ma(u) < Fa ? de : (r.invert = function(n, t) {
            var r = i - t;
            return [Math.atan2(n, r) / u, i - B(u) * Math.sqrt(n * n + r * r)]
        }, r)
    }

    function ze(n, t) {
        return [n, Math.log(Math.tan(Ua / 4 + t / 2))]
    }

    function Re(n) {
        var t, r = ge(n),
            e = r.scale,
            u = r.translate,
            i = r.clipExtent;
        return r.scale = function() {
            var n = e.apply(r, arguments);
            return n === r ? t ? r.clipExtent(null) : r : n
        }, r.translate = function() {
            var n = u.apply(r, arguments);
            return n === r ? t ? r.clipExtent(null) : r : n
        }, r.clipExtent = function(n) {
            var o = i.apply(r, arguments);
            if (o === r) {
                if (t = null == n) {
                    var a = Ua * e(),
                        c = u();
                    i([
                        [c[0] - a, c[1] - a],
                        [c[0] + a, c[1] + a]
                    ])
                }
            } else t && (o = null);
            return o
        }, r.clipExtent(null)
    }

    function De(n, t) {
        return [Math.log(Math.tan(Ua / 4 + t / 2)), -n]
    }

    function Pe(n) {
        return n[0]
    }

    function Ue(n) {
        return n[1]
    }

    function je(n) {
        for (var t = n.length, r = [0, 1], e = 2, u = 2; t > u; u++) {
            for (; e > 1 && J(n[r[e - 2]], n[r[e - 1]], n[u]) <= 0;)--e;
            r[e++] = u
        }
        return r.slice(0, e)
    }

    function He(n, t) {
        return n[0] - t[0] || n[1] - t[1]
    }

    function Fe(n, t, r) {
        return (r[0] - t[0]) * (n[1] - t[1]) < (r[1] - t[1]) * (n[0] - t[0])
    }

    function Oe(n, t, r, e) {
        var u = n[0],
            i = r[0],
            o = t[0] - u,
            a = e[0] - i,
            c = n[1],
            l = r[1],
            s = t[1] - c,
            f = e[1] - l,
            h = (a * (c - l) - f * (u - i)) / (f * o - a * s);
        return [u + h * o, c + h * s]
    }

    function Ie(n) {
        var t = n[0],
            r = n[n.length - 1];
        return !(t[0] - r[0] || t[1] - r[1])
    }

    function Ye() {
        su(this), this.edge = this.site = this.circle = null
    }

    function Ze(n) {
        var t = sl.pop() || new Ye;
        return t.site = n, t
    }

    function Ve(n) {
        tu(n), al.remove(n), sl.push(n), su(n)
    }

    function $e(n) {
        var t = n.circle,
            r = t.x,
            e = t.cy,
            u = {
                x: r,
                y: e
            }, i = n.P,
            o = n.N,
            a = [n];
        Ve(n);
        for (var c = i; c.circle && Ma(r - c.circle.x) < Fa && Ma(e - c.circle.cy) < Fa;) i = c.P, a.unshift(c), Ve(c), c = i;
        a.unshift(c), tu(c);
        for (var l = o; l.circle && Ma(r - l.circle.x) < Fa && Ma(e - l.circle.cy) < Fa;) o = l.N, a.push(l), Ve(l), l = o;
        a.push(l), tu(l);
        var s, f = a.length;
        for (s = 1; f > s; ++s) l = a[s], c = a[s - 1], au(l.edge, c.site, l.site, u);
        c = a[0], l = a[f - 1], l.edge = iu(c.site, l.site, null, u), nu(c), nu(l)
    }

    function Xe(n) {
        for (var t, r, e, u, i = n.x, o = n.y, a = al._; a;)
            if (e = Be(a, o) - i, e > Fa) a = a.L;
            else {
                if (u = i - Je(a, o), !(u > Fa)) {
                    e > -Fa ? (t = a.P, r = a) : u > -Fa ? (t = a, r = a.N) : t = r = a;
                    break
                }
                if (!a.R) {
                    t = a;
                    break
                }
                a = a.R
            }
        var c = Ze(n);
        if (al.insert(t, c), t || r) {
            if (t === r) return tu(t), r = Ze(t.site), al.insert(c, r), c.edge = r.edge = iu(t.site, c.site), nu(t), nu(r), void 0;
            if (!r) return c.edge = iu(t.site, c.site), void 0;
            tu(t), tu(r);
            var l = t.site,
                s = l.x,
                f = l.y,
                h = n.x - s,
                g = n.y - f,
                p = r.site,
                v = p.x - s,
                d = p.y - f,
                m = 2 * (h * d - g * v),
                y = h * h + g * g,
                x = v * v + d * d,
                M = {
                    x: (d * y - g * x) / m + s,
                    y: (h * x - v * y) / m + f
                };
            au(r.edge, l, p, M), c.edge = iu(l, n, null, M), r.edge = iu(n, p, null, M), nu(t), nu(r)
        }
    }

    function Be(n, t) {
        var r = n.site,
            e = r.x,
            u = r.y,
            i = u - t;
        if (!i) return e;
        var o = n.P;
        if (!o) return -1 / 0;
        r = o.site;
        var a = r.x,
            c = r.y,
            l = c - t;
        if (!l) return a;
        var s = a - e,
            f = 1 / i - 1 / l,
            h = s / l;
        return f ? (-h + Math.sqrt(h * h - 2 * f * (s * s / (-2 * l) - c + l / 2 + u - i / 2))) / f + e : (e + a) / 2
    }

    function Je(n, t) {
        var r = n.N;
        if (r) return Be(r, t);
        var e = n.site;
        return e.y === t ? e.x : 1 / 0
    }

    function We(n) {
        this.site = n, this.edges = []
    }

    function Ge(n) {
        for (var t, r, e, u, i, o, a, c, l, s, f = n[0][0], h = n[1][0], g = n[0][1], p = n[1][1], v = ol, d = v.length; d--;)
            if (i = v[d], i && i.prepare())
                for (a = i.edges, c = a.length, o = 0; c > o;) s = a[o].end(), e = s.x, u = s.y, l = a[++o % c].start(), t = l.x, r = l.y, (Ma(e - t) > Fa || Ma(u - r) > Fa) && (a.splice(o, 0, new cu(ou(i.site, s, Ma(e - f) < Fa && p - u > Fa ? {
                    x: f,
                    y: Ma(t - f) < Fa ? r : p
                } : Ma(u - p) < Fa && h - e > Fa ? {
                    x: Ma(r - p) < Fa ? t : h,
                    y: p
                } : Ma(e - h) < Fa && u - g > Fa ? {
                    x: h,
                    y: Ma(t - h) < Fa ? r : g
                } : Ma(u - g) < Fa && e - f > Fa ? {
                    x: Ma(r - g) < Fa ? t : f,
                    y: g
                } : null), i.site, null)), ++c)
    }

    function Ke(n, t) {
        return t.angle - n.angle
    }

    function Qe() {
        su(this), this.x = this.y = this.arc = this.site = this.cy = null
    }

    function nu(n) {
        var t = n.P,
            r = n.N;
        if (t && r) {
            var e = t.site,
                u = n.site,
                i = r.site;
            if (e !== i) {
                var o = u.x,
                    a = u.y,
                    c = e.x - o,
                    l = e.y - a,
                    s = i.x - o,
                    f = i.y - a,
                    h = 2 * (c * f - l * s);
                if (!(h >= -Oa)) {
                    var g = c * c + l * l,
                        p = s * s + f * f,
                        v = (f * g - l * p) / h,
                        d = (c * p - s * g) / h,
                        f = d + a,
                        m = fl.pop() || new Qe;
                    m.arc = n, m.site = u, m.x = v + o, m.y = f + Math.sqrt(v * v + d * d), m.cy = f, n.circle = m;
                    for (var y = null, x = ll._; x;)
                        if (m.y < x.y || m.y === x.y && m.x <= x.x) {
                            if (!x.L) {
                                y = x.P;
                                break
                            }
                            x = x.L
                        } else {
                            if (!x.R) {
                                y = x;
                                break
                            }
                            x = x.R
                        }
                    ll.insert(y, m), y || (cl = m)
                }
            }
        }
    }

    function tu(n) {
        var t = n.circle;
        t && (t.P || (cl = t.N), ll.remove(t), fl.push(t), su(t), n.circle = null)
    }

    function ru(n) {
        for (var t, r = il, e = Yr(n[0][0], n[0][1], n[1][0], n[1][1]), u = r.length; u--;) t = r[u], (!eu(t, n) || !e(t) || Ma(t.a.x - t.b.x) < Fa && Ma(t.a.y - t.b.y) < Fa) && (t.a = t.b = null, r.splice(u, 1))
    }

    function eu(n, t) {
        var r = n.b;
        if (r) return !0;
        var e, u, i = n.a,
            o = t[0][0],
            a = t[1][0],
            c = t[0][1],
            l = t[1][1],
            s = n.l,
            f = n.r,
            h = s.x,
            g = s.y,
            p = f.x,
            v = f.y,
            d = (h + p) / 2,
            m = (g + v) / 2;
        if (v === g) {
            if (o > d || d >= a) return;
            if (h > p) {
                if (i) {
                    if (i.y >= l) return
                } else i = {
                    x: d,
                    y: c
                };
                r = {
                    x: d,
                    y: l
                }
            } else {
                if (i) {
                    if (i.y < c) return
                } else i = {
                    x: d,
                    y: l
                };
                r = {
                    x: d,
                    y: c
                }
            }
        } else if (e = (h - p) / (v - g), u = m - e * d, -1 > e || e > 1)
            if (h > p) {
                if (i) {
                    if (i.y >= l) return
                } else i = {
                    x: (c - u) / e,
                    y: c
                };
                r = {
                    x: (l - u) / e,
                    y: l
                }
            } else {
                if (i) {
                    if (i.y < c) return
                } else i = {
                    x: (l - u) / e,
                    y: l
                };
                r = {
                    x: (c - u) / e,
                    y: c
                }
            } else
        if (v > g) {
            if (i) {
                if (i.x >= a) return
            } else i = {
                x: o,
                y: e * o + u
            };
            r = {
                x: a,
                y: e * a + u
            }
        } else {
            if (i) {
                if (i.x < o) return
            } else i = {
                x: a,
                y: e * a + u
            };
            r = {
                x: o,
                y: e * o + u
            }
        }
        return n.a = i, n.b = r, !0
    }

    function uu(n, t) {
        this.l = n, this.r = t, this.a = this.b = null
    }

    function iu(n, t, r, e) {
        var u = new uu(n, t);
        return il.push(u), r && au(u, n, t, r), e && au(u, t, n, e), ol[n.i].edges.push(new cu(u, n, t)), ol[t.i].edges.push(new cu(u, t, n)), u
    }

    function ou(n, t, r) {
        var e = new uu(n, null);
        return e.a = t, e.b = r, il.push(e), e
    }

    function au(n, t, r, e) {
        n.a || n.b ? n.l === r ? n.b = e : n.a = e : (n.a = e, n.l = t, n.r = r)
    }

    function cu(n, t, r) {
        var e = n.a,
            u = n.b;
        this.edge = n, this.site = t, this.angle = r ? Math.atan2(r.y - t.y, r.x - t.x) : n.l === t ? Math.atan2(u.x - e.x, e.y - u.y) : Math.atan2(e.x - u.x, u.y - e.y)
    }

    function lu() {
        this._ = null
    }

    function su(n) {
        n.U = n.C = n.L = n.R = n.P = n.N = null
    }

    function fu(n, t) {
        var r = t,
            e = t.R,
            u = r.U;
        u ? u.L === r ? u.L = e : u.R = e : n._ = e, e.U = u, r.U = e, r.R = e.L, r.R && (r.R.U = r), e.L = r
    }

    function hu(n, t) {
        var r = t,
            e = t.L,
            u = r.U;
        u ? u.L === r ? u.L = e : u.R = e : n._ = e, e.U = u, r.U = e, r.L = e.R, r.L && (r.L.U = r), e.R = r
    }

    function gu(n) {
        for (; n.L;) n = n.L;
        return n
    }

    function pu(n, t) {
        var r, e, u, i = n.sort(vu).pop();
        for (il = [], ol = new Array(n.length), al = new lu, ll = new lu;;)
            if (u = cl, i && (!u || i.y < u.y || i.y === u.y && i.x < u.x))(i.x !== r || i.y !== e) && (ol[i.i] = new We(i), Xe(i), r = i.x, e = i.y), i = n.pop();
            else {
                if (!u) break;
                $e(u.arc)
            }
        t && (ru(t), Ge(t));
        var o = {
            cells: ol,
            edges: il
        };
        return al = ll = il = ol = null, o
    }

    function vu(n, t) {
        return t.y - n.y || t.x - n.x
    }

    function du(n, t, r) {
        return (n.x - r.x) * (t.y - n.y) - (n.x - t.x) * (r.y - n.y)
    }

    function mu(n) {
        return n.x
    }

    function yu(n) {
        return n.y
    }

    function xu() {
        return {
            leaf: !0,
            nodes: [],
            point: null,
            x: null,
            y: null
        }
    }

    function Mu(n, t, r, e, u, i) {
        if (!n(t, r, e, u, i)) {
            var o = .5 * (r + u),
                a = .5 * (e + i),
                c = t.nodes;
            c[0] && Mu(n, c[0], r, e, o, a), c[1] && Mu(n, c[1], o, e, u, a), c[2] && Mu(n, c[2], r, a, o, i), c[3] && Mu(n, c[3], o, a, u, i)
        }
    }

    function _u(n, t) {
        n = oa.rgb(n), t = oa.rgb(t);
        var r = n.r,
            e = n.g,
            u = n.b,
            i = t.r - r,
            o = t.g - e,
            a = t.b - u;
        return function(n) {
            return "#" + Mt(Math.round(r + i * n)) + Mt(Math.round(e + o * n)) + Mt(Math.round(u + a * n))
        }
    }

    function bu(n, t) {
        var r, e = {}, u = {};
        for (r in n) r in t ? e[r] = ku(n[r], t[r]) : u[r] = n[r];
        for (r in t) r in n || (u[r] = t[r]);
        return function(n) {
            for (r in e) u[r] = e[r](n);
            return u
        }
    }

    function wu(n, t) {
        return t -= n = +n,
        function(r) {
            return n + t * r
        }
    }

    function Su(n, t) {
        var r, e, u, i, o, a = 0,
            c = 0,
            l = [],
            s = [];
        for (n += "", t += "", gl.lastIndex = 0, e = 0; r = gl.exec(t); ++e) r.index && l.push(t.substring(a, c = r.index)), s.push({
            i: l.length,
            x: r[0]
        }), l.push(null), a = gl.lastIndex;
        for (a < t.length && l.push(t.substring(a)), e = 0, i = s.length;
            (r = gl.exec(n)) && i > e; ++e)
            if (o = s[e], o.x == r[0]) {
                if (o.i)
                    if (null == l[o.i + 1])
                        for (l[o.i - 1] += o.x, l.splice(o.i, 1), u = e + 1; i > u; ++u) s[u].i--;
                    else
                        for (l[o.i - 1] += o.x + l[o.i + 1], l.splice(o.i, 2), u = e + 1; i > u; ++u) s[u].i -= 2;
                    else
                if (null == l[o.i + 1]) l[o.i] = o.x;
                else
                    for (l[o.i] = o.x + l[o.i + 1], l.splice(o.i + 1, 1), u = e + 1; i > u; ++u) s[u].i--;
                s.splice(e, 1), i--, e--
            } else o.x = wu(parseFloat(r[0]), parseFloat(o.x));
        for (; i > e;) o = s.pop(), null == l[o.i + 1] ? l[o.i] = o.x : (l[o.i] = o.x + l[o.i + 1], l.splice(o.i + 1, 1)), i--;
        return 1 === l.length ? null == l[0] ? (o = s[0].x, function(n) {
            return o(n) + ""
        }) : function() {
            return t
        } : function(n) {
            for (e = 0; i > e; ++e) l[(o = s[e]).i] = o.x(n);
            return l.join("")
        }
    }

    function ku(n, t) {
        for (var r, e = oa.interpolators.length; --e >= 0 && !(r = oa.interpolators[e](n, t)););
        return r
    }

    function Eu(n, t) {
        var r, e = [],
            u = [],
            i = n.length,
            o = t.length,
            a = Math.min(n.length, t.length);
        for (r = 0; a > r; ++r) e.push(ku(n[r], t[r]));
        for (; i > r; ++r) u[r] = n[r];
        for (; o > r; ++r) u[r] = t[r];
        return function(n) {
            for (r = 0; a > r; ++r) u[r] = e[r](n);
            return u
        }
    }

    function Nu(n) {
        return function(t) {
            return 0 >= t ? 0 : t >= 1 ? 1 : n(t)
        }
    }

    function Au(n) {
        return function(t) {
            return 1 - n(1 - t)
        }
    }

    function Cu(n) {
        return function(t) {
            return .5 * (.5 > t ? n(2 * t) : 2 - n(2 - 2 * t))
        }
    }

    function Lu(n) {
        return n * n
    }

    function qu(n) {
        return n * n * n
    }

    function Tu(n) {
        if (0 >= n) return 0;
        if (n >= 1) return 1;
        var t = n * n,
            r = t * n;
        return 4 * (.5 > n ? r : 3 * (n - t) + r - .75)
    }

    function zu(n) {
        return function(t) {
            return Math.pow(t, n)
        }
    }

    function Ru(n) {
        return 1 - Math.cos(n * Ha)
    }

    function Du(n) {
        return Math.pow(2, 10 * (n - 1))
    }

    function Pu(n) {
        return 1 - Math.sqrt(1 - n * n)
    }

    function Uu(n, t) {
        var r;
        return arguments.length < 2 && (t = .45), arguments.length ? r = t / ja * Math.asin(1 / n) : (n = 1, r = t / 4),
        function(e) {
            return 1 + n * Math.pow(2, -10 * e) * Math.sin((e - r) * ja / t)
        }
    }

    function ju(n) {
        return n || (n = 1.70158),
        function(t) {
            return t * t * ((n + 1) * t - n)
        }
    }

    function Hu(n) {
        return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
    }

    function Fu(n, t) {
        n = oa.hcl(n), t = oa.hcl(t);
        var r = n.h,
            e = n.c,
            u = n.l,
            i = t.h - r,
            o = t.c - e,
            a = t.l - u;
        return isNaN(o) && (o = 0, e = isNaN(e) ? t.c : e), isNaN(i) ? (i = 0, r = isNaN(r) ? t.h : r) : i > 180 ? i -= 360 : -180 > i && (i += 360),
        function(n) {
            return ct(r + i * n, e + o * n, u + a * n) + ""
        }
    }

    function Ou(n, t) {
        n = oa.hsl(n), t = oa.hsl(t);
        var r = n.h,
            e = n.s,
            u = n.l,
            i = t.h - r,
            o = t.s - e,
            a = t.l - u;
        return isNaN(o) && (o = 0, e = isNaN(e) ? t.s : e), isNaN(i) ? (i = 0, r = isNaN(r) ? t.h : r) : i > 180 ? i -= 360 : -180 > i && (i += 360),
        function(n) {
            return it(r + i * n, e + o * n, u + a * n) + ""
        }
    }

    function Iu(n, t) {
        n = oa.lab(n), t = oa.lab(t);
        var r = n.l,
            e = n.a,
            u = n.b,
            i = t.l - r,
            o = t.a - e,
            a = t.b - u;
        return function(n) {
            return ft(r + i * n, e + o * n, u + a * n) + ""
        }
    }

    function Yu(n, t) {
        return t -= n,
        function(r) {
            return Math.round(n + t * r)
        }
    }

    function Zu(n) {
        var t = [n.a, n.b],
            r = [n.c, n.d],
            e = $u(t),
            u = Vu(t, r),
            i = $u(Xu(r, t, -u)) || 0;
        t[0] * r[1] < r[0] * t[1] && (t[0] *= -1, t[1] *= -1, e *= -1, u *= -1), this.rotate = (e ? Math.atan2(t[1], t[0]) : Math.atan2(-r[0], r[1])) * Ya, this.translate = [n.e, n.f], this.scale = [e, i], this.skew = i ? Math.atan2(u, i) * Ya : 0
    }

    function Vu(n, t) {
        return n[0] * t[0] + n[1] * t[1]
    }

    function $u(n) {
        var t = Math.sqrt(Vu(n, n));
        return t && (n[0] /= t, n[1] /= t), t
    }

    function Xu(n, t, r) {
        return n[0] += r * t[0], n[1] += r * t[1], n
    }

    function Bu(n, t) {
        var r, e = [],
            u = [],
            i = oa.transform(n),
            o = oa.transform(t),
            a = i.translate,
            c = o.translate,
            l = i.rotate,
            s = o.rotate,
            f = i.skew,
            h = o.skew,
            g = i.scale,
            p = o.scale;
        return a[0] != c[0] || a[1] != c[1] ? (e.push("translate(", null, ",", null, ")"), u.push({
            i: 1,
            x: wu(a[0], c[0])
        }, {
            i: 3,
            x: wu(a[1], c[1])
        })) : c[0] || c[1] ? e.push("translate(" + c + ")") : e.push(""), l != s ? (l - s > 180 ? s += 360 : s - l > 180 && (l += 360), u.push({
            i: e.push(e.pop() + "rotate(", null, ")") - 2,
            x: wu(l, s)
        })) : s && e.push(e.pop() + "rotate(" + s + ")"), f != h ? u.push({
            i: e.push(e.pop() + "skewX(", null, ")") - 2,
            x: wu(f, h)
        }) : h && e.push(e.pop() + "skewX(" + h + ")"), g[0] != p[0] || g[1] != p[1] ? (r = e.push(e.pop() + "scale(", null, ",", null, ")"), u.push({
            i: r - 4,
            x: wu(g[0], p[0])
        }, {
            i: r - 2,
            x: wu(g[1], p[1])
        })) : (1 != p[0] || 1 != p[1]) && e.push(e.pop() + "scale(" + p + ")"), r = u.length,
        function(n) {
            for (var t, i = -1; ++i < r;) e[(t = u[i]).i] = t.x(n);
            return e.join("")
        }
    }

    function Ju(n, t) {
        return t = t - (n = +n) ? 1 / (t - n) : 0,
        function(r) {
            return (r - n) * t
        }
    }

    function Wu(n, t) {
        return t = t - (n = +n) ? 1 / (t - n) : 0,
        function(r) {
            return Math.max(0, Math.min(1, (r - n) * t))
        }
    }

    function Gu(n) {
        for (var t = n.source, r = n.target, e = Qu(t, r), u = [t]; t !== e;) t = t.parent, u.push(t);
        for (var i = u.length; r !== e;) u.splice(i, 0, r), r = r.parent;
        return u
    }

    function Ku(n) {
        for (var t = [], r = n.parent; null != r;) t.push(n), n = r, r = r.parent;
        return t.push(n), t
    }

    function Qu(n, t) {
        if (n === t) return n;
        for (var r = Ku(n), e = Ku(t), u = r.pop(), i = e.pop(), o = null; u === i;) o = u, u = r.pop(), i = e.pop();
        return o
    }

    function ni(n) {
        n.fixed |= 2
    }

    function ti(n) {
        n.fixed &= -7
    }

    function ri(n) {
        n.fixed |= 4, n.px = n.x, n.py = n.y
    }

    function ei(n) {
        n.fixed &= -5
    }

    function ui(n, t, r) {
        var e = 0,
            u = 0;
        if (n.charge = 0, !n.leaf)
            for (var i, o = n.nodes, a = o.length, c = -1; ++c < a;) i = o[c], null != i && (ui(i, t, r), n.charge += i.charge, e += i.charge * i.cx, u += i.charge * i.cy);
        if (n.point) {
            n.leaf || (n.point.x += Math.random() - .5, n.point.y += Math.random() - .5);
            var l = t * r[n.point.index];
            n.charge += n.pointCharge = l, e += l * n.point.x, u += l * n.point.y
        }
        n.cx = e / n.charge, n.cy = u / n.charge
    }

    function ii(n, t) {
        return oa.rebind(n, t, "sort", "children", "value"), n.nodes = n, n.links = li, n
    }

    function oi(n) {
        return n.children
    }

    function ai(n) {
        return n.value
    }

    function ci(n, t) {
        return t.value - n.value
    }

    function li(n) {
        return oa.merge(n.map(function(n) {
            return (n.children || []).map(function(t) {
                return {
                    source: n,
                    target: t
                }
            })
        }))
    }

    function si(n) {
        return n.x
    }

    function fi(n) {
        return n.y
    }

    function hi(n, t, r) {
        n.y0 = t, n.y = r
    }

    function gi(n) {
        return oa.range(n.length)
    }

    function pi(n) {
        for (var t = -1, r = n[0].length, e = []; ++t < r;) e[t] = 0;
        return e
    }

    function vi(n) {
        for (var t, r = 1, e = 0, u = n[0][1], i = n.length; i > r; ++r)(t = n[r][1]) > u && (e = r, u = t);
        return e
    }

    function di(n) {
        return n.reduce(mi, 0)
    }

    function mi(n, t) {
        return n + t[1]
    }

    function yi(n, t) {
        return xi(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
    }

    function xi(n, t) {
        for (var r = -1, e = +n[0], u = (n[1] - e) / t, i = []; ++r <= t;) i[r] = u * r + e;
        return i
    }

    function Mi(n) {
        return [oa.min(n), oa.max(n)]
    }

    function _i(n, t) {
        return n.parent == t.parent ? 1 : 2
    }

    function bi(n) {
        var t = n.children;
        return t && t.length ? t[0] : n._tree.thread
    }

    function wi(n) {
        var t, r = n.children;
        return r && (t = r.length) ? r[t - 1] : n._tree.thread
    }

    function Si(n, t) {
        var r = n.children;
        if (r && (u = r.length))
            for (var e, u, i = -1; ++i < u;) t(e = Si(r[i], t), n) > 0 && (n = e);
        return n
    }

    function ki(n, t) {
        return n.x - t.x
    }

    function Ei(n, t) {
        return t.x - n.x
    }

    function Ni(n, t) {
        return n.depth - t.depth
    }

    function Ai(n, t) {
        function r(n, e) {
            var u = n.children;
            if (u && (o = u.length))
                for (var i, o, a = null, c = -1; ++c < o;) i = u[c], r(i, a), a = i;
            t(n, e)
        }
        r(n, null)
    }

    function Ci(n) {
        for (var t, r = 0, e = 0, u = n.children, i = u.length; --i >= 0;) t = u[i]._tree, t.prelim += r, t.mod += r, r += t.shift + (e += t.change)
    }

    function Li(n, t, r) {
        n = n._tree, t = t._tree;
        var e = r / (t.number - n.number);
        n.change += e, t.change -= e, t.shift += r, t.prelim += r, t.mod += r
    }

    function qi(n, t, r) {
        return n._tree.ancestor.parent == t.parent ? n._tree.ancestor : r
    }

    function Ti(n, t) {
        return n.value - t.value
    }

    function zi(n, t) {
        var r = n._pack_next;
        n._pack_next = t, t._pack_prev = n, t._pack_next = r, r._pack_prev = t
    }

    function Ri(n, t) {
        n._pack_next = t, t._pack_prev = n
    }

    function Di(n, t) {
        var r = t.x - n.x,
            e = t.y - n.y,
            u = n.r + t.r;
        return .999 * u * u > r * r + e * e
    }

    function Pi(n) {
        function t(n) {
            s = Math.min(n.x - n.r, s), f = Math.max(n.x + n.r, f), h = Math.min(n.y - n.r, h), g = Math.max(n.y + n.r, g)
        }
        if ((r = n.children) && (l = r.length)) {
            var r, e, u, i, o, a, c, l, s = 1 / 0,
                f = -1 / 0,
                h = 1 / 0,
                g = -1 / 0;
            if (r.forEach(Ui), e = r[0], e.x = -e.r, e.y = 0, t(e), l > 1 && (u = r[1], u.x = u.r, u.y = 0, t(u), l > 2))
                for (i = r[2], Fi(e, u, i), t(i), zi(e, i), e._pack_prev = i, zi(i, u), u = e._pack_next, o = 3; l > o; o++) {
                    Fi(e, u, i = r[o]);
                    var p = 0,
                        v = 1,
                        d = 1;
                    for (a = u._pack_next; a !== u; a = a._pack_next, v++)
                        if (Di(a, i)) {
                            p = 1;
                            break
                        }
                    if (1 == p)
                        for (c = e._pack_prev; c !== a._pack_prev && !Di(c, i); c = c._pack_prev, d++);
                    p ? (d > v || v == d && u.r < e.r ? Ri(e, u = a) : Ri(e = c, u), o--) : (zi(e, i), u = i, t(i))
                }
            var m = (s + f) / 2,
                y = (h + g) / 2,
                x = 0;
            for (o = 0; l > o; o++) i = r[o], i.x -= m, i.y -= y, x = Math.max(x, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
            n.r = x, r.forEach(ji)
        }
    }

    function Ui(n) {
        n._pack_next = n._pack_prev = n
    }

    function ji(n) {
        delete n._pack_next, delete n._pack_prev
    }

    function Hi(n, t, r, e) {
        var u = n.children;
        if (n.x = t += e * n.x, n.y = r += e * n.y, n.r *= e, u)
            for (var i = -1, o = u.length; ++i < o;) Hi(u[i], t, r, e)
    }

    function Fi(n, t, r) {
        var e = n.r + r.r,
            u = t.x - n.x,
            i = t.y - n.y;
        if (e && (u || i)) {
            var o = t.r + r.r,
                a = u * u + i * i;
            o *= o, e *= e;
            var c = .5 + (e - o) / (2 * a),
                l = Math.sqrt(Math.max(0, 2 * o * (e + a) - (e -= a) * e - o * o)) / (2 * a);
            r.x = n.x + c * u + l * i, r.y = n.y + c * i - l * u
        } else r.x = n.x + e, r.y = n.y
    }

    function Oi(n) {
        return 1 + oa.max(n, function(n) {
            return n.y
        })
    }

    function Ii(n) {
        return n.reduce(function(n, t) {
            return n + t.x
        }, 0) / n.length
    }

    function Yi(n) {
        var t = n.children;
        return t && t.length ? Yi(t[0]) : n
    }

    function Zi(n) {
        var t, r = n.children;
        return r && (t = r.length) ? Zi(r[t - 1]) : n
    }

    function Vi(n) {
        return {
            x: n.x,
            y: n.y,
            dx: n.dx,
            dy: n.dy
        }
    }

    function $i(n, t) {
        var r = n.x + t[3],
            e = n.y + t[0],
            u = n.dx - t[1] - t[3],
            i = n.dy - t[0] - t[2];
        return 0 > u && (r += u / 2, u = 0), 0 > i && (e += i / 2, i = 0), {
            x: r,
            y: e,
            dx: u,
            dy: i
        }
    }

    function Xi(n) {
        var t = n[0],
            r = n[n.length - 1];
        return r > t ? [t, r] : [r, t]
    }

    function Bi(n) {
        return n.rangeExtent ? n.rangeExtent() : Xi(n.range())
    }

    function Ji(n, t, r, e) {
        var u = r(n[0], n[1]),
            i = e(t[0], t[1]);
        return function(n) {
            return i(u(n))
        }
    }

    function Wi(n, t) {
        var r, e = 0,
            u = n.length - 1,
            i = n[e],
            o = n[u];
        return i > o && (r = e, e = u, u = r, r = i, i = o, o = r), n[e] = t.floor(i), n[u] = t.ceil(o), n
    }

    function Gi(n) {
        return n ? {
            floor: function(t) {
                return Math.floor(t / n) * n
            },
            ceil: function(t) {
                return Math.ceil(t / n) * n
            }
        } : Sl
    }

    function Ki(n, t, r, e) {
        var u = [],
            i = [],
            o = 0,
            a = Math.min(n.length, t.length) - 1;
        for (n[a] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++o <= a;) u.push(r(n[o - 1], n[o])), i.push(e(t[o - 1], t[o]));
        return function(t) {
            var r = oa.bisect(n, t, 1, a) - 1;
            return i[r](u[r](t))
        }
    }

    function Qi(n, t, r, e) {
        function u() {
            var u = Math.min(n.length, t.length) > 2 ? Ki : Ji,
                c = e ? Wu : Ju;
            return o = u(n, t, c, r), a = u(t, n, c, ku), i
        }

        function i(n) {
            return o(n)
        }
        var o, a;
        return i.invert = function(n) {
            return a(n)
        }, i.domain = function(t) {
            return arguments.length ? (n = t.map(Number), u()) : n
        }, i.range = function(n) {
            return arguments.length ? (t = n, u()) : t
        }, i.rangeRound = function(n) {
            return i.range(n).interpolate(Yu)
        }, i.clamp = function(n) {
            return arguments.length ? (e = n, u()) : e
        }, i.interpolate = function(n) {
            return arguments.length ? (r = n, u()) : r
        }, i.ticks = function(t) {
            return eo(n, t)
        }, i.tickFormat = function(t, r) {
            return uo(n, t, r)
        }, i.nice = function(t) {
            return to(n, t), u()
        }, i.copy = function() {
            return Qi(n, t, r, e)
        }, u()
    }

    function no(n, t) {
        return oa.rebind(n, t, "range", "rangeRound", "interpolate", "clamp")
    }

    function to(n, t) {
        return Wi(n, Gi(ro(n, t)[2]))
    }

    function ro(n, t) {
        null == t && (t = 10);
        var r = Xi(n),
            e = r[1] - r[0],
            u = Math.pow(10, Math.floor(Math.log(e / t) / Math.LN10)),
            i = t / e * u;
        return .15 >= i ? u *= 10 : .35 >= i ? u *= 5 : .75 >= i && (u *= 2), r[0] = Math.ceil(r[0] / u) * u, r[1] = Math.floor(r[1] / u) * u + .5 * u, r[2] = u, r
    }

    function eo(n, t) {
        return oa.range.apply(oa, ro(n, t))
    }

    function uo(n, t, r) {
        var e = ro(n, t);
        if (r) {
            var u = hc.exec(r);
            if (u.shift(), "s" === u[8]) {
                var i = oa.formatPrefix(Math.max(Ma(e[0]), Ma(e[1])));
                return u[7] || (u[7] = "." + io(i.scale(e[2]))), u[8] = "f", r = oa.format(u.join("")),
                function(n) {
                    return r(i.scale(n)) + i.symbol
                }
            }
            u[7] || (u[7] = "." + oo(u[8], e)), r = u.join("")
        } else r = ",." + io(e[2]) + "f";
        return oa.format(r)
    }

    function io(n) {
        return -Math.floor(Math.log(n) / Math.LN10 + .01)
    }

    function oo(n, t) {
        var r = io(t[2]);
        return n in kl ? Math.abs(r - io(Math.max(Ma(t[0]), Ma(t[1])))) + +("e" !== n) : r - 2 * ("%" === n)
    }

    function ao(n, t, r, e) {
        function u(n) {
            return (r ? Math.log(0 > n ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(t)
        }

        function i(n) {
            return r ? Math.pow(t, n) : -Math.pow(t, -n)
        }

        function o(t) {
            return n(u(t))
        }
        return o.invert = function(t) {
            return i(n.invert(t))
        }, o.domain = function(t) {
            return arguments.length ? (r = t[0] >= 0, n.domain((e = t.map(Number)).map(u)), o) : e
        }, o.base = function(r) {
            return arguments.length ? (t = +r, n.domain(e.map(u)), o) : t
        }, o.nice = function() {
            var t = Wi(e.map(u), r ? Math : Nl);
            return n.domain(t), e = t.map(i), o
        }, o.ticks = function() {
            var n = Xi(e),
                o = [],
                a = n[0],
                c = n[1],
                l = Math.floor(u(a)),
                s = Math.ceil(u(c)),
                f = t % 1 ? 2 : t;
            if (isFinite(s - l)) {
                if (r) {
                    for (; s > l; l++)
                        for (var h = 1; f > h; h++) o.push(i(l) * h);
                    o.push(i(l))
                } else
                    for (o.push(i(l)); l++ < s;)
                        for (var h = f - 1; h > 0; h--) o.push(i(l) * h);
                for (l = 0; o[l] < a; l++);
                for (s = o.length; o[s - 1] > c; s--);
                o = o.slice(l, s)
            }
            return o
        }, o.tickFormat = function(n, t) {
            if (!arguments.length) return El;
            arguments.length < 2 ? t = El : "function" != typeof t && (t = oa.format(t));
            var e, a = Math.max(.1, n / o.ticks().length),
                c = r ? (e = 1e-12, Math.ceil) : (e = -1e-12, Math.floor);
            return function(n) {
                return n / i(c(u(n) + e)) <= a ? t(n) : ""
            }
        }, o.copy = function() {
            return ao(n.copy(), t, r, e)
        }, no(o, n)
    }

    function co(n, t, r) {
        function e(t) {
            return n(u(t))
        }
        var u = lo(t),
            i = lo(1 / t);
        return e.invert = function(t) {
            return i(n.invert(t))
        }, e.domain = function(t) {
            return arguments.length ? (n.domain((r = t.map(Number)).map(u)), e) : r
        }, e.ticks = function(n) {
            return eo(r, n)
        }, e.tickFormat = function(n, t) {
            return uo(r, n, t)
        }, e.nice = function(n) {
            return e.domain(to(r, n))
        }, e.exponent = function(o) {
            return arguments.length ? (u = lo(t = o), i = lo(1 / t), n.domain(r.map(u)), e) : t
        }, e.copy = function() {
            return co(n.copy(), t, r)
        }, no(e, n)
    }

    function lo(n) {
        return function(t) {
            return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n)
        }
    }

    function so(n, t) {
        function r(r) {
            return i[((u.get(r) || ("range" === t.t ? u.set(r, n.push(r)) : 0 / 0)) - 1) % i.length]
        }

        function e(t, r) {
            return oa.range(n.length).map(function(n) {
                return t + r * n
            })
        }
        var u, i, a;
        return r.domain = function(e) {
            if (!arguments.length) return n;
            n = [], u = new o;
            for (var i, a = -1, c = e.length; ++a < c;) u.has(i = e[a]) || u.set(i, n.push(i));
            return r[t.t].apply(r, t.a)
        }, r.range = function(n) {
            return arguments.length ? (i = n, a = 0, t = {
                t: "range",
                a: arguments
            }, r) : i
        }, r.rangePoints = function(u, o) {
            arguments.length < 2 && (o = 0);
            var c = u[0],
                l = u[1],
                s = (l - c) / (Math.max(1, n.length - 1) + o);
            return i = e(n.length < 2 ? (c + l) / 2 : c + s * o / 2, s), a = 0, t = {
                t: "rangePoints",
                a: arguments
            }, r
        }, r.rangeBands = function(u, o, c) {
            arguments.length < 2 && (o = 0), arguments.length < 3 && (c = o);
            var l = u[1] < u[0],
                s = u[l - 0],
                f = u[1 - l],
                h = (f - s) / (n.length - o + 2 * c);
            return i = e(s + h * c, h), l && i.reverse(), a = h * (1 - o), t = {
                t: "rangeBands",
                a: arguments
            }, r
        }, r.rangeRoundBands = function(u, o, c) {
            arguments.length < 2 && (o = 0), arguments.length < 3 && (c = o);
            var l = u[1] < u[0],
                s = u[l - 0],
                f = u[1 - l],
                h = Math.floor((f - s) / (n.length - o + 2 * c)),
                g = f - s - (n.length - o) * h;
            return i = e(s + Math.round(g / 2), h), l && i.reverse(), a = Math.round(h * (1 - o)), t = {
                t: "rangeRoundBands",
                a: arguments
            }, r
        }, r.rangeBand = function() {
            return a
        }, r.rangeExtent = function() {
            return Xi(t.a[0])
        }, r.copy = function() {
            return so(n, t)
        }, r.domain(n)
    }

    function fo(t, r) {
        function e() {
            var n = 0,
                e = r.length;
            for (i = []; ++n < e;) i[n - 1] = oa.quantile(t, n / e);
            return u
        }

        function u(n) {
            return isNaN(n = +n) ? void 0 : r[oa.bisect(i, n)]
        }
        var i;
        return u.domain = function(r) {
            return arguments.length ? (t = r.filter(function(n) {
                return !isNaN(n)
            }).sort(n), e()) : t
        }, u.range = function(n) {
            return arguments.length ? (r = n, e()) : r
        }, u.quantiles = function() {
            return i
        }, u.invertExtent = function(n) {
            return n = r.indexOf(n), 0 > n ? [0 / 0, 0 / 0] : [n > 0 ? i[n - 1] : t[0], n < i.length ? i[n] : t[t.length - 1]]
        }, u.copy = function() {
            return fo(t, r)
        }, e()
    }

    function ho(n, t, r) {
        function e(t) {
            return r[Math.max(0, Math.min(o, Math.floor(i * (t - n))))]
        }

        function u() {
            return i = r.length / (t - n), o = r.length - 1, e
        }
        var i, o;
        return e.domain = function(r) {
            return arguments.length ? (n = +r[0], t = +r[r.length - 1], u()) : [n, t]
        }, e.range = function(n) {
            return arguments.length ? (r = n, u()) : r
        }, e.invertExtent = function(t) {
            return t = r.indexOf(t), t = 0 > t ? 0 / 0 : t / i + n, [t, t + 1 / i]
        }, e.copy = function() {
            return ho(n, t, r)
        }, u()
    }

    function go(n, t) {
        function r(r) {
            return r >= r ? t[oa.bisect(n, r)] : void 0
        }
        return r.domain = function(t) {
            return arguments.length ? (n = t, r) : n
        }, r.range = function(n) {
            return arguments.length ? (t = n, r) : t
        }, r.invertExtent = function(r) {
            return r = t.indexOf(r), [n[r - 1], n[r]]
        }, r.copy = function() {
            return go(n, t)
        }, r
    }

    function po(n) {
        function t(n) {
            return +n
        }
        return t.invert = t, t.domain = t.range = function(r) {
            return arguments.length ? (n = r.map(t), t) : n
        }, t.ticks = function(t) {
            return eo(n, t)
        }, t.tickFormat = function(t, r) {
            return uo(n, t, r)
        }, t.copy = function() {
            return po(n)
        }, t
    }

    function vo(n) {
        return n.innerRadius
    }

    function mo(n) {
        return n.outerRadius
    }

    function yo(n) {
        return n.startAngle
    }

    function xo(n) {
        return n.endAngle
    }

    function Mo(n) {
        function t(t) {
            function o() {
                l.push("M", i(n(s), a))
            }
            for (var c, l = [], s = [], f = -1, h = t.length, g = Et(r), p = Et(e); ++f < h;) u.call(this, c = t[f], f) ? s.push([+g.call(this, c, f), +p.call(this, c, f)]) : s.length && (o(), s = []);
            return s.length && o(), l.length ? l.join("") : null
        }
        var r = Pe,
            e = Ue,
            u = Cr,
            i = _o,
            o = i.key,
            a = .7;
        return t.x = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t.y = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.defined = function(n) {
            return arguments.length ? (u = n, t) : u
        }, t.interpolate = function(n) {
            return arguments.length ? (o = "function" == typeof n ? i = n : (i = Rl.get(n) || _o).key, t) : o
        }, t.tension = function(n) {
            return arguments.length ? (a = n, t) : a
        }, t
    }

    function _o(n) {
        return n.join("L")
    }

    function bo(n) {
        return _o(n) + "Z"
    }

    function wo(n) {
        for (var t = 0, r = n.length, e = n[0], u = [e[0], ",", e[1]]; ++t < r;) u.push("H", (e[0] + (e = n[t])[0]) / 2, "V", e[1]);
        return r > 1 && u.push("H", e[0]), u.join("")
    }

    function So(n) {
        for (var t = 0, r = n.length, e = n[0], u = [e[0], ",", e[1]]; ++t < r;) u.push("V", (e = n[t])[1], "H", e[0]);
        return u.join("")
    }

    function ko(n) {
        for (var t = 0, r = n.length, e = n[0], u = [e[0], ",", e[1]]; ++t < r;) u.push("H", (e = n[t])[0], "V", e[1]);
        return u.join("")
    }

    function Eo(n, t) {
        return n.length < 4 ? _o(n) : n[1] + Co(n.slice(1, n.length - 1), Lo(n, t))
    }

    function No(n, t) {
        return n.length < 3 ? _o(n) : n[0] + Co((n.push(n[0]), n), Lo([n[n.length - 2]].concat(n, [n[1]]), t))
    }

    function Ao(n, t) {
        return n.length < 3 ? _o(n) : n[0] + Co(n, Lo(n, t))
    }

    function Co(n, t) {
        if (t.length < 1 || n.length != t.length && n.length != t.length + 2) return _o(n);
        var r = n.length != t.length,
            e = "",
            u = n[0],
            i = n[1],
            o = t[0],
            a = o,
            c = 1;
        if (r && (e += "Q" + (i[0] - 2 * o[0] / 3) + "," + (i[1] - 2 * o[1] / 3) + "," + i[0] + "," + i[1], u = n[1], c = 2), t.length > 1) {
            a = t[1], i = n[c], c++, e += "C" + (u[0] + o[0]) + "," + (u[1] + o[1]) + "," + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1];
            for (var l = 2; l < t.length; l++, c++) i = n[c], a = t[l], e += "S" + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1]
        }
        if (r) {
            var s = n[c];
            e += "Q" + (i[0] + 2 * a[0] / 3) + "," + (i[1] + 2 * a[1] / 3) + "," + s[0] + "," + s[1]
        }
        return e
    }

    function Lo(n, t) {
        for (var r, e = [], u = (1 - t) / 2, i = n[0], o = n[1], a = 1, c = n.length; ++a < c;) r = i, i = o, o = n[a], e.push([u * (o[0] - r[0]), u * (o[1] - r[1])]);
        return e
    }

    function qo(n) {
        if (n.length < 3) return _o(n);
        var t = 1,
            r = n.length,
            e = n[0],
            u = e[0],
            i = e[1],
            o = [u, u, u, (e = n[1])[0]],
            a = [i, i, i, e[1]],
            c = [u, ",", i, "L", Do(Ul, o), ",", Do(Ul, a)];
        for (n.push(n[r - 1]); ++t <= r;) e = n[t], o.shift(), o.push(e[0]), a.shift(), a.push(e[1]), Po(c, o, a);
        return n.pop(), c.push("L", e), c.join("")
    }

    function To(n) {
        if (n.length < 4) return _o(n);
        for (var t, r = [], e = -1, u = n.length, i = [0], o = [0]; ++e < 3;) t = n[e], i.push(t[0]), o.push(t[1]);
        for (r.push(Do(Ul, i) + "," + Do(Ul, o)), --e; ++e < u;) t = n[e], i.shift(), i.push(t[0]), o.shift(), o.push(t[1]), Po(r, i, o);
        return r.join("")
    }

    function zo(n) {
        for (var t, r, e = -1, u = n.length, i = u + 4, o = [], a = []; ++e < 4;) r = n[e % u], o.push(r[0]), a.push(r[1]);
        for (t = [Do(Ul, o), ",", Do(Ul, a)], --e; ++e < i;) r = n[e % u], o.shift(), o.push(r[0]), a.shift(), a.push(r[1]), Po(t, o, a);
        return t.join("")
    }

    function Ro(n, t) {
        var r = n.length - 1;
        if (r)
            for (var e, u, i = n[0][0], o = n[0][1], a = n[r][0] - i, c = n[r][1] - o, l = -1; ++l <= r;) e = n[l], u = l / r, e[0] = t * e[0] + (1 - t) * (i + u * a), e[1] = t * e[1] + (1 - t) * (o + u * c);
        return qo(n)
    }

    function Do(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]
    }

    function Po(n, t, r) {
        n.push("C", Do(Dl, t), ",", Do(Dl, r), ",", Do(Pl, t), ",", Do(Pl, r), ",", Do(Ul, t), ",", Do(Ul, r))
    }

    function Uo(n, t) {
        return (t[1] - n[1]) / (t[0] - n[0])
    }

    function jo(n) {
        for (var t = 0, r = n.length - 1, e = [], u = n[0], i = n[1], o = e[0] = Uo(u, i); ++t < r;) e[t] = (o + (o = Uo(u = i, i = n[t + 1]))) / 2;
        return e[t] = o, e
    }

    function Ho(n) {
        for (var t, r, e, u, i = [], o = jo(n), a = -1, c = n.length - 1; ++a < c;) t = Uo(n[a], n[a + 1]), Ma(t) < Fa ? o[a] = o[a + 1] = 0 : (r = o[a] / t, e = o[a + 1] / t, u = r * r + e * e, u > 9 && (u = 3 * t / Math.sqrt(u), o[a] = u * r, o[a + 1] = u * e));
        for (a = -1; ++a <= c;) u = (n[Math.min(c, a + 1)][0] - n[Math.max(0, a - 1)][0]) / (6 * (1 + o[a] * o[a])), i.push([u || 0, o[a] * u || 0]);
        return i
    }

    function Fo(n) {
        return n.length < 3 ? _o(n) : n[0] + Co(n, Ho(n))
    }

    function Oo(n) {
        for (var t, r, e, u = -1, i = n.length; ++u < i;) t = n[u], r = t[0], e = t[1] + Tl, t[0] = r * Math.cos(e), t[1] = r * Math.sin(e);
        return n
    }

    function Io(n) {
        function t(t) {
            function c() {
                v.push("M", a(n(m), f), s, l(n(d.reverse()), f), "Z")
            }
            for (var h, g, p, v = [], d = [], m = [], y = -1, x = t.length, M = Et(r), _ = Et(u), b = r === e ? function() {
                    return g
                } : Et(e), w = u === i ? function() {
                    return p
                } : Et(i); ++y < x;) o.call(this, h = t[y], y) ? (d.push([g = +M.call(this, h, y), p = +_.call(this, h, y)]), m.push([+b.call(this, h, y), +w.call(this, h, y)])) : d.length && (c(), d = [], m = []);
            return d.length && c(), v.length ? v.join("") : null
        }
        var r = Pe,
            e = Pe,
            u = 0,
            i = Ue,
            o = Cr,
            a = _o,
            c = a.key,
            l = a,
            s = "L",
            f = .7;
        return t.x = function(n) {
            return arguments.length ? (r = e = n, t) : e
        }, t.x0 = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t.x1 = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.y = function(n) {
            return arguments.length ? (u = i = n, t) : i
        }, t.y0 = function(n) {
            return arguments.length ? (u = n, t) : u
        }, t.y1 = function(n) {
            return arguments.length ? (i = n, t) : i
        }, t.defined = function(n) {
            return arguments.length ? (o = n, t) : o
        }, t.interpolate = function(n) {
            return arguments.length ? (c = "function" == typeof n ? a = n : (a = Rl.get(n) || _o).key, l = a.reverse || a, s = a.closed ? "M" : "L", t) : c
        }, t.tension = function(n) {
            return arguments.length ? (f = n, t) : f
        }, t
    }

    function Yo(n) {
        return n.radius
    }

    function Zo(n) {
        return [n.x, n.y]
    }

    function Vo(n) {
        return function() {
            var t = n.apply(this, arguments),
                r = t[0],
                e = t[1] + Tl;
            return [r * Math.cos(e), r * Math.sin(e)]
        }
    }

    function $o() {
        return 64
    }

    function Xo() {
        return "circle"
    }

    function Bo(n) {
        var t = Math.sqrt(n / Ua);
        return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
    }

    function Jo(n, t) {
        return ka(n, Yl), n.id = t, n
    }

    function Wo(n, t, r, e) {
        var u = n.id;
        return P(n, "function" == typeof r ? function(n, i, o) {
            n.__transition__[u].tween.set(t, e(r.call(n, n.__data__, i, o)))
        } : (r = e(r), function(n) {
            n.__transition__[u].tween.set(t, r)
        }))
    }

    function Go(n) {
        return null == n && (n = ""),
        function() {
            this.textContent = n
        }
    }

    function Ko(n, t, r, e) {
        var u = n.__transition__ || (n.__transition__ = {
            active: 0,
            count: 0
        }),
            i = u[r];
        if (!i) {
            var a = e.time;
            i = u[r] = {
                tween: new o,
                time: a,
                ease: e.ease,
                delay: e.delay,
                duration: e.duration
            }, ++u.count, oa.timer(function(e) {
                function o(e) {
                    return u.active > r ? l() : (u.active = r, i.event && i.event.start.call(n, s, t), i.tween.forEach(function(r, e) {
                        (e = e.call(n, s, t)) && v.push(e)
                    }), oa.timer(function() {
                        return p.c = c(e || 1) ? Cr : c, 1
                    }, 0, a), void 0)
                }

                function c(e) {
                    if (u.active !== r) return l();
                    for (var o = e / g, a = f(o), c = v.length; c > 0;) v[--c].call(n, a);
                    return o >= 1 ? (i.event && i.event.end.call(n, s, t), l()) : void 0
                }

                function l() {
                    return --u.count ? delete u[r] : delete n.__transition__, 1
                }
                var s = n.__data__,
                    f = i.ease,
                    h = i.delay,
                    g = i.duration,
                    p = lc,
                    v = [];
                return p.t = h + a, e >= h ? o(e - h) : (p.c = o, void 0)
            }, 0, a)
        }
    }

    function Qo(n, t) {
        n.attr("transform", function(n) {
            return "translate(" + t(n) + ",0)"
        })
    }

    function na(n, t) {
        n.attr("transform", function(n) {
            return "translate(0," + t(n) + ")"
        })
    }

    function ta(n) {
        return n.toISOString()
    }

    function ra(n, t, r) {
        function e(t) {
            return n(t)
        }

        function u(n, r) {
            var e = n[1] - n[0],
                u = e / r,
                i = oa.bisect(Kl, u);
            return i == Kl.length ? [t.year, ro(n.map(function(n) {
                return n / 31536e6
            }), r)[2]] : i ? t[u / Kl[i - 1] < Kl[i] / u ? i - 1 : i] : [ts, ro(n, r)[2]]
        }
        return e.invert = function(t) {
            return ea(n.invert(t))
        }, e.domain = function(t) {
            return arguments.length ? (n.domain(t), e) : n.domain().map(ea)
        }, e.nice = function(n, t) {
            function r(r) {
                return !isNaN(r) && !n.range(r, ea(+r + 1), t).length
            }
            var i = e.domain(),
                o = Xi(i),
                a = null == n ? u(o, 10) : "number" == typeof n && u(o, n);
            return a && (n = a[0], t = a[1]), e.domain(Wi(i, t > 1 ? {
                floor: function(t) {
                    for (; r(t = n.floor(t));) t = ea(t - 1);
                    return t
                },
                ceil: function(t) {
                    for (; r(t = n.ceil(t));) t = ea(+t + 1);
                    return t
                }
            } : n))
        }, e.ticks = function(n, t) {
            var r = Xi(e.domain()),
                i = null == n ? u(r, 10) : "number" == typeof n ? u(r, n) : !n.range && [{
                        range: n
                    },
                    t
                ];
            return i && (n = i[0], t = i[1]), n.range(r[0], ea(+r[1] + 1), 1 > t ? 1 : t)
        }, e.tickFormat = function() {
            return r
        }, e.copy = function() {
            return ra(n.copy(), t, r)
        }, no(e, n)
    }

    function ea(n) {
        return new Date(n)
    }

    function ua(n) {
        return JSON.parse(n.responseText)
    }

    function ia(n) {
        var t = la.createRange();
        return t.selectNode(la.body), t.createContextualFragment(n.responseText)
    }
    var oa = {
        version: "3.4.4"
    };
    Date.now || (Date.now = function() {
        return +new Date
    });
    var aa = [].slice,
        ca = function(n) {
            return aa.call(n)
        }, la = document,
        sa = la.documentElement,
        fa = window;
    try {
        ca(sa.childNodes)[0].nodeType
    } catch (ha) {
        ca = function(n) {
            for (var t = n.length, r = new Array(t); t--;) r[t] = n[t];
            return r
        }
    }
    try {
        la.createElement("div").style.setProperty("opacity", 0, "")
    } catch (ga) {
        var pa = fa.Element.prototype,
            va = pa.setAttribute,
            da = pa.setAttributeNS,
            ma = fa.CSSStyleDeclaration.prototype,
            ya = ma.setProperty;
        pa.setAttribute = function(n, t) {
            va.call(this, n, t + "")
        }, pa.setAttributeNS = function(n, t, r) {
            da.call(this, n, t, r + "")
        }, ma.setProperty = function(n, t, r) {
            ya.call(this, n, t + "", r)
        }
    }
    oa.ascending = n, oa.descending = function(n, t) {
        return n > t ? -1 : t > n ? 1 : t >= n ? 0 : 0 / 0
    }, oa.min = function(n, t) {
        var r, e, u = -1,
            i = n.length;
        if (1 === arguments.length) {
            for (; ++u < i && !(null != (r = n[u]) && r >= r);) r = void 0;
            for (; ++u < i;) null != (e = n[u]) && r > e && (r = e)
        } else {
            for (; ++u < i && !(null != (r = t.call(n, n[u], u)) && r >= r);) r = void 0;
            for (; ++u < i;) null != (e = t.call(n, n[u], u)) && r > e && (r = e)
        }
        return r
    }, oa.max = function(n, t) {
        var r, e, u = -1,
            i = n.length;
        if (1 === arguments.length) {
            for (; ++u < i && !(null != (r = n[u]) && r >= r);) r = void 0;
            for (; ++u < i;) null != (e = n[u]) && e > r && (r = e)
        } else {
            for (; ++u < i && !(null != (r = t.call(n, n[u], u)) && r >= r);) r = void 0;
            for (; ++u < i;) null != (e = t.call(n, n[u], u)) && e > r && (r = e)
        }
        return r
    }, oa.extent = function(n, t) {
        var r, e, u, i = -1,
            o = n.length;
        if (1 === arguments.length) {
            for (; ++i < o && !(null != (r = u = n[i]) && r >= r);) r = u = void 0;
            for (; ++i < o;) null != (e = n[i]) && (r > e && (r = e), e > u && (u = e))
        } else {
            for (; ++i < o && !(null != (r = u = t.call(n, n[i], i)) && r >= r);) r = void 0;
            for (; ++i < o;) null != (e = t.call(n, n[i], i)) && (r > e && (r = e), e > u && (u = e))
        }
        return [r, u]
    }, oa.sum = function(n, t) {
        var r, e = 0,
            u = n.length,
            i = -1;
        if (1 === arguments.length)
            for (; ++i < u;) isNaN(r = +n[i]) || (e += r);
        else
            for (; ++i < u;) isNaN(r = +t.call(n, n[i], i)) || (e += r);
        return e
    }, oa.mean = function(n, r) {
        var e, u = n.length,
            i = 0,
            o = -1,
            a = 0;
        if (1 === arguments.length)
            for (; ++o < u;) t(e = n[o]) && (i += (e - i) / ++a);
        else
            for (; ++o < u;) t(e = r.call(n, n[o], o)) && (i += (e - i) / ++a);
        return a ? i : void 0
    }, oa.quantile = function(n, t) {
        var r = (n.length - 1) * t + 1,
            e = Math.floor(r),
            u = +n[e - 1],
            i = r - e;
        return i ? u + i * (n[e] - u) : u
    }, oa.median = function(r, e) {
        return arguments.length > 1 && (r = r.map(e)), r = r.filter(t), r.length ? oa.quantile(r.sort(n), .5) : void 0
    };
    var xa = r(n);
    oa.bisectLeft = xa.left, oa.bisect = oa.bisectRight = xa.right, oa.bisector = function(t) {
        return r(1 === t.length ? function(r, e) {
            return n(t(r), e)
        } : t)
    }, oa.shuffle = function(n) {
        for (var t, r, e = n.length; e;) r = 0 | Math.random() * e--, t = n[e], n[e] = n[r], n[r] = t;
        return n
    }, oa.permute = function(n, t) {
        for (var r = t.length, e = new Array(r); r--;) e[r] = n[t[r]];
        return e
    }, oa.pairs = function(n) {
        for (var t, r = 0, e = n.length - 1, u = n[0], i = new Array(0 > e ? 0 : e); e > r;) i[r] = [t = u, u = n[++r]];
        return i
    }, oa.zip = function() {
        if (!(u = arguments.length)) return [];
        for (var n = -1, t = oa.min(arguments, e), r = new Array(t); ++n < t;)
            for (var u, i = -1, o = r[n] = new Array(u); ++i < u;) o[i] = arguments[i][n];
        return r
    }, oa.transpose = function(n) {
        return oa.zip.apply(oa, n)
    }, oa.keys = function(n) {
        var t = [];
        for (var r in n) t.push(r);
        return t
    }, oa.values = function(n) {
        var t = [];
        for (var r in n) t.push(n[r]);
        return t
    }, oa.entries = function(n) {
        var t = [];
        for (var r in n) t.push({
            key: r,
            value: n[r]
        });
        return t
    }, oa.merge = function(n) {
        for (var t, r, e, u = n.length, i = -1, o = 0; ++i < u;) o += n[i].length;
        for (r = new Array(o); --u >= 0;)
            for (e = n[u], t = e.length; --t >= 0;) r[--o] = e[t];
        return r
    };
    var Ma = Math.abs;
    oa.range = function(n, t, r) {
        if (arguments.length < 3 && (r = 1, arguments.length < 2 && (t = n, n = 0)), 1 / 0 === (t - n) / r) throw new Error("infinite range");
        var e, i = [],
            o = u(Ma(r)),
            a = -1;
        if (n *= o, t *= o, r *= o, 0 > r)
            for (;
                (e = n + r * ++a) > t;) i.push(e / o);
        else
            for (;
                (e = n + r * ++a) < t;) i.push(e / o);
        return i
    }, oa.map = function(n) {
        var t = new o;
        if (n instanceof o) n.forEach(function(n, r) {
            t.set(n, r)
        });
        else
            for (var r in n) t.set(r, n[r]);
        return t
    }, i(o, {
        has: a,
        get: function(n) {
            return this[_a + n]
        },
        set: function(n, t) {
            return this[_a + n] = t
        },
        remove: c,
        keys: l,
        values: function() {
            var n = [];
            return this.forEach(function(t, r) {
                n.push(r)
            }), n
        },
        entries: function() {
            var n = [];
            return this.forEach(function(t, r) {
                n.push({
                    key: t,
                    value: r
                })
            }), n
        },
        size: s,
        empty: f,
        forEach: function(n) {
            for (var t in this) t.charCodeAt(0) === ba && n.call(this, t.substring(1), this[t])
        }
    });
    var _a = "\x00",
        ba = _a.charCodeAt(0);
    oa.nest = function() {
        function n(t, a, c) {
            if (c >= i.length) return e ? e.call(u, a) : r ? a.sort(r) : a;
            for (var l, s, f, h, g = -1, p = a.length, v = i[c++], d = new o; ++g < p;)(h = d.get(l = v(s = a[g]))) ? h.push(s) : d.set(l, [s]);
            return t ? (s = t(), f = function(r, e) {
                s.set(r, n(t, e, c))
            }) : (s = {}, f = function(r, e) {
                s[r] = n(t, e, c)
            }), d.forEach(f), s
        }

        function t(n, r) {
            if (r >= i.length) return n;
            var e = [],
                u = a[r++];
            return n.forEach(function(n, u) {
                e.push({
                    key: n,
                    values: t(u, r)
                })
            }), u ? e.sort(function(n, t) {
                return u(n.key, t.key)
            }) : e
        }
        var r, e, u = {}, i = [],
            a = [];
        return u.map = function(t, r) {
            return n(r, t, 0)
        }, u.entries = function(r) {
            return t(n(oa.map, r, 0), 0)
        }, u.key = function(n) {
            return i.push(n), u
        }, u.sortKeys = function(n) {
            return a[i.length - 1] = n, u
        }, u.sortValues = function(n) {
            return r = n, u
        }, u.rollup = function(n) {
            return e = n, u
        }, u
    }, oa.set = function(n) {
        var t = new h;
        if (n)
            for (var r = 0, e = n.length; e > r; ++r) t.add(n[r]);
        return t
    }, i(h, {
        has: a,
        add: function(n) {
            return this[_a + n] = !0, n
        },
        remove: function(n) {
            return n = _a + n, n in this && delete this[n]
        },
        values: l,
        size: s,
        empty: f,
        forEach: function(n) {
            for (var t in this) t.charCodeAt(0) === ba && n.call(this, t.substring(1))
        }
    }), oa.behavior = {}, oa.rebind = function(n, t) {
        for (var r, e = 1, u = arguments.length; ++e < u;) n[r = arguments[e]] = g(n, t, t[r]);
        return n
    };
    var wa = ["webkit", "ms", "moz", "Moz", "o", "O"];
    oa.dispatch = function() {
        for (var n = new d, t = -1, r = arguments.length; ++t < r;) n[arguments[t]] = m(n);
        return n
    }, d.prototype.on = function(n, t) {
        var r = n.indexOf("."),
            e = "";
        if (r >= 0 && (e = n.substring(r + 1), n = n.substring(0, r)), n) return arguments.length < 2 ? this[n].on(e) : this[n].on(e, t);
        if (2 === arguments.length) {
            if (null == t)
                for (n in this) this.hasOwnProperty(n) && this[n].on(e, null);
            return this
        }
    }, oa.event = null, oa.requote = function(n) {
        return n.replace(Sa, "\\$&")
    };
    var Sa = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
        ka = {}.__proto__ ? function(n, t) {
            n.__proto__ = t
        } : function(n, t) {
            for (var r in t) n[r] = t[r]
        }, Ea = function(n, t) {
            return t.querySelector(n)
        }, Na = function(n, t) {
            return t.querySelectorAll(n)
        }, Aa = sa[p(sa, "matchesSelector")],
        Ca = function(n, t) {
            return Aa.call(n, t)
        };
    "function" == typeof Sizzle && (Ea = function(n, t) {
        return Sizzle(n, t)[0] || null
    }, Na = Sizzle, Ca = Sizzle.matchesSelector), oa.selection = function() {
        return za
    };
    var La = oa.selection.prototype = [];
    La.select = function(n) {
        var t, r, e, u, i = [];
        n = b(n);
        for (var o = -1, a = this.length; ++o < a;) {
            i.push(t = []), t.parentNode = (e = this[o]).parentNode;
            for (var c = -1, l = e.length; ++c < l;)(u = e[c]) ? (t.push(r = n.call(u, u.__data__, c, o)), r && "__data__" in u && (r.__data__ = u.__data__)) : t.push(null)
        }
        return _(i)
    }, La.selectAll = function(n) {
        var t, r, e = [];
        n = w(n);
        for (var u = -1, i = this.length; ++u < i;)
            for (var o = this[u], a = -1, c = o.length; ++a < c;)(r = o[a]) && (e.push(t = ca(n.call(r, r.__data__, a, u))), t.parentNode = r);
        return _(e)
    };
    var qa = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    oa.ns = {
        prefix: qa,
        qualify: function(n) {
            var t = n.indexOf(":"),
                r = n;
            return t >= 0 && (r = n.substring(0, t), n = n.substring(t + 1)), qa.hasOwnProperty(r) ? {
                space: qa[r],
                local: n
            } : n
        }
    }, La.attr = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) {
                var r = this.node();
                return n = oa.ns.qualify(n), n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n)
            }
            for (t in n) this.each(S(t, n[t]));
            return this
        }
        return this.each(S(n, t))
    }, La.classed = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) {
                var r = this.node(),
                    e = (n = N(n)).length,
                    u = -1;
                if (t = r.classList) {
                    for (; ++u < e;)
                        if (!t.contains(n[u])) return !1
                } else
                    for (t = r.getAttribute("class"); ++u < e;)
                        if (!E(n[u]).test(t)) return !1; return !0
            }
            for (t in n) this.each(A(t, n[t]));
            return this
        }
        return this.each(A(n, t))
    }, La.style = function(n, t, r) {
        var e = arguments.length;
        if (3 > e) {
            if ("string" != typeof n) {
                2 > e && (t = "");
                for (r in n) this.each(L(r, n[r], t));
                return this
            }
            if (2 > e) return fa.getComputedStyle(this.node(), null).getPropertyValue(n);
            r = ""
        }
        return this.each(L(n, t, r))
    }, La.property = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) return this.node()[n];
            for (t in n) this.each(q(t, n[t]));
            return this
        }
        return this.each(q(n, t))
    }, La.text = function(n) {
        return arguments.length ? this.each("function" == typeof n ? function() {
            var t = n.apply(this, arguments);
            this.textContent = null == t ? "" : t
        } : null == n ? function() {
            this.textContent = ""
        } : function() {
            this.textContent = n
        }) : this.node().textContent
    }, La.html = function(n) {
        return arguments.length ? this.each("function" == typeof n ? function() {
            var t = n.apply(this, arguments);
            this.innerHTML = null == t ? "" : t
        } : null == n ? function() {
            this.innerHTML = ""
        } : function() {
            this.innerHTML = n
        }) : this.node().innerHTML
    }, La.append = function(n) {
        return n = T(n), this.select(function() {
            return this.appendChild(n.apply(this, arguments))
        })
    }, La.insert = function(n, t) {
        return n = T(n), t = b(t), this.select(function() {
            return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null)
        })
    }, La.remove = function() {
        return this.each(function() {
            var n = this.parentNode;
            n && n.removeChild(this)
        })
    }, La.data = function(n, t) {
        function r(n, r) {
            var e, u, i, a = n.length,
                f = r.length,
                h = Math.min(a, f),
                g = new Array(f),
                p = new Array(f),
                v = new Array(a);
            if (t) {
                var d, m = new o,
                    y = new o,
                    x = [];
                for (e = -1; ++e < a;) d = t.call(u = n[e], u.__data__, e), m.has(d) ? v[e] = u : m.set(d, u), x.push(d);
                for (e = -1; ++e < f;) d = t.call(r, i = r[e], e), (u = m.get(d)) ? (g[e] = u, u.__data__ = i) : y.has(d) || (p[e] = z(i)), y.set(d, i), m.remove(d);
                for (e = -1; ++e < a;) m.has(x[e]) && (v[e] = n[e])
            } else {
                for (e = -1; ++e < h;) u = n[e], i = r[e], u ? (u.__data__ = i, g[e] = u) : p[e] = z(i);
                for (; f > e; ++e) p[e] = z(r[e]);
                for (; a > e; ++e) v[e] = n[e]
            }
            p.update = g, p.parentNode = g.parentNode = v.parentNode = n.parentNode, c.push(p), l.push(g), s.push(v)
        }
        var e, u, i = -1,
            a = this.length;
        if (!arguments.length) {
            for (n = new Array(a = (e = this[0]).length); ++i < a;)(u = e[i]) && (n[i] = u.__data__);
            return n
        }
        var c = U([]),
            l = _([]),
            s = _([]);
        if ("function" == typeof n)
            for (; ++i < a;) r(e = this[i], n.call(e, e.parentNode.__data__, i));
        else
            for (; ++i < a;) r(e = this[i], n);
        return l.enter = function() {
            return c
        }, l.exit = function() {
            return s
        }, l
    }, La.datum = function(n) {
        return arguments.length ? this.property("__data__", n) : this.property("__data__")
    }, La.filter = function(n) {
        var t, r, e, u = [];
        "function" != typeof n && (n = R(n));
        for (var i = 0, o = this.length; o > i; i++) {
            u.push(t = []), t.parentNode = (r = this[i]).parentNode;
            for (var a = 0, c = r.length; c > a; a++)(e = r[a]) && n.call(e, e.__data__, a, i) && t.push(e)
        }
        return _(u)
    }, La.order = function() {
        for (var n = -1, t = this.length; ++n < t;)
            for (var r, e = this[n], u = e.length - 1, i = e[u]; --u >= 0;)(r = e[u]) && (i && i !== r.nextSibling && i.parentNode.insertBefore(r, i), i = r);
        return this
    }, La.sort = function(n) {
        n = D.apply(this, arguments);
        for (var t = -1, r = this.length; ++t < r;) this[t].sort(n);
        return this.order()
    }, La.each = function(n) {
        return P(this, function(t, r, e) {
            n.call(t, t.__data__, r, e)
        })
    }, La.call = function(n) {
        var t = ca(arguments);
        return n.apply(t[0] = this, t), this
    }, La.empty = function() {
        return !this.node()
    }, La.node = function() {
        for (var n = 0, t = this.length; t > n; n++)
            for (var r = this[n], e = 0, u = r.length; u > e; e++) {
                var i = r[e];
                if (i) return i
            }
        return null
    }, La.size = function() {
        var n = 0;
        return this.each(function() {
            ++n
        }), n
    };
    var Ta = [];
    oa.selection.enter = U, oa.selection.enter.prototype = Ta, Ta.append = La.append, Ta.empty = La.empty, Ta.node = La.node, Ta.call = La.call, Ta.size = La.size, Ta.select = function(n) {
        for (var t, r, e, u, i, o = [], a = -1, c = this.length; ++a < c;) {
            e = (u = this[a]).update, o.push(t = []), t.parentNode = u.parentNode;
            for (var l = -1, s = u.length; ++l < s;)(i = u[l]) ? (t.push(e[l] = r = n.call(u.parentNode, i.__data__, l, a)), r.__data__ = i.__data__) : t.push(null)
        }
        return _(o)
    }, Ta.insert = function(n, t) {
        return arguments.length < 2 && (t = j(this)), La.insert.call(this, n, t)
    }, La.transition = function() {
        for (var n, t, r = Hl || ++Zl, e = [], u = Fl || {
                time: Date.now(),
                ease: Tu,
                delay: 0,
                duration: 250
            }, i = -1, o = this.length; ++i < o;) {
            e.push(n = []);
            for (var a = this[i], c = -1, l = a.length; ++c < l;)(t = a[c]) && Ko(t, c, r, u), n.push(t)
        }
        return Jo(e, r)
    }, La.interrupt = function() {
        return this.each(H)
    }, oa.select = function(n) {
        var t = ["string" == typeof n ? Ea(n, la) : n];
        return t.parentNode = sa, _([t])
    }, oa.selectAll = function(n) {
        var t = ca("string" == typeof n ? Na(n, la) : n);
        return t.parentNode = sa, _([t])
    };
    var za = oa.select(sa);
    La.on = function(n, t, r) {
        var e = arguments.length;
        if (3 > e) {
            if ("string" != typeof n) {
                2 > e && (t = !1);
                for (r in n) this.each(F(r, n[r], t));
                return this
            }
            if (2 > e) return (e = this.node()["__on" + n]) && e._;
            r = !1
        }
        return this.each(F(n, t, r))
    };
    var Ra = oa.map({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    });
    Ra.forEach(function(n) {
        "on" + n in la && Ra.remove(n)
    });
    var Da = "onselectstart" in la ? null : p(sa.style, "userSelect"),
        Pa = 0;
    oa.mouse = function(n) {
        return Z(n, x())
    }, oa.touches = function(n, t) {
        return arguments.length < 2 && (t = x().touches), t ? ca(t).map(function(t) {
            var r = Z(n, t);
            return r.identifier = t.identifier, r
        }) : []
    }, oa.behavior.drag = function() {
        function n() {
            this.on("mousedown.drag", u).on("touchstart.drag", i)
        }

        function t(n, t, u, i, o) {
            return function() {
                function a() {
                    var n, r, e = t(h, v);
                    e && (n = e[0] - x[0], r = e[1] - x[1], p |= n | r, x = e, g({
                        type: "drag",
                        x: e[0] + l[0],
                        y: e[1] + l[1],
                        dx: n,
                        dy: r
                    }))
                }

                function c() {
                    t(h, v) && (m.on(i + d, null).on(o + d, null), y(p && oa.event.target === f), g({
                        type: "dragend"
                    }))
                }
                var l, s = this,
                    f = oa.event.target,
                    h = s.parentNode,
                    g = r.of(s, arguments),
                    p = 0,
                    v = n(),
                    d = ".drag" + (null == v ? "" : "-" + v),
                    m = oa.select(u()).on(i + d, a).on(o + d, c),
                    y = Y(),
                    x = t(h, v);
                e ? (l = e.apply(s, arguments), l = [l.x - x[0], l.y - x[1]]) : l = [0, 0], g({
                    type: "dragstart"
                })
            }
        }
        var r = M(n, "drag", "dragstart", "dragend"),
            e = null,
            u = t(v, oa.mouse, X, "mousemove", "mouseup"),
            i = t(V, oa.touch, $, "touchmove", "touchend");
        return n.origin = function(t) {
            return arguments.length ? (e = t, n) : e
        }, oa.rebind(n, r, "on")
    };
    var Ua = Math.PI,
        ja = 2 * Ua,
        Ha = Ua / 2,
        Fa = 1e-6,
        Oa = Fa * Fa,
        Ia = Ua / 180,
        Ya = 180 / Ua,
        Za = Math.SQRT2,
        Va = 2,
        $a = 4;
    oa.interpolateZoom = function(n, t) {
        function r(n) {
            var t = n * y;
            if (m) {
                var r = Q(v),
                    o = i / (Va * h) * (r * nt(Za * t + v) - K(v));
                return [e + o * l, u + o * s, i * r / Q(Za * t + v)]
            }
            return [e + n * l, u + n * s, i * Math.exp(Za * t)]
        }
        var e = n[0],
            u = n[1],
            i = n[2],
            o = t[0],
            a = t[1],
            c = t[2],
            l = o - e,
            s = a - u,
            f = l * l + s * s,
            h = Math.sqrt(f),
            g = (c * c - i * i + $a * f) / (2 * i * Va * h),
            p = (c * c - i * i - $a * f) / (2 * c * Va * h),
            v = Math.log(Math.sqrt(g * g + 1) - g),
            d = Math.log(Math.sqrt(p * p + 1) - p),
            m = d - v,
            y = (m || Math.log(c / i)) / Za;
        return r.duration = 1e3 * y, r
    }, oa.behavior.zoom = function() {
        function n(n) {
            n.on(N, l).on(Ja + ".zoom", f).on(A, h).on("dblclick.zoom", g).on(L, s)
        }

        function t(n) {
            return [(n[0] - S.x) / S.k, (n[1] - S.y) / S.k]
        }

        function r(n) {
            return [n[0] * S.k + S.x, n[1] * S.k + S.y]
        }

        function e(n) {
            S.k = Math.max(E[0], Math.min(E[1], n))
        }

        function u(n, t) {
            t = r(t), S.x += n[0] - t[0], S.y += n[1] - t[1]
        }

        function i() {
            _ && _.domain(x.range().map(function(n) {
                return (n - S.x) / S.k
            }).map(x.invert)), w && w.domain(b.range().map(function(n) {
                return (n - S.y) / S.k
            }).map(b.invert))
        }

        function o(n) {
            n({
                type: "zoomstart"
            })
        }

        function a(n) {
            i(), n({
                type: "zoom",
                scale: S.k,
                translate: [S.x, S.y]
            })
        }

        function c(n) {
            n({
                type: "zoomend"
            })
        }

        function l() {
            function n() {
                s = 1, u(oa.mouse(e), g), a(l)
            }

            function r() {
                f.on(A, fa === e ? h : null).on(C, null), p(s && oa.event.target === i), c(l)
            }
            var e = this,
                i = oa.event.target,
                l = q.of(e, arguments),
                s = 0,
                f = oa.select(fa).on(A, n).on(C, r),
                g = t(oa.mouse(e)),
                p = Y();
            H.call(e), o(l)
        }

        function s() {
            function n() {
                var n = oa.touches(g);
                return h = S.k, n.forEach(function(n) {
                    n.identifier in v && (v[n.identifier] = t(n))
                }), n
            }

            function r() {
                for (var t = oa.event.changedTouches, r = 0, i = t.length; i > r; ++r) v[t[r].identifier] = null;
                var o = n(),
                    c = Date.now();
                if (1 === o.length) {
                    if (500 > c - m) {
                        var l = o[0],
                            s = v[l.identifier];
                        e(2 * S.k), u(l, s), y(), a(p)
                    }
                    m = c
                } else if (o.length > 1) {
                    var l = o[0],
                        f = o[1],
                        h = l[0] - f[0],
                        g = l[1] - f[1];
                    d = h * h + g * g
                }
            }

            function i() {
                for (var n, t, r, i, o = oa.touches(g), c = 0, l = o.length; l > c; ++c, i = null)
                    if (r = o[c], i = v[r.identifier]) {
                        if (t) break;
                        n = r, t = i
                    }
                if (i) {
                    var s = (s = r[0] - n[0]) * s + (s = r[1] - n[1]) * s,
                        f = d && Math.sqrt(s / d);
                    n = [(n[0] + r[0]) / 2, (n[1] + r[1]) / 2], t = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2], e(f * h)
                }
                m = null, u(n, t), a(p)
            }

            function f() {
                if (oa.event.touches.length) {
                    for (var t = oa.event.changedTouches, r = 0, e = t.length; e > r; ++r) delete v[t[r].identifier];
                    for (var u in v) return void n()
                }
                b.on(x, null), w.on(N, l).on(L, s), k(), c(p)
            }
            var h, g = this,
                p = q.of(g, arguments),
                v = {}, d = 0,
                x = ".zoom-" + oa.event.changedTouches[0].identifier,
                M = "touchmove" + x,
                _ = "touchend" + x,
                b = oa.select(oa.event.target).on(M, i).on(_, f),
                w = oa.select(g).on(N, null).on(L, r),
                k = Y();
            H.call(g), r(), o(p)
        }

        function f() {
            var n = q.of(this, arguments);
            d ? clearTimeout(d) : (H.call(this), o(n)), d = setTimeout(function() {
                d = null, c(n)
            }, 50), y();
            var r = v || oa.mouse(this);
            p || (p = t(r)), e(Math.pow(2, .002 * Xa()) * S.k), u(r, p), a(n)
        }

        function h() {
            p = null
        }

        function g() {
            var n = q.of(this, arguments),
                r = oa.mouse(this),
                i = t(r),
                l = Math.log(S.k) / Math.LN2;
            o(n), e(Math.pow(2, oa.event.shiftKey ? Math.ceil(l) - 1 : Math.floor(l) + 1)), u(r, i), a(n), c(n)
        }
        var p, v, d, m, x, _, b, w, S = {
                x: 0,
                y: 0,
                k: 1
            }, k = [960, 500],
            E = Ba,
            N = "mousedown.zoom",
            A = "mousemove.zoom",
            C = "mouseup.zoom",
            L = "touchstart.zoom",
            q = M(n, "zoomstart", "zoom", "zoomend");
        return n.event = function(n) {
            n.each(function() {
                var n = q.of(this, arguments),
                    t = S;
                Hl ? oa.select(this).transition().each("start.zoom", function() {
                    S = this.__chart__ || {
                        x: 0,
                        y: 0,
                        k: 1
                    }, o(n)
                }).tween("zoom:zoom", function() {
                    var r = k[0],
                        e = k[1],
                        u = r / 2,
                        i = e / 2,
                        o = oa.interpolateZoom([(u - S.x) / S.k, (i - S.y) / S.k, r / S.k], [(u - t.x) / t.k, (i - t.y) / t.k, r / t.k]);
                    return function(t) {
                        var e = o(t),
                            c = r / e[2];
                        this.__chart__ = S = {
                            x: u - e[0] * c,
                            y: i - e[1] * c,
                            k: c
                        }, a(n)
                    }
                }).each("end.zoom", function() {
                    c(n)
                }) : (this.__chart__ = S, o(n), a(n), c(n))
            })
        }, n.translate = function(t) {
            return arguments.length ? (S = {
                x: +t[0],
                y: +t[1],
                k: S.k
            }, i(), n) : [S.x, S.y]
        }, n.scale = function(t) {
            return arguments.length ? (S = {
                x: S.x,
                y: S.y,
                k: +t
            }, i(), n) : S.k
        }, n.scaleExtent = function(t) {
            return arguments.length ? (E = null == t ? Ba : [+t[0], +t[1]], n) : E
        }, n.center = function(t) {
            return arguments.length ? (v = t && [+t[0], +t[1]], n) : v
        }, n.size = function(t) {
            return arguments.length ? (k = t && [+t[0], +t[1]], n) : k
        }, n.x = function(t) {
            return arguments.length ? (_ = t, x = t.copy(), S = {
                x: 0,
                y: 0,
                k: 1
            }, n) : _
        }, n.y = function(t) {
            return arguments.length ? (w = t, b = t.copy(), S = {
                x: 0,
                y: 0,
                k: 1
            }, n) : w
        }, oa.rebind(n, q, "on")
    };
    var Xa, Ba = [0, 1 / 0],
        Ja = "onwheel" in la ? (Xa = function() {
            return -oa.event.deltaY * (oa.event.deltaMode ? 120 : 1)
        }, "wheel") : "onmousewheel" in la ? (Xa = function() {
            return oa.event.wheelDelta
        }, "mousewheel") : (Xa = function() {
            return -oa.event.detail
        }, "MozMousePixelScroll");
    rt.prototype.toString = function() {
        return this.rgb() + ""
    }, oa.hsl = function(n, t, r) {
        return 1 === arguments.length ? n instanceof ut ? et(n.h, n.s, n.l) : _t("" + n, bt, et) : et(+n, +t, +r)
    };
    var Wa = ut.prototype = new rt;
    Wa.brighter = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1), et(this.h, this.s, this.l / n)
    }, Wa.darker = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1), et(this.h, this.s, n * this.l)
    }, Wa.rgb = function() {
        return it(this.h, this.s, this.l)
    }, oa.hcl = function(n, t, r) {
        return 1 === arguments.length ? n instanceof at ? ot(n.h, n.c, n.l) : n instanceof st ? ht(n.l, n.a, n.b) : ht((n = wt((n = oa.rgb(n)).r, n.g, n.b)).l, n.a, n.b) : ot(+n, +t, +r)
    };
    var Ga = at.prototype = new rt;
    Ga.brighter = function(n) {
        return ot(this.h, this.c, Math.min(100, this.l + Ka * (arguments.length ? n : 1)))
    }, Ga.darker = function(n) {
        return ot(this.h, this.c, Math.max(0, this.l - Ka * (arguments.length ? n : 1)))
    }, Ga.rgb = function() {
        return ct(this.h, this.c, this.l).rgb()
    }, oa.lab = function(n, t, r) {
        return 1 === arguments.length ? n instanceof st ? lt(n.l, n.a, n.b) : n instanceof at ? ct(n.l, n.c, n.h) : wt((n = oa.rgb(n)).r, n.g, n.b) : lt(+n, +t, +r)
    };
    var Ka = 18,
        Qa = .95047,
        nc = 1,
        tc = 1.08883,
        rc = st.prototype = new rt;
    rc.brighter = function(n) {
        return lt(Math.min(100, this.l + Ka * (arguments.length ? n : 1)), this.a, this.b)
    }, rc.darker = function(n) {
        return lt(Math.max(0, this.l - Ka * (arguments.length ? n : 1)), this.a, this.b)
    }, rc.rgb = function() {
        return ft(this.l, this.a, this.b)
    }, oa.rgb = function(n, t, r) {
        return 1 === arguments.length ? n instanceof xt ? yt(n.r, n.g, n.b) : _t("" + n, yt, it) : yt(~~n, ~~t, ~~r)
    };
    var ec = xt.prototype = new rt;
    ec.brighter = function(n) {
        n = Math.pow(.7, arguments.length ? n : 1);
        var t = this.r,
            r = this.g,
            e = this.b,
            u = 30;
        return t || r || e ? (t && u > t && (t = u), r && u > r && (r = u), e && u > e && (e = u), yt(Math.min(255, ~~ (t / n)), Math.min(255, ~~ (r / n)), Math.min(255, ~~ (e / n)))) : yt(u, u, u)
    }, ec.darker = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1), yt(~~(n * this.r), ~~ (n * this.g), ~~ (n * this.b))
    }, ec.hsl = function() {
        return bt(this.r, this.g, this.b)
    }, ec.toString = function() {
        return "#" + Mt(this.r) + Mt(this.g) + Mt(this.b)
    };
    var uc = oa.map({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    });
    uc.forEach(function(n, t) {
        uc.set(n, dt(t))
    }), oa.functor = Et, oa.xhr = At(Nt), oa.dsv = function(n, t) {
        function r(n, r, i) {
            arguments.length < 3 && (i = r, r = null);
            var o = Ct(n, t, null == r ? e : u(r), i);
            return o.row = function(n) {
                return arguments.length ? o.response(null == (r = n) ? e : u(n)) : r
            }, o
        }

        function e(n) {
            return r.parse(n.responseText)
        }

        function u(n) {
            return function(t) {
                return r.parse(t.responseText, n)
            }
        }

        function i(t) {
            return t.map(o).join(n)
        }

        function o(n) {
            return a.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n
        }
        var a = new RegExp('["' + n + "\n]"),
            c = n.charCodeAt(0);
        return r.parse = function(n, t) {
            var e;
            return r.parseRows(n, function(n, r) {
                if (e) return e(n, r - 1);
                var u = new Function("d", "return {" + n.map(function(n, t) {
                    return JSON.stringify(n) + ": d[" + t + "]"
                }).join(",") + "}");
                e = t ? function(n, r) {
                    return t(u(n), r)
                } : u
            })
        }, r.parseRows = function(n, t) {
            function r() {
                if (s >= l) return o;
                if (u) return u = !1, i;
                var t = s;
                if (34 === n.charCodeAt(t)) {
                    for (var r = t; r++ < l;)
                        if (34 === n.charCodeAt(r)) {
                            if (34 !== n.charCodeAt(r + 1)) break;
                            ++r
                        }
                    s = r + 2;
                    var e = n.charCodeAt(r + 1);
                    return 13 === e ? (u = !0, 10 === n.charCodeAt(r + 2) && ++s) : 10 === e && (u = !0), n.substring(t + 1, r).replace(/""/g, '"')
                }
                for (; l > s;) {
                    var e = n.charCodeAt(s++),
                        a = 1;
                    if (10 === e) u = !0;
                    else if (13 === e) u = !0, 10 === n.charCodeAt(s) && (++s, ++a);
                    else if (e !== c) continue;
                    return n.substring(t, s - a)
                }
                return n.substring(t)
            }
            for (var e, u, i = {}, o = {}, a = [], l = n.length, s = 0, f = 0;
                (e = r()) !== o;) {
                for (var h = []; e !== i && e !== o;) h.push(e), e = r();
                (!t || (h = t(h, f++))) && a.push(h)
            }
            return a
        }, r.format = function(t) {
            if (Array.isArray(t[0])) return r.formatRows(t);
            var e = new h,
                u = [];
            return t.forEach(function(n) {
                for (var t in n) e.has(t) || u.push(e.add(t))
            }), [u.map(o).join(n)].concat(t.map(function(t) {
                return u.map(function(n) {
                    return o(t[n])
                }).join(n)
            })).join("\n")
        }, r.formatRows = function(n) {
            return n.map(i).join("\n")
        }, r
    }, oa.csv = oa.dsv(",", "text/csv"), oa.tsv = oa.dsv("   ", "text/tab-separated-values"), oa.touch = function(n, t, r) {
        if (arguments.length < 3 && (r = t, t = x().changedTouches), t)
            for (var e, u = 0, i = t.length; i > u; ++u)
                if ((e = t[u]).identifier === r) return Z(n, e)
    };
    var ic, oc, ac, cc, lc, sc = fa[p(fa, "requestAnimationFrame")] || function(n) {
            setTimeout(n, 17)
        };
    oa.timer = function(n, t, r) {
        var e = arguments.length;
        2 > e && (t = 0), 3 > e && (r = Date.now());
        var u = r + t,
            i = {
                c: n,
                t: u,
                f: !1,
                n: null
            };
        oc ? oc.n = i : ic = i, oc = i, ac || (cc = clearTimeout(cc), ac = 1, sc(qt))
    }, oa.timer.flush = function() {
        Tt(), zt()
    }, oa.round = function(n, t) {
        return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n)
    };
    var fc = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Dt);
    oa.formatPrefix = function(n, t) {
        var r = 0;
        return n && (0 > n && (n *= -1), t && (n = oa.round(n, Rt(n, t))), r = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10), r = Math.max(-24, Math.min(24, 3 * Math.floor((r - 1) / 3)))), fc[8 + r / 3]
    };
    var hc = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
        gc = oa.map({
            b: function(n) {
                return n.toString(2)
            },
            c: function(n) {
                return String.fromCharCode(n)
            },
            o: function(n) {
                return n.toString(8)
            },
            x: function(n) {
                return n.toString(16)
            },
            X: function(n) {
                return n.toString(16).toUpperCase()
            },
            g: function(n, t) {
                return n.toPrecision(t)
            },
            e: function(n, t) {
                return n.toExponential(t)
            },
            f: function(n, t) {
                return n.toFixed(t)
            },
            r: function(n, t) {
                return (n = oa.round(n, Rt(n, t))).toFixed(Math.max(0, Math.min(20, Rt(n * (1 + 1e-15), t))))
            }
        }),
        pc = oa.time = {}, vc = Date;
    jt.prototype = {
        getDate: function() {
            return this._.getUTCDate()
        },
        getDay: function() {
            return this._.getUTCDay()
        },
        getFullYear: function() {
            return this._.getUTCFullYear()
        },
        getHours: function() {
            return this._.getUTCHours()
        },
        getMilliseconds: function() {
            return this._.getUTCMilliseconds()
        },
        getMinutes: function() {
            return this._.getUTCMinutes()
        },
        getMonth: function() {
            return this._.getUTCMonth()
        },
        getSeconds: function() {
            return this._.getUTCSeconds()
        },
        getTime: function() {
            return this._.getTime()
        },
        getTimezoneOffset: function() {
            return 0
        },
        valueOf: function() {
            return this._.valueOf()
        },
        setDate: function() {
            dc.setUTCDate.apply(this._, arguments)
        },
        setDay: function() {
            dc.setUTCDay.apply(this._, arguments)
        },
        setFullYear: function() {
            dc.setUTCFullYear.apply(this._, arguments)
        },
        setHours: function() {
            dc.setUTCHours.apply(this._, arguments)
        },
        setMilliseconds: function() {
            dc.setUTCMilliseconds.apply(this._, arguments)
        },
        setMinutes: function() {
            dc.setUTCMinutes.apply(this._, arguments)
        },
        setMonth: function() {
            dc.setUTCMonth.apply(this._, arguments)
        },
        setSeconds: function() {
            dc.setUTCSeconds.apply(this._, arguments)
        },
        setTime: function() {
            dc.setTime.apply(this._, arguments)
        }
    };
    var dc = Date.prototype;
    pc.year = Ht(function(n) {
        return n = pc.day(n), n.setMonth(0, 1), n
    }, function(n, t) {
        n.setFullYear(n.getFullYear() + t)
    }, function(n) {
        return n.getFullYear()
    }), pc.years = pc.year.range, pc.years.utc = pc.year.utc.range, pc.day = Ht(function(n) {
        var t = new vc(2e3, 0);
        return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t
    }, function(n, t) {
        n.setDate(n.getDate() + t)
    }, function(n) {
        return n.getDate() - 1
    }), pc.days = pc.day.range, pc.days.utc = pc.day.utc.range, pc.dayOfYear = function(n) {
        var t = pc.year(n);
        return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5)
    }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(n, t) {
        t = 7 - t;
        var r = pc[n] = Ht(function(n) {
            return (n = pc.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7), n
        }, function(n, t) {
            n.setDate(n.getDate() + 7 * Math.floor(t))
        }, function(n) {
            var r = pc.year(n).getDay();
            return Math.floor((pc.dayOfYear(n) + (r + t) % 7) / 7) - (r !== t)
        });
        pc[n + "s"] = r.range, pc[n + "s"].utc = r.utc.range, pc[n + "OfYear"] = function(n) {
            var r = pc.year(n).getDay();
            return Math.floor((pc.dayOfYear(n) + (r + t) % 7) / 7)
        }
    }), pc.week = pc.sunday, pc.weeks = pc.sunday.range, pc.weeks.utc = pc.sunday.utc.range, pc.weekOfYear = pc.sundayOfYear;
    var mc = {
        "-": "",
        _: " ",
        0: "0"
    }, yc = /^\s*\d+/,
        xc = /^%/;
    oa.locale = function(n) {
        return {
            numberFormat: Pt(n),
            timeFormat: Ot(n)
        }
    };
    var Mc = oa.locale({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""],
        dateTime: "%a %b %e %X %Y",
        date: "%m/%d/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    oa.format = Mc.numberFormat, oa.geo = {}, cr.prototype = {
        s: 0,
        t: 0,
        add: function(n) {
            lr(n, this.t, _c), lr(_c.s, this.s, this), this.s ? this.t += _c.t : this.s = _c.t
        },
        reset: function() {
            this.s = this.t = 0
        },
        valueOf: function() {
            return this.s
        }
    };
    var _c = new cr;
    oa.geo.stream = function(n, t) {
        n && bc.hasOwnProperty(n.type) ? bc[n.type](n, t) : sr(n, t)
    };
    var bc = {
        Feature: function(n, t) {
            sr(n.geometry, t)
        },
        FeatureCollection: function(n, t) {
            for (var r = n.features, e = -1, u = r.length; ++e < u;) sr(r[e].geometry, t)
        }
    }, wc = {
            Sphere: function(n, t) {
                t.sphere()
            },
            Point: function(n, t) {
                n = n.coordinates, t.point(n[0], n[1], n[2])
            },
            MultiPoint: function(n, t) {
                for (var r = n.coordinates, e = -1, u = r.length; ++e < u;) n = r[e], t.point(n[0], n[1], n[2])
            },
            LineString: function(n, t) {
                fr(n.coordinates, t, 0)
            },
            MultiLineString: function(n, t) {
                for (var r = n.coordinates, e = -1, u = r.length; ++e < u;) fr(r[e], t, 0)
            },
            Polygon: function(n, t) {
                hr(n.coordinates, t)
            },
            MultiPolygon: function(n, t) {
                for (var r = n.coordinates, e = -1, u = r.length; ++e < u;) hr(r[e], t)
            },
            GeometryCollection: function(n, t) {
                for (var r = n.geometries, e = -1, u = r.length; ++e < u;) sr(r[e], t)
            }
        };
    oa.geo.area = function(n) {
        return Sc = 0, oa.geo.stream(n, Ec), Sc
    };
    var Sc, kc = new cr,
        Ec = {
            sphere: function() {
                Sc += 4 * Ua
            },
            point: v,
            lineStart: v,
            lineEnd: v,
            polygonStart: function() {
                kc.reset(), Ec.lineStart = gr
            },
            polygonEnd: function() {
                var n = 2 * kc;
                Sc += 0 > n ? 4 * Ua + n : n, Ec.lineStart = Ec.lineEnd = Ec.point = v
            }
        };
    oa.geo.bounds = function() {
        function n(n, t) {
            x.push(M = [s = n, h = n]), f > t && (f = t), t > g && (g = t)
        }

        function t(t, r) {
            var e = pr([t * Ia, r * Ia]);
            if (m) {
                var u = dr(m, e),
                    i = [u[1], -u[0], 0],
                    o = dr(i, u);
                xr(o), o = _r(o);
                var c = t - p,
                    l = c > 0 ? 1 : -1,
                    v = o[0] * Ya * l,
                    d = Ma(c) > 180;
                if (d ^ (v > l * p && l * t > v)) {
                    var y = o[1] * Ya;
                    y > g && (g = y)
                } else if (v = (v + 360) % 360 - 180, d ^ (v > l * p && l * t > v)) {
                    var y = -o[1] * Ya;
                    f > y && (f = y)
                } else f > r && (f = r), r > g && (g = r);
                d ? p > t ? a(s, t) > a(s, h) && (h = t) : a(t, h) > a(s, h) && (s = t) : h >= s ? (s > t && (s = t), t > h && (h = t)) : t > p ? a(s, t) > a(s, h) && (h = t) : a(t, h) > a(s, h) && (s = t)
            } else n(t, r);
            m = e, p = t
        }

        function r() {
            _.point = t
        }

        function e() {
            M[0] = s, M[1] = h, _.point = n, m = null
        }

        function u(n, r) {
            if (m) {
                var e = n - p;
                y += Ma(e) > 180 ? e + (e > 0 ? 360 : -360) : e
            } else v = n, d = r;
            Ec.point(n, r), t(n, r)
        }

        function i() {
            Ec.lineStart()
        }

        function o() {
            u(v, d), Ec.lineEnd(), Ma(y) > Fa && (s = -(h = 180)), M[0] = s, M[1] = h, m = null
        }

        function a(n, t) {
            return (t -= n) < 0 ? t + 360 : t
        }

        function c(n, t) {
            return n[0] - t[0]
        }

        function l(n, t) {
            return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
        }
        var s, f, h, g, p, v, d, m, y, x, M, _ = {
                point: n,
                lineStart: r,
                lineEnd: e,
                polygonStart: function() {
                    _.point = u, _.lineStart = i, _.lineEnd = o, y = 0, Ec.polygonStart()
                },
                polygonEnd: function() {
                    Ec.polygonEnd(), _.point = n, _.lineStart = r, _.lineEnd = e, 0 > kc ? (s = -(h = 180), f = -(g = 90)) : y > Fa ? g = 90 : -Fa > y && (f = -90), M[0] = s, M[1] = h
                }
            };
        return function(n) {
            g = h = -(s = f = 1 / 0), x = [], oa.geo.stream(n, _);
            var t = x.length;
            if (t) {
                x.sort(c);
                for (var r, e = 1, u = x[0], i = [u]; t > e; ++e) r = x[e], l(r[0], u) || l(r[1], u) ? (a(u[0], r[1]) > a(u[0], u[1]) && (u[1] = r[1]), a(r[0], u[1]) > a(u[0], u[1]) && (u[0] = r[0])) : i.push(u = r);
                for (var o, r, p = -1 / 0, t = i.length - 1, e = 0, u = i[t]; t >= e; u = r, ++e) r = i[e], (o = a(u[1], r[0])) > p && (p = o, s = r[0], h = u[1])
            }
            return x = M = null, 1 / 0 === s || 1 / 0 === f ? [
                [0 / 0, 0 / 0],
                [0 / 0, 0 / 0]
            ] : [
                [s, f],
                [h, g]
            ]
        }
    }(), oa.geo.centroid = function(n) {
        Nc = Ac = Cc = Lc = qc = Tc = zc = Rc = Dc = Pc = Uc = 0, oa.geo.stream(n, jc);
        var t = Dc,
            r = Pc,
            e = Uc,
            u = t * t + r * r + e * e;
        return Oa > u && (t = Tc, r = zc, e = Rc, Fa > Ac && (t = Cc, r = Lc, e = qc), u = t * t + r * r + e * e, Oa > u) ? [0 / 0, 0 / 0] : [Math.atan2(r, t) * Ya, G(e / Math.sqrt(u)) * Ya]
    };
    var Nc, Ac, Cc, Lc, qc, Tc, zc, Rc, Dc, Pc, Uc, jc = {
            sphere: v,
            point: Sr,
            lineStart: Er,
            lineEnd: Nr,
            polygonStart: function() {
                jc.lineStart = Ar
            },
            polygonEnd: function() {
                jc.lineStart = Er
            }
        };
    oa.geo.pointInPolygon = Ur;
    var Hc = zr(Or, jr, Fr, [-Ua, -Ua / 2], Pr),
        Fc = 1e9;
    oa.geo.clipExtent = function() {
        var n, t, r, e, u, i, o = {
                stream: function(n) {
                    return u && (u.valid = !1), u = i(n), u.valid = !0, u
                },
                extent: function(a) {
                    return arguments.length ? (i = Zr(n = +a[0][0], t = +a[0][1], r = +a[1][0], e = +a[1][1]), u && (u.valid = !1, u = null), o) : [
                        [n, t],
                        [r, e]
                    ]
                }
            };
        return o.extent([
            [0, 0],
            [960, 500]
        ])
    }, oa.geo.distance = function(n, t) {
        var r, e = (t[0] - n[0]) * Ia,
            u = n[1] * Ia,
            i = t[1] * Ia,
            o = Math.sin(e),
            a = Math.cos(e),
            c = Math.sin(u),
            l = Math.cos(u),
            s = Math.sin(i),
            f = Math.cos(i);
        return Math.atan2(Math.sqrt((r = f * o) * r + (r = l * s - c * f * a) * r), c * s + l * f * a)
    };
    var Oc = {};
    (oa.geo.conicEqualArea = function() {
        return Kr(Qr)
    }).raw = Qr, oa.geo.albers = function() {
        return oa.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
    }, oa.geo.albersUsa = function() {
        function n(n) {
            var i = n[0],
                o = n[1];
            return t = null, r(i, o), t || (e(i, o), t) || u(i, o), t
        }
        var t, r, e, u, i = oa.geo.albers(),
            o = oa.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
            a = oa.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
            c = {
                point: function(n, r) {
                    t = [n, r]
                }
            };
        return n.invert = function(n) {
            var t = i.scale(),
                r = i.translate(),
                e = (n[0] - r[0]) / t,
                u = (n[1] - r[1]) / t;
            return (u >= .12 && .234 > u && e >= -.425 && -.214 > e ? o : u >= .166 && .234 > u && e >= -.214 && -.115 > e ? a : i).invert(n)
        }, n.stream = function(n) {
            var t = i.stream(n),
                r = o.stream(n),
                e = a.stream(n);
            return {
                point: function(n, u) {
                    t.point(n, u), r.point(n, u), e.point(n, u)
                },
                sphere: function() {
                    t.sphere(), r.sphere(), e.sphere()
                },
                lineStart: function() {
                    t.lineStart(), r.lineStart(), e.lineStart()
                },
                lineEnd: function() {
                    t.lineEnd(), r.lineEnd(), e.lineEnd()
                },
                polygonStart: function() {
                    t.polygonStart(), r.polygonStart(), e.polygonStart()
                },
                polygonEnd: function() {
                    t.polygonEnd(), r.polygonEnd(), e.polygonEnd()
                }
            }
        }, n.precision = function(t) {
            return arguments.length ? (i.precision(t), o.precision(t), a.precision(t), n) : i.precision()
        }, n.scale = function(t) {
            return arguments.length ? (i.scale(t), o.scale(.35 * t), a.scale(t), n.translate(i.translate())) : i.scale()
        }, n.translate = function(t) {
            if (!arguments.length) return i.translate();
            var l = i.scale(),
                s = +t[0],
                f = +t[1];
            return r = i.translate(t).clipExtent([
                [s - .455 * l, f - .238 * l],
                [s + .455 * l, f + .238 * l]
            ]).stream(c).point, e = o.translate([s - .307 * l, f + .201 * l]).clipExtent([
                [s - .425 * l + Fa, f + .12 * l + Fa],
                [s - .214 * l - Fa, f + .234 * l - Fa]
            ]).stream(c).point, u = a.translate([s - .205 * l, f + .212 * l]).clipExtent([
                [s - .214 * l + Fa, f + .166 * l + Fa],
                [s - .115 * l - Fa, f + .234 * l - Fa]
            ]).stream(c).point, n
        }, n.scale(1070)
    };
    var Ic, Yc, Zc, Vc, $c, Xc, Bc = {
            point: v,
            lineStart: v,
            lineEnd: v,
            polygonStart: function() {
                Yc = 0, Bc.lineStart = ne
            },
            polygonEnd: function() {
                Bc.lineStart = Bc.lineEnd = Bc.point = v, Ic += Ma(Yc / 2)
            }
        }, Jc = {
            point: te,
            lineStart: v,
            lineEnd: v,
            polygonStart: v,
            polygonEnd: v
        }, Wc = {
            point: ue,
            lineStart: ie,
            lineEnd: oe,
            polygonStart: function() {
                Wc.lineStart = ae
            },
            polygonEnd: function() {
                Wc.point = ue, Wc.lineStart = ie, Wc.lineEnd = oe
            }
        };
    oa.geo.path = function() {
        function n(n) {
            return n && ("function" == typeof a && i.pointRadius(+a.apply(this, arguments)), o && o.valid || (o = u(i)), oa.geo.stream(n, o)), i.result()
        }

        function t() {
            return o = null, n
        }
        var r, e, u, i, o, a = 4.5;
        return n.area = function(n) {
            return Ic = 0, oa.geo.stream(n, u(Bc)), Ic
        }, n.centroid = function(n) {
            return Cc = Lc = qc = Tc = zc = Rc = Dc = Pc = Uc = 0, oa.geo.stream(n, u(Wc)), Uc ? [Dc / Uc, Pc / Uc] : Rc ? [Tc / Rc, zc / Rc] : qc ? [Cc / qc, Lc / qc] : [0 / 0, 0 / 0]
        }, n.bounds = function(n) {
            return $c = Xc = -(Zc = Vc = 1 / 0), oa.geo.stream(n, u(Jc)), [
                [Zc, Vc],
                [$c, Xc]
            ]
        }, n.projection = function(n) {
            return arguments.length ? (u = (r = n) ? n.stream || se(n) : Nt, t()) : r
        }, n.context = function(n) {
            return arguments.length ? (i = null == (e = n) ? new re : new ce(n), "function" != typeof a && i.pointRadius(a), t()) : e
        }, n.pointRadius = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t : (i.pointRadius(+t), +t), n) : a
        }, n.projection(oa.geo.albersUsa()).context(null)
    }, oa.geo.transform = function(n) {
        return {
            stream: function(t) {
                var r = new fe(t);
                for (var e in n) r[e] = n[e];
                return r
            }
        }
    }, fe.prototype = {
        point: function(n, t) {
            this.stream.point(n, t)
        },
        sphere: function() {
            this.stream.sphere()
        },
        lineStart: function() {
            this.stream.lineStart()
        },
        lineEnd: function() {
            this.stream.lineEnd()
        },
        polygonStart: function() {
            this.stream.polygonStart()
        },
        polygonEnd: function() {
            this.stream.polygonEnd()
        }
    }, oa.geo.projection = ge, oa.geo.projectionMutator = pe, (oa.geo.equirectangular = function() {
        return ge(de)
    }).raw = de.invert = de, oa.geo.rotation = function(n) {
        function t(t) {
            return t = n(t[0] * Ia, t[1] * Ia), t[0] *= Ya, t[1] *= Ya, t
        }
        return n = ye(n[0] % 360 * Ia, n[1] * Ia, n.length > 2 ? n[2] * Ia : 0), t.invert = function(t) {
            return t = n.invert(t[0] * Ia, t[1] * Ia), t[0] *= Ya, t[1] *= Ya, t
        }, t
    }, me.invert = de, oa.geo.circle = function() {
        function n() {
            var n = "function" == typeof e ? e.apply(this, arguments) : e,
                t = ye(-n[0] * Ia, -n[1] * Ia, 0).invert,
                u = [];
            return r(null, null, 1, {
                point: function(n, r) {
                    u.push(n = t(n, r)), n[0] *= Ya, n[1] *= Ya
                }
            }), {
                type: "Polygon",
                coordinates: [u]
            }
        }
        var t, r, e = [0, 0],
            u = 6;
        return n.origin = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.angle = function(e) {
            return arguments.length ? (r = be((t = +e) * Ia, u * Ia), n) : t
        }, n.precision = function(e) {
            return arguments.length ? (r = be(t * Ia, (u = +e) * Ia), n) : u
        }, n.angle(90)
    }, oa.geo.graticule = function() {
        function n() {
            return {
                type: "MultiLineString",
                coordinates: t()
            }
        }

        function t() {
            return oa.range(Math.ceil(i / d) * d, u, d).map(h).concat(oa.range(Math.ceil(l / m) * m, c, m).map(g)).concat(oa.range(Math.ceil(e / p) * p, r, p).filter(function(n) {
                return Ma(n % d) > Fa
            }).map(s)).concat(oa.range(Math.ceil(a / v) * v, o, v).filter(function(n) {
                return Ma(n % m) > Fa
            }).map(f))
        }
        var r, e, u, i, o, a, c, l, s, f, h, g, p = 10,
            v = p,
            d = 90,
            m = 360,
            y = 2.5;
        return n.lines = function() {
            return t().map(function(n) {
                return {
                    type: "LineString",
                    coordinates: n
                }
            })
        }, n.outline = function() {
            return {
                type: "Polygon",
                coordinates: [h(i).concat(g(c).slice(1), h(u).reverse().slice(1), g(l).reverse().slice(1))]
            }
        }, n.extent = function(t) {
            return arguments.length ? n.majorExtent(t).minorExtent(t) : n.minorExtent()
        }, n.majorExtent = function(t) {
            return arguments.length ? (i = +t[0][0], u = +t[1][0], l = +t[0][1], c = +t[1][1], i > u && (t = i, i = u, u = t), l > c && (t = l, l = c, c = t), n.precision(y)) : [
                [i, l],
                [u, c]
            ]
        }, n.minorExtent = function(t) {
            return arguments.length ? (e = +t[0][0], r = +t[1][0], a = +t[0][1], o = +t[1][1], e > r && (t = e, e = r, r = t), a > o && (t = a, a = o, o = t), n.precision(y)) : [
                [e, a],
                [r, o]
            ]
        }, n.step = function(t) {
            return arguments.length ? n.majorStep(t).minorStep(t) : n.minorStep()
        }, n.majorStep = function(t) {
            return arguments.length ? (d = +t[0], m = +t[1], n) : [d, m]
        }, n.minorStep = function(t) {
            return arguments.length ? (p = +t[0], v = +t[1], n) : [p, v]
        }, n.precision = function(t) {
            return arguments.length ? (y = +t, s = Se(a, o, 90), f = ke(e, r, y), h = Se(l, c, 90), g = ke(i, u, y), n) : y
        }, n.majorExtent([
            [-180, -90 + Fa],
            [180, 90 - Fa]
        ]).minorExtent([
            [-180, -80 - Fa],
            [180, 80 + Fa]
        ])
    }, oa.geo.greatArc = function() {
        function n() {
            return {
                type: "LineString",
                coordinates: [t || e.apply(this, arguments), r || u.apply(this, arguments)]
            }
        }
        var t, r, e = Ee,
            u = Ne;
        return n.distance = function() {
            return oa.geo.distance(t || e.apply(this, arguments), r || u.apply(this, arguments))
        }, n.source = function(r) {
            return arguments.length ? (e = r, t = "function" == typeof r ? null : r, n) : e
        }, n.target = function(t) {
            return arguments.length ? (u = t, r = "function" == typeof t ? null : t, n) : u
        }, n.precision = function() {
            return arguments.length ? n : 0
        }, n
    }, oa.geo.interpolate = function(n, t) {
        return Ae(n[0] * Ia, n[1] * Ia, t[0] * Ia, t[1] * Ia)
    }, oa.geo.length = function(n) {
        return Gc = 0, oa.geo.stream(n, Kc), Gc
    };
    var Gc, Kc = {
            sphere: v,
            point: v,
            lineStart: Ce,
            lineEnd: v,
            polygonStart: v,
            polygonEnd: v
        }, Qc = Le(function(n) {
            return Math.sqrt(2 / (1 + n))
        }, function(n) {
            return 2 * Math.asin(n / 2)
        });
    (oa.geo.azimuthalEqualArea = function() {
        return ge(Qc)
    }).raw = Qc;
    var nl = Le(function(n) {
        var t = Math.acos(n);
        return t && t / Math.sin(t)
    }, Nt);
    (oa.geo.azimuthalEquidistant = function() {
        return ge(nl)
    }).raw = nl, (oa.geo.conicConformal = function() {
        return Kr(qe)
    }).raw = qe, (oa.geo.conicEquidistant = function() {
        return Kr(Te)
    }).raw = Te;
    var tl = Le(function(n) {
        return 1 / n
    }, Math.atan);
    (oa.geo.gnomonic = function() {
        return ge(tl)
    }).raw = tl, ze.invert = function(n, t) {
        return [n, 2 * Math.atan(Math.exp(t)) - Ha]
    }, (oa.geo.mercator = function() {
        return Re(ze)
    }).raw = ze;
    var rl = Le(function() {
        return 1
    }, Math.asin);
    (oa.geo.orthographic = function() {
        return ge(rl)
    }).raw = rl;
    var el = Le(function(n) {
        return 1 / (1 + n)
    }, function(n) {
        return 2 * Math.atan(n)
    });
    (oa.geo.stereographic = function() {
        return ge(el)
    }).raw = el, De.invert = function(n, t) {
        return [-t, 2 * Math.atan(Math.exp(n)) - Ha]
    }, (oa.geo.transverseMercator = function() {
        var n = Re(De),
            t = n.center,
            r = n.rotate;
        return n.center = function(n) {
            return n ? t([-n[1], n[0]]) : (n = t(), [-n[1], n[0]])
        }, n.rotate = function(n) {
            return n ? r([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : (n = r(), [n[0], n[1], n[2] - 90])
        }, n.rotate([0, 0])
    }).raw = De, oa.geom = {}, oa.geom.hull = function(n) {
        function t(n) {
            if (n.length < 3) return [];
            var t, u = Et(r),
                i = Et(e),
                o = n.length,
                a = [],
                c = [];
            for (t = 0; o > t; t++) a.push([+u.call(this, n[t], t), +i.call(this, n[t], t), t]);
            for (a.sort(He), t = 0; o > t; t++) c.push([a[t][0], -a[t][1]]);
            var l = je(a),
                s = je(c),
                f = s[0] === l[0],
                h = s[s.length - 1] === l[l.length - 1],
                g = [];
            for (t = l.length - 1; t >= 0; --t) g.push(n[a[l[t]][2]]);
            for (t = +f; t < s.length - h; ++t) g.push(n[a[s[t]][2]]);
            return g
        }
        var r = Pe,
            e = Ue;
        return arguments.length ? t(n) : (t.x = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t.y = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t)
    }, oa.geom.polygon = function(n) {
        return ka(n, ul), n
    };
    var ul = oa.geom.polygon.prototype = [];
    ul.area = function() {
        for (var n, t = -1, r = this.length, e = this[r - 1], u = 0; ++t < r;) n = e, e = this[t], u += n[1] * e[0] - n[0] * e[1];
        return .5 * u
    }, ul.centroid = function(n) {
        var t, r, e = -1,
            u = this.length,
            i = 0,
            o = 0,
            a = this[u - 1];
        for (arguments.length || (n = -1 / (6 * this.area())); ++e < u;) t = a, a = this[e], r = t[0] * a[1] - a[0] * t[1], i += (t[0] + a[0]) * r, o += (t[1] + a[1]) * r;
        return [i * n, o * n]
    }, ul.clip = function(n) {
        for (var t, r, e, u, i, o, a = Ie(n), c = -1, l = this.length - Ie(this), s = this[l - 1]; ++c < l;) {
            for (t = n.slice(), n.length = 0, u = this[c], i = t[(e = t.length - a) - 1], r = -1; ++r < e;) o = t[r], Fe(o, s, u) ? (Fe(i, s, u) || n.push(Oe(i, o, s, u)), n.push(o)) : Fe(i, s, u) && n.push(Oe(i, o, s, u)), i = o;
            a && n.push(n[0]), s = u
        }
        return n
    };
    var il, ol, al, cl, ll, sl = [],
        fl = [];
    We.prototype.prepare = function() {
        for (var n, t = this.edges, r = t.length; r--;) n = t[r].edge, n.b && n.a || t.splice(r, 1);
        return t.sort(Ke), t.length
    }, cu.prototype = {
        start: function() {
            return this.edge.l === this.site ? this.edge.a : this.edge.b
        },
        end: function() {
            return this.edge.l === this.site ? this.edge.b : this.edge.a
        }
    }, lu.prototype = {
        insert: function(n, t) {
            var r, e, u;
            if (n) {
                if (t.P = n, t.N = n.N, n.N && (n.N.P = t), n.N = t, n.R) {
                    for (n = n.R; n.L;) n = n.L;
                    n.L = t
                } else n.R = t;
                r = n
            } else this._ ? (n = gu(this._), t.P = null, t.N = n, n.P = n.L = t, r = n) : (t.P = t.N = null, this._ = t, r = null);
            for (t.L = t.R = null, t.U = r, t.C = !0, n = t; r && r.C;) e = r.U, r === e.L ? (u = e.R, u && u.C ? (r.C = u.C = !1, e.C = !0, n = e) : (n === r.R && (fu(this, r), n = r, r = n.U), r.C = !1, e.C = !0, hu(this, e))) : (u = e.L, u && u.C ? (r.C = u.C = !1, e.C = !0, n = e) : (n === r.L && (hu(this, r), n = r, r = n.U), r.C = !1, e.C = !0, fu(this, e))), r = n.U;
            this._.C = !1
        },
        remove: function(n) {
            n.N && (n.N.P = n.P), n.P && (n.P.N = n.N), n.N = n.P = null;
            var t, r, e, u = n.U,
                i = n.L,
                o = n.R;
            if (r = i ? o ? gu(o) : i : o, u ? u.L === n ? u.L = r : u.R = r : this._ = r, i && o ? (e = r.C, r.C = n.C, r.L = i, i.U = r, r !== o ? (u = r.U, r.U = n.U, n = r.R, u.L = n, r.R = o, o.U = r) : (r.U = u, u = r, n = r.R)) : (e = n.C, n = r), n && (n.U = u), !e) {
                if (n && n.C) return n.C = !1, void 0;
                do {
                    if (n === this._) break;
                    if (n === u.L) {
                        if (t = u.R, t.C && (t.C = !1, u.C = !0, fu(this, u), t = u.R), t.L && t.L.C || t.R && t.R.C) {
                            t.R && t.R.C || (t.L.C = !1, t.C = !0, hu(this, t), t = u.R), t.C = u.C, u.C = t.R.C = !1, fu(this, u), n = this._;
                            break
                        }
                    } else if (t = u.L, t.C && (t.C = !1, u.C = !0, hu(this, u), t = u.L), t.L && t.L.C || t.R && t.R.C) {
                        t.L && t.L.C || (t.R.C = !1, t.C = !0, fu(this, t), t = u.L), t.C = u.C, u.C = t.L.C = !1, hu(this, u), n = this._;
                        break
                    }
                    t.C = !0, n = u, u = u.U
                } while (!n.C);
                n && (n.C = !1)
            }
        }
    }, oa.geom.voronoi = function(n) {
        function t(n) {
            var t = new Array(n.length),
                e = a[0][0],
                u = a[0][1],
                i = a[1][0],
                o = a[1][1];
            return pu(r(n), a).cells.forEach(function(r, a) {
                var c = r.edges,
                    l = r.site,
                    s = t[a] = c.length ? c.map(function(n) {
                        var t = n.start();
                        return [t.x, t.y]
                    }) : l.x >= e && l.x <= i && l.y >= u && l.y <= o ? [
                        [e, o],
                        [i, o],
                        [i, u],
                        [e, u]
                    ] : [];
                s.point = n[a]
            }), t
        }

        function r(n) {
            return n.map(function(n, t) {
                return {
                    x: Math.round(i(n, t) / Fa) * Fa,
                    y: Math.round(o(n, t) / Fa) * Fa,
                    i: t
                }
            })
        }
        var e = Pe,
            u = Ue,
            i = e,
            o = u,
            a = hl;
        return n ? t(n) : (t.links = function(n) {
            return pu(r(n)).edges.filter(function(n) {
                return n.l && n.r
            }).map(function(t) {
                return {
                    source: n[t.l.i],
                    target: n[t.r.i]
                }
            })
        }, t.triangles = function(n) {
            var t = [];
            return pu(r(n)).cells.forEach(function(r, e) {
                for (var u, i, o = r.site, a = r.edges.sort(Ke), c = -1, l = a.length, s = a[l - 1].edge, f = s.l === o ? s.r : s.l; ++c < l;) u = s, i = f, s = a[c].edge, f = s.l === o ? s.r : s.l, e < i.i && e < f.i && du(o, i, f) < 0 && t.push([n[e], n[i.i], n[f.i]])
            }), t
        }, t.x = function(n) {
            return arguments.length ? (i = Et(e = n), t) : e
        }, t.y = function(n) {
            return arguments.length ? (o = Et(u = n), t) : u
        }, t.clipExtent = function(n) {
            return arguments.length ? (a = null == n ? hl : n, t) : a === hl ? null : a
        }, t.size = function(n) {
            return arguments.length ? t.clipExtent(n && [
                [0, 0], n
            ]) : a === hl ? null : a && a[1]
        }, t)
    };
    var hl = [
        [-1e6, -1e6],
        [1e6, 1e6]
    ];
    oa.geom.delaunay = function(n) {
        return oa.geom.voronoi().triangles(n)
    }, oa.geom.quadtree = function(n, t, r, e, u) {
        function i(n) {
            function i(n, t, r, e, u, i, o, a) {
                if (!isNaN(r) && !isNaN(e))
                    if (n.leaf) {
                        var c = n.x,
                            s = n.y;
                        if (null != c)
                            if (Ma(c - r) + Ma(s - e) < .01) l(n, t, r, e, u, i, o, a);
                            else {
                                var f = n.point;
                                n.x = n.y = n.point = null, l(n, f, c, s, u, i, o, a), l(n, t, r, e, u, i, o, a)
                            } else n.x = r, n.y = e, n.point = t
                    } else l(n, t, r, e, u, i, o, a)
            }

            function l(n, t, r, e, u, o, a, c) {
                var l = .5 * (u + a),
                    s = .5 * (o + c),
                    f = r >= l,
                    h = e >= s,
                    g = (h << 1) + f;
                n.leaf = !1, n = n.nodes[g] || (n.nodes[g] = xu()), f ? u = l : a = l, h ? o = s : c = s, i(n, t, r, e, u, o, a, c)
            }
            var s, f, h, g, p, v, d, m, y, x = Et(a),
                M = Et(c);
            if (null != t) v = t, d = r, m = e, y = u;
            else if (m = y = -(v = d = 1 / 0), f = [], h = [], p = n.length, o)
                for (g = 0; p > g; ++g) s = n[g], s.x < v && (v = s.x), s.y < d && (d = s.y), s.x > m && (m = s.x), s.y > y && (y = s.y), f.push(s.x), h.push(s.y);
            else
                for (g = 0; p > g; ++g) {
                    var _ = +x(s = n[g], g),
                        b = +M(s, g);
                    v > _ && (v = _), d > b && (d = b), _ > m && (m = _), b > y && (y = b), f.push(_), h.push(b)
                }
            var w = m - v,
                S = y - d;
            w > S ? y = d + w : m = v + S;
            var k = xu();
            if (k.add = function(n) {
                i(k, n, +x(n, ++g), +M(n, g), v, d, m, y)
            }, k.visit = function(n) {
                Mu(n, k, v, d, m, y)
            }, g = -1, null == t) {
                for (; ++g < p;) i(k, n[g], f[g], h[g], v, d, m, y);
                --g
            } else n.forEach(k.add);
            return f = h = n = s = null, k
        }
        var o, a = Pe,
            c = Ue;
        return (o = arguments.length) ? (a = mu, c = yu, 3 === o && (u = r, e = t, r = t = 0), i(n)) : (i.x = function(n) {
            return arguments.length ? (a = n, i) : a
        }, i.y = function(n) {
            return arguments.length ? (c = n, i) : c
        }, i.extent = function(n) {
            return arguments.length ? (null == n ? t = r = e = u = null : (t = +n[0][0], r = +n[0][1], e = +n[1][0], u = +n[1][1]), i) : null == t ? null : [
                [t, r],
                [e, u]
            ]
        }, i.size = function(n) {
            return arguments.length ? (null == n ? t = r = e = u = null : (t = r = 0, e = +n[0], u = +n[1]), i) : null == t ? null : [e - t, u - r]
        }, i)
    }, oa.interpolateRgb = _u, oa.interpolateObject = bu, oa.interpolateNumber = wu, oa.interpolateString = Su;
    var gl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
    oa.interpolate = ku, oa.interpolators = [
        function(n, t) {
            var r = typeof t;
            return ("string" === r ? uc.has(t) || /^(#|rgb\(|hsl\()/.test(t) ? _u : Su : t instanceof rt ? _u : Array.isArray(t) ? Eu : "object" === r && isNaN(t) ? bu : wu)(n, t)
        }
    ], oa.interpolateArray = Eu;
    var pl = function() {
        return Nt
    }, vl = oa.map({
            linear: pl,
            poly: zu,
            quad: function() {
                return Lu
            },
            cubic: function() {
                return qu
            },
            sin: function() {
                return Ru
            },
            exp: function() {
                return Du
            },
            circle: function() {
                return Pu
            },
            elastic: Uu,
            back: ju,
            bounce: function() {
                return Hu
            }
        }),
        dl = oa.map({
            "in": Nt,
            out: Au,
            "in-out": Cu,
            "out-in": function(n) {
                return Cu(Au(n))
            }
        });
    oa.ease = function(n) {
        var t = n.indexOf("-"),
            r = t >= 0 ? n.substring(0, t) : n,
            e = t >= 0 ? n.substring(t + 1) : "in";
        return r = vl.get(r) || pl, e = dl.get(e) || Nt, Nu(e(r.apply(null, aa.call(arguments, 1))))
    }, oa.interpolateHcl = Fu, oa.interpolateHsl = Ou, oa.interpolateLab = Iu, oa.interpolateRound = Yu, oa.transform = function(n) {
        var t = la.createElementNS(oa.ns.prefix.svg, "g");
        return (oa.transform = function(n) {
            if (null != n) {
                t.setAttribute("transform", n);
                var r = t.transform.baseVal.consolidate()
            }
            return new Zu(r ? r.matrix : ml)
        })(n)
    }, Zu.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    var ml = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
    };
    oa.interpolateTransform = Bu, oa.layout = {}, oa.layout.bundle = function() {
        return function(n) {
            for (var t = [], r = -1, e = n.length; ++r < e;) t.push(Gu(n[r]));
            return t
        }
    }, oa.layout.chord = function() {
        function n() {
            var n, l, f, h, g, p = {}, v = [],
                d = oa.range(i),
                m = [];
            for (r = [], e = [], n = 0, h = -1; ++h < i;) {
                for (l = 0, g = -1; ++g < i;) l += u[h][g];
                v.push(l), m.push(oa.range(i)), n += l
            }
            for (o && d.sort(function(n, t) {
                return o(v[n], v[t])
            }), a && m.forEach(function(n, t) {
                n.sort(function(n, r) {
                    return a(u[t][n], u[t][r])
                })
            }), n = (ja - s * i) / n, l = 0, h = -1; ++h < i;) {
                for (f = l, g = -1; ++g < i;) {
                    var y = d[h],
                        x = m[y][g],
                        M = u[y][x],
                        _ = l,
                        b = l += M * n;
                    p[y + "-" + x] = {
                        index: y,
                        subindex: x,
                        startAngle: _,
                        endAngle: b,
                        value: M
                    }
                }
                e[y] = {
                    index: y,
                    startAngle: f,
                    endAngle: l,
                    value: (l - f) / n
                }, l += s
            }
            for (h = -1; ++h < i;)
                for (g = h - 1; ++g < i;) {
                    var w = p[h + "-" + g],
                        S = p[g + "-" + h];
                    (w.value || S.value) && r.push(w.value < S.value ? {
                            source: S,
                            target: w
                        } : {
                            source: w,
                            target: S
                        })
                }
            c && t()
        }

        function t() {
            r.sort(function(n, t) {
                return c((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2)
            })
        }
        var r, e, u, i, o, a, c, l = {}, s = 0;
        return l.matrix = function(n) {
            return arguments.length ? (i = (u = n) && u.length, r = e = null, l) : u
        }, l.padding = function(n) {
            return arguments.length ? (s = n, r = e = null, l) : s
        }, l.sortGroups = function(n) {
            return arguments.length ? (o = n, r = e = null, l) : o
        }, l.sortSubgroups = function(n) {
            return arguments.length ? (a = n, r = null, l) : a
        }, l.sortChords = function(n) {
            return arguments.length ? (c = n, r && t(), l) : c
        }, l.chords = function() {
            return r || n(), r
        }, l.groups = function() {
            return e || n(), e
        }, l
    }, oa.layout.force = function() {
        function n(n) {
            return function(t, r, e, u) {
                if (t.point !== n) {
                    var i = t.cx - n.x,
                        o = t.cy - n.y,
                        a = u - r,
                        c = i * i + o * o;
                    if (c > a * a / d) {
                        if (p > c) {
                            var l = t.charge / c;
                            n.px -= i * l, n.py -= o * l
                        }
                        return !0
                    }
                    if (t.point && c && p > c) {
                        var l = t.pointCharge / c;
                        n.px -= i * l, n.py -= o * l
                    }
                }
                return !t.charge
            }
        }

        function t(n) {
            n.px = oa.event.x, n.py = oa.event.y, a.resume()
        }
        var r, e, u, i, o, a = {}, c = oa.dispatch("start", "tick", "end"),
            l = [1, 1],
            s = .9,
            f = yl,
            h = xl,
            g = -30,
            p = Ml,
            v = .1,
            d = .64,
            m = [],
            y = [];
        return a.tick = function() {
            if ((e *= .99) < .005) return c.end({
                type: "end",
                alpha: e = 0
            }), !0;
            var t, r, a, f, h, p, d, x, M, _ = m.length,
                b = y.length;
            for (r = 0; b > r; ++r) a = y[r], f = a.source, h = a.target, x = h.x - f.x, M = h.y - f.y, (p = x * x + M * M) && (p = e * i[r] * ((p = Math.sqrt(p)) - u[r]) / p, x *= p, M *= p, h.x -= x * (d = f.weight / (h.weight + f.weight)), h.y -= M * d, f.x += x * (d = 1 - d), f.y += M * d);
            if ((d = e * v) && (x = l[0] / 2, M = l[1] / 2, r = -1, d))
                for (; ++r < _;) a = m[r], a.x += (x - a.x) * d, a.y += (M - a.y) * d;
            if (g)
                for (ui(t = oa.geom.quadtree(m), e, o), r = -1; ++r < _;)(a = m[r]).fixed || t.visit(n(a));
            for (r = -1; ++r < _;) a = m[r], a.fixed ? (a.x = a.px, a.y = a.py) : (a.x -= (a.px - (a.px = a.x)) * s, a.y -= (a.py - (a.py = a.y)) * s);
            c.tick({
                type: "tick",
                alpha: e
            })
        }, a.nodes = function(n) {
            return arguments.length ? (m = n, a) : m
        }, a.links = function(n) {
            return arguments.length ? (y = n, a) : y
        }, a.size = function(n) {
            return arguments.length ? (l = n, a) : l
        }, a.linkDistance = function(n) {
            return arguments.length ? (f = "function" == typeof n ? n : +n, a) : f
        }, a.distance = a.linkDistance, a.linkStrength = function(n) {
            return arguments.length ? (h = "function" == typeof n ? n : +n, a) : h
        }, a.friction = function(n) {
            return arguments.length ? (s = +n, a) : s
        }, a.charge = function(n) {
            return arguments.length ? (g = "function" == typeof n ? n : +n, a) : g
        }, a.chargeDistance = function(n) {
            return arguments.length ? (p = n * n, a) : Math.sqrt(p)
        }, a.gravity = function(n) {
            return arguments.length ? (v = +n, a) : v
        }, a.theta = function(n) {
            return arguments.length ? (d = n * n, a) : Math.sqrt(d)
        }, a.alpha = function(n) {
            return arguments.length ? (n = +n, e ? e = n > 0 ? n : 0 : n > 0 && (c.start({
                type: "start",
                alpha: e = n
            }), oa.timer(a.tick)), a) : e
        }, a.start = function() {
            function n(n, e) {
                if (!r) {
                    for (r = new Array(c), a = 0; c > a; ++a) r[a] = [];
                    for (a = 0; l > a; ++a) {
                        var u = y[a];
                        r[u.source.index].push(u.target), r[u.target.index].push(u.source)
                    }
                }
                for (var i, o = r[t], a = -1, l = o.length; ++a < l;)
                    if (!isNaN(i = o[a][n])) return i;
                return Math.random() * e
            }
            var t, r, e, c = m.length,
                s = y.length,
                p = l[0],
                v = l[1];
            for (t = 0; c > t; ++t)(e = m[t]).index = t, e.weight = 0;
            for (t = 0; s > t; ++t) e = y[t], "number" == typeof e.source && (e.source = m[e.source]), "number" == typeof e.target && (e.target = m[e.target]), ++e.source.weight, ++e.target.weight;
            for (t = 0; c > t; ++t) e = m[t], isNaN(e.x) && (e.x = n("x", p)), isNaN(e.y) && (e.y = n("y", v)), isNaN(e.px) && (e.px = e.x), isNaN(e.py) && (e.py = e.y);
            if (u = [], "function" == typeof f)
                for (t = 0; s > t; ++t) u[t] = +f.call(this, y[t], t);
            else
                for (t = 0; s > t; ++t) u[t] = f; if (i = [], "function" == typeof h)
                for (t = 0; s > t; ++t) i[t] = +h.call(this, y[t], t);
            else
                for (t = 0; s > t; ++t) i[t] = h; if (o = [], "function" == typeof g)
                for (t = 0; c > t; ++t) o[t] = +g.call(this, m[t], t);
            else
                for (t = 0; c > t; ++t) o[t] = g;
            return a.resume()
        }, a.resume = function() {
            return a.alpha(.1)
        }, a.stop = function() {
            return a.alpha(0)
        }, a.drag = function() {
            return r || (r = oa.behavior.drag().origin(Nt).on("dragstart.force", ni).on("drag.force", t).on("dragend.force", ti)), arguments.length ? (this.on("mouseover.force", ri).on("mouseout.force", ei).call(r), void 0) : r
        }, oa.rebind(a, c, "on")
    };
    var yl = 20,
        xl = 1,
        Ml = 1 / 0;
    oa.layout.hierarchy = function() {
        function n(t, o, a) {
            var c = u.call(r, t, o);
            if (t.depth = o, a.push(t), c && (l = c.length)) {
                for (var l, s, f = -1, h = t.children = new Array(l), g = 0, p = o + 1; ++f < l;) s = h[f] = n(c[f], p, a), s.parent = t, g += s.value;
                e && h.sort(e), i && (t.value = g)
            } else delete t.children, i && (t.value = +i.call(r, t, o) || 0);
            return t
        }

        function t(n, e) {
            var u = n.children,
                o = 0;
            if (u && (a = u.length))
                for (var a, c = -1, l = e + 1; ++c < a;) o += t(u[c], l);
            else i && (o = +i.call(r, n, e) || 0);
            return i && (n.value = o), o
        }

        function r(t) {
            var r = [];
            return n(t, 0, r), r
        }
        var e = ci,
            u = oi,
            i = ai;
        return r.sort = function(n) {
            return arguments.length ? (e = n, r) : e
        }, r.children = function(n) {
            return arguments.length ? (u = n, r) : u
        }, r.value = function(n) {
            return arguments.length ? (i = n, r) : i
        }, r.revalue = function(n) {
            return t(n, 0), n
        }, r
    }, oa.layout.partition = function() {
        function n(t, r, e, u) {
            var i = t.children;
            if (t.x = r, t.y = t.depth * u, t.dx = e, t.dy = u, i && (o = i.length)) {
                var o, a, c, l = -1;
                for (e = t.value ? e / t.value : 0; ++l < o;) n(a = i[l], r, c = a.value * e, u), r += c
            }
        }

        function t(n) {
            var r = n.children,
                e = 0;
            if (r && (u = r.length))
                for (var u, i = -1; ++i < u;) e = Math.max(e, t(r[i]));
            return 1 + e
        }

        function r(r, i) {
            var o = e.call(this, r, i);
            return n(o[0], 0, u[0], u[1] / t(o[0])), o
        }
        var e = oa.layout.hierarchy(),
            u = [1, 1];
        return r.size = function(n) {
            return arguments.length ? (u = n, r) : u
        }, ii(r, e)
    }, oa.layout.pie = function() {
        function n(i) {
            var o = i.map(function(r, e) {
                return +t.call(n, r, e)
            }),
                a = +("function" == typeof e ? e.apply(this, arguments) : e),
                c = (("function" == typeof u ? u.apply(this, arguments) : u) - a) / oa.sum(o),
                l = oa.range(i.length);
            null != r && l.sort(r === _l ? function(n, t) {
                return o[t] - o[n]
            } : function(n, t) {
                return r(i[n], i[t])
            });
            var s = [];
            return l.forEach(function(n) {
                var t;
                s[n] = {
                    data: i[n],
                    value: t = o[n],
                    startAngle: a,
                    endAngle: a += t * c
                }
            }), s
        }
        var t = Number,
            r = _l,
            e = 0,
            u = ja;
        return n.value = function(r) {
            return arguments.length ? (t = r, n) : t
        }, n.sort = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n.startAngle = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.endAngle = function(t) {
            return arguments.length ? (u = t, n) : u
        }, n
    };
    var _l = {};
    oa.layout.stack = function() {
        function n(a, c) {
            var l = a.map(function(r, e) {
                return t.call(n, r, e)
            }),
                s = l.map(function(t) {
                    return t.map(function(t, r) {
                        return [i.call(n, t, r), o.call(n, t, r)]
                    })
                }),
                f = r.call(n, s, c);
            l = oa.permute(l, f), s = oa.permute(s, f);
            var h, g, p, v = e.call(n, s, c),
                d = l.length,
                m = l[0].length;
            for (g = 0; m > g; ++g)
                for (u.call(n, l[0][g], p = v[g], s[0][g][1]), h = 1; d > h; ++h) u.call(n, l[h][g], p += s[h - 1][g][1], s[h][g][1]);
            return a
        }
        var t = Nt,
            r = gi,
            e = pi,
            u = hi,
            i = si,
            o = fi;
        return n.values = function(r) {
            return arguments.length ? (t = r, n) : t
        }, n.order = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t : bl.get(t) || gi, n) : r
        }, n.offset = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t : wl.get(t) || pi, n) : e
        }, n.x = function(t) {
            return arguments.length ? (i = t, n) : i
        }, n.y = function(t) {
            return arguments.length ? (o = t, n) : o
        }, n.out = function(t) {
            return arguments.length ? (u = t, n) : u
        }, n
    };
    var bl = oa.map({
        "inside-out": function(n) {
            var t, r, e = n.length,
                u = n.map(vi),
                i = n.map(di),
                o = oa.range(e).sort(function(n, t) {
                    return u[n] - u[t]
                }),
                a = 0,
                c = 0,
                l = [],
                s = [];
            for (t = 0; e > t; ++t) r = o[t], c > a ? (a += i[r], l.push(r)) : (c += i[r], s.push(r));
            return s.reverse().concat(l)
        },
        reverse: function(n) {
            return oa.range(n.length).reverse()
        },
        "default": gi
    }),
        wl = oa.map({
            silhouette: function(n) {
                var t, r, e, u = n.length,
                    i = n[0].length,
                    o = [],
                    a = 0,
                    c = [];
                for (r = 0; i > r; ++r) {
                    for (t = 0, e = 0; u > t; t++) e += n[t][r][1];
                    e > a && (a = e), o.push(e)
                }
                for (r = 0; i > r; ++r) c[r] = (a - o[r]) / 2;
                return c
            },
            wiggle: function(n) {
                var t, r, e, u, i, o, a, c, l, s = n.length,
                    f = n[0],
                    h = f.length,
                    g = [];
                for (g[0] = c = l = 0, r = 1; h > r; ++r) {
                    for (t = 0, u = 0; s > t; ++t) u += n[t][r][1];
                    for (t = 0, i = 0, a = f[r][0] - f[r - 1][0]; s > t; ++t) {
                        for (e = 0, o = (n[t][r][1] - n[t][r - 1][1]) / (2 * a); t > e; ++e) o += (n[e][r][1] - n[e][r - 1][1]) / a;
                        i += o * n[t][r][1]
                    }
                    g[r] = c -= u ? i / u * a : 0, l > c && (l = c)
                }
                for (r = 0; h > r; ++r) g[r] -= l;
                return g
            },
            expand: function(n) {
                var t, r, e, u = n.length,
                    i = n[0].length,
                    o = 1 / u,
                    a = [];
                for (r = 0; i > r; ++r) {
                    for (t = 0, e = 0; u > t; t++) e += n[t][r][1];
                    if (e)
                        for (t = 0; u > t; t++) n[t][r][1] /= e;
                    else
                        for (t = 0; u > t; t++) n[t][r][1] = o
                }
                for (r = 0; i > r; ++r) a[r] = 0;
                return a
            },
            zero: pi
        });
    oa.layout.histogram = function() {
        function n(n, i) {
            for (var o, a, c = [], l = n.map(r, this), s = e.call(this, l, i), f = u.call(this, s, l, i), i = -1, h = l.length, g = f.length - 1, p = t ? 1 : 1 / h; ++i < g;) o = c[i] = [], o.dx = f[i + 1] - (o.x = f[i]), o.y = 0;
            if (g > 0)
                for (i = -1; ++i < h;) a = l[i], a >= s[0] && a <= s[1] && (o = c[oa.bisect(f, a, 1, g) - 1], o.y += p, o.push(n[i]));
            return c
        }
        var t = !0,
            r = Number,
            e = Mi,
            u = yi;
        return n.value = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n.range = function(t) {
            return arguments.length ? (e = Et(t), n) : e
        }, n.bins = function(t) {
            return arguments.length ? (u = "number" == typeof t ? function(n) {
                return xi(n, t)
            } : Et(t), n) : u
        }, n.frequency = function(r) {
            return arguments.length ? (t = !! r, n) : t
        }, n
    }, oa.layout.tree = function() {
        function n(n, i) {
            function o(n, t) {
                var e = n.children,
                    u = n._tree;
                if (e && (i = e.length)) {
                    for (var i, a, l, s = e[0], f = s, h = -1; ++h < i;) l = e[h], o(l, a), f = c(l, a, f), a = l;
                    Ci(n);
                    var g = .5 * (s._tree.prelim + l._tree.prelim);
                    t ? (u.prelim = t._tree.prelim + r(n, t), u.mod = u.prelim - g) : u.prelim = g
                } else t && (u.prelim = t._tree.prelim + r(n, t))
            }

            function a(n, t) {
                n.x = n._tree.prelim + t;
                var r = n.children;
                if (r && (e = r.length)) {
                    var e, u = -1;
                    for (t += n._tree.mod; ++u < e;) a(r[u], t)
                }
            }

            function c(n, t, e) {
                if (t) {
                    for (var u, i = n, o = n, a = t, c = n.parent.children[0], l = i._tree.mod, s = o._tree.mod, f = a._tree.mod, h = c._tree.mod; a = wi(a), i = bi(i), a && i;) c = bi(c), o = wi(o), o._tree.ancestor = n, u = a._tree.prelim + f - i._tree.prelim - l + r(a, i), u > 0 && (Li(qi(a, n, e), n, u), l += u, s += u), f += a._tree.mod, l += i._tree.mod, h += c._tree.mod, s += o._tree.mod;
                    a && !wi(o) && (o._tree.thread = a, o._tree.mod += f - s), i && !bi(c) && (c._tree.thread = i, c._tree.mod += l - h, e = n)
                }
                return e
            }
            var l = t.call(this, n, i),
                s = l[0];
            Ai(s, function(n, t) {
                n._tree = {
                    ancestor: n,
                    prelim: 0,
                    mod: 0,
                    change: 0,
                    shift: 0,
                    number: t ? t._tree.number + 1 : 0
                }
            }), o(s), a(s, -s._tree.prelim);
            var f = Si(s, Ei),
                h = Si(s, ki),
                g = Si(s, Ni),
                p = f.x - r(f, h) / 2,
                v = h.x + r(h, f) / 2,
                d = g.depth || 1;
            return Ai(s, u ? function(n) {
                n.x *= e[0], n.y = n.depth * e[1], delete n._tree
            } : function(n) {
                n.x = (n.x - p) / (v - p) * e[0], n.y = n.depth / d * e[1], delete n._tree
            }), l
        }
        var t = oa.layout.hierarchy().sort(null).value(null),
            r = _i,
            e = [1, 1],
            u = !1;
        return n.separation = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n.size = function(t) {
            return arguments.length ? (u = null == (e = t), n) : u ? null : e
        }, n.nodeSize = function(t) {
            return arguments.length ? (u = null != (e = t), n) : u ? e : null
        }, ii(n, t)
    }, oa.layout.pack = function() {
        function n(n, i) {
            var o = r.call(this, n, i),
                a = o[0],
                c = u[0],
                l = u[1],
                s = null == t ? Math.sqrt : "function" == typeof t ? t : function() {
                    return t
                };
            if (a.x = a.y = 0, Ai(a, function(n) {
                n.r = +s(n.value)
            }), Ai(a, Pi), e) {
                var f = e * (t ? 1 : Math.max(2 * a.r / c, 2 * a.r / l)) / 2;
                Ai(a, function(n) {
                    n.r += f
                }), Ai(a, Pi), Ai(a, function(n) {
                    n.r -= f
                })
            }
            return Hi(a, c / 2, l / 2, t ? 1 : 1 / Math.max(2 * a.r / c, 2 * a.r / l)), o
        }
        var t, r = oa.layout.hierarchy().sort(Ti),
            e = 0,
            u = [1, 1];
        return n.size = function(t) {
            return arguments.length ? (u = t, n) : u
        }, n.radius = function(r) {
            return arguments.length ? (t = null == r || "function" == typeof r ? r : +r, n) : t
        }, n.padding = function(t) {
            return arguments.length ? (e = +t, n) : e
        }, ii(n, r)
    }, oa.layout.cluster = function() {
        function n(n, i) {
            var o, a = t.call(this, n, i),
                c = a[0],
                l = 0;
            Ai(c, function(n) {
                var t = n.children;
                t && t.length ? (n.x = Ii(t), n.y = Oi(t)) : (n.x = o ? l += r(n, o) : 0, n.y = 0, o = n)
            });
            var s = Yi(c),
                f = Zi(c),
                h = s.x - r(s, f) / 2,
                g = f.x + r(f, s) / 2;
            return Ai(c, u ? function(n) {
                n.x = (n.x - c.x) * e[0], n.y = (c.y - n.y) * e[1]
            } : function(n) {
                n.x = (n.x - h) / (g - h) * e[0], n.y = (1 - (c.y ? n.y / c.y : 1)) * e[1]
            }), a
        }
        var t = oa.layout.hierarchy().sort(null).value(null),
            r = _i,
            e = [1, 1],
            u = !1;
        return n.separation = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n.size = function(t) {
            return arguments.length ? (u = null == (e = t), n) : u ? null : e
        }, n.nodeSize = function(t) {
            return arguments.length ? (u = null != (e = t), n) : u ? e : null
        }, ii(n, t)
    }, oa.layout.treemap = function() {
        function n(n, t) {
            for (var r, e, u = -1, i = n.length; ++u < i;) e = (r = n[u]).value * (0 > t ? 0 : t), r.area = isNaN(e) || 0 >= e ? 0 : e
        }

        function t(r) {
            var i = r.children;
            if (i && i.length) {
                var o, a, c, l = f(r),
                    s = [],
                    h = i.slice(),
                    p = 1 / 0,
                    v = "slice" === g ? l.dx : "dice" === g ? l.dy : "slice-dice" === g ? 1 & r.depth ? l.dy : l.dx : Math.min(l.dx, l.dy);
                for (n(h, l.dx * l.dy / r.value), s.area = 0;
                    (c = h.length) > 0;) s.push(o = h[c - 1]), s.area += o.area, "squarify" !== g || (a = e(s, v)) <= p ? (h.pop(), p = a) : (s.area -= s.pop().area, u(s, v, l, !1), v = Math.min(l.dx, l.dy), s.length = s.area = 0, p = 1 / 0);
                s.length && (u(s, v, l, !0), s.length = s.area = 0), i.forEach(t)
            }
        }

        function r(t) {
            var e = t.children;
            if (e && e.length) {
                var i, o = f(t),
                    a = e.slice(),
                    c = [];
                for (n(a, o.dx * o.dy / t.value), c.area = 0; i = a.pop();) c.push(i), c.area += i.area, null != i.z && (u(c, i.z ? o.dx : o.dy, o, !a.length), c.length = c.area = 0);
                e.forEach(r)
            }
        }

        function e(n, t) {
            for (var r, e = n.area, u = 0, i = 1 / 0, o = -1, a = n.length; ++o < a;)(r = n[o].area) && (i > r && (i = r), r > u && (u = r));
            return e *= e, t *= t, e ? Math.max(t * u * p / e, e / (t * i * p)) : 1 / 0
        }

        function u(n, t, r, e) {
            var u, i = -1,
                o = n.length,
                a = r.x,
                l = r.y,
                s = t ? c(n.area / t) : 0;
            if (t == r.dx) {
                for ((e || s > r.dy) && (s = r.dy); ++i < o;) u = n[i], u.x = a, u.y = l, u.dy = s, a += u.dx = Math.min(r.x + r.dx - a, s ? c(u.area / s) : 0);
                u.z = !0, u.dx += r.x + r.dx - a, r.y += s, r.dy -= s
            } else {
                for ((e || s > r.dx) && (s = r.dx); ++i < o;) u = n[i], u.x = a, u.y = l, u.dx = s, l += u.dy = Math.min(r.y + r.dy - l, s ? c(u.area / s) : 0);
                u.z = !1, u.dy += r.y + r.dy - l, r.x += s, r.dx -= s
            }
        }

        function i(e) {
            var u = o || a(e),
                i = u[0];
            return i.x = 0, i.y = 0, i.dx = l[0], i.dy = l[1], o && a.revalue(i), n([i], i.dx * i.dy / i.value), (o ? r : t)(i), h && (o = u), u
        }
        var o, a = oa.layout.hierarchy(),
            c = Math.round,
            l = [1, 1],
            s = null,
            f = Vi,
            h = !1,
            g = "squarify",
            p = .5 * (1 + Math.sqrt(5));
        return i.size = function(n) {
            return arguments.length ? (l = n, i) : l
        }, i.padding = function(n) {
            function t(t) {
                var r = n.call(i, t, t.depth);
                return null == r ? Vi(t) : $i(t, "number" == typeof r ? [r, r, r, r] : r)
            }

            function r(t) {
                return $i(t, n)
            }
            if (!arguments.length) return s;
            var e;
            return f = null == (s = n) ? Vi : "function" == (e = typeof n) ? t : "number" === e ? (n = [n, n, n, n], r) : r, i
        }, i.round = function(n) {
            return arguments.length ? (c = n ? Math.round : Number, i) : c != Number
        }, i.sticky = function(n) {
            return arguments.length ? (h = n, o = null, i) : h
        }, i.ratio = function(n) {
            return arguments.length ? (p = n, i) : p
        }, i.mode = function(n) {
            return arguments.length ? (g = n + "", i) : g
        }, ii(i, a)
    }, oa.random = {
        normal: function(n, t) {
            var r = arguments.length;
            return 2 > r && (t = 1), 1 > r && (n = 0),
            function() {
                var r, e, u;
                do r = 2 * Math.random() - 1, e = 2 * Math.random() - 1, u = r * r + e * e; while (!u || u > 1);
                return n + t * r * Math.sqrt(-2 * Math.log(u) / u)
            }
        },
        logNormal: function() {
            var n = oa.random.normal.apply(oa, arguments);
            return function() {
                return Math.exp(n())
            }
        },
        bates: function(n) {
            var t = oa.random.irwinHall(n);
            return function() {
                return t() / n
            }
        },
        irwinHall: function(n) {
            return function() {
                for (var t = 0, r = 0; n > r; r++) t += Math.random();
                return t
            }
        }
    }, oa.scale = {};
    var Sl = {
        floor: Nt,
        ceil: Nt
    };
    oa.scale.linear = function() {
        return Qi([0, 1], [0, 1], ku, !1)
    };
    var kl = {
        s: 1,
        g: 1,
        p: 1,
        r: 1,
        e: 1
    };
    oa.scale.log = function() {
        return ao(oa.scale.linear().domain([0, 1]), 10, !0, [1, 10])
    };
    var El = oa.format(".0e"),
        Nl = {
            floor: function(n) {
                return -Math.ceil(-n)
            },
            ceil: function(n) {
                return -Math.floor(-n)
            }
        };
    oa.scale.pow = function() {
        return co(oa.scale.linear(), 1, [0, 1])
    }, oa.scale.sqrt = function() {
        return oa.scale.pow().exponent(.5)
    }, oa.scale.ordinal = function() {
        return so([], {
            t: "range",
            a: [
                []
            ]
        })
    }, oa.scale.category10 = function() {
        return oa.scale.ordinal().range(Al)
    }, oa.scale.category20 = function() {
        return oa.scale.ordinal().range(Cl)
    }, oa.scale.category20b = function() {
        return oa.scale.ordinal().range(Ll)
    }, oa.scale.category20c = function() {
        return oa.scale.ordinal().range(ql)
    };
    var Al = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(mt),
        Cl = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(mt),
        Ll = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(mt),
        ql = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(mt);
    oa.scale.quantile = function() {
        return fo([], [])
    }, oa.scale.quantize = function() {
        return ho(0, 1, [0, 1])
    }, oa.scale.threshold = function() {
        return go([.5], [0, 1])
    }, oa.scale.identity = function() {
        return po([0, 1])
    }, oa.svg = {}, oa.svg.arc = function() {
        function n() {
            var n = t.apply(this, arguments),
                i = r.apply(this, arguments),
                o = e.apply(this, arguments) + Tl,
                a = u.apply(this, arguments) + Tl,
                c = (o > a && (c = o, o = a, a = c), a - o),
                l = Ua > c ? "0" : "1",
                s = Math.cos(o),
                f = Math.sin(o),
                h = Math.cos(a),
                g = Math.sin(a);
            return c >= zl ? n ? "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "M0," + n + "A" + n + "," + n + " 0 1,0 0," + -n + "A" + n + "," + n + " 0 1,0 0," + n + "Z" : "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "Z" : n ? "M" + i * s + "," + i * f + "A" + i + "," + i + " 0 " + l + ",1 " + i * h + "," + i * g + "L" + n * h + "," + n * g + "A" + n + "," + n + " 0 " + l + ",0 " + n * s + "," + n * f + "Z" : "M" + i * s + "," + i * f + "A" + i + "," + i + " 0 " + l + ",1 " + i * h + "," + i * g + "L0,0" + "Z"
        }
        var t = vo,
            r = mo,
            e = yo,
            u = xo;
        return n.innerRadius = function(r) {
            return arguments.length ? (t = Et(r), n) : t
        }, n.outerRadius = function(t) {
            return arguments.length ? (r = Et(t), n) : r
        }, n.startAngle = function(t) {
            return arguments.length ? (e = Et(t), n) : e
        }, n.endAngle = function(t) {
            return arguments.length ? (u = Et(t), n) : u
        }, n.centroid = function() {
            var n = (t.apply(this, arguments) + r.apply(this, arguments)) / 2,
                i = (e.apply(this, arguments) + u.apply(this, arguments)) / 2 + Tl;
            return [Math.cos(i) * n, Math.sin(i) * n]
        }, n
    };
    var Tl = -Ha,
        zl = ja - Fa;
    oa.svg.line = function() {
        return Mo(Nt)
    };
    var Rl = oa.map({
        linear: _o,
        "linear-closed": bo,
        step: wo,
        "step-before": So,
        "step-after": ko,
        basis: qo,
        "basis-open": To,
        "basis-closed": zo,
        bundle: Ro,
        cardinal: Ao,
        "cardinal-open": Eo,
        "cardinal-closed": No,
        monotone: Fo
    });
    Rl.forEach(function(n, t) {
        t.key = n, t.closed = /-closed$/.test(n)
    });
    var Dl = [0, 2 / 3, 1 / 3, 0],
        Pl = [0, 1 / 3, 2 / 3, 0],
        Ul = [0, 1 / 6, 2 / 3, 1 / 6];
    oa.svg.line.radial = function() {
        var n = Mo(Oo);
        return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n
    }, So.reverse = ko, ko.reverse = So, oa.svg.area = function() {
        return Io(Nt)
    }, oa.svg.area.radial = function() {
        var n = Io(Oo);
        return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, delete n.y1, n
    }, oa.svg.chord = function() {
        function n(n, a) {
            var c = t(this, i, n, a),
                l = t(this, o, n, a);
            return "M" + c.p0 + e(c.r, c.p1, c.a1 - c.a0) + (r(c, l) ? u(c.r, c.p1, c.r, c.p0) : u(c.r, c.p1, l.r, l.p0) + e(l.r, l.p1, l.a1 - l.a0) + u(l.r, l.p1, c.r, c.p0)) + "Z"
        }

        function t(n, t, r, e) {
            var u = t.call(n, r, e),
                i = a.call(n, u, e),
                o = c.call(n, u, e) + Tl,
                s = l.call(n, u, e) + Tl;
            return {
                r: i,
                a0: o,
                a1: s,
                p0: [i * Math.cos(o), i * Math.sin(o)],
                p1: [i * Math.cos(s), i * Math.sin(s)]
            }
        }

        function r(n, t) {
            return n.a0 == t.a0 && n.a1 == t.a1
        }

        function e(n, t, r) {
            return "A" + n + "," + n + " 0 " + +(r > Ua) + ",1 " + t
        }

        function u(n, t, r, e) {
            return "Q 0,0 " + e
        }
        var i = Ee,
            o = Ne,
            a = Yo,
            c = yo,
            l = xo;
        return n.radius = function(t) {
            return arguments.length ? (a = Et(t), n) : a
        }, n.source = function(t) {
            return arguments.length ? (i = Et(t), n) : i
        }, n.target = function(t) {
            return arguments.length ? (o = Et(t), n) : o
        }, n.startAngle = function(t) {
            return arguments.length ? (c = Et(t), n) : c
        }, n.endAngle = function(t) {
            return arguments.length ? (l = Et(t), n) : l
        }, n
    }, oa.svg.diagonal = function() {
        function n(n, u) {
            var i = t.call(this, n, u),
                o = r.call(this, n, u),
                a = (i.y + o.y) / 2,
                c = [i, {
                        x: i.x,
                        y: a
                    }, {
                        x: o.x,
                        y: a
                    },
                    o
                ];
            return c = c.map(e), "M" + c[0] + "C" + c[1] + " " + c[2] + " " + c[3]
        }
        var t = Ee,
            r = Ne,
            e = Zo;
        return n.source = function(r) {
            return arguments.length ? (t = Et(r), n) : t
        }, n.target = function(t) {
            return arguments.length ? (r = Et(t), n) : r
        }, n.projection = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n
    }, oa.svg.diagonal.radial = function() {
        var n = oa.svg.diagonal(),
            t = Zo,
            r = n.projection;
        return n.projection = function(n) {
            return arguments.length ? r(Vo(t = n)) : t
        }, n
    }, oa.svg.symbol = function() {
        function n(n, e) {
            return (jl.get(t.call(this, n, e)) || Bo)(r.call(this, n, e))
        }
        var t = Xo,
            r = $o;
        return n.type = function(r) {
            return arguments.length ? (t = Et(r), n) : t
        }, n.size = function(t) {
            return arguments.length ? (r = Et(t), n) : r
        }, n
    };
    var jl = oa.map({
        circle: Bo,
        cross: function(n) {
            var t = Math.sqrt(n / 5) / 2;
            return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
        },
        diamond: function(n) {
            var t = Math.sqrt(n / (2 * Il)),
                r = t * Il;
            return "M0," + -t + "L" + r + ",0" + " 0," + t + " " + -r + ",0" + "Z"
        },
        square: function(n) {
            var t = Math.sqrt(n) / 2;
            return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
        },
        "triangle-down": function(n) {
            var t = Math.sqrt(n / Ol),
                r = t * Ol / 2;
            return "M0," + r + "L" + t + "," + -r + " " + -t + "," + -r + "Z"
        },
        "triangle-up": function(n) {
            var t = Math.sqrt(n / Ol),
                r = t * Ol / 2;
            return "M0," + -r + "L" + t + "," + r + " " + -t + "," + r + "Z"
        }
    });
    oa.svg.symbolTypes = jl.keys();
    var Hl, Fl, Ol = Math.sqrt(3),
        Il = Math.tan(30 * Ia),
        Yl = [],
        Zl = 0;
    Yl.call = La.call, Yl.empty = La.empty, Yl.node = La.node, Yl.size = La.size, oa.transition = function(n) {
        return arguments.length ? Hl ? n.transition() : n : za.transition()
    }, oa.transition.prototype = Yl, Yl.select = function(n) {
        var t, r, e, u = this.id,
            i = [];
        n = b(n);
        for (var o = -1, a = this.length; ++o < a;) {
            i.push(t = []);
            for (var c = this[o], l = -1, s = c.length; ++l < s;)(e = c[l]) && (r = n.call(e, e.__data__, l, o)) ? ("__data__" in e && (r.__data__ = e.__data__), Ko(r, l, u, e.__transition__[u]), t.push(r)) : t.push(null)
        }
        return Jo(i, u)
    }, Yl.selectAll = function(n) {
        var t, r, e, u, i, o = this.id,
            a = [];
        n = w(n);
        for (var c = -1, l = this.length; ++c < l;)
            for (var s = this[c], f = -1, h = s.length; ++f < h;)
                if (e = s[f]) {
                    i = e.__transition__[o], r = n.call(e, e.__data__, f, c), a.push(t = []);
                    for (var g = -1, p = r.length; ++g < p;)(u = r[g]) && Ko(u, g, o, i), t.push(u)
                }
        return Jo(a, o)
    }, Yl.filter = function(n) {
        var t, r, e, u = [];
        "function" != typeof n && (n = R(n));
        for (var i = 0, o = this.length; o > i; i++) {
            u.push(t = []);
            for (var r = this[i], a = 0, c = r.length; c > a; a++)(e = r[a]) && n.call(e, e.__data__, a, i) && t.push(e)
        }
        return Jo(u, this.id)
    }, Yl.tween = function(n, t) {
        var r = this.id;
        return arguments.length < 2 ? this.node().__transition__[r].tween.get(n) : P(this, null == t ? function(t) {
            t.__transition__[r].tween.remove(n)
        } : function(e) {
            e.__transition__[r].tween.set(n, t)
        })
    }, Yl.attr = function(n, t) {
        function r() {
            this.removeAttribute(a)
        }

        function e() {
            this.removeAttributeNS(a.space, a.local)
        }

        function u(n) {
            return null == n ? r : (n += "", function() {
                var t, r = this.getAttribute(a);
                return r !== n && (t = o(r, n), function(n) {
                    this.setAttribute(a, t(n))
                })
            })
        }

        function i(n) {
            return null == n ? e : (n += "", function() {
                var t, r = this.getAttributeNS(a.space, a.local);
                return r !== n && (t = o(r, n), function(n) {
                    this.setAttributeNS(a.space, a.local, t(n))
                })
            })
        }
        if (arguments.length < 2) {
            for (t in n) this.attr(t, n[t]);
            return this
        }
        var o = "transform" == n ? Bu : ku,
            a = oa.ns.qualify(n);
        return Wo(this, "attr." + n, t, a.local ? i : u)
    }, Yl.attrTween = function(n, t) {
        function r(n, r) {
            var e = t.call(this, n, r, this.getAttribute(u));
            return e && function(n) {
                this.setAttribute(u, e(n))
            }
        }

        function e(n, r) {
            var e = t.call(this, n, r, this.getAttributeNS(u.space, u.local));
            return e && function(n) {
                this.setAttributeNS(u.space, u.local, e(n))
            }
        }
        var u = oa.ns.qualify(n);
        return this.tween("attr." + n, u.local ? e : r)
    }, Yl.style = function(n, t, r) {
        function e() {
            this.style.removeProperty(n)
        }

        function u(t) {
            return null == t ? e : (t += "", function() {
                var e, u = fa.getComputedStyle(this, null).getPropertyValue(n);
                return u !== t && (e = ku(u, t), function(t) {
                    this.style.setProperty(n, e(t), r)
                })
            })
        }
        var i = arguments.length;
        if (3 > i) {
            if ("string" != typeof n) {
                2 > i && (t = "");
                for (r in n) this.style(r, n[r], t);
                return this
            }
            r = ""
        }
        return Wo(this, "style." + n, t, u)
    }, Yl.styleTween = function(n, t, r) {
        function e(e, u) {
            var i = t.call(this, e, u, fa.getComputedStyle(this, null).getPropertyValue(n));
            return i && function(t) {
                this.style.setProperty(n, i(t), r)
            }
        }
        return arguments.length < 3 && (r = ""), this.tween("style." + n, e)
    }, Yl.text = function(n) {
        return Wo(this, "text", n, Go)
    }, Yl.remove = function() {
        return this.each("end.transition", function() {
            var n;
            this.__transition__.count < 2 && (n = this.parentNode) && n.removeChild(this)
        })
    }, Yl.ease = function(n) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].ease : ("function" != typeof n && (n = oa.ease.apply(oa, arguments)), P(this, function(r) {
            r.__transition__[t].ease = n
        }))
    }, Yl.delay = function(n) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].delay : P(this, "function" == typeof n ? function(r, e, u) {
            r.__transition__[t].delay = +n.call(r, r.__data__, e, u)
        } : (n = +n, function(r) {
            r.__transition__[t].delay = n
        }))
    }, Yl.duration = function(n) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].duration : P(this, "function" == typeof n ? function(r, e, u) {
            r.__transition__[t].duration = Math.max(1, n.call(r, r.__data__, e, u))
        } : (n = Math.max(1, n), function(r) {
            r.__transition__[t].duration = n
        }))
    }, Yl.each = function(n, t) {
        var r = this.id;
        if (arguments.length < 2) {
            var e = Fl,
                u = Hl;
            Hl = r, P(this, function(t, e, u) {
                Fl = t.__transition__[r], n.call(t, t.__data__, e, u)
            }), Fl = e, Hl = u
        } else P(this, function(e) {
            var u = e.__transition__[r];
            (u.event || (u.event = oa.dispatch("start", "end"))).on(n, t)
        });
        return this
    }, Yl.transition = function() {
        for (var n, t, r, e, u = this.id, i = ++Zl, o = [], a = 0, c = this.length; c > a; a++) {
            o.push(n = []);
            for (var t = this[a], l = 0, s = t.length; s > l; l++)(r = t[l]) && (e = Object.create(r.__transition__[u]), e.delay += e.duration, Ko(r, l, i, e)), n.push(r)
        }
        return Jo(o, i)
    }, oa.svg.axis = function() {
        function n(n) {
            n.each(function() {
                var n, l = oa.select(this),
                    s = this.__chart__ || r,
                    f = this.__chart__ = r.copy(),
                    h = null == c ? f.ticks ? f.ticks.apply(f, a) : f.domain() : c,
                    g = null == t ? f.tickFormat ? f.tickFormat.apply(f, a) : Nt : t,
                    p = l.selectAll(".tick").data(h, f),
                    v = p.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Fa),
                    d = oa.transition(p.exit()).style("opacity", Fa).remove(),
                    m = oa.transition(p.order()).style("opacity", 1),
                    y = Bi(f),
                    x = l.selectAll(".domain").data([0]),
                    M = (x.enter().append("path").attr("class", "domain"), oa.transition(x));
                v.append("line"), v.append("text");
                var _ = v.select("line"),
                    b = m.select("line"),
                    w = p.select("text").text(g),
                    S = v.select("text"),
                    k = m.select("text");
                switch (e) {
                    case "bottom":
                        n = Qo, _.attr("y2", u), S.attr("y", Math.max(u, 0) + o), b.attr("x2", 0).attr("y2", u), k.attr("x", 0).attr("y", Math.max(u, 0) + o), w.attr("dy", ".71em").style("text-anchor", "middle"), M.attr("d", "M" + y[0] + "," + i + "V0H" + y[1] + "V" + i);
                        break;
                    case "top":
                        n = Qo, _.attr("y2", -u), S.attr("y", -(Math.max(u, 0) + o)), b.attr("x2", 0).attr("y2", -u), k.attr("x", 0).attr("y", -(Math.max(u, 0) + o)), w.attr("dy", "0em").style("text-anchor", "middle"), M.attr("d", "M" + y[0] + "," + -i + "V0H" + y[1] + "V" + -i);
                        break;
                    case "left":
                        n = na, _.attr("x2", -u), S.attr("x", -(Math.max(u, 0) + o)), b.attr("x2", -u).attr("y2", 0), k.attr("x", -(Math.max(u, 0) + o)).attr("y", 0), w.attr("dy", ".32em").style("text-anchor", "end"), M.attr("d", "M" + -i + "," + y[0] + "H0V" + y[1] + "H" + -i);
                        break;
                    case "right":
                        n = na, _.attr("x2", u), S.attr("x", Math.max(u, 0) + o), b.attr("x2", u).attr("y2", 0), k.attr("x", Math.max(u, 0) + o).attr("y", 0), w.attr("dy", ".32em").style("text-anchor", "start"), M.attr("d", "M" + i + "," + y[0] + "H0V" + y[1] + "H" + i)
                }
                if (f.rangeBand) {
                    var E = f,
                        N = E.rangeBand() / 2;
                    s = f = function(n) {
                        return E(n) + N
                    }
                } else s.rangeBand ? s = f : d.call(n, f);
                v.call(n, s), m.call(n, f)
            })
        }
        var t, r = oa.scale.linear(),
            e = Vl,
            u = 6,
            i = 6,
            o = 3,
            a = [10],
            c = null;
        return n.scale = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n.orient = function(t) {
            return arguments.length ? (e = t in $l ? t + "" : Vl, n) : e
        }, n.ticks = function() {
            return arguments.length ? (a = arguments, n) : a
        }, n.tickValues = function(t) {
            return arguments.length ? (c = t, n) : c
        }, n.tickFormat = function(r) {
            return arguments.length ? (t = r, n) : t
        }, n.tickSize = function(t) {
            var r = arguments.length;
            return r ? (u = +t, i = +arguments[r - 1], n) : u
        }, n.innerTickSize = function(t) {
            return arguments.length ? (u = +t, n) : u
        }, n.outerTickSize = function(t) {
            return arguments.length ? (i = +t, n) : i
        }, n.tickPadding = function(t) {
            return arguments.length ? (o = +t, n) : o
        }, n.tickSubdivide = function() {
            return arguments.length && n
        }, n
    };
    var Vl = "bottom",
        $l = {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1
        };
    oa.svg.brush = function() {
        function n(i) {
            i.each(function() {
                var i = oa.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", u).on("touchstart.brush", u),
                    o = i.selectAll(".background").data([0]);
                o.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), i.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                var a = i.selectAll(".resize").data(p, Nt);
                a.exit().remove(), a.enter().append("g").attr("class", function(n) {
                    return "resize " + n
                }).style("cursor", function(n) {
                    return Xl[n]
                }).append("rect").attr("x", function(n) {
                    return /[ew]$/.test(n) ? -3 : null
                }).attr("y", function(n) {
                    return /^[ns]/.test(n) ? -3 : null
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), a.style("display", n.empty() ? "none" : null);
                var s, f = oa.transition(i),
                    h = oa.transition(o);
                c && (s = Bi(c), h.attr("x", s[0]).attr("width", s[1] - s[0]), r(f)), l && (s = Bi(l), h.attr("y", s[0]).attr("height", s[1] - s[0]), e(f)), t(f)
            })
        }

        function t(n) {
            n.selectAll(".resize").attr("transform", function(n) {
                return "translate(" + s[+/e$/.test(n)] + "," + f[+/^s/.test(n)] + ")"
            })
        }

        function r(n) {
            n.select(".extent").attr("x", s[0]), n.selectAll(".extent,.n>rect,.s>rect").attr("width", s[1] - s[0])
        }

        function e(n) {
            n.select(".extent").attr("y", f[0]), n.selectAll(".extent,.e>rect,.w>rect").attr("height", f[1] - f[0])
        }

        function u() {
            function u() {
                32 == oa.event.keyCode && (A || (x = null, L[0] -= s[1], L[1] -= f[1], A = 2), y())
            }

            function p() {
                32 == oa.event.keyCode && 2 == A && (L[0] += s[1], L[1] += f[1], A = 0, y())
            }

            function v() {
                var n = oa.mouse(_),
                    u = !1;
                M && (n[0] += M[0], n[1] += M[1]), A || (oa.event.altKey ? (x || (x = [(s[0] + s[1]) / 2, (f[0] + f[1]) / 2]), L[0] = s[+(n[0] < x[0])], L[1] = f[+(n[1] < x[1])]) : x = null), E && d(n, c, 0) && (r(S), u = !0), N && d(n, l, 1) && (e(S), u = !0), u && (t(S), w({
                    type: "brush",
                    mode: A ? "move" : "resize"
                }))
            }

            function d(n, t, r) {
                var e, u, a = Bi(t),
                    c = a[0],
                    l = a[1],
                    p = L[r],
                    v = r ? f : s,
                    d = v[1] - v[0];
                return A && (c -= p, l -= d + p), e = (r ? g : h) ? Math.max(c, Math.min(l, n[r])) : n[r], A ? u = (e += p) + d : (x && (p = Math.max(c, Math.min(l, 2 * x[r] - e))), e > p ? (u = e, e = p) : u = p), v[0] != e || v[1] != u ? (r ? o = null : i = null, v[0] = e, v[1] = u, !0) : void 0
            }

            function m() {
                v(), S.style("pointer-events", "all").selectAll(".resize").style("display", n.empty() ? "none" : null), oa.select("body").style("cursor", null), q.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), C(), w({
                    type: "brushend"
                })
            }
            var x, M, _ = this,
                b = oa.select(oa.event.target),
                w = a.of(_, arguments),
                S = oa.select(_),
                k = b.datum(),
                E = !/^(n|s)$/.test(k) && c,
                N = !/^(e|w)$/.test(k) && l,
                A = b.classed("extent"),
                C = Y(),
                L = oa.mouse(_),
                q = oa.select(fa).on("keydown.brush", u).on("keyup.brush", p);
            if (oa.event.changedTouches ? q.on("touchmove.brush", v).on("touchend.brush", m) : q.on("mousemove.brush", v).on("mouseup.brush", m), S.interrupt().selectAll("*").interrupt(), A) L[0] = s[0] - L[0], L[1] = f[0] - L[1];
            else if (k) {
                var T = +/w$/.test(k),
                    z = +/^n/.test(k);
                M = [s[1 - T] - L[0], f[1 - z] - L[1]], L[0] = s[T], L[1] = f[z]
            } else oa.event.altKey && (x = L.slice());
            S.style("pointer-events", "none").selectAll(".resize").style("display", null), oa.select("body").style("cursor", b.style("cursor")), w({
                type: "brushstart"
            }), v()
        }
        var i, o, a = M(n, "brushstart", "brush", "brushend"),
            c = null,
            l = null,
            s = [0, 0],
            f = [0, 0],
            h = !0,
            g = !0,
            p = Bl[0];
        return n.event = function(n) {
            n.each(function() {
                var n = a.of(this, arguments),
                    t = {
                        x: s,
                        y: f,
                        i: i,
                        j: o
                    }, r = this.__chart__ || t;
                this.__chart__ = t, Hl ? oa.select(this).transition().each("start.brush", function() {
                    i = r.i, o = r.j, s = r.x, f = r.y, n({
                        type: "brushstart"
                    })
                }).tween("brush:brush", function() {
                    var r = Eu(s, t.x),
                        e = Eu(f, t.y);
                    return i = o = null,
                    function(u) {
                        s = t.x = r(u), f = t.y = e(u), n({
                            type: "brush",
                            mode: "resize"
                        })
                    }
                }).each("end.brush", function() {
                    i = t.i, o = t.j, n({
                        type: "brush",
                        mode: "resize"
                    }), n({
                        type: "brushend"
                    })
                }) : (n({
                    type: "brushstart"
                }), n({
                    type: "brush",
                    mode: "resize"
                }), n({
                    type: "brushend"
                }))
            })
        }, n.x = function(t) {
            return arguments.length ? (c = t, p = Bl[!c << 1 | !l], n) : c
        }, n.y = function(t) {
            return arguments.length ? (l = t, p = Bl[!c << 1 | !l], n) : l
        }, n.clamp = function(t) {
            return arguments.length ? (c && l ? (h = !! t[0], g = !! t[1]) : c ? h = !! t : l && (g = !! t), n) : c && l ? [h, g] : c ? h : l ? g : null
        }, n.extent = function(t) {
            var r, e, u, a, h;
            return arguments.length ? (c && (r = t[0], e = t[1], l && (r = r[0], e = e[0]), i = [r, e], c.invert && (r = c(r), e = c(e)), r > e && (h = r, r = e, e = h), (r != s[0] || e != s[1]) && (s = [r, e])), l && (u = t[0], a = t[1], c && (u = u[1], a = a[1]), o = [u, a], l.invert && (u = l(u), a = l(a)), u > a && (h = u, u = a, a = h), (u != f[0] || a != f[1]) && (f = [u, a])), n) : (c && (i ? (r = i[0], e = i[1]) : (r = s[0], e = s[1], c.invert && (r = c.invert(r), e = c.invert(e)), r > e && (h = r, r = e, e = h))), l && (o ? (u = o[0], a = o[1]) : (u = f[0], a = f[1], l.invert && (u = l.invert(u), a = l.invert(a)), u > a && (h = u, u = a, a = h))), c && l ? [
                [r, u],
                [e, a]
            ] : c ? [r, e] : l && [u, a])
        }, n.clear = function() {
            return n.empty() || (s = [0, 0], f = [0, 0], i = o = null), n
        }, n.empty = function() {
            return !!c && s[0] == s[1] || !! l && f[0] == f[1]
        }, oa.rebind(n, a, "on")
    };
    var Xl = {
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
    }, Bl = [
            ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
            ["e", "w"],
            ["n", "s"],
            []
        ],
        Jl = pc.format = Mc.timeFormat,
        Wl = Jl.utc,
        Gl = Wl("%Y-%m-%dT%H:%M:%S.%LZ");
    Jl.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? ta : Gl, ta.parse = function(n) {
        var t = new Date(n);
        return isNaN(t) ? null : t
    }, ta.toString = Gl.toString, pc.second = Ht(function(n) {
        return new vc(1e3 * Math.floor(n / 1e3))
    }, function(n, t) {
        n.setTime(n.getTime() + 1e3 * Math.floor(t))
    }, function(n) {
        return n.getSeconds()
    }), pc.seconds = pc.second.range, pc.seconds.utc = pc.second.utc.range, pc.minute = Ht(function(n) {
        return new vc(6e4 * Math.floor(n / 6e4))
    }, function(n, t) {
        n.setTime(n.getTime() + 6e4 * Math.floor(t))
    }, function(n) {
        return n.getMinutes()
    }), pc.minutes = pc.minute.range, pc.minutes.utc = pc.minute.utc.range, pc.hour = Ht(function(n) {
        var t = n.getTimezoneOffset() / 60;
        return new vc(36e5 * (Math.floor(n / 36e5 - t) + t))
    }, function(n, t) {
        n.setTime(n.getTime() + 36e5 * Math.floor(t))
    }, function(n) {
        return n.getHours()
    }), pc.hours = pc.hour.range, pc.hours.utc = pc.hour.utc.range, pc.month = Ht(function(n) {
        return n = pc.day(n), n.setDate(1), n
    }, function(n, t) {
        n.setMonth(n.getMonth() + t)
    }, function(n) {
        return n.getMonth()
    }), pc.months = pc.month.range, pc.months.utc = pc.month.utc.range;
    var Kl = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
        Ql = [
            [pc.second, 1],
            [pc.second, 5],
            [pc.second, 15],
            [pc.second, 30],
            [pc.minute, 1],
            [pc.minute, 5],
            [pc.minute, 15],
            [pc.minute, 30],
            [pc.hour, 1],
            [pc.hour, 3],
            [pc.hour, 6],
            [pc.hour, 12],
            [pc.day, 1],
            [pc.day, 2],
            [pc.week, 1],
            [pc.month, 1],
            [pc.month, 3],
            [pc.year, 1]
        ],
        ns = Jl.multi([
            [".%L",
                function(n) {
                    return n.getMilliseconds()
                }
            ],
            [":%S",
                function(n) {
                    return n.getSeconds()
                }
            ],
            ["%I:%M",
                function(n) {
                    return n.getMinutes()
                }
            ],
            ["%I %p",
                function(n) {
                    return n.getHours()
                }
            ],
            ["%a %d",
                function(n) {
                    return n.getDay() && 1 != n.getDate()
                }
            ],
            ["%b %d",
                function(n) {
                    return 1 != n.getDate()
                }
            ],
            ["%B",
                function(n) {
                    return n.getMonth()
                }
            ],
            ["%Y", Cr]
        ]),
        ts = {
            range: function(n, t, r) {
                return oa.range(Math.ceil(n / r) * r, +t, r).map(ea)
            },
            floor: Nt,
            ceil: Nt
        };
    Ql.year = pc.year, pc.scale = function() {
        return ra(oa.scale.linear(), Ql, ns)
    };
    var rs = Ql.map(function(n) {
        return [n[0].utc, n[1]]
    }),
        es = Wl.multi([
            [".%L",
                function(n) {
                    return n.getUTCMilliseconds()
                }
            ],
            [":%S",
                function(n) {
                    return n.getUTCSeconds()
                }
            ],
            ["%I:%M",
                function(n) {
                    return n.getUTCMinutes()
                }
            ],
            ["%I %p",
                function(n) {
                    return n.getUTCHours()
                }
            ],
            ["%a %d",
                function(n) {
                    return n.getUTCDay() && 1 != n.getUTCDate()
                }
            ],
            ["%b %d",
                function(n) {
                    return 1 != n.getUTCDate()
                }
            ],
            ["%B",
                function(n) {
                    return n.getUTCMonth()
                }
            ],
            ["%Y", Cr]
        ]);
    rs.year = pc.year.utc, pc.scale.utc = function() {
        return ra(oa.scale.linear(), rs, es)
    }, oa.text = At(function(n) {
        return n.responseText
    }), oa.json = function(n, t) {
        return Ct(n, "application/json", ua, t)
    }, oa.html = function(n, t) {
        return Ct(n, "text/html", ia, t)
    }, oa.xml = At(function(n) {
        return n.responseXML
    }), "function" == typeof define && define.amd ? define(oa) : "object" == typeof module && module.exports ? module.exports = oa : this.d3 = oa
}();