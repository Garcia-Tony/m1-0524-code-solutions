'use strict';
/* exported truncate */
function truncate(length, string) {
  let short = '';
  for (let i = 0; i < length; i++) {
    short += string[i];
  }
  if (string.length < length) {
    return string + '...';
  } else {
    return short + '...';
  }
}
