(function() {
  const hl = document.createElement("link").relList;
  if (hl && hl.supports && hl.supports("modulepreload")) return;
  for (const G of document.querySelectorAll('link[rel="modulepreload"]')) m(G);
  new MutationObserver((G) => {
    for (const B of G) if (B.type === "childList") for (const sl of B.addedNodes) sl.tagName === "LINK" && sl.rel === "modulepreload" && m(sl);
  }).observe(document, { childList: true, subtree: true });
  function $(G) {
    const B = {};
    return G.integrity && (B.integrity = G.integrity), G.referrerPolicy && (B.referrerPolicy = G.referrerPolicy), G.crossOrigin === "use-credentials" ? B.credentials = "include" : G.crossOrigin === "anonymous" ? B.credentials = "omit" : B.credentials = "same-origin", B;
  }
  function m(G) {
    if (G.ep) return;
    G.ep = true;
    const B = $(G);
    fetch(G.href, B);
  }
})();
var kc = { exports: {} }, me = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var $d;
function Uv() {
  if ($d) return me;
  $d = 1;
  var O = Symbol.for("react.transitional.element"), hl = Symbol.for("react.fragment");
  function $(m, G, B) {
    var sl = null;
    if (B !== void 0 && (sl = "" + B), G.key !== void 0 && (sl = "" + G.key), "key" in G) {
      B = {};
      for (var El in G) El !== "key" && (B[El] = G[El]);
    } else B = G;
    return G = B.ref, { $$typeof: O, type: m, key: sl, ref: G !== void 0 ? G : null, props: B };
  }
  return me.Fragment = hl, me.jsx = $, me.jsxs = $, me;
}
var kd;
function Rv() {
  return kd || (kd = 1, kc.exports = Uv()), kc.exports;
}
var Q = Rv(), Fc = { exports: {} }, Z = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Fd;
function pv() {
  if (Fd) return Z;
  Fd = 1;
  var O = Symbol.for("react.transitional.element"), hl = Symbol.for("react.portal"), $ = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), sl = Symbol.for("react.context"), El = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), P = Symbol.iterator;
  function al(s) {
    return s === null || typeof s != "object" ? null : (s = P && s[P] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var Al = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Ol = Object.assign, Ll = {};
  function Rl(s, A, M) {
    this.props = s, this.context = A, this.refs = Ll, this.updater = M || Al;
  }
  Rl.prototype.isReactComponent = {}, Rl.prototype.setState = function(s, A) {
    if (typeof s != "object" && typeof s != "function" && s != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, s, A, "setState");
  }, Rl.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function Ut() {
  }
  Ut.prototype = Rl.prototype;
  function gt(s, A, M) {
    this.props = s, this.context = A, this.refs = Ll, this.updater = M || Al;
  }
  var pl = gt.prototype = new Ut();
  pl.constructor = gt, Ol(pl, Rl.prototype), pl.isPureReactComponent = true;
  var Kl = Array.isArray, C = { H: null, A: null, T: null, S: null, V: null }, Zl = Object.prototype.hasOwnProperty;
  function Cl(s, A, M, _, N, k) {
    return M = k.ref, { $$typeof: O, type: s, key: A, ref: M !== void 0 ? M : null, props: k };
  }
  function ol(s, A) {
    return Cl(s.type, A, void 0, void 0, void 0, s.props);
  }
  function ct(s) {
    return typeof s == "object" && s !== null && s.$$typeof === O;
  }
  function Lt(s) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(M) {
      return A[M];
    });
  }
  var St = /\/+/g;
  function H(s, A) {
    return typeof s == "object" && s !== null && s.key != null ? Lt("" + s.key) : A.toString(36);
  }
  function ll() {
  }
  function rl(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(ll, ll) : (s.status = "pending", s.then(function(A) {
          s.status === "pending" && (s.status = "fulfilled", s.value = A);
        }, function(A) {
          s.status === "pending" && (s.status = "rejected", s.reason = A);
        })), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function L(s, A, M, _, N) {
    var k = typeof s;
    (k === "undefined" || k === "boolean") && (s = null);
    var X = false;
    if (s === null) X = true;
    else switch (k) {
      case "bigint":
      case "string":
      case "number":
        X = true;
        break;
      case "object":
        switch (s.$$typeof) {
          case O:
          case hl:
            X = true;
            break;
          case R:
            return X = s._init, L(X(s._payload), A, M, _, N);
        }
    }
    if (X) return N = N(s), X = _ === "" ? "." + H(s, 0) : _, Kl(N) ? (M = "", X != null && (M = X.replace(St, "$&/") + "/"), L(N, A, M, "", function(Kt) {
      return Kt;
    })) : N != null && (ct(N) && (N = ol(N, M + (N.key == null || s && s.key === N.key ? "" : ("" + N.key).replace(St, "$&/") + "/") + X)), A.push(N)), 1;
    X = 0;
    var Fl = _ === "" ? "." : _ + ":";
    if (Kl(s)) for (var vl = 0; vl < s.length; vl++) _ = s[vl], k = Fl + H(_, vl), X += L(_, A, M, k, N);
    else if (vl = al(s), typeof vl == "function") for (s = vl.call(s), vl = 0; !(_ = s.next()).done; ) _ = _.value, k = Fl + H(_, vl++), X += L(_, A, M, k, N);
    else if (k === "object") {
      if (typeof s.then == "function") return L(rl(s), A, M, _, N);
      throw A = String(s), Error("Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead.");
    }
    return X;
  }
  function g(s, A, M) {
    if (s == null) return s;
    var _ = [], N = 0;
    return L(s, _, "", "", function(k) {
      return A.call(M, k, N++);
    }), _;
  }
  function z(s) {
    if (s._status === -1) {
      var A = s._result;
      A = A(), A.then(function(M) {
        (s._status === 0 || s._status === -1) && (s._status = 1, s._result = M);
      }, function(M) {
        (s._status === 0 || s._status === -1) && (s._status = 2, s._result = M);
      }), s._status === -1 && (s._status = 0, s._result = A);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var x = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var A = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s), error: s });
      if (!window.dispatchEvent(A)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  };
  function cl() {
  }
  return Z.Children = { map: g, forEach: function(s, A, M) {
    g(s, function() {
      A.apply(this, arguments);
    }, M);
  }, count: function(s) {
    var A = 0;
    return g(s, function() {
      A++;
    }), A;
  }, toArray: function(s) {
    return g(s, function(A) {
      return A;
    }) || [];
  }, only: function(s) {
    if (!ct(s)) throw Error("React.Children.only expected to receive a single React element child.");
    return s;
  } }, Z.Component = Rl, Z.Fragment = $, Z.Profiler = G, Z.PureComponent = gt, Z.StrictMode = m, Z.Suspense = p, Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = C, Z.__COMPILER_RUNTIME = { __proto__: null, c: function(s) {
    return C.H.useMemoCache(s);
  } }, Z.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, Z.cloneElement = function(s, A, M) {
    if (s == null) throw Error("The argument must be a React element, but you passed " + s + ".");
    var _ = Ol({}, s.props), N = s.key, k = void 0;
    if (A != null) for (X in A.ref !== void 0 && (k = void 0), A.key !== void 0 && (N = "" + A.key), A) !Zl.call(A, X) || X === "key" || X === "__self" || X === "__source" || X === "ref" && A.ref === void 0 || (_[X] = A[X]);
    var X = arguments.length - 2;
    if (X === 1) _.children = M;
    else if (1 < X) {
      for (var Fl = Array(X), vl = 0; vl < X; vl++) Fl[vl] = arguments[vl + 2];
      _.children = Fl;
    }
    return Cl(s.type, N, void 0, void 0, k, _);
  }, Z.createContext = function(s) {
    return s = { $$typeof: sl, _currentValue: s, _currentValue2: s, _threadCount: 0, Provider: null, Consumer: null }, s.Provider = s, s.Consumer = { $$typeof: B, _context: s }, s;
  }, Z.createElement = function(s, A, M) {
    var _, N = {}, k = null;
    if (A != null) for (_ in A.key !== void 0 && (k = "" + A.key), A) Zl.call(A, _) && _ !== "key" && _ !== "__self" && _ !== "__source" && (N[_] = A[_]);
    var X = arguments.length - 2;
    if (X === 1) N.children = M;
    else if (1 < X) {
      for (var Fl = Array(X), vl = 0; vl < X; vl++) Fl[vl] = arguments[vl + 2];
      N.children = Fl;
    }
    if (s && s.defaultProps) for (_ in X = s.defaultProps, X) N[_] === void 0 && (N[_] = X[_]);
    return Cl(s, k, void 0, void 0, null, N);
  }, Z.createRef = function() {
    return { current: null };
  }, Z.forwardRef = function(s) {
    return { $$typeof: El, render: s };
  }, Z.isValidElement = ct, Z.lazy = function(s) {
    return { $$typeof: R, _payload: { _status: -1, _result: s }, _init: z };
  }, Z.memo = function(s, A) {
    return { $$typeof: E, type: s, compare: A === void 0 ? null : A };
  }, Z.startTransition = function(s) {
    var A = C.T, M = {};
    C.T = M;
    try {
      var _ = s(), N = C.S;
      N !== null && N(M, _), typeof _ == "object" && _ !== null && typeof _.then == "function" && _.then(cl, x);
    } catch (k) {
      x(k);
    } finally {
      C.T = A;
    }
  }, Z.unstable_useCacheRefresh = function() {
    return C.H.useCacheRefresh();
  }, Z.use = function(s) {
    return C.H.use(s);
  }, Z.useActionState = function(s, A, M) {
    return C.H.useActionState(s, A, M);
  }, Z.useCallback = function(s, A) {
    return C.H.useCallback(s, A);
  }, Z.useContext = function(s) {
    return C.H.useContext(s);
  }, Z.useDebugValue = function() {
  }, Z.useDeferredValue = function(s, A) {
    return C.H.useDeferredValue(s, A);
  }, Z.useEffect = function(s, A, M) {
    var _ = C.H;
    if (typeof M == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
    return _.useEffect(s, A);
  }, Z.useId = function() {
    return C.H.useId();
  }, Z.useImperativeHandle = function(s, A, M) {
    return C.H.useImperativeHandle(s, A, M);
  }, Z.useInsertionEffect = function(s, A) {
    return C.H.useInsertionEffect(s, A);
  }, Z.useLayoutEffect = function(s, A) {
    return C.H.useLayoutEffect(s, A);
  }, Z.useMemo = function(s, A) {
    return C.H.useMemo(s, A);
  }, Z.useOptimistic = function(s, A) {
    return C.H.useOptimistic(s, A);
  }, Z.useReducer = function(s, A, M) {
    return C.H.useReducer(s, A, M);
  }, Z.useRef = function(s) {
    return C.H.useRef(s);
  }, Z.useState = function(s) {
    return C.H.useState(s);
  }, Z.useSyncExternalStore = function(s, A, M) {
    return C.H.useSyncExternalStore(s, A, M);
  }, Z.useTransition = function() {
    return C.H.useTransition();
  }, Z.version = "19.1.0", Z;
}
var Id;
function ui() {
  return Id || (Id = 1, Fc.exports = pv()), Fc.exports;
}
var Ul = ui(), Ic = { exports: {} }, ge = {}, Pc = { exports: {} }, li = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Pd;
function Hv() {
  return Pd || (Pd = 1, function(O) {
    function hl(g, z) {
      var x = g.length;
      g.push(z);
      l: for (; 0 < x; ) {
        var cl = x - 1 >>> 1, s = g[cl];
        if (0 < G(s, z)) g[cl] = z, g[x] = s, x = cl;
        else break l;
      }
    }
    function $(g) {
      return g.length === 0 ? null : g[0];
    }
    function m(g) {
      if (g.length === 0) return null;
      var z = g[0], x = g.pop();
      if (x !== z) {
        g[0] = x;
        l: for (var cl = 0, s = g.length, A = s >>> 1; cl < A; ) {
          var M = 2 * (cl + 1) - 1, _ = g[M], N = M + 1, k = g[N];
          if (0 > G(_, x)) N < s && 0 > G(k, _) ? (g[cl] = k, g[N] = x, cl = N) : (g[cl] = _, g[M] = x, cl = M);
          else if (N < s && 0 > G(k, x)) g[cl] = k, g[N] = x, cl = N;
          else break l;
        }
      }
      return z;
    }
    function G(g, z) {
      var x = g.sortIndex - z.sortIndex;
      return x !== 0 ? x : g.id - z.id;
    }
    if (O.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var B = performance;
      O.unstable_now = function() {
        return B.now();
      };
    } else {
      var sl = Date, El = sl.now();
      O.unstable_now = function() {
        return sl.now() - El;
      };
    }
    var p = [], E = [], R = 1, P = null, al = 3, Al = false, Ol = false, Ll = false, Rl = false, Ut = typeof setTimeout == "function" ? setTimeout : null, gt = typeof clearTimeout == "function" ? clearTimeout : null, pl = typeof setImmediate < "u" ? setImmediate : null;
    function Kl(g) {
      for (var z = $(E); z !== null; ) {
        if (z.callback === null) m(E);
        else if (z.startTime <= g) m(E), z.sortIndex = z.expirationTime, hl(p, z);
        else break;
        z = $(E);
      }
    }
    function C(g) {
      if (Ll = false, Kl(g), !Ol) if ($(p) !== null) Ol = true, Zl || (Zl = true, H());
      else {
        var z = $(E);
        z !== null && L(C, z.startTime - g);
      }
    }
    var Zl = false, Cl = -1, ol = 5, ct = -1;
    function Lt() {
      return Rl ? true : !(O.unstable_now() - ct < ol);
    }
    function St() {
      if (Rl = false, Zl) {
        var g = O.unstable_now();
        ct = g;
        var z = true;
        try {
          l: {
            Ol = false, Ll && (Ll = false, gt(Cl), Cl = -1), Al = true;
            var x = al;
            try {
              t: {
                for (Kl(g), P = $(p); P !== null && !(P.expirationTime > g && Lt()); ) {
                  var cl = P.callback;
                  if (typeof cl == "function") {
                    P.callback = null, al = P.priorityLevel;
                    var s = cl(P.expirationTime <= g);
                    if (g = O.unstable_now(), typeof s == "function") {
                      P.callback = s, Kl(g), z = true;
                      break t;
                    }
                    P === $(p) && m(p), Kl(g);
                  } else m(p);
                  P = $(p);
                }
                if (P !== null) z = true;
                else {
                  var A = $(E);
                  A !== null && L(C, A.startTime - g), z = false;
                }
              }
              break l;
            } finally {
              P = null, al = x, Al = false;
            }
            z = void 0;
          }
        } finally {
          z ? H() : Zl = false;
        }
      }
    }
    var H;
    if (typeof pl == "function") H = function() {
      pl(St);
    };
    else if (typeof MessageChannel < "u") {
      var ll = new MessageChannel(), rl = ll.port2;
      ll.port1.onmessage = St, H = function() {
        rl.postMessage(null);
      };
    } else H = function() {
      Ut(St, 0);
    };
    function L(g, z) {
      Cl = Ut(function() {
        g(O.unstable_now());
      }, z);
    }
    O.unstable_IdlePriority = 5, O.unstable_ImmediatePriority = 1, O.unstable_LowPriority = 4, O.unstable_NormalPriority = 3, O.unstable_Profiling = null, O.unstable_UserBlockingPriority = 2, O.unstable_cancelCallback = function(g) {
      g.callback = null;
    }, O.unstable_forceFrameRate = function(g) {
      0 > g || 125 < g ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ol = 0 < g ? Math.floor(1e3 / g) : 5;
    }, O.unstable_getCurrentPriorityLevel = function() {
      return al;
    }, O.unstable_next = function(g) {
      switch (al) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = al;
      }
      var x = al;
      al = z;
      try {
        return g();
      } finally {
        al = x;
      }
    }, O.unstable_requestPaint = function() {
      Rl = true;
    }, O.unstable_runWithPriority = function(g, z) {
      switch (g) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          g = 3;
      }
      var x = al;
      al = g;
      try {
        return z();
      } finally {
        al = x;
      }
    }, O.unstable_scheduleCallback = function(g, z, x) {
      var cl = O.unstable_now();
      switch (typeof x == "object" && x !== null ? (x = x.delay, x = typeof x == "number" && 0 < x ? cl + x : cl) : x = cl, g) {
        case 1:
          var s = -1;
          break;
        case 2:
          s = 250;
          break;
        case 5:
          s = 1073741823;
          break;
        case 4:
          s = 1e4;
          break;
        default:
          s = 5e3;
      }
      return s = x + s, g = { id: R++, callback: z, priorityLevel: g, startTime: x, expirationTime: s, sortIndex: -1 }, x > cl ? (g.sortIndex = x, hl(E, g), $(p) === null && g === $(E) && (Ll ? (gt(Cl), Cl = -1) : Ll = true, L(C, x - cl))) : (g.sortIndex = s, hl(p, g), Ol || Al || (Ol = true, Zl || (Zl = true, H()))), g;
    }, O.unstable_shouldYield = Lt, O.unstable_wrapCallback = function(g) {
      var z = al;
      return function() {
        var x = al;
        al = z;
        try {
          return g.apply(this, arguments);
        } finally {
          al = x;
        }
      };
    };
  }(li)), li;
}
var lo;
function Nv() {
  return lo || (lo = 1, Pc.exports = Hv()), Pc.exports;
}
var ti = { exports: {} }, Ql = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var to;
function qv() {
  if (to) return Ql;
  to = 1;
  var O = ui();
  function hl(p) {
    var E = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var R = 2; R < arguments.length; R++) E += "&args[]=" + encodeURIComponent(arguments[R]);
    }
    return "Minified React error #" + p + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function $() {
  }
  var m = { d: { f: $, r: function() {
    throw Error(hl(522));
  }, D: $, C: $, L: $, m: $, X: $, S: $, M: $ }, p: 0, findDOMNode: null }, G = Symbol.for("react.portal");
  function B(p, E, R) {
    var P = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: G, key: P == null ? null : "" + P, children: p, containerInfo: E, implementation: R };
  }
  var sl = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function El(p, E) {
    if (p === "font") return "";
    if (typeof E == "string") return E === "use-credentials" ? E : "";
  }
  return Ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m, Ql.createPortal = function(p, E) {
    var R = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11) throw Error(hl(299));
    return B(p, E, null, R);
  }, Ql.flushSync = function(p) {
    var E = sl.T, R = m.p;
    try {
      if (sl.T = null, m.p = 2, p) return p();
    } finally {
      sl.T = E, m.p = R, m.d.f();
    }
  }, Ql.preconnect = function(p, E) {
    typeof p == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, m.d.C(p, E));
  }, Ql.prefetchDNS = function(p) {
    typeof p == "string" && m.d.D(p);
  }, Ql.preinit = function(p, E) {
    if (typeof p == "string" && E && typeof E.as == "string") {
      var R = E.as, P = El(R, E.crossOrigin), al = typeof E.integrity == "string" ? E.integrity : void 0, Al = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      R === "style" ? m.d.S(p, typeof E.precedence == "string" ? E.precedence : void 0, { crossOrigin: P, integrity: al, fetchPriority: Al }) : R === "script" && m.d.X(p, { crossOrigin: P, integrity: al, fetchPriority: Al, nonce: typeof E.nonce == "string" ? E.nonce : void 0 });
    }
  }, Ql.preinitModule = function(p, E) {
    if (typeof p == "string") if (typeof E == "object" && E !== null) {
      if (E.as == null || E.as === "script") {
        var R = El(E.as, E.crossOrigin);
        m.d.M(p, { crossOrigin: R, integrity: typeof E.integrity == "string" ? E.integrity : void 0, nonce: typeof E.nonce == "string" ? E.nonce : void 0 });
      }
    } else E == null && m.d.M(p);
  }, Ql.preload = function(p, E) {
    if (typeof p == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var R = E.as, P = El(R, E.crossOrigin);
      m.d.L(p, R, { crossOrigin: P, integrity: typeof E.integrity == "string" ? E.integrity : void 0, nonce: typeof E.nonce == "string" ? E.nonce : void 0, type: typeof E.type == "string" ? E.type : void 0, fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0, referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0, imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0, imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0, media: typeof E.media == "string" ? E.media : void 0 });
    }
  }, Ql.preloadModule = function(p, E) {
    if (typeof p == "string") if (E) {
      var R = El(E.as, E.crossOrigin);
      m.d.m(p, { as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0, crossOrigin: R, integrity: typeof E.integrity == "string" ? E.integrity : void 0 });
    } else m.d.m(p);
  }, Ql.requestFormReset = function(p) {
    m.d.r(p);
  }, Ql.unstable_batchedUpdates = function(p, E) {
    return p(E);
  }, Ql.useFormState = function(p, E, R) {
    return sl.H.useFormState(p, E, R);
  }, Ql.useFormStatus = function() {
    return sl.H.useHostTransitionStatus();
  }, Ql.version = "19.1.0", Ql;
}
var uo;
function Bv() {
  if (uo) return ti.exports;
  uo = 1;
  function O() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
    } catch (hl) {
      console.error(hl);
    }
  }
  return O(), ti.exports = qv(), ti.exports;
}
/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var ao;
function xv() {
  if (ao) return ge;
  ao = 1;
  var O = Nv(), hl = ui(), $ = Bv();
  function m(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++) t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function G(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function B(l) {
    var t = l, u = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (u = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? u : null;
  }
  function sl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function El(l) {
    if (B(l) !== l) throw Error(m(188));
  }
  function p(l) {
    var t = l.alternate;
    if (!t) {
      if (t = B(l), t === null) throw Error(m(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (a = e.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return El(e), l;
          if (n === a) return El(e), t;
          n = n.sibling;
        }
        throw Error(m(188));
      }
      if (u.return !== a.return) u = e, a = n;
      else {
        for (var f = false, c = e.child; c; ) {
          if (c === u) {
            f = true, u = e, a = n;
            break;
          }
          if (c === a) {
            f = true, a = e, u = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === u) {
              f = true, u = n, a = e;
              break;
            }
            if (c === a) {
              f = true, a = n, u = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(m(189));
        }
      }
      if (u.alternate !== a) throw Error(m(190));
    }
    if (u.tag !== 3) throw Error(m(188));
    return u.stateNode.current === u ? l : t;
  }
  function E(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = E(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var R = Object.assign, P = Symbol.for("react.element"), al = Symbol.for("react.transitional.element"), Al = Symbol.for("react.portal"), Ol = Symbol.for("react.fragment"), Ll = Symbol.for("react.strict_mode"), Rl = Symbol.for("react.profiler"), Ut = Symbol.for("react.provider"), gt = Symbol.for("react.consumer"), pl = Symbol.for("react.context"), Kl = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), Zl = Symbol.for("react.suspense_list"), Cl = Symbol.for("react.memo"), ol = Symbol.for("react.lazy"), ct = Symbol.for("react.activity"), Lt = Symbol.for("react.memo_cache_sentinel"), St = Symbol.iterator;
  function H(l) {
    return l === null || typeof l != "object" ? null : (l = St && l[St] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var ll = Symbol.for("react.client.reference");
  function rl(l) {
    if (l == null) return null;
    if (typeof l == "function") return l.$$typeof === ll ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Ol:
        return "Fragment";
      case Rl:
        return "Profiler";
      case Ll:
        return "StrictMode";
      case C:
        return "Suspense";
      case Zl:
        return "SuspenseList";
      case ct:
        return "Activity";
    }
    if (typeof l == "object") switch (l.$$typeof) {
      case Al:
        return "Portal";
      case pl:
        return (l.displayName || "Context") + ".Provider";
      case gt:
        return (l._context.displayName || "Context") + ".Consumer";
      case Kl:
        var t = l.render;
        return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
      case Cl:
        return t = l.displayName || null, t !== null ? t : rl(l.type) || "Memo";
      case ol:
        t = l._payload, l = l._init;
        try {
          return rl(l(t));
        } catch {
        }
    }
    return null;
  }
  var L = Array.isArray, g = hl.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = $.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, x = { pending: false, data: null, method: null, action: null }, cl = [], s = -1;
  function A(l) {
    return { current: l };
  }
  function M(l) {
    0 > s || (l.current = cl[s], cl[s] = null, s--);
  }
  function _(l, t) {
    s++, cl[s] = l.current, l.current = t;
  }
  var N = A(null), k = A(null), X = A(null), Fl = A(null);
  function vl(l, t) {
    switch (_(X, t), _(k, l), _(N, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? zd(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI) t = zd(t), l = _d(t, l);
        else switch (l) {
          case "svg":
            l = 1;
            break;
          case "math":
            l = 2;
            break;
          default:
            l = 0;
        }
    }
    M(N), _(N, l);
  }
  function Kt() {
    M(N), M(k), M(X);
  }
  function Bn(l) {
    l.memoizedState !== null && _(Fl, l);
    var t = N.current, u = _d(t, l.type);
    t !== u && (_(k, l), _(N, u));
  }
  function Se(l) {
    k.current === l && (M(N), M(k)), Fl.current === l && (M(Fl), oe._currentValue = x);
  }
  var xn = Object.prototype.hasOwnProperty, Yn = O.unstable_scheduleCallback, jn = O.unstable_cancelCallback, no = O.unstable_shouldYield, fo = O.unstable_requestPaint, At = O.unstable_now, co = O.unstable_getCurrentPriorityLevel, ai = O.unstable_ImmediatePriority, ei = O.unstable_UserBlockingPriority, be = O.unstable_NormalPriority, io = O.unstable_LowPriority, ni = O.unstable_IdlePriority, so = O.log, oo = O.unstable_setDisableYieldValue, ba = null, Il = null;
  function Jt(l) {
    if (typeof so == "function" && oo(l), Il && typeof Il.setStrictMode == "function") try {
      Il.setStrictMode(ba, l);
    } catch {
    }
  }
  var Pl = Math.clz32 ? Math.clz32 : yo, ro = Math.log, vo = Math.LN2;
  function yo(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (ro(l) / vo | 0) | 0;
  }
  var Te = 256, Ee = 4194304;
  function mu(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ae(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? e = mu(a) : (f &= c, f !== 0 ? e = mu(f) : u || (u = c & ~l, u !== 0 && (e = mu(u))))) : (c = a & ~n, c !== 0 ? e = mu(c) : f !== 0 ? e = mu(f) : u || (u = a & ~l, u !== 0 && (e = mu(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function Ta(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function ho(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function fi() {
    var l = Te;
    return Te <<= 1, (Te & 4194048) === 0 && (Te = 256), l;
  }
  function ci() {
    var l = Ee;
    return Ee <<= 1, (Ee & 62914560) === 0 && (Ee = 4194304), l;
  }
  function Gn(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function Ea(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function mo(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, v = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var S = 31 - Pl(u), T = 1 << S;
      c[S] = 0, i[S] = -1;
      var y = v[S];
      if (y !== null) for (v[S] = null, S = 0; S < y.length; S++) {
        var h = y[S];
        h !== null && (h.lane &= -536870913);
      }
      u &= ~T;
    }
    a !== 0 && ii(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function ii(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - Pl(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 4194090;
  }
  function si(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - Pl(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function Xn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Qn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function di() {
    var l = z.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Vd(l.type));
  }
  function go(l, t) {
    var u = z.p;
    try {
      return z.p = l, t();
    } finally {
      z.p = u;
    }
  }
  var wt = Math.random().toString(36).slice(2), Gl = "__reactFiber$" + wt, Jl = "__reactProps$" + wt, Bu = "__reactContainer$" + wt, Zn = "__reactEvents$" + wt, So = "__reactListeners$" + wt, bo = "__reactHandles$" + wt, oi = "__reactResources$" + wt, Aa = "__reactMarker$" + wt;
  function Cn(l) {
    delete l[Gl], delete l[Jl], delete l[Zn], delete l[So], delete l[bo];
  }
  function xu(l) {
    var t = l[Gl];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[Bu] || u[Gl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null) for (l = Ud(l); l !== null; ) {
          if (u = l[Gl]) return u;
          l = Ud(l);
        }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Yu(l) {
    if (l = l[Gl] || l[Bu]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return l;
    }
    return null;
  }
  function za(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(m(33));
  }
  function ju(l) {
    var t = l[oi];
    return t || (t = l[oi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Hl(l) {
    l[Aa] = true;
  }
  var ri = /* @__PURE__ */ new Set(), vi = {};
  function gu(l, t) {
    Gu(l, t), Gu(l + "Capture", t);
  }
  function Gu(l, t) {
    for (vi[l] = t, l = 0; l < t.length; l++) ri.add(t[l]);
  }
  var To = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), yi = {}, hi = {};
  function Eo(l) {
    return xn.call(hi, l) ? true : xn.call(yi, l) ? false : To.test(l) ? hi[l] = true : (yi[l] = true, false);
  }
  function ze(l, t, u) {
    if (Eo(t)) if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
          l.removeAttribute(t);
          return;
        case "boolean":
          var a = t.toLowerCase().slice(0, 5);
          if (a !== "data-" && a !== "aria-") {
            l.removeAttribute(t);
            return;
          }
      }
      l.setAttribute(t, "" + u);
    }
  }
  function _e(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + u);
    }
  }
  function Rt(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, "" + a);
    }
  }
  var Vn, mi;
  function Xu(l) {
    if (Vn === void 0) try {
      throw Error();
    } catch (u) {
      var t = u.stack.trim().match(/\n( *(at )?)/);
      Vn = t && t[1] || "", mi = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Vn + l + mi;
  }
  var Ln = false;
  function Kn(l, t) {
    if (!l || Ln) return "";
    Ln = true;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = { DetermineComponentFrameRoot: function() {
        try {
          if (t) {
            var T = function() {
              throw Error();
            };
            if (Object.defineProperty(T.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(T, []);
              } catch (h) {
                var y = h;
              }
              Reflect.construct(l, [], T);
            } else {
              try {
                T.call();
              } catch (h) {
                y = h;
              }
              l.call(T.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (h) {
              y = h;
            }
            (T = l()) && typeof T.catch == "function" && T.catch(function() {
            });
          }
        } catch (h) {
          if (h && y && typeof h.stack == "string") return [h.stack, y.stack];
        }
        return [null, null];
      } };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      e && e.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var n = a.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), v = c.split(`
`);
        for (e = a = 0; a < i.length && !i[a].includes("DetermineComponentFrameRoot"); ) a++;
        for (; e < v.length && !v[e].includes("DetermineComponentFrameRoot"); ) e++;
        if (a === i.length || e === v.length) for (a = i.length - 1, e = v.length - 1; 1 <= a && 0 <= e && i[a] !== v[e]; ) e--;
        for (; 1 <= a && 0 <= e; a--, e--) if (i[a] !== v[e]) {
          if (a !== 1 || e !== 1) do
            if (a--, e--, 0 > e || i[a] !== v[e]) {
              var S = `
` + i[a].replace(" at new ", " at ");
              return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
            }
          while (1 <= a && 0 <= e);
          break;
        }
      }
    } finally {
      Ln = false, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Xu(u) : "";
  }
  function Ao(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Xu(l.type);
      case 16:
        return Xu("Lazy");
      case 13:
        return Xu("Suspense");
      case 19:
        return Xu("SuspenseList");
      case 0:
      case 15:
        return Kn(l.type, false);
      case 11:
        return Kn(l.type.render, false);
      case 1:
        return Kn(l.type, true);
      case 31:
        return Xu("Activity");
      default:
        return "";
    }
  }
  function gi(l) {
    try {
      var t = "";
      do
        t += Ao(l), l = l.return;
      while (l);
      return t;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function it(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Si(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function zo(l) {
    var t = Si(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(l.constructor.prototype, t), a = "" + l[t];
    if (!l.hasOwnProperty(t) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var e = u.get, n = u.set;
      return Object.defineProperty(l, t, { configurable: true, get: function() {
        return e.call(this);
      }, set: function(f) {
        a = "" + f, n.call(this, f);
      } }), Object.defineProperty(l, t, { enumerable: u.enumerable }), { getValue: function() {
        return a;
      }, setValue: function(f) {
        a = "" + f;
      }, stopTracking: function() {
        l._valueTracker = null, delete l[t];
      } };
    }
  }
  function Oe(l) {
    l._valueTracker || (l._valueTracker = zo(l));
  }
  function bi(l) {
    if (!l) return false;
    var t = l._valueTracker;
    if (!t) return true;
    var u = t.getValue(), a = "";
    return l && (a = Si(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), true) : false;
  }
  function Me(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var _o = /[\n"\\]/g;
  function st(l) {
    return l.replace(_o, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Jn(l, t, u, a, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + it(t)) : l.value !== "" + it(t) && (l.value = "" + it(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? wn(l, f, it(t)) : u != null ? wn(l, f, it(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + it(c) : l.removeAttribute("name");
  }
  function Ti(l, t, u, a, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) return;
      u = u != null ? "" + it(u) : "", t = t != null ? "" + it(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f);
  }
  function wn(l, t, u) {
    t === "number" && Me(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Qu(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < u.length; e++) t["$" + u[e]] = true;
      for (u = 0; u < l.length; u++) e = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && a && (l[u].defaultSelected = true);
    } else {
      for (u = "" + it(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          l[e].selected = true, a && (l[e].defaultSelected = true);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = true);
    }
  }
  function Ei(l, t, u) {
    if (t != null && (t = "" + it(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + it(u) : "";
  }
  function Ai(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(m(92));
        if (L(a)) {
          if (1 < a.length) throw Error(m(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = it(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a);
  }
  function Zu(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Oo = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function zi(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || Oo.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function _i(l, t, u) {
    if (t != null && typeof t != "object") throw Error(m(62));
    if (l = l.style, u != null) {
      for (var a in u) !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var e in t) a = t[e], t.hasOwnProperty(e) && u[e] !== a && zi(l, e, a);
    } else for (var n in t) t.hasOwnProperty(n) && zi(l, n, t[n]);
  }
  function Wn(l) {
    if (l.indexOf("-") === -1) return false;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var Mo = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Do = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function De(l) {
    return Do.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var $n = null;
  function kn(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Cu = null, Vu = null;
  function Oi(l) {
    var t = Yu(l);
    if (t && (l = t.stateNode)) {
      var u = l[Jl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (Jn(l, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name), t = u.name, u.type === "radio" && t != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll('input[name="' + st("" + t) + '"][type="radio"]'), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Jl] || null;
                if (!e) throw Error(m(90));
                Jn(a, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name);
              }
            }
            for (t = 0; t < u.length; t++) a = u[t], a.form === l.form && bi(a);
          }
          break l;
        case "textarea":
          Ei(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && Qu(l, !!u.multiple, t, false);
      }
    }
  }
  var Fn = false;
  function Mi(l, t, u) {
    if (Fn) return l(t, u);
    Fn = true;
    try {
      var a = l(t);
      return a;
    } finally {
      if (Fn = false, (Cu !== null || Vu !== null) && (vn(), Cu && (t = Cu, l = Vu, Vu = Cu = null, Oi(t), l))) for (t = 0; t < l.length; t++) Oi(l[t]);
    }
  }
  function _a(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Jl] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = false;
    }
    if (l) return null;
    if (u && typeof u != "function") throw Error(m(231, t, typeof u));
    return u;
  }
  var pt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), In = false;
  if (pt) try {
    var Oa = {};
    Object.defineProperty(Oa, "passive", { get: function() {
      In = true;
    } }), window.addEventListener("test", Oa, Oa), window.removeEventListener("test", Oa, Oa);
  } catch {
    In = false;
  }
  var Wt = null, Pn = null, Ue = null;
  function Di() {
    if (Ue) return Ue;
    var l, t = Pn, u = t.length, a, e = "value" in Wt ? Wt.value : Wt.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return Ue = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Re(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function pe() {
    return true;
  }
  function Ui() {
    return false;
  }
  function wl(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l) l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === false) ? pe : Ui, this.isPropagationStopped = Ui, this;
    }
    return R(t.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var u = this.nativeEvent;
      u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = false), this.isDefaultPrevented = pe);
    }, stopPropagation: function() {
      var u = this.nativeEvent;
      u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = true), this.isPropagationStopped = pe);
    }, persist: function() {
    }, isPersistent: pe }), t;
  }
  var Su = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(l) {
    return l.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, He = wl(Su), Ma = R({}, Su, { view: 0, detail: 0 }), Uo = wl(Ma), lf, tf, Da, Ne = R({}, Ma, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: af, button: 0, buttons: 0, relatedTarget: function(l) {
    return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
  }, movementX: function(l) {
    return "movementX" in l ? l.movementX : (l !== Da && (Da && l.type === "mousemove" ? (lf = l.screenX - Da.screenX, tf = l.screenY - Da.screenY) : tf = lf = 0, Da = l), lf);
  }, movementY: function(l) {
    return "movementY" in l ? l.movementY : tf;
  } }), Ri = wl(Ne), Ro = R({}, Ne, { dataTransfer: 0 }), po = wl(Ro), Ho = R({}, Ma, { relatedTarget: 0 }), uf = wl(Ho), No = R({}, Su, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), qo = wl(No), Bo = R({}, Su, { clipboardData: function(l) {
    return "clipboardData" in l ? l.clipboardData : window.clipboardData;
  } }), xo = wl(Bo), Yo = R({}, Su, { data: 0 }), pi = wl(Yo), jo = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Go = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Xo = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Qo(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Xo[l]) ? !!t[l] : false;
  }
  function af() {
    return Qo;
  }
  var Zo = R({}, Ma, { key: function(l) {
    if (l.key) {
      var t = jo[l.key] || l.key;
      if (t !== "Unidentified") return t;
    }
    return l.type === "keypress" ? (l = Re(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Go[l.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: af, charCode: function(l) {
    return l.type === "keypress" ? Re(l) : 0;
  }, keyCode: function(l) {
    return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
  }, which: function(l) {
    return l.type === "keypress" ? Re(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
  } }), Co = wl(Zo), Vo = R({}, Ne, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Hi = wl(Vo), Lo = R({}, Ma, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: af }), Ko = wl(Lo), Jo = R({}, Su, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), wo = wl(Jo), Wo = R({}, Ne, { deltaX: function(l) {
    return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
  }, deltaY: function(l) {
    return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), $o = wl(Wo), ko = R({}, Su, { newState: 0, oldState: 0 }), Fo = wl(ko), Io = [9, 13, 27, 32], ef = pt && "CompositionEvent" in window, Ua = null;
  pt && "documentMode" in document && (Ua = document.documentMode);
  var Po = pt && "TextEvent" in window && !Ua, Ni = pt && (!ef || Ua && 8 < Ua && 11 >= Ua), qi = " ", Bi = false;
  function xi(l, t) {
    switch (l) {
      case "keyup":
        return Io.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function Yi(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Lu = false;
  function lr(l, t) {
    switch (l) {
      case "compositionend":
        return Yi(t);
      case "keypress":
        return t.which !== 32 ? null : (Bi = true, qi);
      case "textInput":
        return l = t.data, l === qi && Bi ? null : l;
      default:
        return null;
    }
  }
  function tr(l, t) {
    if (Lu) return l === "compositionend" || !ef && xi(l, t) ? (l = Di(), Ue = Pn = Wt = null, Lu = false, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ni && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ur = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function ji(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!ur[l.type] : t === "textarea";
  }
  function Gi(l, t, u, a) {
    Cu ? Vu ? Vu.push(a) : Vu = [a] : Cu = a, t = bn(t, "onChange"), 0 < t.length && (u = new He("onChange", "change", null, u, a), l.push({ event: u, listeners: t }));
  }
  var Ra = null, pa = null;
  function ar(l) {
    Sd(l, 0);
  }
  function qe(l) {
    var t = za(l);
    if (bi(t)) return l;
  }
  function Xi(l, t) {
    if (l === "change") return t;
  }
  var Qi = false;
  if (pt) {
    var nf;
    if (pt) {
      var ff = "oninput" in document;
      if (!ff) {
        var Zi = document.createElement("div");
        Zi.setAttribute("oninput", "return;"), ff = typeof Zi.oninput == "function";
      }
      nf = ff;
    } else nf = false;
    Qi = nf && (!document.documentMode || 9 < document.documentMode);
  }
  function Ci() {
    Ra && (Ra.detachEvent("onpropertychange", Vi), pa = Ra = null);
  }
  function Vi(l) {
    if (l.propertyName === "value" && qe(pa)) {
      var t = [];
      Gi(t, pa, l, kn(l)), Mi(ar, t);
    }
  }
  function er(l, t, u) {
    l === "focusin" ? (Ci(), Ra = t, pa = u, Ra.attachEvent("onpropertychange", Vi)) : l === "focusout" && Ci();
  }
  function nr(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown") return qe(pa);
  }
  function fr(l, t) {
    if (l === "click") return qe(t);
  }
  function cr(l, t) {
    if (l === "input" || l === "change") return qe(t);
  }
  function ir(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var lt = typeof Object.is == "function" ? Object.is : ir;
  function Ha(l, t) {
    if (lt(l, t)) return true;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null) return false;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return false;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!xn.call(t, e) || !lt(l[e], t[e])) return false;
    }
    return true;
  }
  function Li(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Ki(l, t) {
    var u = Li(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = l + u.textContent.length, l <= t && a >= t) return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Li(u);
    }
  }
  function Ji(l, t) {
    return l && t ? l === t ? true : l && l.nodeType === 3 ? false : t && t.nodeType === 3 ? Ji(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : false : false;
  }
  function wi(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Me(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = false;
      }
      if (u) l = t.contentWindow;
      else break;
      t = Me(l.document);
    }
    return t;
  }
  function cf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var sr = pt && "documentMode" in document && 11 >= document.documentMode, Ku = null, sf = null, Na = null, df = false;
  function Wi(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    df || Ku == null || Ku !== Me(a) || (a = Ku, "selectionStart" in a && cf(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), Na && Ha(Na, a) || (Na = a, a = bn(sf, "onSelect"), 0 < a.length && (t = new He("onSelect", "select", null, t, u), l.push({ event: t, listeners: a }), t.target = Ku)));
  }
  function bu(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var Ju = { animationend: bu("Animation", "AnimationEnd"), animationiteration: bu("Animation", "AnimationIteration"), animationstart: bu("Animation", "AnimationStart"), transitionrun: bu("Transition", "TransitionRun"), transitionstart: bu("Transition", "TransitionStart"), transitioncancel: bu("Transition", "TransitionCancel"), transitionend: bu("Transition", "TransitionEnd") }, of = {}, $i = {};
  pt && ($i = document.createElement("div").style, "AnimationEvent" in window || (delete Ju.animationend.animation, delete Ju.animationiteration.animation, delete Ju.animationstart.animation), "TransitionEvent" in window || delete Ju.transitionend.transition);
  function Tu(l) {
    if (of[l]) return of[l];
    if (!Ju[l]) return l;
    var t = Ju[l], u;
    for (u in t) if (t.hasOwnProperty(u) && u in $i) return of[l] = t[u];
    return l;
  }
  var ki = Tu("animationend"), Fi = Tu("animationiteration"), Ii = Tu("animationstart"), dr = Tu("transitionrun"), or = Tu("transitionstart"), rr = Tu("transitioncancel"), Pi = Tu("transitionend"), ls = /* @__PURE__ */ new Map(), rf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  rf.push("scrollEnd");
  function bt(l, t) {
    ls.set(l, t), gu(t, [l]);
  }
  var ts = /* @__PURE__ */ new WeakMap();
  function dt(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = ts.get(l);
      return u !== void 0 ? u : (t = { value: l, source: t, stack: gi(t) }, ts.set(l, t), t);
    }
    return { value: l, source: t, stack: gi(t) };
  }
  var ot = [], wu = 0, vf = 0;
  function Be() {
    for (var l = wu, t = vf = wu = 0; t < l; ) {
      var u = ot[t];
      ot[t++] = null;
      var a = ot[t];
      ot[t++] = null;
      var e = ot[t];
      ot[t++] = null;
      var n = ot[t];
      if (ot[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && us(u, e, n);
    }
  }
  function xe(l, t, u, a) {
    ot[wu++] = l, ot[wu++] = t, ot[wu++] = u, ot[wu++] = a, vf |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function yf(l, t, u, a) {
    return xe(l, t, u, a), Ye(l);
  }
  function Wu(l, t) {
    return xe(l, null, null, t), Ye(l);
  }
  function us(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = false, n = l.return; n !== null; ) n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = true)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - Pl(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function Ye(l) {
    if (50 < ae) throw ae = 0, Tc = null, Error(m(185));
    for (var t = l.return; t !== null; ) l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var $u = {};
  function vr(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function tt(l, t, u, a) {
    return new vr(l, t, u, a);
  }
  function hf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Ht(l, t) {
    var u = l.alternate;
    return u === null ? (u = tt(l.tag, t, l.key, l.mode), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function as(l, t) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), l;
  }
  function je(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof l == "function") hf(l) && (f = 1);
    else if (typeof l == "string") f = hv(l, u, N.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else l: switch (l) {
      case ct:
        return l = tt(31, u, t, e), l.elementType = ct, l.lanes = n, l;
      case Ol:
        return Eu(u.children, e, n, t);
      case Ll:
        f = 8, e |= 24;
        break;
      case Rl:
        return l = tt(12, u, t, e | 2), l.elementType = Rl, l.lanes = n, l;
      case C:
        return l = tt(13, u, t, e), l.elementType = C, l.lanes = n, l;
      case Zl:
        return l = tt(19, u, t, e), l.elementType = Zl, l.lanes = n, l;
      default:
        if (typeof l == "object" && l !== null) switch (l.$$typeof) {
          case Ut:
          case pl:
            f = 10;
            break l;
          case gt:
            f = 9;
            break l;
          case Kl:
            f = 11;
            break l;
          case Cl:
            f = 14;
            break l;
          case ol:
            f = 16, a = null;
            break l;
        }
        f = 29, u = Error(m(130, l === null ? "null" : typeof l, "")), a = null;
    }
    return t = tt(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function Eu(l, t, u, a) {
    return l = tt(7, l, a, t), l.lanes = u, l;
  }
  function mf(l, t, u) {
    return l = tt(6, l, null, t), l.lanes = u, l;
  }
  function gf(l, t, u) {
    return t = tt(4, l.children !== null ? l.children : [], l.key, t), t.lanes = u, t.stateNode = { containerInfo: l.containerInfo, pendingChildren: null, implementation: l.implementation }, t;
  }
  var ku = [], Fu = 0, Ge = null, Xe = 0, rt = [], vt = 0, Au = null, Nt = 1, qt = "";
  function zu(l, t) {
    ku[Fu++] = Xe, ku[Fu++] = Ge, Ge = l, Xe = t;
  }
  function es(l, t, u) {
    rt[vt++] = Nt, rt[vt++] = qt, rt[vt++] = Au, Au = l;
    var a = Nt;
    l = qt;
    var e = 32 - Pl(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - Pl(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, Nt = 1 << 32 - Pl(t) + e | u << e | a, qt = n + l;
    } else Nt = 1 << n | u << e | a, qt = l;
  }
  function Sf(l) {
    l.return !== null && (zu(l, 1), es(l, 1, 0));
  }
  function bf(l) {
    for (; l === Ge; ) Ge = ku[--Fu], ku[Fu] = null, Xe = ku[--Fu], ku[Fu] = null;
    for (; l === Au; ) Au = rt[--vt], rt[vt] = null, qt = rt[--vt], rt[vt] = null, Nt = rt[--vt], rt[vt] = null;
  }
  var Vl = null, gl = null, I = false, _u = null, zt = false, Tf = Error(m(519));
  function Ou(l) {
    var t = Error(m(418, ""));
    throw xa(dt(t, l)), Tf;
  }
  function ns(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[Gl] = l, t[Jl] = a, u) {
      case "dialog":
        w("cancel", t), w("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        w("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ne.length; u++) w(ne[u], t);
        break;
      case "source":
        w("error", t);
        break;
      case "img":
      case "image":
      case "link":
        w("error", t), w("load", t);
        break;
      case "details":
        w("toggle", t);
        break;
      case "input":
        w("invalid", t), Ti(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true), Oe(t);
        break;
      case "select":
        w("invalid", t);
        break;
      case "textarea":
        w("invalid", t), Ai(t, a.value, a.defaultValue, a.children), Oe(t);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === true || Ad(t.textContent, u) ? (a.popover != null && (w("beforetoggle", t), w("toggle", t)), a.onScroll != null && w("scroll", t), a.onScrollEnd != null && w("scrollend", t), a.onClick != null && (t.onclick = Tn), t = true) : t = false, t || Ou(l);
  }
  function fs(l) {
    for (Vl = l.return; Vl; ) switch (Vl.tag) {
      case 5:
      case 13:
        zt = false;
        return;
      case 27:
      case 3:
        zt = true;
        return;
      default:
        Vl = Vl.return;
    }
  }
  function qa(l) {
    if (l !== Vl) return false;
    if (!I) return fs(l), I = true, false;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Yc(l.type, l.memoizedProps)), u = !u), u && gl && Ou(l), fs(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8) if (u = l.data, u === "/$") {
            if (t === 0) {
              gl = Et(l.nextSibling);
              break l;
            }
            t--;
          } else u !== "$" && u !== "$!" && u !== "$?" || t++;
          l = l.nextSibling;
        }
        gl = null;
      }
    } else t === 27 ? (t = gl, du(l.type) ? (l = Qc, Qc = null, gl = l) : gl = t) : gl = Vl ? Et(l.stateNode.nextSibling) : null;
    return true;
  }
  function Ba() {
    gl = Vl = null, I = false;
  }
  function cs() {
    var l = _u;
    return l !== null && (kl === null ? kl = l : kl.push.apply(kl, l), _u = null), l;
  }
  function xa(l) {
    _u === null ? _u = [l] : _u.push(l);
  }
  var Ef = A(null), Mu = null, Bt = null;
  function $t(l, t, u) {
    _(Ef, t._currentValue), t._currentValue = u;
  }
  function xt(l) {
    l._currentValue = Ef.current, M(Ef);
  }
  function Af(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function zf(l, t, u, a) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++) if (c.context === t[i]) {
            n.lanes |= u, c = n.alternate, c !== null && (c.lanes |= u), Af(n.return, u, l), a || (f = null);
            break l;
          }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(m(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), Af(f, u, l), f = null;
      } else f = e.child;
      if (f !== null) f.return = e;
      else for (f = e; f !== null; ) {
        if (f === l) {
          f = null;
          break;
        }
        if (e = f.sibling, e !== null) {
          e.return = f.return, f = e;
          break;
        }
        f = f.return;
      }
      e = f;
    }
  }
  function Ya(l, t, u, a) {
    l = null;
    for (var e = t, n = false; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = true;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(m(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          lt(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === Fl.current) {
        if (f = e.alternate, f === null) throw Error(m(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(oe) : l = [oe]);
      }
      e = e.return;
    }
    l !== null && zf(t, l, u, a), t.flags |= 262144;
  }
  function Qe(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!lt(l.context._currentValue, l.memoizedValue)) return true;
      l = l.next;
    }
    return false;
  }
  function Du(l) {
    Mu = l, Bt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Xl(l) {
    return is(Mu, l);
  }
  function Ze(l, t) {
    return Mu === null && Du(l), is(l, t);
  }
  function is(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, Bt === null) {
      if (l === null) throw Error(m(308));
      Bt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Bt = Bt.next = t;
    return u;
  }
  var yr = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = { aborted: false, addEventListener: function(u, a) {
      l.push(a);
    } };
    this.abort = function() {
      t.aborted = true, l.forEach(function(u) {
        return u();
      });
    };
  }, hr = O.unstable_scheduleCallback, mr = O.unstable_NormalPriority, Ml = { $$typeof: pl, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function _f() {
    return { controller: new yr(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function ja(l) {
    l.refCount--, l.refCount === 0 && hr(mr, function() {
      l.controller.abort();
    });
  }
  var Ga = null, Of = 0, Iu = 0, Pu = null;
  function gr(l, t) {
    if (Ga === null) {
      var u = Ga = [];
      Of = 0, Iu = Dc(), Pu = { status: "pending", value: void 0, then: function(a) {
        u.push(a);
      } };
    }
    return Of++, t.then(ss, ss), t;
  }
  function ss() {
    if (--Of === 0 && Ga !== null) {
      Pu !== null && (Pu.status = "fulfilled");
      var l = Ga;
      Ga = null, Iu = 0, Pu = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Sr(l, t) {
    var u = [], a = { status: "pending", value: null, reason: null, then: function(e) {
      u.push(e);
    } };
    return l.then(function() {
      a.status = "fulfilled", a.value = t;
      for (var e = 0; e < u.length; e++) (0, u[e])(t);
    }, function(e) {
      for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++) (0, u[e])(void 0);
    }), a;
  }
  var ds = g.S;
  g.S = function(l, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && gr(l, t), ds !== null && ds(l, t);
  };
  var Uu = A(null);
  function Mf() {
    var l = Uu.current;
    return l !== null ? l : dl.pooledCache;
  }
  function Ce(l, t) {
    t === null ? _(Uu, Uu.current) : _(Uu, t.pool);
  }
  function os() {
    var l = Mf();
    return l === null ? null : { parent: Ml._currentValue, pool: l };
  }
  var Xa = Error(m(460)), rs = Error(m(474)), Ve = Error(m(542)), Df = { then: function() {
  } };
  function vs(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Le() {
  }
  function ys(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Le, Le), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, ms(l), l;
      default:
        if (typeof t.status == "string") t.then(Le, Le);
        else {
          if (l = dl, l !== null && 100 < l.shellSuspendCounter) throw Error(m(482));
          l = t, l.status = "pending", l.then(function(a) {
            if (t.status === "pending") {
              var e = t;
              e.status = "fulfilled", e.value = a;
            }
          }, function(a) {
            if (t.status === "pending") {
              var e = t;
              e.status = "rejected", e.reason = a;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, ms(l), l;
        }
        throw Qa = t, Xa;
    }
  }
  var Qa = null;
  function hs() {
    if (Qa === null) throw Error(m(459));
    var l = Qa;
    return Qa = null, l;
  }
  function ms(l) {
    if (l === Xa || l === Ve) throw Error(m(483));
  }
  var kt = false;
  function Uf(l) {
    l.updateQueue = { baseState: l.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function Rf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = { baseState: l.baseState, firstBaseUpdate: l.firstBaseUpdate, lastBaseUpdate: l.lastBaseUpdate, shared: l.shared, callbacks: null });
  }
  function Ft(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function It(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (tl & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = Ye(l), us(l, null, u), t;
    }
    return xe(l, a, t, u), Ye(l);
  }
  function Za(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, si(l, u);
    }
  }
  function pf(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var e = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = { lane: u.lane, tag: u.tag, payload: u.payload, callback: null, next: null };
          n === null ? e = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      u = { baseState: a.baseState, firstBaseUpdate: e, lastBaseUpdate: n, shared: a.shared, callbacks: a.callbacks }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var Hf = false;
  function Ca() {
    if (Hf) {
      var l = Pu;
      if (l !== null) throw l;
    }
  }
  function Va(l, t, u, a) {
    Hf = false;
    var e = l.updateQueue;
    kt = false;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, v = i.next;
      i.next = null, f === null ? n = v : f.next = v, f = i;
      var S = l.alternate;
      S !== null && (S = S.updateQueue, c = S.lastBaseUpdate, c !== f && (c === null ? S.firstBaseUpdate = v : c.next = v, S.lastBaseUpdate = i));
    }
    if (n !== null) {
      var T = e.baseState;
      f = 0, S = v = i = null, c = n;
      do {
        var y = c.lane & -536870913, h = y !== c.lane;
        if (h ? (W & y) === y : (a & y) === y) {
          y !== 0 && y === Iu && (Hf = true), S !== null && (S = S.next = { lane: 0, tag: c.tag, payload: c.payload, callback: null, next: null });
          l: {
            var j = l, q = c;
            y = t;
            var fl = u;
            switch (q.tag) {
              case 1:
                if (j = q.payload, typeof j == "function") {
                  T = j.call(fl, T, y);
                  break l;
                }
                T = j;
                break l;
              case 3:
                j.flags = j.flags & -65537 | 128;
              case 0:
                if (j = q.payload, y = typeof j == "function" ? j.call(fl, T, y) : j, y == null) break l;
                T = R({}, T, y);
                break l;
              case 2:
                kt = true;
            }
          }
          y = c.callback, y !== null && (l.flags |= 64, h && (l.flags |= 8192), h = e.callbacks, h === null ? e.callbacks = [y] : h.push(y));
        } else h = { lane: y, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, S === null ? (v = S = h, i = T) : S = S.next = h, f |= y;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null) break;
          h = c, c = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
        }
      } while (true);
      S === null && (i = T), e.baseState = i, e.firstBaseUpdate = v, e.lastBaseUpdate = S, n === null && (e.shared.lanes = 0), fu |= f, l.lanes = f, l.memoizedState = T;
    }
  }
  function gs(l, t) {
    if (typeof l != "function") throw Error(m(191, l));
    l.call(t);
  }
  function Ss(l, t) {
    var u = l.callbacks;
    if (u !== null) for (l.callbacks = null, l = 0; l < u.length; l++) gs(u[l], t);
  }
  var la = A(null), Ke = A(0);
  function bs(l, t) {
    l = Ct, _(Ke, l), _(la, t), Ct = l | t.baseLanes;
  }
  function Nf() {
    _(Ke, Ct), _(la, la.current);
  }
  function qf() {
    Ct = Ke.current, M(la), M(Ke);
  }
  var Pt = 0, V = null, el = null, zl = null, Je = false, ta = false, Ru = false, we = 0, La = 0, ua = null, br = 0;
  function bl() {
    throw Error(m(321));
  }
  function Bf(l, t) {
    if (t === null) return false;
    for (var u = 0; u < t.length && u < l.length; u++) if (!lt(l[u], t[u])) return false;
    return true;
  }
  function xf(l, t, u, a, e, n) {
    return Pt = n, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, g.H = l === null || l.memoizedState === null ? u0 : a0, Ru = false, n = u(a, e), Ru = false, ta && (n = Es(t, u, a, e)), Ts(l), n;
  }
  function Ts(l) {
    g.H = Pe;
    var t = el !== null && el.next !== null;
    if (Pt = 0, zl = el = V = null, Je = false, La = 0, ua = null, t) throw Error(m(300));
    l === null || Nl || (l = l.dependencies, l !== null && Qe(l) && (Nl = true));
  }
  function Es(l, t, u, a) {
    V = l;
    var e = 0;
    do {
      if (ta && (ua = null), La = 0, ta = false, 25 <= e) throw Error(m(301));
      if (e += 1, zl = el = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      g.H = Mr, n = t(u, a);
    } while (ta);
    return n;
  }
  function Tr() {
    var l = g.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Ka(t) : t, l = l.useState()[0], (el !== null ? el.memoizedState : null) !== l && (V.flags |= 1024), t;
  }
  function Yf() {
    var l = we !== 0;
    return we = 0, l;
  }
  function jf(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function Gf(l) {
    if (Je) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Je = false;
    }
    Pt = 0, zl = el = V = null, ta = false, La = we = 0, ua = null;
  }
  function Wl() {
    var l = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return zl === null ? V.memoizedState = zl = l : zl = zl.next = l, zl;
  }
  function _l() {
    if (el === null) {
      var l = V.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = el.next;
    var t = zl === null ? V.memoizedState : zl.next;
    if (t !== null) zl = t, el = l;
    else {
      if (l === null) throw V.alternate === null ? Error(m(467)) : Error(m(310));
      el = l, l = { memoizedState: el.memoizedState, baseState: el.baseState, baseQueue: el.baseQueue, queue: el.queue, next: null }, zl === null ? V.memoizedState = zl = l : zl = zl.next = l;
    }
    return zl;
  }
  function Xf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ka(l) {
    var t = La;
    return La += 1, ua === null && (ua = []), l = ys(ua, l, t), t = V, (zl === null ? t.memoizedState : zl.next) === null && (t = t.alternate, g.H = t === null || t.memoizedState === null ? u0 : a0), l;
  }
  function We(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ka(l);
      if (l.$$typeof === pl) return Xl(l);
    }
    throw Error(m(438, String(l)));
  }
  function Qf(l) {
    var t = null, u = V.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = V.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = { data: a.data.map(function(e) {
        return e.slice();
      }), index: 0 })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = Xf(), V.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0) for (u = t.data[t.index] = Array(l), a = 0; a < l; a++) u[a] = Lt;
    return t.index++, u;
  }
  function Yt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function $e(l) {
    var t = _l();
    return Zf(t, el, l);
  }
  function Zf(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(m(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, a.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var c = f = null, i = null, v = t, S = false;
      do {
        var T = v.lane & -536870913;
        if (T !== v.lane ? (W & T) === T : (Pt & T) === T) {
          var y = v.revertLane;
          if (y === 0) i !== null && (i = i.next = { lane: 0, revertLane: 0, action: v.action, hasEagerState: v.hasEagerState, eagerState: v.eagerState, next: null }), T === Iu && (S = true);
          else if ((Pt & y) === y) {
            v = v.next, y === Iu && (S = true);
            continue;
          } else T = { lane: 0, revertLane: v.revertLane, action: v.action, hasEagerState: v.hasEagerState, eagerState: v.eagerState, next: null }, i === null ? (c = i = T, f = n) : i = i.next = T, V.lanes |= y, fu |= y;
          T = v.action, Ru && u(n, T), n = v.hasEagerState ? v.eagerState : u(n, T);
        } else y = { lane: T, revertLane: v.revertLane, action: v.action, hasEagerState: v.hasEagerState, eagerState: v.eagerState, next: null }, i === null ? (c = i = y, f = n) : i = i.next = y, V.lanes |= T, fu |= T;
        v = v.next;
      } while (v !== null && v !== t);
      if (i === null ? f = n : i.next = c, !lt(n, l.memoizedState) && (Nl = true, S && (u = Pu, u !== null))) throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Cf(l) {
    var t = _l(), u = t.queue;
    if (u === null) throw Error(m(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      lt(n, t.memoizedState) || (Nl = true), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function As(l, t, u) {
    var a = V, e = _l(), n = I;
    if (n) {
      if (u === void 0) throw Error(m(407));
      u = u();
    } else u = t();
    var f = !lt((el || e).memoizedState, u);
    f && (e.memoizedState = u, Nl = true), e = e.queue;
    var c = Os.bind(null, a, e, l);
    if (Ja(2048, 8, c, [l]), e.getSnapshot !== t || f || zl !== null && zl.memoizedState.tag & 1) {
      if (a.flags |= 2048, aa(9, ke(), _s.bind(null, a, e, u, t), null), dl === null) throw Error(m(349));
      n || (Pt & 124) !== 0 || zs(a, t, u);
    }
    return u;
  }
  function zs(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = V.updateQueue, t === null ? (t = Xf(), V.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function _s(l, t, u, a) {
    t.value = u, t.getSnapshot = a, Ms(t) && Ds(l);
  }
  function Os(l, t, u) {
    return u(function() {
      Ms(t) && Ds(l);
    });
  }
  function Ms(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !lt(l, u);
    } catch {
      return true;
    }
  }
  function Ds(l) {
    var t = Wu(l, 2);
    t !== null && ft(t, l, 2);
  }
  function Vf(l) {
    var t = Wl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Ru) {
        Jt(true);
        try {
          u();
        } finally {
          Jt(false);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Yt, lastRenderedState: l }, t;
  }
  function Us(l, t, u, a) {
    return l.baseState = u, Zf(l, el, typeof a == "function" ? a : Yt);
  }
  function Er(l, t, u, a, e) {
    if (Ie(l)) throw Error(m(485));
    if (l = t.action, l !== null) {
      var n = { payload: e, action: l, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(f) {
        n.listeners.push(f);
      } };
      g.T !== null ? u(true) : n.isTransition = false, a(n), u = t.pending, u === null ? (n.next = t.pending = n, Rs(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function Rs(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = g.T, f = {};
      g.T = f;
      try {
        var c = u(e, a), i = g.S;
        i !== null && i(f, c), ps(l, t, c);
      } catch (v) {
        Lf(l, t, v);
      } finally {
        g.T = n;
      }
    } else try {
      n = u(e, a), ps(l, t, n);
    } catch (v) {
      Lf(l, t, v);
    }
  }
  function ps(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(function(a) {
      Hs(l, t, a);
    }, function(a) {
      return Lf(l, t, a);
    }) : Hs(l, t, u);
  }
  function Hs(l, t, u) {
    t.status = "fulfilled", t.value = u, Ns(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, Rs(l, u)));
  }
  function Lf(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, Ns(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function Ns(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function qs(l, t) {
    return t;
  }
  function Bs(l, t) {
    if (I) {
      var u = dl.formState;
      if (u !== null) {
        l: {
          var a = V;
          if (I) {
            if (gl) {
              t: {
                for (var e = gl, n = zt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = Et(e.nextSibling), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                gl = Et(e.nextSibling), a = e.data === "F!";
                break l;
              }
            }
            Ou(a);
          }
          a = false;
        }
        a && (t = u[0]);
      }
    }
    return u = Wl(), u.memoizedState = u.baseState = t, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: qs, lastRenderedState: t }, u.queue = a, u = Ps.bind(null, V, a), a.dispatch = u, a = Vf(false), n = $f.bind(null, V, false, a.queue), a = Wl(), e = { state: t, dispatch: null, action: l, pending: null }, a.queue = e, u = Er.bind(null, V, e, n, u), e.dispatch = u, a.memoizedState = l, [t, u, false];
  }
  function xs(l) {
    var t = _l();
    return Ys(t, el, l);
  }
  function Ys(l, t, u) {
    if (t = Zf(l, t, qs)[0], l = $e(Yt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var a = Ka(t);
    } catch (f) {
      throw f === Xa ? Ve : f;
    }
    else a = t;
    t = _l();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (V.flags |= 2048, aa(9, ke(), Ar.bind(null, e, u), null)), [a, n, l];
  }
  function Ar(l, t) {
    l.action = t;
  }
  function js(l) {
    var t = _l(), u = el;
    if (u !== null) return Ys(t, u, l);
    _l(), t = t.memoizedState, u = _l();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, false];
  }
  function aa(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = V.updateQueue, t === null && (t = Xf(), V.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function ke() {
    return { destroy: void 0, resource: void 0 };
  }
  function Gs() {
    return _l().memoizedState;
  }
  function Fe(l, t, u, a) {
    var e = Wl();
    a = a === void 0 ? null : a, V.flags |= l, e.memoizedState = aa(1 | t, ke(), u, a);
  }
  function Ja(l, t, u, a) {
    var e = _l();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    el !== null && a !== null && Bf(a, el.memoizedState.deps) ? e.memoizedState = aa(t, n, u, a) : (V.flags |= l, e.memoizedState = aa(1 | t, n, u, a));
  }
  function Xs(l, t) {
    Fe(8390656, 8, l, t);
  }
  function Qs(l, t) {
    Ja(2048, 8, l, t);
  }
  function Zs(l, t) {
    return Ja(4, 2, l, t);
  }
  function Cs(l, t) {
    return Ja(4, 4, l, t);
  }
  function Vs(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function() {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null) return l = l(), t.current = l, function() {
      t.current = null;
    };
  }
  function Ls(l, t, u) {
    u = u != null ? u.concat([l]) : null, Ja(4, 4, Vs.bind(null, t, l), u);
  }
  function Kf() {
  }
  function Ks(l, t) {
    var u = _l();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Bf(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function Js(l, t) {
    var u = _l();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Bf(t, a[1])) return a[0];
    if (a = l(), Ru) {
      Jt(true);
      try {
        l();
      } finally {
        Jt(false);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function Jf(l, t, u) {
    return u === void 0 || (Pt & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = u, l = $0(), V.lanes |= l, fu |= l, u);
  }
  function ws(l, t, u, a) {
    return lt(u, t) ? u : la.current !== null ? (l = Jf(l, u, a), lt(l, t) || (Nl = true), l) : (Pt & 42) === 0 ? (Nl = true, l.memoizedState = u) : (l = $0(), V.lanes |= l, fu |= l, t);
  }
  function Ws(l, t, u, a, e) {
    var n = z.p;
    z.p = n !== 0 && 8 > n ? n : 8;
    var f = g.T, c = {};
    g.T = c, $f(l, false, t, u);
    try {
      var i = e(), v = g.S;
      if (v !== null && v(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var S = Sr(i, a);
        wa(l, t, S, nt(l));
      } else wa(l, t, a, nt(l));
    } catch (T) {
      wa(l, t, { then: function() {
      }, status: "rejected", reason: T }, nt());
    } finally {
      z.p = n, g.T = f;
    }
  }
  function zr() {
  }
  function wf(l, t, u, a) {
    if (l.tag !== 5) throw Error(m(476));
    var e = $s(l).queue;
    Ws(l, e, t, x, u === null ? zr : function() {
      return ks(l), u(a);
    });
  }
  function $s(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = { memoizedState: x, baseState: x, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Yt, lastRenderedState: x }, next: null };
    var u = {};
    return t.next = { memoizedState: u, baseState: u, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Yt, lastRenderedState: u }, next: null }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function ks(l) {
    var t = $s(l).next.queue;
    wa(l, t, {}, nt());
  }
  function Wf() {
    return Xl(oe);
  }
  function Fs() {
    return _l().memoizedState;
  }
  function Is() {
    return _l().memoizedState;
  }
  function _r(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = nt();
          l = Ft(u);
          var a = It(t, l, u);
          a !== null && (ft(a, t, u), Za(a, t, u)), t = { cache: _f() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Or(l, t, u) {
    var a = nt();
    u = { lane: a, revertLane: 0, action: u, hasEagerState: false, eagerState: null, next: null }, Ie(l) ? l0(t, u) : (u = yf(l, t, u, a), u !== null && (ft(u, l, a), t0(u, t, a)));
  }
  function Ps(l, t, u) {
    var a = nt();
    wa(l, t, u, a);
  }
  function wa(l, t, u, a) {
    var e = { lane: a, revertLane: 0, action: u, hasEagerState: false, eagerState: null, next: null };
    if (Ie(l)) l0(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
        var f = t.lastRenderedState, c = n(f, u);
        if (e.hasEagerState = true, e.eagerState = c, lt(c, f)) return xe(l, t, e, 0), dl === null && Be(), false;
      } catch {
      } finally {
      }
      if (u = yf(l, t, e, a), u !== null) return ft(u, l, a), t0(u, t, a), true;
    }
    return false;
  }
  function $f(l, t, u, a) {
    if (a = { lane: 2, revertLane: Dc(), action: a, hasEagerState: false, eagerState: null, next: null }, Ie(l)) {
      if (t) throw Error(m(479));
    } else t = yf(l, u, a, 2), t !== null && ft(t, l, 2);
  }
  function Ie(l) {
    var t = l.alternate;
    return l === V || t !== null && t === V;
  }
  function l0(l, t) {
    ta = Je = true;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function t0(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, si(l, u);
    }
  }
  var Pe = { readContext: Xl, use: We, useCallback: bl, useContext: bl, useEffect: bl, useImperativeHandle: bl, useLayoutEffect: bl, useInsertionEffect: bl, useMemo: bl, useReducer: bl, useRef: bl, useState: bl, useDebugValue: bl, useDeferredValue: bl, useTransition: bl, useSyncExternalStore: bl, useId: bl, useHostTransitionStatus: bl, useFormState: bl, useActionState: bl, useOptimistic: bl, useMemoCache: bl, useCacheRefresh: bl }, u0 = { readContext: Xl, use: We, useCallback: function(l, t) {
    return Wl().memoizedState = [l, t === void 0 ? null : t], l;
  }, useContext: Xl, useEffect: Xs, useImperativeHandle: function(l, t, u) {
    u = u != null ? u.concat([l]) : null, Fe(4194308, 4, Vs.bind(null, t, l), u);
  }, useLayoutEffect: function(l, t) {
    return Fe(4194308, 4, l, t);
  }, useInsertionEffect: function(l, t) {
    Fe(4, 2, l, t);
  }, useMemo: function(l, t) {
    var u = Wl();
    t = t === void 0 ? null : t;
    var a = l();
    if (Ru) {
      Jt(true);
      try {
        l();
      } finally {
        Jt(false);
      }
    }
    return u.memoizedState = [a, t], a;
  }, useReducer: function(l, t, u) {
    var a = Wl();
    if (u !== void 0) {
      var e = u(t);
      if (Ru) {
        Jt(true);
        try {
          u(t);
        } finally {
          Jt(false);
        }
      }
    } else e = t;
    return a.memoizedState = a.baseState = e, l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: l, lastRenderedState: e }, a.queue = l, l = l.dispatch = Or.bind(null, V, l), [a.memoizedState, l];
  }, useRef: function(l) {
    var t = Wl();
    return l = { current: l }, t.memoizedState = l;
  }, useState: function(l) {
    l = Vf(l);
    var t = l.queue, u = Ps.bind(null, V, t);
    return t.dispatch = u, [l.memoizedState, u];
  }, useDebugValue: Kf, useDeferredValue: function(l, t) {
    var u = Wl();
    return Jf(u, l, t);
  }, useTransition: function() {
    var l = Vf(false);
    return l = Ws.bind(null, V, l.queue, true, false), Wl().memoizedState = l, [false, l];
  }, useSyncExternalStore: function(l, t, u) {
    var a = V, e = Wl();
    if (I) {
      if (u === void 0) throw Error(m(407));
      u = u();
    } else {
      if (u = t(), dl === null) throw Error(m(349));
      (W & 124) !== 0 || zs(a, t, u);
    }
    e.memoizedState = u;
    var n = { value: u, getSnapshot: t };
    return e.queue = n, Xs(Os.bind(null, a, n, l), [l]), a.flags |= 2048, aa(9, ke(), _s.bind(null, a, n, u, t), null), u;
  }, useId: function() {
    var l = Wl(), t = dl.identifierPrefix;
    if (I) {
      var u = qt, a = Nt;
      u = (a & ~(1 << 32 - Pl(a) - 1)).toString(32) + u, t = "\xAB" + t + "R" + u, u = we++, 0 < u && (t += "H" + u.toString(32)), t += "\xBB";
    } else u = br++, t = "\xAB" + t + "r" + u.toString(32) + "\xBB";
    return l.memoizedState = t;
  }, useHostTransitionStatus: Wf, useFormState: Bs, useActionState: Bs, useOptimistic: function(l) {
    var t = Wl();
    t.memoizedState = t.baseState = l;
    var u = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return t.queue = u, t = $f.bind(null, V, true, u), u.dispatch = t, [l, t];
  }, useMemoCache: Qf, useCacheRefresh: function() {
    return Wl().memoizedState = _r.bind(null, V);
  } }, a0 = { readContext: Xl, use: We, useCallback: Ks, useContext: Xl, useEffect: Qs, useImperativeHandle: Ls, useInsertionEffect: Zs, useLayoutEffect: Cs, useMemo: Js, useReducer: $e, useRef: Gs, useState: function() {
    return $e(Yt);
  }, useDebugValue: Kf, useDeferredValue: function(l, t) {
    var u = _l();
    return ws(u, el.memoizedState, l, t);
  }, useTransition: function() {
    var l = $e(Yt)[0], t = _l().memoizedState;
    return [typeof l == "boolean" ? l : Ka(l), t];
  }, useSyncExternalStore: As, useId: Fs, useHostTransitionStatus: Wf, useFormState: xs, useActionState: xs, useOptimistic: function(l, t) {
    var u = _l();
    return Us(u, el, l, t);
  }, useMemoCache: Qf, useCacheRefresh: Is }, Mr = { readContext: Xl, use: We, useCallback: Ks, useContext: Xl, useEffect: Qs, useImperativeHandle: Ls, useInsertionEffect: Zs, useLayoutEffect: Cs, useMemo: Js, useReducer: Cf, useRef: Gs, useState: function() {
    return Cf(Yt);
  }, useDebugValue: Kf, useDeferredValue: function(l, t) {
    var u = _l();
    return el === null ? Jf(u, l, t) : ws(u, el.memoizedState, l, t);
  }, useTransition: function() {
    var l = Cf(Yt)[0], t = _l().memoizedState;
    return [typeof l == "boolean" ? l : Ka(l), t];
  }, useSyncExternalStore: As, useId: Fs, useHostTransitionStatus: Wf, useFormState: js, useActionState: js, useOptimistic: function(l, t) {
    var u = _l();
    return el !== null ? Us(u, el, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
  }, useMemoCache: Qf, useCacheRefresh: Is }, ea = null, Wa = 0;
  function ln(l) {
    var t = Wa;
    return Wa += 1, ea === null && (ea = []), ys(ea, l, t);
  }
  function $a(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function tn(l, t) {
    throw t.$$typeof === P ? Error(m(525)) : (l = Object.prototype.toString.call(t), Error(m(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
  }
  function e0(l) {
    var t = l._init;
    return t(l._payload);
  }
  function n0(l) {
    function t(o, d) {
      if (l) {
        var r = o.deletions;
        r === null ? (o.deletions = [d], o.flags |= 16) : r.push(d);
      }
    }
    function u(o, d) {
      if (!l) return null;
      for (; d !== null; ) t(o, d), d = d.sibling;
      return null;
    }
    function a(o) {
      for (var d = /* @__PURE__ */ new Map(); o !== null; ) o.key !== null ? d.set(o.key, o) : d.set(o.index, o), o = o.sibling;
      return d;
    }
    function e(o, d) {
      return o = Ht(o, d), o.index = 0, o.sibling = null, o;
    }
    function n(o, d, r) {
      return o.index = r, l ? (r = o.alternate, r !== null ? (r = r.index, r < d ? (o.flags |= 67108866, d) : r) : (o.flags |= 67108866, d)) : (o.flags |= 1048576, d);
    }
    function f(o) {
      return l && o.alternate === null && (o.flags |= 67108866), o;
    }
    function c(o, d, r, b) {
      return d === null || d.tag !== 6 ? (d = mf(r, o.mode, b), d.return = o, d) : (d = e(d, r), d.return = o, d);
    }
    function i(o, d, r, b) {
      var D = r.type;
      return D === Ol ? S(o, d, r.props.children, b, r.key) : d !== null && (d.elementType === D || typeof D == "object" && D !== null && D.$$typeof === ol && e0(D) === d.type) ? (d = e(d, r.props), $a(d, r), d.return = o, d) : (d = je(r.type, r.key, r.props, null, o.mode, b), $a(d, r), d.return = o, d);
    }
    function v(o, d, r, b) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== r.containerInfo || d.stateNode.implementation !== r.implementation ? (d = gf(r, o.mode, b), d.return = o, d) : (d = e(d, r.children || []), d.return = o, d);
    }
    function S(o, d, r, b, D) {
      return d === null || d.tag !== 7 ? (d = Eu(r, o.mode, b, D), d.return = o, d) : (d = e(d, r), d.return = o, d);
    }
    function T(o, d, r) {
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint") return d = mf("" + d, o.mode, r), d.return = o, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case al:
            return r = je(d.type, d.key, d.props, null, o.mode, r), $a(r, d), r.return = o, r;
          case Al:
            return d = gf(d, o.mode, r), d.return = o, d;
          case ol:
            var b = d._init;
            return d = b(d._payload), T(o, d, r);
        }
        if (L(d) || H(d)) return d = Eu(d, o.mode, r, null), d.return = o, d;
        if (typeof d.then == "function") return T(o, ln(d), r);
        if (d.$$typeof === pl) return T(o, Ze(o, d), r);
        tn(o, d);
      }
      return null;
    }
    function y(o, d, r, b) {
      var D = d !== null ? d.key : null;
      if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return D !== null ? null : c(o, d, "" + r, b);
      if (typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case al:
            return r.key === D ? i(o, d, r, b) : null;
          case Al:
            return r.key === D ? v(o, d, r, b) : null;
          case ol:
            return D = r._init, r = D(r._payload), y(o, d, r, b);
        }
        if (L(r) || H(r)) return D !== null ? null : S(o, d, r, b, null);
        if (typeof r.then == "function") return y(o, d, ln(r), b);
        if (r.$$typeof === pl) return y(o, d, Ze(o, r), b);
        tn(o, r);
      }
      return null;
    }
    function h(o, d, r, b, D) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint") return o = o.get(r) || null, c(d, o, "" + b, D);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case al:
            return o = o.get(b.key === null ? r : b.key) || null, i(d, o, b, D);
          case Al:
            return o = o.get(b.key === null ? r : b.key) || null, v(d, o, b, D);
          case ol:
            var K = b._init;
            return b = K(b._payload), h(o, d, r, b, D);
        }
        if (L(b) || H(b)) return o = o.get(r) || null, S(d, o, b, D, null);
        if (typeof b.then == "function") return h(o, d, r, ln(b), D);
        if (b.$$typeof === pl) return h(o, d, r, Ze(d, b), D);
        tn(d, b);
      }
      return null;
    }
    function j(o, d, r, b) {
      for (var D = null, K = null, U = d, Y = d = 0, Bl = null; U !== null && Y < r.length; Y++) {
        U.index > Y ? (Bl = U, U = null) : Bl = U.sibling;
        var F = y(o, U, r[Y], b);
        if (F === null) {
          U === null && (U = Bl);
          break;
        }
        l && U && F.alternate === null && t(o, U), d = n(F, d, Y), K === null ? D = F : K.sibling = F, K = F, U = Bl;
      }
      if (Y === r.length) return u(o, U), I && zu(o, Y), D;
      if (U === null) {
        for (; Y < r.length; Y++) U = T(o, r[Y], b), U !== null && (d = n(U, d, Y), K === null ? D = U : K.sibling = U, K = U);
        return I && zu(o, Y), D;
      }
      for (U = a(U); Y < r.length; Y++) Bl = h(U, o, Y, r[Y], b), Bl !== null && (l && Bl.alternate !== null && U.delete(Bl.key === null ? Y : Bl.key), d = n(Bl, d, Y), K === null ? D = Bl : K.sibling = Bl, K = Bl);
      return l && U.forEach(function(hu) {
        return t(o, hu);
      }), I && zu(o, Y), D;
    }
    function q(o, d, r, b) {
      if (r == null) throw Error(m(151));
      for (var D = null, K = null, U = d, Y = d = 0, Bl = null, F = r.next(); U !== null && !F.done; Y++, F = r.next()) {
        U.index > Y ? (Bl = U, U = null) : Bl = U.sibling;
        var hu = y(o, U, F.value, b);
        if (hu === null) {
          U === null && (U = Bl);
          break;
        }
        l && U && hu.alternate === null && t(o, U), d = n(hu, d, Y), K === null ? D = hu : K.sibling = hu, K = hu, U = Bl;
      }
      if (F.done) return u(o, U), I && zu(o, Y), D;
      if (U === null) {
        for (; !F.done; Y++, F = r.next()) F = T(o, F.value, b), F !== null && (d = n(F, d, Y), K === null ? D = F : K.sibling = F, K = F);
        return I && zu(o, Y), D;
      }
      for (U = a(U); !F.done; Y++, F = r.next()) F = h(U, o, Y, F.value, b), F !== null && (l && F.alternate !== null && U.delete(F.key === null ? Y : F.key), d = n(F, d, Y), K === null ? D = F : K.sibling = F, K = F);
      return l && U.forEach(function(Dv) {
        return t(o, Dv);
      }), I && zu(o, Y), D;
    }
    function fl(o, d, r, b) {
      if (typeof r == "object" && r !== null && r.type === Ol && r.key === null && (r = r.props.children), typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case al:
            l: {
              for (var D = r.key; d !== null; ) {
                if (d.key === D) {
                  if (D = r.type, D === Ol) {
                    if (d.tag === 7) {
                      u(o, d.sibling), b = e(d, r.props.children), b.return = o, o = b;
                      break l;
                    }
                  } else if (d.elementType === D || typeof D == "object" && D !== null && D.$$typeof === ol && e0(D) === d.type) {
                    u(o, d.sibling), b = e(d, r.props), $a(b, r), b.return = o, o = b;
                    break l;
                  }
                  u(o, d);
                  break;
                } else t(o, d);
                d = d.sibling;
              }
              r.type === Ol ? (b = Eu(r.props.children, o.mode, b, r.key), b.return = o, o = b) : (b = je(r.type, r.key, r.props, null, o.mode, b), $a(b, r), b.return = o, o = b);
            }
            return f(o);
          case Al:
            l: {
              for (D = r.key; d !== null; ) {
                if (d.key === D) if (d.tag === 4 && d.stateNode.containerInfo === r.containerInfo && d.stateNode.implementation === r.implementation) {
                  u(o, d.sibling), b = e(d, r.children || []), b.return = o, o = b;
                  break l;
                } else {
                  u(o, d);
                  break;
                }
                else t(o, d);
                d = d.sibling;
              }
              b = gf(r, o.mode, b), b.return = o, o = b;
            }
            return f(o);
          case ol:
            return D = r._init, r = D(r._payload), fl(o, d, r, b);
        }
        if (L(r)) return j(o, d, r, b);
        if (H(r)) {
          if (D = H(r), typeof D != "function") throw Error(m(150));
          return r = D.call(r), q(o, d, r, b);
        }
        if (typeof r.then == "function") return fl(o, d, ln(r), b);
        if (r.$$typeof === pl) return fl(o, d, Ze(o, r), b);
        tn(o, r);
      }
      return typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint" ? (r = "" + r, d !== null && d.tag === 6 ? (u(o, d.sibling), b = e(d, r), b.return = o, o = b) : (u(o, d), b = mf(r, o.mode, b), b.return = o, o = b), f(o)) : u(o, d);
    }
    return function(o, d, r, b) {
      try {
        Wa = 0;
        var D = fl(o, d, r, b);
        return ea = null, D;
      } catch (U) {
        if (U === Xa || U === Ve) throw U;
        var K = tt(29, U, null, o.mode);
        return K.lanes = b, K.return = o, K;
      } finally {
      }
    };
  }
  var na = n0(true), f0 = n0(false), yt = A(null), _t = null;
  function lu(l) {
    var t = l.alternate;
    _(Dl, Dl.current & 1), _(yt, l), _t === null && (t === null || la.current !== null || t.memoizedState !== null) && (_t = l);
  }
  function c0(l) {
    if (l.tag === 22) {
      if (_(Dl, Dl.current), _(yt, l), _t === null) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (_t = l);
      }
    } else tu();
  }
  function tu() {
    _(Dl, Dl.current), _(yt, yt.current);
  }
  function jt(l) {
    M(yt), _t === l && (_t = null), M(Dl);
  }
  var Dl = A(0);
  function un(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || Xc(u))) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  function kf(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : R({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Ff = { enqueueSetState: function(l, t, u) {
    l = l._reactInternals;
    var a = nt(), e = Ft(a);
    e.payload = t, u != null && (e.callback = u), t = It(l, e, a), t !== null && (ft(t, l, a), Za(t, l, a));
  }, enqueueReplaceState: function(l, t, u) {
    l = l._reactInternals;
    var a = nt(), e = Ft(a);
    e.tag = 1, e.payload = t, u != null && (e.callback = u), t = It(l, e, a), t !== null && (ft(t, l, a), Za(t, l, a));
  }, enqueueForceUpdate: function(l, t) {
    l = l._reactInternals;
    var u = nt(), a = Ft(u);
    a.tag = 2, t != null && (a.callback = t), t = It(l, a, u), t !== null && (ft(t, l, u), Za(t, l, u));
  } };
  function i0(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Ha(u, a) || !Ha(e, n) : true;
  }
  function s0(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && Ff.enqueueReplaceState(t, t.state, null);
  }
  function pu(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t) a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = R({}, u));
      for (var e in l) u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  var an = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l), error: l });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function d0(l) {
    an(l);
  }
  function o0(l) {
    console.error(l);
  }
  function r0(l) {
    an(l);
  }
  function en(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function v0(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, { componentStack: u.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function If(l, t, u) {
    return u = Ft(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      en(l, t);
    }, u;
  }
  function y0(l) {
    return l = Ft(l), l.tag = 3, l;
  }
  function h0(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        v0(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      v0(t, u, a), typeof e != "function" && (cu === null ? cu = /* @__PURE__ */ new Set([this]) : cu.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, { componentStack: c !== null ? c : "" });
    });
  }
  function Dr(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && Ya(t, u, e, true), u = yt.current, u !== null) {
        switch (u.tag) {
          case 13:
            return _t === null ? Ac() : u.alternate === null && Sl === 0 && (Sl = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === Df ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), _c(l, a, e)), false;
          case 22:
            return u.flags |= 65536, a === Df ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([a]) }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), _c(l, a, e)), false;
        }
        throw Error(m(435, u.tag));
      }
      return _c(l, a, e), Ac(), false;
    }
    if (I) return t = yt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== Tf && (l = Error(m(422), { cause: a }), xa(dt(l, u)))) : (a !== Tf && (t = Error(m(423), { cause: a }), xa(dt(t, u))), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = dt(a, u), e = If(l.stateNode, a, e), pf(l, e), Sl !== 4 && (Sl = 2)), false;
    var n = Error(m(520), { cause: a });
    if (n = dt(n, u), ue === null ? ue = [n] : ue.push(n), Sl !== 4 && (Sl = 2), t === null) return true;
    a = dt(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = If(u.stateNode, a, l), pf(u, l), false;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (cu === null || !cu.has(n)))) return u.flags |= 65536, e &= -e, u.lanes |= e, e = y0(e), h0(e, l, u, a), pf(u, e), false;
      }
      u = u.return;
    } while (u !== null);
    return false;
  }
  var m0 = Error(m(461)), Nl = false;
  function xl(l, t, u, a) {
    t.child = l === null ? f0(t, null, u, a) : na(t, l.child, u, a);
  }
  function g0(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var c in a) c !== "ref" && (f[c] = a[c]);
    } else f = a;
    return Du(t), a = xf(l, t, u, f, n, e), c = Yf(), l !== null && !Nl ? (jf(l, t, e), Gt(l, t, e)) : (I && c && Sf(t), t.flags |= 1, xl(l, t, a, e), t.child);
  }
  function S0(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !hf(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, b0(l, t, n, a, e)) : (l = je(u.type, null, a, t, t.mode, e), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !fc(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Ha, u(f, a) && l.ref === t.ref) return Gt(l, t, e);
    }
    return t.flags |= 1, l = Ht(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function b0(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Ha(n, a) && l.ref === t.ref) if (Nl = false, t.pendingProps = a = n, fc(l, e)) (l.flags & 131072) !== 0 && (Nl = true);
      else return t.lanes = l.lanes, Gt(l, t, e);
    }
    return Pf(l, t, u, a, e);
  }
  function T0(l, t, u) {
    var a = t.pendingProps, e = a.children, n = l !== null ? l.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (a = n !== null ? n.baseLanes | u : u, l !== null) {
          for (e = t.child = l.child, n = 0; e !== null; ) n = n | e.lanes | e.childLanes, e = e.sibling;
          t.childLanes = n & ~a;
        } else t.childLanes = 0, t.child = null;
        return E0(l, t, a, u);
      }
      if ((u & 536870912) !== 0) t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ce(t, n !== null ? n.cachePool : null), n !== null ? bs(t, n) : Nf(), c0(t);
      else return t.lanes = t.childLanes = 536870912, E0(l, t, n !== null ? n.baseLanes | u : u, u);
    } else n !== null ? (Ce(t, n.cachePool), bs(t, n), tu(), t.memoizedState = null) : (l !== null && Ce(t, null), Nf(), tu());
    return xl(l, t, e, u), t.child;
  }
  function E0(l, t, u, a) {
    var e = Mf();
    return e = e === null ? null : { parent: Ml._currentValue, pool: e }, t.memoizedState = { baseLanes: u, cachePool: e }, l !== null && Ce(t, null), Nf(), c0(t), l !== null && Ya(l, t, a, true), null;
  }
  function nn(l, t) {
    var u = t.ref;
    if (u === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object") throw Error(m(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function Pf(l, t, u, a, e) {
    return Du(t), u = xf(l, t, u, a, void 0, e), a = Yf(), l !== null && !Nl ? (jf(l, t, e), Gt(l, t, e)) : (I && a && Sf(t), t.flags |= 1, xl(l, t, u, e), t.child);
  }
  function A0(l, t, u, a, e, n) {
    return Du(t), t.updateQueue = null, u = Es(t, a, u, e), Ts(l), a = Yf(), l !== null && !Nl ? (jf(l, t, n), Gt(l, t, n)) : (I && a && Sf(t), t.flags |= 1, xl(l, t, u, n), t.child);
  }
  function z0(l, t, u, a, e) {
    if (Du(t), t.stateNode === null) {
      var n = $u, f = u.contextType;
      typeof f == "object" && f !== null && (n = Xl(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Ff, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Uf(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? Xl(f) : $u, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (kf(t, u, f, a), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && Ff.enqueueReplaceState(n, n.state, null), Va(t, a, n, e), Ca(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = true;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = pu(u, c);
      n.props = i;
      var v = n.context, S = u.contextType;
      f = $u, typeof S == "object" && S !== null && (f = Xl(S));
      var T = u.getDerivedStateFromProps;
      S = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || v !== f) && s0(t, n, a, f), kt = false;
      var y = t.memoizedState;
      n.state = y, Va(t, a, n, e), Ca(), v = t.memoizedState, c || y !== v || kt ? (typeof T == "function" && (kf(t, u, T, a), v = t.memoizedState), (i = kt || i0(t, u, i, a, y, v, f)) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = v), n.props = a, n.state = v, n.context = f, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = false);
    } else {
      n = t.stateNode, Rf(l, t), f = t.memoizedProps, S = pu(u, f), n.props = S, T = t.pendingProps, y = n.context, v = u.contextType, i = $u, typeof v == "object" && v !== null && (i = Xl(v)), c = u.getDerivedStateFromProps, (v = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== T || y !== i) && s0(t, n, a, i), kt = false, y = t.memoizedState, n.state = y, Va(t, a, n, e), Ca();
      var h = t.memoizedState;
      f !== T || y !== h || kt || l !== null && l.dependencies !== null && Qe(l.dependencies) ? (typeof c == "function" && (kf(t, u, c, a), h = t.memoizedState), (S = kt || i0(t, u, S, a, y, h, i) || l !== null && l.dependencies !== null && Qe(l.dependencies)) ? (v || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, h, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, h, i)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && y === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && y === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = h), n.props = a, n.state = h, n.context = i, a = S) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && y === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && y === l.memoizedState || (t.flags |= 1024), a = false);
    }
    return n = a, nn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = na(t, l.child, null, e), t.child = na(t, null, u, e)) : xl(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = Gt(l, t, e), l;
  }
  function _0(l, t, u, a) {
    return Ba(), t.flags |= 256, xl(l, t, u, a), t.child;
  }
  var lc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function tc(l) {
    return { baseLanes: l, cachePool: os() };
  }
  function uc(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= ht), l;
  }
  function O0(l, t, u) {
    var a = t.pendingProps, e = false, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? false : (Dl.current & 2) !== 0), f && (e = true, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (I) {
        if (e ? lu(t) : tu(), I) {
          var c = gl, i;
          if (i = c) {
            l: {
              for (i = c, c = zt; i.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break l;
                }
                if (i = Et(i.nextSibling), i === null) {
                  c = null;
                  break l;
                }
              }
              c = i;
            }
            c !== null ? (t.memoizedState = { dehydrated: c, treeContext: Au !== null ? { id: Nt, overflow: qt } : null, retryLane: 536870912, hydrationErrors: null }, i = tt(18, null, null, 0), i.stateNode = c, i.return = t, t.child = i, Vl = t, gl = null, i = true) : i = false;
          }
          i || Ou(t);
        }
        if (c = t.memoizedState, c !== null && (c = c.dehydrated, c !== null)) return Xc(c) ? t.lanes = 32 : t.lanes = 536870912, null;
        jt(t);
      }
      return c = a.children, a = a.fallback, e ? (tu(), e = t.mode, c = fn({ mode: "hidden", children: c }, e), a = Eu(a, e, u, null), c.return = t, a.return = t, c.sibling = a, t.child = c, e = t.child, e.memoizedState = tc(u), e.childLanes = uc(l, f, u), t.memoizedState = lc, a) : (lu(t), ac(t, c));
    }
    if (i = l.memoizedState, i !== null && (c = i.dehydrated, c !== null)) {
      if (n) t.flags & 256 ? (lu(t), t.flags &= -257, t = ec(l, t, u)) : t.memoizedState !== null ? (tu(), t.child = l.child, t.flags |= 128, t = null) : (tu(), e = a.fallback, c = t.mode, a = fn({ mode: "visible", children: a.children }, c), e = Eu(e, c, u, null), e.flags |= 2, a.return = t, e.return = t, a.sibling = e, t.child = a, na(t, l.child, null, u), a = t.child, a.memoizedState = tc(u), a.childLanes = uc(l, f, u), t.memoizedState = lc, t = e);
      else if (lu(t), Xc(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var v = f.dgst;
        f = v, a = Error(m(419)), a.stack = "", a.digest = f, xa({ value: a, source: null, stack: null }), t = ec(l, t, u);
      } else if (Nl || Ya(l, t, u, false), f = (u & l.childLanes) !== 0, Nl || f) {
        if (f = dl, f !== null && (a = u & -u, a = (a & 42) !== 0 ? 1 : Xn(a), a = (a & (f.suspendedLanes | u)) !== 0 ? 0 : a, a !== 0 && a !== i.retryLane)) throw i.retryLane = a, Wu(l, a), ft(f, l, a), m0;
        c.data === "$?" || Ac(), t = ec(l, t, u);
      } else c.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, gl = Et(c.nextSibling), Vl = t, I = true, _u = null, zt = false, l !== null && (rt[vt++] = Nt, rt[vt++] = qt, rt[vt++] = Au, Nt = l.id, qt = l.overflow, Au = t), t = ac(t, a.children), t.flags |= 4096);
      return t;
    }
    return e ? (tu(), e = a.fallback, c = t.mode, i = l.child, v = i.sibling, a = Ht(i, { mode: "hidden", children: a.children }), a.subtreeFlags = i.subtreeFlags & 65011712, v !== null ? e = Ht(v, e) : (e = Eu(e, c, u, null), e.flags |= 2), e.return = t, a.return = t, a.sibling = e, t.child = a, a = e, e = t.child, c = l.child.memoizedState, c === null ? c = tc(u) : (i = c.cachePool, i !== null ? (v = Ml._currentValue, i = i.parent !== v ? { parent: v, pool: v } : i) : i = os(), c = { baseLanes: c.baseLanes | u, cachePool: i }), e.memoizedState = c, e.childLanes = uc(l, f, u), t.memoizedState = lc, a) : (lu(t), u = l.child, l = u.sibling, u = Ht(u, { mode: "visible", children: a.children }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function ac(l, t) {
    return t = fn({ mode: "visible", children: t }, l.mode), t.return = l, l.child = t;
  }
  function fn(l, t) {
    return l = tt(22, l, null, t), l.lanes = 0, l.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }, l;
  }
  function ec(l, t, u) {
    return na(t, l.child, null, u), l = ac(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l;
  }
  function M0(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Af(l.return, t, u);
  }
  function nc(l, t, u, a, e) {
    var n = l.memoizedState;
    n === null ? l.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: u, tailMode: e } : (n.isBackwards = t, n.rendering = null, n.renderingStartTime = 0, n.last = a, n.tail = u, n.tailMode = e);
  }
  function D0(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    if (xl(l, t, a.children, u), a = Dl.current, (a & 2) !== 0) a = a & 1 | 2, t.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && M0(l, u, t);
        else if (l.tag === 19) M0(l, u, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
      a &= 1;
    }
    switch (_(Dl, a), e) {
      case "forwards":
        for (u = t.child, e = null; u !== null; ) l = u.alternate, l !== null && un(l) === null && (e = u), u = u.sibling;
        u = e, u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), nc(t, false, e, u, n);
        break;
      case "backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && un(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        nc(t, true, u, null, n);
        break;
      case "together":
        nc(t, false, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Gt(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), fu |= t.lanes, (u & t.childLanes) === 0) if (l !== null) {
      if (Ya(l, t, u, false), (u & t.childLanes) === 0) return null;
    } else return null;
    if (l !== null && t.child !== l.child) throw Error(m(153));
    if (t.child !== null) {
      for (l = t.child, u = Ht(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; ) l = l.sibling, u = u.sibling = Ht(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function fc(l, t) {
    return (l.lanes & t) !== 0 ? true : (l = l.dependencies, !!(l !== null && Qe(l)));
  }
  function Ur(l, t, u) {
    switch (t.tag) {
      case 3:
        vl(t, t.stateNode.containerInfo), $t(t, Ml, l.memoizedState.cache), Ba();
        break;
      case 27:
      case 5:
        Bn(t);
        break;
      case 4:
        vl(t, t.stateNode.containerInfo);
        break;
      case 10:
        $t(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) return a.dehydrated !== null ? (lu(t), t.flags |= 128, null) : (u & t.child.childLanes) !== 0 ? O0(l, t, u) : (lu(t), l = Gt(l, t, u), l !== null ? l.sibling : null);
        lu(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (a = (u & t.childLanes) !== 0, a || (Ya(l, t, u, false), a = (u & t.childLanes) !== 0), e) {
          if (a) return D0(l, t, u);
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), _(Dl, Dl.current), a) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, T0(l, t, u);
      case 24:
        $t(t, Ml, l.memoizedState.cache);
    }
    return Gt(l, t, u);
  }
  function U0(l, t, u) {
    if (l !== null) if (l.memoizedProps !== t.pendingProps) Nl = true;
    else {
      if (!fc(l, u) && (t.flags & 128) === 0) return Nl = false, Ur(l, t, u);
      Nl = (l.flags & 131072) !== 0;
    }
    else Nl = false, I && (t.flags & 1048576) !== 0 && es(t, Xe, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          l = t.pendingProps;
          var a = t.elementType, e = a._init;
          if (a = e(a._payload), t.type = a, typeof a == "function") hf(a) ? (l = pu(a, l), t.tag = 1, t = z0(null, t, a, l, u)) : (t.tag = 0, t = Pf(null, t, a, l, u));
          else {
            if (a != null) {
              if (e = a.$$typeof, e === Kl) {
                t.tag = 11, t = g0(null, t, a, l, u);
                break l;
              } else if (e === Cl) {
                t.tag = 14, t = S0(null, t, a, l, u);
                break l;
              }
            }
            throw t = rl(a) || a, Error(m(306, t, ""));
          }
        }
        return t;
      case 0:
        return Pf(l, t, t.type, t.pendingProps, u);
      case 1:
        return a = t.type, e = pu(a, t.pendingProps), z0(l, t, a, e, u);
      case 3:
        l: {
          if (vl(t, t.stateNode.containerInfo), l === null) throw Error(m(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Rf(l, t), Va(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, $t(t, Ml, a), a !== n.cache && zf(t, [Ml], u, true), Ca(), a = f.element, n.isDehydrated) if (n = { element: a, isDehydrated: false, cache: f.cache }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
            t = _0(l, t, a, u);
            break l;
          } else if (a !== e) {
            e = dt(Error(m(424)), t), xa(e), t = _0(l, t, a, u);
            break l;
          } else {
            switch (l = t.stateNode.containerInfo, l.nodeType) {
              case 9:
                l = l.body;
                break;
              default:
                l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
            }
            for (gl = Et(l.firstChild), Vl = t, I = true, _u = null, zt = true, u = f0(t, null, a, u), t.child = u; u; ) u.flags = u.flags & -3 | 4096, u = u.sibling;
          }
          else {
            if (Ba(), a === e) {
              t = Gt(l, t, u);
              break l;
            }
            xl(l, t, a, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return nn(l, t), l === null ? (u = Nd(t.type, null, t.pendingProps, null)) ? t.memoizedState = u : I || (u = t.type, l = t.pendingProps, a = En(X.current).createElement(u), a[Gl] = t, a[Jl] = l, jl(a, u, l), Hl(a), t.stateNode = a) : t.memoizedState = Nd(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
      case 27:
        return Bn(t), l === null && I && (a = t.stateNode = Rd(t.type, t.pendingProps, X.current), Vl = t, zt = true, e = gl, du(t.type) ? (Qc = e, gl = Et(a.firstChild)) : gl = e), xl(l, t, t.pendingProps.children, u), nn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && I && ((e = a = gl) && (a = uv(a, t.type, t.pendingProps, zt), a !== null ? (t.stateNode = a, Vl = t, gl = Et(a.firstChild), zt = false, e = true) : e = false), e || Ou(t)), Bn(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, Yc(e, n) ? a = null : f !== null && Yc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = xf(l, t, Tr, null, null, u), oe._currentValue = e), nn(l, t), xl(l, t, a, u), t.child;
      case 6:
        return l === null && I && ((l = u = gl) && (u = av(u, t.pendingProps, zt), u !== null ? (t.stateNode = u, Vl = t, gl = null, l = true) : l = false), l || Ou(t)), null;
      case 13:
        return O0(l, t, u);
      case 4:
        return vl(t, t.stateNode.containerInfo), a = t.pendingProps, l === null ? t.child = na(t, null, a, u) : xl(l, t, a, u), t.child;
      case 11:
        return g0(l, t, t.type, t.pendingProps, u);
      case 7:
        return xl(l, t, t.pendingProps, u), t.child;
      case 8:
        return xl(l, t, t.pendingProps.children, u), t.child;
      case 12:
        return xl(l, t, t.pendingProps.children, u), t.child;
      case 10:
        return a = t.pendingProps, $t(t, t.type, a.value), xl(l, t, a.children, u), t.child;
      case 9:
        return e = t.type._context, a = t.pendingProps.children, Du(t), e = Xl(e), a = a(e), t.flags |= 1, xl(l, t, a, u), t.child;
      case 14:
        return S0(l, t, t.type, t.pendingProps, u);
      case 15:
        return b0(l, t, t.type, t.pendingProps, u);
      case 19:
        return D0(l, t, u);
      case 31:
        return a = t.pendingProps, u = t.mode, a = { mode: a.mode, children: a.children }, l === null ? (u = fn(a, u), u.ref = t.ref, t.child = u, u.return = t, t = u) : (u = Ht(l.child, a), u.ref = t.ref, t.child = u, u.return = t, t = u), t;
      case 22:
        return T0(l, t, u);
      case 24:
        return Du(t), a = Xl(Ml), l === null ? (e = Mf(), e === null && (e = dl, n = _f(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = { parent: a, cache: e }, Uf(t), $t(t, Ml, e)) : ((l.lanes & u) !== 0 && (Rf(l, t), Va(t, null, null, u), Ca()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), $t(t, Ml, a)) : (a = n.cache, $t(t, Ml, a), a !== e.cache && zf(t, [Ml], u, true))), xl(l, t, t.pendingProps.children, u), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(m(156, t.tag));
  }
  function Xt(l) {
    l.flags |= 4;
  }
  function R0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
    else if (l.flags |= 16777216, !jd(t)) {
      if (t = yt.current, t !== null && ((W & 4194048) === W ? _t !== null : (W & 62914560) !== W && (W & 536870912) === 0 || t !== _t)) throw Qa = Df, rs;
      l.flags |= 8192;
    }
  }
  function cn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? ci() : 536870912, l.lanes |= t, sa |= t);
  }
  function ka(l, t) {
    if (!I) switch (l.tailMode) {
      case "hidden":
        t = l.tail;
        for (var u = null; t !== null; ) t.alternate !== null && (u = t), t = t.sibling;
        u === null ? l.tail = null : u.sibling = null;
        break;
      case "collapsed":
        u = l.tail;
        for (var a = null; u !== null; ) u.alternate !== null && (a = u), u = u.sibling;
        a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
    }
  }
  function ml(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t) for (var e = l.child; e !== null; ) u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 65011712, a |= e.flags & 65011712, e.return = l, e = e.sibling;
    else for (e = l.child; e !== null; ) u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function Rr(l, t, u) {
    var a = t.pendingProps;
    switch (bf(t), t.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ml(t), null;
      case 1:
        return ml(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), xt(Ml), Kt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (qa(t) ? Xt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, cs())), ml(t), null;
      case 26:
        return u = t.memoizedState, l === null ? (Xt(t), u !== null ? (ml(t), R0(t, u)) : (ml(t), t.flags &= -16777217)) : u ? u !== l.memoizedState ? (Xt(t), ml(t), R0(t, u)) : (ml(t), t.flags &= -16777217) : (l.memoizedProps !== a && Xt(t), ml(t), t.flags &= -16777217), null;
      case 27:
        Se(t), u = X.current;
        var e = t.type;
        if (l !== null && t.stateNode != null) l.memoizedProps !== a && Xt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(m(166));
            return ml(t), null;
          }
          l = N.current, qa(t) ? ns(t) : (l = Rd(e, a, u), t.stateNode = l, Xt(t));
        }
        return ml(t), null;
      case 5:
        if (Se(t), u = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && Xt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(m(166));
            return ml(t), null;
          }
          if (l = N.current, qa(t)) ns(t);
          else {
            switch (e = En(X.current), l) {
              case 1:
                l = e.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                l = e.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    l = e.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    l = e.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                    break;
                  case "script":
                    l = e.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof a.is == "string" ? e.createElement("select", { is: a.is }) : e.createElement("select"), a.multiple ? l.multiple = true : a.size && (l.size = a.size);
                    break;
                  default:
                    l = typeof a.is == "string" ? e.createElement(u, { is: a.is }) : e.createElement(u);
                }
            }
            l[Gl] = t, l[Jl] = a;
            l: for (e = t.child; e !== null; ) {
              if (e.tag === 5 || e.tag === 6) l.appendChild(e.stateNode);
              else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
              }
              if (e === t) break l;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) break l;
                e = e.return;
              }
              e.sibling.return = e.return, e = e.sibling;
            }
            t.stateNode = l;
            l: switch (jl(l, u, a), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!a.autoFocus;
                break l;
              case "img":
                l = true;
                break l;
              default:
                l = false;
            }
            l && Xt(t);
          }
        }
        return ml(t), t.flags &= -16777217, null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && Xt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(m(166));
          if (l = X.current, qa(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = Vl, e !== null) switch (e.tag) {
              case 27:
              case 5:
                a = e.memoizedProps;
            }
            l[Gl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === true || Ad(l.nodeValue, u)), l || Ou(t);
          } else l = En(l).createTextNode(a), l[Gl] = t, t.stateNode = l;
        }
        return ml(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = qa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(m(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
              e[Gl] = t;
            } else Ba(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ml(t), e = false;
          } else e = cs(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = true;
          if (!e) return t.flags & 256 ? (jt(t), t) : (jt(t), null);
        }
        if (jt(t), (t.flags & 128) !== 0) return t.lanes = u, t;
        if (u = a !== null, l = l !== null && l.memoizedState !== null, u) {
          a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048);
        }
        return u !== l && u && (t.child.flags |= 8192), cn(t, t.updateQueue), ml(t), null;
      case 4:
        return Kt(), l === null && Hc(t.stateNode.containerInfo), ml(t), null;
      case 10:
        return xt(t.type), ml(t), null;
      case 19:
        if (M(Dl), e = t.memoizedState, e === null) return ml(t), null;
        if (a = (t.flags & 128) !== 0, n = e.rendering, n === null) if (a) ka(e, false);
        else {
          if (Sl !== 0 || l !== null && (l.flags & 128) !== 0) for (l = t.child; l !== null; ) {
            if (n = un(l), n !== null) {
              for (t.flags |= 128, ka(e, false), l = n.updateQueue, t.updateQueue = l, cn(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; ) as(u, l), u = u.sibling;
              return _(Dl, Dl.current & 1 | 2), t.child;
            }
            l = l.sibling;
          }
          e.tail !== null && At() > on && (t.flags |= 128, a = true, ka(e, false), t.lanes = 4194304);
        }
        else {
          if (!a) if (l = un(n), l !== null) {
            if (t.flags |= 128, a = true, l = l.updateQueue, t.updateQueue = l, cn(t, l), ka(e, true), e.tail === null && e.tailMode === "hidden" && !n.alternate && !I) return ml(t), null;
          } else 2 * At() - e.renderingStartTime > on && u !== 536870912 && (t.flags |= 128, a = true, ka(e, false), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (t = e.tail, e.rendering = t, e.tail = t.sibling, e.renderingStartTime = At(), t.sibling = null, l = Dl.current, _(Dl, a ? l & 1 | 2 : l & 1), t) : (ml(t), null);
      case 22:
      case 23:
        return jt(t), qf(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (ml(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ml(t), u = t.updateQueue, u !== null && cn(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && M(Uu), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), xt(Ml), ml(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function pr(l, t) {
    switch (bf(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return xt(Ml), Kt(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Se(t), null;
      case 13:
        if (jt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null) throw Error(m(340));
          Ba();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return M(Dl), null;
      case 4:
        return Kt(), null;
      case 10:
        return xt(t.type), null;
      case 22:
      case 23:
        return jt(t), qf(), l !== null && M(Uu), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return xt(Ml), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function p0(l, t) {
    switch (bf(t), t.tag) {
      case 3:
        xt(Ml), Kt();
        break;
      case 26:
      case 27:
      case 5:
        Se(t);
        break;
      case 4:
        Kt();
        break;
      case 13:
        jt(t);
        break;
      case 19:
        M(Dl);
        break;
      case 10:
        xt(t.type);
        break;
      case 22:
      case 23:
        jt(t), qf(), l !== null && M(Uu);
        break;
      case 24:
        xt(Ml);
    }
  }
  function Fa(l, t) {
    try {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create, f = u.inst;
            a = n(), f.destroy = a;
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (c) {
      il(t, t.return, c);
    }
  }
  function uu(l, t, u) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = t;
              var i = u, v = c;
              try {
                v();
              } catch (S) {
                il(e, i, S);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (S) {
      il(t, t.return, S);
    }
  }
  function H0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        Ss(t, u);
      } catch (a) {
        il(l, l.return, a);
      }
    }
  }
  function N0(l, t, u) {
    u.props = pu(l.type, l.memoizedProps), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      il(l, t, a);
    }
  }
  function Ia(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(a) : u.current = a;
      }
    } catch (e) {
      il(l, t, e);
    }
  }
  function Ot(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null) if (typeof a == "function") try {
      a();
    } catch (e) {
      il(l, t, e);
    } finally {
      l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
    }
    else if (typeof u == "function") try {
      u(null);
    } catch (e) {
      il(l, t, e);
    }
    else u.current = null;
  }
  function q0(l) {
    var t = l.type, u = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      il(l, l.return, e);
    }
  }
  function cc(l, t, u) {
    try {
      var a = l.stateNode;
      Fr(a, l.type, u, t), a[Jl] = t;
    } catch (e) {
      il(l, l.return, e);
    }
  }
  function B0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && du(l.type) || l.tag === 4;
  }
  function ic(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || B0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && du(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function sc(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6) l = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(l), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = Tn));
    else if (a !== 4 && (a === 27 && du(l.type) && (u = l.stateNode, t = null), l = l.child, l !== null)) for (sc(l, t, u), l = l.sibling; l !== null; ) sc(l, t, u), l = l.sibling;
  }
  function sn(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6) l = l.stateNode, t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (a !== 4 && (a === 27 && du(l.type) && (u = l.stateNode), l = l.child, l !== null)) for (sn(l, t, u), l = l.sibling; l !== null; ) sn(l, t, u), l = l.sibling;
  }
  function x0(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
      jl(t, a, u), t[Gl] = l, t[Jl] = u;
    } catch (n) {
      il(l, l.return, n);
    }
  }
  var Qt = false, Tl = false, dc = false, Y0 = typeof WeakSet == "function" ? WeakSet : Set, ql = null;
  function Hr(l, t) {
    if (l = l.containerInfo, Bc = Dn, l = wi(l), cf(l)) {
      if ("selectionStart" in l) var u = { start: l.selectionStart, end: l.selectionEnd };
      else l: {
        u = (u = l.ownerDocument) && u.defaultView || window;
        var a = u.getSelection && u.getSelection();
        if (a && a.rangeCount !== 0) {
          u = a.anchorNode;
          var e = a.anchorOffset, n = a.focusNode;
          a = a.focusOffset;
          try {
            u.nodeType, n.nodeType;
          } catch {
            u = null;
            break l;
          }
          var f = 0, c = -1, i = -1, v = 0, S = 0, T = l, y = null;
          t: for (; ; ) {
            for (var h; T !== u || e !== 0 && T.nodeType !== 3 || (c = f + e), T !== n || a !== 0 && T.nodeType !== 3 || (i = f + a), T.nodeType === 3 && (f += T.nodeValue.length), (h = T.firstChild) !== null; ) y = T, T = h;
            for (; ; ) {
              if (T === l) break t;
              if (y === u && ++v === e && (c = f), y === n && ++S === a && (i = f), (h = T.nextSibling) !== null) break;
              T = y, y = T.parentNode;
            }
            T = h;
          }
          u = c === -1 || i === -1 ? null : { start: c, end: i };
        } else u = null;
      }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (xc = { focusedElem: l, selectionRange: u }, Dn = false, ql = t; ql !== null; ) if (t = ql, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null) l.return = t, ql = l;
    else for (; ql !== null; ) {
      switch (t = ql, n = t.alternate, l = t.flags, t.tag) {
        case 0:
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((l & 1024) !== 0 && n !== null) {
            l = void 0, u = t, e = n.memoizedProps, n = n.memoizedState, a = u.stateNode;
            try {
              var j = pu(u.type, e, u.elementType === u.type);
              l = a.getSnapshotBeforeUpdate(j, n), a.__reactInternalSnapshotBeforeUpdate = l;
            } catch (q) {
              il(u, u.return, q);
            }
          }
          break;
        case 3:
          if ((l & 1024) !== 0) {
            if (l = t.stateNode.containerInfo, u = l.nodeType, u === 9) Gc(l);
            else if (u === 1) switch (l.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Gc(l);
                break;
              default:
                l.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((l & 1024) !== 0) throw Error(m(163));
      }
      if (l = t.sibling, l !== null) {
        l.return = t.return, ql = l;
        break;
      }
      ql = t.return;
    }
  }
  function j0(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        au(l, u), a & 4 && Fa(5, u);
        break;
      case 1:
        if (au(l, u), a & 4) if (l = u.stateNode, t === null) try {
          l.componentDidMount();
        } catch (f) {
          il(u, u.return, f);
        }
        else {
          var e = pu(u.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
          } catch (f) {
            il(u, u.return, f);
          }
        }
        a & 64 && H0(u), a & 512 && Ia(u, u.return);
        break;
      case 3:
        if (au(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
          if (t = null, u.child !== null) switch (u.child.tag) {
            case 27:
            case 5:
              t = u.child.stateNode;
              break;
            case 1:
              t = u.child.stateNode;
          }
          try {
            Ss(l, t);
          } catch (f) {
            il(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && x0(u);
      case 26:
      case 5:
        au(l, u), t === null && a & 4 && q0(u), a & 512 && Ia(u, u.return);
        break;
      case 12:
        au(l, u);
        break;
      case 13:
        au(l, u), a & 4 && Q0(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = Qr.bind(null, u), ev(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || Qt, !a) {
          t = t !== null && t.memoizedState !== null || Tl, e = Qt;
          var n = Tl;
          Qt = a, (Tl = t) && !n ? eu(l, u, (u.subtreeFlags & 8772) !== 0) : au(l, u), Qt = e, Tl = n;
        }
        break;
      case 30:
        break;
      default:
        au(l, u);
    }
  }
  function G0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, G0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Cn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var yl = null, $l = false;
  function Zt(l, t, u) {
    for (u = u.child; u !== null; ) X0(l, t, u), u = u.sibling;
  }
  function X0(l, t, u) {
    if (Il && typeof Il.onCommitFiberUnmount == "function") try {
      Il.onCommitFiberUnmount(ba, u);
    } catch {
    }
    switch (u.tag) {
      case 26:
        Tl || Ot(u, t), Zt(l, t, u), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Tl || Ot(u, t);
        var a = yl, e = $l;
        du(u.type) && (yl = u.stateNode, $l = false), Zt(l, t, u), ce(u.stateNode), yl = a, $l = e;
        break;
      case 5:
        Tl || Ot(u, t);
      case 6:
        if (a = yl, e = $l, yl = null, Zt(l, t, u), yl = a, $l = e, yl !== null) if ($l) try {
          (yl.nodeType === 9 ? yl.body : yl.nodeName === "HTML" ? yl.ownerDocument.body : yl).removeChild(u.stateNode);
        } catch (n) {
          il(u, t, n);
        }
        else try {
          yl.removeChild(u.stateNode);
        } catch (n) {
          il(u, t, n);
        }
        break;
      case 18:
        yl !== null && ($l ? (l = yl, Dd(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, u.stateNode), he(l)) : Dd(yl, u.stateNode));
        break;
      case 4:
        a = yl, e = $l, yl = u.stateNode.containerInfo, $l = true, Zt(l, t, u), yl = a, $l = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Tl || uu(2, u, t), Tl || uu(4, u, t), Zt(l, t, u);
        break;
      case 1:
        Tl || (Ot(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && N0(u, t, a)), Zt(l, t, u);
        break;
      case 21:
        Zt(l, t, u);
        break;
      case 22:
        Tl = (a = Tl) || u.memoizedState !== null, Zt(l, t, u), Tl = a;
        break;
      default:
        Zt(l, t, u);
    }
  }
  function Q0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
      he(l);
    } catch (u) {
      il(t, t.return, u);
    }
  }
  function Nr(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Y0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Y0()), t;
      default:
        throw Error(m(435, l.tag));
    }
  }
  function oc(l, t) {
    var u = Nr(l);
    t.forEach(function(a) {
      var e = Zr.bind(null, l, a);
      u.has(a) || (u.add(a), a.then(e, e));
    });
  }
  function ut(l, t) {
    var u = t.deletions;
    if (u !== null) for (var a = 0; a < u.length; a++) {
      var e = u[a], n = l, f = t, c = f;
      l: for (; c !== null; ) {
        switch (c.tag) {
          case 27:
            if (du(c.type)) {
              yl = c.stateNode, $l = false;
              break l;
            }
            break;
          case 5:
            yl = c.stateNode, $l = false;
            break l;
          case 3:
          case 4:
            yl = c.stateNode.containerInfo, $l = true;
            break l;
        }
        c = c.return;
      }
      if (yl === null) throw Error(m(160));
      X0(n, f, e), yl = null, $l = false, n = e.alternate, n !== null && (n.return = null), e.return = null;
    }
    if (t.subtreeFlags & 13878) for (t = t.child; t !== null; ) Z0(t, l), t = t.sibling;
  }
  var Tt = null;
  function Z0(l, t) {
    var u = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ut(t, l), at(l), a & 4 && (uu(3, l, l.return), Fa(3, l), uu(5, l, l.return));
        break;
      case 1:
        ut(t, l), at(l), a & 512 && (Tl || u === null || Ot(u, u.return)), a & 64 && Qt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? a : u.concat(a))));
        break;
      case 26:
        var e = Tt;
        if (ut(t, l), at(l), a & 512 && (Tl || u === null || Ot(u, u.return)), a & 4) {
          var n = u !== null ? u.memoizedState : null;
          if (a = l.memoizedState, u === null) if (a === null) if (l.stateNode === null) {
            l: {
              a = l.type, u = l.memoizedProps, e = e.ownerDocument || e;
              t: switch (a) {
                case "title":
                  n = e.getElementsByTagName("title")[0], (!n || n[Aa] || n[Gl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(a), e.head.insertBefore(n, e.querySelector("head > title"))), jl(n, a, u), n[Gl] = l, Hl(n), a = n;
                  break l;
                case "link":
                  var f = xd("link", "href", e).get(a + (u.href || ""));
                  if (f) {
                    for (var c = 0; c < f.length; c++) if (n = f[c], n.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && n.getAttribute("rel") === (u.rel == null ? null : u.rel) && n.getAttribute("title") === (u.title == null ? null : u.title) && n.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                      f.splice(c, 1);
                      break t;
                    }
                  }
                  n = e.createElement(a), jl(n, a, u), e.head.appendChild(n);
                  break;
                case "meta":
                  if (f = xd("meta", "content", e).get(a + (u.content || ""))) {
                    for (c = 0; c < f.length; c++) if (n = f[c], n.getAttribute("content") === (u.content == null ? null : "" + u.content) && n.getAttribute("name") === (u.name == null ? null : u.name) && n.getAttribute("property") === (u.property == null ? null : u.property) && n.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && n.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                      f.splice(c, 1);
                      break t;
                    }
                  }
                  n = e.createElement(a), jl(n, a, u), e.head.appendChild(n);
                  break;
                default:
                  throw Error(m(468, a));
              }
              n[Gl] = l, Hl(n), a = n;
            }
            l.stateNode = a;
          } else Yd(e, l.type, l.stateNode);
          else l.stateNode = Bd(e, a, l.memoizedProps);
          else n !== a ? (n === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : n.count--, a === null ? Yd(e, l.type, l.stateNode) : Bd(e, a, l.memoizedProps)) : a === null && l.stateNode !== null && cc(l, l.memoizedProps, u.memoizedProps);
        }
        break;
      case 27:
        ut(t, l), at(l), a & 512 && (Tl || u === null || Ot(u, u.return)), u !== null && a & 4 && cc(l, l.memoizedProps, u.memoizedProps);
        break;
      case 5:
        if (ut(t, l), at(l), a & 512 && (Tl || u === null || Ot(u, u.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Zu(e, "");
          } catch (h) {
            il(l, l.return, h);
          }
        }
        a & 4 && l.stateNode != null && (e = l.memoizedProps, cc(l, e, u !== null ? u.memoizedProps : e)), a & 1024 && (dc = true);
        break;
      case 6:
        if (ut(t, l), at(l), a & 4) {
          if (l.stateNode === null) throw Error(m(162));
          a = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = a;
          } catch (h) {
            il(l, l.return, h);
          }
        }
        break;
      case 3:
        if (_n = null, e = Tt, Tt = An(t.containerInfo), ut(t, l), Tt = e, at(l), a & 4 && u !== null && u.memoizedState.isDehydrated) try {
          he(t.containerInfo);
        } catch (h) {
          il(l, l.return, h);
        }
        dc && (dc = false, C0(l));
        break;
      case 4:
        a = Tt, Tt = An(l.stateNode.containerInfo), ut(t, l), at(l), Tt = a;
        break;
      case 12:
        ut(t, l), at(l);
        break;
      case 13:
        ut(t, l), at(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (gc = At()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, oc(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = u !== null && u.memoizedState !== null, v = Qt, S = Tl;
        if (Qt = v || e, Tl = S || i, ut(t, l), Tl = S, Qt = v, at(l), a & 8192) l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (u === null || i || Qt || Tl || Hu(l)), u = null, t = l; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (u === null) {
              i = u = t;
              try {
                if (n = i.stateNode, e) f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                else {
                  c = i.stateNode;
                  var T = i.memoizedProps.style, y = T != null && T.hasOwnProperty("display") ? T.display : null;
                  c.style.display = y == null || typeof y == "boolean" ? "" : ("" + y).trim();
                }
              } catch (h) {
                il(i, i.return, h);
              }
            }
          } else if (t.tag === 6) {
            if (u === null) {
              i = t;
              try {
                i.stateNode.nodeValue = e ? "" : i.memoizedProps;
              } catch (h) {
                il(i, i.return, h);
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === l) break l;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l) break l;
            u === t && (u = null), t = t.return;
          }
          u === t && (u = null), t.sibling.return = t.return, t = t.sibling;
        }
        a & 4 && (a = l.updateQueue, a !== null && (u = a.retryQueue, u !== null && (a.retryQueue = null, oc(l, u))));
        break;
      case 19:
        ut(t, l), at(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, oc(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ut(t, l), at(l);
    }
  }
  function at(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (B0(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        if (u == null) throw Error(m(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode, n = ic(l);
            sn(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Zu(f, ""), u.flags &= -33);
            var c = ic(l);
            sn(l, c, f);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo, v = ic(l);
            sc(l, v, i);
            break;
          default:
            throw Error(m(161));
        }
      } catch (S) {
        il(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function C0(l) {
    if (l.subtreeFlags & 1024) for (l = l.child; l !== null; ) {
      var t = l;
      C0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
    }
  }
  function au(l, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) j0(l, t.alternate, t), t = t.sibling;
  }
  function Hu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          uu(4, t, t.return), Hu(t);
          break;
        case 1:
          Ot(t, t.return);
          var u = t.stateNode;
          typeof u.componentWillUnmount == "function" && N0(t, t.return, u), Hu(t);
          break;
        case 27:
          ce(t.stateNode);
        case 26:
        case 5:
          Ot(t, t.return), Hu(t);
          break;
        case 22:
          t.memoizedState === null && Hu(t);
          break;
        case 30:
          Hu(t);
          break;
        default:
          Hu(t);
      }
      l = l.sibling;
    }
  }
  function eu(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          eu(e, n, u), Fa(4, n);
          break;
        case 1:
          if (eu(e, n, u), a = n, e = a.stateNode, typeof e.componentDidMount == "function") try {
            e.componentDidMount();
          } catch (v) {
            il(a, a.return, v);
          }
          if (a = n, e = a.updateQueue, e !== null) {
            var c = a.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null) for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++) gs(i[e], c);
            } catch (v) {
              il(a, a.return, v);
            }
          }
          u && f & 64 && H0(n), Ia(n, n.return);
          break;
        case 27:
          x0(n);
        case 26:
        case 5:
          eu(e, n, u), u && a === null && f & 4 && q0(n), Ia(n, n.return);
          break;
        case 12:
          eu(e, n, u);
          break;
        case 13:
          eu(e, n, u), u && f & 4 && Q0(e, n);
          break;
        case 22:
          n.memoizedState === null && eu(e, n, u), Ia(n, n.return);
          break;
        case 30:
          break;
        default:
          eu(e, n, u);
      }
      t = t.sibling;
    }
  }
  function rc(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && ja(u));
  }
  function vc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && ja(l));
  }
  function Mt(l, t, u, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) V0(l, t, u, a), t = t.sibling;
  }
  function V0(l, t, u, a) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Mt(l, t, u, a), e & 2048 && Fa(9, t);
        break;
      case 1:
        Mt(l, t, u, a);
        break;
      case 3:
        Mt(l, t, u, a), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && ja(l)));
        break;
      case 12:
        if (e & 2048) {
          Mt(l, t, u, a), l = t.stateNode;
          try {
            var n = t.memoizedProps, f = n.id, c = n.onPostCommit;
            typeof c == "function" && c(f, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
          } catch (i) {
            il(t, t.return, i);
          }
        } else Mt(l, t, u, a);
        break;
      case 13:
        Mt(l, t, u, a);
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Mt(l, t, u, a) : Pa(l, t) : n._visibility & 2 ? Mt(l, t, u, a) : (n._visibility |= 2, fa(l, t, u, a, (t.subtreeFlags & 10256) !== 0)), e & 2048 && rc(f, t);
        break;
      case 24:
        Mt(l, t, u, a), e & 2048 && vc(t.alternate, t);
        break;
      default:
        Mt(l, t, u, a);
    }
  }
  function fa(l, t, u, a, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l, f = t, c = u, i = a, v = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          fa(n, f, c, i, e), Fa(8, f);
          break;
        case 23:
          break;
        case 22:
          var S = f.stateNode;
          f.memoizedState !== null ? S._visibility & 2 ? fa(n, f, c, i, e) : Pa(n, f) : (S._visibility |= 2, fa(n, f, c, i, e)), e && v & 2048 && rc(f.alternate, f);
          break;
        case 24:
          fa(n, f, c, i, e), e && v & 2048 && vc(f.alternate, f);
          break;
        default:
          fa(n, f, c, i, e);
      }
      t = t.sibling;
    }
  }
  function Pa(l, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var u = l, a = t, e = a.flags;
      switch (a.tag) {
        case 22:
          Pa(u, a), e & 2048 && rc(a.alternate, a);
          break;
        case 24:
          Pa(u, a), e & 2048 && vc(a.alternate, a);
          break;
        default:
          Pa(u, a);
      }
      t = t.sibling;
    }
  }
  var le = 8192;
  function ca(l) {
    if (l.subtreeFlags & le) for (l = l.child; l !== null; ) L0(l), l = l.sibling;
  }
  function L0(l) {
    switch (l.tag) {
      case 26:
        ca(l), l.flags & le && l.memoizedState !== null && gv(Tt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        ca(l);
        break;
      case 3:
      case 4:
        var t = Tt;
        Tt = An(l.stateNode.containerInfo), ca(l), Tt = t;
        break;
      case 22:
        l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = le, le = 16777216, ca(l), le = t) : ca(l));
        break;
      default:
        ca(l);
    }
  }
  function K0(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function te(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var u = 0; u < t.length; u++) {
        var a = t[u];
        ql = a, w0(a, l);
      }
      K0(l);
    }
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) J0(l), l = l.sibling;
  }
  function J0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        te(l), l.flags & 2048 && uu(9, l, l.return);
        break;
      case 3:
        te(l);
        break;
      case 12:
        te(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, dn(l)) : te(l);
        break;
      default:
        te(l);
    }
  }
  function dn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var u = 0; u < t.length; u++) {
        var a = t[u];
        ql = a, w0(a, l);
      }
      K0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          uu(8, t, t.return), dn(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, dn(t));
          break;
        default:
          dn(t);
      }
      l = l.sibling;
    }
  }
  function w0(l, t) {
    for (; ql !== null; ) {
      var u = ql;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          uu(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          ja(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, ql = a;
      else l: for (u = l; ql !== null; ) {
        a = ql;
        var e = a.sibling, n = a.return;
        if (G0(a), a === u) {
          ql = null;
          break l;
        }
        if (e !== null) {
          e.return = n, ql = e;
          break l;
        }
        ql = n;
      }
    }
  }
  var qr = { getCacheForType: function(l) {
    var t = Xl(Ml), u = t.data.get(l);
    return u === void 0 && (u = l(), t.data.set(l, u)), u;
  } }, Br = typeof WeakMap == "function" ? WeakMap : Map, tl = 0, dl = null, J = null, W = 0, ul = 0, et = null, nu = false, ia = false, yc = false, Ct = 0, Sl = 0, fu = 0, Nu = 0, hc = 0, ht = 0, sa = 0, ue = null, kl = null, mc = false, gc = 0, on = 1 / 0, rn = null, cu = null, Yl = 0, iu = null, da = null, oa = 0, Sc = 0, bc = null, W0 = null, ae = 0, Tc = null;
  function nt() {
    if ((tl & 2) !== 0 && W !== 0) return W & -W;
    if (g.T !== null) {
      var l = Iu;
      return l !== 0 ? l : Dc();
    }
    return di();
  }
  function $0() {
    ht === 0 && (ht = (W & 536870912) === 0 || I ? fi() : 536870912);
    var l = yt.current;
    return l !== null && (l.flags |= 32), ht;
  }
  function ft(l, t, u) {
    (l === dl && (ul === 2 || ul === 9) || l.cancelPendingCommit !== null) && (ra(l, 0), su(l, W, ht, false)), Ea(l, u), ((tl & 2) === 0 || l !== dl) && (l === dl && ((tl & 2) === 0 && (Nu |= u), Sl === 4 && su(l, W, ht, false)), Dt(l));
  }
  function k0(l, t, u) {
    if ((tl & 6) !== 0) throw Error(m(327));
    var a = !u && (t & 124) === 0 && (t & l.expiredLanes) === 0 || Ta(l, t), e = a ? jr(l, t) : zc(l, t, true), n = a;
    do {
      if (e === 0) {
        ia && !a && su(l, t, 0, false);
        break;
      } else {
        if (u = l.current.alternate, n && !xr(u)) {
          e = zc(l, t, false), n = false;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n) var f = 0;
          else f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = ue;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (ra(c, f).flags |= 256), f = zc(c, f, false), f !== 2) {
                if (yc && !i) {
                  c.errorRecoveryDisabledLanes |= n, Nu |= n, e = 4;
                  break l;
                }
                n = kl, kl = e, n !== null && (kl === null ? kl = n : kl.push.apply(kl, n));
              }
              e = f;
            }
            if (n = false, e !== 2) continue;
          }
        }
        if (e === 1) {
          ra(l, 0), su(l, t, 0, true);
          break;
        }
        l: {
          switch (a = l, n = e, n) {
            case 0:
            case 1:
              throw Error(m(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              su(a, t, ht, !nu);
              break l;
            case 2:
              kl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if ((t & 62914560) === t && (e = gc + 300 - At(), 10 < e)) {
            if (su(a, t, ht, !nu), Ae(a, 0, true) !== 0) break l;
            a.timeoutHandle = Od(F0.bind(null, a, u, kl, rn, mc, t, ht, Nu, sa, nu, n, 2, -0, 0), e);
            break l;
          }
          F0(a, u, kl, rn, mc, t, ht, Nu, sa, nu, n, 0, -0, 0);
        }
      }
      break;
    } while (true);
    Dt(l);
  }
  function F0(l, t, u, a, e, n, f, c, i, v, S, T, y, h) {
    if (l.timeoutHandle = -1, T = t.subtreeFlags, (T & 8192 || (T & 16785408) === 16785408) && (de = { stylesheets: null, count: 0, unsuspend: mv }, L0(t), T = Sv(), T !== null)) {
      l.cancelPendingCommit = T(ed.bind(null, l, t, n, u, a, e, f, c, i, S, 1, y, h)), su(l, n, f, !v);
      return;
    }
    ed(l, t, n, u, a, e, f, c, i);
  }
  function xr(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null))) for (var a = 0; a < u.length; a++) {
        var e = u[a], n = e.getSnapshot;
        e = e.value;
        try {
          if (!lt(n(), e)) return false;
        } catch {
          return false;
        }
      }
      if (u = t.child, t.subtreeFlags & 16384 && u !== null) u.return = t, t = u;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function su(l, t, u, a) {
    t &= ~hc, t &= ~Nu, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - Pl(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && ii(l, u, t);
  }
  function vn() {
    return (tl & 6) === 0 ? (ee(0), false) : true;
  }
  function Ec() {
    if (J !== null) {
      if (ul === 0) var l = J.return;
      else l = J, Bt = Mu = null, Gf(l), ea = null, Wa = 0, l = J;
      for (; l !== null; ) p0(l.alternate, l), l = l.return;
      J = null;
    }
  }
  function ra(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Pr(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Ec(), dl = l, J = u = Ht(l.current, null), W = t, ul = 0, et = null, nu = false, ia = Ta(l, t), yc = false, sa = ht = hc = Nu = fu = Sl = 0, kl = ue = null, mc = false, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0) for (l = l.entanglements, a &= t; 0 < a; ) {
      var e = 31 - Pl(a), n = 1 << e;
      t |= l[e], a &= ~n;
    }
    return Ct = t, Be(), u;
  }
  function I0(l, t) {
    V = null, g.H = Pe, t === Xa || t === Ve ? (t = hs(), ul = 3) : t === rs ? (t = hs(), ul = 4) : ul = t === m0 ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, et = t, J === null && (Sl = 1, en(l, dt(t, l.current)));
  }
  function P0() {
    var l = g.H;
    return g.H = Pe, l === null ? Pe : l;
  }
  function ld() {
    var l = g.A;
    return g.A = qr, l;
  }
  function Ac() {
    Sl = 4, nu || (W & 4194048) !== W && yt.current !== null || (ia = true), (fu & 134217727) === 0 && (Nu & 134217727) === 0 || dl === null || su(dl, W, ht, false);
  }
  function zc(l, t, u) {
    var a = tl;
    tl |= 2;
    var e = P0(), n = ld();
    (dl !== l || W !== t) && (rn = null, ra(l, t)), t = false;
    var f = Sl;
    l: do
      try {
        if (ul !== 0 && J !== null) {
          var c = J, i = et;
          switch (ul) {
            case 8:
              Ec(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              yt.current === null && (t = true);
              var v = ul;
              if (ul = 0, et = null, va(l, c, i, v), u && ia) {
                f = 0;
                break l;
              }
              break;
            default:
              v = ul, ul = 0, et = null, va(l, c, i, v);
          }
        }
        Yr(), f = Sl;
        break;
      } catch (S) {
        I0(l, S);
      }
    while (true);
    return t && l.shellSuspendCounter++, Bt = Mu = null, tl = a, g.H = e, g.A = n, J === null && (dl = null, W = 0, Be()), f;
  }
  function Yr() {
    for (; J !== null; ) td(J);
  }
  function jr(l, t) {
    var u = tl;
    tl |= 2;
    var a = P0(), e = ld();
    dl !== l || W !== t ? (rn = null, on = At() + 500, ra(l, t)) : ia = Ta(l, t);
    l: do
      try {
        if (ul !== 0 && J !== null) {
          t = J;
          var n = et;
          t: switch (ul) {
            case 1:
              ul = 0, et = null, va(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (vs(n)) {
                ul = 0, et = null, ud(t);
                break;
              }
              t = function() {
                ul !== 2 && ul !== 9 || dl !== l || (ul = 7), Dt(l);
              }, n.then(t, t);
              break l;
            case 3:
              ul = 7;
              break l;
            case 4:
              ul = 5;
              break l;
            case 7:
              vs(n) ? (ul = 0, et = null, ud(t)) : (ul = 0, et = null, va(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (J.tag) {
                case 26:
                  f = J.memoizedState;
                case 5:
                case 27:
                  var c = J;
                  if (!f || jd(f)) {
                    ul = 0, et = null;
                    var i = c.sibling;
                    if (i !== null) J = i;
                    else {
                      var v = c.return;
                      v !== null ? (J = v, yn(v)) : J = null;
                    }
                    break t;
                  }
              }
              ul = 0, et = null, va(l, t, n, 5);
              break;
            case 6:
              ul = 0, et = null, va(l, t, n, 6);
              break;
            case 8:
              Ec(), Sl = 6;
              break l;
            default:
              throw Error(m(462));
          }
        }
        Gr();
        break;
      } catch (S) {
        I0(l, S);
      }
    while (true);
    return Bt = Mu = null, g.H = a, g.A = e, tl = u, J !== null ? 0 : (dl = null, W = 0, Be(), Sl);
  }
  function Gr() {
    for (; J !== null && !no(); ) td(J);
  }
  function td(l) {
    var t = U0(l.alternate, l, Ct);
    l.memoizedProps = l.pendingProps, t === null ? yn(l) : J = t;
  }
  function ud(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = A0(u, t, t.pendingProps, t.type, void 0, W);
        break;
      case 11:
        t = A0(u, t, t.pendingProps, t.type.render, t.ref, W);
        break;
      case 5:
        Gf(t);
      default:
        p0(u, t), t = J = as(t, Ct), t = U0(u, t, Ct);
    }
    l.memoizedProps = l.pendingProps, t === null ? yn(l) : J = t;
  }
  function va(l, t, u, a) {
    Bt = Mu = null, Gf(t), ea = null, Wa = 0;
    var e = t.return;
    try {
      if (Dr(l, e, t, u, W)) {
        Sl = 1, en(l, dt(u, l.current)), J = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw J = e, n;
      Sl = 1, en(l, dt(u, l.current)), J = null;
      return;
    }
    t.flags & 32768 ? (I || a === 1 ? l = true : ia || (W & 536870912) !== 0 ? l = false : (nu = l = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = yt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), ad(t, l)) : yn(t);
  }
  function yn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        ad(t, nu);
        return;
      }
      l = t.return;
      var u = Rr(t.alternate, t, Ct);
      if (u !== null) {
        J = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        J = t;
        return;
      }
      J = t = l;
    } while (t !== null);
    Sl === 0 && (Sl = 5);
  }
  function ad(l, t) {
    do {
      var u = pr(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, J = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        J = l;
        return;
      }
      J = l = u;
    } while (l !== null);
    Sl = 6, J = null;
  }
  function ed(l, t, u, a, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      hn();
    while (Yl !== 0);
    if ((tl & 6) !== 0) throw Error(m(327));
    if (t !== null) {
      if (t === l.current) throw Error(m(177));
      if (n = t.lanes | t.childLanes, n |= vf, mo(l, u, n, f, c, i), l === dl && (J = dl = null, W = 0), da = t, iu = l, oa = u, Sc = n, bc = e, W0 = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Cr(be, function() {
        return sd(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = g.T, g.T = null, e = z.p, z.p = 2, f = tl, tl |= 4;
        try {
          Hr(l, t, u);
        } finally {
          tl = f, z.p = e, g.T = a;
        }
      }
      Yl = 1, nd(), fd(), cd();
    }
  }
  function nd() {
    if (Yl === 1) {
      Yl = 0;
      var l = iu, t = da, u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        u = g.T, g.T = null;
        var a = z.p;
        z.p = 2;
        var e = tl;
        tl |= 4;
        try {
          Z0(t, l);
          var n = xc, f = wi(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && Ji(c.ownerDocument.documentElement, c)) {
            if (i !== null && cf(c)) {
              var v = i.start, S = i.end;
              if (S === void 0 && (S = v), "selectionStart" in c) c.selectionStart = v, c.selectionEnd = Math.min(S, c.value.length);
              else {
                var T = c.ownerDocument || document, y = T && T.defaultView || window;
                if (y.getSelection) {
                  var h = y.getSelection(), j = c.textContent.length, q = Math.min(i.start, j), fl = i.end === void 0 ? q : Math.min(i.end, j);
                  !h.extend && q > fl && (f = fl, fl = q, q = f);
                  var o = Ki(c, q), d = Ki(c, fl);
                  if (o && d && (h.rangeCount !== 1 || h.anchorNode !== o.node || h.anchorOffset !== o.offset || h.focusNode !== d.node || h.focusOffset !== d.offset)) {
                    var r = T.createRange();
                    r.setStart(o.node, o.offset), h.removeAllRanges(), q > fl ? (h.addRange(r), h.extend(d.node, d.offset)) : (r.setEnd(d.node, d.offset), h.addRange(r));
                  }
                }
              }
            }
            for (T = [], h = c; h = h.parentNode; ) h.nodeType === 1 && T.push({ element: h, left: h.scrollLeft, top: h.scrollTop });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < T.length; c++) {
              var b = T[c];
              b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
            }
          }
          Dn = !!Bc, xc = Bc = null;
        } finally {
          tl = e, z.p = a, g.T = u;
        }
      }
      l.current = t, Yl = 2;
    }
  }
  function fd() {
    if (Yl === 2) {
      Yl = 0;
      var l = iu, t = da, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = g.T, g.T = null;
        var a = z.p;
        z.p = 2;
        var e = tl;
        tl |= 4;
        try {
          j0(l, t.alternate, t);
        } finally {
          tl = e, z.p = a, g.T = u;
        }
      }
      Yl = 3;
    }
  }
  function cd() {
    if (Yl === 4 || Yl === 3) {
      Yl = 0, fo();
      var l = iu, t = da, u = oa, a = W0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Yl = 5 : (Yl = 0, da = iu = null, id(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (cu = null), Qn(u), t = t.stateNode, Il && typeof Il.onCommitFiberRoot == "function") try {
        Il.onCommitFiberRoot(ba, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (a !== null) {
        t = g.T, e = z.p, z.p = 2, g.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < a.length; f++) {
            var c = a[f];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          g.T = t, z.p = e;
        }
      }
      (oa & 3) !== 0 && hn(), Dt(l), e = l.pendingLanes, (u & 4194090) !== 0 && (e & 42) !== 0 ? l === Tc ? ae++ : (ae = 0, Tc = l) : ae = 0, ee(0);
    }
  }
  function id(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, ja(t)));
  }
  function hn(l) {
    return nd(), fd(), cd(), sd();
  }
  function sd() {
    if (Yl !== 5) return false;
    var l = iu, t = Sc;
    Sc = 0;
    var u = Qn(oa), a = g.T, e = z.p;
    try {
      z.p = 32 > u ? 32 : u, g.T = null, u = bc, bc = null;
      var n = iu, f = oa;
      if (Yl = 0, da = iu = null, oa = 0, (tl & 6) !== 0) throw Error(m(331));
      var c = tl;
      if (tl |= 4, J0(n.current), V0(n, n.current, f, u), tl = c, ee(0, false), Il && typeof Il.onPostCommitFiberRoot == "function") try {
        Il.onPostCommitFiberRoot(ba, n);
      } catch {
      }
      return true;
    } finally {
      z.p = e, g.T = a, id(l, t);
    }
  }
  function dd(l, t, u) {
    t = dt(u, t), t = If(l.stateNode, t, 2), l = It(l, t, 2), l !== null && (Ea(l, 2), Dt(l));
  }
  function il(l, t, u) {
    if (l.tag === 3) dd(l, l, u);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        dd(t, l, u);
        break;
      } else if (t.tag === 1) {
        var a = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (cu === null || !cu.has(a))) {
          l = dt(u, l), u = y0(2), a = It(t, u, 2), a !== null && (h0(u, a, t, l), Ea(a, 2), Dt(a));
          break;
        }
      }
      t = t.return;
    }
  }
  function _c(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Br();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (yc = true, e.add(u), l = Xr.bind(null, l, t, u), t.then(l, l));
  }
  function Xr(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, dl === l && (W & u) === u && (Sl === 4 || Sl === 3 && (W & 62914560) === W && 300 > At() - gc ? (tl & 2) === 0 && ra(l, 0) : hc |= u, sa === W && (sa = 0)), Dt(l);
  }
  function od(l, t) {
    t === 0 && (t = ci()), l = Wu(l, t), l !== null && (Ea(l, t), Dt(l));
  }
  function Qr(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), od(l, u);
  }
  function Zr(l, t) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var a = l.stateNode, e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(m(314));
    }
    a !== null && a.delete(t), od(l, u);
  }
  function Cr(l, t) {
    return Yn(l, t);
  }
  var mn = null, ya = null, Oc = false, gn = false, Mc = false, qu = 0;
  function Dt(l) {
    l !== ya && l.next === null && (ya === null ? mn = ya = l : ya = ya.next = l), gn = true, Oc || (Oc = true, Lr());
  }
  function ee(l, t) {
    if (!Mc && gn) {
      Mc = true;
      do
        for (var u = false, a = mn; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - Pl(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = true, hd(a, n));
          } else n = W, n = Ae(a, a === dl ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (n & 3) === 0 || Ta(a, n) || (u = true, hd(a, n));
          a = a.next;
        }
      while (u);
      Mc = false;
    }
  }
  function Vr() {
    rd();
  }
  function rd() {
    gn = Oc = false;
    var l = 0;
    qu !== 0 && (Ir() && (l = qu), qu = 0);
    for (var t = At(), u = null, a = mn; a !== null; ) {
      var e = a.next, n = vd(a, t);
      n === 0 ? (a.next = null, u === null ? mn = e : u.next = e, e === null && (ya = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (gn = true)), a = e;
    }
    ee(l);
  }
  function vd(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - Pl(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = ho(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = dl, u = W, u = Ae(l, l === t ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a = l.callbackNode, u === 0 || l === t && (ul === 2 || ul === 9) || l.cancelPendingCommit !== null) return a !== null && a !== null && jn(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Ta(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && jn(a), Qn(u)) {
        case 2:
        case 8:
          u = ei;
          break;
        case 32:
          u = be;
          break;
        case 268435456:
          u = ni;
          break;
        default:
          u = be;
      }
      return a = yd.bind(null, l), u = Yn(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && jn(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function yd(l, t) {
    if (Yl !== 0 && Yl !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (hn() && l.callbackNode !== u) return null;
    var a = W;
    return a = Ae(l, l === dl ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a === 0 ? null : (k0(l, a, t), vd(l, At()), l.callbackNode != null && l.callbackNode === u ? yd.bind(null, l) : null);
  }
  function hd(l, t) {
    if (hn()) return null;
    k0(l, t, true);
  }
  function Lr() {
    lv(function() {
      (tl & 6) !== 0 ? Yn(ai, Vr) : rd();
    });
  }
  function Dc() {
    return qu === 0 && (qu = fi()), qu;
  }
  function md(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : De("" + l);
  }
  function gd(l, t) {
    var u = t.ownerDocument.createElement("input");
    return u.name = t.name, u.value = t.value, l.id && u.setAttribute("form", l.id), t.parentNode.insertBefore(u, t), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Kr(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = md((e[Jl] || null).action), f = a.submitter;
      f && (t = (t = f[Jl] || null) ? md(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new He("action", "action", null, a, e);
      l.push({ event: c, listeners: [{ instance: null, listener: function() {
        if (a.defaultPrevented) {
          if (qu !== 0) {
            var i = f ? gd(e, f) : new FormData(e);
            wf(u, { pending: true, data: i, method: e.method, action: n }, null, i);
          }
        } else typeof n == "function" && (c.preventDefault(), i = f ? gd(e, f) : new FormData(e), wf(u, { pending: true, data: i, method: e.method, action: n }, n, i));
      }, currentTarget: e }] });
    }
  }
  for (var Uc = 0; Uc < rf.length; Uc++) {
    var Rc = rf[Uc], Jr = Rc.toLowerCase(), wr = Rc[0].toUpperCase() + Rc.slice(1);
    bt(Jr, "on" + wr);
  }
  bt(ki, "onAnimationEnd"), bt(Fi, "onAnimationIteration"), bt(Ii, "onAnimationStart"), bt("dblclick", "onDoubleClick"), bt("focusin", "onFocus"), bt("focusout", "onBlur"), bt(dr, "onTransitionRun"), bt(or, "onTransitionStart"), bt(rr, "onTransitionCancel"), bt(Pi, "onTransitionEnd"), Gu("onMouseEnter", ["mouseout", "mouseover"]), Gu("onMouseLeave", ["mouseout", "mouseover"]), Gu("onPointerEnter", ["pointerout", "pointerover"]), Gu("onPointerLeave", ["pointerout", "pointerover"]), gu("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), gu("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), gu("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), gu("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), gu("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), gu("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ne = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Wr = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ne));
  function Sd(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t) for (var f = a.length - 1; 0 <= f; f--) {
          var c = a[f], i = c.instance, v = c.currentTarget;
          if (c = c.listener, i !== n && e.isPropagationStopped()) break l;
          n = c, e.currentTarget = v;
          try {
            n(e);
          } catch (S) {
            an(S);
          }
          e.currentTarget = null, n = i;
        }
        else for (f = 0; f < a.length; f++) {
          if (c = a[f], i = c.instance, v = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped()) break l;
          n = c, e.currentTarget = v;
          try {
            n(e);
          } catch (S) {
            an(S);
          }
          e.currentTarget = null, n = i;
        }
      }
    }
  }
  function w(l, t) {
    var u = t[Zn];
    u === void 0 && (u = t[Zn] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (bd(t, l, 2, false), u.add(a));
  }
  function pc(l, t, u) {
    var a = 0;
    t && (a |= 4), bd(u, l, a, t);
  }
  var Sn = "_reactListening" + Math.random().toString(36).slice(2);
  function Hc(l) {
    if (!l[Sn]) {
      l[Sn] = true, ri.forEach(function(u) {
        u !== "selectionchange" && (Wr.has(u) || pc(u, false, l), pc(u, true, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Sn] || (t[Sn] = true, pc("selectionchange", false, t));
    }
  }
  function bd(l, t, u, a) {
    switch (Vd(t)) {
      case 2:
        var e = Ev;
        break;
      case 8:
        e = Av;
        break;
      default:
        e = Kc;
    }
    u = e.bind(null, t, u, l), e = void 0, !In || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = true), a ? e !== void 0 ? l.addEventListener(t, u, { capture: true, passive: e }) : l.addEventListener(t, u, true) : e !== void 0 ? l.addEventListener(t, u, { passive: e }) : l.addEventListener(t, u, false);
  }
  function Nc(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null) l: for (; ; ) {
      if (a === null) return;
      var f = a.tag;
      if (f === 3 || f === 4) {
        var c = a.stateNode.containerInfo;
        if (c === e) break;
        if (f === 4) for (f = a.return; f !== null; ) {
          var i = f.tag;
          if ((i === 3 || i === 4) && f.stateNode.containerInfo === e) return;
          f = f.return;
        }
        for (; c !== null; ) {
          if (f = xu(c), f === null) return;
          if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
            a = n = f;
            continue l;
          }
          c = c.parentNode;
        }
      }
      a = a.return;
    }
    Mi(function() {
      var v = n, S = kn(u), T = [];
      l: {
        var y = ls.get(l);
        if (y !== void 0) {
          var h = He, j = l;
          switch (l) {
            case "keypress":
              if (Re(u) === 0) break l;
            case "keydown":
            case "keyup":
              h = Co;
              break;
            case "focusin":
              j = "focus", h = uf;
              break;
            case "focusout":
              j = "blur", h = uf;
              break;
            case "beforeblur":
            case "afterblur":
              h = uf;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              h = Ri;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              h = po;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              h = Ko;
              break;
            case ki:
            case Fi:
            case Ii:
              h = qo;
              break;
            case Pi:
              h = wo;
              break;
            case "scroll":
            case "scrollend":
              h = Uo;
              break;
            case "wheel":
              h = $o;
              break;
            case "copy":
            case "cut":
            case "paste":
              h = xo;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              h = Hi;
              break;
            case "toggle":
            case "beforetoggle":
              h = Fo;
          }
          var q = (t & 4) !== 0, fl = !q && (l === "scroll" || l === "scrollend"), o = q ? y !== null ? y + "Capture" : null : y;
          q = [];
          for (var d = v, r; d !== null; ) {
            var b = d;
            if (r = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || r === null || o === null || (b = _a(d, o), b != null && q.push(fe(d, b, r))), fl) break;
            d = d.return;
          }
          0 < q.length && (y = new h(y, j, null, u, S), T.push({ event: y, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (y = l === "mouseover" || l === "pointerover", h = l === "mouseout" || l === "pointerout", y && u !== $n && (j = u.relatedTarget || u.fromElement) && (xu(j) || j[Bu])) break l;
          if ((h || y) && (y = S.window === S ? S : (y = S.ownerDocument) ? y.defaultView || y.parentWindow : window, h ? (j = u.relatedTarget || u.toElement, h = v, j = j ? xu(j) : null, j !== null && (fl = B(j), q = j.tag, j !== fl || q !== 5 && q !== 27 && q !== 6) && (j = null)) : (h = null, j = v), h !== j)) {
            if (q = Ri, b = "onMouseLeave", o = "onMouseEnter", d = "mouse", (l === "pointerout" || l === "pointerover") && (q = Hi, b = "onPointerLeave", o = "onPointerEnter", d = "pointer"), fl = h == null ? y : za(h), r = j == null ? y : za(j), y = new q(b, d + "leave", h, u, S), y.target = fl, y.relatedTarget = r, b = null, xu(S) === v && (q = new q(o, d + "enter", j, u, S), q.target = r, q.relatedTarget = fl, b = q), fl = b, h && j) t: {
              for (q = h, o = j, d = 0, r = q; r; r = ha(r)) d++;
              for (r = 0, b = o; b; b = ha(b)) r++;
              for (; 0 < d - r; ) q = ha(q), d--;
              for (; 0 < r - d; ) o = ha(o), r--;
              for (; d--; ) {
                if (q === o || o !== null && q === o.alternate) break t;
                q = ha(q), o = ha(o);
              }
              q = null;
            }
            else q = null;
            h !== null && Td(T, y, h, q, false), j !== null && fl !== null && Td(T, fl, j, q, true);
          }
        }
        l: {
          if (y = v ? za(v) : window, h = y.nodeName && y.nodeName.toLowerCase(), h === "select" || h === "input" && y.type === "file") var D = Xi;
          else if (ji(y)) if (Qi) D = cr;
          else {
            D = nr;
            var K = er;
          }
          else h = y.nodeName, !h || h.toLowerCase() !== "input" || y.type !== "checkbox" && y.type !== "radio" ? v && Wn(v.elementType) && (D = Xi) : D = fr;
          if (D && (D = D(l, v))) {
            Gi(T, D, u, S);
            break l;
          }
          K && K(l, y, v), l === "focusout" && v && y.type === "number" && v.memoizedProps.value != null && wn(y, "number", y.value);
        }
        switch (K = v ? za(v) : window, l) {
          case "focusin":
            (ji(K) || K.contentEditable === "true") && (Ku = K, sf = v, Na = null);
            break;
          case "focusout":
            Na = sf = Ku = null;
            break;
          case "mousedown":
            df = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            df = false, Wi(T, u, S);
            break;
          case "selectionchange":
            if (sr) break;
          case "keydown":
          case "keyup":
            Wi(T, u, S);
        }
        var U;
        if (ef) l: {
          switch (l) {
            case "compositionstart":
              var Y = "onCompositionStart";
              break l;
            case "compositionend":
              Y = "onCompositionEnd";
              break l;
            case "compositionupdate":
              Y = "onCompositionUpdate";
              break l;
          }
          Y = void 0;
        }
        else Lu ? xi(l, u) && (Y = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Y = "onCompositionStart");
        Y && (Ni && u.locale !== "ko" && (Lu || Y !== "onCompositionStart" ? Y === "onCompositionEnd" && Lu && (U = Di()) : (Wt = S, Pn = "value" in Wt ? Wt.value : Wt.textContent, Lu = true)), K = bn(v, Y), 0 < K.length && (Y = new pi(Y, l, null, u, S), T.push({ event: Y, listeners: K }), U ? Y.data = U : (U = Yi(u), U !== null && (Y.data = U)))), (U = Po ? lr(l, u) : tr(l, u)) && (Y = bn(v, "onBeforeInput"), 0 < Y.length && (K = new pi("onBeforeInput", "beforeinput", null, u, S), T.push({ event: K, listeners: Y }), K.data = U)), Kr(T, l, v, u, S);
      }
      Sd(T, t);
    });
  }
  function fe(l, t, u) {
    return { instance: l, listener: t, currentTarget: u };
  }
  function bn(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = _a(l, u), e != null && a.unshift(fe(l, e, n)), e = _a(l, t), e != null && a.push(fe(l, e, n))), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function ha(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Td(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var c = u, i = c.alternate, v = c.stateNode;
      if (c = c.tag, i !== null && i === a) break;
      c !== 5 && c !== 26 && c !== 27 || v === null || (i = v, e ? (v = _a(u, n), v != null && f.unshift(fe(u, v, i))) : e || (v = _a(u, n), v != null && f.push(fe(u, v, i)))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var $r = /\r\n?/g, kr = /\u0000|\uFFFD/g;
  function Ed(l) {
    return (typeof l == "string" ? l : "" + l).replace($r, `
`).replace(kr, "");
  }
  function Ad(l, t) {
    return t = Ed(t), Ed(l) === t;
  }
  function Tn() {
  }
  function nl(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Zu(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Zu(l, "" + a);
        break;
      case "className":
        _e(l, "class", a);
        break;
      case "tabIndex":
        _e(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        _e(l, u, a);
        break;
      case "style":
        _i(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          _e(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = De("" + a), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(u, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof n == "function" && (u === "formAction" ? (t !== "input" && nl(l, t, "name", e.name, e, null), nl(l, t, "formEncType", e.formEncType, e, null), nl(l, t, "formMethod", e.formMethod, e, null), nl(l, t, "formTarget", e.formTarget, e, null)) : (nl(l, t, "encType", e.encType, e, null), nl(l, t, "method", e.method, e, null), nl(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = De("" + a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = Tn);
        break;
      case "onScroll":
        a != null && w("scroll", l);
        break;
      case "onScrollEnd":
        a != null && w("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(m(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(m(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = De("" + a), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", u);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "" + a) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === true ? l.setAttribute(u, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(u) : l.setAttribute(u, a);
        break;
      case "popover":
        w("beforetoggle", l), w("toggle", l), ze(l, "popover", a);
        break;
      case "xlinkActuate":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        ze(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Mo.get(u) || u, ze(l, u, a));
    }
  }
  function qc(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        _i(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(m(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(m(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Zu(l, a) : (typeof a == "number" || typeof a == "bigint") && Zu(l, "" + a);
        break;
      case "onScroll":
        a != null && w("scroll", l);
        break;
      case "onScrollEnd":
        a != null && w("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Tn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!vi.hasOwnProperty(u)) l: {
          if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), t = u.slice(2, e ? u.length - 7 : void 0), n = l[Jl] || null, n = n != null ? n[u] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof a == "function")) {
            typeof n != "function" && n !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(t, a, e);
            break l;
          }
          u in l ? l[u] = a : a === true ? l.setAttribute(u, "") : ze(l, u, a);
        }
    }
  }
  function jl(l, t, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        w("error", l), w("load", l);
        var a = false, e = false, n;
        for (n in u) if (u.hasOwnProperty(n)) {
          var f = u[n];
          if (f != null) switch (n) {
            case "src":
              a = true;
              break;
            case "srcSet":
              e = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(m(137, t));
            default:
              nl(l, t, n, f, u, null);
          }
        }
        e && nl(l, t, "srcSet", u.srcSet, u, null), a && nl(l, t, "src", u.src, u, null);
        return;
      case "input":
        w("invalid", l);
        var c = n = f = e = null, i = null, v = null;
        for (a in u) if (u.hasOwnProperty(a)) {
          var S = u[a];
          if (S != null) switch (a) {
            case "name":
              e = S;
              break;
            case "type":
              f = S;
              break;
            case "checked":
              i = S;
              break;
            case "defaultChecked":
              v = S;
              break;
            case "value":
              n = S;
              break;
            case "defaultValue":
              c = S;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (S != null) throw Error(m(137, t));
              break;
            default:
              nl(l, t, a, S, u, null);
          }
        }
        Ti(l, n, c, i, v, f, e, false), Oe(l);
        return;
      case "select":
        w("invalid", l), a = f = n = null;
        for (e in u) if (u.hasOwnProperty(e) && (c = u[e], c != null)) switch (e) {
          case "value":
            n = c;
            break;
          case "defaultValue":
            f = c;
            break;
          case "multiple":
            a = c;
          default:
            nl(l, t, e, c, u, null);
        }
        t = n, u = f, l.multiple = !!a, t != null ? Qu(l, !!a, t, false) : u != null && Qu(l, !!a, u, true);
        return;
      case "textarea":
        w("invalid", l), n = e = a = null;
        for (f in u) if (u.hasOwnProperty(f) && (c = u[f], c != null)) switch (f) {
          case "value":
            a = c;
            break;
          case "defaultValue":
            e = c;
            break;
          case "children":
            n = c;
            break;
          case "dangerouslySetInnerHTML":
            if (c != null) throw Error(m(91));
            break;
          default:
            nl(l, t, f, c, u, null);
        }
        Ai(l, a, e, n), Oe(l);
        return;
      case "option":
        for (i in u) if (u.hasOwnProperty(i) && (a = u[i], a != null)) switch (i) {
          case "selected":
            l.selected = a && typeof a != "function" && typeof a != "symbol";
            break;
          default:
            nl(l, t, i, a, u, null);
        }
        return;
      case "dialog":
        w("beforetoggle", l), w("toggle", l), w("cancel", l), w("close", l);
        break;
      case "iframe":
      case "object":
        w("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ne.length; a++) w(ne[a], l);
        break;
      case "image":
        w("error", l), w("load", l);
        break;
      case "details":
        w("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        w("error", l), w("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (v in u) if (u.hasOwnProperty(v) && (a = u[v], a != null)) switch (v) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(m(137, t));
          default:
            nl(l, t, v, a, u, null);
        }
        return;
      default:
        if (Wn(t)) {
          for (S in u) u.hasOwnProperty(S) && (a = u[S], a !== void 0 && qc(l, t, S, a, u, void 0));
          return;
        }
    }
    for (c in u) u.hasOwnProperty(c) && (a = u[c], a != null && nl(l, t, c, a, u, null));
  }
  function Fr(l, t, u, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, f = null, c = null, i = null, v = null, S = null;
        for (h in u) {
          var T = u[h];
          if (u.hasOwnProperty(h) && T != null) switch (h) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              i = T;
            default:
              a.hasOwnProperty(h) || nl(l, t, h, null, a, T);
          }
        }
        for (var y in a) {
          var h = a[y];
          if (T = u[y], a.hasOwnProperty(y) && (h != null || T != null)) switch (y) {
            case "type":
              n = h;
              break;
            case "name":
              e = h;
              break;
            case "checked":
              v = h;
              break;
            case "defaultChecked":
              S = h;
              break;
            case "value":
              f = h;
              break;
            case "defaultValue":
              c = h;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (h != null) throw Error(m(137, t));
              break;
            default:
              h !== T && nl(l, t, y, h, a, T);
          }
        }
        Jn(l, f, c, i, v, S, n, e);
        return;
      case "select":
        h = f = c = y = null;
        for (n in u) if (i = u[n], u.hasOwnProperty(n) && i != null) switch (n) {
          case "value":
            break;
          case "multiple":
            h = i;
          default:
            a.hasOwnProperty(n) || nl(l, t, n, null, a, i);
        }
        for (e in a) if (n = a[e], i = u[e], a.hasOwnProperty(e) && (n != null || i != null)) switch (e) {
          case "value":
            y = n;
            break;
          case "defaultValue":
            c = n;
            break;
          case "multiple":
            f = n;
          default:
            n !== i && nl(l, t, e, n, a, i);
        }
        t = c, u = f, a = h, y != null ? Qu(l, !!u, y, false) : !!a != !!u && (t != null ? Qu(l, !!u, t, true) : Qu(l, !!u, u ? [] : "", false));
        return;
      case "textarea":
        h = y = null;
        for (c in u) if (e = u[c], u.hasOwnProperty(c) && e != null && !a.hasOwnProperty(c)) switch (c) {
          case "value":
            break;
          case "children":
            break;
          default:
            nl(l, t, c, null, a, e);
        }
        for (f in a) if (e = a[f], n = u[f], a.hasOwnProperty(f) && (e != null || n != null)) switch (f) {
          case "value":
            y = e;
            break;
          case "defaultValue":
            h = e;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (e != null) throw Error(m(91));
            break;
          default:
            e !== n && nl(l, t, f, e, a, n);
        }
        Ei(l, y, h);
        return;
      case "option":
        for (var j in u) if (y = u[j], u.hasOwnProperty(j) && y != null && !a.hasOwnProperty(j)) switch (j) {
          case "selected":
            l.selected = false;
            break;
          default:
            nl(l, t, j, null, a, y);
        }
        for (i in a) if (y = a[i], h = u[i], a.hasOwnProperty(i) && y !== h && (y != null || h != null)) switch (i) {
          case "selected":
            l.selected = y && typeof y != "function" && typeof y != "symbol";
            break;
          default:
            nl(l, t, i, y, a, h);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var q in u) y = u[q], u.hasOwnProperty(q) && y != null && !a.hasOwnProperty(q) && nl(l, t, q, null, a, y);
        for (v in a) if (y = a[v], h = u[v], a.hasOwnProperty(v) && y !== h && (y != null || h != null)) switch (v) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (y != null) throw Error(m(137, t));
            break;
          default:
            nl(l, t, v, y, a, h);
        }
        return;
      default:
        if (Wn(t)) {
          for (var fl in u) y = u[fl], u.hasOwnProperty(fl) && y !== void 0 && !a.hasOwnProperty(fl) && qc(l, t, fl, void 0, a, y);
          for (S in a) y = a[S], h = u[S], !a.hasOwnProperty(S) || y === h || y === void 0 && h === void 0 || qc(l, t, S, y, a, h);
          return;
        }
    }
    for (var o in u) y = u[o], u.hasOwnProperty(o) && y != null && !a.hasOwnProperty(o) && nl(l, t, o, null, a, y);
    for (T in a) y = a[T], h = u[T], !a.hasOwnProperty(T) || y === h || y == null && h == null || nl(l, t, T, y, a, h);
  }
  var Bc = null, xc = null;
  function En(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function zd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function _d(l, t) {
    if (l === 0) switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Yc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var jc = null;
  function Ir() {
    var l = window.event;
    return l && l.type === "popstate" ? l === jc ? false : (jc = l, true) : (jc = null, false);
  }
  var Od = typeof setTimeout == "function" ? setTimeout : void 0, Pr = typeof clearTimeout == "function" ? clearTimeout : void 0, Md = typeof Promise == "function" ? Promise : void 0, lv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Md < "u" ? function(l) {
    return Md.resolve(null).then(l).catch(tv);
  } : Od;
  function tv(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function du(l) {
    return l === "head";
  }
  function Dd(l, t) {
    var u = t, a = 0, e = 0;
    do {
      var n = u.nextSibling;
      if (l.removeChild(u), n && n.nodeType === 8) if (u = n.data, u === "/$") {
        if (0 < a && 8 > a) {
          u = a;
          var f = l.ownerDocument;
          if (u & 1 && ce(f.documentElement), u & 2 && ce(f.body), u & 4) for (u = f.head, ce(u), f = u.firstChild; f; ) {
            var c = f.nextSibling, i = f.nodeName;
            f[Aa] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && f.rel.toLowerCase() === "stylesheet" || u.removeChild(f), f = c;
          }
        }
        if (e === 0) {
          l.removeChild(n), he(t);
          return;
        }
        e--;
      } else u === "$" || u === "$?" || u === "$!" ? e++ : a = u.charCodeAt(0) - 48;
      else a = 0;
      u = n;
    } while (u);
    he(t);
  }
  function Gc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Gc(u), Cn(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function uv(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[Aa]) switch (t) {
          case "meta":
            if (!l.hasAttribute("itemprop")) break;
            return l;
          case "link":
            if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence")) break;
            if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title)) break;
            return l;
          case "style":
            if (l.hasAttribute("data-precedence")) break;
            return l;
          case "script":
            if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
            return l;
          default:
            return l;
        }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (l = Et(l.nextSibling), l === null) break;
    }
    return null;
  }
  function av(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Et(l.nextSibling), l === null)) return null;
    return l;
  }
  function Xc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function ev(l, t) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete") t();
    else {
      var a = function() {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function Et(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F") break;
        if (t === "/$") return null;
      }
    }
    return l;
  }
  var Qc = null;
  function Ud(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (t === 0) return l;
          t--;
        } else u === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Rd(l, t, u) {
    switch (t = En(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(m(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(m(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(m(454));
        return l;
      default:
        throw Error(m(451));
    }
  }
  function ce(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    Cn(l);
  }
  var mt = /* @__PURE__ */ new Map(), pd = /* @__PURE__ */ new Set();
  function An(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Vt = z.d;
  z.d = { f: nv, r: fv, D: cv, C: iv, L: sv, m: dv, X: rv, S: ov, M: vv };
  function nv() {
    var l = Vt.f(), t = vn();
    return l || t;
  }
  function fv(l) {
    var t = Yu(l);
    t !== null && t.tag === 5 && t.type === "form" ? ks(t) : Vt.r(l);
  }
  var ma = typeof document > "u" ? null : document;
  function Hd(l, t, u) {
    var a = ma;
    if (a && typeof t == "string" && t) {
      var e = st(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), pd.has(e) || (pd.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), jl(t, "link", l), Hl(t), a.head.appendChild(t)));
    }
  }
  function cv(l) {
    Vt.D(l), Hd("dns-prefetch", l, null);
  }
  function iv(l, t) {
    Vt.C(l, t), Hd("preconnect", l, t);
  }
  function sv(l, t, u) {
    Vt.L(l, t, u);
    var a = ma;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + st(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + st(u.imageSrcSet) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + st(u.imageSizes) + '"]')) : e += '[href="' + st(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = ga(l);
          break;
        case "script":
          n = Sa(l);
      }
      mt.has(n) || (l = R({ rel: "preload", href: t === "image" && u && u.imageSrcSet ? void 0 : l, as: t }, u), mt.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(ie(n)) || t === "script" && a.querySelector(se(n)) || (t = a.createElement("link"), jl(t, "link", l), Hl(t), a.head.appendChild(t)));
    }
  }
  function dv(l, t) {
    Vt.m(l, t);
    var u = ma;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + st(a) + '"][href="' + st(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Sa(l);
      }
      if (!mt.has(n) && (l = R({ rel: "modulepreload", href: l }, t), mt.set(n, l), u.querySelector(e) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(se(n))) return;
        }
        a = u.createElement("link"), jl(a, "link", l), Hl(a), u.head.appendChild(a);
      }
    }
  }
  function ov(l, t, u) {
    Vt.S(l, t, u);
    var a = ma;
    if (a && l) {
      var e = ju(a).hoistableStyles, n = ga(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = a.querySelector(ie(n))) c.loading = 5;
        else {
          l = R({ rel: "stylesheet", href: l, "data-precedence": t }, u), (u = mt.get(n)) && Zc(l, u);
          var i = f = a.createElement("link");
          Hl(i), jl(i, "link", l), i._p = new Promise(function(v, S) {
            i.onload = v, i.onerror = S;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, zn(f, t, a);
        }
        f = { type: "stylesheet", instance: f, count: 1, state: c }, e.set(n, f);
      }
    }
  }
  function rv(l, t) {
    Vt.X(l, t);
    var u = ma;
    if (u && l) {
      var a = ju(u).hoistableScripts, e = Sa(l), n = a.get(e);
      n || (n = u.querySelector(se(e)), n || (l = R({ src: l, async: true }, t), (t = mt.get(e)) && Cc(l, t), n = u.createElement("script"), Hl(n), jl(n, "link", l), u.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, a.set(e, n));
    }
  }
  function vv(l, t) {
    Vt.M(l, t);
    var u = ma;
    if (u && l) {
      var a = ju(u).hoistableScripts, e = Sa(l), n = a.get(e);
      n || (n = u.querySelector(se(e)), n || (l = R({ src: l, async: true, type: "module" }, t), (t = mt.get(e)) && Cc(l, t), n = u.createElement("script"), Hl(n), jl(n, "link", l), u.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, a.set(e, n));
    }
  }
  function Nd(l, t, u, a) {
    var e = (e = X.current) ? An(e) : null;
    if (!e) throw Error(m(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (t = ga(u.href), u = ju(e).hoistableStyles, a = u.get(t), a || (a = { type: "style", instance: null, count: 0, state: null }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = ga(u.href);
          var n = ju(e).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, n.set(l, f), (n = e.querySelector(ie(l))) && !n._p && (f.instance = n, f.state.loading = 5), mt.has(l) || (u = { rel: "preload", as: "style", href: u.href, crossOrigin: u.crossOrigin, integrity: u.integrity, media: u.media, hrefLang: u.hrefLang, referrerPolicy: u.referrerPolicy }, mt.set(l, u), n || yv(e, l, u, f.state))), t && a === null) throw Error(m(528, ""));
          return f;
        }
        if (t && a !== null) throw Error(m(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Sa(u), u = ju(e).hoistableScripts, a = u.get(t), a || (a = { type: "script", instance: null, count: 0, state: null }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(m(444, l));
    }
  }
  function ga(l) {
    return 'href="' + st(l) + '"';
  }
  function ie(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function qd(l) {
    return R({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function yv(l, t, u, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), jl(t, "link", u), Hl(t), l.head.appendChild(t));
  }
  function Sa(l) {
    return '[src="' + st(l) + '"]';
  }
  function se(l) {
    return "script[async]" + l;
  }
  function Bd(l, t, u) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var a = l.querySelector('style[data-href~="' + st(u.href) + '"]');
        if (a) return t.instance = a, Hl(a), a;
        var e = R({}, u, { "data-href": u.href, "data-precedence": u.precedence, href: null, precedence: null });
        return a = (l.ownerDocument || l).createElement("style"), Hl(a), jl(a, "style", e), zn(a, u.precedence, l), t.instance = a;
      case "stylesheet":
        e = ga(u.href);
        var n = l.querySelector(ie(e));
        if (n) return t.state.loading |= 4, t.instance = n, Hl(n), n;
        a = qd(u), (e = mt.get(e)) && Zc(a, e), n = (l.ownerDocument || l).createElement("link"), Hl(n);
        var f = n;
        return f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), jl(n, "link", a), t.state.loading |= 4, zn(n, u.precedence, l), t.instance = n;
      case "script":
        return n = Sa(u.src), (e = l.querySelector(se(n))) ? (t.instance = e, Hl(e), e) : (a = u, (e = mt.get(n)) && (a = R({}, u), Cc(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), Hl(e), jl(e, "link", a), l.head.appendChild(e), t.instance = e);
      case "void":
        return null;
      default:
        throw Error(m(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, zn(a, u.precedence, l));
    return t.instance;
  }
  function zn(l, t, u) {
    for (var a = u.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var c = a[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function Zc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Cc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var _n = null;
  function xd(l, t, u) {
    if (_n === null) {
      var a = /* @__PURE__ */ new Map(), e = _n = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else e = _n, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[Aa] || n[Gl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function Yd(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(u, t === "title" ? l.querySelector("head > title") : null);
  }
  function hv(l, t, u) {
    if (u === 1 || t.itemProp != null) return false;
    switch (l) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return true;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return true;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return true;
    }
    return false;
  }
  function jd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var de = null;
  function mv() {
  }
  function gv(l, t, u) {
    if (de === null) throw Error(m(475));
    var a = de;
    if (t.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== false) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var e = ga(u.href), n = l.querySelector(ie(e));
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (a.count++, a = On.bind(a), l.then(a, a)), t.state.loading |= 4, t.instance = n, Hl(n);
          return;
        }
        n = l.ownerDocument || l, u = qd(u), (e = mt.get(e)) && Zc(u, e), n = n.createElement("link"), Hl(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), jl(n, "link", u), t.instance = n;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = On.bind(a), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  function Sv() {
    if (de === null) throw Error(m(475));
    var l = de;
    return l.stylesheets && l.count === 0 && Vc(l, l.stylesheets), 0 < l.count ? function(t) {
      var u = setTimeout(function() {
        if (l.stylesheets && Vc(l, l.stylesheets), l.unsuspend) {
          var a = l.unsuspend;
          l.unsuspend = null, a();
        }
      }, 6e4);
      return l.unsuspend = t, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function On() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Vc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Mn = null;
  function Vc(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Mn = /* @__PURE__ */ new Map(), t.forEach(bv, l), Mn = null, On.call(l));
  }
  function bv(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Mn.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Mn.set(l, u);
        for (var e = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = On.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var oe = { $$typeof: pl, Provider: null, Consumer: null, _currentValue: x, _currentValue2: x, _threadCount: 0 };
  function Tv(l, t, u, a, e, n, f, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Gn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gn(0), this.hiddenUpdates = Gn(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Gd(l, t, u, a, e, n, f, c, i, v, S, T) {
    return l = new Tv(l, t, u, f, c, i, v, T), t = 1, n === true && (t |= 24), n = tt(3, null, null, t), l.current = n, n.stateNode = l, t = _f(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = { element: a, isDehydrated: u, cache: t }, Uf(n), l;
  }
  function Xd(l) {
    return l ? (l = $u, l) : $u;
  }
  function Qd(l, t, u, a, e, n) {
    e = Xd(e), a.context === null ? a.context = e : a.pendingContext = e, a = Ft(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = It(l, a, t), u !== null && (ft(u, l, t), Za(u, l, t));
  }
  function Zd(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function Lc(l, t) {
    Zd(l, t), (l = l.alternate) && Zd(l, t);
  }
  function Cd(l) {
    if (l.tag === 13) {
      var t = Wu(l, 67108864);
      t !== null && ft(t, l, 67108864), Lc(l, 67108864);
    }
  }
  var Dn = true;
  function Ev(l, t, u, a) {
    var e = g.T;
    g.T = null;
    var n = z.p;
    try {
      z.p = 2, Kc(l, t, u, a);
    } finally {
      z.p = n, g.T = e;
    }
  }
  function Av(l, t, u, a) {
    var e = g.T;
    g.T = null;
    var n = z.p;
    try {
      z.p = 8, Kc(l, t, u, a);
    } finally {
      z.p = n, g.T = e;
    }
  }
  function Kc(l, t, u, a) {
    if (Dn) {
      var e = Jc(a);
      if (e === null) Nc(l, t, a, Un, u), Ld(l, a);
      else if (_v(e, l, t, u, a)) a.stopPropagation();
      else if (Ld(l, a), t & 4 && -1 < zv.indexOf(l)) {
        for (; e !== null; ) {
          var n = Yu(e);
          if (n !== null) switch (n.tag) {
            case 3:
              if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                var f = mu(n.pendingLanes);
                if (f !== 0) {
                  var c = n;
                  for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                    var i = 1 << 31 - Pl(f);
                    c.entanglements[1] |= i, f &= ~i;
                  }
                  Dt(n), (tl & 6) === 0 && (on = At() + 500, ee(0));
                }
              }
              break;
            case 13:
              c = Wu(n, 2), c !== null && ft(c, n, 2), vn(), Lc(n, 2);
          }
          if (n = Jc(a), n === null && Nc(l, t, a, Un, u), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else Nc(l, t, a, null, u);
    }
  }
  function Jc(l) {
    return l = kn(l), wc(l);
  }
  var Un = null;
  function wc(l) {
    if (Un = null, l = xu(l), l !== null) {
      var t = B(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = sl(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Un = l, null;
  }
  function Vd(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (co()) {
          case ai:
            return 2;
          case ei:
            return 8;
          case be:
          case io:
            return 32;
          case ni:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Wc = false, ou = null, ru = null, vu = null, re = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), yu = [], zv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Ld(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ou = null;
        break;
      case "dragenter":
      case "dragleave":
        ru = null;
        break;
      case "mouseover":
      case "mouseout":
        vu = null;
        break;
      case "pointerover":
      case "pointerout":
        re.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ve.delete(t.pointerId);
    }
  }
  function ye(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = { blockedOn: t, domEventName: u, eventSystemFlags: a, nativeEvent: n, targetContainers: [e] }, t !== null && (t = Yu(t), t !== null && Cd(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function _v(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return ou = ye(ou, l, t, u, a, e), true;
      case "dragenter":
        return ru = ye(ru, l, t, u, a, e), true;
      case "mouseover":
        return vu = ye(vu, l, t, u, a, e), true;
      case "pointerover":
        var n = e.pointerId;
        return re.set(n, ye(re.get(n) || null, l, t, u, a, e)), true;
      case "gotpointercapture":
        return n = e.pointerId, ve.set(n, ye(ve.get(n) || null, l, t, u, a, e)), true;
    }
    return false;
  }
  function Kd(l) {
    var t = xu(l.target);
    if (t !== null) {
      var u = B(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = sl(u), t !== null) {
            l.blockedOn = t, go(l.priority, function() {
              if (u.tag === 13) {
                var a = nt();
                a = Xn(a);
                var e = Wu(u, a);
                e !== null && ft(e, u, a), Lc(u, a);
              }
            });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Rn(l) {
    if (l.blockedOn !== null) return false;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = Jc(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(u.type, u);
        $n = a, u.target.dispatchEvent(a), $n = null;
      } else return t = Yu(u), t !== null && Cd(t), l.blockedOn = u, false;
      t.shift();
    }
    return true;
  }
  function Jd(l, t, u) {
    Rn(l) && u.delete(t);
  }
  function Ov() {
    Wc = false, ou !== null && Rn(ou) && (ou = null), ru !== null && Rn(ru) && (ru = null), vu !== null && Rn(vu) && (vu = null), re.forEach(Jd), ve.forEach(Jd);
  }
  function pn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, Wc || (Wc = true, O.unstable_scheduleCallback(O.unstable_NormalPriority, Ov)));
  }
  var Hn = null;
  function wd(l) {
    Hn !== l && (Hn = l, O.unstable_scheduleCallback(O.unstable_NormalPriority, function() {
      Hn === l && (Hn = null);
      for (var t = 0; t < l.length; t += 3) {
        var u = l[t], a = l[t + 1], e = l[t + 2];
        if (typeof a != "function") {
          if (wc(a || u) === null) continue;
          break;
        }
        var n = Yu(u);
        n !== null && (l.splice(t, 3), t -= 3, wf(n, { pending: true, data: e, method: u.method, action: a }, a, e));
      }
    }));
  }
  function he(l) {
    function t(i) {
      return pn(i, l);
    }
    ou !== null && pn(ou, l), ru !== null && pn(ru, l), vu !== null && pn(vu, l), re.forEach(t), ve.forEach(t);
    for (var u = 0; u < yu.length; u++) {
      var a = yu[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < yu.length && (u = yu[0], u.blockedOn === null); ) Kd(u), u.blockedOn === null && yu.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null) for (a = 0; a < u.length; a += 3) {
      var e = u[a], n = u[a + 1], f = e[Jl] || null;
      if (typeof n == "function") f || wd(u);
      else if (f) {
        var c = null;
        if (n && n.hasAttribute("formAction")) {
          if (e = n, f = n[Jl] || null) c = f.formAction;
          else if (wc(e) !== null) continue;
        } else c = f.action;
        typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), wd(u);
      }
    }
  }
  function $c(l) {
    this._internalRoot = l;
  }
  Nn.prototype.render = $c.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(m(409));
    var u = t.current, a = nt();
    Qd(u, a, l, t, null, null);
  }, Nn.prototype.unmount = $c.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Qd(l.current, 2, null, l, null, null), vn(), t[Bu] = null;
    }
  };
  function Nn(l) {
    this._internalRoot = l;
  }
  Nn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = di();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < yu.length && t !== 0 && t < yu[u].priority; u++) ;
      yu.splice(u, 0, l), u === 0 && Kd(l);
    }
  };
  var Wd = hl.version;
  if (Wd !== "19.1.0") throw Error(m(527, Wd, "19.1.0"));
  z.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0) throw typeof l.render == "function" ? Error(m(188)) : (l = Object.keys(l).join(","), Error(m(268, l)));
    return l = p(t), l = l !== null ? E(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Mv = { bundleType: 0, version: "19.1.0", rendererPackageName: "react-dom", currentDispatcherRef: g, reconcilerVersion: "19.1.0" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qn.isDisabled && qn.supportsFiber) try {
      ba = qn.inject(Mv), Il = qn;
    } catch {
    }
  }
  return ge.createRoot = function(l, t) {
    if (!G(l)) throw Error(m(299));
    var u = false, a = "", e = d0, n = o0, f = r0, c = null;
    return t != null && (t.unstable_strictMode === true && (u = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (c = t.unstable_transitionCallbacks)), t = Gd(l, 1, false, null, null, u, a, e, n, f, c, null), l[Bu] = t.current, Hc(l), new $c(t);
  }, ge.hydrateRoot = function(l, t, u) {
    if (!G(l)) throw Error(m(299));
    var a = false, e = "", n = d0, f = o0, c = r0, i = null, v = null;
    return u != null && (u.unstable_strictMode === true && (a = true), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (i = u.unstable_transitionCallbacks), u.formState !== void 0 && (v = u.formState)), t = Gd(l, 1, true, t, u ?? null, a, e, n, f, c, i, v), t.context = Xd(null), u = t.current, a = nt(), a = Xn(a), e = Ft(a), e.callback = null, It(u, e, a), u = a, t.current.lanes = u, Ea(t, u), Dt(t), l[Bu] = t.current, Hc(l), new Nn(t);
  }, ge.version = "19.1.0", ge;
}
var eo;
function Yv() {
  if (eo) return Ic.exports;
  eo = 1;
  function O() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
    } catch (hl) {
      console.error(hl);
    }
  }
  return O(), Ic.exports = xv(), Ic.exports;
}
var jv = Yv();
function Gv(O) {
  return new Worker("/sii-decode-rs/assets/decode.worker-D3jbBnB1.js", { type: "module", name: O == null ? void 0 : O.name });
}
function Xv() {
  const [O, hl] = Ul.useState(null), [$, m] = Ul.useState(""), G = Ul.useRef(null), B = Ul.useRef(null), sl = Ul.useRef(null), [El, p] = Ul.useState([]), [E, R] = Ul.useState("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C"), [P, al] = Ul.useState("info"), [Al, Ol] = Ul.useState(""), [Ll, Rl] = Ul.useState(false), [Ut, gt] = Ul.useState(false), [pl, Kl] = Ul.useState(false), C = El.find((H) => H.id === Al) ?? null;
  Ul.useEffect(() => (sl.current = new Gv(), () => {
    var _a;
    (_a = sl.current) == null ? void 0 : _a.terminate();
  }), []), Ul.useEffect(() => {
    var _a;
    Al && (Rl(false), ((_a = B.current) == null ? void 0 : _a.href) && B.current.href !== "#" && (URL.revokeObjectURL(B.current.href), B.current.href = "#"), O && ol("\u0428\u0430\u0431\u043B\u043E\u043D \u0438\u0437\u043C\u0435\u043D\u0451\u043D. \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435."));
  }, [Al]), Ul.useEffect(() => {
    const H = new AbortController();
    return (async () => {
      try {
        const rl = new URL("preparedBlocks/index.json", document.baseURI), L = await fetch(rl, { cache: "no-store", signal: H.signal });
        if (!L.ok) {
          console.error("Failed to load index.json:", L.status);
          return;
        }
        const g = await L.json();
        console.log("Loaded preparedBlocks:", g), p(g), g.length > 0 && Ol(g[0].id);
      } catch (rl) {
        if (rl.name === "AbortError") return;
        console.error("Load error:", rl);
      }
    })(), () => {
      H.abort();
    };
  }, []), Ul.useEffect(() => {
    const H = new URLSearchParams(window.location.search), ll = H.get("preset");
    if (ll) {
      const L = El.find((g) => g.id === ll);
      L ? (Ol(L.id), gt(true), ol(`\u041F\u0440\u0435\u0441\u0435\u0442 \u0437\u0430\u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D \u0438\u0437 \u0441\u0441\u044B\u043B\u043A\u0438:
${L.name}`, "info")) : ol(`\u041F\u0440\u0435\u0441\u0435\u0442 "${ll}" \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D`, "error");
    }
    const rl = H.get("testmode");
    Kl(rl === "1" || rl === "true");
  }, [El]);
  const Zl = (H) => {
    const ll = H.match(/map_path:\s*"([^"]+)"/);
    return ll ? ll[1] : null;
  }, Cl = Ul.useCallback((H) => {
    if (!H.target.files || H.target.files.length === 0) return;
    const ll = H.target.files[0];
    Rl(false), G.current && (G.current.value = "Decoding...", ol("\u0414\u0435\u043A\u043E\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044F...")), B.current && (B.current.href !== "#" && URL.revokeObjectURL(B.current.href), B.current.href = "#"), hl(ll);
  }, []);
  Ul.useEffect(() => {
    if (!O || !sl.current) return;
    const H = sl.current, ll = (L) => {
      if (L.data.type === "success") {
        const { result: g, blobUrl: z } = L.data;
        m(g), G.current && (g.length > 1e5 ? G.current.value = g.slice(0, 1e5) + `

... (${(g.length / 1024 / 1024).toFixed(2)} MB total - download for full content)` : G.current.value = g), B.current && (B.current.href = z, B.current.download = O.name.replace(".sii", "-decoded.sii")), ol(`\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D. 
 \u0412\u044B\u0431\u0435\u0440\u0435\u0442\u0435 \u0448\u0430\u0431\u043B\u043E\u043D \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C.`, "success");
      } else L.data.type === "error" && (ol(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0434\u0435\u043A\u043E\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F: ${L.data.message}`, "error"), G.current && (G.current.value = `Error: ${L.data.message}`));
    };
    H.addEventListener("message", ll);
    const rl = new FileReader();
    return rl.onload = (L) => {
      var _a;
      const g = (_a = L.target) == null ? void 0 : _a.result;
      H.postMessage({ type: "decode", buffer: g }, [g]);
    }, rl.readAsArrayBuffer(O), () => {
      H.removeEventListener("message", ll);
    };
  }, [O]);
  const ol = (H, ll = "info") => {
    R(H), al(ll);
  }, ct = async (H) => {
    const ll = new URL(`preparedBlocks/${H}`, document.baseURI), rl = await fetch(ll, { cache: "no-store" });
    if (!rl.ok) throw ol(`\u041D\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D ${H}`, "error"), new Error(`\u041D\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D ${H}`);
    return await rl.text();
  }, Lt = (H) => {
    if (!H) return "\u0424\u0430\u0439\u043B \u0448\u0430\u0431\u043B\u043E\u043D\u0430 \u043F\u0443\u0441\u0442";
    const ll = H.replace(/^\uFEFF/, ""), L = ll.split(/\r?\n/).find((z) => z.trim().length > 0);
    return L ? /^\s*active_mods:\s*\d+/.test(L) ? /^\s*active_mods\[\d+\]:\s*".*?"$/m.test(ll) ? null : "\u0412 \u0448\u0430\u0431\u043B\u043E\u043D\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u0441\u0442\u0440\u043E\u043A\u0438 active_mods[i]" : "\u041F\u0435\u0440\u0432\u0430\u044F \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C 'active_mods: N'" : "\u0424\u0430\u0439\u043B \u043D\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0434\u0430\u043D\u043D\u044B\u0445";
  }, St = async () => {
    if (!$ || !C) return;
    const H = Zl($);
    if (!H) {
      ol("\u0412 \u043F\u0440\u043E\u0444\u0438\u043B\u0435 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D map_path", "error");
      return;
    }
    if (H !== C.map_path) {
      ol(`map_path \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0435\u0442!

\u041F\u0440\u043E\u0444\u0438\u043B\u044C: ${H}
\u0428\u0430\u0431\u043B\u043E\u043D: ${C.map_path}`, "error");
      return;
    }
    const ll = await ct(C.file), rl = Lt(ll);
    if (rl) {
      ol(`\u041E\u0448\u0438\u0431\u043A\u0430 preparedBlock:
${rl}`, "error");
      return;
    }
    const L = $.replace(/active_mods:\s*\d+[\r\n]+(?:\s*active_mods\[\d+\]:\s*".*?"[\r\n]+)*/g, ll);
    m(L), ol(`\u041C\u043E\u0434\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u0432 \u043F\u0440\u043E\u0444\u0438\u043B\u044C.\r
\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043C\u043E\u0436\u043D\u043E \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 \u0432\u044B\u0448\u0435`, "success");
    const g = new Blob([L], { type: "text/plain" }), z = URL.createObjectURL(g);
    Rl(true), B.current && (B.current.href && B.current.href !== "#" && URL.revokeObjectURL(B.current.href), B.current.href = z, B.current.download = (O == null ? void 0 : O.name) ?? "profile.sii");
  };
  return Q.jsxs(Q.Fragment, { children: [Q.jsx("h1", { children: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0449\u0438\u043A \u043C\u043E\u0434\u043E\u0432 \u0434\u043B\u044F \u043F\u0440\u043E\u0444\u0438\u043B\u044F ETS 2 \u0438 ATS" }), Q.jsx("p", { children: "1. \u0412 \u0438\u0433\u0440\u0435 \u0441\u043E\u0437\u0434\u0430\u0442\u044C, \u043B\u0438\u0431\u043E \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C \u0434\u043B\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u043C\u043E\u0434\u043E\u0432." }), Q.jsx("p", { children: "2. \u0412 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0435 \u043A\u0430\u0440\u044C\u0435\u0440\u044B \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044E \u0441 \u043E\u0431\u043B\u0430\u043A\u043E\u043C \u0441\u0442\u0438\u043C(\u0435\u0435 \u043C\u043E\u0436\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043F\u043E\u0437\u0434\u043D\u0435\u0435)." }), Q.jsx("p", { children: '3. \u041D\u0430\u0436\u0430\u0442\u044C \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043A\u0430\u0440\u044C\u0435\u0440\u0443,\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C\u0441\u044F \u0438 \u043D\u0430\u0436\u0430\u0442\u044C "\u0441\u0438\u0441\u0442\u0435\u043C\u0430","\u0432\u044B\u0445\u043E\u0434."' }), Q.jsx("p", { children: "4. \u0412 \u043F\u0440\u043E\u0432\u043E\u0434\u043D\u0438\u043A\u0435:" }), Q.jsxs("p", { children: [Q.jsx("code", { children: "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B/Euro Truck Simulator 2/profiles" }), " \u0438\u043B\u0438 ", Q.jsx("code", { children: "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B/American Truck Simulator/profiles" })] }), Q.jsx("p", { children: "\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u0434\u0430\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F (\u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0430\u043C\u0443\u044E \u043D\u043E\u0432\u0443\u044E \u043F\u0430\u043F\u043A\u0443 \u0441 \u043F\u0440\u043E\u0444\u0438\u043B\u0435\u043C)" }), Q.jsxs("p", { children: ["\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u0430\u0439\u043B profile.sii      ", Q.jsx("input", { type: "file", accept: ".sii", onChange: Cl, style: { marginBottom: "10px" } })] }), Q.jsx("p", { children: "5. \u0412\u044B\u0431\u0438\u0440\u0430\u0435\u043C \u0448\u0430\u0431\u043B\u043E\u043D" }), Q.jsxs("div", { style: { marginTop: "20px" }, children: [Q.jsxs("div", { style: { marginBottom: "10px" }, children: [Q.jsx("label", { children: "\u0428\u0430\u0431\u043B\u043E\u043D active_mods: " }), Q.jsx("select", { value: Al, disabled: Ut, onChange: (H) => Ol(H.target.value), style: { marginLeft: "10px" }, children: El.map((H) => Q.jsx("option", { value: H.id, children: H.name }, H.id)) })] }), Q.jsxs("div", { style: { marginTop: "15px", padding: "8px 12px", borderRadius: "6px", background: "#f3f3f3", color: "#333", fontSize: "1.1em", border: "1px solid #ddd", whiteSpace: "pre-line" }, children: [Q.jsx("strong", { children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: " }), C && C.description] }), Q.jsxs("p", { children: ["6. \u041D\u0430\u0436\u0438\u043C\u0430\u0435\u043C  ", " ", "       ", Q.jsx("button", { onClick: St, style: { marginLeft: "10px" }, children: "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C" })] })] }), Q.jsxs("p", { children: ["7.", " ", !Ll && Q.jsx("span", { children: ' \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 "\u0441\u0442\u0430\u0442\u0443\u0441"' }), Q.jsx("a", { href: "#", ref: B, "data-testid": "file-download", style: { display: Ll ? "inline" : "none" }, children: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C" })] }), Q.jsxs("p", { children: ["8. \u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u044B\u0432\u0430\u0435\u043C \u0441\u043A\u0430\u0447\u0430\u043D\u043D\u044B\u0439 \u0444\u0430\u0439\u043B \u0432 ", Q.jsx("code", { children: "profile.sii" }), " (\u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438)"] }), Q.jsx("p", { children: "9. \u0412\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0435\u0433\u043E \u0441 \u0437\u0430\u043C\u0435\u043D\u043E\u0439 \u0432 \u043F\u0430\u043F\u043A\u0443, \u043E\u0442\u043A\u0443\u0434\u0430 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u043B\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442 \u0444\u0430\u0439\u043B profile.sii" }), Q.jsx("p", { children: "10. \u0417\u0430\u0445\u043E\u0434\u0438\u043C \u0432 \u0438\u0433\u0440\u0443,\u0432 \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438," }), Q.jsx("p", { children: "11. \u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C, \u0447\u0442\u043E \u0431\u044B \u0432 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F\u0445 (\u043A\u043E\u043B\u043E\u043D\u043A\u0430 \u0441\u043F\u0440\u0430\u0432\u0430) \u043D\u0435 \u0431\u044B\u043B\u043E \u043C\u043E\u0434\u043E\u0432 \u0441 \u043A\u0440\u0430\u0441\u043D\u044B\u043C \u0432\u043E\u0441\u043B\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0437\u043D\u0430\u043A\u043E\u043C." }), Q.jsx("p", { children: "12. \u0415\u0441\u043B\u0438 \u0432\u0441\u0451 \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435, (\u043A\u0440\u0430\u0441\u043D\u044B\u0445 \u043C\u043E\u0434\u043E\u0432 \u043D\u0435\u0442),\u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0442\u044C \u0438\u0433\u0440\u0443." }), Q.jsx("p", { children: '13. \u041F\u0440\u0438 \u043D\u0430\u043B\u0438\u0447\u0438\u0438 "\u043A\u0440\u0430\u0441\u043D\u044B\u0445" \u043C\u043E\u0434\u043E\u0432 \u0441\u043F\u0440\u0430\u0432\u0430, \u0438\u0441\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432\u0440\u0443\u0447\u043D\u0443\u044E.' }), Q.jsx("p", { children: "14. \u041D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C\u0442\u0435 \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044E \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u0441 \u043E\u0431\u043B\u0430\u043A\u043E\u043C \u0441\u0442\u0438\u043C." }), Q.jsxs("div", { style: { marginTop: "15px", padding: "8px 12px", borderRadius: "6px", background: P === "error" ? "#ffe5e5" : P === "success" ? "#e6ffed" : "#f3f3f3", color: P === "error" ? "#a40000" : P === "success" ? "#1a7f37" : "#333", fontSize: "1.1em", border: "1px solid #ddd", whiteSpace: "pre-line" }, children: [Q.jsx("strong", { children: "\u0421\u0442\u0430\u0442\u0443\u0441:" }), " ", E] }), Q.jsx("textarea", { id: "output", rows: 20, cols: 50, ref: G, value: $, "data-testid": "file-display", spellCheck: "false", readOnly: true, style: { marginTop: "10px", display: pl ? "inline-block" : "none" } }), Q.jsxs("p", { className: "footer", children: ["\u0412\u0430\u0448 \u043F\u0440\u043E\u0444\u0438\u043B\u044C \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F \u043D\u0438 \u043D\u0430 \u043A\u0430\u043A\u043E\u0439 \u0441\u0435\u0440\u0432\u0435\u0440, \u0432\u0441\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432\u044B\u043F\u043E\u043B\u044F\u044E\u0442\u0441\u044F \u0432 \u0432\u0430\u0448\u0435\u043C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435.", Q.jsx("br", {}), "\u041D\u043E \u043D\u0435 \u0438\u0437\u043C\u0435\u043D\u044F\u044E\u0442 \u0432\u044B\u0431\u0440\u0430\u043D\u044B\u0439 \u0432\u0430\u043C\u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u044C, \u0430 \u043B\u0438\u0448 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u043D\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E.", Q.jsx("br", {}), "This tools is", " ", Q.jsx("a", { href: "https://github.com/ivsema/sii-decode-rs", children: "open source" }), ". If you encounter any issues, please report them", " ", Q.jsx("a", { href: "https://github.com/ivsema/sii-decode-rs/issues", children: "on GitHub" }), "."] })] });
}
jv.createRoot(document.getElementById("root")).render(Q.jsx(Ul.StrictMode, { children: Q.jsx(Xv, {}) }));
