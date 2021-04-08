// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"35Ak2":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "65a025f17fb723dc60b97ff928d1c141";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"5VhgN":[function(require,module,exports) {
const localQuotes = [
  {
    text:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
  },
  {
    text: "You can observe a lot just by watching.",
    author: "Yogi Berra",
  },
  {
    text: "A house divided against itself cannot stand.",
    author: "Abraham Lincoln",
  },
  {
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "Fate is in your hands and no one elses",
    author: "Byron Pulsifer",
  },
  {
    text: "Be the chief but never the lord.",
    author: "Lao Tzu",
  },
  {
    text: "Nothing happens unless first we dream.",
    author: "Carl Sandburg",
  },
  {
    text: "Well begun is half done.",
    author: "Aristotle",
  },
  {
    text: "Life is a learning experience, only if you learn.",
    author: "Yogi Berra",
  },
  {
    text: "Self-complacency is fatal to progress.",
    author: "Margaret Sangster",
  },
  {
    text: "Peace comes from within. Do not seek it without.",
    author: "Buddha",
  },
  {
    text: "What you give is what you get.",
    author: "Byron Pulsifer",
  },
  {
    text: "We can only learn to love by loving.",
    author: "Iris Murdoch",
  },
  {
    text: "Life is change. Growth is optional. Choose wisely.",
    author: "Karen Clark",
  },
  {
    text: "You'll see it when you believe it.",
    author: "Wayne Dyer",
  },
  {
    text: "Today is the tomorrow we worried about yesterday.",
    author: null,
  },
  {
    text: "It's easier to see the mistakes on someone else's paper.",
    author: null,
  },
  {
    text: "Every man dies. Not every man really lives.",
    author: null,
  },
  {
    text: "To lead people walk behind them.",
    author: "Lao Tzu",
  },
  {
    text: "Having nothing, nothing can he lose.",
    author: "William Shakespeare",
  },
  {
    text: "Trouble is only opportunity in work clothes.",
    author: "Henry J. Kaiser",
  },
  {
    text: "A rolling stone gathers no moss.",
    author: "Publilius Syrus",
  },
  {
    text: "Ideas are the beginning points of all fortunes.",
    author: "Napoleon Hill",
  },
  {
    text: "Everything in life is luck.",
    author: "Donald Trump",
  },
  {
    text: "Doing nothing is better than being busy doing nothing.",
    author: "Lao Tzu",
  },
  {
    text: "Trust yourself. You know more than you think you do.",
    author: "Benjamin Spock",
  },
  {
    text: "Study the past, if you would divine the future.",
    author: "Confucius",
  },
  {
    text: "The day is already blessed, find peace within it.",
    author: null,
  },
  {
    text: "From error to error one discovers the entire truth.",
    author: "Sigmund Freud",
  },
  {
    text: "Well done is better than well said.",
    author: "Benjamin Franklin",
  },
  {
    text: "Bite off more than you can chew, then chew it.",
    author: "Ella Williams",
  },
  {
    text: "Work out your own salvation. Do not depend on others.",
    author: "Buddha",
  },
  {
    text: "One today is worth two tomorrows.",
    author: "Benjamin Franklin",
  },
  {
    text: "Once you choose hope, anythings possible.",
    author: "Christopher Reeve",
  },
  {
    text: "God always takes the simplest way.",
    author: "Albert Einstein",
  },
  {
    text: "One fails forward toward success.",
    author: "Charles Kettering",
  },
  {
    text: "From small beginnings come great things.",
    author: null,
  },
  {
    text: "Learning is a treasure that will follow its owner everywhere",
    author: "Chinese proverb",
  },
  {
    text: "Be as you wish to seem.",
    author: "Socrates",
  },
  {
    text: "The world is always in movement.",
    author: "V. Naipaul",
  },
  {
    text: "Never mistake activity for achievement.",
    author: "John Wooden",
  },
  {
    text: "What worries you masters you.",
    author: "Haddon Robinson",
  },
  {
    text: "One faces the future with ones past.",
    author: "Pearl Buck",
  },
  {
    text: "Goals are the fuel in the furnace of achievement.",
    author: "Brian Tracy",
  },
  {
    text: "Who sows virtue reaps honour.",
    author: "Leonardo da Vinci",
  },
  {
    text: "Be kind whenever possible. It is always possible.",
    author: "Dalai Lama",
  },
  {
    text: "Talk doesn't cook rice.",
    author: "Chinese proverb",
  },
  {
    text: "He is able who thinks he is able.",
    author: "Buddha",
  },
  {
    text: "A goal without a plan is just a wish.",
    author: "Larry Elder",
  },
  {
    text: "To succeed, we must first believe that we can.",
    author: "Michael Korda",
  },
  {
    text: "Learn from yesterday, live for today, hope for tomorrow.",
    author: "Albert Einstein",
  },
  {
    text: "A weed is no more than a flower in disguise.",
    author: "James Lowell",
  },
  {
    text: "Do, or do not. There is no try.",
    author: "Yoda",
  },
  {
    text: "All serious daring starts from within.",
    author: "Harriet Beecher Stowe",
  },
  {
    text: "The best teacher is experience learned from failures.",
    author: "Byron Pulsifer",
  },
  {
    text: "Think how hard physics would be if particles could think.",
    author: "Murray Gell-Mann",
  },
  {
    text: "Love is the flower you've got to let grow.",
    author: "John Lennon",
  },
  {
    text: "Don't wait. The time will never be just right.",
    author: "Napoleon Hill",
  },
  {
    text: "Time is the wisest counsellor of all.",
    author: "Pericles",
  },
  {
    text: "You give before you get.",
    author: "Napoleon Hill",
  },
  {
    text: "Wisdom begins in wonder.",
    author: "Socrates",
  },
  {
    text: "Without courage, wisdom bears no fruit.",
    author: "Baltasar Gracian",
  },
  {
    text: "Change in all things is sweet.",
    author: "Aristotle",
  },
  {
    text: "What you fear is that which requires action to overcome.",
    author: "Byron Pulsifer",
  },
  {
    text: "When performance exceeds ambition, the overlap is called success.",
    author: "Cullen Hightower",
  },
  {
    text: "When deeds speak, words are nothing.",
    author: "African proverb",
  },
  {
    text:
      "Real magic in relationships means an absence of judgement of others.",
    author: "Wayne Dyer",
  },
  {
    text: "I never think of the future. It comes soon enough.",
    author: "Albert Einstein",
  },
  {
    text: "Skill to do comes of doing.",
    author: "Ralph Emerson",
  },
  {
    text: "Wisdom is the supreme part of happiness.",
    author: "Sophocles",
  },
  {
    text: "I believe that every person is born with talent.",
    author: "Maya Angelou",
  },
  {
    text: "Important principles may, and must, be inflexible.",
    author: "Abraham Lincoln",
  },
  {
    text: "The undertaking of a new action brings new strength.",
    author: "Richard Evans",
  },
  {
    text: "The years teach much which the days never know.",
    author: "Ralph Emerson",
  },
  {
    text: "Our distrust is very expensive.",
    author: "Ralph Emerson",
  },
  {
    text: "All know the way; few actually walk it.",
    author: "Bodhidharma",
  },
  {
    text: "Great talent finds happiness in execution.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "Faith in oneself is the best and safest course.",
    author: "Michelangelo",
  },
  {
    text: "Courage is going from failure to failure without losing enthusiasm.",
    author: "Winston Churchill",
  },
  {
    text: "The two most powerful warriors are patience and time.",
    author: "Leo Tolstoy",
  },
  {
    text: "Anticipate the difficult by managing the easy.",
    author: "Lao Tzu",
  },
  {
    text: "Those who are free of resentful thoughts surely find peace.",
    author: "Buddha",
  },
  {
    text: "A short saying often contains much wisdom.",
    author: "Sophocles",
  },
  {
    text: "It takes both sunshine and rain to make a rainbow.",
    author: null,
  },
  {
    text: "A beautiful thing is never perfect.",
    author: null,
  },
  {
    text: "Only do what your heart tells you.",
    author: "Princess Diana",
  },
  {
    text: "Life is movement-we breathe, we eat, we walk, we move!",
    author: "John Pierrakos",
  },
  {
    text: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Argue for your limitations, and sure enough theyre yours.",
    author: "Richard Bach",
  },
  {
    text: "Luck is what happens when preparation meets opportunity.",
    author: "Seneca",
  },
  {
    text: "Victory belongs to the most persevering.",
    author: "Napoleon Bonaparte",
  },
  {
    text: "Love all, trust a few, do wrong to none.",
    author: "William Shakespeare",
  },
  {
    text: "In order to win, you must expect to win.",
    author: "Richard Bach",
  },
  {
    text: "A goal is a dream with a deadline.",
    author: "Napoleon Hill",
  },
  {
    text: "You can do it if you believe you can!",
    author: "Napoleon Hill",
  },
  {
    text: "Set your goals high, and don't stop till you get there.",
    author: "Bo Jackson",
  },
  {
    text: "Every new day is another chance to change your life.",
    author: null,
  },
  {
    text: "Smile, breathe, and go slowly.",
    author: "Thich Nhat Hanh",
  },
  {
    text: "Nobody will believe in you unless you believe in yourself.",
    author: "Liberace",
  },
  {
    text: "Do more than dream: work.",
    author: "William Arthur Ward",
  },
  {
    text: "No man was ever wise by chance.",
    author: "Seneca",
  },
  {
    text: "Some pursue happiness, others create it.",
    author: null,
  },
  {
    text: "He that is giddy thinks the world turns round.",
    author: "William Shakespeare",
  },
  {
    text: "Don't ruin the present with the ruined past.",
    author: "Ellen Gilchrist",
  },
  {
    text: "Do something wonderful, people may imitate it.",
    author: "Albert Schweitzer",
  },
  {
    text: "We do what we do because we believe.",
    author: null,
  },
  {
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "If you cannot be silent be brilliant and thoughtful.",
    author: "Byron Pulsifer",
  },
  {
    text: "Who looks outside, dreams; who looks inside, awakes.",
    author: "Carl Jung",
  },
  {
    text: "What we think, we become.",
    author: "Buddha",
  },
  {
    text: "The shortest answer is doing.",
    author: "Lord Herbert",
  },
  {
    text: "All our knowledge has its origins in our perceptions.",
    author: "Leonardo da Vinci",
  },
  {
    text: "The harder you fall, the higher you bounce.",
    author: null,
  },
  {
    text: "Trusting our intuition often saves us from disaster.",
    author: "Anne Wilson Schaef",
  },
  {
    text: "Truth is powerful and it prevails.",
    author: "Sojourner Truth",
  },
  {
    text: "Light tomorrow with today!",
    author: "Elizabeth Browning",
  },
  {
    text: "Silence is a fence around wisdom.",
    author: "German proverb",
  },
  {
    text: "Society develops wit, but its contemplation alone forms genius.",
    author: "Madame de Stael",
  },
  {
    text: "The simplest things are often the truest.",
    author: "Richard Bach",
  },
  {
    text: "Everyone smiles in the same language.",
    author: null,
  },
  {
    text: "Yesterday I dared to struggle. Today I dare to win.",
    author: "Bernadette Devlin",
  },
  {
    text: "No alibi will save you from accepting the responsibility.",
    author: "Napoleon Hill",
  },
  {
    text: "If you can dream it, you can do it.",
    author: "Walt Disney",
  },
  {
    text: "It is better to travel well than to arrive.",
    author: "Buddha",
  },
  {
    text: "Life shrinks or expands in proportion to one's courage.",
    author: "Anais Nin",
  },
  {
    text: "You have to believe in yourself.",
    author: "Sun Tzu",
  },
  {
    text: "Our intention creates our reality.",
    author: "Wayne Dyer",
  },
  {
    text: "Silence is a true friend who never betrays.",
    author: "Confucius",
  },
  {
    text: "Character develops itself in the stream of life.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "From little acorns mighty oaks do grow.",
    author: "American proverb",
  },
  {
    text: "You can't stop the waves, but you can learn to surf.",
    author: "Jon Kabat-Zinn",
  },
  {
    text: "Reality does not conform to the ideal, but confirms it.",
    author: "Gustave Flaubert",
  },
  {
    text: "Speak low, if you speak love.",
    author: "William Shakespeare",
  },
  {
    text: "A really great talent finds its happiness in execution.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "Reality leaves a lot to the imagination.",
    author: "John Lennon",
  },
  {
    text: "The greatest remedy for anger is delay.",
    author: "Seneca",
  },
  {
    text: "Growth itself contains the germ of happiness.",
    author: "Pearl Buck",
  },
  {
    text: "You can do what's reasonable or you can decide what's possible.",
    author: null,
  },
];

},{}]},["35Ak2","5VhgN"], "5VhgN", "parcelRequirec82d")

//# sourceMappingURL=index.28d1c141.js.map
