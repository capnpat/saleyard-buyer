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
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useMemo = _React.useMemo,
  useRef = _React.useRef;

// ----- Defaults & constants -----

var DEFAULT_LINES = [
// Merino (M)
{
  code: 'MR',
  name: 'Merino Rams',
  category: 'male'
}, {
  code: 'ME',
  name: 'Merino Ewes',
  category: 'female'
}, {
  code: 'MW',
  name: 'Merino Wethers',
  category: 'wether'
},
// Merino Cross (X)
{
  code: 'XR',
  name: 'Merino X Rams',
  category: 'male'
}, {
  code: 'XE',
  name: 'Merino X Ewes',
  category: 'female'
}, {
  code: 'XW',
  name: 'Merino X Wethers',
  category: 'wether'
},
// Dorper (D)
{
  code: 'DR',
  name: 'Dorper Rams',
  category: 'male'
}, {
  code: 'DE',
  name: 'Dorper Ewes',
  category: 'female'
}, {
  code: 'DW',
  name: 'Dorper Wethers',
  category: 'wether'
},
// Damara (DM)
{
  code: 'DMR',
  name: 'Damara Rams',
  category: 'male'
}, {
  code: 'DME',
  name: 'Damara Ewes',
  category: 'female'
}, {
  code: 'DMW',
  name: 'Damara Wethers',
  category: 'wether'
},
// Goat (G) — bucks, does, wethers
{
  code: 'GB',
  name: 'Goat Bucks',
  category: 'male'
}, {
  code: 'GD',
  name: 'Goat Does',
  category: 'female'
}, {
  code: 'GW',
  name: 'Goat Wethers',
  category: 'wether'
}];
var CAT = {
  male: {
    solid: '#5B82CC',
    soft: '#1B2540',
    ink: '#FFFFFF',
    label: 'Male (ram/buck)'
  },
  female: {
    solid: '#E04A8F',
    soft: '#3A1626',
    ink: '#FFFFFF',
    label: 'Female (ewe/doe)'
  },
  wether: {
    solid: '#7DAA6F',
    soft: '#1F2818',
    ink: '#FFFFFF',
    label: 'Wether'
  },
  goat: {
    solid: '#C97849',
    soft: '#2D1A0E',
    ink: '#FFFFFF',
    label: 'Goat (any sex)'
  },
  mixed: {
    solid: '#9CA0AB',
    soft: '#25272C',
    ink: '#0D0D0F',
    label: 'Mixed sex'
  }
};

// WA tag colour scheme: tag colour = year of birth
var TAGS = [{
  code: 'black',
  year: 2024,
  label: 'Black',
  fill: '#0F0F0F',
  softFill: '#1F1F1F',
  inkSel: '#FFFFFF',
  inkUnsel: '#9A9A9A',
  edge: '#5A5A5A',
  edgeSel: '#B8B8B8'
}, {
  code: 'white',
  year: 2025,
  label: 'White',
  fill: '#EEEEEE',
  softFill: '#1F1F1F',
  inkSel: '#0D0D0D',
  inkUnsel: '#EEEEEE',
  edge: '#888888',
  edgeSel: '#FFFFFF'
}, {
  code: 'orange',
  year: 2026,
  label: 'Orange',
  fill: '#FF7A1A',
  softFill: '#3A2010',
  inkSel: '#FFFFFF',
  inkUnsel: '#FF8A33',
  edge: '#FF7A1A',
  edgeSel: '#FFB070'
}];
var TAG_BY_CODE = TAGS.reduce(function (m, t) {
  m[t.code] = t;
  return m;
}, {});
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
    lastEditedPrice: null,
    tagColour: ''
  };
}
function emptyInspection() {
  return {
    penNumber: '',
    lineCode: '',
    head: '',
    wtPerHead: '',
    maxPph: '',
    notes: '',
    tagColour: ''
  };
}

// ----- Photo storage (IndexedDB) -----
// localStorage caps out around 5 MB on iPad Safari, not enough for ~100 photos.
// Photos go in IndexedDB as Blobs, keyed by inspection id.

var PHOTO_DB_NAME = 'saleyard-photos';
var PHOTO_STORE = 'photos';
function openPhotoDb() {
  return new Promise(function (resolve, reject) {
    var req = indexedDB.open(PHOTO_DB_NAME, 1);
    req.onupgradeneeded = function (e) {
      var db = e.target.result;
      if (!db.objectStoreNames.contains(PHOTO_STORE)) {
        db.createObjectStore(PHOTO_STORE);
      }
    };
    req.onsuccess = function () {
      return resolve(req.result);
    };
    req.onerror = function () {
      return reject(req.error);
    };
  });
}
function photoSet(_x, _x2) {
  return _photoSet.apply(this, arguments);
}
function _photoSet() {
  _photoSet = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(key, blob) {
    var db;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.n) {
        case 0:
          _context9.n = 1;
          return openPhotoDb();
        case 1:
          db = _context9.v;
          return _context9.a(2, new Promise(function (resolve, reject) {
            var tx = db.transaction(PHOTO_STORE, 'readwrite');
            tx.objectStore(PHOTO_STORE).put(blob, key);
            tx.oncomplete = function () {
              return resolve();
            };
            tx.onerror = function () {
              return reject(tx.error);
            };
          }));
      }
    }, _callee9);
  }));
  return _photoSet.apply(this, arguments);
}
function photoGet(_x3) {
  return _photoGet.apply(this, arguments);
}
function _photoGet() {
  _photoGet = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(key) {
    var db;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.n) {
        case 0:
          _context0.n = 1;
          return openPhotoDb();
        case 1:
          db = _context0.v;
          return _context0.a(2, new Promise(function (resolve, reject) {
            var tx = db.transaction(PHOTO_STORE, 'readonly');
            var req = tx.objectStore(PHOTO_STORE).get(key);
            req.onsuccess = function () {
              return resolve(req.result || null);
            };
            req.onerror = function () {
              return reject(req.error);
            };
          }));
      }
    }, _callee0);
  }));
  return _photoGet.apply(this, arguments);
}
function photoDelete(_x4) {
  return _photoDelete.apply(this, arguments);
}
function _photoDelete() {
  _photoDelete = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(key) {
    var db;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.n) {
        case 0:
          _context1.n = 1;
          return openPhotoDb();
        case 1:
          db = _context1.v;
          return _context1.a(2, new Promise(function (resolve, reject) {
            var tx = db.transaction(PHOTO_STORE, 'readwrite');
            tx.objectStore(PHOTO_STORE)["delete"](key);
            tx.oncomplete = function () {
              return resolve();
            };
            tx.onerror = function () {
              return reject(tx.error);
            };
          }));
      }
    }, _callee1);
  }));
  return _photoDelete.apply(this, arguments);
}
function photoClearAll() {
  return _photoClearAll.apply(this, arguments);
}
function _photoClearAll() {
  _photoClearAll = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
    var db;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.n) {
        case 0:
          _context10.n = 1;
          return openPhotoDb();
        case 1:
          db = _context10.v;
          return _context10.a(2, new Promise(function (resolve, reject) {
            var tx = db.transaction(PHOTO_STORE, 'readwrite');
            tx.objectStore(PHOTO_STORE).clear();
            tx.oncomplete = function () {
              return resolve();
            };
            tx.onerror = function () {
              return reject(tx.error);
            };
          }));
      }
    }, _callee10);
  }));
  return _photoClearAll.apply(this, arguments);
}
function blobToDataUrl(blob) {
  return new Promise(function (resolve, reject) {
    var r = new FileReader();
    r.onload = function () {
      return resolve(r.result);
    };
    r.onerror = function () {
      return reject(r.error);
    };
    r.readAsDataURL(blob);
  });
}

