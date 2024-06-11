'use strict';
/* exported invert */
function invert(source) {
  const inverted = {};
  for (const key in source) {
    const value = source[key];
    if (typeof value === 'number' && typeof value === 'string') {
      inverted[key] = value;
    }
    inverted[value] = key;
  }
  return inverted;
}
