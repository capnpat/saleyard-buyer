"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
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
// Night-theme edition.

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

// Category colours, tuned for a dark canvas
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

// Theme tokens
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
  editBg: '#2A2618'
};
var STORAGE_KEY = 'saleyard-state-v1';

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
function emptyDraft() {
  return {
    lineCode: '',
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
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    purchases = _useState8[0],
    setPurchases = _useState8[1];
  var _useState9 = useState(emptyDraft()),
    _useState0 = _slicedToArray(_useState9, 2),
    draft = _useState0[0],
    setDraft = _useState0[1];
  var _useState1 = useState(null),
    _useState10 = _slicedToArray(_useState1, 2),
    editingId = _useState10[0],
    setEditingId = _useState10[1];
  var _useState11 = useState(''),
    _useState12 = _slicedToArray(_useState11, 2),
    buyerEmail = _useState12[0],
    setBuyerEmail = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    showSettings = _useState14[0],
    setShowSettings = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    showResetConfirm = _useState16[0],
    setShowResetConfirm = _useState16[1];
  var _useState17 = useState(null),
    _useState18 = _slicedToArray(_useState17, 2),
    toast = _useState18[0],
    setToast = _useState18[1];
  var draftRef = useRef(null);

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
              if (Array.isArray(data.purchases)) setPurchases(data.purchases);
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

  // Save when state changes (debounced)
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
              purchases: purchases,
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
  }, [lines, budgets, purchases, buyerEmail, loaded]);
  function showToast(msg) {
    setToast(msg);
    setTimeout(function () {
      return setToast(null);
    }, 2200);
  }

  // ----- Bid entry handlers -----

  function pickLine(code) {
    setDraft(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        lineCode: code
      });
    });
  }
  function updateField(field, value) {
    setDraft(function (prev) {
      var next = _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, field, value));
      var wt = parseFloat(next.wtPerHead);
      var wtValid = Number.isFinite(wt) && wt > 0;
      if (field === 'pricePerKg') {
        next.lastEditedPrice = 'pricePerKg';
        if (value === '') {
          next.pricePerHead = '';
        } else if (wtValid) {
          var v = parseFloat(value);
          if (Number.isFinite(v)) next.pricePerHead = (v * wt).toFixed(2);
        }
      } else if (field === 'pricePerHead') {
        next.lastEditedPrice = 'pricePerHead';
        if (value === '') {
          next.pricePerKg = '';
        } else if (wtValid) {
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
  function recordPurchase() {
    var _purchases$find;
    if (!dValid) return;
    var entry = {
      id: editingId || Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      lineCode: draft.lineCode,
      head: dHead,
      wtPerHead: dWt,
      pricePerKg: dPpk,
      pricePerHead: dPph,
      totalKg: dTotalKg,
      total: dTotal,
      timestamp: editingId ? ((_purchases$find = purchases.find(function (p) {
        return p.id === editingId;
      })) === null || _purchases$find === void 0 ? void 0 : _purchases$find.timestamp) || new Date().toISOString() : new Date().toISOString()
    };
    if (editingId) {
      setPurchases(function (prev) {
        return prev.map(function (p) {
          return p.id === editingId ? entry : p;
        });
      });
      setEditingId(null);
      showToast('Pen updated');
    } else {
      setPurchases(function (prev) {
        return [entry].concat(_toConsumableArray(prev));
      });
      showToast('Pen recorded');
    }
    setDraft(emptyDraft());
  }
  function startEdit(id) {
    var p = purchases.find(function (x) {
      return x.id === id;
    });
    if (!p) return;
    setDraft({
      lineCode: p.lineCode,
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
    if (!window.confirm('Delete this pen from the day\'s record?')) return;
    setPurchases(function (prev) {
      return prev.filter(function (p) {
        return p.id !== id;
      });
    });
    if (editingId === id) cancelEdit();
  }
  function resetDay() {
    setPurchases([]);
    setEditingId(null);
    setDraft(emptyDraft());
    setShowResetConfirm(false);
    showToast('New day started');
  }

  // Totals (weighted averages)
  var totals = useMemo(function () {
    var head = purchases.reduce(function (s, p) {
      return s + p.head;
    }, 0);
    var kg = purchases.reduce(function (s, p) {
      return s + p.totalKg;
    }, 0);
    var dollars = purchases.reduce(function (s, p) {
      return s + p.total;
    }, 0);
    return {
      pens: purchases.length,
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
      if (val === '' || val == null) {
        delete next[code];
      } else {
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
  }

  // ----- Email / export -----

  function buildXlsx() {
    var today = new Date().toISOString().split('T')[0];
    var rows = purchases.map(function (p, i) {
      var line = lines.find(function (l) {
        return l.code === p.lineCode;
      });
      return {
        Pen: i + 1,
        Time: new Date(p.timestamp).toLocaleTimeString('en-AU', {
          hour: '2-digit',
          minute: '2-digit'
        }),
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
      Metric: 'Pens purchased',
      Value: totals.pens
    }, {
      Metric: 'Total head',
      Value: totals.head
    }, {
      Metric: 'Total weight (kg)',
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
      Note: 'No purchases recorded'
    }]);
    XLSX.utils.book_append_sheet(wb, ws1, 'Purchases');
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
            alert('No purchases recorded yet.');
            return _context3.a(2);
          case 1:
            _buildXlsx = buildXlsx(), blob = _buildXlsx.blob, filename = _buildXlsx.filename, today = _buildXlsx.today;
            file = new File([blob], filename, {
              type: blob.type
            });
            summaryText = "Saleyard purchases summary for ".concat(today, "\n\n") + "Pens: ".concat(totals.pens, "\n") + "Total head: ".concat(totals.head, "\n") + "Total weight: ".concat(fmt1(totals.kg), " kg\n") + "Total spent: $".concat(fmt2(totals.dollars), " (GST free)\n") + "Average $/kg: $".concat(fmt2(totals.avgPpk), "\n") + "Average $/head: $".concat(fmt2(totals.avgPph));
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
              title: "Saleyard purchases ".concat(today),
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
              subject = encodeURIComponent("Saleyard purchases ".concat(today));
              setTimeout(function () {
                window.location.href = "mailto:".concat(buyerEmail, "?subject=").concat(subject, "&body=").concat(body);
              }, 200);
            } else {
              showToast('Spreadsheet downloaded. Add your email in Settings to also pre-fill an email.');
            }
          case 6:
            return _context3.a(2);
        }
      }, _callee3, null, [[2, 4]]);
    }));
    return _emailSummary.apply(this, arguments);
  }
  function LinePill(_ref3) {
    var code = _ref3.code;
    var line = lines.find(function (l) {
      return l.code === code;
    });
    var cat = line ? CAT[line.category] : CAT.mixed;
    return /*#__PURE__*/React.createElement("span", {
      className: "pill",
      style: {
        background: cat.solid,
        color: cat.ink
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
  }, /*#__PURE__*/React.createElement("style", null, "\n          @media (min-width: 1024px) {\n            .grid-2 { grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr); }\n          }\n        "), /*#__PURE__*/React.createElement("div", {
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
  }, editingId ? 'Edit pen' : 'Bid working'), editingId && /*#__PURE__*/React.createElement("button", {
    className: "btn arc btn-ghost",
    style: {
      padding: '8px 12px',
      fontSize: 12
    },
    onClick: cancelEdit
  }, "CANCEL EDIT")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
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
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Head in pen"), /*#__PURE__*/React.createElement("input", {
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
  }, "Est. weight per head (kg)"), /*#__PURE__*/React.createElement("input", {
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
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "$ per kg ", lineBudget ? "\xB7 max $".concat(fmt2(lineBudget)) : ''), /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "decimal",
    className: "field ".concat(overBudget ? 'over' : ''),
    value: draft.pricePerKg,
    onChange: function onChange(e) {
      return updateField('pricePerKg', e.target.value.replace(/[^0-9.]/g, ''));
    },
    onFocus: function onFocus(e) {
      return e.target.select();
    },
    placeholder: "0.00"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "$ per head"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "decimal",
    className: "field",
    value: draft.pricePerHead,
    onChange: function onChange(e) {
      return updateField('pricePerHead', e.target.value.replace(/[^0-9.]/g, ''));
    },
    onFocus: function onFocus(e) {
      return e.target.select();
    },
    placeholder: "0.00"
  }))), /*#__PURE__*/React.createElement("div", {
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
    onClick: recordPurchase
  }, editingId ? 'SAVE CHANGES' : 'RECORD PURCHASE')), /*#__PURE__*/React.createElement("section", {
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
  }, "Today\u2019s pens \xB7 ", totals.pens)), purchases.length === 0 ? /*#__PURE__*/React.createElement("div", {
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
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        border: "1.5px solid ".concat(T.borderH),
        borderRadius: 10,
        padding: 12,
        background: editingId === p.id ? T.editBg : T.bgInset
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
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(LinePill, {
      code: p.lineCode
    }), /*#__PURE__*/React.createElement("div", {
      className: "arc",
      style: {
        fontWeight: 700,
        fontSize: 14
      }
    }, line ? line.name : p.lineCode)), /*#__PURE__*/React.createElement("div", {
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
    }, "Pen total"), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontWeight: 800,
        fontSize: 18
      }
    }, "$", fmt2(p.total))));
  }))))), /*#__PURE__*/React.createElement("div", {
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
  }, toast), showSettings && /*#__PURE__*/React.createElement(SettingsModal, {
    lines: lines,
    budgets: budgets,
    buyerEmail: buyerEmail,
    onSetBudget: setBudgetFor,
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
  }, "All ", totals.pens, " recorded pen", totals.pens === 1 ? '' : 's', " will be cleared. Budgets, line types and your email will be kept. Consider emailing the summary first."), /*#__PURE__*/React.createElement("div", {
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
    buyerEmail = _ref6.buyerEmail,
    onSetBudget = _ref6.onSetBudget,
    onSetEmail = _ref6.onSetEmail,
    onAddLine = _ref6.onAddLine,
    onRemoveLine = _ref6.onRemoveLine,
    onClose = _ref6.onClose;
  var _useState19 = useState(''),
    _useState20 = _slicedToArray(_useState19, 2),
    newCode = _useState20[0],
    setNewCode = _useState20[1];
  var _useState21 = useState(''),
    _useState22 = _slicedToArray(_useState21, 2),
    newName = _useState22[0],
    setNewName = _useState22[1];
  var _useState23 = useState('male'),
    _useState24 = _slicedToArray(_useState23, 2),
    newCat = _useState24[0],
    setNewCat = _useState24[1];
  var _useState25 = useState(buyerEmail || ''),
    _useState26 = _slicedToArray(_useState25, 2),
    emailInput = _useState26[0],
    setEmailInput = _useState26[1];
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
  }, "Lines and budget ceilings ($/kg)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, lines.map(function (l) {
    var cat = CAT[l.category];
    return /*#__PURE__*/React.createElement("div", {
      key: l.code,
      className: "row-line",
      style: {
        border: "1.5px solid ".concat(T.borderH),
        borderRadius: 8,
        padding: '8px 10px',
        background: T.bgInset
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
        fontSize: 11,
        color: T.textMute,
        textTransform: 'uppercase',
        letterSpacing: '0.08em'
      }
    }, cat.label)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 13,
        color: T.textMute
      }
    }, "$"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      inputMode: "decimal",
      className: "field",
      style: {
        width: 90,
        padding: '8px 10px',
        fontSize: 16
      },
      value: budgets[l.code] != null ? String(budgets[l.code]) : '',
      onChange: function onChange(e) {
        return onSetBudget(l.code, e.target.value.replace(/[^0-9.]/g, ''));
      },
      placeholder: "not set"
    }), /*#__PURE__*/React.createElement("button", {
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
    }, "\xD7")));
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

// Mount
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
