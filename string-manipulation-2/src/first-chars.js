'use strict';
/* exported firstChars */
function firstChars(length, string) {
  let char = '';
  for (let i = 0; i < length; i++) {
    char += string[i];
  }
  if (string.length < length) {
    return string;
  } else {
    return char;
  }
}
