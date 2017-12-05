'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _findDomNode = require('./find-dom-node');

var _findDomNode2 = _interopRequireDefault(_findDomNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Find a native DOM selection point from a Slate `key` and `offset`.
 *
 * @param {Element} root
 * @param {String} key
 * @param {Number} offset
 * @return {Object}
 */

function findDOMPoint(key, offset, window) {
  var el = (0, _findDomNode2.default)(key, window);
  var start = 0;
  var n = void 0;

  // COMPAT: In IE, this method's arguments are not optional, so we have to
  // pass in all four even though the last two are defaults. (2017/10/25)
  var iterator = window.document.createNodeIterator(el, NodeFilter.SHOW_TEXT, function () {
    return NodeFilter.FILTER_ACCEPT;
  }, false);

  while (n = iterator.nextNode()) {
    var length = n.textContent.length;

    var end = start + length;

    if (offset <= end) {
      var o = offset - start;
      return { node: n, offset: o };
    }

    start = end;
  }

  return null;
}

/**
 * Export.
 *
 * @type {Function}
 */

exports.default = findDOMPoint;