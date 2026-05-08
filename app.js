"use strict";

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n2 = 0, F = function F() {}; return { s: F, n: function n() { return _n2 >= r.length ? { done: !0 } : { done: !1, value: r[_n2++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Saleyard Buyer Tool
// Author: Patrick Coole
// Night-theme, with dashboard.

var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useMemo = _React.useMemo,
  useRef = _React.useRef;

// ----- Defaults & constants -----

var DEFAULT_LINES = [{
  code: 'MW',
  name: 'Merino Wethers',
  category: 'male'
}, {
  code: 'RL',
  name: 'Ram Lambs',
  category: 'male'
}, {
  code: 'RAM',
  name: 'Rams',
  category: 'male'
}, {
  code: 'EWE',
  name: 'Ewes',
  category: 'female'
}, {
  code: 'SL',
  name: 'Store Lambs',
  category: 'mixed'
}, {
  code: 'DOE',
  name: 'Does',
  category: 'goat'
}, {
  code: 'BUK',
  name: 'Bucks',
  category: 'goat'
}];
var CAT = {
  male: {
    solid: '#5B82CC',
    soft: '#1B2540',
    ink: '#FFFFFF',
    label: 'Male sheep'
  },
  female: {
    solid: '#E04A8F',
    soft: '#3A1626',
    ink: '#FFFFFF',
    label: 'Female sheep'
  },
  goat: {
    solid: '#C97849',
    soft: '#2D1A0E',
    ink: '#FFFFFF',
    label: 'Goat'
  },
  mixed: {
    solid: '#9CA0AB',
    soft: '#25272C',
    ink: '#0D0D0F',
    label: 'Mixed sex'
  }
};
var T = {
  bgBody: '#0F0F10',
  bgHeader: '#050507',
  bgCard: '#1A1A1C',
  bgField: '#242427',
  bgInset: '#161618',
  borderH: '#3A3A3F',
  borderS: '#2A2A2E',
  text: '#EAEAEC',
  textMute: '#9A9AA1',
  textLbl: '#B0B0B5',
  accent: '#FFD66B',
  warnBdr: '#F87171',
  warnBg: 'rgba(248,113,113,0.08)',
  warnTxt: '#FCA5A5',
  okTxt: '#86EFAC',
  editBg: '#2A2618'
};
var STORAGE_KEY = 'saleyard-state-v1';
var DEFAULT_KG_STEP = 0.05;

// ----- Helpers -----

var fmt2 = function fmt2(n) {
  return Number.isFinite(n) ? n.toFixed(2) : '0.00';
};
var fmt1 = function fmt1(n) {
  return Number.isFinite(n) ? n.toFixed(1) : '0.0';
};
var fmt0 = function fmt0(n) {
  return Number.isFinite(n) ? Math.round(n).toLocaleString('en-AU') : '0';
};
var fmtInt = function fmtInt(n) {
  return Number.isFinite(n) ? Math.round(n).toLocaleString('en-AU') : '0';
};
var round2 = function round2(n) {
  return Math.round(n * 100) / 100;
};
function emptyDraft() {
  return {
    lineCode: '',
    penNumber: '',
    head: '',
    wtPerHead: '',
    pricePerKg: '',
    pricePerHead: '',
    lastEditedPrice: null
  };
}

// ----- Main component -----

function App() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    loaded = _useState2[0],
    setLoaded = _useState2[1];
  var _useState3 = useState(DEFAULT_LINES),
    _useState4 = _slicedToArray(_useState3, 2),
    lines = _useState4[0],
    setLines = _useState4[1];
  var _useState5 = useState({}),
    _useState6 = _slicedToArray(_useState5, 2),
    budgets = _useState6[0],
    setBudgets = _useState6[1];
  var _useState7 = useState({}),
    _useState8 = _slicedToArray(_useState7, 2),
    estimatedPpks = _useState8[0],
    setEstimatedPpks = _useState8[1];
  var _useState9 = useState({}),
    _useState0 = _slicedToArray(_useState9, 2),
    defaultWeights = _useState0[0],
    setDefaultWeights = _useState0[1];
  var _useState1 = useState({}),
    _useState10 = _slicedToArray(_useState1, 2),
    bidSteps = _useState10[0],
    setBidSteps = _useState10[1];
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    purchases = _useState12[0],
    setPurchases = _useState12[1];
  var _useState13 = useState(emptyDraft()),
    _useState14 = _slicedToArray(_useState13, 2),
    draft = _useState14[0],
    setDraft = _useState14[1];
  var _useState15 = useState(null),
    _useState16 = _slicedToArray(_useState15, 2),
    editingId = _useState16[0],
    setEditingId = _useState16[1];
  var _useState17 = useState(''),
    _useState18 = _slicedToArray(_useState17, 2),
    buyerEmail = _useState18[0],
    setBuyerEmail = _useState18[1];
  var _useState19 = useState(false),
    _useState20 = _slicedToArray(_useState19, 2),
    showSettings = _useState20[0],
    setShowSettings = _useState20[1];
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    showResetConfirm = _useState22[0],
    setShowResetConfirm = _useState22[1];
  var _useState23 = useState(null),
    _useState24 = _slicedToArray(_useState23, 2),
    toast = _useState24[0],
    setToast = _useState24[1];
  var _useState25 = useState('buying'),
    _useState26 = _slicedToArray(_useState25, 2),
    view = _useState26[0],
    setView = _useState26[1]; // 'buying' or 'dashboard' // {message, undo?}

  var draftRef = useRef(null);
  var toastTimer = useRef(null);

  // Load persisted state
  useEffect(function () {
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var result, data, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return window.storage.get(STORAGE_KEY);
          case 1:
            result = _context.v;
            if (result && result.value) {
              data = JSON.parse(result.value);
              if (Array.isArray(data.lines) && data.lines.length) setLines(data.lines);
              if (data.budgets && _typeof(data.budgets) === 'object') setBudgets(data.budgets);
              if (data.estimatedPpks && _typeof(data.estimatedPpks) === 'object') setEstimatedPpks(data.estimatedPpks);
              if (data.defaultWeights && _typeof(data.defaultWeights) === 'object') setDefaultWeights(data.defaultWeights);
              if (data.bidSteps && _typeof(data.bidSteps) === 'object') setBidSteps(data.bidSteps);
              if (Array.isArray(data.purchases)) setPurchases(data.purchases);
              if (data.draft && _typeof(data.draft) === 'object') setDraft(_objectSpread(_objectSpread({}, emptyDraft()), data.draft));
              if (typeof data.buyerEmail === 'string') setBuyerEmail(data.buyerEmail);
            }
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
          case 3:
            _context.p = 3;
            setLoaded(true);
            return _context.f(3);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2, 3, 4]]);
    }))();
  }, []);

  // Save when state changes (debounced, includes draft for crash recovery)
  useEffect(function () {
    if (!loaded) return;
    var t = setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return window.storage.set(STORAGE_KEY, JSON.stringify({
              lines: lines,
              budgets: budgets,
              estimatedPpks: estimatedPpks,
              defaultWeights: defaultWeights,
              bidSteps: bidSteps,
              purchases: purchases,
              draft: draft,
              buyerEmail: buyerEmail
            }));
          case 1:
            _context2.n = 3;
            break;
          case 2:
            _context2.p = 2;
            _t2 = _context2.v;
          case 3:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
    })), 250);
    return function () {
      return clearTimeout(t);
    };
  }, [lines, budgets, estimatedPpks, defaultWeights, bidSteps, purchases, draft, buyerEmail, loaded]);

  // Toast helpers, supports an optional UNDO button
  function showToast(message, undo) {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({
      message: message,
      undo: undo
    });
    var dwell = undo ? 6000 : 2200;
    toastTimer.current = setTimeout(function () {
      return setToast(null);
    }, dwell);
  }
  function clearToast() {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast(null);
  }

  // ----- Bid entry handlers -----

  function pickLine(code) {
    setDraft(function (prev) {
      var next = _objectSpread(_objectSpread({}, prev), {}, {
        lineCode: code
      });
      // Pre-fill default weight if set and weight field is empty
      if (!next.wtPerHead && defaultWeights[code]) {
        next.wtPerHead = String(defaultWeights[code]);
        // Recompute the dependent price if a price was already typed
        var wt = parseFloat(next.wtPerHead);
        if (Number.isFinite(wt) && wt > 0) {
          if (next.lastEditedPrice === 'pricePerKg' && next.pricePerKg !== '') {
            var pk = parseFloat(next.pricePerKg);
            if (Number.isFinite(pk)) next.pricePerHead = (pk * wt).toFixed(2);
          } else if (next.lastEditedPrice === 'pricePerHead' && next.pricePerHead !== '') {
            var ph = parseFloat(next.pricePerHead);
            if (Number.isFinite(ph)) next.pricePerKg = (ph / wt).toFixed(2);
          }
        }
      }
      return next;
    });
  }
  function updateField(field, value) {
    setDraft(function (prev) {
      var next = _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, field, value));
      var wt = parseFloat(next.wtPerHead);
      var wtValid = Number.isFinite(wt) && wt > 0;
      if (field === 'pricePerKg') {
        next.lastEditedPrice = 'pricePerKg';
        if (value === '') next.pricePerHead = '';else if (wtValid) {
          var v = parseFloat(value);
          if (Number.isFinite(v)) next.pricePerHead = (v * wt).toFixed(2);
        }
      } else if (field === 'pricePerHead') {
        next.lastEditedPrice = 'pricePerHead';
        if (value === '') next.pricePerKg = '';else if (wtValid) {
          var _v = parseFloat(value);
          if (Number.isFinite(_v)) next.pricePerKg = (_v / wt).toFixed(2);
        }
      } else if (field === 'wtPerHead') {
        var newWt = parseFloat(value);
        if (Number.isFinite(newWt) && newWt > 0) {
          if (next.lastEditedPrice === 'pricePerKg' && next.pricePerKg !== '') {
            var pk = parseFloat(next.pricePerKg);
            if (Number.isFinite(pk)) next.pricePerHead = (pk * newWt).toFixed(2);
          } else if (next.lastEditedPrice === 'pricePerHead' && next.pricePerHead !== '') {
            var ph = parseFloat(next.pricePerHead);
            if (Number.isFinite(ph)) next.pricePerKg = (ph / newWt).toFixed(2);
          }
        }
      }
      return next;
    });
  }

  // Step the price up or down, in $/kg or $/head
  function bumpPrice(which, dir) {
    setDraft(function (prev) {
      var next = _objectSpread({}, prev);
      var wt = parseFloat(next.wtPerHead);
      var wtValid = Number.isFinite(wt) && wt > 0;
      var kgStep = next.lineCode && Number.isFinite(bidSteps[next.lineCode]) ? bidSteps[next.lineCode] : DEFAULT_KG_STEP;
      if (which === 'kg') {
        var cur = parseFloat(next.pricePerKg);
        var start = Number.isFinite(cur) ? cur : 0;
        var n = round2(start + dir * kgStep);
        if (n < 0) n = 0;
        next.pricePerKg = n.toFixed(2);
        next.lastEditedPrice = 'pricePerKg';
        if (wtValid) next.pricePerHead = (n * wt).toFixed(2);
      } else {
        // $/head step is kgStep × weight if weight is set, otherwise $1
        var headStep = wtValid ? round2(kgStep * wt) : 1;
        var _cur = parseFloat(next.pricePerHead);
        var _start = Number.isFinite(_cur) ? _cur : 0;
        var _n = round2(_start + dir * headStep);
        if (_n < 0) _n = 0;
        next.pricePerHead = _n.toFixed(2);
        next.lastEditedPrice = 'pricePerHead';
        if (wtValid) next.pricePerKg = (_n / wt).toFixed(2);
      }
      return next;
    });
  }
  function sameAsLast() {
    if (purchases.length === 0) return;
    var last = purchases[0];
    setDraft(function (prev) {
      return _objectSpread(_objectSpread({}, emptyDraft()), {}, {
        lineCode: last.lineCode,
        penNumber: '',
        head: String(last.head),
        wtPerHead: String(last.wtPerHead)
      });
    });
  }

  // Set $/kg from a preset button, also updates $/head when weight is known
  function setPresetPpk(price) {
    setDraft(function (prev) {
      var next = _objectSpread({}, prev);
      next.pricePerKg = price.toFixed(2);
      next.lastEditedPrice = 'pricePerKg';
      var wt = parseFloat(next.wtPerHead);
      if (Number.isFinite(wt) && wt > 0) {
        next.pricePerHead = (price * wt).toFixed(2);
      }
      return next;
    });
  }

  // Computed for the current draft
  var dHead = parseInt(draft.head, 10);
  var dWt = parseFloat(draft.wtPerHead);
  var dPpk = parseFloat(draft.pricePerKg);
  var dPph = parseFloat(draft.pricePerHead);
  var dTotalKg = Number.isFinite(dHead) && Number.isFinite(dWt) ? dHead * dWt : 0;
  var dTotal = Number.isFinite(dHead) && Number.isFinite(dPph) ? dHead * dPph : 0;
  var dValid = !!draft.lineCode && dHead > 0 && dWt > 0 && dPpk > 0 && dPph > 0;
  var lineBudget = draft.lineCode ? budgets[draft.lineCode] : undefined;
  var overBudget = !!lineBudget && Number.isFinite(dPpk) && dPpk > lineBudget;
  var headroom = lineBudget && Number.isFinite(dPpk) && dPpk > 0 ? lineBudget - dPpk : null;

  // Preset prices for the selected line: estimate -10c, -5c, estimate, +5c, +10c
  var lineEstimate = draft.lineCode ? estimatedPpks[draft.lineCode] : undefined;
  var presets = useMemo(function () {
    if (!lineEstimate) return [];
    return [-0.10, -0.05, 0, 0.05, 0.10].map(function (d) {
      return round2(Math.max(0, lineEstimate + d));
    });
  }, [lineEstimate]);

  // Today's running average $/kg for the selected line (bought only)
  var lineDayAvg = useMemo(function () {
    if (!draft.lineCode) return null;
    var matches = purchases.filter(function (p) {
      return p.lineCode === draft.lineCode && !p.watched;
    });
    if (matches.length === 0) return null;
    var kg = matches.reduce(function (s, p) {
      return s + p.totalKg;
    }, 0);
    var dol = matches.reduce(function (s, p) {
      return s + p.total;
    }, 0);
    return kg > 0 ? dol / kg : null;
  }, [purchases, draft.lineCode]);
  function commitEntry(asWatched) {
    var _purchases$find;
    if (!dValid) return;
    var isNew = !editingId;
    var entry = {
      id: editingId || Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      lineCode: draft.lineCode,
      penNumber: draft.penNumber.trim(),
      head: dHead,
      wtPerHead: dWt,
      pricePerKg: dPpk,
      pricePerHead: dPph,
      totalKg: dTotalKg,
      total: dTotal,
      watched: !!asWatched,
      timestamp: editingId ? ((_purchases$find = purchases.find(function (p) {
        return p.id === editingId;
      })) === null || _purchases$find === void 0 ? void 0 : _purchases$find.timestamp) || new Date().toISOString() : new Date().toISOString()
    };
    if (editingId) {
      var previous = purchases.find(function (p) {
        return p.id === editingId;
      });
      setPurchases(function (prev) {
        return prev.map(function (p) {
          return p.id === editingId ? entry : p;
        });
      });
      setEditingId(null);
      setDraft(emptyDraft());
      showToast('Pen updated', {
        label: 'UNDO',
        run: function run() {
          if (previous) setPurchases(function (prev) {
            return prev.map(function (p) {
              return p.id === editingId ? previous : p;
            });
          });
          clearToast();
        }
      });
    } else {
      setPurchases(function (prev) {
        return [entry].concat(_toConsumableArray(prev));
      });
      setDraft(emptyDraft());
      showToast(asWatched ? 'Watched pen logged' : 'Pen recorded', {
        label: 'UNDO',
        run: function run() {
          setPurchases(function (prev) {
            return prev.filter(function (p) {
              return p.id !== entry.id;
            });
          });
          clearToast();
        }
      });
    }
  }
  function startEdit(id) {
    var p = purchases.find(function (x) {
      return x.id === id;
    });
    if (!p) return;
    setDraft({
      lineCode: p.lineCode,
      penNumber: p.penNumber || '',
      head: String(p.head),
      wtPerHead: String(p.wtPerHead),
      pricePerKg: p.pricePerKg.toFixed(2),
      pricePerHead: p.pricePerHead.toFixed(2),
      lastEditedPrice: 'pricePerKg'
    });
    setEditingId(id);
    if (draftRef.current) {
      draftRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  function cancelEdit() {
    setEditingId(null);
    setDraft(emptyDraft());
  }
  function deletePurchase(id) {
    var removed = purchases.find(function (p) {
      return p.id === id;
    });
    if (!removed) return;
    setPurchases(function (prev) {
      return prev.filter(function (p) {
        return p.id !== id;
      });
    });
    if (editingId === id) cancelEdit();
    showToast('Pen deleted', {
      label: 'UNDO',
      run: function run() {
        setPurchases(function (prev) {
          // Reinsert preserving order by timestamp (newest first)
          var next = [].concat(_toConsumableArray(prev), [removed]);
          next.sort(function (a, b) {
            return (b.timestamp || '').localeCompare(a.timestamp || '');
          });
          return next;
        });
        clearToast();
      }
    });
  }
  function resetDay() {
    setPurchases([]);
    setEditingId(null);
    setDraft(emptyDraft());
    setShowResetConfirm(false);
    setView('buying');
    showToast('New day started');
  }

  // Day totals (bought only). Watched are tracked but not part of spend.
  var totals = useMemo(function () {
    var bought = purchases.filter(function (p) {
      return !p.watched;
    });
    var head = bought.reduce(function (s, p) {
      return s + p.head;
    }, 0);
    var kg = bought.reduce(function (s, p) {
      return s + p.totalKg;
    }, 0);
    var dollars = bought.reduce(function (s, p) {
      return s + p.total;
    }, 0);
    return {
      pens: bought.length,
      watched: purchases.length - bought.length,
      head: head,
      kg: kg,
      dollars: dollars,
      avgPpk: kg > 0 ? dollars / kg : 0,
      avgPph: head > 0 ? dollars / head : 0
    };
  }, [purchases]);

  // ----- Settings handlers -----

  function setBudgetFor(code, val) {
    setBudgets(function (prev) {
      var next = _objectSpread({}, prev);
      if (val === '' || val == null) delete next[code];else {
        var v = parseFloat(val);
        if (Number.isFinite(v) && v > 0) next[code] = v;
      }
      return next;
    });
  }
  function setEstimatedPpkFor(code, val) {
    setEstimatedPpks(function (prev) {
      var next = _objectSpread({}, prev);
      if (val === '' || val == null) delete next[code];else {
        var v = parseFloat(val);
        if (Number.isFinite(v) && v > 0) next[code] = v;
      }
      return next;
    });
  }
  function setDefaultWeightFor(code, val) {
    setDefaultWeights(function (prev) {
      var next = _objectSpread({}, prev);
      if (val === '' || val == null) delete next[code];else {
        var v = parseFloat(val);
        if (Number.isFinite(v) && v > 0) next[code] = v;
      }
      return next;
    });
  }
  function setBidStepFor(code, val) {
    setBidSteps(function (prev) {
      var next = _objectSpread({}, prev);
      if (val === '' || val == null) delete next[code];else {
        var v = parseFloat(val);
        if (Number.isFinite(v) && v > 0) next[code] = v;
      }
      return next;
    });
  }
  function addLineType(code, name, category) {
    var c = (code || '').toUpperCase().trim();
    var n = (name || '').trim();
    if (!c || !n) return;
    if (lines.some(function (l) {
      return l.code === c;
    })) {
      alert("Code \"".concat(c, "\" already exists."));
      return;
    }
    setLines(function (prev) {
      return [].concat(_toConsumableArray(prev), [{
        code: c,
        name: n,
        category: category
      }]);
    });
  }
  function removeLineType(code) {
    if (!window.confirm("Remove \"".concat(code, "\" from your line list? Existing purchases keep their label."))) return;
    setLines(function (prev) {
      return prev.filter(function (l) {
        return l.code !== code;
      });
    });
    setBudgets(function (prev) {
      var n = _objectSpread({}, prev);
      delete n[code];
      return n;
    });
    setEstimatedPpks(function (prev) {
      var n = _objectSpread({}, prev);
      delete n[code];
      return n;
    });
    setDefaultWeights(function (prev) {
      var n = _objectSpread({}, prev);
      delete n[code];
      return n;
    });
    setBidSteps(function (prev) {
      var n = _objectSpread({}, prev);
      delete n[code];
      return n;
    });
  }

  // ----- Email / export -----

  function buildXlsx() {
    var today = new Date().toISOString().split('T')[0];
    var rows = purchases.map(function (p, i) {
      var line = lines.find(function (l) {
        return l.code === p.lineCode;
      });
      return {
        '#': i + 1,
        Time: new Date(p.timestamp).toLocaleTimeString('en-AU', {
          hour: '2-digit',
          minute: '2-digit'
        }),
        Result: p.watched ? 'Watched' : 'Bought',
        Pen: p.penNumber || '',
        Line: line ? line.name : p.lineCode,
        Code: p.lineCode,
        Head: p.head,
        'Est. Weight per Head (kg)': Number(p.wtPerHead.toFixed(1)),
        'Total Pen Weight (kg)': Number(p.totalKg.toFixed(1)),
        '$ per kg': Number(p.pricePerKg.toFixed(2)),
        '$ per Head': Number(p.pricePerHead.toFixed(2)),
        'Pen Total ($)': Number(p.total.toFixed(2))
      };
    });
    var summary = [{
      Metric: 'Sale date',
      Value: today
    }, {
      Metric: 'Pens bought',
      Value: totals.pens
    }, {
      Metric: 'Pens watched (not bought)',
      Value: totals.watched
    }, {
      Metric: 'Total head bought',
      Value: totals.head
    }, {
      Metric: 'Total weight bought (kg)',
      Value: Number(totals.kg.toFixed(1))
    }, {
      Metric: 'Total spent ($, GST free)',
      Value: Number(totals.dollars.toFixed(2))
    }, {
      Metric: 'Average $/kg (weighted)',
      Value: Number(totals.avgPpk.toFixed(2))
    }, {
      Metric: 'Average $/head',
      Value: Number(totals.avgPph.toFixed(2))
    }];
    var wb = XLSX.utils.book_new();
    var ws1 = XLSX.utils.json_to_sheet(rows.length ? rows : [{
      Note: 'No pens recorded'
    }]);
    XLSX.utils.book_append_sheet(wb, ws1, 'Pens');
    var ws2 = XLSX.utils.json_to_sheet(summary);
    XLSX.utils.book_append_sheet(wb, ws2, 'Summary');
    var arr = XLSX.write(wb, {
      type: 'array',
      bookType: 'xlsx'
    });
    var blob = new Blob([arr], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    var filename = "saleyard_".concat(today, ".xlsx");
    return {
      blob: blob,
      filename: filename,
      today: today
    };
  }
  function emailSummary() {
    return _emailSummary.apply(this, arguments);
  } // ----- Render helpers -----
  function _emailSummary() {
    _emailSummary = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var _buildXlsx, blob, filename, today, file, summaryText, url, a, body, subject, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (!(purchases.length === 0)) {
              _context3.n = 1;
              break;
            }
            alert('No pens recorded yet.');
            return _context3.a(2);
          case 1:
            _buildXlsx = buildXlsx(), blob = _buildXlsx.blob, filename = _buildXlsx.filename, today = _buildXlsx.today;
            file = new File([blob], filename, {
              type: blob.type
            });
            summaryText = "Saleyard summary for ".concat(today, "\n\n") + "Pens bought: ".concat(totals.pens) + (totals.watched ? " \xB7 watched: ".concat(totals.watched) : '') + "\n" + "Total head: ".concat(totals.head, "\n") + "Total weight: ".concat(fmt1(totals.kg), " kg\n") + "Total spent: $".concat(fmt2(totals.dollars), " (GST free)\n") + "Average $/kg: $".concat(fmt2(totals.avgPpk), "\n") + "Average $/head: $".concat(fmt2(totals.avgPph));
            if (!(navigator.canShare && navigator.canShare({
              files: [file]
            }))) {
              _context3.n = 5;
              break;
            }
            _context3.p = 2;
            _context3.n = 3;
            return navigator.share({
              files: [file],
              title: "Saleyard ".concat(today),
              text: summaryText
            });
          case 3:
            return _context3.a(2);
          case 4:
            _context3.p = 4;
            _t3 = _context3.v;
          case 5:
            url = URL.createObjectURL(blob);
            a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            if (buyerEmail) {
              body = encodeURIComponent(summaryText + "\n\nSpreadsheet ".concat(filename, " downloaded to your device. Attach it from the Files app."));
              subject = encodeURIComponent("Saleyard ".concat(today));
              setTimeout(function () {
                window.location.href = "mailto:".concat(buyerEmail, "?subject=").concat(subject, "&body=").concat(body);
              }, 200);
            } else {
              showToast('Spreadsheet downloaded. Set your email in Settings to also pre-fill an email.');
            }
          case 6:
            return _context3.a(2);
        }
      }, _callee3, null, [[2, 4]]);
    }));
    return _emailSummary.apply(this, arguments);
  }
  function LinePill(_ref3) {
    var code = _ref3.code,
      watched = _ref3.watched;
    var line = lines.find(function (l) {
      return l.code === code;
    });
    var cat = line ? CAT[line.category] : CAT.mixed;
    return /*#__PURE__*/React.createElement("span", {
      className: "pill",
      style: {
        background: watched ? 'transparent' : cat.solid,
        color: watched ? T.textMute : cat.ink,
        border: watched ? "1.5px solid ".concat(T.borderH) : 'none'
      }
    }, code);
  }
  function LineButton(_ref4) {
    var line = _ref4.line,
      selected = _ref4.selected;
    var cat = CAT[line.category];
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return pickLine(line.code);
      },
      className: "arc",
      style: {
        padding: '14px 8px',
        border: "2px solid ".concat(cat.solid),
        borderRadius: 8,
        background: selected ? cat.solid : cat.soft,
        color: selected ? cat.ink : cat.solid,
        fontWeight: 800,
        fontSize: 15,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        minHeight: 56,
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent'
      },
      title: line.name
    }, /*#__PURE__*/React.createElement("div", null, line.code), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        fontWeight: 600,
        opacity: 0.85,
        marginTop: 2
      }
    }, line.name));
  }

  // The contextual line of text under the $/kg input. Combines:
  //  * today's running average for the line
  //  * budget headroom (or over-budget by how much)
  function priceContext() {
    var code = draft.lineCode;
    var parts = [];
    if (code) {
      if (lineDayAvg != null) {
        var delta = '';
        if (Number.isFinite(dPpk) && dPpk > 0) {
          var d = dPpk - lineDayAvg;
          if (Math.abs(d) >= 0.005) {
            var sign = d > 0 ? '+' : '−';
            delta = " (".concat(sign, "$").concat(fmt2(Math.abs(d)), ")");
          } else {
            delta = ' (on avg)';
          }
        }
        parts.push({
          text: "".concat(code, " avg today $").concat(fmt2(lineDayAvg)).concat(delta),
          color: T.textMute
        });
      } else {
        parts.push({
          text: "no ".concat(code, " bought yet today"),
          color: T.textMute
        });
      }
    }
    if (lineBudget) {
      if (Number.isFinite(dPpk) && dPpk > 0) {
        if (headroom != null && headroom >= 0) {
          parts.push({
            text: "$".concat(fmt2(headroom), " under your $").concat(fmt2(lineBudget), " ceiling"),
            color: T.okTxt
          });
        } else if (headroom != null && headroom < 0) {
          parts.push({
            text: "over by $".concat(fmt2(-headroom), " (ceiling $").concat(fmt2(lineBudget), ")"),
            color: T.warnTxt
          });
        }
      } else {
        parts.push({
          text: "ceiling $".concat(fmt2(lineBudget), "/kg"),
          color: T.textMute
        });
      }
    }
    if (parts.length === 0) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: "arc",
      style: {
        fontSize: 12,
        fontWeight: 600,
        marginTop: 6,
        letterSpacing: '0.02em'
      }
    }, parts.map(function (p, i) {
      return /*#__PURE__*/React.createElement("span", {
        key: i,
        style: {
          color: p.color
        }
      }, i > 0 ? /*#__PURE__*/React.createElement("span", {
        style: {
          color: T.borderH
        }
      }, ' · ') : null, p.text);
    }));
  }

  // ----- JSX -----

  if (!loaded) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: '100vh',
        background: T.bgBody,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "arc",
      style: {
        fontWeight: 800,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: T.textMute
      }
    }, "Loading\u2026"));
  }
  var todayStr = new Date().toLocaleDateString('en-AU', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
  var sameAsLastDisabled = purchases.length === 0 || !!editingId;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.bgBody,
      minHeight: '100vh',
      color: T.text,
      paddingBottom: 110
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      background: T.bgHeader,
      color: T.text,
      borderBottom: "1.5px solid ".concat(T.borderS),
      padding: '14px 16px',
      position: 'sticky',
      top: 0,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontWeight: 900,
      fontSize: 20,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, "Saleyard Buyer"), /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: T.textMute
    }
  }, todayStr, " \xB7 GST free")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn arc",
    onClick: function onClick() {
      return setView(view === 'buying' ? 'dashboard' : 'buying');
    },
    style: {
      background: view === 'dashboard' ? T.accent : 'transparent',
      color: view === 'dashboard' ? '#0D0D0F' : T.text,
      borderColor: view === 'dashboard' ? T.accent : T.borderH,
      padding: '10px 14px',
      fontSize: 13
    }
  }, view === 'buying' ? 'STATS' : 'BIDDING'), /*#__PURE__*/React.createElement("button", {
    className: "btn arc",
    onClick: emailSummary,
    style: {
      background: T.text,
      color: '#0D0D0F',
      borderColor: T.text,
      padding: '10px 14px',
      fontSize: 13
    }
  }, "EMAIL"), /*#__PURE__*/React.createElement("button", {
    className: "btn arc btn-ghost",
    onClick: function onClick() {
      return setShowSettings(true);
    },
    style: {
      padding: '10px 14px',
      fontSize: 13
    }
  }, "SETTINGS"), /*#__PURE__*/React.createElement("button", {
    className: "btn arc btn-ghost",
    onClick: function onClick() {
      return setShowResetConfirm(true);
    },
    style: {
      padding: '10px 14px',
      fontSize: 13
    }
  }, "NEW DAY")))), /*#__PURE__*/React.createElement("main", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr)',
      gap: 16,
      padding: 16,
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("style", null, "\n          @media (min-width: 1024px) {\n            .grid-2 { grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr); }\n          }\n        "), view === 'buying' && /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("section", {
    ref: draftRef,
    className: "card",
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14,
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "arc",
    style: {
      margin: 0,
      fontWeight: 900,
      fontSize: 18,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, editingId ? 'Edit pen' : 'Bid working'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, !editingId && /*#__PURE__*/React.createElement("button", {
    className: "btn arc btn-ghost",
    onClick: sameAsLast,
    disabled: sameAsLastDisabled,
    style: {
      padding: '8px 12px',
      fontSize: 11
    }
  }, "SAME AS LAST"), editingId && /*#__PURE__*/React.createElement("button", {
    className: "btn arc btn-ghost",
    style: {
      padding: '8px 12px',
      fontSize: 12
    },
    onClick: cancelEdit
  }, "CANCEL EDIT"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Line type"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))',
      gap: 8
    }
  }, lines.map(function (l) {
    return /*#__PURE__*/React.createElement(LineButton, {
      key: l.code,
      line: l,
      selected: draft.lineCode === l.code
    });
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1.2fr',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Pen #"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "text",
    className: "field",
    style: {
      fontSize: 18
    },
    value: draft.penNumber,
    onChange: function onChange(e) {
      return updateField('penNumber', e.target.value.slice(0, 8));
    },
    onFocus: function onFocus(e) {
      return e.target.select();
    },
    placeholder: "opt"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Head"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "numeric",
    pattern: "[0-9]*",
    className: "field",
    value: draft.head,
    onChange: function onChange(e) {
      return updateField('head', e.target.value.replace(/[^0-9]/g, ''));
    },
    onFocus: function onFocus(e) {
      return e.target.select();
    },
    placeholder: "0"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Est. kg per head"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "decimal",
    className: "field",
    value: draft.wtPerHead,
    onChange: function onChange(e) {
      return updateField('wtPerHead', e.target.value.replace(/[^0-9.]/g, ''));
    },
    onFocus: function onFocus(e) {
      return e.target.select();
    },
    placeholder: "0.0"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "$ per kg"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "decimal",
    className: "field ".concat(overBudget ? 'over' : ''),
    style: {
      flex: 1
    },
    value: draft.pricePerKg,
    onChange: function onChange(e) {
      return updateField('pricePerKg', e.target.value.replace(/[^0-9.]/g, ''));
    },
    onFocus: function onFocus(e) {
      return e.target.select();
    },
    placeholder: "0.00"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn-step arc",
    type: "button",
    onClick: function onClick() {
      return bumpPrice('kg', -1);
    },
    "aria-label": "decrease price per kg"
  }, "\u2212"), /*#__PURE__*/React.createElement("button", {
    className: "btn-step arc",
    type: "button",
    onClick: function onClick() {
      return bumpPrice('kg', +1);
    },
    "aria-label": "increase price per kg"
  }, "+")), presets.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 6,
      marginTop: 8
    }
  }, presets.map(function (price, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "btn-preset arc ".concat(i === 2 ? 'target' : ''),
      onClick: function onClick() {
        return setPresetPpk(price);
      }
    }, "$", price.toFixed(2));
  })), priceContext()), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "$ per head"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "decimal",
    className: "field",
    style: {
      flex: 1
    },
    value: draft.pricePerHead,
    onChange: function onChange(e) {
      return updateField('pricePerHead', e.target.value.replace(/[^0-9.]/g, ''));
    },
    onFocus: function onFocus(e) {
      return e.target.select();
    },
    placeholder: "0.00"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn-step arc",
    type: "button",
    onClick: function onClick() {
      return bumpPrice('head', -1);
    },
    "aria-label": "decrease price per head"
  }, "\u2212"), /*#__PURE__*/React.createElement("button", {
    className: "btn-step arc",
    type: "button",
    onClick: function onClick() {
      return bumpPrice('head', +1);
    },
    "aria-label": "increase price per head"
  }, "+"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      marginBottom: 14,
      padding: 14,
      background: T.bgInset,
      border: "1.5px dashed ".concat(T.borderH),
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Pen weight"), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 22,
      fontWeight: 700
    }
  }, fmt1(dTotalKg), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: T.textMute
    }
  }, "kg"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Pen total"), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 22,
      fontWeight: 700
    }
  }, "$", fmt2(dTotal)))), overBudget && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      background: T.warnBg,
      border: "1.5px solid ".concat(T.warnBdr),
      borderRadius: 8,
      color: T.warnTxt,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "arc",
    style: {
      fontWeight: 800,
      letterSpacing: '0.04em'
    }
  }, "OVER BUDGET, your ceiling for ", draft.lineCode, " is $", fmt2(lineBudget), "/kg")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary arc",
    style: {
      width: '100%',
      fontSize: 18,
      padding: '18px 16px'
    },
    disabled: !dValid,
    onClick: function onClick() {
      return commitEntry(false);
    }
  }, editingId ? 'SAVE CHANGES' : 'RECORD PURCHASE'), !editingId && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost arc",
    style: {
      width: '100%',
      fontSize: 13,
      padding: '12px 16px',
      marginTop: 8
    },
    disabled: !dValid,
    onClick: function onClick() {
      return commitEntry(true);
    }
  }, "LOG AS WATCHED (not bought)")), /*#__PURE__*/React.createElement("section", {
    className: "card",
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "arc",
    style: {
      margin: 0,
      fontWeight: 900,
      fontSize: 18,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, "Today\u2019s pens \xB7 ", totals.pens, totals.watched > 0 && /*#__PURE__*/React.createElement("span", {
    className: "arc",
    style: {
      fontWeight: 600,
      fontSize: 12,
      color: T.textMute,
      marginLeft: 8
    }
  }, "+ ", totals.watched, " watched"))), purchases.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      textAlign: 'center',
      border: "1.5px dashed ".concat(T.borderH),
      borderRadius: 10,
      background: T.bgInset,
      color: T.textMute
    },
    className: "arc"
  }, "No pens recorded yet.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, purchases.map(function (p) {
    var line = lines.find(function (l) {
      return l.code === p.lineCode;
    });
    var dim = p.watched;
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        border: "1.5px solid ".concat(dim ? T.borderS : T.borderH),
        borderRadius: 10,
        padding: 12,
        background: editingId === p.id ? T.editBg : T.bgInset,
        opacity: dim ? 0.72 : 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(LinePill, {
      code: p.lineCode,
      watched: p.watched
    }), /*#__PURE__*/React.createElement("div", {
      className: "arc",
      style: {
        fontWeight: 700,
        fontSize: 14
      }
    }, line ? line.name : p.lineCode), p.watched && /*#__PURE__*/React.createElement("span", {
      className: "pill",
      style: {
        background: 'transparent',
        color: T.textMute,
        border: "1px solid ".concat(T.borderH)
      }
    }, "WATCHED"), p.penNumber && /*#__PURE__*/React.createElement("span", {
      className: "arc",
      style: {
        fontSize: 11,
        color: T.textMute,
        letterSpacing: '0.06em'
      }
    }, "PEN ", p.penNumber)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn arc btn-ghost",
      style: {
        padding: '6px 10px',
        fontSize: 11
      },
      onClick: function onClick() {
        return startEdit(p.id);
      }
    }, "EDIT"), /*#__PURE__*/React.createElement("button", {
      className: "btn arc",
      style: {
        padding: '6px 10px',
        fontSize: 11,
        background: 'transparent',
        color: T.warnBdr,
        borderColor: T.warnBdr
      },
      onClick: function onClick() {
        return deletePurchase(p.id);
      }
    }, "DEL"))), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
        gap: 6,
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "lbl",
      style: {
        marginBottom: 2
      }
    }, "Head"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700
      }
    }, p.head)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "lbl",
      style: {
        marginBottom: 2
      }
    }, "Kg/hd"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700
      }
    }, fmt1(p.wtPerHead))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "lbl",
      style: {
        marginBottom: 2
      }
    }, "Total kg"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700
      }
    }, fmt1(p.totalKg))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "lbl",
      style: {
        marginBottom: 2
      }
    }, "$/kg"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700
      }
    }, "$", fmt2(p.pricePerKg))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "lbl",
      style: {
        marginBottom: 2
      }
    }, "$/hd"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700
      }
    }, "$", fmt2(p.pricePerHead)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        paddingTop: 8,
        borderTop: "1px dashed ".concat(T.borderS),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "lbl",
      style: {
        marginBottom: 0
      }
    }, p.watched ? 'Final pen total' : 'Pen total'), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontWeight: 800,
        fontSize: 18
      }
    }, "$", fmt2(p.total))));
  })))), view === 'dashboard' && /*#__PURE__*/React.createElement(Dashboard, {
    purchases: purchases,
    lines: lines,
    totals: totals,
    budgets: budgets,
    estimatedPpks: estimatedPpks
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 40,
      background: T.bgHeader,
      color: T.text,
      padding: '12px 16px calc(12px + env(safe-area-inset-bottom)) 16px',
      borderTop: "1.5px solid ".concat(T.borderS),
      boxShadow: '0 -8px 24px rgba(0,0,0,0.45)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Totals, {
    label: "Pens",
    value: fmtInt(totals.pens)
  }), /*#__PURE__*/React.createElement(Totals, {
    label: "Head",
    value: fmtInt(totals.head)
  }), /*#__PURE__*/React.createElement(Totals, {
    label: "Total kg",
    value: fmt1(totals.kg)
  }), /*#__PURE__*/React.createElement(Totals, {
    label: "Total $",
    value: "$".concat(fmt0(totals.dollars)),
    accent: true
  }), /*#__PURE__*/React.createElement(Totals, {
    label: "Avg $/kg",
    value: "$".concat(fmt2(totals.avgPpk)),
    accent: true
  }), /*#__PURE__*/React.createElement(Totals, {
    label: "Avg $/hd",
    value: "$".concat(fmt2(totals.avgPph)),
    accent: true
  }))), toast && /*#__PURE__*/React.createElement("div", {
    className: "toast"
  }, /*#__PURE__*/React.createElement("span", null, toast.message), toast.undo && /*#__PURE__*/React.createElement("button", {
    onClick: toast.undo.run
  }, toast.undo.label)), showSettings && /*#__PURE__*/React.createElement(SettingsModal, {
    lines: lines,
    budgets: budgets,
    estimatedPpks: estimatedPpks,
    defaultWeights: defaultWeights,
    bidSteps: bidSteps,
    buyerEmail: buyerEmail,
    onSetBudget: setBudgetFor,
    onSetEstimatedPpk: setEstimatedPpkFor,
    onSetDefaultWeight: setDefaultWeightFor,
    onSetBidStep: setBidStepFor,
    onSetEmail: setBuyerEmail,
    onAddLine: addLineType,
    onRemoveLine: removeLineType,
    onClose: function onClose() {
      return setShowSettings(false);
    }
  }), showResetConfirm && /*#__PURE__*/React.createElement("div", {
    className: "modal-bg",
    onClick: function onClick() {
      return setShowResetConfirm(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      padding: 20
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "arc",
    style: {
      margin: '0 0 8px 0',
      fontWeight: 900,
      letterSpacing: '0.04em',
      textTransform: 'uppercase'
    }
  }, "Start a new day?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px 0',
      color: T.textLbl
    }
  }, "All ", totals.pens, " bought pen", totals.pens === 1 ? '' : 's', totals.watched ? " and ".concat(totals.watched, " watched") : '', " will be cleared. Settings, line types, default weights and steps are kept. Consider emailing the summary first."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn arc btn-ghost",
    onClick: function onClick() {
      return setShowResetConfirm(false);
    }
  }, "CANCEL"), /*#__PURE__*/React.createElement("button", {
    className: "btn arc btn-warn",
    onClick: resetDay
  }, "CLEAR DAY")))), /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      textAlign: 'center',
      padding: '20px 16px 0 16px',
      color: T.textMute,
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, "Built by Patrick Coole"));
}

