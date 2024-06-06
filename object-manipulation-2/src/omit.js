'use strict';
/* exported omit */
function omit(source, keys) {
  const omits = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      omits[key] = source[key];
    }
  }
  return omits;
}
