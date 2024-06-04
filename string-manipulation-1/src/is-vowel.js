'use strict';
/* exported isVowel */
function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < vowels.length; i++)
    if (vowels[i] === char) {
      return true;
    }
  return false;
}
