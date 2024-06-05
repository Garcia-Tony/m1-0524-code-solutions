'use strict';
/* exported capitalizeWords */
function capitalizeWords(word) {
  let words = '';
  words += word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    if (word[i - 1] === ' ') {
      words += word[i].toUpperCase();
    } else {
      words += word[i].toLowerCase();
    }
  }
  return words;
}
