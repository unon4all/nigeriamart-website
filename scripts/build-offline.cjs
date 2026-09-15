const fs = require('fs');
const path = require('path');
const Module = require('module');
const { execSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const globalRoot = execSync('npm root -g', { encoding: 'utf8' }).trim();
const ts = require(path.join(globalRoot, 'typescript', 'lib', 'typescript.js'));
const tailwind = require(path.join(globalRoot, 'tailwindcss', 'dist', 'lib.js'));

const FRAGMENT = Symbol('fragment');
const motionOnly = new Set([
  'initial', 'animate', 'exit', 'transition', 'whileInView', 'viewport', 'whileHover',
  'whileTap', 'variants', 'layout', 'layoutId', 'drag', 'dragConstraints',
]);

function jsx(type, props = {}, key) {
  return { type, key, props: props || {} };
}
function jsxs(type, props = {}, key) { return jsx(type, props, key); }
function createElement(type, props, ...children) {
  return jsx(type, { ...(props || {}), ...(children.length ? { children: children.length === 1 ? children[0] : children } : {}) });
}

const ReactMock = {
  createElement,
  Fragment: FRAGMENT,
  StrictMode: FRAGMENT,
  useState(initial) { return [typeof initial === 'function' ? initial() : initial, () => {}]; },
  useEffect() {},
  useMemo(factory) { return factory(); },
  useRef(initial) { return { current: initial }; },
};

function stripMotionProps(props = {}) {
  const clean = {};
  for (const [key, value] of Object.entries(props)) {
    if (motionOnly.has(key)) continue;
    clean[key] = value;
  }
  return clean;
}

const motion = new Proxy({}, {
  get(_target, tag) {
    return function MotionElement(props) {
      return jsx(tag, stripMotionProps(props));
    };
  },
});

function AnimatePresence({ children }) { return jsx(FRAGMENT, { children }); }

const FramerMock = {
  motion,
  AnimatePresence,
  useReducedMotion: () => true,
  useMotionValue: (value) => ({ value, set(next) { this.value = next; } }),
  useSpring: (value) => value,
  useTransform: () => 0,
};

function Icon(props = {}) {
  const { size = 18, strokeWidth = 1.8, children: _children, ...rest } = props;
  return jsx('svg', {
    ...rest,
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': rest['aria-label'] ? undefined : 'true',
    children: [
      jsx('circle', { cx: 12, cy: 12, r: 8 }),
      jsx('path', { d: 'M8 12h8M12 8v8' }),
    ],
  });
}
const LucideMock = new Proxy({ LucideIcon: Icon }, { get: (_t, prop) => prop === '__esModule' ? true : Icon });

const jsxRuntime = { jsx, jsxs, Fragment: FRAGMENT };
const originalLoad = Module._load;
Module._load = function(request, parent, isMain) {
  if (request === 'react') return ReactMock;
  if (request === 'react/jsx-runtime') return jsxRuntime;
  if (request === 'react-dom/client') return { createRoot: () => ({ render() {} }) };
  if (request === 'framer-motion') return FramerMock;
  if (request === 'lucide-react') return LucideMock;
  return originalLoad.call(this, request, parent, isMain);
};

function compileTS(mod, filename) {
  const source = fs.readFileSync(filename, 'utf8');
  const result = ts.transpileModule(source, {
    compilerOptions: {
      target: ts.ScriptTarget.ES2020,
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
      allowSyntheticDefaultImports: true,
    },
    fileName: filename,
  });
  mod._compile(result.outputText, filename);
}
require.extensions['.ts'] = compileTS;
require.extensions['.tsx'] = compileTS;
require.extensions['.css'] = (mod) => { mod.exports = {}; };
require.extensions['.png'] = (mod, filename) => { mod.exports = `/nigeriamart-website/assets/${path.basename(filename)}`; };

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}
function kebab(name) { return name.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`); }
function styleString(style) {
  if (!style || typeof style !== 'object') return '';
  return Object.entries(style)
    .filter(([, value]) => ['string', 'number'].includes(typeof value))
    .map(([key, value]) => `${kebab(key)}:${typeof value === 'number' && value !== 0 && !['opacity','zIndex','flex','fontWeight'].includes(key) ? `${value}px` : value}`)
    .join(';');
}
const voidTags = new Set(['img','input','meta','link','br','hr','source','area','base','col','embed','param','track','wbr']);

function render(node) {
  if (node === null || node === undefined || node === false || node === true) return '';
  if (typeof node === 'string' || typeof node === 'number') return escapeHtml(node);
  if (Array.isArray(node)) return node.map(render).join('');
  if (node.type === FRAGMENT) return render(node.props?.children);
  if (typeof node.type === 'function') return render(node.type(node.props || {}));
  if (typeof node.type !== 'string') return '';

  const props = node.props || {};
  let attrs = '';
  for (const [rawKey, value] of Object.entries(props)) {
    if (rawKey === 'children' || rawKey === 'dangerouslySetInnerHTML' || rawKey === 'key' || rawKey === 'ref') continue;
    if (rawKey.startsWith('on') || motionOnly.has(rawKey)) continue;
    if (value === undefined || value === null || value === false || typeof value === 'function' || typeof value === 'object' && rawKey !== 'style') continue;
    let key = rawKey === 'className' ? 'class' : rawKey === 'htmlFor' ? 'for' : kebab(rawKey);
    if (rawKey === 'style') {
      const serialized = styleString(value);
      if (serialized) attrs += ` style="${escapeHtml(serialized)}"`;
      continue;
    }
    if (value === true) attrs += ` ${key}`;
    else attrs += ` ${key}="${escapeHtml(value)}"`;
  }
  if (voidTags.has(node.type)) return `<${node.type}${attrs}>`;
  const inner = props.dangerouslySetInnerHTML?.__html ?? render(props.children);
  return `<${node.type}${attrs}>${inner}</${node.type}>`;
}

async function buildCSS() {
  let css = fs.readFileSync(path.join(root, 'src/styles/index.css'), 'utf8');
  css = css.replace('@import "tailwindcss";', '@tailwind utilities;');
  const compiled = await tailwind.compile(css);
  return compiled.build([]);
}

function clientScript() {
  return `
<script>
(() => {
  const nav = document.querySelector('.site-nav');
  const onScroll = () => nav && nav.classList.toggle('site-nav--scrolled', window.scrollY > 18);
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  const button = document.querySelector('.menu-button');
  const source = document.querySelector('.site-nav__links');
  button?.addEventListener('click', () => {
    let mobile = document.querySelector('.mobile-nav');
    if (mobile) { mobile.remove(); document.body.style.overflow=''; button.setAttribute('aria-expanded','false'); return; }
    mobile = document.createElement('div'); mobile.className='mobile-nav';
    const inner = document.createElement('nav'); inner.className='shell mobile-nav__links';
    inner.innerHTML = source ? source.innerHTML : '';
    mobile.append(inner); nav?.append(mobile); document.body.style.overflow='hidden'; button.setAttribute('aria-expanded','true');
    inner.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { mobile.remove(); document.body.style.overflow=''; button.setAttribute('aria-expanded','false'); }));
  });
  document.querySelectorAll('.market-category').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('.market-category').forEach(el => el.classList.remove('market-category--active'));
    btn.classList.add('market-category--active');
    const label = btn.querySelector('span')?.textContent;
    const target = document.querySelector('.market-results__header strong'); if (label && target) target.textContent=label;
  }));
})();
</script>`;
}

(async () => {
  const dist = path.join(root, 'dist');
  fs.rmSync(dist, { recursive: true, force: true });
  fs.mkdirSync(path.join(dist, 'assets'), { recursive: true });

  const appModule = require(path.join(root, 'src/App.tsx'));
  const body = render(jsx(appModule.default, {}));
  const css = await buildCSS();
  fs.writeFileSync(path.join(dist, 'assets/site.css'), css);
  fs.copyFileSync(path.join(root, 'src/assets/nigeriamart-icon.png'), path.join(dist, 'assets/nigeriamart-icon.png'));
  fs.copyFileSync(path.join(root, 'public/favicon.png'), path.join(dist, 'favicon.png'));
  fs.copyFileSync(path.join(root, 'public/privacy.html'), path.join(dist, 'privacy.html'));
  fs.writeFileSync(path.join(dist, '.nojekyll'), '');

  const html = `<!doctype html>
