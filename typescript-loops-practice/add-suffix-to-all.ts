/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: any): any[] {
  const suffixs: any[] = [];
  for (let i = 0; i < words.length; i++) {
    suffixs.push(words[i] + suffix);
  }
  return suffixs;
}
