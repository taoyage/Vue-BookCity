/*
 * @Author: taoyage
 * @FileName: test.js 						   
 * @Date:   2017-02-11 18:20:48 						   
 * @Last Modified by:   taoyage 	   
 * @Last Modified time: 2017-02-11 18:21:28 	   
 */

'use strict';

! function(t, n) {
    function e(t, n) {
        var e, i = Qv.prototype.hasOwnProperty;
        for (e in t) i.call(t, e) && n(e, t[e]) }

    function r(t) {
        return t instanceof Qv && t != t.window && Qv.getPrototypeOf(t) == Qv.prototype }

    function o(t, i, a) {
        return e(i, function(e, c) { a && r(c) ? (r(t[e]) || (t[e] = {}), o(t[e], i[e], a)) : a && c instanceof Zv ? (t[e] instanceof Zv || (t[e] = []), o(t[e], i[e], a)) : i[e] !== n && (t[e] = i[e]) }), t }

    function a(t, i) {
        return e(i, function(e, i) { t[e] === n && (t[e] = i) }), t }

    function c(t) {
        var n = g(arguments, 1);
        return t.replace(/\{(\d+)\}/g, function(t, e) {
            return n[e] }) }

    function s(t, n) {
        return t.indexOf(n) > -1 }

    function u(t) {
        return rh[t] }

    function l(t) {
        return "string" == typeof t ? t.replace(/[&<>"]/g, u) : t == n ? "" : t }

    function d(t) {
        return Xv(t.replace(/\+/g, " ")) }

    function f(t) {
        var n, e, i = {},
            r = t.split("&");
        for (n = 0; r.length > n; n++) r[n] && (e = r[n].split("="), i[d(e[0])] = d(e[1] || ""));
        return i }

    function p(t, i) {
        var r, o = "";
        return e(t, function(t, e) {
            if (e != n)
                if (e instanceof Zv)
                    for (r = 0; e.length > r; r++) o += "&" + Uv(t) + "=" + Uv(e[r]);
                else o += "&" + Uv(t) + "=" + Uv(e) }), i ? (i + o).replace(/[&?]{1,2}/, "?") : o.substr(1) }

    function v(t, n) {
        var e, i = "";
        for (e = 0; n > e; e++) i += t[Math.floor(Math.random() * t.length)];
        return i }

    function h(t) {
        return Xv(escape(atob(t))) }

    function _(t, n) {
        var e = Zv.prototype;
        return e[t].apply(n[0], e.slice.call(n, 1)) }

    function m() {
        return _("forEach", arguments) }

    function g() {
        return _("slice", arguments) }

    function b() {
        return _("splice", arguments) }

    function k() {
        return _("sort", arguments) }

    function y() {
        return _("every", arguments) }

    function w() {
        return _("filter", arguments) }

    function x() {
        return (_("filter", arguments) || [])[0] }

    function T() {
        return _("map", arguments) }

    function C() {
        return _("reduce", arguments) }

    function I() {
        return _("indexOf", arguments) }

    function $() {
        return _("push", arguments) }

    function O() {
        return _("concat", arguments) }

    function S(t, n) {
        var e = I(t, n);
        return -1 === e ? t : O(g(t, 0, e), g(t, e + 1)) }

    function E(t, n) {
        return I(t, n) >= 0 }

    function M() {}

    function P(t, n) {
        var e;
        return function() {
            var i = this,
                r = arguments;
            Yv(e), e = zv(function() { t.apply(i, r) }, n) } }

    function A(t, n) {
        var e, i, r, o = 0;
        return function() {
            var a = new th,
                c = n - (a - o);
            return e = this, i = arguments, 0 >= c && (o = a, r = t.apply(e, i)), r } }

    function L(t) {
        var n = !1;
        return function() { n || (n = !0, t.apply(this, arguments)) } }

    function N(t) {
        return "[object Function]" === Qv.prototype.toString.call(t) }

    function B(t, n, e) {
        return t = t || M, e = e || M, n = n || M,
            function() {
                var i = { args: Zv.prototype.slice.call(arguments, 0) };
                return n.call(this, i), i.stopped || (i.value = t.apply(this, i.args), e.call(this, i)), i.value } }

    function j(t, e) {
        return (e === n ? Bv : e).querySelector(t) }

    function R(t, e) {
        return (e === n ? Bv : e).querySelectorAll(t) }

    function D(t, n) {
        return t.webkitMatchesSelector(n) }

    function H(t, n, e) {
        for (; t && t !== e; t = t.parentElement)
            if (D(t, n)) return t;
        return null }

    function F(t, n, e, i) { t.addEventListener(n, e, !!i) }

    function z(t, n, e, i) { t.removeEventListener(n, e, !!i) }

    function Y(t, n, e) {
        var i = Bv.createEvent("HTMLEvents");
        return i.initEvent(n, !0, !0), i.data = e, t.dispatchEvent(i), i }

    function V(t, n) {
        return t.classList.contains(n) }

    function W(t, n) { t.classList.add(n) }

    function K(t, n) { t.classList.remove(n) }

    function U(t, n) { t.classList.toggle(n) }

    function X() { Iv || (Iv = t[oh] = {}) }

    function G(t) {
        var n = t.dataset,
            e = n[ch] || (n[ch] = ah++);
        return X(), Iv[e] || (Iv[e] = {}) }

    function J(t) {
        var n = t.dataset[ch];
        n && Iv && delete Iv[n] }

    function q(t) {
        var n, e = R("*", t);
        for (n = 0; e.length > n; n++) J(e[n]) }

    function Z(t) {
        var n, e = G(t),
            i = e.__init__;
        if (i) {
            for (n = 0; i.length > n; n++) i[n](t);
            delete e.__init__, delete t.dataset.domInit } }

    function Q(t) {
        var n, e = R("[data-dom-init]", t);
        for (n = 0; e.length > n; n++) Z(e[n]) }

    function tt(t, n) {
        var e = G(t);
        e.__del__ = e.__del__ || [], e.__del__.push(n), t.dataset.domDel = 1 }

    function nt(t) {
        var n, e = G(t).__del__;
        if (e)
            for (n = e.length; n--;) e[n](t) }

    function et(t) {
        for (var n = R("[data-dom-del]", t), e = n.length; e--;) nt(n[e]) }

    function it(t) { et(t), t.dataset.domDel && nt(t), q(t), J(t), rt(t) }

    function rt(t) { t.parentNode && t.parentNode.removeChild(t) }

    function ot(t) { t.style.display = "none" }

    function at(t) { t.style.display = "" }

    function ct(t) { t.getBoundingClientRect() }

    function st(n, e, i) {
        var r = n.getBoundingClientRect();
        return e = e || {}, e = o({ top: 0, bottom: 0, left: 0, right: 0 }, "number" == typeof e ? { top: e, bottom: e, left: e, right: e } : e), i = o({ top: 0, bottom: t.innerHeight, left: 0, right: t.innerWidth }, i), lt(n) && r.width && r.height && r.bottom > i.top - e.top && r.right > i.left - e.left && i.bottom + e.bottom > r.top && i.right + e.right > r.left }

    function ut(t) {
        for (var n; t; t = t.parentElement)
            if (n = Kv(t), "none" == n.display || "hidden" == n.visibility || 0 == n.opacity) return !0;
        return !1 }

    function lt(t) {
        return !ut(t) }

    function dt(t) {
        return t.innerHTML }

    function ft(t, n) { et(t), q(t), t.innerHTML = n, Q(t) }

    function pt(t, n) { et(t), q(t), t.textContent = n }

    function vt(t, n) { t.insertAdjacentHTML("afterbegin", n), Q(t) }

    function ht(t, n) { t.insertAdjacentHTML("beforeend", n), Q(t) }

    function _t(t, n) { t.insertAdjacentHTML("beforebegin", n), Q(t.parentNode) }

    function mt(t, n) { t.insertAdjacentHTML("afterend", n), Q(t.parentNode) }

    function gt(t) { o(sh, t) }

    function bt(t, e) {
        var i, r, c, s = new nh,
            u = !1;
        return e = o({}, e, !0), a(e, sh), e.type = e.type.toUpperCase(), c = "GET" == e.type, i = p(e.data, c ? t : n), c && (t = i, i = null), s.open(e.type, t, !0), e.timeout > 0 && (r = zv(function() { u = !0, s.abort() }, e.timeout)), F(s, "readystatechange", function() {
            var t, n;
            if (4 == s.readyState) {
                if (Yv(r), u) n = "timeout";
                else if (s.status >= 200 && 300 > s.status || 304 == s.status) {
                    if (t = s.responseText, "json" == e.dataType) try { t = JSON.parse(t) } catch (t) { n = "parsererror" } } else n = "error";
                n ? e.error(n, s) : (n = "success", e.success(t, s)), e.complete(n, s) } }), "POST" == e.type && s.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), s.send(i), s }

    function kt(n, e) {
        function i() { u.removeChild(s), delete $v[l] }

        function r(t) { d || (Yv(c), e.success(t), e.complete("success")), i() }
        var c, s = Bv.createElement("script"),
            u = Bv.head,
            l = "cb" + ++lh,
            d = !1;
        $v || ($v = t[uh] = {}), e = o({}, e, !0), a(e, sh), e.timeout > 0 && (c = zv(function() { d = !0, e.error(), e.complete("timeout") }, e.timeout)), $v[l] = r, e.callback && (t[e.callback] = r), n = n.replace(/=\?/, "=" + uh + "." + l), n = p(e.data, n), F(s, "error", function() { d || (Yv(c), e.error(), e.complete("error")), i() }), s.src = n, u.appendChild(s) }

    function yt(t, n) { n = o({}, n, !0), n.dataType = "json", a(n, { key: t, cacheTimeout: 1e3, success: M, error: M, complete: M, update: M, data: {} });
        var e, i = n.success,
            r = n.error,
            c = n.complete,
            s = At(n.key),
            u = !1;
        return s && (s = JSON.parse(s), n.data.hash = s.hash), n.success = function(t, e) { s && t && t.hash && t.hash == s.hash ? t = s : (n.filter && (t = n.filter(t)), Lt(n.key, JSON.stringify(t))), (u ? n.update : i)(t, e) }, n.error = function(t, n, e) { u || (s ? (u = !0, i(s), c("cache")) : r(t, n, e)) }, n.complete = function(t, n) { Yv(e), u || c(t, n) }, s && (e = zv(function() { u = !0, i(s), c("cache") }, n.cacheTimeout)), bt(t, n) }

    function wt(t, n) {
        var e = new nh;
        e.open("GET", t, !0), e.onreadystatechange = function() {
            var t = e.status;
            4 == e.readyState && (t >= 200 && 300 > t || 304 == t) && n(e.responseText) }, e.send() }

    function xt(e) {
        function i(t) {
            var i = !1;
            if (!t) try { t = f(Rv.hash.substr(1)) } catch (n) { t = {} }
            t._index == n || t._session == n ? (t._index = ++r, t._session = o, t._title = Bv.title, i = !0) : r = t._index, t._session != o && (a[r] && (o = th.now(), a = {}), t._session = o, i = !0), a[r] = 1, i && jv.replaceState(t, Bv.title), jv.state = t, e(Ct(), t._title, r, i) }
        var r = -1,
            o = th.now(),
            a = {},
            c = !1;
        F(t, "popstate", function(t) { c || i(t.state) }), "complete" == Bv.readyState ? i(jv.state) : F(t, "load", function() { zv(function() { c = !1 }, 0), i(jv.state), c = !0 }) }

    function Tt(t) {
        return t = o({}, t, !0), delete t._index, delete t._session, delete t._title, t }

    function Ct() {
        return Tt(jv.state) }

    function It(t, e, i) {
        var r, a = jv.state;
        t ? a && o(t, { _index: a._index, _session: a._session, _title: a._title }) : t = a, e != n && (Bv.title = t._title = e), r = "#" + p(Tt(t)), (i ? jv.replaceState : jv.pushState).call(jv, t, Bv.title, r), jv.state = t }

    function $t(t, n) { It(t, n, !1) }

    function Ot(t, n) { It(t, n, !0) }

    function St(t, e, i) {
        var r;
        i = i || M, xt(function(o, a, c, s) {
            var u = t.page(c);
            r == u ? Y(u, "page:popstate", o) : (r && Y(r, "page:hide"), t.go(c, !r), a != n && (Bv.title = a), s && e(u, o), Y(u, "page:show", s), r = u, i(u, o)) }) }

    function Et(t, n) {
        var e, i, r = 200,
            o = 10,
            a = 0,
            c = 0;
        Bt() || (t = t || Bv, (n || !Bt()) && (F(t, "touchstart", function(t) {
            var n = t.touches,
                o = n[0];
            n.length > 1 || (a = t.timeStamp, e = o.pageX, i = o.pageY, r > a - c && (a = 0)) }), F(t, "touchend", function(t) {
            var n = t.changedTouches[0],
                s = Math.abs;
            t.timeStamp - a > r || s(n.pageX - e) > o || s(n.pageY - i) > o || (Y(t.target, "click"), c = t.timeStamp) }), F(t, "click", function(t) { t.which && (t.preventDefault(), t.stopImmediatePropagation()) }, !0))) }

    function Mt(t) {
        function n(t) { i && (Yv(i), i = 0), e && (e = 0, t && t.preventDefault()) }
        var e, i, r = 500;
        t = t || Bv, F(t, "touchstart", function(t) {
            var o = t.target;
            return t.touches.length > 1 ? n() : void(i = zv(function() { e = 1, Y(o, "hold") }, r)) }), F(t, "touchmove", n), F(t, "touchcancel", n), F(t, "touchend", n) }

    function Pt(t) { dh = t }

    function At(t) {
        return Gv[dh + t] }

    function Lt(t, n) { Gv[dh + t] = n }

    function Nt(t) { delete Gv[dh + t] }

    function Bt() {
        return /[@-A]/i.test("a") }

    function jt() { t.matchMedia("(width:" + t.innerWidth + "px)").addListener(Rt) }

    function Rt() { Y(t, "resize"), Y(t, "rotate") }

    function Dt() {
        var t = Rv.href.split("#"),
            n = t[0],
            e = t[1];
        e && (Jv.hash = e), Rv.replace(n) }

    function Ht() {!Rv.hash && Jv.hash && (jv.replaceState(null, Bv.title, "#" + Jv.hash), delete Jv.hash) }

    function Ft(t, n) { n = n || function() { Rv.reload() }, ih.status == ih.UPDATEREADY && n(), F(ih, "updateready", n), t && zv(function() { z(ih, "updateready", n) }, t) }

    function zt(t) {
        return '<div class="Loading ' + (t || "") + '"><i></i></div>' }

    function Yt(t) {
        return zt("Loading_bottom " + (t || "")) }

    function Vt(t) {
        return '<div class="Loading-page ' + (t || "") + '"><div class="Loading-page__bd">' + zt("Loading_loading") + "</div></div>" }

    function Wt() {
        return '<p>\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u4e00\u4e0b\u8bd5\u8bd5:)</p><a href="javascript:" class="Loading-page__reload">\u5237 \u65b0</a>' }

    function Kt(t) { W(t, fh) }

    function Ut(t) { K(t, fh) }

    function Xt(t) {
        return V(t, fh) }

    function Gt(t) { W(t, ph) }

    function Jt(t) {
        return V(t, ph) }

    function qt(t) { W(t, vh) }

    function Zt(t) { K(t, vh) }

    function Qt(t, n) {
        var e = j(".Loading-page__bd", t);
        ft(e, Wt()), n && F(j(".Loading-page__reload", e), "click", n) }

    function tn(t, e) {
        var i;
        return t = t || Bv, e === n && (e = 300), F(t, "scroll", P(function() { i && !Xt(i) && !Jt(i) && st(i, e) && (Zt(i), Kt(i), Y(i, "loading:load")) }, 250)), G(t).loading = {get $loading() {
                return i }, set $loading(t) { i = t } } }

    function nn(n, e) {
        function i() {
            function e() { zv(function() {
                    var t, e = n.offsetWidth;
                    e && (D = e), U && (t = U.offsetWidth, t && (X = t)), a() }, 0) }
            V && (r(0), r(1)), U && o(), a(), H || (F(N, "touchstart", u), F(N, "touchmove", l), F(N, "touchcancel", d), F(N, "touchend", d)), F(N, "webkitTransitionEnd", f), F(t, "rotate", e), tt(n, function() { z(t, "rotate", e) }), b(), nt(Q, j[Q]) }

        function r(t) {
            var n;
            n = j[t].cloneNode(!0), n.removeAttribute("id"), N.appendChild(n) }

        function o() { X = U.offsetWidth, x = g(U.children), C = x[Q], W(C, q), Z && (T = Bv.createElement("i"), J = T.style, U.appendChild(T)), F(U, "click", function(t) {
                var n = x.indexOf(t.target);~n && (t.preventDefault(), n != Q && h(n)) }) }

        function a() {
            var t, n;
            for (t = 0, n = j.length; n > t; t++) j[t].style.width = D + "px";
            B.width = D * (V ? R + 2 : R) + "px", J.width = X / R + "px", c("0s"), s(Q) }

        function c(t) { B.webkitTransitionDuration = J.webkitTransitionDuration = t }

        function s(t, n) { n = n || 0, B.webkitTransform = "translate3d(" + (n - t * D) + "px,0,0)", J.webkitTransform = "translate3d(" + (t % R * D - n) * X / (D * R) + "px,0,0)" }

        function u(t) {
            var n = t.touches[0];
            at && !t.swipeStopPropagation && (rt && (t.swipeStopPropagation = !0), $ || ($ = !0, O = th.now(), S = E = n.pageX, P = n.pageY, A = !1)) }

        function l(t) {
            var n = t.touches[0],
                e = n.pageX - E,
                i = n.pageY - P,
                r = Math.abs(e),
                o = Math.abs(i);
            $ && (A ? (t.preventDefault(), !V && (0 === Q && e > 0 || Q === R - 1 && 0 > e) ? S = E = n.pageX : s(L, e)) : .6 * r > o && r > 5 ? (t.preventDefault(), A = !0, E = n.pageX, c("0s"), k(), V && 0 === Q ? (L = R, s(L)) : L = Q) : r > 5 && o > 5 && ($ = !1)) }

        function d(t) {
            var n = t.changedTouches[0].pageX - S,
                e = 800 > th.now() - O ? 20 : D / 2;
            $ && ($ = !1, A && (zv(b, 0), n > e && (V || L > 0) ? L > 0 && L-- : -e > n && (R - 1 > L || V) && L++, p(L))) }

        function f(t) { t.target == N && (et(Q, j[Q]), c("0s"), s(Q), v(Q)) }

        function p(t, n) {
            (!V || t > R + 1) && (t %= R), c(n ? "0s" : ""), s(t), t %= R, t != Q && (Q = t, nt(Q, j[Q])), ct(j[Q]), n && Y(N, "webkitTransitionEnd") }

        function v(t) { U && C != x[t] && (C && K(C, q), C = x[Q], C && W(C, q)) }

        function h(t, n) { k(), p(t, n), b() }

        function _() { Q > 0 ? p(Q - 1) : V && (c("0s"), s(R), ct(N), p(R - 1)) }

        function m() {
            (R - 1 > Q || V) && p(Q + 1) }

        function b() { it && (I = Vv(function() {
                var t = ot;
                ot = st(n), t && ot && m() }, it)) }

        function k() { I && Wv(I) }

        function y() {
            var t = Bv.createElement("div");
            return N.insertBefore(t, j[R++]), a(), t }

        function w(t) {
            for (; t >= R;) y();
            return j[t] }
        e = e || {};
        var x, T, C, I, $, O, S, E, P, A, L, N = n.firstElementChild,
            B = N.style,
            j = N.children,
            R = j.length,
            D = n.offsetWidth,
            H = e.disableTouch,
            V = 2 > R ? !1 : e.loop,
            U = e.$tab,
            X = D,
            J = {},
            q = e.tabOnClass || hh,
            Z = e.tabArrow,
            Q = e.pos || 0,
            nt = e.callback || M,
            et = e.transitionEndCallback || M,
            it = e.playInterval,
            rt = e.stopPropagation,
            ot = !0,
            at = !0;
        return i(), G(n).swipe = {get curr() {
                return Q }, get $curr() {
                return j[Q] }, get length() {
                return R }, go: h, add: y, page: w, prev: function() { k(), _(), b() }, next: function() { k(), m(), b() }, disableTouch: function(t) { at = !t } } }

    function en() {
        var n = "0123456789abcdef";
        if (Ov) return Ov;
        try { Ov = t.miui.getImeiMD5() } catch (t) {}
        return Ov || (Ov = Gv[_h]) || (Gv[_h] = Ov = v(n, 32)), Ov }

    function rn() {
        return '<div class="Pull"><div class="Pull__arrow"><i></i></div><div class="Pull__loading" style="display:none"><i></i></div></div><p class="Pull-tip" style="display:none"></p>' }

    function on(t, n, e) {
        function i() { F(n, "touchstart", r), F(n, "touchmove", o), F(n, "touchend", a), F(n, "touchcancel", a), F(n, "webkitTransitionEnd", c), y && F(y, "webkitTransitionEnd", function() { 0 == y.style.opacity && ot(y) }) }

        function r(t) {
            var e = t.touches[0];
            v || n.scrollTop || T.webkitTransform || (v = !0, h = e.pageX, _ = e.pageY, m = !1) }

        function o(t) {
            var n = t.touches[0],
                e = n.pageX - h,
                i = n.pageY - _,
                r = Math.abs(e),
                o = Math.abs(i);
            v && (m ? (t.preventDefault(), i = Math.max(i, 0) / 3, u(i), x > i ? K(b, g) : W(b, g)) : i > 5 && o > r ? (t.preventDefault(), m = !0, h = n.pageX, s(!1), ot(k), at(b)) : (0 > i || r > 5) && (v = !1)) }

        function a() { v && (v = !1, m && (V(b, g) ? (l(), Y(t, "pull:load")) : d())) }

        function c() { T.webkitTransform || ot(k) }

        function s(t) { T.webkitTransition = t ? "" : "none" }

        function u(t) { T.webkitTransform = t ? "translate3d(0," + t + "px,0)" : "" }

        function l() { n.scrollTop = 0, ot(b), at(k), s(!0), u(x) }

        function d() { s(!0), u(0) }

        function f(t) { y && (Yv(p), pt(y, t || ""), y.style.opacity = 0, at(y), ct(y), y.style.opacity = 1, p = zv(function() { y.style.opacity = 0 }, w)) }
        e = e || {};
        var p, v, h, _, m, g = "Pull__arrow_over",
            b = j(".Pull__arrow", t),
            k = j(".Pull__loading", t),
            y = e.$tip,
            w = e.tipTimeout || 800,
            x = t.offsetHeight,
            T = n.style;
        return i(), G(t).pull = { showLoading: l, hide: d, tip: f } }

    function an(t, n) {
        function e(t) { t.style.visibility = "visible" }

        function i(t) { t.style.visibility = "" }

        function r() { 2 > u || d || (d = !0, o = (l + 1) % u, s[l].style.webkitTransform = s[o].style.webkitTransform = "translate3d(0,0,0)", s[l].style.zIndex = 2, e(s[o]), s[l].style.opacity = 0) }
        n = n || {};
        var o, a = n.pos || 0,
            c = n.callback || M,
            s = t.children,
            u = s.length,
            l = a % u,
            d = !1;
        return e(s[l]), c(l, s[l]), F(t, "webkitTransitionEnd", function(t) {
            var n = t.target;
            n == s[l] && 0 == n.style.opacity && (i(n), n.style.webkitTransition = "none", n.style.zIndex = "", n.style.opacity = "", ct(n), n.style.webkitTransition = "", s[l].style.webkitTransform = s[o].style.webkitTransform = "", l = o, c(l, s[l]), d = !1) }), G(t).fade = { next: r, get curr() {
                return l } } }

    function cn(t, n, e) {
        function i(t) { t != c && t >= 0 && u > t && (~c && (K(s[c], r), ot(l[c])), W(s[t], r), at(l[t]), a(t, l[t]), c = t) }
        e = e || {};
        var r = e.tabOnClass || mh,
            o = e.pos || 0,
            a = e.callback || M,
            c = -1,
            s = g(t.children),
            u = s.length,
            l = g(n.children);
        return F(t, "click", function(t) {
            var n = s.indexOf(t.target);~n && i(n) }), i(o), { pos: function() {
                return c }, count: function() {
                return u }, go: i } }

    function sn() { un(), ln(), fn() }

    function un() {
        function t() {
            for (var t = "0123456789QWERTYUIOPASDFGHJKLZXCVBNM", n = "", e = 0; 12 > e; e++) n += t.charAt(Math.ceil(1e8 * Math.random()) % t.length);
            return "D950" + n }
        var n = Cn();
        Pv = { app_id: "mi_wap", build: n.build, channel: n.ch, device_id: n.device_id || t(), user_type: n.user_type }, Pv.device_hash = en(), n.user_id && o(Pv, { user_id: n.user_id, token: n.token }) }

    function ln() {
        function t() {
            var t, n;
            m(["user_id", "token"], function(t) { ti(t, dn()) });
            for (t in Pv) n = Pv[t], Qe(t, n, dn()) }
        t() }

    function dn() {
        var t = ".dushu.xiaomi.com"; - 1 == Rv.host.indexOf("com") && (t = Rv.hostname);
        var n = { domain: t, path: "/", expires: 365 };
        return n }

    function fn() { Sv = wn(), Ev = Tn(), Mv = Rv.protocol + "//" + Rv.host, Lv = Pv.user_id, Av = "wap", Nv = !!Qe("en_ts") }

    function pn() {
        return !!At("debug") }

    function vn() {
        return !!Qe("en_ts") }

    function hn() { ti("en_ts", dn()), Nv = vn() }

    function _n() {
        function n() { Te(function(t, n) {
                return t ? xr(t) : n.result ? xr(n) : void br() }, "/dk_id/api/anonymous/login", we()) }
        Lv || vn() || (pn() || t.miui && t.miui.getImeiMD5) && n() }

    function mn() {
        return jn() }

    function gn() { "use strict";

        function t(t) {
            var n;
            return this.timeout_id = null, this.duration = 3e3, this.content = "", this.position = "bottom", t && "object" == typeof t ? (t.duration && (this.duration = parseFloat(t.duration)), t.content && (this.content = t.content), t.position && (n = t.position.toLowerCase(), this.position = "top" === n || "bottom" === n ? n : "bottom"), void this.show()) : !1 }
        return t.prototype.show = function() {
            if (!this.content) return !1;
            Yv(this.timeout_id);
            var t = Bv.getElementsByTagName("body")[0],
                n = Bv.getElementById("android_toast_container");
            n && t.removeChild(n);
            var e = "android_toast_fadein"; "top" === this.position && (e = "android_toast_fadein android_toast_top");
            var i = Bv.createElement("div");
            i.setAttribute("id", "android_toast_container"), i.setAttribute("class", e), t.appendChild(i);
            var r = Bv.createElement("div");
            return r.setAttribute("id", "android_toast"), r.innerHTML = this.content, i.appendChild(r), this.timeout_id = zv(this.hide, this.duration), !0 }, t.prototype.hide = function() {
            function t() {
                var t = Bv.getElementById("android_toast_container");
                return t ? void t.parentNode.removeChild(t) : !1 }
            var n = Bv.getElementById("android_toast_container");
            return n ? (Yv(this.timeout_id), n.className += " android_toast_fadeout", n.addEventListener("webkitAnimationEnd", t), !0) : !1 }, t }

    function bn(t, n, e) {
        return bn.constuctor || (bn.constuctor = gn()), new bn.constuctor({ content: t || "", duration: n || 3e3, position: e || "bottom" }) }

    function kn(t) {
        return "string" != typeof t ? t : (("{" == t.charAt(0) || "[" == t.charAt(0)) && (t = JSON.parse(t)), t) }

    function yn(t) {
        return t && "object" == typeof t ? JSON.stringify(t) : t }

    function wn() {
        return !0 }

    function xn() {
        return Bv.title = arguments[0] }

    function Tn() {
        return /miui/.test(Dv.userAgent) }

    function Cn() {
        var t = "2";
        try { t = Gv.native__user_type || "2" } catch (t) { Hv.warn(t) }
        return { build: 8888, user_id: Qe("user_id"), token: Qe("token"), app_id: Qe("app_id"), user_type: t, device_id: Qe("device_id") } }

    function In(t) {
        return bn(t) }

    function $n() {
        var t = Ct().back;
        return t ? "home" == t ? Rv.href = Rv.pathname : (jv.pushState(null, Bv.title, t), Rv.reload()) : jv.back() }

    function On(n) {
        return t.history.back() }

    function Sn() {
        return !0 }

    function En() {
        return !0 }

    function Mn(t) {
        var n = gh[t];
        return n || (n = { paid: [] }, gh[t] = n), n }

    function Pn(t, n) {
        return Gv[t] = n }

    function An() {
        return {} }

    function Ln() {
        return {} }

    function Nn() {
        return {} }

    function Bn() {
        var t = arguments[0];
        t > 2 && Lt("latest_serial_user_type", t);
        try { Gv.native__user_type = t } catch (t) { Hv.warn(t) } }

    function jn() {
        return "dushu.xiaomi.com" != Rv.hostname && "www.duokan.com" != Rv.hostname }

    function Rn() {
        return {} }

    function Dn() {
        return {} }

    function Hn() {
        return {} }

    function Fn() {
        return {} }

    function zn() {
        var t = { login: 1, followup: Rv.href + "&back=home", source: "wap", display: "mobile" };
        return Rv.href = "/dk_id/api/xiaomi_web_reg?" + p(t) }

    function Yn() {
        return Rv.href = p({ followup: Rv.protocol + "//" + Rv.hostname }, "/dk_id/api/xiaomi_web_logout") }

    function Vn(t, n) { n && n() }

    function Wn(t, n) { n && n() }

    function Kn() {
        return {} }

    function Un() {
        return {} }

    function Xn(t) {
        return {} }

    function Gn() {
        return vn() ? ["ALIPAY_WAP"] : ["MIPAY_WEB", "ALIPAY_WAP"] }

    function Jn() {
        return {} }

    function qn() {
        return {} }

    function Zn() {
        return {} }

    function Qn() {
        return "listPaymentMethods" == arguments[0] ? !0 : !1 }

    function te() {
        return !1 }

    function ne() {
        return !1 }

    function ee(n) { F(t, "popstate", function e(i) { z(t, "popstate", e), n && n() }) }

    function ie() {}

    function re(t) { ae(t, !0) }

    function oe(t) { ae(t, !1) }

    function ae(n, e) { Hv.log("toggle subscribe", n, e);
        try {
            var i = "com.xiaomi.browser.web.novels." + n;
            e ? t.miui.subscribe(i) : t.miui.unSubscribe(i) } catch (t) { Hv.error("subscribe fiction error", n, e, t) } }

    function ce(t, n, e) {
        var i = [];
        if (t >= n) return i;
        e = e || 1;
        for (var r = t; n > r; r += e) i.push(r);
        return i }

    function se(t) {
        var n = t.parentElement.children;
        return I(n, t) }

    function ue(t) {
        for (var n = 0; t;) n += t.offsetTop, t = t.offsetParent;
        return n }

    function le(t) {
        var n = t.cloneNode(!0);
        return m(R("[id]", n), function(t) { t.id = "" }), n }

    function de(t, n) {
        for (var e in n) n[e] ? W(t, e) : K(t, e) }

    function fe(n) { F(t, "load", function() { zv(function() { F(t, "popstate", function(t) { n(t) }) }, 0) }) }

    function pe(n) {
        var e = j("#root", Bv);
        return n ? (pe.__top__ = Bv.body.scrollTop, W(e, "-unscrollable"), void(e.style.top = -1 * pe.__top__ + "px")) : (K(e, "-unscrollable"), void t.scrollTo(0, pe.__top__)) }

    function ve(t, n) {
        if (t) {
            if (n(t) === !1) return;
            for (t = t.firstChild; t;) ve(t, n), t = t.nextSibling } }

    function he(t, n, e, i) { F(t, n, function(t) {
            var n = H(t.target, e);
            n && i(t, n) }) }

    function _e(t) {
        var n = g(arguments, 1);
        t.forEach(function(t) {
            try { t.apply(this, n) } catch (t) { Hv.error(t) } }) }

    function me(t) {
        var n = {};
        return function(e) {
            var i, r = g(arguments, 1);
            try { i = JSON.stringify(r) } catch (n) {
                return Hv.error("function__memorizeWrapper key error", n), t.apply(this, arguments) }
            if (n[i] && n[i].result) return void e.apply(this, n[i].result);
            n[i] = n[i] || {}, n[i].callbacks = n[i].callbacks || [], n[i].callbacks.push(e);
            var o = function(t) {
                var e = g(arguments, 0);
                t || (n[i].result = e), _e.apply(this, [n[i].callbacks].concat(e)), n[i].callbacks = [] };
            n[i].callbacks.length > 1 || t.apply(this, [o].concat(r)) } }

    function ge(t, n, e, i) {
        return i = i || {}, o(i, we()), _n(), ye(t, n, e, i, "POST", !0) }

    function be(t, n, e, i) {
        return ye(t, n, e, i || {}, "GET", !0) }

    function ke(t, n) {
        if (Sn({ show: !0 }), n.complete) throw "method complete occupied";
        n.complete = function() { Sn({ show: !1 }) }, bt(t, n) }

    function ye(t, n, e, i, r, o) {
        var a = o ? bt : ke;
        return a(e, { data: i, type: r, success: xe.bind(this, t, n), error: n }) }

    function we(t) {
        var n = parseInt((new th).getTime() / 1e3),
            e = Pv.device_id + "&" + n;
        return e = e.split(""), { _t: n, _c: e.reduce(function(t, n) {
                return (131 * t + n.charCodeAt(0)) % 65536 }, 0) } }

    function xe(t, n, e) {
        if (!e || 0 != e.result && 0 != e.code) {
            if (n && n(e)) return;
            if (14 === e.result) return In("\u672c\u5730\u65f6\u95f4\u6709\u8bef\uff0c\u8bf7\u91cd\u65b0\u8bbe\u7f6e"), 1;
            if (1003 === e.result && !pn()) return void Vi({ title: "\u767b\u5f55\u8fc7\u671f", prompt: "\u60a8\u7684\u767b\u5f55\u5df2\u8fc7\u671f\uff0c\u662f\u5426\u91cd\u65b0\u767b\u5f55\uff1f", confirm: yr.bind("", !0) });
            xr(e) } else t(e) }

    function Te(t, n, e) { Ce(t, n, e, "POST") }

    function Ce(t, n, e, i) {
        function r(n) { t(null, n) }

        function o(n, e) { t({ result: -1, msg: "http code" + e.status }) }
        bt(n, { type: i || "GET", data: e, success: r, error: o }) }

    function Ie(t, n) {
        return $e(t) ? n : t }

    function $e(t) {
        return t === n }

    function Oe(t) {
        return t ? "function" == typeof t.isArray ? Zv.isArray(t) : "[object Array]" === Qv.prototype.toString.call(t) : !1 }

    function Se(t) {
        function n(t) { o(d, t) }

        function e(t) { n(t), c() }

        function i(t) {
            return d[t] }

        function r(t, n) {
            var e = { expr: t, listener: n };
            return l.push(e), e }

        function a(t) { l = S(l, t) }

        function c() { m(l, s) }

        function s(t) {
            var n = t.expr,
                e = t.listener,
                i = t.value,
                r = u(n);
            r !== i && e(r, i, f) }

        function u(t) {
            try {
                return N(t) ? t(d) : new Function("$scope", "return " + t).apply(this, [d]) } catch (n) {
                return Hv.error("Scope parse error: ", t, n.stack), {} } }
        var l = [],
            d = o({}, t),
            f = { onlySet: n, set: e, get: i, watch: r, stopWatch: a, digest: c };
        return f }

    function Ee(t) {
        function n(t, n) { r.watch(n, function(n) { ft(t, n) }) }

        function e(t, n) { r.watch(n, function(n) { de(t, n) }) }

        function i(t, n) { r.watch(n, function(n) { t.style.display = n ? "" : "none" }) }
        var r = Se(t);
        return o(r, { html: n, className: e, show: i }), r }

    function Me(t, n, e, i) {
        return !n && (n = []),
            function() {
                var r = g(arguments, 0),
                    o = e ? r.concat(n) : n.concat(r);
                return t.apply(i, o) } }

    function Pe(t, n, e) {
        return !n && (n = []),
            function(i) {
                var r = g(arguments, 1);
                return t.apply(e, [i].concat(n).concat(r)) } }

    function Ae(t) {
        return function(n) {
            var e;
            e = t(), n(e === !1, e) } }

    function Le(t) {
        return t = arguments.length > 1 ? g(arguments, 0) : t,
            function(e) {
                function i(n, r) {
                    var o = g(arguments, 2),
                        a = null;
                    return r && (a = a || [], a[n - 1] = { fn: t[n - 1], error: r, args: o }), r || n >= t.length ? void e.apply(this, [a].concat(o)) : void t[n].apply(this, [i.bind(this, n + 1)].concat(o)) }
                var r = g(arguments, 1);
                i.apply(this, [0, n].concat(r)) } }

    function Ne(t, n, e) {
        function i() { a.forEach(function(t) {
                var n, e = t.dom,
                    i = t.attr.substr(3);
                if ("custom" == i) return Be(t.expr, c, e);
                if (n = "click" == i ? t.expr : Be(t.expr, c), !t.hasOwnProperty("value") || t.value !== n) {
                    if (t.value = n, "bind" == i && (e.innerHTML = n), "show" == i && (e.style.display = n ? "" : "none"), "class" == i)
                        for (var r in n) n[r] ? W(e, r) : K(e, r);
                    if ("click" == i) {
                        var o, a = A(function(n) { n.currentTarget = e, bh = n, o = Be(t.expr, c, e, n), bh = null }, 600);
                        F(e, i, function(t) { o !== kh && t.stopPropagation(), a(t) }) } } }) }

        function r(t, n, e) {
            function i(t, n, i) {
                if (-1 != i.attr.indexOf("vp-")) {
                    var r = { dom: t, expr: n };
                    e.push(o(r, i)) } }
            ve(t, function(n) {
                var e = n.nodeType;
                if (1 == e) {
                    var r = n.getAttribute("vp-ignore");
                    return null !== r && n !== t ? !1 : void m(n.attributes, function(t) {
                        var e = t.name;
                        i(n, t.value, { attr: e }) }) } }) }
        var a = [],
            c = n || {};
        c.$change = i, r(t, c, a);
        var s = { setOnly: function(t) {
                return t && o(c, t), s }, set: function(t) {
                return t && o(c, t), i(), s }, get: function(t) {
                return c[t] } };
        return s }

    function Be(t, n, e, i) {
        try {
            return new Function("$root", "$el", "$event", "return " + t).apply(this, [n || {}, e, i]) } catch (n) {
            return Hv.error("parse error: ", t, n.stack), {} } }

    function je(t, n, e) { je._cache || (je._cache = {});
        var i = je._cache[t];
        if (i || (i = je._cache[t] = [], je._cache[t].update = function(t) { this.forEach(function(n) { n.set(t) }) }), n) { i.root = e || {};
            var r = Ne(n, i.root);
            i.push(r) }
        return i }

    function Re() { ft.apply(this, arguments), We() }

    function De() { vt.apply(this, arguments), We() }

    function He() { ht.apply(this, arguments), We() }

    function Fe(t, n, e) {
        var i;
        return _t(t, n), i = t.previousSibling, e && t.remove(), We(), i }

    function ze(t, n, e) {
        var i;
        return mt(t, n), i = t.nextSibling, e && t.parentNode.removeChild(t), We(), i }

    function Ye(t, n) { ze(t, n), it(t) }

    function Ve(t, n) {
        var e = "Tag__" + ++wh,
            i = [].slice.call(arguments, 1);
        return yh.push({ el: e, args: i, func: t || M }), e }

    function We() { yh.forEach(function(t, n) {
            if (t) { yh[n] = null, t.el = Bv.getElementById(t.el);
                try { t.func.apply(null, [t.el].concat(t.args)) } catch (n) { Hv.error("Tag__update fail", t, n) } } }), yh = [], En(!1) }

    function Ke(t) {
        function n(n) { F(n, "click", t) }
        return Ve(n) }

    function Ue(t) {
        function n(t) {
            if (t) {
                var e = function() {},
                    i = n(t.__parent__);
                return i && (e.prototype = i), o(e.prototype, t), new e } }
        var e = t.__contructor__;
        if (!e) {
            var i = function() {};
            i.prototype = n(t), e = t.__contructor__ = i }
        var r = new e;
        return r.__init__ && r.__init__.apply(r, [].slice.call(arguments, 1)), r }

    function Xe(t) {
        return t.__single__ || (t.__single__ = Ue.apply(this, arguments)), t.__single__ }

    function Ge(t, n, e) {
        function i() { "loading" != a.type && (r("success" == a.type ? "success" : "error"), r("complete")) }

        function r(t) { a[t].forEach(function(n, e) { a[t][e] = function() {}, n(a.data, a.type, a.xhr) }), a[t] = [] }

        function o(t, n) { "[object Function]" == Qv.prototype.toString.call(n) && a[t].push(n) }
        var a = { success: [], error: [], complete: [] };
        n = n || {}, ["success", "error", "complete"].forEach(function(t) { o(t, n[t]) }), n.success = function(t) { a.data = t }, n.complete = function(t, n) { a.type = t, a.xhr = n, i() }, a.type = "loading", (e || bt)(t, n);
        var c = { __inter__: a, then: function(t, n) {
                return t && o("success", t), n && o("error", n), i(), c }, always: function(t) {
                return t && o("complete", t), i(), c } };
        return c }

    function Je() {
        function t() {
            if ("loading" != i.type) {
                if ("progress" == i.type) return n("progress");
                n("success" == i.type ? "success" : "error"), n("complete") } }

        function n(t) { i[t].forEach(function(n, e) { i[t][e] = function() {}, n(i.data, i.type) }), i[t] = [] }

        function e(t, n) { "[object Function]" == Qv.prototype.toString.call(n) && i[t].push(n) }
        var i = { success: [], error: [], complete: [], progress: [], type: "loading" },
            r = { __inter__: i, then: function(n, i) {
                    return n && e("success", n), i && e("error", i), t(), r }, always: function(n) {
                    return n && e("complete", n), t(), r }, progress: function(n) { n && e("progress", n), t() } };
        return { resolve: function(n) { i.type = "success", i.data = n, t() }, reject: function(n) { i.type = "error", i.data = n, t() }, notify: function(n) { i.type = "progress", i.data = n, t() }, promise: r } }

    function qe(t) {
        function n(n, i, r) {
            var o = "success" == r ? e.resolve : e.reject;
            return "error" == r && (r = "success|error"), t.every(function(t) {
                return -1 !== r.indexOf(t.__inter__.type) }) ? o.call(e, t.map(function(t) {
                return t.__inter__.data })) : void 0 }
        var e = Je();
        return t.forEach(function(t) { t.then(n.bind(this, t), n.bind(this, t)) }), e.promise }

    function Ze(t, n) {
        var e = t,
            i = Bv.head || Bv.getElementsByTagName("head")[0],
            r = Bv.createElement("style");
        if (n) {
            var o = j("#" + n, i);
            o && it(o), r.id = n }
        return r.type = "text/css", r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(Bv.createTextNode(e)), i.appendChild(r), r }

    function Qe(t, e, i) {
        function r(t) {
            return t }

        function o(t) {
            var n = /\+/g;
            return Xv(t.replace(n, " ")) }
        if (e !== n) {
            if (i = i || {}, null === e && (i.expires = -1), "number" == typeof i.expires) {
                var a = i.expires,
                    c = i.expires = new th;
                c.setDate(c.getDate() + a) }
            return e = Qe.json ? JSON.stringify(e) : qv(e), Bv.cookie = [Uv(t), "=", Qe.raw ? e : Uv(e), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("") }
        for (var s, u = Qe.raw ? r : o, l = Bv.cookie.split("; "), d = 0; s = l[d] && l[d].split("="); d++)
            if (u(s.shift()) === t) {
                var f = u(s.join("="));
                return Qe.json ? JSON.parse(f) : f }
        return null }

    function ti(t, n) {
        return null !== Qe(t) ? (Qe(t, null, n), !0) : !1 }

    function ni(t, n, e, i, r) { e = e || 0;
        var o = function(t) {
            return st(t, e) };
        return ei(t, n, o, i, r) }

    function ei(t, n, e, i, r) {
        function o() { e(t) && n(t) }
        if (!t) return Hv.error("LazyDom__on => $el is undefined");
        i = i || Th;
        var a = jr(t),
            c = G(a);
        c.callbacks || (c.callbacks = [], F(a, "scroll", function() { _e(c.callbacks) }));
        var s = P(o, i);
        return c.callbacks.push(s), r ? s() : zv(o, 0), { clear: function() {
                var t = I(c.callbacks, s); - 1 !== t && c.callbacks.splice(t, 1) } } }

    function ii(n, e) {
        function i() {
            return j("img", n) }

        function r() { W(n, "Lazy_loaded"), a() }

        function o() { ot(i()), a() }

        function a() { z(n, "load", !0), z(n, "error", !0) }
        W(n, "Lazy_loading"), F(n, "load", r, !0), F(n, "error", o, !0);
        var c = ni(n, function() { i().src = e, c.clear() }, t.innerWidth) }

    function ri(t, n, e, i) {
        var r = {};
        i = i || {};
        var a = i.onLoaded;
        return r.onBefore = function() { En(!0), i.keepScrollTop || (Bv.body.scrollTop = 0) }, r.onLoaded = function() { En(!1), a && a() }, o(r, i), oi(t, n, e, fi.bind(null, r.emptyTpl, r.completeTpl), r) }

    function oi(t, e, i, r, a) {
        function c(t) { t.length || (t = [t]), v(t, !0), _.total += t.length, p() }

        function s(t, n) { it(n), _.total--, p() }

        function u() { F(_.container, "scroll", P(function() { _.__listener() }, 250)), ft(_.el, ""), He(_.el, _.otherTpl(_)), h = j(".ListView", _.el), $retry = j(".ListView__retry", h), $retry && F($retry, "click", l), _.__listener = function() { h && !V(h, "ListView_loading") && !V(h, "ListView_complete") && st(h, _.threshold) && (K(h, "ListView_error"), W(h, "ListView_loading"), l()) } }

        function l() { _.api(_.offset, _.limit, d, function() { W(h, "ListView_error") }) }

        function d(t) { f(t), _.onload(t), p() }

        function f(t) { t.items = t.items || t.data, _.datafilter && _.datafilter(t, _.offset, _.limit), t.items.length && (v(t.items), _.offset = _.offset + _.limit, _.loaded && _.loaded(t)), _.total = t.total || t.items.length || 0, _.more = t.more !== n ? t.more : t.total > _.offset }

        function p() { K(h, "ListView_loading"), K(h, "ListView_empty"), _.more || W(h, "ListView_complete"), 0 !== _.total || _.more || W(h, "ListView_empty"), _.onChange && _.onChange(_), _.__listener() }

        function v(t, n) {
            var e = _.tpl(t, _.offset);
            if (!_.$listContainer) return De(_.el, e), void(_.$listContainer = _.el.children[0]);
            var i = n ? De : He;
            e = e.replace(/^<.*?>|<\/[a-z]+>$/g, ""), i(_.$listContainer, e) }
        var h, _ = o({ el: t, container: jr(t), api: e, tpl: i, otherTpl: r, offset: 0, limit: 10, threshold: 100, onload: M }, a);
        return oi.__style_added__ || (oi.__style_added__ = 1, Ze(Ch)), _.onBefore && _.onBefore(_), _.api(_.offset, _.limit, function(t) { _.initData = t, _.onLoaded && _.onLoaded(_), u(), d(t) }, _.error), o(_, { add: c, remove: s }) }

    function ai(n, e) {
        if (e) {
            var i = bh || t.event && "click" == t.event.type && t.event;
            i && Oh(i);
            var r = {};
            r[n] = e, r.t = $h, ci(r) } }

    function ci(t) {
        function i(t, i) {
            var r, o = "";
            return e(t, function(t, e) {
                if (e != n)
                    if (e instanceof Zv)
                        for (r = 0; e.length > r; r++) o += "&" + t + "=" + e[r];
                    else o += "&" + t + "=" + e }), i ? (i + o).replace(/[&?]{1,2}/, "?") : o.substr(1) }
        wt(i(t, wf()), M) }

    function si(t) {
        return t.uuid && (t.cover = t.image, t.title = t.name, t.authors = t.last_nick ? "\u6700\u65b0: " + t.last_nick : "  "), t }

    function ui(t, n) {
        var e = "";
        if (t.role && t.role.length)
            for (var i, r = t.role.slice(0, 1), o = -1, a = r.length - 1; a > o;) i = r[++o], e += "<span>" + i[1] + "</span>";
        else if (t.author_detail)
            for (var c, s = t.author_detail, u = -1, l = s.length - 1; l > u;) c = s[++u], "\u7b49" !== c.name && (e += "<span ", n && (e += 'data-href="' + uf("book", c.uuid) + '"'), e += ">" + c.name + "</span>");
        else t.authors ? (e += '<span class="author" ', n && (e += 'data-href="' + uf("fiction", t.authors) + '"'), e += ">" + t.authors + "</span>") : t.editors && !n ? e += '<span class="author">' + t.editors + "</span>" : t.translators && (e += '<span class="author">' + t.translators + "</span>");
        return e }

    function li(t) {
        var e = "",
            i = t.new_price !== n ? t.new_price : t.price;
        return e += '<div class="u-price">', 0 !== i ? (t.new_price && (e += "<del><span>" + t.price.toFixed(2) + "</span>" + _i() + "</del>"), e += "<br/><b><span>" + i.toFixed(2) + "</span>" + _i() + "</b>") : e += "<b>\u514d\u8d39</b>",
            e += "</div>"
    }

    function di(t) {
        return t = t || 0, Math.floor(t >= 2 ? Math.floor(t + .5) : 0) }

    function fi(t, n) {
        return '<div class="ListView"><div class="ListView__loading u-loading">\u6b63\u5728\u52a0\u8f7d\u4e2d... </div><div class="ListView__error ListView__retry u-loading">\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u70b9\u51fb\u91cd\u8bd5:)</div><div class="ListView__empty">' + (t ? t() : "") + ' </div><div class="ListView__complete">' + (n ? n() : "") + " </div></div>" }

    function pi(t, n) {
        var e = "";
        return t = vi(t), e += '<div class="u-topic" data-href="' + Nr(t) + '" ' + Ku("n") + ' expose="">', t.title && !n && (e += '<h3 class="title single-line">' + t.title + "</h3>"), t.intro && !n && (e += '<p class="intro single-line">' + t.intro + "</p>"), t.ad_pic_url && (e += hi(t.ad_pic_url, fc(t.ad_copy).tag)), e += "</div>" }

    function vi(t) {
        var n = /\$.*?\$/;
        return t.title = t.ad_name.replace(n, ""), t.ad_copy = t.ad_copy || "", t.intro = t.ad_copy.replace(n, ""), t }

    function hi(t, n) {
        var e = '<div class="banner"><img class="cover" src="' + t + '">';
        return n && (e += '<img class="tag -' + (n.loc || "lt") + '" src="' + n.icon + '">'), e += "</div>" }

    function _i(t) {
        var n = "";
        return $e(t) || (n += t), n += mr() ? "\u9605\u7c73" : "\u5143" }

    function mi(t) {
        var n = "";
        return n += mr() ? $e(t) ? "" : Oi(t) + "\u9605\u7c73" : $e(t) ? "" : t + "\u4e66\u5e01" }

    function gi(t, e, i, r) {
        var o = { emptyTpl: r };
        return i && (o.error = Qt.bind(n, t, i)), ri(t, e, ki, o) }

    function bi(t, n) {
        for (var e, i = '<ul class="book-table">', r = t, o = -1, a = r.length - 1; a > o;) { e = r[++o];
            var c = si(e);
            i += '<li  data-track="' + o + '">' + mu(c, "-vertical", n && li(c)) + "</li>" }
        return i += "</ul>" }

    function ki(t, n, e, i, r, o) {
        for (var a, c = '<ul class="book-list">', s = t, u = -1, l = s.length - 1; l > u;) a = s[++u], c += '<li data-track="' + ((n || 0) + u) + '">' + yi(a, e, i, r, o) + "</li>";
        return c += "</ul>" }

    function yi(t, n, e, i, r) {
        var o = "";
        return t = si(t), o += '<div class="u-book', i && (o += " -itembtn"), o += '" data-href="' + Ci(t) + '"', $e(r) || (o += ' data-track="' + r + '"'), o += " " + Ku("b*" + Uu(t)) + ' expose=""><div class="cnt">' + Ii(t, !0) + '<div class="info"><h3 class="title single-line">' + t.title + '</h3><p class="summary">' + Ti(t) + '</p><div class="wrap">', n && (o += li(t) || wi(t)), e && (o += e(t)), o += '<p class="author single-line">' + ui(t) + "</p></div></div></div></div>" }

    function li(t) {
        var e = "",
            i = Tu(t);
        return i !== n && (e += '<div class="u-price">', 0 !== i ? (e += "<b><span>" + Mi(Si(i), !0) + "</span></b>", t.new_price && (e += "<del><span>" + Mi(Si(t.price), !0) + "</span></del>"), e += Pi(!0)) : e += "<b>\u514d\u8d39</b>", e += "</div>"), e }

    function wi(t) {
        var e = "",
            i = Iu(t);
        return i !== n && (e += '<div class="u-price">', e += 0 !== i ? "<b><span>" + Mi(i) + "</span></b>" + c("{0}/\u5343\u5b57", Pi()) : "<b>\u9650\u514d</b>", e += "</div>"), e }

    function xi(t) {
        return t % 1 === 0 ? t : t.toFixed(2) }

    function Ti(t) {
        return l(t.summary || t.intro || "\u6682\u65e0\u7b80\u4ecb") }

    function si(t) {
        return t = t.book || t, t.uuid && (t.cover = t.image, t.title = t.name, t.authors = t.last_nick ? "\u6700\u65b0: " + t.last_nick : "  "), t }

    function Ci(t) {
        return $e(t.url) ? t.book_id ? _f(t.id, t.book_id, 1) : t.fiction_id ? _f(t.id, t.fiction_id, 2) : t.id ? _f(t.id, t.source_id, t.source) : t.uuid ? url__series(t.type, t.uuid) : void 0 : t.url }

    function Ii(t, n) {
        var e = "",
            i = t.book_id || t.fiction_id || t.id;
        return $r(i, t), e += '<div class="book-cover" data-id="' + i + '" id="' + Ve(Er, t) + '"><img alt=' + t.title + ' /><div class="u-tagRT"></div></div>' }

    function $i(t, n, e) {
        return -1 !== t.indexOf("thumbnail") ? t : t.replace(/(![a-z]{1,2})?$/, "!" + (Sv ? n : n)) }

    function Oi(t) {
        if ($e(t)) return 0;
        var n = t / 100;
        return parseInt(n) == n ? +n : +n.toFixed(2) }

    function Si(t) {
        return $e(t) ? 0 : Math.round(100 * t) }

    function Ei(t) {
        return $e(t) ? "" : t === Number(t) && t % 1 !== 0 ? Hv.error("not support float") : (t + "").replace(/(\d)(?=(\d{3})+$)/g, "$1,") }

    function Mi(t, n) {
        if ($e(t)) return "";
        var e;
        return e = mr() || n ? Oi(t) : Ei(t), "" + e }

    function Pi(t) {
        var n = mr() || t ? _i : mi;
        return n("") }

    function Ai(t, n, e, i) {
        function r(t) {
            var n = "",
                r = new th(t),
                o = r.getTime() - th.now();
            return 0 > o ? "\u5df2\u8fc7\u671f" : (36e5 > o ? n = Math.floor(o / 6e4) + "\u5206\u949f" : 864e5 > o ? n = Math.floor(o / 36e5) + "\u5c0f\u65f6" : 2592e5 > o && (n = Math.floor(o / 864e5) + "\u5929"), i = i || "yyyy-M-d", n = e ? c(r, i) : n ? "\u6709\u6548\u671f\u8fd8\u5269" + n : "\u6709\u6548\u671f\u81f3" + c(r, i)) }

        function o(t) {
            var n = "",
                r = new th,
                o = new th(t),
                a = o;
            return r.getTime() - o.getTime() < 6e4 ? n = "1\u5206\u949f\u524d" : r.getTime() - o.getTime() < 36e5 ? n = Math.floor((r.getTime() - o.getTime()) / 6e4) + "\u5206\u949f\u524d" : r.getTime() - o.getTime() < 864e5 ? n = Math.floor((r.getTime() - o.getTime()) / 36e5) + "\u5c0f\u65f6\u524d" : (r.getTime() - o.getTime() < 2592e5 || e) && (n = Math.floor((r.getTime() - o.getTime()) / 864e5) + "\u5929\u524d"), i = i || "yyyy-M-d HH:mm", n || (n = c(a, i)), n }
        var a = {};
        a.encode = function(t, n) {
            return t && n && n.replace ? n.replace(t.r, function(n) {
                var e = t[t.i ? n : n.toLowerCase()];
                return null != e ? e : n }) : n || "" }, a.var2date = function(t) {
            var n = t;
            return n = new th(t) };
        var c = function() {
            var t = { i: !0, r: /\byyyy|yy|MM|M|dd|d|HH|H|mm|ms|ss|m|s\b/g },
                n = function(t) {
                    return t = parseInt(t) || 0, (10 > t ? "0" : "") + t };
            return function(e, i) {
                return e && i ? (e = a.var2date(e), t.yyyy = e.getFullYear(), t.yy = ("" + t.yyyy).substr(2), t.M = e.getMonth() + 1, t.MM = n(t.M), t.d = e.getDate(), t.dd = n(t.d), t.H = e.getHours(), t.HH = n(t.H), t.m = e.getMinutes(), t.mm = n(t.m), t.s = e.getSeconds(), t.ss = n(t.s), t.ms = e.getMilliseconds(), a.encode(t, i)) : "" } }();
        return 10 >= ("" + t).length && (t = 1e3 * t), n ? r(t) : o(t) }

    function Li(t) {
        return ("" + t).length > 10 ? t : 1e3 * t }

    function Ni(t, n, e) {
        function i(t) {
            return Math.floor(t / 864e5) }
        if (!t || !n) return 0;
        var r = new th(Li(t)),
            o = new th(Li(n)),
            a = 0;
        if ("month" == e) {
            var c = o.getYear() - r.getYear(),
                s = o.getMonth() - r.getMonth();
            a = s + 12 * c } else if ("day" == e) {
            var u = Math.round(60 * (new th).getTimezoneOffset() * 1e3),
                l = th.parse(r) - u,
                d = th.parse(o) - u;
            a = i(d) - i(l) }
        return Math.abs(Math.round(a)) }

    function Bi(t) {
        return c("{0}%", Math.round(100 * t)) }

    function ji(t, n, e, i, r, o, a) {
        function c() { En(!0), i && xn(i), ft(t, Vt());
            var s = Qt.bind(this, t, c);
            return r ? (n = Ri(n), void n(0, 10, function(i) {
                return i.items && !i.items.length && a ? Re(t, a()) : (Re(t, e(i)), void ri(j(r, t), n, o || ki)) }, s)) : n(function(n) { Re(t, e(n)) }, s) }
        return c() }

    function Ri(t) {
        var n = {};
        return function(e, i, r, o) {
            var a = e + "-" + i,
                c = n[a];
            return c ? r(c) : void t(e, i, function(t) { n[a] = t, r(t) }, o) } }

    function Di(t) {
        function n(t, n) { ge(function(n) { t(n.rewarded) }, function() {
                return n(), !0 }, "/discover/user/get_rewarded") }

        function e() {
            return -1 != Rv.hostname.indexOf("dushu") ? "h5__newbie__check" : "newbie__check" }
        var i = e(),
            r = At(i);
        if (!Lv && !Nv) return t(r);
        var o = Pv.user_id || Pv.device_hash;
        return o == r ? t(!0) : n(function(n) {
            return Lt(i, n ? o : ""), t(n) }, t.bind("", !0)) }

    function Hi(t) {
        function n() {
            return r.scrollHeight > r.clientHeight ? e() : void i() }

        function e() { K(r, "-fold") }

        function i() { W(r, "-fold") }
        var r = j(".folder-cnt", t);
        if (r) {
            if (r.clientHeight >= r.scrollHeight) return e();
            if (!H(t, "[data-href]")) {
                var o = j(".folder-more", t);
                o && F(o, "click", n);
                var a = j(".folder-cnt", t);
                return a && a.setAttribute("data-href", ""), F(r, "click", n) } } }

    function Fi(t, n, e, i, r, o) {
        var a = '<div class="u-folder ';
        return o && (a += o), a += '" id="' + Ve(Hi) + '" >', e && (a += '<div class="folder-top">' + e + "</div>"), t && (a += '<div class="folder-cnt', r || (a += " -fold"), a += '">' + t + "</div>", n && (a += '<em class="folder-more"></em>')), i && (a += '<div class="folder-tail">' + i + "</div>"), a += "</div>" }

    function zi(t, n) {
        function e(t) {
            function e(t, e) { r(!0, function() { e && e(), n.onClose && n.onClose(t) }) }

            function r(n, e) {
                function i() { n && (it(t), ie(c)), e && e() }
                return s.get("state") == s.get("HIDING") && n ? i() : (s.set({ state: s.get(n ? "CLOSED" : "HIDING") }), void(r.animate || (r.animate = !0, pe(!1), F(t, "webkitAnimationEnd", function n() { Hn(!0), r.animate = !1, ot(t), z(t, "webkitAnimationEnd", n), i() })))) }

            function a() { s.get("state") != s.get("SHOWING") && (s.set({ state: s.get("SHOWING") }), pe(!0), at(t), Hn(!1)) }

            function c() {
                return e(), !1 }
            var s = Ne(t, i);
            o(i, n), o(i, { HIDING: -1, CLOSED: 0, SHOWING: 1, state: 0, close: e, hide: r, show: a, update: s.set.bind(s) }), F(j(".container>:first-child", t), "click", function(t) { t.stopPropagation() }), a(), i.customAnimation && W(t.lastChild.firstChild, "-custom"), !mr() && ee(c) }
        var i = {},
            n = n || {};
        return He(Bv.body, Yi(e, t)), i }

    function Yi(t, n) {
        return '<div id="' + Ve(t) + '" class="u-fixed popup-layer" vp-class="{\'-show\' : $root.state == $root.SHOWING, \'-hide\' : $root.state != $root.SHOWING }"><div class="u-mask" vp-click="!$root.unclosable && $root.close()"></div><div class="container" vp-class="{ \'-center\': $root.isCenter }" vp-click="!$root.unclosable && $root.isCenter && $root.close()">' + n + "</div></div>" }

    function Vi(t, n) {
        if (!Vi.__showing__ || n) { Vi.__showing__ = !0, t = o({ title: "", prompt: "", confirmText: "\u786e\u5b9a", cancelText: "\u53d6\u6d88", confirm: M, cancel: M, confirmDisable: !1, singleButton: !1, notOnCloseConfirm: !1, notOnCloseCancel: !1, unclosable: !1, isCenter: !1, onClose: M }, t || {});
            var e = zi(Ki(t), { confirmDisable: t.confirmDisable, unclosable: t.unclosable, isCenter: t.isCenter, onClose: function(n) { Vi.__showing__ = !1, n = n || { cancel: !0 }, n.confirm && t.notOnCloseConfirm || n.cancel && t.notOnCloseCancel || t.onClose() }, cancel: function() { e.close({ cancel: !0 }, t.cancel) }, confirm: function() { e.close({ confirm: !0 }, t.confirm) } });
            return e } }

    function Wi(t, n, e, i) {
        function r(t) { Ne(t, { select: i.select }).set() }
        i = o({ title: "", prompt: "", cancelText: "\u53d6\u6d88", cancel: M, select: M, unclosable: !1, onClose: M }, i || {});
        var a = zi(Ui(t, n, e || r, i), { unclosable: i.unclosable, onClose: function(t) {!(t && t.selected) && i.cancel() } });
        return a }

    function Ki(t) {
        var n = '<section class="confirm-menu';
        return t.clazz && (n += " " + t.clazz), n += '"><h3 class="title">' + t.title + '</h3><div class="prompt"', t.promptCenter && (n += 'style="text-align: center;"'), n += ">" + t.prompt + "</div>", t.singleButton || (n += '<a class="button -cancel" vp-click="$root.cancel()">' + t.cancelText + "</a>"), n += '<a class="button -confirm" vp-class="{ \'-disable\': $root.confirmDisable }" vp-click="!$root.confirmDisable && $root.confirm()">' + t.confirmText + "</a></section>" }

    function Ui(t, n, e, i) {
        var r = '<section class="select-menu ';
        i.clazz && (r += i.clazz), r += '"><h3 class="title">' + i.title + "</h3>", i.prompt && (r += '<p class="prompt">' + i.prompt + "</p>"), r += '<ul class="select-items" id="' + Ve(e) + '" vp-ignore>';
        for (var o, a = t, c = -1, s = a.length - 1; s > c;) o = a[++c], r += '<li vp-click="$root.select(' + c + ')">' + n(o) + "</li>";
        return r += '</ul><a class="button" vp-click="$root.close()">' + i.cancelText + "</a></section>" }

    function Xi(t) {
        return t.reduce(function(t, n) {
            return 1e3 * n.expire_time > th.now() || !n.expire_time ? t + n.total - (n.used || 0) : t }, 0) }

    function Gi(t, e) { t = t || M, e = e || M, yt("/store/v0/ad/ranks", { success: xe.bind(n, t, e), error: e }) }

    function Ji(t, e, i, r, o, a) {
        var c = { start: i, count: r };
        c["store" == t ? "rt" : "r"] = e, t = "store" == t ? "android" : "fiction", bt("/store/v0/" + t + "/rank", { data: c, success: xe.bind(n, o, a), error: a }) }

    function qi(t, e) { t = t || M, e = e || M, yt("/hs/v0/android/store/category", { success: xe.bind(n, t, e), error: e }) }

    function Zi(t, e, i, r) { bt("/hs/v0/android/" + t + "/category/" + e, { success: xe.bind(n, i, r), error: r }) }

    function Qi(t, e, i, r, o, a, c) {
        var s = { start: r, count: o };
        i && (s[i] = 1);
        var u; "magazine" == t ? u = "/store/v0/android/category/magazine?id=" + e : (t = "store" == t ? "android" : "fiction", u = "/store/v0/" + t + "/category/" + e), bt(u, { data: s, success: xe.bind(n, a, c), error: c }) }

    function tr(t, e, i, r, o, a) { t = "store" == t ? "android" : "fiction";
        var c = "discount" == e ? "/store/v0/web/discount" : "/store/v0/" + t + "/list/" + e;
        bt(c, { data: { start: i, count: r }, success: xe.bind(n, o, a), error: a }) }

    function nr(t, e, i, r, o) { r = r || M, o = o || M;
        var a = { start: e, count: i }; "fiction" == t && (a.type = 4), bt("/store/v0/ad/persistent", { data: a, success: xe.bind(n, r, o), error: o }) }

    function er(t, e) { t = t || M, e = e || M, bt("/hs/v0/android/fiction/finished", { success: xe.bind(n, t, e), error: e }) }

    function ir(t, e, i, r, o) {
        var a;
        a = "click" == t ? "/store/v0/android/hot_free" : "/store/v0/android/free", bt(a, { data: { start: e, count: i }, success: xe.bind(n, r, o), error: o }) }

    function rr(t, e, i) { e = e || M, i = i || M, bt("/hs/v0/android/store/book/" + t, { success: xe.bind(n, e, i), error: i }) }

    function or(t, e, i) { e = e || M, i = i || M, bt("/hs/v0/android/fiction/book/" + t, { success: xe.bind(n, e, i), error: i }) }

    function ar(t, n) { t = t || M, n = n || M;
        var e = "/store/v0/time_limited/get";
        return Ge(e, { success: function(i) { Cr(e, i), xe(t, n, i) }, error: n }) }

    function cr(t, e) { t = t || M, e = e || M, yt("/hs/v0/android/fiction/special", { success: xe.bind(n, t, e), error: e }) }

    function sr(t, e) { t = t || M, e = e || M, yt("/hs/v0/android/store/channel/free", { success: xe.bind(n, t, e), error: e }) }

    function ur(t, e) { t = t || M, e = e || M, yt("/hs/v0/android/store/magazine", { success: xe.bind(n, t, e), error: e }) }

    function lr(t, e) { bt("/hs/v0/android/fiction/male", { success: xe.bind(n, t, e), error: e }) }

    function dr(t, e) { bt("/hs/v0/android/fiction/female", { success: xe.bind(n, t, e), error: e }) }

    function fr(t, e, i, r) { bt("/store/v0/android/rank/fresh", { data: { start: t, count: e }, success: xe.bind(n, i, r), error: r }) }

    function pr(t, e) { bt("/events/active_user", { method: "GET", success: xe.bind(n, t, e), error: e }) }

    function vr(t, e, i, r) { bt("/task/v2/user/claim", { type: "POST", data: o({ task_id: i, task_type: r }, we()), success: xe.bind(n, t, e), error: e }) }

    function hr(t) {
        var n = "/store/v0/coupon/list",
            e = { type: "POST", data: { coupon_type: 0, status: t }, error: M };
        return o(e.data, Cn()), Ge(n, e).then(function(e) { 0 == t && Cr(n, e) }) }

    function _r(t) {
        var n = { used: [], expired: [], premature: [], avail: [] };
        return t.forEach(function(t) { 1 == t.status ? n.used.push(t) : +new th(1e3 * t.expire_time) < +new th ? n.expired.push(t) : +new th(1e3 * t.start_time) > +new th ? n.premature.push(t) : n.avail.push(t) }), n }

    function mr() {
        return "ios" === Av }

    function gr() {
        var t = Cn();
        return 0 == t.user_type || $e(t.user_type) }

    function br() { Rv.reload() }

    function kr() {
        return !Nv && !Lv }

    function yr(t, n) {
        return kr() || t ? (zn(function(t) {
            return t.user_id ? void br() : void n() }), !0) : !1 }

    function wr() {
        return Lv ? !1 : yr(!0) }

    function xr(t, n) {
        var e; "string" == typeof t ? e = t : (e = t.msg || t.message || "\u9519\u8bef\u7801", t.result && (e += "(" + t.result + ")")), n ? Fv(e) : zv(function() { In(e) }, 0) }

    function Tr(t, n, e) {
        return e = e || M, 0 === t.result && n(), 0 === t.result || e(t, n) ? void 0 : xr(t) }

    function Cr(t, n) { n.key = Pv.user_id, Pn(t, { __data__: n }) }

    function Ir(t, n, e) { Ir.__callback__ || te("button", function() { Ir.__callback__() }), Ir.__callback__ = n, Nn({ add: !1, text: t, html: e }), t && Nn({ add: !0, text: t, html: e }) }

    function $r(t, n) {
        var e = $r.cache;
        return e || (e = $r.cache = {}), n ? void(e[t] = n) : e[t] }

    function Or(t, n) {
        if (!t.uuid) {
            var e = t.book_id || t.source_id;
            if (xu(e)) return W(n, "-purchased");
            if (!$e(t.price)) {
                if (t.book_id && 0 === Tu(t)) return W(n, "-freebook");
                if (t.fiction_id && 0 === t.price) return W(n, "-freefiction") }
            return 1e3 * t.limited_time > th.now() && t.allow_free_read ? W(n, "-read") : void 0 } }

    function Sr(t, n) {
        var e = j(".book-cover .u-tagRT", H(n, ".u-book"));
        Or(t, e) }

    function Er(t, n) { Or(n, j(".u-tagRT", t)), ii(t, $i(n.cover, "s", "t")) }

    function Mr(t, n, e, i, r, a) {
        function c(t) { gi(n, r(t), i) }
        o({ $page: n, error: i }, a);
        if (t && e && e.length > 1) {
            var s = Pr(t, function(t) { c(e[t]) });
            s.go(0) } else c(e.length ? e[0] : e) }

    function Pr(t, n, e) {
        function i(t) { t != r.crt && (a.set({ crt: t }), n && n(t)) }
        var r = { crt: -1, go: i };
        o(r, e);
        var a = Ne(t, r);
        return { $el: t, go: i } }

    function Ar(t) { Bv.body.setAttribute("data-track", t || "rr") }

    function Lr(t) {
        function n(t) {
            var n = H(t.target, "[data-href]");
            n && (n.dataset.login && yr() || n.dataset.href && pp(n.dataset.href, n.dataset.title || "", t)) }
        F(t, "click", A(n, 600)) }

    function Nr(t) {
        var n = { BOOK: "1", FICTION: "100", BOOK_TOPIC: "2", FICTION_TOPIC: "101", RIGHT: "4", NESTED_TOPIC: "5", OTHER: "3", TAG: "0", BOOK_RANK: "1000", FICTION_RANK: "1001", BOOK_NEW: "1002", FREE_NEW: "1010", FICTION_AUTHOR: "2001" },
            e = t.reference_id || t.id,
            i = t.ad_type || t.type;
        return i == n.BOOK ? _f(0, e, 1) : i == n.FICTION ? _f(0, e, 2) : i == n.BOOK_TOPIC ? lf("book", e) : i == n.NESTED_TOPIC ? lf("nested", e) : i == n.FICTION_TOPIC ? lf("fiction", e) : i == n.RIGHT ? url__copyright(e) : i == n.BOOK_RANK ? pf("store", e) : i == n.FICTION_RANK ? pf("fiction", e) : i == n.BOOK_NEW ? url__bookNew() : i == n.FREE_NEW ? hf() : i == n.OTHER ? e : i == n.FICTION_AUTHOR ? uf("fiction", e) : ja(i) ? f_(e) : "" }

    function Br() {
        return "mi_wap" == Pv.app_id ? Ct() : f(Rv.search.substr(1)) }

    function jr(n) {
        var e = function(t, n) {
                return null === t.parentNode ? n : e(t.parentNode, n.concat([t])) },
            i = function(t, n) {
                return Kv(t, null).getPropertyValue(n) },
            r = function(t) {
                return i(t, "overflow") + i(t, "overflow-y") + i(t, "overflow-x") },
            o = function(t) {
                return /(auto|scroll)/.test(r(t)) },
            a = function(n) {
                if (n instanceof eh) {
                    for (var i = e(n.parentNode, [n]), r = 0; i.length > r; r += 1)
                        if (o(i[r])) return i[r];
                    return t } };
        return a(n) }

    function Rr(t, e, i, r, o, a) {
        var c = { start: i, count: r, order: e };
        bt("/store/v0/android/author/" + t, { data: c, success: xe.bind(n, o, a), error: a }) }

    function Dr(t, e, i, r, o) {
        var a = { start: e, count: i, author: t, b: 0, f: 1 };
        bt("/store/v0/android/query", { data: a, success: xe.bind(n, r, o), error: o }) }

    function Hr(t, e, i) { bt("/store/v0/android/author_info/" + t, { success: xe.bind(n, e, i), error: i }) }

    function Fr(t, n, e, i) {
        function r() {
            return ji(t, Dr.bind(this, e), s.bind(this, null, null), e, ".author-body") }

        function o() { Hr(e, function(n) {
                return ji(t, Rr.bind(this, e, c[i].key), s.bind(this, n.name, n.intro), n.name, ".author-body") }) }

        function a(t, n, e) { ri(j(".author-body", Bv), Rr.bind(this, n, e.key), ki) }
        i = i || 0;
        var c = [{ name: "\u70ed\u95e8", key: "-2" }, { name: "\u6700\u65b0", key: "-1" }],
            s = zr.bind(this, n, c, a.bind(this, t, e));
        return "book" == n ? o() : r() }

    function zr(t, n, e, i, r, o) {
        var a = '<div class="new-page author-page -' + t + '">';
        return "book" == t && (a += Fi(r, 1, Yr(i, o)) + Yc(n, e)), a += '<div class="author-body"></div></div>' }

    function Yr(t, n) {
        return '<div class="author-top"><h3>' + t + "</h3><p>" + n.total + "\u672c\u4f5c\u54c1</p></div>" }

    function Vr(n, e, i) {
        function r() {
            return "magazine" == e ? (data = {}, data.filterTags = [], data.filterTags.push(a()), F(t, "multiFilter.change", function(t) {
                var n = t.data,
                    e = n[0][n[0].crt].key;
                o(i, e) }), void Re(n, qr(data))) : void Zi(e, i, function(t) { xn(t.cate.label), t.types = a(), t.cate.children.unshift({ label: "\u5168\u90e8", category_id: i }), t.filterTags = [];
                var e = T(t.cate.children, function(t) {
                    return { name: t.label, key: t.category_id } });
                t.filterTags.push(e), t.filterTags.push(a()), Re(n, qr(t, s));
                var r = j("#filterList__topBar");
                F(r, "multiFilter.change", function(t) {
                    var n = t.data;
                    o(n[0][n[0].crt].key, n[1][n[1].crt].key) }) }) }

        function o(t, i) { jr(j("#cate-books", n)).scrollTop = 0, (t != o.id || i != o.rank) && (o.id = t, o.rank = i, gi(j("#cate-books", n), Qi.bind(this, e, t, i))) }

        function a() {
            return "fiction" != e ? [{ name: "\u70ed\u95e8", key: "" }, { name: "\u6700\u65b0", key: "latest" }] : [{ name: "\u70ed\u95e8", key: "click" }, { name: "\u6700\u65b0", key: "latest" }, { name: "\u5b8c\u7ed3", key: "finish" }] } "book" == e && (e = "store");
        var c = f(Rv.search.substr(1)).tagIndexStr,
            s = c ? c.split(",") : [0, 0];
        return r() }

    function Wr(t, e, i) {
        function r() {
            return ft(t, Vt()), "magazine" == e ? (ft(t, qr({ types: c() })), void o(i)) : void Zi(e, i, function(n) { xn(n.cate.label), n.types = c(), n.cate.children.unshift({ label: "\u5168\u90e8", category_id: i }), ft(t, qr(n)), n.cate.children.length > 1 ? Pr(j("#cate__selector", t), function(t) { xn(t ? n.cate.label + " - " + n.cate.children[t].label : n.cate.label), o(n.cate.children[t].category_id) }, { toggle: a }).go(0) : o(n.cate.children[0].category_id) }, Qt.bind(n, t, r)) }

        function o(i) { Mr(j("#cate__filter", t), j("#cate__container", t), c(), Qt.bind(n, t, r), function(t) {
                return Qi.bind(this, e, i, t.key) }) }

        function a(t) { t.isOpen = !t.isOpen, t.$change() }

        function c() {
            return "fiction" != e ? [{ name: "\u70ed\u95e8", key: "" }, { name: "\u6700\u65b0", key: "latest" }] : [{ name: "\u70ed\u95e8", key: "click" }, { name: "\u6700\u65b0", key: "latest" }, { name: "\u5b8c\u7ed3", key: "finish" }] }
        return xn(""), r() }

    function Kr(t) {
        function e() { ft(t, Vt()), qi(function(n) {
                (2 == Pv.user_type || 3 == Pv.user_type) && (n.section = [n.section[2], n.section[3], n.section[0], n.section[1]]), 4 == Pv.user_type && (n.section = [n.section[3], n.section[2], n.section[0], n.section[1]]), Re(t, Gr(n)) }, Qt.bind(n, t, e)) }
        return xn("\u5206\u7c7b"), fu(), Ir("SEARCH"), e() }

    function Ur(t) {
        return xn("\u4e0d\u80fd\u9519\u8fc7\u597d\u4e66"), Xr(function(n) { Re(t, Qr(n.ads)) }) }

    function Xr(t, n) { bt("/store/v0/ad?key=v4-best-topic&build=2014110702&a=1", { success: function(n) { 0 == n.code && t(n) }, error: n }) }

    function Gr(t) {
        for (var n, e = '<div class="new-page cate-page" data-track="ca"><main class="u-area">' + Zr(), i = t.section, r = -1, o = i.length - 1; o > r;) { n = i[++r], e += '<section class="m-cat-' + n.key + '"><div class="u-ttl u-ttl-icn"><em class="icn-catagory' + (r + 1) + '"></em><h1>' + n.name + '</h1></div><ul class="u-list-2col">';
            for (var a, c = t[n.key], s = -1, u = c.length - 1; u > s;) a = c[++s], e += '<li data-href="' + Jr(a) + '" data-title="' + a.label + '"><div class="u-cat-item" style="background-image:url(' + (a.new_image || a.image) + '!m);"><h3>' + a.label + '</h3><p class="num">' + (a.book_count || a.fiction_count || a.count) + "</p></div></li>";
            e += "</ul></section>" }
        return e += "</main></div>" }

    function Jr(t) {
        return cf(t.fiction_count ? "fiction" : t.book_count ? "store" : "magazine", t.sid || t.category_id) }

    function qr(t, n) {
        return '<div class="new-page"><section class="main-card" id="' + Ve(to, t.filterTags, n) + '"></section><section class="main-card" id="cate-books"></section></div>' }

    function Zr() {
        return '<section class="m-cat-best" data-track="bt"><div class="u-ttl u-ttl-icn"><em class="icn-catagory-best"></em><h1>\u4e0d\u80fd\u9519\u8fc7\u7684\u597d\u4e66</h1></div><img src="http://image.read.duokan.com/mfsv2/download/s010/p011P2KJzY8P/esEz0wmvUFdv9q.png" data-href="' + cf("best") + '"></section>' }

    function Qr(t) {
        for (var n, e = '<div class="new-page best-page"><main>', i = t, r = -1, o = i.length - 1; o > r;) n = i[++r], e += '<section class="main-card" data-track="' + r + '"><div class="bd">', r >= 10 && (n.ad_pic_url = null), e += pi(n) + "</div></section>";
        return e += "</main></div>" }

    function to(t, n, e) {
        function i(t) { t && (l.state = t), d.set(), f.set(), u = 0 }
        He(t, io(n));
        var r = jr(t);
        He(r.parentNode, ro(n, e));
        var o = j("#filterList__topBar", r.parentNode),
            a = t.clientHeight,
            c = -t.getBoundingClientRect().top,
            s = c,
            u = 0,
            l = { tags: n, state: "default", setState: i },
            d = Ne(t, l),
            f = Ne(o, l);
        i(), F(r, "scroll", function() {
            var n = -t.getBoundingClientRect().top;
            u = Math.max(0, u + (n - c)), n > c ? ("default" == l.state && n >= a && i("top"), "expand" == l.state && u >= 30 && n > a && i("top")) : ("top" == l.state && a >= n && i("default"), "expand" == l.state && n == s && i("default")), c = n }) }

    function no(t, e, i, r) {
        function a() { m(c, function(t) { t.set() });
            var t = y(e, function(t) {
                return t.crt !== n });
            t && zv(function() {
                var t = j("#filterList__topBar");
                Y(t, "multiFilter.change", e) }, 0) }
        var c = no.cache = no.cache || [],
            s = e[r];
        o(s, { go: function(t) { t != s.crt && (s.crt = t, a()) } });
        var u = Ne(t, s);
        c.push(u), s.crt = i ? i[r] : 0, a() }

    function eo(t) {
        var n = j("#filterList__topBar");
        F(n, "multiFilter.change", function(n) {
            var e = n.data,
                i = T(e, function(t) {
                    return t[t.crt].name });
            ft(t, i.join("\uff0c")) }) }

    function io(t, n) {
        for (var e, i = '<ul class="filter-list">', r = t, o = -1, a = r.length - 1; a > o;) e = r[++o], i += "<li>" + oo(t, n, o) + "</li>";
        return i += "</ul>" }

    function ro(t, n) {
        return '<section id="filterList__topBar" class="main-card" vp-show="$root.state != \'default\'"><div vp-show="$root.state == \'expand\'">' + io(t, n) + '</div><ul class="tag-list -single" vp-show="$root.state == \'top\'" vp-click="$root.setState(\'expand\')"><li class="tag" id="' + Ve(eo) + '" vp-ignore></li></ul></section>' }

    function oo(t, n, e) {
        var i = "",
            r = t[e];
        i += '<ul class="tag-list" id="' + Ve(no, t, n, e) + '" vp-ignore>';
        for (var o, a = r, e = -1, c = a.length - 1; c > e;) o = a[++e], i += '<li class="tag" vp-click="$root.go(' + e + ")\" vp-class=\"{'-crt' : $root.crt == " + e + '}"> ' + o.name + " </li>";
        return i += "</ul>" }

    function ao(t, n, e, i) {
        function r() {
            var t = [e],
                n = [];
            return Br().tabs && (t = (Br().tabs || "").split(","), n = (Br().titles || "").split(",")), T(t, function(t) {
                return { key: t, name: n.shift() } }) }! function() {
            function o() {
                return ji(t, s.bind(this, c[0].key), Vc.bind(this, c, a.bind(this, t, e)), "", ".tag-body", ho.bind(this, c[0].key)) }

            function a(t, n, e) { ri(j(".tag-body", Bv), s.bind(this, e.key), ho.bind(this, e.key)) }
            var c = r(i),
                s = vo.bind(this, n);
            return o() }() }

    function co() {
        function t(t, n) {
            for (var e = 0, i = []; t[e] || n[e];) t[e] && i.push(t[e]), n[e] && i.push(n[e]), e++;
            return i }
        var n = { 3: [19, 21, 23, 25, 27, 29, 34, 35, 36, 37], 4: [20, 22, 24, 26, 28, 30, 31, 32, 33, 38, 39] },
            e = n[Pv.user_type] || t(n[3], n[4]);
        return e }

    function so(t, e) { fu(),
            function i() { Gi(function(n) {
                    var i = co();
                    Re(t, _o(i, n.items, e)) }, Qt.bind(n, t, i)) }() }

    function uo(t) {
        function n(t, n, e, i) {
            return p({ multi_url: n.join(","), multi_title: e.join(","), multi_pos: i }, t) }

        function e(t, n) {
            var e = "/hs/market/rank_list/" + o(t) + "/" + t.id,
                i = { tabs: n };
            return p(i, e) }

        function i(t) {
            var n = "/hs/market/rank/" + o(t) + "/" + t.id,
                e = { tabs: a(t).join(","), titles: c(t).join(",") };
            return p(e, n) }

        function r(t) {
            {
                var n = a(t);
                c(t) }
            return T(n, function(n, i) {
                return e(t, n) }) }

        function o(t) {
            return 10 > t.id ? "store" : "fiction" }

        function a(t) {
            var n = t.ranks.split(",");
            return n[0] % 10 != 0 || E(["0", "10", "100", "300"], n[0]) || n.push(n.shift()), n }

        function c(t) {
            var n = a(t),
                e = ["\u603b\u699c", "\u65e5\u699c", "\u5468\u699c", "\u6708\u699c"];
            return T(n, function(t) {
                return e[fo(t)] }) }
        if (3 == t.id) return "/hs/market/new";
        if (5 == t.id) return "/hs/market/cate/store/9";
        var s = a(t);
        return 1 == s.length ? e(t, s[0]) : n(i(t), r(t), c(t)) }

    function lo(t) {
        return t >= 100 ? !0 : !1 }

    function fo(t) {
        var n = { 0: Vh, 10: Wh, 100: Vh, 300: Wh };
        return E(["0", "10", "100", "300"], t) ? n[t] : [Kh, Yh, Vh, Wh][t % 10] }

    function po(t) {
        var n, e = j(".single-filter .-selected .tag") || j(".single-filter .tag");
        if (e) {
            var i = { "\u603b\u699c": Kh, "\u65e5\u699c": Yh, "\u5468\u699c": Vh, "\u6708\u699c": Wh };
            n = i[e.innerHTML] } else n = Br().tabs ? fo(Br().tabs) : Wh;
        var r = ["\u5171\u6709", "\u4eca\u65e5", "\u672c\u5468", "\u672c\u6708"],
            o = "\u4eba\u5728\u8bfb";
        n == Kh && (o = "\u4eba\u8bfb\u8fc7");
        var a = r[n],
            c = Br().tabs || ""; "23" == c.substring(0, 2) && (a += "\u88ab\u641c", o = "\u6b21");
        var s = parseInt(t / 1e4);
        return s && (t = s + "W"), a + t + o }

    function vo(t, n, e, i, r, o) {
        function a(t, n, e) { 40 == n && (e.more = !1), t(e) }
        Ji(t, n, e, i, a.bind(this, r, e), o) }

    function ho(t, n, e, i, r, o, a) {
        for (var c, s = '<div class="rank-page"><ul class="book-list ">', u = n, l = -1, d = u.length - 1; d > l;) c = u[++l], s += '<li data-track="' + ((e || 0) + l) + '">' + mo(c, i, r, o, a, l, e, t) + "</li>";
        return s += "</ul></div>" }

    function _o(t, n, e) {
        var i = "";
        Mu("rkf"), e && (i += '<div class="u-title u-title_old-rankpage">\u7f51\u6587\u699c\u5355</div>'), i += '<ul class="original-rank-list">';
        for (var r, o = n, a = -1, c = o.length - 1; c > a;)
            if (r = o[++a], -1 != t.indexOf(r.id - 1)) { i += '<li class="original-rank-list__item" data-href="' + uo(r) + '" data-title="' + r.name + '" ' + Ku("l") + '><img src="' + r.cover + '"  class="original-rank-list__img"><div class="original-rank-list__content" >';
                for (var s, u = r.description.split("\n"), l = -1, d = u.length - 1; d > l;) s = u[++l], i += '<p class="original-rank-list__page"><span class="original-rank-list__num" > ' + (l + 1) + "</span>" + s + "</p>";
                i += "</div></li>" }
        return i += "</ul>" }

    function mo(t, n, e, i, r, o, a, c) {
        var s = "";
        return t = si(t), s += '<div class="u-book', i && (s += " -itembtn"), s += '" data-href="' + Ci(t) + '"', $e(r) || (s += ' data-track="' + r + '"'), s += " " + Ku("b*" + Uu(t)) + ' expose=""><!-- TODO -->', 0 == a && 3 > o && (s += '<div  class="u-book__lt "><div class="u-book__lt-number">', 2 >= o && (s += o + 1), s += '</div></div><div class="u-book__lt-triangle"></div>'), s += Ii(t, !0) + '<div class="info"><h3 class="title  single-line">' + t.title + '</h3><div class="wrap"><p class="author single-line">' + ui(t) + '</p></div><p class="summary">' + Ti(t) + '</p><p class="u-book__onRead ', a >= 10 && (s += " u-book_gray"), s += '">', lo(t.ex) && (s += '<!-- TODO --><img src="http://image.read.duokan.com/mfsv2/download/fdsc3/p01DP6uVrgOY/jcc0zobbY1xfYP.png" class="u-book__eye " />' + po(t.ex)), s += "</p></div></div>" }

    function go(t) { xn("\u65b0\u4e66\u4e13\u533a"), Ar(),
            function n() { ft(t, Vt()), gi(t, fr.bind(this), n) }() }

    function bo(t) { xn("\u6742\u5fd7\u4e13\u533a"), Ar(),
            function e() { ft(t, Vt()), ur(function(n) { Re(t, To(n)) }, Qt.bind(n, t, e)) }() }

    function ko(t) {
        var n = Br();
        return ji(t, ir.bind(this, n.hot ? "click" : "latest"), Co, (n.hot ? "\u70ed\u95e8" : "\u6700\u65b0") + "\u514d\u8d39\u56fe\u4e66", ".free-list") }

    function yo(t, e) {
        function i() {! function e() { ft(t, Vt()), sr(function(n) { n.section[0].items[0].new_price = 0, m(n.section, function(t) { t.more && !s(t.more, "/hs/store/free") && (t.more = t.more.replace("/store", "/market")) }), tr("store", 12505, 0, 6, function(e) { Re(t, $o(n, e)) }) }, Qt.bind(n, t, e)) }() }

        function r() {! function e() { Re(t, Vt()), cr(function(n) { Re(t, So(n)) }, Qt.bind(n, t, e)) }() }
        return xn(1 == e ? "\u514d\u8d39\u4e13\u533a" : "\u514d\u8d39\u53ca\u7279\u4ef7\u4e13\u533a"), Ar(1 == e ? "nt-bf" : "nt-ff"), 1 == e ? i() : r() }

    function wo(t) {
        function e(t, e) { t = t || M, e = e || M, bt("/store/v0/ad?key=df_choice_announcement&build=2014110702&a=1", { success: xe.bind(n, t, e), error: e }) }
        e(function(n) { t.dataset.href = Nr(n.ads[0]) }) }

    function xo(t, n) { xn(""),
            function() { ft(t, Vt()), er(function(n) {
                    var e = {};
                    e.label = n.title, e.lists = O(n.top, n.area), xn(e.label), Re(t, Po(e)) }) }() }

    function To(t) {
        for (var n, e = '<div class="new-page">', i = t.cate.children, r = -1, o = i.length - 1; o > r;) n = i[++r], e += '<section class="main-card"><div class="channel-title"><h1>' + n.label + '</h1></div><div class="card-cnt">' + bi(t[n.sid]) + "</div>" + Io(n) + "</section>";
        return e += "</div>" }

    function Co(t) {
        return '<div class="new-page free-latest"><div class="free-list"></div></div>' }

    function Io(t) {
        return '<div class="card-tail"><a data-href="/hs/market/cate/store/' + t.sid + '">\u67e5\u770b\u5168\u90e8</a></div>' }

    function $o(t, n) {
        var e = '<div class="new-page">' + Oo(t.section.slice(0, 2));
        return n && (e += '<section class="main-card" data-track="1"><div class="channel-title"><h1>' + n.label + "</h1><p>" + n.description + '</p></div><div class="card-cnt">' + bi(n.items) + '</div><div class="card-tail"><a data-href="' + lf("book", 12505) + '">\u67e5\u770b\u5168\u90e8</a></div></section>'), e += '<section class="main-card" data-track="2"><div class="channel-title"><h1>' + t.section[2].name + "</h1><p>\u4ee5\u4e0b\u7cbe\u54c1\u4e66\u73b0\u5728\u53ef\u4ee5\u514d\u8d39\u7545\u8bfb\u5168\u6587</p></div>" + ki(t.section[2].items) + '<div class="card-tail"><a data-href="' + t.section[2].more + '">\u67e5\u770b\u5168\u90e8</a></div></section>' + Mo(t.section[3].topic, t.section[3].items) + '<section class="main-card" data-track="4"><div class="channel-title">' + t.section[4].name + "</div>" + ki(t.section[4].items) + '<div class="card-tail"><a data-href="' + t.section[4].more + '">\u67e5\u770b\u5168\u90e8</a></div></section></div>' }

    function Oo(t) {
        for (var n, e = "", i = t, r = -1, o = i.length - 1; o > r;)
            if (n = i[++r], n.items[0]) {
                var a = n.items[0],
                    c = a.book;
                e += '<section class="main-card" data-track="0"><div class="channel-title">', 0 == r ? (e += "<h1>\u4eca\u65e5\u514d\u8d39\u4e0b\u8f7d</h1>", 14440608e5 > th.now() && (e += "<p>\u6570\u5b57\u9605\u8bfb\u8054\u5408\u9650\u514d(9\u67085\u65e5-10\u67085\u65e5)</p>")) : e += "<h1>\u660e\u65e5\u514d\u8d39\u9884\u544a</h1>", e += '</div><ul class="book-list"><li  data-track="0"><div class="u-book -act" data-href="' + Ci(c) + '" ', 0 == r && (e += "id=" + Ve(Ou, c)), e += ">" + Ii(c, !0) + '<div class="info"><h3 class="title single-line">' + c.title + '</h3><p class="summary">' + Ti(c) + '</p><p class="button ', 1 == r && (e += "-disable"), e += "\" vp-class=\"{'-disable' : $root.isPaid()}\" vp-bind=\"$root.isPaid() ? '\u5df2\u9886\u53d6' : '\u514d\u8d39\u9886\u53d6'\">" + a.ad_copy + "</p></div></div></li></ul></section>" }
        return e }

    function So(t) {
        for (var n, e = '<div class="new-page special-page"><section class="main-card"><div class="channel-title"><h1>\u4eca\u65e5\u7545\u8bfb\u7cbe\u54c1</h1><p>\u4ee5\u4e0b\u4e66\u7c4d\u514d\u8d39\u7545\u8bfb\u4e2d</p></div>' + ki(t.top.items, 0, !1) + '<div class="card-tail"><a id="' + Ve(wo) + '">\u67e5\u770b\u66f4\u591a\u7cbe\u54c1</a></div></section>', i = t.area, r = -1, o = i.length - 1; o > r;) n = i[++r], e += '<section class="main-card"><div class="channel-title"><h1>' + n.name + "</h1></div>" + ki(n.items, 0, !1, Eo) + "</section>";
        return e += "</div>" }

    function Eo(t) {
        var n = "",
            e = t.special || 0;
        return e && (n += '<div class="u-price"><b>' + xi(e) + "</b>" + _i() + "</div>"), n }

    function Mo(t, n) {
        return '<section class="main-card" data-track="3"><div class="channel-title"><h1>' + t.ad_name + "</h1><p>" + t.ad_copy + '</p></div><div class="card-cnt">' + bi(n) + '</div><div class="card-tail"><a data-href="' + Nr(t) + '">\u67e5\u770b\u5168\u90e8</a></div></section>' }

    function Po(t) {
        for (var n, e = '<div class="new-page special-page">', i = t.lists, r = -1, o = i.length - 1; o > r;) n = i[++r], e += '<section class="main-card">', n.name && (e += '<div class="channel-title"><h1>' + n.name + "</h1></div>"), e += '<div data-track="ch.finished">' + ki(n.items, 0, !1, Eo) + "</div>", n.name.indexOf("\u7537\u751f") ? n.name.indexOf("\u5973\u751f") || (e += '<div class="card-tail"><a data-href="/hs/market/cate/fiction/18000000?tagIndexStr=0,2">\u67e5\u770b\u66f4\u591a</a></div>') : e += '<div class="card-tail"><a data-href="/hs/market/cate/fiction/1000000?tagIndexStr=0,2">\u67e5\u770b\u66f4\u591a</a></div>', e += "</section>";
        return e }

    function Ao(t, n, e, i, r) {
        var o = Bv.createElement("div");
        n.appendChild(o), F(n, "channal:rendered", function() { Ye(o, No(e[i])) }), t() }

    function Lo(t, n, e, i) {
        function r() { yr() || l.get("gifted") || l.get("unavailable") || Dc(function() { a(!0), In("\u606d\u559c\u60a8\u9886\u53d6\u6210\u529f") }, function(t) {
                return a(!0), 130013 == t.result ? (In("\u60a8\u5df2\u7ecf\u9886\u53d6\u8fc7\u5956\u52b1\uff01"), 1) : void 0 }, n) }

        function o() { kr() || Hc(function(t) {
                var n = t.gifted;!n && u(), a(n) }, function(t) {
                return l.set({ unavailable: !0 }), 130002 == t.result ? 1 : void 0 }, n) }

        function a(t) { l.set({ gifted: t }) }

        function c() {
            var n = t.parentNode.childNodes,
                e = I(n, t);
            return w(n, function(t, n) {
                return n > e;

            })
        }

        function s() {
            if (!kr()) {
                var n = t.offsetHeight;
                m(c(), function(t) { W(t, "channel-gift-transformming"), t.style.webkitTransform = "translateY(-" + n + "px)", t.style.transitionDuration = "0s", t.style.transitionTimingFunction = "ease-in-out" }) } }

        function u() { kr() || m(c(), function(t) { t.style.webkitTransform = "translateY(0)", t.style.transitionDuration = ".36s", F(t, "webkitTransitionEnd", function() { t.style.webkitTransform = "", K(t, "channel-gift-transformming") }) }) }
        if (i && s(), n) {
            var l = Ee({ gifted: !1, unavailable: !1 }),
                d = j(".channel-gift__button", t);
            return l.className(d, function(t) {
                return { "channel-gift__button_unavailable": t.gifted || t.unavailable } }), l.html(d, function(t) {
                return t.gifted ? "\u5df2\u9886\u53d6" : t.unavailable ? "\u5df2\u8fc7\u671f" : e }), l.digest(), F(t, "click", r), o() }
    }

    function No(t) {
        var n = "",
            e = t.extend;
        return n += '<section class="channel-group main-card channel-gift" id="' + Ve(Lo, e.gift_code, e.gift_button, e.hide_at_first) + '">' + Jo(t.title, t.desc) + '<div class="channel-gift__content"><img class="channel-gift__icon" src="' + t.banner + '"><p class="channel-gift__text">' + e.gift_text + '</p><a class="channel-gift__button">' + e.gift_button + "</a></div></section>" }

    function Bo(t, n) {
        var e = 2,
            i = 1,
            r = n.length - 1,
            o = j("li:first-child", t).clientHeight,
            a = e + i,
            c = r * a,
            s = "slide-animation",
            u = s + th.now(),
            l = Ro(e, r, o, a, c, u);
        l += jo(r, o, c, u), Ze(l, s) }

    function jo(t, n, e, i) {
        return c(".u-announce__list { top: -{0}px; -webkit-animation-duration: {1}s; -webkit-animation-iteration-count: infinite; -webkit-animation-name: {2}; }", t * n, e, i) }

    function Ro(t, n, e, i, r, o) {
        for (var a = c("@-webkit-keyframes {0} { 0% { top: -{1}px; } ", o, n * e), s = n; s > 0; s--) {
            var u = (n - s) * i + t;
            a += c("{0}% { top: -{1}px; } ", (u / r * 100).toFixed(2), s * e);
            var l = (n - s + 1) * i;
            a += c("{0}% { top: -{1}px; } ", (l / r * 100).toFixed(2), (s - 1) * e) }
        return a += c(" }") }

    function Do(t) {
        var n = "",
            e = t.data.data;
        if (e && e.length) { n += '<div class="u-announce" data-track="an-' + Pv.user_type + '"><img class="u-announce__header" src="http://image.read.duokan.com/mfsv2/download/fdsc3/p01RL64OyMw4/B6hBrLdiy7U4Vg.png" alt="\u591a\u770b\u5934\u6761">', e.length > 1 && ($(e, e[0]), e = e.reverse()), n += '<ul class="u-announce__list" id="' + Ve(Bo, e) + '">';
            for (var i, r = e, o = -1, a = r.length - 1; a > o;) i = r[++o], n += '<li class="u-announce__item single-line" data-href="' + Nr(i) + '" data-track="' + o + '" ' + Ku("anc") + ">" + i.title + "</li>";
            n += "</ul></div>" } else n += '<div class="main-card"></div>';
        return n }

    function Ho(t, n, e, i, r) { ri(t, n, Me(e, [i, r, !!r, ""], !0)) }

    function Fo(t) {
        var n = t.data;
        return ja(t.type) ? T(n.data, function(t) {
            return t.data }) : n ? n.data : void 0 }

    function zo(t) {
        var n = t.data,
            e = t.extend;
        return e && e.url ? e.url : n && n.count == n.total ? "" : Nr(t) }

    function Yo(t, n) {
        var e = { title_align: { left: "channel-group__title_left", center: "channel-group__title_center", right: "channel-group__title_right" } };
        return e[t] && e[t][n] || "" }

    function Vo(t) {
        var n = { cart: Ga, read: Ua, shelf: Xa };
        return mr() && "shelf" == t.button && (t.button = "", t.show_vertical = 1), n[t.button] }

    function Wo(t, n) {
        function e() { vs(function() { In("\u8d2d\u4e70\u6210\u529f"), i() }, function() { i() }, { book: { title: r.title, cover: c && c[0].book_cover || "" }, price: Oi(a.price), listId: r.id }) }

        function i() {
            var n = H(t, ".channel-group"),
                e = R(".u-tagRT", n),
                i = r.items;
            m(e, function(t, n) { Or(i[n], t) }) }
        var r = n.data,
            o = n.extend,
            a = o.activity.value,
            c = Fo(n);
        return F(t, "click", e) }

    function Ko(t) {
        var n = { 2: "/store/v0/android/list/{0}", 101: "/store/v0/fiction/list/{0}", 1000: "/store/v0/android/rank?rt={0}", 1001: "/store/v0/fiction/rank?r={0}", 1002: "/store/v0/android/rank/fresh", 2001: "/store/v0/android/query?author={0}&b=0&f=1" },
            e = n[t.type];
        if (!e) throw "error: channelBookList__getListViewApi";
        return c(e, t.id) }

    function Uo(t) {
        var n = "",
            e = t.extend && t.extend.activity;
        return n += e && "package" == e.key ? Xo(t, na(t), Go(e.value.price)) : e && "timer" == e.key ? Xo(t, ta(e.value)) : Xo(t) }

    function Xo(t, n, e) {
        var i = "",
            r = t.extend,
            o = Fo(t),
            a = zo(t),
            c = Vo(r);
        if (i += '<section class="channel-group main-card">' + Jo(t.title, t.desc, r.title_align, r.subscript, n), r.show_unlimited) {
            var s = Ko(t);
            i += '<div id="' + Ve(Ho, ra.bind(null, s), Zo, r.show_price, c) + '"></div>' } else i += qo(o, r.show_price, r.show_vertical, c), a && (i += Qo(a, e || r.more_text || "\u67e5\u770b\u66f4\u591a"));
        return i += "</section>" }

    function Go(t) {
        return '<span class="channel-group__footer_activity">' + c("\u4e00\u952e\u6253\u5305\u8d2d\u4e70({0}{1})", Oi(t), _i()) + "</span>" }

    function Jo(t, n, e, i, r) {
        var o = '<div class="channel-group__header"><h2 class="channel-group__title ' + Yo("title_align", e) + '">' + t + "</h2>";
        return n && (o += '<p class="channel-group__desc">' + n + "</p>"), i && (o += '<img class="channel-group__subscript" src="' + i + '">'), r && (o += r), o += "</div>" }

    function qo(t, n, e, i) {
        var r = "";
        return r += 2 == e ? "<!-- \u7b2c\u4e00\u884c\u4e00\u672c\u7ad6\u6392\uff0c\u7b2c\u4e8c\u884c\u4e09\u672c\u6a2a\u6392  -->" + ki(t.slice(0, 1), 0, n, i || !n && ea, !!i) + bi(t.slice(1, 4), n) : 1 == e ? ki(t, 0, n, i || !n && ea, !!i) : bi(t, n) }

    function Zo(t, n, e, i) {
        var r = "";
        return r += "", r += t[0] && t[0].ex ? "<!-- TODO \u4f7f\u7528\u65b0\u7248\u699c\u5355\u7684\u6a21\u677f -->" + ki(t, n, e, i || !e && ea, !!i) : ki(t, n, e, i || !e && ea, !!i) }

    function Qo(t, n) {
        return '<a class="channel-group__footer" data-href="' + t + '">' + (n || "\u67e5\u770b\u5168\u90e8") + "</a>" }

    function ta(t) {
        return '<div class="u-timer"><em class="u-timer__clock"></em><span class="u-timer__time" id="' + Ve(oa, t) + '"></span></div>' }

    function na(t, n) {
        return '<p class="u-btn2 channel-group__package-pay" id="' + Ve(Wo, t, n) + '">\u6253\u5305\u8d2d\u4e70</p>' }

    function ea(t) {
        var e = "",
            i = t.main_tag || t.tags && t.tags[0],
            r = t.category_name !== n ? t.category_name : t.categories && t.categories[0] && t.categories[0].label;
        return i = r == i ? "" : i, i && (e += '<div class="book-tag">' + i + "</div>"), r && (e += '<div class="book-tag">' + r + "</div>"), t.subscript && (e += '<div class="u-subscript ' + t.subscriptClazz + '">' + t.subscript + "</div>"), e }

    function ia(t, n, e) {
        var i = mn() ? bt : yt;
        return i("/hs/v3/channel/" + t, { success: n, error: e }) }

    function ra(t, n, e, i, r) { be(i, r, t, { start: n, count: e }) }

    function oa(n, e) {
        function i() {
            function t(t) {
                function n(t) {
                    return 10 > t ? "0" + t : t }

                function e(t) {
                    return { hour: Math.floor(t / 36e5), min: Math.floor(t % 36e5 / 6e4), sec: Math.floor(t % 6e4 / 1e3) } }
                var i = e(t),
                    r = "";
                return r = "<span><span>" + n(i.hour) + "</span>:<span>" + n(i.min) + "</span>:<span>" + n(i.sec) + "</span></span>" }
            var n = Ph,
                e = n.current;
            return 0 == e ? "\u8ddd\u79bb\u5f00\u59cb" + t(n.timestamps[0] - n.now) : 1 == e ? "\u8ddd\u79bb\u7ed3\u675f" + t(n.timestamps[1] - n.now) : 2 == e ? "\u6d3b\u52a8\u5df2\u7ed3\u675f" : "" }
        e.start = new th(th.parse(e.start)), e.end = new th(th.parse(e.end)), Ph = Uh, Ph.onChange = function() {
            return ft(n, i()), Ph.current == Jh ? Ph.stop() : void 0 }, Ph.onChangeScene = function(n) { Y(t, "super.changescene", n) }, zv(function() { Ph.start(th.now(), [e.start, e.end]) }, 0) }

    function aa(t, n, e, i, r) {
        var o = Bv.createElement("div");
        n.appendChild(o), F(n, "channal:rendered", function() { ze(o, fa(e[i])), o.remove() }), t() }

    function ca(t) {
        var n = t.parentElement,
            e = n.offsetHeight + 10,
            i = w(R(".channel-group", n.parentElement), function(t) {
                return se(t) > se(n) + 1 && j(".channel-group__title", t) }),
            r = T(i, function(t) {
                return j(".channel-group__title", t).innerHTML });
        ft(t, pa(r)), sa(t, i, e) }

    function sa(t, n, e) {
        var i = ua(t);
        he(t, "click", "li", function(t, r) {
            var o = se(r);
            Bv.body.scrollTop = ue(n[o]) - e, i(o) }), m(n, function(t, n) { ei(t, function() { i(n) }, function(t) {
                var i = t.getBoundingClientRect();
                return 0 == n && i.top > e ? !0 : i.bottom > e && e + 10 > i.top }) }) }

    function ua(t) {
        function n(t) { e.set({ tab: t }) }
        var e = Ee();
        return m(R("li", t), function(t) { e.className(t, function(n) {
                return { crt: n.tab == se(t) } }) }), n }

    function la(t) {
        return '<div class="new-page channel-page" id="' + Ve(ba, t) + '"></div>' }

    function da(t) {
        var n = '<section class="channel-group u-topic main-card channel-group_top">' + hi(t.banner, t.extend.bannerTag);
        return t.desc && (n += '<pre class="channel-group__summary">' + t.desc + "</pre>"), n += "</section>" }

    function fa(t) {
        var n = '<div class="channel-group channel-fixedbar" id="' + Ve(za) + '"><ul class="top-tabs" id="' + Ve(ca) + '"><li>&nbsp;</li></ul></div><div class="channel-divider"></div>';
        return n }

    function pa(t) {
        for (var n, e = "", i = t, r = -1, o = i.length - 1; o > r;) n = i[++r], e += "<li>" + n + "</li>";
        return e }

    function va(t) {
        return '<section class="main-card channel-group channel-author" data-href="' + Nr(t) + '"><div class="channel-author__info"><img class="channel-author__icon" src="' + t.banner + '!s"><div class="channel-author__summary"><h3 class="channel-author__name">' + t.title + '</h3><p class="channel-author__book">' + t.extend.book_count + '\u672c\u4f5c\u54c1</p></div></div><p class="channel-author__desc">' + t.desc + "</p></section>" }

    function ha(t) {
        var n = '<section class="main-card channel-banner"><div class="bd"><div class="u-topic ' + (1 == t.extend.style ? "u-topic_full" : "") + '" data-href="' + Nr(t) + '" ' + Ku("n*" + Xu(t)) + ' expose="">';
        return t.extend.hide_header || (t.title && (n += '<h3 class="title">' + t.title + "</h3>"), t.desc && (n += '<p class="intro single-line">' + t.desc + "</p>")), t.banner && (n += hi(t.banner, t.extend.tag)), t.extend.more_url && t.extend.more_text && (n += '<p class="channel-banner__more" data-href="' + t.extend.more_url + '">' + t.extend.more_text + "</p>"), n += "</div></div></section>" }

    function _a(t) {
        var n = "",
            e = t.extend,
            i = Vo(e);
        return n += '<section class="main-card channel-group channel-book">' + Jo(t.title) + yi(t.data, e.show_price, i, !!i), t.desc && (n += '<p class="channel-book__desc">' + t.desc + "</p>"), n += "</section>" }

    function ma(t) {
        return '<section class="channel-group channel-bottom"><p class="channel-bottom__fixed-bar" data-href="' + Nr(t) + '">' + t.title + "</p></section>" }

    function ga(t, n) { Mu("ch_" + n), ji(t, ia.bind(null, n), function(t) {
            if (!t.items) return Hv.error("channel__render: \u9891\u9053(" + n + ")", t), "";
            var e = Ba(t.hidden_info);
            return xn(e.title || t.ad_setting_name), ou(), Br().iframe && Da(), la(t) }) }

    function ba(t, n) {
        var e = Pa(n.items);
        du() && (e = Ra(e)), Ta(), xa(function() { Y(t, "channal:rendered") }, t, e, n) }

    function ka(t, n) { ya(t, function(t, e, i, r, o) { Pu(r), He(e, n(i[r])), Au(r), t() }) }

    function ya(t, n) {
        return Ah || (Ah = {}), Ah[t] = n }

    function wa(t) {
        var n = Ah[t || "book-list"];
        return n || (Hv.error("_channel__findHandler, type: " + t), n = function(t) {
            return t() }), n }

    function xa(t, n, e, i) {
        var r = e.map(function(t, r) {
            return function(o) {
                var a = wa(t.extend.type);
                if (Rv.port) return void a(o, n, e, r, i);
                try { a(o, n, e, r, i) } catch (n) { Hv.error("type:", t.extend.type, n), o() } } });
        Le(r)(t) }

    function Ta() {
        var t = { announce: Ca, author: Ia, banner: $a, "book-detail": Oa, "book-list": Sa, "bottom-bar": Ea, top: Ma };
        for (var n in t) ka(n, t[n]);
        ya("tabs", aa), ya("gift", Ao) }

    function Ca(t) {
        return Do(t) }

    function Ia(t) {
        return va(t) }

    function $a(t) {
        return ha(t) }

    function Oa(t) {
        return _a(t) }

    function Sa(t) {
        return Uo(t) }

    function Ea(t) {
        return ma(t) }

    function Ma(t) {
        return da(t) }

    function Pa(t) {
        return w(T(t || [], Na), Aa) }

    function Aa(t) {
        var n = t.extend,
            e = {};
        return e.miui = +!!Ev, e.device = La(), e.platform = Av, C(["miui", "device", "platform"], function(t, i) {
            return t && (!n[i] || e[i] == n[i]) }, !0) }

    function La() {
        var t = Pv.app_id || "",
            n = s(t, "iPad") || s(t, "HD");
        return n ? "pad" : "phone" }

    function Na(t) {
        if (t.extend) return t;
        var n = { id: t.reference_id, type: t.ad_type, title: t.ad_name, banner: t.ad_pic_url, desc: t.ad_copy, data: t.data, url: Nr(t), extend: Ba(t.hidden_info) };
        return ja(n.type) && n.data && n.data.data && (n.data.data = Pa(n.data.data)), n }

    function Ba(t) {
        if (!t) return {};
        var n = /\[\[(.*?)\]\]/,
            e = t.match(n),
            i = {};
        if (!e) {
            if (!/\{.*?\}/.test(t)) return i;
            try { i = JSON.parse(t) } catch (t) { Hv.log("channel__resolveExtend", t) }
            return i }
        var r = e[1].split(";");
        return m(r, function(t) {
            var n = t.split("|");
            if (1 == n.length) i[n[0]] = 1;
            else try { i[n[0]] = JSON.parse(n[1]) } catch (t) { i[n[0]] = n[1] } }), i }

    function ja(t) {
        return E([201, 202], +t) }

    function Ra(t) {
        function n(t) {
            return "book-list" == t.extend.type && E([2, 101], t.type) }
        var e = +du() || Pv.user_type,
            i = 1 == e,
            r = w(t, function(t) {
                return n(t) }),
            o = k(r, function(t, n) {
                return i ? t.type - n.type : n.type - t.type });
        return m(t, function(e, i) { n(e) && (t[i] = o.shift()) }), t }

    function Da() {
        var n = Br().iframe;
        zv(function() {
            var n, e = Bv.body.scrollHeight;
            n = { pageHeight: e }, Hv.log("pageHeight", e), t.parent.postMessage(n, "*") }), pp = function(t, e, i) {
            function r(t) {
                var n = j("#root", Bv);
                ht(n, '<a id="_temp__nativeJumpLink" href="' + t + '" target="_top"></a>');
                var e = j("#_temp__nativeJumpLink", n);
                Y(e, "click"), it(e) }
            t = Ha(t, t, n), r(t) }, ii = function(t, n) {
            function e() {
                return j("img", t) }

            function i() { W(t, "Lazy_loaded"), o() }

            function r() { ot(e()), o() }

            function o() { z(t, "load", !0), z(t, "error", !0) }
            W(t, "Lazy_loading"), F(t, "load", i, !0), F(t, "error", r, !0), e().src = n, lazy.clear() } }

    function Ha(t, e, i, r) {
        var o = "http://www.duokan.com/subtle/event/redirect.html";
        return e = e || "http://app.xiaomi.com/details?appId=1108&back=true&ref=" + i, i = i || "wrapper", p({ url: p({ from: i }, t), mifb: p({ ref: i }, e), miback: r ? n : !0, miref: i }, o) }

    function Fa() {
        function t() {
            var t, o, a, c;
            for (t = 0, o = r.length; o > t; t++) { a = r[t], c = a.previousElementSibling;
                var s = (n(a) ? c : a).getBoundingClientRect();
                if (0 >= s.top) {
                    var u = j(".Fixed_bar_active");
                    u && i(u), e(a) } else i(a) } }

        function n(t) {
            return V(t, "Fixed_bar_active") }

        function e(t) { n(t) || (at(t.previousElementSibling), W(t, "Fixed_bar_active")) }

        function i(t) { n(t) && (ot(t.previousElementSibling), K(t, "Fixed_bar_active")) }
        var r = Bv.getElementsByClassName("Fixed_bar");
        F(Bv, "scroll", t), t() }

    function za(t) { W(t, "Fixed_bar");
        var n = le(t);
        K(n, "Fixed_bar"), t.parentNode.insertBefore(n, t), ot(n), za.init || (zv(Fa, 0), za.init = !0) }

    function Ya(t, e) {
        function i() {
            return wr() ? void 0 : l.get("canReceive") ? c(e) : l.get("added") ? In("\u672c\u4e66\u5df2\u52a0\u5165\u8d2d\u7269\u8f66\uff01") : void cart__add(s, function(t) {
                return t.paid ? (l.set({ purchased: !0 }), void In("\u60a8\u5df2\u8d2d\u4e70\u672c\u4e66\uff01")) : void l.set({ added: !0 }) }) }

        function r() {
            if (l.get("purchased")) { Sr(e, t);
                var n = H(t, ".-itembtn");
                n && K(n, "-itembtn") } }

        function o() {
            return l.get("canReceive") ? "\u7acb\u5373\u9886\u53d6" : l.get("added") ? "&radic; \u8d2d\u7269\u8f66" : "+ \u8d2d\u7269\u8f66" }

        function a() {
            var t = !Tu(e);
            return t && !kr() }

        function c(t) { vs(function() { l.set({ purchased: !0 }) }, n, { id: s, book: t, price: 0 }) }
        var s = e.book_id;
        if (s) { Va.__ex || (Va.__ex = !0, He(j("#root", Bv), Ja()));
            var u = xu(s),
                l = Ne(t, { purchased: u, added: !!cart__in(s), canReceive: a() });
            l.set({ addCart: i, bind: o, custom: r }), F(Bv, "cart.loaded", function() { l.set({ added: !!cart__in(s) }) }) } }

    function Va(t) {
        var n = Ne(t, { bookNumber: cart__getCache() && cart__getCache().items.length || 0, clear: function() { yr() || pp(url__cart()) } }).set();
        F(Bv, "cart.loaded", function() {
            var t = cart__getCache();
            t && t.items && n.set({ bookNumber: cart__getCache().items.length }) }) }

    function Wa(t, n) {
        function e(t) { a.set({ added: t, canReceive: r() }) }

        function i() {
            return a.get("added") ? In(a.get("canReceive") ? "\u672c\u4e66\u5df2\u9886\u53d6!" : "\u672c\u4e66\u5df2\u52a0\u5165\u4e66\u67b6\uff01") : void(c ? rr : or)(c || s, function(t) { Un(t.item) && (e(!0), gr() && analysis__track(n), o(t.item)) }) }

        function r() {
            var t = !Tu(n),
                e = xu(c);
            return c && t && !e && !u && !kr() }

        function o(n) { a.get("canReceive") && vs(function() { Or(n, j(".book-cover .u-tagRT", H(t, ".u-book"))) }, function() {
                return 1 }, { id: c, book: n, price: 0 }) }
        var a = Ne(t, { addShelf: i }).set(),
            c = n.book_id,
            s = n.fiction_id,
            u = An(c || s).shelf;
        return e(u) }

    function Ka(t, e) {
        function i() {
            var t = e.book_id,
                n = e.fiction_id;
            if (1 === e.source || 3 === e.source) t = t || e.source_id;
            else if (2 === e.source || 4 === e.source) n = n || e.source_id;
            else if (!t && !n) return void r();
            (t ? rr : or)(t || n, function(i) {
                var a = An(t || n),
                    c = a ? a.shelf : { bookState: "NORMAL" };
                e = i.item;
                var s = e.book_id ? $u(e) || c && "NORMAL" === c.bookState : !0;
                if (!s) return void r();
                var u = {};
                u = e.book_id ? o({ bookUuid: e.book_id, detail: e }, u) : o({ fictionId: "" + e.fiction_id + (1 === e.owner ? "-" + e.owner + "-" + e.owner_uri : "") }, u), Kn(u) }) }

        function r(t) { pp(Ci(e), "", t) }
        Ne(t, { readBook: B(i, gr() && analysis__track.bind(n, e)) }).set({ readable: !0 }) }

    function Ua(t) {
        return '<a id="' + Ve(Ka, t) + '" class="book-itembtn u-btn2 -read" vp-class="{ \'-unreadable\': !$root.readable }" vp-bind="$root.readable ? \'\u5f00\u59cb\u9605\u8bfb\' : \'\u67e5\u770b\u8be6\u60c5\'" vp-click="$root.readBook($event)" ' + Ku("btn") + ">\u5f00\u59cb\u9605\u8bfb</a>" }

    function Xa(t) {
        return '<a id="' + Ve(Wa, t) + '" class="book-itembtn u-btn2 -shelf" vp-class="{ \'-inshelf\': $root.added, \'-canReceive\': $root.canReceive }" vp-click="$root.addShelf()" ' + Ku("btn") + "></a>" }

    function Ga(t) {
        return '<a id="' + Ve(Ya, t) + '" class="book-itembtn u-btn2 -cart" vp-class="{ \'-incart\': $root.added, \'-canReceive\': $root.canReceive }" vp-bind="$root.bind()" vp-show="!$root.purchased" vp-custom="$root.custom()" vp-click="$root.addCart()" ' + Ku("btn") + ">+ \u8d2d\u7269\u8f66</a>" }

    function Ja() {
        var t = '<a id="' + Ve(Va) + '" class="cart-clear';
        return "ios" === Av && (t += " -ios"), t += '" vp-click="$root.clear()" ' + Ku("btn") + '><em class="cart" vp-bind="$root.bookNumber"></em><em class="clear">\u7ed3\u7b97</em></a>' }

    function qa(t, n) { xn("\u4e13\u9898\u4e66\u5355"), ri(t, nr.bind("", n), Ac.bind("", n)) }

    function Za(t, e, i) { xn(""),
            function r() { ft(t, Vt());
                var o = tr.bind(this, e, i),
                    a = Ri(o);
                a(0, 10, function(n) { $r("topic_" + n.list_id, n), n.label && xn(n.label);
                    var r = fc(n.hidden_info),
                        c = rc(n.discount); "discount" == i && (r = { price: 1 }), r.vertical = Ie(r.vertical, !0), r.buttonTpl = r.showButton ? Tc : r.cart ? Ga : c ? Pc : null, Re(t, yc(n, c));
                    var s = j(".topic-body", t);
                    c ? nc(o, s, r) : ri(s, a, wc.bind("", r), { completeTpl: xc.bind("", e) }) }, Qt.bind(n, t, r)) }() }

    function Qa(t, n) { vc(t, n) }

    function tc() {
        return f(Rv.search.substr(1)).limit || 6 }

    function nc(t, n, e) { t(0, 1e3, function(t) { sc(t.list_id, t.discount), Re(n, Ec(e, t)) }) }

    function ec(n, e, i, r) {
        function o() { v = w(r, function(t) {
                var n = xu(t.book_id);
                return n && cc(t.book_id), !n }), d = oc().length, f = C(oc(), function(t, n) {
                return t + (Tu(w(v, function(t) {
                    return t.book_id === n })[0]) || 0) }, 0), p = discount__ret(i, f), h.set({ addedBookCount: d, totalPrice: f, discount: p, purchasedAll: !v.length }) }

        function a() { oc().length && vs(function() { lc(), br() }, cart__payError.bind("", function(t) { m(t, function(t) { cc(t.book_id) }) }), { id: oc(), book: w(v, function(t) {
                    return E(oc(), t.book_id) }), price: f - p, listId: e }) }

        function s() {
            var t = h.get("addedBookCount"),
                n = h.get("totalPrice"),
                e = discount__ret(i, n);
            return h.get("purchasedAll") ? "\u571f\u8c6a\u4f60\u5df2\u5305\u573a\uff0c\u6682\u65e0\u53ef\u4e70\u56fe\u4e66~" : t ? c("\u5df2\u9009\u62e9{0}\u672c\u4e66\uff0c\u5171{1}\u5143<br>\u5df2\u4f18\u60e0{2}\u5143", t, n.toFixed(2), e) : "\u6682\u672a\u52a0\u5165\u56fe\u4e66" }

        function u() {
            var n = j(".discount-info", Bv.body);
            F(t, "scroll", function(t) {
                var e = n.offsetTop + n.clientHeight,
                    i = Bv.body.scrollTop,
                    r = h.get("showFloat");
                i >= e && !r ? h.set({ showFloat: !0 }) : e > i && r && h.set({ showFloat: !1 }) }) }

        function l() { F(t, "topic.toggle", function(t) {
                var n = t.data;
                d = h.get("addedBookCount") + (n.added ? 1 : -1), f = h.get("totalPrice") + (n.added ? n.price : -1 * n.price), p = discount__ret(i, f), h.set({ addedBookCount: d, totalPrice: f, discount: p }) }) }
        var d, f, p, v, h = Ne(n, { pay: a, detail: s });
        P(function() { o() })(), l(), u() }

    function ic(n, e) {
        function i() {
            var t = xu(e.book_id);
            c.set({ purchased: t }) }

        function r() { c.get("purchased") && it(H(n, "li")) }

        function o() { a = !c.get("added"), a ? ac(e.book_id) : cc(e.book_id), c.set({ added: a }), Y(t, "topic.toggle", { added: a, price: Tu(e) }) }
        var a = E(oc(), e.book_id),
            c = Ne(n, { added: a, custom: r, toggle: o });
        P(function() { i() })() }

    function rc(t) {
        if (t) {
            var n;
            return t.start && t.end && (n = th.now() >= 1e3 * t.start && 1e3 * t.end >= th.now()), t.strategy && n } }

    function oc() {
        return Lh.bookIds }

    function ac(t) { uc("bookIds", O(oc(), t)) }

    function cc(t) { uc("bookIds", S(oc(), t)) }

    function sc(t, n) {
        var i = qh + t;
        $e(At(i)) ? (Lh = {}, Lh.bookIds = [], Lh.listId = t, Lh.expire = n && 1e3 * n.end, Lh.key = i, Lt(i, JSON.stringify(Lh))) : Lh = JSON.parse(At(i)), e(Gv, function(t, n) {
            if (s(t, qh)) try {
                var e = JSON.parse(Gv.getItem(t)).expire;
                e && th.now() > e && Gv.removeItem(t) } catch (t) { Hv.log("Json parse error => " + t.message) } }) }

    function uc(t, n) { Lh[t] = n, Lt(Lh.key, JSON.stringify(Lh)) }

    function lc() { Nt(Lh.key), Lh = null }

    function dc(t, e) {
        function i() {
            return "\u4e00\u952e\u8d2d\u4e70" }

        function r() { vs(function() { In("\u8d2d\u4e70\u6210\u529f"), On() }, n, { book: { title: e.label, cover: e.cover }, price: Oi(e.price), listId: e.list_id }) }
        return Ne(t, { price: Oi(e.price), discount: Oi(e.discount), commitText: i, commit: r }).set() }

    function fc(t) {
        if (!t) return {};
        var n = /\[\[(.*?)\]\]/,
            e = t.match(n);
        e = e && e[1] ? e[1] : "";
        var i = e.split(";"),
            r = {};
        return m(i, function(t) {
            var n = t.split("|");
            if (1 == n.length) r[n[0]] = 1;
            else try { r[n[0]] = JSON.parse(n[1]) } catch (t) { r[n[0]] = n[1] } }), r }

    function pc(t, n, e, i) { ur(function(t) {
            var n = { label: "\u6742\u5fd7\u4e13\u533a" };
            n.lists = T(t.cate.children, function(n) {
                return n.books = t[n.sid], n.hidden_info = "[[horizontal]]", n }), e(n) }, i) }

    function vc(t, n) { he(t, "click", "#topic__goBack", function() { On() }), gc(t, "#topic__getLimitedTime", Nc, Bc), gc(t, "#topic__getLimitedTimeByPush", jc, Rc), gc(t, "#topic__getCommonGift", Dc, Hc), mc(t), hc(t) }

    function hc(t) {
        function n(t) {
            var n = fc(t.dataset.run);
            n.show && (_c(n.show) ? at(t) : ot(t)) }
        var e = R("[data-run]", t);
        m(e, n) }

    function _c(t) {
        if (t) {
            var n = Cn();
            n.build = Math.floor(n.build / 1e6), n.miui = +Tn(), n.platform = Av;
            for (var e in t)
                if (t[e] !== n[e] && !$e(n[e])) return !1;
            return !0 } }

    function mc(t) {
        var n = j("#topic__giftAll", t);
        n && F(n, "click", function() { pr(function() { pay__updatePurchased(function() { Fv("\u56fe\u4e66\u9886\u53d6\u6210\u529f\uff0c\u8d76\u7d27\u9605\u8bfb\u5427\uff01"), ft(n, "\u5df2\u9886\u53d6"), W(n, "u-btn-disable") }) }, function(t) {
                return 130010 == t.result ? (Fv("\u60a8\u5df2\u62e5\u6709\u5168\u90e8\u56fe\u4e66\uff0c\u8d76\u7d27\u9605\u8bfb\u5427\uff01"), ft(n, "\u5df2\u9886\u53d6"), W(n, "u-btn-disable")) : xr(t, !0), !0 }) }) }

    function gc(t, n, e, i) {
        function r(t) {
            if (Lv) {
                var n = t.dataset.code;
                i(function(n) { 0 !== n.gifted && (ft(t, "\u5df2\u9886\u53d6"), W(t, "u-btn-disable"), t.id = "") }, function(t) {
                    return 130012 == t.result ? !0 : void 0 }, n) } }

        function o(t) {
            if (!yr()) {
                var n = t.dataset.code;
                e(function() { xr("\u5956\u52b1\u9886\u53d6\u6210\u529f"), ar(function() { Rv.reload() }) }, M, n) } }
        j(n) && (r(j(n)), he(t, "click", n, o.bind(this, j(n)))) }

    function bc(n, e) {
        function i() {
            function t(t) {
                function n(t) {
                    return 10 > t ? "0" + t : t }

                function e(t) {
                    return { hour: Math.floor(t / 36e5), min: Math.floor(t % 36e5 / 6e4), sec: Math.floor(t % 6e4 / 1e3) } }
                var i = e(t),
                    r = "";
                return r = "<span><span>" + n(i.hour) + "</span>:<span>" + n(i.min) + "</span>:<span>" + n(i.sec) + "</span></span>" }
            seckill = Ph;
            var n = seckill.current;
            return 0 == n ? "\u8ddd\u79bb\u5f00\u59cb" + t(seckill.timestamps[0] - seckill.now) : 1 == n ? "\u8ddd\u79bb\u7ed3\u675f" + t(seckill.timestamps[1] - seckill.now) : 2 == n ? "\u6d3b\u52a8\u5df2\u7ed3\u675f" : "" }
        e.start = new th(th.parse(e.start)), e.end = new th(th.parse(e.end)), Ph = Uh, Ph.onChange = function() {
            return ft(n, i()), Ph.current == Jh ? Ph.stop() : void 0 }, Ph.onChangeScene = function(n) { Y(t, "super.changescene", n) }, zv(function() { Ph.start(th.now(), [e.start, e.end]) }, 0) }

    function kc(e, i) {
        function r() { a == Xh ? W(e, "-disable") : a == Gh ? K(e, "-disable") : a == Jh && ot(e), xu(i.book_id) ? (ft(e, "\u5df2\u8d2d\u4e70"), W(e, "-disable")) : ft(e, "\u7acb\u5373\u62a2\u8d2d") }

        function o(t) {
            if (t.stopPropagation(), a === Gh && !xu(i.book_id)) {
                var o = j(".book-cover .u-tagRT", H(e, ".u-book")),
                    c = i.new_price !== n ? i.new_price : i.price;
                vs(function() { Or(i, o), r() }, n, { id: i.book_id, book: i, price: c }) } }
        var a = null;
        Ne(e, { pay: o }).set(), F(t, "super.changescene", function(t) { a = t.data, r() }) }

    function yc(t, n) {
        var e = '<div class="new-page topic-page';
        n && (e += " -discount"), e += '">' + Sc(t);
        var i = fc(t.hidden_info);
        return i && i.package && (t.discount = t.discount || +i.discount || 0, e += tpl__cart_bar(dc, t)), e += '<div class="main-card topic-body"></div></div>' }

    function wc(t, n, e) {
        var i = "";
        return i += t.vertical || t.buttonTpl ? ki(n, e || 0, t.price, t.buttonTpl, !!t.buttonTpl) : '<div class="card-cnt">' + bi(n, t.price) + "</div>" }

    function xc(t) {
        return '<a class="more-button" data-href="' + ff(t) + '">\u66f4\u591a\u4e13\u9898</a>' }

    function Tc(t) {
        return Ua(t) + Xa(t) }

    function Cc(t) {
        return t.replace(/\<.*?id.*?\<\/.*?\>/g, "") }

    function Ic(t) {
        for (var n, e = '<div class="new-page nested-topic" data-track="nt-' + t.list_id + '">' + Sc(t), i = t.lists, r = -1, o = i.length - 1; o > r;) { n = i[++r];
            var a = fc(n.hidden_info);
            a.timer ? e += Oc(n, a.timer) : (e += '<section class="main-card" data-track="' + r + '">', n.label && (e += '<div class="channel-title topic-title"><h1', a.title_align && (e += ' style="text-align:' + a.title_align + '"'), e += ">" + n.label + "</h1><p>" + Cc(n.description) + "</p>", a.tag && (e += '<img class="tag" src="' + a.tag + '">'), e += "</div>"), a.vertical = Ie(a.vertical, 3 >= n.books.length), e += wc(a, n.books) + $c(n, a) + "</section>", a.back && (e += '<section class="main-card" id="topic__goBack"><a href="duokan-reader://store/"><div class="bottom-button">\u8fd4\u56de\u4e66\u57ce</div></a></section>')) }
        return e += "</div>" }

    function $c(t, n) {
        var e = "";
        return t.more_url && (e += '<div class="card-tail', t.price && (e += " package-pay"), e += '"><a data-href="' + t.more_url + '" data-title="' + t.label + '">' + (t.price ? "\u4e00\u952e\u6253\u5305\u8d2d\u4e70(" + vu(t.price / 100) + ")" : n.more_text || "\u67e5\u770b\u5168\u90e8") + "</a></div>"), e }

    function Oc(t, n) {
        var e = '<section class="main-card">';
        t.label && (e += '<div class="channel-title topic-title"><div class="u-timer2"><em class="icon-clock"></em><span id="' + Ve(bc, n) + '"></span></div><h1>' + t.label + "</h1><p>" + t.description + "</p></div>"), e += '<ul class="book-list">';
        for (var i, r = t.books, o = -1, a = r.length - 1; a > o;) { i = r[++o];
            var c = n.price || [];
            i.new_price = c[o] || c[0] || i.new_price, e += '<li><div class="u-book -pay" data-href="' + Ci(i) + '">' + Ii(i, !0) + '<div class="info"><h3 class="title single-line">' + i.title + '</h3><p class="author">' + ui(i) + '</p><div class="wrap"><p class="button" id="' + Ve(kc, i) + '" vp-click="$root.pay($event)"></p>' + li(i) + "</div></div></div></li>" }
        return e += "</ul>" + $c(t) + "</section>" }

    function Sc(t) {
        var n = "";
        if (t.banner || t.description) { n += '<section class="main-card" id="' + Ve(Qa, t) + '"><div class="u-topic">', t.banner && (n += hi(t.banner));
            var e = t.description ? t.description.replace(/<(a|div).*?id="topic__pay".*?>.*<\/(a|div)>/, "") : "";
            e && (n += '<div class="desc"><pre>' + e + "</pre></div>"), n += "</div></section>" }
        return n }

    function Ec(t, n) {
        return Mc(n.list_id, n.discount, n.items) + wc(t, n.items, 0, Pc) }

    function Mc(t, n, e) {
        for (var i, r = '<div id="' + Ve(ec, t, n.strategy, e) + '" class="discount-info main-card"><section class="float" vp-class="{ \'-show\': $root.showFloat }"><a class="pay" vp-show="!$root.purchasedAll" vp-class="{ \'-unavailable\': !$root.addedBookCount }" vp-click="$root.pay()">\u652f\u4ed8</a><p class="detail" vp-bind="$root.detail()"></p></section><section><p class="summary">\u4e13\u9898\u6ee1\u51cf\uff1a\u4e13\u9898\u5305\u7ed3\u7b97', o = n.strategy, a = -1, c = o.length - 1; c > a;) i = o[++a], r += "\uff0c\u6ee1" + i[0] + "\u51cf" + i[1];
        return r += '\u3002</p><p class="detail" vp-bind="$root.detail()"></p><a class="pay u-btn2" vp-show="!$root.purchasedAll" vp-class="{ \'-unavailable\': !$root.addedBookCount }" vp-click="$root.pay()">\u7acb\u5373\u652f\u4ed8</a></section></div>' }

    function Pc(t) {
        return '<a id="' + Ve(ic, t) + '" vp-class="{ \'-added\': $root.added }" class="book-itembtn -discount" vp-custom="$root.custom()" vp-click="$root.toggle()"><em></em>\u4e13\u9898\u5305</a>' }

    function Ac(t, n) {
        for (var e, i = '<div class="new-page topiclist-page -' + t + '"><ul class="topic-list">', r = n, o = -1, a = r.length - 1; a > o;) e = r[++o], i += '<li><div class="topic-item" data-href="' + lf(t, e.reference_id) + '" data-track="' + o + '">', e.ad_name && "fiction" == t && (i += '<h3 class="title single-line">' + e.ad_name + "</h3>"), e.ad_copy && "fiction" == t && (i += '<p class="summary single-line">' + e.ad_copy + "</p>"), i += '<div class="img-container"><img class="cover" src="' + $i(e.ad_pic_url, "l", "s") + '" alt="' + e.ad_name + '"></div></div></li>';
        return i += "</ul></div>" }

    function Lc(t, e, i, r) { i = i || M, r = r || M, bt("/hs/v1/nested_list/" + t, { data: { book_count: e }, success: xe.bind(n, i, r), error: r }) }

    function Nc(t, e) { t = t || M, e = e || M, bt("/events/828_release", { type: "POST", data: we(), success: xe.bind(n, t, e), error: e }) }

    function Bc(t, e) { t = t || M, e = e || M, bt("/events/828_check", { success: xe.bind(n, t, e), error: e }) }

    function jc(t, e) { t = t || M, e = e || M, bt("/events/silent_encourage", { type: "POST", data: we(), success: xe.bind(n, t, e), error: e }) }

    function Rc(t, e) { t = t || M, e = e || M, bt("/events/silent_encourage_check", { success: xe.bind(n, t, e), error: e }) }

    function Dc(t, e, i) { bt("/events/common_gift", { type: "POST", data: o({ code: i }, we()), success: xe.bind(n, t, e), error: e }) }

    function Hc(t, e, i) { bt("/events/common_gift_check", { data: { code: i }, success: xe.bind(n, t, e), error: e }) }

    function Fc(t, n) {! function() {
            function e() { xn("");
                var e = "magazine" == n ? pc : Lc;
                e(n, tc(), function(e) { xn(e.label), "magazine" == n && (e.list_id = "mg"), Re(t, Ic(e)) }) }
            e() }() }

    function zc(t, n, e) {
        function i() { o() || (Y(Bv, "tab__click"), r(1), n()) }

        function r(n) {
            return n ? W(t, "-selected") : K(t, "-selected") }

        function o() {
            return V(t, "-selected") }
        e = e || 0, F(Bv, "tab__click", r.bind(this, 0)), F(t, "click", i) }

    function Yc(t, n, e) {
        var i = "<!-- Tabs is [ { key: xxx, name: xxx }, ... ] -->";
        e = e || 0, i += '<ul class="u-tab">';
        for (var r, o = t, a = -1, c = o.length - 1; c > a;) r = o[++a], i += '<li class="u-active tab-item', e == a && (i += " -selected"), i += '" id="' + Ve(zc, n.bind(this, r, a)) + '">' + r.name + "</li>";
        return i += "</ul>" }

    function Vc(t, n, e) {
        var i = '<div class="rank-page">';
        if (t.length > 1) { i += "<!-- Tabs is [ { key: xxx, name: xxx }, ... ] -->", e = e || 0, i += '<ul class="single-filter ', 3 == t.length && (i += "-three"), i += '">';
            for (var r, o = t, a = -1, c = o.length - 1; c > a;) r = o[++a], i += '<li  id="' + Ve(zc, n.bind(this, r, a)) + '" ', 0 == a && (i += 'class="-selected" '), i += '><div  class="tag">' + r.name + "</div></li>";
            i += '</ul><div class="split-line"></div>' }
        return i += '<div class="tag-body"></div></div>' }

    function Wc(t, n, e) {
        function i() {
            return ji(t, a.bind(this, o[0].key), Uc.bind(this, o, r.bind(this, t, e), e), e, ".tag-body") }

        function r(t, n, e) { ri(j(".tag-body", Bv), a.bind(this, e.key), ki) }
        var o; "store" == n ? (n = "book", o = [{ name: "\u70ed\u95e8", key: "-2" }, { name: "\u6700\u65b0", key: "-1" }]) : o = [{ name: "\u70ed\u95e8", key: "click" }, { name: "\u6700\u65b0", key: "latest" }, { name: "\u5b8c\u7ed3", key: "finish" }];
        var a = Kc.bind(this, n, e);
        return i() }

    function Kc(t, e, i, r, o, a, c) {
        var s, u = { start: r, count: o, tag_name: e }; "book" == t ? (s = "/store/v0/android/book/tag_list", u.order = i) : (s = "/store/v0/fiction/tag", u[i] = 1), bt(s, { data: u, success: xe.bind(n, a, c), error: c }) }

    function Uc(t, n, e, i) {
        return '<div class="new-page tag-page"><div class="tag-top"><h3>' + e + "</h3><p>" + i.total + "\u672c\u4f5c\u54c1</p></div>" + Yc(t, n) + '<div class="tag-body"></div></div>' }

    function Xc(t, n, e, i, r) {
        var o = {};
        return o.book_id = e, o.coupon_id = r, o.payment_name = Ss(r), $e(i) && !r ? o.price_only = 1 : o.price = i, Pv.channel && (o.ch = Pv.channel), ge(t, n, "/store/v0/payment/book/create", o) }

    function Gc(t, n, e, i, r) {
        var o = {};
        o.book_id = e, o.price = i, o.list_id = r, o.payment_name = Ss(), Pv.channel && (o.ch = Pv.channel);
        var a = e ? "/store/v0/payment/cart/create" : "/store/v0/payment/book_list/create";
        return ge(t, n, a, o) }

    function Jc(t, n, e, i, r, o, a, c) {
        var s = {};
        return s.fiction_id = e, s.coupon_id = o, s.price = i, s.payment_name = Ss(o), r ? s.chapter_id = r.join(",") : s.entire = 1, Pv.channel && (s.ch = Pv.channel), a && (s.auto = 1), c && (s.force = 1), ge(t, n, "/store/v0/payment/fiction/create", s) }

    function qc(t, n, e, i, r) {
        var o = {};
        return o.fiction_id = e, o.chapters = i.join(","), Pv.channel && (o.ch = Pv.channel), r && (o.auto = 1), ge(t, n, "/store/v0/redeem/chapters", o) }

    function Zc(t, e) { t = t || M, e = e || M, qn(xe.bind(n, t, e)) }

    function Qc(t, n, e, i) {
        var r = {};
        return null !== t && (r.type = t), n && (r.reduced = n), ge(e, i, "/store/v0/award/list", r) }

    function ts(t, e, i, r, o) {
        function a(t, n) {
            var e = n.item.toc || [];
            n.item.toc = w(e, function(t) {
                return !t.dummy && !t.hidden }), t(n) }
        return r = r || M, o = o || M, Ge("/store/v0/fiction/detail/" + t, { data: { chapter_id: e, count: i }, success: xe.bind(n, a.bind("", r), o), error: o }) }

    function ns(t, n, e, i, r, o) {
        var a = {};
        return a.balance = t, a.payment_name = i || "MIPAY", Pv.channel && (a.ch = Pv.channel), e ? a.trans_id = e : n && (a.code = n), "MIPAY" == a.payment_name && jn() && (a.payment_name = "MIPAYSANDBOX"), ge(r, o, "/store/v0/payment/bc/recharge", a) }

    function es(t, n) {
        var e = {};
        return ge(t, n, "/store/v0/payment/bc/recharge_list", e) }

    function is(t) {
        var n = "";
        return "bookCoupon" == t.key && (n += "\u60a8\u6709" + t.count + "\u5f20\u4e66\u5238\uff0c\u53ef\u4ee5\u76f4\u63a5\u5151\u6362"), "chapterCoupon" == t.key && (n += "\u60a8\u6709" + t.count + "\u5f20\u7ae0\u8282\u5238\uff0c\u53ef\u4ee5\u76f4\u63a5\u5151\u6362"), "coin" == t.key && t.balance > 0 && (n += "\u60a8\u6709" + t.balance + "\u4e66\u5e01\uff0c", n += t.balance > t.price ? "\u53ef\u4ee5\u76f4\u63a5\u62b5\u6263" : "\u53ef\u4ee5\u62b5\u6263" + xi(t.balance / 100) + _i()), "coin" == t.key && "\u4e0d\u4f7f\u7528" == t.label && (n += "\u60a8\u9009\u62e9\u4e0d\u4f7f\u7528\u4efb\u4f55\u4f18\u60e0"), n }

    function rs(t) {
        var n = "";
        return "bookCoupon" == t.key && (n += "\u514d\u8d39\u5151\u6362\uff08\u6d88\u80171\u5f20\u4e66\u5238\uff09"), "chapterCoupon" == t.key && (n += "\u514d\u8d39\u5151\u6362\uff08\u6d88\u80171\u7ae0\u8282\u5238\uff09"), "coin" == t.key && (n += t.balance >= t.price ? "\u514d\u8d39\u5151\u6362\uff08\u6d88\u8017" + t.price + "\u4e66\u5e01\uff09" : t.balance ? "\u652f\u4ed8\u4f59\u989d" + xi((t.price - t.balance) / 100) + _i() : "\u652f\u4ed8" + xi(t.price / 100) + _i()), n }

    function os(t, n, e, i) {
        var r = '<section class="pay-card -batch"><div class="ttl">' + n.title + '</div><div class="info"><div class="price">\u4ef7\u683c\uff1a ' + xi(n.price / 100) + _i();

        if (newbie__isOldVersion() || (r += '<p class="text-link -obtain" vp-click="$root.viewTasks()">\u4e66\u5e01\u514d\u8d39\u62ff</p>'), r += '</div><div class="discount"><span vp-bind="$root.tips()"></span>', i && (r += '<span class="text-link" vp-click="$root.select();">\u66f4\u6539</span>'), r += '</div></div><div class="bottom-button" vp-click="$root.pay(1)"><span vp-bind="$root.confirm()"></span></div>', t.special) r += '<div class="divider"><span></span><p>\u6279\u91cf\u8d2d\u4e70</p></div><ul class="book-table"><li><div class="chapter" vp-click="$root.paySpecial()"><p>\u5168\u672c\u7279\u4ef7</p><span>' + t.special + _i() + "</span></div></li></ul>";
        else if (e && e.length && e[0].chapterIds.length > 1) { r += '<div class="divider"><span></span><p>\u6279\u91cf\u8d2d\u4e70</p></div><ul class="book-table">';
            for (var o, a = e, c = -1, s = a.length - 1; s > c;) o = a[++c], o = us(t, o.chapterIds), r += '<li><div class="chapter" vp-click="$root.payBatch(' + c + ')"><p>\u540e' + o.ids.length + "\u7ae0</p><span>" + (o.price / 100).toFixed(2) + _i() + "</span>", o.discount && (r += '<em class="u-tagRT">' + (10 * o.discount + " ") + "\u6298</em>"), r += "</div></li>";
            r += "</ul>" }
        return r += "</section>"
    }

    function as(t, n, e) {
        function i() {
            var i = ts(e.id, e.chapterId, 150);
            ps(function(r) { i.then(function(i) {
                    var o = i.item;
                    cs(t, n, e.id, e.chapterId, o, r) }) }) }
        return i() }

    function cs(t, n, e, i, r, o) {
        var a = fs(e, i, r, o);
        ds(i, a[0], a[1], r, function(i) {
            return -1 == i ? vs(t, n, { id: e, price: r.special, book: r }) : void $s(t, n, Es(e), i) }, n) }

    function ss(t, n, e) {
        function i(t) {
            return -1 !== n.indexOf(t + "") }
        n = n || [];
        var r = [];
        return w(t, function(t) { t.price && !i(t.chapter_id) && e > r.length && r.push(t) }), r }

    function us(t, n) {
        function e() {
            var t = [];
            return m(n, function(n) {
                var e = w(i, function(t) {
                    return t.chapter_id == n });
                e.length && t.push(e[0]) }), t }
        var i = t.toc;
        return ls(e(n), t.discount) }

    function ls(t, n) {
        function e(t, n) {
            return T(t, function(t) {
                return t[n] }) }
        var i, r = e.bind(this, t),
            o = r("chapter_id"),
            a = r("price"),
            c = r("title"),
            s = a.reduce(function(t, n) {
                return n + t }, 0),
            u = s;
        if (n && 1e3 * n.end > th.now()) {
            var l = (n.strategy || []).sort(function(t, n) {
                return n[0] > t[0] });
            y(l, function(n) {
                return t.length >= n[0] ? (i = (100 - n[1]) / 100, s = Math.ceil(s * i), !1) : !0 }) }
        var d = 1 == t.length ? c[0] : c[0] + " \u81f3<br/>" + c.pop();
        return { ids: o, price: s, discount: i, origin: u, title: d } }

    function ds(t, n, e, i, r, o) {
        function a() { r(l), p.close(!0) }

        function c() { r(-1), p.close(!0) }

        function s(t) {
            var n = e[t];
            l = n, r(l), p.close(!0) }

        function u() { p.hide();
            var t = T(n, function(t) {
                return t.label });
            t.push("\u53d6\u6d88"), Xn({ title: "\u8bf7\u9009\u62e9\u4f60\u8981\u4f7f\u7528\u7684\u798f\u5229", items: t }, function(t) { n[t.index] && (l = n[t.index]), p.show() }) }
        var l = n[0],
            d = us(i, [t]),
            f = os(i, d, e, n.length > 1 && n[n.length - 1].balance),
            p = zi(f, { pay: a, payBatch: s, paySpecial: c, select: u, viewTasks: function() { p.close({ viewTasks: function() { pp(p_()) } }) }, tips: function() {
                    return is(l) }, confirm: function() {
                    return rs(l) }, onClose: function(t) {
                    return t && t.viewTasks ? (t.viewTasks(), void(o && o())) : void(t || o && o()) } }) }

    function fs(t, n, e, i) {
        var r, o = i.balance,
            a = i.chapter,
            c = [];
        r = js(t, [n], a), r && c.push(r);
        var s = us(e, [n]);
        r = Rs(t, [n], s.price, o), r && c.push(r);
        var u = function(t, n) {
            var e = [],
                i = t.fiction_id,
                r = ss.bind(this, t.toc, Mn(i).paid);
            return y([20, 50, 100], function(o) {
                var a = r(o),
                    c = ls(a, t.discount),
                    s = Rs(i, c.ids, c.price, n);
                return e.push(s), a.length >= o }), e }(e, o);
        return [c, u] }

    function ps(t) {
        var n = { 0: "chapter", 1: "cdkey", 2: "balance" },
            e = { balance: 0, chapter: 0 },
            i = t.bind(this, e);
        Qc(null, 1, function(t) { t.data && t.data.length && m(t.data, function(t) { e[n[t.type]] = t.total }), i() }, i) }

    function vs(t, n, e) {
        function i() {
            return e.book ? hs(t, n, o, e) : void r(function(i) { hs(t, n, o, { id: e.id, price: Si($e(i.new_price) ? i.price : i.new_price), book: i }) }, n, e.id) }

        function r(n, e, i) {
            function r() { s++, s == u && (c && (a.new_price = +c.price), n(a)) }
            var a, c;
            rr(i, function(t) { a = t.item, r() }, e), Xc(function(t) { c = t.discount ? t : null, r() }, function(n) {
                return E([10008, 10019], +n.result) ? (Os(t, o, { id: i }, n), 0) : void r() }, i);
            var s = 0,
                u = 2 }
        n = n || M, t = Ws(t, "pay"), e.price && (e.price = Math.round(100 * e.price));
        var o = Es(e.id, e.listId);
        return i() }

    function hs(t, n, e, i) {
        function r() {
            return mr() ? !0 : Nv && "multiple_package" !== e ? !0 : void 0 }
        if (!Lv && !r()) return yr();
        var o = mr() ? _s : ms;
        return o(t, n, e, i) }

    function _s(t, n, e, i) {
        function r(t) { Zc(function(n) {
                var e = Ds(i.id, i.price, n.balance, i.listId);
                t(e) }, function() { In("\u4f59\u989d\u67e5\u8be2\u5931\u8d25, \u8bf7\u7a0d\u540e\u91cd\u8bd5") }) }

        function o(t, n) { Jn({ url: p(ys(e, i), Mv + "/hs/store/dialog/pay"), buttons: ["\u53d6\u6d88", "\u786e\u5b9a"], height: 130, highlight: 1 }, function(e) { e.result ? t() : n() }) }
        r(function(r) {
            var a = $s.bind("", t, n, e, r);
            return r.price ? (i.balance = r.balance || 0, void o(a, n)) : a() }) }

    function ms(t, n, e, i) { gs(function(r) {
            var o = $s.bind("", t, n, e);
            return 1 != r.length || r[0].price ? void bs(function(t) { o(t) }, n, r, ys(e, i)) : o(r[0]) }, e, i) }

    function gs(t, n, e) {
        function i() {
            return c.coupon ? Bs(e.id, c.coupon) : void 0 }

        function r() {
            return Rs(e.id, null, e.price, c.balance, e.listId, c.balanceUnknown) }
        var a = [],
            c = {};
        ks(function(u) { c.balance = u.balance, c.balanceUnknown = u.balanceUnknown, c.coupon = u.coupon;
            var l = r(),
                d = s(n, "single") && !!e.price && i();
            d && (a.push(d), !c.balance && o(l, { label: "\u4e0d\u4f7f\u7528", blance: 0 })), a.push(l), t(a) }, e.price) }

    function bs(t, n, e, i) {
        function r() { f.hide(1, function() {
                return Hs() && !f.paymentName && o() ? void Vs(function(t, e) { t || n(e) }) : void n(f.paymentName) });
            var n = function(n) { Fs(n), t(s || e[0]) } }

        function o() {
            return "coin" == s.key && s.price > s.balance }

        function a() {
            return "bookCoupon" == s.key }

        function c() { f.hide();
            var t = T(e, function(t) {
                return t.label });
            t.push("\u53d6\u6d88"), Xn({ title: "\u8bf7\u9009\u62e9\u4f60\u8981\u4f7f\u7528\u7684\u798f\u5229", items: t }, function(t) { e[t.index] && (s = e[t.index]), f.show() }) }
        var s = e[0],
            u = e[e.length - 1],
            l = e.length > 1 && 0 !== u.balance || "\u4e0d\u4f7f\u7528" == u.label,
            d = qs(i, s, l),
            f = zi(d, { paymentName: zs(), getPaymentInfo: Ys, pay: r, needPayCash: o, payCoupon: a, select: c, viewTasks: function() { f.close({ viewTasks: function() { pp(p_()) } }) }, tips: function() {
                    return Zs(s, i) }, confirm: function() {
                    return rs(s) }, selectPay: function() { f.hide(0, function() { Vs(function(t, n) {
                            if (f.show(), !t) {
                                var e = j(".recharge-selector__payment-icon", Bv.body);
                                e.src = Ys(n).icon, f.paymentName = n, f.update() } }) }) }, onClose: function(t) {
                    return t && t.viewTasks ? (t.viewTasks(), void(n && n())) : void(t || n({ result: 2 })) } }) }

    function ks(t, n) {
        function e() {-1 != c && (Sn({ show: !1 }), t(o), c = -1) }

        function i() { a++, a == c && (Sn({ show: !1 }), t(o)) }

        function r(t, n) {
            function e(t) {
                return In("\u4e66\u5e01\u4f59\u989d\u67e5\u8be2\u5931\u8d25"), n && n(t), 1 }
            Qc(2, 1, function(n) {
                if (n.data && n.data.length) {
                    var i = n.data[0].total;
                    return t(i) }
                e(n) }, e) }
        Sn({ show: !0 });
        var o = { balance: 0, coupon: null },
            a = 0,
            c = 2;
        r(function(t) { o.balance = t, i() }, function() { o.balanceUnknown = 1, e() }), Eh.hasAvail(Oi(n), function(t, n) { o.coupon = t && n, i() }, e) }

    function ys(t, n) {
        var e, i;
        if ("multiple_cart" === t) {
            var r = n.book || [];
            e = "\u8d2d\u7269\u8f66\u7ed3\u7b97", i = r[0].cover } else if ("multiple_discount" === t) {
            var r = n.book || [];
            e = r.map(function(t) {
                return t.title }).join("\u3001"), e.length > 30 && (e = e.substr(0, 30) + "\u7b49"), e = "\u5171" + r.length + "\u672c\u56fe\u4e66\uff0c" + e, i = r[0].cover } else {
            var o = n.book;
            e = o.title, i = o.cover }
        return { title: e, price: n.price, cover: i, balance: n.balance } }

    function ws(t, n) { t = Ws(t, "recharge"), n = n || M, Is(xs.bind("", t, n)) }

    function xs(t, n, e) {
        function i(t) {
            var n = function(n) { Fs(n), r(e[t]) };
            a.hide(0, function() {
                return Hs() && !a.paymentName ? void Vs(function(t, e) {
                    return t ? a.show() : void n(e) }) : void n(a.paymentName) }) }

        function r(e) { Ms(function(n) { a.close({ selected: 1 }), t(n) }, function(e) {
                return 2 == e.result ? a.show() : (12 == e.result && (e.message = "\u5145\u503c\u6210\u529f\uff0c\u4f46\u4f59\u989d\u4e0d\u8db3\u652f\u4ed8\u8ba2\u5355\uff0c\u8bf7\u91cd\u8bd5"), Qn("reloadReadingPages") ? (Dn(), n(e)) : t(e), 1) }, e.fee, e.code) }

        function o() { a.hide(0, function() { Vs(function(t, n) {
                    if (a.show(), !t) {
                        var e = j(".recharge-selector__payment-icon", Bv.body);
                        e.src = Ys(n).icon, a.paymentName = n, a.update() } }) }) }
        var a = Ts(e, Ks, null, { paymentName: zs(), getPaymentInfo: Ys, getIcon: function() {
                return Ys(a.paymentName).icon }, selectPay: o, title: "\u4e66\u5e01\u5145\u503c", unclosable: !0, select: i, cancel: n, clazz: "-recharge" }) }

    function Ts(t, n, e, i) {
        function r(t) { Ne(t, { select: i.select }).set() }
        i = o(i, { cancelText: "\u53d6\u6d88", unclosable: !0, onClose: function(t) {!(t && t.selected) && i.cancel({ result: 2 }) } });
        var a = zi(Gs(t, n, e || r, i), i);
        return a }

    function Cs(t) {
        return 1e3 > t ? "http://image.read.duokan.com/mfsv2/download/fdsc3/p01u9S6LajBv/3tsGZz0bE9L1Za.png" : 2e3 > t ? "http://image.read.duokan.com/mfsv2/download/fdsc3/p01sruQkqh4z/PM1u3fp60lWK0V.png" : 5e3 > t ? "http://image.read.duokan.com/mfsv2/download/fdsc3/p01IkgdjXtFu/LkygO64yMfMzKT.png" : "http://image.read.duokan.com/mfsv2/download/fdsc3/p01HtpFk6CC1/n3lYeDx3Kp4qRg.png" }

    function Is(t) {
        function e() {
            if (++s != c) return 1;
            k(r, function(t, n) {
                return t.fee - n.fee });
            var n = x(r, function(t) {
                return "TASK" == t.code });
            if (o && !n) { o = { fee: o.value, reward: o.coins, code: "TASK" };
                var e = I(r, x(r, function(t) {
                    return t.fee == o.fee }));
                b(r, -1 == e ? 0 : e, 1, o) }
            return t && t(r), 1 }

        function i(t, e) { bt("/task/v2/user/list", { type: "POST", data: we(), success: xe.bind(n, t, e), error: e }) }
        var r, o, a = [{ fee: 500, reward: 0, code: "CHARGE" }, { fee: 1e3, reward: 0, code: "CHARGE" }, { fee: 2e3, reward: 0, code: "CHARGE" }, { fee: 5e3, reward: 0, code: "CHARGE" }, { fee: 1e4, reward: 0, code: "CHARGE" }],
            c = 2,
            s = 0;
        es(function(t) {
            return r = t.data || [], 1 > r.length && (r = a), e() }, function() {
            return r = a, e() }), i(function(t) {
            return o = x(t.data, function(t) {
                return 3 == t.type }), e() }, function() {
            return e() }) }

    function $s(t, n, e, i) {
        if (i) { i.balance = -1 == i.balance ? 0 : i.balance;
            var r = $e(i.balance) ? 0 : i.price - i.balance,
                o = Os.bind("", t, e, i),
                a = As.bind("", o, n, r, e, i);
            return Ps(o, a, e, i) } }

    function Os(t, n, e, i) {
        var r, o = e.id; "single_fiction" === n ? (r = { fictionId: o }, e.chapterIds && (r.chapters = e.chapterIds)) : r = "single_book" === n ? { book: { bookUuid: o, orderUuid: i && i.order_id || -1 } } : { book: { bookUuid: -1, orderUuid: -1 } }, Vn(r, t) }

    function Ss(t) {
        return t ? "COUPON" : "ios" == Av ? jn() ? "DC_SANDBOX" : "DC" : jn() ? "BC_SANDBOX" : "BC" }

    function Es(t, n) {
        return t && !Oe(t) ? 10 > ("" + t).length ? "single_fiction" : "single_book" : !t && n ? "multiple_package" : t && !n ? "multiple_cart" : "multiple_discount" }

    function Ms(t, n, e, i, r, o, a) {
        function c(t, n, e, i, r) { Zn({ value: e }, function(e) {
                return 2 == e.result ? (n(e), 1) : e.result ? xr(e) : void Ps(t, n, i, r) }) }

        function s(t, n, e, i, r) {
            function o(t) {
                return 2 == t.result ? (a(t), !0) : a(t) }

            function a(t) { Sn({ show: !1 }), n(t) }
            return "WXPAY" == zs() && te("wakeUp", function() { Sn({ show: !1 }), ne("wakeUp") }), Lv || Nv && (!Nv || "MIPAY" != zs()) ? ns(e, i, r, zs(), function(n) {
                var e = { msg: "\u652f\u4ed8\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u4e86\u5f02\u5e38\u3002\n\u5982\u679c\u60a8\u672a\u652f\u4ed8\uff0c\u8bf7\u91cd\u65b0\u652f\u4ed8\u3002\u5982\u679c\u60a8\u5df2\u652f\u4ed8\uff0c\u8bf7\u7a0d\u540e\u5c1d\u8bd5\u91cd\u542f\u5e94\u7528\u540e\uff0c\u53bb\u4e2a\u4eba\u4e2d\u5fc3\u67e5\u770b\u662f\u5426\u652f\u4ed8\u6210\u529f\u3002", btn: "\u786e\u8ba4" };
                Fn({ orderInfo: n, continue: e, payment_method: zs() || "MIPAY" }, function(e) { Tr(e, function(e) { Sn({ show: !1 }), t(n) }, o) }) }, a) : (Sn({ show: !1 }), zn(function(t) {
                return 2 === t.result ? n(t) : zv(br, 100) })) }
        n = n || M, Sn({ show: !0, cancelable: !1 });
        var u = mr() ? c.bind("", t, n, e, o, a) : s.bind("", t, n, e, i, r);
        return u() }

    function Ps(t, n, e, i) {
        function r(n) {
            return Sn({ show: !1 }), t(n) }

        function o(t) {
            return Sn({ show: !1 }), n(t) }
        return Sn({ show: !0, cancelable: !1 }), "single_fiction" === e ? "chapterCoupon" === i.key ? qc(r, o, i.id, i.chapterIds) : Jc(r, o, i.id, i.price, i.chapterIds, i.couponId, null, i.isFree) : "single_book" === e ? Xc(r, o, i.id, i.price, i.couponId) : Gc(r, o, i.id, i.price, i.listId) }

    function As(t, n, e, i, r, o) {
        var a = Ns.bind(this, t, n, r.id);
        return Ls(t, a, e, i, r, o) ? 1 : a(o) }

    function Ls(t, e, i, r, o, a) {
        var c = +a.result;
        return 20019 == c ? (Ms(t, e, i, n, a.trans_id, r, o), 1) : 20020 == c ? (i ? Ms(t, e, i, n, a.trans_id, r, o) : ws(Ps.bind("", t, e, r, o), e), 1) : void 0 }

    function Ns(t, n, e, i) {
        return i ? 0 == i.result ? (t(i), 1) : E([10011, 10012], +i.result) ? (Wn({ fictionId: e }, n), 0) : 11e4 == +i.result ? (t(i), 1) : E([10008, 10013, 10019], +i.result) ? (t(i), 0) : 150001 == +i.result ? (In("\u7ae0\u8282\u5238\u4e0d\u8db3\uff0c\u8bf7\u91cd\u65b0\u652f\u4ed8"), n(i), 1) : n(i) : void n(Qh()) }

    function Bs(t, n) {
        if (n && n.length) {
            var e = n.length;
            return { key: "bookCoupon", id: t, couponId: n[0].coupon_id, count: e, label: "\u8d2d\u4e66\u5238\uff08\u4f59" + e + "\u5f20\uff09" } } }

    function js(t, n, e) {
        return n && 1 == n.length && e ? { key: "chapterCoupon", id: t, chapterIds: n, count: e, label: "\u7ae0\u8282\u5238\uff08\u4f59" + e + "\u5f20\uff09" } : void 0 }

    function Rs(t, e, i, r, o, a) {
        return { key: "coin", id: t, chapterIds: e ? Oe(e) ? e : [e] : n, balance: r, balanceUnknown: a, price: i, listId: o, label: "\u4e66\u5e01\uff08\u4f59" + r + "\uff09" } }

    function Ds(t, n, e, i) {
        return { key: "cash", id: t, price: n, balance: e, listId: i } }

    function Hs() {
        return Qn("listPaymentMethods") }

    function Fs(t) {
        return Hs() && Ys(t) ? Lt("paymentName", t) : void 0 }

    function zs() {
        if (!Hs()) return "MIPAY";
        var t = Gn(),
            n = At("paymentName"),
            e = E(t, n);
        return e && n || "" }

    function Ys(t) {
        return t_[t] || null }

    function Vs(t) {
        function n() { t(-1) }

        function e(n) { o.hide(1, t.bind(this, null, r[n])) }

        function i() {
            return r.map(Ys) }
        if (!Hs()) return t(null, "MIPAY");
        var r = Gn(),
            o = Wi(i(r), Xs, null, { title: "\u9009\u62e9\u652f\u4ed8\u65b9\u5f0f", cancel: n, select: e }) }

    function Ws(t, n) {
        function e(t) {
            return { pay: "\u8d2d\u4e70\u7684\u56fe\u4e66", recharge: "\u8d2d\u4e70\u7684\u4e66\u5e01", gift: "\u9886\u53d6\u7684\u798f\u5229" }[t] }

        function i() {
            var t = +At(r);
            return t && !Ni(t, th.now(), "day") ? !1 : (Lt(r, th.now()), !0) }
        if (t = t || M, !Nv) return t;
        var r = "pay__anonymous_login_prompt";
        return i() ? Vi.bind("", { prompt: c("\u60a8\u4ee5\u6e38\u5ba2\u8eab\u4efd{0}\u4ec5\u80fd\u4fdd\u5b58\u5728\u672c\u673a\uff0c\u66f4\u6362\u8bbe\u5907\u540e\u5c06\u65e0\u6cd5\u627e\u56de<br><br>\u5efa\u8bae\u60a8\u5c3d\u5feb\u767b\u5f55\u5c0f\u7c73\u8d26\u53f7\uff0c\u53ef\u6c38\u4e45\u4fdd\u5b58\u6570\u636e\u8bb0\u5f55\u3002", e(n)), confirmText: "\u9a6c\u4e0a\u767b\u5f55", cancelText: "\u7a0d\u540e\u63d0\u9192", unclosable: !0, confirm: wr, onClose: t }) : t }

    function Ks(t) {
        var n = '<p class="recharge-item"><img src="' + Cs(t.fee) + '" class="coin"><span class="value">' + Ei(t.fee) + '<span class="text">' + mi("") + '</span></span><span class="cost">' + Oi(t.fee) + _i() + "</span>";
        return t.reward && (n += '<span class="text">+\u8d60' + mi(t.reward) + '</span><span class="reward-percent', "TASK" == t.code && (n += " -super"), n += '"><em>+' + Bi(1 * t.reward / t.fee) + "</em></span>"), n += "</p>" }

    function Us(t, n) {
        var e = '<section class="payv2-card -batch"><div class="title">\u6279\u91cf\u8d2d\u4e70\u7ae0\u8282</div>';
        if (n && n.length && n[0].chapterIds.length > 0) { e += '<ul class="candidate">';
            for (var i, r = n, o = -1, a = r.length - 1; a > o;) i = r[++o], i = us(t, i.chapterIds), e += '<li vp-click="$root.pay(' + o + ')"><div><p class="count">\u540e' + i.ids.length + '\u7ae0</p><span class="price">' + mi(i.price) + "</span>", i.discount && (e += '<em class="u-tagRT">' + (10 * i.discount + " ") + "\u6298</em>"), e += "</div></li>";
            e += "</ul>" }
        return e += "</section>" }

    function Xs(t) {
        return '<div class="payment-method"><img src="' + t.icon + '"/><span>' + t.name + "</span></div>" }

    function Gs(t, n, e, i) {
        for (var r, o = '<section class="select-menu recharge-selector" ><h3 class="title">' + i.title + '</h3><ul class="select-items">', a = t, c = -1, s = a.length - 1; s > c;) r = a[++c], o += '<li vp-click="$root.select(' + c + ')">' + n(r) + "</li>";
        return o += Js() + '</ul><a class="button" vp-click="$root.close()">' + i.cancelText + "</a></section>" }

    function Js() {
        var t = "";
        return Hs() && zs() && (t += '<li class="recharge-selector__info" vp-click="$root.selectPay()" vp-show="$root.needPayCash ? $root.needPayCash() : true"><p class="recharge-item">\u652f\u4ed8\u65b9\u5f0f\uff1a<img class="recharge-selector__payment-icon" src="' + Ys(zs()).icon + '"><span vp-bind="$root.getPaymentInfo($root.paymentName).name"></span><em class="recharge-selector__arrow-right"></em></p></li>'), t }

    function qs(t, n, e) {
        return '<section class="select-menu book-pay"><h3 class="title book-pay__title">' + t.title + '</h3><ul class="select-items"><li class="select-items__pay-item"><span class="select-items__pay-item_title">\u4ef7\u683c\uff1a</span><span class="select-items__pay-item_price">' + Oi(t.price) + _i() + '</span></li><li class="select-items__pay-item" vp-show="!!$root.tips()" vp-bind="$root.tips()"></li>' + Js() + '<li class="recharge-selector__info" vp-show="$root.payCoupon()" vp-click="$root.select()"><p class="recharge-item">\u652f\u4ed8\u65b9\u5f0f\uff1a<img class="recharge-selector__payment-icon" src="http://image.read.duokan.com/mfsv2/download/fdsc3/p01O98l1Yh7p/zPo66WHJb2gBRS.png">\u4e66\u5238\u5151\u6362<em class="recharge-selector__arrow-right"></em></p></li></ul><a class="book-pay__confirm-button" vp-click="$root.pay()"><span vp-bind="$root.confirm()"></span></a></section>' }

    function Zs(t) {
        var n = "";
        return "bookCoupon" == t.key && (n += '<span class="select-items__pay-item_title">\u4e66\u5238\uff1a</span>\u60a8\u6709' + t.count + "\u5f20\u4e66\u5238\uff0c\u53ef\u4ee5\u76f4\u63a5\u5151\u6362"), "coin" == t.key && (t.balanceUnknown ? n += '<span class="select-items__pay-item_title">\u4e66\u5e01\uff1a</span>...' : t.balance > 0 && (n += '<span class="select-items__pay-item_title">\u4e66\u5e01\uff1a</span>' + mi(t.balance) + "\u4f59\u989d\uff0c", n += t.price > t.balance ? '\u53ef\u62b5\u6263<span class="select-items__pay-item_price">' + Oi(t.balance) + _i() + "</span>" : "\u53ef\u5168\u989d\u62b5\u6263")), n }

    function Qs(t, n, e) {
        function i(t) { Qn("confirmAutoPay") && Rn(e.id), t() }
        t = e.autopay ? i.bind(this, t) : t, n = n || M;
        var r = Es(e.id);
        return "coin" == e.payMethod ? $s(t, n, r, Rs(e.id, e.chapterId, e.price)) : "coupon" == e.payMethod ? $s(t, n, r, js(e.id, [e.chapterId], 1)) : "batch" == e.payMethod ? tu(t, n, e.id, e.chapterId) : "special" == e.payMethod ? $s(t, n, r, Rs(e.id, null, Si(e.special))) : as(t, n, e) }

    function tu(t, n, e, i) {
        function r(t, n, i, r) {
            function o(t) { c.hide(1, a.bind(null, t)) }

            function a(i) { ps(function(o) { $s(t, n, Es(e), Rs(e, r[i].chapterIds, r[i].price, o.balance)) }) }
            var c = zi(Us(i, r), { pay: o, onClose: function(e) {
                    return e ? t() : void n() } }) }
        ts(e, i, 150, function(e) {
            var i = e.item,
                o = nu(i);
            return r(t, n, i, o) }) }

    function nu(t, n) {
        var e = [],
            i = t.fiction_id,
            r = ss.bind(this, t.toc, Mn(i).paid);
        return y([20, 50, 100], function(o) {
            var a = r(o),
                c = ls(a, t.discount),
                s = Rs(i, c.ids, c.price, n);
            return e.push(s), a.length >= o }), e }

    function Ms(n, e, i, r, o) {
        function a(n, e, i, r, o) {
            function a(t) {
                return Fv(c("\u652f\u4ed8\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5[{0}]", t.result)), !0 }
            var u = t.top.location.href;
            $e(Bh) || (u = u + "&autopay=" + +Bh), u += "&pay=1", -1 === u.indexOf("back=") && (u += "&back=home"), s(i, r, o, zs(), function(n) {
                return n.payment_url ? t.top.location.replace(Xv(n.payment_url)) : void a() }, a, u) }

        function s(t, n, e, i, r, o, a) {
            var c = {};
            return c.balance = t, c.payment_name = i || "MIPAY_WEB", Pv.channel && (c.ch = Pv.channel), e ? c.trans_id = e : n && (c.code = n), "MIPAY_WEB" == c.payment_name && jn() && (c.payment_name = "MIPAYSANDBOX_WEB"), c.return_url = a, ge(r, o, "/store/v0/payment/bc/recharge", c) }
        return a(n, e, i, r, o) }

    function eu(t, n, e) {
        var i = {};
        return i.fiction_id = t, i.d = 3, o(i, we()), Ge("/store/v0/payment/fiction/chapter/list", { data: i, type: "POST", success: n, error: e }).then(function(t) { t.items && (t.items = iu(t.items)) }) }

    function iu(t) {
        if (!t || !t.length) return [];
        var n = t.split(",");
        return C(n, function(t, n) {
            if (-1 === n.indexOf("-")) return t.concat([+n]);
            var e = n.split("-");
            return t.concat(ce(+e[0], +e[1] + 1)) }, []) }

    function as(t, n, e) {
        var i = ts(e.id, e.chapterId, 150),
            r = eu(e.id);
        ps(function(o) { qe([i, r]).then(function(i) {
                var r = i[0],
                    a = i[1],
                    c = r.item;
                ru(e.id, a), cs(t, n, e.id, e.chapterId, c, o) }) }) }

    function ru(t, n) {
        if (n && n.items) {
            var e = Mn(t);
            e.paid = T(n.items, function(t) {
                return t + "" }) } }

    function ts(t, e, i, r, o) {
        function a(n, e) {
            var i = e.item.toc || [];
            e.item.toc = w(i, function(t) {
                return !t.dummy && !t.hidden });
            var r = n.bind("", e);
            return c ? void c.then(function(n) { ru(t, n), r() }, r) : r() }
        r = r || M, o = o || M;
        var c;
        return 150 != i || kr() || (c = eu(t)), Ge("/store/v0/fiction/detail/" + t, { data: { chapter_id: e, count: i }, success: xe.bind(n, a.bind("", r), o), error: o }) }

    function ou(t) {
        if (Rv.href.match("download") || Bv.referrer.match("download")) { He(t || Bv.body, cu());
            var n = j(".download-tip-black"),
                e = j(".close", n);
            F(e, "click", function() { ot(n) }), F(j(".download-tip__download", n), "click", au), j(".float-reminder") && (j(".float-reminder").style.bottom = "80px") } }

    function au() {
        var n = "http://www.duokan.com/download"; /MicroMessenger/.test(t.navigator.userAgent) && (n = "http://a.app.qq.com/o/simple.jsp?pkgname=com.duokan.reader"), (/MiuiBrowser/.test(t.navigator.userAgent) || t.market) && (n = "http://app.xiaomi.com/details?appId=1108&back=true&ref=" + Uv(Rv.href)), Rv.href = n }

    function cu() {
        return '<div class="fixed-wrapper"><div class="download-tip-black"><div class="close image-icon"><img src="http://image.read.duokan.com/mfsv2/download/s010/p01ANN3XpKL0/Sc4PiZXNCumgwj.png"></div><div class="logo image-icon"><img src="http://image.read.duokan.com/mfsv2/download/s010/p01uEs3bj9CE/fcVr7Kv6gw3DlQ.png"></div><div class="info"><p class="ttl">\u591a\u770b\u9605\u8bfb\u5ba2\u6237\u7aef</p><p>\u6d77\u91cf\u597d\u4e66\uff0c\u6781\u81f4\u4f53\u9a8c\uff01</p></div><a class="button download-tip__download">\u7acb\u5373\u6253\u5f00</a></div></div>' }

    function su(t, n) { xn("\u504f\u597d"), En(!1), Re(t, pu(n)) }

    function uu(t, n) {
        var e = { type: parseInt(Pv.user_type) },
            i = Ne(t, e);
        i.set({ user_type: Pv.user_type, select: function(t) { e.type = t, i.set() }, confirm: function(t) {
                return 0 == e.type ? (xr("\u8bf7\u9009\u62e9\u60a8\u7684\u504f\u597d\uff01"), void t.stopPropagation()) : (Bn(e.type), lu(e.type), n ? n() : (xr("\u60a8\u7684\u504f\u597d\u5df2\u66f4\u6539"), void $n())) } }) }

    function lu(t) { Pv.user_type = "" + t, ln() }

    function du() {
        return f(Rv.search.substr(1)).user_type }

    function fu() {
        var t = du();
        return t && lu(t), t }

    function pu(t) {
        return '<div class="new-page prefer-page" id="' + Ve(uu) + '"><div class="prefer-title"><h3>\u8bf7\u9009\u62e9\u60a8\u7684\u9605\u8bfb\u504f\u597d</h3><p>\u591a\u770b\u6839\u636e\u504f\u597d\u5411\u60a8\u63a8\u8350\u4e66\u7c4d</p></div><ul class="prefer-radio"><li vp-click="$root.select(3)" vp-class="{\'-crt\' : $root.type == 3}"><div class="circle sprites prefer-fiction"></div><div class="box"></div><div class="label"><p class="title">\u7f51\u6587\u7537\u751f\u9891\u9053</p></div></li><li vp-click="$root.select(4)" vp-class="{\'-crt\' : $root.type == 4}"><div class="circle sprites prefer-female"></div><div class="box"></div><div class="label"><p class="title">\u7f51\u6587\u5973\u751f\u9891\u9053</p></div></li></ul><a><div class="bottom-button -fixed" vp-click="$root.confirm($event)" vp-class="{\'-disable\' : $root.type == 2}">\u786e\u5b9a</div></a></div>' }

    function vu(t) {
        return (t % 1 === 0 ? t : t.toFixed(2)) + _i() }

    function hu(t) {
        return '<section class="main-card">' + Fi(_u(t), 1, "<h3>\u7c7b\u522b\u6807\u7b7e</h3>") + "</section>" }

    function _u(t) {
        var e, i = '<ul class="m-tag -color">',
            r = t.fiction_id ? "fiction" : "store";
        if (t.categories)
            for (var o, a = t.categories, c = -1, s = a.length - 1; s > c;) { o = a[++c];
                var u = t.fiction_id ? o.category_id : o.sid;
                if (!t.fiction_id || u >= 1e6) { e = o, i += '<li class="u-tag" data-href="' + cf(r, u) + '" title="' + e.label + '">' + e.label + "</li>";
                    break } }
        if (t.tags)
            for (var l, d = e == n ? 3 : 2, f = t.tags, c = -1, p = f.length - 1; p > c && (l = f[++c], !(0 >= d));)(e == n || l != e.label) && (d--, i += '<li class="u-tag" data-href="' + sf(r, l) + '" title="' + l + '">' + l + "</li>");
        return i += "</ul>" }

    function mu(t, n, e) {
        var i = "";
        t = t.book || t;
        var r = Ci(t);
        return i += '<div class="u-book ' + n + '" ', r && (i += 'data-href="' + Ci(t) + '" ' + Ku("b*" + Uu(t)) + ' expose=""'), i += ">" + Ii(t, !0) + '<div class="info"><h3 class="title">' + t.title + "</h3>", e && (i += e), i += "</div></div>" }

    function gu(t, n, e, i) {
        var r = '<section class="main-card -folder">';
        return t && (r += '<div class="u-title"><h1>' + t + "</h1></div>"), n && (r += '<div class="cnt">' + n + "</div>"), i && (r += i), e && (r += '<div class="tail">' + e + "</div>"), r += "</section>" }

    function bu(t) {
        var n = "";
        return t.author_books_total > 4 && (n += '<div data-href="' + uf("fiction", t.authors) + '">\u67e5\u770b\u5168\u90e8</div>'), n }

    function ku(t) {
        var n = "",
            e = 1 === t.owner ? t.fiction_id + "-" + t.owner + "-" + t.owner_uri : t.fiction_id;
        return n += '<div data-href="' + mf("fiction", e, { onlyCatalog: 1, chapter_id: t.latest_id }) + '">', n += t.updated ? "\u6700\u65b0\uff1a" + t.latest + " \u66f4\u65b0\u4e8e " + Ai(t.updated) : "\u67e5\u770b\u76ee\u5f55", n += "</div>" }

    function yu(t) {
        var n = '<ul class="text">';
        return t.rights && (n += "<li>\u7248\u6743\uff1a" + t.rights + "</li>"), n += "</ul>" }

    function wu(t) {
        return $e(t) ? !1 : ("" + t).length > 10 }

    function xu(t) {
        if (!wu(t)) return !1;
        var n = An(t);
        return n ? !!n.purchased : !1 }

    function Tu(t) {
        return $e(t) ? 0 : t.fiction_id ? t.special : $e(t.new_price) ? t.price : t.new_price }

    function Cu(t) {
        var n = t - th.now(),
            e = "";
        if (0 > n) return e = "\u9650\u65f6\u7545\u8bfb\u5df2\u7ecf\u7ed3\u675f\uff0c\u8d2d\u4e70\u540e\u53ef\u7ee7\u7eed\u9605\u8bfb";
        var i = Math.floor(n / 3600 / 1e3 / 24);
        if (e = "\u9650\u65f6\u7545\u8bfb\u8fd8\u5269", i) e += i + "\u5929";
        else {
            var r = Math.floor(n / 3600 / 1e3);
            if (r) e += r + "\u5c0f\u65f6";
            else {
                var o = Math.floor(n / 60 / 1e3);
                o >= 15 ? e += o + "\u5206\u949f" : e = "\u9650\u65f6\u7545\u8bfb\u5373\u5c06\u7ed3\u675f" } }
        return e }

    function Iu(t) {
        return wu(t.fiction_id) ? void 0 : t.price }

    function $u(t) {
        var n;
        return $u.__cache__ || ($u.__cache__ = {}), $u.__cache__[t.book_id] ? $u.__cache__[t.book_id] : ($u.__cache__[t.book_id] = 0, Qn("getPackageType") && t.opf ? (n = Ln(t.book_id, t.features), "NONE" === n ? In("\u8bf7\u5347\u7ea7\u591a\u770b\u9605\u8bfb\u81f3\u6700\u65b0\u5ba2\u6237\u7aef\u4ee5\u9605\u8bfb\u672c\u4e66") : "EPUB_OPF" === n && ($u.__cache__[t.book_id] = 1), $u.__cache__[t.book_id]) : $u.__cache__[t.book_id]) }

    function Ou(t, n) {
        var e = Ne(t),
            i = An(n.book_id);
        e.set({ isPaid: function() {
                return !!i.purchased } }), te("wakeUp", function() { i = An(n.book_id), e.set() }) }

    function Su(t) {
        return t = g(t || [], 0), t = Nu().concat(t), Eu(t) }

    function Eu(t) {
        var n = [];
        t = T(t, function(t) {
            var e = (t + "").split("*");
            return e[1] && n.push(e[1]), e[0] });
        var e = t.join("."),
            i = n_[e];
        return $e(i) ? i = 0 : i += 1, n_[e] = i, t.push(i), t.join(".") + (n.length ? "*" + n.join("*") : "") }

    function Mu(t) { Lu(g(arguments, 0)) }

    function Pu(t) { Nu().push(t) }

    function Au() {
        return Nu().pop() }

    function Lu(t) { Nh = Nh || {}, Nh[Bu()] = t }

    function Nu() {
        var t = Bu();
        return Nh = Nh || {}, Nh[t] || Lu([]), Nh[t] }

    function Bu() {
        return jv.state ? jv.state._index : -1 }

    function ju() {
        return i_ }

    function Ru(t) {
        return i_ = e_ = t }

    function Du(t) {
        return i_ = e_ ? e_ + "!" + t : t }

    function Hu(t, n, e) {
        var i = ni(t, function() { Fu(e + (n ? "~" + n : "")), i.clear() }, -50, 2e3, !0) }

    function Fu(t) { o_.push(t), o_.timer && (Yv(o_.timer), o_.timer = null), o_.timer = zv(function() { ai("ex", o_.join("!")), o_ = [] }, 10) }

    function zu(t, n, e) {
        function i(t) {
            var n = function(t) {
                var n = t.match(/[?#]/) ? "&" : "?";
                return t += n + "_t=" + Uv(ju()) };
            if (!t.match("multi_url")) return n(t);
            var e = t.split(/[?#]/),
                i = e[0],
                r = f(e[1] || ""),
                o = r.multi_url.split(","),
                a = T(o, n);
            return r.multi_url = a.join(","), p(r, i) }
        pp = B(pp, function(t) {
            var n = t.args[0];
            t.args[0] = i(n) }), delete r_["data-href"] }

    function Yu() {
        function t() {
            var t = Rv.href.match(/_t=(.*?)(?:$|&)/);
            return Ru(t ? Xv(t[1]) : "") }

        function n() { F(Bv, "click", function(t) {
                var n = H(t.target, "[" + a_ + "]");
                n && Du(n.getAttribute(a_)) }, !0) }

        function e() { fe(function() { t() }) }
        t(), n(), Vu(), F(Bv, "DOMNodeInserted", P(Vu, 0)), zu(), e() }

    function Vu() {
        var t = R("[" + c_ + "]");
        m(t, function(t) { Wu(t), t.removeAttribute(c_) }) }

    function Wu(t) {
        var n, e;
        for (n in r_)
            if (e = r_[n], D(t, "[" + n + "]")) try { e(t, t.getAttribute(n), t.getAttribute(a_)) } catch (t) { Hv.error("_da__parse", t) } }

    function Ku(t, n) {
        return c("da={0} {1} {2}", Su(Oe(t) ? t : [t]), c_, n ? "" : "expose") }

    function Uu(t) {
        return t.fiction_id ? "2_" + t.fiction_id : t.book_id ? "1_" + t.book_id : t.source && t.source_id ? c("{0}_{1}", t.source, t.source_id) : "" }

    function Xu(t) {
        return t.type && t.id ? c("{0}_{1}", t.type, t.id) : "" }

    function Gu(t) {
        function n() { W(t, "-newbie"), F(t, "click", function(t) {
                return t.stopPropagation(), Lv ? void Di(function(t) {
                    return t ? qu() : void i(function(t) { tl(t.data, !1, Ju) }, Ju) }) : Ju() }) }

        function e() { F(t, "click", qu) }

        function i(t, n) { vr(t, n, 100, 1) }

        function r() {
            var t = Br().start_time,
                n = th.parse(t || "2016/05/27 10:00"),
                e = th.parse("2016/05/31 00:00");
            return th.now() >= n && e >= th.now() }
        return r() ? (W(t, "-anna4"), void F(t, "click", function(t) { t.stopPropagation(), pp("/subtle/event/4th-day/dist/index.html?from=float_reminder") })) : void Di(function(t) {
            return t ? e() : void n() }) }

    function Ju() { ai("nbc", "show"), Ze("            @-webkit-keyframes customIn {                0% { -webkit-transform: translate(115px, 240px) scale(0, 0); }                100% { -webkit-transform: translate(0, 0) scale(1, 1); }            }            @-webkit-keyframes customOut {                0% { -webkit-transform: translate(0, 0) scale(1, 1); }                100% { -webkit-transform: translate(115px, 240px) scale(0, 0); }        }");
        var t = zi(Qu(), { isCenter: !0, customAnimation: !0, viewTask: function() { t.close({ onClose: function() { qu() } }) }, onClose: function(t) { ai("nbc", t ? "go" : "close"), t && t.onClose() } }) }

    function qu() { ai("nbc", 2), pp(p_()) }

    function Zu() {
        var t = "";
        return mr() || (t += '<div class="float-reminder" id="' + Ve(Gu) + '"></div>'), t }

    function Qu() {
        return '<div class="newbie-gift" data-track="m.ft"><p class="newbie-gift__reward"><em>+500</em>' + mi("") + '</p><p class="newbie-gift__summary"><span>\u606d\u559c\u60a8\u83b7\u5f97500\u4e66\u5e01\u65b0\u624b\u793c\u5305</span><span>\u53ef\u5728\u4e66\u57ce\u65e0\u95e8\u69db\u4efb\u610f\u6d88\u8d39~</span></p><a class="newbie-gift__button" vp-click="$root.viewTask()">\u7acb\u5373\u67e5\u770b</a><p class="newbie-gift__tip">\u66f4\u591a\u798f\u5229\uff0c\u660e\u5929\u518d\u6765\u9886\uff01</p></div>' }

    function tl(t, i, r) {
        function o(t) {
            var e = t.shift();
            e ? zi(nl(e, i, t.length), { coins: a, showTotalCoins: "\u4e66\u5e01" === e.name, gotoMarketCoins: s, view: pp.bind(n, !i && a >= s ? "duokan-reader://store" : "/hs/user/task"), isCenter: !0, unclosable: !0, onClose: o.bind(n, t) }) : r && r() }
        var a = 0,
            c = [],
            s = 200,
            u = { coins: "\u4e66\u5e01", chapters: "\u7ae0\u8282\u5238", days: "\u7545\u8bfb", coupons: "\u4e66\u5238" };
        return Qc(2, null, function(n) { n = n.data, a = n.length && Xi(n), Oe(t) ? c = t.concat() : e(t, function(t, n) { c.push({ name: u[t], value: n }) }), o(c) }) }

    function nl(t, n, e) {
        var i = '<div class="claimed-gift"><h3 class="title">\u606d\u559c\u60a8\u83b7\u5f97</h3><p class="gift">';
        return t.physical ? i += t.name : t.value && (i += "" + t.name + " + " + t.value), i += '</p><p class="coins" vp-show="$root.showTotalCoins">\u60a8\u5f53\u524d\u5171\u6709<em vp-bind="$root.coins"></em>\u4e66\u5e01</p>', e ? i += '<a class="button" vp-click="$root.close()">\u4e0b\u4e00\u4e2a</a>' : (i += n ? '<a class="button" vp-click="$root.view()">\u83b7\u53d6\u66f4\u591a</a>' : '<a class="button" vp-custom="$root.coins < $root.gotoMarketCoins && $el.remove()" vp-click="$root.view()">\u53bb\u4e70\u4e66</a>', i += '<a class="button" vp-click="$root.close()">\u7acb\u523b\u6536\u4e0b</a>'), i += "</div>" }

    function el(t, n) { ge(t, n, "/store/v0/anonymous/status") }

    function il(t, n) { ge(t, n, "/store/v0/anonymous/migrate") }

    function rl() {
        function t(t) {
            return 1 == t.status ? n() : void hn() }

        function n() {
            var t = c("\u672c\u53f0\u8bbe\u5907\u4e0a\u4fdd\u7559\u4e86\u6e38\u5ba2\u6570\u636e\uff0c\u662f\u5426\u5408\u5e76\u81f3\u5f53\u524d\u767b\u5f55\u5c0f\u7c73\u8d26\u53f7{0}\uff1f", Pv.user_id),
                n = Pv.device_hash.substr(0, 10),
                i = c("\u6ce8\uff1a\u6e38\u5ba2{0}\u6570\u636e\u5305\u542b\u8d2d\u4e70\u8bb0\u5f55\u3001\u4e66\u5e01\u798f\u5229\u3001\u4efb\u52a1\u8fdb\u5ea6", n);
            Vi({ clazz: "confirm-menu_merge-user", title: t, prompt: i, confirmText: "\u7acb\u5373\u5408\u5e76", cancelText: "\u4e0d\u5408\u5e76\uff0c\u4ec5\u767b\u5f55", notOnCloseConfirm: !0, confirm: e, cancel: hn }) }

        function e() { il(function() { In("\u6570\u636e\u5408\u5e76\u6210\u529f"), br() }, function() { In("\u6570\u636e\u5408\u5e76\u5931\u8d25") }), hn() }
        return el(t) }

    function ol() {
        return '<div class="Swipe Swipe_full"><div></div></div>' }

    function al(t) {
        return '<div class="top"><a id="' + Ve(ip) + '" class="top__back"></a><span class="top__title">' + l(t) + '</span><a id="' + Ve(rp) + '" class="header-home"></a></div>' }

    function cl(t, n) {
        return al(t) + '<div class="top__bd">' + (n || "") + "</div>" }

    function sl(t) {
        return cl(t, Vt()) }

    function ul(t) {
        return '<div class="header-tab"><div class="Swipe-tab Swipe-tab_2 f-cb"><a href="javascript:"></a><a href="javascript:"></a></div><em class="header-user" data-href="' + bf() + '"></em><em class="header-checkin" data-href="' + yf() + '"></em></div><div class="Swipe Swipe_full container-scroll"><div><div></div><div></div></div></div>' }

    function ll(t) {
        for (var n, e = '<div class="new-page special-page">', i = t.lists, r = -1, o = i.length - 1; o > r;) n = i[++r], e += '<section class="main-card">', n.name && (e += '<div class="channel-title"><h1>' + n.name + "</h1></div>"), e += "<div>" + ki(n.items, 0, !1, Eo) + "</div>", n.url && (e += '<div class="card-tail"><a data-href="' + n.url + '" data-title="' + n.name + '">\u67e5\u770b\u66f4\u591a</a></div>'), e += "</section>";
        return e }

    function Zr() {
        return "" }

    function mi(t) {
        var n = "";
        return n += mr() ? (Oi(t) || "") + "\u9605\u7c73" : $e(t) ? "" : t + "\u4e66\u5e01" }

    function Bi(t) {
        return c("{0}%", Math.round(100 * t)) }

    function dl() {
        return rn() + '<div class="Pull-scroll"><div class="wrap"></div></div>' }

    function fl(t, e, i) {
        function r() {
            ft(t, Vt()), or(e, function(n) {
                var e = n.item;
                xn(e.title), Re(t, vl(e, n.related, n.author_books, o)), ou(t.parentNode) }, Qt.bind(n, t, r))
        }

        function o(t, n) { comment__bookComment(n, t) }
        return xn(""), r()
    }

    function pl(t, e) {
        function i(t) {
            return t.limited_time && !!t.price && !t.owner && t.allow_free_read }

        function r(t, n) {
            return !s.get("hasPay") && n.special }

        function o() { e.special && Jc(M, function(t) {
                return s.set({ hasPay: 10019 == t.result }), 1 }, u, -1) }

        function a(t) {
            var n = "" + t.fiction_id;!Uf(n) && t.toc.length && Xf(n, t.toc[0].chapter_id), Kn({ fictionId: n }) }

        function c(t) {
            return "ios" == Av && 1 == t.owner }
        var s = Ne(t),
            u = e.fiction_id,
            l = !1;
        fd(null, u, s), s.set({ readBook: a.bind(this, e), needPay: r.bind(this, u, e), getLimitText: function() {
                return Cu(e.limited_time) }, pay: P(function() { vs(o, n, { id: e.fiction_id, price: e.special, book: e }) }, 200), payText: function() {
                return l ? "\u514d\u8d39\u5151\u6362" : e.special + _i() }, isLimit: i.bind(this, e), is10086: function() {
                return 1 === e.owner } }), Eh.hasAvail(e.special, function(t) { l = t, s.set() }.bind(this)), c(e) && ft(t, "\u6682\u672a\u4e0a\u67b6"), o() }

    function Kn() {
        var t = arguments[0].fictionId;
        pp(gf(t)) }

    function vl(t, n, e, i) {
        var r = '<div class="new-page book-page" data-track="dt"><section class="main-card">' + ml(t) + "</section>" + hl(t);
        return (t.categories || t.tags) && (r += hu(t)), e && e.length && (r += gu("\u4f5c\u8005\u5176\u5b83\u56fe\u4e66", bi(e), bu(t))), n && n.length && (r += gu("\u559c\u6b22\u672c\u4e66\u7684\u4eba\u4e5f\u559c\u6b22", bi(n))), r += gu("\u56fe\u4e66\u4fe1\u606f", yu(t)) + "</div>" }

    function hl(t) {
        var n = '<section class="main-card" style="margin-top:-10px"><div class="book-dash"><div id="' + Ve(pl, t) + '"><div class="wrap"><ul class="btn-group" vp-show="$root.needPay()"><li><a class="u-btn2" vp-click="$root.readBook()"><span class="book-dash-text"></span></a></li><li><a class="u-btn3" vp-click="$root.pay()" vp-bind="$root.payText()">' + t.special + _i() + '</a></li></ul><ul class="btn-group" vp-show="!$root.needPay() && !$root.is10086()"><li class="u-btn2" vp-click="$root.readBook()"><span class="book-dash-text"></span></li><li><a class="u-btn3" vp-click="$root.download()" vp-bind="$root.downloadText()">\u4e0b\u8f7d</a></li></ul><ul class="btn-group" vp-show="!$root.needPay() && $root.is10086()"><li class="u-btn2" vp-click="$root.readBook()">\u5f00\u59cb\u9605\u8bfb<span class="tip-10086">\uff08\u6765\u81ea\u548c\u9605\u8bfb\uff09</span></li></ul></div><div class="wrap2" vp-show="$root.isLimit()">';
        return n += '<div class="m-limitinfo"><em class="icn-clock"></em><span vp-bind="$root.getLimitText()"></span></div></div></div></div>' + Fi(t.content || t.intro, 0, null, ku(t)) + "</section>" }

    function _l(t) {
        return '<span class="price__old">' + (t.price * t.word_count / 1e5).toFixed(0) + '\u5143</span> <span class="price__free">\u514d\u8d39</span>' }

    function ml(t) {
        var n = "";
        return t.url = "", n += mu(t, "-detail", gl(t)) }

    function gl(t) {
        var n = "";
        return n += '<p class="author">' + ui(t, !0) + '</p><div class="u-grade"><div class="grade grade' + di(t.score) + '"></div><span class="read">', n += t.score_count ? t.score_count + "\u4e2a\u8bc4\u4ef7" : "\u6682\u65e0\u8bc4\u4ef7", n += "</span></div>", t.special ? n += '<p class="price -special">\u4ef7\u683c\uff1a' + t.special + _i() + "\u5168\u672c</p>" : 2 == t.owner && t.has_ad ? n += '<p class="price">\u5168\u672c\u4ef7\u683c\uff1a' + _l(t) + "</p>" : t.price && (n += '<p class="price">\u4ef7\u683c\uff1a' + mi(t.price) + "/\u5343\u5b57</p>"), n += '<p class="count">\u5b57\u6570\uff1a' + (t.word_count / 1e4).toFixed(0) + "\u4e07\u5b57", t.owner || (n += t.finish ? '<span class="u-booktag">\u5df2\u5b8c\u7ed3</span>' : '<span class="u-booktag -serial">\u8fde\u8f7d\u4e2d</span>'), n += "</p>" }

    function bl(t, n) {
        function e() { ft(t, Vt()), r() ? o() : i() }

        function i() { Re(t, xl(Rf(), n)) }

        function r() {
            var t = "shelf__builtin";
            if (!If(t)) return Rf().length ? void Sf(t, 1) : (Sf(t, 1), !0) }

        function o() { kl(function(t) {
                if (!t.ads || !t.ads.length) return i();
                var n = P(i);
                m(t.ads.reverse(), function(t) {
                    var e = t.reference_id;
                    Nf(e, n), re(e) }) }, i) }
        return e() }

    function kl(t, e) { t = t || M, e = e || M, bt("/store/v0/ad", { data: { key: "f0-h5-built-in", a: 1 }, success: xe.bind(n, t, e), error: e }) }

    function yl(n, e, i) { i == e.fiction_id && (jr(n).scrollTop = n.offsetTop), F(n, "hold", function() {
            var t = function() {
                var t = e.fiction_id;
                jf(t), it(n), oe(t) };
            Vi({ title: "\u786e\u8ba4\u5220\u9664", prompt: "\u786e\u8ba4\u5c06\u672c\u4e66\u4ece\u4e66\u67b6\u5220\u9664?", confirm: t }) }), ni(n, function() {
            var t = e.fiction_id,
                i = e.latest_id;
            Bf(t, function(t, e) { t || e.latest_id != i && ht(j(".book-cover", n), '<span class="u-booktag shelf__tag">\u6709\u66f4\u65b0</span>') }) }, t.innerWidth) }

    function wl(t) {
        function n() {
            var n = j(".book-list", H(t, ".shelf"));
            U(n, "shelf-book"), U(n, "book-table"), U(t, "shelf__switch_list"), Y(jr(n), "scroll") }
        var e = "shelf__table";
        If(e) && n(), F(t, "click", function() { n(), Sf(e, V(t, "shelf__switch_list")) }) }

    function xl(t, n) {
        var e = '<div class="new-page shelf"><div class="shelf__top"><div class="shelf__switch" id="' + Ve(wl) + '"></div><div class="shelf-search" data-href="' + kf() + '">\u8f93\u5165\u4e66\u540d/\u4f5c\u8005/\u5173\u952e\u5b57</div></div>';
        return t && t.length ? (Pu("shelf"), e += Tl(t, n), Au()) : e += '<div class="u-feed -mine -none"><div class="cnt"><div class="info"><h3 class="title">\u4e66\u67b6\u8fd8\u662f\u7a7a\u7684~</h3><p class="summary">\u4e66\u67b6\u6536\u85cf\u6240\u6709\u60a8\u8bfb\u8fc7\u7684\u5c0f\u8bf4</p></div></div></div>', e }

    function Tl(t, n) {
        for (var e, i = '<ul class="book-list">', r = t, o = -1, a = r.length - 1; a > o;) e = r[++o], i += '<li id="' + Ve(yl, e, n) + '">' + Cl(e, Sl(e.fiction_id)) + "</li>";
        return i += "</ul>" }

    function Cl(t, n) {
        var e = "";
        return t = si(t), e += '<div class="u-book" data-href="' + gf(t.fiction_id) + '" ' + Ku("b*" + Uu(t)) + ' expose=""><a>' + Ii(t, !0) + '</a><div class="info"><h3 class="title single-line">' + t.title + '</h3><p class="author single-line">' + ui(t) + "</p>", n && (e += '<p class="extra single-line">\u5df2\u8bfb: ' + n.title + "</p>"), e += '<div class="wrap"><p class="extra single-line">\u6700\u65b0: ' + t.latest + "</p></div></div></div>" }

    function Il(t, e) {
        function i() { ft(t, Vt()), kr() || (c = eu(e)), r() }

        function r() {
            var n = Yf(e);
            return n ? (o(e, n), void a(e, M)) : void a(e, function(n, r) {
                return n ? Qt(t, i) : void o(e, r) }) }

        function o(n, e) { Re(t, El(e, n)), he(t, "click", "[data-id]", function(t, e) { Xf(n, e.dataset.id), "book" == Ct().from ? pp(gf(n)) : $n() }), zv(function() { c && Dv.onLine ? c.then(function(e) { $l(t, n, e.items || [], e.entire) }) : $l(t, n, []) }, 0) }

        function a(t, e) { ts(t, 0, n, function(n) {
                var i = n.item;
                Vf(t, i.toc), e(null, i.toc) }, e.bind("", !0)) }
        var c;
        return xn("\u76ee\u5f55"), i() }

    function $l(t, n, e, i) { Hv.log("toc__setChapterState", e), m(R("[data-id]", t), function(t) {
            var r = t.dataset.id;
            ni(t, function() {
                (i || -1 != e.indexOf(+r)) && W(t, "fiction-toc__item_paid"), Wd(n, r, function(n) { n && W(t, "fiction-toc__item_download") }, M) }) }) }

    function Ol(t, n, e) { e == jv.state.chapter_id && (jr(t).scrollTop = t.offsetTop, W(t, "fiction-toc__item_cur")) }

    function Sl(t) {
        var n = Yf(t),
            e = Uf(t);
        return n && e ? x(n, function(t) {
            return t.chapter_id == e }) : void 0 }

    function El(t, n) {
        for (var e, i = '<ul class="fiction-toc">', r = t, o = -1, a = r.length - 1; a > o;) e = r[++o], i += '<li class="fiction-toc__item ', e.free && (i += "fiction-toc__item_free"), i += '" id="' + Ve(Ol, n, e.chapter_id) + '" data-id="' + e.chapter_id + '"><p>' + e.title + "</p></li>";
        return i += "</ul>" }

    function Ml(t) { xn("\u53d1\u798f\u5229\xb7\u9886\u4e66\u5e01"), Re(t, Hl()) }

    function Pl(t) { Qc("0,2", 1, function(n) {
            var e = { coins: 0, chapters: 0 },
                i = n.data || [];
            m(i, function(t) { 0 == t.type ? e.chapters += t.total : 2 == t.type && (e.coins += t.total) }), Ne(t).set(e) }) }

    function Al(t) {
        function n(t, n) {
            var e = kr() ? "/task/v2/anonymous/list" : "/task/v2/user/list";
            ge(t, n, e) }
        var e = [{ task_id: "-1", type: 0, coins: 0, icon: "http://image.read.duokan.com/mfsv2/download/fdsc3/p017rdZTB65K/pDJrF2XCYRGKRP.png", name: "\u6bcf\u65e5\u7b7e\u5230", desc: "\u6bcf\u5929\u7b7e\u5230\u90fd\u6709\u5956\uff0c\u8fde\u7eed7\u5929\u62bd\u5927\u5956\uff01" }];
        Fe(t, Yl(e)), n(function(n) { ze(t, Yl(n.data || []), !0) }) }

    function Ll(t) {
        function n(n) {
            function e(t) {
                return T(t, function(t) {
                    var n = t.fee,
                        e = t.reward,
                        i = c("{0}\u5143\u5145\u503c{1}", n / 100, e ? "\u793c\u5305" : ""),
                        r = e ? c("\u5355\u6b21\u5145\u503c{0}\u5143\u989d\u5916\u83b7\u589e{1}\u4e66\u5e01", n / 100, e) : c("\u5145\u503c{0}\u5143\u83b7\u5f97{1}\u4e66\u5e01", n / 100, n);
                    return o({ type: 11, coins: e, desc: r, icon: "http://image.read.duokan.com/mfsv2/download/s010/p01A6KoaXKfp/G6lr8GUkpcJIn1.png", name: i, tag: e ? "\u8d85\u503c" : "", value: n }, t) }) }
            ze(t, Yl(e(n)), !0) }

        function e(t) {
            var n = [5, 10, 20, 50, 100].map(function(t) {
                return { fee: 100 * t, reward: 0, code: "CHARGE" } });
            return kr() ? t(n) : void es(function(e) {
                var i = e.data || n;
                k(i, function(t, n) {
                    return t.fee - n.fee }), t(i) }, t.bind("", n)) }
        e(n) }

    function Nl(t) {
        return 0 == t ? Bl : 1 == t ? jl : 11 == t ? Rl : void 0 }

    function Bl(t, n) {
        var e = Ne(t),
            i = {};
        return i.buttonText = function() {
            return "\u7b7e\u5230" }, i.exec = function() { pp(yf()) }, e.set(i) }

    function jl(t, n) {
        var e = Ne(t),
            i = {};
        return i.buttonText = function() {
            return "\u9886\u53d6" }, i.exec = function() { yr() || Dl(n.task_id, br) }, e.set(i) }

    function Rl(t, n) {
        function e() {
            return "\u5145\u503c" }

        function i() {
            if (!yr()) {
                var t = n;
                Vs(function(n, e) { n || (Fs(e), Ms(M, M, t.fee, t.code)) }) } }
        var r = Ne(t);
        r.set({ buttonText: e, exec: i }) }

    function Dl(t, e, i) {
        function r(t, e, i, r) { bt("/task/v2/user/claim", { type: "POST", data: o({ task_id: i, task_type: r }, we()), success: xe.bind(n, t, e), error: e }) }
        r(function(t) { tl(t.data, !1, e) }, n, t, i) }

    function Hl() {
        var t = '<div class="task-page">';
        return kr() || (t += '<div class="user-center__banner" style="background: #f3eae0;"><ul class="u-list task-list">' + Fl() + "</ul></div>"), t += '<ul class="u-list task-list"><div id="' + Ve(Al) + '"></div><div id="' + Ve(Ll) + '"></div><p class="explain">1\u5143=100\u4e66\u5e01\uff0c\u5145\u503c\u4efb\u52a1\u8d60\u9001\u7684\u4e66\u5e01\u534a\u5e74\u540e\u5931\u6548\u3002</p>', -1 == Rv.hash.indexOf("type=1") && Lv && (t += '<a class="logout-button u-btn2" id="' + Ke(Yn) + '">\u9000\u51fa\u767b\u5f55</a>'), t += "</ul></div>" }

    function Fl() {
        var t = '<li id="' + Ve(Pl) + '" class="task-card -asset"><section class="icon"><img src="http://www.duokan.com/hs/static/images/avatar.png"></section>';
        return Lv || (t += '<section class="other"><p class="button" id="' + Ke(zn) + '">\u767b\u5f55</p></section>'), t += '<section class="info"><h3 class="title">' + zl() + '\u60a8\u73b0\u5728\u62e5\u6709</h3><p class="summary"><em class="user-center__asset user-center__asset_coin" vp-bind="$root.coins">...</em>\u4e66\u5e01<em class="user-center__asset user-center__asset_chapter" vp-bind="$root.chapters">...</em>\u7ae0\u8282\u5238</p></section></li>' }

    function zl() {
        var t = "";
        return Pv.user_id ? t = Pv.user_id : Pv.device_hash && (t = "\u6e38\u5ba2" + Pv.device_hash.substr(0, 10)), t ? t + ", " : "" }

    function Yl(t) {
        for (var n, e = "", i = t, r = -1, o = i.length - 1; o > r;) n = i[++r], e += '<li><div class="task-card" id="' + Ve(Nl(n.type), n) + '" vp-click="$root.exec()">', n.tag && (e += '<em class="u-tagLT">' + n.tag + "</em>"), e += '<div class="icon"><img src="' + n.icon + '"></div><section class="other"><p class="button" vp-bind="$root.buttonText()">\u8bf7\u767b\u5f55</p></section><section class="info"><h3 class="title">' + n.name, n.coins && (e += '<em class="coin">\u9001' + n.coins + "\u4e66\u5e01</em>"), e += '</h3><p class="summary">' + n.desc + "</p></section></div></li>";
        return e }

    function Vl(t, e) {
        function i() { ft(t, Vt()), Re(t, Ul(e, o, r, a)) }

        function r(e, r) {
            function o(t) {
                var r = { onBefore: function() { Pu("search_" + t) }, onload: function() { Au() }, emptyTpl: Gl, error: Qt.bind(n, e, i) };
                return ri(e, Wl.bind(this, t), ki, r) }
            s = j("input", t), r && o(r), F(s, "keypress", function(t) { 13 == t.keyCode && Y(s, "search", s.value) }), F(s, "search", function(t) {
                var n = t.data.replace("click__", ""),
                    e = 0 == t.data.indexOf("click__");
                o(n), ci({ search: n, click: +e }) }) }

        function o(t) { F(t, "click", function() { Y(s, "search", s.value) }) }

        function a(t) { Kl(function(n) {
                var e = n.ads,
                    i = T(e, function(t) {
                        return t.ad_name });
                Re(t, Xl(i, c)) }) }

        function c(t, n) { F(t, "click", function() { s.value = n, Y(s, "search", "click__" + n) }) }
        var s;
        return i() }

    function Wl(t, e, i, r, o) {
        var a = { start: e, count: i, s: t, source: "2,5" };
        bt("/store/v0/lib/query/onebox", { data: a, success: xe.bind(n, r, o), error: o }) }

    function Kl(t, e) {
        var i = { key: "df_search_tags", a: 1 };
        bt("/store/v0/ad", { data: i, success: xe.bind(n, t, e), error: e }) }

    function Ul(t, n, e, i) {
        var r = '<div class="search"><div class="top"><a href="javascript:history.back()" class="top__back"></a><div id="search-input" class="search-input"><b class="search-input__mi"></b><input type="text" value="' + l(t || "") + '" placeholder="\u8f93\u5165\u4e66\u540d/\u4f5c\u8005/\u5173\u952e\u5b57"><div class="search-input__btn" id="' + Ve(n, t) + '">\u641c\u7d22</div></div></div><div id="' + Ve(e, t) + '" class="top__bd">';
        return t || (r += '<div id="' + Ve(i) + '"></div>'), r += "</div></div>" }

    function Xl(t, n) {
        for (var e, i = '<ul class="m-tag -color search-tag">', r = t, o = -1, a = r.length - 1; a > o;) e = r[++o], i += '<li class="u-tag" id="' + Ve(n, e) + '">' + e + "</li>";
        return i += "</ul>" }

    function Gl() {
        return '<p class="u-tip">\u6ca1\u6709\u76f8\u5e94\u7684\u641c\u7d22\u7ed3\u679c</p>' }

    function Jl() {
        function n() {
            var t = Ct().page; "user_center" == t || "checkin" == t || "reader" == t ? ot(j(e)) : at(j(e)) }
        var e = ".float-reminder";
        j(e) || (He(Bv.body, Zu()), Lr(j(e)), F(t, "popstate", n), n()) }

    function ql(t, n) {
        for (var e, i = '<div class="checkin-area"><p class="ttl">\u6bcf\u5929\u7b7e\u5230\u9886\u798f\u5229\uff0c\u7b7e\u6ee1\u4e03\u5929\u62bd\u5927\u5956</p><ul class="checkin-list">', r = t.status, o = -1, a = r.length - 1; a > o;) { e = r[++o];
            var c = Zl(o + 1, e, t.today);
            i += '<li><div class="u-checkin ' + c[0] + '"><div class="day">' + (o + 1) + '\u5929</div><div class="state"><img src="' + c[1] + '"/></div><div class="tag">\u4eca\u65e5</div></div></li>' }
        return i += '<li class="placeholder u-checkin"></li></ul><div class="btn u-btn" id="' + Ve(n, t.status[t.today - 1], t.lottery) + '">\u7b7e\u5230\u62bd\u5956</div></div></div>' }

    function Zl(t, n, e) {
        var i = ["http://image.read.duokan.com/mfsv2/download/s010/p01YnhZQP8Is/3TzJm787FtwKXE.png", "http://image.read.duokan.com/mfsv2/download/s010/p01kqmaVrRIL/rXiIPODNbB9Lvs.png", "http://image.read.duokan.com/mfsv2/download/s010/p017BoKoHvQy/kMsJX0kUu4MhIx.png", "http://image.read.duokan.com/mfsv2/download/s010/p01QetVMMiNa/Sb46X6bx2udXjS.png"],
            r = ["", "-used", "-omit", "-gift"];
        return e > t && 0 === n && (n = 2), 7 == t && 0 === n && (n = 3), [r[n] + (t == e ? " -crt" : ""), i[n]] }

    function Ql(t, n) {
        for (var e, i = '<div class="checkin-awards"><div class="ttl">\u606d\u559c\u60a8\u83b7\u5f97\u4ee5\u4e0b\u5956\u54c1</div><div class="info"><div class="u-awards">', r = t, o = -1, a = r.length - 1; a > o;) e = r[++o], i += '<div class="award"><img src="' + e.image + '"><p>' + e.name + " * " + e.value + "</p></div>", t.length - 1 > o && (i += '<div class="plus">+</div>');
        return i += "</div></div>", i += n ? '<div class="btn u-btn -highlight" vp-click="$root.lottery();">\u62bd\u5927\u5956</div>' : '<div class="btn u-btn" vp-click="$root.close();">\u786e\u5b9a</div>', i += "</div>" }

    function td(t) {
        function n() { yr() || (ft(t, Vt()), nd(e, M)) }

        function e(n) {
            var e = n.data;
            Re(t, ql(e, i)) }

        function i(t, n, i) {
            return 1 == i ? (ft(t, "\u62bd\u5927\u5956"), W(t, "-highlight"), void F(t, "click", o)) : 1 == n ? (W(t, "-disable"), void ft(t, "\u4eca\u65e5\u5df2\u7b7e\u5230")) : void F(t, "click", function() { ed(function(t) { e(t);
                    var n = t.data || {};
                    r(n.gift, n.lottery) }, M) }) }

        function r(t, n) {
            var e = Ql(t, n),
                i = zi(e, { lottery: function() { o(), i.close() } }) }

        function o() { id(function(t) {
                var n = t.data;
                r(n), nd(e, M) }, M) }
        return xn("\u7b7e\u5230"), n() }

    function nd(t, n) {
        var e = {};
        return o(e, we()), bt("/checkin/v0/status", { data: e, type: "POST", success: xe.bind(this, t, n), error: n }) }

    function ed(t, n) {
        var e = {};
        return o(e, we()), bt("/checkin/v0/checkin", { data: e, type: "POST", success: xe.bind(this, t, n), error: n }) }

    function id(t, n) {
        var e = { level: 1 };
        return o(e, we()), bt("/checkin/v0/lottery", { data: e, type: "POST", success: xe.bind(this, t, n), error: n }) }

    function rd(t, n, e) {
        var i, r, o, a;
        e = e || 0, Re(t, Gd(n)), i = j(".reader", t), r = j(".reader__hd", i), o = j(".reader__ft", i), a = j(".reader__bd", i), pd(i), hd(i), md(a), F(i, "click", function(t) {
            var e = t.pageY / i.offsetHeight,
                r = t.pageX / i.offsetWidth,
                o = t.target;
            if (V(o, "reader__ft-font")) U(i, "reader_op-font");
            else if (V(o, "reader__ft-night")) _d(i, "1" != i.dataset.night);
            else if (V(o, "reader__font-large")) gd(a, parseInt(a.style.fontSize) + 1);
            else if (V(o, "reader__font-small")) gd(a, parseInt(a.style.fontSize) - 1);
            else if (D(o, ".reader__font-bg > a")) vd(i, o.dataset.bg);
            else if (V(o, "reader__prev-chapter")) {
                if (0 > +jv.state.chapter_id - 1) return bd("\u7b2c\u4e00\u7ae0", "\u5230\u9876\u5566\uff0c\u4e0a\u9762\u6ca1\u6709\u7ae0\u8282\u5566~");
                ld(a, n, +jv.state.chapter_id - 1) } else if (V(o, "reader__next-chapter")) {
                var c = Hf(n) ? Af(n).chapter_count : 1 / 0;
                if (+jv.state.chapter_id + 1 >= c) return bd("\u6700\u540e\u4e00\u7ae0", "\u5230\u5e95\u5566\uff0c\u540e\u9762\u6ca1\u6709\u7ae0\u8282\u5566~");
                ld(a, n, +jv.state.chapter_id + 1) } else if (V(o, "reader__toc")) pp(mf("fiction", n, { chapter_id: jv.state.chapter_id }));
            else if (V(o, "reader__usercenter")) pp(bf(1) + "&back=" + Uv(Rv.hash + "&back=home"));
            else if (V(o, "reader__pay")) {
                if (yr()) return;
                var s = jv.state.chapter_id,
                    u = o.dataset.price,
                    l = o.dataset.method || "coin";
                u = u && +u, sd(n, s, u, l, function(t) { t || ld(a, n, s) }) } else r > .2 & .8 > r && e > .3 & .7 > e && (K(i, "reader_op-font"), U(i, "reader_op"), K(j(".reader__more", i), "reader__more_on")) }), F(i, "page.change", function(t) {
            var e = t.data;
            ld(a, n, e) }), Hf(n) ? Bf(n, M) : Nf(n, M), jh = Ct().pay, ud(n), F(a, "DOMNodeInserted", function t() { j("[data-chapter_id]", a) && (od(a, n), z(a, "DOMNodeInserted", t)) }), ad(a, n), ld(a, n, e) }

    function od(n, e) {+Gf(e) && (n.style.paddingBottom = t.innerHeight + "px", n.scrollTop = Gf(e), zv(function() { n.style.paddingBottom = "" }, 300)) }

    function ad(t, n) {
        function e() {
            var n = R("[data-chapter_id]", t);
            return x(n, st) }

        function i() {
            var t = e();
            if (t) {
                var i = -t.getBoundingClientRect().top + 15;
                Jf(n, i), r() } }

        function r() {
            var t = e();
            if (t) {
                var i = t.dataset.chapter_id;
                o(n, i) } }

        function o(n, e) { e !== Ct().chapter_id && (Ot({ page: "reader", id: n, chapter_id: e, from: Ct().from, _t: Ct()._t }), Xf(n, e), Y(H(t, ".reader"), "reader:pagechange")) }
        F(t, "scroll", i), F(t, "DOMNodeInserted", r) }

    function cd() {
        var t = jh;
        return jh = n, t }

    function sd(t, e, i, r, o) {
        function a() { Kf(t, Bh), o(null) }

        function c() { s(), o(null) }

        function s() { Hv.log("do recoverAutoPay", l), Bh = l }
        var u = { id: t, chapterId: e, price: i, payMethod: r };
        if ("batch" != r) return Qs(a, M, u);
        var l = Bh;
        Bh = n, Qs(c, s, u) }

    function ud(t) {
        var n = Ct().autopay;
        return $e(n) ? Bh = !0 : (Bh = !!+n, void Kf(t, Bh)) }

    function ld(t, n, e) {
        function i() { ap("reading", "change", "chapter", 1) }

        function r(t, i, r, o) { Yd(n, e, function(n) { r(n.result || t > 12 ? { items: [], more: !1, finish: !0 } : { items: [n], more: !0 }) }, o) }

        function o(t) { t.finish || (i(), e += 1, a(n, e, M)) }

        function a(t, n, e) {
            function i() { Yd(t, n, function(t) { e(t.result, t) }) }
            Hv.debug("preload", t, n), Yd(t, n, function(r) {
                return r.result && 90001 == r.result && Wf(t) ? void c(t, r.detail.price, n, function(t) {
                    return t ? e(1) : void i() }) : e(r.result, r) }) }

        function c(t, n, e, i) {
            var r = function() {
                return i(1), !0 };
            ps(function(o) { Hv.debug("autopay query", o);
                var a = Wf(t);
                return o.chapter ? qc(i.bind("", null), r, t, [e], a) : o.balance >= n ? Jc(i.bind("", null), r, t, n, [e], null, a) : void i(1) }) }

        function s(n, e, r, o) {
            return ci({ chapter_state: +e.result, chapterId: o, id: r }), i(), -1 == e.result ? (ft(n, Vt()), Qt(n, ld.bind(null, t, r, o))) : 1002 == e.result || 90001 == e.result ? (dd(n, e.id, e.chapter_id, e.detail), cd() ? c(r, e.detail.price, o, function(n) { n || ld(t, r, o) }) : void(Wf(r) && a(r, o, function(n, e) { n || ld(t, r, o) }))) : 1 == e.result ? (ft(H(n, ".reader__bd"), ""), bd("\u7ae0\u8282\u4e0d\u5b58\u5728", "\u4f5c\u8005\u53ef\u80fd\u8fd8\u6ca1\u6709\u66f4\u65b0\u5462\uff0c\u8981\u4e0d\u5237\u65b0\u8bd5\u8bd5~")) : void 0 }
        e = +e, Re(t, Vt()), Yd(n, e, function(i) {
            return i.result ? s(t, i, n, e) : void ri(t, r, rf, { limit: 1, onload: o, completeTpl: Qd }) }) }

    function dd(t, n, e, i) {
        function r(t) { Di(function(n) {
                return kr() ? t(null, n, null) : void ps(function(e) { t(null, n, e) }) }) }
        r(function(r, o, a) { Hv.log(a), Re(t, tf(n, e, i, o, a)) }) }

    function fd(t, e, i) {
        function r(t) {
            return i.get("progress") ? void 0 : (i.set({ progress: [] }), Hf(t) || Nf(t, M), Rd(t, n, function(t, n, e) {
                return -2 == t ? (i.set({ progress: null }), Cd("\u7a0d\u540e\u4e0b\u8f7d", "\u6709\u4efb\u52a1\u6b63\u5728\u4e0b\u8f7d\u4e86\uff0c\u7b49\u5b83\u4e0b\u5b8c\u518d\u4e0b\u5427~")) : (i.set({ progress: [n, e] }), void(n + 1 == e && (i.set({ progress: null }), Cd("\u4e0b\u8f7d\u5b8c\u6210", "\u5df2\u4e0b\u8f7d\u6240\u6709\u53ef\u8bfb\u7ae0\u8282\uff0c\u6ca1\u7f51\u4e5f\u80fd\u8bfb\u5566~")))) })) }

        function o(t) {
            var n = i.get("progress");
            return n ? n[0] ? n[0] + 1 + "/" + n[1] : "\u4e0b\u8f7d\u4e2d" : "\u4e0b\u8f7d" }
        var a = !!i;
        i = i || Ne(t), i.setOnly({ download: P(r.bind(this, e), 200), downloadText: o.bind(this, e) }), !a && i.set() }

    function pd(t) { vd(t, Gv.readerBg || 1) }

    function vd(t, n) { Gv.readerBg = n, t.dataset.bg = n }

    function hd(n) {
        var e = !!If(s_);
        try { e = t.miui.isNightModeEnabled(), Sf(s_, e) } catch (t) {}
        _d(n, e) }

    function _d(n, e) { n.dataset.night = +e, Sf(s_, e);
        try { t.miui.isNightModeEnabled() != !!e && t.miui.setNightModeEnabled(!!e) } catch (t) {} }

    function md(t) { t.style.fontSize = (Gv.readerFontSize || 17) + "px" }

    function gd(t, n) { n >= 11 && 21 >= n && (Gv.readerFontSize = n, t.style.fontSize = n + "px") }

    function bd(t, n) { Cd(t, n) }

    function kd(t, n) {
        var e = je("reader__autopay", t);
        e.update({ on: Wf(n), toggle: function() { Kf(n, !Wf(n)), e.update({ on: Wf(n) }) } }) }

    function yd(t) {
        var n = Ne(t);
        n.set({ on: Bh, toggle: function() { Bh = !Bh, n.set({ on: Bh }) } }) }

    function wd(t, n) {
        var e = Ne(t).set({ toggle: function() { Af(n) && Re(t, qd(n)), e.set({ on: !e.get("on") }) } }) }

    function xd(t, n) { Ne(t).set({ go: function() {
                var t = Ct().from;
                return "book" == t ? $n() : void pp(_f(0, n, 2)) } }) }

    function Td(t) {
        function n() {
            var t = Ct(),
                n = Af(t.id);
            e.set({ index: +t.chapter_id + 1, total: n ? n.chapter_count : 0 }) }
        var e = Ee();
        e.html(t, function() {
            return e.get("index") + "/" + (e.get("total") || "...") }), n(), F(H(t, ".reader"), "reader:pagechange", n) }

    function Cd(t, n, e) { Vi({ singleButton: !0, title: t, prompt: n, confirm: e || M }) }

    function Id(t, n, e) { ot(t), Ld(n, e);
        var i = function(t) {
                return Hf(n) ? t(null, Af(n)) : void Nf(n, function(n) { t(null, n) }) },
            r = Pe(Od, [n, e]);
        Le(i, $d, Ae(r))(function(n) { n || Ed(t) }), he(t, "click", ".reader__close", function(n) { it(t), n.stopPropagation() }) }

    function $d(t, n) { t(!n.has_ad) }

    function Od(t, n, e) {
        return Hv.log("chapterId ", e >= 10), e >= 10 }

    function Sd(t) { Rh || (Rh = me(Pd)), Rh(t, u_) }

    function Ed(t) {
        var n = Me(Md, [t]);
        Le(Sd, Ae(n))(function(t) { t && Hv.error(t) }) }

    function Md(n) {
        var e, i;
        try { e = t.miui.getImeiMD5() } catch (t) {}
        try { i = t.miui.getDeviceInfo() } catch (t) { i = {} }
        if (e || pn()) { n.style.minHeight = "84px", at(n);
            var r = { imei: Pv.device_hash, packageName: "com.android.browser", version: "1.1.0", tagId: "1.13.c.4", adContext: {}, context: { fictionId: Ct().id }, connectionType: i.nt, serviceProvider: i.snt, styleUrl: "", appKey: "BROWSER_FEED" };
            t.addEventListener("message", function(t) { "http://api.ad.xiaomi.com" == t.origin && t.data && "showError" == t.data.event && ot(n) }), miADOutside("100%", "84px", r, n.id) } }

    function Pd(t, n, e) {
        function i() { s.removeChild(c) }
        var r, c = Bv.createElement("script"),
            s = Bv.head,
            u = !1;
        e = o({}, e, !0), a(e, sh), e.timeout > 0 && (r = zv(function() { u = !0, t(!0) }, e.timeout)), n = p(e.data, n), F(c, "error", function() { u || (Yv(r), t(!0)), i() }), F(c, "load", function() { u || (Yv(r), t()), i() }), c.src = n, s.appendChild(c) }

    function Ad() {
        return Dh = Dh || {} }

    function Ld(t, n) {
        var e = Ad(),
            i = e[t] = e[t] || [];
        i.push(n) }

    function Nd(t, n) {
        return +Ie(n, Uf(t) || 0) }

    function Bd(t, n) {
        return t }

    function jd() {
        return Hh }

    function Rd(t, n, e) { Hv.log("download__download", t, n), n = Nd(t, n);
        var i, r = Bd(t, n),
            a = Hh;
        return a && a.uuid != r ? e(-2) : (a || (Hh = a = o({ uuid: r }, xh), i = !0), a.on("change", e), void(i && Dd(t, n, function(t, n, e) { a.emit("change", t, n, e), n == e - 1 && (Hh = null) }))) }

    function Dd(t, n, e) {
        function i(t, n) {
            return w(t, function(t) {
                return t.c >= n }) }
        Hv.log("reader__download", t, n), Hd(t, function(r, o) {
            if (r || 0 != o.result) return e(!0);
            var a = i(o.data, n);
            Fd(t, a, e) }) }

    function Hd(t, n) { bt("/drm/v0/fiction/multi_link", { data: { fiction_id: t, format: "jsonp" }, success: function(t) { n(null, t) }, error: n.bind(null, -9) }) }

    function Fd(t, n, e) {
        function i() {
            var i = n[a].c;
            Wd(t, i, function() { e(null, a, c), o() }, function() { r(t, i, n[a].url) }) }

        function r(t, i, r) { zd(t, i, n[a].url, function() { e(null, a, c), o() }, function() { e(!0, a, c), o() }) }

        function o() { a++, c > a && i() }
        var a = 0,
            c = n.length;
        return c ? void i() : e(null, -1, c) }

    function zd(t, n, e, i, r) { kt(e, { callback: "duokan_fiction_chapter", success: function(e) { e = JSON.parse(h(e)), Kd(t, n, e), e.id = t, e.chapter_id = n, i(e) }, error: r }) }

    function Yd(t, n, e, i) {
        function r(i) { i.id = t, i.chapter_id = n, e(i) }
        Wd(t, n, r, function() { bt("/drm/v0/fiction/link", { data: { fiction_id: t, chapter_id: n, format: "jsonp" }, success: function(o) {
                    if (1002 == o.result || 90001 == o.result) return ts(t, n, 1, function(i) { o.id = t, o.chapter_id = n;
                        try { o.detail = i.item.toc[0] } catch (t) { Hv.error("reader error 1", t) }
                        return e(o) });
                    if (1 == o.result && !isNaN(+n)) return e(o);
                    if (jd()) return Cd("\u6b63\u5728\u4e0b\u8f7d", "\u6709\u4efb\u52a1\u6b63\u5728\u4e0b\u8f7d\u4e86\uff0c\u5148\u770b\u672c\u5730\u7ae0\u8282\u5427~", $n);
                    if (0 == o.result) return zd(t, n, o.url, r, i);
                    if (1003 === o.result) return Cd("\u767b\u5f55\u8fc7\u671f", "\u8bf7\u5237\u65b0\u9875\u9762\u540e\u91cd\u65b0\u767b\u5f55");
                    var a = "\u8bf7\u6c42\u7ae0\u8282\u4fe1\u606f\u5931\u8d25(" + t + ":" + n + ":" + o.result + ")";
                    xr(a), Hv.error(a) }, error: e.bind(null, { result: -1 }) }) }) }

    function Vd(n, e) {
        var i;
        return e = e || M, Fh ? void n(Fh) : t.indexedDB ? (i = indexedDB.open(l_, 1), i.onerror = e, i.onsuccess = function(t) { Hv.log("onsuccess"), Fh = i.result, n(Fh) }, void(i.onupgradeneeded = function(t) { Hv.log("onupgradeneeded");
            var n = t.target.result;
            n.createObjectStore(d_) })) : e() }

    function Wd(t, n, e, i) { Hv.log("reader__dbRead", t, n), Vd(function(r) {
            var o = r.transaction([d_]).objectStore(d_).get(t + "_" + n);
            o.onsuccess = function() { o.result ? e(o.result) : i() } }, i) }

    function Kd(t, n, e) { Hv.log("reader__dbWrite", t, n, e), Vd(function(i) { i.transaction([d_], "readwrite").objectStore(d_).put(e, t + "_" + n) }) }

    function Ud(t, n) { Hv.log("reader__dbRemove", t, n), Vd(function(e) { e.transaction([d_], "readwrite").objectStore(d_).delete(t + "_" + n) }) }

    function Xd(t) { Hv.log("reader__dbRemoveAll", t);
        var n = IDBKeyRange.bound(t + "_0", t + "_9");
        Vd(function(t) {
            var e = t.transaction([d_], "readwrite").objectStore(d_).openCursor(n);
            e.onsuccess = function(t) {
                var n = t.target.result;
                if (n) {
                    var e = n.key.split("_");
                    Ud(e[0], e[1]), n.continue() } } }) }

    function Gd(t) {
        return '<div class="reader"><div class="reader__mask"></div><div class="reader__hd"><a class="reader__back" id="' + Ve(ip) + '"></a>\u8fd4\u56de' + Jd(t) + '</div><div class="reader__ft"><div class="reader__ft-bar"><a href="javascript:" class="reader__prev-chapter">\u4e0a\u4e00\u7ae0</a><a href="javascript:"  id="' + Ve(Td) + '"></a><a href="javascript:" class="reader__next-chapter">\u4e0b\u4e00\u7ae0</a></div><a href="javascript:" class="reader__ft-toc reader__toc"></a><a href="javascript:" class="reader__ft-font"></a><a href="javascript:" class="reader__ft-night"></a><a href="javascript:" class="reader__ft-download" id="' + Ve(fd, t) + '" vp-click="$root.download()" vp-bind="$root.downloadText()"></a></div><div class="reader__font"><div class="reader__font-size"><span>\u5b57\u53f7</span><a href="javascript:" class="reader__font-large">\u5927</a><a href="javascript:" class="reader__font-small">\u5c0f</a></div><div class="reader__font-bg"><span>\u80cc\u666f</span><a href="javascript:" data-bg="1"></a><a href="javascript:" data-bg="2"></a><a href="javascript:" data-bg="3"></a><a href="javascript:" data-bg="4"></a><a href="javascript:" data-bg="5"></a><a href="javascript:" data-bg="0"></a></div></div><div class="reader__bd"><div class="reader__loading"></div></div></div>' }

    function Jd(t) {
        return '<a class="reader__more" vp-click="$root.toggle()" vp-class="{\'reader__more_on\' : $root.on}" id="' + Ve(wd, t) + '"></a>' }

    function qd(t) {
        var n = "",
            e = Af(t);
        return n += '<div class="reader-popup"><div class="reader-popup__bd"><div class="reader-book" vp-ignore id="' + Ve(xd, t) + '" vp-click="$root.go();"><img class="reader-book__cover" src="' + e.cover + '!s"><h3 class="reader-book__ttl">' + e.title + '</h3><p class="reader-book__author">' + e.authors + '</p></div><div class="reader__autopay-check" vp-ignore  id="' + Ve(kd, t) + '" vp-click="$root.toggle();"><em class="reader-checkbox" vp-class="{\'reader-checkbox_on\' : $root.on}"></em></div></div></div>' }

    function Zd(t) {
        for (var n, e = '<div class="reader__content"><h1>' + l(t.t) + "</h1>", i = t.p, r = -1, o = i.length - 1; o > r;) n = i[++r], e += "<p>" + l(n) + "</p>";
        return e += '</div><div class="reader__ad" id="' + Ve(Id, Ct().id, t.chapter_id) + '"><div class="reader__close"></div></div>' }

    function Qd() {
        return '<div class="reader__chapter-btn"><a href="javascript:" class="reader__prev-chapter">\u4e0a\u4e00\u7ae0</a><a href="javascript:" class="reader__toc">\u76ee\u5f55</a><a href="javascript:" class="reader__next-chapter">\u4e0b\u4e00\u7ae0</a></div>' }

    function tf(t, n, e, i, r) {
        var o = '<div class="reader-pay" data-chapter_id="' + n + '"><h2 class="reader-pay__ttl">' + e.title + '</h2><div class="reader-pay__next">\u8d2d\u4e70\u540e\u7ee7\u7eed\u9605\u8bfb\u672c\u7ae0\u5185\u5bb9</div><p>\u4ef7\u683c\uff1a' + mi(e.price) + "</p>";
        return r && (o += "<p>\u4f59\u989d\uff1a" + r.balance + "\u4e66\u5e01 ", r.chapter && (o += "( " + r.chapter + "\u7ae0\u8282\u5238 )"), o += "</p>"), o += nf(t) + ef(t, e.price, r) + '<a class="reader__pay reader-pay__batch-pay" data-method="batch">\u6279\u91cf\u8d2d\u4e70\u7ae0\u8282</a>', o += i ? '<a class="reader__usercenter reader-pay__batch-pay">\u4e66\u5e01\u8d85\u503c\u5145\u8fd4</a>' : '<a class="reader__usercenter reader-pay__batch-pay">\u514d\u8d39\u9886\u4e66\u5e01</a>', o += Qd() + "</div>" }

    function nf(t) {
        var n = '<div class="auto-pay" id="' + Ve(yd) + '" vp-click="$root.toggle();" vp-class="{\'auto-pay_on\' : $root.on}"><em class="auto-pay__checkbox"></em>\u81ea\u52a8\u8d2d\u4e70\u4e0b\u4e00\u7ae0</div>';
        return n }

    function ef(t, n, e) {
        var i = "",
            r = e && e.chapter >= 1;
        return i += '<button id="' + Ve(kd, t, r) + '" class="reader__pay reader-pay__btn" data-price="' + n + '" data-method="' + (r ? "coupon" : "coin") + '">', i += r ? "\u5151\u6362 (1\u7ae0\u8282\u5238)" : !e || e.balance > n ? "\u7acb\u5373\u8d2d\u4e70" : "\u5145\u503c\u5e76\u8d2d\u4e70", i += "</button><br>" }

    function rf(t, n) {
        for (var e, i = '<ul class="reader__chapter">', r = t, o = -1, a = r.length - 1; a > o;) e = r[++o], i += '<li data-track="' + ((n || 0) + o) + '" data-chapter_id="' + e.chapter_id + '">' + Zd(e) + "</li>";
        return i += "</ul>" }

    function of() {
        return "#page=cate_list" }

    function af() {
        return "#page=rank_list" }

    function cf(t, n) {
        return "#page=cate&type=" + t + "&id=" + n }

    function sf(t, n) {
        return "#page=tag&type=" + t + "&id=" + n }

    function uf(t, n) {
        return "#page=author&type=" + t + "&id=" + n }

    function lf(t, n) {
        return "#page=topic&type=" + t + "&id=" + n }

    function df(t) {
        return "#page=super_topic&id=" + t }

    function ff(t) {
        return xf({ page: "topic_list", type: t }) }

    function pf(t, n, e) {
        return xf({ page: "rank", id: n, type: t, tabs: e }) }

    function vf(t, n) {
        return xf({ page: "channel", id: t, type: n }) }

    function hf(t) {
        return xf({ page: "channel", id: "lastest", type: t }) }

    function _f(t, n, e) {
        return xf({ page: "book", id: t, source_id: n, source: e }) }

    function mf(t, n, e) {
        return xf(o({ page: "catalog", id: n, type: t }, e)) }

    function gf(t, n) {
        return xf({ page: "reader", id: t, chapter_id: n }) }

    function bf(t) {
        return xf({ page: "user_center", type: t }) }

    function kf() {
        return xf({ page: "search" }) }

    function yf() {
        return xf({ page: "checkin" }) }

    function wf() {
        return "/hs/static/_track_" }

    function xf(t) {
        return "#" + p(t) }

    function Tf(t) {
        return /\/rank$/.test(t) ? af() : /\/cate(?!\/)/.test(t) ? of() : /\/free_fiction/.test(t) ? vf("free", 2) : /\/finished/.test(t) ? vf("finished") : /\/fiction\/category\/(\d+)/.test(t) || /\/cate\/fiction\/(\d+)/.test(t) ? cf("fiction", RegExp.$1) : /\/fiction\/rank\/(\d+)/.test(t) || /\/rank(_list)?\/fiction\/(\d+)/.test(t) ? pf("fiction", n, RegExp.$1) : /\/hs\/book\/(.*?)\?source=(.*?)&source_id=(.*)/.test(t) ? _f(RegExp.$1, RegExp.$3, RegExp.$2) : /\/(?:super|nested)_topic\/(\d+)/.test(t) ? df(RegExp.$1) : /\/fiction_topic\/(\d+)/.test(t) ? lf("fiction", RegExp.$1) : /\/topic\/(.*?)/.test(t) ? lf("store", RegExp.$1) : /redirect\.html/.test(t) ? t + "?" : t }

    function Cf(t) {
        var n, e;
        return n = t.replace(/\?.*$/, function(t) {
            return e = f(t ? t.substr(1) : ""), "" }), n = Tf(n), n + "&" + p(e) }

    function If(t, n) {
        var e, i;
        i = n ? Ef : At;
        try { e = kn(i(t)) } catch (t) { Hv.error("storage__get", t) }
        return e }

    function $f(t, n, e) {
        var i = e ? Mf : Lt;
        return i(t, yn(n)) }

    function Of(t, n) {
        var e = n ? Pf : Nt;
        e(t) }

    function Sf(t, n, e) { n ? $f(t, 1, e) : Of(t, e) }

    function Ef(t) {
        return Jv[t] }

    function Mf(t, n) { Jv[t] = n }

    function Pf(t) { delete Jv[t] }

    function Af(t) {
        return If(v_ + t) }

    function Lf(t, n) {
        return $f(v_ + t, n) }

    function Nf(t, n) { t = +t, Qf(t, function(e) {
            if (!e) return Hv.error("fiction " + t + " is not exist"), n(e, t);
            var i = Ff(),
                r = i.indexOf(t); - 1 !== r && i.splice(r, 1), i.unshift(t), Lf(t, e), zf(i), n(e, t) }) }

    function Bf(t, n) { t = +t;
        var e = Ff(),
            i = e.indexOf(t);
        return -1 === i ? n(1) : void Qf(t, function(e) {
            return e ? (Lf(t, e), void n(0, e)) : n(1) }) }

    function jf(t) { t = +t;
        var n = Ff(),
            e = n.indexOf(t); - 1 !== e && n.splice(e, 1), zf(n), Of(v_ + t), Of(v_ + t + __), Of(v_ + t + m_), Of(v_ + t + g_), Of(v_ + t + b_), Xd(t) }

    function Rf() {
        return T(Ff(), Af) }

    function Df(n) { F(t, "local.books.change", n) }

    function Hf(t) {
        return t = +t, -1 !== I(Ff(), t) }

    function Ff() {
        return If(h_) || [] }

    function zf(n) {
        function e(t, n) {
            return t.length != n.length ? !1 : y(t, function(t, e) {
                return t == n[e] }) }
        e(Ff(), n) || ($f(h_, n), Y(t, "local.books.change", n));

    }

    function Yf(t) {
        return If(v_ + t + __) }

    function Vf(t, n) {
        return Hf(t) ? $f(v_ + t + __, n) : void 0 }

    function Wf(t) {
        return If(v_ + t + b_) }

    function Kf(t, n) {
        return $f(v_ + t + b_, n ? "1" : "") }

    function Uf(t) {
        return qf(m_, t) }

    function Xf(t, n) {
        return Zf(m_, t, n) }

    function Gf(t) {
        return qf(g_, t) }

    function Jf(t, n) {
        return Zf(g_, t, n) }

    function qf(t, n) {
        return Hf(n) ? If(v_ + n + t) : If(v_ + n + t, !0) }

    function Zf(t, n, e) {
        return Hf(n) ? $f(v_ + n + t, e) : $f(v_ + n + t, e, !0) }

    function Qf(t, n) {
        return Xe(k_, { noCache: 1 }).get(t, n) }

    function tp(t, n) {
        for (var e, i = '<section class="pay-card"><div class="ttl">' + t + '</div><ul class="menu">', r = n, o = -1, a = r.length - 1; a > o;) e = r[++o], i += '<li vp-click="$root.select(' + o + ')">' + e + "</li>";
        return i += "</ul></section></div>" }

    function xn(t) {
        if (t) {
            var n = ".top__title";
            zv(function() {
                if (zh) {
                    var e = j(n, zh.$curr);
                    e && Re(e, t) } }, 0) } }

    function Xn(t, n) {
        var e = tp(t.title, t.items),
            i = zi(e, { select: function(t) {
                    return i.close(), n({ index: t }) } }) }

    function Kr(t) {
        function e() { ft(t, Vt()), qi(function(n) {
                (2 == Pv.user_type || 3 == Pv.user_type) && (n.section = [n.section[2], n.section[3]]), 4 == Pv.user_type && (n.section = [n.section[3], n.section[2]]), Re(t, Gr(n)) }, Qt.bind(n, t, e)) }
        return xn("\u5206\u7c7b"), e() }

    function np(t) {
        var n = H(t, ".Swipe>div");
        return n ? !("0s" == Kv(n).webkitTransitionDuration) : !1 }

    function ep(t, n) {
        function e() { r || (Yv(o), z(i, "webkitTransitionEnd", e), n()) }
        if (!np(t)) return n();
        var i = H(t, ".Swipe>div");
        F(i, "webkitTransitionEnd", e);
        var r = !1,
            o = zv(function() { e(), z(i, "webkitTransitionEnd", e), r = !0, Hv.error("dom__onSwipeEnd timeout!") }, 1e3) }

    function ip(t) { F(t, "click", $n) }

    function rp(t) { F(t, "click", function() { Rv.href = Rv.pathname + Rv.search + "#", Rv.reload() }) }

    function xu() {
        return !1 }

    function op() {
        function t() {
            return Rv.pathname + "#" + p(Ct()) }
        _hmt && _hmt.push(["_trackPageview", t()]) }

    function ap(t, n, e, i) { _hmt && _hmt.push(["_trackEvent", t, n, e, i]) }

    function cp(n) {
        function e() { Bv.head.appendChild(i) }
        var i = Bv.createElement("script");
        t._hmt = [
            ["_setAutoPageview", !1]
        ], i.src = "//hm.baidu.com/hm.js?" + n, "complete" == Bv.readyState ? e() : F(t, "load", e) }

    function sp() {
        if (!fp()) {
            if (Lv) return void up();
            if (dp()) return lp(function(t) { t || (up(), br()) }), !0 } }

    function up() {
        return Lt("autoLogin", 1) }

    function lp(n) {
        function e() {
            var t = { login: 1, followup: Mv + "/login-finished.html", source: "wap", display: "mobile" };
            return Mv + "/dk_id/api/xiaomi_web_reg?" + p(t) }
        var i = "_autologin__callback";
        t[i] = function() { n(null), delete t[i] }, miui.loginAccount(e(), i) }

    function dp() {
        return t.miui && miui.loginAccount && miui.isMiAccountLogin() }

    function fp() {
        return !!At("autoLogin") }

    function pp(t, n, e) { xn(n || ""), t = Cf(t), Hv.log(t);
        var i = Ct().page;
        i && (t += "&from=" + i), Rv.href = t }

    function vp() {
        var t = j("#root");
        ft(t, ol());
        var n = j(".Swipe", t),
            e = nn(n, { disableTouch: !0 }),
            i = f(Rv.search.substr(1));
        if (i.fiction_id) return Rv.href = Rv.pathname + "#" + p({ page: "main", tab: 1, fiction_id: i.fiction_id, from: "push" });
        zh = e;
        var r = L(function() { Jl() });
        St(e, function(t, n) {
            var e = n.page || "main"; "main" !== e && "search" !== e && "reader" !== e ? (Re(t, sl()), t = j(".top__bd", t)) : Re(t, Vt()), ep(t, function() {
                (y_[e] || Tp)(t, n) }), r() }), _p() }

    function hp() { Bv.oncontextmenu = function() {
            return !1 }, Bv.onselectstart = function() {
            return !1 } }

    function _p() {
        function t() {
            var t, n, e, i;
            for (t in Gv) n = Gv[t], i = t.match(/ficiton_reader_(\d+)last_chapter/), i && (e = i[1], Nf(e, function(t, n) { Xf(t, n) }.bind("", e, n))) }
        var n = "migrate";
        zv(function() {
            if (!At(n)) try { t(), Lt(n, 1) } catch (t) { Hv.error("_app__migrate", t) } }, 0) }

    function mp() {
        function n() { Y(t, "state.change") }
        Ot = B(Ot, M, n), $t = B($t, M, n), F(t, "load", function() { zv(function() { n(), F(t, "popstate", n) }, 0) }) }

    function gp() {
        function n(t) {
            var n = "browser_full_push";
            return If(n) ? void e.set("add", JSON.stringify(Rf()[0])) : (Sf(n, !0), void e.set("full", JSON.stringify(Rf()))) }
        var e = Hp("https://reader.browser.miui.com", "/#page=message");
        F(t, "local.books.change", n) }

    function bp() {
        function n() { op(), ci(Ct()) }
        cp("a1d10542fc664b658c3ce982b1cf4937"), F(t, "state.change", n) }

    function kp() { F(t, "state.change", function(t) { Sf(w_, "reader" == Ct().page) }) }

    function yp() { Ht(), Ft(3e3, Dt), hp();
        var t = j("#root");
        sn(), gt({ dataType: "json", timeout: 1e4, complete: function(t, n) {
                if ("success" === t && n) {
                    var e;
                    try { e = JSON.parse(n.responseText) } catch (t) {
                        return void Hv.error("app__init ajax settings parse error", t) }
                    wp(t, e) } }, error: function() { xr("\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5") } }), Pt("v6__"), Et(), Mt(), jt(), Yu();
        var n = sp();!n && _n(), Lv && vn() && rl(), xp(), kp(), Lr(t), vp(), mp(), gp(), bp() }

    function wp(t, n) {
        (1902 == n.result || 1002 == n.result) && vn() && (hn(), Vi({ title: "\u6e38\u5ba2\u8d26\u53f7\u767b\u5f55\u8fc7\u671f", prompt: "\u60a8\u7684\u767b\u5f55\u5df2\u8fc7\u671f\uff0c\u662f\u5426\u91cd\u65b0\u767b\u5f55\uff1f", confirm: _n })) }

    function xp() {
        function t() { Ze('.float-reminder, .book-dash .u-btn3, .u-book.-detail .price, .u-tagRT, .fiction-toc__item:before{display:none!important;}.book-dash li:first-child{width: 100%;}.book-dash li:nth-child(2){display:none;}.book-dash-text:after{content: "\u514d\u8d39\u9605\u8bfb" !important;}') }
        ar(function(n) { n.time && t() }, function() {
            return 1 }) }

    function Tp(t, n) {
        function e() {
            var t = !1;
            return Df(function() { Hv.log("local__onBookChange"), t = !0 }), { clear: function() { t = !1 }, isChange: function() {
                    return t } } }

        function i(t) {
            (!dt(t) || l.isChange()) && (ep(t, bl.bind(null, t)), l.clear()) }

        function r(t) {
            var n, e, i, r;
            ft(t, dl()), n = j(".Pull", t), e = j(".Pull-scroll", t), i = j(".wrap", t), r = on(n, e, { $tip: j(".Pull-tip", t), tipTimeout: 1100 }), F(n, "pull:load", function(t) { zv(function() { o(i), r.hide() }, 300) }), o(i) }

        function o(t) { cv(t) }
        var a, c = parseInt(n.tab) || 0,
            s = n.from,
            u = n.redirect,
            l = e(),
            d = If(w_);
        if (u && u.match(/^#/)) {
            var f = Ze(".Swipe>div{transition-duration : 0s !important}");
            return n = Ct(), delete n.redirect, Ot(n), zv(function() { Rv.href = u }, 10), void zv(function() {
                var e = zh;
                zh = null, Tp(t, n), it(f), zv(function() { zh = e }, 1e3) }, 300) }
        Mu("index"), ft(t, ul(s)), a = nn(j(".Swipe", t), { pos: d ? 1 : c, $tab: j(".Swipe-tab", t), tabArrow: !0, callback: function(t, n) { parseInt(At("gender") || 1);
                switch (t) {
                    case 0:
                        dt(n) || r(n);
                        break;
                    case 1:
                        i(n) }
                Ct().redirect || Ct().page && "main" != Ct().page || Ot({ page: "main", tab: t, from: s, _t: Ct()._t }) } }), z(t, "page:show"), F(t, "page:show", function(t) {
            var n = t.data;
            if (!n) {
                var e = a.$curr;
                1 == a.curr ? i(e) : Pv.user_type != Cn().user_type && Dt() } }) }

    function Wr(t, n) {
        var e = n.type,
            i = n.id;
        Vr(t, e, i) }

    function Cp(t, n) { so(t) }

    function Ip(t, n) {
        var e = n.type,
            i = n.id;
        ao(t, e, i, n.tabs) }

    function $p(t, n) {
        var e = n.type,
            i = n.id;
        Za(t, e, i) }

    function Op(t, n) { qa(t, n.type) }

    function Sp(t, n) { Fc(t, n.id) }

    function Ep(t, n) {
        var e = n.id;
        Il(t, e) }

    function Mp(t, n) {
        var e = n.type,
            i = n.id;
        switch (i) {
            case "new":
                go(t);
                break;
            case "magazine":
                bo(t);
                break;
            case "free":
                yo(t, e);
                break;
            case "lastest":
                ko(t);
                break;
            case "finished":
                xo(t, e);
                break;
            case "male":
                Rp(t, e);
                break;
            case "female":
                Dp(t, e);
                break;
            case "best":
                Ur(t);
                break;
            default:
                ga(t, i) } }

    function Pp(n, e) {
        var i = e.id,
            r = e.source_id,
            o = e.source,
            a = { id: i, source: o, source_id: r };
        return !a.source_id || 1 != a.source && 3 != a.source ? a.source_id && E([2, 4, 5], +a.source) ? fl(n, a.source_id, a) : void 0 : (t.open("https://www.duokan.com/m/book/" + a.source_id), void $n()) }

    function Ap(t, n) { Ml(t) }

    function Lp(t, n) {
        var e = n.type,
            i = n.id;
        Wc(t, e, i) }

    function Np(t, n) {
        var e = n.type,
            i = n.id;
        Fr(t, e, i) }

    function Bp(t, n) {
        var e = n.id;
        Vl(t, e) }

    function jp(t, e) {
        function i(t) {
            if (!t.data) {
                var n = Uf(r);
                n != o && (o = n, Y(a, "page.change", o)) } }
        var r = e.id,
            o = e.chapter_id;
        o || (o = Uf(r));
        var a = (rd(t, r, o), j(".reader", t));
        F(t, "page:show", i), tt(a, function() { z(t, "page:show", i) }), Nf(r, function(t) { re(r), ts(r, 0, n, function(t) {
                var n = t.item;
                Vf(n.fiction_id, n.toc) }) }) }

    function Rp(t, n) { xn(""),
            function() { ft(t, Vt()), lr(function(n) {
                    var e = {};
                    e.label = n.title, e.lists = O(n.top, n.area), xn(e.label), Re(t, ll(e)) }) }() }

    function Dp(t, n) { xn(""),
            function() { ft(t, Vt()), dr(function(n) {
                    var e = {};
                    e.label = n.title, e.lists = O(n.top, n.area), xn(e.label), Re(t, ll(e)) }) }() }

    function Hp(n, e) {
        function r() { c = Bv.createElement("iframe"), ot(c), Bv.body.appendChild(c), F(t, "message", function(t) {
                var e = t.data,
                    r = t.origin;
                if (e && "ready" == e.type && n == r)
                    for (s = !0, i = 0; i < l.length; i++) o(l[i][0], l[i][1]) }), c.src = n + e, u = !0 }

        function o(t, e) { c.contentWindow.postMessage({ type: t, data: e }, n) }

        function a(t, n) { u || r(), s ? o(t, n) : l.push([t, n]) }
        var c, s = !1,
            u = !1,
            l = [];
        return { init: r, set: a } }

    function Fp(t, n, e) {
        var i = "";
        return t = si(t), i += '<div class="book-h5 book-h5_no-img" data-href="' + Ci(t) + '" ' + Ku("b*" + Uu(t)) + ' expose=""><span class="book-h5_no-img__order">0' + e + '</span><div class="book-h5_no-img__info"><p class="book-h5_no-img__title">' + t.title + '<i class="book-h5_no-img__author">' + ui(t) + "</i></p></div></div>" }

    function zp(t, n, e) {
        var i = "";
        return t = si(t), i += '<div class="book-h5" data-href="' + Ci(t) + '" ' + Ku("b*" + Uu(t)) + ' expose="">' + Wp(t, !0, !0, e) + '<div class="book-h5__info"><p class="book-h5__title">' + t.title + '</p><p class="book-h5__author">' + ui(t) + '</p><p class="book-h5__summary">' + Ti(t) + '</p><div class="book-h5__wrap">', n && (i += n(t)), i += '<!--<p class="book-h5__latest">', i += t.finish ? "\u5b8c\u7ed3" : "\u8fde\u8f7d", i += "</p>--></div></div></div>" }

    function Yp(t) {
        var n, e = "";
        return t = t.book || t, n = Ci(t), e += '<div class="book-h5_ver" ', n && (e += 'data-href="' + n + '"'), e += " " + Ku("b*" + Uu(t)) + ' expose="">' + Wp(t, !0, !0, 0, "_ver") + '<div class="book-h5__info"><p class="book-h5__title">' + t.title + '</p><p class="book-h5__sub-title">' + t.summary + "</p></div></div>" }

    function Vp(t) {
        var e = "",
            i = t.main_tag || t.tags && t.tags[0],
            r = t.category_name !== n ? t.category_name : t.categories[0].label,
            o = Math.floor(t.word_count / 1e4);
        return i = r == i ? "" : i, i && (e += '<div class="book-h5__tag">' + i + "</div>"), r && (e += '<div class="book-h5__tag">' + r + "</div>"), o && (e += '<div class="book-h5__tag">' + o + "\u4e07\u5b57</div>"), e }

    function Wp(t, n, e, i, r) {
        var o = "",
            a = t.book_id || t.fiction_id || t.id;
        return o += '<div class="book-h5__cover', r && (o += r), o += '" data-id="' + a + '" id="' + Ve(Er, t) + '"><img alt=' + t.title + ' /><div class="u-tagRT"></div>', e && (o += '<p class="book-h5__finish">', o += t.finish ? "\u5b8c\u7ed3" : "\u8fde\u8f7d", o += "</p>"), i && (o += '<div class="book-h5__order">' + i + "</div>"), o += "</div>" }

    function Kp(t) {
        var n = "",
            e = t.extend.tab_btn_h5;
        return n += e ? Xp(t) : Up(t) }

    function Up(t) {
        var n = "",
            e = t.extend,
            i = Fo(t),
            r = vv(t),
            o = e.next_btn_h5;
        return n += '<section class="channel-h5 channel-h5_next" ', e.next_btn_h5 && (n += 'id="' + Ve(dv) + '"'), n += ">", e.hide_header || (n += Qp(t.title, e.title_align, 0, e.title_icon)), n += Gp(i, e.show_vertical, e.next_btn_h5, e.card_count_h5, 0), (r || o) && (n += tv(r, e.more_text, o)), n += "</section>" }

    function Xp(t) {
        var n = "",
            e = t.extend,
            i = Fo(t),
            r = Math.floor(i.length / 2),
            o = vv(t),
            a = e.next_btn_h5,
            c = hv(i, r);
        n += '<section class="channel-h5 channel-h5_tab" id="' + Ve(lv) + '">', e.hide_header || (n += Qp(t.title, e.title_align, !0, e.title_icon)), n += '<div class="tab__bd">';
        for (var s, u = c, l = -1, d = u.length - 1; d > l;) {
            if (s = u[++l], n += '<div class="tab__wrap" style="display:none">' + Gp(s, e.show_vertical, e.next_btn_h5, e.card_count_h5, !0, !0), o || a) {
                var f = 0 == l ? o : e.url_2 || o;
                n += tv(f, e.more_text, a) }
            n += "</div>" }
        return n += "</div></section>" }

    function Gp(t, n, e, i, r, o) {
        var a = "";
        if (e) { t = hv(t, i), a += '<div class="Fade list-h5__wrap">';
            for (var c, s = t, u = -1, l = s.length - 1; l > u;) c = s[++u], a += "<div>" + Jp(c, n, r, "", o) + "</div>";
            a += "</div>" } else a += Jp(t, n, r);
        return a }

    function Jp(t, n, e, i) {
        var r = "";
        return r += n ? Zp(t, 0, Vp, e, i) : qp(t) }

    function qp(t) {
        for (var n, e = '<ul class="list-h5_col"><div>', i = t, r = -1, o = i.length - 1; o > r;) { n = i[++r];
            var a = si(n);
            e += "<li>" + Yp(a) + "</li>" }
        return e += "</div></ul>" }

    function Zp(t, n, e, i, r) {
        var o = '<ul class="list-h5';
        r && (o += " list-h5_no-img"), o += '">';
        for (var a, c = t, s = -1, u = c.length - 1; u > s;) a = c[++s], o += "<li>", o += i ? i && 0 == s ? zp(a, e, s + 1) : Fp(a, "", s + 1) : zp(a, e), o += "</li>";
        return o += "</ul>" }

    function Qp(t, n, e, i) {
        var r = '<div class="channel-h5__header"><p class="channel-h5__title ' + Yo("title_align", n) + '">' + t;
        return i && (r += "<i>" + i + "</i>"), r += "</p>", e && (r += '<div class="tab"><a href="javascript:" ' + Ku("t.1") + '>\u7537</a><a href="javascript:" ' + Ku("t.2") + ">\u5973</a></div>"), r += "</div>" }

    function tv(t, n, e) {
        var i = "";
        return i += e && t ? '<div class="channel-h5__footer_next" id="' + Ve(fv) + '"><a class="btn-h5__next" href="javascript:" ' + Ku("n") + '>\u6362\u4e00\u6362</a><a class="btn-h5__more" data-href="' + t + '" ' + Ku("m") + ">" + (n || "\u67e5\u770b\u5168\u90e8") + "</a></div>" : t ? '<div class="channel-h5__footer" id="' + Ve(fv) + '"><a class="btn-h5__more" data-href="' + t + '" ' + Ku("m") + ">" + (n || "\u67e5\u770b\u5168\u90e8") + "</a></div>" : '<div class="channel-h5__footer"><a class="btn-h5__next" href="javascript:" ' + Ku("n") + ">\u6362\u4e00\u6362</a></div>" }

    function nv() {
        return '<section class="list-more" id="' + Ve(Tv) + '"><ul class="list-more__wrap"></ul></section>' }

    function ev(t) {
        var n = "";
        Pu("wtf");
        for (var e, i = t, r = -1, o = i.length - 1; o > r;) e = i[++r], n += "<li>" + zp(e, Vp) + "</li>";
        return Au(), n }

    function iv(t) {
        for (var n, e, i = '<section class="top-home"><div class="top-home__search" data-href="' + kf() + '">\u8f93\u5165\u4e66\u540d/\u4f5c\u8005/\u5173\u952e\u5b57</div>' + rv(yv(t)) + '<ul class="top-home__btn">', r = wv(t), o = -1, a = r.length - 1; a > o;) e = r[++o], n = Ba(e.desc), i += '<li data-href="', n.url && (i += n.url), i += '" data-title="' + e.title + '"><img class="top-home__icon', n.hide_name && (i += "noname"), i += '" src="' + n.icon + '"><p class="top-home__des">' + e.title + "</p></li>";
        return i += "</ul></section>" }

    function rv(t) {
        for (var n, e = '<div class="Swipe slider-banner" data-track="s" id="' + Ve(ov) + '"><div>', i = t, r = -1, o = i.length - 1; o > r;) n = i[++r], e += '<div class="u-topic" data-href="' + Nr(n) + '" data-track="' + r + '" expose="" ' + Ku("sld") + ">" + hi(n.banner, n.extend.tag) + "</div>";
        e += '</div><div class="Swipe-tab">';
        for (var n, a = t, r = -1, c = a.length - 1; c > r;) n = a[++r], e += "<a></a>";
        return e += "</div></div>" }

    function ov(t) {
        var n = !Qn("takeOverTouchEvents"),
            e = 5e3,
            i = j(".Swipe-tab", t),
            r = { $tab: i, tabArrow: i.childNodes.length > 1 ? !0 : !1, loop: 1, disableTouch: n, playInterval: e };
        return n || (F(t, "touchstart", function() { Adapter__takeOverTouchEvents(!0), pe(1) }), F(t, "touchend", function() { Adapter__takeOverTouchEvents(!1), pe(0) })), nn(t, r) }

    function av(t) {
        var n = "",
            e = t.extend,
            i = e.more_url;
        n += '<section class="banner-h5">', e.hide_header || (n += Qp(t.title, e.title_align, 0, e.title_icon)), n += '<ul class="banner-h5__list"><div>';
        for (var r, o = t.data.data, a = -1, c = o.length - 1; c > a;) r = o[++a], n += '<li><div class="banner-h5__cover" data-href="' + Nr(r) + '" ' + Ku("n") + ' expose=""><img class="cover" src="' + r.banner + '"></div></li>';
        return n += "</div></ul>", i && (n += tv(i, e.more_text)), n += "</section>" }

    function cv(t) {
        var n = 418;
        ("in.dushu.xiaomi.com" == Rv.hostname || Rv.port % 2) && (n = 730), uv(), sv(t, n) }

    function sv(t, e) { ft(t, Vt());
        var i = Qt.bind(n, t, sv.bind("", t, e));
        ia(e, function(n) {
            if (!n.items) return Hv.error("channel__render: \u9891\u9053(" + e + ")", n), "";
            Ba(n.hidden_info), Pa(n.items);
            Re(t, la(n)) }, i) }

    function uv() { ka("home-top", mv), ka("book-list-h5", gv), ka("banner-h5", kv), ka("waterfall-books", bv) }

    function lv(t) {
        var n, e = j(".tab", t),
            i = j(".tab__bd", t),
            r = j(".btn-h5__next", t),
            o = R(".Fade", t),
            a = jr(t);
        e = j(".tab", t), i = j(".tab__bd", t), n = cn(e, i, { tabOnClass: "tab__on", callback: function() { Y(a, "scroll") } }), m(o, function(t) { an(t) }), F(t, "click", function(t) {
            var e, i = t.target;
            if (H(i, ".btn-h5__next")) {
                var a = G(o[n.pos()]).fade;
                a && a.next(), pv(r) } else H(i, ".tab a") && (e = H(i, ".tab a"), pv(e)) }) }

    function dv(t) {
        var n = j(".Fade", t),
            e = j(".btn-h5__next", t),
            i = an(n);
        e && F(e, "click", function() { i.next(), pv(e) }) }

    function fv(t) {
        var n = j(".btn-h5__more", t);
        F(n, "click", function() { pv(n) }) }

    function pv(t) {
        var n, e = {};
        n = t.getAttribute("da"), e = { page: "main", t_: n }, ci(e) }

    function vv(t) {
        var n = t.extend;
        return n && n.url ? n.url : E([2, 101], t.type) ? lf(2 == t.type ? "book" : "fiction", t.id) : 201 == t.type ? f_(n.channel_id) : "" }

    function hv(t, n) {
        var e, i, r = [];
        for (i = 0, e = Math.floor(t.length / n); e > i; i++) r[i] = t.slice(i * n, (i + 1) * n);
        return r }

    function _v(t, n, e) { bt("/rock/book/recommend?", { data: t, success: function(t) { n(t) }, error: e }) }

    function mv(t) {
        return iv(t) }

    function gv(t) {
        return Kp(t) }

    function bv() {
        return nv() }

    function kv(t) {
        return av(t) }

    function yv(t) {
        return t.data.data ? xv(t.data.data, "slider") : [] }

    function wv(t) {
        return t.data.data ? xv(t.data.data, "tab") : [] }

    function xv(t, n) {
        return w(t, function(t) {
            var e = Ba(t.desc);
            return e.type == n }) }

    function Tv(t) {
        var n, e, i, r;
        n = t, $loadingWrap = H(n, ".channel-page"), t = H(t, ".wrap"), i = H(t, ".Pull-scroll"), He($loadingWrap, Yt()), r = tn(i), r.$loading = e = j(".Loading", t), F(e, "loading:load", function() { Cv(n, e, i) }) }

    function Cv(t, n, e) {
        var i, r = {},
            o = t.dataset.start,
            a = j(".list-more__wrap", t);
        i = parseInt(o) || 0, r = { start: i, count: 10 }, _v(r, function(e) { r.start += 10, t.dataset.start = r.start, e.items.length ? He(a, ev(e.items)) : Gt(n), Ut(n) }, function() { Ut(n), qt(n) }) }
    var Iv, $v, Ov, Sv, Ev, Mv, Pv, Av, Lv, Nv, Bv = t.document,
        jv = t.history,
        Rv = t.location,
        Dv = t.navigator,
        Hv = t.console,
        Fv = t.alert,
        zv = t.setTimeout,
        Yv = t.clearTimeout,
        Vv = t.setInterval,
        Wv = t.clearInterval,
        Kv = t.getComputedStyle,
        Uv = t.encodeURIComponent,
        Xv = t.decodeURIComponent,
        Gv = t.localStorage,
        Jv = t.sessionStorage,
        qv = t.String,
        Zv = t.Array,
        Qv = t.Object,
        th = t.Date,
        nh = t.XMLHttpRequest,
        eh = t.HTMLElement,
        ih = t.applicationCache,
        rh = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" },
        oh = "domData" + th.now(),
        ah = 1,
        ch = "domUid",
        sh = { type: "GET", success: M, error: M, complete: M, timeout: 0 },
        uh = "jsonp" + th.now(),
        lh = 0,
        dh = "",
        fh = "Loading_loading",
        ph = "Loading_complete",
        vh = "Loading_error",
        hh = "Swipe-tab__on",
        _h = "fakeImeiMd5",
        mh = "Tab__on",
        gh = {},
        bh = null,
        kh = 1,
        yh = [],
        wh = 0,
        xh = { on: function(t, n) { this._event = this._event || {};
                var e = this._event[t] || (this._event[t] = []);
                return e.push(n), this }, off: function(t, n) {
                if (!this._event) return this;
                if (!t && !n) return this._event = {}, this;
                var e = this._event[t];
                if (e)
                    if (n)
                        for (var i = e.length - 1; i >= 0; i--) e[i] === n && e.splice(i, 1);
                    else delete this._event[t];
                return this }, emit: function(t, n) {
                if (!this._event) return this;
                var e, i = this._event[t];
                if (i)
                    for (i = i.slice(); e = i.shift();) e.apply(null, g(arguments, 1));
                return this } },
        Th = 200,
        Ch = ".ListView>*{display: none;}.ListView__loading{display: block;}.ListView_error>*{display: none;}.ListView_error>.ListView__error{display: block;}.ListView_complete>*{display: none;}.ListView_complete>.ListView__complete{display: block;}.ListView_empty>*{display: none;}.ListView_empty>.ListView__empty{display: block;}",
        Ih = { __init__: function(t) { this._cache = [], this.options = t || {}, this.noCache = this.options.noCache }, get: function(n, e) {
                if (!e) throw "callback cant be null";
                var i = this._getCache(n);
                return i.data ? e(i.data) : (i.callback.push(e), this.timer && t.clearTimeout(this.timer), void(this.timer = zv(this.doRequest_.bind(this), 0))) }, run: function(t, n) {
                var e = this._getCache(t);
                e.data = n, e.callback.forEach(function(t) { t(e.data) }), e.callback = [], this.noCache && (e.data = null) }, _getCache: function(t) {
                var n = x(this._cache, function(n) {
                    return n.id == t });
                return n || (n = { id: t, data: null, callback: [] }, this._cache.push(n)), n }, doRequest_: function() {
                var t = [];
                m(this._cache, function(n) { n.callback.length && t.push(n.id) }), this.request_(t) }, request_: function(t) {} },
        $h = "",
        Oh = function() {
            function n(t) {
                for (var n, e = []; t;) n = t.getAttribute("data-" + r), n && e.push(n), t = t.parentElement;
                return e.reverse().join(".") }

            function e() {
                var t = Rv.search.match(/t=(.*?)(?:$|&)/);
                return t && t[1] ? decodeURI(t[1]) : void 0 }

            function i(t) {
                return o ? o + "|" + t : t }
            var r = "track",
                o = $h = e() || "";
            return function(e) {
                if (!e) return $h + "-error";
                Bv.getElementById("is-track-root") && (o = "");
                var a = e.target,
                    c = n(a);
                if (!c && t.DK_DEBUG) throw "path can't be empty";
                var s = {};
                return s[r] = i(n(a)), $h = s[r], Hv.log(s), $h } }(),
        Sh = function(t, n) {
            var e = 3e5;
            if (n = n || 0, t = t.filter(function(t) {
                    return +t.value >= n }), 0 === t.length) return t; {
                var i = th.now(),
                    r = [],
                    o = [];
                t.forEach(function(t) {
                    var n = 1e3 * t.expire_time;
                    e > n - i ? r.push(t) : o.push(t) }) }
            return r = r.sort(function(t, e) {
                function i(t) {
                    return 1e4 * +new th(t.expire_time) + (+t.value - n) }
                return i(t) > i(e) }), o = o.sort(function(t, e) {
                function i(t) {
                    return 1e13 * (+t.value - n) + new th(t.expire_time).getTime() }
                return i(t) > i(e) }), r.concat(o) },
        Eh = { get: hr, sort: Sh, group: _r, getAndUpdate: function(t) {
                return hr(t) }, hasAvail: function(t, n) {
                if ("ios" == Av || Nv) return n(!1);
                var e = {};
                return Cn().user_id ? void Eh.getAndUpdate(0).then(function(i) {
                    if (0 === i.result) {
                        var r = Eh.sort(Eh.group(i.items).avail, t);
                        e.avail = !!r.length, n && n(e.avail, r) } }, function() { Hv.error("get coupon failure"), n && n(!1, []) }) : e } },
        Mh = Qt;
    Qt = function() { En(!1), Mh.apply(this, arguments) };
    var Ph, Ah, Lh, Ph, Nh, Bh, jh, Rh, Dh, Hh, Fh, zh, Yh = 1,
        Vh = 2,
        Wh = 3,
        Kh = 0,
        Uh = { timer: null, now: -1, timestamps: [], current: null, start: function(t, n) { this.now = t, this.timestamps = n, this._startTimer(), this.changeScene() }, stop: function() { t.clearInterval(this.timer), this.timer = null }, changeScene: function() {
                var t = this._getStatus();
                this.current !== t && (this.current = t, this.onChangeScene && this.onChangeScene(t)), this.onChange && this.onChange() }, _getStatus: function() {
                for (var t = 0; this.timestamps.length > t && !(this.timestamps[t] > this.now); t++);
                return t }, _startTimer: function() { this.stop();
                var n = this;
                this.timer = t.setInterval(function() { n.now = n.now + 1e3, n.changeScene() }, 1e3) } },
        Xh = 0,
        Gh = 1,
        Jh = 2,
        Uh = { timer: null, now: -1, timestamps: [], current: null, start: function(t, n) { this.now = t, this.timestamps = n, this._startTimer(), this.changeScene() }, stop: function() { t.clearInterval(this.timer), this.timer = null }, changeScene: function() {
                var t = this._getStatus();
                this.current !== t && (this.current = t, this.onChangeScene && this.onChangeScene(t)), this.onChange && this.onChange() }, _getStatus: function() {
                for (var t = 0; this.timestamps.length > t && !(this.timestamps[t] > this.now); t++);
                return t }, _startTimer: function() { this.stop();
                var n = this;
                this.timer = t.setInterval(function() { n.now = n.now + 1e3, n.changeScene() }, 1e3) } },
        qh = "topic__discount_cache_",
        Xh = (new th(th.now() + 1e4), new th(th.now() + 2e4), 0),
        Gh = 1,
        Jh = 2,
        Zh = function(t) {
            var n = {},
                e = "result";
            return r(t) ? o(n, options) : n[e] = t, n[e] = n[e] || 0, n },
        Qh = function() {
            return Zh(-9) },
        t_ = { MIPAY: { id: "MIPAY", icon: "http://image.read.duokan.com/mfsv2/download/fdsc3/p01yFbAVaeBo/SXz0k3IxkFZKer.png", name: "\u7c73\u5e01" }, ALIPAY_MOBILE: { id: "ALIPAY_MOBILE", icon: "http://image.read.duokan.com/mfsv2/download/fdsc3/p01XLyVfRCBJ/8s9iT1Bb0GqiKK.png", name: "\u652f\u4ed8\u5b9d\u94b1\u5305" }, WXPAY: { id: "WXPAY", icon: "http://image.read.duokan.com/mfsv2/download/fdsc3/p01dpAabVusZ/JCtat3rVPiKnES.png", name: "\u5fae\u4fe1\u652f\u4ed8" }, MIPAY_WEB: { id: "MIPAY", icon: "http://image.read.duokan.com/mfsv2/download/fdsc3/p01yFbAVaeBo/SXz0k3IxkFZKer.png", name: "\u7c73\u5e01" }, ALIPAY_WAP: { id: "ALIPAY_MOBILE", icon: "http://image.read.duokan.com/mfsv2/download/fdsc3/p01XLyVfRCBJ/8s9iT1Bb0GqiKK.png", name: "\u652f\u4ed8\u5b9d\u94b1\u5305" } },
        n_ = {},
        e_ = "",
        i_ = "",
        r_ = { expose: Hu, "data-href": zu },
        o_ = [],
        a_ = "da",
        c_ = "da-preload",
        s_ = "reader__night",
        u_ = "http://api.ad.xiaomi.com/static/js/miADOutside.js?v=1.0",
        l_ = "reader",
        d_ = "chapter",
        f_ = vf,
        p_ = bf.bind(null, 1),
        v_ = "fiction_",
        h_ = v_ + "array",
        __ = "_toc",
        m_ = "_progress",
        g_ = "_progress_offset",
        b_ = "_autopay",
        k_ = { __parent__: Ih, request_: function(t) { this.api(t.join(","), function(n) { this._process(t, n.items) }.bind(this)) }, _process: function(t, n) { t.forEach(function(t) {
                    var e = x(n, function(n) {
                        return n.fiction_id == t });
                    this.run(t, e) }.bind(this)) }, api: function(t, n) { bt("/store/v0/fiction/id_list", { dataType: "json", data: { ids: t, owner: "0,2" }, success: n, error: n.bind(null, { items: [] }) }) } },
        y_ = { main: Tp, rank_list: Cp, rank: Ip, cate_list: Kr, cate: Wr, tag: Lp, author: Np, topic: $p, topic_list: Op, super_topic: Sp, channel: Mp, book: Pp, user_center: Ap, search: Bp, checkin: td, reader: jp, catalog: Ep, prefer: su },
        w_ = "reading_before_leave";
    t.app__init = yp
}(window);
