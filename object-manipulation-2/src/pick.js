'use strict';
/* exported pick */
function pick(source, keys) {
  const picks = {};
  for (const index in keys) {
    const key = keys[index];
    if (key in source && source[key] !== undefined) {
      picks[key] = source[key];
    }
  }

  return picks;
}