// Compress an image File from a camera capture down to a sensible size for storage.
// Returns a JPEG Blob.
function compressImage(_x5) {
  return _compressImage.apply(this, arguments);
} // ----- Main component -----
function _compressImage() {
  _compressImage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(file) {
    var maxDim,
      quality,
      dataUrl,
      img,
      scale,
      w,
      h,
      canvas,
      ctx,
      _args11 = arguments;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.n) {
        case 0:
          maxDim = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : 1200;
          quality = _args11.length > 2 && _args11[2] !== undefined ? _args11[2] : 0.7;
          _context11.n = 1;
          return new Promise(function (res, rej) {
            var r = new FileReader();
            r.onload = function () {
              return res(r.result);
            };
            r.onerror = function () {
              return rej(r.error);
            };
            r.readAsDataURL(file);
          });
        case 1:
          dataUrl = _context11.v;
          _context11.n = 2;
          return new Promise(function (res, rej) {
            var i = new Image();
            i.onload = function () {
              return res(i);
            };
            i.onerror = function () {
              return rej(new Error('Image load failed'));
            };
            i.src = dataUrl;
          });
        case 2:
          img = _context11.v;
          scale = Math.min(maxDim / img.width, maxDim / img.height, 1);
          w = Math.round(img.width * scale);
          h = Math.round(img.height * scale);
          canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          return _context11.a(2, new Promise(function (resolve, reject) {
            canvas.toBlob(function (blob) {
              return blob ? resolve(blob) : reject(new Error('toBlob failed'));
            }, 'image/jpeg', quality);
          }));
      }
    }, _callee11);
  }));
  return _compressImage.apply(this, arguments);
}
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
    setView = _useState26[1]; // 'buying', 'inspection', 'dashboard'
  var _useState27 = useState([]),
    _useState28 = _slicedToArray(_useState27, 2),
    inspections = _useState28[0],
    setInspections = _useState28[1];
  var _useState29 = useState(null),
    _useState30 = _slicedToArray(_useState29, 2),
    appliedInspectionId = _useState30[0],
    setAppliedInspectionId = _useState30[1];
  var _useState31 = useState(null),
    _useState32 = _slicedToArray(_useState31, 2),
    editingInspection = _useState32[0],
    setEditingInspection = _useState32[1]; // null, 'new', or {id}
  // Draft photo state for the bid card (independent of any inspection photo).
  // status: 'none' (no photo), 'existing' (loaded from IDB during edit),
  //         'new' (newly captured, not yet persisted),
  //         'removed' (existing photo marked for deletion on save).
  var _useState33 = useState(null),
    _useState34 = _slicedToArray(_useState33, 2),
    draftPhotoBlob = _useState34[0],
    setDraftPhotoBlob = _useState34[1];
  var _useState35 = useState(null),
    _useState36 = _slicedToArray(_useState35, 2),
    draftPhotoUrl = _useState36[0],
    setDraftPhotoUrl = _useState36[1];
  var _useState37 = useState('none'),
    _useState38 = _slicedToArray(_useState37, 2),
    draftPhotoStatus = _useState38[0],
    setDraftPhotoStatus = _useState38[1];
  var draftPhotoFileRef = useRef(null);
  // Inline-rendered report (replaces window.open which iOS PWA blocks)
  var _useState39 = useState(null),
    _useState40 = _slicedToArray(_useState39, 2),
    reportHtml = _useState40[0],
    setReportHtml = _useState40[1];
  var reportIframeRef = useRef(null); // {message, undo?}

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
              if (Array.isArray(data.inspections)) setInspections(data.inspections);
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
              inspections: inspections,
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
  }, [lines, budgets, estimatedPpks, defaultWeights, bidSteps, purchases, inspections, draft, buyerEmail, loaded]);

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
        wtPerHead: String(last.wtPerHead),
        tagColour: last.tagColour || ''
      });
    });
    clearDraftPhoto();
  }

  // Draft photo handlers (for attaching a photo to the pen being bid on)

  function clearDraftPhoto() {
    if (draftPhotoUrl) {
      try {
        URL.revokeObjectURL(draftPhotoUrl);
      } catch (e) {}
    }
    setDraftPhotoBlob(null);
    setDraftPhotoUrl(null);
    setDraftPhotoStatus('none');
  }
  function handleDraftPhotoFile(_x6) {
    return _handleDraftPhotoFile.apply(this, arguments);
  }
  function _handleDraftPhotoFile() {
    _handleDraftPhotoFile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(e) {
      var file, blob, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            file = e.target.files && e.target.files[0];
            if (file) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            _context3.p = 1;
            _context3.n = 2;
            return compressImage(file, 1200, 0.7);
          case 2:
            blob = _context3.v;
            if (draftPhotoUrl) {
              try {
                URL.revokeObjectURL(draftPhotoUrl);
              } catch (err) {}
            }
            setDraftPhotoBlob(blob);
            setDraftPhotoUrl(URL.createObjectURL(blob));
            setDraftPhotoStatus('new');
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            alert('Could not process photo: ' + (_t3 && _t3.message ? _t3.message : 'unknown error'));
          case 4:
            _context3.p = 4;
            if (draftPhotoFileRef.current) draftPhotoFileRef.current.value = '';
            return _context3.f(4);
          case 5:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 3, 4, 5]]);
    }));
    return _handleDraftPhotoFile.apply(this, arguments);
  }
  function removeDraftPhoto() {
    if (draftPhotoUrl) {
      try {
        URL.revokeObjectURL(draftPhotoUrl);
      } catch (e) {}
    }
    setDraftPhotoBlob(null);
    setDraftPhotoUrl(null);
    // If the photo was loaded from IDB on an edit, mark it for deletion on save.
    // Otherwise just drop it.
    setDraftPhotoStatus(function (prev) {
      return prev === 'existing' ? 'removed' : 'none';
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
  // When an inspection is applied, the pen-specific max $/head replaces the line's $/kg ceiling
  var insMaxPph = appliedInspection ? appliedInspection.maxPph : null;
  var overBudget = insMaxPph != null ? Number.isFinite(dPph) && dPph > insMaxPph : !!lineBudget && Number.isFinite(dPpk) && dPpk > lineBudget;
  var headroom = insMaxPph != null ? Number.isFinite(dPph) && dPph > 0 ? insMaxPph - dPph : null : lineBudget && Number.isFinite(dPpk) && dPpk > 0 ? lineBudget - dPpk : null;

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
  function commitEntry(_x7) {
    return _commitEntry.apply(this, arguments);
  }
  function _commitEntry() {
    _commitEntry = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(asWatched) {
      var _purchases$find;
      var id, hasPhoto, entry, previous, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            if (dValid) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2);
          case 1:
            id = editingId || Date.now().toString(36) + Math.random().toString(36).slice(2, 6); // Resolve the photo for this entry
            hasPhoto = false;
            if (!(draftPhotoStatus === 'new' && draftPhotoBlob)) {
              _context4.n = 6;
              break;
            }
            _context4.p = 2;
            _context4.n = 3;
            return photoSet(id, draftPhotoBlob);
          case 3:
            hasPhoto = true;
            _context4.n = 5;
            break;
          case 4:
            _context4.p = 4;
            _t4 = _context4.v;
            alert('Could not save photo: ' + (_t4 && _t4.message ? _t4.message : 'unknown error'));
            return _context4.a(2);
          case 5:
            _context4.n = 7;
            break;
          case 6:
            if (draftPhotoStatus === 'existing') {
              hasPhoto = true; // already in IDB from edit load
            } else if (draftPhotoStatus === 'removed') {
              photoDelete(id)["catch"](function () {});
              hasPhoto = false;
            }
          case 7:
            entry = {
              id: id,
              lineCode: draft.lineCode,
              penNumber: draft.penNumber.trim(),
              head: dHead,
              wtPerHead: dWt,
              pricePerKg: dPpk,
              pricePerHead: dPph,
              totalKg: dTotalKg,
              total: dTotal,
              watched: !!asWatched,
              hasPhoto: hasPhoto,
              tagColour: draft.tagColour || '',
              timestamp: editingId ? ((_purchases$find = purchases.find(function (p) {
                return p.id === editingId;
              })) === null || _purchases$find === void 0 ? void 0 : _purchases$find.timestamp) || new Date().toISOString() : new Date().toISOString()
            };
            if (editingId) {
              previous = purchases.find(function (p) {
                return p.id === editingId;
              });
              setPurchases(function (prev) {
                return prev.map(function (p) {
                  return p.id === editingId ? entry : p;
                });
              });
              setEditingId(null);
              setDraft(emptyDraft());
              clearDraftPhoto();
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
              clearDraftPhoto();
              showToast(asWatched ? 'Watched pen logged' : 'Pen recorded', {
                label: 'UNDO',
                run: function run() {
                  setPurchases(function (prev) {
                    return prev.filter(function (p) {
                      return p.id !== entry.id;
                    });
                  });
                  if (entry.hasPhoto) photoDelete(entry.id)["catch"](function () {});
                  clearToast();
                }
              });
            }
          case 8:
            return _context4.a(2);
        }
      }, _callee4, null, [[2, 4]]);
    }));
    return _commitEntry.apply(this, arguments);
  }
  function startEdit(_x8) {
    return _startEdit.apply(this, arguments);
  }
  function _startEdit() {
    _startEdit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(id) {
      var p, blob, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            p = purchases.find(function (x) {
              return x.id === id;
            });
            if (p) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2);
          case 1:
            setDraft({
              lineCode: p.lineCode,
              penNumber: p.penNumber || '',
              head: String(p.head),
              wtPerHead: String(p.wtPerHead),
              pricePerKg: p.pricePerKg.toFixed(2),
              pricePerHead: p.pricePerHead.toFixed(2),
              lastEditedPrice: 'pricePerKg',
              tagColour: p.tagColour || ''
            });
            setEditingId(id);
            // Load existing photo from IDB if there is one
            clearDraftPhoto();
            if (!p.hasPhoto) {
              _context5.n = 5;
              break;
            }
            _context5.p = 2;
            _context5.n = 3;
            return photoGet(id);
          case 3:
            blob = _context5.v;
            if (blob) {
              setDraftPhotoUrl(URL.createObjectURL(blob));
              setDraftPhotoStatus('existing');
            }
            _context5.n = 5;
            break;
          case 4:
            _context5.p = 4;
            _t5 = _context5.v;
          case 5:
            if (draftRef.current) {
              draftRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          case 6:
            return _context5.a(2);
        }
      }, _callee5, null, [[2, 4]]);
    }));
    return _startEdit.apply(this, arguments);
  }
  function cancelEdit() {
    setEditingId(null);
    setDraft(emptyDraft());
    clearDraftPhoto();
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
    // Delete the photo from IDB
    if (removed.hasPhoto) photoDelete(id)["catch"](function () {});
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
        // Note: photo can't be restored once deleted from IDB; this is a known limitation
        clearToast();
      }
    });
  }
  function resetDay() {
    setPurchases([]);
    setInspections([]);
    setAppliedInspectionId(null);
    setEditingId(null);
    setEditingInspection(null);
    setDraft(emptyDraft());
    clearDraftPhoto();
    setShowResetConfirm(false);
    setView('buying');
    photoClearAll()["catch"](function () {});
    showToast('New day started');
  }

  // ----- Inspection handlers -----

  function findInspectionByPenNumber(pn) {
    if (!pn) return null;
    var trimmed = String(pn).trim();
    if (!trimmed) return null;
    return inspections.find(function (i) {
      return i.penNumber.trim() === trimmed;
    }) || null;
  }
  function saveInspection(formData, photoBlob) {
    // formData: {id?, penNumber, lineCode, head, wtPerHead, maxPph, notes, hasPhoto}
    var isEdit = !!formData.id;
    var id = formData.id || Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    var existingEntry = isEdit ? inspections.find(function (i) {
      return i.id === id;
    }) : null;
    // hasPhoto: true if a new photo was supplied OR the form indicates a kept existing one
    var hasPhoto = !!photoBlob || !!formData.hasPhoto;
    var entry = {
      id: id,
      penNumber: (formData.penNumber || '').trim(),
      lineCode: formData.lineCode || '',
      head: formData.head ? parseInt(formData.head, 10) : null,
      wtPerHead: formData.wtPerHead ? parseFloat(formData.wtPerHead) : null,
      maxPph: formData.maxPph ? parseFloat(formData.maxPph) : null,
      notes: (formData.notes || '').trim(),
      tagColour: formData.tagColour || '',
      hasPhoto: hasPhoto,
      timestamp: existingEntry ? existingEntry.timestamp : new Date().toISOString()
    };
    if (photoBlob) {
      photoSet(id, photoBlob)["catch"](function (err) {
        console.error('Photo save failed', err);
        alert('Could not save photo: ' + (err && err.message ? err.message : 'unknown error'));
      });
    } else if (isEdit && existingEntry && existingEntry.hasPhoto && !hasPhoto) {
      // User removed the existing photo
      photoDelete(id)["catch"](function () {});
    }
    setInspections(function (prev) {
      if (isEdit) return prev.map(function (i) {
        return i.id === id ? entry : i;
      });
      return [entry].concat(_toConsumableArray(prev));
    });
    setEditingInspection(null);
    showToast(isEdit ? 'Inspection updated' : 'Inspection saved');
  }
  function deleteInspection(id) {
    if (!window.confirm('Delete this inspection?')) return;
    setInspections(function (prev) {
      return prev.filter(function (i) {
        return i.id !== id;
      });
    });
    if (appliedInspectionId === id) setAppliedInspectionId(null);
    photoDelete(id)["catch"](function () {});
    showToast('Inspection deleted');
  }
  function removeInspectionPhoto(id) {
    photoDelete(id)["catch"](function () {});
    setInspections(function (prev) {
      return prev.map(function (i) {
        return i.id === id ? _objectSpread(_objectSpread({}, i), {}, {
          hasPhoto: false
        }) : i;
      });
    });
  }

  // Apply an inspection's data to the current bid draft and lock the override
  function applyInspectionToDraft(inspection) {
    setDraft(function (prev) {
      var next = _objectSpread(_objectSpread({}, prev), {}, {
        penNumber: inspection.penNumber,
        lineCode: inspection.lineCode || prev.lineCode,
        head: inspection.head != null ? String(inspection.head) : prev.head,
        wtPerHead: inspection.wtPerHead != null ? String(inspection.wtPerHead) : prev.wtPerHead,
        tagColour: inspection.tagColour || prev.tagColour || ''
      });
      // Populate prices from the inspection's max so the user has a starting price
      // they can step up or down from with the +/- buttons during the actual auction.
      if (inspection.maxPph != null) {
        next.pricePerHead = inspection.maxPph.toFixed(2);
        next.lastEditedPrice = 'pricePerHead';
        var wt = parseFloat(next.wtPerHead);
        if (Number.isFinite(wt) && wt > 0) {
          next.pricePerKg = (inspection.maxPph / wt).toFixed(2);
        }
      }
      return next;
    });
    setAppliedInspectionId(inspection.id);
  }

  // The inspection currently overriding the ceiling, if any
  var appliedInspection = useMemo(function () {
    if (!appliedInspectionId) return null;
    return inspections.find(function (i) {
      return i.id === appliedInspectionId;
    }) || null;
  }, [appliedInspectionId, inspections]);

  // Inspection match for the current pen number (not yet applied)
  var penMatch = useMemo(function () {
    if (!draft.penNumber || !draft.penNumber.trim()) return null;
    var m = findInspectionByPenNumber(draft.penNumber);
    if (!m) return null;
    if (appliedInspectionId === m.id) return null; // already applied, no banner
    return m;
  }, [draft.penNumber, inspections, appliedInspectionId]);

  // Clear applied inspection if pen number no longer matches it
  useEffect(function () {
    if (!appliedInspection) return;
    if (draft.penNumber.trim() !== appliedInspection.penNumber.trim()) {
      setAppliedInspectionId(null);
    }
  }, [draft.penNumber, appliedInspection]);

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
  function resetLines() {
    if (!window.confirm('Replace your line list with the current default set?\n\n' + 'Per-line ceilings, estimates, default weights and steps for any line codes ' + 'that exist in both lists are kept. Existing purchases and inspections are not affected.')) return;
    setLines(DEFAULT_LINES);
  }

  // ----- Email / export -----

  function buildXlsx() {
    var today = new Date().toISOString().split('T')[0];
    var rows = purchases.map(function (p, i) {
      var line = lines.find(function (l) {
        return l.code === p.lineCode;
      });
      var tag = p.tagColour ? TAG_BY_CODE[p.tagColour] : null;
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
        'Tag Colour': tag ? tag.label : '',
        'Birth Year': tag ? tag.year : '',
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
  } // Generate a print-ready HTML report with all the day's pens (bought + watched + inspected),
  // open in a new tab. The user prints / saves as PDF from Safari's share sheet.
  function _emailSummary() {
    _emailSummary = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var _buildXlsx, blob, filename, today, file, summaryText, url, a, body, subject, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            if (!(purchases.length === 0)) {
              _context6.n = 1;
              break;
            }
            alert('No pens recorded yet.');
            return _context6.a(2);
          case 1:
            _buildXlsx = buildXlsx(), blob = _buildXlsx.blob, filename = _buildXlsx.filename, today = _buildXlsx.today;
            file = new File([blob], filename, {
              type: blob.type
            });
            summaryText = "Saleyard summary for ".concat(today, "\n\n") + "Pens bought: ".concat(totals.pens) + (totals.watched ? " \xB7 watched: ".concat(totals.watched) : '') + "\n" + "Total head: ".concat(totals.head, "\n") + "Total weight: ".concat(fmt1(totals.kg), " kg\n") + "Total spent: $".concat(fmt2(totals.dollars), " (GST free)\n") + "Average $/kg: $".concat(fmt2(totals.avgPpk), "\n") + "Average $/head: $".concat(fmt2(totals.avgPph));
            if (!(navigator.canShare && navigator.canShare({
              files: [file]
            }))) {
              _context6.n = 5;
              break;
            }
            _context6.p = 2;
            _context6.n = 3;
            return navigator.share({
              files: [file],
              title: "Saleyard ".concat(today),
              text: summaryText
            });
          case 3:
            return _context6.a(2);
          case 4:
            _context6.p = 4;
            _t6 = _context6.v;
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
            return _context6.a(2);
        }
      }, _callee6, null, [[2, 4]]);
    }));
    return _emailSummary.apply(this, arguments);
  }
  function openReport() {
    return _openReport.apply(this, arguments);
  }
  function _openReport() {
    _openReport = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var photoUrls, _iterator, _step, insp, blob, _iterator2, _step2, p, _blob, html, _t7, _t8, _t9, _t0;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            if (!(purchases.length === 0 && inspections.length === 0)) {
              _context7.n = 1;
              break;
            }
            alert('Nothing to report yet. Record a pen or save an inspection first.');
            return _context7.a(2);
          case 1:
            showToast('Building report…');

            // Load all photos as data URLs for embedding (both inspection and purchase photos)
            photoUrls = {};
            _iterator = _createForOfIteratorHelper(inspections);
            _context7.p = 2;
            _iterator.s();
          case 3:
            if ((_step = _iterator.n()).done) {
              _context7.n = 10;
              break;
            }
            insp = _step.value;
            if (insp.hasPhoto) {
              _context7.n = 4;
              break;
            }
            return _context7.a(3, 9);
          case 4:
            _context7.p = 4;
            _context7.n = 5;
            return photoGet(insp.id);
          case 5:
            blob = _context7.v;
            if (!blob) {
              _context7.n = 7;
              break;
            }
            _context7.n = 6;
            return blobToDataUrl(blob);
          case 6:
            photoUrls[insp.id] = _context7.v;
          case 7:
            _context7.n = 9;
            break;
          case 8:
            _context7.p = 8;
            _t7 = _context7.v;
          case 9:
            _context7.n = 3;
            break;
          case 10:
            _context7.n = 12;
            break;
          case 11:
            _context7.p = 11;
            _t8 = _context7.v;
            _iterator.e(_t8);
          case 12:
            _context7.p = 12;
            _iterator.f();
            return _context7.f(12);
          case 13:
            _iterator2 = _createForOfIteratorHelper(purchases);
            _context7.p = 14;
            _iterator2.s();
          case 15:
            if ((_step2 = _iterator2.n()).done) {
              _context7.n = 22;
              break;
            }
            p = _step2.value;
            if (p.hasPhoto) {
              _context7.n = 16;
              break;
            }
            return _context7.a(3, 21);
          case 16:
            _context7.p = 16;
            _context7.n = 17;
            return photoGet(p.id);
          case 17:
            _blob = _context7.v;
            if (!_blob) {
              _context7.n = 19;
              break;
            }
            _context7.n = 18;
            return blobToDataUrl(_blob);
          case 18:
            photoUrls[p.id] = _context7.v;
          case 19:
            _context7.n = 21;
            break;
          case 20:
            _context7.p = 20;
            _t9 = _context7.v;
          case 21:
            _context7.n = 15;
            break;
          case 22:
            _context7.n = 24;
            break;
          case 23:
            _context7.p = 23;
            _t0 = _context7.v;
            _iterator2.e(_t0);
          case 24:
            _context7.p = 24;
            _iterator2.f();
            return _context7.f(24);
          case 25:
            html = buildReportHtml({
              purchases: purchases,
              inspections: inspections,
              lines: lines,
              totals: totals,
              budgets: budgets,
              estimatedPpks: estimatedPpks,
              photoUrls: photoUrls
            }); // Render inline in an iframe rather than window.open, which iOS Safari blocks
            // in standalone PWA mode.
            setReportHtml(html);
          case 26:
            return _context7.a(2);
        }
      }, _callee7, null, [[16, 20], [14, 23, 24, 25], [4, 8], [2, 11, 12, 13]]);
    }));
    return _openReport.apply(this, arguments);
  }
  function printReport() {
    if (!reportIframeRef.current) return;
    try {
      reportIframeRef.current.contentWindow.focus();
      reportIframeRef.current.contentWindow.print();
    } catch (e) {
      // Fallback: print the entire page
      window.print();
    }
  }

  // ----- Render helpers -----

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

    // When inspection applied, show pen-specific max $/head; else show line ceiling
    if (insMaxPph != null) {
      if (Number.isFinite(dPph) && dPph > 0) {
        if (headroom != null && headroom >= 0) {
          parts.push({
            text: "$".concat(fmt2(headroom), "/hd under pen max $").concat(fmt2(insMaxPph)),
            color: T.okTxt
          });
        } else if (headroom != null && headroom < 0) {
          parts.push({
            text: "over by $".concat(fmt2(-headroom), "/hd (pen max $").concat(fmt2(insMaxPph), ")"),
            color: T.warnTxt
          });
        }
      } else {
        parts.push({
          text: "pen max $".concat(fmt2(insMaxPph), "/hd"),
          color: T.textMute
        });
      }
    } else if (lineBudget) {
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
      gap: 8,
      flexWrap: 'wrap',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(ViewTab, {
    label: "INSPECT",
    active: view === 'inspection',
    onClick: function onClick() {
      return setView('inspection');
    }
  }), /*#__PURE__*/React.createElement(ViewTab, {
    label: "BIDDING",
    active: view === 'buying',
    onClick: function onClick() {
      return setView('buying');
    }
  }), /*#__PURE__*/React.createElement(ViewTab, {
    label: "STATS",
    active: view === 'dashboard',
    onClick: function onClick() {
      return setView('dashboard');
    }
  }), /*#__PURE__*/React.createElement("button", {
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
    onClick: openReport,
    style: {
      padding: '10px 14px',
      fontSize: 13
    }
  }, "REPORT"), /*#__PURE__*/React.createElement("button", {
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
      marginBottom: 12
    }
  }, draftPhotoUrl ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      padding: 8,
      border: "1.5px solid ".concat(T.accent),
      borderRadius: 8,
      background: 'rgba(255,214,107,0.06)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: draftPhotoUrl,
    alt: "pen",
    style: {
      width: 56,
      height: 56,
      objectFit: 'cover',
      borderRadius: 6,
      border: "1px solid ".concat(T.borderH),
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: '0.10em',
      color: T.accent,
      textTransform: 'uppercase'
    }
  }, "Photo attached"), /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontSize: 11,
      color: T.textMute,
      marginTop: 1
    }
  }, "saved when you record or watch this pen")), /*#__PURE__*/React.createElement("button", {
    className: "btn arc btn-ghost",
    style: {
      padding: '6px 10px',
      fontSize: 11
    },
    onClick: function onClick() {
      return draftPhotoFileRef.current && draftPhotoFileRef.current.click();
    }
  }, "RETAKE"), /*#__PURE__*/React.createElement("button", {
    className: "btn arc",
    style: {
      padding: '6px 10px',
      fontSize: 11,
      background: 'transparent',
      color: T.warnBdr,
      borderColor: T.warnBdr
    },
    onClick: removeDraftPhoto
  }, "REMOVE")) : /*#__PURE__*/React.createElement("button", {
    className: "btn arc btn-ghost",
    style: {
      width: '100%',
      padding: '12px 14px',
      fontSize: 13,
      letterSpacing: '0.04em'
    },
    onClick: function onClick() {
      return draftPhotoFileRef.current && draftPhotoFileRef.current.click();
    }
  }, "\uD83D\uDCF7  ADD PHOTO OF THIS PEN"), /*#__PURE__*/React.createElement("input", {
    ref: draftPhotoFileRef,
    type: "file",
    accept: "image/*",
    capture: "environment",
    style: {
      display: 'none'
    },
    onChange: handleDraftPhotoFile
  })), /*#__PURE__*/React.createElement("div", {
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
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Tag colour \xB7 birth year"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 8
    }
  }, TAGS.map(function (t) {
    var sel = draft.tagColour === t.code;
    return /*#__PURE__*/React.createElement("button", {
      key: t.code,
      type: "button",
      className: "arc",
      onClick: function onClick() {
        return updateField('tagColour', sel ? '' : t.code);
      },
      style: {
        padding: '12px 6px',
        background: sel ? t.fill : t.softFill,
        color: sel ? t.inkSel : t.inkUnsel,
        border: "2px solid ".concat(sel ? t.edgeSel : t.edge),
        borderRadius: 8,
        fontWeight: 800,
        letterSpacing: '0.04em',
        cursor: 'pointer',
        minHeight: 56,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        fontWeight: 900
      }
    }, t.year), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        opacity: 0.85,
        textTransform: 'uppercase'
      }
    }, t.label));
  }))), penMatch && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10,
      padding: '10px 12px',
      background: 'rgba(255,214,107,0.12)',
      border: "1.5px solid ".concat(T.accent),
      borderRadius: 8,
      color: T.text,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '0.10em',
      color: T.accent,
      textTransform: 'uppercase'
    }
  }, "Inspection match \xB7 pen ", penMatch.penNumber), /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontSize: 12,
      marginTop: 2,
      color: T.textLbl
    }
  }, penMatch.lineCode ? penMatch.lineCode + ' · ' : '', penMatch.head != null ? "".concat(penMatch.head, " head \xB7 ") : '', penMatch.wtPerHead != null ? "".concat(fmt1(penMatch.wtPerHead), " kg/hd \xB7 ") : '', penMatch.maxPph != null ? "max $".concat(fmt2(penMatch.maxPph), "/hd") : 'no max set')), /*#__PURE__*/React.createElement("button", {
    className: "btn arc",
    style: {
      background: T.accent,
      color: '#0D0D0F',
      borderColor: T.accent,
      padding: '8px 14px',
      fontSize: 12
    },
    onClick: function onClick() {
      return applyInspectionToDraft(penMatch);
    }
  }, "APPLY")), appliedInspection && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10,
      padding: '6px 10px',
      background: 'transparent',
      border: "1px dashed ".concat(T.accent),
      borderRadius: 6,
      color: T.accent,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "arc",
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em'
    }
  }, "INSPECTION APPLIED \xB7 pen max $", fmt2(appliedInspection.maxPph || 0), "/hd"), /*#__PURE__*/React.createElement("button", {
    className: "btn arc btn-ghost",
    style: {
      padding: '4px 8px',
      fontSize: 10,
      borderColor: T.accent,
      color: T.accent
    },
    onClick: function onClick() {
      return setAppliedInspectionId(null);
    }
  }, "CLEAR")), /*#__PURE__*/React.createElement("div", {
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
  }, insMaxPph != null ? "OVER PEN MAX of $".concat(fmt2(insMaxPph), "/hd (inspection)") : "OVER BUDGET, your ceiling for ".concat(draft.lineCode, " is $").concat(fmt2(lineBudget), "/kg"))), /*#__PURE__*/React.createElement("button", {
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
    }, "PEN ", p.penNumber), p.tagColour && TAG_BY_CODE[p.tagColour] && /*#__PURE__*/React.createElement("span", {
      className: "arc",
      title: "".concat(TAG_BY_CODE[p.tagColour].label, " tag \xB7 ").concat(TAG_BY_CODE[p.tagColour].year),
      style: {
        fontSize: 10,
        letterSpacing: '0.06em',
        padding: '2px 8px',
        borderRadius: 999,
        background: TAG_BY_CODE[p.tagColour].fill,
        color: TAG_BY_CODE[p.tagColour].inkSel,
        border: "1px solid ".concat(TAG_BY_CODE[p.tagColour].edge),
        fontWeight: 800
      }
    }, TAG_BY_CODE[p.tagColour].year), p.hasPhoto && /*#__PURE__*/React.createElement("span", {
      className: "arc",
      title: "Photo attached",
      style: {
        fontSize: 11,
        color: T.accent,
        letterSpacing: '0.06em'
      }
    }, "\uD83D\uDCF7")), /*#__PURE__*/React.createElement("div", {
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
  }), view === 'inspection' && /*#__PURE__*/React.createElement(InspectionView, {
    inspections: inspections,
    lines: lines,
    onAdd: function onAdd() {
      return setEditingInspection('new');
    },
    onEdit: function onEdit(id) {
      return setEditingInspection({
        id: id
      });
    },
    onDelete: deleteInspection,
    onJumpToBidding: function onJumpToBidding(insp) {
      setView('buying');
      applyInspectionToDraft(insp);
    }
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
  }, toast.undo.label)), editingInspection && /*#__PURE__*/React.createElement(InspectionModal, {
    mode: editingInspection === 'new' ? 'new' : 'edit',
    existing: editingInspection !== 'new' ? inspections.find(function (i) {
      return i.id === editingInspection.id;
    }) : null,
    lines: lines,
    onSave: saveInspection,
    onClose: function onClose() {
      return setEditingInspection(null);
    }
  }), reportHtml && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: '#fafafa',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      background: '#0d0d0d',
      color: '#fafafa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      flexWrap: 'wrap',
      boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "arc",
    style: {
      fontSize: 11,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      fontWeight: 700
    }
  }, "Report ready. Tap Print to save as PDF, or share via the iPad share sheet."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: printReport,
    className: "arc",
    style: {
      background: T.accent,
      color: '#0D0D0F',
      border: "2px solid ".concat(T.accent),
      padding: '8px 16px',
      borderRadius: 6,
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, "Print / Save PDF"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setReportHtml(null);
    },
    className: "arc",
    style: {
      background: 'transparent',
      color: '#fafafa',
      border: "2px solid #fafafa",
      padding: '8px 16px',
      borderRadius: 6,
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, "Close"))), /*#__PURE__*/React.createElement("iframe", {
    ref: reportIframeRef,
    srcDoc: reportHtml,
    title: "Sale report",
    style: {
      flex: 1,
      border: 'none',
      width: '100%',
      background: '#fafafa'
    }
  })), showSettings && /*#__PURE__*/React.createElement(SettingsModal, {
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
    onResetLines: resetLines,
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
      margin: '0 0 12px 0',
      color: T.textLbl
    }
  }, "All ", totals.pens, " bought pen", totals.pens === 1 ? '' : 's', totals.watched ? ", ".concat(totals.watched, " watched") : '', " and ", inspections.length, " inspection", inspections.length === 1 ? '' : 's', " will be cleared. Photos will be deleted from this device. Settings, line types, default weights and steps are kept."), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      background: 'rgba(255,214,107,0.10)',
      border: "1px solid ".concat(T.accent),
      borderRadius: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "arc",
    style: {
      fontSize: 12,
      color: T.accent,
      fontWeight: 700,
      letterSpacing: '0.04em'
    }
  }, "Email the spreadsheet AND save the visual report (PDF) before clearing. Photos cannot be recovered after this.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn arc btn-ghost",
    onClick: function onClick() {
      return setShowResetConfirm(false);
    }
  }, "CANCEL"), /*#__PURE__*/React.createElement("button", {
    className: "btn arc",
    style: {
      background: T.text,
      color: '#0D0D0F',
      borderColor: T.text
    },
    onClick: function onClick() {
      setShowResetConfirm(false);
      emailSummary();
    }
  }, "EMAIL FIRST"), /*#__PURE__*/React.createElement("button", {
    className: "btn arc",
    style: {
      background: 'transparent',
      color: T.accent,
      borderColor: T.accent
    },
    onClick: function onClick() {
      setShowResetConfirm(false);
      openReport();
    }
  }, "REPORT FIRST"), /*#__PURE__*/React.createElement("button", {
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
    onResetLines = _ref6.onResetLines,
    onClose = _ref6.onClose;
  var _useState41 = useState(''),
    _useState42 = _slicedToArray(_useState41, 2),
    newCode = _useState42[0],
    setNewCode = _useState42[1];
  var _useState43 = useState(''),
    _useState44 = _slicedToArray(_useState43, 2),
    newName = _useState44[0],
    setNewName = _useState44[1];
  var _useState45 = useState('male'),
    _useState46 = _slicedToArray(_useState45, 2),
    newCat = _useState46[0],
    setNewCat = _useState46[1];
  var _useState47 = useState(buyerEmail || ''),
    _useState48 = _slicedToArray(_useState47, 2),
    emailInput = _useState48[0],
    setEmailInput = _useState48[1];
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
      decimal2: true,
      value: estimatedPpks[l.code] != null ? String(estimatedPpks[l.code]) : '',
      onChange: function onChange(v) {
        return onSetEstimatedPpk(l.code, v);
      },
      placeholder: "for presets"
    }), /*#__PURE__*/React.createElement(SmallInput, {
      label: "Ceiling $/kg",
      prefix: "$",
      decimal2: true,
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
  }, "Male (ram/buck)"), /*#__PURE__*/React.createElement("option", {
    value: "female"
  }, "Female (ewe/doe)"), /*#__PURE__*/React.createElement("option", {
    value: "wether"
  }, "Wether"), /*#__PURE__*/React.createElement("option", {
    value: "goat"
  }, "Goat (any sex)"), /*#__PURE__*/React.createElement("option", {
    value: "mixed"
  }, "Mixed sex"))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary arc",
    style: {
      padding: '10px 14px',
      fontSize: 13
    },
    onClick: handleAdd
  }, "ADD LINE")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 14,
      borderTop: "1px solid ".concat(T.borderS)
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Reset line list"), /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontSize: 11,
      color: T.textMute,
      marginBottom: 8,
      letterSpacing: '0.04em'
    }
  }, "Replaces all lines with the current default set (Merino, Merino X, Dorper, Damara, Goat \xD7 ram/ewe/wether). Per-line ceilings, estimates, default weights and steps are kept where the code matches; old codes that no longer exist are hidden but their data is retained in case you re-add them later."), /*#__PURE__*/React.createElement("button", {
    className: "btn arc",
    style: {
      padding: '10px 14px',
      fontSize: 12,
      background: 'transparent',
      color: T.accent,
      borderColor: T.accent
    },
    onClick: onResetLines
  }, "RESET TO DEFAULTS"))));
}
function SmallInput(_ref7) {
  var label = _ref7.label,
    value = _ref7.value,
    _onChange = _ref7.onChange,
    prefix = _ref7.prefix,
    suffix = _ref7.suffix,
    placeholder = _ref7.placeholder,
    decimal2 = _ref7.decimal2;
  var _useState49 = useState(false),
    _useState50 = _slicedToArray(_useState49, 2),
    focused = _useState50[0],
    setFocused = _useState50[1];
  // When decimal2 and not focused, format the displayed value to 2 decimal places
  // so 5.5 shows as "5.50". Free-text editing while focused.
  var numericValue = parseFloat(value);
  var display = decimal2 && !focused && value !== '' && Number.isFinite(numericValue) ? numericValue.toFixed(2) : value;
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
    value: display,
    onChange: function onChange(e) {
      return _onChange(e.target.value.replace(/[^0-9.]/g, ''));
    },
    onFocus: function onFocus() {
      return setFocused(true);
    },
    onBlur: function onBlur() {
      return setFocused(false);
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
    var _iterator3 = _createForOfIteratorHelper(bought),
      _step3;
    try {
      var _loop = function _loop() {
        var p = _step3.value;
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
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
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

// ----- View tab pill -----

function ViewTab(_ref11) {
  var label = _ref11.label,
    active = _ref11.active,
    onClick = _ref11.onClick;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    className: "btn arc",
    style: {
      background: active ? T.accent : 'transparent',
      color: active ? '#0D0D0F' : T.text,
      borderColor: active ? T.accent : T.borderH,
      padding: '10px 14px',
      fontSize: 13
    }
  }, label);
}

// ----- Inspection: list view -----

function InspectionView(_ref12) {
  var inspections = _ref12.inspections,
    lines = _ref12.lines,
    onAdd = _ref12.onAdd,
    _onEdit = _ref12.onEdit,
    _onDelete = _ref12.onDelete,
    _onJumpToBidding = _ref12.onJumpToBidding;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("section", {
    className: "card",
    style: {
      padding: 14,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontWeight: 900,
      fontSize: 16,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, "Pre-sale inspection"), /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.06em',
      color: T.textMute,
      marginTop: 2
    }
  }, inspections.length, " pen", inspections.length === 1 ? '' : 's', " inspected")), /*#__PURE__*/React.createElement("button", {
    className: "btn arc",
    style: {
      background: T.accent,
      color: '#0D0D0F',
      borderColor: T.accent,
      padding: '12px 18px',
      fontSize: 14
    },
    onClick: onAdd
  }, "+ ADD INSPECTION")), inspections.length === 0 ? /*#__PURE__*/React.createElement("section", {
    className: "card",
    style: {
      padding: 32,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontWeight: 800,
      fontSize: 13,
      letterSpacing: '0.10em',
      textTransform: 'uppercase',
      color: T.textMute
    }
  }, "No pens inspected yet"), /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      marginTop: 8,
      fontSize: 12,
      color: T.textMute
    }
  }, "Walk the pens, photograph each one, set what you'd pay per head. They'll show up here.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: 12
    }
  }, inspections.map(function (insp) {
    return /*#__PURE__*/React.createElement(InspectionCard, {
      key: insp.id,
      inspection: insp,
      lines: lines,
      onEdit: function onEdit() {
        return _onEdit(insp.id);
      },
      onDelete: function onDelete() {
        return _onDelete(insp.id);
      },
      onJumpToBidding: function onJumpToBidding() {
        return _onJumpToBidding(insp);
      }
    });
  })));
}
function InspectionCard(_ref13) {
  var inspection = _ref13.inspection,
    lines = _ref13.lines,
    onEdit = _ref13.onEdit,
    onDelete = _ref13.onDelete,
    onJumpToBidding = _ref13.onJumpToBidding;
  var line = lines.find(function (l) {
    return l.code === inspection.lineCode;
  });
  var cat = line ? CAT[line.category] : CAT.mixed;
  return /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, inspection.hasPhoto ? /*#__PURE__*/React.createElement(InspectionPhoto, {
    inspectionId: inspection.id,
    style: {
      width: '100%',
      aspectRatio: '4/3',
      objectFit: 'cover',
      display: 'block',
      background: T.bgInset
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '4/3',
      background: T.bgInset,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: T.textMute,
      fontSize: 11,
      fontFamily: "'Archivo', sans-serif",
      letterSpacing: '0.10em',
      textTransform: 'uppercase'
    }
  }, "No photo"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "arc",
    style: {
      fontWeight: 900,
      fontSize: 14,
      letterSpacing: '0.04em'
    }
  }, "PEN ", inspection.penNumber || '—'), line && /*#__PURE__*/React.createElement("span", {
    className: "pill",
    style: {
      background: cat.solid,
      color: cat.ink
    }
  }, line.code), inspection.tagColour && TAG_BY_CODE[inspection.tagColour] && /*#__PURE__*/React.createElement("span", {
    className: "pill",
    title: "".concat(TAG_BY_CODE[inspection.tagColour].label, " tag \xB7 ").concat(TAG_BY_CODE[inspection.tagColour].year),
    style: {
      background: TAG_BY_CODE[inspection.tagColour].fill,
      color: TAG_BY_CODE[inspection.tagColour].inkSel,
      border: "1px solid ".concat(TAG_BY_CODE[inspection.tagColour].edge)
    }
  }, TAG_BY_CODE[inspection.tagColour].year)), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 13,
      color: T.textLbl,
      marginBottom: 6
    }
  }, inspection.head != null ? "".concat(inspection.head, " head") : '—', inspection.wtPerHead != null ? " \xB7 ".concat(fmt1(inspection.wtPerHead), " kg/hd") : ''), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: T.accent,
      marginBottom: 8
    }
  }, inspection.maxPph != null ? "max $".concat(fmt2(inspection.maxPph), "/hd") : 'no max set'), inspection.notes && /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontSize: 12,
      color: T.textLbl,
      marginBottom: 10,
      fontStyle: 'italic',
      flex: 1
    }
  }, "\u201C", inspection.notes, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn arc btn-ghost",
    style: {
      padding: '8px 10px',
      fontSize: 11,
      flex: 1
    },
    onClick: onEdit
  }, "EDIT"), /*#__PURE__*/React.createElement("button", {
    className: "btn arc",
    style: {
      padding: '8px 10px',
      fontSize: 11,
      background: 'transparent',
      color: T.warnBdr,
      borderColor: T.warnBdr,
      flex: 1
    },
    onClick: onDelete
  }, "DEL"))));
}