// ----- Subcomponents -----

function Totals(_ref5) {
  var label = _ref5.label,
    value = _ref5.value,
    accent = _ref5.accent;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontWeight: 600,
      fontSize: 9,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#9A9AA1'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontWeight: 700,
      fontSize: 16,
      marginTop: 2,
      color: accent ? '#FFD66B' : '#EAEAEC',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, value));
}
function SettingsModal(_ref6) {
  var lines = _ref6.lines,
    budgets = _ref6.budgets,
    estimatedPpks = _ref6.estimatedPpks,
    defaultWeights = _ref6.defaultWeights,
    bidSteps = _ref6.bidSteps,
    buyerEmail = _ref6.buyerEmail,
    onSetBudget = _ref6.onSetBudget,
    onSetEstimatedPpk = _ref6.onSetEstimatedPpk,
    onSetDefaultWeight = _ref6.onSetDefaultWeight,
    onSetBidStep = _ref6.onSetBidStep,
    onSetEmail = _ref6.onSetEmail,
    onAddLine = _ref6.onAddLine,
    onRemoveLine = _ref6.onRemoveLine,
    onClose = _ref6.onClose;
  var _useState27 = useState(''),
    _useState28 = _slicedToArray(_useState27, 2),
    newCode = _useState28[0],
    setNewCode = _useState28[1];
  var _useState29 = useState(''),
    _useState30 = _slicedToArray(_useState29, 2),
    newName = _useState30[0],
    setNewName = _useState30[1];
  var _useState31 = useState('male'),
    _useState32 = _slicedToArray(_useState31, 2),
    newCat = _useState32[0],
    setNewCat = _useState32[1];
  var _useState33 = useState(buyerEmail || ''),
    _useState34 = _slicedToArray(_useState33, 2),
    emailInput = _useState34[0],
    setEmailInput = _useState34[1];
  function handleAdd() {
    if (!newCode.trim() || !newName.trim()) return;
    onAddLine(newCode, newName, newCat);
    setNewCode('');
    setNewName('');
    setNewCat('male');
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-bg",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      padding: 20
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "arc",
    style: {
      margin: 0,
      fontWeight: 900,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, "Settings"), /*#__PURE__*/React.createElement("button", {
    className: "btn arc btn-ghost",
    style: {
      padding: '8px 12px',
      fontSize: 12
    },
    onClick: onClose
  }, "CLOSE")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Your email (for end of day summary)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    inputMode: "email",
    className: "field",
    style: {
      fontSize: 16,
      fontFamily: 'system-ui'
    },
    value: emailInput,
    onChange: function onChange(e) {
      return setEmailInput(e.target.value);
    },
    placeholder: "you@example.com.au"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary arc",
    style: {
      padding: '10px 14px',
      fontSize: 13
    },
    onClick: function onClick() {
      return onSetEmail(emailInput.trim());
    }
  }, "SAVE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Lines \xB7 ceiling \xB7 estimate \xB7 default kg \xB7 step"), /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontSize: 11,
      color: T.textMute,
      marginBottom: 8,
      letterSpacing: '0.04em'
    }
  }, "Estimated $/kg drives the 5 quick-tap preset buttons under the price field (estimate \xB1 5c, \xB1 10c). Default kg pre-fills the weight when you tap a line. Step is how much the +/\u2212 buttons bump by. Default step is $0.05."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, lines.map(function (l) {
    var cat = CAT[l.category];
    return /*#__PURE__*/React.createElement("div", {
      key: l.code,
      style: {
        border: "1.5px solid ".concat(T.borderH),
        borderRadius: 8,
        padding: '10px',
        background: T.bgInset
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "pill",
      style: {
        background: cat.solid,
        color: cat.ink
      }
    }, l.code), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "arc",
      style: {
        fontWeight: 700,
        fontSize: 14,
        color: T.text
      }
    }, l.name), /*#__PURE__*/React.createElement("div", {
      className: "arc",
      style: {
        fontSize: 10,
        color: T.textMute,
        textTransform: 'uppercase',
        letterSpacing: '0.08em'
      }
    }, cat.label))), /*#__PURE__*/React.createElement("button", {
      className: "btn arc",
      style: {
        padding: '6px 8px',
        fontSize: 10,
        background: 'transparent',
        color: T.warnBdr,
        borderColor: T.warnBdr
      },
      onClick: function onClick() {
        return onRemoveLine(l.code);
      }
    }, "\xD7")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(SmallInput, {
      label: "Estimated $/kg",
      prefix: "$",
      value: estimatedPpks[l.code] != null ? String(estimatedPpks[l.code]) : '',
      onChange: function onChange(v) {
        return onSetEstimatedPpk(l.code, v);
      },
      placeholder: "for presets"
    }), /*#__PURE__*/React.createElement(SmallInput, {
      label: "Ceiling $/kg",
      prefix: "$",
      value: budgets[l.code] != null ? String(budgets[l.code]) : '',
      onChange: function onChange(v) {
        return onSetBudget(l.code, v);
      },
      placeholder: "not set"
    }), /*#__PURE__*/React.createElement(SmallInput, {
      label: "Default kg",
      suffix: "kg",
      value: defaultWeights[l.code] != null ? String(defaultWeights[l.code]) : '',
      onChange: function onChange(v) {
        return onSetDefaultWeight(l.code, v);
      },
      placeholder: "not set"
    }), /*#__PURE__*/React.createElement(SmallInput, {
      label: "Step $/kg",
      prefix: "$",
      value: bidSteps[l.code] != null ? String(bidSteps[l.code]) : '',
      onChange: function onChange(v) {
        return onSetBidStep(l.code, v);
      },
      placeholder: "".concat(DEFAULT_KG_STEP.toFixed(2), " default")
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1.5px dashed ".concat(T.borderS),
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Add a new line"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '90px 1fr 130px',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "field",
    style: {
      padding: 10,
      fontSize: 16
    },
    value: newCode,
    onChange: function onChange(e) {
      return setNewCode(e.target.value.toUpperCase().slice(0, 4));
    },
    placeholder: "CODE"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "field",
    style: {
      padding: 10,
      fontSize: 16,
      fontFamily: 'system-ui'
    },
    value: newName,
    onChange: function onChange(e) {
      return setNewName(e.target.value);
    },
    placeholder: "Full name"
  }), /*#__PURE__*/React.createElement("select", {
    className: "field",
    style: {
      padding: 10,
      fontSize: 14,
      fontFamily: 'system-ui'
    },
    value: newCat,
    onChange: function onChange(e) {
      return setNewCat(e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "male"
  }, "Male sheep"), /*#__PURE__*/React.createElement("option", {
    value: "female"
  }, "Female sheep"), /*#__PURE__*/React.createElement("option", {
    value: "goat"
  }, "Goat"), /*#__PURE__*/React.createElement("option", {
    value: "mixed"
  }, "Mixed sex"))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary arc",
    style: {
      padding: '10px 14px',
      fontSize: 13
    },
    onClick: handleAdd
  }, "ADD LINE"))));
}
function SmallInput(_ref7) {
  var label = _ref7.label,
    value = _ref7.value,
    _onChange = _ref7.onChange,
    prefix = _ref7.prefix,
    suffix = _ref7.suffix,
    placeholder = _ref7.placeholder;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: '0.10em',
      textTransform: 'uppercase',
      color: T.textMute,
      marginBottom: 3
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 12,
      color: T.textMute
    }
  }, prefix), /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "decimal",
    className: "field",
    style: {
      flex: 1,
      padding: '8px 8px',
      fontSize: 15,
      minWidth: 0
    },
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value.replace(/[^0-9.]/g, ''));
    },
    placeholder: placeholder
  }), suffix && /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 12,
      color: T.textMute
    }
  }, suffix)));
}

