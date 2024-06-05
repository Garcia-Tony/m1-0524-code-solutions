'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let char = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      char += string[secondIndex];
    } else if (i === secondIndex) {
      char += string[firstIndex];
    } else {
      char += string[i];
    }
  }
  return char;
}
