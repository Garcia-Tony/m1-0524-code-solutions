'use strict';
/* exported ransomCase */
function ransomCase(string) {
  let ransom = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransom += string[i].toLowerCase();
    } else {
      ransom += string[i].toUpperCase();
    }
  }
  return ransom;
}
