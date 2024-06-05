'use strict';
/* exported numVowels */
function numVowels(string) {
  let vowel = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < string.length; i++) {
    for (let index = 0; index < vowels.length; index++) {
      if (string[i] === vowels[index]) {
        vowel++;
      }
    }
  }
  return vowel;
}
