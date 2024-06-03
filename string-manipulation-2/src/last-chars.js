'use strict';
/* exported lastChars */
function lastChars(length, string) {
  let char = '';
  for (let i = string.length - length; i < string.length; i++) {
    char += string[i];
  }
  if (string.length < length) {
    return string;
  } else {
    return char;
  }
}
