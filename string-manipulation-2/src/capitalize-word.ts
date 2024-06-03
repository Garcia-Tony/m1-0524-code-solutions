/* exported capitalizeWord */
function capitalizeWord(word: string): string {
  const firstLetter = word[0].toUpperCase();
  const restOfName = word.slice(1).toLowerCase();

  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  return firstLetter + restOfName;
}