// Loads a photo Blob from IndexedDB and renders it as an <img>
function InspectionPhoto(_ref14) {
  var inspectionId = _ref14.inspectionId,
    style = _ref14.style;
  var _useState51 = useState(null),
    _useState52 = _slicedToArray(_useState51, 2),
    url = _useState52[0],
    setUrl = _useState52[1];
  useEffect(function () {
    var active = true;
    var createdUrl = null;
    photoGet(inspectionId).then(function (blob) {
      if (!active || !blob) return;
      createdUrl = URL.createObjectURL(blob);
      setUrl(createdUrl);
    })["catch"](function () {});
    return function () {
      active = false;
      if (createdUrl) URL.revokeObjectURL(createdUrl);
    };
  }, [inspectionId]);
  if (!url) {
    return /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, style), {}, {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: T.textMute,
        fontSize: 11
      })
    }, "loading\u2026");
  }
  return /*#__PURE__*/React.createElement("img", {
    src: url,
    alt: "",
    style: style
  });
}

// ----- Inspection: add/edit modal -----

function InspectionModal(_ref15) {
  var mode = _ref15.mode,
    existing = _ref15.existing,
    lines = _ref15.lines,
    onSave = _ref15.onSave,
    onClose = _ref15.onClose;
  var _useState53 = useState(function () {
      var base = existing ? {
        id: existing.id,
        penNumber: existing.penNumber || '',
        lineCode: existing.lineCode || '',
        head: existing.head != null ? String(existing.head) : '',
        wtPerHead: existing.wtPerHead != null ? String(existing.wtPerHead) : '',
        maxPph: existing.maxPph != null ? String(existing.maxPph) : '',
        notes: existing.notes || '',
        tagColour: existing.tagColour || ''
      } : emptyInspection();
      // Derive maxPpk for display if we can
      var wt = parseFloat(base.wtPerHead);
      var ph = parseFloat(base.maxPph);
      var maxPpk = Number.isFinite(wt) && wt > 0 && Number.isFinite(ph) ? (ph / wt).toFixed(2) : '';
      return _objectSpread(_objectSpread({}, base), {}, {
        maxPpk: maxPpk,
        lastEditedPrice: Number.isFinite(ph) ? 'maxPph' : null
      });
    }),
    _useState54 = _slicedToArray(_useState53, 2),
    form = _useState54[0],
    setForm = _useState54[1];
  var _useState55 = useState(null),
    _useState56 = _slicedToArray(_useState55, 2),
    photoBlob = _useState56[0],
    setPhotoBlob = _useState56[1];
  var _useState57 = useState(null),
    _useState58 = _slicedToArray(_useState57, 2),
    photoUrl = _useState58[0],
    setPhotoUrl = _useState58[1];
  var _useState59 = useState(existing ? !!existing.hasPhoto : false),
    _useState60 = _slicedToArray(_useState59, 2),
    hasExistingPhoto = _useState60[0],
    setHasExistingPhoto = _useState60[1];
  var _useState61 = useState(false),
    _useState62 = _slicedToArray(_useState61, 2),
    busy = _useState62[0],
    setBusy = _useState62[1];
  var fileRef = useRef(null);

  // Load existing photo if there is one (for the preview)
  useEffect(function () {
    if (!existing || !existing.hasPhoto) return;
    var active = true;
    var createdUrl = null;
    photoGet(existing.id).then(function (blob) {
      if (!active || !blob) return;
      createdUrl = URL.createObjectURL(blob);
      setPhotoUrl(createdUrl);
    })["catch"](function () {});
    return function () {
      active = false;
      if (createdUrl) URL.revokeObjectURL(createdUrl);
    };
  }, [existing]);

  // Revoke preview URL for newly-captured photos when the component unmounts
  useEffect(function () {
    return function () {
      if (photoUrl && photoBlob) URL.revokeObjectURL(photoUrl);
    };
  }, [photoUrl, photoBlob]);

  // Bidirectional linker between maxPph, maxPpk, and wtPerHead.
  function update(field, value) {
    setForm(function (prev) {
      var next = _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, field, value));
      var wt = parseFloat(next.wtPerHead);
      var wtValid = Number.isFinite(wt) && wt > 0;
      if (field === 'maxPph') {
        next.lastEditedPrice = 'maxPph';
        if (value === '') next.maxPpk = '';else if (wtValid) {
          var v = parseFloat(value);
          if (Number.isFinite(v)) next.maxPpk = (v / wt).toFixed(2);
        }
      } else if (field === 'maxPpk') {
        next.lastEditedPrice = 'maxPpk';
        if (value === '') next.maxPph = '';else if (wtValid) {
          var _v2 = parseFloat(value);
          if (Number.isFinite(_v2)) next.maxPph = (_v2 * wt).toFixed(2);
        }
      } else if (field === 'wtPerHead') {
        var newWt = parseFloat(value);
        if (Number.isFinite(newWt) && newWt > 0) {
          if (next.lastEditedPrice === 'maxPph' && next.maxPph !== '') {
            var ph = parseFloat(next.maxPph);
            if (Number.isFinite(ph)) next.maxPpk = (ph / newWt).toFixed(2);
          } else if (next.lastEditedPrice === 'maxPpk' && next.maxPpk !== '') {
            var pk = parseFloat(next.maxPpk);
            if (Number.isFinite(pk)) next.maxPph = (pk * newWt).toFixed(2);
          }
        }
      }
      return next;
    });
  }
  function handlePhoto(_x9) {
    return _handlePhoto.apply(this, arguments);
  }
  function _handlePhoto() {
    _handlePhoto = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(e) {
      var file, blob, _t1;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            file = e.target.files && e.target.files[0];
            if (file) {
              _context8.n = 1;
              break;
            }
            return _context8.a(2);
          case 1:
            setBusy(true);
            _context8.p = 2;
            _context8.n = 3;
            return compressImage(file, 1200, 0.7);
          case 3:
            blob = _context8.v;
            if (photoUrl && photoBlob) URL.revokeObjectURL(photoUrl);
            setPhotoBlob(blob);
            setPhotoUrl(URL.createObjectURL(blob));
            setHasExistingPhoto(true);
            _context8.n = 5;
            break;
          case 4:
            _context8.p = 4;
            _t1 = _context8.v;
            alert('Could not process photo: ' + (_t1 && _t1.message ? _t1.message : 'unknown error'));
          case 5:
            _context8.p = 5;
            setBusy(false);
            if (fileRef.current) fileRef.current.value = '';
            return _context8.f(5);
          case 6:
            return _context8.a(2);
        }
      }, _callee8, null, [[2, 4, 5, 6]]);
    }));
    return _handlePhoto.apply(this, arguments);
  }
  function removePhoto() {
    if (photoUrl && photoBlob) URL.revokeObjectURL(photoUrl);
    setPhotoBlob(null);
    setPhotoUrl(null);
    setHasExistingPhoto(false);
  }
  function handleSave() {
    if (!form.penNumber || !form.penNumber.trim()) {
      alert('Pen number is required.');
      return;
    }
    onSave(_objectSpread(_objectSpread({}, form), {}, {
      hasPhoto: hasExistingPhoto
    }), photoBlob);
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
  }, mode === 'edit' ? 'Edit inspection' : 'New inspection'), /*#__PURE__*/React.createElement("button", {
    className: "btn arc btn-ghost",
    style: {
      padding: '8px 12px',
      fontSize: 12
    },
    onClick: onClose
  }, "CLOSE")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Photo"), photoUrl ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photoUrl,
    alt: "pen",
    style: {
      width: '100%',
      maxHeight: 280,
      objectFit: 'cover',
      borderRadius: 8,
      border: "1.5px solid ".concat(T.borderH),
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn arc btn-ghost",
    style: {
      padding: '8px 12px',
      fontSize: 12,
      flex: 1
    },
    onClick: function onClick() {
      return fileRef.current && fileRef.current.click();
    },
    disabled: busy
  }, "RETAKE"), /*#__PURE__*/React.createElement("button", {
    className: "btn arc",
    style: {
      padding: '8px 12px',
      fontSize: 12,
      flex: 1,
      background: 'transparent',
      color: T.warnBdr,
      borderColor: T.warnBdr
    },
    onClick: removePhoto,
    disabled: busy
  }, "REMOVE"))) : /*#__PURE__*/React.createElement("button", {
    className: "btn arc btn-ghost",
    style: {
      width: '100%',
      padding: '20px 16px',
      fontSize: 14
    },
    onClick: function onClick() {
      return fileRef.current && fileRef.current.click();
    },
    disabled: busy
  }, busy ? 'PROCESSING…' : '📷  TAKE / CHOOSE PHOTO'), /*#__PURE__*/React.createElement("input", {
    ref: fileRef,
    type: "file",
    accept: "image/*",
    capture: "environment",
    style: {
      display: 'none'
    },
    onChange: handlePhoto
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Pen number (required)"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "text",
    className: "field",
    value: form.penNumber,
    onChange: function onChange(e) {
      return update('penNumber', e.target.value.slice(0, 8));
    },
    placeholder: "e.g. 12",
    style: {
      fontSize: 22
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Line type"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
      gap: 6
    }
  }, lines.map(function (l) {
    var cat = CAT[l.category];
    var sel = form.lineCode === l.code;
    return /*#__PURE__*/React.createElement("button", {
      key: l.code,
      type: "button",
      className: "arc",
      onClick: function onClick() {
        return update('lineCode', sel ? '' : l.code);
      },
      style: {
        padding: '10px 6px',
        border: "2px solid ".concat(cat.solid),
        borderRadius: 8,
        background: sel ? cat.solid : cat.soft,
        color: sel ? cat.ink : cat.solid,
        fontWeight: 800,
        fontSize: 13,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        minHeight: 44,
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent'
      }
    }, l.code);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Tag colour \xB7 birth year"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 6
    }
  }, TAGS.map(function (t) {
    var sel = form.tagColour === t.code;
    return /*#__PURE__*/React.createElement("button", {
      key: t.code,
      type: "button",
      className: "arc",
      onClick: function onClick() {
        return update('tagColour', sel ? '' : t.code);
      },
      style: {
        padding: '10px 6px',
        background: sel ? t.fill : t.softFill,
        color: sel ? t.inkSel : t.inkUnsel,
        border: "2px solid ".concat(sel ? t.edgeSel : t.edge),
        borderRadius: 8,
        fontWeight: 800,
        letterSpacing: '0.04em',
        cursor: 'pointer',
        minHeight: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: 900
      }
    }, t.year), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        opacity: 0.85,
        textTransform: 'uppercase'
      }
    }, t.label));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Head (estimated)"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "numeric",
    pattern: "[0-9]*",
    className: "field",
    value: form.head,
    onChange: function onChange(e) {
      return update('head', e.target.value.replace(/[^0-9]/g, ''));
    },
    placeholder: "0"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Est. kg per head"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "decimal",
    className: "field",
    value: form.wtPerHead,
    onChange: function onChange(e) {
      return update('wtPerHead', e.target.value.replace(/[^0-9.]/g, ''));
    },
    placeholder: "0.0"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Max $/head you'd pay"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "decimal",
    className: "field",
    value: form.maxPph,
    onChange: function onChange(e) {
      return update('maxPph', e.target.value.replace(/[^0-9.]/g, ''));
    },
    placeholder: "0.00"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Max $/kg ", /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: 'none',
      letterSpacing: 0,
      color: T.textMute,
      fontSize: 10
    }
  }, "(auto)")), /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "decimal",
    className: "field",
    value: form.maxPpk,
    onChange: function onChange(e) {
      return update('maxPpk', e.target.value.replace(/[^0-9.]/g, ''));
    },
    placeholder: "0.00"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Notes"), /*#__PURE__*/React.createElement("textarea", {
    value: form.notes,
    onChange: function onChange(e) {
      return update('notes', e.target.value);
    },
    placeholder: "condition, breed type, observations\u2026",
    rows: 3,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: 12,
      border: "1.5px solid ".concat(T.borderH),
      borderRadius: 8,
      background: T.bgField,
      color: T.text,
      fontFamily: 'system-ui, sans-serif',
      fontSize: 14,
      outline: 'none',
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn arc btn-ghost",
    onClick: onClose
  }, "CANCEL"), /*#__PURE__*/React.createElement("button", {
    className: "btn arc btn-primary",
    onClick: handleSave
  }, "SAVE"))));
}

