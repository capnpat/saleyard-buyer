const {
  useState,
  useEffect,
  useMemo,
  useRef
} = React;

// ----- Defaults & constants -----

const DEFAULT_LINES = [
// Merino (M)
{
  code: 'MR',
  name: 'Merino Rams',
  breed: 'Merino',
  category: 'male'
}, {
  code: 'ME',
  name: 'Merino Ewes',
  breed: 'Merino',
  category: 'female'
}, {
  code: 'MW',
  name: 'Merino Wethers',
  breed: 'Merino',
  category: 'wether'
},
// Merino Cross (X)
{
  code: 'XR',
  name: 'Merino X Rams',
  breed: 'Merino X',
  category: 'male'
}, {
  code: 'XE',
  name: 'Merino X Ewes',
  breed: 'Merino X',
  category: 'female'
}, {
  code: 'XW',
  name: 'Merino X Wethers',
  breed: 'Merino X',
  category: 'wether'
},
// Dorper (D)
{
  code: 'DR',
  name: 'Dorper Rams',
  breed: 'Dorper',
  category: 'male'
}, {
  code: 'DE',
  name: 'Dorper Ewes',
  breed: 'Dorper',
  category: 'female'
}, {
  code: 'DW',
  name: 'Dorper Wethers',
  breed: 'Dorper',
  category: 'wether'
},
// Damara (DM)
{
  code: 'DMR',
  name: 'Damara Rams',
  breed: 'Damara',
  category: 'male'
}, {
  code: 'DME',
  name: 'Damara Ewes',
  breed: 'Damara',
  category: 'female'
}, {
  code: 'DMW',
  name: 'Damara Wethers',
  breed: 'Damara',
  category: 'wether'
},
// Goat (G) — bucks, does, wethers
{
  code: 'GB',
  name: 'Goat Bucks',
  breed: 'Goat',
  category: 'male'
}, {
  code: 'GD',
  name: 'Goat Does',
  breed: 'Goat',
  category: 'female'
}, {
  code: 'GW',
  name: 'Goat Wethers',
  breed: 'Goat',
  category: 'wether'
}];

// Old (pre-2026-05) default line list. Used to auto-migrate users who still
// have the original line set in their saved state.
const OLD_DEFAULT_CODES = ['MW', 'RL', 'RAM', 'EWE', 'SL', 'DOE', 'BUK'];
function isOldDefaultLines(arr) {
  if (!Array.isArray(arr) || arr.length !== OLD_DEFAULT_CODES.length) return false;
  const codes = arr.map(l => l && l.code).filter(Boolean).sort();
  const expect = [...OLD_DEFAULT_CODES].sort();
  return codes.every((c, i) => c === expect[i]);
}
const CAT = {
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

// Breed-specific colours so the line picker can be scanned by breed at a glance
const BREED = {
  'Merino': {
    solid: '#D9C58A',
    soft: '#2E291A',
    ink: '#141414'
  },
  // wool cream
  'Merino X': {
    solid: '#8FB0D8',
    soft: '#1A2430',
    ink: '#0D1A28'
  },
  // dusty blue
  'Dorper': {
    solid: '#D18A5A',
    soft: '#2E1D12',
    ink: '#1A0F08'
  },
  // dorper tan
  'Damara': {
    solid: '#D96644',
    soft: '#2E150E',
    ink: '#FFFFFF'
  },
  // damara rust
  'Goat': {
    solid: '#A8C77A',
    soft: '#1E2918',
    ink: '#0F1908'
  } // olive green
};
function breedStyle(breedName) {
  return BREED[breedName] || {
    solid: '#9CA0AB',
    soft: '#25272C',
    ink: '#0D0D0F'
  };
}

// ----- Crate load planning (ASEL sheep air-freight table) -----
// Standard main-deck SBS crate (CMTP DG02-A): double-pen, both pens 6.293 m² floor.
// Pen allocation uses ASEL 3.3 Table 36 minimum pen area for sheep.
const CRATE_PEN_AREA_M2 = 6.293; // area per pen (one deck)
const CRATE_PENS_PER_CRATE = 2; // top + bottom
const CRATE_COUNT = 8; // how many crates to visualise

// ASEL 3.3 Table 36: minimum aircraft crate pen area for sheep (m² per head)
// Index is weight in kg, value is m²/head. Interpolated for intermediate weights.
const ASEL_SHEEP = [[20, 0.150], [25, 0.170], [30, 0.190], [35, 0.210], [40, 0.230], [45, 0.250], [50, 0.270], [55, 0.293], [60, 0.315], [65, 0.338], [70, 0.360], [75, 0.383], [80, 0.405], [85, 0.428], [90, 0.450], [95, 0.473], [100, 0.495]];
const ASEL_GOAT = [[15, 0.093], [20, 0.117], [25, 0.141], [30, 0.165], [35, 0.189], [40, 0.213], [45, 0.237], [50, 0.261], [55, 0.285], [60, 0.309], [65, 0.333], [70, 0.357], [75, 0.381], [80, 0.405], [85, 0.429], [90, 0.453], [95, 0.477], [100, 0.501]];
function aselAreaPerHead(weightKg, table) {
  if (!Number.isFinite(weightKg) || weightKg <= 0) return null;
  if (weightKg <= table[0][0]) return table[0][1];
  if (weightKg >= table[table.length - 1][0]) return table[table.length - 1][1];
  for (let i = 0; i < table.length - 1; i++) {
    const [w1, a1] = table[i];
    const [w2, a2] = table[i + 1];
    if (weightKg >= w1 && weightKg <= w2) {
      const t = (weightKg - w1) / (w2 - w1);
      return a1 + (a2 - a1) * t;
    }
  }
  return null;
}

// WA tag colour scheme: tag colour = year of birth
const TAGS = [{
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
const TAG_BY_CODE = TAGS.reduce((m, t) => {
  m[t.code] = t;
  return m;
}, {});
const T = {
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
const STORAGE_KEY = 'saleyard-state-v1';
const DEFAULT_KG_STEP = 0.05;
const DEFAULT_HEAD_STEP = 1; // +/- step on $/head
const DEFAULT_PRESET_HEAD_NEAR = 1; // small-step preset offset ($)
const DEFAULT_PRESET_HEAD_FAR = 5; // large-step preset offset ($)
const DEFAULT_KG_WARN_BAND = 0.20; // $/kg warning band width

// ----- Helpers -----

const fmt2 = n => Number.isFinite(n) ? n.toFixed(2) : '0.00';
const fmt1 = n => Number.isFinite(n) ? n.toFixed(1) : '0.0';
const fmt0 = n => Number.isFinite(n) ? Math.round(n).toLocaleString('en-AU') : '0';
const fmtInt = n => Number.isFinite(n) ? Math.round(n).toLocaleString('en-AU') : '0';
const round2 = n => Math.round(n * 100) / 100;
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

const PHOTO_DB_NAME = 'saleyard-photos';
const PHOTO_STORE = 'photos';
function openPhotoDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(PHOTO_DB_NAME, 1);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(PHOTO_STORE)) {
        db.createObjectStore(PHOTO_STORE);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function photoSet(key, blob) {
  const db = await openPhotoDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PHOTO_STORE, 'readwrite');
    tx.objectStore(PHOTO_STORE).put(blob, key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
async function photoGet(key) {
  const db = await openPhotoDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PHOTO_STORE, 'readonly');
    const req = tx.objectStore(PHOTO_STORE).get(key);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}
async function photoDelete(key) {
  const db = await openPhotoDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PHOTO_STORE, 'readwrite');
    tx.objectStore(PHOTO_STORE).delete(key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
async function photoClearAll() {
  const db = await openPhotoDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PHOTO_STORE, 'readwrite');
    tx.objectStore(PHOTO_STORE).clear();
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = () => reject(r.error);
    r.readAsDataURL(blob);
  });
}

// ----- Session storage (IndexedDB) -----
// Past sale days are auto-saved on New Day. Each session is one document
// containing the day's purchases, inspections, and a snapshot of the
// settings in effect at the time.

const SESSION_DB_NAME = 'saleyard-sessions';
const SESSION_STORE = 'sessions';
function openSessionDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(SESSION_DB_NAME, 1);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(SESSION_STORE)) {
        db.createObjectStore(SESSION_STORE, {
          keyPath: 'id'
        });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function sessionPut(session) {
  const db = await openSessionDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(SESSION_STORE, 'readwrite');
    tx.objectStore(SESSION_STORE).put(session);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
async function sessionGetAll() {
  const db = await openSessionDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(SESSION_STORE, 'readonly');
    const req = tx.objectStore(SESSION_STORE).getAll();
    req.onsuccess = () => {
      const list = req.result || [];
      // Newest first
      list.sort((a, b) => (b.savedAt || '').localeCompare(a.savedAt || ''));
      resolve(list);
    };
    req.onerror = () => reject(req.error);
  });
}
async function sessionDelete(id) {
  const db = await openSessionDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(SESSION_STORE, 'readwrite');
    tx.objectStore(SESSION_STORE).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// Pure totals computation, usable from both live state and saved sessions
function computeTotals(purchases) {
  const bought = purchases.filter(p => !p.watched);
  const watched = purchases.filter(p => p.watched);
  const head = bought.reduce((s, p) => s + (p.head || 0), 0);
  const kg = bought.reduce((s, p) => s + (p.totalKg || 0), 0);
  const dollars = bought.reduce((s, p) => s + (p.total || 0), 0);
  return {
    pens: bought.length,
    watched: watched.length,
    head,
    kg,
    dollars,
    avgPpk: kg > 0 ? dollars / kg : 0,
    avgPph: head > 0 ? dollars / head : 0
  };
}

// Compress an image File from a camera capture down to a sensible size for storage.
// Returns a JPEG Blob.
async function compressImage(file, maxDim = 1200, quality = 0.7) {
  const dataUrl = await new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result);
    r.onerror = () => rej(r.error);
    r.readAsDataURL(file);
  });
  const img = await new Promise((res, rej) => {
    const i = new Image();
    i.onload = () => res(i);
    i.onerror = () => rej(new Error('Image load failed'));
    i.src = dataUrl;
  });
  const scale = Math.min(maxDim / img.width, maxDim / img.height, 1);
  const w = Math.round(img.width * scale);
  const h = Math.round(img.height * scale);
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, w, h);
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('toBlob failed')), 'image/jpeg', quality);
  });
}

// ----- Main component -----

