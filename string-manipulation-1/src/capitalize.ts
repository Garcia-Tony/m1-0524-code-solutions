/* exported capitalize */
function capitalize(word: string): string {
  const firstLetter = word[0].toUpperCase();
  const restOfName = word.slice(1).toLowerCase();
  return firstLetter + restOfName;
}