// ----- HTML report generator -----

function buildReportHtml(_ref16) {
  var purchases = _ref16.purchases,
    inspections = _ref16.inspections,
    lines = _ref16.lines,
    totals = _ref16.totals,
    budgets = _ref16.budgets,
    estimatedPpks = _ref16.estimatedPpks,
    photoUrls = _ref16.photoUrls;
  var today = new Date().toLocaleDateString('en-AU', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  var dateShort = new Date().toISOString().split('T')[0];

  // Combine inspections and purchases keyed by pen number where possible
  // so each pen card shows both pre-sale view and the result.
  var cards = [];
  var usedPurchaseIds = new Set();
  var _iterator4 = _createForOfIteratorHelper(inspections),
    _step4;
  try {
    var _loop2 = function _loop2() {
      var insp = _step4.value;
      var matchingPurchase = purchases.find(function (p) {
        return p.penNumber && insp.penNumber && p.penNumber.trim() === insp.penNumber.trim();
      });
      cards.push({
        inspection: insp,
        purchase: matchingPurchase
      });
      if (matchingPurchase) usedPurchaseIds.add(matchingPurchase.id);
    };
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      _loop2();
    }
    // Purchases with no matching inspection
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  var _iterator5 = _createForOfIteratorHelper(purchases),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var p = _step5.value;
      if (!usedPurchaseIds.has(p.id)) {
        cards.push({
          inspection: null,
          purchase: p
        });
      }
    }

    // Sort: bought first by line/time, then watched, then inspections-only
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  cards.sort(function (a, b) {
    var score = function score(c) {
      if (c.purchase && !c.purchase.watched) return 0;
      if (c.purchase && c.purchase.watched) return 1;
      return 2;
    };
    return score(a) - score(b);
  });
  var lineNameOf = function lineNameOf(code) {
    var l = lines.find(function (x) {
      return x.code === code;
    });
    return l ? l.name : code;
  };
  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function formatTime(iso) {
    if (!iso) return '';
    return new Date(iso).toLocaleTimeString('en-AU', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  }
  var bought = purchases.filter(function (p) {
    return !p.watched;
  });
  var watched = purchases.filter(function (p) {
    return p.watched;
  });

  // Summary table rows
  var summaryRows = [['Pens bought', String(bought.length)], ['Pens watched', String(watched.length)], ['Pens inspected (total)', String(inspections.length)], ['Total head', String(totals.head)], ['Total weight', fmt1(totals.kg) + ' kg'], ['Total spent', '$' + fmt2(totals.dollars) + ' (GST free)'], ['Average $/kg', '$' + fmt2(totals.avgPpk)], ['Average $/hd', '$' + fmt2(totals.avgPph)]];
  var css = "\n    @page { size: A4; margin: 12mm; }\n    * { box-sizing: border-box; }\n    body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif; color: #0d0d0d; background: #f7f3ea; }\n    h1, h2, h3, h4 { margin: 0; font-weight: 800; letter-spacing: -0.01em; }\n    .container { max-width: 900px; margin: 0 auto; padding: 24px 16px 80px; }\n    .header { padding-bottom: 12px; border-bottom: 2px solid #0d0d0d; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: end; gap: 16px; flex-wrap: wrap; }\n    .header h1 { font-size: 24px; letter-spacing: 0.04em; text-transform: uppercase; }\n    .header .date { font-size: 14px; color: #555; }\n    .summary { background: #fff; border: 1px solid #1a1a1a; border-radius: 8px; padding: 14px 16px; margin-bottom: 20px; }\n    .summary h2 { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #555; margin-bottom: 10px; }\n    .summary table { width: 100%; border-collapse: collapse; font-size: 14px; }\n    .summary td { padding: 4px 0; }\n    .summary td:first-child { color: #555; width: 40%; }\n    .summary td:last-child  { font-weight: 700; text-align: right; font-variant-numeric: tabular-nums; }\n    .controls { background: #0d0d0d; color: #fafafa; padding: 12px; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 16px; }\n    .controls button { background: #fafafa; color: #0d0d0d; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 800; cursor: pointer; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; }\n    .pen-card { background: #fff; border: 1px solid #1a1a1a; border-radius: 8px; padding: 14px; margin-bottom: 14px; page-break-inside: avoid; }\n    .pen-card .top { display: flex; gap: 14px; align-items: flex-start; margin-bottom: 10px; flex-wrap: wrap; }\n    .pen-card img { width: 240px; height: 180px; object-fit: cover; border-radius: 6px; flex-shrink: 0; background: #eee; }\n    .pen-card .info { flex: 1; min-width: 240px; }\n    .pen-card .pen-no { font-size: 22px; font-weight: 900; letter-spacing: 0.04em; }\n    .pen-card .line-name { font-size: 13px; color: #555; margin-bottom: 6px; }\n    .pen-card .badge { display: inline-block; padding: 3px 10px; border-radius: 999px; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: middle; margin-left: 6px; }\n    .badge-bought   { background: #14532d; color: #fff; }\n    .badge-watched  { background: #555;    color: #fff; }\n    .badge-no-result{ background: #d4d4d4; color: #333; }\n    .tag-badge { display: inline-block; padding: 3px 10px; border-radius: 999px; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: middle; margin-left: 6px; }\n    .pen-card .data-table { width: 100%; border-collapse: collapse; font-size: 13px; margin-top: 8px; font-variant-numeric: tabular-nums; }\n    .pen-card .data-table td { padding: 4px 8px; border: 1px solid #ddd; }\n    .pen-card .data-table td:first-child { color: #555; width: 35%; background: #f9f7f0; }\n    .pen-card .notes { margin-top: 8px; font-style: italic; color: #444; font-size: 13px; padding: 8px 10px; background: #f9f7f0; border-left: 3px solid #1a1a1a; }\n    .section-title { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #555; margin: 24px 0 8px; }\n    @media print {\n      body { background: #fff; }\n      .controls { display: none; }\n      .pen-card { box-shadow: none; }\n    }\n  ";
  function renderCard(_ref17) {
    var inspection = _ref17.inspection,
      purchase = _ref17.purchase;
    var penNo = inspection ? inspection.penNumber : purchase ? purchase.penNumber : '';
    var code = inspection ? inspection.lineCode : purchase ? purchase.lineCode : '';
    var name = lineNameOf(code);
    // Prefer the purchase's own photo (taken at the rail) over the inspection photo (pre-sale)
    var photoUrl = null;
    if (purchase && photoUrls[purchase.id]) photoUrl = photoUrls[purchase.id];else if (inspection && photoUrls[inspection.id]) photoUrl = photoUrls[inspection.id];
    var badge = '<span class="badge badge-no-result">Inspected only</span>';
    if (purchase && !purchase.watched) badge = '<span class="badge badge-bought">Bought</span>';else if (purchase && purchase.watched) badge = '<span class="badge badge-watched">Watched</span>';

    // Use purchase tag if recorded, else inspection tag
    var tagCode = purchase && purchase.tagColour || inspection && inspection.tagColour || '';
    var tag = tagCode ? TAG_BY_CODE[tagCode] : null;
    var tagBadge = tag ? "<span class=\"tag-badge\" style=\"background:".concat(tag.fill, ";color:").concat(tag.inkSel, ";border:1px solid ").concat(tag.edge, ";\">").concat(tag.label, " ").concat(tag.year, "</span>") : '';
    var rows = [];
    if (tag) rows.push(['Tag colour', "".concat(tag.label, " (born ").concat(tag.year, ")")]);
    if (inspection) {
      rows.push(['Inspection time', formatTime(inspection.timestamp)]);
      if (inspection.head != null) rows.push(['Inspected head', String(inspection.head)]);
      if (inspection.wtPerHead != null) rows.push(['Inspected kg/hd', fmt1(inspection.wtPerHead)]);
      if (inspection.maxPph != null) rows.push(['Max $/head you set', '$' + fmt2(inspection.maxPph)]);
    }
    if (purchase) {
      rows.push(['Sale time', formatTime(purchase.timestamp)]);
      rows.push(['Head', String(purchase.head)]);
      rows.push(['Est. kg/hd', fmt1(purchase.wtPerHead)]);
      rows.push(['Total weight', fmt1(purchase.totalKg) + ' kg']);
      rows.push(['$ per kg', '$' + fmt2(purchase.pricePerKg)]);
      rows.push(['$ per head', '$' + fmt2(purchase.pricePerHead)]);
      rows.push([purchase.watched ? 'Sold for (pen total)' : 'Pen total', '$' + fmt2(purchase.total)]);
      if (inspection && inspection.maxPph != null) {
        var diff = purchase.pricePerHead - inspection.maxPph;
        rows.push(['vs your max', (diff > 0 ? '+' : '') + '$' + fmt2(diff) + '/hd  ' + (diff > 0 ? '(over your max)' : diff < 0 ? '(under your max)' : '(on your max)')]);
      }
    }
    var rowsHtml = rows.map(function (_ref18) {
      var _ref19 = _slicedToArray(_ref18, 2),
        k = _ref19[0],
        v = _ref19[1];
      return "<tr><td>".concat(escapeHtml(k), "</td><td>").concat(escapeHtml(v), "</td></tr>");
    }).join('');
    var notesHtml = inspection && inspection.notes ? "<div class=\"notes\">".concat(escapeHtml(inspection.notes), "</div>") : '';
    return "\n      <div class=\"pen-card\">\n        <div class=\"top\">\n          ".concat(photoUrl ? "<img src=\"".concat(photoUrl, "\" alt=\"pen ").concat(escapeHtml(penNo), "\" />") : '', "\n          <div class=\"info\">\n            <div class=\"pen-no\">PEN ").concat(escapeHtml(penNo || '—')).concat(badge).concat(tagBadge, "</div>\n            <div class=\"line-name\">").concat(escapeHtml(name || ''), "</div>\n            <table class=\"data-table\"><tbody>").concat(rowsHtml, "</tbody></table>\n          </div>\n        </div>\n        ").concat(notesHtml, "\n      </div>\n    ");
  }
  var cardsHtml = cards.map(renderCard).join('');
  var summaryRowsHtml = summaryRows.map(function (_ref20) {
    var _ref21 = _slicedToArray(_ref20, 2),
      k = _ref21[0],
      v = _ref21[1];
    return "<tr><td>".concat(escapeHtml(k), "</td><td>").concat(escapeHtml(v), "</td></tr>");
  }).join('');
  return "<!DOCTYPE html>\n<html lang=\"en-AU\">\n<head>\n  <meta charset=\"utf-8\" />\n  <title>Saleyard report ".concat(dateShort, "</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <style>").concat(css, "</style>\n</head>\n<body>\n  <div class=\"container\">\n    <div class=\"controls\">\n      <span style=\"font-weight:700;letter-spacing:0.06em;text-transform:uppercase;font-size:12px;\">\n        Tap PRINT to save this report as a PDF (use Safari's share sheet \u2192 Save to Files)\n      </span>\n      <button onclick=\"window.print()\">PRINT</button>\n    </div>\n    <div class=\"header\">\n      <h1>Saleyard report</h1>\n      <div class=\"date\">").concat(escapeHtml(today), " \xB7 prepared by Patrick Coole</div>\n    </div>\n    <div class=\"summary\">\n      <h2>Day at a glance</h2>\n      <table><tbody>").concat(summaryRowsHtml, "</tbody></table>\n    </div>\n    <div class=\"section-title\">Pens (").concat(cards.length, ")</div>\n    ").concat(cardsHtml || '<p style="color:#555;">No pens to display.</p>', "\n  </div>\n</body>\n</html>");
}

// Mount
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
