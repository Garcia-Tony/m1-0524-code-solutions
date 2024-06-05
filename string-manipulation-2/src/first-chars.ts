/* exported firstChars */
function firstChars(length: number, string: string): any {
  let char: any = '';
  for (let i = 0; i < length; i++) {
    char += string[i];
  }
  if (string.length < length) {
    return string;
  } else {
    return char;
  }
}
