/* exported isUpperCased */
function isUpperCased(word: string): boolean {
  if (word === word.toUpperCase()) {
    return true;
  }
  return false;
}
