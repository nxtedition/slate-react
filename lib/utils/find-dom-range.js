'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _findDomPoint = require('./find-dom-point');

var _findDomPoint2 = _interopRequireDefault(_findDomPoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Find a native DOM range Slate `range`.
 *
 * @param {Range} range
 * @return {Object|Null}
 */

function findDOMRange(range, window) {
  var anchorKey = range.anchorKey,
      anchorOffset = range.anchorOffset,
      focusKey = range.focusKey,
      focusOffset = range.focusOffset,
      isBackward = range.isBackward,
      isCollapsed = range.isCollapsed;

  var anchor = (0, _findDomPoint2.default)(anchorKey, anchorOffset, window);
  var focus = isCollapsed ? anchor : (0, _findDomPoint2.default)(focusKey, focusOffset, window);
  if (!anchor || !focus) return null;

  var r = window.document.createRange();
  var start = isBackward ? focus : anchor;
  var end = isBackward ? anchor : focus;
  r.setStart(start.node, start.offset);
  r.setEnd(end.node, end.offset);
  return r;
}

/**
 * Export.
 *
 * @type {Function}
 */

exports.default = findDOMRange;