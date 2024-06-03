/* exported ransomCase */
function ransomCase(string: string): string {
  let ransom: string = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransom += string[i].toLowerCase();
    } else {
      ransom += string[i].toUpperCase();
    }
  }
  return ransom;
}