<html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>NigeriaMart — Nigeria's B2B Marketplace</title>
<meta name="description" content="NigeriaMart is building a digital B2B marketplace connecting buyers, suppliers, manufacturers and businesses across Nigeria.">
<meta name="theme-color" content="#071A16"><meta name="robots" content="index,follow">
<link rel="canonical" href="https://unon4all.github.io/nigeriamart-website/"><link rel="icon" type="image/png" href="/nigeriamart-website/favicon.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/nigeriamart-website/assets/site.css">
<meta property="og:type" content="website"><meta property="og:url" content="https://unon4all.github.io/nigeriamart-website/"><meta property="og:title" content="NigeriaMart — Nigeria's B2B Marketplace"><meta property="og:description" content="Building Nigeria's next-generation B2B marketplace for business discovery, sourcing and supplier connections.">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="NigeriaMart — Nigeria's B2B Marketplace"><meta name="twitter:description" content="Building Nigeria's next-generation B2B marketplace.">
</head><body><div id="root">${body}</div>${clientScript()}</body></html>`;
  fs.writeFileSync(path.join(dist, 'index.html'), html);
  console.log(`Offline verification build complete: ${Math.round(Buffer.byteLength(html)/1024)} KB HTML, ${Math.round(Buffer.byteLength(css)/1024)} KB CSS.`);
})();