// ----- Dashboard view -----

function niceMax(value) {
  if (!Number.isFinite(value) || value <= 0) return 1;
  var exp = Math.floor(Math.log10(value));
  var mantissa = value / Math.pow(10, exp);
  var nice;
  if (mantissa <= 1) nice = 1;else if (mantissa <= 2) nice = 2;else if (mantissa <= 5) nice = 5;else nice = 10;
  return nice * Math.pow(10, exp);
}
function Dashboard(_ref8) {
  var purchases = _ref8.purchases,
    lines = _ref8.lines,
    totals = _ref8.totals,
    budgets = _ref8.budgets,
    estimatedPpks = _ref8.estimatedPpks;
  var bought = useMemo(function () {
    return purchases.filter(function (p) {
      return !p.watched;
    });
  }, [purchases]);
  var watchedCount = purchases.length - bought.length;

  // Per-line aggregates, sorted by total spend descending
  var byLine = useMemo(function () {
    var map = {};
    var _iterator = _createForOfIteratorHelper(bought),
      _step;
    try {
      var _loop = function _loop() {
        var p = _step.value;
        if (!map[p.lineCode]) {
          var line = lines.find(function (l) {
            return l.code === p.lineCode;
          });
          map[p.lineCode] = {
            code: p.lineCode,
            name: line ? line.name : p.lineCode,
            category: line ? line.category : 'mixed',
            head: 0,
            kg: 0,
            total: 0,
            pens: 0
          };
        }
        map[p.lineCode].head += p.head;
        map[p.lineCode].kg += p.totalKg;
        map[p.lineCode].total += p.total;
        map[p.lineCode].pens += 1;
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return Object.values(map).map(function (l) {
      return _objectSpread(_objectSpread({}, l), {}, {
        avgPpk: l.kg > 0 ? l.total / l.kg : 0
      });
    }).sort(function (a, b) {
      return b.total - a.total;
    });
  }, [bought, lines]);

  // Cumulative spend points, sorted in time
  var cumPoints = useMemo(function () {
    if (bought.length === 0) return [];
    var sorted = _toConsumableArray(bought).sort(function (a, b) {
      return (a.timestamp || '').localeCompare(b.timestamp || '');
    });
    var cum = 0;
    var start = {
      time: new Date(sorted[0].timestamp || Date.now()),
      cum: 0
    };
    return [start].concat(_toConsumableArray(sorted.map(function (p) {
      cum += p.total;
      return {
        time: new Date(p.timestamp || Date.now()),
        cum: cum,
        line: p.lineCode
      };
    })));
  }, [bought]);
  if (bought.length === 0) {
    return /*#__PURE__*/React.createElement("section", {
      className: "card",
      style: {
        padding: 40,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "arc",
      style: {
        fontWeight: 800,
        fontSize: 14,
        letterSpacing: '0.10em',
        textTransform: 'uppercase',
        color: T.textMute
      }
    }, "Dashboard fills in once you start recording pens"), watchedCount > 0 && /*#__PURE__*/React.createElement("div", {
      className: "arc",
      style: {
        marginTop: 8,
        fontSize: 12,
        color: T.textMute
      }
    }, "(", watchedCount, " watched pen", watchedCount === 1 ? '' : 's', " so far)"));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(DashStatTiles, {
    totals: totals,
    watchedCount: watchedCount
  }), /*#__PURE__*/React.createElement(DashByLine, {
    items: byLine,
    ceilings: budgets,
    estimates: estimatedPpks
  }), cumPoints.length >= 2 && /*#__PURE__*/React.createElement(DashCumulative, {
    points: cumPoints
  }));
}
function SectionTitle(_ref9) {
  var children = _ref9.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontWeight: 800,
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: T.textMute,
      marginBottom: 14
    }
  }, children);
}
function DashStatTiles(_ref0) {
  var totals = _ref0.totals,
    watchedCount = _ref0.watchedCount;
  var tiles = [{
    label: 'Pens',
    value: fmtInt(totals.pens)
  }, {
    label: 'Head',
    value: fmtInt(totals.head)
  }, {
    label: 'Total kg',
    value: fmt1(totals.kg)
  }, {
    label: 'Total $',
    value: "$".concat(fmt0(totals.dollars)),
    accent: true
  }, {
    label: 'Avg $/kg',
    value: "$".concat(fmt2(totals.avgPpk)),
    accent: true
  }, {
    label: 'Avg $/hd',
    value: "$".concat(fmt2(totals.avgPph)),
    accent: true
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "card",
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, null, "Today at a glance", watchedCount > 0 ? " \xB7 ".concat(watchedCount, " watched") : ''), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: 10
    }
  }, tiles.map(function (t) {
    return /*#__PURE__*/React.createElement("div", {
      key: t.label,
      style: {
        background: T.bgInset,
        border: "1.5px solid ".concat(T.borderS),
        borderRadius: 10,
        padding: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "arc",
      style: {
        fontWeight: 600,
        fontSize: 10,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: T.textMute
      }
    }, t.label), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontWeight: 800,
        fontSize: 26,
        marginTop: 4,
        color: t.accent ? T.accent : T.text,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, t.value));
  })));
}
function DashByLine(_ref1) {
  var items = _ref1.items,
    ceilings = _ref1.ceilings,
    estimates = _ref1.estimates;
  if (items.length === 0) return null;
  var maxTotal = Math.max.apply(Math, _toConsumableArray(items.map(function (i) {
    return i.total;
  })));
  var maxAvg = Math.max.apply(Math, _toConsumableArray(items.map(function (i) {
    return i.avgPpk;
  })));
  return /*#__PURE__*/React.createElement("section", {
    className: "card",
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, null, "Spend by line"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, items.map(function (item) {
    var cat = CAT[item.category];
    var totalPct = item.total / maxTotal * 100;
    var ceiling = ceilings[item.code];
    var estimate = estimates[item.code];
    var avgPct = maxAvg > 0 ? item.avgPpk / maxAvg * 100 : 0;
    // Ceiling/estimate markers are positioned on the avg-$/kg bar, scaled to maxAvg
    var ceilingPct = ceiling && maxAvg > 0 ? Math.min(100, ceiling / maxAvg * 100) : null;
    var estimatePct = estimate && maxAvg > 0 ? Math.min(100, estimate / maxAvg * 100) : null;
    return /*#__PURE__*/React.createElement("div", {
      key: item.code
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "pill",
      style: {
        background: cat.solid,
        color: cat.ink
      }
    }, item.code), /*#__PURE__*/React.createElement("span", {
      className: "arc",
      style: {
        fontWeight: 700,
        fontSize: 13,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, item.name)), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontWeight: 800,
        fontSize: 15,
        color: T.text
      }
    }, "$", fmt0(item.total))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 12,
        background: T.bgInset,
        border: "1.5px solid ".concat(T.borderS),
        borderRadius: 6,
        overflow: 'hidden',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "".concat(totalPct, "%"),
        height: '100%',
        background: cat.solid
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "arc",
      style: {
        marginTop: 6,
        fontSize: 11,
        color: T.textMute,
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", null, item.pens, " pen", item.pens === 1 ? '' : 's', " \xB7 ", fmtInt(item.head), " head \xB7 ", fmt1(item.kg), " kg"), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        color: T.text,
        fontWeight: 700
      }
    }, "$", fmt2(item.avgPpk), "/kg", ceiling ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: T.textMute,
        fontWeight: 600
      }
    }, " \xB7 ceiling $", fmt2(ceiling)) : null, estimate ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: T.textMute,
        fontWeight: 600
      }
    }, " \xB7 est $", fmt2(estimate)) : null)), maxAvg > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4,
        height: 4,
        background: T.bgInset,
        borderRadius: 2,
        position: 'relative',
        overflow: 'visible'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "".concat(avgPct, "%"),
        height: '100%',
        background: T.text,
        borderRadius: 2
      }
    }), ceilingPct != null && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: -3,
        height: 10,
        width: 2,
        left: "calc(".concat(ceilingPct, "% - 1px)"),
        background: T.warnBdr
      },
      title: "Ceiling $".concat(fmt2(ceiling))
    }), estimatePct != null && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: -3,
        height: 10,
        width: 2,
        left: "calc(".concat(estimatePct, "% - 1px)"),
        background: T.accent
      },
      title: "Estimate $".concat(fmt2(estimate))
    })));
  })), /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      marginTop: 14,
      paddingTop: 10,
      borderTop: "1px dashed ".concat(T.borderS),
      fontSize: 10,
      color: T.textMute,
      letterSpacing: '0.04em',
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 16,
      height: 4,
      background: T.text,
      verticalAlign: 'middle',
      marginRight: 4
    }
  }), " Avg $/kg"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 2,
      height: 10,
      background: T.warnBdr,
      verticalAlign: 'middle',
      marginRight: 4
    }
  }), " Ceiling"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 2,
      height: 10,
      background: T.accent,
      verticalAlign: 'middle',
      marginRight: 4
    }
  }), " Estimate")));
}
function DashCumulative(_ref10) {
  var points = _ref10.points;
  // SVG dimensions; viewBox scales with container width
  var W = 600,
    H = 240;
  var PAD = {
    t: 16,
    r: 14,
    b: 30,
    l: 60
  };
  var innerW = W - PAD.l - PAD.r;
  var innerH = H - PAD.t - PAD.b;
  var startMs = points[0].time.getTime();
  var endMs = points[points.length - 1].time.getTime();
  var range = Math.max(60000, endMs - startMs); // at least 1 minute
  var rawMax = points[points.length - 1].cum;
  var yMax = niceMax(rawMax);
  var xCoord = function xCoord(t) {
    return PAD.l + (t.getTime() - startMs) / range * innerW;
  };
  var yCoord = function yCoord(v) {
    return PAD.t + innerH - v / yMax * innerH;
  };
  var pathD = points.map(function (p, i) {
    return "".concat(i === 0 ? 'M' : 'L', " ").concat(xCoord(p.time).toFixed(2), " ").concat(yCoord(p.cum).toFixed(2));
  }).join(' ');

  // Build a closed area below the line for fill
  var areaD = pathD + " L ".concat(xCoord(points[points.length - 1].time).toFixed(2), " ").concat((PAD.t + innerH).toFixed(2)) + " L ".concat(xCoord(points[0].time).toFixed(2), " ").concat((PAD.t + innerH).toFixed(2), " Z");

  // Y ticks at 0, 25%, 50%, 75%, 100% of yMax
  var yTicks = [0, 0.25, 0.5, 0.75, 1].map(function (f) {
    return f * yMax;
  });

  // X ticks: start, midpoint, end
  var midMs = startMs + (endMs - startMs) / 2;
  var xTicks = [{
    time: new Date(startMs),
    anchor: 'start'
  }, {
    time: new Date(midMs),
    anchor: 'middle'
  }, {
    time: new Date(endMs),
    anchor: 'end'
  }];
  var formatTime = function formatTime(d) {
    return d.toLocaleTimeString('en-AU', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "card",
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, null, "Cumulative spend through the day"), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 ".concat(W, " ").concat(H),
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    },
    preserveAspectRatio: "none"
  }, yTicks.map(function (v, i) {
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: PAD.l,
      x2: W - PAD.r,
      y1: yCoord(v),
      y2: yCoord(v),
      stroke: T.borderS,
      strokeWidth: "1",
      strokeDasharray: i === 0 ? '0' : '2 4'
    });
  }), yTicks.map(function (v, i) {
    return /*#__PURE__*/React.createElement("text", {
      key: i,
      x: PAD.l - 8,
      y: yCoord(v) + 4,
      fontSize: "11",
      fontFamily: "JetBrains Mono",
      fill: T.textMute,
      textAnchor: "end"
    }, "$", fmt0(v));
  }), xTicks.map(function (t, i) {
    return /*#__PURE__*/React.createElement("text", {
      key: i,
      x: xCoord(t.time),
      y: H - 8,
      fontSize: "11",
      fontFamily: "JetBrains Mono",
      fill: T.textMute,
      textAnchor: t.anchor
    }, formatTime(t.time));
  }), /*#__PURE__*/React.createElement("path", {
    d: areaD,
    fill: T.accent,
    fillOpacity: "0.10"
  }), /*#__PURE__*/React.createElement("path", {
    d: pathD,
    stroke: T.accent,
    strokeWidth: "2",
    fill: "none",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }), points.map(function (p, i) {
    return i > 0 && /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: xCoord(p.time),
      cy: yCoord(p.cum),
      r: "3.5",
      fill: T.accent,
      stroke: T.bgCard,
      strokeWidth: "2"
    });
  })));
}

// Mount
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