function App() {
  const [loaded, setLoaded] = useState(false);
  const [lines, setLines] = useState(DEFAULT_LINES);
  const [budgets, setBudgets] = useState({});
  const [estimatedPpks, setEstimatedPpks] = useState({});
  const [defaultWeights, setDefaultWeights] = useState({});
  const [bidSteps, setBidSteps] = useState({});
  const [kgWarnBand, setKgWarnBand] = useState(DEFAULT_KG_WARN_BAND);
  const [purchases, setPurchases] = useState([]);
  const [draft, setDraft] = useState(emptyDraft());
  const [editingId, setEditingId] = useState(null);
  const [buyerEmail, setBuyerEmail] = useState('');
  const [location, setLocation] = useState('Muchea');
  const [sessions, setSessions] = useState([]);
  const [showSettings, setShowSettings] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [toast, setToast] = useState(null);
  const [view, setView] = useState('buying'); // 'buying', 'inspection', 'dashboard'
  const [inspections, setInspections] = useState([]);
  const [appliedInspectionId, setAppliedInspectionId] = useState(null);
  const [editingInspection, setEditingInspection] = useState(null); // null, 'new', or {id}
  // Draft photo state for the bid card (independent of any inspection photo).
  // status: 'none' (no photo), 'existing' (loaded from IDB during edit),
  //         'new' (newly captured, not yet persisted),
  //         'removed' (existing photo marked for deletion on save).
  const [draftPhotoBlob, setDraftPhotoBlob] = useState(null);
  const [draftPhotoUrl, setDraftPhotoUrl] = useState(null);
  const [draftPhotoStatus, setDraftPhotoStatus] = useState('none');
  const draftPhotoFileRef = useRef(null);
  // Inline-rendered report (replaces window.open which iOS PWA blocks).
  // We use a Blob URL on iframe.src rather than srcDoc, which iOS Safari
  // struggles with when the HTML is large (embedded photo data URLs).
  const [reportBlobUrl, setReportBlobUrl] = useState(null);
  const reportIframeRef = useRef(null); // {message, undo?}

  const draftRef = useRef(null);
  const toastTimer = useRef(null);

  // Load persisted state
  useEffect(() => {
    (async () => {
      try {
        const result = await window.storage.get(STORAGE_KEY);
        if (result && result.value) {
          const data = JSON.parse(result.value);
          if (Array.isArray(data.lines) && data.lines.length) {
            // Auto-migrate users still on the original 7-line default to the
            // current 15-line default. Custom line lists are left alone.
            setLines(isOldDefaultLines(data.lines) ? DEFAULT_LINES : data.lines);
          }
          if (data.budgets && typeof data.budgets === 'object') setBudgets(data.budgets);
          if (data.estimatedPpks && typeof data.estimatedPpks === 'object') setEstimatedPpks(data.estimatedPpks);
          if (data.defaultWeights && typeof data.defaultWeights === 'object') setDefaultWeights(data.defaultWeights);
          if (data.bidSteps && typeof data.bidSteps === 'object') setBidSteps(data.bidSteps);
          if (Number.isFinite(data.kgWarnBand) && data.kgWarnBand > 0) setKgWarnBand(data.kgWarnBand);
          if (Array.isArray(data.purchases)) setPurchases(data.purchases);
          if (Array.isArray(data.inspections)) setInspections(data.inspections);
          if (data.draft && typeof data.draft === 'object') setDraft({
            ...emptyDraft(),
            ...data.draft
          });
          if (typeof data.buyerEmail === 'string') setBuyerEmail(data.buyerEmail);
          if (typeof data.location === 'string' && data.location) setLocation(data.location);
        }
      } catch (e) {
        // first run, fine
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  // Load sessions from IndexedDB on mount (separate store from photos)
  useEffect(() => {
    (async () => {
      try {
        const list = await sessionGetAll();
        setSessions(list);
      } catch (e) {
        console.error('Failed to load sessions:', e);
      }
    })();
  }, []);

  // Save when state changes (debounced, includes draft for crash recovery)
  useEffect(() => {
    if (!loaded) return;
    const t = setTimeout(async () => {
      try {
        await window.storage.set(STORAGE_KEY, JSON.stringify({
          lines,
          budgets,
          estimatedPpks,
          defaultWeights,
          bidSteps,
          kgWarnBand,
          purchases,
          inspections,
          draft,
          buyerEmail,
          location
        }));
      } catch (e) {/* ignore */}
    }, 250);
    return () => clearTimeout(t);
  }, [lines, budgets, estimatedPpks, defaultWeights, bidSteps, kgWarnBand, purchases, inspections, draft, buyerEmail, location, loaded]);

  // Toast helpers, supports an optional UNDO button
  function showToast(message, undo) {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({
      message,
      undo
    });
    const dwell = undo ? 6000 : 2200;
    toastTimer.current = setTimeout(() => setToast(null), dwell);
  }
  function clearToast() {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast(null);
  }

  // ----- Bid entry handlers -----

  function pickLine(code) {
    setDraft(prev => {
      const next = {
        ...prev,
        lineCode: code
      };
      // Pre-fill default weight if set and weight field is empty
      if (!next.wtPerHead && defaultWeights[code]) {
        next.wtPerHead = String(defaultWeights[code]);
        // Recompute the dependent price if a price was already typed
        const wt = parseFloat(next.wtPerHead);
        if (Number.isFinite(wt) && wt > 0) {
          if (next.lastEditedPrice === 'pricePerKg' && next.pricePerKg !== '') {
            const pk = parseFloat(next.pricePerKg);
            if (Number.isFinite(pk)) next.pricePerHead = (pk * wt).toFixed(2);
          } else if (next.lastEditedPrice === 'pricePerHead' && next.pricePerHead !== '') {
            const ph = parseFloat(next.pricePerHead);
            if (Number.isFinite(ph)) next.pricePerKg = (ph / wt).toFixed(2);
          }
        }
      }
      return next;
    });
  }
  function updateField(field, value) {
    setDraft(prev => {
      const next = {
        ...prev,
        [field]: value
      };
      const wt = parseFloat(next.wtPerHead);
      const wtValid = Number.isFinite(wt) && wt > 0;
      if (field === 'pricePerKg') {
        next.lastEditedPrice = 'pricePerKg';
        if (value === '') next.pricePerHead = '';else if (wtValid) {
          const v = parseFloat(value);
          if (Number.isFinite(v)) next.pricePerHead = (v * wt).toFixed(2);
        }
      } else if (field === 'pricePerHead') {
        next.lastEditedPrice = 'pricePerHead';
        if (value === '') next.pricePerKg = '';else if (wtValid) {
          const v = parseFloat(value);
          if (Number.isFinite(v)) next.pricePerKg = (v / wt).toFixed(2);
        }
      } else if (field === 'wtPerHead') {
        const newWt = parseFloat(value);
        if (Number.isFinite(newWt) && newWt > 0) {
          if (next.lastEditedPrice === 'pricePerKg' && next.pricePerKg !== '') {
            const pk = parseFloat(next.pricePerKg);
            if (Number.isFinite(pk)) next.pricePerHead = (pk * newWt).toFixed(2);
          } else if (next.lastEditedPrice === 'pricePerHead' && next.pricePerHead !== '') {
            const ph = parseFloat(next.pricePerHead);
            if (Number.isFinite(ph)) next.pricePerKg = (ph / newWt).toFixed(2);
          }
        }
      }
      return next;
    });
  }

  // Step the price up or down, in $/kg or $/head
  function bumpPrice(which, dir) {
    setDraft(prev => {
      const next = {
        ...prev
      };
      const wt = parseFloat(next.wtPerHead);
      const wtValid = Number.isFinite(wt) && wt > 0;
      const kgStep = next.lineCode && Number.isFinite(bidSteps[next.lineCode]) ? bidSteps[next.lineCode] : DEFAULT_KG_STEP;
      if (which === 'kg') {
        const cur = parseFloat(next.pricePerKg);
        const start = Number.isFinite(cur) ? cur : 0;
        let n = round2(start + dir * kgStep);
        if (n < 0) n = 0;
        next.pricePerKg = n.toFixed(2);
        next.lastEditedPrice = 'pricePerKg';
        if (wtValid) next.pricePerHead = (n * wt).toFixed(2);
      } else {
        // $/head step is fixed at $1 (configurable later per line if needed)
        const headStep = DEFAULT_HEAD_STEP;
        const cur = parseFloat(next.pricePerHead);
        const start = Number.isFinite(cur) ? cur : 0;
        let n = round2(start + dir * headStep);
        if (n < 0) n = 0;
        next.pricePerHead = n.toFixed(2);
        next.lastEditedPrice = 'pricePerHead';
        if (wtValid) next.pricePerKg = (n / wt).toFixed(2);
      }
      return next;
    });
  }
  function sameAsLast() {
    if (purchases.length === 0) return;
    const last = purchases[0];
    setDraft(prev => ({
      ...emptyDraft(),
      lineCode: last.lineCode,
      penNumber: '',
      head: String(last.head),
      wtPerHead: String(last.wtPerHead),
      tagColour: last.tagColour || ''
    }));
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
  async function handleDraftPhotoFile(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    try {
      const blob = await compressImage(file, 1200, 0.7);
      if (draftPhotoUrl) {
        try {
          URL.revokeObjectURL(draftPhotoUrl);
        } catch (err) {}
      }
      setDraftPhotoBlob(blob);
      setDraftPhotoUrl(URL.createObjectURL(blob));
      setDraftPhotoStatus('new');
    } catch (err) {
      alert('Could not process photo: ' + (err && err.message ? err.message : 'unknown error'));
    } finally {
      if (draftPhotoFileRef.current) draftPhotoFileRef.current.value = '';
    }
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
    setDraftPhotoStatus(prev => prev === 'existing' ? 'removed' : 'none');
  }

  // Set $/head from a preset button, also recalculates $/kg when weight is known
  function setPresetPph(price) {
    setDraft(prev => {
      const next = {
        ...prev
      };
      next.pricePerHead = price.toFixed(2);
      next.lastEditedPrice = 'pricePerHead';
      const wt = parseFloat(next.wtPerHead);
      if (Number.isFinite(wt) && wt > 0) {
        next.pricePerKg = (price / wt).toFixed(2);
      }
      return next;
    });
  }

  // Computed for the current draft
  const dHead = parseInt(draft.head, 10);
  const dWt = parseFloat(draft.wtPerHead);
  const dPpk = parseFloat(draft.pricePerKg);
  const dPph = parseFloat(draft.pricePerHead);
  const dTotalKg = Number.isFinite(dHead) && Number.isFinite(dWt) ? dHead * dWt : 0;
  const dTotal = Number.isFinite(dHead) && Number.isFinite(dPph) ? dHead * dPph : 0;
  const dValid = !!draft.lineCode && dHead > 0 && dWt > 0 && dPpk > 0 && dPph > 0;

  // The inspection currently overriding the ceiling, if any (declared here so
  // insMaxPph below can see it; inspection-handler useEffects further down also
  // depend on this, so it is NOT re-declared in the handler section).
  const appliedInspection = useMemo(() => {
    if (!appliedInspectionId) return null;
    return inspections.find(i => i.id === appliedInspectionId) || null;
  }, [appliedInspectionId, inspections]);
  const lineBudget = draft.lineCode ? budgets[draft.lineCode] : undefined;
  // When an inspection is applied, the pen-specific max $/head replaces the line's $/kg ceiling
  const insMaxPph = appliedInspection ? appliedInspection.maxPph : null;
  const overBudget = insMaxPph != null ? Number.isFinite(dPph) && dPph > insMaxPph : !!lineBudget && Number.isFinite(dPpk) && dPpk > lineBudget;
  const headroom = insMaxPph != null ? Number.isFinite(dPph) && dPph > 0 ? insMaxPph - dPph : null : lineBudget && Number.isFinite(dPpk) && dPpk > 0 ? lineBudget - dPpk : null;

  // Traffic-light status for the live $/kg readout.
  // 'none' = no ceiling set or no live price yet; 'green' = well under; 'yellow' = within warn band; 'red' = at or over.
  const kgStatus = (() => {
    if (!lineBudget || !Number.isFinite(dPpk) || dPpk <= 0) return 'none';
    if (dPpk >= lineBudget) return 'red';
    if (dPpk >= lineBudget - kgWarnBand) return 'yellow';
    return 'green';
  })();

  // Preset prices for the selected line: estimate -10c, -5c, estimate, +5c, +10c
  const lineEstimate = draft.lineCode ? estimatedPpks[draft.lineCode] : undefined;
  // Derive $/head estimate from $/kg estimate × current weight (or default weight)
  const presetEstimatePph = useMemo(() => {
    const wt = Number.isFinite(dWt) && dWt > 0 ? dWt : draft.lineCode && defaultWeights[draft.lineCode] || null;
    if (!lineEstimate || !wt) return null;
    return round2(lineEstimate * wt);
  }, [lineEstimate, dWt, draft.lineCode, defaultWeights]);
  const presets = useMemo(() => {
    if (presetEstimatePph == null) return [];
    const offsets = [-DEFAULT_PRESET_HEAD_FAR, -DEFAULT_PRESET_HEAD_NEAR, 0, +DEFAULT_PRESET_HEAD_NEAR, +DEFAULT_PRESET_HEAD_FAR];
    return offsets.map(d => round2(Math.max(0, presetEstimatePph + d)));
  }, [presetEstimatePph]);

  // Today's running average $/kg for the selected line (bought only)
  const lineDayAvg = useMemo(() => {
    if (!draft.lineCode) return null;
    const matches = purchases.filter(p => p.lineCode === draft.lineCode && !p.watched);
    if (matches.length === 0) return null;
    const kg = matches.reduce((s, p) => s + p.totalKg, 0);
    const dol = matches.reduce((s, p) => s + p.total, 0);
    return kg > 0 ? dol / kg : null;
  }, [purchases, draft.lineCode]);
  async function commitEntry(asWatched) {
    if (!dValid) return;
    const id = editingId || Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

    // Resolve the photo for this entry
    let hasPhoto = false;
    if (draftPhotoStatus === 'new' && draftPhotoBlob) {
      try {
        await photoSet(id, draftPhotoBlob);
        hasPhoto = true;
      } catch (err) {
        alert('Could not save photo: ' + (err && err.message ? err.message : 'unknown error'));
        return; // bail so the user can retry without losing their bid input
      }
    } else if (draftPhotoStatus === 'existing') {
      hasPhoto = true; // already in IDB from edit load
    } else if (draftPhotoStatus === 'removed') {
      photoDelete(id).catch(() => {});
      hasPhoto = false;
    }
    const entry = {
      id,
      lineCode: draft.lineCode,
      penNumber: draft.penNumber.trim(),
      head: dHead,
      wtPerHead: dWt,
      pricePerKg: dPpk,
      pricePerHead: dPph,
      totalKg: dTotalKg,
      total: dTotal,
      watched: !!asWatched,
      hasPhoto,
      tagColour: draft.tagColour || '',
      timestamp: editingId ? purchases.find(p => p.id === editingId)?.timestamp || new Date().toISOString() : new Date().toISOString()
    };
    if (editingId) {
      const previous = purchases.find(p => p.id === editingId);
      setPurchases(prev => prev.map(p => p.id === editingId ? entry : p));
      setEditingId(null);
      setDraft(emptyDraft());
      clearDraftPhoto();
      showToast('Pen updated', {
        label: 'UNDO',
        run: () => {
          if (previous) setPurchases(prev => prev.map(p => p.id === editingId ? previous : p));
          clearToast();
        }
      });
    } else {
      setPurchases(prev => [entry, ...prev]);
      setDraft(emptyDraft());
      clearDraftPhoto();
      showToast(asWatched ? 'Watched pen logged' : 'Pen recorded', {
        label: 'UNDO',
        run: () => {
          setPurchases(prev => prev.filter(p => p.id !== entry.id));
          if (entry.hasPhoto) photoDelete(entry.id).catch(() => {});
          clearToast();
        }
      });
    }
  }
  async function startEdit(id) {
    const p = purchases.find(x => x.id === id);
    if (!p) return;
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
    if (p.hasPhoto) {
      try {
        const blob = await photoGet(id);
        if (blob) {
          setDraftPhotoUrl(URL.createObjectURL(blob));
          setDraftPhotoStatus('existing');
        }
      } catch (e) {/* ignore */}
    }
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
    clearDraftPhoto();
  }
  function deletePurchase(id) {
    const removed = purchases.find(p => p.id === id);
    if (!removed) return;
    setPurchases(prev => prev.filter(p => p.id !== id));
    if (editingId === id) cancelEdit();
    // Delete the photo from IDB
    if (removed.hasPhoto) photoDelete(id).catch(() => {});
    showToast('Pen deleted', {
      label: 'UNDO',
      run: () => {
        setPurchases(prev => {
          // Reinsert preserving order by timestamp (newest first)
          const next = [...prev, removed];
          next.sort((a, b) => (b.timestamp || '').localeCompare(a.timestamp || ''));
          return next;
        });
        // Note: photo can't be restored once deleted from IDB; this is a known limitation
        clearToast();
      }
    });
  }
  async function resetDay() {
    // Auto-save the current day as a session if there's anything to save
    if (purchases.length > 0 || inspections.length > 0) {
      const ok = await saveCurrentSession();
      if (!ok) {
        if (!window.confirm('Could not save the day to Sessions. Clear anyway?')) {
          return;
        }
      }
    }
    setPurchases([]);
    setInspections([]);
    setAppliedInspectionId(null);
    setEditingId(null);
    setEditingInspection(null);
    setDraft(emptyDraft());
    clearDraftPhoto();
    setShowResetConfirm(false);
    setView('buying');
    // Photos persist forever in IDB for session history; do not clear.
    showToast('Day saved & cleared');
  }

  // Build a session snapshot of the current day and persist it
  async function saveCurrentSession() {
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const session = {
      id: 'session-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 6),
      date: dateStr,
      location: (location || 'Saleyard').trim(),
      savedAt: now.toISOString(),
      purchases,
      inspections,
      // Snapshot the relevant settings so a re-rendered report stays accurate
      lines,
      budgets,
      estimatedPpks
    };
    try {
      await sessionPut(session);
      setSessions(prev => [session, ...prev]);
      return true;
    } catch (err) {
      console.error('Session save failed:', err);
      return false;
    }
  }
  async function deleteSession(id) {
    if (!window.confirm('Delete this session? Photos will be kept in storage.')) return;
    try {
      await sessionDelete(id);
      setSessions(prev => prev.filter(s => s.id !== id));
      showToast('Session deleted');
    } catch (err) {
      alert('Failed to delete session: ' + (err && err.message ? err.message : 'unknown error'));
    }
  }

  // Open a saved session in the report viewer
  async function viewSession(session) {
    showToast('Loading session…');
    // Load photos for this session's entries
    const photoUrls = {};
    for (const insp of session.inspections || []) {
      if (!insp.hasPhoto) continue;
      try {
        const blob = await photoGet(insp.id);
        if (blob) photoUrls[insp.id] = await blobToDataUrl(blob);
      } catch (e) {/* ignore */}
    }
    for (const p of session.purchases || []) {
      if (!p.hasPhoto) continue;
      try {
        const blob = await photoGet(p.id);
        if (blob) photoUrls[p.id] = await blobToDataUrl(blob);
      } catch (e) {/* ignore */}
    }
    const totalsForSession = computeTotals(session.purchases || []);
    const html = buildReportHtml({
      purchases: session.purchases || [],
      inspections: session.inspections || [],
      lines: session.lines || lines,
      totals: totalsForSession,
      budgets: session.budgets || budgets,
      estimatedPpks: session.estimatedPpks || estimatedPpks,
      photoUrls,
      sessionDate: session.date,
      sessionLocation: session.location
    });
    const blob = new Blob([html], {
      type: 'text/html;charset=utf-8'
    });
    const url = URL.createObjectURL(blob);
    if (reportBlobUrl) {
      try {
        URL.revokeObjectURL(reportBlobUrl);
      } catch (e) {}
    }
    setReportBlobUrl(url);
  }

  // ----- Inspection handlers -----

  function findInspectionByPenNumber(pn) {
    if (!pn) return null;
    const trimmed = String(pn).trim();
    if (!trimmed) return null;
    return inspections.find(i => i.penNumber.trim() === trimmed) || null;
  }
  function saveInspection(formData, photoBlob) {
    // formData: {id?, penNumber, lineCode, head, wtPerHead, maxPph, notes, hasPhoto}
    const isEdit = !!formData.id;
    const id = formData.id || Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    const existingEntry = isEdit ? inspections.find(i => i.id === id) : null;
    // hasPhoto: true if a new photo was supplied OR the form indicates a kept existing one
    const hasPhoto = !!photoBlob || !!formData.hasPhoto;
    const entry = {
      id,
      penNumber: (formData.penNumber || '').trim(),
      lineCode: formData.lineCode || '',
      head: formData.head ? parseInt(formData.head, 10) : null,
      wtPerHead: formData.wtPerHead ? parseFloat(formData.wtPerHead) : null,
      maxPph: formData.maxPph ? parseFloat(formData.maxPph) : null,
      notes: (formData.notes || '').trim(),
      tagColour: formData.tagColour || '',
      hasPhoto,
      timestamp: existingEntry ? existingEntry.timestamp : new Date().toISOString()
    };
    if (photoBlob) {
      photoSet(id, photoBlob).catch(err => {
        console.error('Photo save failed', err);
        alert('Could not save photo: ' + (err && err.message ? err.message : 'unknown error'));
      });
    } else if (isEdit && existingEntry && existingEntry.hasPhoto && !hasPhoto) {
      // User removed the existing photo
      photoDelete(id).catch(() => {});
    }
    setInspections(prev => {
      if (isEdit) return prev.map(i => i.id === id ? entry : i);
      return [entry, ...prev];
    });
    setEditingInspection(null);
    showToast(isEdit ? 'Inspection updated' : 'Inspection saved');
  }
  function deleteInspection(id) {
    if (!window.confirm('Delete this inspection?')) return;
    setInspections(prev => prev.filter(i => i.id !== id));
    if (appliedInspectionId === id) setAppliedInspectionId(null);
    photoDelete(id).catch(() => {});
    showToast('Inspection deleted');
  }
  function removeInspectionPhoto(id) {
    photoDelete(id).catch(() => {});
    setInspections(prev => prev.map(i => i.id === id ? {
      ...i,
      hasPhoto: false
    } : i));
  }

  // Apply an inspection's data to the current bid draft and lock the override
  function applyInspectionToDraft(inspection) {
    setDraft(prev => {
      const next = {
        ...prev,
        penNumber: inspection.penNumber,
        lineCode: inspection.lineCode || prev.lineCode,
        head: inspection.head != null ? String(inspection.head) : prev.head,
        wtPerHead: inspection.wtPerHead != null ? String(inspection.wtPerHead) : prev.wtPerHead,
        tagColour: inspection.tagColour || prev.tagColour || ''
      };
      // Populate prices from the inspection's max so the user has a starting price
      // they can step up or down from with the +/- buttons during the actual auction.
      if (inspection.maxPph != null) {
        next.pricePerHead = inspection.maxPph.toFixed(2);
        next.lastEditedPrice = 'pricePerHead';
        const wt = parseFloat(next.wtPerHead);
        if (Number.isFinite(wt) && wt > 0) {
          next.pricePerKg = (inspection.maxPph / wt).toFixed(2);
        }
      }
      return next;
    });
    setAppliedInspectionId(inspection.id);
  }

  // (appliedInspection useMemo was moved to the price-derivation area above,
  // because insMaxPph needs to reference it. Leaving a sentinel comment here
  // so the surrounding handlers stay easy to find.)

  // Inspection match for the current pen number (not yet applied)
  const penMatch = useMemo(() => {
    if (!draft.penNumber || !draft.penNumber.trim()) return null;
    const m = findInspectionByPenNumber(draft.penNumber);
    if (!m) return null;
    if (appliedInspectionId === m.id) return null; // already applied, no banner
    return m;
  }, [draft.penNumber, inspections, appliedInspectionId]);

  // Clear applied inspection if pen number no longer matches it
  useEffect(() => {
    if (!appliedInspection) return;
    if (draft.penNumber.trim() !== appliedInspection.penNumber.trim()) {
      setAppliedInspectionId(null);
    }
  }, [draft.penNumber, appliedInspection]);

  // Day totals (bought only). Watched are tracked but not part of spend.
  const totals = useMemo(() => {
    const bought = purchases.filter(p => !p.watched);
    const head = bought.reduce((s, p) => s + p.head, 0);
    const kg = bought.reduce((s, p) => s + p.totalKg, 0);
    const dollars = bought.reduce((s, p) => s + p.total, 0);
    return {
      pens: bought.length,
      watched: purchases.length - bought.length,
      head,
      kg,
      dollars,
      avgPpk: kg > 0 ? dollars / kg : 0,
      avgPph: head > 0 ? dollars / head : 0
    };
  }, [purchases]);

  // ----- Settings handlers -----

  function setBudgetFor(code, val) {
    setBudgets(prev => {
      const next = {
        ...prev
      };
      if (val === '' || val == null) delete next[code];else {
        const v = parseFloat(val);
        if (Number.isFinite(v) && v > 0) next[code] = v;
      }
      return next;
    });
  }
  function setEstimatedPpkFor(code, val) {
    setEstimatedPpks(prev => {
      const next = {
        ...prev
      };
      if (val === '' || val == null) delete next[code];else {
        const v = parseFloat(val);
        if (Number.isFinite(v) && v > 0) next[code] = v;
      }
      return next;
    });
  }
  function setDefaultWeightFor(code, val) {
    setDefaultWeights(prev => {
      const next = {
        ...prev
      };
      if (val === '' || val == null) delete next[code];else {
        const v = parseFloat(val);
        if (Number.isFinite(v) && v > 0) next[code] = v;
      }
      return next;
    });
  }
  function setBidStepFor(code, val) {
    setBidSteps(prev => {
      const next = {
        ...prev
      };
      if (val === '' || val == null) delete next[code];else {
        const v = parseFloat(val);
        if (Number.isFinite(v) && v > 0) next[code] = v;
      }
      return next;
    });
  }
  function addLineType(code, name, category) {
    const c = (code || '').toUpperCase().trim();
    const n = (name || '').trim();
    if (!c || !n) return;
    if (lines.some(l => l.code === c)) {
      alert(`Code "${c}" already exists.`);
      return;
    }
    setLines(prev => [...prev, {
      code: c,
      name: n,
      category
    }]);
  }
  function removeLineType(code) {
    if (!window.confirm(`Remove "${code}" from your line list? Existing purchases keep their label.`)) return;
    setLines(prev => prev.filter(l => l.code !== code));
    setBudgets(prev => {
      const n = {
        ...prev
      };
      delete n[code];
      return n;
    });
    setEstimatedPpks(prev => {
      const n = {
        ...prev
      };
      delete n[code];
      return n;
    });
    setDefaultWeights(prev => {
      const n = {
        ...prev
      };
      delete n[code];
      return n;
    });
    setBidSteps(prev => {
      const n = {
        ...prev
      };
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
    const today = new Date().toISOString().split('T')[0];
    const rows = purchases.map((p, i) => {
      const line = lines.find(l => l.code === p.lineCode);
      const tag = p.tagColour ? TAG_BY_CODE[p.tagColour] : null;
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
    const summary = [{
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
    const wb = XLSX.utils.book_new();
    const ws1 = XLSX.utils.json_to_sheet(rows.length ? rows : [{
      Note: 'No pens recorded'
    }]);
    XLSX.utils.book_append_sheet(wb, ws1, 'Pens');
    const ws2 = XLSX.utils.json_to_sheet(summary);
    XLSX.utils.book_append_sheet(wb, ws2, 'Summary');
    const arr = XLSX.write(wb, {
      type: 'array',
      bookType: 'xlsx'
    });
    const blob = new Blob([arr], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    const filename = `saleyard_${today}.xlsx`;
    return {
      blob,
      filename,
      today
    };
  }
  async function emailSummary() {
    if (purchases.length === 0) {
      alert('No pens recorded yet.');
      return;
    }
    const {
      blob,
      filename,
      today
    } = buildXlsx();
    const file = new File([blob], filename, {
      type: blob.type
    });
    const summaryText = `Saleyard summary for ${today}\n\n` + `Pens bought: ${totals.pens}` + (totals.watched ? ` · watched: ${totals.watched}` : '') + `\n` + `Total head: ${totals.head}\n` + `Total weight: ${fmt1(totals.kg)} kg\n` + `Total spent: $${fmt2(totals.dollars)} (GST free)\n` + `Average $/kg: $${fmt2(totals.avgPpk)}\n` + `Average $/head: $${fmt2(totals.avgPph)}`;
    if (navigator.canShare && navigator.canShare({
      files: [file]
    })) {
      try {
        await navigator.share({
          files: [file],
          title: `Saleyard ${today}`,
          text: summaryText
        });
        return;
      } catch (e) {/* fall through */}
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    if (buyerEmail) {
      const body = encodeURIComponent(summaryText + `\n\nSpreadsheet ${filename} downloaded to your device. Attach it from the Files app.`);
      const subject = encodeURIComponent(`Saleyard ${today}`);
      setTimeout(() => {
        window.location.href = `mailto:${buyerEmail}?subject=${subject}&body=${body}`;
      }, 200);
    } else {
      showToast('Spreadsheet downloaded. Set your email in Settings to also pre-fill an email.');
    }
  }

  // Generate a print-ready HTML report with all the day's pens (bought + watched + inspected),
  // open in a new tab. The user prints / saves as PDF from Safari's share sheet.
  async function openReport() {
    if (purchases.length === 0 && inspections.length === 0) {
      alert('Nothing to report yet. Record a pen or save an inspection first.');
      return;
    }
    showToast('Building report…');
    try {
      // Load all photos as data URLs for embedding (both inspection and purchase photos)
      const photoUrls = {};
      for (const insp of inspections) {
        if (!insp.hasPhoto) continue;
        try {
          const blob = await photoGet(insp.id);
          if (blob) photoUrls[insp.id] = await blobToDataUrl(blob);
        } catch (e) {/* ignore individual failures */}
      }
      for (const p of purchases) {
        if (!p.hasPhoto) continue;
        try {
          const blob = await photoGet(p.id);
          if (blob) photoUrls[p.id] = await blobToDataUrl(blob);
        } catch (e) {/* ignore individual failures */}
      }
      const html = buildReportHtml({
        purchases,
        inspections,
        lines,
        totals,
        budgets,
        estimatedPpks,
        photoUrls,
        sessionLocation: location
      });
      // Render inline in an iframe via a Blob URL. window.open is blocked in
      // iOS standalone PWA mode, and srcDoc chokes on large embedded photos.
      const blob = new Blob([html], {
        type: 'text/html;charset=utf-8'
      });
      const url = URL.createObjectURL(blob);
      // Revoke any previous report URL before assigning the new one
      if (reportBlobUrl) {
        try {
          URL.revokeObjectURL(reportBlobUrl);
        } catch (e) {}
      }
      setReportBlobUrl(url);
    } catch (err) {
      console.error('Report generation failed:', err);
      alert('Could not generate report: ' + (err && err.message ? err.message : 'unknown error'));
    }
  }
  function closeReport() {
    if (reportBlobUrl) {
      try {
        URL.revokeObjectURL(reportBlobUrl);
      } catch (e) {}
    }
    setReportBlobUrl(null);
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

  function LinePill({
    code,
    watched
  }) {
    const line = lines.find(l => l.code === code);
    const cat = line ? CAT[line.category] : CAT.mixed;
    return /*#__PURE__*/React.createElement("span", {
      className: "pill",
      style: {
        background: watched ? 'transparent' : cat.solid,
        color: watched ? T.textMute : cat.ink,
        border: watched ? `1.5px solid ${T.borderH}` : 'none'
      }
    }, code);
  }
  function LineButton({
    line,
    selected
  }) {
    // Breed drives the main colour; sex shows as a corner dot
    const b = breedStyle(line.breed);
    const sex = CAT[line.category] || CAT.mixed;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => pickLine(line.code),
      className: "arc",
      style: {
        position: 'relative',
        padding: '10px 6px',
        border: `2px solid ${b.solid}`,
        borderRadius: 7,
        background: selected ? b.solid : b.soft,
        color: selected ? b.ink : b.solid,
        fontWeight: 800,
        fontSize: 13,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        minHeight: 44,
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1
      },
      title: line.name
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        top: 4,
        right: 4,
        width: 8,
        height: 8,
        borderRadius: 999,
        background: sex.solid,
        boxShadow: selected ? '0 0 0 1.5px rgba(0,0,0,0.25)' : '0 0 0 1.5px rgba(255,255,255,0.08)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14
      }
    }, line.code), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 8,
        fontWeight: 600,
        opacity: 0.85,
        letterSpacing: '0.04em'
      }
    }, line.breed || line.name));
  }

  // The contextual line of text under the $/kg input. Combines:
  //  * today's running average for the line
  //  * budget headroom (or over-budget by how much)
  function priceContext() {
    const code = draft.lineCode;
    const parts = [];
    if (code) {
      if (lineDayAvg != null) {
        let delta = '';
        if (Number.isFinite(dPpk) && dPpk > 0) {
          const d = dPpk - lineDayAvg;
          if (Math.abs(d) >= 0.005) {
            const sign = d > 0 ? '+' : '−';
            delta = ` (${sign}$${fmt2(Math.abs(d))})`;
          } else {
            delta = ' (on avg)';
          }
        }
        parts.push({
          text: `${code} avg today $${fmt2(lineDayAvg)}${delta}`,
          color: T.textMute
        });
      } else {
        parts.push({
          text: `no ${code} bought yet today`,
          color: T.textMute
        });
      }
    }

    // When inspection applied, show pen-specific max $/head; else show line ceiling
    if (insMaxPph != null) {
      if (Number.isFinite(dPph) && dPph > 0) {
        if (headroom != null && headroom >= 0) {
          parts.push({
            text: `$${fmt2(headroom)}/hd under pen max $${fmt2(insMaxPph)}`,
            color: T.okTxt
          });
        } else if (headroom != null && headroom < 0) {
          parts.push({
            text: `over by $${fmt2(-headroom)}/hd (pen max $${fmt2(insMaxPph)})`,
            color: T.warnTxt
          });
        }
      } else {
        parts.push({
          text: `pen max $${fmt2(insMaxPph)}/hd`,
          color: T.textMute
        });
      }
    } else if (lineBudget) {
      if (Number.isFinite(dPpk) && dPpk > 0) {
        if (headroom != null && headroom >= 0) {
          parts.push({
            text: `$${fmt2(headroom)} under your $${fmt2(lineBudget)} ceiling`,
            color: T.okTxt
          });
        } else if (headroom != null && headroom < 0) {
          parts.push({
            text: `over by $${fmt2(-headroom)} (ceiling $${fmt2(lineBudget)})`,
            color: T.warnTxt
          });
        }
      } else {
        parts.push({
          text: `ceiling $${fmt2(lineBudget)}/kg`,
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
    }, parts.map((p, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        color: p.color
      }
    }, i > 0 ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: T.borderH
      }
    }, ' · ') : null, p.text)));
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
    }, "Loading…"));
  }
  const todayStr = new Date().toLocaleDateString('en-AU', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
  const sameAsLastDisabled = purchases.length === 0 || !!editingId;
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
      borderBottom: `1.5px solid ${T.borderS}`,
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
  }, location ? `${location} · ` : '', todayStr, " · GST free")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(ViewTab, {
    label: "INSPECT",
    active: view === 'inspection',
    onClick: () => setView('inspection')
  }), /*#__PURE__*/React.createElement(ViewTab, {
    label: "BIDDING",
    active: view === 'buying',
    onClick: () => setView('buying')
  }), /*#__PURE__*/React.createElement(ViewTab, {
    label: "RESULTS",
    active: view === 'results',
    onClick: () => setView('results')
  }), /*#__PURE__*/React.createElement(ViewTab, {
    label: "STATS",
    active: view === 'dashboard',
    onClick: () => setView('dashboard')
  }), /*#__PURE__*/React.createElement(ViewTab, {
    label: "SESSIONS",
    active: view === 'sessions',
    onClick: () => setView('sessions')
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
    onClick: () => setShowSettings(true),
    style: {
      padding: '10px 14px',
      fontSize: 13
    }
  }, "SETTINGS"), /*#__PURE__*/React.createElement("button", {
    className: "btn arc btn-ghost",
    onClick: () => setShowResetConfirm(true),
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
  }, /*#__PURE__*/React.createElement("style", null, `
          @media (min-width: 1024px) {
            .grid-2 { grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr); }
          }
        `), view === 'buying' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      flex: '0 0 auto',
      width: 68,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      maxHeight: '75vh',
      overflowY: 'auto',
      padding: 6,
      background: T.bgCard,
      border: `1px solid ${T.borderS}`,
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontSize: 8,
      fontWeight: 800,
      letterSpacing: '0.10em',
      color: T.textMute,
      textTransform: 'uppercase',
      textAlign: 'center',
      marginBottom: 2,
      lineHeight: 1.2
    }
  }, "Insp.", /*#__PURE__*/React.createElement("br", null), "Pens"), inspections.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontSize: 9,
      color: T.textMute,
      textAlign: 'center',
      padding: '8px 2px',
      lineHeight: 1.3
    }
  }, "No inspections yet") : [...inspections].sort((a, b) => {
    // Sort numerically where possible
    const na = parseInt(a.penNumber, 10);
    const nb = parseInt(b.penNumber, 10);
    if (!isNaN(na) && !isNaN(nb)) return na - nb;
    return String(a.penNumber).localeCompare(String(b.penNumber));
  }).map(insp => {
    const line = lines.find(l => l.code === insp.lineCode);
    const b = line ? breedStyle(line.breed) : breedStyle(null);
    const active = appliedInspectionId === insp.id;
    return /*#__PURE__*/React.createElement("button", {
      key: insp.id,
      type: "button",
      onClick: () => applyInspectionToDraft(insp),
      className: "arc",
      style: {
        padding: '8px 2px',
        borderRadius: 6,
        background: active ? T.accent : b.soft,
        color: active ? '#0D0D0F' : b.solid,
        border: `2px solid ${active ? T.accent : b.solid}`,
        fontWeight: 900,
        fontSize: 13,
        letterSpacing: '0.02em',
        cursor: 'pointer',
        minHeight: 40,
        lineHeight: 1,
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent'
      },
      title: `${insp.penNumber} · ${line ? line.code : ''} · max $${insp.maxPph != null ? insp.maxPph.toFixed(0) : '—'}/hd`
    }, insp.penNumber || '—');
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("section", {
    ref: draftRef,
    className: "card",
    style: {
      padding: 14
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
      border: `1.5px solid ${T.accent}`,
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
      border: `1px solid ${T.borderH}`,
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
    onClick: () => draftPhotoFileRef.current && draftPhotoFileRef.current.click()
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
    onClick: () => draftPhotoFileRef.current && draftPhotoFileRef.current.click()
  }, "📷  ADD PHOTO OF THIS PEN"), /*#__PURE__*/React.createElement("input", {
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
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl",
    style: {
      marginBottom: 4,
      fontSize: 10
    }
  }, "Line type"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(78px, 1fr))',
      gap: 6
    }
  }, lines.map(l => /*#__PURE__*/React.createElement(LineButton, {
    key: l.code,
    line: l,
    selected: draft.lineCode === l.code
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl",
    style: {
      marginBottom: 4,
      fontSize: 10
    }
  }, "Tag colour · birth year"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 6
    }
  }, TAGS.map(t => {
    const sel = draft.tagColour === t.code;
    return /*#__PURE__*/React.createElement("button", {
      key: t.code,
      type: "button",
      className: "arc",
      onClick: () => updateField('tagColour', sel ? '' : t.code),
      style: {
        padding: '8px 6px',
        background: sel ? t.fill : t.softFill,
        color: sel ? t.inkSel : t.inkUnsel,
        border: `2px solid ${sel ? t.edgeSel : t.edge}`,
        borderRadius: 7,
        fontWeight: 800,
        letterSpacing: '0.04em',
        cursor: 'pointer',
        minHeight: 44,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 900
      }
    }, t.year), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        opacity: 0.85,
        textTransform: 'uppercase'
      }
    }, t.label));
  }))), penMatch && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10,
      padding: '10px 12px',
      background: 'rgba(255,214,107,0.12)',
      border: `1.5px solid ${T.accent}`,
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
  }, "Inspection match · pen ", penMatch.penNumber), /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontSize: 12,
      marginTop: 2,
      color: T.textLbl
    }
  }, penMatch.lineCode ? penMatch.lineCode + ' · ' : '', penMatch.head != null ? `${penMatch.head} head · ` : '', penMatch.wtPerHead != null ? `${fmt1(penMatch.wtPerHead)} kg/hd · ` : '', penMatch.maxPph != null ? `max $${fmt2(penMatch.maxPph)}/hd` : 'no max set')), /*#__PURE__*/React.createElement("button", {
    className: "btn arc",
    style: {
      background: T.accent,
      color: '#0D0D0F',
      borderColor: T.accent,
      padding: '8px 14px',
      fontSize: 12
    },
    onClick: () => applyInspectionToDraft(penMatch)
  }, "APPLY")), appliedInspection && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10,
      padding: '6px 10px',
      background: 'transparent',
      border: `1px dashed ${T.accent}`,
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
  }, "INSPECTION APPLIED · pen max $", fmt2(appliedInspection.maxPph || 0), "/hd"), /*#__PURE__*/React.createElement("button", {
    className: "btn arc btn-ghost",
    style: {
      padding: '4px 8px',
      fontSize: 10,
      borderColor: T.accent,
      color: T.accent
    },
    onClick: () => setAppliedInspectionId(null)
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
    onChange: e => updateField('penNumber', e.target.value.slice(0, 8)),
    onFocus: e => e.target.select(),
    placeholder: "opt"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Head"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "numeric",
    pattern: "[0-9]*",
    className: "field",
    value: draft.head,
    onChange: e => updateField('head', e.target.value.replace(/[^0-9]/g, '')),
    onFocus: e => e.target.select(),
    placeholder: "0"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Est. kg per head"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "decimal",
    className: "field",
    value: draft.wtPerHead,
    onChange: e => updateField('wtPerHead', e.target.value.replace(/[^0-9.]/g, '')),
    onFocus: e => e.target.select(),
    placeholder: "0.0"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "$ per head ", /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: 'none',
      letterSpacing: 0,
      color: T.textMute,
      fontSize: 10
    }
  }, "(bidding unit)")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "decimal",
    className: `field ${overBudget ? 'over' : ''}`,
    style: {
      flex: 1,
      fontSize: 22,
      fontWeight: 800
    },
    value: draft.pricePerHead,
    onChange: e => updateField('pricePerHead', e.target.value.replace(/[^0-9.]/g, '')),
    onFocus: e => e.target.select(),
    placeholder: "0.00"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn-step arc",
    type: "button",
    onClick: () => bumpPrice('head', -1),
    "aria-label": "decrease price per head"
  }, "−$1"), /*#__PURE__*/React.createElement("button", {
    className: "btn-step arc",
    type: "button",
    onClick: () => bumpPrice('head', +1),
    "aria-label": "increase price per head"
  }, "+$1")), presets.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 6,
      marginTop: 8
    }
  }, presets.map((price, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    className: `btn-preset arc ${i === 2 ? 'target' : ''}`,
    onClick: () => setPresetPph(price)
  }, "$", price.toFixed(2))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "$ per kg ", /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: 'none',
      letterSpacing: 0,
      color: T.textMute,
      fontSize: 10
    }
  }, "(live, calculated)")), (() => {
    const bg = kgStatus === 'red' ? 'rgba(248,113,113,0.14)' : kgStatus === 'yellow' ? 'rgba(255,214,107,0.14)' : kgStatus === 'green' ? 'rgba(134,239,172,0.12)' : T.bgInset;
    const border = kgStatus === 'red' ? T.warnBdr : kgStatus === 'yellow' ? T.accent : kgStatus === 'green' ? T.okTxt : T.borderH;
    const ink = kgStatus === 'red' ? T.warnTxt : kgStatus === 'yellow' ? T.accent : kgStatus === 'green' ? T.okTxt : T.text;
    const hasPrice = Number.isFinite(dPpk) && dPpk > 0;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        padding: '10px 14px',
        background: bg,
        border: `1.5px solid ${border}`,
        borderRadius: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 24,
        fontWeight: 800,
        color: ink
      }
    }, "$", hasPrice ? fmt2(dPpk) : '—.—', /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: T.textMute,
        marginLeft: 6,
        fontWeight: 600
      }
    }, "/kg")), /*#__PURE__*/React.createElement("div", {
      className: "arc",
      style: {
        fontSize: 10,
        letterSpacing: '0.08em',
        textAlign: 'right',
        color: T.textMute,
        textTransform: 'uppercase'
      }
    }, lineBudget ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, "Ceiling $", fmt2(lineBudget), "/kg"), hasPrice && (kgStatus === 'red' ? /*#__PURE__*/React.createElement("div", {
      style: {
        color: T.warnTxt,
        fontWeight: 800
      }
    }, "Over by $", fmt2(dPpk - lineBudget)) : kgStatus === 'yellow' ? /*#__PURE__*/React.createElement("div", {
      style: {
        color: T.accent,
        fontWeight: 800
      }
    }, "Within $", fmt2(kgWarnBand)) : kgStatus === 'green' ? /*#__PURE__*/React.createElement("div", {
      style: {
        color: T.okTxt,
        fontWeight: 800
      }
    }, "$", fmt2(lineBudget - dPpk), " under") : null)) : /*#__PURE__*/React.createElement("div", null, "No ceiling set")));
  })(), priceContext()), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      marginBottom: 14,
      padding: 14,
      background: T.bgInset,
      border: `1.5px dashed ${T.borderH}`,
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
      border: `1.5px solid ${T.warnBdr}`,
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
  }, insMaxPph != null ? `OVER PEN MAX of $${fmt2(insMaxPph)}/hd (inspection)` : `OVER BUDGET, your ceiling for ${draft.lineCode} is $${fmt2(lineBudget)}/kg`)), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary arc",
    style: {
      width: '100%',
      fontSize: 15,
      padding: '14px 14px'
    },
    disabled: !dValid,
    onClick: () => commitEntry(false)
  }, editingId ? 'SAVE CHANGES' : 'RECORD PURCHASE'), !editingId && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost arc",
    style: {
      width: '100%',
      fontSize: 11,
      padding: '10px 14px',
      marginTop: 6
    },
    disabled: !dValid,
    onClick: () => commitEntry(true)
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
  }, "Today’s pens · ", totals.pens, totals.watched > 0 && /*#__PURE__*/React.createElement("span", {
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
      border: `1.5px dashed ${T.borderH}`,
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
  }, purchases.map(p => {
    const line = lines.find(l => l.code === p.lineCode);
    const dim = p.watched;
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        border: `1.5px solid ${dim ? T.borderS : T.borderH}`,
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
        border: `1px solid ${T.borderH}`
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
      title: `${TAG_BY_CODE[p.tagColour].label} tag · ${TAG_BY_CODE[p.tagColour].year}`,
      style: {
        fontSize: 10,
        letterSpacing: '0.06em',
        padding: '2px 8px',
        borderRadius: 999,
        background: TAG_BY_CODE[p.tagColour].fill,
        color: TAG_BY_CODE[p.tagColour].inkSel,
        border: `1px solid ${TAG_BY_CODE[p.tagColour].edge}`,
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
    }, "📷")), /*#__PURE__*/React.createElement("div", {
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
      onClick: () => startEdit(p.id)
    }, "EDIT"), /*#__PURE__*/React.createElement("button", {
      className: "btn arc",
      style: {
        padding: '6px 10px',
        fontSize: 11,
        background: 'transparent',
        color: T.warnBdr,
        borderColor: T.warnBdr
      },
      onClick: () => deletePurchase(p.id)
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
        borderTop: `1px dashed ${T.borderS}`,
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
  }))), /*#__PURE__*/React.createElement(CrateLoadBar, {
    purchases: purchases
  }))), view === 'dashboard' && /*#__PURE__*/React.createElement(Dashboard, {
    purchases: purchases,
    lines: lines,
    totals: totals,
    budgets: budgets,
    estimatedPpks: estimatedPpks
  }), view === 'inspection' && /*#__PURE__*/React.createElement(InspectionView, {
    inspections: inspections,
    lines: lines,
    onAdd: () => setEditingInspection('new'),
    onEdit: id => setEditingInspection({
      id
    }),
    onDelete: deleteInspection,
    onJumpToBidding: insp => {
      setView('buying');
      applyInspectionToDraft(insp);
    }
  }), view === 'results' && /*#__PURE__*/React.createElement(ResultsView, {
    purchases: purchases,
    inspections: inspections,
    lines: lines,
    totals: totals,
    location: location
  }), view === 'sessions' && /*#__PURE__*/React.createElement(SessionsView, {
    sessions: sessions,
    onView: viewSession,
    onDelete: deleteSession
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
      borderTop: `1.5px solid ${T.borderS}`,
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
    value: `$${fmt0(totals.dollars)}`,
    accent: true
  }), /*#__PURE__*/React.createElement(Totals, {
    label: "Avg $/kg",
    value: `$${fmt2(totals.avgPpk)}`,
    accent: true
  }), /*#__PURE__*/React.createElement(Totals, {
    label: "Avg $/hd",
    value: `$${fmt2(totals.avgPph)}`,
    accent: true
  }))), toast && /*#__PURE__*/React.createElement("div", {
    className: "toast"
  }, /*#__PURE__*/React.createElement("span", null, toast.message), toast.undo && /*#__PURE__*/React.createElement("button", {
    onClick: toast.undo.run
  }, toast.undo.label)), editingInspection && /*#__PURE__*/React.createElement(InspectionModal, {
    mode: editingInspection === 'new' ? 'new' : 'edit',
    existing: editingInspection !== 'new' ? inspections.find(i => i.id === editingInspection.id) : null,
    lines: lines,
    onSave: saveInspection,
    onClose: () => setEditingInspection(null)
  }), reportBlobUrl && /*#__PURE__*/React.createElement("div", {
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
      border: `2px solid ${T.accent}`,
      padding: '8px 16px',
      borderRadius: 6,
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, "Print / Save PDF"), /*#__PURE__*/React.createElement("button", {
    onClick: closeReport,
    className: "arc",
    style: {
      background: 'transparent',
      color: '#fafafa',
      border: `2px solid #fafafa`,
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
    src: reportBlobUrl,
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
    location: location,
    kgWarnBand: kgWarnBand,
    onSetBudget: setBudgetFor,
    onSetEstimatedPpk: setEstimatedPpkFor,
    onSetDefaultWeight: setDefaultWeightFor,
    onSetBidStep: setBidStepFor,
    onSetEmail: setBuyerEmail,
    onSetLocation: setLocation,
    onSetKgWarnBand: setKgWarnBand,
    onAddLine: addLineType,
    onRemoveLine: removeLineType,
    onResetLines: resetLines,
    onClose: () => setShowSettings(false)
  }), showResetConfirm && /*#__PURE__*/React.createElement("div", {
    className: "modal-bg",
    onClick: () => setShowResetConfirm(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      padding: 20
    },
    onClick: e => e.stopPropagation()
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
  }, totals.pens || totals.watched || inspections.length ? /*#__PURE__*/React.createElement(React.Fragment, null, "The current day (", totals.pens, " bought", totals.watched ? `, ${totals.watched} watched` : '', inspections.length ? `, ${inspections.length} inspection${inspections.length === 1 ? '' : 's'}` : '', ") will be auto-saved to ", /*#__PURE__*/React.createElement("strong", null, "Sessions"), " as ", /*#__PURE__*/React.createElement("em", null, (location || 'Saleyard').trim(), " · ", new Date().toLocaleDateString('en-AU', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })), ", then cleared from the live view. Photos are retained.") : /*#__PURE__*/React.createElement(React.Fragment, null, "The live view will be cleared. Nothing to save (no pens or inspections recorded).")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      background: 'rgba(255,214,107,0.10)',
      border: `1px solid ${T.accent}`,
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
  }, "You can also email the spreadsheet or save a PDF report first if you want a copy off this device.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn arc btn-ghost",
    onClick: () => setShowResetConfirm(false)
  }, "CANCEL"), /*#__PURE__*/React.createElement("button", {
    className: "btn arc",
    style: {
      background: T.text,
      color: '#0D0D0F',
      borderColor: T.text
    },
    onClick: () => {
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
    onClick: () => {
      setShowResetConfirm(false);
      openReport();
    }
  }, "REPORT FIRST"), /*#__PURE__*/React.createElement("button", {
    className: "btn arc btn-warn",
    onClick: resetDay
  }, "SAVE & CLEAR")))), /*#__PURE__*/React.createElement("div", {
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

function Totals({
  label,
  value,
  accent
}) {
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
function SettingsModal({
  lines,
  budgets,
  estimatedPpks,
  defaultWeights,
  bidSteps,
  buyerEmail,
  location,
  kgWarnBand,
  onSetBudget,
  onSetEstimatedPpk,
  onSetDefaultWeight,
  onSetBidStep,
  onSetEmail,
  onSetLocation,
  onSetKgWarnBand,
  onAddLine,
  onRemoveLine,
  onResetLines,
  onClose
}) {
  const [newCode, setNewCode] = useState('');
  const [newName, setNewName] = useState('');
  const [newCat, setNewCat] = useState('male');
  const [emailInput, setEmailInput] = useState(buyerEmail || '');
  const [locationInput, setLocationInput] = useState(location || '');
  const [bandInput, setBandInput] = useState(kgWarnBand != null ? String(kgWarnBand.toFixed(2)) : '0.20');
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
    onClick: e => e.stopPropagation()
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
  }, "Saleyard location (used for session naming and reports)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "field",
    style: {
      fontSize: 16,
      fontFamily: 'system-ui'
    },
    value: locationInput,
    onChange: e => setLocationInput(e.target.value),
    placeholder: "e.g. Muchea"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary arc",
    style: {
      padding: '10px 14px',
      fontSize: 13
    },
    onClick: () => onSetLocation(locationInput.trim())
  }, "SAVE"))), /*#__PURE__*/React.createElement("div", {
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
    onChange: e => setEmailInput(e.target.value),
    placeholder: "you@example.com.au"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary arc",
    style: {
      padding: '10px 14px',
      fontSize: 13
    },
    onClick: () => onSetEmail(emailInput.trim())
  }, "SAVE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "$/kg warning band (yellow zone before red)"), /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontSize: 11,
      color: T.textMute,
      marginBottom: 8,
      letterSpacing: '0.04em'
    }
  }, "The $/kg readout turns green well under your line ceiling, yellow when you're within this many dollars per kilo of it, and red at or over the ceiling. Default is $0.20/kg."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 14,
      color: T.textMute
    }
  }, "$"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "decimal",
    className: "field",
    style: {
      flex: 1,
      fontSize: 16
    },
    value: bandInput,
    onChange: e => setBandInput(e.target.value.replace(/[^0-9.]/g, '')),
    placeholder: "0.20"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 13,
      color: T.textMute
    }
  }, "/kg"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary arc",
    style: {
      padding: '10px 14px',
      fontSize: 13
    },
    onClick: () => {
      const v = parseFloat(bandInput);
      if (Number.isFinite(v) && v > 0) onSetKgWarnBand(round2(v));
    }
  }, "SAVE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Lines · ceiling · estimate · default kg · step"), /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontSize: 11,
      color: T.textMute,
      marginBottom: 8,
      letterSpacing: '0.04em'
    }
  }, "Bidding is in $/head. The 5 quick-tap presets under $/head come from Estimated $/kg × weight (estimate ± $1, ± $5). Default kg pre-fills the weight when you tap a line. Ceiling $/kg drives the traffic-light colour on the live $/kg readout."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, lines.map(l => {
    const cat = CAT[l.category];
    return /*#__PURE__*/React.createElement("div", {
      key: l.code,
      style: {
        border: `1.5px solid ${T.borderH}`,
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
      onClick: () => onRemoveLine(l.code)
    }, "×")), /*#__PURE__*/React.createElement("div", {
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
      onChange: v => onSetEstimatedPpk(l.code, v),
      placeholder: "for presets"
    }), /*#__PURE__*/React.createElement(SmallInput, {
      label: "Ceiling $/kg",
      prefix: "$",
      decimal2: true,
      value: budgets[l.code] != null ? String(budgets[l.code]) : '',
      onChange: v => onSetBudget(l.code, v),
      placeholder: "not set"
    }), /*#__PURE__*/React.createElement(SmallInput, {
      label: "Default kg",
      suffix: "kg",
      value: defaultWeights[l.code] != null ? String(defaultWeights[l.code]) : '',
      onChange: v => onSetDefaultWeight(l.code, v),
      placeholder: "not set"
    }), /*#__PURE__*/React.createElement(SmallInput, {
      label: "Step $/kg",
      prefix: "$",
      value: bidSteps[l.code] != null ? String(bidSteps[l.code]) : '',
      onChange: v => onSetBidStep(l.code, v),
      placeholder: `${DEFAULT_KG_STEP.toFixed(2)} default`
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1.5px dashed ${T.borderS}`,
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
    onChange: e => setNewCode(e.target.value.toUpperCase().slice(0, 4)),
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
    onChange: e => setNewName(e.target.value),
    placeholder: "Full name"
  }), /*#__PURE__*/React.createElement("select", {
    className: "field",
    style: {
      padding: 10,
      fontSize: 14,
      fontFamily: 'system-ui'
    },
    value: newCat,
    onChange: e => setNewCat(e.target.value)
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
      borderTop: `1px solid ${T.borderS}`
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
  }, "Replaces all lines with the current default set (Merino, Merino X, Dorper, Damara, Goat × ram/ewe/wether). Per-line ceilings, estimates, default weights and steps are kept where the code matches; old codes that no longer exist are hidden but their data is retained in case you re-add them later."), /*#__PURE__*/React.createElement("button", {
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
function SmallInput({
  label,
  value,
  onChange,
  prefix,
  suffix,
  placeholder,
  decimal2
}) {
  const [focused, setFocused] = useState(false);
  // When decimal2 and not focused, format the displayed value to 2 decimal places
  // so 5.5 shows as "5.50". Free-text editing while focused.
  const numericValue = parseFloat(value);
  const display = decimal2 && !focused && value !== '' && Number.isFinite(numericValue) ? numericValue.toFixed(2) : value;
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
    onChange: e => onChange(e.target.value.replace(/[^0-9.]/g, '')),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
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
  const exp = Math.floor(Math.log10(value));
  const mantissa = value / Math.pow(10, exp);
  let nice;
  if (mantissa <= 1) nice = 1;else if (mantissa <= 2) nice = 2;else if (mantissa <= 5) nice = 5;else nice = 10;
  return nice * Math.pow(10, exp);
}
function Dashboard({
  purchases,
  lines,
  totals,
  budgets,
  estimatedPpks
}) {
  const bought = useMemo(() => purchases.filter(p => !p.watched), [purchases]);
  const watchedCount = purchases.length - bought.length;

  // Per-line aggregates, sorted by total spend descending
  const byLine = useMemo(() => {
    const map = {};
    for (const p of bought) {
      if (!map[p.lineCode]) {
        const line = lines.find(l => l.code === p.lineCode);
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
    }
    return Object.values(map).map(l => ({
      ...l,
      avgPpk: l.kg > 0 ? l.total / l.kg : 0
    })).sort((a, b) => b.total - a.total);
  }, [bought, lines]);

  // Cumulative spend points, sorted in time
  const cumPoints = useMemo(() => {
    if (bought.length === 0) return [];
    const sorted = [...bought].sort((a, b) => (a.timestamp || '').localeCompare(b.timestamp || ''));
    let cum = 0;
    const start = {
      time: new Date(sorted[0].timestamp || Date.now()),
      cum: 0
    };
    return [start, ...sorted.map(p => {
      cum += p.total;
      return {
        time: new Date(p.timestamp || Date.now()),
        cum,
        line: p.lineCode
      };
    })];
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
function SectionTitle({
  children
}) {
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
function DashStatTiles({
  totals,
  watchedCount
}) {
  const tiles = [{
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
    value: `$${fmt0(totals.dollars)}`,
    accent: true
  }, {
    label: 'Avg $/kg',
    value: `$${fmt2(totals.avgPpk)}`,
    accent: true
  }, {
    label: 'Avg $/hd',
    value: `$${fmt2(totals.avgPph)}`,
    accent: true
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "card",
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, null, "Today at a glance", watchedCount > 0 ? ` · ${watchedCount} watched` : ''), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: 10
    }
  }, tiles.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.label,
    style: {
      background: T.bgInset,
      border: `1.5px solid ${T.borderS}`,
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
  }, t.value)))));
}
function DashByLine({
  items,
  ceilings,
  estimates
}) {
  if (items.length === 0) return null;
  const maxTotal = Math.max(...items.map(i => i.total));
  const maxAvg = Math.max(...items.map(i => i.avgPpk));
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
  }, items.map(item => {
    const cat = CAT[item.category];
    const totalPct = item.total / maxTotal * 100;
    const ceiling = ceilings[item.code];
    const estimate = estimates[item.code];
    const avgPct = maxAvg > 0 ? item.avgPpk / maxAvg * 100 : 0;
    // Ceiling/estimate markers are positioned on the avg-$/kg bar, scaled to maxAvg
    const ceilingPct = ceiling && maxAvg > 0 ? Math.min(100, ceiling / maxAvg * 100) : null;
    const estimatePct = estimate && maxAvg > 0 ? Math.min(100, estimate / maxAvg * 100) : null;
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
        border: `1.5px solid ${T.borderS}`,
        borderRadius: 6,
        overflow: 'hidden',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${totalPct}%`,
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
    }, /*#__PURE__*/React.createElement("span", null, item.pens, " pen", item.pens === 1 ? '' : 's', " · ", fmtInt(item.head), " head · ", fmt1(item.kg), " kg"), /*#__PURE__*/React.createElement("span", {
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
    }, " · ceiling $", fmt2(ceiling)) : null, estimate ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: T.textMute,
        fontWeight: 600
      }
    }, " · est $", fmt2(estimate)) : null)), maxAvg > 0 && /*#__PURE__*/React.createElement("div", {
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
        width: `${avgPct}%`,
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
        left: `calc(${ceilingPct}% - 1px)`,
        background: T.warnBdr
      },
      title: `Ceiling $${fmt2(ceiling)}`
    }), estimatePct != null && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: -3,
        height: 10,
        width: 2,
        left: `calc(${estimatePct}% - 1px)`,
        background: T.accent
      },
      title: `Estimate $${fmt2(estimate)}`
    })));
  })), /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      marginTop: 14,
      paddingTop: 10,
      borderTop: `1px dashed ${T.borderS}`,
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
function DashCumulative({
  points
}) {
  // SVG dimensions; viewBox scales with container width
  const W = 600,
    H = 240;
  const PAD = {
    t: 16,
    r: 14,
    b: 30,
    l: 60
  };
  const innerW = W - PAD.l - PAD.r;
  const innerH = H - PAD.t - PAD.b;
  const startMs = points[0].time.getTime();
  const endMs = points[points.length - 1].time.getTime();
  const range = Math.max(60000, endMs - startMs); // at least 1 minute
  const rawMax = points[points.length - 1].cum;
  const yMax = niceMax(rawMax);
  const xCoord = t => PAD.l + (t.getTime() - startMs) / range * innerW;
  const yCoord = v => PAD.t + innerH - v / yMax * innerH;
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${xCoord(p.time).toFixed(2)} ${yCoord(p.cum).toFixed(2)}`).join(' ');

  // Build a closed area below the line for fill
  const areaD = pathD + ` L ${xCoord(points[points.length - 1].time).toFixed(2)} ${(PAD.t + innerH).toFixed(2)}` + ` L ${xCoord(points[0].time).toFixed(2)} ${(PAD.t + innerH).toFixed(2)} Z`;

  // Y ticks at 0, 25%, 50%, 75%, 100% of yMax
  const yTicks = [0, 0.25, 0.5, 0.75, 1].map(f => f * yMax);

  // X ticks: start, midpoint, end
  const midMs = startMs + (endMs - startMs) / 2;
  const xTicks = [{
    time: new Date(startMs),
    anchor: 'start'
  }, {
    time: new Date(midMs),
    anchor: 'middle'
  }, {
    time: new Date(endMs),
    anchor: 'end'
  }];
  const formatTime = d => d.toLocaleTimeString('en-AU', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "card",
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, null, "Cumulative spend through the day"), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    },
    preserveAspectRatio: "none"
  }, yTicks.map((v, i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: PAD.l,
    x2: W - PAD.r,
    y1: yCoord(v),
    y2: yCoord(v),
    stroke: T.borderS,
    strokeWidth: "1",
    strokeDasharray: i === 0 ? '0' : '2 4'
  })), yTicks.map((v, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: PAD.l - 8,
    y: yCoord(v) + 4,
    fontSize: "11",
    fontFamily: "JetBrains Mono",
    fill: T.textMute,
    textAnchor: "end"
  }, "$", fmt0(v))), xTicks.map((t, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: xCoord(t.time),
    y: H - 8,
    fontSize: "11",
    fontFamily: "JetBrains Mono",
    fill: T.textMute,
    textAnchor: t.anchor
  }, formatTime(t.time))), /*#__PURE__*/React.createElement("path", {
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
  }), points.map((p, i) => i > 0 && /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: xCoord(p.time),
    cy: yCoord(p.cum),
    r: "3.5",
    fill: T.accent,
    stroke: T.bgCard,
    strokeWidth: "2"
  }))));
}

// ----- View tab pill -----

function ViewTab({
  label,
  active,
  onClick
}) {
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

function InspectionView({
  inspections,
  lines,
  onAdd,
  onEdit,
  onDelete,
  onJumpToBidding
}) {
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
  }, inspections.map(insp => /*#__PURE__*/React.createElement(InspectionCard, {
    key: insp.id,
    inspection: insp,
    lines: lines,
    onEdit: () => onEdit(insp.id),
    onDelete: () => onDelete(insp.id),
    onJumpToBidding: () => onJumpToBidding(insp)
  }))));
}
function InspectionCard({
  inspection,
  lines,
  onEdit,
  onDelete,
  onJumpToBidding
}) {
  const line = lines.find(l => l.code === inspection.lineCode);
  const cat = line ? CAT[line.category] : CAT.mixed;
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
    title: `${TAG_BY_CODE[inspection.tagColour].label} tag · ${TAG_BY_CODE[inspection.tagColour].year}`,
    style: {
      background: TAG_BY_CODE[inspection.tagColour].fill,
      color: TAG_BY_CODE[inspection.tagColour].inkSel,
      border: `1px solid ${TAG_BY_CODE[inspection.tagColour].edge}`
    }
  }, TAG_BY_CODE[inspection.tagColour].year)), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 13,
      color: T.textLbl,
      marginBottom: 6
    }
  }, inspection.head != null ? `${inspection.head} head` : '—', inspection.wtPerHead != null ? ` · ${fmt1(inspection.wtPerHead)} kg/hd` : ''), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: T.accent,
      marginBottom: 8
    }
  }, inspection.maxPph != null ? `max $${fmt2(inspection.maxPph)}/hd` : 'no max set'), inspection.notes && /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontSize: 12,
      color: T.textLbl,
      marginBottom: 10,
      fontStyle: 'italic',
      flex: 1
    }
  }, "“", inspection.notes, "”"), /*#__PURE__*/React.createElement("div", {
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
function InspectionPhoto({
  inspectionId,
  style
}) {
  const [url, setUrl] = useState(null);
  useEffect(() => {
    let active = true;
    let createdUrl = null;
    photoGet(inspectionId).then(blob => {
      if (!active || !blob) return;
      createdUrl = URL.createObjectURL(blob);
      setUrl(createdUrl);
    }).catch(() => {});
    return () => {
      active = false;
      if (createdUrl) URL.revokeObjectURL(createdUrl);
    };
  }, [inspectionId]);
  if (!url) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: T.textMute,
        fontSize: 11
      }
    }, "loading…");
  }
  return /*#__PURE__*/React.createElement("img", {
    src: url,
    alt: "",
    style: style
  });
}

// ----- Inspection: add/edit modal -----

function InspectionModal({
  mode,
  existing,
  lines,
  onSave,
  onClose
}) {
  const [form, setForm] = useState(() => {
    const base = existing ? {
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
    const wt = parseFloat(base.wtPerHead);
    const ph = parseFloat(base.maxPph);
    const maxPpk = Number.isFinite(wt) && wt > 0 && Number.isFinite(ph) ? (ph / wt).toFixed(2) : '';
    return {
      ...base,
      maxPpk,
      lastEditedPrice: Number.isFinite(ph) ? 'maxPph' : null
    };
  });
  const [photoBlob, setPhotoBlob] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [hasExistingPhoto, setHasExistingPhoto] = useState(existing ? !!existing.hasPhoto : false);
  const [busy, setBusy] = useState(false);
  const fileRef = useRef(null);

  // Load existing photo if there is one (for the preview)
  useEffect(() => {
    if (!existing || !existing.hasPhoto) return;
    let active = true;
    let createdUrl = null;
    photoGet(existing.id).then(blob => {
      if (!active || !blob) return;
      createdUrl = URL.createObjectURL(blob);
      setPhotoUrl(createdUrl);
    }).catch(() => {});
    return () => {
      active = false;
      if (createdUrl) URL.revokeObjectURL(createdUrl);
    };
  }, [existing]);

  // Revoke preview URL for newly-captured photos when the component unmounts
  useEffect(() => () => {
    if (photoUrl && photoBlob) URL.revokeObjectURL(photoUrl);
  }, [photoUrl, photoBlob]);

  // Bidirectional linker between maxPph, maxPpk, and wtPerHead.
  function update(field, value) {
    setForm(prev => {
      const next = {
        ...prev,
        [field]: value
      };
      const wt = parseFloat(next.wtPerHead);
      const wtValid = Number.isFinite(wt) && wt > 0;
      if (field === 'maxPph') {
        next.lastEditedPrice = 'maxPph';
        if (value === '') next.maxPpk = '';else if (wtValid) {
          const v = parseFloat(value);
          if (Number.isFinite(v)) next.maxPpk = (v / wt).toFixed(2);
        }
      } else if (field === 'maxPpk') {
        next.lastEditedPrice = 'maxPpk';
        if (value === '') next.maxPph = '';else if (wtValid) {
          const v = parseFloat(value);
          if (Number.isFinite(v)) next.maxPph = (v * wt).toFixed(2);
        }
      } else if (field === 'wtPerHead') {
        const newWt = parseFloat(value);
        if (Number.isFinite(newWt) && newWt > 0) {
          if (next.lastEditedPrice === 'maxPph' && next.maxPph !== '') {
            const ph = parseFloat(next.maxPph);
            if (Number.isFinite(ph)) next.maxPpk = (ph / newWt).toFixed(2);
          } else if (next.lastEditedPrice === 'maxPpk' && next.maxPpk !== '') {
            const pk = parseFloat(next.maxPpk);
            if (Number.isFinite(pk)) next.maxPph = (pk * newWt).toFixed(2);
          }
        }
      }
      return next;
    });
  }
  async function handlePhoto(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    setBusy(true);
    try {
      const blob = await compressImage(file, 1200, 0.7);
      if (photoUrl && photoBlob) URL.revokeObjectURL(photoUrl);
      setPhotoBlob(blob);
      setPhotoUrl(URL.createObjectURL(blob));
      setHasExistingPhoto(true);
    } catch (err) {
      alert('Could not process photo: ' + (err && err.message ? err.message : 'unknown error'));
    } finally {
      setBusy(false);
      if (fileRef.current) fileRef.current.value = '';
    }
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
    onSave({
      ...form,
      hasPhoto: hasExistingPhoto
    }, photoBlob);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-bg",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      padding: 20
    },
    onClick: e => e.stopPropagation()
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
      border: `1.5px solid ${T.borderH}`,
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
    onClick: () => fileRef.current && fileRef.current.click(),
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
    onClick: () => fileRef.current && fileRef.current.click(),
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
    onChange: e => update('penNumber', e.target.value.slice(0, 8)),
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
  }, lines.map(l => {
    const cat = CAT[l.category];
    const sel = form.lineCode === l.code;
    return /*#__PURE__*/React.createElement("button", {
      key: l.code,
      type: "button",
      className: "arc",
      onClick: () => update('lineCode', sel ? '' : l.code),
      style: {
        padding: '10px 6px',
        border: `2px solid ${cat.solid}`,
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
  }, "Tag colour · birth year"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 6
    }
  }, TAGS.map(t => {
    const sel = form.tagColour === t.code;
    return /*#__PURE__*/React.createElement("button", {
      key: t.code,
      type: "button",
      className: "arc",
      onClick: () => update('tagColour', sel ? '' : t.code),
      style: {
        padding: '10px 6px',
        background: sel ? t.fill : t.softFill,
        color: sel ? t.inkSel : t.inkUnsel,
        border: `2px solid ${sel ? t.edgeSel : t.edge}`,
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
    onChange: e => update('head', e.target.value.replace(/[^0-9]/g, '')),
    placeholder: "0"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Est. kg per head"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "decimal",
    className: "field",
    value: form.wtPerHead,
    onChange: e => update('wtPerHead', e.target.value.replace(/[^0-9.]/g, '')),
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
    onChange: e => update('maxPph', e.target.value.replace(/[^0-9.]/g, '')),
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
    onChange: e => update('maxPpk', e.target.value.replace(/[^0-9.]/g, '')),
    placeholder: "0.00"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lbl"
  }, "Notes"), /*#__PURE__*/React.createElement("textarea", {
    value: form.notes,
    onChange: e => update('notes', e.target.value),
    placeholder: "condition, breed type, observations…",
    rows: 3,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: 12,
      border: `1.5px solid ${T.borderH}`,
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

function buildReportHtml({
  purchases,
  inspections,
  lines,
  totals,
  budgets,
  estimatedPpks,
  photoUrls,
  sessionDate,
  sessionLocation
}) {
  // Use the session's saved date if rendering a past session; otherwise today
  const reportDate = sessionDate ? new Date(sessionDate + 'T00:00:00') : new Date();
  const today = reportDate.toLocaleDateString('en-AU', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  const dateShort = sessionDate || new Date().toISOString().split('T')[0];
  const headerLocation = sessionLocation || '';

  // Combine inspections and purchases keyed by pen number where possible
  // so each pen card shows both pre-sale view and the result.
  const cards = [];
  const usedPurchaseIds = new Set();
  for (const insp of inspections) {
    const matchingPurchase = purchases.find(p => p.penNumber && insp.penNumber && p.penNumber.trim() === insp.penNumber.trim());
    cards.push({
      inspection: insp,
      purchase: matchingPurchase
    });
    if (matchingPurchase) usedPurchaseIds.add(matchingPurchase.id);
  }
  // Purchases with no matching inspection
  for (const p of purchases) {
    if (!usedPurchaseIds.has(p.id)) {
      cards.push({
        inspection: null,
        purchase: p
      });
    }
  }

  // Sort: bought first by line/time, then watched, then inspections-only
  cards.sort((a, b) => {
    const score = c => {
      if (c.purchase && !c.purchase.watched) return 0;
      if (c.purchase && c.purchase.watched) return 1;
      return 2;
    };
    return score(a) - score(b);
  });
  const lineNameOf = code => {
    const l = lines.find(x => x.code === code);
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
  const bought = purchases.filter(p => !p.watched);
  const watched = purchases.filter(p => p.watched);

  // Summary table rows
  const summaryRows = [['Pens bought', String(bought.length)], ['Pens watched', String(watched.length)], ['Pens inspected (total)', String(inspections.length)], ['Total head', String(totals.head)], ['Total weight', fmt1(totals.kg) + ' kg'], ['Total spent', '$' + fmt2(totals.dollars) + ' (GST free)'], ['Average $/kg', '$' + fmt2(totals.avgPpk)], ['Average $/hd', '$' + fmt2(totals.avgPph)]];
  const css = `
    @page { size: A4; margin: 12mm; }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif; color: #0d0d0d; background: #f7f3ea; }
    h1, h2, h3, h4 { margin: 0; font-weight: 800; letter-spacing: -0.01em; }
    .container { max-width: 900px; margin: 0 auto; padding: 24px 16px 80px; }
    .header { padding-bottom: 12px; border-bottom: 2px solid #0d0d0d; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: end; gap: 16px; flex-wrap: wrap; }
    .header h1 { font-size: 24px; letter-spacing: 0.04em; text-transform: uppercase; }
    .header .date { font-size: 14px; color: #555; }
    .summary { background: #fff; border: 1px solid #1a1a1a; border-radius: 8px; padding: 14px 16px; margin-bottom: 20px; }
    .summary h2 { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #555; margin-bottom: 10px; }
    .summary table { width: 100%; border-collapse: collapse; font-size: 14px; }
    .summary td { padding: 4px 0; }
    .summary td:first-child { color: #555; width: 40%; }
    .summary td:last-child  { font-weight: 700; text-align: right; font-variant-numeric: tabular-nums; }
    .controls { background: #0d0d0d; color: #fafafa; padding: 12px; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 16px; }
    .controls button { background: #fafafa; color: #0d0d0d; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 800; cursor: pointer; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; }
    .pen-card { background: #fff; border: 1px solid #1a1a1a; border-radius: 8px; padding: 14px; margin-bottom: 14px; page-break-inside: avoid; }
    .pen-card .top { display: flex; gap: 14px; align-items: flex-start; margin-bottom: 10px; flex-wrap: wrap; }
    .pen-card img { width: 240px; height: 180px; object-fit: cover; border-radius: 6px; flex-shrink: 0; background: #eee; }
    .pen-card .info { flex: 1; min-width: 240px; }
    .pen-card .pen-no { font-size: 22px; font-weight: 900; letter-spacing: 0.04em; }
    .pen-card .line-name { font-size: 13px; color: #555; margin-bottom: 6px; }
    .pen-card .badge { display: inline-block; padding: 3px 10px; border-radius: 999px; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: middle; margin-left: 6px; }
    .badge-bought   { background: #14532d; color: #fff; }
    .badge-watched  { background: #555;    color: #fff; }
    .badge-no-result{ background: #d4d4d4; color: #333; }
    .tag-badge { display: inline-block; padding: 3px 10px; border-radius: 999px; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: middle; margin-left: 6px; }
    .pen-card .data-table { width: 100%; border-collapse: collapse; font-size: 13px; margin-top: 8px; font-variant-numeric: tabular-nums; }
    .pen-card .data-table td { padding: 4px 8px; border: 1px solid #ddd; }
    .pen-card .data-table td:first-child { color: #555; width: 35%; background: #f9f7f0; }
    .pen-card .notes { margin-top: 8px; font-style: italic; color: #444; font-size: 13px; padding: 8px 10px; background: #f9f7f0; border-left: 3px solid #1a1a1a; }
    .section-title { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #555; margin: 24px 0 8px; }
    @media print {
      body { background: #fff; }
      .controls { display: none; }
      .pen-card { box-shadow: none; }
    }
  `;
  function renderCard({
    inspection,
    purchase
  }) {
    const penNo = inspection ? inspection.penNumber : purchase ? purchase.penNumber : '';
    const code = inspection ? inspection.lineCode : purchase ? purchase.lineCode : '';
    const name = lineNameOf(code);
    // Prefer the purchase's own photo (taken at the rail) over the inspection photo (pre-sale)
    let photoUrl = null;
    if (purchase && photoUrls[purchase.id]) photoUrl = photoUrls[purchase.id];else if (inspection && photoUrls[inspection.id]) photoUrl = photoUrls[inspection.id];
    let badge = '<span class="badge badge-no-result">Inspected only</span>';
    if (purchase && !purchase.watched) badge = '<span class="badge badge-bought">Bought</span>';else if (purchase && purchase.watched) badge = '<span class="badge badge-watched">Watched</span>';

    // Use purchase tag if recorded, else inspection tag
    const tagCode = purchase && purchase.tagColour || inspection && inspection.tagColour || '';
    const tag = tagCode ? TAG_BY_CODE[tagCode] : null;
    const tagBadge = tag ? `<span class="tag-badge" style="background:${tag.fill};color:${tag.inkSel};border:1px solid ${tag.edge};">${tag.label} ${tag.year}</span>` : '';
    const rows = [];
    if (tag) rows.push(['Tag colour', `${tag.label} (born ${tag.year})`]);
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
        const diff = purchase.pricePerHead - inspection.maxPph;
        rows.push(['vs your max', (diff > 0 ? '+' : '') + '$' + fmt2(diff) + '/hd  ' + (diff > 0 ? '(over your max)' : diff < 0 ? '(under your max)' : '(on your max)')]);
      }
    }
    const rowsHtml = rows.map(([k, v]) => `<tr><td>${escapeHtml(k)}</td><td>${escapeHtml(v)}</td></tr>`).join('');
    const notesHtml = inspection && inspection.notes ? `<div class="notes">${escapeHtml(inspection.notes)}</div>` : '';
    return `
      <div class="pen-card">
        <div class="top">
          ${photoUrl ? `<img src="${photoUrl}" alt="pen ${escapeHtml(penNo)}" />` : ''}
          <div class="info">
            <div class="pen-no">PEN ${escapeHtml(penNo || '—')}${badge}${tagBadge}</div>
            <div class="line-name">${escapeHtml(name || '')}</div>
            <table class="data-table"><tbody>${rowsHtml}</tbody></table>
          </div>
        </div>
        ${notesHtml}
      </div>
    `;
  }
  const cardsHtml = cards.map(renderCard).join('');
  const summaryRowsHtml = summaryRows.map(([k, v]) => `<tr><td>${escapeHtml(k)}</td><td>${escapeHtml(v)}</td></tr>`).join('');
  return `<!DOCTYPE html>
<html lang="en-AU">
<head>
  <meta charset="utf-8" />
  <title>Saleyard report ${dateShort}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>${css}</style>
</head>
<body>
  <div class="container">
    <div class="controls">
      <span style="font-weight:700;letter-spacing:0.06em;text-transform:uppercase;font-size:12px;">
        Tap PRINT to save this report as a PDF (use Safari's share sheet → Save to Files)
      </span>
      <button onclick="window.print()">PRINT</button>
    </div>
    <div class="header">
      <h1>Saleyard report</h1>
      <div class="date">${headerLocation ? escapeHtml(headerLocation) + ' · ' : ''}${escapeHtml(today)} · prepared by Patrick Coole</div>
    </div>
    <div class="summary">
      <h2>Day at a glance</h2>
      <table><tbody>${summaryRowsHtml}</tbody></table>
    </div>
    <div class="section-title">Pens (${cards.length})</div>
    ${cardsHtml || '<p style="color:#555;">No pens to display.</p>'}
  </div>
</body>
</html>`;
}

// ----- Sessions: list view (browse-only) -----

function SessionsView({
  sessions,
  onView,
  onDelete
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("section", {
    className: "card",
    style: {
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontWeight: 900,
      fontSize: 16,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, "Past sessions"), /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.06em',
      color: T.textMute,
      marginTop: 2
    }
  }, sessions.length, " session", sessions.length === 1 ? '' : 's', " saved · sessions are stored on this iPad only")), sessions.length === 0 ? /*#__PURE__*/React.createElement("section", {
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
  }, "No sessions saved yet"), /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      marginTop: 8,
      fontSize: 12,
      color: T.textMute
    }
  }, "Each time you tap NEW DAY → SAVE & CLEAR, the current day is saved here for later review.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, sessions.map(s => /*#__PURE__*/React.createElement(SessionCard, {
    key: s.id,
    session: s,
    onView: () => onView(s),
    onDelete: () => onDelete(s.id)
  }))));
}
function SessionCard({
  session,
  onView,
  onDelete
}) {
  const totals = useMemo(() => computeTotals(session.purchases || []), [session]);
  const dateLabel = useMemo(() => {
    if (!session.date) return '';
    const d = new Date(session.date + 'T00:00:00');
    return d.toLocaleDateString('en-AU', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  }, [session.date]);
  return /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontWeight: 900,
      fontSize: 16,
      letterSpacing: '0.04em',
      textTransform: 'uppercase'
    }
  }, session.location || 'Saleyard'), /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.06em',
      color: T.textMute,
      marginTop: 2
    }
  }, dateLabel), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
      gap: 8,
      fontSize: 13,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl",
    style: {
      marginBottom: 2
    }
  }, "Bought"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, totals.pens)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl",
    style: {
      marginBottom: 2
    }
  }, "Watched"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, totals.watched)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl",
    style: {
      marginBottom: 2
    }
  }, "Inspections"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, (session.inspections || []).length)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl",
    style: {
      marginBottom: 2
    }
  }, "Head"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, totals.head)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl",
    style: {
      marginBottom: 2
    }
  }, "Spent"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: T.accent
    }
  }, "$", fmt2(totals.dollars))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl",
    style: {
      marginBottom: 2
    }
  }, "Avg $/kg"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, "$", fmt2(totals.avgPpk))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn arc btn-primary",
    style: {
      padding: '10px 14px',
      fontSize: 12
    },
    onClick: onView
  }, "VIEW REPORT"), /*#__PURE__*/React.createElement("button", {
    className: "btn arc",
    style: {
      padding: '10px 12px',
      fontSize: 12,
      background: 'transparent',
      color: T.warnBdr,
      borderColor: T.warnBdr
    },
    onClick: onDelete
  }, "DEL"))));
}

// ----- Results: today's purchases, tile view with photos and actual sale data -----

function ResultsView({
  purchases,
  inspections,
  lines,
  totals,
  location
}) {
  // Separate bought from watched. Both are shown but bought first.
  const sorted = useMemo(() => {
    const bought = purchases.filter(p => !p.watched);
    const watched = purchases.filter(p => p.watched);
    return [...bought, ...watched];
  }, [purchases]);

  // Build a lookup from pen number to inspection, so each purchase can
  // pull description/photo fallback from its matching pre-sale inspection.
  const insByPen = useMemo(() => {
    const m = {};
    for (const i of inspections) {
      const k = (i.penNumber || '').trim();
      if (k) m[k] = i;
    }
    return m;
  }, [inspections]);
  const headerDate = new Date().toLocaleDateString('en-AU', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("section", {
    className: "card",
    style: {
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontWeight: 900,
      fontSize: 16,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, "Today's results"), /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.06em',
      color: T.textMute,
      marginTop: 2
    }
  }, location ? location + ' · ' : '', headerDate), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
      gap: 8,
      fontSize: 13,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl",
    style: {
      marginBottom: 2
    }
  }, "Bought"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, totals.pens)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl",
    style: {
      marginBottom: 2
    }
  }, "Watched"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, totals.watched)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl",
    style: {
      marginBottom: 2
    }
  }, "Head"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, totals.head)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl",
    style: {
      marginBottom: 2
    }
  }, "Weight"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, fmt1(totals.kg), " kg")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl",
    style: {
      marginBottom: 2
    }
  }, "Spent"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: T.accent
    }
  }, "$", fmt2(totals.dollars))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl",
    style: {
      marginBottom: 2
    }
  }, "Avg $/kg"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, "$", fmt2(totals.avgPpk))))), sorted.length === 0 ? /*#__PURE__*/React.createElement("section", {
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
  }, "No pens recorded yet"), /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      marginTop: 8,
      fontSize: 12,
      color: T.textMute
    }
  }, "Record or watch a pen from the BIDDING tab and it will appear here.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: 12
    }
  }, sorted.map(p => /*#__PURE__*/React.createElement(ResultCard, {
    key: p.id,
    purchase: p,
    inspection: p.penNumber ? insByPen[p.penNumber.trim()] : null,
    lines: lines
  }))));
}
function ResultCard({
  purchase,
  inspection,
  lines
}) {
  const line = lines.find(l => l.code === purchase.lineCode);
  const cat = line ? CAT[line.category] : CAT.mixed;
  // Tag colour: prefer the one captured on the purchase, else fall back to the inspection
  const tagCode = purchase.tagColour || inspection && inspection.tagColour || '';
  const tag = tagCode ? TAG_BY_CODE[tagCode] : null;
  // Photo id: purchase photo first (actual rail photo), inspection photo second (pre-sale)
  const photoId = purchase.hasPhoto ? purchase.id : inspection && inspection.hasPhoto ? inspection.id : null;
  const isWatched = !!purchase.watched;
  // Variance from the inspection's max, if any
  const vsMax = inspection && Number.isFinite(inspection.maxPph) && Number.isFinite(purchase.pricePerHead) ? purchase.pricePerHead - inspection.maxPph : null;
  return /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, photoId ? /*#__PURE__*/React.createElement(InspectionPhoto, {
    inspectionId: photoId,
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
      marginBottom: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "arc",
    style: {
      fontWeight: 900,
      fontSize: 14,
      letterSpacing: '0.04em'
    }
  }, "PEN ", purchase.penNumber || '—'), line && /*#__PURE__*/React.createElement("span", {
    className: "pill",
    style: {
      background: cat.solid,
      color: cat.ink
    }
  }, line.code), tag && /*#__PURE__*/React.createElement("span", {
    className: "pill",
    title: `${tag.label} tag · ${tag.year}`,
    style: {
      background: tag.fill,
      color: tag.inkSel,
      border: `1px solid ${tag.edge}`
    }
  }, tag.year), /*#__PURE__*/React.createElement("span", {
    className: "pill",
    style: {
      background: isWatched ? 'transparent' : T.okTxt,
      color: isWatched ? T.textMute : '#0D0D0F',
      border: isWatched ? `1px solid ${T.borderH}` : 'none'
    }
  }, isWatched ? 'WATCHED' : 'BOUGHT')), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 13,
      color: T.textLbl,
      marginBottom: 10
    }
  }, purchase.head, " head · ", fmt1(purchase.wtPerHead), " kg/hd · ", fmt1(purchase.totalKg), " kg total"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8,
      marginBottom: 10,
      padding: 10,
      background: T.bgInset,
      border: `1px solid ${T.borderS}`,
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl",
    style: {
      marginBottom: 2
    }
  }, "Sale $/head"), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 18,
      fontWeight: 800,
      color: T.accent
    }
  }, "$", fmt2(purchase.pricePerHead))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl",
    style: {
      marginBottom: 2
    }
  }, "Sale $/kg"), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 18,
      fontWeight: 800
    }
  }, "$", fmt2(purchase.pricePerKg))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      borderTop: `1px solid ${T.borderS}`,
      paddingTop: 8,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lbl",
    style: {
      marginBottom: 2
    }
  }, isWatched ? 'Sold for (pen total)' : 'Pen total'), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 20,
      fontWeight: 900
    }
  }, "$", fmt2(purchase.total)))), vsMax != null && /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontSize: 11,
      letterSpacing: '0.04em',
      color: vsMax > 0 ? T.warnTxt : vsMax < 0 ? T.okTxt : T.textMute,
      marginBottom: 8,
      fontWeight: 700
    }
  }, vsMax > 0 ? `$${fmt2(vsMax)}/hd over your inspection max ($${fmt2(inspection.maxPph)})` : vsMax < 0 ? `$${fmt2(-vsMax)}/hd under your inspection max ($${fmt2(inspection.maxPph)})` : `on your inspection max ($${fmt2(inspection.maxPph)})`), inspection && inspection.notes && /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontSize: 12,
      color: T.textLbl,
      fontStyle: 'italic',
      paddingTop: 8,
      borderTop: `1px solid ${T.borderS}`
    }
  }, "“", inspection.notes, "”")));
}

// ----- Crate Load Bar -----
// Shows 8 standard SBS crates (16 pens total) filling up as purchases are
// recorded. Allocation is computed from the ASEL minimum pen area for the
// average weight of all purchased head, applied against the 6.293 m² pen floor.

function CrateLoadBar({
  purchases
}) {
  // Only count BOUGHT animals (not watched)
  const bought = purchases.filter(p => !p.watched);
  const totals = useMemo(() => {
    const head = bought.reduce((s, p) => s + (p.head || 0), 0);
    const kg = bought.reduce((s, p) => s + (p.totalKg || 0), 0);
    const avgWt = head > 0 ? kg / head : 0;
    return {
      head,
      kg,
      avgWt
    };
  }, [bought]);

  // Max head per pen based on the live avg weight
  const asel = aselAreaPerHead(totals.avgWt, ASEL_SHEEP);
  const maxPerPen = asel && asel > 0 ? Math.floor(CRATE_PEN_AREA_M2 / asel) : 0;
  const totalPens = CRATE_COUNT * CRATE_PENS_PER_CRATE;

  // Allocate purchased head to pens in insertion order, filling each to maxPerPen
  const pens = Array.from({
    length: totalPens
  }, () => 0);
  let remaining = totals.head;
  let idx = 0;
  while (remaining > 0 && idx < totalPens && maxPerPen > 0) {
    const take = Math.min(remaining, maxPerPen);
    pens[idx] += take;
    remaining -= take;
    idx++;
  }
  const overflow = remaining; // head that didn't fit in any crate
  const fullPens = pens.filter(n => n >= maxPerPen && maxPerPen > 0).length;
  const totalCapacity = totalPens * maxPerPen;

  // Group pens into crates (pairs of 2: top + bottom)
  const crates = [];
  for (let c = 0; c < CRATE_COUNT; c++) {
    crates.push([pens[c * 2], pens[c * 2 + 1]]);
  }
  return /*#__PURE__*/React.createElement("section", {
    className: "card",
    style: {
      padding: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 8,
      marginBottom: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: '0.10em',
      textTransform: 'uppercase',
      color: T.text
    }
  }, "Crate load · sheep"), /*#__PURE__*/React.createElement("div", {
    className: "arc mono",
    style: {
      fontSize: 10,
      color: T.textMute,
      letterSpacing: '0.04em'
    }
  }, totals.avgWt > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, "avg ", fmt1(totals.avgWt), " kg/hd · ASEL ", asel ? asel.toFixed(3) : '—', " m²/hd · max ", maxPerPen, "/pen · ", fullPens, "/", totalPens, " pens full", overflow > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: T.warnTxt,
      fontWeight: 800
    }
  }, " · +", overflow, " over capacity") : null) : /*#__PURE__*/React.createElement(React.Fragment, null, "No purchases yet · 8 crates × 2 pens"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${CRATE_COUNT}, minmax(0, 1fr))`,
      gap: 4
    }
  }, crates.map((crate, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "arc",
    style: {
      fontSize: 8,
      color: T.textMute,
      textAlign: 'center',
      letterSpacing: '0.06em',
      fontWeight: 700,
      textTransform: 'uppercase',
      marginBottom: 1
    }
  }, "C", ci + 1), crate.map((pen, pi) => {
    const isFull = maxPerPen > 0 && pen >= maxPerPen;
    const isEmpty = pen === 0;
    const bg = isFull ? 'rgba(134,239,172,0.22)' : isEmpty ? T.bgInset : 'rgba(255,214,107,0.15)';
    const bdr = isFull ? T.okTxt : isEmpty ? T.borderS : T.accent;
    const ink = isFull ? T.okTxt : isEmpty ? T.textMute : T.accent;
    return /*#__PURE__*/React.createElement("div", {
      key: pi,
      style: {
        aspectRatio: '1.2 / 1',
        background: bg,
        border: `1.5px solid ${bdr}`,
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: ink,
        fontWeight: 900,
        fontFamily: "'JetBrains Mono', ui-monospace, monospace",
        fontVariantNumeric: 'tabular-nums',
        fontSize: 11,
        lineHeight: 1
      }
    }, maxPerPen === 0 ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 8,
        opacity: 0.6
      }
    }, "-") : isEmpty ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        opacity: 0.5
      }
    }, "0/", maxPerPen) : isFull ? /*#__PURE__*/React.createElement("span", null, pen) : /*#__PURE__*/React.createElement("span", null, pen, /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.55
      }
    }, "/", maxPerPen)));
  })))));
}

// Mount
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
